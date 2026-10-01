function e(e){return`"${e.replace(/"/g,`""`)}"`}var t=[{tabela:`not_perguntas`,colunas:[`pergunta`,`referencia`,`resposta1`,`resposta2`,`resposta3`,`resposta4`,`explicacao`]},{tabela:`not_poesias`,colunas:[`titulo`,`conteudo`]},{tabela:`not_receitas`,colunas:[`titulo`,`categoria`,`ingredientes`,`instrucoes`]},{tabela:`not_cronologia_eventos`,colunas:[`titulo`,`resumo`,`referencia`,`periodo`,`obra_fonte`]},{tabela:`not_principios`,colunas:[`titulo`,`principio`,`referencia`,`explicacao`,`pratica`,`reflexoes`]},{tabela:`not_imite_cartoes`,colunas:[`titulo`,`tema`,`personagens`,`cenario`,`julgamento`,`correta`,`reenquadramento`,`referencia`,`espelho`]},{tabela:`not_criacao_modulos`,colunas:[`titulo`,`categoria`,`conceito`,`desafio`,`reflexao`,`referencia`]}];function n(t){let n=t.trim().split(/\s+/).filter(e=>e!==``).map(e);return n.length===0?``:[...n.slice(0,-1),`${n[n.length-1]}*`].join(` `)}function r(e){return`${e}_fts`}function i({tabela:e,colunas:t,chave:n=`id`},{vocabulario:i=!1,indiceDePublicar:a=!1}={}){let o=r(e),s=t.join(`, `),c=t.map(e=>`new.${e}`).join(`, `),l=t.map(e=>`old.${e}`).join(`, `);return[`CREATE VIRTUAL TABLE IF NOT EXISTS ${o} USING fts5(
      ${s},
      content = '${e}',
      content_rowid = '${n}',
      tokenize = "unicode61 remove_diacritics 2"
    );`,`CREATE TRIGGER IF NOT EXISTS ${o}_ai AFTER INSERT ON ${e} BEGIN
      INSERT INTO ${o} (rowid, ${s}) VALUES (new.${n}, ${c});
    END;`,`CREATE TRIGGER IF NOT EXISTS ${o}_ad AFTER DELETE ON ${e} BEGIN
      INSERT INTO ${o} (${o}, rowid, ${s}) VALUES ('delete', old.${n}, ${l});
    END;`,`CREATE TRIGGER IF NOT EXISTS ${o}_au AFTER UPDATE ON ${e} BEGIN
      INSERT INTO ${o} (${o}, rowid, ${s}) VALUES ('delete', old.${n}, ${l});
      INSERT INTO ${o} (rowid, ${s}) VALUES (new.${n}, ${c});
    END;`,...i?[`CREATE VIRTUAL TABLE IF NOT EXISTS ${e}_vocab USING fts5vocab(${o}, row);`]:[],...a?[`CREATE INDEX IF NOT EXISTS idx_${e}_publicar ON ${e} (id) WHERE publicar = 1;`]:[]]}function a(e){return e.map(({tabela:e})=>{let t=r(e);return`INSERT INTO ${t} (${t}) VALUES ('rebuild');`})}t.map(({tabela:e})=>`SELECT '${e}' AS acervo, term, doc, cnt FROM ${e}_vocab`).join(` UNION ALL `),t.flatMap(e=>i(e,{vocabulario:!0,indiceDePublicar:!0})),a(t);function o(e){let t=``,n=0;for(;n<e.length;){let r=e.charAt(n),i=e.charAt(n+1);if(r===`-`&&i===`-`){for(;n<e.length&&e.charAt(n)!==`
`;)n++;t+=` `;continue}if(r===`/`&&i===`*`){for(n+=2;n<e.length&&(e.charAt(n)!==`*`||e.charAt(n+1)!==`/`);)n++;n+=2,t+=` `;continue}if(r===`'`||r===`"`||r==="`"){for(n++;n<e.length;){if(e.charAt(n)===r){if(e.charAt(n+1)===r){n+=2;continue}n++;break}n++}t+=` `;continue}if(r===`[`){for(;n<e.length&&e.charAt(n)!==`]`;)n++;n++,t+=` `;continue}t+=r,n++}return t}function s(e){let t=[],n=0,r=0,i=0,a=r=>{let a=e.slice(n,r),s=a.trim();if(s!==``&&o(s).trim()!==``){let e=a.length-a.trimStart().length;t.push({sql:s,inicio:n+e,fim:n+e+s.length})}n=r+1,i=0};for(;r<e.length;){let t=e.charAt(r),o=e.charAt(r+1);if(t===`-`&&o===`-`){for(;r<e.length&&e.charAt(r)!==`
`;)r++;continue}if(t===`/`&&o===`*`){for(r+=2;r<e.length&&(e.charAt(r)!==`*`||e.charAt(r+1)!==`/`);)r++;r+=2;continue}if(t===`'`||t===`"`||t==="`"){for(r++;r<e.length;){if(e.charAt(r)===t){if(e.charAt(r+1)===t){r+=2;continue}r++;break}r++}continue}if(t===`[`){for(;r<e.length&&e.charAt(r)!==`]`;)r++;r++;continue}if(t===`;`){if(i===0){a(r),r++;continue}r++;continue}let s=/^[A-Za-z_][A-Za-z_0-9]*/.exec(e.slice(r))?.[0];if(s!==void 0){let t=s.toUpperCase();(t===`BEGIN`&&e.slice(n,r).trim()!==``||t===`CASE`)&&i++,t===`END`&&i>0&&i--,r+=s.length;continue}r++}return a(e.length),t}var c={nucleo:`-- O esquema do banco do Kobi Admin — \`var/banco/bioma.sqlite\`.
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
-- 2. o DDL que \`scripts/banco/banco.ts\` aplica ao criar o arquivo de fora do
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
-- ## O que é deste banco, e o que é do aparelho
--
-- Este arquivo descreve o banco do Kobi Admin, e só ele. As tabelas do Kobi
-- Note e do Kobi Flow moram em \`note.sql\` e \`flow.sql\`, e o dado delas mora no
-- aparelho de quem usa o app: o Admin administra ACERVO, não gente. Dezessete
-- tabelas têm o mesmo nome nos dois lados, quase todas do acervo curado — aqui
-- ele nasce com \`publicar\` e com os carimbos de data, lá é a cópia publicada (a
-- exceção é o estoque, ver lá) —, e cada lado descreve a sua forma. A
-- exportação escreve o JSON que o aparelho lê, e é ela a ponte; não há outra.
--
-- **A bancada da Fase 9 saiu na migração 21 (30/09/2026).** Ela punha neste
-- banco toda tabela dos dois PWA, para uma grade gerada que não teve uso, e
-- enxertava nas tabelas curadas as colunas da forma do aparelho (o \`id_global\`,
-- a despensa, a navegação da poesia). Tirá-la devolveu a este arquivo a
-- promessa de SQLite de fábrica: nada aqui usa função que só o nosso motor tem.

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
  chave            TEXT    NOT NULL UNIQUE,  -- o que viaja dentro do payload assinado (\`kobi-flow-rh\`, ...)
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
  data_atualizacao INTEGER NOT NULL            -- epoch em milissegundos
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
  nome           TEXT    NOT NULL,
  cor_chave      TEXT    NOT NULL,
  icone          TEXT    NOT NULL,
  ordem          INTEGER NOT NULL DEFAULT 0,
  publicar       INTEGER NOT NULL DEFAULT 1 -- booleano 0 | 1
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
  nome          TEXT    NOT NULL,
  icone         TEXT    NOT NULL,
  hex_cor       TEXT    NOT NULL,
  limite_mensal INTEGER NOT NULL DEFAULT 0, -- em centavos; 0 é sem limite
  publicar      INTEGER NOT NULL DEFAULT 0  -- booleano 0 | 1
) STRICT;

-- Os grupos do jogo Conexões: um rótulo que liga de quatro a seis nomes.
--
-- Acervo curado, com a forma de guardar lista que as \`reflexoes\` dos Princípios
-- já usam: \`itens\` é um JSON de textos, e a partida sorteia quatro deles. A
-- regra que torna a mesa jogável — nenhum nome em dois grupos da MESMA partida —
-- é do sorteio (\`modulos/conexoes/dados.ts\`), e não da tabela: Samuel é profeta e
-- juiz, e os dois grupos existem; o que não pode é os dois estarem na mesa.
-- Todo nome sai da Tradução do Novo Mundo no wol (manual, item 12), e
-- \`referencia\` e \`link_fonte\` dizem de onde.
CREATE TABLE IF NOT EXISTS not_conexoes_grupos (
  id               INTEGER PRIMARY KEY NOT NULL,
  rotulo           TEXT    NOT NULL DEFAULT '',   -- o que liga os nomes: "Cidades de refúgio"
  itens            TEXT    NOT NULL DEFAULT '[]', -- JSON: de 4 a 6 nomes; a partida sorteia 4
  nivel            INTEGER NOT NULL DEFAULT 1,    -- 1 Fácil, 2 Médio, 3 Difícil
  referencia       TEXT    NOT NULL DEFAULT '',   -- de onde os nomes saem
  link_fonte       TEXT    NOT NULL DEFAULT '',   -- a página do wol dessa referência
  publicar         INTEGER NOT NULL DEFAULT 0,    -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0     -- epoch em milissegundos
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

-- O catálogo de alimentos que o Kobi Note recebe pronto.
--
-- O aparelho tem uma tabela com este mesmo nome e outra coisa dentro — a
-- despensa de quem usa o app, com o \`data_vencimento\` de cada item —, e o
-- catálogo chega lá em \`not_estoque_catalogo\`, pelo \`estoque_catalogo.json\`.
CREATE TABLE IF NOT EXISTS not_estoque_alimentos (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  item              TEXT    NOT NULL,
  categoria         TEXT    NOT NULL,
  quantidade        INTEGER NOT NULL DEFAULT 1,
  peso_unitario     INTEGER NOT NULL DEFAULT 0,
  calorias_por_100g INTEGER NOT NULL DEFAULT 0,
  validade_meses    INTEGER NOT NULL DEFAULT 12,
  ordem             INTEGER NOT NULL DEFAULT 0,
  publicar          INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao      INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao  INTEGER NOT NULL DEFAULT 0  -- epoch em milissegundos
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

-- Os personagens do jogo Conheça os Personagens: um resumo da vida e três
-- perguntas sobre ele.
--
-- Acervo curado, na numeração do "Cartão Bíblico — Colecione e Aprenda" da
-- Despertai!, que é a ordem do álbum. \`perguntas\` é um JSON com as três, cada
-- uma com \`enunciado\`, \`alternativas\` (três textos), \`correta\` (o índice, de 0 a
-- 2) e \`referencia\`; a leitura é do núcleo (\`perguntasDoPersonagem\`), a mesma no
-- Admin e no aparelho. As alternativas erradas saem da MESMA história, e todo
-- nome sai da Tradução do Novo Mundo no wol (manual, item 12). \`periodo\` é o
-- vocabulário da \`not_cronologia\`, e é dele que sai a cor da carta.
CREATE TABLE IF NOT EXISTS not_personagens (
  id               INTEGER PRIMARY KEY NOT NULL,
  numero           INTEGER NOT NULL DEFAULT 0,    -- a posição no álbum: o número do cartão
  nome             TEXT    NOT NULL DEFAULT '',
  resumo           TEXT    NOT NULL DEFAULT '',   -- HTML curto, com as referências
  perguntas        TEXT    NOT NULL DEFAULT '[]', -- JSON: as três perguntas, com as alternativas
  periodo          TEXT    NOT NULL DEFAULT '',   -- o período da Cronologia em que ele viveu
  obra_fonte       TEXT    NOT NULL DEFAULT '',   -- a publicação de onde o texto saiu
  link_fonte       TEXT    NOT NULL DEFAULT '',   -- a página do wol dessa publicação
  publicar         INTEGER NOT NULL DEFAULT 0,    -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0     -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_poesias (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  titulo           TEXT    NOT NULL,
  conteudo         TEXT    NOT NULL,
  publicar         INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0  -- epoch em milissegundos
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

-- O acervo de "Respostas Frequentes".
--
-- Irmão de forma de \`not_imite_cartoes\`, e não de \`not_principios\`: aqui não se
-- consulta uma resposta pronta, **exercita-se responder**. Cada linha é uma
-- pergunta que alguém faz de verdade, a resposta de impulso que ela provoca em
-- quem é perguntado, as lentes que a tela oferece e a resposta pela Bíblia — nas
-- NOSSAS palavras, e não no texto do artigo, que fica atrás do \`link_jw\`.
--
-- \`lentes\` e \`exemplos\` são JSON em coluna TEXT pelo mesmo motivo que os do
-- cartão: são lidos SEMPRE junto com a linha e nunca consultados sozinhos.
CREATE TABLE IF NOT EXISTS not_faq (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',                 -- a pergunta como alguém a faz — escrita por nós, e não copiada da página
  categoria        TEXT    NOT NULL DEFAULT 'crencas',          -- a categoria, pela chave de \`CATEGORIAS_FAQ\` — catálogo FECHADO
  icone            TEXT    NOT NULL DEFAULT 'message-question', -- nome do ícone no Kobi Kit (biblioteca \`default\`)
  ordem            INTEGER NOT NULL DEFAULT 0,
  cenario          TEXT    NOT NULL DEFAULT '',                 -- quem pergunta e em que situação, em HTML do editor do admin
  impulso          TEXT    NOT NULL DEFAULT '',                 -- a resposta que vem primeiro à cabeça e não ajuda, em HTML
  lentes           TEXT    NOT NULL DEFAULT '[]',               -- JSON: \`Lente[]\`
  correta          TEXT    NOT NULL DEFAULT '',                 -- o \`id\` da lente certa
  resposta         TEXT    NOT NULL DEFAULT '',                 -- a resposta pela Bíblia, em HTML, com as nossas palavras
  referencia       TEXT    NOT NULL DEFAULT '',                 -- os textos bíblicos que a sustentam
  link_jw          TEXT    NOT NULL DEFAULT '',                 -- onde o assunto está tratado no jw.org — vazio esconde o link na tela
  preparo          TEXT    NOT NULL DEFAULT '',                 -- a pergunta de "Com as suas palavras"
  exemplos         TEXT    NOT NULL DEFAULT '[]',               -- JSON: \`ExemploBiblico[]\`
  publicar         INTEGER NOT NULL DEFAULT 0,                  -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,                  -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0                   -- epoch em milissegundos
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
  modulo_id        TEXT    NOT NULL DEFAULT '', -- a chave do módulo no PWA (\`anotacoes\`, \`financeiro\`, ...); vazio é a visão geral
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
CREATE INDEX IF NOT EXISTS idx_not_faq_ordem ON not_faq (categoria, ordem);
CREATE INDEX IF NOT EXISTS idx_not_personagens_numero ON not_personagens (numero);
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
--   * o **acervo curado** (\`not_perguntas\`, \`not_poesias\`, ... ) é cache do que o
--     Kobi Admin publica em \`dados/*.json\`. A identidade é a do admin, e a
--     sincronização substitui o store inteiro — o \`id\` é o de lá, sem
--     \`AUTOINCREMENT\` e sem \`id_global\`: um identificador de aparelho que
--     nascesse de novo a cada sincronização não identificaria coisa nenhuma;
--   * o **dado do usuário** (\`not_anotacao\`, \`not_transacoes\`, ... ) tem
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
-- A tela do Financeiro fala centavo também: quem formata é o
-- \`@bioma/core/formato\`, e não há troca de escala entre o banco e o desenho.
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

-- O acervo de "Respostas Frequentes".
--
-- Irmão de forma de \`not_imite_cartoes\`, e não de \`not_principios\`: aqui não se
-- consulta uma resposta pronta, exercita-se responder. A resposta que a linha
-- guarda é a NOSSA, escrita a partir dos textos de \`referencia\`; o artigo do
-- jw.org fica atrás do \`link_jw\`, e não dentro da coluna.
CREATE TABLE IF NOT EXISTS not_faq (
  id               INTEGER PRIMARY KEY NOT NULL,
  titulo           TEXT    NOT NULL DEFAULT '',                 -- a pergunta como alguém a faz — escrita por nós
  categoria        TEXT    NOT NULL DEFAULT 'crencas',          -- a categoria, pela chave de \`CATEGORIAS_FAQ\` — catálogo FECHADO
  icone            TEXT    NOT NULL DEFAULT 'message-question', -- nome do ícone no Kobi Kit (biblioteca \`default\`)
  ordem            INTEGER NOT NULL DEFAULT 0,
  cenario          TEXT    NOT NULL DEFAULT '',                 -- quem pergunta e em que situação, em HTML do editor do admin
  impulso          TEXT    NOT NULL DEFAULT '',                 -- a resposta que vem primeiro à cabeça e não ajuda, em HTML
  lentes           TEXT    NOT NULL DEFAULT '[]',               -- JSON: \`Lente[]\`, lido sempre junto com a linha
  correta          TEXT    NOT NULL DEFAULT '',                 -- o \`id\` da lente certa
  resposta         TEXT    NOT NULL DEFAULT '',                 -- a resposta pela Bíblia, em HTML, com as nossas palavras
  referencia       TEXT    NOT NULL DEFAULT '',                 -- os textos bíblicos que a sustentam
  link_jw          TEXT    NOT NULL DEFAULT '',                 -- vazio esconde o link na tela
  preparo          TEXT    NOT NULL DEFAULT '',                 -- a pergunta de "Com as suas palavras"
  exemplos         TEXT    NOT NULL DEFAULT '[]',               -- JSON: \`ExemploBiblico[]\`
  publicar         INTEGER NOT NULL DEFAULT 0,                  -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,                  -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0                   -- epoch em milissegundos
) STRICT;

-- Os grupos do jogo Conexões: um rótulo que liga de quatro a seis nomes.
--
-- Acervo curado, com a forma de guardar lista que as \`reflexoes\` dos Princípios
-- já usam: \`itens\` é um JSON de textos, e a partida sorteia quatro deles. A
-- regra que torna a mesa jogável — nenhum nome em dois grupos da MESMA partida —
-- é do sorteio (\`modulos/conexoes/dados.ts\`), e não da tabela: Samuel é profeta e
-- juiz, e os dois grupos existem; o que não pode é os dois estarem na mesa.
-- Todo nome sai da Tradução do Novo Mundo no wol (manual, item 12), e
-- \`referencia\` e \`link_fonte\` dizem de onde.
CREATE TABLE IF NOT EXISTS not_conexoes_grupos (
  id               INTEGER PRIMARY KEY NOT NULL,
  rotulo           TEXT    NOT NULL DEFAULT '',   -- o que liga os nomes: "Cidades de refúgio"
  itens            TEXT    NOT NULL DEFAULT '[]', -- JSON: de 4 a 6 nomes; a partida sorteia 4
  nivel            INTEGER NOT NULL DEFAULT 1,    -- 1 Fácil, 2 Médio, 3 Difícil
  referencia       TEXT    NOT NULL DEFAULT '',   -- de onde os nomes saem
  link_fonte       TEXT    NOT NULL DEFAULT '',   -- a página do wol dessa referência
  publicar         INTEGER NOT NULL DEFAULT 0,    -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0     -- epoch em milissegundos
) STRICT;

-- Os personagens do jogo Conheça os Personagens: um resumo da vida e três
-- perguntas sobre ele.
--
-- Acervo curado, na numeração do "Cartão Bíblico — Colecione e Aprenda" da
-- Despertai!, que é a ordem do álbum. \`perguntas\` é um JSON com as três, cada
-- uma com \`enunciado\`, \`alternativas\` (três textos), \`correta\` (o índice, de 0 a
-- 2) e \`referencia\`; a leitura é do núcleo (\`perguntasDoPersonagem\`), a mesma no
-- Admin e no aparelho. As alternativas erradas saem da MESMA história, e todo
-- nome sai da Tradução do Novo Mundo no wol (manual, item 12). \`periodo\` é o
-- vocabulário da \`not_cronologia\`, e é dele que sai a cor da carta.
CREATE TABLE IF NOT EXISTS not_personagens (
  id               INTEGER PRIMARY KEY NOT NULL,
  numero           INTEGER NOT NULL DEFAULT 0,    -- a posição no álbum: o número do cartão
  nome             TEXT    NOT NULL DEFAULT '',
  resumo           TEXT    NOT NULL DEFAULT '',   -- HTML curto, com as referências
  perguntas        TEXT    NOT NULL DEFAULT '[]', -- JSON: as três perguntas, com as alternativas
  periodo          TEXT    NOT NULL DEFAULT '',   -- o período da Cronologia em que ele viveu
  obra_fonte       TEXT    NOT NULL DEFAULT '',   -- a publicação de onde o texto saiu
  link_fonte       TEXT    NOT NULL DEFAULT '',   -- a página do wol dessa publicação
  publicar         INTEGER NOT NULL DEFAULT 0,    -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0     -- epoch em milissegundos
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
  modulo_id        TEXT    NOT NULL DEFAULT '', -- a chave do módulo no PWA (\`anotacoes\`, \`financeiro\`, ...); vazio é a visão geral
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
  origem      TEXT    NOT NULL DEFAULT 'avulso', -- \`criacao\` | \`estudo\` | \`imite\` | \`jogo\` | \`principios\` | \`faq\` | \`avulso\`
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
  periodicidade         TEXT    NOT NULL DEFAULT '', -- \`mensal\` | \`semanal\` | ...
  dia_mes               INTEGER NOT NULL DEFAULT 1,
  dia_semana_iso        INTEGER NOT NULL DEFAULT 1,  -- 1 segunda ... 7 domingo
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
  tipo_publicador       TEXT    NOT NULL DEFAULT 'publicador', -- \`publicador\` | \`publicador_especial\` | \`auxiliar\` | \`regular\` | \`especial\`
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
  congregacao                 TEXT    NOT NULL DEFAULT '', -- a congregação do publicador, que o relatório de campo leva; chegou por ALTER TABLE, e por isso mora no fim
  grupo                       TEXT    NOT NULL DEFAULT '', -- o grupo de campo, idem
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS not_calendario_tipos (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome           TEXT    NOT NULL DEFAULT '',
  cor_chave      TEXT    NOT NULL DEFAULT 'primary', -- a chave da cor, e não o hexadecimal: o tema decide o tom
  icone          TEXT    NOT NULL DEFAULT '',
  ordem          INTEGER NOT NULL DEFAULT 0,
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

-- O progresso do Você se lembra? — a economia do jogo, numa linha só (id 1).
--
-- Morava no \`localStorage\` (\`note_jogo_progresso\`), fora do banco cifrado e
-- fora de qualquer restauração; desde 16/09/2026 é tabela, e entra no backup
-- como todo dado privado. Os dois números que é fácil confundir: \`xp_saldo\` é
-- gastável (a dica desconta dele) e \`xp_historico\` nunca desce — é dele que sai
-- o nível. \`partidas\` conta as partidas FECHADAS (as dez perguntas respondidas),
-- e não uma a cada dez respostas: uma partida abandonada no meio não conta.
CREATE TABLE IF NOT EXISTS not_jogo_progresso (
  id              INTEGER PRIMARY KEY NOT NULL, -- é sempre 1: o progresso é um só
  id_global       BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  xp_saldo        INTEGER NOT NULL DEFAULT 0,
  xp_historico    INTEGER NOT NULL DEFAULT 0,
  sequencia_atual INTEGER NOT NULL DEFAULT 0,
  acertos_total   INTEGER NOT NULL DEFAULT 0,
  erros_total     INTEGER NOT NULL DEFAULT 0,
  partidas        INTEGER NOT NULL DEFAULT 0,
  CHECK (length(id_global) = 16)
) STRICT;

-- Cada resposta dada no Você se lembra?, com a pergunta e o instante.
--
-- É daqui que saem "o que já foi visto" (a partida prioriza o que o jogador
-- ainda não viu) e a meta "Perguntas Respondidas", que conta as perguntas
-- distintas respondidas DENTRO da janela da meta. Reiniciar as perguntas apaga
-- esta tabela e deixa o progresso — o XP conquistado fica.
CREATE TABLE IF NOT EXISTS not_jogo_respostas (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  pergunta_id   INTEGER NOT NULL DEFAULT 0, -- a linha de \`not_perguntas\`
  acertou       INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  respondida_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- O recorde de cada jogo de Atividades, por modo e nível — uma linha por trinca.
--
-- É do aparelho, como o progresso do Você se lembra?, e entra no backup com a
-- família privada. \`melhor_ms\` é o menor tempo de uma partida TERMINADA (a que
-- termina certa: conferir com erro não fecha nada), e \`partidas\` conta as
-- terminadas. \`ultima_partida_em\` é o que o marco "de volta depois de dias sem
-- jogar" do Conheça os Personagens vai ler, e é gravado por todos os jogos.
-- \`melhor_pontos\` é a outra medida: o maior placar do jogo que conta pontos em
-- vez de tempo (a Linha do Tempo em rodadas, desde 29/09/2026).
CREATE TABLE IF NOT EXISTS not_jogos_recordes (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  jogo              TEXT    NOT NULL DEFAULT '', -- o id do módulo: \`livros\`, \`linhadotempo\`
  modo              TEXT    NOT NULL DEFAULT '', -- o modo do jogo, quando ele tem mais de um
  nivel             INTEGER NOT NULL DEFAULT 1, -- 1 Fácil, 2 Médio, 3 Difícil
  melhor_ms         INTEGER NOT NULL DEFAULT 0, -- o menor tempo, em milissegundos
  partidas          INTEGER NOT NULL DEFAULT 0,
  ultima_partida_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  melhor_pontos     INTEGER NOT NULL DEFAULT 0, -- o maior placar; chegou por ALTER TABLE, e por isso mora no fim
  CHECK (length(id_global) = 16)
) STRICT;

-- O selo de cada personagem do Conheça os Personagens — uma linha por selo.
--
-- É do aparelho, e entra no backup com a família privada. O selo nasce quando a
-- pessoa acerta as três perguntas na mesma rodada, e não se perde nunca: não há
-- coluna de "perdido", e ninguém apaga linha daqui. Os marcos em que o Kobi
-- aparece (o primeiro selo, o quinto, o décimo...) são contados daqui, e não de
-- um contador à parte.
CREATE TABLE IF NOT EXISTS not_personagens_selos (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  personagem_id  INTEGER NOT NULL DEFAULT 0, -- a linha de \`not_personagens\`
  conquistado_em INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
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
CREATE INDEX IF NOT EXISTS idx_not_faq_ordem ON not_faq (categoria, ordem);
CREATE INDEX IF NOT EXISTS idx_not_imite_ordem ON not_imite_cartoes (ordem);
CREATE INDEX IF NOT EXISTS idx_not_tutorial_ordem ON not_tutorial (modulo_id, ordem);
CREATE INDEX IF NOT EXISTS idx_not_kits_itens_kit ON not_kits_itens (kit_id);
CREATE INDEX IF NOT EXISTS idx_not_jogo_respostas_quando ON not_jogo_respostas (respondida_em);
CREATE UNIQUE INDEX IF NOT EXISTS idx_not_jogos_recordes_chave ON not_jogos_recordes (jogo, modo, nivel);
CREATE UNIQUE INDEX IF NOT EXISTS idx_not_personagens_selos_personagem ON not_personagens_selos (personagem_id);
CREATE INDEX IF NOT EXISTS idx_not_personagens_numero ON not_personagens (numero);

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

-- As Metas NÃO têm vista desde 16/09/2026. \`vw_note_metas_fontes\` e
-- \`vw_note_despesa_por_categoria\` somavam o histórico inteiro, e uma meta de
-- "poupar 500 este mês" era comparada contra receitas menos despesas desde
-- sempre. A janela é de cada meta (\`data_meta\` até \`prazo_final\`), e uma vista
-- não recebe parâmetro: quem responde é a consulta nomeada
-- \`metasFontesNoPeriodo\`, em \`apps/note/src/db/consultas.ts\`, ligada por
-- marcador. As duas vistas ficam de pé nos aparelhos que as criaram (o
-- \`IF NOT EXISTS\` não as refaz), e o worker do Note as larga na abertura.

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
  store      TEXT    NOT NULL DEFAULT '', -- o cadastro de origem (\`clientes\`, \`os_tecnicos\`, ...)
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
  projeto_id    INTEGER NOT NULL DEFAULT 0, -- o projeto a que a tarefa pertence; 0 é tarefa solta
  marco_id      INTEGER NOT NULL DEFAULT 0, -- o marco DENTRO do projeto (\`flw_projetos_marcos.id\`); 0 é nenhum
  inicio        TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local: onde a barra do cronograma começa
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
  -- O documento de venda (23/09/2026): número, moeda, imposto e a decisão por ação.
  numero        INTEGER NOT NULL DEFAULT 0,  -- dado na primeira gravação; 0 é de antes dele, e vale o id
  moeda         TEXT    NOT NULL DEFAULT 'BRL', -- código ISO 4217, congelado no documento
  desconto_bp   INTEGER NOT NULL DEFAULT 0,  -- desconto em centésimos de ponto percentual; 0 é desconto fixo
  imposto       INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS: a soma do imposto das linhas
  endereco      TEXT    NOT NULL DEFAULT '', -- o endereço do cliente, congelado no documento
  enviado_em    INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos; carimbado pela ação de enviar
  decidido_em   INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos; carimbado ao aceitar ou recusar
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_orcamentos_itens (
  orcamento_id INTEGER NOT NULL,
  id           INTEGER NOT NULL, -- único DENTRO do orçamento, e não no banco
  descricao    TEXT    NOT NULL DEFAULT '',
  qtd          REAL    NOT NULL DEFAULT 0, -- aceita fração: 1,5 h, 2,5 m²
  preco        INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS
  imposto_nome TEXT    NOT NULL DEFAULT '', -- o imposto da linha, congelado: nome
  imposto_bp   INTEGER NOT NULL DEFAULT 0,  -- e alíquota, em centésimos de ponto percentual
  imposto2_nome TEXT    NOT NULL DEFAULT '', -- o segundo imposto da linha, congelado como o primeiro
  imposto2_bp   INTEGER NOT NULL DEFAULT 0,  -- em centésimos de ponto percentual; 0 é linha com um imposto só
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
  -- O documento de venda (23/09/2026). O número vem na EMISSÃO: o rascunho não tem.
  numero        INTEGER NOT NULL DEFAULT 0, -- 0 é rascunho, ou fatura de antes da numeração (vale o id)
  moeda         TEXT    NOT NULL DEFAULT 'BRL', -- código ISO 4217, congelado no documento
  desconto_bp   INTEGER NOT NULL DEFAULT 0, -- desconto em centésimos de ponto percentual; 0 é desconto fixo
  imposto       INTEGER NOT NULL DEFAULT 0, -- em CENTAVOS: a soma do imposto das linhas
  endereco      TEXT    NOT NULL DEFAULT '', -- o endereço do cliente, congelado no documento
  rascunho      INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1; 0 é emitida, que é o que toda fatura antiga foi
  emitida_em    INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos da emissão
  cancelada_em  INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos; 0 é vigente — cancelada guarda o número
  assinatura_id INTEGER NOT NULL DEFAULT 0, -- a assinatura que gerou esta cobrança; 0 é avulsa
  competencia   TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local do período cobrado pela assinatura
  projeto_id    INTEGER NOT NULL DEFAULT 0, -- o projeto cobrado por esta fatura; 0 é nenhum
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_faturas_itens (
  fatura_id    INTEGER NOT NULL,
  id           INTEGER NOT NULL,
  descricao    TEXT    NOT NULL DEFAULT '',
  qtd          REAL    NOT NULL DEFAULT 0,
  preco        INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  imposto_nome TEXT    NOT NULL DEFAULT '', -- o imposto da linha, congelado: nome
  imposto_bp   INTEGER NOT NULL DEFAULT 0,  -- e alíquota, em centésimos de ponto percentual
  imposto2_nome TEXT    NOT NULL DEFAULT '', -- o segundo imposto da linha, congelado como o primeiro
  imposto2_bp   INTEGER NOT NULL DEFAULT 0,  -- em centésimos de ponto percentual; 0 é linha com um imposto só
  PRIMARY KEY (fatura_id, id),
  FOREIGN KEY (fatura_id) REFERENCES flw_faturas (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

-- Os pagamentos de uma fatura. Tabela filha, e não JSON: é a soma deles que diz
-- se a fatura está quitada, e essa é uma pergunta que o banco deve responder.
CREATE TABLE IF NOT EXISTS flw_faturas_pagamentos (
  fatura_id       INTEGER NOT NULL,
  id              INTEGER NOT NULL,
  valor           INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  data            TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  criado_em       INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  modo            TEXT    NOT NULL DEFAULT '', -- o NOME do modo de pagamento, congelado no recibo
  referencia      TEXT    NOT NULL DEFAULT '', -- o código da transação, o número do cheque, o que o modo pedir
  nota_credito_id INTEGER NOT NULL DEFAULT 0,  -- a nota de crédito que pagou esta parte; 0 é dinheiro que entrou
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
  -- A despesa com repasse ao cliente (23/09/2026).
  repassar          INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1: a despesa é cobrada do cliente
  repasse_fatura_id INTEGER NOT NULL DEFAULT 0, -- a fatura em que o repasse entrou; 0 é ainda não cobrado
  projeto_id        INTEGER NOT NULL DEFAULT 0, -- o projeto em que a despesa foi feita; 0 é nenhum
  comprovante       TEXT    NOT NULL DEFAULT '', -- o LINK do comprovante no Drive do dono; os bytes não moram aqui
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
  -- A numeração e a moeda dos documentos (23/09/2026).
  moeda                TEXT NOT NULL DEFAULT 'BRL',  -- a moeda base, que todo documento novo recebe
  prefixo_orcamento    TEXT NOT NULL DEFAULT 'ORC-',
  prefixo_proposta     TEXT NOT NULL DEFAULT 'PRO-',
  prefixo_fatura       TEXT NOT NULL DEFAULT 'FAT-',
  prefixo_nota_credito TEXT NOT NULL DEFAULT 'NC-',
  prefixo_tiquete      TEXT NOT NULL DEFAULT 'TIC-',
  CHECK (length(id_global) = 16)
) STRICT;

-- Os impostos que uma linha de documento pode levar. A linha COPIA o nome e a
-- alíquota: mudar a alíquota aqui amanhã não reescreve a fatura de ontem.
CREATE TABLE IF NOT EXISTS flw_impostos (
  id          INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global   BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome        TEXT    NOT NULL DEFAULT '',
  aliquota_bp INTEGER NOT NULL DEFAULT 0, -- em centésimos de ponto percentual: 1.000 é 10 %
  ativo       INTEGER NOT NULL DEFAULT 1, -- booleano 0 | 1
  criado_em   INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- Os modos de pagamento — Pix, boleto, transferência. O pagamento copia o NOME,
-- pelo mesmo motivo do imposto.
CREATE TABLE IF NOT EXISTS flw_modos_pagamento (
  id         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global  BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome       TEXT    NOT NULL DEFAULT '',
  instrucoes TEXT    NOT NULL DEFAULT '', -- a chave Pix, os dados da conta: o que vai impresso na fatura
  ativo      INTEGER NOT NULL DEFAULT 1,  -- booleano 0 | 1
  criado_em  INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- ── Os oito módulos de gestão (23/09/2026) ──────────────────────────────────

-- A proposta: o documento de venda com CORPO em prosa. O HTML sai do
-- \`kk-editor\` e é limpo pelo \`sanitizeHtml\` do Kit antes de ser gravado.
CREATE TABLE IF NOT EXISTS flw_propostas (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  numero        INTEGER NOT NULL DEFAULT 0,
  titulo        TEXT    NOT NULL DEFAULT '',
  cliente_id    INTEGER NOT NULL DEFAULT 0,
  conteudo      TEXT    NOT NULL DEFAULT '', -- HTML limpo
  total         INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS: a soma das linhas
  desconto      INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  desconto_bp   INTEGER NOT NULL DEFAULT 0,
  imposto       INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  moeda         TEXT    NOT NULL DEFAULT 'BRL',
  validade      TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local; vazio nunca expira
  status        TEXT    NOT NULL DEFAULT 'rascunho',
  enviado_em    INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  decidido_em   INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  orcamento_id  INTEGER NOT NULL DEFAULT 0,  -- o orçamento que nasceu da proposta aceita
  observacao    TEXT    NOT NULL DEFAULT '',
  criado_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  atualizado_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_propostas_itens (
  proposta_id  INTEGER NOT NULL,
  id           INTEGER NOT NULL,
  descricao    TEXT    NOT NULL DEFAULT '',
  qtd          REAL    NOT NULL DEFAULT 0,
  preco        INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  imposto_nome TEXT    NOT NULL DEFAULT '',
  imposto_bp   INTEGER NOT NULL DEFAULT 0,
  imposto2_nome TEXT    NOT NULL DEFAULT '', -- o segundo imposto da linha, congelado como o primeiro
  imposto2_bp   INTEGER NOT NULL DEFAULT 0,  -- em centésimos de ponto percentual; 0 é linha com um imposto só
  PRIMARY KEY (proposta_id, id),
  FOREIGN KEY (proposta_id) REFERENCES flw_propostas (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

-- A nota de crédito: o que o negócio deve ao cliente. Ela é USADA de dois jeitos,
-- e cada um mora onde o dinheiro mora: abatendo uma fatura, é um PAGAMENTO dela
-- (\`flw_faturas_pagamentos.nota_credito_id\`), sem dinheiro novo no caixa;
-- devolvida em dinheiro, é um reembolso aqui, e uma despesa realizada no
-- Financeiro. O que sobra é derivado dos dois.
CREATE TABLE IF NOT EXISTS flw_notas_credito (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  numero        INTEGER NOT NULL DEFAULT 0,
  cliente_id    INTEGER NOT NULL DEFAULT 0,
  fatura_id     INTEGER NOT NULL DEFAULT 0,  -- a fatura que a originou; 0 é crédito avulso
  data          TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  total         INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS: a soma das linhas
  desconto      INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  desconto_bp   INTEGER NOT NULL DEFAULT 0,
  imposto       INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  moeda         TEXT    NOT NULL DEFAULT 'BRL',
  observacao    TEXT    NOT NULL DEFAULT '',
  cancelada_em  INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos; 0 é vigente
  criado_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  atualizado_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_notas_credito_itens (
  nota_id      INTEGER NOT NULL,
  id           INTEGER NOT NULL,
  descricao    TEXT    NOT NULL DEFAULT '',
  qtd          REAL    NOT NULL DEFAULT 0,
  preco        INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  imposto_nome TEXT    NOT NULL DEFAULT '',
  imposto_bp   INTEGER NOT NULL DEFAULT 0,
  imposto2_nome TEXT    NOT NULL DEFAULT '', -- o segundo imposto da linha, congelado como o primeiro
  imposto2_bp   INTEGER NOT NULL DEFAULT 0,  -- em centésimos de ponto percentual; 0 é linha com um imposto só
  PRIMARY KEY (nota_id, id),
  FOREIGN KEY (nota_id) REFERENCES flw_notas_credito (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE TABLE IF NOT EXISTS flw_notas_credito_reembolsos (
  nota_id   INTEGER NOT NULL,
  id        INTEGER NOT NULL,
  valor     INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  data      TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  modo      TEXT    NOT NULL DEFAULT '', -- como o dinheiro voltou: o NOME do modo de pagamento
  criado_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  PRIMARY KEY (nota_id, id),
  FOREIGN KEY (nota_id) REFERENCES flw_notas_credito (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

-- O projeto: o trabalho entregue ao longo do tempo, com as tarefas dele
-- (\`flw_tarefas.projeto_id\`) e as horas apontadas. A cobrança é uma de três:
-- valor fechado, por hora, ou nenhuma (projeto interno).
CREATE TABLE IF NOT EXISTS flw_projetos (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome          TEXT    NOT NULL DEFAULT '',
  cliente_id    INTEGER NOT NULL DEFAULT 0,
  descricao     TEXT    NOT NULL DEFAULT '',
  status        TEXT    NOT NULL DEFAULT 'andamento',
  cobranca      TEXT    NOT NULL DEFAULT 'hora', -- 'fixo', 'hora' ou 'nenhuma'
  valor         INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS: o valor fechado, em 'fixo'
  valor_hora    INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS: o preço da hora, em 'hora'
  inicio        TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  prazo         TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local; vazio é sem prazo
  moeda         TEXT    NOT NULL DEFAULT 'BRL',
  criado_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  atualizado_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- Os marcos do projeto — a entrega com data (o layout aprovado, a obra fechada).
-- Filha, como a linha da fatura: o marco não existe fora do projeto, e o id é
-- único DENTRO dele. A tarefa aponta para o marco pelo par (\`projeto_id\`,
-- \`marco_id\`), e é por isso que a tela preserva o id de cada marco ao regravar
-- a lista inteira.
CREATE TABLE IF NOT EXISTS flw_projetos_marcos (
  projeto_id   INTEGER NOT NULL,
  id           INTEGER NOT NULL, -- único DENTRO do projeto, e não no banco
  nome         TEXT    NOT NULL DEFAULT '',
  descricao    TEXT    NOT NULL DEFAULT '',
  prazo        TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local
  concluido_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos; 0 é em aberto
  PRIMARY KEY (projeto_id, id),
  FOREIGN KEY (projeto_id) REFERENCES flw_projetos (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

-- As horas apontadas. \`fim\` zero é o relógio correndo — e é UM por aparelho, e
-- não um por projeto: ninguém trabalha em duas coisas ao mesmo tempo.
CREATE TABLE IF NOT EXISTS flw_apontamentos (
  id         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global  BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  projeto_id INTEGER NOT NULL DEFAULT 0,
  tarefa_id  INTEGER NOT NULL DEFAULT 0,  -- 0 é hora do projeto, sem tarefa
  descricao  TEXT    NOT NULL DEFAULT '',
  inicio     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  fim        INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos; 0 é o relógio correndo
  fatura_id  INTEGER NOT NULL DEFAULT 0,  -- a fatura em que a hora entrou; 0 é ainda não cobrada
  criado_em  INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- O tíquete de suporte, com a conversa dele numa tabela filha. O canal diz por
-- onde o pedido chegou — e o WhatsApp ao lado é o canal da maioria.
CREATE TABLE IF NOT EXISTS flw_tiquetes (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  numero        INTEGER NOT NULL DEFAULT 0,
  assunto       TEXT    NOT NULL DEFAULT '',
  cliente_id    INTEGER NOT NULL DEFAULT 0,
  projeto_id    INTEGER NOT NULL DEFAULT 0,
  canal         TEXT    NOT NULL DEFAULT 'whatsapp',
  prioridade    TEXT    NOT NULL DEFAULT 'media',
  status        TEXT    NOT NULL DEFAULT 'aberto',
  criado_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  atualizado_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  fechado_em    INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos; 0 é em aberto
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_tiquetes_respostas (
  tiquete_id INTEGER NOT NULL,
  id         INTEGER NOT NULL,
  autor      TEXT    NOT NULL DEFAULT '', -- 'cliente', 'equipe' ou 'nota' (interna, não vai ao cliente)
  texto      TEXT    NOT NULL DEFAULT '',
  criado_em  INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  PRIMARY KEY (tiquete_id, id),
  FOREIGN KEY (tiquete_id) REFERENCES flw_tiquetes (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

-- A base de conhecimento: o artigo que responde de uma vez a pergunta que chega
-- toda semana, pronto para ir à conversa.
CREATE TABLE IF NOT EXISTS flw_artigos (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo        TEXT    NOT NULL DEFAULT '',
  grupo         TEXT    NOT NULL DEFAULT '',
  conteudo      TEXT    NOT NULL DEFAULT '', -- HTML limpo
  publicado     INTEGER NOT NULL DEFAULT 1,  -- booleano 0 | 1; o rascunho não é oferecido no atendimento
  criado_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  atualizado_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- A assinatura: a cobrança que se repete, com as linhas dela. Cada período vira
-- uma fatura EMITIDA (\`flw_faturas.assinatura_id\` + \`competencia\`), e a
-- competência é o que impede duas máquinas de cobrarem o mesmo mês duas vezes
-- depois de se sincronizarem.
CREATE TABLE IF NOT EXISTS flw_assinaturas (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome          TEXT    NOT NULL DEFAULT '',
  cliente_id    INTEGER NOT NULL DEFAULT 0,
  periodicidade TEXT    NOT NULL DEFAULT 'mensal', -- 'mensal', 'trimestral', 'semestral' ou 'anual'
  proxima       TEXT    NOT NULL DEFAULT '', -- 'YYYY-MM-DD' local: o vencimento da próxima cobrança
  prazo_dias    INTEGER NOT NULL DEFAULT 0,  -- quantos dias ANTES do vencimento a fatura nasce
  status        TEXT    NOT NULL DEFAULT 'ativa',
  total         INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS: a soma das linhas
  desconto      INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  desconto_bp   INTEGER NOT NULL DEFAULT 0,
  imposto       INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  moeda         TEXT    NOT NULL DEFAULT 'BRL',
  observacao    TEXT    NOT NULL DEFAULT '',
  criado_em     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  atualizado_em INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  cancelada_em  INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

CREATE TABLE IF NOT EXISTS flw_assinaturas_itens (
  assinatura_id INTEGER NOT NULL,
  id            INTEGER NOT NULL,
  descricao     TEXT    NOT NULL DEFAULT '',
  qtd           REAL    NOT NULL DEFAULT 0,
  preco         INTEGER NOT NULL DEFAULT 0,  -- em CENTAVOS
  imposto_nome  TEXT    NOT NULL DEFAULT '',
  imposto_bp    INTEGER NOT NULL DEFAULT 0,
  imposto2_nome TEXT    NOT NULL DEFAULT '', -- o segundo imposto da linha, congelado como o primeiro
  imposto2_bp   INTEGER NOT NULL DEFAULT 0,  -- em centésimos de ponto percentual; 0 é linha com um imposto só
  PRIMARY KEY (assinatura_id, id),
  FOREIGN KEY (assinatura_id) REFERENCES flw_assinaturas (id) ON UPDATE NO ACTION ON DELETE CASCADE
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

-- Os textos dos documentos que o usuário escreveu, ao lado dos de fábrica
-- (\`flw_traducoes\`). A chave é a mesma, e a linha daqui vence a de lá; o campo
-- vazio de um idioma cai no de fábrica, e dali no dicionário.
CREATE TABLE IF NOT EXISTS flw_traducoes_do_usuario (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  chave     TEXT    NOT NULL DEFAULT '' UNIQUE, -- a chave do texto, como \`doc.fatura.titulo\`
  pt        TEXT    NOT NULL DEFAULT '',
  es        TEXT    NOT NULL DEFAULT '',
  en        TEXT    NOT NULL DEFAULT '',
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
  indice            TEXT    NOT NULL DEFAULT '', -- o índice de reajuste (IGPM, IPCA...)
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

--
-- As colunas são as do \`ItemDaFila\` e do \`Conflito\` de
-- \`apps/flow/src/sincronizacao/protocolo.ts\`, nome a nome — o motor da
-- sincronização lê a linha como o item, e uma coluna com outro nome é um campo
-- que chega \`undefined\` sem erro nenhum. Foi assim até 19/09/2026: a fila
-- guardava \`carga\` onde o motor lia \`dados\`, e não tinha \`tentativas\` — e
-- \`undefined < 5\` é falso, então a passada filtrava a fila inteira para fora e
-- nada subia, com a tela dizendo "tudo em dia".

CREATE TABLE IF NOT EXISTS flw_sincronizacao (
  id         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  store      TEXT    NOT NULL DEFAULT '',
  registro   INTEGER NOT NULL DEFAULT 0,   -- o id da linha que espera subir; 0 em \`substituirTudo\`
  operacao   TEXT    NOT NULL DEFAULT '',  -- \`salvar\`, \`excluir\` ou \`substituirTudo\`
  chave      TEXT    NOT NULL DEFAULT '',  -- a identidade do item na fila (nasceu como chave de idempotência)
  dados      TEXT    NOT NULL DEFAULT 'null', -- JSON: o registro em \`salvar\`, a lista em \`substituirTudo\`, \`null\` em \`excluir\`
  criado_em  INTEGER NOT NULL DEFAULT 0,   -- epoch em milissegundos da escrita local — é o carimbo que decide o conflito
  tentativas INTEGER NOT NULL DEFAULT 0,   -- quantas vezes já tentou subir; no teto, o item para de ser tentado e fica marcado
  erro       TEXT    NOT NULL DEFAULT ''   -- o que o último erro disse; vazio enquanto nada falhou
) STRICT;

CREATE TABLE IF NOT EXISTS flw_conflitos (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  store             TEXT    NOT NULL DEFAULT '',
  registro          INTEGER NOT NULL DEFAULT 0,
  perdedor          TEXT    NOT NULL DEFAULT 'null', -- JSON: o que este aparelho tinha escrito e a planilha recusou
  vencedor          TEXT    NOT NULL DEFAULT 'null', -- JSON: o que ficou valendo
  criado_em         INTEGER NOT NULL DEFAULT 0,   -- epoch em milissegundos: quando a escrita perdida foi feita aqui
  vencedor_em       INTEGER NOT NULL DEFAULT 0,   -- epoch em milissegundos: quando a versão vencedora foi escrita, do outro lado
  vencedor_aparelho TEXT    NOT NULL DEFAULT ''   -- quem escreveu a versão vencedora, como a planilha o conhece
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
CREATE INDEX IF NOT EXISTS idx_flw_faturas_assinatura ON flw_faturas (assinatura_id, competencia);
CREATE INDEX IF NOT EXISTS idx_flw_tarefas_projeto ON flw_tarefas (projeto_id);
CREATE INDEX IF NOT EXISTS idx_flw_apontamentos_projeto ON flw_apontamentos (projeto_id, fim);
CREATE INDEX IF NOT EXISTS idx_flw_tiquetes_status ON flw_tiquetes (status, cliente_id);
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
--
-- **O imposto entrou em 23/09/2026**, e a vista foi largada e recriada pela
-- migração 1 do aparelho: um \`CREATE VIEW IF NOT EXISTS\` nunca muda num banco
-- que já a criou.
CREATE VIEW IF NOT EXISTS vw_flow_faturas_saldo AS
SELECT
  f.id,
  f.cliente_id,
  f.vencimento,
  f.total,
  f.desconto,
  f.imposto,
  COALESCE(
    (SELECT SUM(p.valor) FROM flw_faturas_pagamentos p WHERE p.fatura_id = f.id),
    0
  ) AS pago,
  f.total - f.desconto + f.imposto - COALESCE(
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
`},l=/^CREATE\s+(?:UNIQUE\s+)?(TABLE|INDEX|VIEW)(?:\s+IF\s+NOT\s+EXISTS)?\s+([A-Za-z_][A-Za-z_0-9]*)/i,u={TABLE:`tabela`,INDEX:`indice`,VIEW:`vista`},d=/^\s{2,}([a-z_][a-z_0-9]*)\s+\S/;function f(e){let t=0;for(;t<e.length;){let n=e.charAt(t);if(n===`'`||n===`"`){for(t++;t<e.length&&e.charAt(t)!==n;)t++;t++;continue}if(n===`-`&&e.charAt(t+1)===`-`)return e.slice(t+2).trim();t++}}function p(e){let t=e.split(`
`),n=0;for(;n<t.length&&!/^\s*CREATE\b/i.test(t[n]??``);)n++;let r=[];for(let e=n-1;e>=0;e--){let n=(t[e]??``).trim();if(!n.startsWith(`--`))break;r.unshift(n.replace(/^--\s?/,``))}return{nota:r.join(`
`).trim(),comando:t.slice(n).join(`
`).trim()}}function m(e){let t=[];for(let n of s(e)){let{nota:e,comando:r}=p(n.sql),i=l.exec(r);if(i===null)throw Error(`o esquema canônico só descreve tabela e índice: ${r.slice(0,60)}`);let a={},o=[];for(let e of r.split(`
`)){let t=d.exec(e)?.[1];if(t===void 0)continue;o.push(t);let n=f(e);n!==void 0&&n!==``&&(a[t]=n)}t.push({nome:i[2]??``,tipo:u[(i[1]??``).toUpperCase()]??`indice`,sql:r,nota:e,colunas:a,campos:o})}return t}var h=new Map;function g(e){let t=h.get(e);return t===void 0&&(t=m(c[e]),h.set(e,t)),t}function _(e){return g(e).filter(e=>e.tipo===`tabela`).map(e=>e.nome)}var v=`bioma_carimbos`;`${v}`,`${v}`,Math.max(...[{versao:1,nome:`esquemaBase`,oQue:`o esquema canônico inteiro, com as sementes, o Tutorial e o catálogo de fábrica`},{versao:2,nome:`ordemNoAno`,oQue:"a coluna `ordem_no_ano` da Cronologia, que o `ordem_absoluta` não sabe dar"},{versao:3,nome:`cartoesImite`,oQue:`a tabela e o acervo de "Imite a Sua Fé"`},{versao:4,nome:`principiosBiblicos`,oQue:`a tabela e o acervo dos Princípios Bíblicos`},{versao:5,nome:`aplicarBusca`,oQue:"a FTS5 dos sete acervos, os gatilhos e o `rebuild`"},{versao:6,nome:`umaFonteDeVersao`,oQue:"a `_migracoes` do migrador legado sai: `bioma_esquema` fica como única"},{versao:7,nome:`limiteEmCentavos`,oQue:"o `limite_mensal` da categoria vira centavo em `INTEGER`, como o dinheiro do Kobi Note"},{versao:8,nome:`bancada`,oQue:`a bancada: toda tabela do Kobi Note e do Kobi Flow passava a existir também no admin — desfeita pela 21`},{versao:9,nome:`perguntasFrequentes`,oQue:`a tabela de "Respostas Frequentes" e o tópico do Tutorial`},{versao:10,nome:`perguntasComLentes`,oQue:`"Respostas Frequentes" vira exercício de lentes: a tabela é refeita e o acervo velho sai`},{versao:11,nome:`filaDaSincronizacao`,oQue:`a fila e o diário de conflitos do Kobi Flow ganhavam, na bancada, as colunas da sincronização — sem efeito desde a 21`},{versao:12,nome:`jogoNaBancada`,oQue:`o progresso e as respostas do Você se lembra? chegavam à bancada — sem efeito desde a 21`},{versao:13,nome:`congregacaoNoPerfil`,oQue:`a congregação e o grupo de campo no Perfil do Kobi Note, na bancada — sem efeito desde a 21`},{versao:14,nome:`documentoDeVenda`,oQue:`o documento de venda do Kobi Flow e as tabelas dos módulos de gestão, na bancada — sem efeito desde a 21`},{versao:15,nome:`textosDoUsuario`,oQue:`os textos dos documentos que o usuário do Kobi Flow escreve, na bancada — sem efeito desde a 21`},{versao:16,nome:`semMarcaEspecial`,oQue:`a marca de especial sai dos tipos do Calendário: o contador que ela alimentava não existe mais`},{versao:17,nome:`jogosDeAtividades`,oQue:`os tópicos do Tutorial do Livros da Bíblia e da Linha do Tempo (os recordes iam à bancada até a 21)`},{versao:18,nome:`conexoes`,oQue:`o acervo do jogo Conexões (os grupos de nomes) e o tópico do Tutorial dele`},{versao:19,nome:`personagens`,oQue:`o acervo do Conheça os Personagens e o tópico do Tutorial dele`},{versao:20,nome:`placarDosJogos`,oQue:`o placar nos recordes das Atividades, na bancada — sem efeito desde a 21`},{versao:21,nome:`semBancada`,oQue:`a bancada sai: as tabelas dos dois PWA e as colunas que ela enxertou nas curadas`}].map(e=>e.versao)),_(`nucleo`);function y(e){return typeof e==`string`?`<p>${e}</p>`:`<ul>${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function b(e,t,n,r,i){return{id:e,modulo_id:t,titulo:n,resumo:r,conteudo:i.map(y).join(``),ordem:e,publicar:1}}var x=[b(1,``,`Visão geral`,`O que é o Kobi Note e como se orientar nele`,[`O Kobi Note é um aplicativo que mora <strong>no seu aparelho</strong>. Tudo o que você escreve (anotações, metas, finanças, relatórios, documentos) fica gravado ali mesmo, protegido por criptografia, e não é enviado a servidor nenhum. Não há conta, senha nem nuvem. Ele também funciona <strong>sem internet</strong>: depois da primeira abertura, dá para usar no ônibus, no campo ou em qualquer lugar sem sinal.`,`<strong>Instalar.</strong> O app fica melhor instalado na tela inicial, como um aplicativo comum. No Android, abra o menu do Chrome e toque em "Instalar app" ou "Adicionar à tela inicial". No iPhone, toque em Compartilhar e depois em "Adicionar à Tela de Início". No computador, clique no ícone de instalar na barra de endereço.`,`<strong>A tela inicial.</strong> É o mapa do app. No alto fica a data de hoje e a sua <strong>agenda do dia</strong>, com os compromissos do Calendário. Logo abaixo vem a <strong>faixa de números</strong>: cartões pequenos que só aparecem quando há algo a mostrar (o tempo de estudo do mês, as contas vencidas e as que vencem hoje, os estudos bíblicos esfriando, os relatórios a entregar) e o cartão <strong>Minhas Metas</strong>, que está sempre lá. Tocar num cartão abre o módulo de onde aquele número vem.`,`Depois vêm os <strong>botões dos módulos</strong>, agrupados em seções: Estudo Pessoal, Atividades, Esteja Preparado, Extras, Pessoal e O Aplicativo. Cada botão abre o módulo direto, e alguns mostram um resumo embaixo do nome, como "2 eventos hoje" ou "35% da Bíblia".`,`<strong>Os botões do alto.</strong> Em qualquer tela, o cabeçalho tem:`,[`<strong>a seta ←</strong>, que volta para a tela anterior;`,`<strong>o QR</strong>, que abre o seu cartão de contato para alguém salvar o seu número;`,`<strong>o coração</strong>, que abre a sua ficha de emergência (tipo sanguíneo, alergias, contato de emergência);`,`<strong>o sol ou a lua</strong>, que troca entre o tema claro e o escuro.`],`O cartão e a ficha saem do que você preenche no <strong>Perfil</strong>.`,`<strong>Acessibilidade.</strong> Texto maior, contraste reforçado, menos movimento, botões maiores, jogos sem relógio e outras ajudas ficam em <strong>Perfil › Acessibilidade</strong>. Cada opção diz para quem foi pensada, e a tela muda na hora. O idioma do app se troca no mesmo Perfil, na aba <strong>Sobre você</strong>.`,`<strong>No iPhone</strong>, instale o app pelo Safari: <strong>Compartilhar</strong> e depois <strong>Adicionar à Tela de Início</strong>. Aberto só no navegador, o iPhone pode apagar o que você guardou depois de sete dias sem uso.`,`<strong>O conteúdo do app.</strong> Poesias, perguntas do jogo, guias, receitas, princípios e este Tutorial vêm prontos e são atualizados de tempos em tempos. O app busca as novidades sozinho sempre que é aberto com internet, e o botão <strong>Sincronizar</strong>, na seção O Aplicativo, faz isso na hora. A sincronização nunca apaga o que é seu: ela só atualiza o conteúdo que vem pronto.`,`<strong>O backup.</strong> Como tudo fica só no aparelho, trocar de celular, desinstalar o app ou limpar os dados do navegador apaga o que você escreveu. Por isso, de tempos em tempos, abra o <strong>Sobre</strong>, toque em <strong>Baixar backup</strong> e guarde o arquivo fora do aparelho (no e-mail, num pen drive, no computador). Para levar tudo a outro aparelho, abra o Sobre lá e use <strong>Restaurar</strong> com esse arquivo.`,`<strong>Compartilhar o app.</strong> O botão <strong>Compartilhar</strong>, na seção O Aplicativo, mostra um QR para a outra pessoa apontar a câmera, e botões para mandar o convite pelo WhatsApp, pelo compartilhamento do aparelho ou copiando o texto.`,`Cada módulo tem o seu tópico aqui no Tutorial, e o <strong>Guia do Usuário</strong>, logo abaixo da Visão geral, resume o app inteiro numa leitura só.`]),b(2,`anotacoes`,`Anotações`,`Escrever, organizar em pastas e apresentar`,[`Um lugar para tudo o que você escreve: anotações de reunião, esboço de discurso, visitas, listas, ideias. Cada anotação tem um título e um texto com formatação (negrito, listas, títulos).`,`<strong>Criar uma anotação.</strong> Toque em <strong>+</strong>, no alto da tela, e escolha um <strong>modelo</strong>. O modelo já traz os títulos prontos para aquele tipo de anotação, e você só preenche. Escreva o <strong>título</strong> primeiro: sem ele, nada é gravado.`,`<strong>Não existe botão de salvar.</strong> O texto é gravado sozinho pouco depois de você parar de digitar, e a linha acima do texto mostra "Salvo às..." com a hora. Pode sair da tela quando quiser.`,`<strong>Ir para a reunião.</strong> O ícone de calendário com o visto, ao lado do +, abre uma anotação nova já com o modelo da reunião do dia: de segunda a sexta, a reunião Vida e Ministério; no sábado e no domingo, o discurso público.`,`<strong>Pastas.</strong> As pastas aparecem como botões acima da lista. Tocar numa pasta mostra só as anotações dela; <strong>Todas</strong> mostra tudo. O ícone de pasta com o + cria uma pasta nova. Com uma pasta escolhida, aparecem os botões para <strong>Renomear</strong> e <strong>Excluir</strong> a pasta; excluir a pasta não apaga as anotações, que passam para "Sem pasta". Dentro da anotação, os mesmos botões de pasta escolhem onde ela fica.`,`<strong>Achar uma anotação.</strong> Use o campo de <strong>busca</strong>, que procura no título e no texto, ou a caixa de <strong>modelos</strong>, que mostra só as anotações de um tipo.`,`<strong>Os botões da anotação aberta</strong>, no alto da tela:`,[`<strong>o alfinete</strong> fixa a anotação no topo da lista, para as que você abre toda semana;`,`<strong>a caixa</strong> arquiva: a anotação sai da lista e passa para <strong>Arquivadas</strong>. Para trazê-la de volta, abra Arquivadas, abra a anotação e toque de novo na caixa;`,`<strong>a tela de projeção</strong> abre o <strong>modo apresentação</strong>: o texto em letra grande, rolando sozinho, bom para ler no palco. Os botões − e + mudam a velocidade, e ali também há pausa e leitura em voz alta;`,`<strong>a lixeira</strong> exclui a anotação, depois de pedir confirmação. Excluir não tem volta.`],`Dica: arquive em vez de excluir o que já passou. A lista fica limpa, e o esboço do ano passado continua lá quando você precisar.`]),b(3,`guias`,`Guias Táticos`,`Ler os guias prontos e escrever os seus`,[`Os guias são orientações práticas para situações de emergência e preparo: o que fazer, em que ordem, com o quê. Alguns já vêm com o app e são atualizados pela sincronização; os que você escreve aparecem na mesma lista com a marca <em>Minha</em>.`,`<strong>Ler um guia.</strong> Toque no guia na lista. No alto da tela há três botões: <strong>apresentar</strong> (o texto em letra grande, rolando sozinho), <strong>ouvir</strong> (o aparelho lê o guia em voz alta; toque de novo para pausar) e <strong>compartilhar</strong> (manda o texto pelo WhatsApp ou outro aplicativo).`,`<strong>Escrever o seu.</strong> Toque em <strong>+</strong>, dê um título e escreva. Nos guias que são seus aparecem também os botões de <strong>editar</strong> (o lápis) e de <strong>excluir</strong> (a lixeira). Os guias que vêm prontos não se editam nem se excluem.`,`Use a <strong>busca</strong>, no alto da lista, para achar um guia pelo título ou pelo texto.`,`Dica: o que você escreve fica no aparelho e nunca é trocado pela sincronização. Vale escrever o guia da sua família: onde se encontrar, quem busca as crianças, os telefones que ninguém sabe de cabeça.`]),b(4,`poesia`,`Nossas verdades em poesia`,`Ler, guardar as preferidas e escrever as suas`,[`Uma coletânea de poesias para ler e meditar. Elas vêm com o app e ganham novas a cada sincronização. As que você escreve entram na mesma lista, com a marca <em>Minha</em>. O botão de informação, no alto da lista, explica o propósito das obras.`,`<strong>A lista.</strong> Cada cartão mostra o título e um trecho da poesia. A <strong>estrela</strong> do cartão marca a poesia como favorita, e as favoritas sobem para o topo. A <strong>busca</strong> procura pelo título e pelo texto.`,`<strong>A leitura.</strong> Toque numa poesia para abri-la. Uma barra fina no alto mostra quanto já foi lido, e no fim os botões <strong>Anterior</strong> e <strong>Próxima</strong> levam à poesia vizinha sem voltar à lista. No alto da tela ficam a estrela, o modo <strong>apresentação</strong> (letra grande, rolando sozinho), a <strong>leitura em voz alta</strong> e o <strong>compartilhar</strong>.`,`<strong>As notas.</strong> Algumas poesias têm números pequenos no meio do texto. Tocar no número leva à nota, no fim da poesia, e "Voltar ao ponto da nota" traz de volta ao verso.`,`<strong>Escrever a sua.</strong> Toque em <strong>+</strong>, dê um título e escreva. Nas suas aparecem também o lápis, para editar, e a lixeira, para excluir.`,`Dica: se você tem uma meta de poesias lidas nas Minhas Metas, é lá que você marca cada leitura: essa meta é contada à mão.`]),b(5,`receitas`,`Receitas`,`Achar por categoria e guardar as suas`,[`Receitas prontas, que vêm com o app, e as que você cadastrar, todas na mesma lista.`,`<strong>Achar uma receita.</strong> Os botões com desenho, acima da lista, filtram por categoria; toque de novo no botão aceso para ver todas. A <strong>busca</strong> procura pelo nome. A <strong>estrela</strong> marca as favoritas, que aparecem contadas no botão do módulo, na tela inicial.`,`<strong>A receita aberta</strong> tem os botões de estrela, <strong>apresentar</strong> (letra grande, bom para ler de longe na cozinha), <strong>ouvir</strong> em voz alta, <strong>compartilhar</strong>, <strong>editar</strong> e <strong>excluir</strong>.`,`<strong>Cadastrar a sua.</strong> Toque em <strong>+</strong>. Escolha a categoria e preencha os <strong>ingredientes</strong> e o <strong>modo de preparo</strong> com <strong>um item por linha</strong>: é assim que a receita fica legível na tela e na leitura em voz alta.`,`<strong>Atenção às receitas que vêm com o app.</strong> Elas também se editam e se excluem, mas a mudança pode ser desfeita quando a sincronização trouxer uma versão nova das receitas. Para guardar de vez uma receita do seu jeito, cadastre-a como sua pelo +.`]),b(6,`jogo`,`Você se lembra?`,`Um jogo de perguntas para fixar o que você estuda`,[`Um jogo de perguntas de múltipla escolha sobre a Bíblia. Cada partida tem <strong>dez perguntas</strong> sorteadas, e a ordem das alternativas muda a cada vez.`,`<strong>Antes de começar</strong>, escolha:`,[`<strong>o modo</strong>: <strong>Estudo</strong>, sem pressa, ou <strong>Desafio</strong>, com um cronômetro em cada pergunta e XP a mais para quem responde rápido;`,`<strong>a dificuldade</strong>: Todas, Fácil, Médio ou Difícil.`],`Depois toque em <strong>Começar</strong>.`,`<strong>Durante a partida</strong>, toque na alternativa que você acha certa. O app mostra na hora se acertou e, quando há, a <strong>explicação</strong> da resposta. Toque em <strong>Próxima</strong> para seguir. No alto aparecem as perguntas restantes, os acertos e os erros. No modo Desafio dá para <strong>pausar</strong> o cronômetro.`,`<strong>O XP.</strong> Cada acerto rende pontos de experiência (XP). Pergunta difícil vale mais, e acertos seguidos multiplicam: 5 seguidos dobram o XP, 10 triplicam, 20 quadruplicam. Todo o XP que você já ganhou define o seu <strong>nível</strong>. O <strong>saldo</strong> de XP serve para comprar uma <strong>dica</strong>, que custa 15 XP e tira duas alternativas erradas da pergunta.`,`<strong>O resultado.</strong> No fim aparecem os acertos, o XP ganho e o seu nível. <strong>Anotar no Caderno de Estudo</strong> guarda o resultado no Caderno, com espaço para escrever o que você aprendeu. <strong>Jogar de novo</strong> começa outra partida.`,`As perguntas já respondidas não se repetem. Quando você responder todas de uma dificuldade, <strong>Reiniciar</strong> libera as perguntas de novo, sem perder o XP. Novas perguntas chegam com a sincronização.`,`<strong>Sem pressa.</strong> Com <strong>Jogos sem relógio</strong> ligado, em Perfil › Acessibilidade, o modo Desafio sai da escolha: nenhuma pergunta expira.`,`Dica: erre sem medo. A explicação de cada resposta é a parte que mais ensina.`]),b(7,`criacao`,`Teve um Projeto?`,`Desafios sobre o projeto que se vê na criação`,[`Cada módulo apresenta algo da criação (um ser vivo, a Terra, o DNA, as órbitas) e mostra, com um desafio interativo, a engenharia e a matemática que há nele.`,`<strong>A lista</strong> agrupa os módulos por assunto: toque num assunto para ver os módulos dele. O visto marca os que você já concluiu, e o chapéu de formatura marca os que ganharam o selo de <strong>Estudo Diligente</strong>.`,`<strong>Como fazer um módulo:</strong>`,[`leia o <strong>Conceito</strong>, a explicação do assunto, e a apresentação do <strong>Desafio</strong>. Toque na ilustração para ampliá-la, e use o link do jw.org para ler a fonte;`,`toque em <strong>Começar</strong> para abrir o desafio. Cada um tem a sua instrução na tela: equilibrar uma balança, achar a rota mais curta da abelha, lançar um planeta na velocidade certa... Quando achar que resolveu, toque em <strong>Verificar</strong>. Errou? A tela diz o que ajustar, e você tenta de novo;`,`resolvido o desafio, aparece a <strong>reflexão</strong> sobre o que ele mostrou;`,`por último, o <strong>Caderno do Investigador</strong>: escreva com as suas palavras o que aprendeu. O texto vai para o Caderno de Estudo e dá o selo de Estudo Diligente.`],`<strong>Outros módulos</strong>, no fim da tela, leva ao próximo sem voltar à lista.`]),b(8,`entenda`,`Entenda Melhor`,`Assuntos explicados com gráficos que você mexe`,[`Assuntos que ficam mais claros quando se veem: escalas, medições, cronologias, probabilidades. Cada assunto traz uma explicação e uma atividade com gráfico, em que você mexe nos controles e vê o resultado mudar na hora.`,`<strong>Como usar</strong> (é o mesmo caminho do Teve um Projeto?):`,[`toque num assunto da lista e leia o <strong>Conceito</strong> e a apresentação do <strong>Desafio</strong>. A ilustração amplia com um toque, e o link do jw.org abre a fonte;`,`toque em <strong>Começar</strong> e siga a instrução da tela: arrastar, tocar, escolher uma opção. Quando a atividade pede uma resposta, toque em <strong>Verificar</strong>; se não for ainda, a tela diz o que ajustar;`,`no fim vem <strong>O que você acabou de entender</strong>, com o resumo, e um campo para escrever com as suas palavras. O texto vai para o Caderno de Estudo e dá o selo de <strong>Estudo Diligente</strong>.`],`Na lista, o visto marca os assuntos que você já concluiu, e o chapéu de formatura, os que ganharam o selo.`]),b(9,`cronologia`,`Cronologia Comparada`,`A história bíblica e a mundial lado a lado`,[`Uma linha do tempo que vai da criação aos nossos dias e põe lado a lado três trilhas: a <strong>Bíblica</strong>, a <strong>Mundial</strong> e a <strong>Histórica</strong>. Ela ajuda a ver o que acontecia no mundo na época de cada relato da Bíblia.`,`<strong>Andar pela linha do tempo.</strong> Role a tela para baixo. A linha é dividida em <strong>eras</strong>, e o nome da era em que você está fica preso no alto enquanto você rola. Os botões pequenos da primeira faixa, também presos no alto, pulam direto para uma era.`,`<strong>Filtrar.</strong> Os botões <strong>Bíblica</strong>, <strong>Mundial</strong> e <strong>Histórica</strong> ligam e desligam cada trilha. A <strong>busca</strong> procura um acontecimento pelo nome ou pelo texto. O botão do funil riscado limpa os filtros.`,`<strong>Cada acontecimento</strong> mostra a data, a trilha, a explicação e o link <strong>Ver a fonte</strong>, que abre de onde a informação saiu. Os fatos bíblicos vêm do jw.org; os fatos da história mundial vêm de acervos oficiais (museus, arquivos, UNESCO) e seguem a datação usada pelos historiadores.`,`Dica: leu um relato na Bíblia? Procure a época dele aqui e veja o que o resto do mundo estava fazendo.`]),b(10,`caderno`,`Caderno de Estudo`,`Tudo o que você escreveu nos módulos de estudo`,[`O Caderno junta, num lugar só, o que você escreve nos módulos de estudo. Não é preciso copiar nada: quando você escreve no campo do fim de um módulo, o texto já vem para cá.`,`<strong>O que chega ao Caderno:</strong>`,[`o <strong>Reflexo no Espelho</strong> do Imite a Sua Fé;`,`as reflexões dos <strong>Princípios Bíblicos</strong>;`,`a sua resposta, <strong>Com as suas palavras</strong>, nas Respostas Frequentes;`,`o <strong>Caderno do Investigador</strong> do Teve um Projeto? e do Entenda Melhor;`,`a <strong>pérola</strong> do Meu Estudo Pessoal, quando você marca essa opção;`,`o resultado de uma partida do <strong>Você se lembra?</strong>, quando você escolhe anotá-lo.`],`Cada anotação mostra de que módulo veio. Nos módulos, o link <strong>Ver no Caderno de Estudo</strong>, abaixo do campo, traz direto para cá.`,`<strong>Achar uma anotação.</strong> Use a <strong>busca</strong> ou a caixa de <strong>origem</strong>, que mostra só o que veio de um módulo.`,`<strong>Escrever uma anotação solta.</strong> Toque em <strong>+</strong>. O título e a referência (um texto bíblico, um assunto) são opcionais; só o campo <strong>O que você aprendeu</strong> é obrigatório.`,`Cada anotação tem os botões <strong>Editar</strong> e a lixeira, para excluir.`,`Dica: releia de tempos em tempos. O que você escreveu meses atrás mostra o quanto o estudo andou.`]),b(11,`prep`,`Esteja Preparado`,`Checklists, estoque de alimentos e cofre de documentos`,[`O preparo da família para emergências, em três partes, cada uma com o seu botão na seção <strong>Esteja Preparado</strong> da tela inicial: os <strong>Checklists de Prontidão</strong>, o <strong>Estoque de alimentos</strong> e o <strong>Cofre de documentos</strong>. Os Guias Táticos ficam na mesma seção e têm o seu próprio tópico.`,`<strong>O índice de prontidão</strong>, no alto da seção, vai de 0 a 100. Ele soma o quanto dos checklists você já marcou e quantos dias de comida o estoque garante, com 30 dias contando como o máximo. As duas partes contam, porque mochila pronta sem comida, ou comida sem nada organizado, não é estar preparado.`,`<strong>Checklists de Prontidão.</strong> O app já traz checklists sugeridos, como a mochila de emergência. Toque no nome de um checklist para abri-lo e toque em cada item conforme você o separa; a barra mostra quanto já está pronto. Dentro do checklist aberto, o lápis edita e a lixeira exclui. Para criar o seu, toque em <strong>+</strong>: dê um nome, um emoji se quiser, e acrescente os itens com quantidade, observação e, quando houver, a validade.`,`<strong>Estoque de alimentos.</strong> O estoque começa com uma lista sugerida, que você ajusta ao que tem em casa. Cada item guarda a quantidade, o peso, as calorias e a <strong>validade</strong>. O app avisa do que já venceu e do que vence nos próximos 7 dias. O lápis de cada item o edita, a lixeira o exclui, e o + acrescenta um item novo.`,`<strong>A calculadora de autonomia</strong>, no estoque, diz quantos dias o que você tem alimenta a sua casa. Informe a faixa de idade, o nível de atividade e quantas pessoas são. Ela mostra os dias de autonomia, a água sugerida, o peso total e quantos dias dependem de fogo para cozinhar, e avisa quando faltam alimentos com fibras e vitaminas.`,`<strong>Cofre de documentos.</strong> Guarda cópias de documentos (RG, CNH, certidões, receitas médicas) protegidas por criptografia e abertas com a <strong>biometria</strong> do aparelho, a mesma do desbloqueio da tela. Na primeira vez, toque em <strong>Criar o cofre</strong> e confirme com a digital ou o rosto. Depois, cada abertura pede a biometria de novo, e o cofre se tranca sozinho quando você sai da tela.`,`Dentro do cofre, <strong>Guardar um documento</strong> escolhe o arquivo e pede um nome. Toque num documento para vê-lo; de lá, <strong>Baixar</strong> salva uma cópia no aparelho. O lápis renomeia o documento, e a lixeira o exclui. <strong>Trancar</strong> fecha o cofre na hora.`,`<strong>Atenção:</strong> o cofre não tem senha de reserva. Se o aparelho for trocado ou os dados do navegador forem apagados, a chave se perde e os documentos do cofre não abrem mais. Guarde os originais em outro lugar também.`]),b(12,`financeiro`,`Financeiro`,`Receitas, despesas, contas a pagar e recorrências`,[`O controle do dinheiro da casa: o que entra (<strong>receitas</strong>), o que sai (<strong>despesas</strong>) e as contas que ainda vão vencer. O módulo tem quatro telas: o painel, as transações, as categorias e as recorrências.`,`<strong>O painel</strong> é a primeira tela. No alto está o <strong>saldo realizado</strong>, que conta só o que já foi pago ou recebido, e ao lado o <strong>previsto</strong>, que conta também o que ainda está em aberto. O olho esconde e mostra os valores, para abrir o app perto de outras pessoas. Abaixo, escolha o <strong>mês</strong> e o <strong>ano</strong> para ver as receitas, as despesas, o que falta receber e o que falta pagar naquele mês, o gráfico por categoria e os limites de gasto. Os botões Transações, Categorias e Recorrências abrem as outras telas.`,`<strong>Lançar uma conta.</strong> Abra <strong>Transações</strong>, toque em <strong>+</strong> e preencha a descrição, o valor, se é receita ou despesa, a categoria e o vencimento. Marque <strong>Pago</strong> se ela já foi paga.`,`<strong>Pagar uma conta.</strong> Na lista de transações, toque no círculo ao lado da conta. O app pergunta se quer marcar como paga, mostrando o valor, para você conferir que tocou na linha certa. Tocou por engano numa conta já paga? Toque de novo no círculo para <strong>desfazer a baixa</strong>.`,`<strong>A lista de transações</strong> tem quatro filtros:`,[`<strong>Vencidas</strong>, onde a lista abre: as contas atrasadas, de qualquer mês;`,`<strong>A vencer</strong>: as contas em aberto que ainda não venceram, de qualquer mês;`,`<strong>Pagas</strong> e <strong>Todas</strong>: mostram o mês escolhido no seletor.`],`Uma conta que vence hoje ainda não está atrasada: ela aparece em A vencer. A lista mostra vinte por vez, com botões de página embaixo.`,`<strong>Categorias.</strong> O app já traz as mais comuns. Cada categoria tem nome, ícone, cor e um <strong>limite mensal</strong> opcional (zero quer dizer sem limite); o painel mostra quanto do limite já foi gasto. Excluir uma categoria não apaga as transações dela, que ficam sem categoria.`,`<strong>Recorrências</strong> são as contas que se repetem: aluguel, luz, salário. Escolha a periodicidade (diária, semanal, mensal ou anual) e o dia. O dia 31 cai no último dia dos meses mais curtos. Sempre que você abre o Financeiro, o app lança sozinho as contas das recorrências que já chegaram à data. Uma recorrência nova começa na próxima data; ligue <strong>Lançar o vencimento deste período agora</strong> para lançar também a deste mês. <strong>Pausar</strong> suspende uma recorrência sem apagá-la, e excluí-la não apaga as contas que ela já lançou.`,`Dica: as contas vencidas e as que vencem hoje aparecem também na tela inicial, na faixa de números.`]),b(13,`metas`,`Minhas Metas`,`Objetivos com prazo e progresso`,[`Uma meta é um objetivo com número e prazo: "30 horas de campo até dezembro", "gastar no máximo R$ 500 com mercado este mês". O módulo mostra quanto falta para cada uma.`,`<strong>Onde fica.</strong> As Metas não têm botão entre os módulos: abra pelo cartão <strong>Minhas Metas</strong>, na faixa de números da tela inicial.`,`<strong>Criar uma meta.</strong> Toque em <strong>+</strong>, dê um título, escolha a <strong>categoria</strong> (o que vai ser contado), o <strong>alvo</strong>, o <strong>início</strong> e o <strong>prazo final</strong>. Só conta o que acontecer entre essas duas datas.`,`<strong>Metas automáticas.</strong> Nestas categorias o progresso se calcula sozinho, a partir do que você já registra nos outros módulos, e a meta leva a marca <strong>Automática</strong>:`,[`<strong>Financeiro</strong>: o saldo previsto, as despesas, ou as despesas de uma categoria que você escolhe;`,`<strong>Ministério</strong>: as horas de campo dos relatórios, os estudos bíblicos e as revisitas;`,`<strong>Estudo Pessoal</strong>: os minutos estudados, o número de sessões, ou só os minutos das sessões do tipo Leitura da Bíblia;`,`<strong>Você se lembra?</strong>: as perguntas respondidas.`],`<strong>Metas manuais.</strong> Nas outras categorias, como <strong>Poesias lidas</strong>, é você quem conta: use os botões <strong>−</strong> e <strong>+</strong> da meta a cada avanço.`,`<strong>Acompanhar.</strong> Os botões <strong>Ativas</strong>, <strong>Concluídas</strong> e <strong>Todas</strong> filtram a lista, e a busca acha uma meta pelo título. <strong>Concluir</strong> encerra uma meta, e <strong>Reabrir</strong> a traz de volta. O lápis edita a meta, e a lixeira a exclui.`,`Dica: o <strong>Quero Fazer Mais</strong>, dentro do Vida e Ministério, calcula quanto cada saída de campo precisa render e cria a meta de horas para você.`]),b(14,`ministerio`,`Vida e Ministério`,`Contador, relatório ao secretário e estudos`,[`O módulo tem três partes: o <strong>contador do mês</strong>, os <strong>relatórios</strong> e os <strong>estudos bíblicos</strong>. Ao lado deles fica o atalho <strong>Quero fazer mais</strong>, que transforma uma meta de horas em compromisso semanal.`,`<strong>O contador</strong> soma o mês corrente em cinco linhas: tempo, estudos, revisitas, publicações e vídeos. O tempo anda de 15 em 15 minutos no − e no +, e o botão <strong>+1h</strong> soma uma hora inteira de uma vez. Cada toque já fica gravado. O botão de zerar, no alto do quadro, volta os cinco a zero depois de pedir confirmação.`,`<strong>O relatório</strong> se faz quando o mês termina. O botão <strong>Gerar relatório do mês</strong> abre o formulário já preenchido pelo contador: as horas, os estudos e, quando houve, as revisitas, as publicações e os vídeos vão escritos nas <strong>Observações</strong>, uma linha por item. É ali que está o relatório inteiro, e você pode ler e corrigir antes de salvar. O tipo de publicador vem do último relatório; trocar o mês, o ano ou o tipo refaz o texto, enquanto você não o tiver editado à mão.`,`<strong>As horas.</strong> Os pioneiros relatam horas <strong>inteiras</strong>: 6h45 no contador viram 6 no relatório, e os 45 minutos passam para o contador do mês seguinte quando o relatório é enviado. O <strong>Publicador Especial</strong> relata o tempo como foi contado, com a fração, e nada passa adiante. O <strong>publicador</strong> não relata horas, e o relatório leva o <strong>tempo</strong> do contador como informação (Tempo: 6h45), também sem nada passar adiante.`,`<strong>O envio.</strong> Com o telefone do <strong>Secretário da Congregação</strong> preenchido no Perfil, o botão <strong>Enviar</strong> abre a conversa dele no WhatsApp com o relatório já escrito. Depois de mandar a mensagem, volte ao app e confirme: só então ele fica marcado como enviado. Sem o telefone, o relatório vai pelo compartilhamento do aparelho e só conta como enviado quando o compartilhamento é concluído; se o aparelho apenas copiar o texto, cole na conversa e marque como enviado você mesmo. O texto abre com o seu nome, telefone, e-mail, congregação e grupo, que também vêm do Perfil, e a tela avisa quando o nome está faltando.`,`Enviar o relatório não apaga o contador daquele mês: revisitas, publicações e vídeos ficam guardados, porque as Metas e a contagem do ano os usam.`,`<strong>O lembrete.</strong> Durante o mês inteiro, o <strong>gato do lembrete</strong> cobra o relatório do mês anterior até ele ser enviado. O mês corrente nunca é cobrado, porque só se relata depois que ele acaba. O botão do lembrete leva direto ao que falta: ao envio, se o relatório já foi feito, ou ao formulário preenchido pelo contador daquele mês, se ainda não foi. Meses mais antigos sem relatório, ou com relatório nunca enviado, aparecem no aviso vermelho de <strong>relatórios em atraso</strong>. O mesmo gato aparece no cartão da tela inicial.`,`<strong>O ano de serviço.</strong> A lista de relatórios é agrupada por ano de serviço, de setembro a agosto, com o resumo de cada ano no topo: meses relatados, enviados, meses com participação, horas e a média de estudos. No fim da tela, o gráfico do ano mostra estudos e horas mês a mês e a faixa da participação; mês sem relatório aparece como um vão, e não como zero. As setas trocam de ano. Logo abaixo, a <strong>contagem do ano</strong> soma tempo, revisitas, publicações e vídeos de todos os contadores. Ela é só estatística e não vai no relatório.`,`<strong>Os estudos bíblicos.</strong> Cada estudo guarda nome, contato, endereço, publicação atual, dia e horário, e tem uma <strong>linha do tempo</strong>: depois de cada estudo, registre onde vocês pararam e como foi. O estudo sem registro há 15 dias ou mais fica marcado como <strong>esfriando</strong>, sobe para o topo da lista e entra num aviso no alto do módulo. O compartilhar de um estudo passa a outro publicador a publicação, onde pararam, o dia e o contato.`,`<strong>Quero fazer mais.</strong> Escolha a modalidade (de publicador a pioneiro especial, incluindo as 15 horas do pioneiro auxiliar nos meses de arranjo especial), o alvo de horas, o período e os dias em que pretende sair, e ele mostra quanto cada saída, cada semana e cada mês pedem. <strong>Registrar como meta</strong> cria a meta em Minhas Metas, que acompanha sozinha as horas dos seus relatórios.`,`Dica: registre no fim de cada saída, não no fim do mês — é a diferença entre um número exato e um número lembrado. E preencha o Perfil antes do primeiro envio: o seu nome e o telefone do secretário são o que fazem o relatório chegar ao destino dizendo de quem é.`]),b(15,`estudo`,`Meu Estudo Pessoal`,`Estudar com hora marcada e guardar o que aprendeu`,[`Este módulo é um momento reservado para estudar. Você escolhe o que vai estudar, ora, estuda com um cronômetro contando o tempo e, no fim, escreve o que aprendeu: a <strong>pérola</strong>. Cada estudo fica guardado no histórico, e o tempo dedicado aparece também na tela inicial e nas Metas.`,`<strong>Para começar.</strong> Escolha o <strong>tipo de estudo</strong>: Leitura da Bíblia, Estudo Pessoal, Preparação de Reunião ou Meditação. Se quiser, escreva o <strong>assunto</strong>, por exemplo "Reunião de quinta" ou o nome do livro que vai ler. Depois escolha o <strong>alvo de tempo</strong>, de 5 a 50 minutos: é o tempo que você pretende dedicar. Toque em <strong>Começar</strong>.`,`<strong>A oração.</strong> Antes de o cronômetro começar, o app mostra um texto bíblico e convida você a orar. Quando estiver pronto, toque em <strong>Já orei — Quero começar</strong>. Se mudou de ideia, <strong>Cancelar</strong> volta ao começo sem gravar nada.`,`<strong>O cronômetro.</strong> O círculo vai se enchendo conforme o tempo passa, e o relógio no meio mostra quanto já foi. Quando você chega ao alvo, o círculo fica verde e aparece um aviso, mas o cronômetro não para: pode continuar estudando enquanto o assunto render. <strong>Pausar</strong> congela o tempo, e <strong>Continuar</strong> retoma de onde parou.`,`<strong>Pode sair do app.</strong> O cronômetro conta pelo relógio do aparelho, então ele continua certo mesmo que você abra outro aplicativo, bloqueie a tela ou o celular feche o Kobi Note para economizar memória. Quando você volta ao módulo, o estudo está do jeito que você deixou: o tempo, o assunto e a pérola que já tinha escrito. Ele só termina quando você salva ou descarta.`,`<strong>Atenção à pausa.</strong> Se você sair sem pausar, o tempo continua correndo, como num cronômetro de mão. Vai almoçar ou atender alguém? Toque em <strong>Pausar</strong> antes de sair e em <strong>Continuar</strong> quando voltar.`,`<strong>Encerrar.</strong> Terminou de estudar? Toque em <strong>Encerrar</strong>. O tempo para e abre a tela da pérola.`,`<strong>A pérola.</strong> É o que você leva do estudo: uma ideia, um texto bíblico, uma aplicação para a sua vida. Escreva no campo <strong>Pérola</strong>. Logo abaixo há duas caixas de marcar, e você pode marcar as duas, uma só ou nenhuma:`,[`<strong>Virar anotação, na pasta Pérolas</strong>: cria uma anotação com a pérola no módulo Anotações, dentro de uma pasta chamada Pérolas, que o app cria sozinho na primeira vez;`,`<strong>Guardar no Caderno de Estudo</strong>: coloca a pérola no Caderno, junto de tudo o que você escreveu nos outros módulos de estudo.`],`As caixas só ficam disponíveis depois que a pérola tem algum texto. Marcar uma caixa ainda não grava nada: quem grava é o botão <strong>Salvar sessão</strong>.`,`<strong>Salvar ou descartar.</strong> <strong>Salvar sessão</strong> guarda o estudo no histórico, com o tipo, o assunto, o tempo e a pérola, faz o que estiver marcado nas caixas e mostra o aviso "Sessão salva". Se algo der errado, o app avisa e deixa tudo na tela: é só tocar em Salvar de novo, sem risco de gravar em dobro. <strong>Descartar</strong> apaga o estudo em andamento sem gravar nada, depois de pedir confirmação. Ele aparece durante o cronômetro e na tela da pérola; use quando o estudo não aconteceu de verdade.`,`<strong>O histórico.</strong> O ícone de relógio no alto da tela do módulo abre o histórico: o total de sessões e de horas estudadas e um cartão por sessão, da mais recente para a mais antiga, com o tipo, a data, o tempo e a pérola. Uma pérola que ainda não virou anotação tem o botão <strong>Virar anotação</strong> ali mesmo. A lixeira exclui a sessão, depois de pedir confirmação.`,`Dica: uma sessão curta registrada vale mais que uma longa esquecida. E escreva a pérola enquanto o assunto está fresco: é ela que você vai reler daqui a um mês.`]),b(16,`leitura`,`Leitura da Bíblia`,`Marcar a leitura capítulo por capítulo`,[`Acompanha a sua leitura da Bíblia inteira: os 66 livros e os 1.189 capítulos. No alto fica o <strong>progresso geral</strong>, com quantos capítulos e quantos livros você já leu. A porcentagem aparece também no botão do módulo, na tela inicial.`,`<strong>Marcar o que leu.</strong> Toque no nome de um livro para abri-lo: aparecem os números dos capítulos. Toque em cada capítulo que você leu, e ele fica marcado; toque de novo para desmarcar. <strong>Livro inteiro</strong> marca todos os capítulos do livro de uma vez, e <strong>Limpar</strong> desmarca todos. O livro completo ganha um visto.`,`<strong>As quatro visões</strong>, nos botões do alto, mostram os mesmos livros em ordens diferentes. O que você marca numa aparece em todas:`,[`<strong>Canônica</strong>: a ordem da Bíblia, de Gênesis a Apocalipse;`,`<strong>Cronológica</strong>: pela época em que cada livro foi escrito;`,`<strong>Escritor</strong>: os livros agrupados por quem os escreveu;`,`<strong>Celebração</strong>: o roteiro de leitura dos acontecimentos da última semana de Jesus na Terra, para a época da Celebração da morte de Cristo. Aqui você marca cada dia do roteiro, e não capítulos.`],`O app lembra a última visão que você usou.`,`Dica: marque o capítulo assim que terminar de ler. É o que mantém o progresso fiel ao que você leu de verdade.`]),b(17,`calendario`,`Calendário`,`Compromissos e eventos, em cinco vistas`,[`A agenda dos seus compromissos: reuniões, consultas, estudos, lembretes. Os eventos de hoje aparecem também no alto da tela inicial e, com o app instalado, como um número no ícone do Kobi Note.`,`<strong>As vistas.</strong> Os botões <strong>Dia</strong>, <strong>Semana</strong>, <strong>Mês</strong>, <strong>Ano</strong> e <strong>Agenda</strong> trocam a forma de ver. A Agenda é uma lista, boa para ler os próximos compromissos. As setas ‹ e › andam para o período anterior e o seguinte, <strong>Hoje</strong> volta ao dia de hoje, e as caixas de mês e ano pulam direto para uma data. Na vista de ano, tocar no nome do mês abre o mês, e tocar num dia abre o dia.`,`<strong>Criar um evento.</strong> Toque em <strong>+</strong>, no alto, ou toque num dia vazio (ou num horário vazio, nas vistas de dia e semana) para criar o evento já naquela data e hora. Preencha o <strong>título</strong>, o <strong>tipo</strong>, a data e a hora de início e de fim e, se quiser, uma descrição. Ligue <strong>Dia inteiro</strong> para o que não tem hora marcada.`,`<strong>Mudar ou apagar.</strong> Toque no evento para abri-lo, mude o que precisar e salve, ou use <strong>Excluir</strong>. Nas vistas de dia e semana, dá para <strong>arrastar</strong> o evento para outro horário (ou outro dia, na semana) e puxar a borda de baixo para mudar a duração. No celular, segure o dedo sobre o evento antes de arrastar.`,`<strong>Os tipos.</strong> Cada evento tem um tipo, e cada tipo tem cor e ícone próprios, para você reconhecer o compromisso de longe. O app já traz alguns (Reunião, Compromisso, Pessoal, Lembrete...). O botão de etiquetas, no alto, abre a lista de tipos para criar, mudar ou excluir. Um tipo que já tem eventos não pode ser excluído.`,`Dica: quando hoje está na tela, as vistas de dia e de semana já abrem na hora atual, marcada por uma linha.`]),b(18,`perfil`,`Perfil / ICE / Acessibilidade`,`Seus dados, o cartão de contato e a ficha de emergência`,[`O Perfil guarda os seus dados pessoais e de saúde. Ele alimenta três coisas: o seu <strong>cartão de contato</strong>, a <strong>ficha de emergência</strong> (ICE, do inglês "em caso de emergência") e a identificação do <strong>relatório de campo</strong>, no Vida e Ministério. Os dados ficam só no aparelho.`,`<strong>Não há botão de salvar.</strong> Cada campo é gravado sozinho um segundo depois de você parar de digitar.`,`O Perfil tem <strong>três abas</strong>, no alto:`,[`<strong>Sobre você</strong>: o <strong>cartão de visita</strong> (nome completo, telefone, e-mail, um link pessoal e uma observação), a <strong>congregação</strong> e o grupo de campo, o nome e o telefone do <strong>secretário da congregação</strong>, para onde o relatório de campo é enviado, e o <strong>idioma</strong> do aplicativo;`,`<strong>ICE</strong>: a ficha de emergência. A primeira linha explica a sigla. Aqui ficam a <strong>saúde</strong> (tipo sanguíneo, doação de órgãos, alergias, remédios e observações médicas), a <strong>gestação</strong>, quando for o caso, as <strong>diretrizes de sangue (DPA)</strong> (a recusa de transfusão, as frações que você aceita por consciência e a data de assinatura do cartão), o <strong>contato de emergência</strong>, a <strong>CoLiH</strong> e a identificação complementar (cartão SUS, CPF, hospital de referência);`,`<strong>Acessibilidade</strong>: texto maior, tema escuro, contraste reforçado, links sublinhados, letras mais espaçadas, menos movimento, jogos sem relógio, botões maiores, foco destacado e vibração nos avisos. Cada opção diz para quem foi pensada e muda a tela na hora. A escolha é deste aparelho, e volta junto quando você restaura um backup.`],`Um telefone ou e-mail que parece incompleto ganha um aviso, mas é gravado assim mesmo. Uma data que não existe ou um CPF que não confere não são gravados até você corrigir.`,`<strong>O cartão de contato</strong> abre pelo botão do <strong>QR</strong>, no alto de qualquer tela. A outra pessoa aponta a câmera para o QR e salva o seu contato. Há também os botões de <strong>WhatsApp</strong> e de <strong>Compartilhar</strong>. O cartão só aparece com o nome e o telefone preenchidos.`,`<strong>A ficha de emergência</strong> abre pelo botão do <strong>coração</strong>, também no alto de qualquer tela. Ela mostra, em letras grandes, o que uma equipe de socorro precisa saber, e o telefone do contato de emergência vira um botão de ligar. Com a recusa de transfusão marcada, ela mostra o aviso <strong>NÃO APLIQUE SANGUE</strong>.`,`<strong>O aviso do DPA.</strong> Um ano depois da data de assinatura do cartão DPA, a tela inicial passa a avisar que ele venceu. O aviso só some quando você atualiza a data no Perfil.`,`Dica: preencha o contato de emergência mesmo que pareça improvável precisar. É a tela que outra pessoa vai abrir no seu lugar.`]),b(19,`tutorial`,`Tutorial`,`Como usar cada parte do Kobi Note`,[`Este módulo. Ele explica, em linguagem simples, como usar cada parte do Kobi Note.`,`O índice abre com a <strong>Visão geral</strong>, que apresenta o app e a tela inicial, e o <strong>Guia do Usuário</strong>, que resume o app inteiro numa leitura só. Depois vem um tópico para cada módulo, em ordem alfabética.`,`Os textos do Tutorial são atualizados junto com o conteúdo do app, sempre que ele é aberto com internet ou quando você toca em <strong>Sincronizar</strong>, na tela inicial.`]),b(20,`imite`,`Imite a Sua Fé`,`Enxergar a boa intenção por trás do atrito`,[`Um treino para a convivência. Cada cartão traz um <strong>atrito</strong> comum (em casa, na congregação, no trabalho) e o julgamento apressado que ele costuma provocar. A pergunta do cartão é: e se a intenção da outra pessoa fosse boa?`,`<strong>A lista.</strong> Os cartões ficam agrupados por tema: toque num tema para ver os cartões dele. A barra do alto mostra quantos você já fez, e os feitos ganham um visto.`,`<strong>Como fazer um cartão:</strong>`,[`leia <strong>O atrito</strong> e <strong>O que passa pela cabeça</strong>;`,`toque em <strong>Escolher a lente</strong>. Aparecem três <strong>lentes</strong>, três jeitos de explicar a intenção do outro. Escolha a que parece certa e toque em <strong>Confirmar a lente</strong>;`,`errou? Não custa nada: cada lente errada tem a sua explicação, e é ali que está o ensino. Olhe de novo e escolha outra;`,`acertando, aparecem a lente da boa intenção, o princípio bíblico, os textos, quem mais agiu assim na Bíblia e o link para ler a fonte no jw.org;`,`no fim vem o <strong>Seu Reflexo no Espelho</strong>, uma pergunta sobre você. Responda com sinceridade: o texto vai para o Caderno de Estudo e dá o selo <strong>Espelho Escrito</strong> ao cartão.`],`<strong>Outros cartões</strong>, no fim, leva ao próximo sem voltar à lista.`,`Dica: reler as suas respostas do Espelho meses depois, no Caderno, vale mais do que o cartão em si.`]),b(21,`principios`,`Princípios Bíblicos`,`O que a Bíblia diz sobre as decisões do dia a dia`,[`A parte de <strong>consulta</strong> do app. Cada princípio traz a frase que o resume, os textos bíblicos que o sustentam, <strong>por que isso existe</strong> e <strong>como isso se parece num dia comum</strong>. Não há exercício nem acerto: quem abre este módulo já sabe o que veio procurar.`,`<strong>Achar um princípio.</strong> Os princípios ficam agrupados por <strong>área da vida</strong> (família, trabalho, dinheiro, o que se fala...): toque numa área para ver os princípios dela. A <strong>busca</strong> procura pelo assunto, pela frase e pelos textos citados. A <strong>estrela</strong> guarda o princípio em <strong>Seus favoritos</strong>, a primeira área da lista.`,`<strong>O que o app lembra.</strong> O princípio que você abriu ganha a marca de lido, e a área em que você leu todos ganha um visto. A barra do alto mostra quanto do acervo você já leu, e o princípio sobre o qual você escreveu ganha um selo próprio.`,`<strong>Para refletir.</strong> O fim de cada princípio traz perguntas e um campo para a sua resposta. O que você escreve ali vai para o Caderno de Estudo. O link de cada texto abre a Bíblia on-line, e <strong>Outros princípios</strong> leva ao próximo.`]),b(22,`faq`,`Respostas Frequentes`,`Treine a responder o que perguntam a você`,[`Não é uma lista de respostas prontas: é <strong>treino</strong>. Cada pergunta é das que aparecem de verdade, na porta, no trabalho ou na mesa de domingo, e o módulo ensina a responder de um jeito que abre a conversa em vez de encerrá-la.`,`<strong>A lista.</strong> As perguntas ficam agrupadas por <strong>categoria</strong> (crenças, organização, pregação, vida familiar...): toque numa categoria para ver as perguntas dela. A <strong>busca</strong> procura pela pergunta e pelos textos bíblicos. A <strong>estrela</strong> guarda a pergunta em <strong>Seus favoritos</strong>, e a barra do alto mostra quantas você já fez.`,`<strong>Como fazer uma pergunta:</strong>`,[`leia <strong>Onde a pergunta aparece</strong> e <strong>O que vem primeiro à cabeça</strong>, a resposta de impulso, que geralmente encerra a conversa;`,`toque em <strong>Escolher a lente</strong>. As lentes são os ângulos por onde dá para responder. Escolha a que responde de verdade o que foi perguntado e toque em <strong>Confirmar a lente</strong>;`,`errou? Não custa nada: cada lente que não serve explica por quê. Tente de novo;`,`acertando, aparecem <strong>A resposta pela Bíblia</strong>, os textos que a sustentam, quem respondeu assim na Bíblia e o link para ler o assunto no jw.org;`,`no fim, <strong>Com as suas palavras</strong>: escreva como você responderia. O texto vai para o Caderno de Estudo e dá o selo da pergunta.`],`<strong>Outras perguntas</strong>, no fim, leva à próxima sem voltar à lista.`,`Dica: responder com as suas palavras é o que faz a resposta sair natural na hora em que alguém pergunta de verdade.`]),b(23,`livros`,`Livros da Bíblia`,`Pôr os 66 livros em ordem e em grupos`,[`Um jogo para aprender os <strong>66 livros da Bíblia</strong>: a ordem em que eles estão e o grupo de cada um. Ele fica na seção <strong>Atividades</strong> da tela inicial.`,`<strong>Antes de começar</strong>, escolha:`,[`<strong>o modo</strong>: <strong>Em ordem</strong>, para pôr os livros na ordem da Bíblia, ou <strong>Por grupo</strong>, para levar cada livro para a caixa do grupo dele (Pentateuco, Livros históricos, Evangelhos e Atos, Cartas de Paulo...);`,`<strong>o nível</strong>: <strong>Fácil</strong>, <strong>Médio</strong> ou <strong>Difícil</strong>. Embaixo aparece quantos livros entram na partida — no Difícil, são os 66.`],`Depois toque em <strong>Começar</strong>. O relógio começa a contar.`,`<strong>Como mexer nos livros:</strong>`,[`<strong>tocar</strong>: no modo Em ordem, o livro tocado vai para a próxima casa vazia da resposta. No modo Por grupo, toque no livro e depois na caixa. Tocar num livro já posto o devolve para a pilha;`,`<strong>arrastar</strong>: com o mouse, é só arrastar. No celular, segure o dedo parado sobre o livro por um instante e então arraste. A tela rola sozinha quando o livro chega perto da borda;`,`<strong>teclado</strong>: Espaço pega o livro, as setas o movem, Espaço solta e Esc cancela.`],`Quando a pilha acabar, toque em <strong>Conferir</strong>. O livro no lugar certo fica verde, e o fora do lugar fica vermelho: troque os vermelhos e confira de novo. A partida só termina com tudo certo.`,`<strong>O recorde.</strong> O melhor tempo de cada modo e nível fica guardado no aparelho, e aparece antes de começar. Sair do jogo no meio de uma partida para o relógio; voltar continua de onde estava. Com <strong>Jogos sem relógio</strong> ligado, em Perfil › Acessibilidade, o relógio some da tela e a partida não vale recorde.`,`Dica: comece pelo Fácil de cada modo. Os grupos ajudam a lembrar a ordem.`]),b(24,`linhadotempo`,`Linha do Tempo`,`Encaixar os acontecimentos na linha`,[`Um jogo para aprender <strong>em que ordem as coisas aconteceram</strong>. As cartas são acontecimentos da <strong>Cronologia Comparada</strong>, e o jogo fica na seção <strong>Atividades</strong> da tela inicial.`,`<strong>Antes de começar</strong>, escolha o modo:`,[`<strong>Bíblia</strong>: da Criação ao primeiro século, a história que a Bíblia conta;`,`<strong>História moderna</strong>: da Grande Apostasia aos nossos dias, pelos Anuários e pela história do Reino.`],`Depois, o nível:`,[`<strong>Fácil</strong>: só os acontecimentos em destaque, e cada carta da linha mostra o ano;`,`<strong>Médio</strong>: todos os acontecimentos do modo, com o ano à vista;`,`<strong>Difícil</strong>: todos os acontecimentos, e a linha não mostra o ano — é preciso lembrar da ordem.`],`<strong>Como jogar.</strong> A linha começa com dois acontecimentos, do <strong>mais antigo</strong>, em cima, <strong>ao mais recente</strong>, embaixo. A cada rodada chega uma <strong>carta nova</strong>, que fica presa no alto da tela enquanto você desce pela linha. Entre as cartas estão os lugares em que ela pode entrar, cada um com um <strong>+</strong> e o que ele é — <strong>Antes de 1513 AEC</strong>, <strong>Entre 1513 AEC e 1070 AEC</strong>, <strong>Depois de 1070 AEC</strong> —, e basta tocar no certo. No Difícil, em que o ano é a resposta, os lugares dizem só <strong>Entra aqui</strong>.`,`Acertou, a carta fica na linha, marcada em verde, e vem a próxima. <strong>Errou, a partida acaba.</strong> Quem encaixa o baralho inteiro ganha a partida. Dois acontecimentos do mesmo ano nunca caem na mesma partida.`,`<strong>Não sabe do que uma carta trata?</strong> Toque no <strong>ⓘ</strong> dela: aparece o resumo do acontecimento, com o texto bíblico, mas sem o ano — o ano é a resposta.`,`<strong>No fim</strong> aparece a linha inteira, com o ano de cada acontecimento, e a carta errada marcada no lugar em que ela entrava. Tocar num deles abre o acontecimento na Cronologia, e a seta ← traz você de volta ao jogo. <strong>Jogar de novo</strong> abre outra partida no mesmo modo e nível.`,`<strong>O recorde</strong> é quantas cartas você encaixou numa partida, e fica guardado no aparelho para cada modo e nível.`,`Se aparecer o aviso de que não há acontecimentos, é que a Cronologia ainda não chegou ao aparelho: toque em <strong>Sincronizar</strong>, na seção O Aplicativo da tela inicial.`]),b(25,`conexoes`,`Conexões`,`Achar os quatro grupos escondidos entre 16 nomes`,[`Um jogo de descobrir o que os nomes da Bíblia têm em comum. Na mesa aparecem <strong>16 nomes</strong>, e entre eles há <strong>quatro grupos</strong> de quatro: os filhos de Jacó, as cidades de refúgio, as pragas do Egito... O jogo fica na seção <strong>Atividades</strong> da tela inicial.`,`<strong>Antes de começar</strong>, escolha o nível: <strong>Fácil</strong>, <strong>Médio</strong> ou <strong>Difícil</strong>. Quanto mais alto, menos conhecidos são os grupos. Depois toque em <strong>Começar</strong>: o relógio começa a contar.`,`<strong>Como jogar:</strong>`,[`toque em <strong>quatro nomes</strong> que você acha que formam um grupo — tocar de novo desmarca;`,`toque em <strong>Conferir</strong>. Acertou? O grupo aparece numa faixa colorida, com o que liga os nomes e o texto bíblico de onde eles saem;`,`errou? Você gasta uma das <strong>quatro chances</strong>. Se três dos quatro eram do mesmo grupo, o jogo avisa: <strong>quase</strong>!`,`<strong>Embaralhar</strong> muda os nomes de lugar, o que às vezes ajuda a enxergar os grupos, e <strong>Desmarcar</strong> limpa a escolha.`],`<strong>No fim</strong> aparecem os quatro grupos, cada um com o link para ler o texto no wol. Achando os quatro, o tempo conta para o seu <strong>recorde</strong>, que fica guardado no aparelho. Com <strong>Jogos sem relógio</strong> ligado, em Perfil › Acessibilidade, o relógio some e a partida não vale recorde.`,`Nenhum nome da mesa pertence a dois grupos da mesma partida: cada nome tem um lugar só. Novos grupos chegam com a sincronização.`]),b(26,`personagens`,`Conheça os Personagens`,`Ler a história de um personagem e ganhar o selo dele`,[`Um jogo para conhecer melhor os <strong>personagens da Bíblia</strong>. Cada um tem uma carta com a história dele e <strong>três perguntas</strong>. O jogo fica na seção <strong>Atividades</strong> da tela inicial.`,`<strong>O álbum.</strong> Ao abrir o jogo aparecem todas as cartas, na ordem do número. A carta com selo aparece colorida; a que ainda não tem selo aparece apagada. Você escolhe qualquer uma, na ordem que quiser.`,`<strong>Como jogar:</strong>`,[`toque numa carta e leia a <strong>história</strong> do personagem, com os textos bíblicos;`,`toque em <strong>Responder às perguntas</strong>. Elas vêm uma por vez, cada uma com três respostas;`,`escolha uma resposta. Acertando, ela fica verde. Errando, a certa aparece em verde, com o texto bíblico de onde ela sai — e você segue para a próxima;`,`esqueceu algum detalhe? O botão <strong>Rever o resumo</strong> mostra a história de novo, sem sair da pergunta.`],`<strong>O selo.</strong> Acertando as três perguntas na mesma rodada, o selo do personagem entra no seu álbum, e ele fica lá para sempre. Não acertou as três? Toque em <strong>Tentar de novo</strong>: as respostas mudam de lugar a cada rodada.`,`De vez em quando o <strong>Kobi</strong> aparece para comemorar: no primeiro selo, no quinto, no décimo e quando o álbum fica completo.`,`Novos personagens chegam com a sincronização.`])],S=[{tabela:`not_guias`,colunas:[`titulo`,`texto`]},{tabela:`not_guias_local`,colunas:[`titulo`,`texto`]},{tabela:`not_poesias`,colunas:[`titulo`,`conteudo`]},{tabela:`not_poesias_local`,colunas:[`titulo`,`conteudo`]},{tabela:`not_receitas`,colunas:[`titulo`,`categoria`]},{tabela:`not_receitas_local`,colunas:[`titulo`,`categoria`]},{tabela:`not_cronologia`,colunas:[`titulo`,`resumo`,`referencia`]},{tabela:`not_principios`,colunas:[`titulo`,`principio`,`referencia`]},{tabela:`not_faq`,colunas:[`titulo`,`referencia`]}];S.flatMap(e=>i(e)),a(S);var C=200;function w(e){return`busca:${e}`}({...Object.fromEntries(S.map(({tabela:e})=>{let t=r(e);return[w(e),`SELECT rowid AS id, bm25(${t}) AS relevancia
         FROM ${t}
        WHERE ${t} MATCH ?
     ORDER BY relevancia
        LIMIT ${C}`]}))});var T={perguntas:{tabela:`not_perguntas`,familia:`curado`},poesias:{tabela:`not_poesias`,familia:`curado`,apelidos:{anteriorId:`anterior_id`,proximoId:`proximo_id`}},receitas:{tabela:`not_receitas`,familia:`curado`},guias:{tabela:`not_guias`,familia:`curado`},kits:{tabela:`not_kits`,familia:`curado`,filhos:[{campo:`itens`,tabela:`not_kits_itens`,chave:`kit_id`}]},criacao_modulos:{tabela:`not_criacao_modulos`,familia:`curado`},imite_cartoes:{tabela:`not_imite_cartoes`,familia:`curado`},conexoes_grupos:{tabela:`not_conexoes_grupos`,familia:`curado`},personagens:{tabela:`not_personagens`,familia:`curado`},principios:{tabela:`not_principios`,familia:`curado`},faq:{tabela:`not_faq`,familia:`curado`},cronologia:{tabela:`not_cronologia`,familia:`curado`},anotacao_modelos:{tabela:`not_anotacao_modelos`,familia:`curado`},estoque_catalogo:{tabela:`not_estoque_catalogo`,familia:`curado`},tutorial:{tabela:`not_tutorial`,familia:`curado`},pasta:{tabela:`not_pasta`,familia:`privado`},anotacao:{tabela:`not_anotacao`,familia:`privado`},not_caderno_estudo:{tabela:`not_caderno_estudo`,familia:`privado`},sessoes_estudo:{tabela:`not_sessoes_estudo`,familia:`privado`},categorias_financeiro:{tabela:`not_categorias_financeiro`,familia:`privado`},transacoes:{tabela:`not_transacoes`,familia:`privado`},recorrencias_financeiro:{tabela:`not_recorrencias_financeiro`,familia:`privado`},meta:{tabela:`not_meta`,familia:`privado`},kits_local:{tabela:`not_kits_local`,familia:`privado`,filhos:[{campo:`itens`,tabela:`not_kits_local_itens`,chave:`kit_id`}]},documentos_cofre:{tabela:`not_documentos_cofre`,familia:`privado`},estoque_alimentos:{tabela:`not_estoque_alimentos`,familia:`privado`},relatorios_ministerio:{tabela:`not_relatorios_ministerio`,familia:`privado`},contadores_ministerio:{tabela:`not_contadores_ministerio`,familia:`privado`},estudos_biblicos:{tabela:`not_estudos_biblicos`,familia:`privado`},estudo_registros:{tabela:`not_estudo_registros`,familia:`privado`},meu_perfil:{tabela:`not_meu_perfil`,familia:`privado`},calendario_tipos:{tabela:`not_calendario_tipos`,familia:`privado`},calendario_eventos:{tabela:`not_calendario_eventos`,familia:`privado`},poesias_local:{tabela:`not_poesias_local`,familia:`privado`},guias_local:{tabela:`not_guias_local`,familia:`privado`},receitas_local:{tabela:`not_receitas_local`,familia:`privado`},jogo_progresso:{tabela:`not_jogo_progresso`,familia:`privado`},jogo_respostas:{tabela:`not_jogo_respostas`,familia:`privado`},jogos_recordes:{tabela:`not_jogos_recordes`,familia:`privado`},personagens_selos:{tabela:`not_personagens_selos`,familia:`privado`}};Object.keys(T).filter(e=>T[e]?.familia===`privado`);var E=Object.keys(T).filter(e=>T[e]?.familia===`curado`),D,O=0,k=new Map,A;function j(){return D===void 0?(D=new Worker(new URL(new URL(`worker-D-qjom3J.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),D.addEventListener(`error`,e=>{let t=Error(`worker do banco falhou: ${e.message}`);for(let e of k.values())e.rejeitar(t);k.clear()}),D):D}function M(){navigator.storage?.persist?.().catch(()=>void 0)}var N=!1;function P(){N||(N=!0,document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&D!==void 0&&L({op:`otimizar`}).catch(()=>void 0)}))}function F(){return A??=new Promise((e,t)=>{M(),P();let n=j();n.addEventListener(`error`,e=>{t(Error(`o worker do banco não subiu: ${e.message||`o script não carregou`}`))},{once:!0}),n.addEventListener(`message`,n=>{let r=n.data;if(`tipo`in r){r.tipo===`pronto`?e({versaoSqlite:r.versaoSqlite,persistente:r.persistente,...r.motivo===void 0?{}:{motivo:r.motivo}}):t(Error(r.erro));return}let i=k.get(r.seq);i!==void 0&&(k.delete(r.seq),r.ok?i.resolver(r.valor):i.rejeitar(Error(r.erro)))})}),A}function I(){D?.terminate(),D=void 0,A=void 0;let e=Error(`o banco foi fechado`);for(let t of k.values())t.rejeitar(e);k.clear()}function L(e){let t=j();return new Promise((n,r)=>{let i=++O;k.set(i,{resolver:n,rejeitar:r});let a={seq:i,operacao:e};t.postMessage(a)})}async function R(e){await L({op:`restaurar`,stores:e})}async function z(e,t=[]){return await L({op:`consulta`,nome:e,parametros:t})}async function B(e,t){let r=n(t);return r===``?null:(await z(w(e),[r])).map(({id:e})=>Number(e))}async function V(e,t,n){let[r,i]=await Promise.all([B(e,n),B(t,n)]);return r===null||i===null?null:{curados:new Set(r),locais:new Set(i)}}function H(e){return{async todos(){return await L({op:`todos`,store:e})},async obter(t){return await L({op:`obter`,store:e,id:t})},async contar(){return Number(await L({op:`contar`,store:e}))},async salvar(t){return Number(await L({op:`salvar`,store:e,registro:t}))},async excluir(t){await L({op:`excluir`,store:e,id:t})},async substituirTudo(t){await L({op:`substituirTudo`,store:e,registros:t})}}}export{B as a,R as c,I as i,T as l,F as n,V as o,z as r,H as s,E as t,x as u};