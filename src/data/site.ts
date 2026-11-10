// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// WhatsApp: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '553199765019';

export const site = {
  name: 'Desentupidora Fortex',
  url: 'https://desentupidorafortex.com.br',
  city: 'Belo Horizonte',
  state: 'MG',
  region: 'BH, Contagem e Betim',
  phoneDigits: PHONE_DIGITS,
  // Exibição no site
  phoneDisplay: '(31) 9976-5019',
  // Botão de ligação no formato pedido pelo cliente: 031 9976-5019
  tel: 'tel:03199765019',
  arrivalMinutes: 30,
  description:
    'Desentupidora 24 horas em BH, Contagem e Betim. Desentupimento de pia, vaso sanitário, ralo, esgoto e cano sem quebra-quebra. Chegamos em até 30 minutos, com garantia.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Desentupidora Fortex e preciso de um desentupimento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Contêiner do Google Tag Manager (ex.: 'GTM-XXXXXXX'). Vazio = sem rastreamento.
export const gtmId = '';
