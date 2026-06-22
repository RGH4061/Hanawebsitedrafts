/* ════════════════════════════════════════════════════════════════
   Hana — Locations · plant detail record
   Per-plant data consumed by locations/plant.jsx (window.PLANT_DETAIL).
   ════════════════════════════════════════════════════════════════ */

const PLANT_DETAIL = {
  slug: 'lamphun', country: 'Thailand', countrySlug: 'thailand', city: 'Lamphun',
  region: 'Northern Thailand', since: '1994',
  eyebrow: 'Thailand · Lamphun',
  lede: 'An EMS facility in northern Thailand \u2014 PCBA, box build and high-precision microelectronic packaging, with IC assembly and OSAT services across two plants near Chiang Mai.',
  heroPhoto: { src: 'uploads/lamphun-facility.png', label: 'Lamphun · Northern Thailand' },
  facts: [
    ['Plant 1', '1994'],
    ['Plant 2', '2015'],
    ['Floor area', '67,000 m\u00b2'],
    ['Headcount', '~3,000'],
  ],
  certs: [
    { name: 'ISO 9001', scope: 'Quality management' },
    { name: 'IATF 16949', scope: 'Automotive' },
    { name: 'ISO 13485', scope: 'Medical devices' },
    { name: 'ISO 14001', scope: 'Environmental' },
    { name: 'ISO 45001', scope: 'Occupational health & safety' },
  ],
  aboutTitle: 'Electronics manufacturing and microelectronic packaging in northern Thailand',
  about: [
    'Lamphun is predominantly an EMS site \u2014 PCBA, SMT and box build \u2014 with deep microelectronic packaging including Chip-on-Board, Chip-on-Flex and flip chip.',
    'Two facilities near Chiang Mai run on SAP S/4HANA, MES and PDM, giving customers full digital traceability across production.',
  ],
  capabilityGroups: [
    { name: 'PCBA & Box Build', url: '/capabilities/pcba-box-build/',
      desc: 'SMT, through-hole and mixed-technology assembly through to box build, plus advanced microelectronic packaging.',
      photo: { src: 'capabilities/pcba-box-build.jpg', label: 'PCBA & Box Build' },
      links: [
        { label: 'SMT Assembly', url: '/capabilities/pcba-box-build/smt-assembly/' },
        { label: 'Chip-on-Board', url: '/capabilities/pcba-box-build/chip-on-board/' },
        { label: 'Chip-on-Flex', url: '/capabilities/pcba-box-build/chip-on-flex/' },
        { label: 'Flip Chip', url: '/capabilities/pcba-box-build/flip-chip/' },
        { label: 'Box Build', url: '/capabilities/pcba-box-build/box-build/' } ] },
    { name: 'IC Assembly & Test', url: '/capabilities/osat/',
      desc: 'IC packaging and OSAT services alongside the EMS line \u2014 die attach, wire bond and wafer back-grind.',
      photo: { src: 'capabilities/ic-assembly-test.jpg', label: 'IC Assembly & Test' },
      links: [
        { label: 'Die Attach & Wire Bond', url: '/capabilities/osat/die-attach-wire-bond/' },
        { label: 'Wafer Processing', url: '/capabilities/osat/wafer-processing/' } ] },
    { name: 'Sensors & Optical', url: '/industries/optical-sensors/',
      desc: 'Automotive and optical sensor assembly.',
      photo: { src: 'capabilities/optical-sensors.jpg', label: 'Sensors & Optical' },
      links: [
        { label: 'MEMS Sensors', url: '/industries/optical-sensors/mems-sensors/' } ] },
    { name: 'RFID & Smart Tags', url: '/capabilities/rfid/',
      desc: 'Smart-card module and RFID tire-tag assembly.',
      photo: { src: 'capabilities/rfid-smart-tags.jpg', label: 'RFID & Smart Tags' },
      links: [
        { label: 'RFID Tire Tags', url: '/capabilities/rfid/rfid-tire-tags/' },
        { label: 'RFID Smart Cards' } ] },
    { name: 'DFx & NPI Collaboration', url: '/capabilities/dfx-jdm/',
      desc: 'Engineering collaboration from design-for-manufacture through to a structured new-product introduction.',
      photo: { src: 'capabilities/joint-development.jpg', label: 'DFx & NPI' },
      links: [
        { label: 'New Product Introduction (NPI)', url: '/capabilities/dfx-jdm/new-product-introduction/' },
        { label: 'Design for Excellence', url: '/capabilities/dfx-jdm/design-for-excellence/' } ] },
  ],
  sampleProducts: [
    { name: 'Automotive sensors', tag: 'Automotive', photo: { label: 'Automotive sensor' } },
    { name: 'Automotive LED assemblies', tag: 'Automotive', photo: { label: 'LED assembly' } },
    { name: 'RF & millimeter-wave modules', tag: 'Telecommunications', photo: { label: 'RF module' } },
    { name: 'Smart-card modules', tag: 'RFID', photo: { label: 'Smart-card module' } },
    { name: 'Medical devices', tag: 'Medical', photo: { label: 'Medical device' } },
    { name: 'Optical mouse sensors', tag: 'Optical & Sensors', photo: { label: 'Optical sensor' } },
  ],
  logistics: [
    ['Nearest airport', 'Chiang Mai International · ~30 km'],
    ['Nearest port', 'Laem Chabang · via Bangkok'],
    ['Province', 'Lamphun, Thailand'],
    ['Economic zone', 'Northern Region Industrial Estate (EPZ)'],
  ],
  logisticsLede: 'In the Northern Region Industrial Estate near Chiang Mai \u2014 an export-processing zone in northern Thailand with direct access to Chiang Mai International Airport.',
  mapPhoto: { label: 'Map \u2014 Lamphun, Northern Thailand' },
};

Object.assign(window, { PLANT_DETAIL });
