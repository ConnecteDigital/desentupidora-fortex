import { site } from './site';
import { cidades } from './cidades';
import type { Faq, Servico } from './servicos';

const businessId = `${site.url}/#empresa`;

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    additionalType: 'https://schema.org/HomeAndConstructionBusiness',
    '@id': businessId,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/og.jpg`,
    telephone: `+${site.phoneDigits}`,
    description: site.description,
    priceRange: '$$',
    // Atendimento sem loja: só a cidade, sem endereço completo
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: 'BR',
    },
    areaServed: cidades.map((c) => ({ '@type': 'City', name: `${c.nome} - MG` })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

export function faqSchema(faq: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.path, site.url).href,
    })),
  };
}

export function serviceSchema(s: Servico, area = 'Belo Horizonte, Contagem e Betim - MG') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.nome,
    serviceType: s.keyword,
    description: s.metaDescription,
    provider: { '@id': businessId },
    areaServed: { '@type': 'Place', name: area },
  };
}
