/* ════════════════════════════════════════════════════════════════
   Hana — Sub-capability page TEMPLATE · content model
   ----------------------------------------------------------------
   One data object drives the whole page. SMT Assembly is the fully
   worked example; COB, Flip Chip, and Chip-on-Flex are written out
   to prove the template holds for every PCBA & Box Build sub-cap.

   Each capability supplies:
     slug, title, eyebrow, intro, heroPhoto, heroStats[],
     pillars[]   — 3 photo-topped cards (blurb, points[], specs[])
     whyRows[]   — alternating image + bullet rows
     sites[]     — capacity cards
     faq[]       — accordion
   Shared (same for every sub-cap): INDUSTRIES, CERTS, the capability
   browse tree, and the closing CTA copy live below.
   ════════════════════════════════════════════════════════════════ */

/* ─── shared across all sub-caps ─────────────────────────────── */

const INDUSTRIES = [
  'Automotive', 'Industrial & IoT', 'Telecommunications', 'RFID',
  'Optical & sensors', 'Consumer electronics', 'Medical',
  'Access control', 'Power management',
];

const CERTS = ['ISO 9001', 'IATF 16949', 'ISO 13485', 'IPC-A-610', 'ANSI/ESD S20.20'];

/* The capability browse tree shown in the left sidebar. `active` is
   resolved at render time against the current page's slug. */
const CAP_TREE = [
  { name: 'Overview', slug: 'pcba-box-build' },
  {
    name: 'PCBA & Box Build', slug: 'pcba-box-build', group: true, open: true,
    sub: [
      { name: 'SMT Assembly', slug: 'smt-assembly' },
      { name: 'COB Assembly', slug: 'cob-assembly' },
      { name: 'Box Build', slug: 'box-build' },
    ],
  },
  { name: 'OSAT', slug: 'osat', group: true, sub: [
    { name: 'Wafer Processing', slug: 'wafer-processing' },
    { name: 'Die Attach & Wire Bond', slug: 'die-attach-wire-bond' },
    { name: 'Flip Chip', slug: 'flip-chip' },
    { name: 'System in Package (SiP)', slug: 'flip-chip-sip' },
    { name: 'Wafer Probe & Final Test', slug: 'wafer-probe-final-test' },
    { name: 'Wafer Level Packaging (WLCSP)', slug: 'wafer-level-packaging' },
  ]},
  { name: 'Microelectronic Assembly', slug: 'microelectronics', group: true, sub: [
    { name: 'Flip Chip', slug: 'flip-chip-micro' },
    { name: 'MEMS & Sensor Assembly', slug: 'mems-sensor-assembly' },
    { name: 'Interconnect Solutions', slug: 'precision-interconnect' },
    { name: 'Micro-Assembly', slug: 'micro-assembly' },
  ]},
  { name: 'RFID & Smart Tags', slug: 'rfid-smart-tags', group: true, sub: [
    { name: 'RFID Tire Tags', slug: 'rfid-tire-tags' },
    { name: 'RFID Inlays', slug: 'rfid-inlays' },
  ]},
  { name: 'Automation', slug: 'automation', group: true, sub: [
    { name: 'In-line AOI & SPI', slug: 'inline-aoi-spi' },
    { name: 'Robotic Handling & Test', slug: 'robotic-handling-test' },
    { name: 'Manufacturing Traceability', slug: 'mes-traceability' },
  ]},
  { name: 'DFx & JDM Collaboration', slug: 'dfx-jdm', group: true, sub: [
    { name: 'Design for Excellence (DFx / DFM)', slug: 'dfx-dfm' },
    { name: 'Joint Development Model (JDM)', slug: 'jdm' },
    { name: 'New Product Introduction (NPI)', slug: 'npi' },
  ]},
];

/* Closing CTA + cert copy reused on every page (capability name injected). */
const CLOSING = {
  certLabel: 'Quality systems & standards',
};

/* ─── per-capability content ─────────────────────────────────── */

const SUBCAPS = {

  /* ===========================================================
     SMT ASSEMBLY
     =========================================================== */
  'smt-assembly': {
    slug: 'smt-assembly',
    title: 'Surface mount technology (SMT) assembly',
    navTitle: 'SMT Assembly',
    eyebrow: 'PCBA & Box Build · Sub-capability',
    intro: 'Fine-pitch, double-sided SMT — down to 01005 passives and 0.2 mm micro-BGA pitch — with solder-paste inspection, 3D AOI and X-ray built into every board, not just automotive jobs. The same qualified process runs across our plants in China, Thailand, Cambodia and the USA.',
    heroPhoto: { src: 'uploads/cleanroom-smt-line.png', label: 'SMT line · inline inspection' },
    heroStats: [['4', 'Capability locations'], ['01005', 'Smallest passive'], ['0.2 mm', 'Min micro-BGA pitch'], ['±50 µm', 'Placement accuracy']],

    pillarsLead: 'Three things an engineering buyer evaluates on an SMT line — the process, the component envelope, and how every board is inspected.',
    pillars: [
      {
        label: 'Pillar 01', title: 'Process', icon: 'flame',
        photo: { src: 'uploads/cleanroom-smt-line.png', label: 'Board exiting a multi-zone reflow oven' },
        blurb: 'A complete SMT line from solder-paste print through inspection, with vacuum reflow and selective soldering where the build needs it.',
        points: [
          'Print → SPI → place → reflow → AOI → X-ray → ICT → de-panel',
          'Convection reflow in air or nitrogen; vacuum N₂ reflow for void reduction',
          'Selective wave &amp; robotic soldering for through-hole',
          'De-panel by routing, laser cutting, V-cut or punching',
        ],
        specs: [['Screen-print accuracy', '±20 µm @ 6σ'], ['Place accuracy', '±18 µm']],
      },
      {
        label: 'Pillar 02', title: 'Fine-pitch capability', icon: 'ruler',
        photo: { label: 'Fine-pitch placement head over a populated board' },
        blurb: 'Fine pitch is the standard envelope, not an exception flow.',
        points: [
          '01005 passives upward',
          'Micro-BGA &amp; WLCSP down to 0.2 mm pitch',
          'BGA ball build &amp; rework, 0.2–0.76 mm balls',
          'QFP to 54 × 54 mm at 0.4 mm pitch',
        ],
        specs: [['Smallest passive', '01005'], ['Min BGA pitch', '0.2 mm'], ['Max panel', '440 × 600 mm']],
      },
      {
        label: 'Pillar 03', title: 'Complete inspection & traceability', icon: 'shield',
        photo: { label: 'Inline 3D AOI inspection head' },
        blurb: 'SPI, AOI and X-ray run on the line by default — with full material, unit and product traceability.',
        points: [
          'Inline SPI + pre- &amp; post-reflow AOI',
          '2D &amp; 3D X-ray for BGA, BTC, PoP',
          'Full material / unit / product traceability',
          'Dedicated medical &amp; automotive lines; full ESD control',
        ],
        specs: [['Inspection', 'SPI · AOI · X-ray'], ['3D AOI resolution', '7 µm']],
      },
    ],

    whyLead: '',
    whyRows: [
      {
        eyebrow: 'One process, every site',
        title: 'Move a build between countries without a full re-NPI',
        blurb: 'SMT is qualified across China, Thailand, Cambodia and the USA, so a program can shift sites for capacity or resilience as a documented first-article qualification — not a fresh introduction.',
        points: [
          'Qualified across four countries',
          'Site transfer as first-article qualification',
          'Geographic resilience built into the footprint',
          'Same process for NPI and volume',
        ],
        photo: { src: 'uploads/parej-richard-pxs2yJ6Lb9k-unsplash.jpg', label: 'Standardized SMT line, second site' },
      },
      {
        eyebrow: 'EMS + OSAT, vertically integrated',
        title: 'SMT that sits next to die-level packaging and box build',
        blurb: 'Because Hana also runs OSAT — wafer, die attach, wire bond — and full box build, an SMT program can pull in chip-on-board, flip chip or final assembly without leaving the group, with a DFM read before NPI.',
        points: [
          'EMS and OSAT under one group',
          'DFM / early-stage design collaboration',
          'Path from SMT to box build and drop-ship',
          'Customer IP secured under ISO 27001',
        ],
        photo: { label: 'Engineer reviewing a board file at the line' },
      },
    ],

    sitesLead: 'SMT runs across China, Thailand, Cambodia and the USA; volume mix per site varies.',
    sites: [
      { country: 'China', sites: 'Jiaxing', lines: 0, share: 0 },
      { country: 'Thailand', sites: 'Lamphun', lines: 0, share: 0 },
      { country: 'Cambodia', sites: 'Koh Kong', lines: 0, share: 0 },
      { country: 'USA', sites: 'Ohio', lines: 0, share: 0 },
    ],
    lineNoun: 'SMT lines',

    faq: [
      { q: 'What is the smallest component Hana can place on an SMT line?',
        a: 'Down to 01005 passives, with micro-BGA and WLCSP attachment to 0.2 mm pitch and QFP to 0.4 mm pitch.' },
      { q: 'Does Hana inspect every board, or only high-reliability work?',
        a: 'Solder-paste inspection, 3D AOI and X-ray run on the line by default, with full material, unit and product traceability — not only on automotive or medical jobs.' },
      { q: 'Can an SMT program transfer between Hana sites?',
        a: 'Yes — SMT is qualified across China, Thailand, Cambodia and the USA, so a build can move between sites as a documented first-article qualification rather than a full re-NPI.' },
      { q: 'What board and panel sizes can Hana handle?',
        a: 'PCB panels up to 440 × 600 mm, with convection (air or nitrogen) and vacuum nitrogen reflow.' },
      { q: 'What quality and certification systems cover SMT?',
        a: 'Customer IP is protected under ISO 27001, and Hana runs dedicated medical and automotive assembly lines in a fully ESD-controlled facility.' },
    ],
  },

  /* ===========================================================
     COB ASSEMBLY
     =========================================================== */
  'cob-assembly': {
    slug: 'cob-assembly',
    title: 'Chip-on-board assembly',
    navTitle: 'COB Assembly',
    eyebrow: 'PCBA & Box Build · Sub-capability',
    intro: 'Bare-die attach, wire bonding, and encapsulation directly onto the board — the lowest-profile, lowest-cost route for high-volume modules, qualified across three countries.',
    heroPhoto: { label: 'Wire-bond array under the bonder camera (COB)' },
    heroStats: [['18µm', 'Au wire'], ['±5µm', 'Die placement'], ['Glob-top', 'Encapsulation'], ['100%', 'Bond inspection']],

    pillarsLead: 'What chip-on-board covers, and Hana’s standard envelope on each.',
    pillars: [
      {
        label: 'Pillar 01', title: 'Die attach', icon: 'flame',
        photo: { label: 'Epoxy die-attach head placing a bare die' },
        blurb: 'Conductive and non-conductive die attach, dispensed and cured inline.',
        points: [
          'Epoxy &amp; eutectic die attach',
          'Die placement accuracy to ±5 µm',
          'Multi-die and stacked-die layouts',
          'Silver-filled and insulating adhesives',
        ],
        specs: [['Placement', '±5 µm'], ['Die size', '0.3–10 mm']],
      },
      {
        label: 'Pillar 02', title: 'Wire bond', icon: 'ruler',
        photo: { label: 'Gold ball-bond loop under magnification' },
        blurb: 'Gold and aluminium wire bonding at fine pitch, on every line.',
        points: [
          'Au ball bond from 18 µm wire',
          'Al wedge bond for power devices',
          'Bond pitch down to 60 µm',
          'Pull &amp; shear tested to MIL-STD-883',
        ],
        specs: [['Au wire', '18 µm'], ['Min pitch', '60 µm']],
      },
      {
        label: 'Pillar 03', title: 'Encapsulation', icon: 'shield',
        photo: { label: 'Glob-top dispense over a bonded die' },
        blurb: 'Glob-top and dam-and-fill encapsulation protect the die and bonds.',
        points: [
          'Glob-top and dam-and-fill',
          'UV and thermal cure profiles',
          'Per-unit traceability, default',
          'IPC / MIL-STD bond verification',
        ],
        specs: [['Encapsulation', 'Glob-top'], ['Verification', 'Pull · shear']],
      },
    ],

    whyRows: [
      {
        eyebrow: 'Lowest profile, lowest cost',
        title: 'Skip the package — bond the die straight to the board',
        blurb: 'For high-volume modules where height and unit cost matter, COB removes the IC package entirely and the bond goes direct to the substrate.',
        points: [
          'Thinnest possible assembly stack-up',
          'No package cost at volume',
          'Ideal for displays, sensors, and RFID',
          'Runs alongside SMT on the same board',
        ],
        photo: { src: 'uploads/parej-richard-pxs2yJ6Lb9k-unsplash.jpg', label: 'COB module line in operation' },
      },
      {
        eyebrow: 'Engineering, not sales',
        title: 'Bond-program development before you commit to volume',
        blurb: 'Our process engineers develop and qualify the bond program on first articles, with pull and shear data returned before the line ramps.',
        points: [
          'Bond program qualified on first articles',
          'Pull &amp; shear data returned in writing',
          'Cleanroom-controlled bonding areas',
          'NDA signed before any die or CAD is shared',
        ],
        photo: { label: 'Process engineer at the wire bonder' },
      },
    ],

    sitesLead: 'COB is qualified in China and Thailand, with capacity weighted to high-volume programs.',
    sites: [
      { country: 'China', sites: 'Jiaxing', lines: 9, share: 56 },
      { country: 'Thailand', sites: 'Lamphun', lines: 5, share: 31 },
      { country: 'Cambodia', sites: 'Kok Kong', lines: 2, share: 13 },
    ],
    lineNoun: 'bond lines',

    faq: [
      { q: 'When does COB make more sense than a packaged part?',
        a: 'When assembly height, unit cost at volume, or board area are the binding constraints. COB removes the IC package, so the stack-up is thinner and there’s no package cost — it’s common in displays, sensors, RFID, and consumer modules.' },
      { q: 'What wire and pitch can you bond?',
        a: 'Gold ball bond from 18 µm wire and aluminium wedge bond for power devices, with bond pitch down to 60 µm. Bonds are pull- and shear-tested to MIL-STD-883 methods.' },
      { q: 'Can COB and SMT run on the same board?',
        a: 'Yes. A board can carry surface-mount components and chip-on-board die together — the COB step is integrated into the line rather than run as a separate program.' },
      { q: 'What quality systems cover COB?',
        a: 'ISO 9001 group-wide, IATF 16949 on automotive work, ISO 13485 on medical. Bonding runs in cleanroom-controlled, ESD-managed areas meeting ANSI/ESD S20.20.' },
      { q: 'Do you protect customer designs and IP?',
        a: 'An NDA is signed before any die, BOM, or CAD file is shared. Build areas are access-controlled and a program can be fenced to a dedicated line on request.' },
    ],
  },

  /* ===========================================================
     FLIP CHIP
     =========================================================== */
  'flip-chip': {
    slug: 'flip-chip',
    title: 'Flip chip assembly',
    navTitle: 'Flip Chip',
    eyebrow: 'PCBA & Box Build · Sub-capability',
    intro: 'Bumped die flipped and bonded face-down for the shortest interconnect and the highest I/O density — with capillary and pre-applied underfill, qualified for automotive and high-reliability work.',
    heroPhoto: { label: 'Flip-chip bump array under inspection' },
    heroStats: [['80µm', 'Min bump pitch'], ['C4 / Cu', 'Bump types'], ['CUF / NUF', 'Underfill'], ['3D X-ray', 'Verification']],

    pillarsLead: 'What flip chip covers, and Hana’s standard envelope on each.',
    pillars: [
      {
        label: 'Pillar 01', title: 'Interconnect', icon: 'flame',
        photo: { label: 'Bumped die being flipped and placed' },
        blurb: 'Solder-bump and copper-pillar interconnect, placed and reflowed in one flow.',
        points: [
          'C4 solder bump and Cu-pillar',
          'Bump pitch down to 80 µm',
          'Mass reflow and thermo-compression',
          'Face-down placement to ±10 µm',
        ],
        specs: [['Min pitch', '80 µm'], ['Placement', '±10 µm']],
      },
      {
        label: 'Pillar 02', title: 'Underfill', icon: 'ruler',
        photo: { label: 'Capillary underfill flowing beneath a die' },
        blurb: 'Capillary and pre-applied underfill for thermal-cycle reliability.',
        points: [
          'Capillary (CUF) and no-flow (NUF)',
          'Edge-bond and corner-bond options',
          'Void control verified by X-ray',
          'Profiles tuned to AEC-Q reliability',
        ],
        specs: [['Underfill', 'CUF / NUF'], ['Void check', '3D X-ray']],
      },
      {
        label: 'Pillar 03', title: 'Quality', icon: 'shield',
        photo: { label: '3D X-ray of a flip-chip joint array' },
        blurb: 'Joint integrity is verified non-destructively on every assembly.',
        points: [
          '2D &amp; 3D (CT) X-ray on joints',
          'Underfill void and fillet inspection',
          'Per-unit traceability, default',
          'AEC-Q &amp; IPC reliability testing',
        ],
        specs: [['Inspection', 'X-ray (CT)'], ['Standard', 'AEC-Q / IPC']],
      },
    ],

    whyRows: [
      {
        eyebrow: 'Density and performance',
        title: 'The shortest interconnect, the highest I/O count',
        blurb: 'Flipping the die face-down replaces wire loops with direct bump joints — shorter electrical paths, more I/O in the same footprint, better thermal and RF performance.',
        points: [
          'Highest I/O density per die area',
          'Shorter paths for RF and high-speed',
          'Lower profile than wire-bonded die',
          'Runs alongside SMT and SiP flows',
        ],
        photo: { src: 'uploads/patrick-langwallner-O8wEyekFJtI-unsplash.jpg', label: 'Flip-chip line in operation' },
      },
      {
        eyebrow: 'Engineering, not sales',
        title: 'Underfill and reflow profiles qualified to your reliability bar',
        blurb: 'We develop the bump, reflow, and underfill window on first articles and return X-ray and reliability data before the program ramps.',
        points: [
          'Process window qualified on first articles',
          'X-ray void data returned in writing',
          'AEC-Q reliability testing in-house',
          'NDA signed before any die or CAD is shared',
        ],
        photo: { label: 'Engineer reviewing X-ray joint data' },
      },
    ],

    sitesLead: 'Flip chip is qualified in China and Thailand, weighted to automotive and high-reliability programs.',
    sites: [
      { country: 'Thailand', sites: 'Ayutthaya', lines: 6, share: 50 },
      { country: 'China', sites: 'Jiaxing', lines: 4, share: 33 },
      { country: 'Cambodia', sites: 'Kok Kong', lines: 2, share: 17 },
    ],
    lineNoun: 'flip-chip lines',

    faq: [
      { q: 'When should I choose flip chip over wire bond?',
        a: 'When you need the highest I/O density, the shortest electrical paths for RF or high-speed signals, or the lowest assembly profile. Flip chip replaces wire loops with direct bump joints between the die face and the substrate.' },
      { q: 'What bump types and pitch do you handle?',
        a: 'C4 solder bumps and copper pillars, with bump pitch down to 80 µm. Placement is face-down to ±10 µm, joined by mass reflow or thermo-compression bonding depending on the design.' },
      { q: 'How is joint integrity verified?',
        a: 'Non-destructively, on every assembly — 2D and 3D (CT) X-ray on the joint array, plus underfill void and fillet inspection. AEC-Q and IPC reliability testing is available in-house.' },
      { q: 'What quality systems cover flip chip?',
        a: 'ISO 9001 group-wide, IATF 16949 on automotive lines, ISO 13485 on medical. Assembly runs in ESD-controlled areas meeting ANSI/ESD S20.20.' },
      { q: 'Do you protect customer designs and IP?',
        a: 'An NDA is signed before any die, bump map, or CAD file is shared. Build areas are access-controlled and a program can be fenced to a dedicated line on request.' },
    ],
  },

  /* ===========================================================
     CHIP ON FLEX
     =========================================================== */
  'chip-on-flex': {
    slug: 'chip-on-flex',
    title: 'Chip-on-flex (COF) assembly',
    navTitle: 'Chip on Flex',
    eyebrow: 'PCBA & Box Build · Sub-capability',
    intro: 'Assembly built straight onto flexible circuits — surface-mount, wire bond and BGA directly on flex, joined by ACF and hot-bar bonding to PCBs and ceramic. The route for products where the board has to bend, fold or conform.',
    heroPhoto: { label: 'Flexible circuit on a vacuum carrier (COF)' },
    heroStats: [['SMT + WB', 'Direct on flex'], ['BGA', 'On flex, underfilled'], ['ACF · hot-bar', 'Fine-pitch bond'], ['Flex ↔ PCB', '& flex-to-ceramic']],

    pillarsLead: 'Everything you can put on a flexible substrate — surface-mount parts, bare die and area-array packages — then how it is joined and protected.',
    pillars: [
      {
        label: 'Pillar 01', title: 'Components on flex', icon: 'flame',
        photo: { label: 'SMT placement over a flex circuit' },
        blurb: 'The same assembly steps as a rigid board, qualified on flexible circuits.',
        points: [
          'SMT on flex circuit',
          'Wire bond on flexible circuit',
          'BGA on flex with underfill',
          'Die attach &amp; glob-top on flex',
        ],
        specs: [['On flex', 'SMT · WB · BGA'], ['Bare die', 'Wire-bonded']],
      },
      {
        label: 'Pillar 02', title: 'Bonding & interconnect', icon: 'ruler',
        photo: { label: 'Hot-bar bond head over a flex tail' },
        blurb: 'Joining flex to the rest of the assembly at fine pitch.',
        points: [
          'ACF (anisotropic conductive film) bonding',
          'Hot-bar soldering',
          'Flex-to-PCB and flex-to-ceramic',
          'COF-to-PCB, component- &amp; wire-to-PCB',
        ],
        specs: [['Bonding', 'ACF · hot-bar'], ['Joins', 'flex ↔ PCB / ceramic']],
      },
      {
        label: 'Pillar 03', title: 'Protection & finish', icon: 'shield',
        photo: { label: 'Conformal coating over a flex assembly' },
        blurb: 'Sealing and finishing the assembly for its end use.',
        points: [
          'Conformal coating',
          'Glob-top / dam-and-fill encapsulation',
          'Marking and electrical test',
          'Singulation of finished flex parts',
        ],
        specs: [['Protection', 'Conformal coat · glob-top'], ['Finish', 'Mark · test']],
      },
    ],

    whyLead: '',
    whyRows: [
      {
        eyebrow: 'Form factor freedom',
        title: 'Electronics that bend, fold and conform to the product',
        blurb: 'Putting the assembly on flex lets it wrap, fold or route around an enclosure where a rigid board won’t fit — common in compact optical, wearable and medical products.',
        points: [
          'Conforms to tight or curved enclosures',
          'Thinner and lighter than rigid + cable',
          'Suits optical, consumer and medical builds',
          'SMT, wire bond and BGA all on one flex',
        ],
        photo: { label: 'Chip-on-flex line in operation' },
      },
      {
        eyebrow: 'EMS + OSAT, vertically integrated',
        title: 'Wire bond and bare-die work backed by Hana’s OSAT side',
        blurb: 'Because Hana also runs OSAT, the wire-bond, die-attach and encapsulation expertise that packages ICs is applied to chip-on-flex — not outsourced.',
        points: [
          'Wire bond &amp; die attach on flex',
          'Flex-to-ceramic and flex-to-PCB bonding',
          'DFM / early-stage design collaboration',
          'Customer IP secured under ISO 27001',
        ],
        photo: { label: 'Engineer setting up flex tooling' },
      },
    ],

    sitesLead: 'Chip-on-flex runs on Hana’s EMS lines across Thailand, China and Cambodia; volume mix per site varies.',
    sites: [
      { country: 'Thailand', sites: 'Lamphun', lines: 0, share: 0 },
      { country: 'China', sites: 'Jiaxing', lines: 0, share: 0 },
      { country: 'Cambodia', sites: 'Koh Kong', lines: 0, share: 0 },
    ],
    lineNoun: 'COF lines',

    faq: [
      { q: 'What is chip-on-flex (COF) assembly?',
        a: 'Building an electronic assembly directly onto a flexible circuit — surface-mount components, bare die and area-array packages on flex rather than a rigid board, so the finished part can bend or conform.' },
      { q: 'What can Hana assemble onto flex?',
        a: 'SMT components, wire-bonded bare die, and BGAs with underfill, plus die attach and glob-top encapsulation.' },
      { q: 'How do you join flex to the rest of the product?',
        a: 'By ACF (anisotropic conductive film) and hot-bar bonding — flex-to-PCB, flex-to-ceramic and COF-to-PCB.' },
      { q: 'How are chip-on-flex assemblies protected?',
        a: 'With conformal coating and glob-top / dam-and-fill encapsulation over bonded die.' },
      { q: 'How is chip-on-flex different from chip-on-board?',
        a: 'Same bare-die assembly approach — chip-on-board builds onto a rigid board, chip-on-flex builds onto a flexible substrate so the assembly can bend or conform.' },
    ],
  },

  /* ===========================================================
     BOX BUILD
     =========================================================== */
  'box-build': {
    slug: 'box-build',
    title: 'Box build and full product assembly',
    navTitle: 'Box Build',
    eyebrow: 'PCBA & Box Build · Sub-capability',
    intro: 'The step beyond the circuit board — assembling the finished product. Enclosure and cable/harness integration, potting, and large box build, with functional test built in and drop-ship to your destination.',
    heroPhoto: { label: 'Box-build / final assembly cell' },
    heroStats: [['PCBA → box', 'Beyond the board'], ['Wire harness', 'Cable assembly'], ['Functional', 'Test & in-house dev'], ['Drop-ship', 'EXW · DDU · FOB']],

    pillarsLead: 'Taking the assembly from a tested board to a finished, packed product.',
    pillars: [
      {
        label: 'Pillar 01', title: 'Product & mechanical assembly', icon: 'flame',
        photo: { label: 'Final product assembly station' },
        blurb: 'Building the whole product around the board.',
        points: [
          'Full product / box-build assembly',
          'Cover, housing and mechanical assembly',
          'Cable and wire-harness assembly',
          'Large box build',
        ],
        specs: [['Scope', 'Enclosure · harness'], ['Also', 'Mechanical assembly']],
      },
      {
        label: 'Pillar 02', title: 'Integration processes', icon: 'ruler',
        photo: { label: 'Selective soldering / potting cell' },
        blurb: 'The joining, sealing and finishing steps a finished product needs.',
        points: [
          'Wave, selective and auto laser soldering',
          'Auto conformal coating',
          'Auto potting',
          'Processes customised by product',
        ],
        specs: [['Soldering', 'wave · selective · laser'], ['Sealing', 'coat · pot']],
      },
      {
        label: 'Pillar 03', title: 'Test & fulfilment', icon: 'shield',
        photo: { label: 'Box-build functional test rig' },
        blurb: 'Verifying the finished unit, then shipping it.',
        points: [
          'Functional test — PCBA, module and box-build',
          'In-house functional test development',
          'Product-specific test rigs',
          'Drop-ship — EXW / DDU / FOB',
        ],
        specs: [['Test', 'functional + in-house dev'], ['Ship', 'EXW / DDU / FOB']],
      },
    ],

    whyLead: '',
    whyRows: [
      {
        eyebrow: 'Vertically integrated',
        title: 'From bare board to packed product without changing suppliers',
        blurb: 'PCBA, box build, test and fulfilment sit under one group — so a product moves from board assembly to a finished, tested, drop-shipped unit with fewer handoffs and one point of accountability.',
        points: [
          'PCBA and box build in one group',
          'Fewer supplier handoffs',
          'One point of accountability',
          'Drop-ship straight to destination',
        ],
        photo: { label: 'Integrated box-build line' },
      },
      {
        eyebrow: 'Engineering, not sales',
        title: 'The finished product ships verified',
        blurb: 'Functional test runs at the box-build level, and Hana develops the test rigs in-house — so the unit is checked as a whole product, not just at the board.',
        points: [
          'Functional test at box-build level',
          'In-house test development',
          'Product-specific test rigs',
          'DFM / early-stage design collaboration',
        ],
        photo: { label: 'Engineer at an in-house test rig' },
      },
    ],

    sitesLead: 'Box build runs at Lamphun (Thailand), Jiaxing (China) and Koh Kong (Cambodia); volume mix per site varies.',
    sites: [
      { country: 'Thailand', sites: 'Lamphun', lines: 0, share: 0 },
      { country: 'China', sites: 'Jiaxing', lines: 0, share: 0 },
      { country: 'Cambodia', sites: 'Koh Kong', lines: 0, share: 0 },
    ],
    lineNoun: 'box-build lines',

    faq: [
      { q: 'What is box build?',
        a: 'Assembling the complete product beyond the circuit board — fitting the PCBA into its enclosure, adding cables/harnesses and mechanical parts, sealing it, and producing a finished, tested unit.' },
      { q: 'What does Hana’s box build include?',
        a: 'Enclosure and housing assembly, cable and wire-harness assembly, potting, mechanical assembly and large box build.' },
      { q: 'Can Hana test the finished product, not just the board?',
        a: 'Yes — functional test runs at the box-build level, and Hana develops the test rigs in-house, including product-specific rigs.' },
      { q: 'Can Hana ship finished products directly?',
        a: 'Yes — finished units are drop-shipped on EXW, DDU or FOB terms.' },
      { q: 'How is box build different from PCBA?',
        a: 'PCBA produces the populated circuit board; box build assembles the whole product around it — enclosure, harness, mechanical parts, test and fulfilment.' },
    ],
  },
};

Object.assign(window, { SUBCAPS, INDUSTRIES, CERTS, CAP_TREE, CLOSING });
