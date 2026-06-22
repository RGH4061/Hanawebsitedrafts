/* ════════════════════════════════════════════════════════════════
   Hana — Locations · plant detail record
   Per-plant data consumed by locations/plant.jsx (window.PLANT_DETAIL).
   ════════════════════════════════════════════════════════════════ */

const PLANT_DETAIL = {
  slug: 'ohio', country: 'USA', countrySlug: 'usa', city: 'Ohio',
  region: 'Solon / Twinsburg, Ohio, USA', since: '',
  eyebrow: 'USA · Solon, Ohio',
  lede: 'Hana\u2019s US manufacturing and design base \u2014 UHF/HF RFID inlays and tire tags, camera modules and microdisplays \u2014 and a domestic-US, ITAR-certified option for customers who need one.',
  heroPhoto: { src: 'uploads/ohio-facility.png', label: 'Solon · Ohio, USA' },
  heroCta: { label: 'Visit Hana Technologies', url: 'https://hana.family/' },
  facts: [
    ['Floor area', '111,000 sq ft'],
    ['Headcount', '~132'],
    ['Entity', 'Hana Technologies'],
    ['Defense', 'ITAR certified'],
  ],
  certs: [
    { name: 'ISO 9001:2015', scope: 'Quality management' },
    { name: 'ITAR', scope: 'ITAR certified' },
  ],
  partners: [
    { label: 'Impinj & NXP Gold Partner', logo: 'partners/impinj-nxp.png' },
    { label: 'ARC Quality 2025', logo: 'partners/arc-quality.png' },
  ],
  aboutTitle: 'RFID, optical and microdisplay manufacturing in the USA',
  about: [
    'Operating as Hana Technologies Inc \u2014 we are leaders in the identification/IoT industry, offering an array of RFID products to the unique demands of our customers as well as lean EMS and contract manufacturing services.',
    'A domestic-US manufacturing option \u2014 ITAR certified for defense-related work and ARC-certified for RFID inlay design and manufacturing.',
  ],
  siteLinks: [
    { label: 'Visit Hana Technologies Inc \u2014 RFID', url: 'https://hanarfid.com/' },
    { label: 'Visit Hana Technologies Inc \u2014 EMS', url: 'https://hana-micro.com/' },
  ],
  capabilityGroups: [
    { name: 'RFID & Smart Tags', url: '/capabilities/rfid/',
      desc: 'Over two decades of UHF, HF and LF RFID design and manufacturing \u2014 including the world\u2019s leading tire-tag inlay production.',
      photo: { src: 'capabilities/rfid-smart-tags.jpg', label: 'RFID & Smart Tags' },
      links: [
        { label: 'RFID Inlay', url: '/capabilities/rfid/rfid-inlay/' },
        { label: 'RFID Tire Tags', url: '/capabilities/rfid/rfid-tire-tags/' } ] },
    { name: 'Sensors & Optical', url: '/industries/optical-sensors/',
      desc: 'Camera modules, precision optical assemblies and LCOS / HTPS microdisplays.',
      photo: { src: 'capabilities/optical-sensors.jpg', label: 'Sensors & Optical' },
      links: [
        { label: 'Camera Modules', url: '/industries/optical-sensors/camera-modules/' },
        { label: 'Microdisplay', url: '/industries/optical-sensors/microdisplay/' },
        { label: 'MEMS Sensors', url: '/industries/optical-sensors/mems-sensors/' } ] },
    { name: 'PCBA & Box Build', url: '/capabilities/pcba-box-build/',
      desc: 'SMT assembly, box build and microelectronic packaging including Chip-on-Board and Chip-on-Flex.',
      photo: { src: 'capabilities/pcba-box-build.jpg', label: 'PCBA & Box Build' },
      links: [
        { label: 'SMT Assembly', url: '/capabilities/pcba-box-build/smt-assembly/' },
        { label: 'Box Build', url: '/capabilities/pcba-box-build/box-build/' },
        { label: 'Chip-on-Board', url: '/capabilities/pcba-box-build/chip-on-board/' },
        { label: 'Chip-on-Flex', url: '/capabilities/pcba-box-build/chip-on-flex/' } ] },
    { name: 'DFx & JDM Collaboration', url: '/capabilities/dfx-jdm/',
      desc: 'Engineering collaboration from design-for-manufacture through to a structured new-product introduction.',
      photo: { src: 'capabilities/joint-development.jpg', label: 'DFx & JDM' },
      links: [
        { label: 'Joint Development (JDM)', url: '/capabilities/dfx-jdm/joint-development-model/' },
        { label: 'New Product Introduction (NPI)', url: '/capabilities/dfx-jdm/new-product-introduction/' },
        { label: 'Design for Excellence', url: '/capabilities/dfx-jdm/design-for-excellence/' } ] },
    { name: 'Integrated Wireless Charging', url: '/capabilities/power-solutions/',
      desc: 'Integrated wireless charging module design and assembly with Kew Labs.',
      photo: { src: 'capabilities/wireless-charging.jpg', label: 'Integrated Wireless Charging' },
      links: [
        { label: 'Kew Labs Wireless Charging', url: 'https://www.kewlabstech.com', external: true } ] },
  ],
  sampleProducts: [
    { name: 'RFID inlays & straps', tag: 'RFID', photo: { label: 'RFID inlay' } },
    { name: 'RFID tire tags', tag: 'Automotive', photo: { label: 'RFID tire tag' } },
    { name: 'Camera modules', tag: 'Optical & Sensors', photo: { label: 'Camera module' } },
    { name: 'Microdisplays (LCOS / HTPS)', tag: 'Optical & Sensors', photo: { label: 'Microdisplay' } },
    { name: 'Infrared lens housings', tag: 'Optical', photo: { label: 'IR lens housing' } },
    { name: 'Wireless chargers', tag: 'Consumer electronics', photo: { label: 'Wireless charger' } },
  ],
  logistics: [
    ['Nearest airport', 'Cleveland Hopkins Intl · ~30 km'],
    ['Region', 'Greater Cleveland, Ohio'],
    ['Entity', 'Hana Technologies Inc.'],
    ['Address', '29000 Aurora Road, Solon, Ohio, 44139, USA'],
  ],
  logisticsLede: 'In Solon, greater Cleveland \u2014 Hana\u2019s US base, near the Liquid Crystal Institute at Kent State and major Ohio research universities.',
  mapPhoto: { label: 'Map \u2014 Solon, Ohio' },
};

Object.assign(window, { PLANT_DETAIL });
