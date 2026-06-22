/* ════════════════════════════════════════════════════════════════
   Hana — Locations · plant detail record
   Per-plant data consumed by locations/plant.jsx (window.PLANT_DETAIL).
   ════════════════════════════════════════════════════════════════ */

const PLANT_DETAIL = {
  slug: 'cheongju', country: 'South Korea', countrySlug: 'south-korea', city: 'Cheongju',
  region: 'Cheongju, Chungcheongbuk-do — South Korea', since: '',
  eyebrow: 'South Korea · Cheongju',
  lede: 'Hana’s affiliated power-semiconductor company in Korea — SiC and silicon power devices for EV, charging, renewables and industrial power. Korea’s only fully integrated power-device maker, with its own 6″ and 8″ wafer fab and R&D centre.',
  heroPhoto: { src: 'uploads/cheongju-facility.png', label: 'Cheongju Fab · Chungcheongbuk-do, South Korea' },
  heroCta: { label: 'Visit Powermaster Semiconductor', url: 'https://www.powermastersemi.com/eng/' },
  facts: [
    ['Founded', 'Jan 2018'],
    ['Wafer fab', '6″ & 8″ lines'],
    ['Devices', 'SiC · Si · IGBT'],
    ['Automotive', 'AEC-Q101 qualified'],
  ],
  certs: [
    { name: 'IATF 16949', scope: 'Automotive quality management' },
    { name: 'ISO 9001', scope: 'Quality management' },
    { name: 'ISO 14001', scope: 'Environmental management' },
  ],
  aboutLabel: 'About Powermaster Semiconductor',
  aboutTitle: 'Silicon-carbide and silicon power devices, designed and fabricated in Korea',
  about: [
    'Powermaster Semiconductor is an affiliated power-semiconductor company within the Hana group — and, in its own words, “the only Korean Integrated Power device manufacturer with FAB and R&D center in Korea,” running 6- and 8-inch fab lines in Cheongju alongside a sales and R&D lab in Incheon.',
    'Founded in January 2018 by a team with 20-plus years at leading semiconductor makers, Powermaster designs and manufactures SiC MOSFETs and diodes, high-voltage super-junction and MV silicon MOSFETs, and IGBTs — AEC-Q101-qualified for automotive, and aimed at xEV on-board chargers and traction, server and telecom power, solar inverters and energy storage.',
  ],
  siteLinks: [
    { label: 'Visit Powermaster Semiconductor', url: 'https://www.powermastersemi.com/eng/' },
    { label: 'Powermaster applications & design resources', url: 'https://www.powermastersemi.com/eng/application/application.html' },
  ],
  capabilityGroups: [
    { name: 'SiC MOSFETs', url: 'https://www.powermastersemi.com/eng/product/product04.html',
      desc: '650 V and 1200 V silicon-carbide MOSFETs in discrete and Kelvin-source packages (TO-247-4L, D2PAK-7L) — AEC-Q101 qualified for automotive.',
      photo: { src: 'capabilities/sic-mosfet.jpg', label: 'SiC MOSFETs' },
      links: [
        { label: 'SiC MOSFET range', url: 'https://www.powermastersemi.com/eng/product/product04.html', external: true },
        { label: 'Applications', url: 'https://www.powermastersemi.com/eng/application/application.html', external: true } ] },
    { name: 'SiC Schottky Diodes', url: 'https://www.powermastersemi.com/eng/product/product03.html',
      desc: 'Silicon-carbide Schottky barrier diodes for fast, low-loss switching in PFC and rectification stages.',
      photo: { src: 'capabilities/sic-diode.jpg', label: 'SiC Schottky Diodes' },
      links: [
        { label: 'SiC Diode range', url: 'https://www.powermastersemi.com/eng/product/product03.html', external: true } ] },
    { name: 'HV Super-Junction MOSFETs', url: 'https://www.powermastersemi.com/eng/product/product01.html',
      desc: 'High-voltage super-junction silicon MOSFETs for chargers, adapters and server / telecom power.',
      photo: { src: 'capabilities/sj-mosfet.jpg', label: 'HV Super-Junction MOSFETs' },
      links: [
        { label: 'HV SJ MOSFET range', url: 'https://www.powermastersemi.com/eng/product/product01.html', external: true } ] },
    { name: 'MV MOSFETs', url: 'https://www.powermastersemi.com/eng/product/product02.html',
      desc: 'Medium-voltage silicon MOSFETs across the power range for industrial and consumer power supplies.',
      photo: { src: 'capabilities/mv-mosfet.jpg', label: 'MV MOSFETs' },
      links: [
        { label: 'MV MOSFET range', url: 'https://www.powermastersemi.com/eng/product/product02.html', external: true } ] },
    { name: 'IGBTs', url: 'https://www.powermastersemi.com/eng/product/product05.html',
      desc: 'IGBT power devices for solar inverters, energy-storage systems and industrial motor drives.',
      photo: { src: 'capabilities/igbt.jpg', label: 'IGBTs' },
      links: [
        { label: 'IGBT range', url: 'https://www.powermastersemi.com/eng/product/product05.html', external: true } ] },
    { name: 'Integrated Fab & Hana Collaboration', url: 'https://www.powermastersemi.com/eng/about/about-us.html',
      desc: 'Korea’s only fully integrated power-device line — device design and 6″/8″ wafer fab in Cheongju, with packaging and module assembly across Hana’s OSAT and EMS network.',
      photo: { src: 'capabilities/wafer-fab.jpg', label: 'Integrated Fab & R&D' },
      links: [
        { label: 'Powermaster company profile', url: 'https://www.powermastersemi.com/eng/about/about-us.html', external: true },
        { label: 'OSAT module assembly (Hana)', url: '/capabilities/osat/' } ] },
  ],
  sampleProducts: [
    { name: '1200 V SiC MOSFET (TO-247-4L)', tag: 'SiC MOSFET', photo: { label: '1200 V SiC MOSFET' } },
    { name: '650 V SiC MOSFET (D2PAK-7L)', tag: 'SiC MOSFET', photo: { label: '650 V SiC MOSFET' } },
    { name: 'SiC Schottky diode', tag: 'SiC Diode', photo: { label: 'SiC Schottky diode' } },
    { name: 'HV super-junction MOSFET', tag: 'HV SJ MOSFET', photo: { label: 'HV SJ MOSFET' } },
    { name: 'MV MOSFET', tag: 'MV MOSFET', photo: { label: 'MV MOSFET' } },
    { name: 'IGBT', tag: 'IGBT', photo: { label: 'IGBT' } },
  ],
  logistics: [
    ['Nearest airport', 'Cheongju Int’l (CJJ) · ~25 km'],
    ['Region', 'Osong / Oksan tech belt, Chungcheongbuk-do'],
    ['Fab (HQ)', '79-20 Gwahaksaneop 4-ro, Oksan-myeon, Heungdeok-gu, Cheongju-si, Chungcheongbuk-do, South Korea'],
    ['R&D & sales', 'Incheon Lab — 10F, 714 Jangje-ro, Gyeyang-gu, Incheon'],
    ['Entity', 'Powermaster Semiconductor Co., Ltd.'],
  ],
  logisticsLede: 'In Cheongju’s Oksan science-industry park in Chungcheongbuk-do — the heart of Korea’s semiconductor belt — running 6- and 8-inch fab lines, with a dedicated sales and R&D lab in Incheon.',
  mapPhoto: { label: 'Map — Cheongju, South Korea' },
};

Object.assign(window, { PLANT_DETAIL });
