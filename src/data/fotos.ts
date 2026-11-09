import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-pia': 'Desentupimento de pia de cozinha feito pela Desentupidora Fortex',
  'desentupimento-de-vaso-sanitario': 'Desentupimento de vaso sanitário feito pela Desentupidora Fortex',
  'desentupimento-de-ralo': 'Desentupimento de ralo de banheiro feito pela Desentupidora Fortex',
  'desentupimento-de-esgoto': 'Desentupimento de rede de esgoto com máquina feito pela Desentupidora Fortex',
  'desentupimento-de-cano': 'Desentupimento de cano com máquina de cabo rotativo pela Desentupidora Fortex',
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
