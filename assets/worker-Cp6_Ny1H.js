function e(e){let t=``,n=0;for(;n<e.length;){let r=e.charAt(n),i=e.charAt(n+1);if(r===`-`&&i===`-`){for(;n<e.length&&e.charAt(n)!==`
`;)n++;t+=` `;continue}if(r===`/`&&i===`*`){for(n+=2;n<e.length&&(e.charAt(n)!==`*`||e.charAt(n+1)!==`/`);)n++;n+=2,t+=` `;continue}if(r===`'`||r===`"`||r==="`"){for(n++;n<e.length;){if(e.charAt(n)===r){if(e.charAt(n+1)===r){n+=2;continue}n++;break}n++}t+=` `;continue}if(r===`[`){for(;n<e.length&&e.charAt(n)!==`]`;)n++;n++,t+=` `;continue}t+=r,n++}return t}function t(t){let n=[],r=0,i=0,a=0,o=i=>{let o=t.slice(r,i),s=o.trim();if(s!==``&&e(s).trim()!==``){let e=o.length-o.trimStart().length;n.push({sql:s,inicio:r+e,fim:r+e+s.length})}r=i+1,a=0};for(;i<t.length;){let e=t.charAt(i),n=t.charAt(i+1);if(e===`-`&&n===`-`){for(;i<t.length&&t.charAt(i)!==`
`;)i++;continue}if(e===`/`&&n===`*`){for(i+=2;i<t.length&&(t.charAt(i)!==`*`||t.charAt(i+1)!==`/`);)i++;i+=2;continue}if(e===`'`||e===`"`||e==="`"){for(i++;i<t.length;){if(t.charAt(i)===e){if(t.charAt(i+1)===e){i+=2;continue}i++;break}i++}continue}if(e===`[`){for(;i<t.length&&t.charAt(i)!==`]`;)i++;i++;continue}if(e===`;`){if(a===0){o(i),i++;continue}i++;continue}let s=/^[A-Za-z_][A-Za-z_0-9]*/.exec(t.slice(i))?.[0];if(s!==void 0){let e=s.toUpperCase();(e===`BEGIN`&&t.slice(r,i).trim()!==``||e===`CASE`)&&a++,e===`END`&&a>0&&a--,i+=s.length;continue}i++}return o(t.length),n}const n={nucleo:`-- O esquema do banco do Kobi Admin — \`var/banco/bioma.sqlite\`.
--
-- Este arquivo descreve o ALVO: como o banco tem de estar quando todas as
-- migrações já rodaram. Ele não é um roteiro de migração, e não descreve o
-- caminho de nenhum banco em campo até aqui — o passo não-trivial (recriar e
-- copiar, que é o que o SQLite exige de quem mexe numa restrição) continua
-- escrito à mão, em \`apps/admin/src/db/worker.ts\`. O que o canônico mata é a
-- lista de números duplicada e o "campo que entrou num lugar e não no outro".
--
-- ## Quem lê este arquivo
--
-- Ele é a fonte de quatro coisas, e por isso o formato importa:
--
-- 1. o DDL que o migrador do Kobi Admin aplica num banco novo;
-- 2. o DDL que \`scripts/banco.ts\` aplica ao criar o arquivo de fora do
--    navegador;
-- 3. os tipos de \`db/tipos.ts\`, gerados de \`PRAGMA table_info\` — em STRICT a
--    declaração é a verdade, e a prosa ao lado de cada coluna VIRA o comentário
--    do campo no TypeScript;
-- 4. a conferência de esquema aplicado × descrito (\`conferirEsquema\`), que é o
--    que acusa a coluna que entrou num lugar e não no outro.
--
-- ## Duas regras de escrita, e as duas mordem quem as ignora
--
-- **\`IF NOT EXISTS\` em tudo.** O mesmo comando é aplicado pelos dois caminhos —
-- a migração de origem, que faz um arquivo em branco nascer completo, e a
-- migração própria de cada tabela nova, que alcança o banco que já está em
-- campo. Num arquivo em branco as duas rodam em sequência, e sem isto a segunda
-- aborta com "table already exists".
--
-- **A ordem das colunas é a do banco, e não a que ficaria bonita.** Uma coluna
-- que chegou por \`ALTER TABLE ADD COLUMN\` fica no FIM da tabela, para sempre —
-- é o caso de \`not_calendario_tipos.publicar\`, \`not_criacao_modulos.imagem\` e
-- \`not_cronologia_eventos.ordem_no_ano\`. Movê-las aqui para junto das irmãs
-- deixaria o descrito e o aplicado divergindo na primeira conferência, sobre um
-- banco que está certo.
--
-- ## O que NÃO está aqui
--
-- A busca do acervo (as sete tabelas FTS5, os vinte e um gatilhos, os sete
-- \`fts5vocab\` e os índices parciais de \`publicar\`) é **gerada** de
-- \`ACERVOS_BUSCAVEIS\`, em \`db/busca.ts\`. Ela é derivada do acervo e
-- reconstruível a qualquer momento; escrevê-la à mão aqui seria uma segunda
-- fonte para a mesma verdade. A conferência sabe disso e compõe as duas.
--
-- **E o resto da bancada também não está aqui**, pelo mesmo motivo — ver
-- abaixo.
--
-- ## A bancada (Fase 9)
--
-- O banco do Kobi Admin é a **bancada**: toda tabela que o Kobi Note e o Kobi
-- Flow descrevem existe também nele, para que se possa olhar e mexer no dado
-- dos dois de fora do aparelho. Elas **não são copiadas para cá**: quem as
-- junta é \`descricaoDe('nucleo')\`, que lê este arquivo e, depois dele, tudo o
-- que \`note.sql\` e \`flow.sql\` descrevem e que este arquivo ainda não tem.
-- Copiar as mil e seiscentas linhas dos outros dois seria refazer, dentro do
-- canônico, a duplicação que a Fase 7 veio desfazer — e a divergência
-- apareceria na primeira coluna que alguém acrescentasse num lado só.
--
-- **O que está escrito aqui vence.** Catorze objetos têm o mesmo nome nos dois
-- lados, e são as tabelas do acervo curado: aqui elas nascem com \`publicar\` e
-- com os carimbos de data, lá elas são a cópia publicada. Cinco delas
-- discordavam em coluna, e o que este arquivo descreve é a **união** — o
-- \`id_global\` de três, o \`data_vencimento\` da despensa, o \`anterior_id\`/
-- \`proximo_id\` da poesia e o \`criado_em\` da resposta rápida. Quem leva o banco
-- em campo até a união é a migração 8, que recria as três tabelas do
-- \`id_global\`: o \`DEFAULT (uuid_blob(uuid7()))\` não é constante, e
-- \`ALTER TABLE ADD COLUMN\` recusa padrão que não seja.
--
-- **E é o \`uuid_blob\` que tira deste arquivo a última promessa de SQLite de
-- fábrica.** Ler o banco num SQLite comum continua funcionando; INSERIR nessas
-- três tabelas, não — a função é nossa. Quem semeia de fora do navegador
-- (\`scripts/banco.ts\`) passa o \`id_global\` explícito por isso.

CREATE TABLE IF NOT EXISTS bioma_esquema (
  versao      INTEGER PRIMARY KEY,                                    -- o número da migração aplicada
  aplicado_em TEXT    NOT NULL DEFAULT (datetime('now', 'localtime')) -- texto 'YYYY-MM-DD HH:MM:SS' (hora local)
) STRICT;

-- O que se vende, e a origem da lista do formulário de emissão de licença.
--
-- \`chave\` é o identificador que ENTRA na licença — é este texto que o alvo
-- compara para saber se está destravado, e é por isso que ele é UNIQUE: duas
-- linhas com a mesma chave ofereceriam duas vezes a mesma coisa com nomes
-- diferentes. As três chaves dos produtos vendidos à parte têm de casar letra
-- por letra com o mapa \`produtos()\` de \`apps/flow/src/app/produtos.ts\`.
CREATE TABLE IF NOT EXISTS flw_produtos (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  chave            TEXT    NOT NULL UNIQUE,  -- o que viaja dentro do payload assinado (\`kobi-flow-rh\`, …)
  nome             TEXT    NOT NULL,         -- o nome comercial, que é o que a tela mostra
  descricao        TEXT    NOT NULL DEFAULT '',
  preco            INTEGER NOT NULL DEFAULT 0, -- em **centavos**, como todo dinheiro do projeto; 0 é "sob consulta"
  ativo            INTEGER NOT NULL DEFAULT 1, -- booleano 0 | 1 — fora de linha some do formulário de emissão
  ordem            INTEGER NOT NULL DEFAULT 0,
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0  -- epoch em milissegundos
) STRICT;

-- As licenças emitidas. O payload assinado mora em \`chave\`.
CREATE TABLE IF NOT EXISTS flw_licencas (
  id           INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  cliente      TEXT    NOT NULL,
  email        TEXT    NOT NULL,
  produto      TEXT    NOT NULL DEFAULT 'kobi-flow', -- o que a chave destrava — ver \`PayloadDeLicenca\` em \`licencas/\`
  tipo         TEXT    NOT NULL DEFAULT 'regular',
  expira_em    INTEGER NOT NULL,                     -- epoch em milissegundos; **0 é sem prazo**
  chave        TEXT    NOT NULL,                     -- a licença assinada: \`base64url(payload).base64url(assinatura)\`
  observacao   TEXT    NOT NULL DEFAULT '',
  data_criacao INTEGER NOT NULL                      -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS flw_respostas_rapidas (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  atalho           TEXT    NOT NULL,
  texto            TEXT    NOT NULL,
  nicho            TEXT    NOT NULL DEFAULT 'geral',
  idioma           TEXT    NOT NULL DEFAULT 'pt',
  ordem            INTEGER NOT NULL DEFAULT 0,
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL,           -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL,           -- epoch em milissegundos
  criado_em        INTEGER NOT NULL DEFAULT 0  -- epoch em milissegundos; é o carimbo que o Kobi Flow grava na resposta, e não o desta bancada
) STRICT;

CREATE TABLE IF NOT EXISTS flw_traducoes (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  chave            TEXT    NOT NULL UNIQUE,
  pt               TEXT    NOT NULL DEFAULT '',
  es               TEXT    NOT NULL DEFAULT '',
  en               TEXT    NOT NULL DEFAULT '',
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL,           -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL            -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_anotacao_modelos (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  chave            TEXT    NOT NULL UNIQUE,
  rotulo           TEXT    NOT NULL,
  conteudo         TEXT    NOT NULL DEFAULT '',
  ordem            INTEGER NOT NULL DEFAULT 0,
  publicar         INTEGER NOT NULL DEFAULT 1, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0  -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_calendario_tipos (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())), -- o id que não colide entre aparelhos; ver "A bancada", no topo
  nome           TEXT    NOT NULL,
  cor_chave      TEXT    NOT NULL,
  icone          TEXT    NOT NULL,
  ordem          INTEGER NOT NULL DEFAULT 0,
  marca_especial INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  publicar       INTEGER NOT NULL DEFAULT 1, -- booleano 0 | 1
  CHECK (length(id_global) = 16)
) STRICT;

-- O catálogo de categorias que o Kobi Note recebe pronto, na primeira abertura.
--
-- **\`limite_mensal\` é CENTAVO**, e era \`REAL\` em reais até a migração 7. Ele
-- viaja para o aparelho pelo \`categorias.json\` e é comparado, lá, com a soma de
-- \`not_transacoes.valor\` — que também é centavo desde a mesma passada. Duas
-- escalas nas duas pontas de um mesmo JSON não dariam erro nenhum: dariam um
-- teto cem vezes menor do que o que a curadoria digitou. Quem escreve reais na
-- tela do admin é \`aoCarregar\`/\`normalizar\` da entidade, e só ela.
CREATE TABLE IF NOT EXISTS not_categorias_financeiro (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())), -- o id que não colide entre aparelhos; ver "A bancada", no topo
  nome          TEXT    NOT NULL,
  icone         TEXT    NOT NULL,
  hex_cor       TEXT    NOT NULL,
  limite_mensal INTEGER NOT NULL DEFAULT 0, -- em centavos; 0 é sem limite
  publicar      INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  CHECK (length(id_global) = 16)
) STRICT;

-- Os ajustes desta instalação do admin, e só dela.
--
-- É aqui que moram o par Ed25519 do emissor de licenças e o token de publicação
-- do Kobi Note — **e não existe semente desta tabela**. Recriar o banco pelas
-- sementes reproduz todo o resto e perde estas linhas; ver o CLAUDE.md.
CREATE TABLE IF NOT EXISTS not_configuracoes (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  chave       TEXT    NOT NULL UNIQUE,
  valor       TEXT,
  criado_em   TEXT    NOT NULL DEFAULT (datetime('now', 'localtime')), -- texto 'YYYY-MM-DD HH:MM:SS' (hora local)
  alterado_em TEXT                                                     -- texto 'YYYY-MM-DD HH:MM:SS' (hora local)
) STRICT;

CREATE TABLE IF NOT EXISTS not_criacao_modulos (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',
  categoria        TEXT    NOT NULL DEFAULT '',
  tipo             TEXT    NOT NULL DEFAULT '',
  icone            TEXT    NOT NULL DEFAULT 'compass',
  ordem            INTEGER NOT NULL DEFAULT 0,
  conceito         TEXT    NOT NULL DEFAULT '',
  desafio          TEXT    NOT NULL DEFAULT '',
  reflexao         TEXT    NOT NULL DEFAULT '',
  referencia       TEXT    NOT NULL DEFAULT '',
  link_jw          TEXT    NOT NULL DEFAULT 'https://www.jw.org/pt/ensinos-biblicos/ciencia/teve-um-projeto/',
  config           TEXT    NOT NULL DEFAULT '{}', -- JSON lido sempre junto com a linha, nunca consultado sozinho
  xp               INTEGER NOT NULL DEFAULT 100,
  publicar         INTEGER NOT NULL DEFAULT 0,    -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  imagem           TEXT    NOT NULL DEFAULT ''
) STRICT;

CREATE TABLE IF NOT EXISTS not_cronologia_eventos (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  trilha           TEXT    NOT NULL DEFAULT 'biblica',
  era              TEXT    NOT NULL DEFAULT 'AEC',
  ano_inicio       INTEGER NOT NULL DEFAULT 0,
  ano_fim          INTEGER NOT NULL DEFAULT 0,
  ordem_absoluta   INTEGER NOT NULL DEFAULT 0,
  precisao         TEXT    NOT NULL DEFAULT 'exato',
  periodo          TEXT    NOT NULL DEFAULT '',
  titulo           TEXT    NOT NULL DEFAULT '',
  resumo           TEXT    NOT NULL DEFAULT '',
  referencia       TEXT    NOT NULL DEFAULT '',
  link_fonte       TEXT    NOT NULL DEFAULT '',
  obra_fonte       TEXT    NOT NULL DEFAULT '',
  icone            TEXT    NOT NULL DEFAULT 'point',
  destaque         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  ordem_no_ano     INTEGER NOT NULL DEFAULT 0  -- desempate dentro do ano: o ano não ordena o que aconteceu dentro dele
) STRICT;

-- O catálogo de alimentos que o Kobi Note recebe pronto — e, desde a bancada da
-- Fase 9, a despensa do aparelho junto.
--
-- As duas tabelas se chamavam igual nos dois bancos e guardavam coisas
-- diferentes: aqui, o item de catálogo (\`validade_meses\`, \`ordem\`, \`publicar\`);
-- lá, o item que a pessoa tem em casa (\`data_vencimento\`). Esta é a UNIÃO das
-- duas, e é a única das cinco colisões em que os dois lados discordam de
-- verdade — a curadoria continua preenchendo o que já preenchia, e o que veio
-- do Kobi Note são as duas colunas de ponta.
CREATE TABLE IF NOT EXISTS not_estoque_alimentos (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())), -- o id que não colide entre aparelhos; ver "A bancada", no topo
  item              TEXT    NOT NULL,
  categoria         TEXT    NOT NULL,
  quantidade        INTEGER NOT NULL DEFAULT 1,
  peso_unitario     INTEGER NOT NULL DEFAULT 0,
  calorias_por_100g INTEGER NOT NULL DEFAULT 0,
  validade_meses    INTEGER NOT NULL DEFAULT 12,
  ordem             INTEGER NOT NULL DEFAULT 0,
  publicar          INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao      INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao  INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_vencimento   INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos; 0 é sem validade — é o item da despensa, e não o do catálogo
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_guias (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  titulo           TEXT    NOT NULL,
  texto            TEXT    NOT NULL,
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0  -- epoch em milissegundos
) STRICT;

-- Os cartões de "Imite a Sua Fé".
--
-- \`lentes\` e \`exemplos\` são JSON em coluna TEXT pelo mesmo motivo que
-- \`not_criacao_modulos.config\` é: são lidos SEMPRE junto com a linha e nunca
-- consultados sozinhos. Uma tabela filha com FK custaria uma segunda tela de
-- curadoria para ganhar uma consulta que ninguém faz.
CREATE TABLE IF NOT EXISTS not_imite_cartoes (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',          -- o nome do cartão — "Nossa Visão das Tarefas"
  tema             TEXT    NOT NULL DEFAULT '',          -- o assunto: o título da publicação de onde ele saiu, ou frase equivalente
  personagens      TEXT    NOT NULL DEFAULT '',          -- quem está em cena — "Marta e Maria"; vazio nos cartões sem dupla bíblica
  icone            TEXT    NOT NULL DEFAULT 'eye-check', -- nome do ícone no Kobi Kit (biblioteca \`default\`)
  ordem            INTEGER NOT NULL DEFAULT 0,
  cenario          TEXT    NOT NULL DEFAULT '',          -- o gatilho, em HTML do editor do admin
  julgamento       TEXT    NOT NULL DEFAULT '',          -- o pensamento automático que o cenário provoca
  lentes           TEXT    NOT NULL DEFAULT '[]',        -- JSON: \`Lente[]\`
  correta          TEXT    NOT NULL DEFAULT '',          -- o \`id\` da lente certa
  reenquadramento  TEXT    NOT NULL DEFAULT '',          -- a lente da boa intenção, em HTML
  referencia       TEXT    NOT NULL DEFAULT '',          -- os textos que sustentam o reenquadramento
  link_jw          TEXT    NOT NULL DEFAULT '',          -- vazio esconde o link na tela: URL inventada é pior do que nenhuma
  espelho          TEXT    NOT NULL DEFAULT '',          -- a pergunta do Reflexo no Espelho
  exemplos         TEXT    NOT NULL DEFAULT '[]',        -- JSON: \`ExemploBiblico[]\`
  publicar         INTEGER NOT NULL DEFAULT 0,           -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,           -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0            -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_itens_checklist (
  id              INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  kit_id          INTEGER NOT NULL,
  rotulo          TEXT    NOT NULL,
  quantidade      TEXT    NOT NULL DEFAULT '',
  esta_marcado    INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_vencimento INTEGER NOT NULL DEFAULT 0,
  observacoes     TEXT    NOT NULL DEFAULT '',
  publicar        INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  FOREIGN KEY(kit_id) REFERENCES not_kits_checklist(id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE TABLE IF NOT EXISTS not_kits_checklist (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  nome             TEXT    NOT NULL,
  icone            TEXT    NOT NULL,
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0  -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_logs (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  canal     TEXT    NOT NULL DEFAULT 'app',
  nivel     TEXT    NOT NULL,
  nivel_num INTEGER NOT NULL,
  mensagem  TEXT    NOT NULL,
  contexto  TEXT    NOT NULL DEFAULT '{}',                           -- JSON lido sempre junto com a linha
  criado_em TEXT    NOT NULL DEFAULT (datetime('now', 'localtime'))  -- texto 'YYYY-MM-DD HH:MM:SS' (hora local)
) STRICT;

CREATE TABLE IF NOT EXISTS not_perguntas (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  pergunta         TEXT    NOT NULL,
  referencia       TEXT    NOT NULL,
  dificuldade      INTEGER NOT NULL DEFAULT 1,
  resposta1        TEXT    NOT NULL,
  resposta2        TEXT    NOT NULL,
  resposta3        TEXT    NOT NULL,
  resposta4        TEXT    NOT NULL,
  correta          INTEGER NOT NULL DEFAULT 1, -- de 1 a 4; a tela embaralha as alternativas e compara pela origem
  explicacao       TEXT    NOT NULL DEFAULT '',
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0  -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_poesias (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  titulo           TEXT    NOT NULL,
  conteudo         TEXT    NOT NULL,
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  anterior_id      INTEGER,                    -- a poesia anterior na ordem publicada; nulo na primeira — quem as preenche é a publicação
  proximo_id       INTEGER                     -- a seguinte; nulo na última
) STRICT;

-- O acervo de "Princípios Bíblicos para a Vida Cristã".
--
-- O módulo é REFERÊNCIA, e não exercício: aqui não se escolhe, não se erra e
-- não se marca ponto. Por isso a forma da linha é a de um verbete, e não a de
-- um jogo.
CREATE TABLE IF NOT EXISTS not_principios (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',
  area             TEXT    NOT NULL DEFAULT 'coracao', -- a área da vida, pela chave de \`AREAS_PRINCIPIOS\` — catálogo FECHADO
  icone            TEXT    NOT NULL DEFAULT 'scale',   -- nome do ícone no Kobi Kit (biblioteca \`default\`)
  ordem            INTEGER NOT NULL DEFAULT 0,
  principio        TEXT    NOT NULL DEFAULT '',        -- o princípio numa frase, em texto puro — HTML aqui quebra o bloco de destaque
  referencia       TEXT    NOT NULL DEFAULT '',        -- os textos que o sustentam
  explicacao       TEXT    NOT NULL DEFAULT '',        -- por que o princípio existe, em HTML
  pratica          TEXT    NOT NULL DEFAULT '',        -- como ele se parece num dia comum, em HTML
  reflexoes        TEXT    NOT NULL DEFAULT '[]',      -- JSON: \`ReflexaoDoPrincipio[]\`
  link_jw          TEXT    NOT NULL DEFAULT '',        -- vazio esconde o link na tela: URL inventada é pior do que nenhuma
  publicar         INTEGER NOT NULL DEFAULT 0,         -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,         -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0          -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_receitas (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  titulo           TEXT    NOT NULL,
  categoria        TEXT    NOT NULL,
  ingredientes     TEXT    NOT NULL,
  instrucoes       TEXT    NOT NULL,
  e_favorito       INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0  -- epoch em milissegundos
) STRICT;

-- A ajuda do Kobi Note, um tópico por módulo.
--
-- O PWA usa os tópicos de fábrica de \`TOPICOS_FABRICA\` só enquanto esta tabela
-- está VAZIA; com ela já curada, ele mostra o que veio do acervo e mais nada —
-- módulo novo sem linha aqui é um botão "?" que abre uma tela em branco.
CREATE TABLE IF NOT EXISTS not_tutorial (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  modulo_id        TEXT    NOT NULL DEFAULT '', -- a chave do módulo no PWA (\`anotacoes\`, \`financeiro\`, …); vazio é a visão geral
  titulo           TEXT    NOT NULL,
  resumo           TEXT    NOT NULL DEFAULT '',
  conteudo         TEXT    NOT NULL DEFAULT '', -- HTML curado, escrito no editor do admin
  ordem            INTEGER NOT NULL DEFAULT 0,
  publicar         INTEGER NOT NULL DEFAULT 1,  -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0   -- epoch em milissegundos
) STRICT;

CREATE INDEX IF NOT EXISTS idx_cronologia_ordem ON not_cronologia_eventos (ordem_absoluta, ordem_no_ano);
CREATE INDEX IF NOT EXISTS idx_flw_produtos_ordem ON flw_produtos (ordem);
CREATE INDEX IF NOT EXISTS idx_not_imite_ordem ON not_imite_cartoes (ordem);
CREATE INDEX IF NOT EXISTS idx_not_itens_checklist_kit_id ON not_itens_checklist (kit_id);
CREATE INDEX IF NOT EXISTS idx_not_logs_criado_em ON not_logs (criado_em);
CREATE INDEX IF NOT EXISTS idx_not_logs_nivel_num ON not_logs (nivel_num);
CREATE INDEX IF NOT EXISTS idx_not_principios_ordem ON not_principios (area, ordem);
CREATE INDEX IF NOT EXISTS idx_not_tutorial_ordem ON not_tutorial (ordem);
`,note:`-- O esquema do banco do Kobi Note — o \`.sqlite\` que o PWA guarda no OPFS.
--
-- **Uma tabela por entidade, uma coluna por campo.** Até a Fase 8 tudo morava em
-- \`not_dados (tabela, id, dados)\`, com o registro inteiro em JSON opaco: o motor
-- não enxergava \`vencimento\` nem \`valor\`, então toda consulta puxava o store
-- inteiro para a memória e o JavaScript fazia o \`filter\`, o \`reduce\` e o \`sort\`.
-- Era o achado central do planejamento do Bioma SQL, e é o que este arquivo
-- desfaz — \`listarLancamentos()\` do mês deixa de baixar todos os anos.
--
-- **As tabelas se dividem em duas famílias, e a diferença governa o \`id\`:**
--
--   * o **acervo curado** (\`not_perguntas\`, \`not_poesias\`, … ) é cache do que o
--     Kobi Admin publica em \`dados/*.json\`. A identidade é a do admin, e a
--     sincronização substitui o store inteiro — o \`id\` é o de lá, sem
--     \`AUTOINCREMENT\` e sem \`id_global\`: um identificador de aparelho que
--     nascesse de novo a cada sincronização não identificaria coisa nenhuma;
--   * o **dado do usuário** (\`not_anotacao\`, \`not_transacoes\`, … ) tem
--     \`INTEGER PRIMARY KEY AUTOINCREMENT\` — que é o que aposentou a \`not_seq\`,
--     a tabela de contadores que fazia as vezes do autoincremento que uma
--     tabela só não podia dar — **e** um \`id_global\` sobre \`uuid7()\`, que é o
--     identificador que não colide entre aparelhos. Ele não é usado por
--     ninguém hoje: é o pré-requisito honesto da Fase 10, e nasce agora porque
--     um identificador que só passa a existir depois não vale para a linha que
--     já estava lá.
--
-- **\`BLOB\`, e não \`BLOB(16)\`:** numa tabela \`STRICT\` o tipo declarado tem de ser
-- exatamente um dos cinco que o motor conhece, e \`BLOB(16)\` é recusado na
-- criação. O tamanho é cobrado por \`CHECK (length(id_global) = 16)\`, que é o que
-- o parêntese sugeria e não fazia.
--
-- **\`uuid_blob(uuid7())\` só funciona porque a função é \`INNOCUOUS\`.** A conexão
-- abre com \`TRUSTED_SCHEMA = 0\` (Fase 1), e sob ela o esquema não pode chamar
-- função que não se declarou inofensiva — o \`DEFAULT\` seria recusado na primeira
-- inserção, e não na criação da tabela. As sete de \`ext/uuid.c\` se declaram.
--
-- Nada de fora alcança este banco: OPFS é rigorosamente por origem, e o Kobi
-- Admin (\`bioma.local\`) não tem como escrever no \`note.local\`.

-- **O dinheiro é CENTAVO em \`INTEGER\`**, como no resto do monorepo, e a dívida
-- que este cabeçalho declarava foi paga: era \`REAL\` em reais, herdado do legado,
-- e \`double\` não guarda dinheiro — 0,1 + 0,2 não é 0,3 em lugar nenhum.
--
-- **Não houve conversão de dado antigo, e é de propósito**: não existe usuário
-- nem instalação lá fora, e o OPFS de quem tiver rodado o app em
-- desenvolvimento é descartável. Um banco em reais que sobrevivesse à troca
-- leria R$ 1.200,00 como R$ 12,00 e ninguém veria erro nenhum — quem tiver um
-- apaga e recomeça, que é mais barato e mais honesto do que um migrador que
-- teria de adivinhar em qual das duas escalas cada linha foi gravada.
--
-- A escala muda de nome na fronteira do desenho, e só lá: o \`kk-financeiro\`
-- recebe reais porque formata com \`Intl\` na moeda e no idioma de quem o monta,
-- e quem converte é \`numeroDeCentavos\`/\`centavosDeNumero\`, de
-- \`@bioma/core/formato\`, nos adaptadores de \`modulos/financeiro/dados.ts\`. É a
-- mesma fronteira que o Kobi Flow já tinha.
--
-- ── O acervo curado ─────────────────────────────────────────────────────────
--
-- Espelha, coluna por coluna, o que \`apps/admin/src/exportar/exportar.ts\`
-- publica. Um campo novo no admin que não chegue aqui é um campo que a
-- sincronização descarta — o worker insere só o que a tabela declara, e avisa no
-- console em vez de abortar a carga inteira.

CREATE TABLE IF NOT EXISTS not_perguntas (
  id               INTEGER PRIMARY KEY NOT NULL, -- o id do admin, e não um daqui
  pergunta         TEXT    NOT NULL DEFAULT '',
  referencia       TEXT    NOT NULL DEFAULT '',
  dificuldade      INTEGER NOT NULL DEFAULT 1,
  resposta1        TEXT    NOT NULL DEFAULT '',
  resposta2        TEXT    NOT NULL DEFAULT '',
  resposta3        TEXT    NOT NULL DEFAULT '',
  resposta4        TEXT    NOT NULL DEFAULT '',
  correta          INTEGER NOT NULL DEFAULT 1,   -- de 1 a 4; a tela embaralha as alternativas e compara pela origem
  explicacao       TEXT    NOT NULL DEFAULT '',
  publicar         INTEGER NOT NULL DEFAULT 0,   -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,   -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0    -- epoch em milissegundos
) STRICT;

-- \`anterior_id\` e \`proximo_id\` são COLUNAS aqui, e não derivação da tela.
--
-- Quem os calcula é o export do admin, pela ordem em que ele publicou; a leitura
-- em sequência do módulo Poesia é a dessa ordem, e não a alfabética que uma
-- janela \`LAG\`/\`LEAD\` daria. Recalcular aqui seria inventar uma segunda ordem.
CREATE TABLE IF NOT EXISTS not_poesias (
  id               INTEGER PRIMARY KEY NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',
  conteudo         TEXT    NOT NULL DEFAULT '', -- HTML rico do editor do admin
  publicar         INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  anterior_id      INTEGER,                     -- a poesia anterior na ordem publicada; nulo na primeira
  proximo_id       INTEGER                      -- a seguinte; nulo na última
) STRICT;

CREATE TABLE IF NOT EXISTS not_receitas (
  id               INTEGER PRIMARY KEY NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',
  categoria        TEXT    NOT NULL DEFAULT '',
  ingredientes     TEXT    NOT NULL DEFAULT '',
  instrucoes       TEXT    NOT NULL DEFAULT '',
  e_favorito       INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0  -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_guias (
  id               INTEGER PRIMARY KEY NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',
  texto            TEXT    NOT NULL DEFAULT '', -- HTML rico do editor do admin
  publicar         INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0   -- epoch em milissegundos
) STRICT;

-- O kit chega do admin com os itens ANINHADOS, e aqui eles são tabela filha.
--
-- É o único store curado cujo JSON não é plano, e desmontá-lo é o que permite
-- perguntar "quantos itens vencem este mês" sem carregar kit nenhum. A carga é
-- do worker: ele grava o pai, depois os filhos, na mesma transação.
CREATE TABLE IF NOT EXISTS not_kits (
  id               INTEGER PRIMARY KEY NOT NULL,
  nome             TEXT    NOT NULL DEFAULT '',
  icone            TEXT    NOT NULL DEFAULT '', -- emoji, e não nome de ícone do Kobi Kit
  publicar         INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0   -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_kits_itens (
  id              INTEGER PRIMARY KEY NOT NULL,
  kit_id          INTEGER NOT NULL,
  rotulo          TEXT    NOT NULL DEFAULT '',
  quantidade      TEXT    NOT NULL DEFAULT '', -- texto livre ("4 L por pessoa/dia"), e não número
  esta_marcado    INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  data_vencimento INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos; 0 é sem validade
  observacoes     TEXT    NOT NULL DEFAULT '',
  publicar        INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  FOREIGN KEY (kit_id) REFERENCES not_kits (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE TABLE IF NOT EXISTS not_criacao_modulos (
  id               INTEGER PRIMARY KEY NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',
  categoria        TEXT    NOT NULL DEFAULT '',
  tipo             TEXT    NOT NULL DEFAULT '',
  icone            TEXT    NOT NULL DEFAULT 'compass',
  ordem            INTEGER NOT NULL DEFAULT 0,
  conceito         TEXT    NOT NULL DEFAULT '',
  desafio          TEXT    NOT NULL DEFAULT '',
  reflexao         TEXT    NOT NULL DEFAULT '',
  referencia       TEXT    NOT NULL DEFAULT '',
  link_jw          TEXT    NOT NULL DEFAULT '',
  config           TEXT    NOT NULL DEFAULT '{}', -- JSON lido sempre junto com a linha, nunca consultado sozinho
  xp               INTEGER NOT NULL DEFAULT 100,
  publicar         INTEGER NOT NULL DEFAULT 0,    -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  imagem           TEXT    NOT NULL DEFAULT ''
) STRICT;

CREATE TABLE IF NOT EXISTS not_cronologia (
  id               INTEGER PRIMARY KEY NOT NULL,
  trilha           TEXT    NOT NULL DEFAULT 'biblica',
  era              TEXT    NOT NULL DEFAULT 'AEC',
  ano_inicio       INTEGER NOT NULL DEFAULT 0,
  ano_fim          INTEGER NOT NULL DEFAULT 0,
  ordem_absoluta   INTEGER NOT NULL DEFAULT 0, -- o ano com sinal; ele EMPATA, e o desempate é \`ordem_no_ano\`
  precisao         TEXT    NOT NULL DEFAULT 'exato',
  periodo          TEXT    NOT NULL DEFAULT '',
  titulo           TEXT    NOT NULL DEFAULT '',
  resumo           TEXT    NOT NULL DEFAULT '',
  referencia       TEXT    NOT NULL DEFAULT '',
  link_fonte       TEXT    NOT NULL DEFAULT '',
  obra_fonte       TEXT    NOT NULL DEFAULT '',
  icone            TEXT    NOT NULL DEFAULT 'point',
  destaque         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  ordem_no_ano     INTEGER NOT NULL DEFAULT 0  -- desempate dentro do ano: o ano não ordena o que aconteceu dentro dele
) STRICT;

CREATE TABLE IF NOT EXISTS not_imite_cartoes (
  id               INTEGER PRIMARY KEY NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',          -- o nome do cartão — "Nossa Visão das Tarefas"
  tema             TEXT    NOT NULL DEFAULT '',          -- o assunto: o título da publicação de onde ele saiu
  personagens      TEXT    NOT NULL DEFAULT '',          -- quem está em cena; vazio nos cartões sem dupla bíblica
  icone            TEXT    NOT NULL DEFAULT 'eye-check', -- nome do ícone no Kobi Kit (biblioteca \`default\`)
  ordem            INTEGER NOT NULL DEFAULT 0,
  cenario          TEXT    NOT NULL DEFAULT '',          -- o gatilho, em HTML do editor do admin
  julgamento       TEXT    NOT NULL DEFAULT '',          -- o pensamento automático que o cenário provoca
  lentes           TEXT    NOT NULL DEFAULT '[]',        -- JSON: \`Lente[]\`, lido sempre junto com a linha
  correta          TEXT    NOT NULL DEFAULT '',          -- o \`id\` da lente certa
  reenquadramento  TEXT    NOT NULL DEFAULT '',          -- a lente da boa intenção, em HTML
  referencia       TEXT    NOT NULL DEFAULT '',          -- os textos que sustentam o reenquadramento
  link_jw          TEXT    NOT NULL DEFAULT '',          -- vazio esconde o link na tela
  espelho          TEXT    NOT NULL DEFAULT '',          -- a pergunta do Reflexo no Espelho
  exemplos         TEXT    NOT NULL DEFAULT '[]',        -- JSON: \`ExemploBiblico[]\`
  publicar         INTEGER NOT NULL DEFAULT 0,           -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,           -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0            -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_principios (
  id               INTEGER PRIMARY KEY NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',
  area             TEXT    NOT NULL DEFAULT 'coracao', -- a área da vida, pela chave de \`AREAS_PRINCIPIOS\` — catálogo FECHADO
  icone            TEXT    NOT NULL DEFAULT 'scale',   -- nome do ícone no Kobi Kit (biblioteca \`default\`)
  ordem            INTEGER NOT NULL DEFAULT 0,
  principio        TEXT    NOT NULL DEFAULT '',        -- o princípio numa frase, em texto puro
  referencia       TEXT    NOT NULL DEFAULT '',        -- os textos que o sustentam
  explicacao       TEXT    NOT NULL DEFAULT '',        -- por que o princípio existe, em HTML
  pratica          TEXT    NOT NULL DEFAULT '',        -- como ele se parece num dia comum, em HTML
  reflexoes        TEXT    NOT NULL DEFAULT '[]',      -- JSON: \`ReflexaoDoPrincipio[]\`
  link_jw          TEXT    NOT NULL DEFAULT '',        -- vazio esconde o link na tela
  publicar         INTEGER NOT NULL DEFAULT 0,         -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,         -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0          -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_anotacao_modelos (
  id               INTEGER PRIMARY KEY NOT NULL,
  chave            TEXT    NOT NULL DEFAULT '' UNIQUE, -- a chave que a anotação guarda em \`tipo_modelo\`
  rotulo           TEXT    NOT NULL DEFAULT '',
  conteudo         TEXT    NOT NULL DEFAULT '',        -- o esqueleto em HTML com que a anotação nasce
  ordem            INTEGER NOT NULL DEFAULT 0,
  publicar         INTEGER NOT NULL DEFAULT 1,         -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,         -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0          -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_estoque_catalogo (
  id                INTEGER PRIMARY KEY NOT NULL,
  item              TEXT    NOT NULL DEFAULT '',
  categoria         TEXT    NOT NULL DEFAULT '',
  quantidade        INTEGER NOT NULL DEFAULT 1,  -- a sugestão de fábrica, e não o que a pessoa tem
  peso_unitario     INTEGER NOT NULL DEFAULT 0,  -- em gramas
  calorias_por_100g INTEGER NOT NULL DEFAULT 0,
  validade_meses    INTEGER NOT NULL DEFAULT 12,
  ordem             INTEGER NOT NULL DEFAULT 0,
  publicar          INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  data_criacao      INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_atualizacao  INTEGER NOT NULL DEFAULT 0   -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_tutorial (
  id               INTEGER PRIMARY KEY NOT NULL,
  modulo_id        TEXT    NOT NULL DEFAULT '', -- a chave do módulo no PWA (\`anotacoes\`, \`financeiro\`, …); vazio é a visão geral
  titulo           TEXT    NOT NULL DEFAULT '',
  resumo           TEXT    NOT NULL DEFAULT '',
  conteudo         TEXT    NOT NULL DEFAULT '', -- HTML curado, escrito no editor do admin
  ordem            INTEGER NOT NULL DEFAULT 0,
  publicar         INTEGER NOT NULL DEFAULT 1,  -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0   -- epoch em milissegundos
) STRICT;

-- ── O dado do usuário ───────────────────────────────────────────────────────
--
-- Nada daqui sai do aparelho: não há caminho de código que envie estas tabelas
-- para a rede. Todas trazem \`id_global\`, e é a única coisa nelas que ainda não
-- tem leitor — ver o cabeçalho.

CREATE TABLE IF NOT EXISTS not_pasta (
  id           INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global    BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome         TEXT    NOT NULL DEFAULT '',
  data_criacao INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_anotacao (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo            TEXT    NOT NULL DEFAULT '',
  conteudo          TEXT    NOT NULL DEFAULT '', -- HTML rico do editor da tela
  tipo_modelo       TEXT    NOT NULL DEFAULT '', -- a \`chave\` de \`not_anotacao_modelos\` com que ela nasceu
  pasta_id          INTEGER,                     -- nulo é "sem pasta", e é o estado da maioria
  esta_fixada       INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  esta_arquivada    INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  data_criacao      INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_modificacao  INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16),
  FOREIGN KEY (pasta_id) REFERENCES not_pasta (id) ON UPDATE NO ACTION ON DELETE SET NULL
) STRICT;

-- O Caderno de Estudo: o que se escreve nos módulos de conteúdo.
--
-- \`ref_chave\` é a identidade do texto-fonte, e é por ela que a gravação é um
-- upsert — reeditar a reflexão do mesmo cartão atualiza a anotação em vez de
-- criar outra. Nulo é a anotação avulsa, que não espelha nada, e por isso o
-- índice único é PARCIAL: sem o \`WHERE\`, duas avulsas colidiriam no nulo em
-- alguns motores e a segunda seria recusada.
CREATE TABLE IF NOT EXISTS not_caderno_estudo (
  id          INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global   BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo      TEXT    NOT NULL DEFAULT '',
  conteudo    TEXT    NOT NULL DEFAULT '',
  origem      TEXT    NOT NULL DEFAULT 'avulso', -- \`criacao\` | \`estudo\` | \`imite\` | \`jogo\` | \`principios\` | \`avulso\`
  referencia  TEXT    NOT NULL DEFAULT '',       -- módulo, texto bíblico, assunto — texto livre do usuário
  ref_chave   TEXT,                              -- \`imite:12\`, \`principios:7\`; nulo na avulsa
  criado      INTEGER NOT NULL DEFAULT 0,        -- epoch em milissegundos
  atualizado  INTEGER NOT NULL DEFAULT 0,        -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_sessoes_estudo (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global        BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  assunto          TEXT    NOT NULL DEFAULT '',
  tipo_ciclo       TEXT    NOT NULL DEFAULT '', -- \`leitura\` | \`pessoal\` | \`reuniao\` | \`meditacao\`
  duracao_minutos  INTEGER NOT NULL DEFAULT 0,
  concluido_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  nota_meditacao   TEXT    NOT NULL DEFAULT '',
  anotacao_criada  INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_categorias_financeiro (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome          TEXT    NOT NULL DEFAULT '',
  icone         TEXT    NOT NULL DEFAULT '',
  hex_cor       TEXT    NOT NULL DEFAULT '',
  limite_mensal INTEGER NOT NULL DEFAULT 0, -- em centavos; 0 é sem limite
  CHECK (length(id_global) = 16)
) STRICT;

-- Os lançamentos. **\`categoria_id\` não é chave estrangeira, e isso é decisão.**
--
-- As outras três referências deste arquivo existem porque o app já as sustenta à
-- mão: \`excluirPasta\` põe \`pasta_id\` em nulo antes de apagar a pasta (que é
-- \`ON DELETE SET NULL\` escrito em JavaScript), \`excluirEstudo\` apaga os
-- registros antes do estudo (\`CASCADE\`), e a tela do Calendário recusa apagar um
-- tipo em uso (\`RESTRICT\`). Declarar a regra no banco é dizer o que já é verdade.
--
-- Aqui não é. \`excluirCategoria\` apaga e pronto, e os lançamentos ficam
-- apontando para um id que não existe mais — a tela os mostra sem categoria, e
-- é assim desde o legado. Além disso o app usa **0** como "sem categoria", e 0
-- não é linha de tabela nenhuma. Uma chave estrangeira aqui recusaria o
-- lançamento que a tela grava hoje, e o usuário veria "não salvou" sobre uma
-- conta que ele acabou de digitar. Arrumar a referência é limpar o dado E mexer
-- na tela, e é etapa própria.
CREATE TABLE IF NOT EXISTS not_transacoes (
  id                 INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global          BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  descricao          TEXT    NOT NULL DEFAULT '',
  valor              INTEGER NOT NULL DEFAULT 0, -- em centavos, e sempre positivo: quem dá o sinal é o \`tipo\`
  tipo               INTEGER NOT NULL DEFAULT 0, -- **0 é RECEITA e 1 é DESPESA** — a ordem que \`financeiro/dados.ts\` declara
  categoria_id       INTEGER NOT NULL DEFAULT 0, -- a categoria, e **0 é "sem categoria"** — ver a nota acima
  data_vencimento    INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos; é por ela que o mês é filtrado
  esta_pago          INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao       INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_marcado_pago  INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos; 0 enquanto não foi pago
  origem_recorrencia INTEGER NOT NULL DEFAULT 0, -- a recorrência que a gerou; 0 na lançada à mão
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_recorrencias_financeiro (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global             BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  descricao             TEXT    NOT NULL DEFAULT '',
  valor                 INTEGER NOT NULL DEFAULT 0, -- em centavos, como em \`not_transacoes\`
  tipo                  INTEGER NOT NULL DEFAULT 0, -- 0 é receita, 1 é despesa, como em \`not_transacoes\`
  categoria_id          INTEGER NOT NULL DEFAULT 0, -- 0 é "sem categoria", como em \`not_transacoes\`
  periodicidade         TEXT    NOT NULL DEFAULT '', -- \`mensal\` | \`semanal\` | …
  dia_mes               INTEGER NOT NULL DEFAULT 1,
  dia_semana_iso        INTEGER NOT NULL DEFAULT 1,  -- 1 segunda … 7 domingo
  gerar_como_pago       INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  ativo                 INTEGER NOT NULL DEFAULT 1,  -- booleano 0 | 1
  data_criacao          INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  proxima_geracao_epoch INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- As metas. \`ativo_id\` aponta para a linha que ALIMENTA o progresso, e a tabela
-- de destino depende de \`item\` — não há FK possível, e não deve haver: uma chave
-- estrangeira que mudasse de tabela conforme o valor de outra coluna é o que o
-- SQL não sabe declarar, e fingir que sabe é pior.
CREATE TABLE IF NOT EXISTS not_meta (
  id              INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global       BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo          TEXT    NOT NULL DEFAULT '',
  item            TEXT    NOT NULL DEFAULT '', -- que espécie de coisa a meta acompanha
  ativo_id        INTEGER,                     -- a linha acompanhada; nulo na meta de número solto
  ativo_nome      TEXT    NOT NULL DEFAULT '', -- o nome congelado do que ela acompanha
  data_meta       INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  prazo_final     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos; 0 é sem prazo
  -- As duas guardam a MEDIDA da categoria (\`CATEGORIAS\`, em \`metas/dados.ts\`), e
  -- é por isso que continuam \`REAL\` num arquivo em que dinheiro é inteiro: a
  -- mesma coluna guarda horas de campo, que são fracionárias, e um alvo em
  -- centavos, que não é. Numa meta de unidade \`VALOR\` o número é **centavo**,
  -- como em \`not_transacoes\` — tem de ser, porque é contra a soma de lá que ele
  -- é comparado —, e centavo é inteiro exato em \`double\` até 2^53. Quem
  -- converte na entrada e na saída do formulário é \`metas/tela.ts\`.
  progresso_atual REAL    NOT NULL DEFAULT 0,
  progresso_alvo  REAL    NOT NULL DEFAULT 0,
  esta_concluida  INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  CHECK (length(id_global) = 16)
) STRICT;

-- Os kits do usuário, com os itens em tabela filha — o mesmo desmonte do acervo
-- curado, e pelo mesmo motivo.
CREATE TABLE IF NOT EXISTS not_kits_local (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global        BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome             TEXT    NOT NULL DEFAULT '',
  icone            TEXT    NOT NULL DEFAULT '', -- emoji
  data_criacao     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- O item de um kit do usuário.
--
-- O \`id\` aqui é o do JSON aninhado que a Fase 8 desmontou, e ele é único DENTRO
-- do kit, não no banco: dois kits nascidos separados numerariam os itens a
-- partir de 1 cada um. Por isso a chave é composta, e não o \`id\` sozinho.
CREATE TABLE IF NOT EXISTS not_kits_local_itens (
  kit_id          INTEGER NOT NULL,
  id              INTEGER NOT NULL,
  descricao       TEXT    NOT NULL DEFAULT '',
  quantidade      TEXT    NOT NULL DEFAULT '', -- texto livre, e não número
  observacoes     TEXT    NOT NULL DEFAULT '',
  data_vencimento INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos; 0 é sem validade
  PRIMARY KEY (kit_id, id),
  FOREIGN KEY (kit_id) REFERENCES not_kits_local (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

-- O cofre de documentos. O conteúdo é cifrado PELO APP antes de chegar aqui, e
-- continua cifrado depois de a Fase 8 ligar a cifra do banco: são duas camadas
-- com donos diferentes — a do banco protege o arquivo do OPFS, esta protege o
-- documento de quem já abriu o banco.
CREATE TABLE IF NOT EXISTS not_documentos_cofre (
  id                 INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global          BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  rotulo             TEXT    NOT NULL DEFAULT '',
  tipo_mime          TEXT    NOT NULL DEFAULT '',
  blob_criptografado BLOB    NOT NULL,
  data_criacao       INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_estoque_alimentos (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  item              TEXT    NOT NULL DEFAULT '',
  categoria         TEXT    NOT NULL DEFAULT '',
  quantidade        INTEGER NOT NULL DEFAULT 0,
  peso_unitario     INTEGER NOT NULL DEFAULT 0, -- em gramas
  calorias_por_100g INTEGER NOT NULL DEFAULT 0,
  data_vencimento   INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos; 0 é sem validade
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_relatorios_ministerio (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global             BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  mes                   INTEGER NOT NULL DEFAULT 1,  -- de 1 a 12
  ano                   INTEGER NOT NULL DEFAULT 0,
  ano_servico           INTEGER NOT NULL DEFAULT 0,  -- o ano de serviço, que começa em setembro
  horas                 REAL    NOT NULL DEFAULT 0,
  estudos               INTEGER NOT NULL DEFAULT 0,
  participacao          INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  tipo_publicador       TEXT    NOT NULL DEFAULT 'publicador', -- \`publicador\` | \`auxiliar\` | \`regular\` | \`especial\`
  meta_horas            REAL    NOT NULL DEFAULT 0,
  notas_publicacoes     TEXT    NOT NULL DEFAULT '',
  telefone_dirigente    TEXT    NOT NULL DEFAULT '',
  nome_dirigente        TEXT    NOT NULL DEFAULT '',
  relatorio_enviado     INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  data_envio_relatorio  INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16),
  UNIQUE (ano, mes)
) STRICT;

CREATE TABLE IF NOT EXISTS not_contadores_ministerio (
  id                 INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global          BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  mes                INTEGER NOT NULL DEFAULT 1, -- de 1 a 12
  ano                INTEGER NOT NULL DEFAULT 0,
  minutos            INTEGER NOT NULL DEFAULT 0,
  estudos            INTEGER NOT NULL DEFAULT 0,
  revisitas          INTEGER NOT NULL DEFAULT 0,
  publicacoes        INTEGER NOT NULL DEFAULT 0,
  videos             INTEGER NOT NULL DEFAULT 0,
  data_atualizacao   INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16),
  UNIQUE (ano, mes)
) STRICT;

CREATE TABLE IF NOT EXISTS not_estudos_biblicos (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global        BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome             TEXT    NOT NULL DEFAULT '',
  contato          TEXT    NOT NULL DEFAULT '',
  endereco         TEXT    NOT NULL DEFAULT '',
  publicacao_atual TEXT    NOT NULL DEFAULT '',
  dia_semana       TEXT    NOT NULL DEFAULT '',
  horario_minutos  INTEGER NOT NULL DEFAULT 0, -- minutos desde a meia-noite
  notas            TEXT    NOT NULL DEFAULT '',
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_estudo_registros (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  estudo_id     INTEGER NOT NULL,
  registrado_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  onde_parou    TEXT    NOT NULL DEFAULT '',
  comentario    TEXT    NOT NULL DEFAULT '',
  CHECK (length(id_global) = 16),
  FOREIGN KEY (estudo_id) REFERENCES not_estudos_biblicos (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

-- O perfil, e ele é UMA linha — \`id\` 1, sempre.
--
-- Os nomes vieram em camelCase do legado (\`nomeSecretario\`, \`tipoSanguineo\`) e
-- viram snake_case aqui, como toda coluna deste projeto: um banco com duas
-- convenções de nome é um banco em que se erra o nome da coluna.
CREATE TABLE IF NOT EXISTS not_meu_perfil (
  id                          INTEGER PRIMARY KEY NOT NULL, -- é sempre 1: o perfil é um só
  id_global                   BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome                        TEXT    NOT NULL DEFAULT '',
  telefone                    TEXT    NOT NULL DEFAULT '',
  email                       TEXT    NOT NULL DEFAULT '',
  link                        TEXT    NOT NULL DEFAULT '',
  comentario                  TEXT    NOT NULL DEFAULT '',
  nome_secretario             TEXT    NOT NULL DEFAULT '',
  telefone_secretario         TEXT    NOT NULL DEFAULT '',
  tipo_sanguineo              TEXT    NOT NULL DEFAULT '',
  doador_orgaos               INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  alergias                    TEXT    NOT NULL DEFAULT '',
  medicamentos_em_uso         TEXT    NOT NULL DEFAULT '',
  observacoes_medicas         TEXT    NOT NULL DEFAULT '',
  gravida                     INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  gravidez_meses              TEXT    NOT NULL DEFAULT '',
  data_prevista_parto         TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  recusa_transfusao           INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  fracoes_aceitas             TEXT    NOT NULL DEFAULT '',
  contato_emergencia          TEXT    NOT NULL DEFAULT '',
  contato_emergencia_telefone TEXT    NOT NULL DEFAULT '',
  nome_colih                  TEXT    NOT NULL DEFAULT '',
  telefone_colih              TEXT    NOT NULL DEFAULT '',
  cartao_sus_numero           TEXT    NOT NULL DEFAULT '',
  cpf_titular                 TEXT    NOT NULL DEFAULT '',
  upa_referencia              TEXT    NOT NULL DEFAULT '',
  dpa_assinado_em             TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local; vazio enquanto o cartão não foi assinado
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_calendario_tipos (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome           TEXT    NOT NULL DEFAULT '',
  cor_chave      TEXT    NOT NULL DEFAULT 'primary', -- a chave da cor, e não o hexadecimal: o tema decide o tom
  icone          TEXT    NOT NULL DEFAULT '',
  ordem          INTEGER NOT NULL DEFAULT 0,
  marca_especial INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_calendario_eventos (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo            TEXT    NOT NULL DEFAULT '',
  tipo_id           INTEGER,                    -- o tipo do evento; a tela recusa apagar um tipo em uso
  data_inicio_epoch INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos do DIA, à meia-noite local
  hora_inicio_min   INTEGER NOT NULL DEFAULT 0, -- minutos desde a meia-noite
  data_fim_epoch    INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  hora_fim_min      INTEGER NOT NULL DEFAULT 0, -- minutos desde a meia-noite
  dia_inteiro       INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  descricao         TEXT    NOT NULL DEFAULT '',
  CHECK (length(id_global) = 16),
  -- \`RESTRICT\`, e não \`SET NULL\`: a tela do Calendário JÁ recusa apagar um tipo
  -- que tem evento ("os eventos ficariam sem cor nem nome"), e a regra aqui diz
  -- o mesmo. \`SET NULL\` deixaria o evento sem tipo caso o guarda da tela tivesse
  -- um furo — que é exatamente o estado que ela existe para impedir.
  FOREIGN KEY (tipo_id) REFERENCES not_calendario_tipos (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

-- Os três acervos que o usuário escreve, ao lado dos curados de mesmo nome.
--
-- Eles têm as colunas do curado correspondente porque a tela junta os dois numa
-- lista só (\`juntar()\` de \`modulos/acervo.ts\`), e uma coluna que existisse só de
-- um lado seria um campo que some quando o item é local.

CREATE TABLE IF NOT EXISTS not_poesias_local (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global        BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo           TEXT    NOT NULL DEFAULT '',
  conteudo         TEXT    NOT NULL DEFAULT '',
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_guias_local (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global        BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo           TEXT    NOT NULL DEFAULT '',
  texto            TEXT    NOT NULL DEFAULT '',
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_receitas_local (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global        BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo           TEXT    NOT NULL DEFAULT '',
  categoria        TEXT    NOT NULL DEFAULT '',
  ingredientes     TEXT    NOT NULL DEFAULT '',
  instrucoes       TEXT    NOT NULL DEFAULT '',
  e_favorito       INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- O que o banco sabe sobre si mesmo: a versão do esquema aplicada e a marca de
-- que a migração da Fase 8 já rodou.
--
-- É o \`bioma_meta\` k/v que o planejamento pedia. O valor é TEXT e o tipo mora na
-- chave, que é o mesmo contrato do \`flw_meta\` do Kobi Flow — um k/v com coluna
-- por tipo teria quatro colunas nulas em cada linha.
CREATE TABLE IF NOT EXISTS not_meta_banco (
  chave TEXT PRIMARY KEY NOT NULL,
  valor TEXT NOT NULL
) STRICT;

-- ── Índices ─────────────────────────────────────────────────────────────────
--
-- Um índice por consulta que a Fase 8 tirou do JavaScript. Nenhum é enfeite: o
-- que não aparece num \`WHERE\` ou num \`ORDER BY\` de \`apps/note/src/db/worker.ts\`
-- não está aqui.

CREATE INDEX IF NOT EXISTS idx_not_anotacao_pasta ON not_anotacao (pasta_id);
CREATE INDEX IF NOT EXISTS idx_not_anotacao_ordem ON not_anotacao (esta_arquivada, esta_fixada DESC, data_modificacao DESC);
CREATE UNIQUE INDEX IF NOT EXISTS idx_not_caderno_ref ON not_caderno_estudo (ref_chave) WHERE ref_chave IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_not_caderno_origem ON not_caderno_estudo (origem, atualizado DESC);
CREATE INDEX IF NOT EXISTS idx_not_transacoes_venc ON not_transacoes (data_vencimento);
CREATE INDEX IF NOT EXISTS idx_not_transacoes_categoria ON not_transacoes (categoria_id);
CREATE INDEX IF NOT EXISTS idx_not_recorrencias_proxima ON not_recorrencias_financeiro (ativo, proxima_geracao_epoch);
CREATE INDEX IF NOT EXISTS idx_not_calendario_periodo ON not_calendario_eventos (data_inicio_epoch, data_fim_epoch);
CREATE INDEX IF NOT EXISTS idx_not_estudo_registros_estudo ON not_estudo_registros (estudo_id, registrado_em DESC);
CREATE INDEX IF NOT EXISTS idx_not_estoque_vencimento ON not_estoque_alimentos (data_vencimento);
CREATE INDEX IF NOT EXISTS idx_not_sessoes_concluido ON not_sessoes_estudo (concluido_em DESC);
CREATE INDEX IF NOT EXISTS idx_not_meta_prazo ON not_meta (esta_concluida, prazo_final);
CREATE INDEX IF NOT EXISTS idx_not_cronologia_ordem ON not_cronologia (ordem_absoluta, ordem_no_ano);
CREATE INDEX IF NOT EXISTS idx_not_principios_ordem ON not_principios (area, ordem);
CREATE INDEX IF NOT EXISTS idx_not_imite_ordem ON not_imite_cartoes (ordem);
CREATE INDEX IF NOT EXISTS idx_not_tutorial_ordem ON not_tutorial (modulo_id, ordem);
CREATE INDEX IF NOT EXISTS idx_not_kits_itens_kit ON not_kits_itens (kit_id);

-- ── As vistas ───────────────────────────────────────────────────────────────
--
-- **O app consulta VISTA, e não tabela.** Não é enfeite, e o ganho não é de
-- estilo: cada uma destas responde, numa ida ao banco, o que era um store
-- inteiro baixado para a memória e percorrido em JavaScript.
--
-- A vista também é onde o escopo por usuário vai caber, no dia em que houver
-- mais de um (\`bio_usuario_atual()\`), e é o que desacopla o armazenamento da
-- consulta: mudar a coluna sem mudar a tela passa a ser possível.
--
-- Elas são **derivadas**, e por isso não entram na conferência de esquema
-- (\`tabelasDe\` filtra por gênero): uma vista responde ao \`PRAGMA table_info\`
-- como se fosse tabela, com as colunas do \`SELECT\` e sem tipo nenhum.

-- Tudo o que as Metas somam, numa linha só.
--
-- Ela substitui SEIS \`todos()\` — \`transacoes\`, \`categorias_financeiro\`,
-- \`relatorios_ministerio\`, \`contadores_ministerio\`, \`estudos_biblicos\` e
-- \`sessoes_estudo\` —, baixados inteiros para a memória a cada abertura da tela
-- para virarem oito somas e duas contagens. Num aparelho com anos de lançamento
-- isso é o banco inteiro atravessando a ponte do worker para produzir dez
-- números.
--
-- \`COALESCE(SUM(…), 0)\`: o \`SUM\` de conjunto vazio é NULL no SQL, e o \`reduce\`
-- que ele substitui responde zero. Sem o \`COALESCE\` a meta de quem ainda não
-- lançou nada mostraria progresso nulo em vez de zero.
--
-- **\`tipo\` 0 é RECEITA e 1 é DESPESA**, na ordem que \`financeiro/dados.ts\`
-- declara — e não na ordem que a intuição sugere.
CREATE VIEW IF NOT EXISTS vw_note_metas_fontes AS
SELECT
  (SELECT COALESCE(SUM(valor), 0) FROM not_transacoes WHERE tipo = 0)   AS receitas,
  (SELECT COALESCE(SUM(valor), 0) FROM not_transacoes WHERE tipo = 1)   AS despesas,
  (SELECT COALESCE(SUM(horas), 0) FROM not_relatorios_ministerio)       AS horas,
  (SELECT COALESCE(SUM(revisitas), 0) FROM not_contadores_ministerio)   AS revisitas,
  (SELECT COUNT(*) FROM not_estudos_biblicos)                           AS estudos,
  (SELECT COALESCE(SUM(duracao_minutos), 0) FROM not_sessoes_estudo)    AS foco_min,
  (SELECT COALESCE(SUM(duracao_minutos), 0) FROM not_sessoes_estudo
     WHERE tipo_ciclo = 'leitura')                                      AS foco_leitura_min,
  (SELECT COUNT(*) FROM not_sessoes_estudo)                             AS sessoes;

-- A despesa somada por categoria — o \`despesaPorCategoriaId\` das Metas.
--
-- A categoria 0 fica de fora: ela é a sentinela de "sem categoria", e não uma
-- linha de \`not_categorias_financeiro\`. Somá-la daria um total que nenhuma meta
-- pode acompanhar, porque não há categoria a escolher para ele.
CREATE VIEW IF NOT EXISTS vw_note_despesa_por_categoria AS
SELECT categoria_id, COALESCE(SUM(valor), 0) AS total
FROM not_transacoes
WHERE tipo = 1 AND categoria_id > 0
GROUP BY categoria_id;

-- As categorias do Financeiro em ordem alfabética, já pelo idioma.
--
-- O \`localeCompare('pt-BR')\` da tela ordenava em JavaScript uma lista que o
-- banco entrega ordenada. \`NOCASE\` é o que existe sem a nossa colação, e resolve
-- o caso que aparece — maiúscula e minúscula; acento continua ordenando depois
-- das letras sem acento, e trocar isso é ligar a \`BIOMA_PTBR\`, que é decisão de
-- outra etapa.
CREATE VIEW IF NOT EXISTS vw_note_categorias_financeiro AS
SELECT * FROM not_categorias_financeiro ORDER BY nome COLLATE NOCASE;
`,flow:`-- O esquema do banco do Kobi Flow — o \`.sqlite\` que a extensão guarda no OPFS.
--
-- **Uma tabela por entidade, uma coluna por campo**, como o do Kobi Note. Até a
-- Fase 8 tudo morava em \`flw_dados (tabela, id, dados)\`, com o registro inteiro
-- em JSON opaco: o motor não enxergava \`vencimento\` nem \`valor\`, e toda consulta
-- puxava o store inteiro para a memória para o JavaScript fazer o \`filter\`, o
-- \`reduce\` e o \`sort\`. O \`conflitoDeDatas\` do Corretor baixava todas as reservas
-- para conferir duas datas.
--
-- **Três formas de guardar uma coleção, e a escolha não é de gosto:**
--
--   * **tabela filha** para coleção de OBJETOS que cresce e que alguém pergunta
--     — os itens de um orçamento, os pagamentos de uma fatura, as tarefas de uma
--     ordem, as diárias de uma reserva. A fachada continua entregando o objeto
--     inteiro; quem desmonta e remonta é \`@bioma/core/repositorio\`;
--   * **coluna JSON** para vetor de ESCALARES e para o que é lido sempre junto
--     com a linha e nunca consultado sozinho — \`papeis\`, \`finalidades\`,
--     \`comodidades\`, \`fotos\`, os \`eventos\` (que são diário), os \`campos\` de uma
--     área e os \`extras\` de um item de catálogo, que são declarados em tempo de
--     execução e não cabem em coluna nenhuma;
--   * **coluna** para o objeto aninhado de forma FIXA — os quatro \`DadosDe*\` de
--     uma pessoa viram \`cliente_*\`, \`tecnico_*\`, \`parceiro_*\` e \`colaborador_*\`.
--     É o fim da projeção do CRM: "campo novo entra nos dois lados" deixa de
--     existir porque o campo passa a estar no esquema.
--
-- **JSON não é opaco aqui.** O que se perdia na tabela única era o motor não
-- saber onde procurar; \`json_each\` sabe, e é com ele que as vistas do fim deste
-- arquivo separam cliente de técnico sem uma linha de JavaScript. Ele funciona
-- dentro de vista mesmo sob \`TRUSTED_SCHEMA = 0\` (Fase 1) porque o módulo JSON1
-- se declara inofensivo — ao contrário do \`fts5vocab\`, que não se declara e por
-- isso mora numa consulta de primeiro nível no Kobi Admin.
--
-- **\`id_global\` em tudo o que é do usuário**, sobre \`uuid_blob(uuid7())\`: é o
-- identificador que não colide entre aparelhos, e o pré-requisito da Fase 10.
-- Ele não é lido por ninguém hoje, e nasce agora porque um identificador que só
-- passa a existir depois não vale para a linha que já estava lá. \`BLOB\`, e não
-- \`BLOB(16)\`: em \`STRICT\` o tipo declarado tem de ser um dos cinco, e o tamanho
-- é cobrado por \`CHECK\`.
--
-- A extensão roda em \`chrome-extension://\`, que já é origem confiável — ela não
-- precisa de vhost com TLS local como os dois PWA precisam.

-- ── O que veio de fábrica ───────────────────────────────────────────────────
--
-- Semeado do \`@bioma/core\`, e substituído inteiro quando o catálogo muda. Sem
-- \`id_global\`: a identidade é a de quem publicou, e um identificador de aparelho
-- que nascesse de novo a cada semeadura não identificaria coisa nenhuma.

CREATE TABLE IF NOT EXISTS flw_respostas_rapidas (
  id        INTEGER PRIMARY KEY NOT NULL,
  atalho    TEXT    NOT NULL DEFAULT '', -- o que se digita para chamar a resposta
  texto     TEXT    NOT NULL DEFAULT '',
  nicho     TEXT    NOT NULL DEFAULT '', -- o ramo a que ela serve; vazio é geral
  ordem     INTEGER NOT NULL DEFAULT 0,
  criado_em INTEGER NOT NULL DEFAULT 0   -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS flw_traducoes (
  id    INTEGER PRIMARY KEY NOT NULL,
  chave TEXT    NOT NULL DEFAULT '' UNIQUE, -- a chave do dicionário
  pt    TEXT    NOT NULL DEFAULT '',
  es    TEXT    NOT NULL DEFAULT '',
  en    TEXT    NOT NULL DEFAULT ''
) STRICT;

-- O catálogo de cargos da CBO 2002 — 2.694 linhas, semeadas sob demanda.
--
-- Ele é de fábrica e não sobe na sincronização: empurraria as 2.694 linhas na
-- primeira abertura de quem nunca abriu o RH.
CREATE TABLE IF NOT EXISTS flw_rh_cargos (
  id        INTEGER PRIMARY KEY NOT NULL,
  nome      TEXT    NOT NULL DEFAULT '',
  criado_em INTEGER NOT NULL DEFAULT 0 -- epoch em milissegundos
) STRICT;

-- ── O CRM ───────────────────────────────────────────────────────────────────

-- As pessoas, e os quatro cadastros que a F3.2 dissolveu.
--
-- **Não há cadastro de cliente, de técnico, de parceiro nem de colaborador.** Há
-- pessoa, e papel — e os campos que cada papel acrescenta são COLUNA aqui,
-- prefixadas pelo papel. Até a Fase 8 eles viviam em quatro objetos aninhados
-- montados à mão em \`crm/clientes.ts\` e nos três \`dados.ts\`, e a armadilha era
-- conhecida: campo novo tinha de entrar nos DOIS lados da projeção, e só na ida
-- a tela gravava e a leitura seguinte não achava. Agora o campo está no esquema.
--
-- \`papeis\` é vetor de texto em JSON, e não tabela filha: são no máximo quatro
-- valores de uma lista fechada, sempre lidos junto com a pessoa. Quem separa por
-- papel são as vistas do fim do arquivo, com \`json_each\` — e a ORDEM do vetor é
-- gravada e normalizada pelo app: dois aparelhos que marcassem os mesmos dois
-- papéis em ordens diferentes gravariam dois JSON para a mesma pessoa, e isso é
-- conflito de sincronização a cada escrita, para sempre, sem nada divergir de
-- verdade.
CREATE TABLE IF NOT EXISTS flw_pessoas (
  id                       INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global                BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome                     TEXT    NOT NULL DEFAULT '',
  papeis                   TEXT    NOT NULL DEFAULT '[]', -- JSON: os papéis, na ordem de \`PAPEIS\`
  telefone                 TEXT    NOT NULL DEFAULT '',
  email                    TEXT    NOT NULL DEFAULT '',
  documento                TEXT    NOT NULL DEFAULT '',
  empresa                  TEXT    NOT NULL DEFAULT '',
  endereco                 TEXT    NOT NULL DEFAULT '',
  cidade                   TEXT    NOT NULL DEFAULT '',
  uf                       TEXT    NOT NULL DEFAULT '',
  cep                      TEXT    NOT NULL DEFAULT '',
  nascimento               TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  origem                   TEXT    NOT NULL DEFAULT '',
  observacoes              TEXT    NOT NULL DEFAULT '',
  criado_em                INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  -- O papel de cliente, no funil.
  cliente_estagio          TEXT    NOT NULL DEFAULT '',
  cliente_valor_potencial  INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  cliente_motivo_perda     TEXT    NOT NULL DEFAULT '',
  -- O papel de técnico, do produto OS.
  tecnico_especialidade    TEXT    NOT NULL DEFAULT '',
  -- O papel de parceiro, do produto Corretor.
  parceiro_tipo            TEXT    NOT NULL DEFAULT '',
  parceiro_creci           TEXT    NOT NULL DEFAULT '',
  parceiro_divisao_pct     INTEGER NOT NULL DEFAULT 0,
  -- O papel de colaborador, do produto RH.
  colaborador_cargo        TEXT    NOT NULL DEFAULT '',
  colaborador_tipo_cargo   TEXT    NOT NULL DEFAULT '',
  colaborador_genero       TEXT    NOT NULL DEFAULT '',
  colaborador_escolaridade TEXT    NOT NULL DEFAULT '',
  colaborador_admissao     TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  colaborador_desligamento TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local; vazio é ativo
  colaborador_tipo_deslig  TEXT    NOT NULL DEFAULT '',
  colaborador_jornada      INTEGER NOT NULL DEFAULT 0,  -- horas mensais
  colaborador_salario      INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  colaborador_beneficios   INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  colaborador_departamento TEXT    NOT NULL DEFAULT '',
  CHECK (length(id_global) = 16)
) STRICT;

-- O mapa de auditoria da fusão dos quatro cadastros (F3.2).
--
-- Ele é o que permite auditar e desfazer a migração, e por isso entra no backup:
-- um arquivo que o deixasse de fora restauraria a fusão sem a volta atrás.
CREATE TABLE IF NOT EXISTS flw_pessoas_mapa (
  id         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global  BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  store      TEXT    NOT NULL DEFAULT '', -- o cadastro de origem (\`clientes\`, \`os_tecnicos\`, …)
  id_antigo  INTEGER NOT NULL DEFAULT 0,  -- o id que a linha tinha lá
  pessoa_id  INTEGER NOT NULL DEFAULT 0,  -- a pessoa em que ela virou
  criado_em  INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_tarefas (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo        TEXT    NOT NULL DEFAULT '',
  descricao     TEXT    NOT NULL DEFAULT '',
  cliente_id    INTEGER NOT NULL DEFAULT 0, -- 0 é "sem cliente" — ver a nota de \`flw_transacoes\`
  prioridade    TEXT    NOT NULL DEFAULT '',
  vence_em      TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DDTHH:MM' **local**, nunca UTC
  status        TEXT    NOT NULL DEFAULT '',
  criado_em     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  concluida_em  INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos; 0 é em aberto
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_notas (
  id         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global  BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  cliente_id INTEGER NOT NULL DEFAULT 0,
  texto      TEXT    NOT NULL DEFAULT '',
  criado_em  INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- O catálogo do negócio. \`extras\` são os campos que a ÁREA declara, e por isso
-- são JSON: eles não existem em tempo de compilação, e uma coluna por campo
-- possível seria uma tabela que muda de forma quando alguém cadastra uma área.
CREATE TABLE IF NOT EXISTS flw_catalogo (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome          TEXT    NOT NULL DEFAULT '',
  codigo        TEXT    NOT NULL DEFAULT '', -- SKU, referência interna, código do fornecedor
  descricao     TEXT    NOT NULL DEFAULT '',
  categoria     TEXT    NOT NULL DEFAULT '', -- agrupamento livre dentro do catálogo
  area          TEXT    NOT NULL DEFAULT '', -- a chave da área que declara os \`extras\`
  unidade       TEXT    NOT NULL DEFAULT '',
  preco         INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  custo         INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS; alimenta a margem e nunca sai num orçamento
  imagem        TEXT    NOT NULL DEFAULT '', -- link, e não blob: trocar o jeito de subir não pede migração
  ativo         INTEGER NOT NULL DEFAULT 1,  -- booleano 0 | 1; fora de linha some das sugestões e fica no catálogo
  extras        TEXT    NOT NULL DEFAULT '{}', -- JSON: os campos declarados pela área
  criado_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  atualizado_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- As áreas de atuação, que declaram os campos extras do catálogo.
CREATE TABLE IF NOT EXISTS flw_areas (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  chave     TEXT    NOT NULL DEFAULT '' UNIQUE,
  nome      TEXT    NOT NULL DEFAULT '',
  campos    TEXT    NOT NULL DEFAULT '[]', -- JSON: \`CampoDeArea[]\`, lido sempre junto com a linha
  criado_em INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_orcamentos (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  cliente_id    INTEGER NOT NULL DEFAULT 0,
  total         INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS; gravado para a grade não recalcular tudo
  desconto      INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS, nunca maior que o total
  validade      TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local; vazio nunca expira
  status        TEXT    NOT NULL DEFAULT '',
  fatura_id     INTEGER NOT NULL DEFAULT 0,  -- a fatura que nasceu daqui; 0 é ainda não faturado
  observacao    TEXT    NOT NULL DEFAULT '',
  criado_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  atualizado_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_orcamentos_itens (
  orcamento_id INTEGER NOT NULL,
  id           INTEGER NOT NULL, -- único DENTRO do orçamento, e não no banco
  descricao    TEXT    NOT NULL DEFAULT '',
  qtd          REAL    NOT NULL DEFAULT 0, -- aceita fração: 1,5 h, 2,5 m²
  preco        INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS
  PRIMARY KEY (orcamento_id, id),
  FOREIGN KEY (orcamento_id) REFERENCES flw_orcamentos (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE TABLE IF NOT EXISTS flw_faturas (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  cliente_id    INTEGER NOT NULL DEFAULT 0,
  orcamento_id  INTEGER NOT NULL DEFAULT 0, -- o orçamento que virou esta fatura; 0 quando nasceu sozinha
  total         INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS
  desconto      INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS
  vencimento    TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  recorrencia   TEXT    NOT NULL DEFAULT '', -- '' ou 'mensal'
  observacao    TEXT    NOT NULL DEFAULT '',
  criado_em     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  atualizado_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_faturas_itens (
  fatura_id INTEGER NOT NULL,
  id        INTEGER NOT NULL,
  descricao TEXT    NOT NULL DEFAULT '',
  qtd       REAL    NOT NULL DEFAULT 0,
  preco     INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS
  PRIMARY KEY (fatura_id, id),
  FOREIGN KEY (fatura_id) REFERENCES flw_faturas (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

-- Os pagamentos de uma fatura. Tabela filha, e não JSON: é a soma deles que diz
-- se a fatura está quitada, e essa é uma pergunta que o banco deve responder.
CREATE TABLE IF NOT EXISTS flw_faturas_pagamentos (
  fatura_id INTEGER NOT NULL,
  id        INTEGER NOT NULL,
  valor     INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  data      TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  criado_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  PRIMARY KEY (fatura_id, id),
  FOREIGN KEY (fatura_id) REFERENCES flw_faturas (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE TABLE IF NOT EXISTS flw_contratos (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo        TEXT    NOT NULL DEFAULT '',
  cliente_id    INTEGER NOT NULL DEFAULT 0,
  tipo_id       INTEGER NOT NULL DEFAULT 0, -- classifica e filtra, nada mais
  valor         INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS — o valor total do acordo
  inicio        TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  fim           TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  cancelado_em  INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos; 0 é vigente
  observacao    TEXT    NOT NULL DEFAULT '',
  criado_em     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  atualizado_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_tipos_contrato (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome      TEXT    NOT NULL DEFAULT '',
  criado_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- O financeiro do CRM. **O dinheiro aqui é \`INTEGER\`, em centavos** — ao
-- contrário do Kobi Note, cujas telas gravam reais em ponto flutuante desde o
-- legado. A extensão sempre gravou centavos, e é o que a Fase 3.4 pede.
CREATE TABLE IF NOT EXISTS flw_transacoes (
  id         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global  BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  tipo       TEXT    NOT NULL DEFAULT '',
  situacao   TEXT    NOT NULL DEFAULT '',
  descricao  TEXT    NOT NULL DEFAULT '',
  valor      INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  categoria  TEXT    NOT NULL DEFAULT '', -- o NOME da categoria, e não o id dela
  cliente_id INTEGER NOT NULL DEFAULT 0,  -- 0 é "sem cliente", e não uma linha de \`flw_pessoas\`
  data       TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  vencimento TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  pago_em    TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local; vazio é em aberto
  fatura_id  INTEGER NOT NULL DEFAULT 0,
  criado_em  INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_categorias (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome      TEXT    NOT NULL DEFAULT '',
  tipo      TEXT    NOT NULL DEFAULT '',
  grupo     TEXT    NOT NULL DEFAULT '',
  icone     TEXT    NOT NULL DEFAULT '',
  cor       TEXT    NOT NULL DEFAULT '',
  limite    INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS; 0 é sem limite
  criado_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_recorrencias (
  id              INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global       BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  descricao       TEXT    NOT NULL DEFAULT '',
  valor           INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  tipo            TEXT    NOT NULL DEFAULT '',
  categoria       TEXT    NOT NULL DEFAULT '',
  periodicidade   TEXT    NOT NULL DEFAULT '',
  dia_mes         INTEGER NOT NULL DEFAULT 1,
  dia_semana      INTEGER NOT NULL DEFAULT 0,
  gerar_como_pago INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  ativa           INTEGER NOT NULL DEFAULT 1,  -- booleano 0 | 1
  proxima         TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  criado_em       INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- Os dados do próprio negócio — registro único, id 1.
CREATE TABLE IF NOT EXISTS flw_negocio (
  id            INTEGER PRIMARY KEY NOT NULL, -- é sempre 1: o negócio é um só
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome          TEXT    NOT NULL DEFAULT '',
  documento     TEXT    NOT NULL DEFAULT '',
  telefone      TEXT    NOT NULL DEFAULT '',
  email         TEXT    NOT NULL DEFAULT '',
  endereco      TEXT    NOT NULL DEFAULT '',
  observacao    TEXT    NOT NULL DEFAULT '',
  atualizado_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- As respostas que o usuário escreveu, ao lado das de fábrica.
CREATE TABLE IF NOT EXISTS flw_respostas_do_usuario (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  atalho    TEXT    NOT NULL DEFAULT '',
  texto     TEXT    NOT NULL DEFAULT '',
  nicho     TEXT    NOT NULL DEFAULT '',
  ordem     INTEGER NOT NULL DEFAULT 0,
  criado_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- A licença ativada neste aparelho.
--
-- Ela é **conferida a cada leitura**, e nunca gravada como "ativa": a data é a
-- única trava do desenho. O que fica aqui é a chave assinada, e é a chave que
-- declara o produto — não há lista de plugins em lugar nenhum.
CREATE TABLE IF NOT EXISTS flw_licencas_ativadas (
  id         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global  BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  chave      TEXT    NOT NULL DEFAULT '', -- \`base64url(payload).base64url(assinatura)\`
  ativada_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- ── OS — ordens de serviço ──────────────────────────────────────────────────
--
-- Produto vendido à parte, destravado por licença. **Os stores dele entram no
-- backup mesmo sem licença ativa**: uma licença que vence não apaga o trabalho
-- de quem a teve, e um backup tirado depois do vencimento não pode ser o backup
-- que perdeu as ordens do ano passado.

CREATE TABLE IF NOT EXISTS flw_os_ordens (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  cliente_id        INTEGER NOT NULL DEFAULT 0,
  titulo            TEXT    NOT NULL DEFAULT '',
  endereco          TEXT    NOT NULL DEFAULT '',
  observacoes       TEXT    NOT NULL DEFAULT '',
  desconto          INTEGER NOT NULL DEFAULT 0,   -- em CENTAVOS
  desconto_aplicado INTEGER NOT NULL DEFAULT 0,   -- em CENTAVOS, já rateado
  orcamento_id      INTEGER NOT NULL DEFAULT 0,
  faturas           TEXT    NOT NULL DEFAULT '[]', -- JSON: os ids das faturas geradas
  eventos           TEXT    NOT NULL DEFAULT '[]', -- JSON: o diário da ordem, lido junto com ela
  criado_em         INTEGER NOT NULL DEFAULT 0,   -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_os_ordens_tarefas (
  ordem_id   INTEGER NOT NULL,
  id         INTEGER NOT NULL,
  descricao  TEXT    NOT NULL DEFAULT '',
  qtd        REAL    NOT NULL DEFAULT 0,
  preco      INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  data       TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  tecnico_id INTEGER NOT NULL DEFAULT 0,  -- a pessoa com o papel de técnico; 0 é sem técnico
  status     TEXT    NOT NULL DEFAULT '',
  em_campo   INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  fatura_id  INTEGER NOT NULL DEFAULT 0,  -- **0 é "ainda não faturada"** — \`jaFeito()\` é \`> 0\`
  PRIMARY KEY (ordem_id, id),
  FOREIGN KEY (ordem_id) REFERENCES flw_os_ordens (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

-- O prefixo do número da ordem — registro único, id 1.
CREATE TABLE IF NOT EXISTS flw_os_config (
  id      INTEGER PRIMARY KEY NOT NULL,
  prefixo TEXT    NOT NULL DEFAULT ''
) STRICT;

-- ── RH ──────────────────────────────────────────────────────────────────────
--
-- O colaborador NÃO tem tabela: ele é uma pessoa com o papel, e os campos dele
-- são as colunas \`colaborador_*\` de \`flw_pessoas\`. \`flw_rh_cargos\` é catálogo de
-- fábrica e está lá em cima, com o que é semeado.

CREATE TABLE IF NOT EXISTS flw_rh_ausencias (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  colaborador_id INTEGER NOT NULL DEFAULT 0, -- a pessoa com o papel de colaborador
  tipo           TEXT    NOT NULL DEFAULT '',
  motivo         TEXT    NOT NULL DEFAULT '',
  data           TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  horas          REAL    NOT NULL DEFAULT 0,
  criado_em      INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_rh_vagas (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  cargo         TEXT    NOT NULL DEFAULT '',
  status        TEXT    NOT NULL DEFAULT '',
  abertura      TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  prazo         TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  encerramento  TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local; vazio é em aberto
  curriculos    INTEGER NOT NULL DEFAULT 0,
  candidatos    INTEGER NOT NULL DEFAULT 0,
  qualificados  INTEGER NOT NULL DEFAULT 0,
  finalistas    INTEGER NOT NULL DEFAULT 0,
  custo         INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  motivo_atraso TEXT    NOT NULL DEFAULT '',
  criado_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_rh_treinamentos (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo         TEXT    NOT NULL DEFAULT '',
  tipo           TEXT    NOT NULL DEFAULT '',
  local          TEXT    NOT NULL DEFAULT '',
  fornecedor     TEXT    NOT NULL DEFAULT '',
  colaborador_id INTEGER NOT NULL DEFAULT 0, -- 0 é treinamento de turma, sem dono
  inicio         TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  duracao        REAL    NOT NULL DEFAULT 0,  -- em horas
  investimento   INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  status         TEXT    NOT NULL DEFAULT '',
  criado_em      INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_rh_financeiro (
  id         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global  BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  mes        TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM'
  receita    INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  folha      INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  beneficios INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  criado_em  INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_rh_avaliacoes (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  colaborador_id INTEGER NOT NULL DEFAULT 0,
  ciclo          TEXT    NOT NULL DEFAULT '',
  avaliador      TEXT    NOT NULL DEFAULT '',
  conhecimentos  REAL    NOT NULL DEFAULT 0,
  habilidades    REAL    NOT NULL DEFAULT 0,
  atitudes       REAL    NOT NULL DEFAULT 0,
  potencial      REAL    NOT NULL DEFAULT 0,
  comentario     TEXT    NOT NULL DEFAULT '',
  criado_em      INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_rh_clima_perguntas (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  texto     TEXT    NOT NULL DEFAULT '',
  dimensao  TEXT    NOT NULL DEFAULT '',
  criado_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- As respostas do clima são ANÔNIMAS por desenho: elas guardam o departamento,
-- e nunca quem respondeu. Uma coluna \`colaborador_id\` aqui tornaria a pesquisa
-- outra coisa.
CREATE TABLE IF NOT EXISTS flw_rh_clima_respostas (
  id           INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global    BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  rodada       TEXT    NOT NULL DEFAULT '',
  pergunta_id  INTEGER NOT NULL DEFAULT 0,
  nota         REAL    NOT NULL DEFAULT 0,
  departamento TEXT    NOT NULL DEFAULT '',
  criado_em    INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- Os encargos com que o custo do colaborador é calculado — registro único, id 1.
CREATE TABLE IF NOT EXISTS flw_rh_parametros (
  id            INTEGER PRIMARY KEY NOT NULL,
  inss_patronal REAL NOT NULL DEFAULT 0, -- percentual
  rat           REAL NOT NULL DEFAULT 0,
  terceiros     REAL NOT NULL DEFAULT 0,
  fgts          REAL NOT NULL DEFAULT 0,
  decimo        REAL NOT NULL DEFAULT 0,
  ferias        REAL NOT NULL DEFAULT 0,
  multa_fgts    REAL NOT NULL DEFAULT 0
) STRICT;

-- ── Corretor ────────────────────────────────────────────────────────────────
--
-- O parceiro NÃO tem tabela: ele é uma pessoa com o papel, e os campos dele são
-- as colunas \`parceiro_*\` de \`flw_pessoas\`.
--
-- A situação de um imóvel é **derivada** (contratos + reservas + vendas), e por
-- isso não há coluna para ela: guardá-la seria um segundo lugar onde a verdade
-- mora, e os dois discordariam no dia em que uma reserva fosse cancelada.

CREATE TABLE IF NOT EXISTS flw_cor_imoveis (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo            TEXT    NOT NULL DEFAULT '',
  tipo              TEXT    NOT NULL DEFAULT '',
  finalidades       TEXT    NOT NULL DEFAULT '[]', -- JSON: venda, locação, temporada — filtrado por \`json_each\`
  proprietario_id   INTEGER NOT NULL DEFAULT 0,
  endereco          TEXT    NOT NULL DEFAULT '',
  bairro            TEXT    NOT NULL DEFAULT '',
  cidade            TEXT    NOT NULL DEFAULT '',
  uf                TEXT    NOT NULL DEFAULT '',
  cep               TEXT    NOT NULL DEFAULT '',
  quartos           INTEGER NOT NULL DEFAULT 0,
  suites            INTEGER NOT NULL DEFAULT 0,
  banheiros         INTEGER NOT NULL DEFAULT 0,
  vagas             INTEGER NOT NULL DEFAULT 0,
  hospedes          INTEGER NOT NULL DEFAULT 0,
  area              REAL    NOT NULL DEFAULT 0,    -- em m²
  distancia_mar     INTEGER NOT NULL DEFAULT 0,    -- em metros
  comodidades       TEXT    NOT NULL DEFAULT '[]', -- JSON: vetor de escalares
  preco_venda       INTEGER NOT NULL DEFAULT 0,    -- em CENTAVOS
  aluguel_mensal    INTEGER NOT NULL DEFAULT 0,    -- em CENTAVOS
  diaria_padrao     INTEGER NOT NULL DEFAULT 0,    -- em CENTAVOS
  condominio        INTEGER NOT NULL DEFAULT 0,    -- em CENTAVOS
  iptu              INTEGER NOT NULL DEFAULT 0,    -- em CENTAVOS
  descricao         TEXT    NOT NULL DEFAULT '',
  fotos             TEXT    NOT NULL DEFAULT '[]', -- JSON: links, e não blobs
  inativo           INTEGER NOT NULL DEFAULT 0,    -- booleano 0 | 1
  autorizacao       TEXT    NOT NULL DEFAULT '',
  captado_em        TEXT    NOT NULL DEFAULT '',   -- 'YYYY-MM-DD' local
  autorizacao_ate   TEXT    NOT NULL DEFAULT '',   -- 'YYYY-MM-DD' local
  captador_id       INTEGER NOT NULL DEFAULT 0,
  chaves            TEXT    NOT NULL DEFAULT '',   -- onde está a chave do imóvel
  criado_em         INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- A tarifa de temporada. **Temporadas sobrepostas resolvem pela MAIS CURTA**, e
-- é regra do app, não do esquema: guardar a precedência aqui seria um número que
-- envelhece quando alguém edita as datas.
CREATE TABLE IF NOT EXISTS flw_cor_tarifas (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  imovel_id     INTEGER NOT NULL DEFAULT 0,
  nome          TEXT    NOT NULL DEFAULT '',
  inicio        TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  fim           TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  diaria        INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  minimo_noites INTEGER NOT NULL DEFAULT 0,
  criado_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- A reserva de temporada.
--
-- **Check-out não é noite**: quem sai às 11h libera a casa para quem entra às
-- 14h, e é por isso que a sobreposição se calcula sobre as DIÁRIAS, e não sobre
-- o intervalo fechado — um \`conflitoDeDatas\` que não soubesse disso recusaria
-- metade das reservas de janeiro.
CREATE TABLE IF NOT EXISTS flw_cor_reservas (
  id                  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global           BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  imovel_id           INTEGER NOT NULL DEFAULT 0,
  cliente_id          INTEGER NOT NULL DEFAULT 0,
  checkin             TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  checkout            TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  hospedes            INTEGER NOT NULL DEFAULT 0,
  taxa_limpeza        INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  desconto            INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  caucao              INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  sinal_pct           REAL    NOT NULL DEFAULT 0,
  comissao_pct        REAL    NOT NULL DEFAULT 0,
  status              TEXT    NOT NULL DEFAULT '',
  fatura_sinal_id     INTEGER NOT NULL DEFAULT 0,
  fatura_saldo_id     INTEGER NOT NULL DEFAULT 0,
  repasse_id          INTEGER NOT NULL DEFAULT 0,  -- a despesa de repasse ao proprietário
  origem              TEXT    NOT NULL DEFAULT '',
  observacoes         TEXT    NOT NULL DEFAULT '',
  motivo_cancelamento TEXT    NOT NULL DEFAULT '',
  checkin_em          TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  checkout_em         TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  eventos             TEXT    NOT NULL DEFAULT '[]', -- JSON: o diário da reserva
  criado_em           INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- A diária de uma noite, **congelada na reserva**.
--
-- Ela sai de \`flw_cor_tarifas\` no momento em que a reserva nasce, e fica: a
-- tarifa pode mudar depois, e o hóspede pagou o que foi combinado.
CREATE TABLE IF NOT EXISTS flw_cor_reservas_diarias (
  reserva_id INTEGER NOT NULL,
  id         INTEGER NOT NULL,
  data       TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local — a NOITE, e não o dia de saída
  valor      INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  temporada  TEXT    NOT NULL DEFAULT '', -- o nome da tarifa que deu esta diária, congelado
  PRIMARY KEY (reserva_id, id),
  FOREIGN KEY (reserva_id) REFERENCES flw_cor_reservas (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE TABLE IF NOT EXISTS flw_cor_locacoes (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  imovel_id         INTEGER NOT NULL DEFAULT 0,
  cliente_id        INTEGER NOT NULL DEFAULT 0,
  inicio            TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  fim               TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  aluguel           INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  dia_vencimento    INTEGER NOT NULL DEFAULT 1,
  taxa_admin_pct    REAL    NOT NULL DEFAULT 0,
  cobrar_condominio INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  cobrar_iptu       INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  garantia          TEXT    NOT NULL DEFAULT '',
  caucao            INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  indice            TEXT    NOT NULL DEFAULT '', -- o índice de reajuste (IGPM, IPCA…)
  reajuste_meses    INTEGER NOT NULL DEFAULT 12,
  ultimo_reajuste   TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  status            TEXT    NOT NULL DEFAULT '',
  observacoes       TEXT    NOT NULL DEFAULT '',
  encerrado_em      TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  eventos           TEXT    NOT NULL DEFAULT '[]', -- JSON: o diário da locação
  criado_em         INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_cor_locacoes_mensalidades (
  locacao_id  INTEGER NOT NULL,
  id          INTEGER NOT NULL,
  competencia TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM'
  aluguel     INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  fatura_id   INTEGER NOT NULL DEFAULT 0,  -- **0 é "ainda não faturada"** — \`jaFeito()\` é \`> 0\`
  repasse_id  INTEGER NOT NULL DEFAULT 0,  -- a despesa de repasse ao proprietário; 0 é ainda não lançada
  PRIMARY KEY (locacao_id, id),
  FOREIGN KEY (locacao_id) REFERENCES flw_cor_locacoes (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE TABLE IF NOT EXISTS flw_cor_locacoes_reajustes (
  locacao_id INTEGER NOT NULL,
  id         INTEGER NOT NULL,
  data       TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  pct        REAL    NOT NULL DEFAULT 0,  -- o percentual aplicado
  de         INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  para       INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  indice     TEXT    NOT NULL DEFAULT '',
  PRIMARY KEY (locacao_id, id),
  FOREIGN KEY (locacao_id) REFERENCES flw_cor_locacoes (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE TABLE IF NOT EXISTS flw_cor_vendas (
  id                   INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global            BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  imovel_id            INTEGER NOT NULL DEFAULT 0,
  cliente_id           INTEGER NOT NULL DEFAULT 0,
  parceiro_id          INTEGER NOT NULL DEFAULT 0, -- a pessoa com o papel de parceiro; 0 é venda direta
  divisao_pct          REAL    NOT NULL DEFAULT 0,
  valor                INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS
  comissao_pct         REAL    NOT NULL DEFAULT 0,
  comissao_de          TEXT    NOT NULL DEFAULT '', -- quem paga a comissão
  sinal                INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS
  status               TEXT    NOT NULL DEFAULT '',
  motivo_perda         TEXT    NOT NULL DEFAULT '',
  fatura_id            INTEGER NOT NULL DEFAULT 0,
  despesa_parceiro_id  INTEGER NOT NULL DEFAULT 0,
  escriturada_em       TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  observacoes          TEXT    NOT NULL DEFAULT '',
  eventos              TEXT    NOT NULL DEFAULT '[]', -- JSON: o diário da venda
  criado_em            INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_cor_visitas (
  id          INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global   BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  imovel_id   INTEGER NOT NULL DEFAULT 0,
  cliente_id  INTEGER NOT NULL DEFAULT 0,
  quando      TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DDTHH:MM' local
  status      TEXT    NOT NULL DEFAULT '',
  feedback    TEXT    NOT NULL DEFAULT '', -- vazio é visita sem retorno ainda
  observacoes TEXT    NOT NULL DEFAULT '',
  criado_em   INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- O que um cliente procura — o casamento com o acervo é calculado, e não gravado.
CREATE TABLE IF NOT EXISTS flw_cor_buscas (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  cliente_id    INTEGER NOT NULL DEFAULT 0,
  finalidade    TEXT    NOT NULL DEFAULT '',
  tipos         TEXT    NOT NULL DEFAULT '[]', -- JSON: vetor de escalares
  quartos_min   INTEGER NOT NULL DEFAULT 0,
  vagas_min     INTEGER NOT NULL DEFAULT 0,
  hospedes_min  INTEGER NOT NULL DEFAULT 0,
  preco_max     INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS; 0 é sem teto
  local         TEXT    NOT NULL DEFAULT '',
  comodidades   TEXT    NOT NULL DEFAULT '[]', -- JSON: vetor de escalares
  observacoes   TEXT    NOT NULL DEFAULT '',
  ativo         INTEGER NOT NULL DEFAULT 1,   -- booleano 0 | 1
  criado_em     INTEGER NOT NULL DEFAULT 0,   -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- Os ajustes do Corretor — registro único, id 1.
CREATE TABLE IF NOT EXISTS flw_cor_config (
  id                      INTEGER PRIMARY KEY NOT NULL,
  prefixo                 TEXT    NOT NULL DEFAULT '',
  creci                   TEXT    NOT NULL DEFAULT '',
  comissao_venda_pct      REAL    NOT NULL DEFAULT 0,
  taxa_admin_pct          REAL    NOT NULL DEFAULT 0,
  comissao_temporada_pct  REAL    NOT NULL DEFAULT 0,
  divisao_parceiro_pct    REAL    NOT NULL DEFAULT 0,
  prazo_autorizacao_dias  INTEGER NOT NULL DEFAULT 0,
  taxa_limpeza            INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS
  sinal_pct               REAL    NOT NULL DEFAULT 0,
  minimo_noites           INTEGER NOT NULL DEFAULT 0,
  dias_repasse            INTEGER NOT NULL DEFAULT 0,
  checkin_hora            TEXT    NOT NULL DEFAULT '', -- 'HH:MM' local
  checkout_hora           TEXT    NOT NULL DEFAULT '', -- 'HH:MM' local
  categoria_repasse       TEXT    NOT NULL DEFAULT '',
  categoria_comissao      TEXT    NOT NULL DEFAULT ''
) STRICT;

-- ── A sincronização, e o que ela NÃO leva ───────────────────────────────────
--
-- Estes dois ficam **fora do backup**, e a ausência é decisão. \`sincronizacao\` é
-- a fila de saída: um backup que a levasse junto faria a restauração reenviar
-- para a planilha escritas de meses atrás, por cima do que as outras máquinas
-- fizeram desde então — e a chave de idempotência não protegeria disso, porque a
-- chave é justamente a mesma e o servidor já a esqueceu. \`conflitos\` é o diário
-- DESTE aparelho sobre o que ele perdeu: restaurá-lo noutra máquina descreveria
-- um passado que não é o dela.

CREATE TABLE IF NOT EXISTS flw_sincronizacao (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  store     TEXT    NOT NULL DEFAULT '',
  registro  INTEGER NOT NULL DEFAULT 0,   -- o id da linha que espera subir
  operacao  TEXT    NOT NULL DEFAULT '',
  chave     TEXT    NOT NULL DEFAULT '',  -- a chave de idempotência da escrita
  carga     TEXT    NOT NULL DEFAULT '{}', -- JSON: o que subir, lido sempre junto
  criado_em INTEGER NOT NULL DEFAULT 0    -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS flw_conflitos (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  store     TEXT    NOT NULL DEFAULT '',
  registro  INTEGER NOT NULL DEFAULT 0,
  motivo    TEXT    NOT NULL DEFAULT '',
  local     TEXT    NOT NULL DEFAULT '{}', -- JSON: o que este aparelho tinha
  remoto    TEXT    NOT NULL DEFAULT '{}', -- JSON: o que veio de fora e ganhou
  criado_em INTEGER NOT NULL DEFAULT 0    -- epoch em milissegundos
) STRICT;

-- A tabela única, que sobrevive por UM motivo só.
--
-- Ela era o banco inteiro até a Fase 8 — \`flw_dados (tabela, id, dados)\`, com o
-- registro em JSON opaco. Hoje ela é o **pouso dos quatro cadastros que a F3.2
-- aposentou**: \`clientes\`, \`os_tecnicos\`, \`cor_parceiros\` e \`rh_colaboradores\`
-- não existem mais como store, mas um backup gerado antes daquela fase os traz
-- cheios, e a restauração precisa de onde os pôr para a migração de pessoas os
-- ler em seguida.
--
-- **Eles não ganham tabela própria de propósito.** O conteúdo tem a forma
-- antiga, é lido uma vez e descartado, e escrever quarenta colunas para dado que
-- some na abertura seguinte seria inventar um esquema para o passado. É o caso
-- de "documento" do planejamento: lido inteiro, nunca consultado por dentro.
--
-- Ela some sozinha quando não sobrar linha: a migração a apaga se conseguiu
-- levar tudo para as tabelas por entidade.
CREATE TABLE IF NOT EXISTS flw_dados (
  tabela TEXT    NOT NULL, -- o nome do cadastro aposentado
  id     INTEGER NOT NULL,
  dados  TEXT    NOT NULL, -- JSON: o registro com a forma de antes da F3.2
  PRIMARY KEY (tabela, id)
) STRICT;

-- O que o banco sabe sobre si mesmo — a marca de que o catálogo de fábrica já
-- foi semeado, e a de que a migração da Fase 8 já rodou.
--
-- A marca da semeadura é o que impede o catálogo de ressuscitar depois de o
-- usuário apagar o que não vende, e por isso **vai junto no despejo do fallback
-- em IndexedDB**: sem ela do outro lado, a abertura seguinte semearia de novo.
CREATE TABLE IF NOT EXISTS flw_meta (
  chave TEXT PRIMARY KEY NOT NULL,
  valor TEXT NOT NULL
) STRICT;

-- ── Índices ─────────────────────────────────────────────────────────────────
--
-- Um índice por consulta que a Fase 8 tirou do JavaScript. O que não aparece num
-- \`WHERE\` ou num \`ORDER BY\` do worker não está aqui.

CREATE INDEX IF NOT EXISTS idx_flw_tarefas_prazo ON flw_tarefas (status, vence_em);
CREATE INDEX IF NOT EXISTS idx_flw_tarefas_cliente ON flw_tarefas (cliente_id);
CREATE INDEX IF NOT EXISTS idx_flw_notas_cliente ON flw_notas (cliente_id);
CREATE INDEX IF NOT EXISTS idx_flw_transacoes_data ON flw_transacoes (data);
CREATE INDEX IF NOT EXISTS idx_flw_transacoes_venc ON flw_transacoes (situacao, vencimento);
CREATE INDEX IF NOT EXISTS idx_flw_faturas_venc ON flw_faturas (vencimento);
CREATE INDEX IF NOT EXISTS idx_flw_faturas_cliente ON flw_faturas (cliente_id);
CREATE INDEX IF NOT EXISTS idx_flw_orcamentos_cliente ON flw_orcamentos (cliente_id);
CREATE INDEX IF NOT EXISTS idx_flw_contratos_vigencia ON flw_contratos (inicio, fim);
CREATE INDEX IF NOT EXISTS idx_flw_pessoas_nome ON flw_pessoas (nome COLLATE NOCASE);
CREATE INDEX IF NOT EXISTS idx_flw_os_ordens_cliente ON flw_os_ordens (cliente_id);
CREATE INDEX IF NOT EXISTS idx_flw_rh_ausencias_colab ON flw_rh_ausencias (colaborador_id, data);
CREATE INDEX IF NOT EXISTS idx_flw_rh_avaliacoes_ciclo ON flw_rh_avaliacoes (ciclo, colaborador_id);
CREATE INDEX IF NOT EXISTS idx_flw_cor_tarifas_imovel ON flw_cor_tarifas (imovel_id, inicio, fim);
CREATE INDEX IF NOT EXISTS idx_flw_cor_reservas_imovel ON flw_cor_reservas (imovel_id, status);
CREATE INDEX IF NOT EXISTS idx_flw_cor_diarias_data ON flw_cor_reservas_diarias (data);
CREATE INDEX IF NOT EXISTS idx_flw_cor_locacoes_imovel ON flw_cor_locacoes (imovel_id, status);
CREATE INDEX IF NOT EXISTS idx_flw_cor_vendas_imovel ON flw_cor_vendas (imovel_id, status);

-- ── As vistas ───────────────────────────────────────────────────────────────
--
-- **É aqui que a projeção do CRM morre.** Até a Fase 8, \`Cliente\`, \`Tecnico\`,
-- \`Parceiro\` e \`Colaborador\` eram objetos montados à mão em \`crm/clientes.ts\` e
-- nos três \`dados.ts\`, a partir de \`pessoas\` + \`papeis\` — e a armadilha estava
-- escrita no CLAUDE.md: campo novo tinha de entrar nos DOIS lados, e só na ida a
-- tela gravava e a leitura seguinte não achava. As quatro vistas abaixo são a
-- projeção, feita uma vez, no lugar onde o esquema mora.
--
-- O filtro é \`json_each\` sobre \`papeis\`, e ele funciona dentro de vista mesmo
-- sob \`TRUSTED_SCHEMA = 0\` porque o módulo JSON1 se declara inofensivo — foi
-- conferido no motor, e não presumido: o \`fts5vocab\` não se declara, e uma vista
-- sobre ele nasce calada e morre na primeira leitura.

CREATE VIEW IF NOT EXISTS vw_flow_clientes AS
SELECT * FROM flw_pessoas
WHERE EXISTS (SELECT 1 FROM json_each(flw_pessoas.papeis) WHERE value = 'cliente');

CREATE VIEW IF NOT EXISTS vw_flow_tecnicos AS
SELECT * FROM flw_pessoas
WHERE EXISTS (SELECT 1 FROM json_each(flw_pessoas.papeis) WHERE value = 'tecnico');

CREATE VIEW IF NOT EXISTS vw_flow_parceiros AS
SELECT * FROM flw_pessoas
WHERE EXISTS (SELECT 1 FROM json_each(flw_pessoas.papeis) WHERE value = 'parceiro');

-- O colaborador ATIVO é o que não tem data de desligamento. A vista a traz
-- inteira mesmo assim — quem calcula rotatividade precisa dos desligados, e uma
-- vista que os escondesse tornaria o indicador impossível de calcular.
CREATE VIEW IF NOT EXISTS vw_flow_colaboradores AS
SELECT * FROM flw_pessoas
WHERE EXISTS (SELECT 1 FROM json_each(flw_pessoas.papeis) WHERE value = 'colaborador');

-- O que uma fatura ainda deve, somando os pagamentos dela.
--
-- Era \`reduce\` sobre o vetor aninhado, dentro de um \`filter\` sobre o store
-- inteiro: descobrir quanto o mês tem a receber baixava todas as faturas de
-- todos os anos.
CREATE VIEW IF NOT EXISTS vw_flow_faturas_saldo AS
SELECT
  f.id,
  f.cliente_id,
  f.vencimento,
  f.total,
  f.desconto,
  COALESCE(
    (SELECT SUM(p.valor) FROM flw_faturas_pagamentos p WHERE p.fatura_id = f.id),
    0
  ) AS pago,
  f.total - f.desconto - COALESCE(
    (SELECT SUM(p.valor) FROM flw_faturas_pagamentos p WHERE p.fatura_id = f.id),
    0
  ) AS saldo
FROM flw_faturas f;

-- As noites ocupadas de cada imóvel — a fonte do \`conflitoDeDatas\`.
--
-- Ele baixava TODAS as reservas para comparar duas datas. Aqui a pergunta é
-- "existe diária desta reserva nesta noite?", e o índice responde.
--
-- A reserva cancelada fica de fora: a noite dela está livre, e é essa a diferença
-- entre "reservado" e "já foi reservado".
CREATE VIEW IF NOT EXISTS vw_flow_noites_ocupadas AS
SELECT r.imovel_id, d.data, r.id AS reserva_id, r.status
FROM flw_cor_reservas r
JOIN flw_cor_reservas_diarias d ON d.reserva_id = r.id
WHERE r.status <> 'cancelada';
`},r=/^CREATE\s+(?:UNIQUE\s+)?(TABLE|INDEX|VIEW)(?:\s+IF\s+NOT\s+EXISTS)?\s+([A-Za-z_][A-Za-z_0-9]*)/i,i={TABLE:`tabela`,INDEX:`indice`,VIEW:`vista`},a=/^\s{2,}([a-z_][a-z_0-9]*)\s+\S/;function o(e){let t=0;for(;t<e.length;){let n=e.charAt(t);if(n===`'`||n===`"`){for(t++;t<e.length&&e.charAt(t)!==n;)t++;t++;continue}if(n===`-`&&e.charAt(t+1)===`-`)return e.slice(t+2).trim();t++}}function s(e){let t=e.split(`
`),n=0;for(;n<t.length&&!/^\s*CREATE\b/i.test(t[n]??``);)n++;let r=[];for(let e=n-1;e>=0;e--){let n=(t[e]??``).trim();if(!n.startsWith(`--`))break;r.unshift(n.replace(/^--\s?/,``))}return{nota:r.join(`
`).trim(),comando:t.slice(n).join(`
`).trim()}}function c(e){let n=[];for(let c of t(e)){let{nota:e,comando:t}=s(c.sql),l=r.exec(t);if(l===null)throw Error(`o esquema canônico só descreve tabela e índice: ${t.slice(0,60)}`);let u={},d=[];for(let e of t.split(`
`)){let t=a.exec(e)?.[1];if(t===void 0)continue;d.push(t);let n=o(e);n!==void 0&&n!==``&&(u[t]=n)}n.push({nome:l[2]??``,tipo:i[(l[1]??``).toUpperCase()]??`indice`,sql:t,nota:e,colunas:u,campos:d})}return n}const l=new Map;function u(e){let t=l.get(e);return t===void 0&&(t=c(n[e]),l.set(e,t)),t}const d=[`note`,`flow`],f=new Map;function p(){let e=[...u(`nucleo`)],t=new Set(e.map(e=>e.nome));for(let n of d)for(let r of u(n))t.has(r.nome)||(t.add(r.nome),f.set(r.nome,n),e.push(r));return e}let m;function h(e){return e===`nucleo`?(m??=p(),m):u(e)}function ee(e){return h(e).map(e=>e.sql)}const g=`bioma_carimbos`,_=[`id`,`id_global`],te=`CREATE INDEX IF NOT EXISTS idx_bioma_carimbos_hlc
  ON ${g} (hlc);`;function v(e,t){return`hlc_${e}_${t}`}function ne(e,t,n){return`('${e}', ${n}.id_global, '${t}', bio_hlc(), ${n}.${t})`}const y=`ON CONFLICT (tabela, id_global, campo)
    DO UPDATE SET hlc = excluded.hlc, valor = excluded.valor`;function re(e){let t=e.nome,n=e.campos.filter(e=>!_.includes(e)),r=n.map(e=>`    ${ne(t,e,`new`)}`).join(`,
`),i=n.map(e=>`  INSERT INTO ${g} (tabela, id_global, campo, hlc, valor)\n    SELECT '${t}', new.id_global, '${e}', bio_hlc(), new.${e}\n     WHERE new.${e} IS NOT old.${e}\n  ${y};`).join(`
`);return[`CREATE TRIGGER IF NOT EXISTS ${v(t,`ins`)} AFTER INSERT ON ${t} BEGIN
  INSERT INTO ${g} (tabela, id_global, campo, hlc, valor) VALUES
${r}
  ${y};
END;`,`CREATE TRIGGER IF NOT EXISTS ${v(t,`upd`)} AFTER UPDATE ON ${t} BEGIN
${i}
END;`,`CREATE TRIGGER IF NOT EXISTS ${v(t,`del`)} AFTER DELETE ON ${t} BEGIN
  DELETE FROM ${g} WHERE tabela = '${t}' AND id_global = old.id_global;
  INSERT INTO ${g} (tabela, id_global, campo, hlc, valor)
    VALUES ('${t}', old.id_global, '', bio_hlc(), NULL)
  ${y};
END;`]}function ie(e){let t=h(e).filter(e=>e.tipo===`tabela`&&e.campos.includes(`id_global`)).flatMap(re);return[`CREATE TABLE IF NOT EXISTS bioma_carimbos (
  tabela    TEXT    NOT NULL, -- a tabela da linha carimbada
  id_global BLOB    NOT NULL, -- a linha, pelo id que não colide entre aparelhos
  campo     TEXT    NOT NULL, -- a coluna que mudou — vazio é a lápide de uma linha apagada
  hlc       INTEGER NOT NULL, -- o carimbo do relógio lógico híbrido — leia-o com bio_hlc_ms()
  valor     ANY,              -- o que foi escrito, no tipo em que foi escrito
  PRIMARY KEY (tabela, id_global, campo)
) STRICT, WITHOUT ROWID;`,te,...t]}const ae=`SELECT bio_hlc_visto(hlc) FROM ${g}
  ORDER BY hlc DESC LIMIT 1`;function b(e){return`"${e.replace(/"/g,`""`)}"`}function oe(e){return e.map(e=>({nome:String(e.name),tipo:String(e.type).toUpperCase(),notNulo:Number(e.notnull)===1,chave:Number(e.pk)>0,temPadrao:e.dflt_value!==null&&e.dflt_value!==void 0}))}function x(e,t){if(t==null)return null;if(e.tipo===`TEXT`)return typeof t==`string`?t:String(t);if(e.tipo===`BLOB`)return t instanceof Uint8Array?t:null;if(typeof t==`boolean`)return+!!t;let n=typeof t==`number`?t:Number(t);return Number.isFinite(n)?n:null}function S(e,t,n){let r=t.filter(e=>n[e.nome]!==void 0);if(r.length===0)return{sql:`INSERT INTO ${b(e)} DEFAULT VALUES`,parametros:[]};let i=r.map(e=>b(e.nome)).join(`, `),a=r.map(()=>`?`).join(`, `);return{sql:`INSERT INTO ${b(e)} (${i}) VALUES (${a})`,parametros:r.map(e=>x(e,n[e.nome]))}}function C(e,t,n){let r=t.filter(e=>n[e.nome]!==void 0),i=t.filter(e=>e.chave).map(e=>e.nome),a=r.filter(e=>!i.includes(e.nome)&&e.nome!==`id_global`),o=r.map(e=>b(e.nome)).join(`, `),s=r.map(()=>`?`).join(`, `),c=i.map(b).join(`, `),l=a.length===0?`DO NOTHING`:`DO UPDATE SET ${a.map(e=>`${b(e.nome)} = excluded.${b(e.nome)}`).join(`, `)}`;return{sql:`INSERT INTO ${b(e)} (${o}) VALUES (${s}) ON CONFLICT(${c}) ${l}`,parametros:r.map(e=>x(e,n[e.nome]))}}function se(e){return e===null||e.byteLength===0?`novo`:new TextDecoder(`latin1`).decode(e.subarray(0,16))===`SQLite format 3\0`?`em-claro`:`cifrado`}const w=`chave-do-aparelho`;async function ce(e,t){let n=await e(w);if(n instanceof Uint8Array&&n.byteLength===32)return n;if(n instanceof ArrayBuffer&&n.byteLength===32)return new Uint8Array(n);let r=crypto.getRandomValues(new Uint8Array(32));return await t(w,r),r}var le=class{bd;catalogo;colunas=new Map;avisadas=new Set;profundidade=0;constructor(e,t){this.bd=e,this.catalogo=t}emTransacao(e){return this.naTransacao(e)}naTransacao(e){if(this.profundidade>0)return e();this.profundidade+=1;try{return this.bd.emTransacao(e)}finally{--this.profundidade}}stores(){return Object.keys(this.catalogo)}storesDa(e){return this.stores().filter(t=>this.catalogo[t]?.familia===e)}storeDe(e){let t=this.catalogo[e];if(t===void 0)throw Error(`store desconhecido: ${e}`);return t}lerEsquemaAplicado(){this.colunas.clear();for(let e of this.stores()){let t=this.storeDe(e);for(let e of[t.tabela,...(t.filhos??[]).map(e=>e.tabela)])this.colunas.has(e)||this.colunas.set(e,oe(this.bd.consultar(`PRAGMA table_info(${b(e)})`)))}}tabelas(){return[...this.colunas.keys()]}colunasDa(e){let t=this.colunas.get(e);if(t===void 0||t.length===0)throw Error(`tabela ausente no banco: ${e}`);return t}todos(e){let t=this.storeDe(e);return this.comFilhos(t,this.bd.consultar(`SELECT * FROM ${b(t.tabela)} ORDER BY id`))}obter(e,t){let n=this.storeDe(e),r=this.bd.consultar(`SELECT * FROM ${b(n.tabela)} WHERE id = ?`,[Number(t)]);return this.comFilhos(n,r)[0]}contar(e){return Number(this.bd.escalar(`SELECT COUNT(*) FROM ${b(this.storeDe(e).tabela)}`)??0)}salvar(e,t){let n=this.storeDe(e),r=T(n,t),i=E(n,D(n,r));this.avisarCamposIgnorados(n.tabela,i);let a=0;return this.naTransacao(()=>{let e=r.id;if(e==null){let e=S(n.tabela,this.colunasDa(n.tabela),i);this.bd.executar(e.sql,e.parametros),a=Number(this.bd.escalar(`SELECT MAX(id) FROM ${b(n.tabela)}`)??0)}else{a=Number(e);let t=C(n.tabela,this.colunasDa(n.tabela),{...i,id:a});this.bd.executar(t.sql,t.parametros)}this.trocarFilhos(n,a,r)}),a}excluir(e,t){let n=this.storeDe(e);this.bd.executar(`DELETE FROM ${b(n.tabela)} WHERE id = ?`,[Number(t)])}substituirTudo(e,t){let n=this.storeDe(e);this.naTransacao(()=>{this.bd.executar(`DELETE FROM ${b(n.tabela)}`);let e=this.colunasDa(n.tabela),r=0;for(let i of t){let t=Number(i.id);Number.isFinite(t)?t>r&&(r=t):t=++r;let a=T(n,{...i,id:t}),o=E(n,D(n,a));this.avisarCamposIgnorados(n.tabela,o);let s=S(n.tabela,e,o);this.bd.executar(s.sql,s.parametros),this.trocarFilhos(n,t,a)}})}comFilhos(e,t){let n=e.filhos??[],r=t.map(t=>ue(e,t));if(n.length===0||r.length===0)return r;let i=r.map(e=>Number(e.id)),a=i.map(()=>`?`).join(`, `),o=r;for(let e of n){let t=this.bd.consultar(`SELECT * FROM ${b(e.tabela)} WHERE ${b(e.chave)} IN (${a}) ORDER BY id`,i),n=new Map;for(let r of t){let t=Number(r[e.chave]),i=n.get(t);i===void 0?n.set(t,[r]):i.push(r)}o=o.map(t=>({...t,[e.campo]:n.get(Number(t.id))??[]}))}return o}trocarFilhos(e,t,n){for(let r of e.filhos??[]){let e=n[r.campo];if(!Array.isArray(e))continue;this.bd.executar(`DELETE FROM ${b(r.tabela)} WHERE ${b(r.chave)} = ?`,[t]);let i=this.colunasDa(r.tabela),a=e[0];a!==void 0&&this.avisarCamposIgnorados(r.tabela,{...a,[r.chave]:t});let o=0;for(let n of e){let e=Number(n.id);Number.isFinite(e)?e>o&&(o=e):e=++o;let a=S(r.tabela,i,{...n,id:e,[r.chave]:t});this.bd.executar(a.sql,a.parametros)}}}avisarCamposIgnorados(e,t){if(this.avisadas.has(e))return;let n=new Set(this.colunasDa(e).map(e=>e.nome)),r=Object.keys(t).filter(e=>!n.has(e));r.length!==0&&(this.avisadas.add(e),console.warn(`${e}: campo(s) que a tabela não tem, descartado(s) na gravação: ${r.join(`, `)}.`))}};function T(e,t){let n=e.apelidos;if(n===void 0)return t;let r={...t},i=!1;for(let[e,t]of Object.entries(n))e in r&&(r[t]===void 0&&(r[t]=r[e]),delete r[e],i=!0);return i?r:t}function E(e,t){let n=e.json;if(n===void 0)return t;let r={...t};for(let e of n){let t=r[e];t!=null&&typeof t!=`string`&&(r[e]=JSON.stringify(t))}return r}function ue(e,t){let n=e.json;if(n===void 0)return t;let r={...t};for(let e of n){let t=r[e];if(typeof t==`string`)try{r[e]=JSON.parse(t===``?`null`:t)}catch{r[e]=t.trimStart().startsWith(`{`)?{}:[]}}return r}function D(e,t){let n=e.filhos??[];if(n.length===0)return t;let r={...t};for(let e of n)delete r[e.campo];return r}var de=class{bytes;usados=0;constructor(){this.bytes=new Uint8Array(65536)}ler(e,t){if(t>=this.usados)return 0;let n=Math.min(e.length,this.usados-t);return e.set(this.bytes.subarray(t,t+n)),n}escrever(e,t){return this.reservar(t+e.length),this.bytes.set(e,t),this.usados=Math.max(this.usados,t+e.length),e.length}tamanho(){return this.usados}truncar(e){this.reservar(e),e<this.usados&&this.bytes.fill(0,e,this.usados),this.usados=e}sincronizar(){}fechar(){}reservar(e){if(e<=this.bytes.length)return;let t=this.bytes.length;for(;t<e;)t*=2;let n=new Uint8Array(t);n.set(this.bytes.subarray(0,this.usados)),this.bytes=n}},fe=class{arquivos=new Map;pastas=new Set([`/`]);abrir(e,t){let n=this.arquivos.get(e);if(n!==void 0)return t.exclusivo?null:(t.truncar&&n.truncar(0),n);if(!t.criar)return null;let r=new de;return this.arquivos.set(e,r),r}existe(e){return this.arquivos.has(e)||this.pastas.has(e)}ehPasta(e){return this.pastas.has(e)}tamanhoDe(e){return this.arquivos.get(e)?.tamanho()??null}apagar(e){return this.arquivos.delete(e)}criarPasta(e){return!this.pastas.has(e)&&(this.pastas.add(e),!0)}apagarPasta(e){return this.pastas.delete(e)}};const O={OK:0,BADF:8,EXIST:20,INVAL:28,ISDIR:31,NOENT:44,NOSYS:52,NOTDIR:54,NOTEMPTY:55},k={DIRETORIO:3,ARQUIVO:4,CARACTERE:2},A={CRIAR:1,PASTA:2,EXCLUSIVO:4,TRUNCAR:8},j={INICIO:0,ATUAL:1,FIM:2},M={FDSTAT:24,FILESTAT:64,PRESTAT:8};var pe=class{arquivos;memoria=null;descritores=new Map;proximo=4;constructor(e){this.arquivos=e}ligar(e){this.memoria=e}get vista(){if(this.memoria===null)throw Error("hospedeiro WASI usado antes de `ligar()`");return new DataView(this.memoria.buffer)}get bytes(){if(this.memoria===null)throw Error("hospedeiro WASI usado antes de `ligar()`");return new Uint8Array(this.memoria.buffer)}caminhoEm(e,t){let n=new TextDecoder().decode(this.bytes.subarray(e,e+t));return n.startsWith(`/`)?n:`/${n}`}get importacoes(){return{fd_close:this.fd_close,fd_read:this.fd_read,fd_write:this.fd_write,fd_seek:this.fd_seek,fd_sync:this.fd_sync,fd_fdstat_get:this.fd_fdstat_get,fd_fdstat_set_flags:()=>O.OK,fd_filestat_get:this.fd_filestat_get,fd_filestat_set_size:this.fd_filestat_set_size,fd_prestat_get:this.fd_prestat_get,fd_prestat_dir_name:this.fd_prestat_dir_name,path_open:this.path_open,path_create_directory:this.path_create_directory,path_remove_directory:this.path_remove_directory,path_filestat_get:this.path_filestat_get,path_filestat_set_times:()=>O.OK,path_unlink_file:this.path_unlink_file,path_readlink:()=>O.INVAL,environ_get:()=>O.OK,environ_sizes_get:this.environ_sizes_get,clock_time_get:this.clock_time_get,random_get:this.random_get,poll_oneoff:()=>O.NOSYS,proc_exit:e=>{throw Error(`o motor chamou proc_exit(${e}) — isto é defeito, não fluxo`)}}}fd_close=e=>{let t=this.descritores.get(e);return t===void 0?O.BADF:(t.arquivo.fechar(),this.descritores.delete(e),O.OK)};fd_read=(e,t,n,r)=>{let i=this.descritores.get(e);if(i===void 0)return O.BADF;let a=0;for(let e=0;e<n;e++){let n=this.vista.getUint32(t+e*8,!0),r=this.vista.getUint32(t+e*8+4,!0);if(r===0)continue;let o=new Uint8Array(r),s=i.arquivo.ler(o,i.posicao);if(this.bytes.set(o.subarray(0,s),n),i.posicao+=s,a+=s,s<r)break}return this.vista.setUint32(r,a,!0),O.OK};fd_write=(e,t,n,r)=>{let i=0;for(let r=0;r<n;r++){let n=this.vista.getUint32(t+r*8,!0),a=this.vista.getUint32(t+r*8+4,!0),o=this.bytes.subarray(n,n+a);if(e===1||e===2){let t=new TextDecoder().decode(o).trimEnd();t!==``&&console[e===2?`error`:`log`](`[Bioma SQL] ${t}`),i+=a;continue}let s=this.descritores.get(e);if(s===void 0)return O.BADF;let c=s.arquivo.escrever(o.slice(),s.posicao);s.posicao+=c,i+=c}return this.vista.setUint32(r,i,!0),O.OK};fd_seek=(e,t,n,r)=>{let i=this.descritores.get(e);if(i===void 0)return O.BADF;let a=(n===j.INICIO?0:n===j.ATUAL?i.posicao:i.arquivo.tamanho())+Number(t);return a<0?O.INVAL:(i.posicao=a,this.vista.setBigUint64(r,BigInt(a),!0),O.OK)};fd_sync=e=>{let t=this.descritores.get(e);return t===void 0?O.BADF:(t.arquivo.sincronizar(),O.OK)};fd_fdstat_get=(e,t)=>{let n=e===3?k.DIRETORIO:e<=2?k.CARACTERE:this.descritores.has(e)?k.ARQUIVO:null;return n===null?O.BADF:(this.bytes.fill(0,t,t+M.FDSTAT),this.vista.setUint8(t,n),this.vista.setBigUint64(t+8,18446744073709551615n,!0),this.vista.setBigUint64(t+16,18446744073709551615n,!0),O.OK)};fd_filestat_get=(e,t)=>{let n=this.descritores.get(e);return n===void 0?e===3?this.escreverStat(t,k.DIRETORIO,0):O.BADF:this.escreverStat(t,k.ARQUIVO,n.arquivo.tamanho())};fd_filestat_set_size=(e,t)=>{let n=this.descritores.get(e);return n===void 0?O.BADF:(n.arquivo.truncar(Number(t)),O.OK)};fd_prestat_get=(e,t)=>e===3?(this.vista.setUint8(t,0),this.vista.setUint32(t+4,1,!0),O.OK):O.BADF;fd_prestat_dir_name=(e,t,n)=>e===3?(this.bytes.set(new TextEncoder().encode(`/`).subarray(0,n),t),O.OK):O.BADF;path_open=(e,t,n,r,i,a,o,s,c)=>{let l=this.caminhoEm(n,r);if((i&A.PASTA)!==0)return this.arquivos.ehPasta(l)?O.OK:O.NOTDIR;if(this.arquivos.ehPasta(l))return O.ISDIR;let u=(i&A.CRIAR)!==0,d=(i&A.EXCLUSIVO)!==0,f=this.arquivos.existe(l);if(d&&f)return O.EXIST;if(!u&&!f)return O.NOENT;let p=this.arquivos.abrir(l,{criar:u,truncar:(i&A.TRUNCAR)!==0,exclusivo:d});if(p===null)return f?O.EXIST:O.NOENT;let m=this.proximo++;return this.descritores.set(m,{arquivo:p,caminho:l,posicao:0}),this.vista.setUint32(c,m,!0),O.OK};path_create_directory=(e,t,n)=>this.arquivos.criarPasta(this.caminhoEm(t,n))?O.OK:O.EXIST;path_remove_directory=(e,t,n)=>this.arquivos.apagarPasta(this.caminhoEm(t,n))?O.OK:O.NOENT;path_filestat_get=(e,t,n,r,i)=>{let a=this.caminhoEm(n,r);if(this.arquivos.ehPasta(a))return this.escreverStat(i,k.DIRETORIO,0);let o=this.arquivos.tamanhoDe(a);return o===null?O.NOENT:this.escreverStat(i,k.ARQUIVO,o)};path_unlink_file=(e,t,n)=>this.arquivos.apagar(this.caminhoEm(t,n))?O.OK:O.NOENT;environ_sizes_get=(e,t)=>(this.vista.setUint32(e,0,!0),this.vista.setUint32(t,0,!0),O.OK);clock_time_get=(e,t,n)=>(this.vista.setBigUint64(n,BigInt(Date.now())*1000000n,!0),O.OK);random_get=(e,t)=>{let n=this.bytes.subarray(e,e+t);for(let e=0;e<t;e+=65536)crypto.getRandomValues(n.subarray(e,Math.min(e+65536,t)));return O.OK};escreverStat(e,t,n){return this.bytes.fill(0,e,e+M.FILESTAT),this.vista.setUint8(e+16,t),this.vista.setBigUint64(e+24,1n,!0),this.vista.setBigUint64(e+32,BigInt(n),!0),O.OK}};const N=new TextEncoder,P={OK:0,NAO_E_BANCO:26,LINHA:100,FIM:101},F={INTEIRO:1,REAL:2,TEXTO:3,BLOB:4,NULO:5},me={9:`DELETE`,18:`INSERT`,23:`UPDATE`};var he=class{atendentes=null;ligar(e){this.atendentes=e}importacoes={rastro:(e,t,n)=>{this.atendentes?.rastro(t,n)},mudanca:(e,t,n,r,i,a)=>{this.atendentes?.mudanca(t,n,r,i,a)},progresso:e=>this.atendentes?.progresso()??0}};async function ge(e){let t=new pe(e.arquivos??new fe),n=new he,r=(await I(e.modulo,t,n)).exports;return t.ligar(r.memory),r._initialize(),new L(r,n,e.caminho??`/bioma.sqlite`,e.chave)}async function I(e,t,n){let r={wasi_snapshot_preview1:t.importacoes,bioma:n.importacoes};if(e instanceof WebAssembly.Module)return WebAssembly.instantiate(e,r);if(e instanceof Response||e instanceof Promise)try{let{instance:t}=await WebAssembly.instantiateStreaming(e,r);return t}catch{let t=await e,{instance:n}=await WebAssembly.instantiate(await t.clone().arrayBuffer(),r);return n}return WebAssembly.instantiate(await WebAssembly.compile(e),r)}var L=class{motor;indice;celula;fechado=!1;ouvinteDoRastro=null;ouvinteDaMudanca=null;decidir=null;falhaNoGancho=null;interrompido=!1;constructor(e,t,n,r){if(this.motor=e,this.celula=e.biomasql_wasm_alocar(4),this.celula===0)throw Error(`Bioma SQL: o motor não alocou nem quatro bytes`);let i=r===void 0?new Uint8Array:typeof r==`string`?N.encode(r):r,a=this.escreverTexto(n),o=i.byteLength===0?0:this.escreverBytes(i);try{let t=e.biomasql_wasm_abrir(a,1,o,i.byteLength);if(t<0)throw Error(-t===P.NAO_E_BANCO?`Bioma SQL: ${n} não abriu — a chave não confere, ou o arquivo não é um banco`:`Bioma SQL não abriu ${n} (código ${-t})`);this.indice=t}finally{e.biomasql_wasm_liberar(a),o!==0&&(new Uint8Array(e.memory.buffer).fill(0,o,o+i.byteLength),e.biomasql_wasm_liberar(o))}t.ligar({rastro:(e,t)=>this.aoRastro(e,t),mudanca:(e,t,n,r,i)=>this.aoMudar(e,t,n,r,i),progresso:()=>this.aoProgredir()})}get versao(){return this.lerTexto(this.motor.biomasql_wasm_versao())}executar(e,t){let n=this.preparar(e,t);try{let t=this.motor.biomasql_wasm_passo(n);return t!==P.FIM&&t!==P.LINHA&&this.lancar(e),this.motor.biomasql_wasm_alteracoes(this.indice)}finally{this.motor.biomasql_wasm_finalizar(n),this.conferirGanchos()}}executarRoteiro(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let t=this.escreverTexto(e),n;try{n=this.motor.biomasql_wasm_roteiro(this.indice,t)}finally{this.motor.biomasql_wasm_liberar(t)}n!==P.OK&&this.lancar(e),this.conferirGanchos()}consultar(e,t){let n=this.preparar(e,t);try{let t=this.motor.biomasql_wasm_colunas(n),r=[];for(let e=0;e<t;e++)r.push(this.lerTexto(this.motor.biomasql_wasm_nome_coluna(n,e)));let i=[],a=this.motor.biomasql_wasm_passo(n);for(;a===P.LINHA;){let e={};for(let i=0;i<t;i++)e[r[i]]=this.lerColuna(n,i);i.push(e),a=this.motor.biomasql_wasm_passo(n)}return a!==P.FIM&&this.lancar(e),i}finally{this.motor.biomasql_wasm_finalizar(n),this.conferirGanchos()}}escalar(e,t){let n=this.preparar(e,t);try{let t=this.motor.biomasql_wasm_passo(n);return t!==P.LINHA&&t!==P.FIM&&this.lancar(e),t===P.LINHA?this.lerColuna(n,0):null}finally{this.motor.biomasql_wasm_finalizar(n),this.conferirGanchos()}}emTransacao(e){this.executar(`BEGIN`);try{let t=e();return this.executar(`COMMIT`),t}catch(e){throw this.executar(`ROLLBACK`),e}}integridadeIncremental(e=`main`){return this.consultar(`SELECT objeto, mensagem FROM bio_intck(?)`,[e]).map(e=>({objeto:e.objeto===null?null:String(e.objeto),mensagem:String(e.mensagem)}))}recuperar(e={}){return this.consultar(`SELECT sql FROM bio_recover(?, ?)`,[e.esquema??`main`,e.perdidos??null]).map(e=>String(e.sql))}recomendarIndices(e,t){return(t===void 0?this.consultar(`SELECT * FROM bio_expert(?)`,[e]):this.consultar(`SELECT * FROM bio_expert(?, ?)`,[e,t])).map(e=>({consulta:String(e.consulta??``),indices:e.indices===null?null:String(e.indices).trim(),plano:e.plano===null?null:String(e.plano).trim(),candidatos:e.candidatos===null?null:String(e.candidatos).trim()}))}rastrear(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);this.ouvinteDoRastro=e,this.motor.biomasql_wasm_rastrear(this.indice,e===null?0:1)}observar(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);this.ouvinteDaMudanca=e,this.motor.biomasql_wasm_observar(this.indice,e===null?0:1)}vigiar(e,t){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let n=t!==null&&e>0;this.decidir=n?t:null,this.motor.biomasql_wasm_vigiar(this.indice,n?e:0)}interromper(){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);this.motor.biomasql_wasm_interromper(this.indice)}serializar(){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let e=this.motor.biomasql_wasm_serializar(this.indice,this.celula);if(e===0)throw Error(`Bioma SQL: o motor não serializou o banco`);try{return new Uint8Array(this.motor.memory.buffer,e,this.lerCelula()).slice()}finally{this.motor.biomasql_wasm_liberar(e)}}desserializar(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let t=this.motor.biomasql_wasm_alocar(e.byteLength);if(t===0)throw Error(`Bioma SQL: não coube o banco de ${e.byteLength} bytes na memória`);new Uint8Array(this.motor.memory.buffer).set(e,t);let n=this.motor.biomasql_wasm_desserializar(this.indice,t,e.byteLength);if(n!==P.OK)throw Error(`Bioma SQL: o conteúdo não foi aceito como banco (código ${n})`)}rechavear(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let t=e===void 0?new Uint8Array:typeof e==`string`?N.encode(e):e,n=t.byteLength===0?0:this.escreverBytes(t);try{let e=this.motor.biomasql_wasm_rechavear(this.indice,n,t.byteLength);if(e!==P.OK)throw Error(`Bioma SQL: a troca de chave falhou (código ${e})`)}finally{n!==0&&this.motor.biomasql_wasm_liberar(n)}}fechar(){this.fechado||(this.fechado=!0,this.motor.biomasql_wasm_fechar(this.indice),this.motor.biomasql_wasm_liberar(this.celula))}preparar(e,t){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let n=this.escreverTexto(e),r;try{r=this.motor.biomasql_wasm_preparar(this.indice,n,this.celula)}finally{this.motor.biomasql_wasm_liberar(n)}if(r<0&&this.lancar(e),this.lerCelula()!==0)throw this.motor.biomasql_wasm_finalizar(r),Error(`Bioma SQL: o SQL traz mais de um comando; use executarRoteiro\n  SQL: ${e}`);try{this.ligar(r,t)}catch(e){throw this.motor.biomasql_wasm_finalizar(r),e}return r}ligar(e,t){if(t!==void 0){if(Array.isArray(t)){for(let n=0;n<t.length;n++)this.ligarEm(e,n+1,t[n]);return}for(let[n,r]of Object.entries(t)){let t=/^[:@$]/.test(n)?n:`:${n}`,i=this.escreverTexto(t),a;try{a=this.motor.biomasql_wasm_indice_parametro(e,i)}finally{this.motor.biomasql_wasm_liberar(i)}if(a===0)throw Error(`Bioma SQL: o SQL não declara o parâmetro ${t}`);this.ligarEm(e,a,r)}}}ligarEm(e,t,n){if(n===null){this.motor.biomasql_wasm_ligar_nulo(e,t);return}if(typeof n==`bigint`){this.motor.biomasql_wasm_ligar_inteiro(e,t,n);return}if(typeof n==`number`){Number.isInteger(n)?this.motor.biomasql_wasm_ligar_inteiro(e,t,BigInt(n)):this.motor.biomasql_wasm_ligar_real(e,t,n);return}if(n instanceof Uint8Array){let r=this.escreverBytes(n);try{this.motor.biomasql_wasm_ligar_blob(e,t,r,n.byteLength)}finally{this.motor.biomasql_wasm_liberar(r)}return}let r=new TextEncoder().encode(n),i=this.motor.biomasql_wasm_alocar(r.length+1);if(i===0)throw Error(`Bioma SQL: o motor não alocou o valor a ligar`);try{new Uint8Array(this.motor.memory.buffer).set(r,i),this.motor.biomasql_wasm_ligar_texto(e,t,i,r.length)}finally{this.motor.biomasql_wasm_liberar(i)}}lerColuna(e,t){switch(this.motor.biomasql_wasm_tipo_coluna(e,t)){case F.NULO:return null;case F.INTEIRO:{let n=this.motor.biomasql_wasm_inteiro(e,t);return n>=-9007199254740991n&&n<=9007199254740991n?Number(n):n}case F.REAL:return this.motor.biomasql_wasm_real(e,t);case F.BLOB:{let n=this.motor.biomasql_wasm_blob(e,t),r=this.motor.biomasql_wasm_bytes(e,t);return n===0||r===0?new Uint8Array:new Uint8Array(this.motor.memory.buffer,n,r).slice()}default:{let n=this.motor.biomasql_wasm_texto(e,t),r=this.motor.biomasql_wasm_bytes(e,t);return new TextDecoder().decode(new Uint8Array(this.motor.memory.buffer,n,r).slice())}}}aoRastro(e,t){let n=this.ouvinteDoRastro;if(n!==null)try{n({sql:this.lerTexto(e),ms:Number(t)/1e6})}catch(e){this.guardarFalha(e)}}aoMudar(e,t,n,r,i){let a=this.ouvinteDaMudanca;if(a!==null)try{let o=me[e];if(o===void 0)return;a({operacao:o,esquema:this.lerTexto(t),tabela:this.lerTexto(n),chaveAntiga:o===`INSERT`?null:r,chaveNova:o===`DELETE`?null:i,antiga:o===`INSERT`?null:this.linhaPre(1),nova:o===`DELETE`?null:this.linhaPre(0)})}catch(e){this.guardarFalha(e)}}aoProgredir(){let e=this.decidir;if(e===null)return 0;try{return e()?0:(this.interrompido=!0,1)}catch(e){return this.guardarFalha(e),1}}linhaPre(e){let t=this.motor.biomasql_wasm_pre_contagem(this.indice),n=[];for(let r=0;r<t;r++)n.push(this.lerValorPre(r,e));return n}lerValorPre(e,t){switch(this.motor.biomasql_wasm_pre_tipo(this.indice,e,t)){case F.NULO:return null;case F.INTEIRO:{let n=this.motor.biomasql_wasm_pre_inteiro(this.indice,e,t);return n>=-9007199254740991n&&n<=9007199254740991n?Number(n):n}case F.REAL:return this.motor.biomasql_wasm_pre_real(this.indice,e,t);case F.BLOB:{let n=this.motor.biomasql_wasm_pre_blob(this.indice,e,t),r=this.motor.biomasql_wasm_pre_bytes(this.indice,e,t);return n===0||r===0?new Uint8Array:new Uint8Array(this.motor.memory.buffer,n,r).slice()}default:{let n=this.motor.biomasql_wasm_pre_texto(this.indice,e,t),r=this.motor.biomasql_wasm_pre_bytes(this.indice,e,t);return n===0?``:new TextDecoder().decode(new Uint8Array(this.motor.memory.buffer,n,r).slice())}}}guardarFalha(e){this.falhaNoGancho??=e instanceof Error?e:Error(String(e))}conferirGanchos(){let e=this.falhaNoGancho;if(this.falhaNoGancho=null,e!==null)throw e}escreverBytes(e){let t=this.motor.biomasql_wasm_alocar(e.byteLength+1);if(t===0)throw Error(`Bioma SQL: o motor não alocou o bloco pedido`);return new Uint8Array(this.motor.memory.buffer).set(e,t),t}escreverTexto(e){let t=new TextEncoder().encode(e),n=this.motor.biomasql_wasm_alocar(t.length+1),r=new Uint8Array(this.motor.memory.buffer);return r.set(t,n),r[n+t.length]=0,n}lerCelula(){return new Int32Array(this.motor.memory.buffer,this.celula,1)[0]}lerTexto(e){if(e===0)return``;let t=new Uint8Array(this.motor.memory.buffer),n=e;for(;t[n]!==0;)n++;return new TextDecoder().decode(t.subarray(e,n))}lancar(e){if(this.conferirGanchos(),this.interrompido)throw this.interrompido=!1,Error(`Bioma SQL: consulta interrompida pelo vigia\n  SQL: ${e}`);let t=this.lerTexto(this.motor.biomasql_wasm_erro(this.indice));throw Error(`Bioma SQL: ${t}\n  SQL: ${e}`)}},_e=``+new URL(`biomasql-CuMmKljI.wasm`,import.meta.url).href,ve=class{vaga;constructor(e){this.vaga=e}ler(e,t){return this.vaga.punho.read(e,{at:t})}escrever(e,t){return this.vaga.punho.write(e,{at:t})}tamanho(){return this.vaga.punho.getSize()}truncar(e){this.vaga.punho.truncate(e)}sincronizar(){this.vaga.punho.flush()}fechar(){}},ye=class e{vagas;caminhoDoBanco;pastas=new Set([`/`,`/.`]);constructor(e,t){this.vagas=e,this.caminhoDoBanco=t}static async preparar(t){let n=await(await navigator.storage.getDirectory()).getDirectoryHandle(t.pasta,{create:!0}),r=new Map;for(let e of[``,`-journal`,`-wal`]){let i=`${t.banco}${e}`,a=await(await n.getFileHandle(i,{create:!0})).createSyncAccessHandle();r.set(`/${i}`,{punho:a,existe:e===``&&a.getSize()>0})}return new e(r,`/${t.banco}`)}abrir(e,t){let n=this.vagas.get(e);return n===void 0||t.exclusivo&&n.existe||!n.existe&&!t.criar?null:(t.truncar&&n.punho.truncate(0),n.existe=!0,new ve(n))}existe(e){return this.vagas.get(e)?.existe??this.pastas.has(e)}ehPasta(e){return this.pastas.has(e)}tamanhoDe(e){let t=this.vagas.get(e);return t?.existe?t.punho.getSize():null}apagar(e){let t=this.vagas.get(e);return t===void 0||!t.existe?!1:(t.punho.truncate(0),t.punho.flush(),t.existe=!1,!0)}criarPasta(e){return!this.pastas.has(e)&&(this.pastas.add(e),!0)}apagarPasta(e){return this.pastas.delete(e)}encerrar(){for(let e of this.vagas.values())e.punho.close();this.vagas.clear()}};const be={metasFontes:`SELECT * FROM vw_note_metas_fontes`,despesaPorCategoria:`SELECT categoria_id, total FROM vw_note_despesa_por_categoria`,categoriasEmOrdem:`SELECT * FROM vw_note_categorias_financeiro`};function xe(e){let t=be[e];if(t===void 0)throw Error(`consulta desconhecida: ${e} (ver src/db/consultas.ts)`);return t}const Se={perguntas:{tabela:`not_perguntas`,familia:`curado`},poesias:{tabela:`not_poesias`,familia:`curado`,apelidos:{anteriorId:`anterior_id`,proximoId:`proximo_id`}},receitas:{tabela:`not_receitas`,familia:`curado`},guias:{tabela:`not_guias`,familia:`curado`},kits:{tabela:`not_kits`,familia:`curado`,filhos:[{campo:`itens`,tabela:`not_kits_itens`,chave:`kit_id`}]},criacao_modulos:{tabela:`not_criacao_modulos`,familia:`curado`},imite_cartoes:{tabela:`not_imite_cartoes`,familia:`curado`},principios:{tabela:`not_principios`,familia:`curado`},cronologia:{tabela:`not_cronologia`,familia:`curado`},anotacao_modelos:{tabela:`not_anotacao_modelos`,familia:`curado`},estoque_catalogo:{tabela:`not_estoque_catalogo`,familia:`curado`},tutorial:{tabela:`not_tutorial`,familia:`curado`},pasta:{tabela:`not_pasta`,familia:`privado`},anotacao:{tabela:`not_anotacao`,familia:`privado`},not_caderno_estudo:{tabela:`not_caderno_estudo`,familia:`privado`},sessoes_estudo:{tabela:`not_sessoes_estudo`,familia:`privado`},categorias_financeiro:{tabela:`not_categorias_financeiro`,familia:`privado`},transacoes:{tabela:`not_transacoes`,familia:`privado`},recorrencias_financeiro:{tabela:`not_recorrencias_financeiro`,familia:`privado`},meta:{tabela:`not_meta`,familia:`privado`},kits_local:{tabela:`not_kits_local`,familia:`privado`,filhos:[{campo:`itens`,tabela:`not_kits_local_itens`,chave:`kit_id`}]},documentos_cofre:{tabela:`not_documentos_cofre`,familia:`privado`},estoque_alimentos:{tabela:`not_estoque_alimentos`,familia:`privado`},relatorios_ministerio:{tabela:`not_relatorios_ministerio`,familia:`privado`},contadores_ministerio:{tabela:`not_contadores_ministerio`,familia:`privado`},estudos_biblicos:{tabela:`not_estudos_biblicos`,familia:`privado`},estudo_registros:{tabela:`not_estudo_registros`,familia:`privado`},meu_perfil:{tabela:`not_meu_perfil`,familia:`privado`},calendario_tipos:{tabela:`not_calendario_tipos`,familia:`privado`},calendario_eventos:{tabela:`not_calendario_eventos`,familia:`privado`},poesias_local:{tabela:`not_poesias_local`,familia:`privado`},guias_local:{tabela:`not_guias_local`,familia:`privado`},receitas_local:{tabela:`not_receitas_local`,familia:`privado`}};let R;function z(){if(R===void 0)throw Error(`o repositório ainda não foi montado`);return R}function Ce(e){R=new le(e,Se),R.lerEsquemaAplicado()}function B(){return z().tabelas()}function we(e,t,n){let r=C(t,z().colunasDa(t),n);e.executar(r.sql,r.parametros)}function Te(e,t,n,r){switch(t.op){case`otimizar`:return n&&(e.executar(`PRAGMA optimize`),e.executar(`PRAGMA incremental_vacuum(64)`)),n;case`pronto`:return n;case`todos`:return z().todos(t.store);case`consulta`:return e.consultar(xe(t.nome),[...t.parametros??[]]);case`obter`:return z().obter(t.store,t.id);case`contar`:return z().contar(t.store);case`salvar`:{let e=z().salvar(t.store,t.registro);return r(),e}case`excluir`:return z().excluir(t.store,t.id),r(),null;case`substituirTudo`:return z().substituirTudo(t.store,t.registros),r(),null}}function Ee(e){if(Number(e.escalar(`SELECT COUNT(*) FROM sqlite_schema WHERE type = 'table' AND name = 'not_dados'`)??0)===0){V(e);return}let t=new Set;z().emTransacao(()=>{for(let n of z().stores()){let r=e.consultar(`SELECT dados FROM not_dados WHERE tabela = ? ORDER BY id`,[n]);for(let e of r){let r;try{r=JSON.parse(String(e.dados))}catch{t.add(`${n} (JSON ilegível)`);continue}z().salvar(n,r)}e.executar(`DELETE FROM not_dados WHERE tabela = ?`,[n])}for(let n of e.consultar(`SELECT DISTINCT tabela FROM not_dados`))t.add(String(n.tabela));t.size===0&&(e.executar(`DROP TABLE IF EXISTS not_dados`),e.executar(`DROP TABLE IF EXISTS not_seq`)),V(e)}),t.size>0&&console.warn(`migração da Fase 8: store(s) sem destino, mantidos em \`not_dados\`: ${[...t].join(`, `)}. A tabela antiga não foi apagada.`)}function V(e){e.executar(`INSERT INTO not_meta_banco (chave, valor) VALUES (?, ?) ON CONFLICT(chave) DO NOTHING`,[`esquema_em_colunas`,`1`])}const H=`note.sqlite`,U=`dump`;let W,G=!1,K;function q(){if(W===void 0)throw Error(`banco ainda não abriu`);return W}let J;function Y(){return J??=new Promise((e,t)=>{let n=indexedDB.open(`note_fallback`,1);n.onupgradeneeded=()=>n.result.createObjectStore(`kv`),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error??Error(`IndexedDB não abriu`))}),J}async function X(e){let t=await Y();return new Promise((n,r)=>{let i=t.transaction(`kv`,`readonly`).objectStore(`kv`).get(e);i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error??Error(`leitura do IndexedDB falhou`))})}async function Z(e,t){let n=await Y();return new Promise((r,i)=>{let a=n.transaction(`kv`,`readwrite`);a.objectStore(`kv`).put(t,e),a.oncomplete=()=>r(),a.onerror=()=>i(a.error??Error(`gravação no IndexedDB falhou`))})}async function De(){return await X(U)}async function Oe(e){return Z(U,e)}function ke(e){if(e===void 0||(e.tamanhoDe(e.caminhoDoBanco)??0)===0)return null;let t=e.abrir(e.caminhoDoBanco,{criar:!1,truncar:!1,exclusivo:!1});if(t===null)return null;let n=new Uint8Array(16);return t.ler(n,0),n}async function Ae(){let e;try{e=await De()}catch{return}if(e===void 0||e.versao!==2)return;let t=new Set(B());q().emTransacao(()=>{for(let[n,r]of Object.entries(e.tabelas))if(t.has(n))for(let e of r)we(q(),n,e)})}let Q;function je(){G||Q!==void 0||(Q=setTimeout(()=>{Q=void 0;let e={};for(let t of B())e[t]=q().consultar(`SELECT * FROM ${b(t)}`);Oe({versao:2,tabelas:e}).catch(e=>{console.warn(`persistência de fallback falhou`,e)})},200))}function Me(e){return self.isSecureContext?e instanceof DOMException&&e.name===`NoModificationAllowedError`?`instancia-dupla`:`indisponivel`:`origem-insegura`}function Ne(){let e=q().escalar(`SELECT count(*) FROM sqlite_master WHERE name = 'sqlite_stat1'`);Number(e??0)===0&&q().executar(`ANALYZE`)}function Pe(){q().executarRoteiro(ie(`note`).join(`
`)),q().executar(ae)}async function Fe(){let e;try{e=await ye.preparar({pasta:`note-opfs`,banco:H}),G=!0}catch(e){K=Me(e),console.warn(`OPFS indisponível (${K}); Bioma SQL em memória com despejo no IndexedDB.`,e)}let t=ke(e),n=e===void 0?`sem-arquivo`:se(t),r=e===void 0?void 0:await ce(X,Z);W=await ge({modulo:fetch(_e),caminho:e?.caminhoDoBanco??`/${H}`,...e===void 0?{}:{arquivos:e},...r===void 0||n===`em-claro`?{}:{chave:r}}),n===`em-claro`&&r!==void 0&&(console.info(`Kobi Note: cifrando o banco deste aparelho pela primeira vez.`),q().rechavear(r)),q().executar(`PRAGMA auto_vacuum = INCREMENTAL`),q().executarRoteiro(ee(`note`).join(`;
`)),Ce(q()),Ee(q()),G||await Ae(),Pe(),Ne();let i={tipo:`pronto`,versaoSqlite:q().versao,persistente:G,...K===void 0?{}:{motivo:K}};self.postMessage(i)}const $=Fe();self.addEventListener(`message`,e=>{let t=e.data;$.then(()=>{let e={seq:t.seq,ok:!0,valor:Te(q(),t.operacao,G,je)};self.postMessage(e)}).catch(e=>{let n={seq:t.seq,ok:!1,erro:String(e)};self.postMessage(n)})}),$.catch(e=>{let t={tipo:`falha`,erro:String(e)};self.postMessage(t)});