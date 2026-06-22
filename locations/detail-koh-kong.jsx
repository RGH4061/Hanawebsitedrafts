/* ════════════════════════════════════════════════════════════════
   Hana — Locations · plant detail record
   Per-plant data consumed by locations/plant.jsx (window.PLANT_DETAIL).
   ════════════════════════════════════════════════════════════════ */

const PLANT_DETAIL = {
  slug: 'koh-kong', country: 'Cambodia', countrySlug: 'cambodia', city: 'Koh Kong',
  region: 'Koh Kong Province, Cambodia', since: '',
  eyebrow: 'Cambodia · Koh Kong',
  lede: 'A TAA-compliant EMS base in the Koh Kong SEZ \u2014 manufacturing here qualifies for US federal and government supply. PCBA, final assembly, box build and micro-assembly, from medical devices to consumer electronics, two kilometres from the Thai border.',
  heroPhoto: { src: 'uploads/koh-kong-facility.png', label: 'Koh Kong · Cambodia' },
  facts: [
    ['Trade status', 'TAA-designated'],
    ['Site area', '120,000 m\u00b2'],
    ['Capacity', '2,000+ staff'],
    ['Headcount', '~216'],
  ],
  certs: [
    { name: 'ISO 9001', scope: 'Quality management' },
    { name: 'IATF 16949', scope: 'Automotive' },
    { name: 'TL 9000', scope: 'Telecommunications' },
  ],
  aboutTitle: 'Electronics manufacturing in the Koh Kong SEZ',
  about: [
    'Koh Kong provides electronics manufacturing services with deep PCBA and final-assembly capability \u2014 building medical devices, consumer electronics and access-control products.',
    'Located two kilometres from the Thai border, the site offers labour-competitive assembly within the Hana group. As a TAA-designated country, products substantially transformed in Cambodia are eligible for US federal and government procurement \u2014 a route few low-cost manufacturing locations can offer.',
  ],
  capabilityGroups: [
    { name: 'PCBA & SMT Assembly', url: '/capabilities/pcba-box-build/',
      desc: 'Surface-mount, through-hole and mixed-technology assembly \u2014 down to 01005 components and 0.3 mm-pitch flip-chip, with inline SPI and AOI.',
      photo: { src: 'capabilities/pcba-smt.jpg', label: 'PCBA & SMT Assembly' },
      links: [
        { label: 'SMT Assembly', url: '/capabilities/pcba-box-build/smt-assembly/' },
        { label: 'Mixed-technology PCBA' },
        { label: 'In-line AOI & SPI', url: '/capabilities/automation/aoi-spi/' } ] },
    { name: 'Final Assembly & Micro-Assembly Box Build', url: '/capabilities/pcba-box-build/box-build/',
      desc: 'Full box build and mechanical final assembly — including micro-assembly of miniature electronics such as hearing aids — with automated conformal coating and potting.',
      photo: { src: 'capabilities/box-build.jpg', label: 'Final Assembly & Micro-Assembly Box Build' },
      links: [
        { label: 'Box Build', url: '/capabilities/pcba-box-build/box-build/' },
        { label: 'Micro-assembly', url: '/capabilities/microelectronic-assembly/micro-assembly/' },
        { label: 'Conformal Coating & Potting' } ] },
    { name: 'Cable & Wire Harness', url: '/capabilities/pcba-box-build/',
      desc: 'Manual cable and wire-harness assembly \u2014 a labour-competitive strength of the Koh Kong site.',
      photo: { src: 'capabilities/wire-harness.jpg', label: 'Cable & Wire Harness' },
      links: [
        { label: 'Wire harness assembly' },
        { label: 'Cable assembly' } ] },
    { name: 'Test & Inspection', url: '/capabilities/pcba-box-build/',
      desc: 'In-circuit and flying-probe test, functional test and programming, with X-ray and automated optical inspection.',
      photo: { src: 'capabilities/test-inspection.jpg', label: 'Test & Inspection' },
      links: [
        { label: 'In-circuit & functional test' },
        { label: 'Device programming' },
        { label: 'X-ray & AOI' } ] },
  ],
  sampleProducts: [
    { name: 'Access control readers', tag: 'Security & access', photo: { label: 'Access control reader' } },
    { name: 'USB security tokens', tag: 'Security', photo: { label: 'USB security token' } },
    { name: 'Remote controls', tag: 'Consumer electronics', photo: { label: 'Remote control' } },
    { name: 'Medical device assemblies', tag: 'Medical', photo: { label: 'Medical device' } },
    { name: 'IoT & consumer devices', tag: 'Consumer electronics', photo: { label: 'IoT device' } },
    { name: 'Cable & wire harnesses', tag: 'Cable & harness', photo: { label: 'Wire harness' } },
  ],
  logistics: [
    ['Nearest border', 'Thai border · ~2 km'],
    ['Reference city', 'Bangkok · ~400 km SE'],
    ['Province', 'Koh Kong, Cambodia'],
    ['Economic zone', 'Koh Kong Special Economic Zone (KKSEZ)'],
  ],
  logisticsLede: 'In the Koh Kong SEZ in south-west Cambodia \u2014 two kilometres from the Thai border and around 400 km from Bangkok.',
  mapPhoto: { label: 'Map \u2014 Koh Kong, Cambodia' },
};

Object.assign(window, { PLANT_DETAIL });
