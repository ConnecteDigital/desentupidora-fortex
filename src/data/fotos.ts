import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-pia': 'Técnico da Desentupidora Fortex passando cabo de máquina no ralo de uma pia de cozinha',
  'desentupimento-de-vaso-sanitario': 'Técnico desentupindo vaso sanitário com máquina de cabo rotativo',
  'desentupimento-de-ralo': 'Desentupimento de ralo de piso com mangueira de máquina desentupidora',
  'desentupimento-de-esgoto': 'Técnico desentupindo rede de esgoto pela caixa de inspeção com máquina',
  'desentupimento-de-cano': 'Técnico passando cabo de aço por dentro de cano de esgoto aberto',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço realizado pela Desentupidora Fortex' };
}
