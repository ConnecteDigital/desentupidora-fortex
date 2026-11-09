// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// ⚠️ NÚMERO PROVISÓRIO: troque pelo número real (55 + DDD + número, só dígitos).
// Ele vale para o botão Ligar e para o botão do WhatsApp.
const PHONE_DIGITS = '5531900000000';

export const site = {
  name: 'Desentupidora Fortex',
  url: 'https://desentupidorafortex.com.br',
  city: 'Belo Horizonte',
  state: 'MG',
  region: 'BH, Contagem e Betim',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (31) 90000-0000
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  tel: `tel:+${PHONE_DIGITS}`,
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
