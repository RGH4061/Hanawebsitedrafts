/* ════════════════════════════════════════════════════════════════
   Hana — Locations · plant detail record
   Per-plant data consumed by locations/plant.jsx (window.PLANT_DETAIL).
   ════════════════════════════════════════════════════════════════ */

const PLANT_DETAIL = {
  slug: 'ayutthaya', country: 'Thailand', countrySlug: 'thailand', city: 'Ayutthaya',
  region: 'Ayutthaya Province, Thailand', since: '1997',
  eyebrow: 'Thailand · Ayutthaya',
  lede: 'Hana\u2019s primary OSAT site \u2014 IC assembly and test for low-to-medium pin-count devices, with SMT and optical-sensor packaging. Nearly three decades of semiconductor packaging and test in Thailand\u2019s Hi-Tech Industrial Estate.',
  heroPhoto: { src: 'uploads/ayutthaya-facility.png', label: 'Ayutthaya · Thailand' },
  facts: [
    ['Established', '1997'],
    ['Headcount', '~2,899'],
    ['Floor area', '55,300 m\u00b2'],
    ['Test systems', '600+'],
  ],
  certs: [
    { name: 'IATF 16949', scope: 'Automotive' },
    { name: 'ISO 9001', scope: 'Quality management' },
    { name: 'ISO 14001', scope: 'Environmental' },
    { name: 'ISO 45001', scope: 'Occupational health & safety' },
    { name: 'ANSI/ESD S20.20', scope: 'ESD control program' },
    { name: 'ISO/IEC 27001', scope: 'Information security' },
    { name: 'ISO 13485', scope: 'Medical devices' },
    { name: 'Sony Green Partner', scope: 'Environmental supply' },
    { name: 'ITAR', scope: 'Approved for ITAR products' },
  ],
  aboutTitle: 'Outsourced semiconductor assembly and test in Thailand',
  about: [
    'Ayutthaya is Hana\u2019s deepest OSAT operation \u2014 packaging and testing semiconductor devices used across automotive, medical, optical, RFID, telecom and broader industrial and consumer electronics.',
    'The site runs over 600 test systems across analog, logic, memory, mixed-signal, RF and sensor devices, with in-house test development from qualification through to mass production.',
  ],
  capabilityGroups: [
    { name: 'IC Assembly & Test', url: '/capabilities/osat/',
      desc: 'In-house IC packaging and device test for low-to-medium pin-count devices \u2014 leaded, leadless and custom packages.',
      photo: { src: 'capabilities/ic-assembly-test.jpg', label: 'IC Assembly & Test' },
      links: [
        { label: 'System-in-Package', url: '/capabilities/osat/system-in-package/' },
        { label: 'Wafer Processing', url: '/capabilities/osat/wafer-processing/' },
        { label: 'Wafer-Level Chip-Scale Packaging', url: '/capabilities/osat/wafer-level-packaging/' },
        { label: 'Die Attach & Wire Bond', url: '/capabilities/osat/die-attach-wire-bond/' },
        { label: 'Custom IC Packaging' } ] },
    { name: 'Sensors & Optical', url: '/industries/optical-sensors/',
      desc: 'Optical sensor packaging and MEMS sensor assembly \u2014 an Ayutthaya specialty.',
      photo: { src: 'capabilities/optical-sensors.jpg', label: 'Sensors & Optical' },
      links: [
        { label: 'MEMS Sensors', url: '/industries/optical-sensors/mems-sensors/' },
        { label: 'Optical sensor packaging (ODFN / OLGA / OQFN)' } ] },
    { name: 'PCBA & Box Build', url: '/capabilities/pcba-box-build/',
      desc: 'Surface-mount assembly down to 01005, including flex substrates for module integration.',
      photo: { src: 'capabilities/pcba-box-build.jpg', label: 'PCBA & Box Build' },
      links: [
        { label: 'SMT Assembly', url: '/capabilities/pcba-box-build/smt-assembly/' } ] },
    { name: 'DFx & JDM Collaboration', url: '/capabilities/dfx-jdm/',
      desc: 'Engineering collaboration from design-for-manufacture through to a structured new-product introduction.',
      photo: { src: 'capabilities/joint-development.jpg', label: 'DFx & JDM' },
      links: [
        { label: 'Joint Development (JDM)', url: '/capabilities/dfx-jdm/joint-development-model/' },
        { label: 'New Product Introduction (NPI)', url: '/capabilities/dfx-jdm/new-product-introduction/' },
        { label: 'Design for Excellence', url: '/capabilities/dfx-jdm/design-for-excellence/' } ] },
  ],
  sampleProducts: [
    { name: 'Automotive sensor packages', tag: 'Automotive', photo: { label: 'Automotive sensor package' } },
    { name: 'Optical & ambient-light sensors', tag: 'Optical & Sensors', photo: { label: 'Optical sensor package' } },
    { name: 'MEMS sensor packages', tag: 'Sensors', photo: { label: 'MEMS sensor' } },
    { name: 'RF & microwave packages', tag: 'Telecommunications', photo: { label: 'RF package' } },
    { name: 'Medical sensor packages', tag: 'Medical', photo: { label: 'Medical sensor package' } },
    { name: 'Mixed-signal IC packages', tag: 'Consumer electronics', photo: { label: 'IC package' } },
  ],
  logistics: [
    ['Nearest port', 'Laem Chabang · ~130 km'],
    ['Nearest airport', 'Suvarnabhumi (Bangkok) · ~60 km'],
    ['Province', 'Ayutthaya, Thailand'],
    ['Economic zone', 'Hi-Tech Industrial Estate, Bang Pa-in'],
  ],
  logisticsLede: 'Located in the Hi-Tech Industrial Estate at Bang Pa-in, central Thailand \u2014 close to Bangkok\u2019s international airport and the deep-sea port at Laem Chabang.',
  mapPhoto: { label: 'Map \u2014 Ayutthaya, Thailand' },
};

Object.assign(window, { PLANT_DETAIL });
