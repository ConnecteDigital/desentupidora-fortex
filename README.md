# Desentupidora Fortex

Site da Desentupidora Fortex (BH, Contagem e Betim). Astro estático, publicado pela Vercel.

## O que trocar

| O quê | Onde |
|---|---|
| Telefone / WhatsApp (o mesmo número vale para os dois botões) | `src/data/site.ts` → `PHONE_DIGITS` (55 + DDD + número) |
| Logo | substituir `src/assets/logo.png` e `public/logo.png` |
| Imagem de fundo do topo (fica escurecida automaticamente) | substituir `src/assets/hero.jpg` (de preferência 1920×1080) |
| Tempo de chegada | `src/data/site.ts` → `arrivalMinutes` |
| Domínio | `src/data/site.ts` → `url`, `astro.config.mjs` e `public/robots.txt` |
| Google Tag Manager | `src/data/site.ts` → `gtmId` |
| Fotos dos serviços | `fotos/<slug-do-serviço>/` (ex.: `fotos/desentupimento-de-pia/`) |
| Textos dos serviços | `src/data/servicos.ts` |
| Textos e bairros das cidades | `src/data/cidades.ts` |
| Posts do blog | `src/content/blog/*.md` |

## Páginas

- `/` início
- `/servicos/` e `/servicos/<serviço>/` (pia, vaso sanitário, ralo, esgoto, cano)
- `/cidades/` e `/desentupidora-em-<cidade>/` (belo-horizonte, contagem, betim)
- `/blog/` e posts
- `/contato/`

## Rodar

```bash
npm install
npm run dev
```
