/* ════════════════════════════════════════════════════════════════
   Hana — Locations · data model
   Six plants across five countries. Jiaxing is the fully-filled
   reference record; the others carry summary fields only (detail
   pages come later). Cheongju is an affiliated power-semiconductor
   company — its "explore" link points to that affiliate's own site.
   Approx lon/lat are used by the world-map block to place pins.
   ════════════════════════════════════════════════════════════════ */

const PLANTS = [
  {
    slug: 'ayutthaya', country: 'Thailand', countrySlug: 'thailand', city: 'Ayutthaya',
    region: 'Central Thailand', since: '1988', headcount: '~3,400',
    services: ['OSAT', 'PCBA', 'Microelectronics', 'EMS'],
    summary: 'Advanced OSAT and IC manufacturing under Hana IP.',
    certs: ['IATF 16949', 'ISO 9001', 'ISO 14001', 'ISO 45001', 'ANSI/ESD S20.20', 'ISO/IEC 27001', 'ISO 13485', 'Sony Green Partner', 'Approved for ITAR products'],
    lon: 100.6, lat: 14.4, url: 'locations-ayutthaya.html', status: 'internal',
  },
  {
    slug: 'lamphun', country: 'Thailand', countrySlug: 'thailand', city: 'Lamphun',
    region: 'Northern Thailand', since: '1996', headcount: '~2,100',
    services: ['EMS', 'Box Build', 'SMT'],
    summary: 'EMS and PCBA to box build assembly across microelectronics and more.',
    certs: ['ISO 9001', 'IATF 16949', 'ISO 13485', 'ISO 14001', 'ISO 45001'],
    lon: 99.0, lat: 18.6, url: 'locations-lamphun.html', status: 'internal',
  },
  {
    slug: 'jiaxing', country: 'China', countrySlug: 'china', city: 'Jiaxing',
    region: 'Zhejiang Province', since: '2002', headcount: '~1,200',
    services: ['EMS', 'PCBA', 'Box build', 'IC Packaging'],
    summary: 'Vertically integrated OSAT to EMS and box build production. Specializing in complex wafer, SiC power module and industrial IoT production lines.',
    certs: ['ISO 9001', 'IATF 16949', 'ISO 13485', 'ISO 14001', 'IECQ QC080000', 'ISO 45001'],
    lon: 120.8, lat: 30.8, url: 'locations-jiaxing.html', status: 'internal',
  },
  {
    slug: 'ohio', country: 'USA', countrySlug: 'usa', city: 'Solon, Ohio',
    region: 'Greater Cleveland', since: '2008', headcount: '~450',
    services: ['RFID', 'Microdisplay', 'LCOS'],
    summary: 'A world leader in RFID design and tire tag inlay production with microdisplay and precision camera module capabilities. A domestic US EMS option.',
    certs: ['ISO 9001:2015', 'ITAR Certified'],
    linkLabel: 'View Hana USA site',
    lon: -81.4, lat: 41.4, url: 'locations-solon-ohio.html', status: 'internal',
  },
  {
    slug: 'koh-kong', country: 'Cambodia', countrySlug: 'cambodia', city: 'Koh Kong',
    region: 'Koh Kong Province', since: '2014', headcount: '~900',
    services: ['EMS', 'PCBA', 'Box build'],
    summary: 'Expert in manual assembly for labor-intensive products, specializing in EMS and PCBA services.',
    certs: ['ISO 9001', 'IATF 16949', 'TL 9000'],
    lon: 103.0, lat: 11.6, url: 'locations-koh-kong.html', status: 'internal',
  },
  {
    slug: 'cheongju', country: 'South Korea', countrySlug: 'south-korea', city: 'Cheongju',
    region: 'Chungcheongbuk-do', since: '—', headcount: '—',
    services: ['SiC module', 'Power semiconductor'],
    summary: 'Silicon-carbide power modules for EV and industrial, designed under Powermaster Semiconductor.',
    certs: ['ISO 9001', 'ISO 14001', 'IATF 16949'],
    linkLabel: 'View Cheongju site',
    lon: 127.5, lat: 36.6, url: 'locations-cheongju.html', status: 'affiliate',
  },
];

/* ─── Jiaxing — fully-filled detail record (template reference) ── */
const JIAXING = {
  slug: 'jiaxing', country: 'China', countrySlug: 'china', city: 'Jiaxing',
  region: 'Zhejiang Province, China', since: '2002',
  eyebrow: 'China · Jiaxing',
  lede: 'From wafer to box build, Hana Jiaxing is a vertically integrated production facility from OSAT to EMS. Over two decade of manufacturing experience in China serving both the Chinese and World market from the Yangtze River Delta.',
  heroPhoto: { src: 'uploads/jiaxing-facility.png', label: 'Jiaxing · Zhejiang Province' },

  facts: [
    ['Established', '2002'],
    ['Headcount', '~1,200'],
    ['Floor area', '38,000 m²'],
    ['SMT lines', '14'],
  ],

  certs: [
    { name: 'ISO 9001', scope: 'Quality management' },
    { name: 'IATF 16949', scope: 'Automotive' },
    { name: 'ISO 13485', scope: 'Medical devices' },
    { name: 'ISO 14001', scope: 'Environmental' },
    { name: 'IECQ QC080000', scope: 'Hazardous substance process management' },
    { name: 'ISO 45001', scope: 'Occupational health & safety' },
  ],

  aboutTitle: 'Electronics manufacturing in Zhejiang Province',
  about: [
    'Jiaxing is Hana\u2019s China manufacturing hub, serving customers in access control, locking technology and broader industrial electronics. The site runs full PCBA, box build, DFM and NPI inside one vertically integrated operation.',
    'Several customer relationships here have run more than two decades \u2014 the standard we measure ourselves by. We work alongside your engineering team from first article through production ramp.',
  ],

  capabilityGroups: [
    { name: 'PCBA & Box Build', url: '/capabilities/pcba-box-build/',
      desc: 'SMT, through-hole and mixed-technology assembly through to full box build — one vertically integrated line.',
      photo: { src: 'capabilities/pcba-box-build.jpg', label: 'PCBA & Box Build' },
      links: [
        { label: 'SMT Assembly', url: '/capabilities/pcba-box-build/smt-assembly/' },
        { label: 'Chip-on-Board', url: '/capabilities/pcba-box-build/cob-assembly/' },
        { label: 'Chip-on-Flex', url: '/capabilities/pcba-box-build/chip-on-flex/' },
        { label: 'Box Build', url: '/capabilities/pcba-box-build/box-build/' } ] },
    { name: 'IC Assembly & Test', url: '/capabilities/osat/',
      desc: 'In-house IC packaging and device test — the OSAT side of Hana, in the same plant as the EMS line.',
      photo: { src: 'capabilities/ic-assembly-test.jpg', label: 'IC Assembly & Test' },
      links: [
        { label: 'System-in-Package', url: '/capabilities/osat/system-in-package/' },
        { label: 'Wafer-Level Chip-Scale Packaging', url: '/capabilities/osat/wafer-level-packaging/' },
        { label: 'IGBT & SiC Modules', url: '/industries/power-management/igbt-sic-modules/' },
        { label: 'Power Discrete', url: '/industries/power-management/power-discrete/' } ] },
    { name: 'RFID & Smart Tags', url: '/capabilities/rfid/',
      desc: 'Over 20 years of UHF and HF RFID manufacturing on fully automated inlay lines.',
      photo: { src: 'capabilities/rfid-smart-tags.jpg', label: 'RFID & Smart Tags' },
      links: [
        { label: 'RFID Inlay', url: '/capabilities/rfid/rfid-inlay/' },
        { label: 'RFID Tire Tags', url: '/capabilities/rfid/rfid-tire-tags/' } ] },
    { name: 'DFx & JDM Collaboration', url: '/capabilities/dfx-jdm/',
      desc: 'Engineering collaboration from design-for-manufacture through to a structured new-product introduction.',
      photo: { src: 'capabilities/joint-development.jpg', label: 'DFx & JDM' },
      links: [
        { label: 'Joint Development (JDM)', url: '/capabilities/dfx-jdm/joint-development-model/' },
        { label: 'New Product Introduction (NPI)', url: '/capabilities/dfx-jdm/new-product-introduction/' },
        { label: 'Design for Excellence', url: '/capabilities/dfx-jdm/design-for-excellence/' } ] },
  ],

  sampleProducts: [
    { name: 'Access control readers', tag: 'Security & access', photo: { label: 'Access control reader' } },
    { name: 'Electronic lock assemblies', tag: 'Locking technology', photo: { label: 'Electronic lock module' } },
    { name: 'Industrial IoT gateways', tag: 'Industrial IoT', photo: { label: 'IoT gateway PCBA' } },
    { name: 'SiC power modules', tag: 'Power electronics', photo: { label: 'SiC power module' } },
    { name: 'Camera & sensor modules', tag: 'Imaging', photo: { label: 'Camera sensor module' } },
    { name: 'Smart metering boards', tag: 'Energy', photo: { label: 'Smart meter PCBA' } },
  ],

  logistics: [
    ['Nearest port', 'Shanghai \u00b7 ~100 km'],
    ['Nearest airport', 'Shanghai Pudong International Airport ~125km\nHangzhou Xiaoshan Intl \u00b7 ~80 km'],
    ['Province', 'Zhejiang, China'],
    ['Economic zone', 'Jiaxing Economic & Technological Development Zone'],
  ],
  logisticsLede: 'Located in the Yangtze River Delta, roughly 100 km southwest of Shanghai \u2014 direct access to one of the world\u2019s highest-volume container terminals and major international air-freight hubs.',
  mapPhoto: { label: 'Map \u2014 Jiaxing, Zhejiang Province' },
};

Object.assign(window, { PLANTS, JIAXING });
