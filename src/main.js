// Global GSAP & ScrollTrigger Setup
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true, syncInterval: 99 });
}

// Project Data Store for Modals
const projectsData = {
  aravali: {
    title: "The Aravali Residence",
    category: "Residential / Interior Architecture",
    location: "Greater Noida, Uttar Pradesh",
    area: "8,500 Sq. Ft.",
    year: "2026",
    material: "Travertine, Smoked Oak, Fluted Plaster",
    heroImg: "assets/images/aravali_main.png",
    drawingImg: "assets/images/aravali_drawing.png",
    description: `The Aravali Residence was conceived as an architectural sanctuary where harsh North Indian summer daylight is softly diffused through custom fluted oak fins. Built over 8,500 square feet in Greater Noida, the double-height living hall features an 18-foot monolithic beige travertine fireplace floating against seamless warm micro-cement walls. Under Archit Rathi’s civil engineering oversight, all HVAC ductwork and recessed linear ambient channels were concealed within 1mm shadow-line reveals.`,
    gallery: [
      "assets/images/aravali_main.png",
      "assets/images/aravali_drawing.png",
      "assets/images/material_travertine.png"
    ]
  },
  serene: {
    title: "Villa Serene",
    category: "Modern Architectural Villa",
    location: "Delhi NCR, India",
    area: "12,000 Sq. Ft.",
    year: "2025",
    material: "Board-Formed Concrete, Teak Louvers, Basalt",
    heroImg: "assets/images/villa_serene.png",
    drawingImg: "assets/images/aravali_drawing.png",
    description: `Villa Serene is a bold cantilevered residence built around an outdoor dark basalt reflecting mirror. The exterior features board-formed architectural concrete panels juxtaposed against automated warm teak wood privacy louvers.`,
    gallery: [
      "assets/images/villa_serene.png",
      "assets/images/material_smoked_oak.png"
    ]
  },
  sky: {
    title: "Sky Penthouse",
    category: "Luxury Penthouse Interior",
    location: "Gurugram, Haryana",
    area: "6,200 Sq. Ft.",
    year: "2026",
    material: "Smoked Glass, Satin Brass, Calacatta Marble",
    heroImg: "assets/images/penthouse_sky.png",
    drawingImg: "assets/images/aravali_drawing.png",
    description: `Perched on the 32nd floor in Gurugram, Sky Penthouse features panoramic floor-to-ceiling glass walls, a custom sculptural satin brass floating light fixture, and raw unpolished Calacatta marble dining monoliths.`,
    gallery: [
      "assets/images/penthouse_sky.png"
    ]
  },
  courtyard: {
    title: "The Courtyard House",
    category: "Contemporary Residence",
    location: "Noida, Uttar Pradesh",
    area: "9,800 Sq. Ft.",
    year: "2025",
    material: "Exposed Concrete, Stone Tiles, Indoor Vegetation",
    heroImg: "assets/images/courtyard_house.png",
    drawingImg: "assets/images/aravali_drawing.png",
    description: `Designed around a central open-sky internal courtyard, this residence brings natural light deep into the ground floor plan. Exposed concrete columns framing a weeping fig tree create a tranquil sanctuary inside.`,
    gallery: [
      "assets/images/courtyard_house.png"
    ]
  }
};

// Journal Articles Data Store
const articlesData = {
  aravali: {
    title: "Inside The Aravali Residence",
    category: "Architectural Case Study — 2026",
    location: "Greater Noida, Uttar Pradesh",
    heroImg: "assets/images/aravali_main.png",
    description: `Exploring micro-cement finishes, daylight volume orientation, and custom fluted oak joinery in Greater Noida. The residence synthesizes passive solar shade with double-height spatial luxury, featuring an 18-foot monolithic travertine fireplace floating against seamless warm micro-cement walls.`
  },
  travertine: {
    title: "Material Notes: Travertine",
    category: "Material Essay — 2026",
    location: "Monograph Tactile Study",
    heroImg: "assets/images/material_travertine.png",
    description: `Tactile porosity, natural warm hues, and why unfilled Roman travertine outlasts synthetic porcelain. Sourced directly from Italian quarries, each slab brings timeless organic texture and micro-porous warmth into modern living spaces.`
  },
  light: {
    title: "Designing Around Natural Light",
    category: "Spatial Architecture — 2026",
    location: "Daylight Systems & Orientation",
    heroImg: "assets/images/courtyard_house.png",
    description: `Harnessing seasonal light paths, courtyard ventilation, and shadow play to create living sanctuaries. By aligning structural openings with North Indian sun angles, living spaces maintain thermal comfort and soft ambient illumination year-round.`
  }
};

// Dynamic Architectural Specification SVG Generator & Asset Pipeline
function createSpecSvgDataUrl(brandTitle, figTitle, figIndex, themeColor = '#C5A880', categoryName = 'ARCHITECTURAL SPECIFICATION') {
  const figNum = figIndex < 9 ? `0${figIndex + 1}` : `${figIndex + 1}`;
  const pathPatterns = [
    `<rect x="-350" y="-120" width="700" height="240" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <line x1="-350" y1="-40" x2="350" y2="-40" stroke="${themeColor}" stroke-width="1" stroke-dasharray="6,6"/>
     <circle cx="-150" cy="0" r="50" fill="none" stroke="${themeColor}" stroke-width="1.5"/>
     <rect x="50" y="-80" width="220" height="160" fill="none" stroke="${themeColor}" stroke-width="1.5" stroke-dasharray="4,4"/>`,
    
    `<rect x="-300" y="-150" width="600" height="300" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <line x1="-150" y1="-150" x2="-150" y2="150" stroke="${themeColor}" stroke-width="1.5"/>
     <line x1="0" y1="-150" x2="0" y2="150" stroke="${themeColor}" stroke-width="1.5"/>
     <line x1="150" y1="-150" x2="150" y2="150" stroke="${themeColor}" stroke-width="1.5"/>`,

    `<circle cx="0" cy="0" r="140" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <circle cx="0" cy="0" r="100" fill="none" stroke="${themeColor}" stroke-width="1" stroke-dasharray="4,4"/>
     <line x1="-160" y1="0" x2="160" y2="0" stroke="${themeColor}" stroke-width="1.5"/>
     <line x1="0" y1="-160" x2="0" y2="160" stroke="${themeColor}" stroke-width="1.5"/>`,

    `<polygon points="-300,-100 200,-100 300,-40 200,40 -300,40" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <line x1="-300" y1="-100" x2="-300" y2="100" stroke="${themeColor}" stroke-width="2"/>
     <line x1="200" y1="-100" x2="200" y2="100" stroke="${themeColor}" stroke-width="1.5" stroke-dasharray="4,4"/>`,

    `<rect x="-320" y="-120" width="640" height="240" rx="8" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <circle cx="-160" cy="0" r="70" fill="none" stroke="${themeColor}" stroke-width="1" stroke-dasharray="4,4"/>
     <circle cx="0" cy="0" r="70" fill="none" stroke="${themeColor}" stroke-width="1" stroke-dasharray="4,4"/>
     <circle cx="160" cy="0" r="70" fill="none" stroke="${themeColor}" stroke-width="1" stroke-dasharray="4,4"/>`,

    `<path d="M-300,-60 Q-280,100 0,100 Q280,100 300,-60 Z" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <ellipse cx="0" cy="-60" rx="300" ry="40" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <circle cx="0" cy="60" r="10" fill="none" stroke="${themeColor}" stroke-width="1.5"/>`,

    `<rect x="-30" y="-160" width="60" height="240" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <path d="M-30,-140 Q-120,-140 -120,-40" fill="none" stroke="${themeColor}" stroke-width="3"/>
     <circle cx="-120" cy="-30" r="8" fill="none" stroke="${themeColor}" stroke-width="2"/>`,

    `<circle cx="-140" cy="0" r="70" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <rect x="-140" y="-20" width="340" height="40" rx="8" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <line x1="-50" y1="-20" x2="180" y2="20" stroke="${themeColor}" stroke-width="1" stroke-dasharray="2,2"/>`,

    `<rect x="-350" y="-40" width="700" height="80" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <line x1="-350" y1="0" x2="350" y2="0" stroke="${themeColor}" stroke-width="1" stroke-dasharray="8,8"/>
     <circle cx="-180" cy="40" r="25" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <circle cx="0" cy="40" r="25" fill="none" stroke="${themeColor}" stroke-width="2"/>
     <circle cx="180" cy="40" r="25" fill="none" stroke="${themeColor}" stroke-width="2"/>`,

    `<g stroke="${themeColor}" stroke-width="1.5">
       <rect x="-300" y="-120" width="40" height="240"/>
       <rect x="-240" y="-120" width="40" height="240"/>
       <rect x="-180" y="-120" width="40" height="240"/>
       <rect x="-120" y="-120" width="40" height="240"/>
       <rect x="-60" y="-120" width="40" height="240"/>
       <rect x="0" y="-120" width="40" height="240"/>
       <rect x="60" y="-120" width="40" height="240"/>
       <rect x="120" y="-120" width="40" height="240"/>
       <rect x="180" y="-120" width="40" height="240"/>
       <rect x="240" y="-120" width="40" height="240"/>
     </g>`
  ];

  const drawingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <linearGradient id="bgGrad_${figNum}_${figIndex}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#121417"/>
        <stop offset="100%" stop-color="#1B1E24"/>
      </linearGradient>
      <pattern id="grid_${figNum}_${figIndex}" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${themeColor}" stroke-opacity="0.08" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="1200" height="800" fill="url(#bgGrad_${figNum}_${figIndex})"/>
    <rect width="1200" height="800" fill="url(#grid_${figNum}_${figIndex})"/>
    <rect x="40" y="40" width="1120" height="720" fill="none" stroke="${themeColor}" stroke-opacity="0.3" stroke-width="1.5"/>
    <rect x="52" y="52" width="1096" height="696" fill="none" stroke="${themeColor}" stroke-opacity="0.15" stroke-width="0.75" stroke-dasharray="4,4"/>
    
    <line x1="20" y1="40" x2="60" y2="40" stroke="${themeColor}" stroke-width="1.5"/>
    <line x1="40" y1="20" x2="40" y2="60" stroke="${themeColor}" stroke-width="1.5"/>
    <line x1="1140" y1="40" x2="1180" y2="40" stroke="${themeColor}" stroke-width="1.5"/>
    <line x1="1160" y1="20" x2="1160" y2="60" stroke="${themeColor}" stroke-width="1.5"/>
    <line x1="20" y1="760" x2="60" y2="760" stroke="${themeColor}" stroke-width="1.5"/>
    <line x1="40" y1="740" x2="40" y2="780" stroke="${themeColor}" stroke-width="1.5"/>
    <line x1="1140" y1="760" x2="1180" y2="760" stroke="${themeColor}" stroke-width="1.5"/>
    <line x1="1160" y1="740" x2="1160" y2="780" stroke="${themeColor}" stroke-width="1.5"/>

    <text x="80" y="88" font-family="monospace" font-size="13" fill="${themeColor}" fill-opacity="0.9" letter-spacing="3">VAASTVIK DESIGN GROUP &#8226; ${categoryName}</text>
    <text x="80" y="112" font-family="monospace" font-size="11" fill="${themeColor}" fill-opacity="0.6" letter-spacing="2">DRAWING REF: VDG-2026-${brandTitle.toUpperCase().replace(/[^A-Z]/g, '')} &#8226; SCALE 1:10 &#8226; FIG. ${figNum}</text>

    <text x="80" y="175" font-family="Georgia, serif" font-size="34" font-weight="300" fill="${themeColor}" letter-spacing="1">${brandTitle.toUpperCase()}</text>
    <text x="80" y="210" font-family="monospace" font-size="14" fill="${themeColor}" fill-opacity="0.85" letter-spacing="2">FIG ${figNum} &#8226; ${figTitle.toUpperCase()}</text>

    <g transform="translate(600, 440)">
      ${pathPatterns[figIndex % pathPatterns.length]}
    </g>

    <rect x="80" y="670" width="1040" height="60" fill="${themeColor}" fill-opacity="0.05" stroke="${themeColor}" stroke-opacity="0.25" stroke-width="1"/>
    <text x="100" y="695" font-family="monospace" font-size="12" fill="${themeColor}" fill-opacity="0.95" letter-spacing="2">SPECIFICATION: ${figTitle} for ${brandTitle} system.</text>
    <text x="100" y="715" font-family="monospace" font-size="10" fill="${themeColor}" fill-opacity="0.55" letter-spacing="1">FACTORY AUTHORIZED &#8226; PASSES EN/ISO 9001 STRUCTURAL INTEGRITY STANDARDS</text>
  </svg>`;

  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(drawingSvg)));
}

const brandPhotoSuiteMap = {
  boffi: [
    "assets/images/aravali_main.png",
    "assets/images/material_travertine.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/after_finished.png",
    "assets/images/penthouse_sky.png",
    "assets/images/hero_architecture.png",
    "assets/images/material_brass.png",
    "assets/images/aravali_drawing.png",
    "assets/images/villa_serene.png",
    "assets/images/courtyard_house.png"
  ],
  poliform: [
    "assets/images/material_smoked_oak.png",
    "assets/images/aravali_main.png",
    "assets/images/after_finished.png",
    "assets/images/hero_architecture.png",
    "assets/images/penthouse_sky.png",
    "assets/images/material_travertine.png",
    "assets/images/material_brass.png",
    "assets/images/courtyard_house.png",
    "assets/images/villa_serene.png",
    "assets/images/aravali_drawing.png"
  ],
  dada: [
    "assets/images/aravali_main.png",
    "assets/images/after_finished.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/material_travertine.png",
    "assets/images/hero_architecture.png",
    "assets/images/penthouse_sky.png",
    "assets/images/material_brass.png",
    "assets/images/villa_serene.png",
    "assets/images/courtyard_house.png",
    "assets/images/aravali_drawing.png"
  ],
  gaggenau: [
    "assets/images/after_finished.png",
    "assets/images/aravali_main.png",
    "assets/images/material_brass.png",
    "assets/images/hero_architecture.png",
    "assets/images/penthouse_sky.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/material_travertine.png",
    "assets/images/courtyard_house.png",
    "assets/images/villa_serene.png",
    "assets/images/aravali_drawing.png"
  ],

  dornbracht: [
    "assets/images/material_travertine.png",
    "assets/images/villa_serene.png",
    "assets/images/material_brass.png",
    "assets/images/after_finished.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/penthouse_sky.png",
    "assets/images/hero_architecture.png",
    "assets/images/aravali_main.png",
    "assets/images/courtyard_house.png",
    "assets/images/aravali_drawing.png"
  ],
  agape: [
    "assets/images/material_travertine.png",
    "assets/images/villa_serene.png",
    "assets/images/after_finished.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/material_brass.png",
    "assets/images/penthouse_sky.png",
    "assets/images/hero_architecture.png",
    "assets/images/courtyard_house.png",
    "assets/images/aravali_main.png",
    "assets/images/aravali_drawing.png"
  ],
  gessi: [
    "assets/images/material_brass.png",
    "assets/images/material_travertine.png",
    "assets/images/after_finished.png",
    "assets/images/villa_serene.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/hero_architecture.png",
    "assets/images/penthouse_sky.png",
    "assets/images/courtyard_house.png",
    "assets/images/aravali_main.png",
    "assets/images/aravali_drawing.png"
  ],
  kallista: [
    "assets/images/material_brass.png",
    "assets/images/material_travertine.png",
    "assets/images/after_finished.png",
    "assets/images/hero_architecture.png",
    "assets/images/villa_serene.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/penthouse_sky.png",
    "assets/images/aravali_main.png",
    "assets/images/courtyard_house.png",
    "assets/images/aravali_drawing.png"
  ],

  buster_punch: [
    "assets/images/material_brass.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/aravali_drawing.png",
    "assets/images/after_finished.png",
    "assets/images/hero_architecture.png",
    "assets/images/aravali_main.png",
    "assets/images/penthouse_sky.png",
    "assets/images/material_travertine.png",
    "assets/images/villa_serene.png",
    "assets/images/courtyard_house.png"
  ],
  formani: [
    "assets/images/material_brass.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/aravali_drawing.png",
    "assets/images/hero_architecture.png",
    "assets/images/after_finished.png",
    "assets/images/aravali_main.png",
    "assets/images/penthouse_sky.png",
    "assets/images/material_travertine.png",
    "assets/images/villa_serene.png",
    "assets/images/courtyard_house.png"
  ],
  ogro: [
    "assets/images/material_brass.png",
    "assets/images/aravali_drawing.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/after_finished.png",
    "assets/images/hero_architecture.png",
    "assets/images/aravali_main.png",
    "assets/images/penthouse_sky.png",
    "assets/images/material_travertine.png",
    "assets/images/villa_serene.png",
    "assets/images/courtyard_house.png"
  ],
  fsb: [
    "assets/images/material_brass.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/after_finished.png",
    "assets/images/aravali_drawing.png",
    "assets/images/hero_architecture.png",
    "assets/images/aravali_main.png",
    "assets/images/penthouse_sky.png",
    "assets/images/material_travertine.png",
    "assets/images/villa_serene.png",
    "assets/images/courtyard_house.png"
  ],

  flos: [
    "assets/images/penthouse_sky.png",
    "assets/images/courtyard_house.png",
    "assets/images/hero_architecture.png",
    "assets/images/after_finished.png",
    "assets/images/aravali_main.png",
    "assets/images/villa_serene.png",
    "assets/images/material_brass.png",
    "assets/images/material_travertine.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/aravali_drawing.png"
  ],
  viabizzuno: [
    "assets/images/courtyard_house.png",
    "assets/images/penthouse_sky.png",
    "assets/images/hero_architecture.png",
    "assets/images/after_finished.png",
    "assets/images/aravali_main.png",
    "assets/images/villa_serene.png",
    "assets/images/material_brass.png",
    "assets/images/material_travertine.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/aravali_drawing.png"
  ],
  occhio: [
    "assets/images/penthouse_sky.png",
    "assets/images/hero_architecture.png",
    "assets/images/courtyard_house.png",
    "assets/images/after_finished.png",
    "assets/images/aravali_main.png",
    "assets/images/villa_serene.png",
    "assets/images/material_brass.png",
    "assets/images/material_travertine.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/aravali_drawing.png"
  ],
  deltalight: [
    "assets/images/courtyard_house.png",
    "assets/images/hero_architecture.png",
    "assets/images/penthouse_sky.png",
    "assets/images/after_finished.png",
    "assets/images/aravali_main.png",
    "assets/images/villa_serene.png",
    "assets/images/material_brass.png",
    "assets/images/material_travertine.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/aravali_drawing.png"
  ],

  salvatori: [
    "assets/images/material_travertine.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/material_brass.png",
    "assets/images/villa_serene.png",
    "assets/images/aravali_main.png",
    "assets/images/after_finished.png",
    "assets/images/penthouse_sky.png",
    "assets/images/courtyard_house.png",
    "assets/images/hero_architecture.png",
    "assets/images/aravali_drawing.png"
  ],
  mutina: [
    "assets/images/material_travertine.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/courtyard_house.png",
    "assets/images/after_finished.png",
    "assets/images/villa_serene.png",
    "assets/images/aravali_main.png",
    "assets/images/penthouse_sky.png",
    "assets/images/material_brass.png",
    "assets/images/hero_architecture.png",
    "assets/images/aravali_drawing.png"
  ],
  dekton: [
    "assets/images/villa_serene.png",
    "assets/images/material_travertine.png",
    "assets/images/after_finished.png",
    "assets/images/hero_architecture.png",
    "assets/images/aravali_main.png",
    "assets/images/penthouse_sky.png",
    "assets/images/courtyard_house.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/material_brass.png",
    "assets/images/aravali_drawing.png"
  ],
  marazzi: [
    "assets/images/villa_serene.png",
    "assets/images/material_travertine.png",
    "assets/images/aravali_main.png",
    "assets/images/after_finished.png",
    "assets/images/penthouse_sky.png",
    "assets/images/courtyard_house.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/material_brass.png",
    "assets/images/hero_architecture.png",
    "assets/images/aravali_drawing.png"
  ]
};

function generateBrandAssetSuite(brandTitle, category, color, titles, brandKey = '') {
  const defaultSuite = [
    "assets/images/aravali_main.png",
    "assets/images/material_travertine.png",
    "assets/images/material_smoked_oak.png",
    "assets/images/after_finished.png",
    "assets/images/penthouse_sky.png",
    "assets/images/hero_architecture.png",
    "assets/images/material_brass.png",
    "assets/images/aravali_drawing.png",
    "assets/images/villa_serene.png",
    "assets/images/courtyard_house.png"
  ];
  const images = (brandPhotoSuiteMap[brandKey] || defaultSuite).slice(0, 10);
  const figureTitles = [];

  for (let i = 0; i < 10; i++) {
    const figNum = i < 9 ? `0${i + 1}` : `${i + 1}`;
    const titleText = titles[i] || `Architectural Photography Detail ${figNum}`;
    figureTitles.push(`FIG. ${figNum} • ${titleText.toUpperCase()}`);
  }
  return { images, figureTitles };
}

// Materials & Partners Data Store
const rawPartnersConfig = {
  // 01 KITCHEN ARCHITECTURE
  boffi: {
    title: "Boffi",
    category: "01 • KITCHEN ARCHITECTURE",
    website: "https://www.boffi.com",
    color: "#C5A880",
    description: "Italian pioneer in minimalist architectural kitchen design, crafting monolithic travertine islands, integrated concealed pocket doors, and matte stainless steel systems.",
    characteristics: ["Monolithic Travertine Islands", "Concealed Pocket Cabinetry", "Hand-Finished Satin Steel", "Integrated Seamless Basins"],
    applications: "Luxury Villa Master Kitchens, Open-Plan Penthouse Culinary Suites",
    explore: ["poliform", "dada", "gaggenau"],
    titles: [
      "Monolithic Travertine Island Cantilever",
      "Concealed Pocket Door Slide Mechanism",
      "Integrated Seamless Stainless Sink Basin",
      "K14 System 45-Degree Mitered Counter Top",
      "Recessed Induction & Teppanyaki Platform",
      "Full-Height Smoked Oak Tall Cabinetry",
      "Integrated Sommelier Wine Storage & Bronze Glass",
      "Solid Walnut Internal Cutlery & Organizer Tray",
      "Concealed 2700K Micro-LED Under-Cabinet Channel",
      "Italian Roman Travertine Monolith Selection"
    ]
  },
  poliform: {
    title: "Poliform",
    category: "01 • KITCHEN ARCHITECTURE",
    website: "https://www.poliform.it",
    color: "#D4AF37",
    description: "Tailor-made contemporary Italian cabinetry systems combining smoked oak veneer, architectural glass fronts, and ambient cove lighting.",
    characteristics: ["Smoked Oak Joinery Slabs", "Frameless Glass Showcases", "Integrated Cove LED Channels", "Custom Cutlery & Pantry Systems"],
    applications: "Bespoke Pantry Architecture, Double-Height Kitchen Pavilions",
    explore: ["boffi", "dada", "gaggenau"],
    titles: [
      "Smoked Oak Joinery Slab System",
      "Frameless Smoked Glass Display Cabinet",
      "Integrated Cove Lighting Channel Detail",
      "Custom Modular Pantry Wall Elevation",
      "Floating Timber Peninsula Breakfast Bar",
      "Recessed Shadowline Finger-Pull Profile",
      "Heavy-Duty Concealed Soft-Close Hinges",
      "Illuminated Glass Shelf with Micro-Frame",
      "Vertical Timber Slat Backsplash Panel",
      "Matte Lacquer & Natural Grain Mating"
    ]
  },
  dada: {
    title: "Dada / Molteni & C",
    category: "01 • KITCHEN ARCHITECTURE",
    website: "https://www.molteni.it",
    color: "#C0C0C0",
    description: "High-performance modular kitchen architecture designed in collaboration with Vincent Van Duysen, prioritizing tactile stone and timber warmth.",
    characteristics: ["Vincent Van Duysen Design", "PVD Gunmetal Stainless", "Custom Walnut Interiors", "Floating Counter Cantilevers"],
    applications: "Contemporary Villa Kitchens, Architectural Dining Suites",
    explore: ["boffi", "poliform", "gaggenau"],
    titles: [
      "Vincent Van Duysen Floating Counter Cantilever",
      "PVD Gunmetal Framework Specification",
      "Internal Solid Walnut Modular Tray System",
      "Monolithic Basalt Kitchen Island Detail",
      "Flush Pull-Out Column Pantry Architecture",
      "Ceiling Recessed Stainless Extraction Hood",
      "Motorized Sliding Marble Backsplash Panel",
      "Under-Mounted PVD Steel Chef Basin",
      "180-Degree Architectural Pivot Door Mechanism",
      "Internal Cabinet Sensor Lighting Strip"
    ]
  },
  gaggenau: {
    title: "Gaggenau",
    category: "01 • KITCHEN ARCHITECTURE",
    website: "https://www.gaggenau.com",
    color: "#E0E0E0",
    description: "German culinary engineering excellence. Hand-crafted stainless steel appliances, full-surface induction cooktops, and climate wine cabinets.",
    characteristics: ["3mm Solid Stainless Knobs", "Full-Surface Induction Optics", "Vario Modular Cooling", "TFT Touch Control Displays"],
    applications: "Chef's Show Kitchens, Private Sommelier Wine Cellars",
    explore: ["boffi", "poliform", "dada"],
    titles: [
      "Full-Surface Induction Optics & Zone Matrix",
      "3mm Solid Machined Stainless Rotary Switches",
      "Vario 400 Series Modular Cooktop Layout",
      "Combination Steam Oven & Graphite Glass",
      "Dual-Zone Climate Control Wine Cabinet",
      "Fully Integrated Vario Cooling Column",
      "Electric Teppanyaki Grill Plate Profile",
      "Telescopic Table Downdraft Ventilation",
      "TFT Touch Display Interface Diagram",
      "Built-In Vacuuming Drawer Specification"
    ]
  },

  // 02 BATH SANCTUARY
  dornbracht: {
    title: "Dornbracht",
    category: "02 • BATH SANCTUARY",
    website: "https://www.dornbracht.com",
    color: "#B0C4DE",
    description: "German precision bath fittings and sensory shower architectures featuring dark platinum satin, brushed brass, and architectural geometry.",
    characteristics: ["Sensory Sky Rain Panels", "Dark Platinum Satin Finishes", "Concealed Wall Valves", "100% Precision German Engineering"],
    applications: "Master Sanctuary Bathrooms, Private Spa Wellness Suites",
    explore: ["agape", "gessi", "kallista"],
    titles: [
      "Sensory Sky Ceiling Rain Panel System",
      "Dark Platinum Satin Surface Specification",
      "Concealed Thermostatic Wall Valves",
      "Freestanding Tub Spout Architectural Form",
      "Minimalist Cylindrical Hand Shower",
      "Horizontal Waterfall Neck Shower",
      "Recessed Body Massage Spray Jet Matrix",
      "Wall-Mounted Three-Hole Basin Mixer",
      "Smart Water Digital Control Panel",
      "Flush Floor Drain Channel Architecture"
    ]
  },
  agape: {
    title: "Agape",
    category: "02 • BATH SANCTUARY",
    website: "https://www.agapedesign.it",
    color: "#A9A9A9",
    description: "Iconic Italian bathroom architecture featuring freestanding Cristalmood tubs, monolithic travertine basins, and minimalist mirrors.",
    characteristics: ["Cristalmood Bio-Resin", "Monolithic Stone Basins", "Spoon & Vieques Tubs", "Minimalist Wall Vanities"],
    applications: "Architectural Master En-Suites, Private Powder Rooms",
    explore: ["dornbracht", "gessi", "kallista"],
    titles: [
      "Cristalmood Freestanding Bathtub Profile",
      "Monolithic Travertine Pedestal Basin",
      "Spoon XL Bio-Resin Compound Elevation",
      "Minimalist Suspended Timber Vanity",
      "Circular Ambient Lighted Wall Mirror",
      "Concealed Medicine Cabinet with Touch Release",
      "Vieques Steel & Wood Bathtub Profile",
      "Modular Matte Black Towel Rail System",
      "Marble Floating Shower Shelf Niche",
      "Integrated Bottle Trap & Siphon Detail"
    ]
  },
  gessi: {
    title: "Gessi",
    category: "02 • BATH SANCTUARY",
    website: "https://www.gessi.com",
    color: "#D4AF37",
    description: "Private wellness fittings from Italy, incorporating organic metal textures, woven brass details, and ceiling-mounted rain cascades.",
    characteristics: ["Woven Metal Knurling", "Ceiling Water Cascades", "PVD Antique Brass Finishes", "Eco-Energy Flow Valves"],
    applications: "Luxury Residence Powder Rooms, Spa Bathrooms",
    explore: ["dornbracht", "agape", "kallista"],
    titles: [
      "Woven Metal Knurled Deck Mixer",
      "Ceiling-Mounted Water Cascade Stream",
      "PVD Antique Brass Textural Knurling",
      "Spotwater Multi-Jet Shower Architecture",
      "Anxiety Freestanding Basin Tap Column",
      "Concealed Shut-Off Hygiene Spray Valve",
      "David Rockwell Inciso Collection Valve",
      "Warm Bronze PVD Wear Resistance Spec",
      "Eco-Stream Water Saving Aerator Nozzle",
      "Dual-Handle Thermostatic Mixer Plate"
    ]
  },
  kallista: {
    title: "Kohler Kallista",
    category: "02 • BATH SANCTUARY",
    website: "https://www.kallista.com",
    color: "#C5A880",
    description: "Bespoke luxury plumbing fixtures created in partnership with leading global architects, incorporating hand-cut crystal and forged metal.",
    characteristics: ["Hand-Forged Bronze Valves", "Cast-Stone Vessel Basins", "Script & Grid Collections", "Precision Quarter-Turn Controls"],
    applications: "Private Villa En-Suites, Luxury Hospitality Suites",
    explore: ["dornbracht", "agape", "gessi"],
    titles: [
      "Hand-Forged Bronze Valve System",
      "Cast-Stone Vessel Basin Elevation",
      "Grid 3D-Printed Faucet Architecture",
      "Script Porcelain & Metal Handle Inlay",
      "Cast Iron Freestanding Clawfoot Profile",
      "Traditional Thermostatic Shower Valve",
      "Crystal Lever Handle Mechanism",
      "Arched Roman Tub Filler Spout",
      "Pop-Up Drain with Custom Monogram Cover",
      "Recessed Marble Shower Caddy Spec"
    ]
  },

  // 03 ARCHITECTURAL HARDWARE
  buster_punch: {
    title: "Buster + Punch",
    category: "03 • ARCHITECTURAL HARDWARE",
    website: "https://www.busterandpunch.com",
    color: "#C5A880",
    description: "London hardware brand famous for diamond-cut cross-knurled solid metal door handles, cabinet pulls, and toggle light switches.",
    characteristics: ["Solid Knurled Brass & Steel", "Smoked Bronze Finishes", "Heavyweight Tactile Feel", "Matching Dimmer Switches"],
    applications: "Custom Pivot Entry Doors, Smoked Oak Joinery Pulls",
    explore: ["formani", "ogro", "fsb"],
    titles: [
      "Cross-Knurled Lever Door Handle",
      "Smoked Bronze PVD Surface Specification",
      "Solid Metal Toggle Light Switch Plate",
      "Heavyweight Cabinet T-Bar Pull Handle",
      "Knurled Rotary Dimmer Switch Knob",
      "Heavy-Duty Architectural Butt Hinge",
      "Privacy Thumb-Turn & Escutcheon Rose",
      "Floor-Mounted Solid Brass Door Stopper",
      "Euro-Profile Cylinder Keyhole Plate",
      "Heavy Metal Bulb Pendant Socket Spec"
    ]
  },
  formani: {
    title: "Formani",
    category: "03 • ARCHITECTURAL HARDWARE",
    website: "https://www.formani.com",
    color: "#CCCCCC",
    description: "Dutch architectural hardware designed by Piet Boon and Lazaro Rosa-Violan, featuring satin stainless and PVD matte black handles.",
    characteristics: ["Piet Boon Signature Series", "Concealed Rosette Fittings", "PVD Matte Black & Bronze", "Grade 316 Stainless Steel"],
    applications: "Architectural Interior Doors, Pivoting Exterior Gates",
    explore: ["buster_punch", "ogro", "fsb"],
    titles: [
      "Piet Boon Signature Lever Handle",
      "Ultra-Slim 3mm Concealed Rosette Fitting",
      "Grade 316 Satin Stainless Steel Spec",
      "PVD Matte Black Architectural Pull",
      "Lockable Flush-Fit Window Lever",
      "Pivot Entry Door Heavy-Duty Pull Bar",
      "Flush Recessed Sliding Door Pocket Ring",
      "Architectural Rectangular Cabinet Knob",
      "Magnetic Silent-Closing Door Latch",
      "Exterior Stainless Gate Handle Assembly"
    ]
  },
  ogro: {
    title: "Ogro",
    category: "03 • ARCHITECTURAL HARDWARE",
    website: "https://www.dormakaba.com",
    color: "#B8860B",
    description: "Precision German door control mechanisms and architectural lever handles engineered for heavy-use entrance doors.",
    characteristics: ["Heavy-Duty Roller Bearings", "Concealed Door Closers", "Satin Anodized Aluminum", "Fire-Rated Security Locks"],
    applications: "Main Entry Pivot Doors, Security Access Suites",
    explore: ["buster_punch", "formani", "fsb"],
    titles: [
      "German Precision Architectural Lever",
      "Heavy-Duty Ball-Bearing Rosette Assembly",
      "Concealed Overhead Hydraulic Door Closer",
      "Satin Anodized Aluminum Surface Spec",
      "Fire-Rated Security Lock Cylinder Matrix",
      "Architectural Panic Touch-Bar System",
      "Floor-Spring Heavy Pivot Hinge System",
      "Electronic RFID Smart Keypad Integration",
      "Tubular Stainless Entry Pull Bar",
      "Electric Strike Latch Release Spec"
    ]
  },
  fsb: {
    title: "FSB Architectural",
    category: "03 • ARCHITECTURAL HARDWARE",
    website: "https://www.fsb.de",
    color: "#CD853F",
    description: "Classic German handle manufacturer upholding Bauhaus traditions with tactile ergonomic levers in bronze and aluminum.",
    characteristics: ["Bauhaus Classic Designs", "Patinated Cast Bronze", "Ergonomic Grip Curves", "Flush-Fit Window Levers"],
    applications: "Residence Window Systems, Internal Timber Doors",
    explore: ["buster_punch", "formani", "ogro"],
    titles: [
      "Classic Bauhaus Ergonomic Lever",
      "Patinated Cast Bronze Hardware Spec",
      "Ergonomic Finger Grip Curve Profile",
      "Tilt-And-Turn Window Handle Assembly",
      "Flush-Mounted Square Escutcheon Plate",
      "Spherical Cast Bronze Fixed Door Knob",
      "3D Adjustable Concealed Timber Hinge",
      "Glass Door Lock & Handle Specification",
      "Burglar-Resistant Cylinder Guard",
      "Aged Waxed Bronze Patina Process Diagram"
    ]
  },

  // 04 LIGHTING SYSTEMS
  flos: {
    title: "Flos",
    category: "04 • LIGHTING SYSTEMS",
    website: "https://flos.com",
    color: "#FFD700",
    description: "Italian architectural lighting titan pioneering diffuse linear magnetic tracks, structural downlights, and iconic decorative pendants.",
    characteristics: ["Running Magnet Track Systems", "Minimalist Micro-Spotlights", "Soft Architecture Plaster-In", "Warm 2700K High-CRI LED"],
    applications: "Double-Height Gallery Walls, Architectural Cove Channels",
    explore: ["viabizzuno", "occhio", "deltalight"],
    titles: [
      "Running Magnet Track Lighting System",
      "Warm 2700K CRI 97 Micro-Spotlight Optic",
      "Recessed Plaster-In Track Housing",
      "Aim Suspended Sculptural Pendant Spec",
      "Architectural Deep Baffle Downlight",
      "Diffuse Ambient LED Strip Channel",
      "Indirect Wall-Washing Profile Light",
      "Remote DALI-2 Dimmable Power Driver",
      "Interchangeable Beam Angle Lens System",
      "IP67 Bollard & Facade Light Specification"
    ]
  },
  viabizzuno: {
    title: "Viabizzuno",
    category: "04 • LIGHTING SYSTEMS",
    website: "https://www.viabizzuno.com",
    color: "#F4A460",
    description: "Italian architectural light engineering studio creating light as a physical material—recessed linear slots and custom brass fixtures.",
    characteristics: ["Light As Architecture Concept", "Plaster-In Linear Slots", "Brass Micro-Optics", "Bespoke Spatial Profiles"],
    applications: "Monolithic Ceiling Slots, Exterior Facade Illumination",
    explore: ["flos", "occhio", "deltalight"],
    titles: [
      "Plaster-In Linear Light Slot",
      "Light As An Architectural Material Diagram",
      "Brass Micro-Optics Spotlight Module",
      "Continuous Ceiling Recessed Channel",
      "Architectural Grazing Exterior Illumination",
      "Indirect Perimeter Cove Light Troffer",
      "Bespoke Brass Suspension Light Fixture",
      "Recessed Display Shelf Light Channel",
      "Flush Wall Step-Light Illuminator",
      "Casambi Wireless Bluetooth Mesh Module"
    ]
  },
  occhio: {
    title: "Occhio",
    category: "04 • LIGHTING SYSTEMS",
    website: "https://www.occhio.com",
    color: "#DAA520",
    description: "Munich lighting brand engineering modular luminaire systems with gesture-controlled dimming, color temperature tuning, and 97 CRI LED.",
    characteristics: ["Touchless Gesture Controls", "Tunable White (2200K–4000K)", "CRI 97 True-Color Optics", "Phantom Bronze Finishes"],
    applications: "Executive Study Desks, Dining Table Suspensions",
    explore: ["flos", "viabizzuno", "deltalight"],
    titles: [
      "Mito Ring Suspended Luminaire",
      "Touchless Gesture Dimming & Tune Sensor",
      "Tunable White 2200K-4000K LED Matrix",
      "Phantom Bronze Finish Optical Ring",
      "Sento Wall-Mounted Rotating Spotlight",
      "Piu Recessed Spotlight with Lens Head",
      "Io 3D Desk Lamp Magnet Ball-And-Socket",
      "Occhio Air Smartphone Scene Controller",
      "Optical Zoom Beam Adjustment Ring",
      "Flush Ceiling Mounting Box Assembly"
    ]
  },
  deltalight: {
    title: "Delta Light",
    category: "04 • LIGHTING SYSTEMS",
    website: "https://www.deltalight.com",
    color: "#87CEEB",
    description: "Belgian architectural lighting specialist engineering low-glare dark light recessed spots, outdoor bollards, and linear profiles.",
    characteristics: ["Dark Light Baffle Design", "IP65 Architectural Outdoor", "Super-Trim Concealed Frames", "DALI-2 Wireless Controls"],
    applications: "Courtyard Landscape Lighting, Living Room Perimeter Cove",
    explore: ["flos", "viabizzuno", "occhio"],
    titles: [
      "Dark Light Low-Glare Baffle",
      "IP65 Architectural Outdoor Wall Light",
      "Super-Trim Concealed Recessed Frame",
      "Shiftline Magnetic Light Track Profile",
      "Minimalist Landscape Bollard Luminaire",
      "Suspended Architectural Linear Beam",
      "UGR<16 Anti-Glare Louver Profile",
      "48V Low Voltage Surface Track Rail",
      "Surface-Mounted Cylinder Downlight",
      "Aluminum Die-Cast Heatsink Diagram"
    ]
  },

  // 05 MATERIAL SURFACES
  salvatori: {
    title: "Salvatori Stone",
    category: "05 • MATERIAL SURFACES",
    website: "https://www.salvatoriofficial.com",
    color: "#D2B48C",
    description: "Tuscan natural stone house masterfully texturing raw Italian marble and beige travertine into fluted wall panels and monolithic surfaces.",
    characteristics: ["Bamboo & Lithoverde Ribbing", "Tuscan Crema d'Orcia Stone", "Micro-Ribbed Wall Panels", "Zero-Waste Recycled Slabs"],
    applications: "Master Bedroom Accent Walls, Travertine Fireplaces",
    explore: ["mutina", "dekton", "marazzi"],
    titles: [
      "Bamboo Ribbed Stone Panel",
      "Tuscan Crema d'Orcia Travertine Slab",
      "Lithoverde Recycled Marble Matheria",
      "Micro-Ribbed Feature Wall Elevation",
      "Romana Honed Travertine Texture",
      "Chevron Pattern Stone Flooring Spec",
      "Carved Monolithic Marble Basin Block",
      "1mm Hairline Stone Slab Joint Detail",
      "Organic Hydrophobic Stone Protection",
      "Quarry Slab Grain Matching Map"
    ]
  },
  mutina: {
    title: "Mutina Ceramica",
    category: "05 • MATERIAL SURFACES",
    website: "https://www.mutina.it",
    color: "#CD853F",
    description: "High-design Italian ceramic house collaborating with Patricia Urquiola and Ronan Bouroullec to create tactile, 3D textured ceramic tiles.",
    characteristics: ["3D Clay Relief Wall Tiles", "Urquiola Signature Reliefs", "Matte Earthy Pigments", "Extruded Terracotta Blocks"],
    applications: "Internal Courtyard Feature Walls, Powder Room Accents",
    explore: ["salvatori", "dekton", "marazzi"],
    titles: [
      "3D Clay Relief Ceramic Tile",
      "Patricia Urquiola Signature Relief",
      "Matte Earthy Terracotta Pigment Spec",
      "Celosia Extruded Terracotta Brick Screen",
      "Ronan Bouroullec Rome Tile System",
      "Matched Colored Epoxy Grout Joint",
      "Micro-Mosaic Tactile Ceramic Grid",
      "Artisanal Semi-Glazed Clay Tile Surface",
      "Mitered Corner Tile Finishing Piece",
      "Mesh-Backed Architectural Tile Sheet"
    ]
  },
  dekton: {
    title: "Cosentino Dekton",
    category: "05 • MATERIAL SURFACES",
    website: "https://www.cosentino.com/dekton",
    color: "#BC8F8F",
    description: "Ultra-compact sintered stone surface engineered from quartz, porcelain, and glass. Heat-proof, scratch-proof, and impervious to UV.",
    characteristics: ["Sintered Particle Tech", "Zero Porosity & Stain Proof", "Large Format 3200x1440mm", "UV-Resistant Facade Cladding"],
    applications: "Exterior Facade Cladding, Outdoor Kitchen Countertops",
    explore: ["salvatori", "mutina", "marazzi"],
    titles: [
      "Sintered Stone Slab Architecture",
      "Large Format 3200x1440mm Panels",
      "Zero Porosity & Stain-Proof Test Diagram",
      "UV-Resistant Ventilated Facade Spec",
      "Thermal Shock Resistance Matrix",
      "Beveled 12mm Countertop Edge Profile",
      "Outdoor Kitchen Weatherproof Surface",
      "Concealed Mechanical Facade Anchor",
      "Velvet Matte Anti-Reflective Finish",
      "Heavy Traffic Commercial Tile Spec"
    ]
  },
  marazzi: {
    title: "Marazzi Italia",
    category: "05 • MATERIAL SURFACES",
    website: "https://www.marazzigroup.com",
    color: "#D3D3D3",
    description: "Leading Italian porcelain stonemason crafting large-format 6mm marble-look slabs and anti-bacterial 3D ink porcelain finishes.",
    characteristics: ["Grande Slabs (160x320cm)", "3D Ink Surface Texture", "Puro Antibacterial Tech", "Natural Matt Concrete Finishes"],
    applications: "Double-Height Living Flooring, Terrace Paving Slabs",
    explore: ["salvatori", "mutina", "dekton"],
    titles: [
      "Grande 160x320cm Slab Profile",
      "3D Ink Digital Surface Texture Matrix",
      "Puro Antibacterial Porcelain Tech",
      "Natural Matt Concrete Porcelain Tile",
      "Calacatta Marble Reproduction Slab",
      "20mm Thick Slip-Resistant Paving Tile",
      "6mm Ultra-Slim Reinforced Slab Spec",
      "Full-Height Seamless Bathroom Wall Tile",
      "Rectified Edge 0.5mm Tolerance Diagram",
      "Integrated Bullnose Stair Tread Tile"
    ]
  }
};

const partnersData = {};
Object.keys(rawPartnersConfig).forEach(key => {
  const conf = rawPartnersConfig[key];
  const suite = generateBrandAssetSuite(conf.title, conf.category, conf.color, conf.titles, key);
  partnersData[key] = {
    title: conf.title,
    category: conf.category,
    website: conf.website,
    description: conf.description,
    characteristics: conf.characteristics,
    applications: conf.applications,
    explore: conf.explore,
    images: suite.images,
    figureTitles: suite.figureTitles
  };
});

// Testimonials Data
const testimonials = [
  {
    quote: "“It has been a great experience with Vaastvik Design Group building our home's interior. They are a team of professionals, delivering uncompromising quality and on-time service.”",
    author: "— Residential Patron, Greater Noida Villa"
  },
  {
    quote: "“It’s an awesome experience getting the interior of our home designed by Archit Rathi’s team. The entire crew was truly resourceful, patient, and precise with materials.”",
    author: "— Luxury Homeowner, Delhi NCR"
  },
  {
    quote: "“From the start till final handover, it was a seamless experience. They accommodated custom joinery requests while keeping project budgets transparent.”",
    author: "— Private Client, Noida Sector 150"
  }
];

let currentTestimonialIndex = 0;

// Initialize Web App
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initLenis();
  initHeaderBehavior();
  initGSAPAnimations();
  initMaterialTabs();
  initDrawingRealityToggle();
  initBeforeAfterSlider();
  initTestimonials();
  initPartnerDetails();
  initModals();
  initMobileMenu();
  initFormSubmission();
});

// Loader dismissal & header reveal
function initLoader() {
  const loader = document.getElementById('loader');
  const progress = document.getElementById('loader-progress');
  
  let p = 0;
  const interval = setInterval(() => {
    p += 20;
    if (progress) progress.style.width = p + '%';
    if (p >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        if (loader) {
          loader.style.opacity = '0';
          setTimeout(() => {
            loader.style.display = 'none';
            revealHeaderOnLoad();
          }, 800);
        }
      }, 300);
    }
  }, 80);
}

// Reveal header on page load with subtle opacity & upward movement
function revealHeaderOnLoad() {
  const logo = document.getElementById('header-logo');
  const navLinks = document.getElementById('header-nav-links');
  const ctaWrap = document.getElementById('header-cta-wrap');

  if (typeof gsap !== 'undefined') {
    gsap.fromTo(logo, { opacity: 0, y: 0 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
    gsap.fromTo(navLinks, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.15, ease: "power2.out" });
    gsap.fromTo(ctaWrap, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.25, ease: "power2.out" });
  } else {
    if (logo) logo.style.opacity = '1';
    if (navLinks) navLinks.style.opacity = '1';
    if (ctaWrap) ctaWrap.style.opacity = '1';
  }
}

// Architectural Header Scroll Physics
function initHeaderBehavior() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 60) {
      navbar.classList.add('header-scrolled', 'py-4', 'md:py-5');
      navbar.classList.remove('header-hero', 'py-8', 'md:py-10');
    } else {
      navbar.classList.add('header-hero', 'py-8', 'md:py-10');
      navbar.classList.remove('header-scrolled', 'py-4', 'md:py-5');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// Smooth Scroll Integration: Use native browser scrolling for instant responsiveness
function initLenis() {
  // Disabled Lenis software smoothing to ensure 100% instant native scrolling
  return;
}

// GSAP Animations
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // Cinematic Architectural Photo Mask & Scroll-Reveal Opening
  initCinematicHero();

  // Architectural Manifesto Masked Reveal Sequence
  initManifestoTimeline();

  // Featured Monograph Expanding Image Scroll Reveal
  initFeaturedProjectReveal();

  // Two-Column Editorial Storytelling Reveal (The Aravali Residence)
  initProjectStoryAnimations();

  // Cinematic Horizontal Project Archive (350vh Pinned Sequence)
  initHorizontalArchive();

  // Pinned Tactile Material Study (MATTER / 04 / MATERIAL STUDY — 350vh Sequence)
  initMatterSection();

  // Signature Scroll Transformation: From Drawing to Space (350vh Pinned Sequence)
  initDrawingToSpaceSequence();

  // Turnkey Construction Transformation: From Ground to Home (300vh Pinned Sequence)
  initGroundToHomeSection();

  // Dark Section: Cinematic Typography
  initDarkCinematic();

  // Editorial Services Rows & Subtle Cursor Preview (05 / THE STUDIO)
  initEditorialServices();

  // Premium Editorial Founder Profile (06 / THE MIND — Unmask & Parallax)
  initFounderEditorial();

  // Sophisticated Materials & Partners Credibility Section (07 / MATERIALS & PARTNERS)
  initPartnershipsSection();

  // Single-Focus Client Testimonial Experience (08 / WORDS FROM CLIENTS — 300vh Pinned Sequence)
  initClientWordsSection();

  // Pinned Scroll-Driven Before / After Transformation Engine (09 / TRANSFORMATION — 300vh Pinned Sequence)
  initPinnedBeforeAfter();

  // Asymmetric Editorial Journal Section (10 / JOURNAL — Mask Unmasking)
  initEditorialJournal();

  // Final Editorial CTA Section (11 / START A PROJECT — Typography Scale & Reveal)
  initEditorialCTA();
}

// Cinematic Scroll-Reveal Opening Sequence
function initCinematicHero() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const heroWrap = document.getElementById('hero-pinned-wrap');
  const canvasWrap = document.getElementById('hero-canvas-wrap');
  const heroVideo = document.getElementById('hero-video');
  const titleWrap = document.getElementById('hero-title-wrap');
  const initialMeta = document.getElementById('hero-initial-meta');
  const scrolledMeta = document.getElementById('hero-scrolled-meta');

  if (!heroWrap || !canvasWrap) return;

  const isMobile = window.innerWidth < 768;
  const initialClip = isMobile ? 'inset(16% 12% 16% 12%)' : 'inset(12% 33% 12% 33%)';

  gsap.set(canvasWrap, { clipPath: initialClip });
  gsap.set(heroVideo, { scale: 1.08 });
  gsap.set(titleWrap, { opacity: 0, y: 35 });
  gsap.set(scrolledMeta, { opacity: 0, y: 15 });

  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: heroWrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    }
  });

  heroTl
    // 0% -> 45%: Expand photograph clip-path mask & contract video scale 1.08 -> 1.00
    .to(canvasWrap, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.45, ease: 'none' }, 0)
    .to(heroVideo, { scale: 1.0, duration: 0.45, ease: 'none' }, 0)
    .to(initialMeta, { opacity: 0, y: 15, duration: 0.2, ease: 'none' }, 0.05)

    // ~30%: Reveal "SPACES, THOUGHTFULLY IMAGINED." typography moving vertically ~35px
    .to(titleWrap, { opacity: 1, y: 0, duration: 0.3, ease: 'none' }, 0.25)

    // ~60%: Reveal project sub-metadata
    .to(scrolledMeta, { opacity: 1, y: 0, duration: 0.2, ease: 'none' }, 0.55)

    // ~80% -> 100%: Hero typography moves away as image transitions into next section
    .to(titleWrap, { opacity: 0, y: -45, duration: 0.25, ease: 'none' }, 0.75)
    .to(scrolledMeta, { opacity: 0, y: -20, duration: 0.25, ease: 'none' }, 0.75);
}

// Editorial Architectural Manifesto (Pinned 200vh Sequence)
function initManifestoTimeline() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const wrap = document.getElementById('pinned-philosophy-wrap');
  const stickyContent = document.getElementById('pinned-philosophy');
  const line1 = document.getElementById('manifesto-line-1');
  const line2 = document.getElementById('manifesto-line-2');
  const line3 = document.getElementById('manifesto-line-3');
  const line4 = document.getElementById('manifesto-line-4');
  const borderLine = document.getElementById('manifesto-line');

  if (!wrap || !line1) return;

  // Set initial masked states
  gsap.set([line1, line2, line3, line4], {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    y: 40,
    opacity: 0
  });
  if (borderLine) {
    gsap.set(borderLine, { scaleX: 0, transformOrigin: 'left' });
  }

  const manifestoTl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    }
  });

  manifestoTl
    // 0% -> 20%: Reveal SPACE
    .to(line1, {
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
      y: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.out'
    }, 0.05)

    // 20% -> 40%: Reveal IS
    .to(line2, {
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
      y: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.out'
    }, 0.25)

    // 40% -> 60%: Reveal EXPERIENCE.
    .to(line3, {
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
      y: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.out'
    }, 0.45)

    // 60% -> 80%: Reveal AND EXPERIENCE IS PERSONAL.
    .to(line4, {
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
      y: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.out'
    }, 0.65)

    // Thin Architectural Rule extends across screen from 0% to 85% scroll using GPU scaleX
    .to(borderLine, { scaleX: 1, duration: 0.85, ease: 'none' }, 0)

    // 85% -> 100%: Manifesto moves slightly upward and fades as next section enters
    .to(stickyContent, { y: -30, opacity: 0.2, duration: 0.15, ease: 'none' }, 0.85);
}

// Featured Monograph Expanding Image Scroll Reveal (The Aravali Residence)
function initFeaturedProjectReveal() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const wrap = document.getElementById('projects') || document.getElementById('featured-project-wrap');
  const stickyContainer = document.getElementById('featured-project-sticky');
  const imageMask = document.getElementById('aravali-image-mask');
  const imgInner = document.getElementById('aravali-img-inner');
  const numMeta = document.getElementById('aravali-num-meta');
  const titleWrap = document.getElementById('aravali-title-wrap');
  const locMeta = document.getElementById('aravali-loc-meta');
  const bottomMeta = document.getElementById('aravali-bottom-meta');

  if (!wrap || !imageMask) return;

  const isMobile = window.innerWidth < 768;
  const initialClip = isMobile ? 'inset(14% 5% 14% 20%)' : 'inset(12% 8% 12% 36%)';

  gsap.set(imageMask, { clipPath: initialClip });
  gsap.set(imgInner, { scale: 1.15, yPercent: -5 });
  gsap.set(numMeta, { opacity: 0, y: 15 });
  gsap.set(titleWrap, { opacity: 0, y: 35 });
  gsap.set(locMeta, { opacity: 0, y: 15 });
  gsap.set(bottomMeta, { opacity: 0, y: 20 });

  const projectTl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    }
  });

  projectTl
    // 0% -> 15%: 1. Project number appears first
    .to(numMeta, { opacity: 1, y: 0, duration: 0.15, ease: 'none' }, 0)

    // 15% -> 50%: Image physically expands from off-center 55vw -> 100vw full bleed
    .to(imageMask, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.35, ease: 'none' }, 0.1)
    .to(imgInner, { scale: 1.0, yPercent: 5, duration: 0.35, ease: 'none' }, 0.1)

    // 25% -> 45%: 2. Title appears second
    .to(titleWrap, { opacity: 1, y: 0, duration: 0.25, ease: 'none' }, 0.2)

    // 40% -> 60%: 3. Location & Discipline appear last
    .to(locMeta, { opacity: 1, y: 0, duration: 0.2, ease: 'none' }, 0.4)
    .to(bottomMeta, { opacity: 1, y: 0, duration: 0.2, ease: 'none' }, 0.45)

    // 70% -> 85%: Image pins briefly at full width

    // 85% -> 100%: Section moves upward so next section emerges from underneath!
    .to(stickyContainer, { yPercent: -100, duration: 0.2, ease: 'none' }, 0.85);
}

// Two-Column Editorial Storytelling Reveal (The Aravali Residence)
function initProjectStoryAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // Masked Image Reveals with Scale 1.04 -> 1.00
  const storyImgs = document.querySelectorAll('.story-img-reveal');
  storyImgs.forEach((wrap) => {
    const mask = wrap.querySelector('.story-img-mask');
    const img = wrap.querySelector('.story-img');
    if (!mask || !img) return;

    gsap.fromTo(mask, 
      { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      {
        clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: wrap,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(img,
      { scale: 1.08 },
      {
        scale: 1.00,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: wrap,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Masked Text Block Reveals from below
  const storyBlocks = document.querySelectorAll('.story-text-block');
  storyBlocks.forEach((block) => {
    gsap.fromTo(block,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}

// Cinematic Horizontal Project Archive (350vh Pinned Sequence)
function initHorizontalArchive() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const wrap = document.getElementById('archive-wrap');
  const track = document.getElementById('archive-track');
  const activeNum = document.getElementById('archive-active-num');
  const activeMetaText = document.getElementById('archive-meta-text');
  const items = document.querySelectorAll('.archive-item');

  if (!wrap || !track || items.length === 0) return;

  const getScrollAmount = () => {
    return -(track.scrollWidth - window.innerWidth + 120);
  };

  const archiveTl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      invalidateOnRefresh: true,
    }
  });

  archiveTl.to(track, {
    x: getScrollAmount,
    ease: 'none'
  });

  // Track active project item during horizontal scroll scrubbing
  items.forEach((item) => {
    const indexStr = item.getAttribute('data-index');
    const metaStr = item.getAttribute('data-meta');
    const img = item.querySelector('.archive-img');

    ScrollTrigger.create({
      trigger: item,
      containerAnimation: archiveTl,
      start: 'left center',
      end: 'right center',
      onEnter: () => updateArchiveState(indexStr, metaStr, img, items),
      onEnterBack: () => updateArchiveState(indexStr, metaStr, img, items)
    });
  });

  function updateArchiveState(num, meta, activeImg, allItems) {
    if (activeNum) {
      activeNum.innerHTML = `${num} <span class="text-xs font-mono text-muted">/ 05</span>`;
    }
    if (activeMetaText) {
      activeMetaText.innerHTML = meta;
    }
    allItems.forEach(i => {
      const im = i.querySelector('.archive-img');
      if (im === activeImg) {
        gsap.to(im, { scale: 1.0, duration: 0.5 });
      } else {
        gsap.to(im, { scale: 1.06, duration: 0.5 });
      }
    });
  }
}

// Pinned Tactile Material Study (MATTER / 04 / MATERIAL STUDY — 350vh Sequence)
function initMatterSection() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const wrap = document.getElementById('matter') || document.getElementById('matter-wrap');
  const slides = document.querySelectorAll('.matter-slide');
  const titleEl = document.getElementById('matter-title');
  const tagEl = document.getElementById('matter-tag');
  const descEl = document.getElementById('matter-desc');
  const activeNum = document.getElementById('matter-active-num');
  const progressLine = document.getElementById('matter-progress-line');

  if (!wrap || slides.length === 0) return;

  const matterTl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        if (progressLine) {
          progressLine.style.width = `${Math.min(100, self.progress * 100)}%`;
        }
      }
    }
  });

  const count = slides.length;
  slides.forEach((slide, idx) => {
    const title = slide.getAttribute('data-title');
    const tag = slide.getAttribute('data-tag');
    const desc = slide.getAttribute('data-desc');
    const num = slide.getAttribute('data-index');
    const img = slide.querySelector('.matter-img');

    const stepStart = idx / count;

    if (idx > 0) {
      matterTl.to(slide, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.1,
        ease: 'none',
        onStart: () => updateText(title, tag, desc, num, img),
        onReverseComplete: () => {
          const prevSlide = slides[idx - 1];
          if (prevSlide) {
            updateText(
              prevSlide.getAttribute('data-title'),
              prevSlide.getAttribute('data-tag'),
              prevSlide.getAttribute('data-desc'),
              prevSlide.getAttribute('data-index'),
              prevSlide.querySelector('.matter-img')
            );
          }
        }
      }, stepStart);
    } else {
      matterTl.call(() => {
        updateText(title, tag, desc, num, img);
      }, null, 0);
    }
  });

  function updateText(title, tag, desc, num, img) {
    if (titleEl && titleEl.textContent !== title) {
      gsap.to([titleEl, tagEl, descEl], { opacity: 0, y: -10, duration: 0.2, onComplete: () => {
        if (titleEl) titleEl.textContent = title;
        if (tagEl) tagEl.textContent = tag;
        if (descEl) descEl.textContent = desc;
        if (activeNum) activeNum.innerHTML = `${num} <span class="text-xs font-mono text-stone">/ 06</span>`;
        gsap.to([titleEl, tagEl, descEl], { opacity: 1, y: 0, duration: 0.3 });
      }});
    }

    if (img) {
      gsap.fromTo(img, { scale: 1.08 }, { scale: 1.00, duration: 0.8, ease: 'power2.out' });
    }
  }
}

// Signature Scroll Transformation: From Drawing to Space (350vh Pinned Sequence)
function initDrawingToSpaceSequence() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const wrap = document.getElementById('drawing-space-wrap');
  const layer2 = document.getElementById('d2s-layer-2');
  const layer3 = document.getElementById('d2s-layer-3');
  const layer4 = document.getElementById('d2s-layer-4');

  const stageBadge = document.getElementById('d2s-stage-badge');
  const stageTitle = document.getElementById('d2s-stage-title');
  const stageDesc = document.getElementById('d2s-stage-desc');
  const stageNum = document.getElementById('d2s-stage-num');
  const canvasBadge = document.getElementById('d2s-canvas-badge');
  const realTag = document.getElementById('d2s-real-tag');

  if (!wrap || !layer2 || !layer3 || !layer4) return;

  const d2sTl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  // Stage 01 -> Stage 02: Form (0.00 -> 0.33)
  d2sTl.to(layer2, {
    clipPath: 'circle(120% at 50% 50%)',
    ease: 'none',
    duration: 0.33,
    onStart: () => updateStageInfo(
      'STAGE 02 • STRUCTURAL FORM',
      'FORM',
      '3D structural skeleton taking shape. Reinforced concrete beams, double-height voids, and cantilevered galleries.',
      'STAGE 02',
      '02 / STRUCTURAL FORM',
      false
    ),
    onReverseComplete: () => updateStageInfo(
      'STAGE 01 • ARCHITECTURAL CAD',
      'ARCHITECTURAL DRAWING',
      'Precise 2D CAD floorplan mapping structural axes, load-bearing columns, and daylight angles to 1mm tolerances.',
      'STAGE 01',
      '01 / ARCHITECTURAL CAD',
      false
    )
  }, 0);

  // Stage 02 -> Stage 03: Material (0.33 -> 0.66)
  d2sTl.to(layer3, {
    clipPath: 'circle(120% at 50% 50%)',
    ease: 'none',
    duration: 0.33,
    onStart: () => updateStageInfo(
      'STAGE 03 • MATERIAL SYNTHESIS',
      'MATERIAL',
      'Tactile surface integration. Monolithic beige travertine cladding and custom fluted oak acoustic paneling.',
      'STAGE 03',
      '03 / MATERIAL SYNTHESIS',
      false
    )
  }, 0.33);

  // Stage 03 -> Stage 04: Real Space (0.66 -> 1.00)
  d2sTl.to(layer4, {
    clipPath: 'circle(120% at 50% 50%)',
    ease: 'none',
    duration: 0.34,
    onStart: () => updateStageInfo(
      'STAGE 04 • EXECUTED SANCTUARY',
      'REAL SPACE',
      'The executed sanctuary: ambient daylight softly diffuses through oak louvers across warm travertine floors.',
      'STAGE 04',
      '04 / EXECUTED REAL SPACE',
      true
    )
  }, 0.66);

  function updateStageInfo(badge, title, desc, num, cBadge, showRealTag) {
    if (stageTitle && stageTitle.textContent !== title) {
      gsap.to([stageBadge, stageTitle, stageDesc], {
        opacity: 0,
        y: -10,
        duration: 0.15,
        onComplete: () => {
          if (stageBadge) stageBadge.textContent = badge;
          if (stageTitle) stageTitle.textContent = title;
          if (stageDesc) stageDesc.textContent = desc;
          if (stageNum) stageNum.innerHTML = `${num} <span class="text-xs font-mono text-muted">/ 04</span>`;
          if (canvasBadge) canvasBadge.textContent = cBadge;

          gsap.to([stageBadge, stageTitle, stageDesc], { opacity: 1, y: 0, duration: 0.25 });
        }
      });
    }

    if (realTag) {
      if (showRealTag) {
        gsap.to(realTag, { opacity: 1, y: 0, duration: 0.4 });
      } else {
        gsap.to(realTag, { opacity: 0, y: 15, duration: 0.3 });
      }
    }
  }
}

// Turnkey Construction Transformation: From Ground to Home (300vh Pinned Sequence)
function initGroundToHomeSection() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const wrap = document.getElementById('ground-home-wrap');
  const layer2 = document.getElementById('g2h-layer-2');
  const layer3 = document.getElementById('g2h-layer-3');
  const imgs = document.querySelectorAll('.g2h-img');

  const badge = document.getElementById('g2h-stage-badge');
  const title = document.getElementById('g2h-stage-title');
  const keywords = document.getElementById('g2h-keywords');
  const desc = document.getElementById('g2h-stage-desc');
  const stageNum = document.getElementById('g2h-stage-num');
  const canvasBadge = document.getElementById('g2h-canvas-badge');

  if (!wrap || !layer2 || !layer3) return;

  const g2hTl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  // Slow subtle camera movement across time-lapse duration
  g2hTl.to(imgs, {
    scale: 1.02,
    y: '-2%',
    ease: 'none',
    duration: 1.0
  }, 0);

  // Stage 01 (RAW) -> Stage 02 (FORM) : 0.00 -> 0.50
  g2hTl.to(layer2, {
    clipPath: 'inset(0% 0 0 0)',
    ease: 'power1.inOut',
    duration: 0.50,
    onStart: () => updateG2HInfo(
      'STAGE 02 • INTERIOR FORM',
      'FORM',
      'Walls. Joinery. Lighting. Stone. Furniture installation.',
      'Architectural joinery, stone wall cladding mounting, recessed lighting channels, and bespoke millwork fitting.',
      '02',
      '02 / ARCHITECTURAL FORM & JOINERY'
    ),
    onReverseComplete: () => updateG2HInfo(
      'STAGE 01 • CIVIL EXCAVATION',
      'RAW',
      'Construction site. Concrete. Steel. Dust. Drawings.',
      'Civil excavation, reinforced concrete framework, structural steel erection, and site utility layout executed under strict engineering supervision.',
      '01',
      '01 / STRUCTURAL RAW SHELL'
    )
  }, 0);

  // Stage 02 (FORM) -> Stage 03 (LIFE) : 0.50 -> 1.00
  g2hTl.to(layer3, {
    clipPath: 'inset(0% 0 0 0)',
    ease: 'power1.inOut',
    duration: 0.50,
    onStart: () => updateG2HInfo(
      'STAGE 03 • LIVED ENVIRONMENT',
      'LIFE',
      'Finished interior. Natural light. Furniture. Human presence.',
      'The inhabited sanctuary: warm daylight pools across travertine floors, curated furniture in place, lived human atmosphere.',
      '03',
      '03 / EXECUTED LIVED HOME'
    )
  }, 0.50);

  function updateG2HInfo(sBadge, sTitle, sKeywords, sDesc, sNum, cBadge) {
    if (title && title.textContent.trim() !== sTitle) {
      gsap.to([badge, title, keywords, desc], {
        opacity: 0,
        y: -10,
        duration: 0.15,
        onComplete: () => {
          if (badge) badge.textContent = sBadge;
          if (title) title.textContent = sTitle;
          if (keywords) keywords.textContent = sKeywords;
          if (desc) desc.textContent = sDesc;
          if (stageNum) stageNum.innerHTML = `${sNum} <span class="text-xs font-mono text-stone">/ 03</span>`;
          if (canvasBadge) canvasBadge.textContent = cBadge;

          gsap.to([badge, title, keywords, desc], { opacity: 1, y: 0, duration: 0.25 });
        }
      });
    }
  }
}

// Dark Section: Cinematic Typography Animation
function initDarkCinematic() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const section = document.getElementById('dark-cinematic');
  const line1 = document.getElementById('dark-line-1');
  const line2 = document.getElementById('dark-line-2');
  const line3 = document.getElementById('dark-line-3');

  if (!section || !line1 || !line2 || !line3) return;

  gsap.fromTo(line1,
    { scale: 0.92, opacity: 0.4 },
    {
      scale: 1.0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo(line2,
    { letterSpacing: '0.02em', opacity: 0, y: 15 },
    {
      letterSpacing: '0.12em',
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 65%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo(line3,
    { opacity: 0, y: 20 },
    {
      opacity: 0.8,
      y: 0,
      duration: 1.0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 55%',
        toggleActions: 'play none none reverse'
      }
    }
  );
}

// Editorial Services Rows & Subtle Cursor Preview (05 / THE STUDIO)
function initEditorialServices() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const rows = document.querySelectorAll('.editorial-service-row');
  const previewWrap = document.getElementById('service-preview-wrap');
  const previewImg = document.getElementById('service-preview-img');

  if (previewWrap) {
    const setX = gsap.quickSetter(previewWrap, "x", "px");
    const setY = gsap.quickSetter(previewWrap, "y", "px");

    // Progressive scroll reveal for service rows
    rows.forEach((row, idx) => {
      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: idx * 0.15,
        ease: 'power3.out'
      });

      // Desktop Hover & Cursor Tracking
      if (previewImg) {
        row.addEventListener('mouseenter', (e) => {
          const imgSrc = row.getAttribute('data-img');
          if (imgSrc) {
            previewImg.src = imgSrc;
          }

          gsap.to(previewWrap, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
          });

          gsap.to(previewImg, {
            scale: 1.05,
            duration: 0.6,
            ease: 'power2.out'
          });
        });

        row.addEventListener('mousemove', (e) => {
          setX(e.clientX + 24);
          setY(e.clientY - 110);
        });

        row.addEventListener('mouseleave', () => {
          gsap.to(previewWrap, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: 'power2.in'
          });
        });
      }
    });
  }
}

// Premium Editorial Founder Profile (06 / THE MIND — Unmask & Parallax)
function initFounderEditorial() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const section = document.getElementById('founder-editorial');
  const portraitWrap = document.getElementById('founder-portrait-wrap');
  const portraitImg = document.getElementById('founder-portrait-img');

  if (!section || !portraitWrap || !portraitImg) return;

  // Portrait Unmasking on Scroll into viewport
  gsap.fromTo(portraitWrap, 
    { clipPath: 'inset(18% 0 18% 0)' },
    {
      clipPath: 'inset(0% 0 0% 0)',
      duration: 1.4,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        end: 'top 25%',
        scrub: true
      }
    }
  );

  // Subtle Vertical Parallax for Portrait Image
  gsap.fromTo(portraitImg,
    { y: '-8%', scale: 1.08 },
    {
      y: '8%',
      scale: 1.00,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    }
  );
}

// Sophisticated Materials & Partners Credibility Section (07 / MATERIALS & PARTNERS)
function initPartnershipsSection() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const section = document.getElementById('partnerships-editorial');
  const groups = document.querySelectorAll('.partner-group');

  if (!section || !groups.length) return;

  // Soft stagger reveal of monochrome partner categories as user scrolls
  gsap.from(groups, {
    opacity: 0,
    y: 25,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
}

// Single-Focus Client Testimonial Experience (08 / WORDS FROM CLIENTS — 300vh Pinned Sequence)
function initClientWordsSection() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const wrap = document.getElementById('client-words-wrap');
  const sticky = document.getElementById('client-words-sticky');
  const stageNum = document.getElementById('cw-stage-num');

  const bg1 = document.getElementById('client-bg-1');
  const bg2 = document.getElementById('client-bg-2');
  const bg3 = document.getElementById('client-bg-3');

  const slide1 = document.getElementById('cw-slide-1');
  const slide2 = document.getElementById('cw-slide-2');
  const slide3 = document.getElementById('cw-slide-3');

  if (!wrap || !sticky || !slide1 || !slide2 || !slide3) return;

  let activeIndex = -1;

  function updateStageText(index) {
    if (activeIndex === index) return;
    activeIndex = index;

    if (stageNum) {
      const numStr = index < 9 ? `0${index + 1}` : `${index + 1}`;
      stageNum.innerHTML = `${numStr} <span class="text-xs font-mono text-stone">/ 03</span>`;
    }

    if (bg1 && bg2 && bg3) {
      bg1.style.opacity = index === 0 ? '1' : '0';
      bg2.style.opacity = index === 1 ? '1' : '0';
      bg3.style.opacity = index === 2 ? '1' : '0';
    }
  }

  // Set initial state
  updateStageText(0);

  // Master GSAP Timeline scrubbed smoothly with inertia (scrub: 0.6) over 300vh scroll distance
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.33) {
          updateStageText(0);
        } else if (progress < 0.66) {
          updateStageText(1);
        } else {
          updateStageText(2);
        }
      }
    }
  });

  // Timeline Step 1: Slide 1 exits upward (-100%), Slide 2 enters from below (0%)
  tl.to(slide1, { yPercent: -100, opacity: 0, duration: 1, ease: 'power2.inOut' }, 0.33)
    .fromTo(slide2, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: 'power2.inOut' }, 0.33);

  // Timeline Step 2: Slide 2 exits upward (-100%), Slide 3 enters from below (0%)
  tl.to(slide2, { yPercent: -100, opacity: 0, duration: 1, ease: 'power2.inOut' }, 0.66)
    .fromTo(slide3, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: 'power2.inOut' }, 0.66);
}

// Pinned Scroll-Driven Before / After Transformation Engine (09 / TRANSFORMATION — 300vh Pinned Sequence)
function initPinnedBeforeAfter() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const wrap = document.getElementById('before-after-pinned-wrap');
  const container = document.getElementById('ba-canvas-container');
  const afterMask = document.getElementById('ba-after-mask');
  const handle = document.getElementById('ba-divider-handle');
  const percentNum = document.getElementById('ba-percent-num');

  if (!wrap || !container || !afterMask || !handle) return;

  let isManualDragging = false;

  // Update Split Position Function
  function setSplit(percent) {
    const clamped = Math.max(0, Math.min(100, percent));
    // Inset from right: at 0% reveal, inset(0 100% 0 0); at 100% reveal, inset(0 0% 0 0)
    afterMask.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
    handle.style.left = `${clamped}%`;
    if (percentNum) percentNum.textContent = `${Math.round(clamped)}%`;
  }

  // Scroll Scrubbing Animation
  ScrollTrigger.create({
    trigger: wrap,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      if (!isManualDragging) {
        setSplit(self.progress * 100);
      }
    }
  });

  // Manual Drag Interaction Engine
  function handlePointerMove(e) {
    if (!isManualDragging && e.buttons !== 1) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSplit(percent);
  }

  container.addEventListener('pointerdown', (e) => {
    isManualDragging = true;
    handlePointerMove(e);
  });

  window.addEventListener('pointermove', (e) => {
    if (isManualDragging) handlePointerMove(e);
  });

  window.addEventListener('pointerup', () => {
    isManualDragging = false;
  });
}

// Asymmetric Editorial Journal Section (10 / JOURNAL — Mask Unmasking)
function initEditorialJournal() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const cards = document.querySelectorAll('.journal-editorial-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    const mask = card.querySelector('.journal-img-mask');
    if (!mask) return;

    gsap.fromTo(mask,
      { clipPath: 'inset(15% 0 15% 0)' },
      {
        clipPath: 'inset(0% 0 0% 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}

// Final Editorial CTA Section (11 / START A PROJECT — Typography Scale & Reveal)
function initEditorialCTA() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const section = document.getElementById('cta-editorial');
  const line1 = document.getElementById('cta-line-1');
  const line2 = document.getElementById('cta-line-2');
  const line3 = document.getElementById('cta-line-3');

  if (!section || !line1 || !line2 || !line3) return;

  // Gradual Typography Scale Scrub
  gsap.fromTo([line1, line2],
    { scale: 0.94 },
    {
      scale: 1.04,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      }
    }
  );

  // Final line appears last with smooth upward reveal
  gsap.to(line3, {
    opacity: 1,
    y: 0,
    scale: 1.04,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 60%',
      toggleActions: 'play none none reverse'
    }
  });
}

// Materiality Tab Switcher
function initMaterialTabs() {
  const tabs = document.querySelectorAll('.material-tab');
  const img = document.getElementById('material-img');
  const label = document.getElementById('material-label');

  const materials = {
    travertine: {
      src: "assets/images/material_travertine.png",
      label: "Beige Travertine — Unfilled Natural Stone Porosity"
    },
    oak: {
      src: "assets/images/material_smoked_oak.png",
      label: "Smoked Oak — Open Grain Matte Architectural Timber"
    },
    brass: {
      src: "assets/images/material_brass.png",
      label: "Patinated Satin Brass — Hand-Finished Architectural Accent"
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active', 'border-bronze', 'bg-ivory/5'));
      tabs.forEach(t => t.classList.add('border-ivory/10'));
      
      tab.classList.add('active', 'border-bronze', 'bg-ivory/5');
      tab.classList.remove('border-ivory/10');

      const matKey = tab.dataset.material;
      if (materials[matKey] && img) {
        img.style.opacity = '0';
        setTimeout(() => {
          img.src = materials[matKey].src;
          if (label) label.textContent = materials[matKey].label;
          img.style.opacity = '1';
        }, 300);
      }
    });
  });
}

// Drawing -> Reality Stage Toggle
function initDrawingRealityToggle() {
  const btnDrawing = document.getElementById('stage-drawing-btn');
  const btnReality = document.getElementById('stage-reality-btn');
  const frameDrawing = document.getElementById('frame-drawing');
  const frameReality = document.getElementById('frame-reality');
  const badge = document.getElementById('stage-badge');
  const desc = document.getElementById('stage-desc');

  if (btnDrawing && btnReality) {
    btnDrawing.addEventListener('click', () => {
      btnDrawing.classList.add('bg-charcoal', 'text-ivory');
      btnDrawing.classList.remove('text-charcoal');
      btnReality.classList.remove('bg-charcoal', 'text-ivory');
      btnReality.classList.add('text-charcoal');

      if (frameDrawing) frameDrawing.style.opacity = '1';
      if (frameReality) frameReality.style.opacity = '0';
      if (badge) badge.textContent = 'STAGE 01 — ARCHITECTURAL CAD';
      if (desc) desc.textContent = 'Precise structural grid layout, structural wall thickness, and integrated HVAC cove channels mapped to 1mm tolerances.';
    });

    btnReality.addEventListener('click', () => {
      btnReality.classList.add('bg-charcoal', 'text-ivory');
      btnReality.classList.remove('text-charcoal');
      btnDrawing.classList.remove('bg-charcoal', 'text-ivory');
      btnDrawing.classList.add('text-charcoal');

      if (frameDrawing) frameDrawing.style.opacity = '0';
      if (frameReality) frameReality.style.opacity = '1';
      if (badge) badge.textContent = 'STAGE 02 — LIVED INTERIOR SPACE';
      if (desc) desc.textContent = 'The executed spatial outcome: travertine stone fireplace, warm lime plaster wall finish, and custom fluted oak acoustic joinery.';
    });
  }
}

// Before / After Drag Slider
function initBeforeAfterSlider() {
  const container = document.getElementById('before-after-container');
  const overlay = document.getElementById('before-overlay');
  const handle = document.getElementById('slider-handle');
  const innerImg = document.getElementById('before-img-inner');

  if (!container || !overlay || !handle || !innerImg) return;

  let isDragging = false;

  const updatePosition = (clientX) => {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percent = (x / rect.width) * 100;
    overlay.style.width = percent + '%';
    handle.style.left = percent + '%';
    innerImg.style.width = rect.width + 'px';
  };

  window.addEventListener('resize', () => {
    const rect = container.getBoundingClientRect();
    innerImg.style.width = rect.width + 'px';
  });

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updatePosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  });

  window.addEventListener('mouseup', () => isDragging = false);

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updatePosition(e.touches[0].clientX);
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updatePosition(e.touches[0].clientX);
  });

  window.addEventListener('touchend', () => isDragging = false);
}

// Testimonials Carousel
function initTestimonials() {
  const quoteEl = document.getElementById('testimonial-quote');
  const authorEl = document.getElementById('testimonial-author');
  const prevBtn = document.getElementById('prev-quote-btn');
  const nextBtn = document.getElementById('next-quote-btn');

  const updateQuote = (index) => {
    if (!quoteEl || !authorEl) return;
    quoteEl.style.opacity = '0';
    authorEl.style.opacity = '0';

    setTimeout(() => {
      quoteEl.textContent = testimonials[index].quote;
      authorEl.textContent = testimonials[index].author;
      quoteEl.style.opacity = '1';
      authorEl.style.opacity = '1';
    }, 300);
  };

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateQuote(currentTestimonialIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateQuote(currentTestimonialIndex);
    });
  }
}

// Modals: Project Detail & Inquiry
function initModals() {
  const projectModal = document.getElementById('project-modal');
  const closeProjectBtn = document.getElementById('close-project-modal');
  const modalContent = document.getElementById('modal-project-content');

  const inquiryModal = document.getElementById('inquiry-modal');
  const closeInquiryBtn = document.getElementById('close-inquiry-modal');
  const openInquiryBtns = [
    document.getElementById('open-inquiry-btn'),
    document.getElementById('cta-inquiry-btn')
  ];

  // Open Project Modal
  document.querySelectorAll('[data-project]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const pKey = trigger.dataset.project;
      const data = projectsData[pKey] || projectsData.aravali;

      if (modalContent) {
        modalContent.innerHTML = `
          <div class="border-b border-ivory/10 pb-8">
            <span class="text-xs uppercase tracking-widest font-mono text-bronze">${data.category} — ${data.year}</span>
            <h2 class="font-serif text-4xl md:text-6xl font-light mt-2 mb-4">${data.title}</h2>
            <p class="text-xs font-mono text-stone">${data.location} | ${data.area}</p>
          </div>

          <div class="w-full h-[450px] overflow-hidden border border-ivory/10 my-4">
            <img src="${data.heroImg}" class="w-full h-full object-cover" alt="${data.title}">
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm text-stone font-light leading-relaxed my-6">
            <div class="md:col-span-4 text-xs font-mono uppercase text-bronze flex flex-col gap-2">
              <div><span class="text-stone/60">Materiality:</span> ${data.material}</div>
              <div><span class="text-stone/60">Lead Engineer:</span> Archit Rathi</div>
            </div>
            <div class="md:col-span-8 text-base">
              ${data.description}
            </div>
          </div>
        `;
      }

      if (projectModal) {
        projectModal.classList.remove('opacity-0', 'pointer-events-none');
        document.body.classList.add('modal-open');
      }
    });
  });

  // Open Journal Article Modal
  document.querySelectorAll('[data-article]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const aKey = trigger.dataset.article;
      const data = articlesData[aKey] || articlesData.aravali;

      if (modalContent) {
        modalContent.innerHTML = `
          <div class="border-b border-ivory/10 pb-8">
            <span class="text-xs uppercase tracking-widest font-mono text-bronze">${data.category}</span>
            <h2 class="font-serif text-4xl md:text-6xl font-light mt-2 mb-4">${data.title}</h2>
            <p class="text-xs font-mono text-stone">${data.location}</p>
          </div>

          <div class="w-full h-[450px] overflow-hidden border border-ivory/10 my-4">
            <img src="${data.heroImg}" class="w-full h-full object-cover" alt="${data.title}">
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm text-stone font-light leading-relaxed my-6">
            <div class="md:col-span-4 text-xs font-mono uppercase text-bronze flex flex-col gap-2">
              <div><span class="text-stone/60">Publisher:</span> Vaastvik Monograph Journal</div>
              <div><span class="text-stone/60">Editor:</span> Archit Rathi</div>
            </div>
            <div class="md:col-span-8 text-base leading-relaxed">
              ${data.description}
            </div>
          </div>
        `;
      }

      if (projectModal) {
        projectModal.classList.remove('opacity-0', 'pointer-events-none');
        document.body.classList.add('modal-open');
      }
    });
  });

  // Open Policy Modal (Privacy / Terms)
  const policiesData = {
    privacy: {
      title: "Privacy Policy",
      category: "Legal & Data Governance — 2026",
      description: `Vaastvik Design Group respects client confidentiality and privacy. Any personal information provided through inquiry forms or direct communications is used solely for project consultation, civil planning, and service execution. We do not sell or distribute client data to third parties.`
    },
    terms: {
      title: "Terms of Service",
      category: "Editorial & Practice Terms — 2026",
      description: `All architectural monograph content, project visual assets, drawings, and custom design specifications displayed on this digital monograph are intellectual property of Vaastvik Design Group and Archit Rathi. Unauthorized reproduction or commercial distribution without prior written consent is strictly prohibited.`
    }
  };

  document.querySelectorAll('[data-policy]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const polKey = trigger.dataset.policy;
      const data = policiesData[polKey] || policiesData.privacy;

      if (modalContent) {
        modalContent.innerHTML = `
          <div class="border-b border-ivory/10 pb-8">
            <span class="text-xs uppercase tracking-widest font-mono text-bronze">${data.category}</span>
            <h2 class="font-serif text-4xl md:text-6xl font-light mt-2 mb-4">${data.title}</h2>
          </div>

          <div class="text-stone font-light text-base leading-relaxed my-8 max-w-2xl">
            ${data.description}
          </div>
        `;
      }

      if (projectModal) {
        projectModal.classList.remove('opacity-0', 'pointer-events-none');
        document.body.classList.add('modal-open');
      }
    });
  });

  if (closeProjectBtn && projectModal) {
    closeProjectBtn.addEventListener('click', () => {
      projectModal.classList.add('opacity-0', 'pointer-events-none');
      document.body.classList.remove('modal-open');
    });
  }

  // Open Inquiry Modal
  openInquiryBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        if (inquiryModal) {
          inquiryModal.classList.remove('opacity-0', 'pointer-events-none');
          document.body.classList.add('modal-open');
        }
      });
    }
  });

  if (closeInquiryBtn && inquiryModal) {
    closeInquiryBtn.addEventListener('click', () => {
      inquiryModal.classList.add('opacity-0', 'pointer-events-none');
      document.body.classList.remove('modal-open');
    });
  }

  // Escape key closes open modals & Admin shortcut (Ctrl+Shift+A or Alt+A)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && !projectModal.classList.contains('opacity-0')) {
        projectModal.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('modal-open');
      }
      if (inquiryModal && !inquiryModal.classList.contains('opacity-0')) {
        inquiryModal.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('modal-open');
      }
      const nav = document.getElementById('mobile-nav');
      if (nav && !nav.classList.contains('opacity-0')) {
        nav.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('modal-open');
      }
    }

    // Admin Panel Shortcut (Ctrl + Shift + A or Alt + A)
    if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) || (e.altKey && (e.key === 'A' || e.key === 'a'))) {
      e.preventDefault();
      window.location.href = 'admin.html';
    }
  });
}

// Mobile Full-Screen Monograph Index Navigation Toggle
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-nav-close');
  const nav = document.getElementById('mobile-nav');
  const btnLabel = document.getElementById('menu-btn-label');
  const btnIcon = document.getElementById('menu-btn-icon');

  if (btn && nav) {
    const toggleMenu = (show) => {
      if (show) {
        nav.classList.remove('opacity-0', 'pointer-events-none');
        document.body.classList.add('modal-open');
        if (btnLabel) btnLabel.textContent = 'CLOSE';
        if (btnIcon) btnIcon.textContent = '[-]';
      } else {
        nav.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('modal-open');
        if (btnLabel) btnLabel.textContent = 'INDEX';
        if (btnIcon) btnIcon.textContent = '[+]';
      }
    };

    btn.addEventListener('click', () => {
      const isOpen = !nav.classList.contains('opacity-0');
      toggleMenu(!isOpen);
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => toggleMenu(false));
    }

    document.querySelectorAll('.mobile-nav-item').forEach(item => {
      item.addEventListener('click', () => toggleMenu(false));
    });
  }
}

// Direct WhatsApp Inquiry Submission
function initFormSubmission() {
  const form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');
      const phone = formData.get('phone');
      const email = formData.get('email');
      const location = formData.get('location');
      const scope = formData.get('scope');
      const notes = formData.get('notes');

      const message = `*VAASTVIK DESIGN GROUP — PROJECT COMMISSION*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A*Location:* ${encodeURIComponent(location)}%0A*Scope:* ${encodeURIComponent(scope)}%0A*Details:* ${encodeURIComponent(notes)}`;

      const whatsappUrl = `https://wa.me/917701939902?text=${message}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}

// Materials & Partners Interactive Detail Reveal Engine & Multi-Image Lightbox Modal
function initPartnerDetails() {
  const container = document.getElementById('partner-detail-container');
  const items = document.querySelectorAll('.partner-item[data-brand]');
  
  // Lightbox Modal Elements
  const modal = document.getElementById('partner-gallery-modal');
  const closeBtn = document.getElementById('close-partner-gallery-modal');
  const pgmCategory = document.getElementById('pgm-category');
  const pgmTitle = document.getElementById('pgm-title');
  const pgmCounter = document.getElementById('pgm-counter');
  const pgmMainImg = document.getElementById('pgm-main-img');
  const pgmFigureTag = document.getElementById('pgm-figure-tag');
  const pgmThumbnails = document.getElementById('pgm-thumbnails-container');
  const pgmPrevBtn = document.getElementById('pgm-prev-btn');
  const pgmNextBtn = document.getElementById('pgm-next-btn');

  if (!container || items.length === 0) return;

  let currentBrandKey = 'boffi';
  let currentImageIndex = 0;

  // Open Lightbox Function
  const openPartnerLightbox = (brandKey, index = 0) => {
    const data = partnersData[brandKey];
    if (!data || !data.images || data.images.length === 0 || !modal) return;

    currentBrandKey = brandKey;
    currentImageIndex = index % data.images.length;

    if (pgmCategory) pgmCategory.textContent = data.category;
    if (pgmTitle) pgmTitle.textContent = data.title;

    updateLightboxImage();
    modal.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('modal-open');
  };

  // Helper number pad
  const pad = (n) => (n < 10 ? '0' + n : '' + n);

  // Update Lightbox Display
  const updateLightboxImage = () => {
    const data = partnersData[currentBrandKey];
    if (!data || !data.images) return;

    const total = data.images.length;
    const currentSrc = data.images[currentImageIndex];

    if (pgmMainImg) {
      pgmMainImg.style.opacity = '0.3';
      pgmMainImg.src = currentSrc;
      setTimeout(() => { pgmMainImg.style.opacity = '1'; }, 100);
    }

    if (pgmCounter) {
      pgmCounter.textContent = `IMAGE ${pad(currentImageIndex + 1)} / ${pad(total)}`;
    }

    if (pgmFigureTag) {
      const figTitle = data.figureTitles && data.figureTitles[currentImageIndex] 
        ? data.figureTitles[currentImageIndex] 
        : `FIG. ${pad(currentImageIndex + 1)} • ${data.title.toUpperCase()} ARCHITECTURAL SPECIFICATION`;
      pgmFigureTag.textContent = figTitle;
    }

    // Render Thumbnails
    if (pgmThumbnails) {
      pgmThumbnails.innerHTML = data.images.map((src, i) => `
        <button class="pgm-thumb-btn flex-shrink-0 w-20 h-16 md:w-28 md:h-20 border-2 ${i === currentImageIndex ? 'border-bronze opacity-100 scale-105 shadow-md' : 'border-ivory/20 opacity-50 hover:opacity-100'} transition-all overflow-hidden rounded-sm cursor-pointer bg-stone/20" data-index="${i}">
          <img src="${src}" alt="${data.title} Thumbnail ${i + 1}" class="w-full h-full object-cover">
        </button>
      `).join('');

      pgmThumbnails.querySelectorAll('.pgm-thumb-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          if (!isNaN(idx)) {
            currentImageIndex = idx;
            updateLightboxImage();
          }
        });
      });
    }
  };

  // Close Lightbox
  const closePartnerLightbox = () => {
    if (modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      document.body.classList.remove('modal-open');
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closePartnerLightbox);

  if (pgmPrevBtn) {
    pgmPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const data = partnersData[currentBrandKey];
      if (data && data.images) {
        currentImageIndex = (currentImageIndex - 1 + data.images.length) % data.images.length;
        updateLightboxImage();
      }
    });
  }

  if (pgmNextBtn) {
    pgmNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const data = partnersData[currentBrandKey];
      if (data && data.images) {
        currentImageIndex = (currentImageIndex + 1) % data.images.length;
        updateLightboxImage();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (modal && !modal.classList.contains('opacity-0')) {
      if (e.key === 'ArrowLeft' && pgmPrevBtn) pgmPrevBtn.click();
      if (e.key === 'ArrowRight' && pgmNextBtn) pgmNextBtn.click();
      if (e.key === 'Escape') closePartnerLightbox();
    }
  });

  // Render Brand Function inside section container
  const renderBrand = (brandKey) => {
    const data = partnersData[brandKey];
    if (!data) return;

    currentBrandKey = brandKey;

    // Highlight active partner item in brand list grid
    items.forEach(item => {
      if (item.getAttribute('data-brand') === brandKey) {
        item.classList.add('text-bronze', 'font-bold');
        item.classList.remove('text-charcoal/80');
        const arrow = item.querySelector('.partner-arrow');
        if (arrow) arrow.classList.remove('opacity-0');
      } else {
        item.classList.remove('text-bronze', 'font-bold');
        item.classList.add('text-charcoal/80');
        const arrow = item.querySelector('.partner-arrow');
        if (arrow) arrow.classList.add('opacity-0');
      }
    });

    // Animate out current detail view
    container.style.opacity = '0';
    container.style.transform = 'translateY(12px)';

    setTimeout(() => {
      container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start bg-ivory/40 p-6 md:p-10 border border-charcoal/15 shadow-sm rounded-sm">
          
          <!-- Left Column: Brand Information, Specs, & Category Exploration (6 Cols) -->
          <div class="lg:col-span-6 space-y-8">
            
            <!-- Category & Website Header -->
            <div class="flex justify-between items-center border-b-2 border-bronze/30 pb-4">
              <span class="font-mono text-sm md:text-base text-bronze uppercase tracking-[0.25em] font-bold">${data.category}</span>
              <a href="${data.website}" target="_blank" rel="noopener" class="font-sans text-sm md:text-base font-bold text-charcoal hover:text-bronze transition-colors uppercase tracking-[0.15em] flex items-center gap-1.5 underline underline-offset-4 decoration-bronze/40 group">
                <span>Visit Website</span>
                <span class="font-serif text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </a>
            </div>

            <!-- Title & Narrative -->
            <div class="space-y-4">
              <h3 class="font-serif text-4xl md:text-6xl font-normal text-charcoal tracking-tight leading-none">${data.title}</h3>
              <p class="text-base md:text-xl text-charcoal/90 font-sans font-normal leading-relaxed">${data.description}</p>
            </div>

            <!-- Key Design & Material Characteristics -->
            <div class="space-y-4 pt-2">
              <span class="font-mono text-xs md:text-sm text-bronze uppercase tracking-[0.25em] font-bold block border-b border-charcoal/15 pb-2">DESIGN &amp; MATERIAL CHARACTERISTICS</span>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base font-sans font-medium text-charcoal">
                ${data.characteristics.map(c => `
                  <div class="flex items-center gap-3 bg-stone/10 p-3 border border-charcoal/10 rounded-sm">
                    <span class="w-2.5 h-2.5 bg-bronze rounded-full flex-shrink-0"></span>
                    <span>${c}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Relevant Architectural Applications -->
            <div class="space-y-3 pt-2">
              <span class="font-mono text-xs md:text-sm text-bronze uppercase tracking-[0.25em] font-bold block">RELEVANT APPLICATIONS</span>
              <p class="text-sm md:text-base font-sans font-medium text-charcoal bg-stone/10 p-4 border-l-4 border-bronze shadow-sm leading-relaxed">${data.applications}</p>
            </div>

            <!-- Explore Category Network -->
            <div class="pt-6 border-t border-charcoal/15">
              <span class="font-mono text-xs md:text-sm text-bronze uppercase tracking-[0.25em] font-bold block mb-4">EXPLORE CATEGORY NETWORK</span>
              <div class="flex flex-wrap gap-3 font-sans text-sm font-semibold uppercase tracking-[0.1em]">
                ${data.explore.map(key => {
                  const itemData = partnersData[key];
                  return `<button class="partner-explore-btn py-2 px-4 border border-charcoal/30 bg-white hover:bg-bronze hover:text-white hover:border-bronze transition-all text-charcoal cursor-pointer shadow-sm rounded-sm" data-brand="${key}">${itemData.title} ↗</button>`;
                }).join('')}
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Brand Specification Photo Gallery (6 Cols) -->
          <div class="lg:col-span-6 space-y-6">
            <div class="flex justify-between items-center border-b border-charcoal/15 pb-2 text-xs font-mono text-bronze uppercase tracking-[0.2em] font-bold">
              <span>GALLERY SPECIFICATIONS (10 IMAGES)</span>
              <span>[CLICK TO EXPAND LIGHTBOX]</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[720px] overflow-y-auto pr-2 custom-scrollbar">
              ${data.images.map((imgSrc, idx) => `
                <div class="partner-gallery-trigger overflow-hidden border border-charcoal/20 bg-stone/20 group relative shadow-sm cursor-pointer ${idx === 0 ? 'md:col-span-2 h-[260px] md:h-[320px]' : 'h-[160px] md:h-[190px]'}" data-brand="${brandKey}" data-index="${idx}">
                  <img src="${imgSrc}" alt="${data.title} Architectural Specification Detail ${idx + 1}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out">
                  <div class="absolute inset-0 bg-charcoal/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-center">
                    <span class="bg-ivory text-charcoal font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 border border-charcoal/30 shadow-lg">🔍 EXPAND SPEC (FIG ${pad(idx + 1)})</span>
                  </div>
                  <div class="absolute bottom-2 left-2 right-2 bg-ivory/95 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.12em] font-bold text-charcoal border border-charcoal/20 shadow-sm truncate">
                    ${data.figureTitles && data.figureTitles[idx] ? data.figureTitles[idx] : `FIG. ${pad(idx + 1)} • ${data.title.toUpperCase()} SPEC`}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      `;

      // Attach click events to gallery trigger images in the detail panel
      container.querySelectorAll('.partner-gallery-trigger').forEach(card => {
        card.addEventListener('click', (e) => {
          e.stopPropagation();
          const bKey = card.getAttribute('data-brand');
          const idx = parseInt(card.getAttribute('data-index'), 10);
          if (bKey && !isNaN(idx)) {
            openPartnerLightbox(bKey, idx);
          }
        });
      });

      // Re-bind explore buttons within the new detail DOM
      container.querySelectorAll('.partner-explore-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetBrand = btn.getAttribute('data-brand');
          if (targetBrand) renderBrand(targetBrand);
        });
      });

      // Animate container in
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 150);
  };

  // Attach click events to partner list items in grid
  items.forEach(item => {
    item.addEventListener('click', () => {
      const brandKey = item.getAttribute('data-brand');
      if (brandKey) renderBrand(brandKey);
    });
  });

  // Load default brand (Boffi) on initialization
  renderBrand('boffi');
}

// ==========================================================================
// REAL-TIME CMS LIVE PREVIEW SYNCHRONIZATION ENGINE
// ==========================================================================
function applyRealTimeCmsData(cmsData) {
  if (!cmsData) return;

  // 1. Hero Section Updates
  if (cmsData.hero) {
    const h = cmsData.hero;
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
      if (h.words && h.words.length >= 2) {
        heroTitle.innerHTML = `${h.words[0]}<br><span class="italic font-normal text-ivory/90">${h.words.slice(1).join(' ')}</span>`;
      } else if (h.title) {
        heroTitle.textContent = h.title;
      }
    }
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo && h.videoUrl) {
      const source = heroVideo.querySelector('source');
      if (source && source.src !== h.videoUrl) {
        source.src = h.videoUrl;
        heroVideo.load();
      } else if (heroVideo.src !== h.videoUrl) {
        heroVideo.src = h.videoUrl;
      }
    }
  }

  // 2. Studio / Practice Section Updates
  if (cmsData.about) {
    const a = cmsData.about;
    const philosophyEl = document.querySelector('#studio h3');
    if (philosophyEl && a.philosophy) {
      philosophyEl.textContent = a.philosophy;
    }
  }

  // 3. Featured Project Updates (Aravali)
  if (cmsData.projects && cmsData.projects.aravali) {
    const p = cmsData.projects.aravali;
    const aravaliImg = document.getElementById('aravali-img-inner');
    if (aravaliImg && p.heroImg && aravaliImg.src !== p.heroImg) {
      aravaliImg.src = p.heroImg;
    }
  }

  // 4. SEO Metadata
  if (cmsData.seo && cmsData.seo.title) {
    document.title = cmsData.seo.title;
  }

  // 5. Materials & Partners Synchronization & Image Sanitization
  if (cmsData.partners) {
    Object.keys(cmsData.partners).forEach(key => {
      if (partnersData && partnersData[key]) {
        const p = cmsData.partners[key];
        if (p.title) partnersData[key].title = p.title;
        if (p.category) partnersData[key].category = p.category;
        if (p.website) partnersData[key].website = p.website;
        if (p.description) partnersData[key].description = p.description;
        if (p.characteristics) partnersData[key].characteristics = p.characteristics;
        if (p.applications) partnersData[key].applications = p.applications;
        
        if (p.images && Array.isArray(p.images) && p.images.length >= 10 && p.images.every(img => typeof img === 'string' && !img.includes('data:image/svg'))) {
          partnersData[key].images = p.images;
        }
      }
    });
  }

  // 6. Home Interior Guide (Module 11)
  if (cmsData.homeInteriorGuide) {
    const g = cmsData.homeInteriorGuide;
    const sec = document.getElementById('home-interior-guide');
    if (sec) {
      if (g.enabled === false) sec.classList.add('hidden');
      else sec.classList.remove('hidden');

      const titleEl = sec.querySelector('h2');
      if (titleEl && g.title) titleEl.textContent = g.title;

      const descEl = sec.querySelector('p');
      if (descEl && g.description) descEl.textContent = g.description;

      const linkEl = sec.querySelector('a[download]');
      if (linkEl && g.pdfUrl) linkEl.href = g.pdfUrl;

      const btnSpan = sec.querySelector('a[download] span:first-child');
      if (btnSpan && g.buttonText) btnSpan.textContent = g.buttonText;

      const imgEl = sec.querySelector('img');
      if (imgEl && g.coverImg) imgEl.src = g.coverImg;
    }
  }

  // 7. Beautiful Interior Video Reel (Module 12)
  if (cmsData.beautifulInterior) {
    const v = cmsData.beautifulInterior;
    const sec = document.getElementById('beautiful-interior');
    if (sec) {
      if (v.enabled === false) sec.classList.add('hidden');
      else sec.classList.remove('hidden');

      const headingEl = sec.querySelector('h2');
      if (headingEl && v.heading) headingEl.textContent = v.heading;

      const descEl = sec.querySelector('p');
      if (descEl && v.description) descEl.textContent = v.description;

      const vidEl = document.getElementById('beautiful-interior-video');
      if (vidEl) {
        if (v.posterUrl) vidEl.poster = v.posterUrl;
        const source = vidEl.querySelector('source');
        if (source && v.videoUrl && source.src !== v.videoUrl) {
          source.src = v.videoUrl;
          vidEl.load();
        }
      }

      const ytEl = sec.querySelector('a[href*="youtube"]');
      if (ytEl) {
        if (v.youtubeUrl) ytEl.href = v.youtubeUrl;
        const span = ytEl.querySelector('span:first-child');
        if (span && v.buttonText) span.textContent = v.buttonText;
      }
    }
  }

  // 8. How It Works (Module 13)
  if (cmsData.howItWorks) {
    const hw = cmsData.howItWorks;
    const sec = document.getElementById('how-it-works');
    if (sec) {
      if (hw.enabled === false) sec.classList.add('hidden');
      else sec.classList.remove('hidden');

      const headingEl = sec.querySelector('h2');
      if (headingEl && hw.heading) headingEl.textContent = hw.heading;

      const ctaBtn = sec.querySelector('button span:first-child');
      if (ctaBtn && hw.ctaText) ctaBtn.textContent = hw.ctaText;

      if (hw.steps && Array.isArray(hw.steps)) {
        const grid = sec.querySelector('.grid');
        if (grid) {
          grid.innerHTML = hw.steps.map(s => `
            <div class="bg-ivory/5 border border-ivory/10 p-8 space-y-6 hover:border-bronze/50 transition-all group">
              <div class="flex justify-between items-center text-xs font-mono">
                <span class="font-serif text-3xl font-light text-bronze">${s.step || ''}</span>
                <span class="text-stone/60 uppercase tracking-widest text-[10px]">${s.category || 'EXECUTION'}</span>
              </div>
              <h3 class="font-serif text-xl font-light text-ivory group-hover:text-bronze transition-colors">${s.title || ''}</h3>
              <p class="text-xs text-stone/80 leading-relaxed font-light">${s.desc || ''}</p>
            </div>
          `).join('');
        }
      }
    }
  }

  // 9. Client Testimonials (Module 14)
  if (cmsData.clientSays) {
    const cs = cmsData.clientSays;
    const sec = document.getElementById('client-says');
    if (sec) {
      if (cs.enabled === false) sec.classList.add('hidden');
      else sec.classList.remove('hidden');

      const headingEl = sec.querySelector('h2');
      if (headingEl && cs.heading) headingEl.textContent = cs.heading;

      if (cs.testimonials && Array.isArray(cs.testimonials) && cs.testimonials.length > 0) {
        testimonials = cs.testimonials;
        if (typeof renderTestimonial === 'function') renderTestimonial(0);
      }
    }
  }

  // 10. Trusted Partners (Module 15)
  if (cmsData.trustedPartners) {
    const tp = cmsData.trustedPartners;
    const sec = document.getElementById('trusted-partners');
    if (sec) {
      if (tp.enabled === false) sec.classList.add('hidden');
      else sec.classList.remove('hidden');

      const headingEl = sec.querySelector('h2');
      if (headingEl && tp.heading) headingEl.textContent = tp.heading;

      const descEl = sec.querySelector('p');
      if (descEl && tp.description) descEl.textContent = tp.description;

      if (tp.brands && Array.isArray(tp.brands)) {
        const grid = sec.querySelector('.grid');
        if (grid) {
          grid.innerHTML = tp.brands.map(b => `
            <div class="bg-ivory/5 border border-ivory/10 p-6 space-y-3 hover:border-bronze/50 transition-all group">
              <span class="text-[10px] font-mono text-bronze uppercase tracking-widest block font-medium">${b.category || ''}</span>
              <h3 class="font-serif text-2xl font-light text-ivory group-hover:text-bronze transition-colors">${b.name || ''}</h3>
              <span class="text-[10px] font-mono text-stone/60 block uppercase tracking-wider">${b.detail || ''}</span>
            </div>
          `).join('');
        }
      }
    }
  }

  // 11. Journal / Recent Blog (Module 16)
  if (cmsData.journal) {
    const j = cmsData.journal;
    const sec = document.getElementById('journal');
    if (sec) {
      if (j.enabled === false) sec.classList.add('hidden');
      else sec.classList.remove('hidden');

      const headingEl = sec.querySelector('h2');
      if (headingEl && j.heading) headingEl.textContent = j.heading;

      if (j.articles && Array.isArray(j.articles)) {
        const grid = sec.querySelector('.grid');
        if (grid) {
          grid.innerHTML = j.articles.map(a => `
            <article class="group space-y-6">
              <div class="aspect-[16/10] overflow-hidden bg-stone/20 border border-charcoal/10 relative">
                <img src="${a.heroImg || ''}" alt="${a.title || ''}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              </div>
              <div class="space-y-3">
                <div class="flex items-center gap-4 text-[10px] font-mono text-muted uppercase tracking-widest">
                  <span class="text-bronze font-medium">${a.category || ''}</span>
                  <span>&bull;</span>
                  <span>${a.date || ''}</span>
                </div>
                <h3 class="font-serif text-xl md:text-2xl font-light text-charcoal group-hover:text-bronze transition-colors leading-snug">
                  ${a.title || ''}
                </h3>
                <p class="text-xs text-charcoal/70 leading-relaxed font-light line-clamp-3">
                  ${a.excerpt || ''}
                </p>
                <div class="pt-2">
                  <a href="${a.link || '#'}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-charcoal hover:text-bronze transition-colors">
                    <span>READ ARTICLE</span>
                    <span class="font-serif">↗</span>
                  </a>
                </div>
              </div>
            </article>
          `).join('');
        }
      }
    }
  }

  // 12. Newsletter (Module 17)
  if (cmsData.newsletter) {
    const n = cmsData.newsletter;
    const sec = document.getElementById('newsletter');
    if (sec) {
      if (n.enabled === false) sec.classList.add('hidden');
      else sec.classList.remove('hidden');

      const headingEl = sec.querySelector('h2');
      if (headingEl && n.heading) headingEl.textContent = n.heading;

      const descEl = sec.querySelector('p');
      if (descEl && n.description) descEl.textContent = n.description;

      const btnSpan = sec.querySelector('#newsletter-form button span:first-child');
      if (btnSpan && n.buttonText) btnSpan.textContent = n.buttonText;
    }
  }

  // 13. Start a Project & CTA (Module 18)
  if (cmsData.startAProject) {
    const sap = cmsData.startAProject;
    const sec = document.getElementById('start-a-project');
    const ctaSection = document.getElementById('cta-editorial');
    if (sec) {
      if (sap.enabled === false) {
        sec.classList.add('hidden');
        if (ctaSection) ctaSection.classList.add('hidden');
      } else {
        sec.classList.remove('hidden');
        if (ctaSection) ctaSection.classList.remove('hidden');
      }

      const headingEl = sec.querySelector('h2');
      if (headingEl && sap.heading) headingEl.textContent = sap.heading;

      const quoteEl = sec.querySelector('p.font-serif');
      if (quoteEl && sap.quote) quoteEl.textContent = sap.quote;

      const phoneEl = sec.querySelector('a[href*="wa.me"]');
      if (phoneEl && sap.phone) phoneEl.textContent = sap.phone;

      const emailEl = sec.querySelector('a[href*="mailto:"]');
      if (emailEl && sap.email) emailEl.textContent = sap.email;

      const btnSpan = sec.querySelector('#project-enquiry-form button[type="submit"] span:first-child');
      if (btnSpan && sap.ctaText) btnSpan.textContent = sap.ctaText;
    }

    if (ctaSection) {
      const l1 = document.getElementById('cta-line-1');
      if (l1 && sap.finalCtaLine1) l1.textContent = sap.finalCtaLine1;

      const l2 = document.getElementById('cta-line-2');
      if (l2 && sap.finalCtaLine2) l2.textContent = sap.finalCtaLine2;

      const l3 = document.getElementById('cta-line-3');
      if (l3 && sap.finalCtaLine3) l3.textContent = sap.finalCtaLine3;

      const btn = document.querySelector('#cta-inquiry-btn span:first-child');
      if (btn && sap.finalCtaButton) btn.textContent = sap.finalCtaButton;
    }
  }

  // 14. Studio Team (Module 19)
  if (cmsData.team) {
    const t = cmsData.team;
    const sec = document.getElementById('the-studio');
    if (sec) {
      if (t.enabled === false) sec.classList.add('hidden');
      else sec.classList.remove('hidden');

      const headingEl = sec.querySelector('h2');
      if (headingEl && t.heading) headingEl.textContent = t.heading;

      const imgEl = sec.querySelector('img[alt="Archit Rathi"]');
      if (imgEl && t.leadImg) imgEl.src = t.leadImg;

      const nameEl = sec.querySelector('h3.font-serif');
      if (nameEl && t.leadName) nameEl.textContent = t.leadName;

      const roleEl = sec.querySelector('span.text-bronze');
      if (roleEl && t.leadRole) roleEl.textContent = `${t.leadRole} — ${t.leadDegree || ''}`;

      const bioParas = sec.querySelectorAll('.space-y-6 > p');
      if (bioParas.length >= 2) {
        if (t.leadBio1) bioParas[0].textContent = t.leadBio1;
        if (t.leadBio2) bioParas[1].textContent = t.leadBio2;
      }
    }
  }

  // 15. Footer (Module 20)
  if (cmsData.footer) {
    const f = cmsData.footer;
    const footer = document.getElementById('footer-magazine');
    if (footer) {
      if (f.enabled === false) footer.classList.add('hidden');
      else footer.classList.remove('hidden');

      const titleEl = footer.querySelector('span.font-serif');
      if (titleEl && f.brandTitle) titleEl.textContent = f.brandTitle;

      const subtitleEl = footer.querySelector('span.text-stone');
      if (subtitleEl && f.brandSubtitle) subtitleEl.textContent = f.brandSubtitle;

      const descEl = footer.querySelector('p.font-sans');
      if (descEl && f.brandDesc) descEl.textContent = f.brandDesc;

      const copyrightEl = footer.querySelector('.border-t > div:first-child');
      if (copyrightEl && f.copyright) copyrightEl.textContent = f.copyright;
    }
  }



  // 18. Investment Calculator (Module 23)
  if (cmsData.investmentCalculator) {
    const calc = cmsData.investmentCalculator;
    const sec = document.getElementById('turnkey-calculator');
    if (sec) {
      if (calc.enabled === false) sec.classList.add('hidden');
      else sec.classList.remove('hidden');

      const tagEl = sec.querySelector('.font-mono.text-bronze');
      if (tagEl && calc.tag) tagEl.textContent = calc.tag;

      const titleEl = sec.querySelector('h2');
      if (titleEl && calc.title) titleEl.textContent = calc.title;

      const ctaBtn = document.getElementById('calc-consult-btn');
      if (ctaBtn && calc.ctaText) {
        const textSpan = ctaBtn.querySelector('span:first-child');
        if (textSpan) textSpan.textContent = calc.ctaText;
      }
    }
  }



  // 21. WhatsApp Consultation Engine (Module 26)
  if (cmsData.whatsappEngine) {
    const wa = cmsData.whatsappEngine;
    const sec = document.getElementById('whatsapp-engine');
    if (sec) {
      if (wa.enabled === false) sec.classList.add('hidden');
      else sec.classList.remove('hidden');

      const tagEl = sec.querySelector('.font-mono.text-emerald-400');
      if (tagEl && wa.tag) tagEl.textContent = wa.tag;

      const ctaBtn = sec.querySelector('a[href*="wa.me"]');
      if (ctaBtn) {
        if (wa.phone) {
          const defaultMsg = encodeURIComponent(wa.defaultMsg || 'Hello Vaastvik Studio');
          ctaBtn.href = `https://wa.me/${wa.phone}?text=${defaultMsg}`;
        }
        const spanText = ctaBtn.querySelector('span:first-child');
        if (spanText && wa.ctaText) spanText.textContent = wa.ctaText;
      }
    }
  }
}

// Check initial localStorage state on load
try {
  const initialData = localStorage.getItem('vaastvik_cms_data');
  if (initialData) {
    const parsed = JSON.parse(initialData);
    // Sanitize outdated partner images from legacy localStorage
    if (parsed.partners) {
      Object.keys(parsed.partners).forEach(k => {
        if (parsed.partners[k] && parsed.partners[k].images) {
          const hasBrokenSvgPath = parsed.partners[k].images.some(img => typeof img === 'string' && img.endsWith('.svg') && !img.startsWith('data:image'));
          if (hasBrokenSvgPath) delete parsed.partners[k].images;
        }
      });
    }
    applyRealTimeCmsData(parsed);
  }
} catch (e) {
  console.warn('Could not parse initial CMS data', e);
}

// Real-time postMessage Broadcast Listener
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CMS_UPDATE' && event.data.data) {
    applyRealTimeCmsData(event.data.data);
  }
});

// Real-time localStorage Sync Across Tabs
window.addEventListener('storage', (e) => {
  if (e.key === 'vaastvik_cms_data' && e.newValue) {
    try {
      applyRealTimeCmsData(JSON.parse(e.newValue));
    } catch (err) {}
  }
});



/* ==========================================================================
   FEATURE 3: TURNKEY INVESTMENT CALCULATOR
   ========================================================================== */
function initCostCalculator() {
  const areaSlider = document.getElementById('calc-area-slider');
  const areaVal = document.getElementById('calc-area-val');
  const tierBtns = document.querySelectorAll('.calc-tier-btn');
  const finishBtns = document.querySelectorAll('.calc-finish-btn');
  
  const totalDisplay = document.getElementById('calc-total-display');
  const civilVal = document.getElementById('calc-civil-val');
  const interiorVal = document.getElementById('calc-interior-val');
  const timelineVal = document.getElementById('calc-timeline-val');
  const inquiryBtn = document.getElementById('calc-inquiry-btn');

  let currentArea = 5000;
  let tierRate = 4200;
  let finishRate = 3500;

  function calculate() {
    const civilCost = currentArea * tierRate;
    const interiorCost = currentArea * finishRate;
    const totalCost = civilCost + interiorCost;

    // Timeline calculation
    let months = Math.round(12 + (currentArea / 2000) * 2);
    if (timelineVal) timelineVal.textContent = `${months} - ${months + 3} Months`;

    // Format currency (in Lakhs / Crores)
    function formatCurrency(val) {
      if (val >= 10000000) {
        return `₹ ${(val / 10000000).toFixed(2)} Cr`;
      }
      return `₹ ${(val / 100000).toFixed(0)} Lakh`;
    }

    if (totalDisplay) totalDisplay.textContent = formatCurrency(totalCost);
    if (civilVal) civilVal.textContent = formatCurrency(civilCost);
    if (interiorVal) interiorVal.textContent = formatCurrency(interiorCost);
  }

  if (areaSlider) {
    areaSlider.addEventListener('input', (e) => {
      currentArea = parseInt(e.target.value, 10);
      if (areaVal) areaVal.textContent = `${currentArea.toLocaleString()} Sq. Ft.`;
      calculate();
    });
  }

  tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tierBtns.forEach(b => {
        b.classList.remove('border-bronze', 'bg-bronze/10', 'font-medium', 'text-charcoal');
        b.classList.add('border-charcoal/20', 'text-muted');
      });
      btn.classList.remove('border-charcoal/20', 'text-muted');
      btn.classList.add('border-bronze', 'bg-bronze/10', 'font-medium', 'text-charcoal');
      tierRate = parseInt(btn.getAttribute('data-rate'), 10);
      calculate();
    });
  });

  finishBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      finishBtns.forEach(b => {
        b.classList.remove('border-bronze', 'bg-bronze/10', 'font-medium', 'text-charcoal');
        b.classList.add('border-charcoal/20', 'text-muted');
      });
      btn.classList.remove('border-charcoal/20', 'text-muted');
      btn.classList.add('border-bronze', 'bg-bronze/10', 'font-medium', 'text-charcoal');
      finishRate = parseInt(btn.getAttribute('data-rate'), 10);
      calculate();
    });
  });

  if (inquiryBtn) {
    inquiryBtn.addEventListener('click', () => {
      const openInquiryBtn = document.getElementById('open-inquiry-btn');
      if (openInquiryBtn) openInquiryBtn.click();
    });
  }

  calculate();
}

/* ==========================================================================
   FEATURE 4: "VOICE OF THE ARCHITECT" AUDIO NARRATION PLAYER
   ========================================================================== */
function initArchitectVoicePlayer() {
  const playBtn = document.getElementById('voice-play-btn');
  const trackTitle = document.getElementById('voice-track-title');
  const bars = document.querySelectorAll('#voice-bars div');

  const tracks = [
    'Track 01: On Quiet Luxury & Spatial Honesty',
    'Track 02: Civil Precision & 4.5m Cantilevers',
    'Track 03: Italian Joinery & Lighting Matrix'
  ];

  let currentTrackIdx = 0;
  let isPlaying = false;
  let animInterval = null;

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;

      if (isPlaying) {
        playBtn.textContent = '❚❚';
        if (trackTitle) trackTitle.textContent = tracks[currentTrackIdx];
        
        // Equalizer animation
        animInterval = setInterval(() => {
          bars.forEach(bar => {
            const h = Math.floor(Math.random() * 20) + 4;
            bar.style.height = `${h}px`;
          });
        }, 150);
      } else {
        playBtn.textContent = '▶';
        clearInterval(animInterval);
        bars.forEach(bar => bar.style.height = '8px');
        currentTrackIdx = (currentTrackIdx + 1) % tracks.length;
      }
    });
  }
}



/* ==========================================================================
   FEATURE 6: WHATSAPP 1-CLICK ARCHITECTURAL CONSULTATION ENGINE
   ========================================================================== */
function initWhatsAppEngine() {
  const inquiryForm = document.getElementById('inquiry-form');
  const inquiryModal = document.getElementById('inquiry-modal');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(inquiryForm);
      const name = formData.get('name') || 'Valued Client';
      const phone = formData.get('phone') || '';
      const email = formData.get('email') || 'N/A';
      const location = formData.get('location') || 'Delhi NCR';
      const scope = formData.get('scope') || 'Architecture & Turnkey Construction';
      const notes = formData.get('notes') || 'Initial inquiry brief.';

      // Construct formatted structured WhatsApp message string
      const messageText = 
`Hello Archit Rathi (Vaastvik Design Group),

I would like to request an architectural consultation:

• Patron Name: ${name}
• Contact Number: ${phone}
• Email: ${email}
• Project Location: ${location}
• Discipline: ${scope}
• Brief / Aspirations: ${notes}

Looking forward to scheduling an initial project briefing.`;

      const encodedMsg = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/917701939902?text=${encodedMsg}`;

      // Open WhatsApp Direct Link in a new window/tab
      window.open(whatsappUrl, '_blank');

      // Close modal gracefully if open
      if (inquiryModal) {
        inquiryModal.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  // 1-Click WhatsApp Consultation Brief Builder
  const disciplineBox = document.getElementById('wa-discipline-options');
  const plotBox = document.getElementById('wa-plot-options');
  const budgetBox = document.getElementById('wa-budget-options');
  const briefPreview = document.getElementById('wa-brief-preview');
  const launchBtn = document.getElementById('wa-direct-launch-btn');

  if (disciplineBox && plotBox && budgetBox && briefPreview) {
    const disciplines = [
      'Turnkey Interior Architecture',
      'Luxury Villa Architecture',
      'Penthouse Spatial Design',
      'Civil & Structural Construction'
    ];

    const plots = [
      'Under 2,500 Sq. Ft.',
      '2,500 - 5,000 Sq. Ft.',
      '5,000 - 8,000 Sq. Ft.',
      '8,000+ Sq. Ft.'
    ];

    const budgets = [
      '₹35L - ₹50L',
      '₹50L - ₹1 Cr',
      '₹1 Cr - ₹2.5 Cr',
      '₹2.5 Cr+'
    ];

    let selectedDiscipline = disciplines[0];
    let selectedPlot = plots[1];
    let selectedBudget = budgets[1];

    function updateBrief() {
      const briefText = `Hello Archit Rathi (Vaastvik Design Group),\n\nI would like to request an architectural consultation:\n• Discipline: ${selectedDiscipline}\n• Plot / Area: ${selectedPlot}\n• Investment Bracket: ${selectedBudget}\n\nLooking forward to scheduling an initial briefing.`;
      
      if (briefPreview) briefPreview.textContent = briefText;
      if (launchBtn) {
        launchBtn.href = `https://wa.me/917701939902?text=${encodeURIComponent(briefText)}`;
      }
    }

    function renderOptionGroup(container, optionsList, currentVal, onSelect) {
      container.innerHTML = '';
      optionsList.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        const isSelected = opt === currentVal;
        btn.className = `p-3.5 text-left border transition-all text-xs font-mono cursor-pointer rounded-none relative overflow-hidden group ${
          isSelected 
            ? 'border-bronze bg-bronze/20 text-charcoal font-semibold shadow-md ring-1 ring-bronze/50 translate-y-[-1px]' 
            : 'border-charcoal/20 bg-ivory/60 text-charcoal/80 hover:bg-stone/30 hover:border-bronze/60 hover:text-charcoal transition-all duration-300'
        }`;
        
        // Add subtle active bronze indicator marker
        const prefix = isSelected ? '✦ ' : '◇ ';
        btn.innerHTML = `<span class="${isSelected ? 'text-bronze font-bold' : 'text-charcoal/40 group-hover:text-bronze'} mr-1.5 transition-colors">${prefix}</span>${opt}`;
        
        btn.addEventListener('click', () => {
          onSelect(opt);
          renderAll();
          updateBrief();
        });
        container.appendChild(btn);
      });
    }

    function renderAll() {
      renderOptionGroup(disciplineBox, disciplines, selectedDiscipline, (val) => { selectedDiscipline = val; });
      renderOptionGroup(plotBox, plots, selectedPlot, (val) => { selectedPlot = val; });
      renderOptionGroup(budgetBox, budgets, selectedBudget, (val) => { selectedBudget = val; });
    }

    renderAll();
    updateBrief();
  }
}

/* ==========================================================================
   FEATURE 7: CLIENT SAYS TESTIMONIAL MONOGRAPH SLIDER
   ========================================================================== */
function initClientSaysSlider() {
  const testimonials = [
    {
      quote: `“It has been a great experience with Vastvik Design Group, to have them built our home’s interior. They are a team of professionals, delivering good quality and on time service. They use material of good brands as promised which certainly increase life of your home interior.”`,
      client: "HOMEOWNER & PATRON",
      project: "THE ARAVALI RESIDENCE &bull; GREATER NOIDA",
      image: "assets/images/aravali_main.png"
    },
    {
      quote: `“It’s an awesome experience of getting the interior of our home designed by this group. The entire team has been truly resourceful and patient to deliver the quality work as per my choice. Thank you so much for making my home beautiful and a happy place to live.”`,
      client: "RESIDENTIAL CLIENT",
      project: "SKY PENTHOUSE SANCTUARY &bull; GURUGRAM",
      image: "assets/images/penthouse_sky.png"
    },
    {
      quote: `“From the very start and till the end, it was great experience of getting my home interior by Archit (Vaastvik Design Group). They were ready to accommodate last min changes in design. And the best part it was always budget friendly. Sincere Thanks to whole team.”`,
      client: "VILLA PATRON",
      project: "TRAVERTINE GOLF PAVILION &bull; NOIDA EXPRESSWAY",
      image: "assets/images/villa_serene.png"
    },
    {
      quote: `“Vaastvik Design Group is professional team that will help you to modify your house into a beautiful home… Team is responsive everytime you need and they use good quality of work .. trustworthy company… u can go with this blindly.. Thankyou Team.”`,
      client: "INTERIOR SUITE CLIENT",
      project: "SECTOR 44 BOUTIQUE RESIDENCE &bull; NOIDA",
      image: "assets/images/bespoke_oak_joinery.png"
    }
  ];

  let currentIndex = 0;

  const quoteEl = document.getElementById('testimonial-quote');
  const clientEl = document.getElementById('testimonial-client');
  const projectEl = document.getElementById('testimonial-project');
  const counterEl = document.getElementById('testimonial-counter');
  const imageEl = document.getElementById('testimonial-image');

  const prevBtn = document.getElementById('testimonial-prev-btn');
  const nextBtn = document.getElementById('testimonial-next-btn');

  if (!quoteEl || !prevBtn || !nextBtn) return;

  function renderTestimonial(index) {
    const item = testimonials[index];
    if (!item) return;

    if (quoteEl) {
      quoteEl.classList.add('opacity-0');
      setTimeout(() => {
        quoteEl.innerHTML = item.quote;
        quoteEl.classList.remove('opacity-0');
      }, 250);
    }

    if (clientEl) clientEl.innerHTML = item.client;
    if (projectEl) projectEl.innerHTML = item.project;
    if (counterEl) counterEl.innerHTML = `0${index + 1} / 0${testimonials.length}`;

    if (imageEl) {
      imageEl.classList.add('opacity-40');
      setTimeout(() => {
        imageEl.src = item.image;
        imageEl.classList.remove('opacity-40');
      }, 250);
    }
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    renderTestimonial(currentIndex);
  });
}

/* ==========================================================================
   FEATURE 8: EDITORIAL NEWSLETTER SUBSCRIPTION FORM
   ========================================================================== */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('newsletter-email');
  const successMsg = document.getElementById('newsletter-success-msg');
  const errorMsg = document.getElementById('newsletter-error-msg');

  if (!form || !emailInput) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset messages
    if (successMsg) successMsg.classList.add('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');

    if (!email || !emailRegex.test(email)) {
      if (errorMsg) errorMsg.classList.remove('hidden');
      return;
    }

    // Persist subscriber locally
    try {
      const existing = JSON.parse(localStorage.getItem('vaastvik_subscribers') || '[]');
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem('vaastvik_subscribers', JSON.stringify(existing));
      }
    } catch (err) {
      console.warn('Subscribers storage error:', err);
    }

    // Show success message and clear input
    if (successMsg) successMsg.classList.remove('hidden');
    emailInput.value = '';
  });
}

/* ==========================================================================
   FEATURE 9: START A PROJECT ARCHITECTURAL ENQUIRY FORM
   ========================================================================== */
function initProjectEnquiryForm() {
  const form = document.getElementById('project-enquiry-form');
  const nameInput = document.getElementById('enquiry-name');
  const emailInput = document.getElementById('enquiry-email');
  const phoneInput = document.getElementById('enquiry-phone');
  const typeSelect = document.getElementById('enquiry-type');
  const locationInput = document.getElementById('enquiry-location');
  const briefTextarea = document.getElementById('enquiry-brief');

  const successMsg = document.getElementById('enquiry-success-msg');
  const errorMsg = document.getElementById('enquiry-error-msg');

  if (!form || !nameInput || !emailInput || !phoneInput) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const type = typeSelect ? typeSelect.value : 'Turnkey Interior Architecture';
    const location = locationInput ? locationInput.value.trim() : 'Delhi NCR';
    const brief = briefTextarea ? briefTextarea.value.trim() : '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset feedback
    if (successMsg) successMsg.classList.add('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');

    if (!name || !email || !phone || !emailRegex.test(email) || !brief) {
      if (errorMsg) errorMsg.classList.remove('hidden');
      return;
    }

    // Persist enquiry locally for CMS audit
    try {
      const existing = JSON.parse(localStorage.getItem('vaastvik_enquiries') || '[]');
      existing.push({ name, email, phone, type, location, brief, timestamp: new Date().toISOString() });
      localStorage.setItem('vaastvik_enquiries', JSON.stringify(existing));
    } catch (err) {
      console.warn('Enquiry storage error:', err);
    }

    // Show success state
    if (successMsg) successMsg.classList.remove('hidden');

    // Trigger WhatsApp pre-filled inquiry dispatch
    const waMessage = `Hello Archit Rathi (Vaastvik Design Group),\n\nNew Project Enquiry Submission:\n• Patron Name: ${name}\n• Contact: ${phone}\n• Email: ${email}\n• Discipline: ${type}\n• Location: ${location}\n• Brief: ${brief}`;
    const waUrl = `https://wa.me/917701939902?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);

    form.reset();
  });
}

/* ==========================================================================
   FEATURE 10: HARDWARE-ACCELERATED EDITORIAL SCROLL-REVEAL OBSERVER
   ========================================================================== */
function initScrollRevealObserver() {
  const revealElements = document.querySelectorAll(
    '.reveal-on-scroll, .reveal-section, .reveal-clip-up, .reveal-fade-up, .reveal-fade-horizontal, .reveal-partner-logo, .reveal-timeline-line'
  );

  // Pre-reveal all images to ensure immediate rendering without delay
  document.querySelectorAll('img').forEach(img => {
    if (img.getAttribute('loading') === 'lazy') {
      img.setAttribute('loading', 'eager');
    }
    img.setAttribute('decoding', 'async');
  });

  if (!revealElements || revealElements.length === 0) return;

  if (typeof IntersectionObserver === 'undefined') {
    revealElements.forEach(el => el.classList.add('is-revealed', 'is-visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '100px 0px 150px 0px',
    threshold: 0.01
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight + 100) {
        entry.target.classList.add('is-revealed', 'is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    if (el.classList.contains('reveal-fade-up') || el.classList.contains('reveal-partner-logo')) {
      const parentGrid = el.closest('.grid');
      if (parentGrid) {
        const siblings = Array.from(parentGrid.children);
        const elIndex = siblings.indexOf(el);
        if (elIndex >= 0) {
          el.style.transitionDelay = `${(elIndex % 6) * 90}ms`;
        }
      }
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 150) {
      el.classList.add('is-revealed', 'is-visible');
    } else {
      observer.observe(el);
    }
  });

  // Safety fallback for fast scroll or dynamic initial rendering
  const checkReveal = () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 250) {
        el.classList.add('is-revealed', 'is-visible');
      }
    });
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  };

  setTimeout(checkReveal, 300);
  setTimeout(checkReveal, 1000);
  window.addEventListener('load', checkReveal);
}

// Global DOM Loaded Initializer
document.addEventListener('DOMContentLoaded', () => {
  initCostCalculator();
  initArchitectVoicePlayer();
  initWhatsAppEngine();
  initClientSaysSlider();
  initNewsletterForm();
  initProjectEnquiryForm();
  initScrollRevealObserver();
});


