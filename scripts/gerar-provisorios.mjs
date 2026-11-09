// Gera imagens PROVISÓRIAS (fundo do topo, logo e imagem de compartilhamento).
// Quando chegarem o logo e a foto reais, substitua src/assets/logo.png e src/assets/hero.jpg.
import sharp from 'sharp';
const W=1920,H=1080;
// fundo provisório: parede de azulejo, canos e ralo com água, luz lateral
let tiles='';
for(let y=0;y<H;y+=120)for(let x=0;x<W;x+=120){const v=18+((x*7+y*13)%9);tiles+=`<rect x="${x+2}" y="${y+2}" width="116" height="116" rx="4" fill="rgb(${v},${v+10},${v+22})"/>`;}
const pipe=(d,w,c)=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const hero=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<defs>
<linearGradient id="pv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9edf2"/><stop offset=".5" stop-color="#b9c2cc"/><stop offset="1" stop-color="#6f7a86"/></linearGradient>
<linearGradient id="pvv" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6f7a86"/><stop offset=".45" stop-color="#e9edf2"/><stop offset="1" stop-color="#6f7a86"/></linearGradient>
<radialGradient id="luz" cx=".78" cy=".2" r=".7"><stop offset="0" stop-color="#4aa3ff" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
<radialGradient id="luz2" cx=".15" cy=".9" r=".6"><stop offset="0" stop-color="#ff8a3d" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
<radialGradient id="agua" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#7cc6ff" stop-opacity=".9"/><stop offset="1" stop-color="#0b2a55" stop-opacity="0"/></radialGradient>
<filter id="b"><feGaussianBlur stdDeviation="6"/></filter>
<filter id="bb"><feGaussianBlur stdDeviation="30"/></filter>
</defs>
<rect width="${W}" height="${H}" fill="#0b1626"/>
${tiles}
<rect y="760" width="${W}" height="320" fill="#0e1b2d"/>
<g filter="url(#b)" opacity=".85">
${pipe('M-20 300 H 820 Q 900 300 900 380 V 760','70','url(#pv)')}
${pipe('M1180 -20 V 520 Q 1180 600 1260 600 H 1960','90','url(#pvv)')}
${pipe('M1500 -20 V 260 H 1960','50','url(#pvv)')}
${pipe('M300 -20 V 180','46','url(#pvv)')}
</g>
<g filter="url(#b)">
<rect x="870" y="740" width="60" height="40" rx="6" fill="#9aa5b1"/>
<ellipse cx="960" cy="900" rx="260" ry="70" fill="#1d2b3d"/>
<ellipse cx="960" cy="900" rx="170" ry="44" fill="#3c4a5c"/>
<g stroke="#11161d" stroke-width="10">${[...Array(7)].map((_,i)=>`<line x1="${830+i*44}" y1="870" x2="${830+i*44}" y2="930"/>`).join('')}</g>
</g>
<ellipse cx="960" cy="905" rx="420" ry="110" fill="url(#agua)" filter="url(#bb)" opacity=".6"/>
<rect width="${W}" height="${H}" fill="url(#luz)"/>
<rect width="${W}" height="${H}" fill="url(#luz2)"/>
</svg>`;
await sharp(Buffer.from(hero)).jpeg({quality:80,mozjpeg:true,progressive:true}).toFile('src/assets/hero.jpg');
// logo provisório
const logo=`<svg xmlns="http://www.w3.org/2000/svg" width="720" height="200" viewBox="0 0 720 200">
<rect x="8" y="20" width="160" height="160" rx="36" fill="#1662e8"/>
<path d="M88 46C88 46 48 96 48 122a40 40 0 0 0 80 0c0-26-40-76-40-76z" fill="#fff"/>
<path d="M70 124a18 18 0 0 0 18 18" stroke="#1662e8" stroke-width="10" fill="none" stroke-linecap="round"/>
<text x="196" y="112" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="96" fill="#ffffff" letter-spacing="2">FORTEX</text>
<text x="200" y="164" font-family="Arial, sans-serif" font-weight="700" font-size="38" fill="#5fd0ff" letter-spacing="11">DESENTUPIDORA</text>
</svg>`;
await sharp(Buffer.from(logo)).png().toFile('src/assets/logo.png');
await sharp(Buffer.from(logo)).png().toFile('public/logo.png');
// imagem de compartilhamento
const og=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0a1a3c"/>
<text x="80" y="300" font-family="Arial Black, Arial" font-weight="900" font-size="72" fill="#fff">DESENTUPIDORA 24H</text>
<text x="80" y="380" font-family="Arial" font-weight="700" font-size="44" fill="#5fd0ff">BH · Contagem · Betim</text>
<text x="80" y="460" font-family="Arial" font-size="34" fill="#c7d6f2">Pia, vaso, ralo, esgoto e cano</text></svg>`;
const ogBuf=await sharp(Buffer.from(og)).png().toBuffer();
const logoSmall=await sharp('src/assets/logo.png').resize(430).toBuffer();
await sharp(ogBuf).composite([{input:logoSmall,left:80,top:90}]).jpeg({quality:85}).toFile('public/og.jpg');
