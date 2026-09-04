// ==========================================================================
// VAASTVIK DESIGN GROUP — REAL-TIME 3D MEDIA CMS ADMIN ENGINE (v3.0)
// ==========================================================================

const DEFAULT_CMS_DATA = {
  hero: {
    title: "VAASTVIK DESIGN GROUP",
    subtitle: "ARCHITECTURE & INTERIOR DESIGN STUDIO",
    words: ["ARCHITECTURAL", "RIGOR.", "QUIET LUXURY."],
    description: "Vaastvik Design Group is an ultra-premium architecture, luxury interior design, and turnkey civil construction studio based in Greater Noida, Delhi NCR, founded by civil engineer Archit Rathi.",
    videoUrl: "assets/videos/hero_cinematic.mp4",
    ctaLabel: "EXPLORE MONOGRAPH"
  },
  about: {
    founderName: "Archit Rathi — Founder & Principal Civil Engineer",
    founderImg: "assets/images/archit_rathi.png",
    philosophy: "We view architecture not as decorative embellishment, but as the rigorous orchestration of space, shadow, natural illumination, and raw materiality. Every wall reveal, recessed linear channel, and travertine joint is executed under direct structural engineering supervision.",
    stat1: "120,000+ Sq. Ft. Delivered Volume",
    stat2: "100% In-House Structural Execution",
    stat3: "0.5mm Tolerance Standard"
  },
  projects: {
    aravali: {
      id: "aravali",
      title: "The Aravali Residence",
      category: "Residential / Interior Architecture",
      location: "Greater Noida, Uttar Pradesh",
      area: "8,500 Sq. Ft.",
      year: "2026",
      material: "Travertine, Smoked Oak, Fluted Plaster",
      heroImg: "assets/images/aravali_main.png",
      drawingImg: "assets/images/aravali_drawing.png",
      description: "The Aravali Residence was conceived as an architectural sanctuary where harsh North Indian summer daylight is softly diffused through custom fluted oak fins. Built over 8,500 square feet in Greater Noida, the double-height living hall features an 18-foot monolithic beige travertine fireplace floating against seamless warm micro-cement walls.",
      gallery: ["assets/images/aravali_main.png", "assets/images/aravali_drawing.png", "assets/images/material_travertine.png"]
    },
    serene: {
      id: "serene",
      title: "Villa Serene",
      category: "Modern Architectural Villa",
      location: "Delhi NCR, India",
      area: "12,000 Sq. Ft.",
      year: "2025",
      material: "Board-Formed Concrete, Teak Louvers, Basalt",
      heroImg: "assets/images/villa_serene.png",
      drawingImg: "assets/images/aravali_drawing.png",
      description: "Villa Serene is a bold cantilevered residence built around an outdoor dark basalt reflecting mirror. The exterior features board-formed architectural concrete panels juxtaposed against automated warm teak wood privacy louvers.",
      gallery: ["assets/images/villa_serene.png", "assets/images/material_smoked_oak.png"]
    },
    sky: {
      id: "sky",
      title: "Sky Penthouse",
      category: "Luxury Penthouse Interior",
      location: "Gurugram, Haryana",
      area: "6,200 Sq. Ft.",
      year: "2026",
      material: "Smoked Glass, Satin Brass, Calacatta Marble",
      heroImg: "assets/images/penthouse_sky.png",
      drawingImg: "assets/images/aravali_drawing.png",
      description: "Perched on the 32nd floor in Gurugram, Sky Penthouse features panoramic floor-to-ceiling glass walls, a custom sculptural satin brass floating light fixture, and raw unpolished Calacatta marble dining monoliths.",
      gallery: ["assets/images/penthouse_sky.png"]
    },
    courtyard: {
      id: "courtyard",
      title: "The Courtyard House",
      category: "Contemporary Residence",
      location: "Noida, Uttar Pradesh",
      area: "9,800 Sq. Ft.",
      year: "2025",
      material: "Exposed Concrete, Stone Tiles, Indoor Vegetation",
      heroImg: "assets/images/courtyard_house.png",
      drawingImg: "assets/images/aravali_drawing.png",
      description: "Designed around a central open-sky internal courtyard, this residence brings natural light deep into the ground floor plan. Exposed concrete columns framing a weeping fig tree create a tranquil sanctuary inside.",
      gallery: ["assets/images/courtyard_house.png"]
    }
  },
  services: [
    {
      code: "01",
      title: "Complete Architecture & Turnkey Execution",
      description: "Comprehensive architectural design, civil structural construction, and full interior execution handled entirely under one roof.",
      deliverables: ["Site Planning & Solar Orientation", "Civil Engineering & Structural Foundation", "Custom Architectural Joinery & Turnkey Handover"]
    },
    {
      code: "02",
      title: "Luxury Interior Architecture",
      description: "High-end residential interior spatial planning, bespoke furniture design, material selection, and ambient lighting integration.",
      deliverables: ["Custom Stone & Timber Monoliths", "Implicit Acoustic & Thermal Layering", "Curated Italian Loose Furniture Specification"]
    },
    {
      code: "03",
      title: "Civil Contracting & Structural Engineering",
      description: "Precision civil construction for residential villas, incorporating post-tensioned slabs, exposed concrete, and shadow-line reveals.",
      deliverables: ["High-Tolerance RCC Frame Construction", "Concealed MEP & Mechanical Ductwork", "Exterior Sintered Stone Facade Cladding"]
    }
  ],
  specdeck: [
    {
      num: "01",
      title: "Post-Tensioned Monolithic Slab Foundation",
      subtitle: "STRUCTURAL CIVIL ENGINEERING",
      description: "Engineered RCC post-tensioned slabs eliminating intrusive interior columns, allowing uninterrupted 12-meter clear spans across living areas.",
      blueprint: "assets/images/aravali_drawing.png",
      points: ["12-Meter Column-Free Clear Spans", "M40 Grade Concrete Specification", "1mm Shadow-Line Perimeter Reveal"]
    },
    {
      num: "02",
      title: "Smoked European Oak Joinery Systems",
      subtitle: "BESPOKE INTERIOR ARCHITECTURE",
      description: "Precision-mitered 22mm smoked oak wall paneling with integrated micro-led channels and concealed pivot hardware.",
      blueprint: "assets/images/material_smoked_oak.png",
      points: ["22mm European Smoked Oak Slabs", "Concealed Pivot Hinge Engineering", "Soft-Close Magnetic Touch Latching"]
    },
    {
      num: "03",
      title: "Concealed Variable-Flow HVAC & MEP",
      subtitle: "ENVIRONMENTAL COMFORT",
      description: "Dual-circuit VRV air conditioning with linear slot diffusers recessed seamlessly into plaster ceilings for zero visual clutter.",
      blueprint: "assets/images/construction_raw.png",
      points: ["Linear Slot Flush Diffusers", "Acoustically Dampened Ducting", "Smart BMS Sensor Integration"]
    },
    {
      num: "04",
      title: "Monolithic Honed Roman Travertine",
      subtitle: "MATERIAL TACTILITY",
      description: "Hand-selected 20mm unfilled Italian travertine slabs installed with 1mm hairline grout joints for organic surface continuity.",
      blueprint: "assets/images/material_travertine.png",
      points: ["Quarried Tuscan Travertine", "1mm Hairline Grout Precision", "Honed Stain-Resistant Sealant"]
    }
  ],
  milestones: [
    {
      step: "01",
      title: "Architectural Blueprinting & Solar Modeling",
      weeks: "Weeks 1 – 4",
      desc: "Concept development, structural engineering calculations, 3D spatial renders, and solar orientation modeling."
    },
    {
      step: "02",
      title: "Civil Shell & Monolithic Slab Execution",
      weeks: "Weeks 5 – 16",
      desc: "Excavation, RCC slab casting, brickwork, waterproofing, and structural MEP conduit installation."
    },
    {
      step: "03",
      title: "Bespoke Interior Fitting & Turnkey Handover",
      weeks: "Weeks 17 – 28",
      desc: "Custom joinery installation, travertine stone laying, fixture commissioning, and final white-glove handover."
    }
  ],
  partners: {
    boffi: {
      title: "Boffi",
      category: "01 • KITCHEN ARCHITECTURE",
      website: "https://www.boffi.com",
      description: "Italian pioneer in minimalist architectural kitchen design, crafting monolithic travertine islands, integrated concealed pocket doors, and matte stainless steel systems.",
      characteristics: ["Monolithic Travertine Islands", "Concealed Pocket Cabinetry", "Hand-Finished Satin Steel", "Integrated Seamless Basins"],
      applications: "Luxury Villa Master Kitchens, Open-Plan Penthouse Culinary Suites",
      images: [],
      explore: ["poliform", "dada", "gaggenau"]
    },
    dornbracht: {
      title: "Dornbracht",
      category: "02 • BATH SANCTUARY",
      website: "https://www.dornbracht.com",
      description: "German precision bath fittings and sensory shower architectures featuring dark platinum satin, brushed brass, and architectural geometry.",
      characteristics: ["Sensory Sky Rain Panels", "Dark Platinum Satin Finishes", "Concealed Wall Valves", "100% Precision German Engineering"],
      applications: "Master Sanctuary Bathrooms, Private Spa Wellness Suites",
      images: [],
      explore: ["agape", "gessi", "kallista"]
    },
    flos: {
      title: "Flos",
      category: "04 • LIGHTING SYSTEMS",
      website: "https://flos.com",
      description: "Italian architectural lighting titan pioneering diffuse linear magnetic tracks, structural downlights, and iconic decorative pendants.",
      characteristics: ["Running Magnet Track Systems", "Minimalist Micro-Spotlights", "Soft Architecture Plaster-In", "Warm 2700K High-CRI LED"],
      applications: "Double-Height Gallery Walls, Architectural Cove Channels",
      images: [],
      explore: ["viabizzuno", "occhio", "deltalight"]
    },
    salvatori: {
      title: "Salvatori Stone",
      category: "05 • MATERIAL SURFACES",
      website: "https://www.salvatoriofficial.com",
      description: "Tuscan natural stone house masterfully texturing raw Italian marble and beige travertine into fluted wall panels and monolithic surfaces.",
      characteristics: ["Bamboo & Lithoverde Ribbing", "Tuscan Crema d'Orcia Stone", "Micro-Ribbed Wall Panels", "Zero-Waste Recycled Slabs"],
      applications: "Master Bedroom Accent Walls, Travertine Fireplaces",
      images: [],
      explore: ["mutina", "dekton", "marazzi"]
    },
    buster_punch: {
      title: "Buster + Punch",
      category: "03 • ARCHITECTURAL HARDWARE",
      website: "https://www.busterandpunch.com",
      description: "London hardware brand famous for diamond-cut cross-knurled solid metal door handles, cabinet pulls, and toggle light switches.",
      characteristics: ["Solid Knurled Brass & Steel", "Smoked Bronze Finishes", "Heavyweight Tactile Feel", "Matching Dimmer Switches"],
      applications: "Custom Pivot Entry Doors, Smoked Oak Joinery Pulls",
      images: [],
      explore: ["formani", "ogro", "fsb"]
    }
  },
  articles: {
    aravali: {
      title: "Inside The Aravali Residence",
      category: "Architectural Case Study — 2026",
      location: "Greater Noida, Uttar Pradesh",
      heroImg: "assets/images/aravali_main.png",
      description: "Exploring micro-cement finishes, daylight volume orientation, and custom fluted oak joinery in Greater Noida. The residence synthesizes passive solar shade with double-height spatial luxury."
    },
    travertine: {
      title: "Material Notes: Travertine",
      category: "Material Essay — 2026",
      location: "Monograph Tactile Study",
      heroImg: "assets/images/material_travertine.png",
      description: "Tactile porosity, natural warm hues, and why unfilled Roman travertine outlasts synthetic porcelain. Sourced directly from Italian quarries."
    }
  },
  contact: {
    address: "Vaastvik Design Group, Greater Noida, Delhi NCR, India",
    phone: "+91 77019 39902",
    email: "info@vaastvikdesigngroup.com",
    hours: "Mon – Sat: 09:30 AM – 07:00 PM IST"
  },
  seo: {
    title: "Vaastvik Design Group — Architecture & Interior Design Studio",
    description: "Vaastvik Design Group is an ultra-premium architecture, luxury interior design, and turnkey civil construction studio based in Greater Noida, Delhi NCR, founded by civil engineer Archit Rathi.",
    keywords: "Vaastvik Design Group, Architecture, Interior Design, Construction, Greater Noida, Delhi NCR, Luxury Interiors, Archit Rathi"
  },
  homeInteriorGuide: {
    enabled: true,
    subtitle: "12 / ARCHITECTURAL PUBLICATION",
    title: "HOME INTERIOR GUIDE",
    description: "Gain direct insight into our interior execution framework. Explore curated project summaries, imported European material palettes, bespoke joinery details, and turnkey space planning standards across Delhi NCR.",
    pdfUrl: "https://vaastvikdesigngroup.com/wp-content/uploads/2024/10/VAASTVIK-DESIGN-GROUP-pdf.pdf",
    coverImg: "assets/images/bespoke_oak_joinery.png",
    buttonText: "DOWNLOAD THE GUIDE"
  },
  beautifulInterior: {
    enabled: true,
    subtitle: "13 / CINEMATIC ARCHITECTURE",
    heading: "BEAUTIFUL INTERIOR",
    description: "Watch the video of our beautiful interiors designed by Archit Rathi. This captivating video encapsulates our design philosophy and showcases our exceptional interior design projects.",
    videoUrl: "assets/hero_cinematic.mp4",
    posterUrl: "assets/images/aravali_main.png",
    youtubeUrl: "https://www.youtube.com/watch?v=1da073vLGJ0",
    buttonText: "WATCH FULL FILM"
  },
  howItWorks: {
    enabled: true,
    heading: "HOW IT WORKS",
    ctaText: "BOOK FREE CONSULTATION",
    steps: [
      { step: "01", category: "CONSULTATION", title: "Discovery & Site Analysis", desc: "Initial client meeting, lifestyle profiling, spatial requirement analysis, and comprehensive site contour assessment in Greater Noida & Delhi NCR." },
      { step: "02", category: "DESIGN CONCEPT", title: "Architectural Blueprinting", desc: "Developing 3D spatial volumes, mood boards, solar orientation models, and imported material selections under civil engineering supervision." },
      { step: "03", category: "SPECIFICATION", title: "Engineering & BOQ Finalization", desc: "Itemized cost estimation, structural load calculations, custom joinery working drawings, and MEP layout approvals with zero hidden costs." },
      { step: "04", category: "EXECUTION", title: "Turnkey Civil & Structural Shell", desc: "High-precision RCC shell construction, brickwork, concealed piping, electrical conduits, and post-tensioned slab casting." },
      { step: "05", category: "FIT-OUT", title: "Interior Finishing & Joinery", desc: "Installation of imported Roman travertine, smoked oak millwork, Italian kitchens, Buster + Punch hardware, and Flos track lighting." },
      { step: "06", category: "HANDOVER", title: "White-Glove Quality Audit & Delivery", desc: "Rigorously audited snag list, deep cleaning, smart home commissioning, and final keys handover with ongoing structural warranty." }
    ]
  },
  clientSays: {
    enabled: true,
    heading: "CLIENT SAYS",
    subtitle: "15 / PATRON REFLECTIONS",
    testimonials: [
      {
        quote: "Archit Rathi and the Vaastvik team transformed our raw shell into an extraordinary architectural monograph. Their precision with travertine reveals and smoked oak joinery is unmatched across Delhi NCR.",
        name: "Vikram & Ananya Sharma",
        project: "The Aravali Residence",
        location: "Greater Noida",
        img: "assets/images/aravali_main.png"
      },
      {
        quote: "Working with a civil engineer-led design firm gave us complete peace of mind. Every cantilever and lighting slot was executed to millimeter precision.",
        name: "Rajesh Malhotra",
        project: "Villa Serene",
        location: "Delhi NCR",
        img: "assets/images/villa_serene.png"
      },
      {
        quote: "The team delivered our penthouse on schedule with flawless Italian kitchen fit-outs and custom acoustic plaster work. Exceptional craftsmanship.",
        name: "Priya & Devansh Mehta",
        project: "Sky Penthouse",
        location: "Gurugram",
        img: "assets/images/penthouse_sky.png"
      }
    ]
  },
  trustedPartners: {
    enabled: true,
    heading: "OUR TRUSTED PARTNERS",
    subtitle: "16 / MATERIAL SPECIFICATION",
    description: "We specify exclusively from internationally recognized luxury manufacturers and heritage brands to ensure structural longevity, precision engineering, and timeless spatial beauty across every project.",
    brands: [
      { name: "Siemens", category: "KITCHEN APPLIANCES", detail: "German Built-In Culinary Systems" },
      { name: "Philips", category: "ARCHITECTURAL LIGHTING", detail: "Smart Lighting Controls & LED" },
      { name: "Kohler", category: "BATH SANCTUARY", detail: "Vitreous China & Smart Fixtures" },
      { name: "Jaquar", category: "BATH & WELLNESS", detail: "Premium Faucets & Spa Systems" },
      { name: "Hettich", category: "HARDWARE & RUNNERS", detail: "German Concealed Cabinet Hinges" },
      { name: "Bosch", category: "HOME APPLIANCES", detail: "Concealed Dishwashers & Ovens" },
      { name: "Asian Paints", category: "SURFACE FINISHES", detail: "Royale Luxury Emulsions & Textures" },
      { name: "Nerolac", category: "ARCHITECTURAL COATINGS", detail: "Low-VOC Interior Surface Paints" }
    ]
  },
  journal: {
    enabled: true,
    heading: "MONOGRAPH JOURNAL",
    subtitle: "10 / JOURNAL & RECENT BLOG",
    articles: [
      {
        id: "art-1",
        title: "Inside The Aravali Residence: Light & Materiality",
        category: "CASE STUDY",
        date: "OCTOBER 24, 2026",
        excerpt: "Exploring micro-cement finishes, daylight volume orientation, and custom fluted oak joinery in Greater Noida.",
        heroImg: "assets/images/aravali_main.png",
        link: "#",
        status: "published"
      },
      {
        id: "art-2",
        title: "Material Notes: Unfilled Roman Travertine in Modern Homes",
        category: "MATERIAL ESSAY",
        date: "SEPTEMBER 15, 2026",
        excerpt: "Tactile porosity, natural warm hues, and why unfilled Roman travertine outlasts synthetic porcelain in Delhi NCR climate.",
        heroImg: "assets/images/material_travertine.png",
        link: "#",
        status: "published"
      },
      {
        id: "art-3",
        title: "Turnkey Execution vs Contracting: The Civil Engineer Edge",
        category: "ARCHITECTURE",
        date: "AUGUST 02, 2026",
        excerpt: "Why integrated civil engineering supervision prevents structural defects and guarantees 0.5mm joinery tolerances.",
        heroImg: "assets/images/construction_raw.png",
        link: "#",
        status: "published"
      }
    ]
  },
  newsletter: {
    enabled: true,
    heading: "STAY INSPIRED",
    description: "Receive curated architectural monographs, material discourses, and completed project updates from Vaastvik Design Group directly to your inbox.",
    buttonText: "SUBSCRIBE"
  },
  startAProject: {
    enabled: true,
    heading: "START A PROJECT",
    quote: "“Tell us about the space you want to create.”",
    description: "An Interior And Construction Company based in Greater Noida, Uttar Pradesh, India. We specialize in luxury turn-key civil architecture, villa design, and bespoke interior spaces across Delhi NCR.",
    phone: "+91 77019 39902",
    email: "info@vaastvikdesigngroup.com",
    coordinates: "28.4744° N, 77.5040° E",
    ctaText: "SEND ENQUIRY ↗",
    finalCtaLine1: "LET'S CREATE",
    finalCtaLine2: "SOMETHING",
    finalCtaLine3: "WORTH COMING HOME TO.",
    finalCtaButton: "START A CONVERSATION ↗"
  },
  team: {
    enabled: true,
    heading: "THE STUDIO / OUR TEAM",
    subtitle: "19 / STUDIO PROFILE & TEAM",
    leadName: "Archit Rathi",
    leadRole: "Founder & Principal Architect",
    leadDegree: "B.Tech Civil Engineering",
    leadImg: "assets/images/archit_rathi.png",
    leadBio1: "Welcome to Vaastvik Design Group, a leading interior design and construction firm founded by Archit Rathi, a visionary entrepreneur with a Civil Engineering degree. With a passion for spatial design and an unyielding commitment to structural precision, Archit combines civil engineering rigor with an unparalleled eye for quiet luxury aesthetics.",
    leadBio2: "His heightened sense of spatial proportions creates elegant and timeless interiors across both contemporary villas and urban penthouse residences in Greater Noida, Gurugram, and the wider Delhi NCR."
  },
  footer: {
    enabled: true,
    brandTitle: "Vaastvik Design Group",
    brandSubtitle: "TURNKEY CIVIL & INTERIOR ARCHITECTURE STUDIO",
    brandDesc: "Founded by Civil Engineer Archit Rathi. Delivering bespoke architectural villas, penthouse spatial design, and turn-key civil construction across Greater Noida, Gurugram, and Delhi NCR.",
    disciplines: "Architectural Design • Interior Architecture • Turnkey Civil Construction",
    copyright: "© 2026 VAASTVIK DESIGN GROUP. ALL RIGHTS RESERVED.",
    privacyUrl: "https://www.termsfeed.com/live/8c2c31f7-74a6-4484-a248-8c1ac6843a23"
  },

  investmentCalculator: {
    enabled: true,
    tag: "10 / INVESTMENT ESTIMATOR",
    title: "PROJECT COST CALCULATOR",
    currency: "₹",
    minPlotArea: 2000,
    maxPlotArea: 20000,
    areaStep: 500,
    defaultArea: 5000,
    ctaText: "BOOK CONSULTATION FOR THIS BUDGET ↗",
    disclaimer: "*All estimates are baseline indicative costs for turnkey civil construction, architectural engineering, and interior fitout across Greater Noida & Delhi NCR.",
    structuralTiers: [
      { id: "st1", name: "Structural RCC", rate: 4200, desc: "M35 Grade Reinforced Shell, Brickwork & MEP Channelling" },
      { id: "st2", name: "Monolithic Cantilever", rate: 6800, desc: "M40 Post-Tensioned Concrete, Double Height Spans & Board-Form Finish" }
    ],
    joineryPackages: [
      { id: "jp1", name: "Bespoke Studio Teak", rate: 3500, desc: "Austrian Oak Millwork, Indian Teak Doors & Premium Quartz Surfaces" },
      { id: "jp2", name: "Imported Italian Boffi", rate: 6500, desc: "Boffi & Poliform Import Kitchens, Honed Travertine & Concealed Pivot Joinery" }
    ]
  },
  architectAudio: {
    enabled: true,
    tag: "21 / AUDIO ARCHITECTURAL MONOGRAPH",
    title: "VOICE OF THE ARCHITECT",
    sub: "LISTEN TO PRINCIPAL ARCHITECT ARCHIT RATHI DISCUSS SPATIAL PHILOSOPHY AND MATERIAL SELECTION",
    architectName: "Archit Rathi",
    architectRole: "Founder & Principal Architect",
    tracks: [
      {
        id: "tr1",
        title: "The Architecture of Quiet Luxury",
        projectName: "The Aravali Residence",
        duration: "02:45",
        audioUrl: "https://actions.google.com/sounds/v1/ambiences/outdoor_rain.ogg",
        transcript: "When we approached the Aravali Residence site, our primary engineering challenge was creating an uninterrupted 24-meter structural span that would allow natural daylight to flood the central courtyard while maintaining structural integrity. By deploying M40 grade post-tensioned concrete, we eliminated internal support columns entirely...",
        enabled: true
      },
      {
        id: "tr2",
        title: "Acoustics & Smoked Oak Millwork",
        projectName: "Sky Penthouse",
        duration: "03:10",
        audioUrl: "https://actions.google.com/sounds/v1/ambiences/outdoor_rain.ogg",
        transcript: "Acoustics are often overlooked in high-rise residences. In the Sky Penthouse, we integrated micro-perforated acoustic backing behind the 22mm smoked oak wall panelling, absorbing unwanted echo while elevating spatial warmth...",
        enabled: true
      }
    ]
  },

  whatsappEngine: {
    enabled: true,
    tag: "22 / 1-CLICK CONSULTATION",
    title: "WHATSAPP ARCHITECT CONSULTATION",
    sub: "SELECT YOUR PROJECT SPECIFICATIONS TO GENERATE A DIRECT ARCHITECTURAL CONSULTATION BRIEF",
    phone: "+91 77019 39902",
    ctaText: "GENERATE CONSULTATION WHATSAPP ↗",
    defaultMsg: "Hello Archit,\nI would like to discuss an architectural/interior project with Vaastvik Design Group.",
    projectTypes: "Turnkey Architectural Villa, Penthouse Interior Architecture, Civil Construction & Structural Contracting, Luxury Residential Renovation",
    plotSizes: "2,500 – 5,000 Sq. Ft., 5,000 – 10,000 Sq. Ft., 10,000 – 20,000 Sq. Ft., 20,000+ Sq. Ft.",
    budgetRanges: "₹ 1.5 Cr – ₹ 3.0 Cr, ₹ 3.0 Cr – ₹ 6.0 Cr, ₹ 6.0 Cr – ₹ 10.0 Cr, ₹ 10.0 Cr+"
  },
  inquiries: []
};

// Application State
let currentCmsData = JSON.parse(localStorage.getItem('vaastvik_cms_data')) || JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));

document.addEventListener('DOMContentLoaded', () => {
  initAdminSecurityLock();
  initTabNavigation();
  initGlobalControls();
  renderAllModules();
  initDragAndDropDropzones();
  initRealTimeAutoSync();
  updateStorageMetrics();
});

// Security Lock & Passkey System
function initAdminSecurityLock() {
  const overlay = document.getElementById('admin-security-overlay');
  const passkeyInput = document.getElementById('admin-passkey-input');
  const unlockBtn = document.getElementById('btn-unlock-admin');
  const errorMsg = document.getElementById('admin-passkey-error');
  const lockBtn = document.getElementById('btn-lock-admin');
  const changePasskeyBtn = document.getElementById('btn-change-passkey');

  if (!overlay || !passkeyInput || !unlockBtn) return;

  const isAuthed = sessionStorage.getItem('vaastvik_admin_authed') === 'true';

  if (isAuthed) {
    overlay.classList.add('hidden');
  } else {
    overlay.classList.remove('hidden');
    setTimeout(() => passkeyInput.focus(), 100);
  }

  const attemptUnlock = () => {
    const currentPasskey = localStorage.getItem('vaastvik_admin_passkey') || '1629';
    const entered = passkeyInput.value.trim();

    if (entered === currentPasskey) {
      sessionStorage.setItem('vaastvik_admin_authed', 'true');
      overlay.classList.add('hidden');
      if (errorMsg) errorMsg.classList.add('hidden');
      passkeyInput.value = '';
      showToast('Admin Console Unlocked!');
    } else {
      if (errorMsg) errorMsg.classList.remove('hidden');
      passkeyInput.classList.add('border-red-500');
      setTimeout(() => passkeyInput.classList.remove('border-red-500'), 1500);
    }
  };

  unlockBtn.addEventListener('click', attemptUnlock);

  passkeyInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      attemptUnlock();
    }
  });

  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      sessionStorage.removeItem('vaastvik_admin_authed');
      overlay.classList.remove('hidden');
      passkeyInput.focus();
      showToast('Admin Console Locked!');
    });
  }

  if (changePasskeyBtn) {
    changePasskeyBtn.addEventListener('click', () => {
      const current = localStorage.getItem('vaastvik_admin_passkey') || '1629';
      const newPin = prompt(`Enter new Security Passkey (Current: ${current}):`);
      if (newPin && newPin.trim().length > 0) {
        localStorage.setItem('vaastvik_admin_passkey', newPin.trim());
        showToast(`Security Passkey updated to: ${newPin.trim()}`);
      }
    });
  }
}

// Navigation Tabs
function initTabNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      switchTab(targetId);
    });
  });
}

window.switchTab = function(tabId) {
  document.querySelectorAll('.tab-content').forEach(sec => sec.classList.add('hidden'));
  const target = document.getElementById(tabId);
  if (target) target.classList.remove('hidden');
  
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.getAttribute('data-tab') === tabId) t.classList.add('active');
    else t.classList.remove('active');
  });
};

// Real-Time Event Listener for Instant Syncing
function initRealTimeAutoSync() {
  const canvas = document.getElementById('editor-canvas');
  if (!canvas) return;

  const triggerRealTimeSync = () => {
    const indicatorText = document.getElementById('sync-indicator-text');
    if (indicatorText) indicatorText.textContent = 'SYNCING LIVE...';

    saveCmsData(false); // Silent save & postMessage broadcast with zero delay
    if (indicatorText) indicatorText.textContent = 'REAL-TIME AUTO-SYNC LIVE';
  };

  canvas.addEventListener('input', triggerRealTimeSync);
  canvas.addEventListener('change', triggerRealTimeSync);
}

// Global Action Handlers
function initGlobalControls() {
  document.getElementById('btn-save-all')?.addEventListener('click', () => saveCmsData(true));
  document.getElementById('btn-reset-defaults')?.addEventListener('click', resetCmsData);
  document.getElementById('btn-export-json')?.addEventListener('click', exportCmsJson);
  document.getElementById('file-import-json')?.addEventListener('change', importCmsJson);
  document.getElementById('btn-toggle-preview')?.addEventListener('click', togglePreviewDrawer);
  document.getElementById('btn-close-preview')?.addEventListener('click', togglePreviewDrawer);
  
  const searchInput = document.getElementById('partner-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => filterPartnersList(e.target.value.toLowerCase()));
  }

  // Dynamic add buttons
  document.getElementById('btn-add-how-step')?.addEventListener('click', addHowStep);
  document.getElementById('btn-add-testimonial')?.addEventListener('click', addTestimonial);
  document.getElementById('btn-add-partner-brand')?.addEventListener('click', addPartnerBrand);
  document.getElementById('btn-add-journal-article')?.addEventListener('click', addJournalArticle);

  // Dynamic add buttons for modules 21-26
  document.getElementById('btn-add-structural-tier')?.addEventListener('click', addStructuralTier);
  document.getElementById('btn-add-joinery-package')?.addEventListener('click', addJoineryPackage);

  // Table exports and clear logs
  document.getElementById('btn-export-subscribers')?.addEventListener('click', exportSubscribersCSV);
  document.getElementById('btn-clear-subscribers')?.addEventListener('click', clearSubscribersLog);
  document.getElementById('btn-export-enquiries')?.addEventListener('click', exportEnquiriesCSV);
  document.getElementById('btn-clear-enquiries-log')?.addEventListener('click', clearEnquiriesLog);
}

function saveCmsData(showToastAlert = true) {
  collectFormData();
  try {
    localStorage.setItem('vaastvik_cms_data', JSON.stringify(currentCmsData));
  } catch (err) {
    console.warn('Storage quota exceeded, sending live broadcast only', err);
  }
  updateStorageMetrics();
  
  if (showToastAlert) {
    showToast('CMS changes saved successfully to local store!');
  }
  
  // Broadcast to Live Preview iframe & top window
  const iframe = document.getElementById('live-preview-iframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: 'CMS_UPDATE', data: currentCmsData }, '*');
  }
}

function resetCmsData() {
  if (confirm('Are you sure you want to reset all CMS content to factory defaults? Any custom edits will be reverted.')) {
    currentCmsData = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
    localStorage.removeItem('vaastvik_cms_data');
    renderAllModules();
    initDragAndDropDropzones();
    saveCmsData(false);
    updateStorageMetrics();
    showToast('Factory defaults restored successfully!');
  }
}

function exportCmsJson() {
  collectFormData();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentCmsData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "vaastvik_cms_config.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('CMS configuration exported as JSON!');
}

function importCmsJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      currentCmsData = imported;
      localStorage.setItem('vaastvik_cms_data', JSON.stringify(currentCmsData));
      renderAllModules();
      initDragAndDropDropzones();
      saveCmsData(false);
      updateStorageMetrics();
      showToast('CMS JSON imported and applied successfully!');
    } catch (err) {
      alert('Invalid JSON file format.');
    }
  };
  reader.readAsText(file);
}

function togglePreviewDrawer() {
  const drawer = document.getElementById('preview-drawer');
  const btnText = document.getElementById('preview-btn-text');
  if (!drawer) return;
  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
    if (btnText) btnText.textContent = 'Hide Live Preview';
  } else {
    drawer.classList.add('hidden');
    if (btnText) btnText.textContent = 'Split Live Preview';
  }
}

// Drag & Drop File Handler Engine
function setupDropzone(dropzoneId, fileInputId, targetInputId, mediaType = 'image', previewImgId = null) {
  const dropzone = document.getElementById(dropzoneId);
  const fileInput = document.getElementById(fileInputId);
  const targetInput = document.getElementById(targetInputId);
  if (!dropzone || !fileInput || !targetInput) return;

  dropzone.addEventListener('click', () => fileInput.click());

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('dragover');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      handleFileRead(files[0], targetInput, mediaType, previewImgId);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileRead(e.target.files[0], targetInput, mediaType, previewImgId);
    }
  });
}

function handleFileRead(file, targetInput, mediaType, previewImgId) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    targetInput.value = dataUrl;
    
    if (previewImgId) {
      const previewElem = document.getElementById(previewImgId);
      if (previewElem) {
        previewElem.src = dataUrl;
      }
    }
    saveCmsData(false);
    showToast(`Media auto-uploaded & synced in real-time!`);
  };
  reader.readAsDataURL(file);
}

function initDragAndDropDropzones() {
  setupDropzone('dropzone-hero-video', 'file-hero-video', 'hero-video-url', 'video', 'video-preview-hero');
  setupDropzone('dropzone-about-founder', 'file-about-founder', 'about-founder-img', 'image', 'img-preview-about-founder');
  setupDropzone('dropzone-guide-pdf', 'file-guide-pdf', 'guide-pdf-url', 'pdf', null);
  setupDropzone('dropzone-guide-cover', 'file-guide-cover', 'guide-cover-img', 'image', 'guide-cover-preview');
  setupDropzone('dropzone-video-file', 'file-video-file', 'video-url', 'video', null);
  setupDropzone('dropzone-video-poster', 'file-video-poster', 'video-poster', 'image', 'video-poster-preview');
  setupDropzone('dropzone-team-lead', 'file-team-lead', 'team-lead-img', 'image', 'team-lead-img-preview');
}

// Dynamic Module Renderers
function renderAllModules() {
  renderHeroForm();
  renderAboutForm();
  renderProjectsForm();
  renderServicesForm();
  renderSpecDeckForm();
  renderMilestonesForm();
  renderPartnersForm();
  renderArticlesForm();
  renderContactForm();
  renderSeoForm();
  renderGuideForm();
  renderVideoSectionForm();
  renderHowForm();
  renderTestimonialsForm();
  renderTrustedForm();
  renderJournalForm();
  renderNewsletterForm();
  renderStartProjectForm();
  renderTeamForm();
  renderFooterForm();
  renderCalculatorConfigModule();
  renderWhatsAppEngineModule();
}

function renderHeroForm() {
  const data = currentCmsData.hero || DEFAULT_CMS_DATA.hero;
  document.getElementById('hero-studio-title').value = data.title || '';
  document.getElementById('hero-subtitle').value = data.subtitle || '';
  if (data.words && data.words.length >= 3) {
    document.getElementById('hero-word-1').value = data.words[0];
    document.getElementById('hero-word-2').value = data.words[1];
    document.getElementById('hero-word-3').value = data.words[2];
  }
  document.getElementById('hero-description').value = data.description || '';
  document.getElementById('hero-video-url').value = data.videoUrl || '';
  document.getElementById('hero-cta-label').value = data.ctaLabel || '';
  
  const vPrev = document.getElementById('video-preview-hero');
  if (vPrev && data.videoUrl) vPrev.src = data.videoUrl;
}

function renderAboutForm() {
  const data = currentCmsData.about || DEFAULT_CMS_DATA.about;
  document.getElementById('about-founder-name').value = data.founderName || '';
  document.getElementById('about-founder-img').value = data.founderImg || '';
  document.getElementById('about-philosophy').value = data.philosophy || '';
  document.getElementById('about-stat-1').value = data.stat1 || '';
  document.getElementById('about-stat-2').value = data.stat2 || '';
  document.getElementById('about-stat-3').value = data.stat3 || '';

  const imgPrev = document.getElementById('img-preview-about-founder');
  if (imgPrev && data.founderImg) imgPrev.src = data.founderImg;
}

function renderProjectsForm() {
  const container = document.getElementById('projects-editor-list');
  if (!container) return;
  const projects = currentCmsData.projects || DEFAULT_CMS_DATA.projects;
  
  let html = '';
  Object.keys(projects).forEach((key) => {
    const p = projects[key];
    html += `
      <div class="clay-card p-6 space-y-4" data-project-key="${key}">
        <div class="flex items-center justify-between border-b border-[#E6DEC6]/70 pb-3">
          <span class="text-xs font-mono text-[#8F7032] font-bold uppercase">PROJECT ID: ${key.toUpperCase()}</span>
          <span class="text-xs font-mono text-[#232B2B] font-semibold">${p.title}</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Project Title</label>
            <input type="text" data-field="title" class="input-field" value="${p.title || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Category</label>
            <input type="text" data-field="category" class="input-field" value="${p.category || ''}">
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Location</label>
            <input type="text" data-field="location" class="input-field" value="${p.location || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Area (Sq. Ft.)</label>
            <input type="text" data-field="area" class="input-field" value="${p.area || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Year</label>
            <input type="text" data-field="year" class="input-field" value="${p.year || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Key Materials</label>
            <input type="text" data-field="material" class="input-field" value="${p.material || ''}">
          </div>
        </div>

        <div class="space-y-2">
          <label class="block text-xs font-mono text-[#6B7676] font-bold">Hero Image URL or Drag &amp; Drop Image</label>
          <div class="flex items-center gap-4">
            <input type="text" data-field="heroImg" id="project-hero-input-${key}" class="input-field flex-1" value="${p.heroImg || ''}">
            <img src="${p.heroImg || ''}" id="project-hero-preview-${key}" class="w-16 h-12 rounded-lg object-cover shadow border border-white">
          </div>
          <div id="dropzone-project-${key}" class="clay-dropzone !py-2 text-xs">
            <span class="font-bold">Drag &amp; Drop Image for ${p.title}</span>
            <input type="file" id="file-project-${key}" accept="image/*" class="hidden">
          </div>
        </div>

        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Case Study Description</label>
          <textarea data-field="description" class="textarea-field">${p.description || ''}</textarea>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;

  Object.keys(projects).forEach((key) => {
    setupDropzone(`dropzone-project-${key}`, `file-project-${key}`, `project-hero-input-${key}`, 'image', `project-hero-preview-${key}`);
  });
}

function renderServicesForm() {
  const container = document.getElementById('services-editor-list');
  if (!container) return;
  const services = currentCmsData.services || DEFAULT_CMS_DATA.services;
  
  let html = '';
  services.forEach((s, idx) => {
    html += `
      <div class="clay-card p-6 space-y-4" data-service-idx="${idx}">
        <div class="flex items-center justify-between border-b border-[#E6DEC6]/70 pb-3">
          <span class="text-xs font-mono text-[#8F7032] font-bold uppercase">SERVICE PILLAR ${s.code || (idx+1)}</span>
          <span class="text-xs font-mono text-[#232B2B] font-semibold">${s.title}</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Service Title</label>
            <input type="text" data-field="title" class="input-field" value="${s.title || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Code</label>
            <input type="text" data-field="code" class="input-field" value="${s.code || ''}">
          </div>
        </div>
        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Service Overview Description</label>
          <textarea data-field="description" class="textarea-field">${s.description || ''}</textarea>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderSpecDeckForm() {
  const container = document.getElementById('specdeck-editor-list');
  if (!container) return;
  const specs = currentCmsData.specdeck || DEFAULT_CMS_DATA.specdeck;
  
  let html = '';
  specs.forEach((item, idx) => {
    html += `
      <div class="clay-card p-6 space-y-4" data-spec-idx="${idx}">
        <div class="flex items-center justify-between border-b border-[#E6DEC6]/70 pb-3">
          <span class="text-xs font-mono text-[#8F7032] font-bold uppercase">SPEC SLIDE ${item.num}</span>
          <span class="text-xs font-mono text-[#232B2B] font-semibold">${item.title}</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Slide Title</label>
            <input type="text" data-field="title" class="input-field" value="${item.title || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Technical Category Subtitle</label>
            <input type="text" data-field="subtitle" class="input-field" value="${item.subtitle || ''}">
          </div>
        </div>

        <div class="space-y-2">
          <label class="block text-xs font-mono text-[#6B7676] font-bold">Blueprint Diagram Image or Drag &amp; Drop</label>
          <div class="flex items-center gap-4">
            <input type="text" data-field="blueprint" id="spec-blueprint-input-${idx}" class="input-field flex-1" value="${item.blueprint || ''}">
            <img src="${item.blueprint || ''}" id="spec-blueprint-preview-${idx}" class="w-16 h-12 rounded-lg object-cover shadow border border-white">
          </div>
          <div id="dropzone-spec-${idx}" class="clay-dropzone !py-2 text-xs">
            <span class="font-bold">Drag &amp; Drop Blueprint Image</span>
            <input type="file" id="file-spec-${idx}" accept="image/*" class="hidden">
          </div>
        </div>

        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Technical Narrative</label>
          <textarea data-field="description" class="textarea-field">${item.description || ''}</textarea>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;

  specs.forEach((item, idx) => {
    setupDropzone(`dropzone-spec-${idx}`, `file-spec-${idx}`, `spec-blueprint-input-${idx}`, 'image', `spec-blueprint-preview-${idx}`);
  });
}

function renderMilestonesForm() {
  const container = document.getElementById('milestones-editor-list');
  if (!container) return;
  const milestones = currentCmsData.milestones || DEFAULT_CMS_DATA.milestones;
  
  let html = '';
  milestones.forEach((m, idx) => {
    html += `
      <div class="clay-card p-6 space-y-4" data-milestone-idx="${idx}">
        <div class="flex items-center justify-between border-b border-[#E6DEC6]/70 pb-3">
          <span class="text-xs font-mono text-[#8F7032] font-bold uppercase">PHASE ${m.step}</span>
          <span class="text-xs font-mono text-[#232B2B] font-semibold">${m.title}</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Phase Name</label>
            <input type="text" data-field="title" class="input-field" value="${m.title || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Timeline Window</label>
            <input type="text" data-field="weeks" class="input-field" value="${m.weeks || ''}">
          </div>
        </div>
        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Phase Execution Description</label>
          <textarea data-field="desc" class="textarea-field">${m.desc || ''}</textarea>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderPartnersForm() {
  const container = document.getElementById('partners-editor-list');
  if (!container) return;
  const partners = currentCmsData.partners || DEFAULT_CMS_DATA.partners;
  
  let html = '';
  Object.keys(partners).forEach((key) => {
    const brand = partners[key];
    const imgsStr = (brand.images || []).join(', ');
    html += `
      <div class="clay-card p-6 space-y-4 partner-editor-card" data-brand-key="${key}">
        <div class="flex items-center justify-between border-b border-[#E6DEC6]/70 pb-3">
          <span class="text-xs font-mono text-[#8F7032] font-bold uppercase">BRAND KEY: ${key}</span>
          <span class="text-xs font-mono text-[#232B2B] font-semibold">${brand.title}</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Brand Name</label>
            <input type="text" data-field="title" class="input-field" value="${brand.title || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Category Label</label>
            <input type="text" data-field="category" class="input-field" value="${brand.category || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Website URL</label>
            <input type="text" data-field="website" class="input-field" value="${brand.website || ''}">
          </div>
        </div>
        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Brand Editorial Description</label>
          <textarea data-field="description" class="textarea-field">${brand.description || ''}</textarea>
        </div>
        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Image Gallery URLs (Comma separated)</label>
          <input type="text" data-field="images" class="input-field" value="${imgsStr}">
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function filterPartnersList(query) {
  const cards = document.querySelectorAll('.partner-editor-card');
  cards.forEach(card => {
    const key = card.getAttribute('data-brand-key') || '';
    const text = card.textContent.toLowerCase();
    if (text.includes(query) || key.includes(query)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

function renderArticlesForm() {
  const container = document.getElementById('articles-editor-list');
  if (!container) return;
  const articles = currentCmsData.articles || DEFAULT_CMS_DATA.articles;
  
  let html = '';
  Object.keys(articles).forEach((key) => {
    const art = articles[key];
    html += `
      <div class="clay-card p-6 space-y-4" data-article-key="${key}">
        <div class="flex items-center justify-between border-b border-[#E6DEC6]/70 pb-3">
          <span class="text-xs font-mono text-[#8F7032] font-bold uppercase">ESSAY KEY: ${key}</span>
          <span class="text-xs font-mono text-[#232B2B] font-semibold">${art.title}</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Article Title</label>
            <input type="text" data-field="title" class="input-field" value="${art.title || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Category &amp; Year</label>
            <input type="text" data-field="category" class="input-field" value="${art.category || ''}">
          </div>
        </div>
        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Hero Image URL</label>
          <input type="text" data-field="heroImg" class="input-field" value="${art.heroImg || ''}">
        </div>
        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Excerpt Narrative</label>
          <textarea data-field="description" class="textarea-field">${art.description || ''}</textarea>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderContactForm() {
  const data = currentCmsData.contact || DEFAULT_CMS_DATA.contact;
  document.getElementById('contact-address').value = data.address || '';
  document.getElementById('contact-phone').value = data.phone || '';
  document.getElementById('contact-email').value = data.email || '';
  document.getElementById('contact-hours').value = data.hours || '';
}

function renderSeoForm() {
  const data = currentCmsData.seo || DEFAULT_CMS_DATA.seo;
  document.getElementById('seo-meta-title').value = data.title || '';
  document.getElementById('seo-meta-description').value = data.description || '';
  document.getElementById('seo-keywords').value = data.keywords || '';
}

// --------------------------------------------------------------------------
// MODULE 11: HOME INTERIOR GUIDE
// --------------------------------------------------------------------------
function renderGuideForm() {
  const g = currentCmsData.homeInteriorGuide || DEFAULT_CMS_DATA.homeInteriorGuide;
  const en = document.getElementById('guide-enabled');
  if (en) en.checked = g.enabled !== false;
  document.getElementById('guide-subtitle').value = g.subtitle || '';
  document.getElementById('guide-title').value = g.title || '';
  document.getElementById('guide-description').value = g.description || '';
  document.getElementById('guide-pdf-url').value = g.pdfUrl || '';
  document.getElementById('guide-cover-img').value = g.coverImg || '';
  document.getElementById('guide-button-text').value = g.buttonText || '';

  const prev = document.getElementById('guide-cover-preview');
  if (prev && g.coverImg) prev.src = g.coverImg;
}

// --------------------------------------------------------------------------
// MODULE 12: BEAUTIFUL INTERIOR VIDEO REEL
// --------------------------------------------------------------------------
function renderVideoSectionForm() {
  const v = currentCmsData.beautifulInterior || DEFAULT_CMS_DATA.beautifulInterior;
  const en = document.getElementById('video-enabled');
  if (en) en.checked = v.enabled !== false;
  document.getElementById('video-subtitle').value = v.subtitle || '';
  document.getElementById('video-heading').value = v.heading || '';
  document.getElementById('video-description').value = v.description || '';
  document.getElementById('video-url').value = v.videoUrl || '';
  document.getElementById('video-poster').value = v.posterUrl || '';
  document.getElementById('video-yt-link').value = v.youtubeUrl || '';
  document.getElementById('video-btn-text').value = v.buttonText || '';

  const prev = document.getElementById('video-poster-preview');
  if (prev && v.posterUrl) prev.src = v.posterUrl;
}

// --------------------------------------------------------------------------
// MODULE 13: HOW IT WORKS PROCESS
// --------------------------------------------------------------------------
function renderHowForm() {
  const hw = currentCmsData.howItWorks || DEFAULT_CMS_DATA.howItWorks;
  const en = document.getElementById('how-enabled');
  if (en) en.checked = hw.enabled !== false;
  document.getElementById('how-heading').value = hw.heading || '';
  document.getElementById('how-cta-text').value = hw.ctaText || '';

  renderHowStepsList();
}

function renderHowStepsList() {
  const container = document.getElementById('how-steps-editor-list');
  if (!container) return;
  const steps = (currentCmsData.howItWorks && currentCmsData.howItWorks.steps) || DEFAULT_CMS_DATA.howItWorks.steps;

  let html = '';
  steps.forEach((s, idx) => {
    html += `
      <div class="clay-card p-5 space-y-4" data-how-step-idx="${idx}">
        <div class="flex items-center justify-between border-b border-[#E6DEC6]/70 pb-3">
          <span class="text-xs font-mono text-[#8F7032] font-bold">STAGE ${s.step || (idx+1)}</span>
          <button type="button" onclick="deleteHowStep(${idx})" class="text-xs font-mono text-red-600 font-bold hover:underline">Remove Stage</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Step No.</label>
            <input type="text" data-field="step" class="input-field" value="${s.step || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Category Tag</label>
            <input type="text" data-field="category" class="input-field" value="${s.category || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Stage Title</label>
            <input type="text" data-field="title" class="input-field" value="${s.title || ''}">
          </div>
        </div>
        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Detailed Description</label>
          <textarea data-field="desc" class="textarea-field">${s.desc || ''}</textarea>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function addHowStep() {
  if (!currentCmsData.howItWorks) currentCmsData.howItWorks = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA.howItWorks));
  const steps = currentCmsData.howItWorks.steps || [];
  const nextNum = (steps.length + 1).toString().padStart(2, '0');
  steps.push({
    step: nextNum,
    category: "NEW STAGE",
    title: "New Process Stage",
    desc: "Provide details about this milestone step in the execution sequence."
  });
  renderHowStepsList();
  saveCmsData(false);
}

window.deleteHowStep = function(idx) {
  if (confirm('Delete this process stage?')) {
    currentCmsData.howItWorks.steps.splice(idx, 1);
    renderHowStepsList();
    saveCmsData(false);
  }
};

// --------------------------------------------------------------------------
// MODULE 14: CLIENT TESTIMONIALS
// --------------------------------------------------------------------------
function renderTestimonialsForm() {
  const cs = currentCmsData.clientSays || DEFAULT_CMS_DATA.clientSays;
  const en = document.getElementById('testimonials-enabled');
  if (en) en.checked = cs.enabled !== false;
  document.getElementById('testimonials-heading').value = cs.heading || '';
  document.getElementById('testimonials-subtitle').value = cs.subtitle || '';

  renderTestimonialsList();
}

function renderTestimonialsList() {
  const container = document.getElementById('testimonials-editor-list');
  if (!container) return;
  const list = (currentCmsData.clientSays && currentCmsData.clientSays.testimonials) || DEFAULT_CMS_DATA.clientSays.testimonials;

  let html = '';
  list.forEach((t, idx) => {
    html += `
      <div class="clay-card p-5 space-y-4" data-testimonial-idx="${idx}">
        <div class="flex items-center justify-between border-b border-[#E6DEC6]/70 pb-3">
          <span class="text-xs font-mono text-[#8F7032] font-bold">TESTIMONIAL ${idx + 1}</span>
          <button type="button" onclick="deleteTestimonial(${idx})" class="text-xs font-mono text-red-600 font-bold hover:underline">Remove</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Patron / Client Name</label>
            <input type="text" data-field="name" class="input-field" value="${t.name || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Project Name</label>
            <input type="text" data-field="project" class="input-field" value="${t.project || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Location</label>
            <input type="text" data-field="location" class="input-field" value="${t.location || ''}">
          </div>
        </div>
        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Project Image URL</label>
          <input type="text" data-field="img" class="input-field" value="${t.img || ''}">
        </div>
        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Client Quote / Testimonial Narrative</label>
          <textarea data-field="quote" class="textarea-field">${t.quote || ''}</textarea>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function addTestimonial() {
  if (!currentCmsData.clientSays) currentCmsData.clientSays = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA.clientSays));
  const list = currentCmsData.clientSays.testimonials || [];
  list.push({
    quote: "Sensational design execution and incredible civil precision.",
    name: "New Client Patron",
    project: "Luxury Villa",
    location: "Greater Noida",
    img: "assets/images/aravali_main.png"
  });
  renderTestimonialsList();
  saveCmsData(false);
}

window.deleteTestimonial = function(idx) {
  if (confirm('Delete this testimonial?')) {
    currentCmsData.clientSays.testimonials.splice(idx, 1);
    renderTestimonialsList();
    saveCmsData(false);
  }
};

// --------------------------------------------------------------------------
// MODULE 15: TRUSTED PARTNER BRANDS
// --------------------------------------------------------------------------
function renderTrustedForm() {
  const tp = currentCmsData.trustedPartners || DEFAULT_CMS_DATA.trustedPartners;
  const en = document.getElementById('trusted-enabled');
  if (en) en.checked = tp.enabled !== false;
  document.getElementById('trusted-heading').value = tp.heading || '';
  document.getElementById('trusted-subtitle').value = tp.subtitle || '';
  document.getElementById('trusted-description').value = tp.description || '';

  renderTrustedBrandsList();
}

function renderTrustedBrandsList() {
  const container = document.getElementById('trusted-brands-editor-list');
  if (!container) return;
  const brands = (currentCmsData.trustedPartners && currentCmsData.trustedPartners.brands) || DEFAULT_CMS_DATA.trustedPartners.brands;

  let html = '';
  brands.forEach((b, idx) => {
    html += `
      <div class="clay-card p-5 space-y-4" data-partner-brand-idx="${idx}">
        <div class="flex items-center justify-between border-b border-[#E6DEC6]/70 pb-3">
          <span class="text-xs font-mono text-[#8F7032] font-bold">BRAND ${idx + 1} • ${b.name}</span>
          <button type="button" onclick="deletePartnerBrand(${idx})" class="text-xs font-mono text-red-600 font-bold hover:underline">Remove</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Brand Name</label>
            <input type="text" data-field="name" class="input-field" value="${b.name || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Category Label</label>
            <input type="text" data-field="category" class="input-field" value="${b.category || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Specification Detail</label>
            <input type="text" data-field="detail" class="input-field" value="${b.detail || ''}">
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function addPartnerBrand() {
  if (!currentCmsData.trustedPartners) currentCmsData.trustedPartners = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA.trustedPartners));
  const brands = currentCmsData.trustedPartners.brands || [];
  brands.push({
    name: "New Brand",
    category: "SPECIFICATION",
    detail: "Luxury Manufacturer"
  });
  renderTrustedBrandsList();
  saveCmsData(false);
}

window.deletePartnerBrand = function(idx) {
  if (confirm('Delete this partner brand?')) {
    currentCmsData.trustedPartners.brands.splice(idx, 1);
    renderTrustedBrandsList();
    saveCmsData(false);
  }
};

// --------------------------------------------------------------------------
// MODULE 16: JOURNAL BLOG ARTICLES
// --------------------------------------------------------------------------
function renderJournalForm() {
  const j = currentCmsData.journal || DEFAULT_CMS_DATA.journal;
  const en = document.getElementById('journal-enabled');
  if (en) en.checked = j.enabled !== false;
  document.getElementById('journal-heading').value = j.heading || '';
  document.getElementById('journal-subtitle').value = j.subtitle || '';

  renderJournalArticlesList();
}

function renderJournalArticlesList() {
  const container = document.getElementById('journal-articles-editor-list');
  if (!container) return;
  const articles = (currentCmsData.journal && currentCmsData.journal.articles) || DEFAULT_CMS_DATA.journal.articles;

  let html = '';
  articles.forEach((a, idx) => {
    html += `
      <div class="clay-card p-5 space-y-4" data-journal-article-idx="${idx}">
        <div class="flex items-center justify-between border-b border-[#E6DEC6]/70 pb-3">
          <span class="text-xs font-mono text-[#8F7032] font-bold">ARTICLE ${idx + 1}</span>
          <button type="button" onclick="deleteJournalArticle(${idx})" class="text-xs font-mono text-red-600 font-bold hover:underline">Remove Article</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Title</label>
            <input type="text" data-field="title" class="input-field" value="${a.title || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Category</label>
            <input type="text" data-field="category" class="input-field" value="${a.category || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Publish Date</label>
            <input type="text" data-field="date" class="input-field" value="${a.date || ''}">
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Hero Image URL</label>
            <input type="text" data-field="heroImg" class="input-field" value="${a.heroImg || ''}">
          </div>
          <div>
            <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Article External Link</label>
            <input type="text" data-field="link" class="input-field" value="${a.link || '#'}">
          </div>
        </div>
        <div>
          <label class="block text-xs font-mono text-[#6B7676] font-bold mb-1">Excerpt Summary</label>
          <textarea data-field="excerpt" class="textarea-field">${a.excerpt || ''}</textarea>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function addJournalArticle() {
  if (!currentCmsData.journal) currentCmsData.journal = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA.journal));
  const articles = currentCmsData.journal.articles || [];
  articles.push({
    id: "art-" + (articles.length + 1),
    title: "New Monograph Essay",
    category: "ARCHITECTURE",
    date: "NOVEMBER 2026",
    excerpt: "Architectural study examining spatial proportions and luxury material integration.",
    heroImg: "assets/images/aravali_main.png",
    link: "#",
    status: "published"
  });
  renderJournalArticlesList();
  saveCmsData(false);
}

window.deleteJournalArticle = function(idx) {
  if (confirm('Delete this journal article?')) {
    currentCmsData.journal.articles.splice(idx, 1);
    renderJournalArticlesList();
    saveCmsData(false);
  }
};

// --------------------------------------------------------------------------
// MODULE 17: NEWSLETTER & SUBSCRIBER LOG
// --------------------------------------------------------------------------
function renderNewsletterForm() {
  const n = currentCmsData.newsletter || DEFAULT_CMS_DATA.newsletter;
  const en = document.getElementById('newsletter-enabled');
  if (en) en.checked = n.enabled !== false;
  document.getElementById('newsletter-heading').value = n.heading || '';
  document.getElementById('newsletter-description').value = n.description || '';
  document.getElementById('newsletter-btn-text').value = n.buttonText || '';

  renderSubscribersTable();
}

function renderSubscribersTable() {
  const tbody = document.getElementById('subscribers-table-body');
  if (!tbody) return;

  try {
    const raw = localStorage.getItem('vaastvik_subscribers');
    const subscribers = raw ? JSON.parse(raw) : [];

    if (subscribers.length === 0) {
      tbody.innerHTML = `<tr><td colspan="3" class="p-4 text-center text-[#6B7676] font-medium">No newsletter subscribers recorded yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = subscribers.map((sub, i) => `
      <tr class="hover:bg-[#F5EFE6]">
        <td class="p-3.5 font-bold text-[#8F7032]">${i + 1}</td>
        <td class="p-3.5 font-semibold text-[#232B2B]">${sub.email}</td>
        <td class="p-3.5 text-[#6B7676]">${new Date(sub.timestamp || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
      </tr>
    `).join('');
  } catch (e) {
    tbody.innerHTML = `<tr><td colspan="3" class="p-4 text-center text-red-600 font-medium">Error loading subscribers.</td></tr>`;
  }
}

function exportSubscribersCSV() {
  try {
    const raw = localStorage.getItem('vaastvik_subscribers');
    const subscribers = raw ? JSON.parse(raw) : [];
    if (subscribers.length === 0) {
      showToast('No subscribers to export.');
      return;
    }
    let csv = 'Index,Email,DateSubscribed\n';
    subscribers.forEach((s, i) => {
      csv += `"${i+1}","${s.email}","${s.timestamp || ''}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vaastvik_subscribers.csv';
    a.click();
    showToast('Subscribers CSV exported!');
  } catch (e) {}
}

function clearSubscribersLog() {
  if (confirm('Are you sure you want to clear the newsletter subscriber log?')) {
    localStorage.removeItem('vaastvik_subscribers');
    renderSubscribersTable();
    showToast('Subscriber log cleared.');
  }
}

// --------------------------------------------------------------------------
// MODULE 18: START A PROJECT & ENQUIRIES
// --------------------------------------------------------------------------
function renderStartProjectForm() {
  const sap = currentCmsData.startAProject || DEFAULT_CMS_DATA.startAProject;
  const en = document.getElementById('startproject-enabled');
  if (en) en.checked = sap.enabled !== false;
  document.getElementById('startproject-heading').value = sap.heading || '';
  document.getElementById('startproject-quote').value = sap.quote || '';
  document.getElementById('startproject-description').value = sap.description || '';
  document.getElementById('startproject-phone').value = sap.phone || '';
  document.getElementById('startproject-email').value = sap.email || '';
  document.getElementById('startproject-coordinates').value = sap.coordinates || '';
  document.getElementById('startproject-cta-line1').value = sap.finalCtaLine1 || '';
  document.getElementById('startproject-cta-line2').value = sap.finalCtaLine2 || '';
  document.getElementById('startproject-cta-line3').value = sap.finalCtaLine3 || '';

  renderEnquiriesTable();
}

function renderEnquiriesTable() {
  const tbody = document.getElementById('enquiries-table-body');
  if (!tbody) return;

  try {
    const raw = localStorage.getItem('vaastvik_enquiries');
    const enquiries = raw ? JSON.parse(raw) : [];

    if (enquiries.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-[#6B7676] font-medium">No project enquiries recorded yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = enquiries.map((eq) => `
      <tr class="hover:bg-[#F5EFE6]">
        <td class="p-3.5 text-[#6B7676]">${new Date(eq.timestamp || Date.now()).toLocaleDateString()}</td>
        <td class="p-3.5 font-bold text-[#232B2B]">${eq.name || 'Anonymous'}</td>
        <td class="p-3.5 text-[#6B7676]">${eq.email || '-'}</td>
        <td class="p-3.5 text-[#6B7676]">${eq.phone || '-'}</td>
        <td class="p-3.5 text-[#6B7676]">${eq.location || '-'}</td>
        <td class="p-3.5 font-semibold text-[#8F7032]">${eq.discipline || eq.projectType || 'Full Architectural'}</td>
      </tr>
    `).join('');
  } catch (e) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-red-600 font-medium">Error loading project enquiries.</td></tr>`;
  }
}

function exportEnquiriesCSV() {
  try {
    const raw = localStorage.getItem('vaastvik_enquiries');
    const enquiries = raw ? JSON.parse(raw) : [];
    if (enquiries.length === 0) {
      showToast('No enquiries to export.');
      return;
    }
    let csv = 'Date,Name,Email,Phone,Location,Discipline,Brief\n';
    enquiries.forEach((e) => {
      csv += `"${e.timestamp||''}","${e.name||''}","${e.email||''}","${e.phone||''}","${e.location||''}","${e.discipline||''}","${(e.brief||'').replace(/"/g, '""')}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vaastvik_project_enquiries.csv';
    a.click();
    showToast('Project enquiries CSV exported!');
  } catch (e) {}
}

function clearEnquiriesLog() {
  if (confirm('Are you sure you want to clear the project enquiries log?')) {
    localStorage.removeItem('vaastvik_enquiries');
    renderEnquiriesTable();
    showToast('Enquiries log cleared.');
  }
}

// --------------------------------------------------------------------------
// MODULE 19: STUDIO TEAM & LEADERSHIP
// --------------------------------------------------------------------------
function renderTeamForm() {
  const t = currentCmsData.team || DEFAULT_CMS_DATA.team;
  const en = document.getElementById('team-enabled');
  if (en) en.checked = t.enabled !== false;
  document.getElementById('team-heading').value = t.heading || '';
  document.getElementById('team-subtitle').value = t.subtitle || '';
  document.getElementById('team-lead-name').value = t.leadName || '';
  document.getElementById('team-lead-role').value = t.leadRole || '';
  document.getElementById('team-lead-degree').value = t.leadDegree || '';
  document.getElementById('team-lead-img').value = t.leadImg || '';
  document.getElementById('team-lead-bio1').value = t.leadBio1 || '';
  document.getElementById('team-lead-bio2').value = t.leadBio2 || '';

  const prev = document.getElementById('team-lead-img-preview');
  if (prev && t.leadImg) prev.src = t.leadImg;
}

// --------------------------------------------------------------------------
// MODULE 20: FOOTER & GLOBAL LINKS
// --------------------------------------------------------------------------
function renderFooterForm() {
  const f = currentCmsData.footer || DEFAULT_CMS_DATA.footer;
  const en = document.getElementById('footer-enabled');
  if (en) en.checked = f.enabled !== false;
  document.getElementById('footer-brand-title').value = f.brandTitle || '';
  document.getElementById('footer-brand-subtitle').value = f.brandSubtitle || '';
  document.getElementById('footer-brand-desc').value = f.brandDesc || '';
  document.getElementById('footer-disciplines').value = f.disciplines || '';
  document.getElementById('footer-copyright').value = f.copyright || '';
  document.getElementById('footer-privacy-url').value = f.privacyUrl || '';
}

// --------------------------------------------------------------------------
// FORM DATA COLLECTION ENGINE (BIDIRECTIONAL)
// --------------------------------------------------------------------------
function collectFormData() {
  if (!currentCmsData.hero) currentCmsData.hero = {};
  currentCmsData.hero.title = document.getElementById('hero-studio-title')?.value || '';
  currentCmsData.hero.subtitle = document.getElementById('hero-subtitle')?.value || '';
  currentCmsData.hero.words = [
    document.getElementById('hero-word-1')?.value || '',
    document.getElementById('hero-word-2')?.value || '',
    document.getElementById('hero-word-3')?.value || ''
  ];
  currentCmsData.hero.description = document.getElementById('hero-description')?.value || '';
  currentCmsData.hero.videoUrl = document.getElementById('hero-video-url')?.value || '';
  currentCmsData.hero.ctaLabel = document.getElementById('hero-cta-label')?.value || '';

  if (!currentCmsData.about) currentCmsData.about = {};
  currentCmsData.about.founderName = document.getElementById('about-founder-name')?.value || '';
  currentCmsData.about.founderImg = document.getElementById('about-founder-img')?.value || '';
  currentCmsData.about.philosophy = document.getElementById('about-philosophy')?.value || '';
  currentCmsData.about.stat1 = document.getElementById('about-stat-1')?.value || '';
  currentCmsData.about.stat2 = document.getElementById('about-stat-2')?.value || '';
  currentCmsData.about.stat3 = document.getElementById('about-stat-3')?.value || '';

  document.querySelectorAll('#projects-editor-list [data-project-key]').forEach(card => {
    const key = card.getAttribute('data-project-key');
    if (currentCmsData.projects && currentCmsData.projects[key]) {
      card.querySelectorAll('[data-field]').forEach(input => {
        const field = input.getAttribute('data-field');
        currentCmsData.projects[key][field] = input.value;
      });
    }
  });

  document.querySelectorAll('#partners-editor-list [data-brand-key]').forEach(card => {
    const key = card.getAttribute('data-brand-key');
    if (currentCmsData.partners && currentCmsData.partners[key]) {
      card.querySelectorAll('[data-field]').forEach(input => {
        const field = input.getAttribute('data-field');
        if (field === 'images') {
          currentCmsData.partners[key].images = input.value.split(',').map(s => s.trim()).filter(Boolean);
        } else {
          currentCmsData.partners[key][field] = input.value;
        }
      });
    }
  });

  if (!currentCmsData.contact) currentCmsData.contact = {};
  currentCmsData.contact.address = document.getElementById('contact-address')?.value || '';
  currentCmsData.contact.phone = document.getElementById('contact-phone')?.value || '';
  currentCmsData.contact.email = document.getElementById('contact-email')?.value || '';
  currentCmsData.contact.hours = document.getElementById('contact-hours')?.value || '';

  if (!currentCmsData.seo) currentCmsData.seo = {};
  currentCmsData.seo.title = document.getElementById('seo-meta-title')?.value || '';
  currentCmsData.seo.description = document.getElementById('seo-meta-description')?.value || '';
  currentCmsData.seo.keywords = document.getElementById('seo-keywords')?.value || '';

  // Module 11: Home Interior Guide
  if (!currentCmsData.homeInteriorGuide) currentCmsData.homeInteriorGuide = {};
  currentCmsData.homeInteriorGuide.enabled = document.getElementById('guide-enabled')?.checked !== false;
  currentCmsData.homeInteriorGuide.subtitle = document.getElementById('guide-subtitle')?.value || '';
  currentCmsData.homeInteriorGuide.title = document.getElementById('guide-title')?.value || '';
  currentCmsData.homeInteriorGuide.description = document.getElementById('guide-description')?.value || '';
  currentCmsData.homeInteriorGuide.pdfUrl = document.getElementById('guide-pdf-url')?.value || '';
  currentCmsData.homeInteriorGuide.coverImg = document.getElementById('guide-cover-img')?.value || '';
  currentCmsData.homeInteriorGuide.buttonText = document.getElementById('guide-button-text')?.value || '';

  // Module 12: Beautiful Interior Video
  if (!currentCmsData.beautifulInterior) currentCmsData.beautifulInterior = {};
  currentCmsData.beautifulInterior.enabled = document.getElementById('video-enabled')?.checked !== false;
  currentCmsData.beautifulInterior.subtitle = document.getElementById('video-subtitle')?.value || '';
  currentCmsData.beautifulInterior.heading = document.getElementById('video-heading')?.value || '';
  currentCmsData.beautifulInterior.description = document.getElementById('video-description')?.value || '';
  currentCmsData.beautifulInterior.videoUrl = document.getElementById('video-url')?.value || '';
  currentCmsData.beautifulInterior.posterUrl = document.getElementById('video-poster')?.value || '';
  currentCmsData.beautifulInterior.youtubeUrl = document.getElementById('video-yt-link')?.value || '';
  currentCmsData.beautifulInterior.buttonText = document.getElementById('video-btn-text')?.value || '';

  // Module 13: How It Works Process
  if (!currentCmsData.howItWorks) currentCmsData.howItWorks = { steps: [] };
  currentCmsData.howItWorks.enabled = document.getElementById('how-enabled')?.checked !== false;
  currentCmsData.howItWorks.heading = document.getElementById('how-heading')?.value || '';
  currentCmsData.howItWorks.ctaText = document.getElementById('how-cta-text')?.value || '';
  const newSteps = [];
  document.querySelectorAll('#how-steps-editor-list [data-how-step-idx]').forEach(card => {
    const stepObj = {};
    card.querySelectorAll('[data-field]').forEach(inp => {
      stepObj[inp.getAttribute('data-field')] = inp.value;
    });
    newSteps.push(stepObj);
  });
  if (newSteps.length > 0) currentCmsData.howItWorks.steps = newSteps;

  // Module 14: Client Testimonials
  if (!currentCmsData.clientSays) currentCmsData.clientSays = { testimonials: [] };
  currentCmsData.clientSays.enabled = document.getElementById('testimonials-enabled')?.checked !== false;
  currentCmsData.clientSays.heading = document.getElementById('testimonials-heading')?.value || '';
  currentCmsData.clientSays.subtitle = document.getElementById('testimonials-subtitle')?.value || '';
  const newTestimonials = [];
  document.querySelectorAll('#testimonials-editor-list [data-testimonial-idx]').forEach(card => {
    const tObj = {};
    card.querySelectorAll('[data-field]').forEach(inp => {
      tObj[inp.getAttribute('data-field')] = inp.value;
    });
    newTestimonials.push(tObj);
  });
  if (newTestimonials.length > 0) currentCmsData.clientSays.testimonials = newTestimonials;

  // Module 15: Trusted Partners
  if (!currentCmsData.trustedPartners) currentCmsData.trustedPartners = { brands: [] };
  currentCmsData.trustedPartners.enabled = document.getElementById('trusted-enabled')?.checked !== false;
  currentCmsData.trustedPartners.heading = document.getElementById('trusted-heading')?.value || '';
  currentCmsData.trustedPartners.subtitle = document.getElementById('trusted-subtitle')?.value || '';
  currentCmsData.trustedPartners.description = document.getElementById('trusted-description')?.value || '';
  const newBrands = [];
  document.querySelectorAll('#trusted-brands-editor-list [data-partner-brand-idx]').forEach(card => {
    const bObj = {};
    card.querySelectorAll('[data-field]').forEach(inp => {
      bObj[inp.getAttribute('data-field')] = inp.value;
    });
    newBrands.push(bObj);
  });
  if (newBrands.length > 0) currentCmsData.trustedPartners.brands = newBrands;

  // Module 16: Monograph Journal Articles
  if (!currentCmsData.journal) currentCmsData.journal = { articles: [] };
  currentCmsData.journal.enabled = document.getElementById('journal-enabled')?.checked !== false;
  currentCmsData.journal.heading = document.getElementById('journal-heading')?.value || '';
  currentCmsData.journal.subtitle = document.getElementById('journal-subtitle')?.value || '';
  const newArticles = [];
  document.querySelectorAll('#journal-articles-editor-list [data-journal-article-idx]').forEach(card => {
    const aObj = {};
    card.querySelectorAll('[data-field]').forEach(inp => {
      aObj[inp.getAttribute('data-field')] = inp.value;
    });
    newArticles.push(aObj);
  });
  if (newArticles.length > 0) currentCmsData.journal.articles = newArticles;

  // Module 17: Newsletter
  if (!currentCmsData.newsletter) currentCmsData.newsletter = {};
  currentCmsData.newsletter.enabled = document.getElementById('newsletter-enabled')?.checked !== false;
  currentCmsData.newsletter.heading = document.getElementById('newsletter-heading')?.value || '';
  currentCmsData.newsletter.description = document.getElementById('newsletter-description')?.value || '';
  currentCmsData.newsletter.buttonText = document.getElementById('newsletter-btn-text')?.value || '';

  // Module 18: Start a Project
  if (!currentCmsData.startAProject) currentCmsData.startAProject = {};
  currentCmsData.startAProject.enabled = document.getElementById('startproject-enabled')?.checked !== false;
  currentCmsData.startAProject.heading = document.getElementById('startproject-heading')?.value || '';
  currentCmsData.startAProject.quote = document.getElementById('startproject-quote')?.value || '';
  currentCmsData.startAProject.description = document.getElementById('startproject-description')?.value || '';
  currentCmsData.startAProject.phone = document.getElementById('startproject-phone')?.value || '';
  currentCmsData.startAProject.email = document.getElementById('startproject-email')?.value || '';
  currentCmsData.startAProject.coordinates = document.getElementById('startproject-coordinates')?.value || '';
  currentCmsData.startAProject.finalCtaLine1 = document.getElementById('startproject-cta-line1')?.value || '';
  currentCmsData.startAProject.finalCtaLine2 = document.getElementById('startproject-cta-line2')?.value || '';
  currentCmsData.startAProject.finalCtaLine3 = document.getElementById('startproject-cta-line3')?.value || '';

  // Module 19: Team & Studio
  if (!currentCmsData.team) currentCmsData.team = {};
  currentCmsData.team.enabled = document.getElementById('team-enabled')?.checked !== false;
  currentCmsData.team.heading = document.getElementById('team-heading')?.value || '';
  currentCmsData.team.subtitle = document.getElementById('team-subtitle')?.value || '';
  currentCmsData.team.leadName = document.getElementById('team-lead-name')?.value || '';
  currentCmsData.team.leadRole = document.getElementById('team-lead-role')?.value || '';
  currentCmsData.team.leadDegree = document.getElementById('team-lead-degree')?.value || '';
  currentCmsData.team.leadImg = document.getElementById('team-lead-img')?.value || '';
  currentCmsData.team.leadBio1 = document.getElementById('team-lead-bio1')?.value || '';
  currentCmsData.team.leadBio2 = document.getElementById('team-lead-bio2')?.value || '';

  // Module 20: Footer
  if (!currentCmsData.footer) currentCmsData.footer = {};
  currentCmsData.footer.enabled = document.getElementById('footer-enabled')?.checked !== false;
  currentCmsData.footer.brandTitle = document.getElementById('footer-brand-title')?.value || '';
  currentCmsData.footer.brandSubtitle = document.getElementById('footer-brand-subtitle')?.value || '';
  currentCmsData.footer.brandDesc = document.getElementById('footer-brand-desc')?.value || '';
  currentCmsData.footer.disciplines = document.getElementById('footer-disciplines')?.value || '';
  currentCmsData.footer.copyright = document.getElementById('footer-copyright')?.value || '';
  currentCmsData.footer.privacyUrl = document.getElementById('footer-privacy-url')?.value || '';



  // Module 23: Investment Calculator
  if (!currentCmsData.investmentCalculator) currentCmsData.investmentCalculator = { structuralTiers: [], joineryPackages: [] };
  currentCmsData.investmentCalculator.enabled = document.getElementById('calc-enabled')?.checked !== false;
  currentCmsData.investmentCalculator.tag = document.getElementById('calc-tag')?.value || '';
  currentCmsData.investmentCalculator.title = document.getElementById('calc-title')?.value || '';
  currentCmsData.investmentCalculator.currency = document.getElementById('calc-currency')?.value || '₹';
  currentCmsData.investmentCalculator.minPlotArea = parseInt(document.getElementById('calc-min-area')?.value) || 2000;
  currentCmsData.investmentCalculator.maxPlotArea = parseInt(document.getElementById('calc-max-area')?.value) || 20000;
  currentCmsData.investmentCalculator.areaStep = parseInt(document.getElementById('calc-step-area')?.value) || 500;
  currentCmsData.investmentCalculator.defaultArea = parseInt(document.getElementById('calc-default-area')?.value) || 5000;
  currentCmsData.investmentCalculator.ctaText = document.getElementById('calc-cta-text')?.value || '';
  currentCmsData.investmentCalculator.disclaimer = document.getElementById('calc-disclaimer')?.value || '';

  const newTiers = [];
  document.querySelectorAll('#calc-structural-tiers-editor-list [data-structural-tier-idx]').forEach(card => {
    const tObj = {};
    card.querySelectorAll('[data-field]').forEach(inp => {
      tObj[inp.getAttribute('data-field')] = inp.value;
    });
    newTiers.push(tObj);
  });
  if (newTiers.length > 0) currentCmsData.investmentCalculator.structuralTiers = newTiers;

  const newPackages = [];
  document.querySelectorAll('#calc-joinery-packages-editor-list [data-joinery-package-idx]').forEach(card => {
    const pObj = {};
    card.querySelectorAll('[data-field]').forEach(inp => {
      pObj[inp.getAttribute('data-field')] = inp.value;
    });
    newPackages.push(pObj);
  });
  if (newPackages.length > 0) currentCmsData.investmentCalculator.joineryPackages = newPackages;



  // Module 26: WhatsApp Engine
  if (!currentCmsData.whatsappEngine) currentCmsData.whatsappEngine = {};
  currentCmsData.whatsappEngine.enabled = document.getElementById('wa-enabled')?.checked !== false;
  currentCmsData.whatsappEngine.phone = document.getElementById('wa-phone')?.value || '';
  currentCmsData.whatsappEngine.ctaText = document.getElementById('wa-cta-text')?.value || '';
  currentCmsData.whatsappEngine.tag = document.getElementById('wa-tag')?.value || '';
  currentCmsData.whatsappEngine.defaultMsg = document.getElementById('wa-default-msg')?.value || '';
  currentCmsData.whatsappEngine.projectTypes = document.getElementById('wa-project-types')?.value || '';
  currentCmsData.whatsappEngine.plotSizes = document.getElementById('wa-plot-sizes')?.value || '';
  currentCmsData.whatsappEngine.budgetRanges = document.getElementById('wa-budget-ranges')?.value || '';
}

function updateStorageMetrics() {
  const jsonStr = JSON.stringify(currentCmsData);
  const bytes = new Blob([jsonStr]).size;
  const kb = (bytes / 1024).toFixed(1);
  const elem = document.getElementById('storage-status');
  if (elem) elem.textContent = `Active (${kb} KB)`;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (toast && toastMsg) {
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

// ==========================================================================
// ADVANCED MODULE RENDERERS (MODULES 21 - 26)
// ==========================================================================



function renderCalculatorConfigModule() {
  const data = currentCmsData.investmentCalculator || DEFAULT_CMS_DATA.investmentCalculator;
  const enabledEl = document.getElementById('calc-enabled');
  if (enabledEl) enabledEl.checked = data.enabled !== false;
  
  const tagEl = document.getElementById('calc-tag');
  if (tagEl) tagEl.value = data.tag || '';

  const titleEl = document.getElementById('calc-title');
  if (titleEl) titleEl.value = data.title || '';

  const currEl = document.getElementById('calc-currency');
  if (currEl) currEl.value = data.currency || '₹';

  const minEl = document.getElementById('calc-min-area');
  if (minEl) minEl.value = data.minPlotArea || 2000;

  const maxEl = document.getElementById('calc-max-area');
  if (maxEl) maxEl.value = data.maxPlotArea || 20000;

  const stepEl = document.getElementById('calc-step-area');
  if (stepEl) stepEl.value = data.areaStep || 500;

  const defEl = document.getElementById('calc-default-area');
  if (defEl) defEl.value = data.defaultArea || 5000;

  const ctaEl = document.getElementById('calc-cta-text');
  if (ctaEl) ctaEl.value = data.ctaText || '';

  const discEl = document.getElementById('calc-disclaimer');
  if (discEl) discEl.value = data.disclaimer || '';

  renderCalcStructuralTiers();
  renderCalcJoineryPackages();
}

function renderCalcStructuralTiers() {
  const container = document.getElementById('calc-structural-tiers-editor-list');
  if (!container) return;
  const tiers = (currentCmsData.investmentCalculator && currentCmsData.investmentCalculator.structuralTiers) || DEFAULT_CMS_DATA.investmentCalculator.structuralTiers;

  let html = '';
  tiers.forEach((t, idx) => {
    html += `
      <div class="bg-white/70 p-4 border border-[#E6DEC6] rounded space-y-2" data-structural-tier-idx="${idx}">
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="font-bold text-[#232B2B]">TIER 0${idx + 1}: ${t.name}</span>
          <button type="button" class="btn-delete-st-tier text-red-600 hover:underline" data-idx="${idx}">Delete Tier</button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div>
            <label class="text-[9px] font-mono text-[#6B7676]">Tier Title</label>
            <input type="text" class="input-field text-xs py-1" data-field="name" value="${t.name || ''}">
          </div>
          <div>
            <label class="text-[9px] font-mono text-[#6B7676]">Rate per Sq. Ft. (₹)</label>
            <input type="number" class="input-field text-xs py-1" data-field="rate" value="${t.rate || 0}">
          </div>
          <div>
            <label class="text-[9px] font-mono text-[#6B7676]">Technical Description</label>
            <input type="text" class="input-field text-xs py-1" data-field="desc" value="${t.desc || ''}">
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
  document.querySelectorAll('.btn-delete-st-tier').forEach(btn => {
    btn.onclick = (e) => {
      const idx = parseInt(e.target.getAttribute('data-idx'));
      if (currentCmsData.investmentCalculator?.structuralTiers) {
        currentCmsData.investmentCalculator.structuralTiers.splice(idx, 1);
        renderCalcStructuralTiers();
      }
    };
  });
}

function addStructuralTier() {
  if (!currentCmsData.investmentCalculator) currentCmsData.investmentCalculator = { structuralTiers: [], joineryPackages: [] };
  if (!currentCmsData.investmentCalculator.structuralTiers) currentCmsData.investmentCalculator.structuralTiers = [];
  currentCmsData.investmentCalculator.structuralTiers.push({
    id: 'st_' + Date.now(),
    name: 'New Structural Shell Tier',
    rate: 5000,
    desc: 'M35 Reinforced Concrete Shell with waterproofing & MEP conduits.'
  });
  renderCalcStructuralTiers();
}

function renderCalcJoineryPackages() {
  const container = document.getElementById('calc-joinery-packages-editor-list');
  if (!container) return;
  const packages = (currentCmsData.investmentCalculator && currentCmsData.investmentCalculator.joineryPackages) || DEFAULT_CMS_DATA.investmentCalculator.joineryPackages;

  let html = '';
  packages.forEach((pkg, idx) => {
    html += `
      <div class="bg-white/70 p-4 border border-[#E6DEC6] rounded space-y-2" data-joinery-package-idx="${idx}">
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="font-bold text-[#232B2B]">PACKAGE 0${idx + 1}: ${pkg.name}</span>
          <button type="button" class="btn-delete-jp-package text-red-600 hover:underline" data-idx="${idx}">Delete Package</button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div>
            <label class="text-[9px] font-mono text-[#6B7676]">Package Title</label>
            <input type="text" class="input-field text-xs py-1" data-field="name" value="${pkg.name || ''}">
          </div>
          <div>
            <label class="text-[9px] font-mono text-[#6B7676]">Rate per Sq. Ft. (₹)</label>
            <input type="number" class="input-field text-xs py-1" data-field="rate" value="${pkg.rate || 0}">
          </div>
          <div>
            <label class="text-[9px] font-mono text-[#6B7676]">Package Specification</label>
            <input type="text" class="input-field text-xs py-1" data-field="desc" value="${pkg.desc || ''}">
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
  document.querySelectorAll('.btn-delete-jp-package').forEach(btn => {
    btn.onclick = (e) => {
      const idx = parseInt(e.target.getAttribute('data-idx'));
      if (currentCmsData.investmentCalculator?.joineryPackages) {
        currentCmsData.investmentCalculator.joineryPackages.splice(idx, 1);
        renderCalcJoineryPackages();
      }
    };
  });
}

function addJoineryPackage() {
  if (!currentCmsData.investmentCalculator) currentCmsData.investmentCalculator = { structuralTiers: [], joineryPackages: [] };
  if (!currentCmsData.investmentCalculator.joineryPackages) currentCmsData.investmentCalculator.joineryPackages = [];
  currentCmsData.investmentCalculator.joineryPackages.push({
    id: 'jp_' + Date.now(),
    name: 'New Interior Fitout Package',
    rate: 4500,
    desc: 'Custom veneer joinery, imported sanitaryware, and architectural lighting.'
  });
  renderCalcJoineryPackages();
}



function renderWhatsAppEngineModule() {
  const data = currentCmsData.whatsappEngine || DEFAULT_CMS_DATA.whatsappEngine;
  const enabledEl = document.getElementById('wa-enabled');
  if (enabledEl) enabledEl.checked = data.enabled !== false;

  const phoneEl = document.getElementById('wa-phone');
  if (phoneEl) phoneEl.value = data.phone || '';

  const ctaEl = document.getElementById('wa-cta-text');
  if (ctaEl) ctaEl.value = data.ctaText || '';

  const tagEl = document.getElementById('wa-tag');
  if (tagEl) tagEl.value = data.tag || '';

  const msgEl = document.getElementById('wa-default-msg');
  if (msgEl) msgEl.value = data.defaultMsg || '';

  const typesEl = document.getElementById('wa-project-types');
  if (typesEl) typesEl.value = data.projectTypes || '';

  const plotsEl = document.getElementById('wa-plot-sizes');
  if (plotsEl) plotsEl.value = data.plotSizes || '';

  const budgetsEl = document.getElementById('wa-budget-ranges');
  if (budgetsEl) budgetsEl.value = data.budgetRanges || '';
}

