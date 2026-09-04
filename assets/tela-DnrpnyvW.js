const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./carbono-D_m3KaZM.js","./canvas2d-BfNly3Cy.js","./desenho-B82_CXYV.js","./dinheiro-biblia-LipncDMN.js","./medidas-biblia-RStIT3Ua.js","./revelacao-CydzDYKQ.js","./sete-tempos-e1oFOJyp.js","./trajetoria-biblia-DPvDRPV6.js","./trajetoria-biblia-CcajGLYv.js","./strings-BU-HmFix.js","./base-EC5ZZXpp.js","./balanca-BKbdKXGh.js","./bilhar-DyYIO0jw.js","./desconto-DyKycRap.js","./difracao-CruwC7aB.js","./fractal-B0CQQ61D.js","./funcao-o2LKR-mm.js","./ondas-NeA0_Mko.js","./asa-Btc2R3t_.js","./cicatrizacao-Bwtq5dDM.js","./dna-CLmu9Gvs.js","./fluxo-CfC00iCO.js","./formiga-ChUBS472.js","./proteina-D2sEXoIT.js","./ra-vidro-B8sFS6XW.js","./sustentacao-BZIc4e5u.js","./atomo-DmAOk_h4.js","./elementos-BhRPbw8f.js","./lente-yi_aTv23.js","./microscopio-CPsPMv98.js","./musica-CmO4irUH.js","./fisica-mIKFgts3.js","./relatividade-BQG9rG5K.js","./solar-CM8yhT3-.js","./universo-escuro-B8Vju6Td.js","./ciclos-gW6656Ru.js","./concha-CYW8ClBf.js","./dente-leao-BfQnDDtW.js","./filotaxia-DofE_VPS.js","./cena3d-PCHlW6lW.js","./Geometry-DzeswdyX.js","./index-CRLpDONK.js","./src-Bmp9x5Vh.js","./chunk.GNGRDZOK-B8LJXwiU.js","./lit-CL39YOSA.js","./banco-u8JVNTlT.js","./dados-DZJ-rFad.js","./data-DRe9t3tD.js","./index-DPqUYH5V.css","./getPo2TextureFromSource-DLV3r-1L.js","./canvasUtils-B5qmLynH.js","./RenderTargetSystem-DdFgsipS.js","./CanvasRenderer-UirAj7tU.js","./getTextureBatchBindGroup-CXDMv5mc.js","./CanvasPool-C1er97Gh.js","./fotossintese-DxhqXP_w.js","./girassol-CZRjXisk.js","./planta-noite-zAOcP5Cm.js","./pomelo-BD2xLgcE.js","./terra3d-Bxr3jfLn.js","./globo-Cdnzqa1-.js","./terra-criacao-__ONaz2e.js","./tesselacao-OAhrdgQG.js","./beija-flor-CJZ24MdL.js","./bigode-gato-gZBj2QyT.js","./bioluz-gAIyzMBB.js","./cardume-BedonEOl.js","./castor-CcoMr3WU.js","./dna-dados-4_7JzWTy.js","./eco-BS8NizcT.js","./formiga-prata-Bs4smPgz.js","./gaivota-VlNU_Bjj.js","./grilo-BHsiJuO-.js","./libelula-DlBGijWE.js","./lingua-gato-BYOenw0l.js","./martim-BaGftDXK.js","./piso-CjW0R7zm.js","./podometro-19Lid-jf.js","./polvo-CXSleEH4.js","./sonar-sH1_XorD.js","./turbina-vksPynnn.js","./vaga-lume-DJ_VlGv3.js","./hemoglobina-CKjSM_ez.js","./osso-KlpdClp9.js"])))=>i.map(i=>d[i]);
import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{a as r}from"./banco-u8JVNTlT.js";import{o as i,s as a,u as o}from"./dados-DZJ-rFad.js";import{D as s,E as c,T as l}from"./index-CRLpDONK.js";import{n as u,t as ee}from"./directive-BSZPiF1A.js";import{t as d}from"./unsafe-html-BBiWdB6b.js";import{n as te,r as ne,t as re}from"./ref-9J_G_2te.js";import{a as f,c as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./base-EC5ZZXpp.js";import{c as ie,l as b}from"./trajetoria-biblia-CcajGLYv.js";import{_ as ae,a as oe,c as se,d as ce,f as le,g as ue,h as de,i as fe,l as pe,m as me,n as he,o as ge,p as _e,r as ve,s as ye,u as be,v as xe}from"./fisica-mIKFgts3.js";var Se=ee(class extends u{constructor(){super(...arguments),this.key=t}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(ne(e),this.key=t),n}}),x={natureza:`A Natureza`,terra:`A Terra`,entenda:`Entenda Melhor`,matematica:`Matemática`,corpo:`O Corpo Humano`,animal:`O Reino Animal`,universo:`Universo e Física`},Ce=Object.keys(x),we=`natureza`;function Te(e){return x[e]??e}var Ee={criacao:{id:`criacao`,titulo:`Teve um Projeto?`,subtitulo:`Descubra os mistérios escondidos na criação e dê louvor à sabedoria do Criador, Jeová.`,inclui:e=>e.categoria!==`entenda`,agrupado:!0},entenda:{id:`entenda`,titulo:`Entenda Melhor`,subtitulo:`Raciocínios bíblicos que costumam travar as pessoas, refeitos passo a passo por você.`,inclui:e=>e.categoria===`entenda`,agrupado:!1}};function S(e){return e===`entenda`?Ee.entenda:Ee.criacao}async function De(){return(await r(`criacao_modulos`).todos()).sort((e,t)=>Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}function Oe(e,t){let n=new Map;for(let t of e){let e=x[t.categoria]===void 0?we:t.categoria,r=n.get(e);r===void 0?n.set(e,[t]):r.push(t)}return Ce.filter(e=>(n.get(e)?.length??0)>0).map(e=>{let r=n.get(e)??[];return{chave:e,rotulo:Te(e),modulos:r,concluida:r.every(t)}})}function ke(e){if(e===null)return{};try{let t=JSON.parse(e.config===``?`{}`:e.config);return typeof t==`object`&&t&&!Array.isArray(t)?t:{}}catch{return{}}}var C=`note_criacao_progresso`;function w(){return{concluidos:{}}}function Ae(){try{let e=JSON.parse(localStorage.getItem(C)??`null`);return{...w(),...e}}catch{return w()}}function je(e){localStorage.setItem(C,JSON.stringify(e))}function Me(e,t){let n=e.concluidos[String(t)],r={...e,concluidos:{...e.concluidos,[String(t)]:{tentativas:(n?.tentativas??0)+1,concluidoEm:Date.now()}}};return je(r),r}function T(e,t){return t?.id!==void 0&&e.concluidos[String(t.id)]!==void 0}function Ne(e){return`criacao:${e}`}async function Pe(){let e=new Map;for(let t of await a()){if(t.origem!==`criacao`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}var E=5730;function Fe(e){return 2**(-e/E)}function Ie(e){return e<=0?1/0:-5730*Math.log2(Math.min(1,e))}function Le(e,t){let n=Math.max(0,Math.min(1,t/100));return Ie(Fe(e)*(1-n)+n)}var Re=b([{id:`origem`,fase:`origem`,titulo:`De onde vem o carbono-14?`,pergunta:`Quase todo o carbono do mundo é carbono-12, que não decai nunca. O carbono-14 é raro — cerca de um átomo em um trilhão — e alguém precisa estar fabricando o tempo todo, senão ele já teria acabado. Quem fabrica?`,verso:`Willard Libby, 1949 — o método que lhe valeu o Nobel de Química de 1960`,entrada:`escolha`,opcoes:[{id:`nucleo`,rotulo:`O calor do interior da Terra`,nota:`Sobe pelo solo e pelos mares.`},{id:`cosmico`,rotulo:`Raios cósmicos batendo no nitrogênio do ar`,nota:`Na parte alta da atmosfera.`},{id:`sol`,rotulo:`A luz do Sol, direto nas plantas`,nota:`Junto com a fotossíntese.`}],correta:`cosmico`,erros:{nucleo:`O interior da Terra não fabrica C-14 — o carbono que sobe de lá é justamente o mais VELHO que existe, sem C-14 nenhum. É por isso que plantas perto de fontes vulcânicas podem nascer "envelhecidas".`,sol:`A fotossíntese só CAPTURA o carbono que já está no ar; ela não fabrica isótopo nenhum. A fábrica está muito mais alto.`},acerto:`Raios cósmicos atingem o nitrogênio-14 na alta atmosfera e o convertem em carbono-14. Ele se mistura ao ar como gás carbônico, a planta o absorve, o animal come a planta — e todo ser vivo fica com a mesma proporção do ar. Enquanto está vivo, ele repõe o que decai.`,encadeia:!0},{id:`meiavida`,fase:`meiavida`,titulo:`Quanto tempo o relógio leva para andar?`,pergunta:`Morreu, parou de repor: o C-14 que estava lá começa a decair e ninguém repõe. Arraste até achar em quantos anos a metade dele desaparece — é a meia-vida, e é o ponteiro deste relógio.`,verso:`Meia-vida do carbono-14: 5.730 ± 40 anos`,entrada:`slider`,prop:`meia`,rotulo:`Meia-vida`,suf:` anos`,min:2e3,max:9e3,step:10,inicial:2e3,medir:e=>({ok:Math.abs(e-E)<=60,meia:e,leitura:`Com ${g(e)} anos de meia-vida, uma amostra de ${g(e*2)} anos teria ${e===0?`—`:`25%`} do C-14 original, e uma de ${g(e*4)} anos, pouco mais de 6%.`,erro:`Ainda não. A meia-vida do C-14 fica perto de 5.700 anos — é ela que dá ao método um alcance útil de umas dez meia-vidas, algo em torno de 50.000 anos.`}),acerto:`5.730 anos. Depois de dez meia-vidas — cerca de 50.000 anos — resta tão pouco C-14 que nenhuma balança separa a amostra do ruído do laboratório. É esse o limite honesto do método, e não uma opinião sobre o passado.`,encadeia:!0},{id:`idade`,fase:`idade`,titulo:`Da fração para a idade`,pergunta:`Chegou ao laboratório um pedaço de madeira com 25% do carbono-14 que teria se estivesse vivo hoje. Arraste a idade até a fração bater com essa medida.`,verso:`fração restante = 2 elevado a (−idade ÷ meia-vida)`,entrada:`slider`,prop:`idade`,rotulo:`Idade da amostra`,suf:` anos`,min:0,max:3e4,step:100,inicial:0,medir:e=>{let t=Fe(e)*100;return{ok:Math.abs(e-E*2)<=300,idade:e,fracao:t,leitura:`${g(e)} anos → restam ${p(t,1)}% do carbono-14 original.`,erro:t>25?`Ainda sobra C-14 demais: a amostra teria de ser mais velha.`:`Já sobrou C-14 de menos: a amostra teria de ser mais nova.`}},acerto:`11.460 anos — duas meia-vidas exatas. Repare que a conta não tem nada de arbitrário: medida a fração, a idade sai por uma linha só. O trabalho difícil não é a conta; é garantir que a fração medida seja mesmo a da amostra.`},{id:`contaminacao`,fase:`contaminacao`,titulo:`Um fio de cabelo estraga tudo`,pergunta:`Esta amostra tem 40.000 anos de verdade. Uma raiz recente atravessou o osso, ou uma gota de conservante encostou nele — carbono MODERNO se misturou. Arraste até a leitura perder dez mil anos.`,verso:`Contaminação por carbono moderno — o erro mais comum em amostras antigas`,entrada:`slider`,prop:`contaminacao`,rotulo:`Carbono moderno na amostra`,suf:`%`,min:0,max:5,step:.1,inicial:0,medir:e=>{let t=Le(4e4,e);return{ok:t<=3e4,contaminacao:e,medida:t,real:4e4,leitura:e===0?`Amostra limpa: a balança lê os 40.000 anos verdadeiros.`:`${p(e,1)}% de carbono moderno → a balança lê ${g(Math.round(t/100)*100)} anos.`,erro:`Continue: numa amostra deste porte restava menos de 1% do C-14 original, então cada décimo de porcento de carbono novo pesa muito na conta.`}},acerto:`Menos de dois por cento de carbono moderno tiram dez mil anos da leitura. O motivo é aritmético: aos 40.000 anos restava menos de 1% do C-14 original, então a sujeira nova chega a ser mais abundante que o sinal antigo. É por isso que a preparação da amostra ocupa mais tempo no laboratório do que a medição em si — e por que o contexto de onde ela saiu vale tanto quanto o número que sai da balança.`},{id:`reservatorio`,fase:`reservatorio`,titulo:`A amostra que já nasce velha`,pergunta:`Um molusco marinho não respira o ar: ele se alimenta do carbono dissolvido na água, e essa água pode ter ficado séculos longe da superfície, decaindo o tempo todo. A concha mediu 3.000 anos. Arraste a idade do reservatório até aparecer quando o bicho de fato viveu.`,verso:`Efeito reservatório marinho — corrigido por calibração regional`,entrada:`slider`,prop:`reservatorio`,rotulo:`Idade do reservatório`,suf:` anos`,min:0,max:1200,step:25,inicial:0,medir:e=>({ok:Math.abs(e-400)<=50,reservatorio:e,leitura:`Descontando ${g(e)} anos de reservatório, a concha viveu há ${g(3e3-e)} anos.`,erro:`O desconto típico de um mar aberto fica em algumas centenas de anos, e varia de região para região — por isso ele é medido, não chutado.`}),acerto:`Cerca de 400 anos, que é a ordem de grandeza do reservatório marinho global — e ele muda de lugar para lugar, e de época para época. A mesma armadilha pega ossos de quem comia muito peixe de rio e plantas que cresceram em água rica em calcário antigo. Nada disso invalida o método: é um viés CONHECIDO, que se mede e se corrige — desde que se saiba de onde a amostra veio.`},{id:`planalto`,fase:`planalto`,titulo:`Por que uma data volta com duas respostas`,pergunta:`O C-14 do ar não foi constante: ele oscilou com o campo magnético da Terra e com a atividade solar. Por isso o resultado bruto passa por uma curva de calibração, feita com anéis de árvores contados um a um. Em alguns trechos essa curva fica quase horizontal. O que acontece com uma amostra que cai num desses trechos?`,verso:`Curva de calibração IntCal, construída por dendrocronologia`,entrada:`escolha`,opcoes:[{id:`errada`,rotulo:`A data sai errada, sem aviso`,nota:`O laboratório não percebe.`},{id:`larga`,rotulo:`A data sai certa, mas com margem larga`,nota:`Às vezes em dois ou três intervalos possíveis.`},{id:`nada`,rotulo:`Nada muda: a curva não afeta o resultado`,nota:``}],correta:`larga`,erros:{errada:`Não é que saia errada às escondidas — é que sai HONESTAMENTE imprecisa. O relatório mostra a margem larga; quem resume o achado numa manchete é que costuma apagá-la.`,nada:`Afeta, e muito. Sem calibrar, uma data de 1000 a.C. pode errar por séculos, porque a proporção de C-14 no ar daquela época não era a de hoje.`},acerto:`Num platô da curva, várias idades verdadeiras produzem quase a mesma proporção de C-14 — então a mesma medição corresponde a um intervalo largo, às vezes descontínuo. O platô entre os séculos 8 e 4 a.C. é o mais conhecido. O resultado continua correto: ele apenas diz menos do que gostaríamos, e diz isso abertamente.`},{id:`juizo`,fase:`juizo`,titulo:`Então, o que uma data de carbono vale?`,pergunta:`Você viu o método por dentro: a física é firme, e três coisas concretas podem estragar uma medição. Qual conclusão o conjunto sustenta?`,verso:`Provérbios 14:15; 18:13 — ouvir o assunto inteiro antes de responder`,entrada:`escolha`,opcoes:[{id:`descartar`,rotulo:`Nenhuma: datação por carbono não serve para nada`,nota:`Todo resultado é chute.`},{id:`aceitar`,rotulo:`Toda data publicada é exata como está escrita`,nota:`O número é o número.`},{id:`senso`,rotulo:`Vale o que a amostra e a margem permitem dizer`,nota:`Contexto conhecido, amostra limpa, margem declarada.`}],correta:`senso`,erros:{descartar:`Isso vai longe demais. O decaimento do C-14 é medido em laboratório e confirmado por amostras de idade conhecida — madeira de tumbas datadas por documentos, anéis de árvore contados um a um. Dentro da história humana, e bem feita, a medição acerta.`,aceitar:`Isso vai longe demais para o outro lado. Toda data séria vem com uma margem e depende de a amostra estar limpa e o contexto conhecido — três coisas que você acabou de ver falhar. Um número sem a margem não é o resultado inteiro.`},acerto:`Este é o bom senso do assunto. A física do decaimento não está em disputa; o que decide é a QUALIDADE da amostra e a honestidade da margem. Uma data de carbono bem feita, dentro do alcance do método, é uma boa evidência — e vem sempre com um intervalo, não com um ponto. Quando o intervalo some no caminho até a manchete, o problema não foi o laboratório. Aceitar isso não é desconfiar da ciência: é ler o resultado como o próprio laboratório o escreveu.`}],{comp:`carbono`,aspecto:`var(--kk-ratio-post)`}),ze=b([{id:`denario`,fase:`denario`,titulo:`Quanto valia um denário?`,pergunta:`O denário é a moeda mais citada nos Evangelhos, e quase toda parábola sobre dinheiro depende dele. Na parábola dos trabalhadores da vinha, o dono combina um denário com cada homem. Um denário equivalia a quê?`,verso:`Mateus 20:2 · Apêndice B14-B (Tradução do Novo Mundo)`,entrada:`escolha`,opcoes:[{id:`pao`,rotulo:`O preço de um pão`,nota:`Uma moedinha de troco.`},{id:`dia`,rotulo:`O salário de um dia de 12 horas`,nota:`Uma jornada inteira — hoje, uns R$ 53.`},{id:`fortuna`,rotulo:`Uma pequena fortuna`,nota:`Vários meses de salário.`}],correta:`dia`,erros:{pao:`Baixo demais. Ninguém trabalharia “desde a primeira hora” por um pão — e o próprio texto mostra que o valor bastava para sustentar uma família naquele dia.`,fortuna:`Alto demais. Se um denário fosse uma fortuna, a queixa dos que trabalharam o dia inteiro não faria sentido: eles receberam o combinado, um dia de salário.`},acerto:`Um denário era o salário de um dia de trabalho de 12 horas — 3,85 g de prata. Para sentir o peso disso hoje, use o salário mínimo brasileiro arredondado, R$ 1.600 por mês: R$ 1.600 ÷ 30 dias dá uns R$ 53 por dia. Guarde essa régua — ela vale para tudo o que vem a seguir. A dracma grega valia praticamente o mesmo.`,encadeia:!0},{id:`viuva`,fase:`viuva`,titulo:`Quanto era a oferta da viúva?`,pergunta:`A viúva pobre pôs no cofre duas moedinhas de lépton. Um denário valia 64 quadrantes, e cada quadrante valia 2 léptons. Arraste até quantos léptons cabem num denário.`,verso:`Lucas 21:1-4`,entrada:`slider`,prop:`leptons`,rotulo:`Léptons num denário`,suf:` léptons`,min:8,max:200,step:8,inicial:8,medir(e){let t=e===128;return{ok:t,leptons:e,leitura:t?`64 quadrantes × 2 = 128 léptons num denário. Os dois léptons da viúva eram 1/64 do salário de um dia — cerca de 11 minutos de trabalho. ✔`:`${e} léptons. A conta é 64 quadrantes × 2 léptons cada — ${e<128?`falta`:`passou`}.`,erro:`Multiplique os 64 quadrantes do denário por 2 léptons cada.`}},acerto:`Duas moedinhas: 1/64 de um dia de salário, uns 11 minutos de trabalho — pelo salário mínimo de hoje, menos de R$ 1. Os ricos jogavam punhados de moedas ali, e Jesus disse que ela “lançou mais do que todos” — porque eles deram do que sobrava, e ela deu tudo o que tinha para viver.`},{id:`talento`,fase:`talento`,titulo:`Quanto PESA um talento?`,pergunta:`Antes de ser dinheiro, o talento era peso. A escada é esta: 50 siclos de 11,4 g fazem uma mina (570 g), e 60 minas fazem um talento. Arraste até o peso de um talento hebraico.`,verso:`Êxodo 38:25, 26 · Apêndice B14-B`,entrada:`slider`,prop:`kg`,rotulo:`Peso de um talento`,suf:` kg`,min:3,max:60,step:.6,inicial:3,medir(e){let t=Math.abs(e-34.2)<.01,n=e/.57;return{ok:t,kg:e,minas:n,leitura:t?`60 × 570 g = 34,2 kg num talento. Um só talento pesa como uma criança de dez anos — e o rei tinha milhares deles. ✔`:`${e.toString().replace(`.`,`,`)} kg ÷ 570 g = ${Math.round(n)} minas. São 60 — ${n<60?`falta`:`passou`}.`,erro:`Isso dá ${Math.round(n)} minas. Multiplique 60 × 570 g.`}},acerto:`Um talento = 34,2 kg. Agora dá para sentir o peso da coroa de Amom, de um talento de ouro, que Davi tomou (2 Samuel 12:30) — e para entender por que a Apocalipse 16:21 descreve pedras de granizo “do peso de um talento” como uma praga.`,encadeia:!0},{id:`divida`,fase:`divida`,titulo:`A dívida que o rei perdoou`,pergunta:`Na parábola, o escravo devia ao rei 10.000 talentos; cada talento grego valia 6.000 dracmas, e cada dracma era um dia de salário. Logo depois, esse mesmo escravo agarrou um conservo que lhe devia 100 denários. Veja as duas dívidas correndo na tela e responda: quantas vezes a dívida PERDOADA era maior que a cobrada?`,verso:`Mateus 18:23-35`,entrada:`escolha`,opcoes:[{id:`60`,rotulo:`60 vezes maior`,nota:`Uma diferença grande, mas comparável.`},{id:`6000`,rotulo:`6.000 vezes maior`,nota:`Uma diferença enorme.`},{id:`600000`,rotulo:`600.000 vezes maior`,nota:`Uma diferença fora de qualquer escala: R$ 5 mil contra R$ 3 bilhões.`}],correta:`600000`,erros:{60:`Muito pouco. Faça a conta inteira: 10.000 talentos × 6.000 dracmas = 60 milhões de dias de salário, contra 100.`,6e3:`Quase — mas você parou num talento. São 10.000 talentos: 60.000.000 de dias de trabalho, contra 100 dias.`},acerto:`60.000.000 ÷ 100 = 600.000 vezes. A dívida perdoada equivalia a cerca de 200.000 anos de trabalho — pelo salário mínimo de hoje, mais de R$ 3 bilhões; a cobrada, a uns três meses, uns R$ 5.300. Jesus escolheu números impossíveis de propósito — ninguém erra a moral dessa história depois de fazer a conta.`},{id:`nardo`,fase:`nardo`,titulo:`Quanto custava o perfume de Maria?`,pergunta:`Maria derramou nos pés de Jesus uma libra romana (327 g) de óleo perfumado de nardo genuíno. Judas protestou dizendo que aquilo valia 300 denários. Sabendo que cada denário é um dia de trabalho, arraste até quantos MESES de salário aquilo representava.`,verso:`João 12:3-5`,entrada:`slider`,prop:`meses`,rotulo:`Meses de salário`,suf:` meses`,min:1,max:20,step:1,inicial:1,medir(e){let t=e===10;return{ok:t,meses:e,dias:e*30,reais:e*1600,leitura:t?`300 dias de trabalho ÷ 30 = 10 meses de salário derramados de uma vez — R$ 16.000 pelo mínimo de hoje. ✔`:`${e} ${e===1?`mês`:`meses`} = ${e*30} dias de trabalho (R$ ${g(e*1600)}). São 300 denários, ou seja, 300 dias — ${e*30<300?`falta`:`passou`}.`,erro:`Divida os 300 dias de salário por 30 dias de mês.`}},acerto:`Dez meses de salário — R$ 16.000 pelo mínimo de hoje, quase um ano de trabalho num único frasco. Judas chamou aquilo de desperdício porque roubava do cofre; Jesus disse: “Deixem-na em paz.” Ela entendeu o que estava por vir, e o gesto dela é contado até hoje.`}],{comp:`dinheiro_biblia`,aspecto:`var(--kk-ratio-post)`,dica:`A cena converte junto: cada moeda e cada peso medidos em dias de trabalho.`}),Be=b([{id:`covado`,fase:`covado`,titulo:`De onde saiu o côvado?`,pergunta:`A medida mais usada na Bíblia é o côvado, e ela não veio de um padrão guardado num cofre: veio do corpo. Que parte do corpo dá o côvado?`,verso:`Deuteronômio 3:11 · Apêndice B14-A (Tradução do Novo Mundo)`,entrada:`escolha`,opcoes:[{id:`pe`,rotulo:`O comprimento do pé`,nota:`Cerca de 25 cm.`},{id:`antebraco`,rotulo:`Do cotovelo à ponta do dedo médio`,nota:`O antebraço inteiro.`},{id:`passo`,rotulo:`Um passo largo`,nota:`Cerca de 75 cm.`}],correta:`antebraco`,erros:{pe:`O pé é curto demais. Meça no seu braço: a distância do cotovelo à ponta do dedo médio é quase o dobro disso.`,passo:`Um passo é largo demais — daria quase o dobro do côvado. A medida é do braço, não da perna.`},acerto:`O côvado é o antebraço: do cotovelo à ponta do dedo médio, cerca de 44,5 cm. Estenda o braço e você tem uma régua bíblica. Havia também o côvado longo, uma largura de mão maior (7 × 7,4 cm = 51,8 cm), usado no templo de Ezequiel.`,encadeia:!0},{id:`arca`,fase:`arca`,titulo:`De que tamanho era a arca?`,pergunta:`Jeová mandou Noé construir a arca com 300 côvados de comprimento. Todo mundo lê esse número e não enxerga nada. Arraste até achar o comprimento em metros — e veja contra o que ele encosta.`,verso:`Gênesis 6:15`,entrada:`slider`,prop:`metros`,rotulo:`Comprimento da arca`,suf:` m`,min:50,max:200,step:.5,inicial:50,medir(e){let t=Math.abs(e-133.5)<.01,n=e/.445;return{ok:t,metros:e,covados:n,leitura:t?`300 × 0,445 m = 133,5 m de comprimento (por 22,25 m de largura e 13,35 m de altura). Mais comprida que um campo de futebol e mais alta que um prédio de quatro andares. ✔`:`${e.toString().replace(`.`,`,`)} m ÷ 0,445 m = ${Math.round(n)} côvados. A arca tinha 300 — ${n<300?`falta`:`passou`}.`,erro:`Isso dá ${Math.round(n)} côvados, não 300. Multiplique: 300 × 0,445 m.`}},acerto:`A arca tinha 133,5 m × 22,25 m × 13,35 m — cerca de 40.000 m³ de volume. Não era um barquinho de história infantil: era uma caixa maior que um campo de futebol, projetada para flutuar, não para navegar.`},{id:`golias`,fase:`golias`,titulo:`Qual era a altura de Golias?`,pergunta:`O texto diz que Golias media “seis côvados e um palmo”. Um côvado são 44,5 cm; um palmo (três larguras da mão) são 22,2 cm. Arraste até a altura dele em centímetros, arredondando ao centímetro.`,verso:`1 Samuel 17:4`,entrada:`slider`,prop:`altura`,rotulo:`Altura de Golias`,suf:` cm`,min:200,max:330,step:1,inicial:200,medir(e){let t=e===289;return{ok:t,altura:e,leitura:t?`6 × 44,5 + 22,2 = 289,2 cm — quase 2,90 m. Um homem de 1,75 m bateria no peito dele, e ele não passaria por uma porta comum sem se abaixar meio metro. ✔`:`${e} cm. Some seis côvados (6 × 44,5) com um palmo (22,2) e veja o quanto ${e<289?`ainda falta`:`passou`}.`,erro:`${e} cm não fecha. A conta é 6 × 44,5 cm + 22,2 cm.`}},acerto:`Cerca de 2,89 m. E a couraça dele pesava 5.000 siclos — 57 kg —, mais do que muita gente adulta inteira. Contra isso foi um pastorzinho com cinco pedras, dizendo: “A batalha pertence a Jeová.” (1 Samuel 17:5, 45-47)`},{id:`mar`,fase:`mar`,titulo:`Quanta água cabia no “mar de fundição”?`,pergunta:`No templo de Salomão havia um reservatório de cobre chamado “o mar”, que continha 2.000 batos. Um bato são 22 litros. Arraste até a capacidade em litros.`,verso:`1 Reis 7:23-26`,entrada:`slider`,prop:`litros`,rotulo:`Capacidade do “mar”`,suf:` L`,min:4e3,max:8e4,step:1e3,inicial:4e3,medir(e){let t=e===44e3,n=e/22;return{ok:t,litros:e,batos:n,leitura:t?`2.000 × 22 L = 44.000 litros — o equivalente a 44 caixas d’água de mil litros, ou 22 mil garrafas de dois litros. ✔`:`${g(e)} L ÷ 22 L = ${g(Math.round(n))} batos. São 2.000 — ${n<2e3?`falta`:`passou`}.`,erro:`${g(e)} L dá ${g(Math.round(n))} batos. Multiplique 2.000 × 22 L.`}},acerto:`44.000 litros de água, num recipiente de cobre fundido apoiado sobre doze touros. Era ali que os sacerdotes se lavavam — a santidade do serviço a Jeová exigia essa escala.`},{id:`efa`,fase:`efa`,titulo:`Quanto maná cada um recebia?`,pergunta:`No deserto, cada israelita recolhia “um gômer” de maná por dia — 2,2 litros. O gômer é a décima parte de outra medida, a efa. Arraste até quantos gômeres cabem numa efa.`,verso:`Êxodo 16:16, 36`,entrada:`slider`,prop:`gomores`,rotulo:`Gômeres numa efa`,suf:` gômeres`,min:1,max:16,step:1,inicial:1,medir(e){let t=e===10;return{ok:t,gomores:e,litros:e*2.2,leitura:t?`10 × 2,2 L = 22 L, uma efa. E repare no detalhe elegante: a efa (secos) e o bato (líquidos) têm exatamente a mesma capacidade — 22 litros, um décimo do coro. ✔`:`${e} × 2,2 L = ${p(e*2.2)} L. O próprio Êxodo 16:36 diz que o gômer é a DÉCIMA parte da efa.`,erro:`A Bíblia dá a resposta em Êxodo 16:36: o gômer é a décima parte da efa.`}},acerto:`Dez gômeres numa efa: 22 litros. Cada família recolhia conforme o número de pessoas, e Jeová acertava a conta todo dia — “quem tinha recolhido muito não teve demais, e quem tinha recolhido pouco não teve falta”. (Êxodo 16:18)`},{id:`estadio`,fase:`estadio`,titulo:`Que distância eles caminharam?`,pergunta:`No dia da ressurreição, dois discípulos iam de Jerusalém para Emaús, “a uns sessenta estádios” de distância. Um estádio romano são 185 metros. Caminhe com eles pelo mapa e pare exatamente onde fica Emaús.`,verso:`Lucas 24:13`,entrada:`slider`,prop:`estadios`,rotulo:`Estádios caminhados`,suf:` estádios`,min:0,max:70,step:1,inicial:0,medir(e){let t=e===60,n=e*185/1e3,r=n.toLocaleString(`pt-BR`,{maximumFractionDigits:2});return{ok:t,estadios:e,metros:e*185,km:n,leitura:t?`60 × 185 m = 11,1 km — cerca de duas horas e meia de caminhada, e ainda deu para voltar no mesmo dia. ✔`:e===0?`Você ainda está no portão de Jerusalém. Arraste para caminhar.`:`${e} × 185 m = ${r} km. Emaús fica a 60 estádios — ${e<60?`você ainda não chegou`:`você passou do vilarejo`}.`,erro:e>60?`Você andou ${r} km e passou de Emaús. O texto diz “uns sessenta estádios”.`:`${r} km ainda não é Emaús. Cada estádio são 185 m; some 60 deles.`}},acerto:`60 × 185 m = 11,1 km — cerca de duas horas e meia de caminhada. Por isso o relato fecha: eles andaram até Emaús, reconheceram Jesus ao partir do pão e ainda voltaram “naquela mesma hora” a Jerusalém. (Lucas 24:30-33)`}],{comp:`medidas_biblia`,aspecto:`var(--kk-ratio-post)`,dica:`A cena mede junto: mova o controle e veja a medida bíblica encostar no que você conhece.`}),D=[{n:1,ref:`1:10–3:22`,ini:[1,10],fim:[3,22],ramo:null,resumo:`João vê por inspiração o glorificado Jesus, que envia cordiais mensagens de conselho às sete congregações.`},{n:2,ref:`4:1–5:14`,ini:[4,1],fim:[5,14],ramo:`rolo`,resumo:`Uma vista magnífica do trono celestial de Jeová Deus. Este entrega um rolo ao Cordeiro.`},{n:3,ref:`6:1-17`,ini:[6,1],fim:[6,17],ramo:`selos16`,resumo:`Rompendo os primeiros seis selos do rolo, o Cordeiro revela progressivamente uma visão composta de eventos que haviam de ocorrer no dia do Senhor. Os quatro cavaleiros do Apocalipse saem cavalgando, os martirizados escravos de Deus recebem compridas vestes brancas, e se descreve o grande dia de furor.`},{n:4,ref:`7:1-17`,ini:[7,1],fim:[7,17],ramo:`entre67`,resumo:`Anjos seguram os ventos de destruição até que os 144.000 do Israel espiritual sejam selados. Uma grande multidão de todas as nações atribui salvação a Deus e a Cristo, e é ajuntada para sobreviver à grande tribulação.`},{n:5,ref:`8:1–9:21`,ini:[8,1],fim:[9,21],ramo:`selo7`,resumo:`Ao ser aberto o sétimo selo, há sete toques de trombeta, sendo que os primeiros seis constituem a quinta visão. Estes seis toques de trombeta proclamam expressões de julgamento de Jeová sobre a humanidade. A quinta e a sexta trombeta introduzem também o primeiro e o segundo ai.`},{n:6,ref:`10:1–11:19`,ini:[10,1],fim:[11,19],ramo:`tromb7`,resumo:`Um forte anjo dá a João um pequeno rolo, mede-se o templo, e ficamos conhecendo as experiências das duas testemunhas. Culmina com o toque da sétima trombeta, que anuncia o terceiro ai para os inimigos de Deus — a entrada do Reino de Jeová e do seu Cristo.`},{n:7,ref:`12:1-17`,ini:[12,1],fim:[12,17],ramo:null,resumo:`Esta descreve o nascimento do Reino, que resulta em Miguel lançar a serpente, Satanás, para baixo, à Terra.`},{n:8,ref:`13:1-18`,ini:[13,1],fim:[13,18],ramo:null,resumo:`A poderosa fera ascende do mar, e a fera de dois chifres, semelhante a um cordeiro, exorta a humanidade a adorá-la.`},{n:9,ref:`14:1-20`,ini:[14,1],fim:[14,20],ramo:null,resumo:`Uma esplêndida previsão dos 144.000 no Monte Sião. Ouvem-se mensagens angélicas em toda a Terra, ceifa-se a videira da Terra, e pisa-se o lagar da ira de Deus.`},{n:10,ref:`15:1–16:21`,ini:[15,1],fim:[16,21],ramo:`tigelas`,resumo:`Outro vislumbre da corte celestial, seguido pelo derramamento das sete tigelas da ira de Jeová na Terra. Esta seção também termina com uma descrição profética do fim do sistema de Satanás.`},{n:11,ref:`17:1-18`,ini:[17,1],fim:[17,18],ramo:null,resumo:`A grande meretriz, Babilônia, a Grande, monta uma fera cor de escarlate, que por pouco tempo vai ao abismo, mas sai novamente e devasta a meretriz.`},{n:12,ref:`18:1–19:10`,ini:[18,1],fim:[19,10],ramo:null,resumo:`Anuncia-se a queda e derradeira destruição de Babilônia, a Grande. Após a execução dela, alguns a lamentam, outros louvam a Jeová; anuncia-se o casamento do Cordeiro.`},{n:13,ref:`19:11-21`,ini:[19,11],fim:[19,21],ramo:null,resumo:`Jesus lidera os exércitos celestiais na execução do julgamento irado de Deus sobre o sistema de Satanás, seus exércitos e seus apoiadores; aves necrófagas banqueteiam-se dos cadáveres deles.`},{n:14,ref:`20:1-10`,ini:[20,1],fim:[20,10],ramo:null,resumo:`O lançamento de Satanás, o Diabo, no abismo, o Reinado Milenar de Cristo e de seus reis associados, a prova final da humanidade e a destruição de Satanás e seus demônios.`},{n:15,ref:`20:11–21:8`,ini:[20,11],fim:[21,8],ramo:null,resumo:`A ressurreição geral e o grande Dia de Julgamento; surgem um novo céu e uma nova terra, com bênçãos eternas para a humanidade justa.`},{n:16,ref:`21:9–22:5`,ini:[21,9],fim:[22,5],ramo:null,resumo:`O Apocalipse culmina com uma gloriosa visão da Nova Jerusalém, a esposa do Cordeiro. A provisão de Deus para cura e vida da humanidade flui dessa cidade. O Apocalipse conclui com cordiais palavras de saudação e conselho da parte de Jeová, de Jesus, do anjo e do próprio João. O convite que se faz a todos é: “Vem!”`}],Ve={rolo:`Aqui o rolo nasce: Jeová o entrega ao Cordeiro. Tudo o que vem a seguir sai de dentro dele — é a espiral inteira.`,selos16:`A volta de fora da espiral: o Cordeiro rompe os seis primeiros selos. Repare que ainda falta um.`,entre67:`Onde ela cai: 7:1-17 vem depois do sexto selo (capítulo 6) e antes de o sétimo ser aberto (8:1). Ela se encaixa entre os dois.`,selo7:`O encaixe que muda tudo: ao ser aberto, o 7º SELO não traz um evento — traz SETE TROMBETAS. As seis primeiras são esta visão; a quinta e a sexta introduzem o primeiro e o segundo ai. A espiral não termina no selo: ela entra para dentro.`,tromb7:`O encaixe outra vez: a 7ª TROMBETA também não traz um evento — anuncia o terceiro ai, a entrada do Reino de Jeová e do seu Cristo. É o centro da espiral, o miolo do rolo.`,tigelas:`Outra série de sete: as sete tigelas da ira. Mas repare — elas são a 10ª visão, e não saem de dentro dos selos. Nem todo sete do livro está encaixado no rolo.`},He=`Esta visão corre em sequência: ela não se abre em outra série. Siga em frente.`,Ue={arquetipo:`explorar`,criar(){let e={arquetipo:`explorar`,extra:`revelacao`,viz:{comp:`revelacao`,aspecto:`var(--kk-ratio-scene)`,dica:`O rolo aberto: os selos de um lado; ao abrir o 7º, o rolo VIRA nas trombetas.`},valores:{},mapa:D.map(e=>({id:e.n,rotulo:`${e.n}ª`})),ativoMapa:1,vistos:[1]};return{puzzle:e,info:()=>{let t=D.find(t=>t.n===e.ativoMapa)??D[0],n=e.vistos??[],r=D.length-n.length,i=r===0;return t===void 0?{ok:i,leitura:``}:{ok:i,ativo:t.n,vistos:[...n],total:D.length,rotulo:`${t.n}ª`,ref:t.ref,resumo:t.resumo,ramo:t.ramo,visoes:D,encaixe:t.ramo===null?He:Ve[t.ramo]??He,desdobra:t.ramo===`selo7`||t.ramo===`tromb7`,leitura:i?`As 16 visões percorridas. O livro não é uma fila: o 7º selo abre as sete trombetas, e a 7ª trombeta traz o Reino. ✔`:`${n.length} de ${D.length} visões abertas — faltam ${r}.`}},verificar:()=>({...y,mensagem:`Mapa completo — e agora o encaixe do rolo está à vista.`})}}},We=b([{id:`inicio`,fase:`inicio`,titulo:`Onde a contagem começa?`,pergunta:`A árvore enorme do sonho representa o governo de Deus na Terra — exercido pelos reis em Jerusalém, que se assentavam no “trono de Jeová”. Derrubar a árvore é interromper esse governo. Que evento derrubou a árvore?`,verso:`Daniel 4:10-16, 20-22 · 1 Crônicas 29:23`,entrada:`escolha`,opcoes:[{id:`537`,rotulo:`537 AEC`,nota:`Os judeus voltam do exílio na Babilônia.`},{id:`607`,rotulo:`Outubro de 607 AEC`,nota:`Nabucodonosor destrói Jerusalém e destrona o rei.`},{id:`70`,rotulo:`70 EC`,nota:`Roma destrói Jerusalém e o templo.`}],correta:`607`,erros:{537:`A volta do exílio não derrubou nada — e nenhum rei da linhagem de Davi voltou ao trono. Nessa altura a contagem já estava correndo há décadas.`,70:`O ‘pisoteio’ não começou com Roma, em 70 EC. Começou séculos antes, quando os babilônios derrubaram a dinastia de Davi e o trono ficou vago.`},acerto:`Outubro de 607 AEC: Jerusalém cai, o “trono de Jeová” fica vago e a árvore é derrubada. É daqui que a conta parte. (2 Reis 25:1, 8-10)`,encadeia:!0},{id:`tempo`,fase:`tempo`,titulo:`Quanto dura UM “tempo”?`,pergunta:`A Bíblia explica a si mesma. Apocalipse 12:6 mede um período em “1.260 dias”; oito versículos depois, o 12:14 chama o MESMO período de “um tempo, tempos e meio tempo” — isto é, 3½ tempos. Ajuste o tamanho de um “tempo” até os 3½ darem exatamente 1.260 dias.`,verso:`Apocalipse 12:6, 14`,entrada:`slider`,prop:`dias`,rotulo:`Tamanho de um “tempo”`,suf:` dias`,min:300,max:420,step:5,inicial:300,medir(e){let t=3.5*e,n=t===1260;return{ok:n,dias:e,totalDias:t,alvoDias:1260,leitura:n?`3½ × 360 = 1.260 dias — bate exatamente com Apocalipse 12:6. ✔`:`3½ tempos × ${g(e)} dias = ${g(t)} dias. Apocalipse 12:6 diz 1.260 — ${t<1260?`ainda falta`:`passou`}.`,erro:`${g(t)} dias não é 1.260. Pense ao contrário: que número, multiplicado por 3½, dá 1.260?`}},acerto:`1.260 ÷ 3,5 = 360. Um “tempo” profético é um ano de 360 dias — 12 meses de 30. Confere: Apocalipse 11:2, 3 chama esses mesmos 1.260 dias de “42 meses” (42 × 30 = 1.260).`,encadeia:!0},{id:`sete`,fase:`sete`,titulo:`Então quanto são SETE tempos?`,pergunta:`Agora que um “tempo” tem tamanho conhecido, o resto é empilhar. O sonho diz que o toco ficaria preso por “sete tempos”. Some os sete e leia o total.`,verso:`Daniel 4:16, 23`,entrada:`slider`,prop:`tempos`,rotulo:`Tempos empilhados`,suf:` de 7`,min:0,max:7,step:1,inicial:0,medir(e){let t=e*360,n=e===7;return{ok:n,tempos:e,totalDias:t,leitura:n?`7 × 360 = 2.520 dias — exatamente o dobro dos 1.260 (que eram 3½ tempos). ✔`:`${e} ${e===1?`tempo`:`tempos`} × 360 dias = ${g(t)} dias.`,erro:`Daniel 4 fala em SETE tempos — empilhe todos os sete.`}},acerto:`Sete tempos = 7 × 360 = 2.520 dias.`,encadeia:!0},{id:`diaano`,fase:`diaano`,titulo:`2.520 dias… ou 2.520 anos?`,pergunta:`Nabucodonosor de fato passou sete anos sem sanidade — esse foi o cumprimento pequeno. Mas o sonho foi dado “para que os viventes saibam” quem governa, e Jesus ainda falava desses tempos como algo em curso, séculos depois. Meros 2.520 dias após a queda de Jerusalém as nações não largaram o governo. Que medida o cumprimento maior usa?`,verso:`Daniel 4:17, 25 · Lucas 21:24`,entrada:`escolha`,opcoes:[{id:`dias`,rotulo:`2.520 dias`,nota:`Cerca de 7 anos: a conta pararia em 600 AEC.`},{id:`anos`,rotulo:`2.520 anos`,nota:`Um dia representa um ano.`}],correta:`anos`,erros:{dias:`Sete anos depois de 607 AEC estamos em 600 AEC — e as nações continuaram governando sem nenhuma interrupção. O cumprimento maior tem de alcançar muito mais longe.`},acerto:`A Bíblia às vezes usa um dia para representar um ano — “um dia para cada ano” (Números 14:34; Ezequiel 4:6). Aplicando essa regra, os 2.520 dias representam 2.520 ANOS.`,encadeia:!0},{id:`chegada`,fase:`chegada`,titulo:`Onde a conta termina?`,pergunta:`Último passo, e é onde quase todo mundo tropeça. A contagem parte de outubro de 607 AEC e corre 2.520 anos. Arraste o marcador até o total dar exatamente 2.520 — e desconfie da soma direta.`,verso:`Lucas 21:24`,entrada:`slider`,prop:`ano`,rotulo:`Ano de chegada`,suf:` EC`,min:1908,max:1920,step:1,inicial:1908,medir(e){let t=606+e,n=t===2520;return{ok:n,ano:e,anosAec:606,anosEc:e,totalAnos:t,direta:607+e,leitura:n?`Outubro de 1914: 606 + 1.914 = 2.520 anos exatos. ✔`:`606 anos (out/607 AEC → out/1 AEC) + ${g(e)} anos (out/1 AEC → out/${e} EC) = ${g(t)} anos — ${t<2520?`falta`:`passou`} ${g(Math.abs(2520-t))}.`,erro:e===1913?`Quase — e essa é exatamente a armadilha. A soma direta 607 + 1.913 dá 2.520 e parece certa, mas ela conta um “ano zero” que nunca existiu: de 1 AEC passa-se direto para 1 EC. A contagem real dá 2.519. Falta um ano.`:`606 + ${g(e)} = ${g(t)}, e o alvo é 2.520.`}},acerto:`Outubro de 1914 — o fim dos “tempos designados das nações”. Repare no detalhe que derruba tanta gente: 607 + 1.914 = 2.521, e mesmo assim a resposta é 1914. A soma direta erra por um ano justamente porque não existe ano zero.`}],{comp:`sete_tempos`,aspecto:`var(--kk-ratio-scene)`,dica:`A cena acompanha cada passo: mova o controle e veja a conta se formar.`}),O=[{id:`inicio`,estagio:0,rotulo:`O início`,verso:`Gênesis 1:1`,texto:`Os céus e a Terra são criados — o Universo já existia antes dos dias criativos.`,terra:{luz:.15,nuvens:.35,terraFirme:!1,verde:!1,sol:!1,vida:0,humanos:!1}},{id:`escuro`,estagio:1,rotulo:`Escuridão`,verso:`Gênesis 1:2`,texto:`A Terra está coberta de água e envolta em trevas — nenhuma luz chega à superfície.`,terra:{luz:.05,nuvens:.98,terraFirme:!1,verde:!1,sol:!1,vida:0,humanos:!1}},{id:`dia1`,estagio:2,rotulo:`1º dia`,verso:`Gênesis 1:3-5`,texto:`A luz difusa começa a atravessar a atmosfera; separa-se o dia da noite.`,terra:{luz:.5,nuvens:.8,terraFirme:!1,verde:!1,sol:!1,vida:0,humanos:!1}},{id:`dia2`,estagio:3,rotulo:`2º dia`,verso:`Gênesis 1:6-8`,texto:`Forma-se uma expansão (o “Céu”) entre as águas de baixo e o manto de vapor de cima.`,terra:{luz:.6,nuvens:.6,terraFirme:!1,verde:!1,sol:!1,vida:0,humanos:!1}},{id:`dia3`,estagio:4,rotulo:`3º dia`,verso:`Gênesis 1:9-13`,texto:`As águas baixam, surge o solo seco e a vegetação começa a brotar.`,terra:{luz:.75,nuvens:.45,terraFirme:!0,verde:!0,sol:!1,vida:0,humanos:!1}},{id:`dia4`,estagio:5,rotulo:`4º dia`,verso:`Gênesis 1:14-19`,texto:`O céu clareia o bastante para o Sol e a Lua ficarem visíveis da superfície.`,terra:{luz:1,nuvens:.2,terraFirme:!0,verde:!0,sol:!0,vida:0,humanos:!1}},{id:`dia5`,estagio:6,rotulo:`5º dia`,verso:`Gênesis 1:20-23`,texto:`Enchem-se os mares e os céus de criaturas marinhas e de aves.`,terra:{luz:1,nuvens:.18,terraFirme:!0,verde:!0,sol:!0,vida:1,humanos:!1}},{id:`dia6`,estagio:7,rotulo:`6º dia`,verso:`Gênesis 1:24-31`,texto:`Surgem os animais terrestres e, por fim, o primeiro casal humano.`,terra:{luz:1,nuvens:.15,terraFirme:!0,verde:!0,sol:!0,vida:1,humanos:!0}}],Ge={agua:{nome:`Água`,cor:`#3aa0ff`,etapas:[{id:`a1`,icone:`sol`,curto:`Evaporação`,texto:`O Sol evapora a água dos mares e rios, que sobe purificada para a atmosfera.`},{id:`a2`,icone:`nuvem`,curto:`Condensação`,texto:`Lá no alto, o vapor se condensa e forma as nuvens.`},{id:`a3`,icone:`chuva`,curto:`Precipitação`,texto:`As nuvens soltam chuva, granizo ou neve, que volta ao solo — pronta para evaporar de novo.`}]},carbono:{nome:`Carbono e oxigênio`,cor:`#3ba054`,etapas:[{id:`c1`,icone:`humano`,curto:`Você exala`,texto:`Você e os animais exalam gás carbônico (CO₂) a cada respiração.`},{id:`c2`,icone:`planta`,curto:`Fotossíntese`,texto:`As plantas absorvem esse CO₂ e, com a luz do Sol, produzem carboidratos e oxigênio.`},{id:`c3`,icone:`o2`,curto:`Você inala`,texto:`Você inala o oxigênio que as plantas liberam — e o ciclo recomeça.`}]},nitrogenio:{nome:`Nitrogênio`,cor:`#a06fd8`,etapas:[{id:`n1`,icone:`raio`,curto:`Fixação`,texto:`Os raios convertem o nitrogênio do ar (quase 80% da atmosfera) em compostos que as plantas absorvem.`},{id:`n2`,icone:`planta`,curto:`Absorção`,texto:`As plantas transformam esses compostos em moléculas orgânicas; os animais que as comem também absorvem nitrogênio.`},{id:`n3`,icone:`bacteria`,curto:`Decomposição`,texto:`Quando plantas e animais morrem, bactérias os decompõem e devolvem o nitrogênio ao solo e ao ar.`}]}};function Ke(e,t){if(t.length!==e.length)return!1;let n=e.indexOf(t[0]??``);return n<0?!1:t.every((t,r)=>t===e[(n+r)%e.length])}function k(e,t){let n=e[t];return typeof n==`number`&&Number.isFinite(n)?n:0}var qe={arquetipo:`numerico`,criar(e){let t=f(e.resposta,21),r={arquetipo:`numerico`,extra:`sequencia`,viz:{comp:`filotaxia`,dica:`O Sol ilumina de cima: pelo ângulo áureo (137,5°) nenhuma semente faz sombra na outra. Ao acertar, a flor desabrocha em pétalas.`},campos:[{rotulo:n.criacao.proximoNumero,prop:`n`}],valores:{n:0}},i=Array.isArray(e.sequencia)?e.sequencia:[3,5,8,13],a=f(e.angulo,137.5);return{puzzle:r,info:()=>({ok:k(r.valores,`n`)===t,sequencia:i,angulo:a,leitura:``}),verificar:()=>k(r.valores,`n`)===t?y:{tipo:`erro`,mensagem:n.criacao.erro}}}},Je={arquetipo:`escolha`,criar(e){let t=typeof e.correta==`string`?e.correta:`hexagono`,r={arquetipo:`escolha`,viz:{comp:`tesselacao`},valores:{},opcoes:Array.isArray(e.opcoes)?e.opcoes:[{id:`triangulo`,rotulo:`Triângulos`,nota:`encaixam, mas gastam mais material`},{id:`quadrado`,rotulo:`Quadrados`,nota:`encaixam, resistência menor`},{id:`circulo`,rotulo:`Círculos`,nota:`≈ 21,46% de área vazia`},{id:`hexagono`,rotulo:`Hexágonos`,nota:`0% de desperdício, perímetro mínimo`}],escolhido:null};return{puzzle:r,info:()=>({ok:r.escolhido===t,correta:t,leitura:``}),verificar:()=>r.escolhido===null||r.escolhido===void 0?{tipo:`erro`,mensagem:n.criacao.escolha}:r.escolhido===t?y:{tipo:`erro`,mensagem:n.criacao.erro}}}},Ye=v({viz:{comp:`balanca`},preparar(e){let t=Math.max(1,m(e.a,2)),r=m(e.b,3),i=m(e.c,11),a=(i-r)/t;return{params:{a:t,b:r,c:i},controles:[{rotulo:n.criacao.equilValorX,prop:`x`,min:0,max:Math.max(m(e.xMax,10),Math.ceil(a)+2,2),step:1}],valores:{x:m(e.x0,0)}}},medir(e,t){let r=k(e,`x`),i=t.a*r+t.b,a=i===t.c;return{ok:a,esq:i,dir:t.c,x:r,a:t.a,b:t.b,c:t.c,leitura:a?n.criacao.equilOk(t.c):i<t.c?n.criacao.equilPendeDir:n.criacao.equilPendeEsq}}}),Xe={arquetipo:`pares`,criar(e){let t=Array.isArray(e.fitaA)?e.fitaA:[`A`,`T`,`C`,`G`,`A`,`C`,`G`,`T`],r=Array.isArray(e.fitaB)?e.fitaB:[`T`,`A`,`G`,`C`,`T`,`C`,`C`,`A`],i={A:`T`,T:`A`,C:`G`,G:`C`},a=[];t.forEach((e,t)=>{i[e]!==r[t]&&a.push(t)});let o={arquetipo:`pares`,viz:{comp:`dna`},valores:{},colunas:t.map((e,t)=>({a:e,b:r[t]??``})),selecionados:[]},s=()=>{let e=[...o.selecionados??[]].sort((e,t)=>e-t),t=[...a].sort((e,t)=>e-t);return e.length===t.length&&e.every((e,n)=>e===t[n])};return{puzzle:o,info:()=>({ok:s(),erros:a,leitura:``}),verificar:()=>s()?y:{tipo:`erro`,mensagem:n.criacao.paresErro}}}};function Ze(e,t){let n=1/0,r=(i,a,o)=>{if(!(o>=n)){if(i.length===0){let r=a===null?e:t[a];r!==void 0&&(n=Math.min(n,o+h(r,e)));return}for(let n=0;n<i.length;n++){let s=i[n];if(s===void 0)continue;let c=t[s],l=a===null?e:t[a];c!==void 0&&l!==void 0&&r(i.filter((e,t)=>t!==n),s,o+h(l,c))}}};return r(t.map((e,t)=>t),null,0),n===1/0?0:n}var Qe={arquetipo:`rota`,criar(e){let t=(Array.isArray(e.pontos)?e.pontos:[[15,25],[80,15],[50,50],[20,80],[85,75],[55,90]]).map(e=>[f(e[0],0),f(e[1],0)]),r=Array.isArray(e.colmeia)?e.colmeia:[50,8],i=[f(r[0],50),f(r[1],8)],a=Ze(i,t),o=f(e.tol,1.05),s={arquetipo:`rota`,valores:{},pontos:t,colmeia:i,otima:a,ordemPontos:[],dist:0};return{puzzle:s,info:()=>({ok:(s.dist??0)>0&&(s.dist??0)<=a*o,dist:s.dist??0,otima:a,leitura:``}),verificar:()=>(s.ordemPontos??[]).length===t.length?(s.dist??0)<=a*o?{tipo:`ok`,mensagem:n.criacao.rotaOtima}:{tipo:`erro`,mensagem:n.criacao.rotaLonga}:{tipo:`erro`,mensagem:n.criacao.rotaIncompleta}}}};function $e(e){let t=e.pontos??[],n=e.colmeia,r=e.ordemPontos??[];if(n===void 0||r.length===0)return 0;let i=t[r[0]??-1];if(i===void 0)return 0;let a=h(n,i);for(let e=1;e<r.length;e++){let n=t[r[e-1]??-1],i=t[r[e]??-1];n!==void 0&&i!==void 0&&(a+=h(n,i))}if(r.length===t.length){let e=t[r[r.length-1]??-1];e!==void 0&&(a+=h(e,n))}return a}var et={arquetipo:`slider`,criar(e){let t=m(e.alvo,12),n=m(e.lmax,8),r={arquetipo:`slider`,extra:`area`,viz:{comp:`piso`},controles:[{rotulo:`Comprimento`,prop:`c`,min:1,max:n,step:1,suf:` m`},{rotulo:`Largura`,prop:`l`,min:1,max:n,step:1,suf:` m`}],valores:{c:3,l:2}},i=null,a=``;return{puzzle:r,info:()=>{let e=Math.trunc(k(r.valores,`c`)),n=Math.trunc(k(r.valores,`l`)),i=e*n,a=i===t;return{ok:a,area:i,c:e,l:n,alvo:t,leitura:a?`${e} m × ${n} m = ${i} m² — cobre o piso! ✓`:`${e} m × ${n} m = ${i} m²  (meta: ${t} m²)`}},verificar:()=>{let e=Math.trunc(k(r.valores,`c`)),n=Math.trunc(k(r.valores,`l`));if(e*n!==t)return{tipo:`erro`,mensagem:`Ainda não são ${t} m². Ajuste o comprimento e a largura.`};let o=[Math.min(e,n),Math.max(e,n)].join(`x`);return i===null?(i=o,a=`${e} × ${n}`,{tipo:`dica`,mensagem:`Boa! ${e} × ${n} = ${t} m². Agora encontre OUTRO jeito, com medidas diferentes, de cobrir ${t} m².`}):o===i?{tipo:`dica`,mensagem:`Esse é o mesmo retângulo de ${a} (só virado). Tente outras medidas para ${t} m².`}:{tipo:`ok`,mensagem:`Perfeito! ${a} e ${e} × ${n} — dois jeitos de cobrir ${t} m². ✓`}}}}},tt={arquetipo:`ordenar`,criar(){let e={arquetipo:`ordenar`,extra:`linha_criacao`,viz:{comp:`terra_criacao`,aspecto:`var(--kk-ratio-scene)`,dica:n.criacao.girar},valores:{},itens:_(O.map(e=>({id:e.id,texto:e.texto}))),ordem:[]},t=()=>(e.ordem??[]).filter((e,t)=>O[t]?.id===e).length,r=()=>{let t=e.ordem??[];return t.length===O.length&&t.every((e,t)=>O[t]?.id===e)};return{puzzle:e,info:()=>{let n=e.ordem??[],i=n.length>0?O.find(e=>e.id===n[n.length-1])??O[0]:O[0],a=r();return{ok:a,total:O.length,colocados:n.length,certos:t(),estagio:i?.estagio??0,rotulo:i?.rotulo??``,verso:i?.verso??``,terra:i?.terra,leitura:a?`A linha do tempo bate com Gênesis 1 — e com a ordem que a ciência descreve. ✔`:n.length<O.length?`Toque os eventos na ordem em que aconteceram (${n.length}/${O.length}).`:`Todos posicionados — confira a ordem e verifique.`}},verificar:()=>r()?y:{tipo:`erro`,mensagem:`${t()} de ${O.length} no lugar certo — reordene e tente de novo.`}}}},nt={arquetipo:`ciclos`,criar(){let e={};for(let[t,n]of Object.entries(Ge))e[t]={nome:n.nome,cor:n.cor,correta:n.etapas.map(e=>e.id),itens:_(n.etapas.map(e=>({id:e.id,curto:e.curto,texto:e.texto,icone:e.icone}))),ordem:[]};let t={arquetipo:`ciclos`,extra:`ciclos`,viz:{comp:`ciclos`,aspecto:`var(--kk-ratio-scene)`,dica:n.criacao.girar},valores:{},ciclos:e,ativo:`agua`},r=Object.keys(e),i=t=>{let n=e[t];return n!==void 0&&Ke(n.correta,n.ordem)};return{puzzle:t,info:()=>{let n=r.filter(i),a=e[t.ativo??`agua`],o=n.length===r.length;if(a===void 0)return{ok:o,leitura:``};let s=a.ordem.map(e=>a.itens.find(t=>t.id===e));return{ok:o,ativo:t.ativo,cor:a.cor,nome:a.nome,completoAtivo:i(t.ativo??`agua`),seq:s,total:a.itens.length,feitos:n,ids:r,leitura:o?`Os três ciclos fecham — o mesmo ar e a mesma água circulam sem parar. Reciclagem perfeita. ✔`:i(t.ativo??`agua`)?`Ciclo da ${a.nome.toLowerCase()} fechado! Faltam: ${r.filter(e=>!n.includes(e)).map(t=>e[t]?.nome??t).join(`, `)}.`:a.ordem.length<a.itens.length?`Monte o ciclo: toque os estágios na ordem em que a matéria circula (${a.ordem.length}/${a.itens.length}).`:`Todos posicionados — mas a ordem não fecha o laço. Reordene.`}},verificar:()=>{let t=r.filter(i);if(t.length===r.length)return y;let n=r.filter(e=>!t.includes(e)).map(t=>e[t]?.nome??t);return{tipo:`erro`,mensagem:`${t.length} de ${r.length} ciclos fechados — faltam: ${n.join(`, `)}.`}}}}},rt={arquetipo:`solar`,criar(e){let t=f(e.vCirc,29.78),r=f(e.vEsc,42.1),i=f(e.tolV,1.5),a={arquetipo:`solar`,viz:{comp:`solar`},solar:{modo:`lancamento`},resultado:null,controles:[{rotulo:`Velocidade no lançamento`,prop:`v`,min:15,max:50,step:.1,suf:` km/s`}],valores:{v:f(e.v0,18)}},o=()=>a.resultado?.situacao===`estavel`&&Math.abs(k(a.valores,`v`)-t)<=i;return{puzzle:a,info:()=>{let e=a.resultado?.situacao,s=k(a.valores,`v`),c={voando:n.criacao.orbVoando,cai:n.criacao.orbCai,escapa:n.criacao.orbEscapa,estavel:Math.abs(s-t)<=i?`Órbita circular perfeita a ${t} km/s ✔`:s<t?`Órbita elíptica (oval): acelere até ficar circular.`:`Órbita elíptica (oval): desacelere até ficar circular.`},l=e===void 0?n.criacao.orbInforme:c[e]??n.criacao.orbInforme,u=o();return{ok:u,leitura:u?l:`${l}  (circular ${t} · escape ${r} km/s)`}},verificar:()=>o()?{tipo:`ok`,mensagem:`Órbita circular perfeita a ${t} km/s!`}:{tipo:`erro`,mensagem:n.criacao.orbAjuste}}}},it={arquetipo:`solar`,criar(e){let t=f(e.limiar,60),r={arquetipo:`solar`,viz:{comp:`solar`},solar:{modo:`escudo`},extra:`escudo`,controles:[{rotulo:`Intensidade do campo magnético`,prop:`b`,min:0,max:100,step:1,suf:`%`}],valores:{b:f(e.b0,15)}},i=()=>{let e=k(r.valores,`b`)>=t;return{ok:e,leitura:e?n.criacao.escudoOk:n.criacao.escudoFraco}};return{puzzle:r,info:i,verificar:()=>i().ok?y:{tipo:`erro`,mensagem:n.criacao.ajuste}}}},at={arquetipo:`solar`,criar(e){let t=f(e.tol,1),r=(Array.isArray(e.controles)?e.controles:[{rotulo:`Gravidade`,prop:`g`,min:90,max:110,step:.5,suf:`%`},{rotulo:`Distância ao Sol`,prop:`d`,min:90,max:110,step:.5,suf:`%`}]).map(e=>({step:.5,suf:`%`,min:90,max:110,rotulo:``,prop:``,...e})),i={};for(let e of r)i[e.prop]=100;let a={arquetipo:`solar`,viz:{comp:`solar`},solar:{modo:`constantes`},extra:`sandbox`,controles:r,valores:i},o=()=>{let e=r.filter(e=>Math.abs(k(a.valores,e.prop)-100)>t),n=e.length===0;return{ok:n,leitura:n?`Planeta habitável: tudo em equilíbrio ✔`:`Inviável: ${e.map(e=>e.rotulo.toLowerCase()).join(`, `)} fora do ponto exato.`}};return{puzzle:a,info:o,verificar:()=>o().ok?y:{tipo:`erro`,mensagem:n.criacao.ajuste}}}},ot={arquetipo:`pronto`,criar(){return{puzzle:{arquetipo:`pronto`,valores:{}},info:()=>null,verificar:()=>y}}};function A(e,t){let n=e[t];return typeof n==`number`&&Number.isFinite(n)?n:0}var st=v({extra:`vetores`,viz:{comp:`formiga`},preparar(e){let t=Array.isArray(e.vetores)?e.vetores:[[3,4],[-2,5],[1,-3]],n=t.reduce((e,t)=>e+f(t[0],0),0),r=t.reduce((e,t)=>e+f(t[1],0),0),i=Math.hypot(n,r),a=Math.max(2,Math.round(i*1.6));return{params:{sx:n,sy:r,tol:Math.max(.5,i*.08),vetores:t},controles:[{rotulo:`Direção da seta`,prop:`ang`,min:0,max:359,step:1,suf:`°`},{rotulo:`Distância (passos)`,prop:`dist`,min:0,max:a,step:.5}],valores:{ang:0,dist:0}}},medir(e,t){let n=A(e,`ang`)*Math.PI/180,r=t.sx+Math.cos(n)*A(e,`dist`),i=t.sy+Math.sin(n)*A(e,`dist`),a=Math.hypot(r,i),o=a<=t.tol,s=`Volta: ${Math.round(A(e,`dist`))} passos · reta de casa: ${Math.round(Math.hypot(t.sx,t.sy))} passos`;return{ok:o,erro:a,vetores:t.vetores,sx:t.sx,sy:t.sy,leitura:o?`${s} — Em casa! A seta reta é a soma de todos os passos da formiga. ✔`:a<=t.tol*2.5?`${s} — Quase! Ajuste a direção e a distância até a ponta tocar o ninho.`:`${s} — Gire a seta e estique até a ponta pousar no ninho.`}}}),ct=v({extra:`podometro`,viz:{comp:`podometro`},preparar:e=>({params:{alvo:f(e.alvo,100),tol:f(e.tol,4)},controles:[{rotulo:`Tamanho do passo`,prop:`passo`,min:f(e.passoMin,2),max:f(e.passoMax,9),step:.5,suf:` mm`},{rotulo:`Passos dados`,prop:`passos`,min:0,max:m(e.passosMax,60),step:1}],valores:{passo:f(e.passo0,5),passos:m(e.passos0,12)}}),medir(e,t){let n=A(e,`passo`),r=A(e,`passos`),i=n*r,a=Math.abs(i-t.alvo),o=a<=t.tol,s=n<=4?`cotos`:n>=7?`pernas-de-pau`:`normais`,c=`${r} passos × ${n.toFixed(1)} mm = ${Math.round(i)} mm · ninho a ${t.alvo} mm`;return{ok:o,erro:a,regime:s,dist:i,leitura:o?`${c} — No ninho! Distância = passos × tamanho do passo. ✔`:i<t.alvo?`${c} — ${s===`cotos`?`Pernas curtas andam menos: `:``}faltou. Dê mais passos ou alongue o passo.`:`${c} — ${s===`pernas-de-pau`?`Pernas longas andam demais: `:``}passou do ninho. Tire passos ou encurte o passo.`}}}),lt=v({extra:`termica`,viz:{comp:`formiga_prata`},preparar:e=>({params:{ambiente:f(e.ambiente,62),ganho:f(e.ganho,.18),perda:f(e.perda,.14),limite:f(e.limite,53)},controles:[{rotulo:`Reflexão da luz do sol`,prop:`refl`,min:0,max:100,step:1,suf:`%`},{rotulo:`Emissão do próprio calor`,prop:`emis`,min:0,max:100,step:1,suf:`%`}],valores:{refl:m(e.refl0,55),emis:m(e.emis0,55)}}),medir(e,t){let n=A(e,`refl`),r=A(e,`emis`),i=t.ambiente+t.ganho*(100-n)-t.perda*r,a=i<=t.limite,o=t.ambiente-t.perda*r;return{ok:a,temp:i,limite:t.limite,leitura:a?`Corpo a ${i.toFixed(1)} °C (limite ${t.limite} °C) — Sobrevive ao meio-dia do Saara! Refletir o sol E irradiar o calor, juntos. ✔`:o>t.limite?`Corpo a ${i.toFixed(1)} °C — quente demais. Falta IRRADIAR o próprio calor (emissão) para o céu.`:`Corpo a ${i.toFixed(1)} °C — quente demais. Os pelos triangulares precisam REFLETIR mais a luz do sol.`}}}),ut=v({extra:`bio`,viz:{comp:`ra_vidro`},preparar:e=>({params:{alvoTransp:f(e.alvoTransp,89),folgaCoagulo:f(e.folgaCoagulo,12),limiteAnticoag:f(e.limiteAnticoag,95)},controles:[{rotulo:`Hemácias escondidas no fígado`,prop:`armazenado`,min:0,max:100,step:1,suf:`%`},{rotulo:`Ação anticoagulante`,prop:`anticoag`,min:0,max:100,step:1,suf:`%`}],valores:{armazenado:m(e.armaz0,30),anticoag:m(e.anti0,20)}}),medir(e,t){let n=A(e,`armazenado`),r=A(e,`anticoag`),i=n,a=i>=t.alvoTransp,o=r<n-t.folgaCoagulo,s=r>t.limiteAnticoag,c=o?`Transparência ${i}% — ☠ o sangue tão concentrado COAGULOU no fígado. Sem anticoagulante suficiente, isso mataria a rã. Aumente a ação anticoagulante.`:s?`Transparência ${i}% — ☠ anticoagulante DEMAIS: um arranhão não pararia de sangrar. Reduza um pouco.`:a?`Transparência ${i}%, sem coágulos — invisível na folha e viva! Guardar quase todo o sangue sem ele coagular: teve um projeto. ✔`:`Transparência ${i}% — ainda dá para te ver na folha. Esconda mais hemácias no fígado (alvo ${t.alvoTransp}%).`;return{ok:a&&!o&&!s,transp:i,alvo:t.alvoTransp,arm:n,anti:r,coagulo:o,sangramento:s,escondida:a,leitura:c}}}),dt=v({extra:`bio`,viz:{comp:`hemoglobina`},preparar:e=>({params:{alvo:f(e.alvo,50),tol:f(e.tol,8)},controles:[{rotulo:`Força de ligação (afinidade)`,prop:`af`,min:0,max:100,step:1,suf:`%`}],valores:{af:m(e.a0,20)}}),medir(e,t){let n=A(e,`af`),r=Math.round(n/100*400*(1-n/100)),i=Math.abs(n-t.alvo)<=t.tol;return{ok:i,entrega:r,leitura:i?`Entrega de O₂: ${r}% — na medida: carrega no pulmão e solta no tecido. ✔`:n<t.alvo?`Entrega: ${r}% — fraca demais: mal segura o O₂ no pulmão.`:`Entrega: ${r}% — forte demais: agarra o O₂ e não solta no tecido.`}}}),ft=v({extra:`bio`,viz:{comp:`beija_flor`},preparar:e=>({params:{alvo:f(e.alvo,15),tol:f(e.tol,2)},controles:[{rotulo:`Lambidas por segundo`,prop:`fr`,min:2,max:28,step:1,suf:`/s`}],valores:{fr:m(e.f0,4)}}),medir(e,t){let n=A(e,`fr`),r=Math.max(0,Math.round(100*(1-((n-t.alvo)/12)**2))),i=Math.abs(n-t.alvo)<=t.tol;return{ok:i,coleta:r,leitura:i?`Néctar coletado: ${r}% — ritmo perfeito de lambidas. ✔`:n<t.alvo?`Coleta: ${r}% — devagar demais, desperdiça tempo.`:`Coleta: ${r}% — rápido demais, a língua não enche.`}}}),pt=v({extra:`onda`,viz:{comp:`grilo`},preparar:e=>({params:{alvo:f(e.alvo,4.5),tol:f(e.tol,.35)},controles:[{rotulo:`Frequência sintonizada`,prop:`fq`,min:1,max:9,step:.1,suf:` kHz`}],valores:{fq:f(e.f0,1.5)}}),medir(e,t){let n=A(e,`fq`),r=Math.round(100/(1+((n-t.alvo)/.85)**2)),i=Math.abs(n-t.alvo)<=t.tol;return{ok:i,resposta:r,leitura:i?`Ressonância: ${r}% — sintonizado no canto do parceiro. ✔`:`Ressonância: ${r}% — ajuste a frequência até o pico de audição.`}}}),mt=v({extra:`onda`,viz:{comp:`vaga_lume`},preparar:e=>({params:{alvo:f(e.alvo,60),tol:f(e.tol,6)},controles:[{rotulo:`Inclinação das escamas`,prop:`inc`,min:0,max:100,step:1,suf:`°`}],valores:{inc:m(e.i0,12)}}),medir(e,t){let n=A(e,`inc`),r=Math.max(35,Math.round(60+40*(1-((n-t.alvo)/42)**2))),i=Math.abs(n-t.alvo)<=t.tol;return{ok:i,luz:r,leitura:i?`Luz que escapa: ${r}% — inclinação ideal, brilho máximo. ✔`:`Luz que escapa: ${r}% — ajuste a inclinação até o brilho máximo.`}}}),ht=v({extra:`material`,viz:{comp:`pomelo`},preparar:e=>({params:{alvo:f(e.alvo,65),limite:f(e.limite,25)},controles:[{rotulo:`Graduação da espuma da casca`,prop:`gr`,min:0,max:100,step:1,suf:`%`}],valores:{gr:m(e.g0,15)}}),medir(e,t){let n=A(e,`gr`),r=Math.max(0,Math.round(100*(1-((n-t.alvo)/55)**2))),i=100-r,a=i<=t.limite;return{ok:a,forca:i,absorcao:r,leitura:a?`Força na polpa: ${i}% (limite ${t.limite}%) — a fruta sobrevive à queda! ✔`:`Força na polpa: ${i}% — a casca ainda transmite impacto demais. Ajuste a graduação.`}}}),gt=v({extra:`girassol`,viz:{comp:`girassol`},preparar:e=>({params:{alvo:f(e.alvo,137.5),tol:f(e.tol,.3)},controles:[{rotulo:`Ângulo de crescimento`,prop:`ang`,min:130,max:145,step:.1,suf:`°`}],valores:{ang:f(e.ang0,132)}}),medir(e,t){let n=A(e,`ang`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`Empacotamento perfeito: as sementes cobrem o disco sem um buraco — o ângulo áureo (~137,5°) ✔`:n<t.alvo?`Faltam ${p(t.alvo-n)}° — repare as espirais vazias (buracos) entre as sementes.`:`Passou ${p(n-t.alvo)}° — repare as espirais vazias (buracos) entre as sementes.`}}}),_t=v({extra:`martim`,viz:{comp:`martim`},preparar:e=>({params:{alvo:f(e.alvo,80),tol:f(e.tol,6)},controles:[{rotulo:`Afinamento do bico`,prop:`f`,min:0,max:100,step:1,suf:`%`}],valores:{f:f(e.f0,15)}}),medir(e,t){let n=A(e,`f`),r=Math.abs(n-t.alvo)<=t.tol,i=Math.max(0,Math.round(100-n*1.1));return{ok:r,splash:i,leitura:r?`Mergulho sem respingo — o bico fende a água como o nariz do trem-bala ✔`:n<t.alvo?`Respingo: ${i}% — afine mais o bico para entrar sem turbulência.`:`Afinou demais — o bico ficou frágil. Ajuste de volta.`}}}),vt=v({extra:`libelula`,viz:{comp:`libelula`},preparar:e=>({params:{alvo:f(e.alvo,70)},controles:[{rotulo:`Omatídios (facetas do olho)`,prop:`f`,min:1,max:100,step:1,suf:`%`}],valores:{f:f(e.f0,8)}}),medir(e,t){let n=A(e,`f`),r=n>=t.alvo,i=Math.min(100,Math.round(n));return{ok:r,nitidez:i,leitura:r?`Visão nítida! Milhares de omatídios formam uma imagem detalhada ✔`:`Nitidez: ${i}% — aumente as facetas (omatídios) para ver a presa.`}}}),yt=v({extra:`osso`,viz:{comp:`osso`},preparar:e=>({params:{alvoMin:f(e.alvoMin,45),alvoMax:f(e.alvoMax,65)},controles:[{rotulo:`Traves internas (trabéculas)`,prop:`d`,min:0,max:100,step:1,suf:`%`}],valores:{d:f(e.d0,8)}}),medir(e,t){let n=A(e,`d`),r=n>=t.alvoMin&&n<=t.alvoMax,i=(t.alvoMin+t.alvoMax)/2,a=Math.max(0,Math.round(100-Math.abs(n-i)*3));return{ok:r,fpp:a,leitura:n<t.alvoMin?`Frágil: poucas traves, o osso racha (força/peso ${a}%).`:n>t.alvoMax?`Pesado demais: quase maciço, gasta material (força/peso ${a}%).`:`Forte e leve! Trabéculas nas linhas de força — máxima força por peso ✔`}}}),bt=v({extra:`bioluz`,viz:{comp:`bioluz`},preparar:e=>({params:{alvoMin:f(e.alvoMin,55),alvoMax:f(e.alvoMax,78)},controles:[{rotulo:`Brilho do lume (luz fria)`,prop:`b`,min:0,max:100,step:1,suf:`%`}],valores:{b:f(e.b0,15)}}),medir(e,t){let n=A(e,`b`);return{ok:n>=t.alvoMin&&n<=t.alvoMax,leitura:n<t.alvoMin?`Fraco demais: a presa nem percebe (brilho ${n}%).`:n>t.alvoMax?`Forte demais: assusta a presa e gasta energia (brilho ${n}%).`:`No ponto: o brilho atrai a presa — luz fria, quase sem calor ✔`}}}),xt=v({extra:`eco`,viz:{comp:`eco`},preparar:e=>({params:{alvo:f(e.alvo,65),tol:f(e.tol,4),vsom:1500},controles:[{rotulo:`Distância estimada`,prop:`d`,min:0,max:100,step:1,suf:` m`}],valores:{d:f(e.d0,10)}}),medir(e,t){let n=A(e,`d`),r=Math.abs(n-t.alvo)<=t.tol,i=Math.round(2*t.alvo/t.vsom*1e3);return{ok:r,tEco:i,leitura:r?`Presa a ${t.alvo} m! Distância = velocidade do som × tempo ÷ 2 ✔`:`O eco voltou em ~${i} ms. Ajuste a distância até o sonar tocar a presa.`}}}),St=v({extra:`fotossintese`,viz:{comp:`fotossintese`},preparar:e=>({params:{alvo:f(e.alvo,85)},controles:[{rotulo:`Captação da antena de luz`,prop:`c`,min:0,max:100,step:1,suf:`%`}],valores:{c:f(e.c0,12)}}),medir(e,t){let n=A(e,`c`),r=n>=t.alvo,i=Math.min(100,Math.round(n));return{ok:r,efic:i,leitura:r?`A antena entrega quase toda a luz ao centro de reação: a folha produz açúcar e libera O₂ ✔`:`Eficiência ${i}% — parte da luz se perde como calor. Aumente a captação da antena de clorofila.`}}}),Ct=v({extra:`dente_leao`,viz:{comp:`dente_leao`},preparar:e=>({params:{alvo:f(e.alvo,91),tol:f(e.tol,4)},controles:[{rotulo:`Porosidade do papo (cerdas)`,prop:`p`,min:40,max:100,step:1,suf:`%`}],valores:{p:f(e.p0,55)}}),medir(e,t){let n=A(e,`p`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`Anel de vórtice estável: a semente flutua e voa longe ✔`:n<t.alvo-t.tol?`Denso demais: o ar não atravessa, o vórtice some e a semente cai.`:`Ralo demais: o ar escapa, o vórtice não se forma e a semente cai.`}}}),wt=v({extra:`concha`,viz:{comp:`concha`},preparar:e=>({params:{alvo:f(e.alvo,18),tol:f(e.tol,1.2)},controles:[{rotulo:`Fator de crescimento por volta`,prop:`b`,min:0,max:40,step:.5,suf:`%`}],valores:{b:f(e.b0,4)}}),medir(e,t){let n=A(e,`b`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`Espiral logarítmica perfeita: a concha mantém a forma enquanto cresce ✔`:n<t.alvo-t.tol?`Crescimento lento: a espiral fica apertada demais (quase um círculo).`:`Crescimento rápido: a espiral abre demais e perde a forma da concha.`}}}),Tt=v({extra:`planta_noite`,viz:{comp:`planta_noite`},preparar(e){let t=f(e.amido,100),n=f(e.horas,10);return{params:{amido:t,horas:n,alvo:t/n,tol:f(e.tol,.6)},controles:[{rotulo:`Consumo de amido por hora`,prop:`r`,min:2,max:20,step:.5,suf:`/h`}],valores:{r:f(e.r0,4)}}},medir(e,t){let n=A(e,`r`),r=Math.abs(n-t.alvo)<=t.tol,i=t.amido/n;return{ok:r,amido:t.amido,horas:t.horas,leitura:r?`Ritmo certo: ${t.amido} ÷ ${t.horas} h = ${p(t.alvo)}/h — o amido dura até o amanhecer ✔`:n>t.alvo?`Rápido demais: a reserva acaba em ${p(i)} h e a planta passa fome antes do sol.`:`Devagar demais: sobra amido ao amanhecer — crescimento desperdiçado.`}}}),Et=v({extra:`castor`,viz:{comp:`castor`},preparar:e=>({params:{alvoMin:f(e.alvoMin,45),alvoMax:f(e.alvoMax,72)},controles:[{rotulo:`Curvatura da represa (arco)`,prop:`c`,min:0,max:100,step:1,suf:`%`}],valores:{c:f(e.c0,8)}}),medir(e,t){let n=A(e,`c`);return{ok:n>=t.alvoMin&&n<=t.alvoMax,leitura:n<t.alvoMin?`Parede reta demais: a pressão concentra no meio e arromba a represa.`:n>t.alvoMax?`Curva demais: gasta gravetos à toa e a represa fica frágil.`:`Arco perfeito: a curva joga a pressão para as margens e segura a água ✔`}}}),Dt=v({extra:`lingua_gato`,viz:{comp:`lingua_gato`},preparar:e=>({params:{alvoMin:f(e.alvoMin,55),alvoMax:f(e.alvoMax,80)},controles:[{rotulo:`Inclinação das espículas`,prop:`a`,min:0,max:100,step:1,suf:`%`}],valores:{a:f(e.a0,12)}}),medir(e,t){let n=A(e,`a`);return{ok:n>=t.alvoMin&&n<=t.alvoMax,leitura:n<t.alvoMin?`Retas demais: não entram no pelo e o nó continua lá.`:n>t.alvoMax?`Inclinadas demais: prendem e puxam o pelo.`:`No ângulo certo: as espículas desembaraçam o pelo e espalham a saliva ✔`}}}),Ot=v({extra:`bigode_gato`,viz:{comp:`bigode_gato`},preparar:e=>({params:{alvo:f(e.alvo,50),tol:f(e.tol,5)},controles:[{rotulo:`Largura da passagem`,prop:`g`,min:10,max:100,step:1,suf:` cm`}],valores:{g:f(e.g0,92)}}),medir(e,t){let n=A(e,`g`);return{ok:Math.abs(n-t.alvo)<=t.tol,leitura:n>t.alvo+t.tol?`Folga: o gato passa fácil — ache a fresta mais justa em que os bigodes ainda tocam as bordas.`:n<t.alvo-t.tol?`Estreita demais: os bigodes dobram — o gato sabe que NÃO cabe e não tenta.`:`Na medida exata: os bigodes tocam as duas bordas — o gato sente que passa por um triz ✔`}}}),kt=v({extra:`polvo`,viz:{comp:`polvo`},preparar:e=>({params:{alvo:f(e.alvo,60),tol:f(e.tol,6)},controles:[{rotulo:`Ponto da dobra (pseudo-cotovelo)`,prop:`d`,min:0,max:100,step:1,suf:`%`}],valores:{d:f(e.d0,14)}}),medir(e,t){let n=A(e,`d`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`A dobra no ponto certo: a ventosa alcança a presa ✔`:n<t.alvo-t.tol?`A dobra ficou cedo demais: a ponta passa longe da presa.`:`A dobra ficou tarde demais: a ponta passa da presa.`}}}),At=v({extra:`cardume`,viz:{comp:`cardume`},preparar:e=>({params:{alvoMin:f(e.alvoMin,40),alvoMax:f(e.alvoMax,70)},controles:[{rotulo:`Distância de segurança`,prop:`s`,min:0,max:100,step:1,suf:`%`}],valores:{s:f(e.s0,8)}}),medir(e,t){let n=A(e,`s`);return{ok:n>=t.alvoMin&&n<=t.alvoMax,leitura:n<t.alvoMin?`Perto demais: os peixes se chocam.`:n>t.alvoMax?`Longe demais: o cardume se desfaz e cada um vira presa fácil.`:`Distância certa: o cardume flui como um só, sem colisões ✔`}}}),jt=v({extra:`dna_dados`,viz:{comp:`dna_dados`},preparar:e=>({params:{alvo:f(e.alvo,85)},controles:[{rotulo:`Compactação dos dados no DNA`,prop:`k`,min:0,max:100,step:1,suf:`%`}],valores:{k:f(e.k0,8)}}),medir(e,t){let n=A(e,`k`),r=n>=t.alvo;return{ok:r,leitura:r?`Toda a informação cabe num punhado de DNA — densidade insuperável ✔`:`Compactação ${n}% — os dados ainda ocupam prédios de servidores. Aproveite a densidade do DNA.`}}}),Mt=v({extra:`turbina`,viz:{comp:`turbina`},preparar:e=>({params:{alvoMin:f(e.alvoMin,50),alvoMax:f(e.alvoMax,80)},controles:[{rotulo:`Tubérculos no bordo de ataque`,prop:`b`,min:0,max:100,step:1,suf:`%`}],valores:{b:f(e.b0,10)}}),medir(e,t){let n=A(e,`b`),r=n>=t.alvoMin&&n<=t.alvoMax,i=(t.alvoMin+t.alvoMax)/2,a=r?100:Math.max(0,Math.round(100-Math.abs(n-i)*2.4));return{ok:r,pot:a,leitura:n<t.alvoMin?`Poucos tubérculos: o fluxo descola e a pá perde força (potência ${a}%).`:n>t.alvoMax?`Tubérculos demais: viram arrasto e a pá pesa (potência ${a}%).`:`Tubérculos no ponto: o fluxo segue colado e a turbina rende ao máximo ✔`}}}),Nt=v({extra:`sonar`,viz:{comp:`sonar`},preparar:e=>({params:{alvo:f(e.alvo,62),tol:f(e.tol,5)},controles:[{rotulo:`Foco do melão (lente acústica)`,prop:`f`,min:0,max:100,step:1,suf:`%`}],valores:{f:f(e.f0,12)}}),medir(e,t){let n=A(e,`f`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`Feixe focado na presa: o golfinho "vê" pelo som com nitidez ✔`:n<t.alvo-t.tol?`Feixe largo demais: o som se espalha e a imagem fica borrada.`:`Feixe estreito demais: ele converge antes da presa e perde o alvo.`}}}),Pt=v({viz:{comp:`sustentacao`},preparar:e=>({params:{alvoMin:f(e.alvoMin,16),alvoMax:f(e.alvoMax,22)},controles:[{rotulo:`Ângulo de ataque`,prop:`a`,min:0,max:30,step:1,suf:`°`}],valores:{a:f(e.a0,4)}}),medir(e,t){let n=A(e,`a`),r=n>=t.alvoMin&&n<=t.alvoMax,i=n>24,a=i?0:Math.min(100,Math.round(n*4.5));return{ok:r,estol:i,liftPct:a,leitura:i?`Ângulo demais: estol — o fluxo descola e a sustentação cai. (Os tubérculos só adiam o estol, não o impedem.)`:r?`Sustentação máxima (${a}%) — os tubérculos mantêm o fluxo colado mesmo num ângulo alto ✔`:`Sustentação ${a}% — incline mais a nadadeira para ganhar força.`}}}),Ft=v({extra:`cicatrizacao`,viz:{comp:`cicatrizacao`},preparar:e=>({params:{alvoMin:f(e.alvoMin,96)},controles:[{rotulo:`Tempo de cicatrização`,prop:`t`,min:0,max:100,step:1,suf:`%`}],valores:{t:f(e.t0,0)}}),medir(e,t){let n=A(e,`t`);return{ok:n>=t.alvoMin,leitura:n<12?`Corte — a pele se rompe e um vaso sanguíneo se abre.`:n<38?`Hemostasia — os vasos se contraem e as plaquetas formam o coágulo.`:n<62?`Inflamação — os vasos dilatam; glóbulos de defesa limpam a área.`:n<88?`Proliferação — tecido novo, fibras e vasinhos preenchem o ferimento.`:`Remodelação — as fibras se reforçam e fica a cicatriz: reparo completo ✔`}}}),It=v({extra:`gaivota`,viz:{comp:`gaivota`,aspecto:`var(--kk-ratio-photo)`},preparar:e=>({params:{alvoEfic:f(e.alvoEfic,.9),ntuMax:f(e.ntuMax,12),tCorpo:f(e.tCorpo,41),tGelo:f(e.tGelo,4)},controles:[{rotulo:`Comprimento do contato entre os vasos`,prop:`L`,min:0,max:100,step:1,suf:`%`}],valores:{L:m(e.L0,25),arranjo:`mesmo`}}),medir(e,t){let n=Math.max(0,Math.min(100,A(e,`L`))),r=e.arranjo!==`mesmo`,i=n/100*t.ntuMax,a=r?i/(1+i):(1-Math.exp(-2*i))/2,o=r&&a>=t.alvoEfic,s=t.tCorpo-t.tGelo,c=t.tGelo+a*s,l=t.tCorpo-a*s,u=Math.round(a*100);return{ok:o,efic:a,oposto:r,L:n,pct:u,tRetorno:c,tPe:l,tCorpo:t.tCorpo,tGelo:t.tGelo,alvoPct:Math.round(t.alvoEfic*100),leitura:o?`Contato de ${n}% em contracorrente: o sangue volta ao corpo a ${p(c)} °C e recupera ${u}% do calor. Os pés ficam frios e o corpo, quente. ✔`:r?`Direções opostas ✓, mas o contato de ${n}% recupera só ${u}% — alongue o trocador até quase todo o calor voltar.`:`Na MESMA direção o trocador satura em 50%: metade do calor escapa pelos pés, faça o contato que fizer (agora ${u}%). Inverta o sentido.`}}}),Lt={girassol:gt,sequencia:qe,concha:wt,dente_leao:Ct,planta_noite:Tt,fotossintese:St,pomelo:ht,tesselacao:Je,terra:ae,linha_criacao:tt,ciclos_vida:nt,campo:it,vetores:st,podometro:ct,formiga_prata:lt,ra_vidro:ut,beija_flor:ft,grilo:pt,vaga_lume:mt,martim:_t,libelula:vt,bioluz:bt,eco:xt,castor:Et,lingua_gato:Dt,bigode_gato:Ot,polvo:kt,cardume:At,turbina:Mt,sonar:Nt,gaivota:It,sustentacao:Pt,rotas:Qe,dna_dados:jt,hemoglobina:dt,osso:yt,cicatrizacao:Ft,proteina:de,pareamento:Xe,equacao:se,funcao:ce,harmonia:Ye,area:et,desconto:oe,bilhar:ve,musica:_e,fractal:be,orbita:rt,conica:fe,fluxo:pe,difracao:ge,ondas:me,atomo:he,microscopio:le,relatividade:ue,universo_escuro:xe,elementos:ye,sandbox:at,carbono:Re,sete_tempos:We,revelacao:Ue,medidas_biblia:Be,dinheiro_biblia:ze,trajetoria_biblia:ie};function Rt(e){return Lt[e]??ot}var zt={carbono:()=>l(()=>import(`./carbono-D_m3KaZM.js`),__vite__mapDeps([0,1,2]),import.meta.url),dinheiro_biblia:()=>l(()=>import(`./dinheiro-biblia-LipncDMN.js`),__vite__mapDeps([3,1,2]),import.meta.url),medidas_biblia:()=>l(()=>import(`./medidas-biblia-RStIT3Ua.js`),__vite__mapDeps([4,1,2]),import.meta.url),revelacao:()=>l(()=>import(`./revelacao-CydzDYKQ.js`),__vite__mapDeps([5,1,2]),import.meta.url),sete_tempos:()=>l(()=>import(`./sete-tempos-e1oFOJyp.js`),__vite__mapDeps([6,1,2]),import.meta.url),trajetoria_biblia:()=>l(()=>import(`./trajetoria-biblia-DPvDRPV6.js`),__vite__mapDeps([7,8,9,10,1,2]),import.meta.url),balanca:()=>l(()=>import(`./balanca-BKbdKXGh.js`),__vite__mapDeps([11,1,2]),import.meta.url),bilhar:()=>l(()=>import(`./bilhar-DyYIO0jw.js`),__vite__mapDeps([12,1,2]),import.meta.url),desconto:()=>l(()=>import(`./desconto-DyKycRap.js`),__vite__mapDeps([13,1,2]),import.meta.url),difracao:()=>l(()=>import(`./difracao-CruwC7aB.js`),__vite__mapDeps([14,1,2]),import.meta.url),fractal:()=>l(()=>import(`./fractal-B0CQQ61D.js`),__vite__mapDeps([15,1,2]),import.meta.url),funcao:()=>l(()=>import(`./funcao-o2LKR-mm.js`),__vite__mapDeps([16,1,2]),import.meta.url),ondas:()=>l(()=>import(`./ondas-NeA0_Mko.js`),__vite__mapDeps([17,1,2]),import.meta.url),asa:()=>l(()=>import(`./asa-Btc2R3t_.js`),__vite__mapDeps([18,1,2]),import.meta.url),cicatrizacao:()=>l(()=>import(`./cicatrizacao-Bwtq5dDM.js`),__vite__mapDeps([19,1,2]),import.meta.url),dna:()=>l(()=>import(`./dna-CLmu9Gvs.js`),__vite__mapDeps([20,1,2]),import.meta.url),fluxo:()=>l(()=>import(`./fluxo-CfC00iCO.js`),__vite__mapDeps([21,1,2]),import.meta.url),formiga:()=>l(()=>import(`./formiga-ChUBS472.js`),__vite__mapDeps([22,1,2]),import.meta.url),proteina:()=>l(()=>import(`./proteina-D2sEXoIT.js`),__vite__mapDeps([23,1,2]),import.meta.url),ra_vidro:()=>l(()=>import(`./ra-vidro-B8sFS6XW.js`),__vite__mapDeps([24,1,2]),import.meta.url),sustentacao:()=>l(()=>import(`./sustentacao-BZIc4e5u.js`),__vite__mapDeps([25,1,2]),import.meta.url),atomo:()=>l(()=>import(`./atomo-DmAOk_h4.js`),__vite__mapDeps([26,1,2]),import.meta.url),elementos:()=>l(()=>import(`./elementos-BhRPbw8f.js`),__vite__mapDeps([27,1,2]),import.meta.url),lente:()=>l(()=>import(`./lente-yi_aTv23.js`),__vite__mapDeps([28,1,2]),import.meta.url),microscopio:()=>l(()=>import(`./microscopio-CPsPMv98.js`),__vite__mapDeps([29,1,2]),import.meta.url),musica:()=>l(()=>import(`./musica-CmO4irUH.js`),__vite__mapDeps([30,31,9,10,1,2]),import.meta.url),relatividade:()=>l(()=>import(`./relatividade-BQG9rG5K.js`),__vite__mapDeps([32,1,2]),import.meta.url),solar:()=>l(()=>import(`./solar-CM8yhT3-.js`),__vite__mapDeps([33,1,2]),import.meta.url),universo_escuro:()=>l(()=>import(`./universo-escuro-B8Vju6Td.js`),__vite__mapDeps([34,1,2]),import.meta.url),ciclos:()=>l(()=>import(`./ciclos-gW6656Ru.js`),__vite__mapDeps([35,1,2]),import.meta.url),concha:()=>l(()=>import(`./concha-CYW8ClBf.js`),__vite__mapDeps([36,1,2]),import.meta.url),dente_leao:()=>l(()=>import(`./dente-leao-BfQnDDtW.js`),__vite__mapDeps([37,1,2]),import.meta.url),filotaxia:()=>l(()=>import(`./filotaxia-DofE_VPS.js`),__vite__mapDeps([38,39,40,41,42,43,44,9,45,46,47,48,1,49,50,51,52,53,54]),import.meta.url),fotossintese:()=>l(()=>import(`./fotossintese-DxhqXP_w.js`),__vite__mapDeps([55,1,2]),import.meta.url),girassol:()=>l(()=>import(`./girassol-CZRjXisk.js`),__vite__mapDeps([56,39,40,41,42,43,44,9,45,46,47,48,1,49,50,51,52,53,54]),import.meta.url),planta_noite:()=>l(()=>import(`./planta-noite-zAOcP5Cm.js`),__vite__mapDeps([57,1,2]),import.meta.url),pomelo:()=>l(()=>import(`./pomelo-BD2xLgcE.js`),__vite__mapDeps([58,1,2]),import.meta.url),terra3d:()=>l(()=>import(`./terra3d-Bxr3jfLn.js`),__vite__mapDeps([59,1,2,60]),import.meta.url),terra_criacao:()=>l(()=>import(`./terra-criacao-__ONaz2e.js`),__vite__mapDeps([61,1,2,60]),import.meta.url),tesselacao:()=>l(()=>import(`./tesselacao-OAhrdgQG.js`),__vite__mapDeps([62,1,2]),import.meta.url),beija_flor:()=>l(()=>import(`./beija-flor-CJZ24MdL.js`),__vite__mapDeps([63,1,2]),import.meta.url),bigode_gato:()=>l(()=>import(`./bigode-gato-gZBj2QyT.js`),__vite__mapDeps([64,1,2]),import.meta.url),bioluz:()=>l(()=>import(`./bioluz-gAIyzMBB.js`),__vite__mapDeps([65,1,2]),import.meta.url),cardume:()=>l(()=>import(`./cardume-BedonEOl.js`),__vite__mapDeps([66,1,2]),import.meta.url),castor:()=>l(()=>import(`./castor-CcoMr3WU.js`),__vite__mapDeps([67,1,2]),import.meta.url),dna_dados:()=>l(()=>import(`./dna-dados-4_7JzWTy.js`),__vite__mapDeps([68,1,2]),import.meta.url),eco:()=>l(()=>import(`./eco-BS8NizcT.js`),__vite__mapDeps([69,1,2]),import.meta.url),formiga_prata:()=>l(()=>import(`./formiga-prata-Bs4smPgz.js`),__vite__mapDeps([70,1,2]),import.meta.url),gaivota:()=>l(()=>import(`./gaivota-VlNU_Bjj.js`),__vite__mapDeps([71,1,2]),import.meta.url),grilo:()=>l(()=>import(`./grilo-BHsiJuO-.js`),__vite__mapDeps([72,1,2]),import.meta.url),libelula:()=>l(()=>import(`./libelula-DlBGijWE.js`),__vite__mapDeps([73,1,2]),import.meta.url),lingua_gato:()=>l(()=>import(`./lingua-gato-BYOenw0l.js`),__vite__mapDeps([74,1,2]),import.meta.url),martim:()=>l(()=>import(`./martim-BaGftDXK.js`),__vite__mapDeps([75,1,2]),import.meta.url),piso:()=>l(()=>import(`./piso-CjW0R7zm.js`),__vite__mapDeps([76,1,2]),import.meta.url),podometro:()=>l(()=>import(`./podometro-19Lid-jf.js`),__vite__mapDeps([77,1,2]),import.meta.url),polvo:()=>l(()=>import(`./polvo-CXSleEH4.js`),__vite__mapDeps([78,1,2]),import.meta.url),sonar:()=>l(()=>import(`./sonar-sH1_XorD.js`),__vite__mapDeps([79,1,2]),import.meta.url),turbina:()=>l(()=>import(`./turbina-vksPynnn.js`),__vite__mapDeps([80,1,2]),import.meta.url),vaga_lume:()=>l(()=>import(`./vaga-lume-DJ_VlGv3.js`),__vite__mapDeps([81,1,2]),import.meta.url),hemoglobina:()=>l(()=>import(`./hemoglobina-CKjSM_ez.js`),__vite__mapDeps([82,1,2]),import.meta.url),osso:()=>l(()=>import(`./osso-KlpdClp9.js`),__vite__mapDeps([83,1,2]),import.meta.url)};async function Bt(e){let t=zt[e];if(t!==void 0)try{return(await t()).default}catch{return}}var j=[],M=w(),N=new Map,Vt=!1,P=!1,F=null,I=-1,L=!1,R=!1,z=``,B=``,V=``,H=null,U=!1,W=null,G=!1,Ht=re();function Ut(){Vt||P||(P=!0,(async()=>{try{[j,N]=await Promise.all([De(),Pe()]),M=Ae(),Vt=!0}finally{P=!1,c()}})())}function Wt(e){return j.find(t=>t.id===e)}function Gt(e){return j.filter(t=>S(e).inclui(t))}function Kt(e){return e?.id!==void 0&&T(M,e)&&(N.get(e.id)??``).trim()!==``}function qt(e){return F!==null&&I===e.id?F:(rn(),F=Rt(e.tipo).criar(ke(e)),I=e.id??-1,L=!1,R=!1,z=``,B=``,V=e.id===void 0?``:N.get(e.id)??``,F)}function Jt(){rn(),F=null,I=-1,L=!1,R=!1,z=``,B=``}function Yt(e){switch(e.arquetipo){case`numerico`:return(e.campos??[]).every(t=>{let n=e.valores[t.prop];return n!==void 0&&n!==``});case`escolha`:return e.escolhido!==null&&e.escolhido!==void 0;case`pares`:return(e.selecionados?.length??0)>0;case`rota`:return(e.pontos?.length??0)>0&&(e.ordemPontos?.length??0)===(e.pontos?.length??0);case`ordenar`:return(e.ordem?.length??0)===(e.itens?.length??0);case`ciclos`:return Object.values(e.ciclos??{}).every(e=>e.ordem.length===e.itens.length);case`etapas`:return(e.passos??[])[e.atual??0]?.entrada!==`escolha`||e.escolhido!==null&&e.escolhido!==void 0;case`explorar`:return(e.vistos?.length??0)===(e.mapa?.length??0);case`solar`:return e.solar?.modo!==`lancamento`||e.resultado!==null&&e.resultado!==void 0&&e.resultado.situacao!==`voando`;default:return!0}}function K(e){return e.resultado?.situacao===`voando`}function Xt(e,t){if(L)return;let r=t.verificar();r.tipo===`avanco`?(z=``,B=``):r.tipo===`ok`?(L=!0,B=`ok`,z=r.mensagem??n.criacao.acerto,Zt(e)):(B=r.tipo,z=r.mensagem??n.criacao.erro),q(t),c()}function Zt(e){R||e.id===void 0||(M=Me(M,e.id),R=!0)}function Qt(e){L=!0,Zt(e),c()}var $t;function en(e){clearTimeout($t),$t=setTimeout(()=>{(async()=>{if(e.id===void 0)return;let t=V.trim();t===``?(await o(Ne(e.id)),N.delete(e.id)):(await i({origem:`criacao`,referencia:e.titulo,titulo:`${S(e.categoria===`entenda`?`entenda`:`criacao`).titulo} — ${e.titulo}`,conteudo:t,ref_chave:Ne(e.id)}),N.set(e.id,t)),c()})()},500)}function tn(e){let t=e.puzzle;return{info:e.info(),valores:t.valores,escolhido:t.escolhido,selecionados:t.selecionados,ordem:t.ordem,ordemPontos:t.ordemPontos,colunas:t.colunas,pontos:t.pontos,colmeia:t.colmeia,itens:t.itens,ciclos:t.ciclos,ativo:t.ativo,ativoMapa:t.ativoMapa,vistos:t.vistos,resultado:t.resultado,extra:t.extra,resolvido:L}}function nn(e){let t=Ht.value,n=e.puzzle.viz?.comp;t===void 0||n===void 0||W!==null||G||(G=!0,(async()=>{try{let r=await Bt(n);if(r===void 0||F!==e||!t.isConnected)return;W=r(t,{...e.puzzle.solar===void 0?{}:{modo:e.puzzle.solar.modo},aoAtualizar:t=>{e.puzzle.vizDados={...t},c()},aoMudarEstado:t=>{e.puzzle.resultado={...t},c()}}),W.aplicar?.(tn(e))}finally{G=!1}})())}function rn(){W?.destruir(),W=null}function q(e){W?.aplicar?.(tn(e))}function J(e,t){let n=e.valores[t];return typeof n==`number`?n:0}function Y(e,t,n){e.puzzle.valores[t]=n,z=``,B=``,q(e),c()}function X(n){return n===null||n.leitura===``?t:e`<p class="criacao__leitura ${n.ok?`criacao__leitura--ok`:``}">${n.leitura}</p>`}function an(r){return e`
    <button class="criacao__cartao" @click=${()=>s(`${Z(r)}/${r.id}`)}>
      <kk-icon class="criacao__icone" name=${on(r)}></kk-icon>
      <span class="criacao__titulo">${r.titulo}</span>
      <span class="criacao__selos">
        ${T(M,r)?e`<kk-icon name="check" class="criacao__selo criacao__selo--ok"></kk-icon>`:t}
        ${Kt(r)?e`
              <kk-icon
                name="school"
                class="criacao__selo criacao__selo--diligente"
                title=${n.criacao.diligenteSelo}
              ></kk-icon>
            `:t}
      </span>
    </button>
  `}function on(e){return e.icone===``?e.categoria===`entenda`?`bulb`:`compass`:e.icone}function Z(e){return e.categoria===`entenda`?`entenda`:`criacao`}function sn(t){return e`
    <section class="criacao__grupo">
      <div class="criacao__grade">${t.modulos.map(an)}</div>
    </section>
  `}function cn(n,r){return e`
    <kk-details class="criacao__secao" name="criacao-categorias" ?open=${r}>
      <span slot="summary" class="criacao__categoria">
        ${n.rotulo}
        ${n.concluida?e`<kk-icon name="rosette-discount-check"></kk-icon>`:t}
      </span>
      <div class="criacao__grade">${n.modulos.map(an)}</div>
    </kk-details>
  `}function ln(t){let r=Gt(t),i=r.filter(e=>T(M,e)).length,a=r.length>0?Math.round(i/r.length*100):0;if(r.length===0)return e`<p class="vazio">${P?n.app.carregando:n.criacao.vazio}</p>`;let o=S(t).agrupado,s=Oe(r,e=>T(M,e)),c=Math.max(s.findIndex(e=>!e.concluida),0);return e`
    <div class="criacao">
      <p class="criacao__subtitulo">${S(t).subtitulo}</p>

      <div class="criacao__progresso">
        <kk-progress-bar value=${a}></kk-progress-bar>
        <span class="criacao__contagem">${i}/${r.length}</span>
      </div>

      ${o?e`
            <kk-accordion class="criacao__categorias">
              ${s.map((e,t)=>cn(e,t===c))}
            </kk-accordion>
          `:s.map(sn)}
    </div>
  `}function un(r){return e`
    <div class="criacao">
      <article class="criacao__bloco">
        <h2 class="criacao__secao">${n.criacao.conceito}</h2>
        <div class="prosa">${d(r.conceito)}</div>

        ${r.imagem===``?t:e`
              <figure class="criacao__figura">
                <img
                  src=${`imagens/${r.imagem}`}
                  alt=${r.titulo}
                  loading="lazy"
                  @click=${()=>{H=r.imagem,U=!1,c()}}
                />
                <figcaption>${n.criacao.ampliar}</figcaption>
              </figure>
            `}
      </article>

      <article class="criacao__bloco criacao__bloco--desafio">
        <h2 class="criacao__secao">${n.criacao.desafio}</h2>
        <div class="prosa">${d(r.desafio)}</div>
      </article>

      ${r.link_jw===``?t:e`
            <p class="criacao__fonte">
              <a href=${r.link_jw} target="_blank" rel="noopener">${n.criacao.fonte}</a>
            </p>
          `}

      <p class="criacao__dica">${n.criacao.diligenteDica}</p>

      <kk-button variant="primary" @click=${()=>s(`${Z(r)}/${r.id}/jogar`)}>
        ${n.criacao.comecar}
      </kk-button>
    </div>
  `}function dn(n){let r=n.puzzle,i=L||K(r);return e`
    ${(r.controles??[]).map(a=>e`
        <div class="criacao__controle">
          <label class="criacao__rotulo">
            <span>${a.rotulo}</span>
            <strong>${J(r,a.prop)}${a.suf??``}</strong>
          </label>

          ${a.botoes===!0?e`
                <div class="criacao__passos">
                  <kk-button
                    ?disabled=${i||J(r,a.prop)<=a.min}
                    @click=${()=>Y(n,a.prop,Math.max(a.min,J(r,a.prop)-a.step))}
                  >−</kk-button>
                  <span class="criacao__valor">${J(r,a.prop)}${a.suf??``}</span>
                  <kk-button
                    variant="primary"
                    ?disabled=${i||J(r,a.prop)>=a.max}
                    @click=${()=>Y(n,a.prop,Math.min(a.max,J(r,a.prop)+a.step))}
                  >+</kk-button>
                </div>
              `:t}

          <input
            type="range"
            min=${a.min}
            max=${a.max}
            step=${a.step}
            .value=${String(J(r,a.prop))}
            ?disabled=${i}
            @input=${e=>Y(n,a.prop,Number(e.target.value))}
          />
        </div>
      `)}
  `}function fn(t){let r=t.puzzle,i=t.info(),a=Array.isArray(i?.sequencia)?i.sequencia:[];if(r.extra===`sequencia`){let i=J(r,`n`);return e`
      <div class="criacao__sequencia">
        ${a.map(t=>e`<span class="criacao__numero">${t}</span>`)}
        <span class="criacao__numero criacao__numero--alvo">${i>0?i:`?`}</span>
      </div>
      <div class="criacao__controle">
        <label class="criacao__rotulo">
          <span>${n.criacao.proximoNumero}</span><strong>${i}</strong>
        </label>
        <input
          type="range"
          min="0"
          max="50"
          step="1"
          .value=${String(i)}
          ?disabled=${L}
          @input=${e=>Y(t,`n`,Number(e.target.value))}
        />
      </div>
    `}return e`
    ${(r.campos??[]).map(n=>e`
        <kk-input
          label=${n.rotulo}
          type="number"
          ?disabled=${L}
          .value=${String(r.valores[n.prop]??``)}
          @kk-input=${e=>Y(t,n.prop,Number(e.target.value))}
        ></kk-input>
      `)}
  `}function pn(n){let r=n.puzzle;return e`
    <div class="criacao__opcoes">
      ${(r.opcoes??[]).map(i=>e`
          <button
            class="criacao__opcao ${r.escolhido===i.id?`criacao__opcao--ativa`:``}"
            ?disabled=${L}
            @click=${()=>{r.escolhido=i.id,z=``,q(n),c()}}
          >
            <strong>${i.rotulo}</strong>
            ${i.nota===void 0?t:e`<small>${i.nota}</small>`}
          </button>
        `)}
    </div>
  `}function mn(t){let r=t.puzzle,i=r.selecionados??[];return e`
    <p class="criacao__dica">${n.criacao.paresDica}</p>
    <div class="criacao__fita">
      ${(r.colunas??[]).map((n,r)=>e`
          <button
            class="criacao__base ${i.includes(r)?`criacao__base--marcada`:``}"
            ?disabled=${L}
            @click=${()=>{let e=i.indexOf(r);e>=0?i.splice(e,1):i.push(r),q(t),c()}}
          >
            <span>${n.a}</span><span class="criacao__ligacao">·</span><span>${n.b}</span>
          </button>
        `)}
    </div>
  `}function hn(t){let r=t.puzzle,i=r.ordemPontos??[],a=r.colmeia??[50,8],o=r.pontos??[],s=[a,...i.map(e=>o[e]??a)];i.length===o.length&&i.length>0&&s.push(a);let l=i.length>0?o[i[i.length-1]??0]??a:a;return e`
    <p class="criacao__dica">${n.criacao.rotaDica}</p>
    <div class="criacao__campo">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          points=${s.map(e=>`${e[0]},${e[1]}`).join(` `)}
          class=${L?`criacao__trilha criacao__trilha--ok`:`criacao__trilha`}
        ></polyline>
      </svg>

      <span class="criacao__colmeia" style=${`left:${a[0]}%;top:${a[1]}%`}>🍯</span>

      ${o.map((n,a)=>e`
          <button
            class="criacao__flor ${i.includes(a)?`criacao__flor--visitada`:``}"
            style=${`left:${n[0]}%;top:${n[1]}%`}
            ?disabled=${L}
            @click=${()=>{let e=i.indexOf(a);e>=0?i.splice(e,1):i.push(a),r.dist=$e(r),q(t),c()}}
          >
            ${i.includes(a)?i.indexOf(a)+1:`🌸`}
          </button>
        `)}

      <span class="criacao__abelha" style=${`left:${l[0]}%;top:${l[1]}%`}>🐝</span>
    </div>

    <div class="criacao__medida">
      <span>${n.criacao.rotaMedida(Math.round(r.dist??0),Math.round(r.otima??0))}</span>
      <kk-button
        size="small"
        ?disabled=${L}
        @click=${()=>{r.ordemPontos=[],r.dist=0,z=``,q(t),c()}}
      >${n.criacao.recomecar}</kk-button>
    </div>
  `}function gn(t){let r=t.puzzle,i=r.ordem??[];return e`
    <div class="criacao__cabecalho-lista">
      <p class="criacao__dica">${n.criacao.ordenarDica}</p>
      <kk-button
        size="small"
        ?disabled=${L||i.length===0}
        @click=${()=>{r.ordem=[],z=``,q(t),c()}}
      >${n.criacao.recomecar}</kk-button>
    </div>

    <div class="criacao__cards">
      ${(r.itens??[]).map(n=>e`
          <button
            class="criacao__card ${i.includes(n.id)?`criacao__card--posto`:``}"
            ?disabled=${L}
            @click=${()=>{let e=i.indexOf(n.id);e>=0?i.splice(e,1):i.push(n.id),z=``,q(t),c()}}
          >
            <span class="criacao__ordem">${i.indexOf(n.id)+1||`+`}</span>
            <span>${n.texto}</span>
          </button>
        `)}
    </div>

    ${X(t.info())}
  `}function _n(t){let r=t.puzzle,i=r.ciclos??{},a=i[r.ativo??`agua`];return a===void 0?e``:e`
    <div class="criacao__abas">
      ${Object.entries(i).map(([n,i])=>e`
          <button
            class="criacao__aba ${r.ativo===n?`criacao__aba--ativa`:``}"
            ?disabled=${L}
            @click=${()=>{r.ativo=n,q(t),c()}}
          >
            ${i.nome}
          </button>
        `)}
    </div>

    <div class="criacao__cabecalho-lista">
      <span></span>
      <kk-button
        size="small"
        ?disabled=${L||a.ordem.length===0}
        @click=${()=>{a.ordem=[],z=``,q(t),c()}}
      >${n.criacao.ciclosRecomecar}</kk-button>
    </div>

    <div class="criacao__cards">
      ${a.itens.map(n=>e`
          <button
            class="criacao__card ${a.ordem.includes(n.id)?`criacao__card--posto`:``}"
            ?disabled=${L}
            @click=${()=>{let e=a.ordem.indexOf(n.id);e>=0?a.ordem.splice(e,1):a.ordem.push(n.id),z=``,q(t),c()}}
          >
            <span class="criacao__ordem">${a.ordem.indexOf(n.id)+1||`+`}</span>
            <span>
              <strong>${n.curto}</strong>
              <small>${n.texto}</small>
            </span>
          </button>
        `)}
    </div>

    ${X(t.info())}
  `}function vn(n){let r=n.puzzle,i=r.passos??[],a=r.atual??0,o=i[a];return o===void 0?e``:e`
    <div class="criacao__trilha-passos">
      ${i.map((t,n)=>e`
          <span
            class="criacao__degrau ${n<a?`criacao__degrau--feito`:n===a?`criacao__degrau--atual`:``}"
          ></span>
        `)}
      <span class="criacao__contagem">${a+1}/${i.length}</span>
    </div>

    ${r.conclusao===null||r.conclusao===void 0?t:e`
          <div class="criacao__conclusao">
            <strong>${r.conclusaoTitulo}</strong>
            <p>${r.conclusao}</p>
          </div>
        `}

    <h2 class="criacao__passo-titulo">${o.titulo}</h2>
    <p class="criacao__passo-pergunta">${o.pergunta}</p>
    <p class="criacao__verso">${o.verso}</p>

    ${o.entrada===`escolha`?e`
          <div class="criacao__opcoes">
            ${(o.opcoes??[]).map(i=>e`
                <button
                  class="criacao__opcao ${r.escolhido===i.id?`criacao__opcao--ativa`:``}"
                  ?disabled=${L}
                  @click=${()=>{r.escolhido=i.id,z=``,q(n),c()}}
                >
                  <strong>${i.rotulo}</strong>
                  ${i.nota===void 0?t:e`<small>${i.nota}</small>`}
                </button>
              `)}
          </div>
        `:e`
          <div class="criacao__controle">
            <label class="criacao__rotulo">
              <span>${o.rotulo}</span>
              <strong>${J(r,o.prop??``)}${o.suf??``}</strong>
            </label>
            <input
              type="range"
              min=${o.min??0}
              max=${o.max??100}
              step=${o.step??1}
              .value=${String(J(r,o.prop??``))}
              ?disabled=${L}
              @input=${e=>Y(n,o.prop??``,Number(e.target.value))}
            />
          </div>
          ${X(n.info())}
        `}
  `}function yn(r){let i=r.puzzle,a=r.info();if(a===null)return e``;let o=i.vistos??[];return e`
    <div class="criacao__cabecalho-lista">
      <span class="criacao__contagem ${a.ok?`criacao__contagem--ok`:``}">
        ${o.length}/${i.mapa?.length??0} ${n.criacao.visoes}
      </span>
      <span class="criacao__dica">${n.criacao.explorarDica}</span>
    </div>

    <div class="criacao__mapa">
      ${(i.mapa??[]).map(t=>e`
          <button
            class="criacao__ponto ${i.ativoMapa===t.id?`criacao__ponto--ativo`:o.includes(t.id)?`criacao__ponto--visto`:``}"
            @click=${()=>{L||(i.ativoMapa=t.id,o.includes(t.id)||o.push(t.id),z=``,q(r),c())}}
          >
            ${t.rotulo}
          </button>
        `)}
    </div>

    <article class="criacao__visao">
      <header>
        <span class="criacao__contagem">${String(a.rotulo)} visão</span>
        <span class="criacao__verso">Apocalipse ${String(a.ref)}</span>
        ${a.desdobra===!0?e`<span class="criacao__desdobra">${n.criacao.explorarDesdobra}</span>`:t}
      </header>
      <p>${String(a.resumo)}</p>
      <p class="criacao__encaixe ${a.desdobra===!0?`criacao__encaixe--forte`:``}">
        ${String(a.encaixe)}
      </p>
    </article>

    ${X(a)}
  `}function bn(r){let i=r.puzzle;return e`
    ${i.solar?.modo===`lancamento`?e`
          <kk-button
            variant="primary"
            ?disabled=${L||K(i)}
            @click=${()=>{i.resultado={situacao:`voando`},W?.lancar?.({...i.valores}),c()}}
          >${K(i)?n.criacao.orbVoando:n.criacao.lancar}</kk-button>
        `:t}
    ${dn(r)}
    ${X(r.info())}
  `}function xn(r){let i=r.info(),a=r.puzzle.viz?.comp;if(i===null)return t;if(a===`proteina`){let a=i.relogio,o=r.puzzle.vizDados;return e`
      <div class="criacao__painel">
        <span class="criacao__marca">
          ${n.criacao.proteinaRecorde}: ${o?.recorde??0} / ${o?.total??J(r.puzzle,`aa`)}
        </span>
        <span class="criacao__marca">${n.criacao.proteinaAgora}: ${o?.acertos??0}</span>
      </div>
      ${a===void 0?t:e`
            <div class="criacao__relogio">
              <strong>${n.criacao.proteinaRelogio}</strong>
              <p>${n.criacao.proteinaNecessarias}: 1 em 10<sup>${a.necessarias}</sup></p>
              ${a.concluido?t:e`
                    <p>${n.criacao.proteinaFaltam} 10<sup>${a.faltam}</sup> vezes mais tentativas.</p>
                    <p>${n.criacao.proteinaTempo} ~10<sup>${a.anos}</sup> ${n.criacao.proteinaAnos}</p>
                  `}
            </div>
          `}
    `}if(a===`elementos`)return e`
      <div class="criacao__elemento" style=${`--cor:${String(i.catCor)}`}>
        <span class="criacao__simbolo">
          <strong>${String(i.simbolo)}</strong><small>${String(i.z)}</small>
        </span>
        <span class="criacao__ficha">
          <strong>${String(i.nome)}</strong>
          <span class="criacao__marcas">
            <span class="criacao__marca">${String(i.massaTxt)}</span>
            <span class="criacao__marca">${String(i.catNome)}</span>
            <span class="criacao__marca">${String(i.estadoNome)}</span>
            <span class="criacao__marca">${n.criacao.camadas}: ${String(i.camadasTxt)}</span>
          </span>
          ${i.fato===``?t:e`<small class="criacao__fato">${String(i.fato)}</small>`}
        </span>
      </div>
    `;if(a===`ciclos`){let t=Array.isArray(i.feitos)?i.feitos.length:0,r=Array.isArray(i.ids)?i.ids.length:0;return e`
      <div class="criacao__painel">
        <span class="criacao__marca ${i.ok?`criacao__contagem--ok`:``}">
          ${t}/${r} ${n.criacao.ciclosFechados}
        </span>
      </div>
    `}if(a===`terra_criacao`)return e`
      <div class="criacao__painel">
        <span class="criacao__marca">${String(i.rotulo)}</span>
        <span class="criacao__verso">${String(i.verso)}</span>
      </div>
    `;if(a===`gaivota`){let t=r.puzzle.valores.arranjo;return e`
      <div class="criacao__abas">
        <button
          class="criacao__aba ${t===`mesmo`?`criacao__aba--ativa`:``}"
          ?disabled=${L}
          @click=${()=>{r.puzzle.valores.arranjo=`mesmo`,q(r),c()}}
        >${n.criacao.gaivotaMesmo}</button>
        <button
          class="criacao__aba ${t===`oposto`?`criacao__aba--ativa`:``}"
          ?disabled=${L}
          @click=${()=>{r.puzzle.valores.arranjo=`oposto`,q(r),c()}}
        >${n.criacao.gaivotaOposto}</button>
      </div>
      <div class="criacao__painel">
        <span class="criacao__marca">
          ${n.criacao.gaivotaVolta}: <strong>${Number(i.tRetorno).toFixed(1).replace(`.`,`,`)} °C</strong>
        </span>
        <span class="criacao__marca">
          ${n.criacao.gaivotaPe}: <strong>${Number(i.tPe).toFixed(1).replace(`.`,`,`)} °C</strong>
        </span>
        <span class="criacao__marca ${i.ok?`criacao__contagem--ok`:``}">
          ${n.criacao.gaivotaCalor}: <strong>${String(i.pct)}%</strong>
        </span>
      </div>
    `}return t}function Sn(t){switch(t.puzzle.arquetipo){case`numerico`:return fn(t);case`slider`:return e`${dn(t)}${X(t.info())}`;case`escolha`:return pn(t);case`pares`:return mn(t);case`rota`:return hn(t);case`ordenar`:return gn(t);case`ciclos`:return _n(t);case`etapas`:return vn(t);case`explorar`:return yn(t);case`solar`:return bn(t);default:return e`<p class="criacao__dica">${n.criacao.leiaReflexao}</p>`}}function Cn(e){return e.arquetipo===`etapas`&&(e.atual??0)<(e.passos?.length??1)-1?n.criacao.avancar:e.arquetipo===`explorar`?n.criacao.concluirMapa:n.criacao.verificar}function wn(r){let i=qt(r),a=i.puzzle;return e`
    <div class="criacao">
      <article class="criacao__bloco">
        ${a.viz===void 0?t:e`
              <div class="criacao__viz">
                ${xn(i)}
                <div class="criacao__viz-rolagem">
                  ${Se(r.id,e`
                        <canvas
                          ${te(Ht)}
                          style=${`aspect-ratio:${a.viz.aspecto??`var(--kk-ratio-video)`};${a.viz.larguraMinima===void 0?``:`width:max(100%, ${a.viz.larguraMinima});touch-action:pan-x pan-y;`}`}
                        ></canvas>
                      `)}
                </div>
                ${a.viz.dica===void 0?t:e`<p class="criacao__dica">${a.viz.dica}</p>`}
              </div>
            `}

        ${Sn(i)}

        ${z===``?t:e`<p class="criacao__feedback criacao__feedback--${B}">${z}</p>`}

        ${a.arquetipo===`pronto`?t:e`
              <kk-button
                variant="primary"
                ?disabled=${!Yt(a)||L}
                @click=${()=>Xt(r,i)}
              >${Cn(a)}</kk-button>
            `}
      </article>

      ${a.arquetipo===`pronto`&&!R?e`
            <kk-button variant="success" @click=${()=>Qt(r)}>
              ${n.criacao.concluir}
            </kk-button>
          `:t}

      ${R?Tn(r):t}
    </div>
  `}function Tn(r){return e`
    <div class="criacao__final">
      <p class="criacao__concluido">
        <kk-icon name="check"></kk-icon>${n.criacao.concluido}
      </p>

      ${Kt(r)?e`<p class="criacao__diligente"><kk-icon name="school"></kk-icon>${n.criacao.diligenteFeito}</p>`:t}

      <article class="criacao__bloco criacao__bloco--sucesso">
        <h2 class="criacao__secao">
          ${r.categoria===`entenda`?n.criacao.reflexaoEntenda:n.criacao.reflexaoTitulo}
        </h2>
        <div class="prosa">${d(r.reflexao)}</div>
        ${r.referencia===``?t:e`<p class="criacao__verso">${r.referencia}</p>`}
        ${r.link_jw===``?t:e`
              <p class="criacao__fonte">
                <a href=${r.link_jw} target="_blank" rel="noopener">${n.criacao.lerFonte}</a>
              </p>
            `}
      </article>

      <div class="criacao__caderno">
        <div class="criacao__cabecalho-lista">
          <label for="criacao-caderno">${n.criacao.cadernoTitulo}</label>
          <a href="#/caderno">${n.criacao.cadernoVer}</a>
        </div>
        <textarea
          id="criacao-caderno"
          rows="4"
          placeholder=${n.criacao.cadernoPlaceholder}
          .value=${V}
          @input=${e=>{V=e.target.value,en(r)}}
        ></textarea>
      </div>

      <div class="criacao__saidas">
        <kk-button variant="primary" @click=${()=>s(Z(r))}>
          ${n.criacao.outrosModulos}
        </kk-button>
        <kk-button @click=${()=>s(`home`)}>${n.criacao.inicio}</kk-button>
      </div>
    </div>
  `}function En(r){return H===null?t:e`
    <div
      class="criacao__zoom"
      @click=${e=>{e.target===e.currentTarget&&(H=null,c())}}
    >
      <kk-icon-button
        name="x"
        label=${n.criacao.fechar}
        @click=${()=>{H=null,c()}}
      ></kk-icon-button>
      <img
        src=${`imagens/${H}`}
        alt=${r.titulo}
        class=${U?`criacao__zoom-img criacao__zoom-img--ampliada`:`criacao__zoom-img`}
        @click=${()=>{U=!U,c()}}
      />
    </div>
  `}function Q(e){let t=Number(e.args[0]);return Number.isFinite(t)?Wt(t):void 0}function $(e){return e.args[1]===`jogar`}var Dn={titulo(e){return Q(e)?.titulo},voltarPara(e){let t=e.modulo===`entenda`?`entenda`:`criacao`,n=Q(e);return n===void 0?`home`:$(e)?`${t}/${n.id}`:t},conteudo(t){Ut();let n=t.modulo===`entenda`?`entenda`:`criacao`,r=Q(t);if((r===void 0||!$(t))&&(F!==null&&Jt(),U=H!==null&&U),r===void 0)return ln(n);if(!$(t))return e`${un(r)}${En(r)}`;let i=wn(r);return queueMicrotask(()=>{F!==null&&nn(F)}),i}};export{Dn as telaCriacao};