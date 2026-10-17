function e(e){let t=``,n=0;for(;n<e.length;){let r=e.charAt(n),i=e.charAt(n+1);if(r===`-`&&i===`-`){for(;n<e.length&&e.charAt(n)!==`
`;)n++;t+=` `}else if(r===`/`&&i===`*`){for(n+=2;n<e.length&&(e.charAt(n)!==`*`||e.charAt(n+1)!==`/`);)n++;n+=2,t+=` `}else if(r===`'`||r===`"`||r==="`"){for(n++;n<e.length;){if(e.charAt(n)===r){if(e.charAt(n+1)===r){n+=2;continue}n++;break}n++}t+=` `}else if(r===`[`){for(;n<e.length&&e.charAt(n)!==`]`;)n++;n++,t+=` `}else t+=r,n++}return t}function t(t){let n=[],r=0,i=0,a=0,o=i=>{let o=t.slice(r,i),s=o.trim();if(s!==``&&e(s).trim()!==``){let e=o.length-o.trimStart().length;n.push({sql:s,inicio:r+e,fim:r+e+s.length})}r=i+1,a=0};for(;i<t.length;){let e=t.charAt(i),n=t.charAt(i+1);if(e===`-`&&n===`-`){for(;i<t.length&&t.charAt(i)!==`
`;)i++;continue}if(e===`/`&&n===`*`){for(i+=2;i<t.length&&(t.charAt(i)!==`*`||t.charAt(i+1)!==`/`);)i++;i+=2;continue}if(e===`'`||e===`"`||e==="`"){for(i++;i<t.length;){if(t.charAt(i)===e){if(t.charAt(i+1)===e){i+=2;continue}i++;break}i++}continue}if(e===`[`){for(;i<t.length&&t.charAt(i)!==`]`;)i++;i++;continue}if(e===`;`){if(a===0){o(i),i++;continue}i++;continue}let s=/^[A-Za-z_][A-Za-z_0-9]*/.exec(t.slice(i))?.[0];if(s!==void 0){let e=s.toUpperCase();(e===`BEGIN`&&t.slice(r,i).trim()!==``||e===`CASE`)&&a++,e===`END`&&a>0&&a--,i+=s.length}else i++}return o(t.length),n}const n=/* @__PURE__ */ new Map;function r(e,t){n.set(e,t)}function i(e){let t=n.get(e);if(t===void 0)throw Error(`o esquema de ${e} não foi carregado: importe @bioma/core/esquema/${e} (ou @bioma/core/esquema, que traz os quatro)`);return t}const a=/^CREATE\s+(?:UNIQUE\s+)?(TABLE|INDEX|VIEW)(?:\s+IF\s+NOT\s+EXISTS)?\s+([A-Za-z_][A-Za-z_0-9]*)/i,o={TABLE:`tabela`,INDEX:`indice`,VIEW:`vista`},s=/^\s{2,}([a-z_][a-z_0-9]*)\s+\S/;function c(e){let t=0;for(;t<e.length;){let n=e.charAt(t);if(n===`'`||n===`"`){for(t++;t<e.length&&e.charAt(t)!==n;)t++;t++}else{if(n===`-`&&e.charAt(t+1)===`-`)return e.slice(t+2).trim();t++}}}function l(e){let t=e.split(`
`),n=0;for(;n<t.length&&!/^\s*CREATE\b/i.test(t[n]??``);)n++;let r=[];for(let e=n-1;e>=0;e--){let n=(t[e]??``).trim();if(!n.startsWith(`--`))break;r.unshift(n.replace(/^--\s?/,``))}return{nota:r.join(`
`).trim(),comando:t.slice(n).join(`
`).trim()}}function u(e){let n=[];for(let r of t(e)){let{nota:e,comando:t}=l(r.sql),i=a.exec(t);if(i===null)throw Error(`o esquema canônico só descreve tabela e índice: ${t.slice(0,60)}`);let u={},d=[];for(let e of t.split(`
`)){let t=s.exec(e)?.[1];if(t===void 0)continue;d.push(t);let n=c(e);n!==void 0&&n!==``&&(u[t]=n)}n.push({nome:i[2]??``,tipo:o[(i[1]??``).toUpperCase()]??`indice`,sql:t,nota:e,colunas:u,campos:d})}return n}const d=/* @__PURE__ */ new Map;function f(e){let t=d.get(e);return t===void 0&&(t=u(i(e)),d.set(e,t)),t}function p(e){return f(e).map(e=>e.sql)}const m=`bioma_carimbos`,ee=[`id`,`id_global`],te=`CREATE INDEX IF NOT EXISTS idx_bioma_carimbos_hlc
  ON ${m} (hlc);`;function h(e,t){return`hlc_${e}_${t}`}function ne(e,t,n){return`('${e}', ${n}.id_global, '${t}', bio_hlc(), ${n}.${t})`}const g=`ON CONFLICT (tabela, id_global, campo)
    DO UPDATE SET hlc = excluded.hlc, valor = excluded.valor`;function re(e){let t=e.nome,n=e.campos.filter(e=>!ee.includes(e)),r=n.map(e=>`    ${ne(t,e,`new`)}`).join(`,
`),i=n.map(e=>`  INSERT INTO ${m} (tabela, id_global, campo, hlc, valor)\n    SELECT '${t}', new.id_global, '${e}', bio_hlc(), new.${e}\n     WHERE new.${e} IS NOT old.${e}\n  ${g};`).join(`
`);return[`CREATE TRIGGER IF NOT EXISTS ${h(t,`ins`)} AFTER INSERT ON ${t} BEGIN
  INSERT INTO ${m} (tabela, id_global, campo, hlc, valor) VALUES
${r}
  ${g};
END;`,`CREATE TRIGGER IF NOT EXISTS ${h(t,`upd`)} AFTER UPDATE ON ${t} BEGIN
${i}
END;`,`CREATE TRIGGER IF NOT EXISTS ${h(t,`del`)} AFTER DELETE ON ${t} BEGIN
  DELETE FROM ${m} WHERE tabela = '${t}' AND id_global = old.id_global;
  INSERT INTO ${m} (tabela, id_global, campo, hlc, valor)
    VALUES ('${t}', old.id_global, '', bio_hlc(), NULL)
  ${g};
END;`]}function _(e){return[`ins`,`upd`,`del`].map(t=>`DROP TRIGGER IF EXISTS ${h(e,t)}`)}function ie(e){let t=f(e).filter(e=>e.tipo===`tabela`&&e.campos.includes(`id_global`)).flatMap(re);return[`CREATE TABLE IF NOT EXISTS bioma_carimbos (
  tabela    TEXT    NOT NULL, -- a tabela da linha carimbada
  id_global BLOB    NOT NULL, -- a linha, pelo id que não colide entre aparelhos
  campo     TEXT    NOT NULL, -- a coluna que mudou — vazio é a lápide de uma linha apagada
  hlc       INTEGER NOT NULL, -- o carimbo do relógio lógico híbrido — leia-o com bio_hlc_ms()
  valor     ANY,              -- o que foi escrito, no tipo em que foi escrito
  PRIMARY KEY (tabela, id_global, campo)
) STRICT, WITHOUT ROWID;`,te,...t]}const ae=`SELECT bio_hlc_visto(hlc) FROM ${m}
  ORDER BY hlc DESC LIMIT 1`;r(`note`,`-- O esquema do banco do Kobi Note — o \`.sqlite\` que o PWA guarda no OPFS.
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
-- O Nome Divino: a trilha de cinco partes e dezoito capítulos sobre o nome de
-- Jeová, cada capítulo com um jeito próprio de aprender.
--
-- Acervo curado, uma linha por PEÇA: a mecânica de cada capítulo é do código, e
-- o texto é daqui. \`capitulo\` é a chave do catálogo do núcleo
-- (\`note/nome-divino.ts\`) — a de uma parte, nas linhas de \`tipo\` \`parte\`, ou a
-- de um capítulo. \`tipo\` diz o papel da linha: \`parte\` (o título e o versículo
-- da parte), \`abertura\` (o título e a introdução do capítulo), \`item\` (uma peça
-- da atividade dele) e \`pergunta\` (do desafio final). \`dados\` é o JSON próprio
-- do capítulo, e a leitura é do núcleo, a mesma no Admin e no aparelho. Todo
-- texto sai do jw.org e do wol, e todo versículo da Tradução do Novo Mundo no
-- wol (manual, item 12).
CREATE TABLE IF NOT EXISTS not_nome_divino (
  id               INTEGER PRIMARY KEY NOT NULL,
  capitulo         TEXT    NOT NULL DEFAULT '',   -- a chave da parte ou do capítulo no catálogo
  tipo             TEXT    NOT NULL DEFAULT 'item', -- parte | abertura | item | pergunta
  ordem            INTEGER NOT NULL DEFAULT 0,    -- a posição da peça dentro do capítulo
  titulo           TEXT    NOT NULL DEFAULT '',
  texto            TEXT    NOT NULL DEFAULT '',   -- HTML
  dados            TEXT    NOT NULL DEFAULT '{}', -- JSON: a forma que o capítulo pede
  referencia       TEXT    NOT NULL DEFAULT '',   -- os textos bíblicos da peça
  obra_fonte       TEXT    NOT NULL DEFAULT '',   -- a publicação de onde o texto saiu
  link_fonte       TEXT    NOT NULL DEFAULT '',   -- a página do wol dessa publicação
  publicar         INTEGER NOT NULL DEFAULT 0,    -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0     -- epoch em milissegundos
) STRICT;

-- As Trilhas: os caminhos de partes e capítulos sobre um assunto só — Jesus
-- Cristo e a Organização de Jeová —, no molde do Nome Divino.
--
-- Acervo curado, uma linha por PEÇA, como \`not_nome_divino\`, com a coluna
-- \`trilha\` a mais. A diferença é que a mecânica de cada capítulo é uma das dez
-- genéricas do catálogo do núcleo (\`note/trilhas.ts\`) — as páginas, as pastas,
-- a escolha, os pares, as lacunas, a linha, a triagem, a reflexão, a leitura e
-- o desafio —, e o \`dados\` tem a forma dela. As chaves de parte e de capítulo
-- não se repetem entre as trilhas. Todo texto sai do jw.org e do wol, e todo
-- versículo da Tradução do Novo Mundo no wol (manual, item 12).
CREATE TABLE IF NOT EXISTS not_trilhas (
  id               INTEGER PRIMARY KEY NOT NULL,
  trilha           TEXT    NOT NULL DEFAULT '',   -- a chave da trilha no catálogo: \`jesus\` | \`organizacao\`
  capitulo         TEXT    NOT NULL DEFAULT '',   -- a chave da parte ou do capítulo no catálogo
  tipo             TEXT    NOT NULL DEFAULT 'item', -- parte | abertura | item | pergunta
  ordem            INTEGER NOT NULL DEFAULT 0,    -- a posição da peça dentro do capítulo
  titulo           TEXT    NOT NULL DEFAULT '',
  texto            TEXT    NOT NULL DEFAULT '',   -- HTML
  dados            TEXT    NOT NULL DEFAULT '{}', -- JSON: a forma que a mecânica do capítulo pede
  referencia       TEXT    NOT NULL DEFAULT '',   -- os textos bíblicos da peça
  obra_fonte       TEXT    NOT NULL DEFAULT '',   -- a publicação de onde o texto saiu
  link_fonte       TEXT    NOT NULL DEFAULT '',   -- a página do wol dessa publicação
  publicar         INTEGER NOT NULL DEFAULT 0,    -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,    -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0     -- epoch em milissegundos
) STRICT;

-- Vidas Cruzadas: os personagens da Bíblia num eixo só de tempo, para ver quem
-- viveu na mesma época que quem, e onde cada um viveu.
--
-- Acervo curado, em três tabelas. \`not_vidas\` é uma linha por pessoa, com o
-- INTERVALO e o que ele mede (\`medida\`): a Bíblia quase nunca dá nascimento e
-- morte — dos reis sabemos o reinado (apêndice A6 da Tradução do Novo Mundo), dos
-- profetas a época da atividade (a Tabela dos Livros da Bíblia), dos patriarcas a
-- vida inteira (as idades de Gênesis). O ano é inteiro, negativo antes da Era
-- Comum, e nunca zero (de 1 a.C. se passa a 1 d.C.); cada ponta tem a precisão
-- da fonte (\`exato\` | \`cerca\` | \`antes\` | \`depois\`). A régua do intervalo — a
-- coerência, a sobreposição em anos, os contemporâneos — é do núcleo
-- (\`note/vidas.ts\`), a mesma no Admin e no aparelho. \`periodo\` é o vocabulário
-- da \`not_cronologia\`; \`personagem_id\` aponta o cartão do Conheça os
-- Personagens, quando houver (NULL é nenhum).
--
-- \`not_lugares\` são os lugares, com o nome na grafia do wol e a região (sem
-- mapa: a tela agrupa por região). \`not_vidas_lugares\` liga uma vida a um lugar,
-- com o papel (\`nasceu\` | \`viveu\` | \`atuou\` | \`morreu\` | \`viajou\`): é tabela, e
-- não JSON, porque "quem mais esteve em Jerusalém?" é uma consulta. Sem chave
-- estrangeira: cada uma se publica sozinha, e a ligação a uma vida que não chegou
-- ao aparelho é descartada pela leitura do núcleo.
CREATE TABLE IF NOT EXISTS not_vidas (
  id               INTEGER PRIMARY KEY NOT NULL,
  nome             TEXT    NOT NULL DEFAULT '',
  categoria        TEXT    NOT NULL DEFAULT 'outro', -- patriarca | juiz | rei_unido | rei_juda | rei_israel | profeta | sacerdote | governador | apostolo | discipulo | messias | outro
  periodo          TEXT    NOT NULL DEFAULT '',      -- o período da Cronologia
  medida           TEXT    NOT NULL DEFAULT 'vida',  -- vida | reinado | atividade: o que o intervalo mede
  ano_inicio       INTEGER NOT NULL DEFAULT 0,       -- o ano; negativo antes da Era Comum, nunca zero
  inicio_precisao  TEXT    NOT NULL DEFAULT 'exato', -- exato | cerca | antes | depois
  ano_fim          INTEGER NOT NULL DEFAULT 0,       -- o ano; igual ao início quando a fonte dá um só
  fim_precisao     TEXT    NOT NULL DEFAULT 'exato', -- exato | cerca | antes | depois
  resumo           TEXT    NOT NULL DEFAULT '',      -- HTML curto, com as referências
  referencia       TEXT    NOT NULL DEFAULT '',      -- os textos bíblicos do intervalo
  personagem_id    INTEGER,                          -- o cartão do Conheça os Personagens; NULL é nenhum
  obra_fonte       TEXT    NOT NULL DEFAULT '',      -- a publicação de onde o intervalo saiu
  link_fonte       TEXT    NOT NULL DEFAULT '',      -- a página do wol dessa publicação
  publicar         INTEGER NOT NULL DEFAULT 0,       -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,       -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0        -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_lugares (
  id               INTEGER PRIMARY KEY NOT NULL,
  nome             TEXT    NOT NULL DEFAULT '',      -- a grafia do wol
  regiao           TEXT    NOT NULL DEFAULT 'outra', -- a chave do catálogo das regiões (\`note/vidas.ts\`)
  referencia       TEXT    NOT NULL DEFAULT '',
  obra_fonte       TEXT    NOT NULL DEFAULT '',
  link_fonte       TEXT    NOT NULL DEFAULT '',
  publicar         INTEGER NOT NULL DEFAULT 0,       -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,       -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0        -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_vidas_lugares (
  id               INTEGER PRIMARY KEY NOT NULL,
  vida_id          INTEGER NOT NULL DEFAULT 0,
  lugar_id         INTEGER NOT NULL DEFAULT 0,
  papel            TEXT    NOT NULL DEFAULT 'viveu', -- nasceu | viveu | atuou | morreu | viajou
  referencia       TEXT    NOT NULL DEFAULT '',      -- o texto bíblico que põe a pessoa ali
  ordem            INTEGER NOT NULL DEFAULT 0,       -- a ordem dos lugares na vida
  publicar         INTEGER NOT NULL DEFAULT 0,       -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,       -- epoch em milissegundos
  data_atualizacao INTEGER NOT NULL DEFAULT 0        -- epoch em milissegundos
) STRICT;

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
-- Acervo curado, na numeração do "Cartão Bíblico — Colecione e Aprenda", que é
-- a ordem do álbum: do 1 ao 24 saíram na Despertai! (2011-2012), e a série
-- continuou nos Cartões Bíblicos do jw.org. \`perguntas\` é um JSON com as três, cada
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

-- O Relatório Mundial (\`modulos/mundial/\`): os totais de cada ano de serviço e os
-- países de cada ano. A célula em branco no relatório chega NULL, e não zero — a
-- tela a desenha como "não informado". O cabeçalho inteiro está no \`nucleo.sql\`.
CREATE TABLE IF NOT EXISTS not_relatorio_mundial (
  id                         INTEGER PRIMARY KEY NOT NULL,
  ano                        INTEGER NOT NULL DEFAULT 0,  -- o ano de serviço: o de 2025 vai de setembro de 2024 a agosto de 2025
  sedes                      INTEGER,                     -- sedes das Testemunhas de Jeová
  paises                     INTEGER,                     -- países e territórios que relataram
  congregacoes               INTEGER,
  assistencia_celebracao     INTEGER,
  participantes_celebracao   INTEGER,
  auge_publicadores          INTEGER,
  media_publicadores         INTEGER,
  aumento_percentual         REAL,                        -- sobre o ano anterior, como o relatório escreve (2,5)
  batizados                  INTEGER,
  media_pioneiros            INTEGER,
  media_pioneiros_auxiliares INTEGER,
  horas                      INTEGER,                     -- o total de horas na pregação, que o relatório deixou de trazer em 2024
  media_estudos              INTEGER,
  link_fonte                 TEXT    NOT NULL DEFAULT '', -- os "Totais gerais" do ano no wol
  link_paises                TEXT    NOT NULL DEFAULT '', -- o "Relatório de países e territórios" do ano no wol
  publicar                   INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  data_criacao               INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_atualizacao           INTEGER NOT NULL DEFAULT 0   -- epoch em milissegundos
) STRICT;

CREATE TABLE IF NOT EXISTS not_relatorio_mundial_paises (
  id                     INTEGER PRIMARY KEY NOT NULL,
  ano                    INTEGER NOT NULL DEFAULT 0,
  pais                   TEXT    NOT NULL DEFAULT '', -- o nome de hoje, o mesmo em todos os anos: é ele que junta a série
  nome_no_relatorio      TEXT    NOT NULL DEFAULT '', -- como o relatório daquele ano o escreve ("I. Cook", "33 outros países")
  agrupado               INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1: a linha dos "outros países e territórios", que não é um país
  populacao              INTEGER,
  auge_publicadores      INTEGER,
  proporcao              INTEGER,                     -- habitantes por publicador ("1 publicador para")
  media_publicadores     INTEGER,                     -- o relatório traz desde 2019
  aumento_percentual     REAL,
  batizados              INTEGER,
  media_pioneiros        INTEGER,
  congregacoes           INTEGER,
  media_estudos          INTEGER,                     -- o relatório traz desde 2021
  assistencia_celebracao INTEGER,
  publicar               INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  data_criacao           INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_atualizacao       INTEGER NOT NULL DEFAULT 0   -- epoch em milissegundos
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
  origem      TEXT    NOT NULL DEFAULT 'avulso', -- \`criacao\` | \`estudo\` | \`imite\` | \`jogo\` | \`principios\` | \`faq\` | \`nomedivino\` | \`trilhas\` | \`avulso\`
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
-- vez de tempo (as estrelas de cada capítulo das trilhas).
CREATE TABLE IF NOT EXISTS not_jogos_recordes (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  jogo              TEXT    NOT NULL DEFAULT '', -- o id do módulo: \`livros\`, \`nomedivino\`
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
CREATE INDEX IF NOT EXISTS idx_not_nome_divino_capitulo ON not_nome_divino (capitulo, ordem);
CREATE INDEX IF NOT EXISTS idx_not_trilhas_capitulo ON not_trilhas (trilha, capitulo, ordem);
CREATE INDEX IF NOT EXISTS idx_not_vidas_ano ON not_vidas (ano_inicio);
CREATE INDEX IF NOT EXISTS idx_not_vidas_lugares_vida ON not_vidas_lugares (vida_id, ordem);
CREATE INDEX IF NOT EXISTS idx_not_vidas_lugares_lugar ON not_vidas_lugares (lugar_id);

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
`);function v(e){return`"${e.replace(/"/g,`""`)}"`}function oe(e){return e.map(e=>({nome:String(e.name),tipo:String(e.type).toUpperCase(),notNulo:Number(e.notnull)===1,chave:Number(e.pk)>0,temPadrao:e.dflt_value!==null&&e.dflt_value!==void 0}))}function y(e,t){if(t==null)return null;if(e.tipo===`TEXT`)return typeof t==`string`?t:String(t);if(e.tipo===`BLOB`)return t instanceof Uint8Array?t:null;if(typeof t==`boolean`)return+!!t;let n=typeof t==`number`?t:Number(t);return Number.isFinite(n)?n:null}function b(e,t,n){let r=t.filter(e=>n[e.nome]!==void 0);if(r.length===0)return{sql:`INSERT INTO ${v(e)} DEFAULT VALUES`,parametros:[]};let i=r.map(e=>v(e.nome)).join(`, `),a=r.map(()=>`?`).join(`, `);return{sql:`INSERT INTO ${v(e)} (${i}) VALUES (${a})`,parametros:r.map(e=>y(e,n[e.nome]))}}function x(e,t,n){let r=t.filter(e=>n[e.nome]!==void 0),i=t.filter(e=>e.chave).map(e=>e.nome),a=r.filter(e=>!i.includes(e.nome)&&e.nome!==`id_global`),o=r.map(e=>v(e.nome)).join(`, `),s=r.map(()=>`?`).join(`, `),c=i.map(v).join(`, `),l=a.length===0?`DO NOTHING`:`DO UPDATE SET ${a.map(e=>`${v(e.nome)} = excluded.${v(e.nome)}`).join(`, `)}`;return{sql:`INSERT INTO ${v(e)} (${o}) VALUES (${s}) ON CONFLICT(${c}) ${l}`,parametros:r.map(e=>y(e,n[e.nome]))}}function S(e){"@babel/helpers - typeof";return S=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},S(e)}function se(e,t){if(S(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(S(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ce(e){var t=se(e,`string`);return S(t)==`symbol`?t:t+``}function C(e,t,n){return(t=ce(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e){return e===null||e.byteLength===0?`novo`:new TextDecoder(`latin1`).decode(e.subarray(0,16))===`SQLite format 3\0`?`em-claro`:`cifrado`}const ue=`chave-do-aparelho`;function de(e){return e instanceof Uint8Array||e instanceof ArrayBuffer?new Uint8Array(e):null}async function fe(e,t){let n=de(await e(ue));if(n!==null){if(n.byteLength!==32)throw Error(`a chave guardada neste aparelho tem ${n.byteLength} bytes, e não 32: o banco cifrado não abre sem ela. Apague os dados deste aparelho para recomeçar.`);return n}let r=crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(32));return await t(ue,r),r}function pe(e,t){return e.consultar(`SELECT name FROM pragma_table_info(?)`,[t]).map(e=>String(e.name))}function me(e,t,n){let r=pe(e,t);if(r.length===0)return!1;let i=n.filter(([e])=>!r.includes(e));if(i.length===0)return!1;for(let[n,r]of i)e.executar(`ALTER TABLE ${t} ADD COLUMN ${n} ${r}`);for(let n of _(t))e.executar(n);return!0}function he(e,t,n){let r=pe(e,t),i=n.filter(e=>r.includes(e));if(i.length===0)return!1;for(let n of _(t))e.executar(n);for(let n of i)e.executar(`ALTER TABLE ${t} DROP COLUMN ${n}`);return!0}var ge=class{constructor(e,t){C(this,`bd`,void 0),C(this,`catalogo`,void 0),C(this,`colunas`,/* @__PURE__ */ new Map),C(this,`avisadas`,/* @__PURE__ */ new Set),C(this,`profundidade`,0),this.bd=e,this.catalogo=t}emTransacao(e){return this.naTransacao(e)}naTransacao(e){if(this.profundidade>0)return e();this.profundidade+=1;try{return this.bd.emTransacao(e)}finally{--this.profundidade}}stores(){return Object.keys(this.catalogo)}storesDa(e){return this.stores().filter(t=>this.catalogo[t]?.familia===e)}storeDe(e){let t=this.catalogo[e];if(t===void 0)throw Error(`store desconhecido: ${e}`);return t}lerEsquemaAplicado(){this.colunas.clear();for(let e of this.stores()){let t=this.storeDe(e);for(let e of[t.tabela,...(t.filhos??[]).map(e=>e.tabela)])this.colunas.has(e)||this.colunas.set(e,oe(this.bd.consultar(`PRAGMA table_info(${v(e)})`)))}}tabelas(){return[...this.colunas.keys()]}colunasDa(e){let t=this.colunas.get(e);if(t===void 0||t.length===0)throw Error(`tabela ausente no banco: ${e}`);return t}todos(e){let t=this.storeDe(e);return this.comFilhos(t,this.bd.consultar(`SELECT * FROM ${v(t.tabela)} ORDER BY id`))}obter(e,t){let n=this.storeDe(e),r=this.bd.consultar(`SELECT * FROM ${v(n.tabela)} WHERE id = ?`,[Number(t)]);return this.comFilhos(n,r)[0]}contar(e){return Number(this.bd.escalar(`SELECT COUNT(*) FROM ${v(this.storeDe(e).tabela)}`)??0)}salvar(e,t){let n=this.storeDe(e),r=w(n,t),i=T(n,E(n,r));this.avisarCamposIgnorados(n.tabela,i);let a=0;return this.naTransacao(()=>{let e=r.id;if(e==null){let e=b(n.tabela,this.colunasDa(n.tabela),i);this.bd.executar(e.sql,e.parametros),a=Number(this.bd.escalar(`SELECT MAX(id) FROM ${v(n.tabela)}`)??0)}else{a=Number(e);let t=x(n.tabela,this.colunasDa(n.tabela),{...i,id:a});this.bd.executar(t.sql,t.parametros)}this.trocarFilhos(n,a,r)}),a}excluir(e,t){let n=this.storeDe(e);this.bd.executar(`DELETE FROM ${v(n.tabela)} WHERE id = ?`,[Number(t)])}substituirTudo(e,t){let n=this.storeDe(e);this.naTransacao(()=>{this.bd.executar(`DELETE FROM ${v(n.tabela)}`);let e=this.colunasDa(n.tabela),r=0;for(let i of t){let t=Number(i.id);Number.isFinite(t)?t>r&&(r=t):t=++r;let a=w(n,{...i,id:t}),o=T(n,E(n,a));this.avisarCamposIgnorados(n.tabela,o);let s=b(n.tabela,e,o);this.bd.executar(s.sql,s.parametros),this.trocarFilhos(n,t,a)}})}comFilhos(e,t){let n=e.filhos??[],r=t.map(t=>_e(e,t));if(n.length===0||r.length===0)return r;let i=r.map(e=>Number(e.id)),a=i.map(()=>`?`).join(`, `),o=r;for(let e of n){let t=this.bd.consultar(`SELECT * FROM ${v(e.tabela)} WHERE ${v(e.chave)} IN (${a}) ORDER BY id`,i),n=/* @__PURE__ */ new Map;for(let r of t){let t=Number(r[e.chave]),i=n.get(t);i===void 0?n.set(t,[r]):i.push(r)}o=o.map(t=>({...t,[e.campo]:n.get(Number(t.id))??[]}))}return o}trocarFilhos(e,t,n){for(let r of e.filhos??[]){let e=n[r.campo];if(!Array.isArray(e))continue;this.bd.executar(`DELETE FROM ${v(r.tabela)} WHERE ${v(r.chave)} = ?`,[t]);let i=this.colunasDa(r.tabela),a=e[0];a!==void 0&&this.avisarCamposIgnorados(r.tabela,{...a,[r.chave]:t});let o=0;for(let n of e){let e=Number(n.id);Number.isFinite(e)?e>o&&(o=e):e=++o;let a=b(r.tabela,i,{...n,id:e,[r.chave]:t});this.bd.executar(a.sql,a.parametros)}}}avisarCamposIgnorados(e,t){if(this.avisadas.has(e))return;let n=new Set(this.colunasDa(e).map(e=>e.nome)),r=Object.keys(t).filter(e=>!n.has(e));r.length!==0&&(this.avisadas.add(e),console.warn(`${e}: campo(s) que a tabela não tem, descartado(s) na gravação: ${r.join(`, `)}.`))}};function w(e,t){let n=e.apelidos;if(n===void 0)return t;let r={...t},i=!1;for(let[e,t]of Object.entries(n))e in r&&(r[t]===void 0&&(r[t]=r[e]),delete r[e],i=!0);return i?r:t}function T(e,t){let n=e.json;if(n===void 0)return t;let r={...t};for(let e of n){let t=r[e];t!=null&&typeof t!=`string`&&(r[e]=JSON.stringify(t))}return r}function _e(e,t){let n=e.json;if(n===void 0)return t;let r={...t};for(let e of n){let t=r[e];if(typeof t==`string`)try{r[e]=JSON.parse(t===``?`null`:t)}catch{r[e]=t.trimStart().startsWith(`{`)?{}:[]}}return r}function E(e,t){let n=e.filhos??[];if(n.length===0)return t;let r={...t};for(let e of n)delete r[e.campo];return r}var ve=class{constructor(){C(this,`bytes`,void 0),C(this,`usados`,0),this.bytes=/* @__PURE__ */ new Uint8Array(65536)}ler(e,t){if(t>=this.usados)return 0;let n=Math.min(e.length,this.usados-t);return e.set(this.bytes.subarray(t,t+n)),n}escrever(e,t){return this.reservar(t+e.length),this.bytes.set(e,t),this.usados=Math.max(this.usados,t+e.length),e.length}tamanho(){return this.usados}truncar(e){this.reservar(e),e<this.usados&&this.bytes.fill(0,e,this.usados),this.usados=e}sincronizar(){}fechar(){}reservar(e){if(e<=this.bytes.length)return;let t=this.bytes.length;for(;t<e;)t*=2;let n=new Uint8Array(t);n.set(this.bytes.subarray(0,this.usados)),this.bytes=n}},ye=class{constructor(){C(this,`arquivos`,/* @__PURE__ */ new Map),C(this,`pastas`,/* @__PURE__ */ new Set([`/`]))}abrir(e,t){let n=this.arquivos.get(e);if(n!==void 0)return t.exclusivo?null:(t.truncar&&n.truncar(0),n);if(!t.criar)return null;let r=new ve;return this.arquivos.set(e,r),r}existe(e){return this.arquivos.has(e)||this.pastas.has(e)}ehPasta(e){return this.pastas.has(e)}tamanhoDe(e){return this.arquivos.get(e)?.tamanho()??null}apagar(e){return this.arquivos.delete(e)}criarPasta(e){return!this.pastas.has(e)&&(this.pastas.add(e),!0)}apagarPasta(e){return this.pastas.delete(e)}};const D={OK:0,BADF:8,EXIST:20,INVAL:28,ISDIR:31,NOENT:44,NOSYS:52,NOTDIR:54,NOTEMPTY:55},O={DIRETORIO:3,ARQUIVO:4,CARACTERE:2},k={CRIAR:1,PASTA:2,EXCLUSIVO:4,TRUNCAR:8},A={INICIO:0,ATUAL:1,FIM:2},j={FDSTAT:24,FILESTAT:64,PRESTAT:8};var be=class{constructor(e){C(this,`arquivos`,void 0),C(this,`memoria`,null),C(this,`descritores`,/* @__PURE__ */ new Map),C(this,`proximo`,4),C(this,`fd_close`,e=>{let t=this.descritores.get(e);return t===void 0?D.BADF:(t.arquivo.fechar(),this.descritores.delete(e),D.OK)}),C(this,`fd_read`,(e,t,n,r)=>{let i=this.descritores.get(e);if(i===void 0)return D.BADF;let a=0;for(let e=0;e<n;e++){let n=this.vista.getUint32(t+e*8,!0),r=this.vista.getUint32(t+e*8+4,!0);if(r===0)continue;let o=new Uint8Array(r),s=i.arquivo.ler(o,i.posicao);if(this.bytes.set(o.subarray(0,s),n),i.posicao+=s,a+=s,s<r)break}return this.vista.setUint32(r,a,!0),D.OK}),C(this,`fd_write`,(e,t,n,r)=>{let i=0;for(let r=0;r<n;r++){let n=this.vista.getUint32(t+r*8,!0),a=this.vista.getUint32(t+r*8+4,!0),o=this.bytes.subarray(n,n+a);if(e===1||e===2){let t=new TextDecoder().decode(o).trimEnd();t!==``&&console[e===2?`error`:`log`](`[Bioma SQL] ${t}`),i+=a;continue}let s=this.descritores.get(e);if(s===void 0)return D.BADF;let c=s.arquivo.escrever(o.slice(),s.posicao);s.posicao+=c,i+=c}return this.vista.setUint32(r,i,!0),D.OK}),C(this,`fd_seek`,(e,t,n,r)=>{let i=this.descritores.get(e);if(i===void 0)return D.BADF;let a=(n===A.INICIO?0:n===A.ATUAL?i.posicao:i.arquivo.tamanho())+Number(t);return a<0?D.INVAL:(i.posicao=a,this.vista.setBigUint64(r,BigInt(a),!0),D.OK)}),C(this,`fd_sync`,e=>{let t=this.descritores.get(e);return t===void 0?D.BADF:(t.arquivo.sincronizar(),D.OK)}),C(this,`fd_fdstat_get`,(e,t)=>{let n=e===3?O.DIRETORIO:e<=2?O.CARACTERE:this.descritores.has(e)?O.ARQUIVO:null;return n===null?D.BADF:(this.bytes.fill(0,t,t+j.FDSTAT),this.vista.setUint8(t,n),this.vista.setBigUint64(t+8,18446744073709551615n,!0),this.vista.setBigUint64(t+16,18446744073709551615n,!0),D.OK)}),C(this,`fd_filestat_get`,(e,t)=>{let n=this.descritores.get(e);return n===void 0?e===3?this.escreverStat(t,O.DIRETORIO,0):D.BADF:this.escreverStat(t,O.ARQUIVO,n.arquivo.tamanho())}),C(this,`fd_filestat_set_size`,(e,t)=>{let n=this.descritores.get(e);return n===void 0?D.BADF:(n.arquivo.truncar(Number(t)),D.OK)}),C(this,`fd_prestat_get`,(e,t)=>e===3?(this.vista.setUint8(t,0),this.vista.setUint32(t+4,1,!0),D.OK):D.BADF),C(this,`fd_prestat_dir_name`,(e,t,n)=>e===3?(this.bytes.set(new TextEncoder().encode(`/`).subarray(0,n),t),D.OK):D.BADF),C(this,`path_open`,(e,t,n,r,i,a,o,s,c)=>{let l=this.caminhoEm(n,r);if((i&k.PASTA)!==0)return this.arquivos.ehPasta(l)?D.OK:D.NOTDIR;if(this.arquivos.ehPasta(l))return D.ISDIR;let u=(i&k.CRIAR)!==0,d=(i&k.EXCLUSIVO)!==0,f=this.arquivos.existe(l);if(d&&f)return D.EXIST;if(!u&&!f)return D.NOENT;let p=this.arquivos.abrir(l,{criar:u,truncar:(i&k.TRUNCAR)!==0,exclusivo:d});if(p===null)return f?D.EXIST:D.NOENT;let m=this.proximo++;return this.descritores.set(m,{arquivo:p,caminho:l,posicao:0}),this.vista.setUint32(c,m,!0),D.OK}),C(this,`path_create_directory`,(e,t,n)=>this.arquivos.criarPasta(this.caminhoEm(t,n))?D.OK:D.EXIST),C(this,`path_remove_directory`,(e,t,n)=>this.arquivos.apagarPasta(this.caminhoEm(t,n))?D.OK:D.NOENT),C(this,`path_filestat_get`,(e,t,n,r,i)=>{let a=this.caminhoEm(n,r);if(this.arquivos.ehPasta(a))return this.escreverStat(i,O.DIRETORIO,0);let o=this.arquivos.tamanhoDe(a);return o===null?D.NOENT:this.escreverStat(i,O.ARQUIVO,o)}),C(this,`path_unlink_file`,(e,t,n)=>this.arquivos.apagar(this.caminhoEm(t,n))?D.OK:D.NOENT),C(this,`environ_sizes_get`,(e,t)=>(this.vista.setUint32(e,0,!0),this.vista.setUint32(t,0,!0),D.OK)),C(this,`clock_time_get`,(e,t,n)=>(this.vista.setBigUint64(n,BigInt(Date.now())*1000000n,!0),D.OK)),C(this,`random_get`,(e,t)=>{let n=this.bytes.subarray(e,e+t);for(let e=0;e<t;e+=65536)crypto.getRandomValues(n.subarray(e,Math.min(e+65536,t)));return D.OK}),this.arquivos=e}ligar(e){this.memoria=e}get vista(){if(this.memoria===null)throw Error("hospedeiro WASI usado antes de `ligar()`");return new DataView(this.memoria.buffer)}get bytes(){if(this.memoria===null)throw Error("hospedeiro WASI usado antes de `ligar()`");return new Uint8Array(this.memoria.buffer)}caminhoEm(e,t){let n=new TextDecoder().decode(this.bytes.subarray(e,e+t));return n.startsWith(`/`)?n:`/${n}`}get importacoes(){return{fd_close:this.fd_close,fd_read:this.fd_read,fd_write:this.fd_write,fd_seek:this.fd_seek,fd_sync:this.fd_sync,fd_fdstat_get:this.fd_fdstat_get,fd_fdstat_set_flags:()=>D.OK,fd_filestat_get:this.fd_filestat_get,fd_filestat_set_size:this.fd_filestat_set_size,fd_prestat_get:this.fd_prestat_get,fd_prestat_dir_name:this.fd_prestat_dir_name,path_open:this.path_open,path_create_directory:this.path_create_directory,path_remove_directory:this.path_remove_directory,path_filestat_get:this.path_filestat_get,path_filestat_set_times:()=>D.OK,path_unlink_file:this.path_unlink_file,path_readlink:()=>D.INVAL,environ_get:()=>D.OK,environ_sizes_get:this.environ_sizes_get,clock_time_get:this.clock_time_get,random_get:this.random_get,poll_oneoff:()=>D.NOSYS,proc_exit:e=>{throw Error(`o motor chamou proc_exit(${e}) — isto é defeito, não fluxo`)}}}escreverStat(e,t,n){return this.bytes.fill(0,e,e+j.FILESTAT),this.vista.setUint8(e+16,t),this.vista.setBigUint64(e+24,1n,!0),this.vista.setBigUint64(e+32,BigInt(n),!0),D.OK}};const M=new TextEncoder,N={OK:0,NAO_E_BANCO:26,LINHA:100,FIM:101},P={INTEIRO:1,REAL:2,TEXTO:3,BLOB:4,NULO:5},xe={9:`DELETE`,18:`INSERT`,23:`UPDATE`};var Se=class{constructor(){C(this,`atendentes`,null),C(this,`importacoes`,{rastro:(e,t,n)=>{this.atendentes?.rastro(t,n)},mudanca:(e,t,n,r,i,a)=>{this.atendentes?.mudanca(t,n,r,i,a)},progresso:e=>this.atendentes?.progresso()??0})}ligar(e){this.atendentes=e}};async function Ce(e){let t=new be(e.arquivos??new ye),n=new Se,r=(await we(e.modulo,t,n)).exports;return t.ligar(r.memory),r._initialize(),new Te(r,n,e.caminho??`/bioma.sqlite`,e.chave,e.copia===!0)}async function we(e,t,n){let r={wasi_snapshot_preview1:t.importacoes,bioma:n.importacoes};if(e instanceof WebAssembly.Module)return WebAssembly.instantiate(e,r);if(e instanceof Response||e instanceof Promise)try{let{instance:t}=await WebAssembly.instantiateStreaming(e,r);return t}catch{let t=await e,{instance:n}=await WebAssembly.instantiate(await t.clone().arrayBuffer(),r);return n}return WebAssembly.instantiate(await WebAssembly.compile(e),r)}var Te=class{constructor(e,t,n,r,i=!1){if(C(this,`motor`,void 0),C(this,`indice`,void 0),C(this,`celula`,void 0),C(this,`fechado`,!1),C(this,`ouvinteDoRastro`,null),C(this,`ouvinteDaMudanca`,null),C(this,`decidir`,null),C(this,`falhaNoGancho`,null),C(this,`interrompido`,!1),this.motor=e,this.celula=e.biomasql_wasm_alocar(4),this.celula===0)throw Error(`Bioma SQL: o motor não alocou nem quatro bytes`);let a=r===void 0?/* @__PURE__ */ new Uint8Array:typeof r==`string`?M.encode(r):r,o=this.escreverTexto(n),s=a.byteLength===0?0:this.escreverBytes(a);try{let t=e.biomasql_wasm_abrir(o,i?2:1,s,a.byteLength);if(t<0)throw Error(-t===N.NAO_E_BANCO?`Bioma SQL: ${n} não abriu — a chave não confere, ou o arquivo não é um banco`:`Bioma SQL não abriu ${n} (código ${-t})`);this.indice=t}finally{e.biomasql_wasm_liberar(o),s!==0&&(new Uint8Array(e.memory.buffer).fill(0,s,s+a.byteLength),e.biomasql_wasm_liberar(s))}t.ligar({rastro:(e,t)=>this.aoRastro(e,t),mudanca:(e,t,n,r,i)=>this.aoMudar(e,t,n,r,i),progresso:()=>this.aoProgredir()})}get versao(){return this.lerTexto(this.motor.biomasql_wasm_versao())}executar(e,t){let n=this.preparar(e,t);try{let t=this.motor.biomasql_wasm_passo(n);return t!==N.FIM&&t!==N.LINHA&&this.lancar(e),this.motor.biomasql_wasm_alteracoes(this.indice)}finally{this.motor.biomasql_wasm_finalizar(n),this.conferirGanchos()}}executarRoteiro(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let t=this.escreverTexto(e),n;try{n=this.motor.biomasql_wasm_roteiro(this.indice,t)}finally{this.motor.biomasql_wasm_liberar(t)}n!==N.OK&&this.lancar(e),this.conferirGanchos()}consultar(e,t){let n=this.preparar(e,t);try{let t=this.motor.biomasql_wasm_colunas(n),r=[];for(let e=0;e<t;e++)r.push(this.lerTexto(this.motor.biomasql_wasm_nome_coluna(n,e)));let i=[],a=this.motor.biomasql_wasm_passo(n);for(;a===N.LINHA;){let e={};for(let i=0;i<t;i++)e[r[i]]=this.lerColuna(n,i);i.push(e),a=this.motor.biomasql_wasm_passo(n)}return a!==N.FIM&&this.lancar(e),i}finally{this.motor.biomasql_wasm_finalizar(n),this.conferirGanchos()}}escalar(e,t){let n=this.preparar(e,t);try{let t=this.motor.biomasql_wasm_passo(n);return t!==N.LINHA&&t!==N.FIM&&this.lancar(e),t===N.LINHA?this.lerColuna(n,0):null}finally{this.motor.biomasql_wasm_finalizar(n),this.conferirGanchos()}}emTransacao(e){this.executar(`BEGIN`);try{let t=e();return this.executar(`COMMIT`),t}catch(e){throw this.executar(`ROLLBACK`),e}}integridadeIncremental(e=`main`){return this.consultar(`SELECT objeto, mensagem FROM bio_intck(?)`,[e]).map(e=>({objeto:e.objeto===null?null:String(e.objeto),mensagem:String(e.mensagem)}))}recuperar(e={}){return this.consultar(`SELECT sql FROM bio_recover(?, ?)`,[e.esquema??`main`,e.perdidos??null]).map(e=>String(e.sql))}recomendarIndices(e,t){return(t===void 0?this.consultar(`SELECT * FROM bio_expert(?)`,[e]):this.consultar(`SELECT * FROM bio_expert(?, ?)`,[e,t])).map(e=>({consulta:String(e.consulta??``),indices:e.indices===null?null:String(e.indices).trim(),plano:e.plano===null?null:String(e.plano).trim(),candidatos:e.candidatos===null?null:String(e.candidatos).trim()}))}rastrear(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);this.ouvinteDoRastro=e,this.motor.biomasql_wasm_rastrear(this.indice,e===null?0:1)}observar(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);this.ouvinteDaMudanca=e,this.motor.biomasql_wasm_observar(this.indice,e===null?0:1)}vigiar(e,t){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let n=t!==null&&e>0;this.decidir=n?t:null,this.motor.biomasql_wasm_vigiar(this.indice,n?e:0)}interromper(){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);this.motor.biomasql_wasm_interromper(this.indice)}serializar(){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let e=this.motor.biomasql_wasm_serializar(this.indice,this.celula);if(e===0)throw Error(`Bioma SQL: o motor não serializou o banco`);try{return new Uint8Array(this.motor.memory.buffer,e,this.lerCelula()).slice()}finally{this.motor.biomasql_wasm_liberar(e)}}desserializar(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let t=this.motor.biomasql_wasm_alocar(e.byteLength);if(t===0)throw Error(`Bioma SQL: não coube o banco de ${e.byteLength} bytes na memória`);new Uint8Array(this.motor.memory.buffer).set(e,t);let n=this.motor.biomasql_wasm_desserializar(this.indice,t,e.byteLength);if(n!==N.OK)throw Error(`Bioma SQL: o conteúdo não foi aceito como banco (código ${n})`)}rechavear(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let t=e===void 0?/* @__PURE__ */ new Uint8Array:typeof e==`string`?M.encode(e):e,n=t.byteLength===0?0:this.escreverBytes(t);try{let e=this.motor.biomasql_wasm_rechavear(this.indice,n,t.byteLength);if(e!==N.OK)throw Error(`Bioma SQL: a troca de chave falhou (código ${e})`)}finally{n!==0&&this.motor.biomasql_wasm_liberar(n)}}fechar(){this.fechado||(this.fechado=!0,this.motor.biomasql_wasm_fechar(this.indice),this.motor.biomasql_wasm_liberar(this.celula))}preparar(e,t){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let n=this.escreverTexto(e),r;try{r=this.motor.biomasql_wasm_preparar(this.indice,n,this.celula)}finally{this.motor.biomasql_wasm_liberar(n)}if(r<0&&this.lancar(e),this.lerCelula()!==0)throw this.motor.biomasql_wasm_finalizar(r),Error(`Bioma SQL: o SQL traz mais de um comando; use executarRoteiro\n  SQL: ${e}`);try{this.ligar(r,t)}catch(e){throw this.motor.biomasql_wasm_finalizar(r),e}return r}ligar(e,t){if(t!==void 0){if(Array.isArray(t))for(let n=0;n<t.length;n++)this.ligarEm(e,n+1,t[n]);else for(let[n,r]of Object.entries(t)){let t=/^[:@$]/.test(n)?n:`:${n}`,i=this.escreverTexto(t),a;try{a=this.motor.biomasql_wasm_indice_parametro(e,i)}finally{this.motor.biomasql_wasm_liberar(i)}if(a===0)throw Error(`Bioma SQL: o SQL não declara o parâmetro ${t}`);this.ligarEm(e,a,r)}}}ligarEm(e,t,n){if(n===null){this.motor.biomasql_wasm_ligar_nulo(e,t);return}if(typeof n==`bigint`){this.motor.biomasql_wasm_ligar_inteiro(e,t,n);return}if(typeof n==`number`){Number.isInteger(n)?this.motor.biomasql_wasm_ligar_inteiro(e,t,BigInt(n)):this.motor.biomasql_wasm_ligar_real(e,t,n);return}if(n instanceof Uint8Array){let r=this.escreverBytes(n);try{this.motor.biomasql_wasm_ligar_blob(e,t,r,n.byteLength)}finally{this.motor.biomasql_wasm_liberar(r)}return}let r=new TextEncoder().encode(n),i=this.motor.biomasql_wasm_alocar(r.length+1);if(i===0)throw Error(`Bioma SQL: o motor não alocou o valor a ligar`);try{new Uint8Array(this.motor.memory.buffer).set(r,i),this.motor.biomasql_wasm_ligar_texto(e,t,i,r.length)}finally{this.motor.biomasql_wasm_liberar(i)}}lerColuna(e,t){switch(this.motor.biomasql_wasm_tipo_coluna(e,t)){case P.NULO:return null;case P.INTEIRO:{let n=this.motor.biomasql_wasm_inteiro(e,t);return n>=-9007199254740991n&&n<=9007199254740991n?Number(n):n}case P.REAL:return this.motor.biomasql_wasm_real(e,t);case P.BLOB:{let n=this.motor.biomasql_wasm_blob(e,t),r=this.motor.biomasql_wasm_bytes(e,t);return n===0||r===0?/* @__PURE__ */ new Uint8Array:new Uint8Array(this.motor.memory.buffer,n,r).slice()}default:{let n=this.motor.biomasql_wasm_texto(e,t),r=this.motor.biomasql_wasm_bytes(e,t);return new TextDecoder().decode(new Uint8Array(this.motor.memory.buffer,n,r).slice())}}}aoRastro(e,t){let n=this.ouvinteDoRastro;if(n!==null)try{n({sql:this.lerTexto(e),ms:Number(t)/1e6})}catch(e){this.guardarFalha(e)}}aoMudar(e,t,n,r,i){let a=this.ouvinteDaMudanca;if(a!==null)try{let o=xe[e];if(o===void 0)return;a({operacao:o,esquema:this.lerTexto(t),tabela:this.lerTexto(n),chaveAntiga:o===`INSERT`?null:r,chaveNova:o===`DELETE`?null:i,antiga:o===`INSERT`?null:this.linhaPre(1),nova:o===`DELETE`?null:this.linhaPre(0)})}catch(e){this.guardarFalha(e)}}aoProgredir(){let e=this.decidir;if(e===null)return 0;try{return e()?0:(this.interrompido=!0,1)}catch(e){return this.guardarFalha(e),1}}linhaPre(e){let t=this.motor.biomasql_wasm_pre_contagem(this.indice),n=[];for(let r=0;r<t;r++)n.push(this.lerValorPre(r,e));return n}lerValorPre(e,t){switch(this.motor.biomasql_wasm_pre_tipo(this.indice,e,t)){case P.NULO:return null;case P.INTEIRO:{let n=this.motor.biomasql_wasm_pre_inteiro(this.indice,e,t);return n>=-9007199254740991n&&n<=9007199254740991n?Number(n):n}case P.REAL:return this.motor.biomasql_wasm_pre_real(this.indice,e,t);case P.BLOB:{let n=this.motor.biomasql_wasm_pre_blob(this.indice,e,t),r=this.motor.biomasql_wasm_pre_bytes(this.indice,e,t);return n===0||r===0?/* @__PURE__ */ new Uint8Array:new Uint8Array(this.motor.memory.buffer,n,r).slice()}default:{let n=this.motor.biomasql_wasm_pre_texto(this.indice,e,t),r=this.motor.biomasql_wasm_pre_bytes(this.indice,e,t);return n===0?``:new TextDecoder().decode(new Uint8Array(this.motor.memory.buffer,n,r).slice())}}}guardarFalha(e){this.falhaNoGancho??=e instanceof Error?e:Error(String(e))}conferirGanchos(){let e=this.falhaNoGancho;if(this.falhaNoGancho=null,e!==null)throw e}escreverBytes(e){let t=this.motor.biomasql_wasm_alocar(e.byteLength+1);if(t===0)throw Error(`Bioma SQL: o motor não alocou o bloco pedido`);return new Uint8Array(this.motor.memory.buffer).set(e,t),t}escreverTexto(e){let t=new TextEncoder().encode(e),n=this.motor.biomasql_wasm_alocar(t.length+1),r=new Uint8Array(this.motor.memory.buffer);return r.set(t,n),r[n+t.length]=0,n}lerCelula(){return new Int32Array(this.motor.memory.buffer,this.celula,1)[0]}lerTexto(e){if(e===0)return``;let t=new Uint8Array(this.motor.memory.buffer),n=e;for(;t[n]!==0;)n++;return new TextDecoder().decode(t.subarray(e,n))}lancar(e){if(this.conferirGanchos(),this.interrompido)throw this.interrompido=!1,Error(`Bioma SQL: consulta interrompida pelo vigia\n  SQL: ${e}`);let t=this.lerTexto(this.motor.biomasql_wasm_erro(this.indice));throw Error(`Bioma SQL: ${t}\n  SQL: ${e}`)}},Ee=new URL(`biomasql-DM4VwP1L.wasm`,import.meta.url).href,De=class{constructor(e){C(this,`vaga`,void 0),this.vaga=e}ler(e,t){return this.vaga.punho.read(e,{at:t})}escrever(e,t){return this.vaga.punho.write(e,{at:t})}tamanho(){return this.vaga.punho.getSize()}truncar(e){this.vaga.punho.truncate(e)}sincronizar(){this.vaga.punho.flush()}fechar(){}},F=class extends Error{constructor(...e){super(...e),C(this,`name`,`OpfsSemPunhoSincrono`)}},Oe=class e{constructor(e,t){C(this,`vagas`,void 0),C(this,`caminhoDoBanco`,void 0),C(this,`pastas`,/* @__PURE__ */ new Set([`/`,`/.`])),this.vagas=e,this.caminhoDoBanco=t}static async preparar(t){let n=await(await navigator.storage.getDirectory()).getDirectoryHandle(t.pasta,{create:!0}),r=/* @__PURE__ */ new Map;for(let e of[``,`-journal`,`-wal`]){let i=`${t.banco}${e}`,a=await n.getFileHandle(i,{create:!0});if(typeof a.createSyncAccessHandle!=`function`){for(let e of r.values())e.punho.close();throw new F(`OPFS: este navegador não tem o punho síncrono.`)}let o=await a.createSyncAccessHandle(),s=o.getSize();if(typeof s!=`number`){for(let e of r.values())e.punho.close();throw o.close(),new F(`OPFS: o punho síncrono deste navegador não é síncrono.`)}r.set(`/${i}`,{punho:o,existe:e===``&&s>0})}return new e(r,`/${t.banco}`)}abrir(e,t){let n=this.vagas.get(e);return n===void 0||t.exclusivo&&n.existe||!n.existe&&!t.criar?null:(t.truncar&&n.punho.truncate(0),n.existe=!0,new De(n))}existe(e){return this.vagas.get(e)?.existe??this.pastas.has(e)}ehPasta(e){return this.pastas.has(e)}tamanhoDe(e){let t=this.vagas.get(e);return t?.existe?t.punho.getSize():null}apagar(e){let t=this.vagas.get(e);return t===void 0||!t.existe?!1:(t.punho.truncate(0),t.punho.flush(),t.existe=!1,!0)}criarPasta(e){return!this.pastas.has(e)&&(this.pastas.add(e),!0)}apagarPasta(e){return this.pastas.delete(e)}encerrar(){for(let e of this.vagas.values())e.punho.close();this.vagas.clear()}};const I=[{tabela:`not_perguntas`,colunas:[`pergunta`,`referencia`,`resposta1`,`resposta2`,`resposta3`,`resposta4`,`explicacao`]},{tabela:`not_poesias`,colunas:[`titulo`,`conteudo`]},{tabela:`not_receitas`,colunas:[`titulo`,`categoria`,`ingredientes`,`instrucoes`]},{tabela:`not_cronologia_eventos`,colunas:[`titulo`,`resumo`,`referencia`,`periodo`,`obra_fonte`]},{tabela:`not_principios`,colunas:[`titulo`,`principio`,`referencia`,`explicacao`,`pratica`,`reflexoes`]},{tabela:`not_imite_cartoes`,colunas:[`titulo`,`tema`,`personagens`,`cenario`,`julgamento`,`correta`,`reenquadramento`,`referencia`,`espelho`]},{tabela:`not_criacao_modulos`,colunas:[`titulo`,`categoria`,`conceito`,`desafio`,`reflexao`,`referencia`]}];function L(e){return`${e}_fts`}function R({tabela:e,colunas:t,chave:n=`id`},{vocabulario:r=!1,indiceDePublicar:i=!1}={}){let a=L(e),o=t.join(`, `),s=t.map(e=>`new.${e}`).join(`, `),c=t.map(e=>`old.${e}`).join(`, `);return[`CREATE VIRTUAL TABLE IF NOT EXISTS ${a} USING fts5(
      ${o},
      content = '${e}',
      content_rowid = '${n}',
      tokenize = "unicode61 remove_diacritics 2"
    );`,`CREATE TRIGGER IF NOT EXISTS ${a}_ai AFTER INSERT ON ${e} BEGIN
      INSERT INTO ${a} (rowid, ${o}) VALUES (new.${n}, ${s});
    END;`,`CREATE TRIGGER IF NOT EXISTS ${a}_ad AFTER DELETE ON ${e} BEGIN
      INSERT INTO ${a} (${a}, rowid, ${o}) VALUES ('delete', old.${n}, ${c});
    END;`,`CREATE TRIGGER IF NOT EXISTS ${a}_au AFTER UPDATE ON ${e} BEGIN
      INSERT INTO ${a} (${a}, rowid, ${o}) VALUES ('delete', old.${n}, ${c});
      INSERT INTO ${a} (rowid, ${o}) VALUES (new.${n}, ${s});
    END;`,...r?[`CREATE VIRTUAL TABLE IF NOT EXISTS ${e}_vocab USING fts5vocab(${a}, row);`]:[],...i?[`CREATE INDEX IF NOT EXISTS idx_${e}_publicar ON ${e} (id) WHERE publicar = 1;`]:[]]}function z(e){return e.map(({tabela:e})=>{let t=L(e);return`INSERT INTO ${t} (${t}) VALUES ('rebuild');`})}I.map(({tabela:e})=>`SELECT '${e}' AS acervo, term, doc, cnt FROM ${e}_vocab`).join(` UNION ALL `),I.flatMap(e=>R(e,{vocabulario:!0,indiceDePublicar:!0})),z(I);const B=[{tabela:`not_guias`,colunas:[`titulo`,`texto`]},{tabela:`not_guias_local`,colunas:[`titulo`,`texto`]},{tabela:`not_poesias`,colunas:[`titulo`,`conteudo`]},{tabela:`not_poesias_local`,colunas:[`titulo`,`conteudo`]},{tabela:`not_receitas`,colunas:[`titulo`,`categoria`]},{tabela:`not_receitas_local`,colunas:[`titulo`,`categoria`]},{tabela:`not_cronologia`,colunas:[`titulo`,`resumo`,`referencia`]},{tabela:`not_vidas`,colunas:[`nome`]},{tabela:`not_principios`,colunas:[`titulo`,`principio`,`referencia`]},{tabela:`not_faq`,colunas:[`titulo`,`referencia`]}],ke=B.flatMap(e=>R(e)),Ae=z(B),V=[{versao:1,oQue:`a congregação e o grupo de campo no Perfil, que o relatório de campo assina`,aplicar:e=>{me(e,`not_meu_perfil`,[[`congregacao`,`TEXT NOT NULL DEFAULT ''`],[`grupo`,`TEXT NOT NULL DEFAULT ''`]])}},{versao:2,oQue:`a marca de especial sai dos tipos do Calendário: o contador que ela alimentava não existe mais`,aplicar:e=>{he(e,`not_calendario_tipos`,[`marca_especial`])}},{versao:3,oQue:`o placar nos recordes das Atividades: a Linha do Tempo passa a contar cartas encaixadas`,aplicar:e=>{me(e,`not_jogos_recordes`,[[`melhor_pontos`,`INTEGER NOT NULL DEFAULT 0`]])}},{versao:4,oQue:`a Linha do Tempo sai das Atividades: os recordes dela não têm mais tela que os leia`,aplicar:e=>{Number(e.escalar(`SELECT COUNT(*) FROM sqlite_master WHERE type = 'table' AND name = ?`,[`not_jogos_recordes`])??0)>0&&e.executar(`DELETE FROM not_jogos_recordes WHERE jogo = 'linhadotempo'`)}}],je=Math.max(...V.map(e=>e.versao));function Me(e){let t=Number(e.escalar(`PRAGMA user_version`)??0),n=V.filter(e=>e.versao>t);n.length!==0&&e.emTransacao(()=>{for(let t of n)t.aplicar(e);e.executar(`PRAGMA user_version = ${je}`)})}function Ne(e){return`busca:${e}`}const Pe={...Object.fromEntries(B.map(({tabela:e})=>{let t=L(e);return[Ne(e),`SELECT rowid AS id, bm25(${t}) AS relevancia
         FROM ${t}
        WHERE ${t} MATCH ?
     ORDER BY relevancia
        LIMIT 200`]})),metasFontesNoPeriodo:`WITH janela(inicio, fim, mes_inicio, mes_fim, categoria_id) AS (SELECT ?, ?, ?, ?, ?)
                         SELECT
                           (SELECT COALESCE(SUM(t.valor), 0) FROM not_transacoes t, janela j
                             WHERE t.tipo = 0 AND t.data_vencimento >= j.inicio AND t.data_vencimento < j.fim) AS receitas,
                           (SELECT COALESCE(SUM(t.valor), 0) FROM not_transacoes t, janela j
                             WHERE t.tipo = 1 AND t.data_vencimento >= j.inicio AND t.data_vencimento < j.fim) AS despesas,
                           (SELECT COALESCE(SUM(t.valor), 0) FROM not_transacoes t, janela j
                             WHERE t.tipo = 1 AND t.categoria_id > 0 AND t.categoria_id = j.categoria_id
                               AND t.data_vencimento >= j.inicio AND t.data_vencimento < j.fim) AS despesa_categoria,
                           (SELECT COALESCE(SUM(r.horas), 0) FROM not_relatorios_ministerio r, janela j
                             WHERE r.ano * 100 + r.mes BETWEEN j.mes_inicio AND j.mes_fim) AS horas,
                           (SELECT COALESCE(SUM(c.revisitas), 0) FROM not_contadores_ministerio c, janela j
                             WHERE c.ano * 100 + c.mes BETWEEN j.mes_inicio AND j.mes_fim) AS revisitas,
                           (SELECT COUNT(*) FROM not_estudos_biblicos) AS estudos,
                           (SELECT COALESCE(SUM(s.duracao_minutos), 0) FROM not_sessoes_estudo s, janela j
                             WHERE s.concluido_em >= j.inicio AND s.concluido_em < j.fim) AS foco_min,
                           (SELECT COALESCE(SUM(s.duracao_minutos), 0) FROM not_sessoes_estudo s, janela j
                             WHERE s.tipo_ciclo = 'leitura'
                               AND s.concluido_em >= j.inicio AND s.concluido_em < j.fim) AS foco_leitura_min,
                           (SELECT COUNT(*) FROM not_sessoes_estudo s, janela j
                             WHERE s.concluido_em >= j.inicio AND s.concluido_em < j.fim) AS sessoes,
                           (SELECT COUNT(DISTINCT p.pergunta_id) FROM not_jogo_respostas p, janela j
                             WHERE p.respondida_em >= j.inicio AND p.respondida_em < j.fim) AS perguntas`,categoriasEmOrdem:`SELECT * FROM vw_note_categorias_financeiro`,eventosDoDia:`SELECT count(*) AS total
                   FROM not_calendario_eventos
                  WHERE data_inicio_epoch <= ? AND data_fim_epoch >= ?`};function Fe(e){let t=Pe[e];if(t===void 0)throw Error(`consulta desconhecida: ${e} (ver src/db/consultas.ts)`);return t}const Ie={perguntas:{tabela:`not_perguntas`,familia:`curado`},poesias:{tabela:`not_poesias`,familia:`curado`,apelidos:{anteriorId:`anterior_id`,proximoId:`proximo_id`}},receitas:{tabela:`not_receitas`,familia:`curado`},guias:{tabela:`not_guias`,familia:`curado`},kits:{tabela:`not_kits`,familia:`curado`,filhos:[{campo:`itens`,tabela:`not_kits_itens`,chave:`kit_id`}]},criacao_modulos:{tabela:`not_criacao_modulos`,familia:`curado`},imite_cartoes:{tabela:`not_imite_cartoes`,familia:`curado`},conexoes_grupos:{tabela:`not_conexoes_grupos`,familia:`curado`},personagens:{tabela:`not_personagens`,familia:`curado`},nome_divino:{tabela:`not_nome_divino`,familia:`curado`},trilhas:{tabela:`not_trilhas`,familia:`curado`},principios:{tabela:`not_principios`,familia:`curado`},faq:{tabela:`not_faq`,familia:`curado`},cronologia:{tabela:`not_cronologia`,familia:`curado`},vidas:{tabela:`not_vidas`,familia:`curado`},lugares:{tabela:`not_lugares`,familia:`curado`},vidas_lugares:{tabela:`not_vidas_lugares`,familia:`curado`},relatorio_mundial:{tabela:`not_relatorio_mundial`,familia:`curado`},relatorio_mundial_paises:{tabela:`not_relatorio_mundial_paises`,familia:`curado`},anotacao_modelos:{tabela:`not_anotacao_modelos`,familia:`curado`},estoque_catalogo:{tabela:`not_estoque_catalogo`,familia:`curado`},tutorial:{tabela:`not_tutorial`,familia:`curado`},pasta:{tabela:`not_pasta`,familia:`privado`},anotacao:{tabela:`not_anotacao`,familia:`privado`},not_caderno_estudo:{tabela:`not_caderno_estudo`,familia:`privado`},sessoes_estudo:{tabela:`not_sessoes_estudo`,familia:`privado`},categorias_financeiro:{tabela:`not_categorias_financeiro`,familia:`privado`},transacoes:{tabela:`not_transacoes`,familia:`privado`},recorrencias_financeiro:{tabela:`not_recorrencias_financeiro`,familia:`privado`},meta:{tabela:`not_meta`,familia:`privado`},kits_local:{tabela:`not_kits_local`,familia:`privado`,filhos:[{campo:`itens`,tabela:`not_kits_local_itens`,chave:`kit_id`}]},documentos_cofre:{tabela:`not_documentos_cofre`,familia:`privado`},estoque_alimentos:{tabela:`not_estoque_alimentos`,familia:`privado`},relatorios_ministerio:{tabela:`not_relatorios_ministerio`,familia:`privado`},contadores_ministerio:{tabela:`not_contadores_ministerio`,familia:`privado`},estudos_biblicos:{tabela:`not_estudos_biblicos`,familia:`privado`},estudo_registros:{tabela:`not_estudo_registros`,familia:`privado`},meu_perfil:{tabela:`not_meu_perfil`,familia:`privado`},calendario_tipos:{tabela:`not_calendario_tipos`,familia:`privado`},calendario_eventos:{tabela:`not_calendario_eventos`,familia:`privado`},poesias_local:{tabela:`not_poesias_local`,familia:`privado`},guias_local:{tabela:`not_guias_local`,familia:`privado`},receitas_local:{tabela:`not_receitas_local`,familia:`privado`},jogo_progresso:{tabela:`not_jogo_progresso`,familia:`privado`},jogo_respostas:{tabela:`not_jogo_respostas`,familia:`privado`},jogos_recordes:{tabela:`not_jogos_recordes`,familia:`privado`},personagens_selos:{tabela:`not_personagens_selos`,familia:`privado`}};let H;function U(){if(H===void 0)throw Error(`o repositório ainda não foi montado`);return H}function Le(e){H=new ge(e,Ie),H.lerEsquemaAplicado()}function W(){return U().tabelas()}function Re(e,t,n){let r=x(t,U().colunasDa(t),n);e.executar(r.sql,r.parametros)}function ze(e,t,n,r){switch(t.op){case`otimizar`:return n&&(e.executar(`PRAGMA optimize`),e.executar(`PRAGMA incremental_vacuum(64)`)),n;case`pronto`:return n;case`todos`:return U().todos(t.store);case`consulta`:return e.consultar(Fe(t.nome),[...t.parametros??[]]);case`obter`:return U().obter(t.store,t.id);case`contar`:return U().contar(t.store);case`salvar`:{let e=U().salvar(t.store,t.registro);return r(),e}case`excluir`:return U().excluir(t.store,t.id),r(),null;case`substituirTudo`:return U().substituirTudo(t.store,t.registros),r(),null;case`restaurar`:return Be(t.stores),r(),null}}function Be(e){let t=U().stores().filter(t=>Array.isArray(e[t]));U().emTransacao(()=>{for(let e of[...t].reverse())U().substituirTudo(e,[]);for(let n of t)U().substituirTudo(n,e[n]??[])})}function Ve(e){let t=e.consultar(`PRAGMA table_info(not_faq)`).map(e=>String(e.name));t.length===0||t.includes(`lentes`)||e.emTransacao(()=>{e.executar(`DROP TABLE IF EXISTS not_faq_fts`),e.executar(`DROP TABLE not_faq`)})}const He=[`vw_note_metas_fontes`,`vw_note_despesa_por_categoria`];function Ue(e){for(let t of He)e.executar(`DROP VIEW IF EXISTS ${t}`)}function We(e){if(Number(e.escalar(`SELECT COUNT(*) FROM sqlite_schema WHERE type = 'table' AND name = 'not_dados'`)??0)===0){G(e);return}let t=/* @__PURE__ */ new Set;U().emTransacao(()=>{for(let n of U().stores()){let r=e.consultar(`SELECT dados FROM not_dados WHERE tabela = ? ORDER BY id`,[n]);for(let e of r){let r;try{r=JSON.parse(String(e.dados))}catch{t.add(`${n} (JSON ilegível)`);continue}U().salvar(n,r)}e.executar(`DELETE FROM not_dados WHERE tabela = ?`,[n])}for(let n of e.consultar(`SELECT DISTINCT tabela FROM not_dados`))t.add(String(n.tabela));t.size===0&&(e.executar(`DROP TABLE IF EXISTS not_dados`),e.executar(`DROP TABLE IF EXISTS not_seq`)),G(e)}),t.size>0&&console.warn(`migração da Fase 8: store(s) sem destino, mantidos em \`not_dados\`: ${[...t].join(`, `)}. A tabela antiga não foi apagada.`)}function G(e){e.executar(`INSERT INTO not_meta_banco (chave, valor) VALUES (?, ?) ON CONFLICT(chave) DO NOTHING`,[`esquema_em_colunas`,`1`])}const K=`note.sqlite`,Ge=`dump`;let q,J=!1,Y;function X(){if(q===void 0)throw Error(`banco ainda não abriu`);return q}let Ke;function Z(){return Ke??=new Promise((e,t)=>{let n=indexedDB.open(`note_fallback`,1);n.onupgradeneeded=()=>n.result.createObjectStore(`kv`),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error??/* @__PURE__ */ Error(`IndexedDB não abriu`))}),Ke}async function qe(e){let t=await Z();return new Promise((n,r)=>{let i=t.transaction(`kv`,`readonly`).objectStore(`kv`).get(e);i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error??/* @__PURE__ */ Error(`leitura do IndexedDB falhou`))})}async function Je(e,t){let n=await Z();return new Promise((r,i)=>{let a=n.transaction(`kv`,`readwrite`);a.objectStore(`kv`).put(t,e),a.oncomplete=()=>r(),a.onerror=()=>i(a.error??/* @__PURE__ */ Error(`gravação no IndexedDB falhou`))})}async function Ye(){return await qe(Ge)}async function Xe(e){return Je(Ge,e)}function Ze(e){if(e===void 0||(e.tamanhoDe(e.caminhoDoBanco)??0)===0)return null;let t=e.abrir(e.caminhoDoBanco,{criar:!1,truncar:!1,exclusivo:!1});if(t===null)return null;let n=/* @__PURE__ */ new Uint8Array(16);return t.ler(n,0),n}async function Qe(){let e;try{e=await Ye()}catch{return}if(e===void 0||e.versao!==2)return;let t=new Set(W());X().emTransacao(()=>{for(let[n,r]of Object.entries(e.tabelas))if(t.has(n))for(let e of r)Re(X(),n,e)})}let Q;function $e(){J||Q!==void 0||(Q=setTimeout(()=>{Q=void 0;let e={};for(let t of W())e[t]=X().consultar(`SELECT * FROM ${v(t)}`);Xe({versao:2,tabelas:e}).catch(e=>{console.warn(`persistência de fallback falhou`,e)})},200))}function et(e){return self.isSecureContext?e instanceof DOMException&&e.name===`NoModificationAllowedError`?`instancia-dupla`:e instanceof F?`navegador-antigo`:`indisponivel`:`origem-insegura`}function tt(){let e=X().escalar(`SELECT count(*) FROM sqlite_master WHERE name = 'sqlite_stat1'`);Number(e??0)===0&&X().executar(`ANALYZE`)}function nt(){X().executarRoteiro(ie(`note`).join(`
`)),X().executar(ae)}function rt(){if(X().executarRoteiro(ke.join(`
`)),!(X().consultar(`SELECT valor FROM not_meta_banco WHERE chave = ?`,[`busca_construida`]).length>0)){for(let e of Ae)X().executar(e);X().executar(`INSERT INTO not_meta_banco (chave, valor) VALUES (?, ?) ON CONFLICT(chave) DO NOTHING`,[`busca_construida`,`1`])}}async function it(){let e;try{e=await Oe.preparar({pasta:`note-opfs`,banco:K}),J=!0}catch(e){Y=et(e),console.warn(`OPFS indisponível (${Y}); Bioma SQL em memória com despejo no IndexedDB.`,e)}let t=Ze(e),n=e===void 0?`sem-arquivo`:le(t),r=e===void 0?void 0:await fe(qe,Je);q=await Ce({modulo:fetch(Ee),caminho:e?.caminhoDoBanco??`/${K}`,...e===void 0?{}:{arquivos:e},...r===void 0||n===`em-claro`?{}:{chave:r}}),n===`em-claro`&&r!==void 0&&(console.info(`Kobi Note: cifrando o banco deste aparelho pela primeira vez.`),X().rechavear(r)),X().executar(`PRAGMA auto_vacuum = INCREMENTAL`),Ve(X()),Ue(X()),X().executarRoteiro(p(`note`).join(`;
`)),Me(X()),Le(X()),We(X()),J||await Qe(),rt(),nt(),tt();let i={tipo:`pronto`,versaoSqlite:X().versao,persistente:J,...Y===void 0?{}:{motivo:Y}};self.postMessage(i)}const $=it();self.addEventListener(`message`,e=>{let t=e.data;$.then(()=>{let e={seq:t.seq,ok:!0,valor:ze(X(),t.operacao,J,$e)};self.postMessage(e)}).catch(e=>{let n={seq:t.seq,ok:!1,erro:String(e)};self.postMessage(n)})}),$.catch(e=>{let t={tipo:`falha`,erro:String(e)};self.postMessage(t)});