const sharp = require('sharp');

async function createBannerMockup() {
  const width = 800;
  const height = 360;

  // We create an SVG banner representing the physical store banner with eyelets / grommets
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bannerBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#021D3B" />
          <stop offset="60%" stop-color="#0762C8" />
          <stop offset="100%" stop-color="#00A3E0" />
        </linearGradient>
        <linearGradient id="orangeAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FA4616" />
          <stop offset="100%" stop-color="#FF7A00" />
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021D3B" flood-opacity="0.18" />
        </filter>
      </defs>

      <!-- Main Banner Body with Hem and Shadow -->
      <g filter="url(#shadow)">
        <rect x="20" y="20" width="760" height="320" rx="16" fill="url(#bannerBg)" stroke="#CCE6FF" stroke-width="3" />
      </g>

      <!-- Top Orange Brand Wave Accent -->
      <path d="M 20 50 Q 200 80 400 45 T 780 60 L 780 20 L 20 20 Z" fill="url(#orangeAccent)" opacity="0.9" />

      <!-- Corner Metal Eyelets / Grommets (Lubang Ring Logam Spanduk) -->
      <!-- Top Left -->
      <circle cx="45" cy="45" r="10" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3" />
      <circle cx="45" cy="45" r="5" fill="#021D3B" />
      <!-- Top Right -->
      <circle cx="755" cy="45" r="10" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3" />
      <circle cx="755" cy="45" r="5" fill="#021D3B" />
      <!-- Bottom Left -->
      <circle cx="45" cy="315" r="10" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3" />
      <circle cx="45" cy="315" r="5" fill="#021D3B" />
      <!-- Bottom Right -->
      <circle cx="755" cy="315" r="10" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3" />
      <circle cx="755" cy="315" r="5" fill="#021D3B" />

      <!-- Center Store Name Badge Box -->
      <rect x="65" y="70" width="670" height="135" rx="12" fill="#FFFFFF" fill-opacity="0.96" stroke="#CCE6FF" stroke-width="2" />

      <!-- Store Name Title -->
      <text x="400" y="112" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0762C8" text-anchor="middle" letter-spacing="3">
        MITRA RESMI PENJUALAN AIR MINERAL
      </text>
      <text x="400" y="162" font-family="system-ui, sans-serif" font-size="34" font-weight="900" fill="#021D3B" text-anchor="middle" letter-spacing="1">
        [ NAMA TOKO MITRA ANDA ]
      </text>
      <text x="400" y="190" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#64748B" text-anchor="middle">
        Dicetak Khusus Sesuai Nama Toko / Kios Anda
      </text>

      <!-- Bottom Brand Lockup: AQUVIVA - WINGS FOOD -->
      <rect x="220" y="235" width="360" height="70" rx="10" fill="#FFFFFF" />
      
      <text x="340" y="278" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#FA4616" text-anchor="middle">
        AQUVIVA
      </text>
      <line x1="420" y1="250" x2="420" y2="290" stroke="#CBD5E1" stroke-width="2" />
      <text x="490" y="276" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#E5242A" text-anchor="middle">
        WINGS Food
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile('public/Component/banner-nama-toko-mockup.png');

  console.log('Created public/Component/banner-nama-toko-mockup.png');
}

createBannerMockup().catch(console.error);
