const fs = require('fs');
const path = require('path');

const brands = [
  // 01 KITCHEN
  {
    key: 'boffi',
    filename: 'boffi_kitchen.svg',
    category: '01 • KITCHEN ARCHITECTURE',
    title: 'BOFFI',
    subtitle: 'Monolithic Travertine Island & Pocket Doors',
    bg1: '#1C1917', bg2: '#0C0A09', accent: '#C5A059',
    details: ['Monolithic Travertine Island', 'Concealed Pocket Cabinetry', 'Matte Stainless Steel Systems']
  },
  {
    key: 'poliform',
    filename: 'poliform_joinery.svg',
    category: '01 • KITCHEN ARCHITECTURE',
    title: 'POLIFORM',
    subtitle: 'Smoked Oak Joinery & Glass Showcases',
    bg1: '#26201B', bg2: '#14100D', accent: '#D4AF37',
    details: ['Smoked Oak Joinery Slabs', 'Frameless Glass Showcases', 'Integrated Cove LED Channels']
  },
  {
    key: 'dada',
    filename: 'dada_kitchen.svg',
    category: '01 • KITCHEN ARCHITECTURE',
    title: 'DADA / MOLTENI',
    subtitle: 'Vincent Van Duysen Floating Counter Cantilevers',
    bg1: '#1E232A', bg2: '#101419', accent: '#C0C0C0',
    details: ['Vincent Van Duysen Design', 'PVD Gunmetal Stainless', 'Custom Walnut Interiors']
  },
  {
    key: 'gaggenau',
    filename: 'gaggenau_appliances.svg',
    category: '01 • KITCHEN ARCHITECTURE',
    title: 'GAGGENAU',
    subtitle: 'Full-Surface Induction & Vario 400 Cooling',
    bg1: '#181B20', bg2: '#0D0F12', accent: '#E0E0E0',
    details: ['3mm Solid Stainless Knobs', 'Full-Surface Induction Optics', 'Vario Modular Cooling']
  },

  // 02 BATH
  {
    key: 'dornbracht',
    filename: 'dornbracht_bath.svg',
    category: '02 • BATH SANCTUARY',
    title: 'DORNBRACHT',
    subtitle: 'Sensory Sky Rain Panels & Platinum Satin',
    bg1: '#1A232E', bg2: '#0E141C', accent: '#B0C4DE',
    details: ['Sensory Sky Rain Panels', 'Dark Platinum Satin Finishes', 'Concealed Wall Valves']
  },
  {
    key: 'agape',
    filename: 'agape_bath.svg',
    category: '02 • BATH SANCTUARY',
    title: 'AGAPE',
    subtitle: 'Freestanding Cristalmood Tubs & Basalt Vanities',
    bg1: '#242424', bg2: '#121212', accent: '#A9A9A9',
    details: ['Cristalmood Bio-Resin', 'Monolithic Stone Basins', 'Spoon & Vieques Tubs']
  },
  {
    key: 'gessi',
    filename: 'gessi_faucets.svg',
    category: '02 • BATH SANCTUARY',
    title: 'GESSI',
    subtitle: 'Woven Metal Knurling & PVD Antique Brass',
    bg1: '#2B2418', bg2: '#17120B', accent: '#D4AF37',
    details: ['Woven Metal Knurling', 'Ceiling Water Cascades', 'PVD Antique Brass Finishes']
  },
  {
    key: 'kallista',
    filename: 'kallista_bath.svg',
    category: '02 • BATH SANCTUARY',
    title: 'KOHLER KALLISTA',
    subtitle: 'Hand-Forged Bronze & Grid 3D Faucet Architecture',
    bg1: '#26201A', bg2: '#14100C', accent: '#C5A880',
    details: ['Hand-Forged Bronze Valves', 'Cast-Stone Vessel Basins', 'Grid 3D-Printed Faucet Architecture']
  },

  // 03 HARDWARE
  {
    key: 'buster_punch',
    filename: 'buster_hardware.svg',
    category: '03 • ARCHITECTURAL HARDWARE',
    title: 'BUSTER + PUNCH',
    subtitle: 'Diamond-Cut Cross-Knurled Brass & Smoked Bronze',
    bg1: '#231E18', bg2: '#120F0C', accent: '#C5A880',
    details: ['Solid Knurled Brass & Steel', 'Smoked Bronze Finishes', 'Heavyweight Tactile Feel']
  },
  {
    key: 'formani',
    filename: 'formani_hardware.svg',
    category: '03 • ARCHITECTURAL HARDWARE',
    title: 'FORMANI',
    subtitle: 'Piet Boon Signature Levers & Grade 316 Stainless',
    bg1: '#1F2428', bg2: '#101316', accent: '#CCCCCC',
    details: ['Piet Boon Signature Series', 'Concealed Rosette Fittings', 'PVD Matte Black & Bronze']
  },
  {
    key: 'ogro',
    filename: 'ogro_hardware.svg',
    category: '03 • ARCHITECTURAL HARDWARE',
    title: 'OGRO',
    subtitle: 'German Heavy-Duty Anodized Bronze Pivot Levers',
    bg1: '#292215', bg2: '#161109', accent: '#B8860B',
    details: ['Heavy-Duty Roller Bearings', 'Concealed Door Closers', 'Satin Anodized Aluminum']
  },
  {
    key: 'fsb',
    filename: 'fsb_hardware.svg',
    category: '03 • ARCHITECTURAL HARDWARE',
    title: 'FSB ARCHITECTURAL',
    subtitle: 'Classic Bauhaus Ergonomic Levers & Patinated Bronze',
    bg1: '#281E18', bg2: '#150E0A', accent: '#CD853F',
    details: ['Bauhaus Classic Designs', 'Patinated Cast Bronze', 'Ergonomic Grip Curves']
  },

  // 04 LIGHTING
  {
    key: 'flos',
    filename: 'flos_lighting.svg',
    category: '04 • LIGHTING SYSTEMS',
    title: 'FLOS',
    subtitle: 'Running Magnet Track & Plaster-In Downlights',
    bg1: '#262215', bg2: '#141109', accent: '#FFD700',
    details: ['Running Magnet Track Systems', 'Minimalist Micro-Spotlights', 'Warm 2700K High-CRI LED']
  },
  {
    key: 'viabizzuno',
    filename: 'viabizzuno_lighting.svg',
    category: '04 • LIGHTING SYSTEMS',
    title: 'VIABIZZUNO',
    subtitle: 'Light As Architecture & Plaster-In Linear Slots',
    bg1: '#281F17', bg2: '#16100B', accent: '#F4A460',
    details: ['Light As Architecture Concept', 'Plaster-In Linear Slots', 'Brass Micro-Optics']
  },
  {
    key: 'occhio',
    filename: 'occhio_lighting.svg',
    category: '04 • LIGHTING SYSTEMS',
    title: 'OCCHIO',
    subtitle: 'Touchless Gesture Controls & Phantom Bronze Optics',
    bg1: '#252014', bg2: '#131008', accent: '#DAA520',
    details: ['Touchless Gesture Controls', 'Tunable White (2200K–4000K)', 'Phantom Bronze Finishes']
  },
  {
    key: 'deltalight',
    filename: 'deltalight_lighting.svg',
    category: '04 • LIGHTING SYSTEMS',
    title: 'DELTA LIGHT',
    subtitle: 'Dark Light Low-Glare Spots & Magnetic Profiles',
    bg1: '#192229', bg2: '#0C1217', accent: '#87CEEB',
    details: ['Dark Light Baffle Design', 'IP65 Architectural Outdoor', 'Super-Trim Concealed Frames']
  },

  // 05 SURFACES
  {
    key: 'salvatori',
    filename: 'salvatori_surfaces.svg',
    category: '05 • MATERIAL SURFACES',
    title: 'SALVATORI STONE',
    subtitle: "Tuscan Crema d'Orcia & Bamboo Ribbed Travertine",
    bg1: '#26211B', bg2: '#14110D', accent: '#D2B48C',
    details: ['Bamboo & Lithoverde Ribbing', "Tuscan Crema d'Orcia Stone", 'Micro-Ribbed Wall Panels']
  },
  {
    key: 'mutina',
    filename: 'mutina_surfaces.svg',
    category: '05 • MATERIAL SURFACES',
    title: 'MUTINA CERAMICA',
    subtitle: '3D Clay Relief Wall Tiles & Urquiola Terracotta',
    bg1: '#291D17', bg2: '#160E0A', accent: '#CD853F',
    details: ['3D Clay Relief Wall Tiles', 'Urquiola Signature Reliefs', 'Extruded Terracotta Blocks']
  },
  {
    key: 'dekton',
    filename: 'dekton_surfaces.svg',
    category: '05 • MATERIAL SURFACES',
    title: 'COSENTINO DEKTON',
    subtitle: 'Sintered Ultra-Compact Slabs (3200x1440mm)',
    bg1: '#231E20', bg2: '#120F10', accent: '#BC8F8F',
    details: ['Sintered Particle Tech', 'Zero Porosity & Stain Proof', 'Large Format 3200x1440mm']
  },
  {
    key: 'marazzi',
    filename: 'marazzi_surfaces.svg',
    category: '05 • MATERIAL SURFACES',
    title: 'MARAZZI ITALIA',
    subtitle: 'Grande Slabs (160x320cm) & 3D Ink Porcelain Tech',
    bg1: '#1F2224', bg2: '#101213', accent: '#D3D3D3',
    details: ['Grande Slabs (160x320cm)', '3D Ink Surface Texture', 'Puro Antibacterial Tech']
  }
];

function generateSvg(b, index) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${b.bg1}" />
      <stop offset="100%" stop-color="${b.bg2}" />
    </linearGradient>
    <radialGradient id="halo" cx="65%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${b.accent}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${b.bg2}" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.02" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${b.accent}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="${b.accent}" stop-opacity="0.2" />
    </linearGradient>
  </defs>

  <rect width="1200" height="800" fill="url(#bgGrad)" />
  <rect width="1200" height="800" fill="url(#halo)" />

  <!-- Blueprint Lines -->
  <g stroke="${b.accent}" stroke-opacity="0.15" stroke-width="1">
    <line x1="80" y1="0" x2="80" y2="800" />
    <line x1="1120" y1="0" x2="1120" y2="800" />
    <line x1="0" y1="100" x2="1200" y2="100" />
    <line x1="0" y1="700" x2="1200" y2="700" />
    <line x1="580" y1="100" x2="580" y2="700" stroke-dasharray="4,4" />
  </g>

  <!-- Graphic Preview Frame -->
  <g transform="translate(600, 140)">
    <rect x="0" y="0" width="520" height="520" rx="16" fill="url(#glassGrad)" stroke="${b.accent}" stroke-opacity="0.4" stroke-width="1.5" />
    <g transform="translate(50, 60)">
      <path d="M 40,120 L 220,40 L 400,120 L 220,200 Z" fill="${b.accent}" fill-opacity="0.2" stroke="${b.accent}" stroke-width="2" />
      <path d="M 40,120 L 40,300 L 220,380 L 220,200 Z" fill="${b.accent}" fill-opacity="0.3" stroke="${b.accent}" stroke-width="2" />
      <path d="M 400,120 L 400,300 L 220,380 L 220,200 Z" fill="${b.accent}" fill-opacity="0.4" stroke="${b.accent}" stroke-width="2" />
      <line x1="20" y1="120" x2="20" y2="300" stroke="${b.accent}" stroke-opacity="0.7" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="20" cy="120" r="3" fill="${b.accent}" />
      <circle cx="20" cy="300" r="3" fill="${b.accent}" />
      <text x="10" y="210" font-family="JetBrains Mono, monospace" font-size="10" fill="${b.accent}" transform="rotate(-90 10 210)" letter-spacing="2">ARCHITECTURAL MONOGRAPH</text>
    </g>
  </g>

  <!-- Editorial Info -->
  <g transform="translate(100, 160)">
    <rect x="0" y="0" width="340" height="28" rx="4" fill="${b.accent}" fill-opacity="0.2" stroke="${b.accent}" stroke-width="1" />
    <text x="16" y="18" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" fill="${b.accent}" letter-spacing="3">${b.category}</text>
    <text x="0" y="90" font-family="Cinzel, Georgia, serif" font-size="46" font-weight="700" fill="#FFFFFF" letter-spacing="4">${b.title}</text>
    <text x="0" y="130" font-family="Instrument Serif, Georgia, serif" font-style="italic" font-size="22" fill="${b.accent}">${b.subtitle}</text>
    <line x1="0" y1="160" x2="440" y2="160" stroke="url(#accentGrad)" stroke-width="2" />
    <g transform="translate(0, 200)">
      ${b.details.map((d, i) => `
        <g transform="translate(0, ${i * 44})">
          <circle cx="8" cy="8" r="4" fill="${b.accent}" />
          <text x="28" y="13" font-family="Plus Jakarta Sans, sans-serif" font-size="15" fill="#E2E8F0">${d}</text>
        </g>
      `).join('')}
    </g>
  </g>

  <!-- Footer -->
  <g transform="translate(100, 740)">
    <text x="0" y="0" font-family="JetBrains Mono, monospace" font-size="11" fill="${b.accent}" letter-spacing="2">VAASTVIK DESIGN GROUP &bull; MATERIALITY NETWORK 2026</text>
    <text x="1000" y="0" font-family="JetBrains Mono, monospace" font-size="11" fill="#A0AEC0" text-anchor="end" letter-spacing="2">SPEC 0${index + 1}</text>
  </g>
</svg>`;
}

const targetDirs = [
  path.resolve(__dirname, 'images'),
  path.resolve(__dirname, 'assets/images'),
  path.resolve(__dirname, 'public/assets/images'),
  path.resolve(__dirname, 'src/assets/images')
];

targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

console.log('Writing 20 Brand SVG Images to all target image directories...');

brands.forEach((b, index) => {
  const content = generateSvg(b, index);
  targetDirs.forEach(dir => {
    fs.writeFileSync(path.join(dir, b.filename), content, 'utf8');
  });
  console.log(`[${index + 1}/20] Written: ${b.filename}`);
});

console.log('Done!');
