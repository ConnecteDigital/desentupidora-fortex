import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  intro: string[];
  causas: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
}

// A Desentupidora Fortex trabalha só com desentupimento: pia, vaso, ralo, esgoto e cano.
export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de Pia',
    keyword: 'Desentupimento de pia em BH',
    resumo: 'Pia da cozinha, do banheiro e do tanque entupida por gordura, restos de comida ou cabelo.',
    metaDescription:
      'Desentupimento de pia 24h em BH, Contagem e Betim. Pia da cozinha, banheiro e tanque. Chegamos em até 30 minutos, sem quebra-quebra e com garantia.',
    icon: 'sink',
    intro: [
      'Pia entupida para a casa inteira: não dá para lavar louça, a água fica parada na cuba e o mau cheiro sobe pelo ralo. Na cozinha, quase sempre a culpa é da gordura que esfria e endurece dentro do cano, prendendo restos de comida e borra de café.',
      'A Desentupidora Fortex desentope pia de cozinha, de banheiro e de tanque em Belo Horizonte, Contagem e Betim, 24 horas por dia. Limpamos o sifão, a tubulação dentro da parede e, quando é preciso, a caixa de gordura, para a água voltar a descer de verdade e não entupir de novo na semana seguinte.',
    ],
    causas: [
      'Gordura de cozinha acumulada no cano e na caixa de gordura',
      'Restos de comida, arroz, borra de café e casca de alimentos',
      'Cabelo e sabão acumulados na pia do banheiro',
      'Sifão sujo ou mal encaixado',
      'Objetos que caíram no ralo da cuba',
    ],
    sinais: [
      'Água descendo devagar ou parada na cuba',
      'Mau cheiro saindo do ralo da pia',
      'Barulho de borbulha quando a água escoa',
      'Água voltando no tanque quando a pia é usada',
    ],
    comoFazemos: [
      'Verificamos se o entupimento está no sifão, no cano da parede ou na caixa de gordura',
      'Desmontamos e limpamos o sifão quando necessário',
      'Usamos máquina de cabo rotativo para limpar a tubulação por dentro, sem quebrar a parede',
      'Testamos o escoamento com água corrente e deixamos tudo limpo',
    ],
    faq: [
      {
        q: 'Vocês limpam a caixa de gordura junto?',
        a: 'Sim. Se a pia da cozinha entope com frequência, quase sempre a caixa de gordura está cheia. Verificamos e fazemos a limpeza no mesmo atendimento.',
      },
      {
        q: 'Soda cáustica resolve pia entupida?',
        a: 'Às vezes alivia, mas pode danificar o cano e não remove a gordura endurecida mais adiante na tubulação. Além disso, é perigosa para quem vai mexer depois. O ideal é a limpeza mecânica.',
      },
      {
        q: 'Precisa quebrar a parede para desentupir a pia?',
        a: 'Na grande maioria dos casos, não. A máquina alcança a obstrução por dentro do cano.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de Vaso Sanitário',
    keyword: 'Desentupimento de vaso sanitário em BH',
    resumo: 'Vaso que não desce, transborda ou fica com a água alta depois da descarga.',
    metaDescription:
      'Desentupimento de vaso sanitário 24h em BH, Contagem e Betim. Vaso transbordando ou que não desce? Chegamos em até 30 minutos, com garantia.',
    icon: 'toilet',
    intro: [
      'Vaso sanitário entupido é emergência: ninguém pode esperar até amanhã para usar o banheiro. O problema costuma ser papel em excesso, lenço umedecido, absorvente, fio dental ou algum objeto que caiu, como brinquedo ou tampa de frasco.',
      'A Desentupidora Fortex atende desentupimento de vaso sanitário 24 horas em BH, Contagem e Betim. Desobstruímos o vaso e o ramal de esgoto do banheiro sem precisar arrancar o vaso na maioria das vezes, e sem sujeira no seu banheiro.',
    ],
    causas: [
      'Excesso de papel higiênico de uma vez',
      'Lenço umedecido, absorvente, fralda ou fio dental jogados no vaso',
      'Objetos que caíram no vaso',
      'Ramal de esgoto do banheiro obstruído mais à frente',
      'Pouca água na descarga, que não empurra os dejetos até a rede',
    ],
    sinais: [
      'Água sobe e demora para descer depois da descarga',
      'Vaso transbordando',
      'Borbulhas no vaso quando outro ralo é usado',
      'Mau cheiro de esgoto no banheiro',
    ],
    comoFazemos: [
      'Avaliamos se o entupimento está no vaso ou na tubulação de esgoto',
      'Usamos desentupidor de pressão ou máquina de cabo específica para vaso, sem riscar a louça',
      'Quando há objeto preso, retiramos o objeto em vez de empurrar para dentro da rede',
      'Testamos várias descargas antes de liberar o banheiro',
    ],
    faq: [
      {
        q: 'Precisa tirar o vaso do lugar?',
        a: 'Na maioria dos casos, não. Só removemos o vaso quando há um objeto preso que não sai de outra forma, e sempre explicamos antes.',
      },
      {
        q: 'Posso jogar lenço umedecido no vaso?',
        a: 'Não. Mesmo os que dizem "descartável" não se desfazem como o papel higiênico e são uma das principais causas de entupimento de vaso e de esgoto.',
      },
      {
        q: 'Atendem vaso entupido de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive fins de semana e feriados.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de Ralo',
    keyword: 'Desentupimento de ralo em BH',
    resumo: 'Ralo do box, da área de serviço e do quintal entupido ou com mau cheiro.',
    metaDescription:
      'Desentupimento de ralo 24h em BH, Contagem e Betim. Ralo do box, área de serviço e quintal. Chegamos em até 30 minutos, com garantia.',
    icon: 'drain',
    intro: [
      'Ralo entupido deixa água empoçada no box, alaga a área de serviço e, em dia de chuva, pode inundar o quintal e a garagem. No banheiro, o vilão é o cabelo misturado com sabão; na área externa, terra, folhas e areia.',
      'A Desentupidora Fortex desentope ralos de banheiro, cozinha, área de serviço, varanda, quintal e garagem em Belo Horizonte, Contagem e Betim. Limpamos o ralo e a caixa sifonada, que é onde a sujeira mais se acumula, e eliminamos o mau cheiro.',
    ],
    causas: [
      'Cabelo e sabão acumulados no ralo do box',
      'Terra, areia e folhas nos ralos externos',
      'Caixa sifonada cheia de sujeira',
      'Fiapos de roupa da máquina de lavar no ralo da área de serviço',
      'Cano de ligação do ralo obstruído',
    ],
    sinais: [
      'Água empoçada no box durante o banho',
      'Mau cheiro de esgoto vindo do ralo',
      'Água voltando pelo ralo quando a máquina de lavar esvazia',
      'Quintal ou garagem alagando com chuva',
    ],
    comoFazemos: [
      'Abrimos e limpamos o ralo e a caixa sifonada',
      'Desobstruímos o cano de ligação com máquina de cabo rotativo',
      'Verificamos se o ralo tem fecho hídrico para segurar o mau cheiro',
      'Testamos o escoamento com bastante água',
    ],
    faq: [
      {
        q: 'Por que o ralo fica com cheiro de esgoto?',
        a: 'Normalmente a caixa sifonada está suja ou sem água no fecho hídrico, que é o que impede o gás do esgoto de subir. Fazemos a limpeza e verificamos a vedação.',
      },
      {
        q: 'Vocês desentopem ralo de quintal e garagem?',
        a: 'Sim. Atendemos ralos e grelhas de área externa, inclusive com acúmulo de terra e folhas depois de chuva forte.',
      },
      {
        q: 'Quanto tempo demora para desentupir um ralo?',
        a: 'A maioria dos ralos é resolvida no mesmo atendimento, em pouco tempo. Depende de onde está a obstrução.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de Esgoto',
    keyword: 'Desentupimento de esgoto em BH',
    resumo: 'Rede de esgoto, caixa de inspeção, caixa de gordura e coluna de prédio.',
    metaDescription:
      'Desentupimento de esgoto 24h em BH, Contagem e Betim. Rede, caixa de inspeção, caixa de gordura e coluna de prédio. Chegamos em até 30 minutos.',
    icon: 'sewer',
    intro: [
      'Quando o esgoto entope, o problema aparece em vários lugares ao mesmo tempo: água voltando pelos ralos, vaso que não desce, caixa de inspeção transbordando no quintal e um cheiro forte que toma a casa. É sinal de que a obstrução está na rede principal, e não em uma pia ou ralo isolado.',
      'A Desentupidora Fortex faz desentupimento de esgoto residencial, comercial e de condomínio em BH, Contagem e Betim, 24 horas. Desobstruímos a rede, as caixas de inspeção e de gordura e as colunas de prédio com máquinas próprias, sem abrir o piso sempre que possível.',
    ],
    causas: [
      'Gordura, papel, lenço umedecido e resíduos acumulados na rede',
      'Raízes de árvore que entraram na tubulação',
      'Caixa de gordura ou caixa de inspeção cheia',
      'Cano de esgoto quebrado, amassado ou com caimento errado',
      'Coluna de esgoto do prédio obstruída',
    ],
    sinais: [
      'Esgoto voltando pelos ralos ou pelo vaso',
      'Vários pontos da casa entupidos ao mesmo tempo',
      'Caixa de inspeção transbordando',
      'Mau cheiro forte de esgoto dentro ou fora do imóvel',
      'Apartamentos dos andares de baixo com retorno de água',
    ],
    comoFazemos: [
      'Localizamos o trecho da rede onde está a obstrução',
      'Usamos máquina de cabo rotativo com ponteiras adequadas para cada tipo de obstrução, inclusive raízes',
      'Limpamos as caixas de inspeção e de gordura do trajeto',
      'Testamos o escoamento em toda a rede antes de encerrar',
    ],
    faq: [
      {
        q: 'Atendem condomínio e prédio?',
        a: 'Sim. Atendemos coluna de esgoto, caixa de gordura coletiva e rede de condomínio, inclusive de madrugada para não atrapalhar os moradores durante o dia.',
      },
      {
        q: 'Vocês atendem comércio e restaurante?',
        a: 'Sim. Restaurantes, lanchonetes, lojas e empresas em BH, Contagem e Betim.',
      },
      {
        q: 'E se o cano estiver quebrado?',
        a: 'Se depois de desentupir identificarmos que o cano está quebrado ou amassado, explicamos o que encontramos antes de qualquer coisa.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-cano',
    nome: 'Desentupimento de Cano',
    keyword: 'Desentupimento de cano em BH',
    resumo: 'Canos de pia, ralo, tanque e esgoto obstruídos dentro da parede ou do piso.',
    metaDescription:
      'Desentupimento de cano 24h em BH, Contagem e Betim. Cano entupido dentro da parede ou do piso, sem quebra-quebra. Chegamos em até 30 minutos.',
    icon: 'pipe',
    intro: [
      'Às vezes a pia e o ralo estão limpos, mas a água continua sem descer: o entupimento está no cano, dentro da parede ou embaixo do piso. Sem o equipamento certo, a única saída parece ser quebrar, mas na maioria das vezes não precisa.',
      'A Desentupidora Fortex desentope canos de pia, tanque, ralo, máquina de lavar e esgoto em Belo Horizonte, Contagem e Betim. A máquina de cabo rotativo entra pelo próprio cano e remove a obstrução lá dentro, sem quebrar parede nem piso.',
    ],
    causas: [
      'Gordura e sabão endurecidos nas paredes do cano',
      'Resíduos acumulados em curvas e conexões',
      'Cano com caimento errado, que acumula sujeira',
      'Objetos e resíduos de obra dentro da tubulação',
      'Raízes em canos externos',
    ],
    sinais: [
      'Pia, tanque ou ralo limpos, mas a água continua sem descer',
      'Água voltando em outro ponto da casa',
      'Barulho de borbulha nos canos',
      'Entupimento que volta pouco tempo depois de desentupir',
    ],
    comoFazemos: [
      'Identificamos por qual ponto é mais fácil alcançar a obstrução',
      'Passamos a máquina de cabo rotativo por dentro do cano',
      'Removemos a obstrução e limpamos as paredes do cano',
      'Testamos o escoamento e explicamos como evitar novos entupimentos',
    ],
    faq: [
      {
        q: 'Dá para desentupir cano sem quebrar a parede?',
        a: 'Na grande maioria dos casos, sim. A máquina entra pelo próprio cano. Só indicamos abrir quando o cano está quebrado, e sempre com o seu aceite antes.',
      },
      {
        q: 'Por que o cano entope de novo?',
        a: 'Normalmente porque o desentupimento anterior só abriu um furo na obstrução, sem limpar o cano por inteiro, ou porque o cano tem caimento errado. Limpamos a tubulação toda e avisamos se houver defeito.',
      },
      {
        q: 'Atendem em Contagem e Betim também?',
        a: 'Sim. Atendemos Belo Horizonte, Contagem e Betim 24 horas.',
      },
    ],
  },
];

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
