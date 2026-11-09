// Cidades atendidas. Cada uma gera a página /desentupidora-em-<slug>/.
// O texto "sobre" é exclusivo de cada cidade para não repetir conteúdo entre páginas.

export interface Cidade {
  slug: string;
  nome: string;
  // Frase curta usada em títulos e listas
  resumo: string;
  sobre: string[];
  bairros: string[];
  destaque?: boolean;
}

export const cidades: Cidade[] = [
  {
    slug: 'belo-horizonte',
    nome: 'Belo Horizonte',
    resumo: 'Atendimento em todas as regionais de BH, do Barreiro à Pampulha.',
    destaque: true,
    sobre: [
      'Belo Horizonte tem de tudo: prédios antigos no Centro e na Savassi, casas com quintal na Pampulha e em Venda Nova e condomínios novos no Buritis e no Castelo. Cada tipo de imóvel entope de um jeito, e a Desentupidora Fortex atende todos eles, 24 horas por dia.',
      'Nos apartamentos, os chamados mais comuns são pia da cozinha entupida por gordura e coluna de esgoto do prédio obstruída. Nas casas, caixa de gordura cheia, ralo de quintal entupido por terra e folhas e rede de esgoto com raiz de árvore.',
      'Como a cidade tem muitas ladeiras e trânsito pesado nos horários de pico, nossa equipe circula pelas regionais para chegar rápido onde você estiver.',
    ],
    bairros: [
      'Centro', 'Savassi', 'Funcionários', 'Lourdes', 'Santo Agostinho', 'Sion', 'Serra', 'Santa Efigênia',
      'Floresta', 'Santa Tereza', 'Padre Eustáquio', 'Caiçara', 'Prado', 'Gutierrez', 'Buritis', 'Estoril',
      'Pampulha', 'Ouro Preto', 'Castelo', 'Cidade Nova', 'Venda Nova', 'Barreiro',
    ],
  },
  {
    slug: 'contagem',
    nome: 'Contagem',
    resumo: 'Do Eldorado ao Nacional, casas, prédios, comércio e indústria.',
    destaque: true,
    sobre: [
      'Contagem mistura bairros residenciais grandes, como Eldorado, Riacho e Nacional, com uma área industrial e comercial forte. Atendemos casas, condomínios, lojas, restaurantes e galpões com desentupimento de pia, vaso, ralo, cano e rede de esgoto.',
      'Em casas mais antigas da cidade é comum encontrar tubulação de esgoto de manilha, que acumula sujeira e raízes com o tempo. Em restaurantes e comércios, a maior causa de chamado é a caixa de gordura saturada travando a pia e os ralos.',
      'Atendemos Contagem 24 horas, inclusive fins de semana e feriados, com equipamento próprio para desentupir sem quebrar piso.',
    ],
    bairros: [
      'Eldorado', 'Novo Eldorado', 'Sede', 'Industrial', 'Jardim Industrial', 'Riacho', 'Nacional', 'Ressaca',
      'Petrolândia', 'Inconfidentes', 'Água Branca', 'Amazonas', 'Cinco', 'Bernardo Monteiro', 'Fonte Grande',
    ],
  },
  {
    slug: 'betim',
    nome: 'Betim',
    resumo: 'Centro, Angola, Ingá, Teresópolis e toda a cidade.',
    destaque: true,
    sobre: [
      'Betim cresceu rápido e tem muitos bairros residenciais com casas e sobrados, além de comércio forte no Centro e no Angola. Atendemos desentupimento de esgoto, vaso sanitário, pia, ralo e cano em residências, condomínios e empresas.',
      'Nas casas, os problemas mais frequentes são ralo de área externa entupido em época de chuva, caixa de inspeção cheia e esgoto voltando pelo ralo do banheiro. Em comércios, entupimento de pia e de caixa de gordura.',
      'Nossa equipe atende Betim 24 horas e chega equipada para resolver sem quebra-quebra sempre que possível.',
    ],
    bairros: [
      'Centro', 'Angola', 'Ingá', 'Brasiléia', 'Jardim Teresópolis', 'PTB', 'Alterosas', 'Citrolândia',
      'Imbiruçu', 'Vianópolis', 'Laranjeiras', 'Espírito Santo', 'Jardim da Cidade', 'Filadélfia',
    ],
  },
];

export function cidadePath(c: Cidade) {
  return `/desentupidora-em-${c.slug}/`;
}

export function getCidade(slug: string) {
  return cidades.find((c) => c.slug === slug);
}
