var e=[{tabela:`not_perguntas`,colunas:[`pergunta`,`referencia`,`resposta1`,`resposta2`,`resposta3`,`resposta4`,`explicacao`]},{tabela:`not_poesias`,colunas:[`titulo`,`conteudo`]},{tabela:`not_receitas`,colunas:[`titulo`,`categoria`,`ingredientes`,`instrucoes`]},{tabela:`not_cronologia_eventos`,colunas:[`titulo`,`resumo`,`referencia`,`periodo`,`obra_fonte`]},{tabela:`not_principios`,colunas:[`titulo`,`principio`,`referencia`,`explicacao`,`pratica`,`reflexoes`]},{tabela:`not_imite_cartoes`,colunas:[`titulo`,`tema`,`personagens`,`cenario`,`julgamento`,`correta`,`reenquadramento`,`referencia`,`espelho`]},{tabela:`not_criacao_modulos`,colunas:[`titulo`,`categoria`,`conceito`,`desafio`,`reflexao`,`referencia`]}];function t(e){return`${e}_fts`}function n({tabela:e,colunas:n}){let r=t(e),i=n.join(`, `),a=n.map(e=>`new.${e}`).join(`, `),o=n.map(e=>`old.${e}`).join(`, `);return[`CREATE VIRTUAL TABLE IF NOT EXISTS ${r} USING fts5(
      ${i},
      content = '${e}',
      content_rowid = 'id',
      tokenize = "unicode61 remove_diacritics 2"
    );`,`CREATE TRIGGER IF NOT EXISTS ${r}_ai AFTER INSERT ON ${e} BEGIN
      INSERT INTO ${r} (rowid, ${i}) VALUES (new.id, ${a});
    END;`,`CREATE TRIGGER IF NOT EXISTS ${r}_ad AFTER DELETE ON ${e} BEGIN
      INSERT INTO ${r} (${r}, rowid, ${i}) VALUES ('delete', old.id, ${o});
    END;`,`CREATE TRIGGER IF NOT EXISTS ${r}_au AFTER UPDATE ON ${e} BEGIN
      INSERT INTO ${r} (${r}, rowid, ${i}) VALUES ('delete', old.id, ${o});
      INSERT INTO ${r} (rowid, ${i}) VALUES (new.id, ${a});
    END;`,`CREATE VIRTUAL TABLE IF NOT EXISTS ${e}_vocab USING fts5vocab(${r}, row);`,`CREATE INDEX IF NOT EXISTS idx_${e}_publicar ON ${e} (id) WHERE publicar = 1;`]}e.map(({tabela:e})=>`SELECT '${e}' AS acervo, term, doc, cnt FROM ${e}_vocab`).join(` UNION ALL `),e.flatMap(n),e.map(({tabela:e})=>{let n=t(e);return`INSERT INTO ${n} (${n}) VALUES ('rebuild');`});function r(e){let t=``,n=0;for(;n<e.length;){let r=e.charAt(n),i=e.charAt(n+1);if(r===`-`&&i===`-`){for(;n<e.length&&e.charAt(n)!==`
`;)n++;t+=` `;continue}if(r===`/`&&i===`*`){for(n+=2;n<e.length&&(e.charAt(n)!==`*`||e.charAt(n+1)!==`/`);)n++;n+=2,t+=` `;continue}if(r===`'`||r===`"`||r==="`"){for(n++;n<e.length;){if(e.charAt(n)===r){if(e.charAt(n+1)===r){n+=2;continue}n++;break}n++}t+=` `;continue}if(r===`[`){for(;n<e.length&&e.charAt(n)!==`]`;)n++;n++,t+=` `;continue}t+=r,n++}return t}function i(e){let t=[],n=0,i=0,a=0,o=i=>{let o=e.slice(n,i),s=o.trim();if(s!==``&&r(s).trim()!==``){let e=o.length-o.trimStart().length;t.push({sql:s,inicio:n+e,fim:n+e+s.length})}n=i+1,a=0};for(;i<e.length;){let t=e.charAt(i),r=e.charAt(i+1);if(t===`-`&&r===`-`){for(;i<e.length&&e.charAt(i)!==`
`;)i++;continue}if(t===`/`&&r===`*`){for(i+=2;i<e.length&&(e.charAt(i)!==`*`||e.charAt(i+1)!==`/`);)i++;i+=2;continue}if(t===`'`||t===`"`||t==="`"){for(i++;i<e.length;){if(e.charAt(i)===t){if(e.charAt(i+1)===t){i+=2;continue}i++;break}i++}continue}if(t===`[`){for(;i<e.length&&e.charAt(i)!==`]`;)i++;i++;continue}if(t===`;`){if(a===0){o(i),i++;continue}i++;continue}let s=/^[A-Za-z_][A-Za-z_0-9]*/.exec(e.slice(i))?.[0];if(s!==void 0){let t=s.toUpperCase();(t===`BEGIN`&&e.slice(n,i).trim()!==``||t===`CASE`)&&a++,t===`END`&&a>0&&a--,i+=s.length;continue}i++}return o(e.length),t}var a={nucleo:`-- O esquema do banco do Kobi Admin — \`var/banco/bioma.sqlite\`.
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
`},o=/^CREATE\s+(?:UNIQUE\s+)?(TABLE|INDEX|VIEW)(?:\s+IF\s+NOT\s+EXISTS)?\s+([A-Za-z_][A-Za-z_0-9]*)/i,s={TABLE:`tabela`,INDEX:`indice`,VIEW:`vista`},c=/^\s{2,}([a-z_][a-z_0-9]*)\s+\S/;function l(e){let t=0;for(;t<e.length;){let n=e.charAt(t);if(n===`'`||n===`"`){for(t++;t<e.length&&e.charAt(t)!==n;)t++;t++;continue}if(n===`-`&&e.charAt(t+1)===`-`)return e.slice(t+2).trim();t++}}function u(e){let t=e.split(`
`),n=0;for(;n<t.length&&!/^\s*CREATE\b/i.test(t[n]??``);)n++;let r=[];for(let e=n-1;e>=0;e--){let n=(t[e]??``).trim();if(!n.startsWith(`--`))break;r.unshift(n.replace(/^--\s?/,``))}return{nota:r.join(`
`).trim(),comando:t.slice(n).join(`
`).trim()}}function d(e){let t=[];for(let n of i(e)){let{nota:e,comando:r}=u(n.sql),i=o.exec(r);if(i===null)throw Error(`o esquema canônico só descreve tabela e índice: ${r.slice(0,60)}`);let a={},d=[];for(let e of r.split(`
`)){let t=c.exec(e)?.[1];if(t===void 0)continue;d.push(t);let n=l(e);n!==void 0&&n!==``&&(a[t]=n)}t.push({nome:i[2]??``,tipo:s[(i[1]??``).toUpperCase()]??`indice`,sql:r,nota:e,colunas:a,campos:d})}return t}var f=new Map;function p(e){let t=f.get(e);return t===void 0&&(t=d(a[e]),f.set(e,t)),t}var m=[`note`,`flow`],h=new Map;function g(){let e=[...p(`nucleo`)],t=new Set(e.map(e=>e.nome));for(let n of m)for(let r of p(n))t.has(r.nome)||(t.add(r.nome),h.set(r.nome,n),e.push(r));return e}var _;function v(e){return e===`nucleo`?(_??=g(),_):p(e)}function y(e){return v(e).filter(e=>e.tipo===`tabela`).map(e=>e.nome)}var b=`bioma_carimbos`;`${b}`,`${b}`,Math.max(...[{versao:1,nome:`esquemaBase`,oQue:`o esquema canônico inteiro, com as sementes, o Tutorial e o catálogo de fábrica`},{versao:2,nome:`ordemNoAno`,oQue:"a coluna `ordem_no_ano` da Cronologia, que o `ordem_absoluta` não sabe dar"},{versao:3,nome:`cartoesImite`,oQue:`a tabela e o acervo de "Imite a Sua Fé"`},{versao:4,nome:`principiosBiblicos`,oQue:`a tabela e o acervo dos Princípios Bíblicos`},{versao:5,nome:`aplicarBusca`,oQue:"a FTS5 dos sete acervos, os gatilhos e o `rebuild`"},{versao:6,nome:`umaFonteDeVersao`,oQue:"a `_migracoes` do migrador legado sai: `bioma_esquema` fica como única"},{versao:7,nome:`limiteEmCentavos`,oQue:"o `limite_mensal` da categoria vira centavo em `INTEGER`, como o dinheiro do Kobi Note"},{versao:8,nome:`bancada`,oQue:`a bancada: toda tabela do Kobi Note e do Kobi Flow passa a existir também no admin`}].map(e=>e.versao)),y(`nucleo`);function x(e,t,n,r,i){return{id:e,modulo_id:t,titulo:n,resumo:r,conteudo:i.map(e=>`<p>${e}</p>`).join(``),ordem:e,publicar:1}}var S=[x(1,``,`Visão geral`,`O que é o Kobi Note e como ele guarda suas coisas`,[`O Kobi Note é um aplicativo <strong>do seu aparelho</strong>. Tudo o que você escreve — anotações, metas, finanças, relatórios — fica gravado localmente e não é enviado a servidor nenhum.`,`A tela inicial é o mapa do app: cada tile abre um módulo direto, e os tiles são agrupados em seções (Estudo Pessoal, Esteja Preparado, Extras, Pessoal, O Aplicativo). Não há tela intermediária. O botão de voltar do cabeçalho sempre sobe um nível.`,`Logo abaixo da agenda de hoje vem a <strong>faixa de números</strong> do mês: leitura, horas, estudo e metas. O cartão de metas é um botão — ele mostra as atingidas sobre o total e abre as Metas.`,`O botão de sincronizar, na tela inicial, baixa o <strong>conteúdo curado</strong> (guias, poesias, receitas, perguntas do jogo). Ele nunca apaga o que é seu, e o app funciona sem rede: sincronizar só atualiza o acervo.`,`Em cada módulo, o botão “?” do cabeçalho abre exatamente o tópico daquele módulo aqui no tutorial.`]),x(2,`anotacoes`,`Anotações`,`Escrever, organizar em pastas e apresentar`,[`Serve para tudo que você escreve: reuniões, discursos, visitas, estudos. Toque em <strong>+</strong> e escolha um modelo — ele já entra com os títulos prontos.`,`A gravação é automática: o texto é salvo pouco depois de você parar de digitar, e o rodapé do editor mostra a hora do último salvamento. Sem título, nada é gravado.`,`Dicas: <strong>fixe</strong> a anotação que você abre toda semana; <strong>arquive</strong> em vez de excluir o que já passou; e use o modo <strong>apresentar</strong> para ler no palco — o texto rola sozinho e a velocidade é ajustável.`]),x(3,`guias`,`Guias`,`Ler os guias do acervo e escrever os seus`,[`Os guias são explicações prontas, que vêm no acervo curado. A lista mistura os do acervo com os seus; os seus aparecem com a marca <em>Minha</em>.`,`No guia aberto você pode ouvir em voz alta, apresentar com rolagem automática ou compartilhar o texto. Editar e excluir só valem para os seus.`,`Dica: toque em <strong>+</strong> para escrever um guia próprio — ele fica no aparelho e nunca é substituído por uma sincronização.`]),x(4,`poesia`,`Poesia`,`Ler o acervo, favoritar e escrever`,[`O acervo de poesias é curado; as suas entram pelo <strong>+</strong> e ficam misturadas na mesma lista, com a marca <em>Minha</em>.`,`Na leitura há navegação sequencial (anterior/próxima) pelo acervo, barra de progresso, leitura em voz alta e modo apresentação.`,`Dica: a <strong>estrela</strong> marca favoritos, e favoritos sobem para o topo da lista. O botão de informação, na lista, explica o propósito das obras.`]),x(5,`receitas`,`Receitas`,`Buscar por categoria e guardar as suas`,[`A lista traz o acervo curado e as suas receitas. Os chips de emoji filtram por categoria — toque de novo no chip aceso para ver todas.`,`Ingredientes e modo de preparo são campos de <strong>linhas</strong>: um item por linha. É o formato que fica legível na leitura e na hora de ouvir em voz alta.`,`Dica: aqui você pode editar até as receitas do acervo — a sua versão fica no aparelho.`]),x(6,`jogo`,`Língua Pura`,`Praticar com as perguntas do acervo`,[`É um jogo de perguntas para fixar o que você estuda. As perguntas vêm do acervo curado e aumentam a cada sincronização.`,`Dica: erre sem medo — a explicação de cada resposta é a parte que ensina.`]),x(7,`criacao`,`Teve um Projeto?`,`Puzzles sobre o projeto na natureza`,[`Cada módulo apresenta um ser vivo e o que a engenharia aprendeu dele. Você mexe nos controles do gráfico e vê o efeito na hora.`,`Dica: a ilustração de cada módulo ensina o que o puzzle não mostra — a conta, o mecanismo, o contexto. Vale abrir.`]),x(8,`entenda`,`Entenda Melhor`,`Assuntos explicados com gráficos`,[`Assuntos que rendem mais quando visualizados: escalas, medições, cronologias. Os controles ficam dentro do próprio gráfico, e os textos mudam conforme você mexe.`,`Dica: as referências ficam no fim de cada assunto — vale conferir a fonte.`]),x(9,`cronologia`,`Cronologia`,`A linha do tempo dos períodos bíblicos`,[`A linha do tempo vai da criação aos nossos dias. Toque num período para posicionar a linha nele e ver os eventos daquele trecho.`,`Dica: use junto do Caderno de Estudo — datar o que você lê ajuda a fixar.`]),x(10,`caderno`,`Caderno de Estudo`,`Perguntas e respostas do seu estudo`,[`Um caderno para as suas perguntas e o que você descobriu sobre cada uma. Diferente das Anotações, aqui o formato é pergunta e resposta.`,`Dica: registre a pergunta assim que ela aparecer, mesmo sem resposta. A lista de perguntas abertas é o seu roteiro de estudo.`]),x(11,`prep`,`Esteja Preparado`,`Kits, estoque e documentos`,[`O preparo para emergências: listas de verificação (kits), estoque de alimentos com validade e um cofre de documentos. Os três abrem de tiles próprios, na seção "Esteja Preparado" da tela inicial, que começa com o índice de prontidão.`,`O cofre guarda os documentos <strong>cifrados</strong> no próprio aparelho, com a sua senha. Sem a senha ninguém abre — nem o app.`,`Dica: comece pelo kit sugerido e marque o que já tem; o indicador de prontidão mostra o quanto falta.`]),x(12,`financeiro`,`Financeiro`,`Entradas, saídas e recorrências`,[`Lançamentos de entrada e saída por categoria, com recorrências para o que repete todo mês.`,`Dica: crie as categorias que você realmente usa e apague as que não usa — relatório com categoria vazia não informa nada.`]),x(13,`metas`,`Metas`,`Objetivos com progresso`,[`Metas com prazo e progresso. Elas não têm tile próprio: quem as abre é o cartão de metas da faixa de números da tela inicial, o que mostra as atingidas sobre o total.`,`Dica: meta boa é a que caber num número — horas, capítulos, visitas. O progresso se calcula sozinho a partir dele.`]),x(14,`ministerio`,`Vida e Ministério`,`Relatório do mês e contadores`,[`Os contadores do mês e o relatório. Os contadores somam durante o dia, e o relatório fecha o mês com o total. Os atalhos da tela abrem os relatórios, os estudos e o "Fazer Mais".`,`Dica: registre no fim de cada saída, não no fim do mês — é a diferença entre um número exato e um número lembrado.`]),x(15,`estudo`,`Momento de Estudo`,`Sessões de estudo com tempo`,[`Marca sessões de estudo com duração, para você ver quanto tempo dedicou e a quê.`,`Dica: uma sessão curta registrada vale mais que uma longa esquecida.`]),x(16,`leitura`,`Leitura da Bíblia`,`Acompanhar a leitura por livro`,[`Acompanha a leitura livro por livro, marcando o que já foi lido.`,`Dica: o progresso é por capítulo — marcar assim que terminar mantém o histórico honesto.`]),x(17,`calendario`,`Calendário`,`Eventos por tipo`,[`Eventos coloridos por tipo (reunião, compromisso, consulta, pessoal), em cinco vistas: dia, semana, mês, ano e agenda.`,`Os três cartões do topo falam do período que está na tela: as <strong>horas</strong> somadas, os <strong>conflitos</strong> (eventos com hora marcada que se sobrepõem) e os dias até o <strong>próximo especial</strong> — este contado de hoje, e não do período.`,`Dica: os tipos padrão já vêm criados; você pode criar os seus e reaproveitar em cada evento. É no cadastro de tipos que se marca qual deles é <em>especial</em>.`]),x(18,`perfil`,`Perfil / ICE`,`Seus dados e o cartão de emergência`,[`Guarda os seus dados, incluindo as informações de emergência (ICE) e a recusa de sangue. Na seção de diretrizes há a data em que o cartão DPA físico foi atualizado e assinado — é dela que sai o aviso de renovação, um ano depois.`,`Dica: preencha os contatos de emergência mesmo que pareça improvável precisar — é a tela que outra pessoa vai abrir no seu lugar.`]),x(19,`tutorial`,`Tutorial`,`Este próprio guia`,[`Este módulo. A lista tem um tópico por módulo, e cada módulo tem um botão “?” que abre o tópico dele direto.`,`O conteúdo é curado: ele melhora a cada sincronização, sem precisar atualizar o app.`]),x(20,`imite`,`Imite a Sua Fé`,`Enxergar a boa intenção por trás do atrito`,[`Cada cartão traz um atrito comum da convivência e o julgamento apressado que ele provoca. Você escolhe entre três <strong>lentes</strong> qual explica melhor a intenção do outro.`,`Errar não custa nada: cada lente errada tem uma resposta própria, e é ali que está o ensino. Depois de acertar, aparecem o princípio bíblico, os textos e a galeria de quem mais fez aquilo na Bíblia.`,`Dica: a última parte de cada cartão é o <strong>Reflexo no Espelho</strong> — uma pergunta sobre você. O que você escreve ali vai para o Caderno de Estudo, e reler essas respostas meses depois vale mais do que o cartão em si.`]),x(21,`principios`,`Princípios Bíblicos`,`O que a Bíblia diz sobre as decisões do dia a dia`,[`É a parte de <strong>consulta</strong> do app: cada princípio traz a frase que o resume, os textos que o sustentam, por que ele existe e como ele se parece num dia comum. Não há exercício, não há acerto e não há erro — quem abre este módulo já sabe o que veio procurar.`,`A lista é filtrada por <strong>área da vida</strong> (família, trabalho, dinheiro, o que sai da boca…) e pela busca, que varre o título, a frase e os textos citados. A estrela guarda o princípio na faixa de favoritos, no alto da lista.`,`Dica: o fim de cada princípio traz perguntas de reflexão. O que você escreve ali vai para o Caderno de Estudo, junto com o que você escreveu no “Imite a Sua Fé” — é o mesmo caderno.`])];export{S as t};