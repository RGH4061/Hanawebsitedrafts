/* ════════════════════════════════════════════════════════════════
   Hana — Capability PARENT HUB · content model
   ----------------------------------------------------------------
   One hub object per parent capability group. The hub is the landing
   page for a group (e.g. "PCBA & Box Build"): a blurb describing the
   parent capability, then a grid of selectable sub-capability cards
   that route down to the sub-capability page template.

   PCBA & Box Build is the fully worked example; the remaining five
   groups are written out so the template holds across the whole IA.
   Shared CAP_TREE / SUBCAPS / CERTS come from the sub-cap template's
   data.jsx (loaded first), so the same sidebar drives both pages.

   `existsHref` resolves to the sub-capability page for any slug that
   already has a SUBCAPS entry; others fall back to '#'.
   ════════════════════════════════════════════════════════════════ */

const SUBCAP_PAGE = 'Hana Sub-Capability Page.html';

const CAP_HUBS = {

  /* ===========================================================
     PCBA & BOX BUILD  (primary worked example)
     =========================================================== */
  'pcba-box-build': {
    slug: 'pcba-box-build',
    parentName: 'PCBA & Box Build',
    eyebrow: 'Capability',
    title: 'PCBA and box build',
    intro: 'Board assembly and full product assembly under one group — from a fine-pitch surface-mount line through bare-die work to the finished, tested unit. The same qualified processes run across our plants in China, Thailand, Cambodia and the USA, with SPI, AOI and X-ray built into every board.',
    standfirst: 'Choose a process to go deeper, or send a BOM and we’ll point you to the right one.',
    heroPhoto: { src: 'uploads/cleanroom-smt-line.png', label: 'SMT line · inline inspection' },
    heroStats: [['EMS + OSAT', 'One group'], ['01005', 'Smallest passive'], ['0.2 mm', 'Min BGA pitch'], ['Drop-ship', 'EXW · DDU · FOB']],
    subsLead: 'Three processes cover the full path from a populated board to a packed product. Each is qualified across multiple sites.',
    subs: [
      {
        slug: 'smt-assembly', icon: 'cpu', name: 'SMT assembly',
        blurb: 'Fine-pitch, double-sided surface mount down to 01005 passives and 0.2 mm micro-BGA pitch, with solder-paste inspection, 3D AOI and X-ray on every board.',
        tags: ['01005 passives', '0.2 mm BGA pitch', '±50 µm placement'],
      },
      {
        slug: 'cob-assembly', icon: 'square-stack', name: 'COB assembly',
        blurb: 'Bare-die attach, wire bond and encapsulation straight onto the board — the lowest-profile, lowest-cost route for high-volume modules.',
        tags: ['18 µm Au wire', '60 µm pitch', 'Glob-top'],
      },
      {
        slug: 'box-build', icon: 'box', name: 'Box build',
        blurb: 'The step beyond the board — enclosure and harness integration, potting and functional test, with drop-ship straight to your destination.',
        tags: ['Enclosure + harness', 'Functional test', 'Drop-ship'],
      },
    ],
  },

  /* ===========================================================
     OSAT
     =========================================================== */
  'osat': {
    slug: 'osat',
    parentName: 'OSAT',
    eyebrow: 'Capability',
    title: 'Outsourced semiconductor assembly and test',
    intro: 'Packaging and test at the die level — wafer processing, die attach, wire bond, flip chip and final test under one roof. OSAT sits next to our EMS lines, so a program can move from packaged device to populated board without leaving the group.',
    standfirst: 'Choose a process to go deeper, or send a device spec and we’ll route it.',
    heroPhoto: { label: 'Wafer on a dicing frame under inspection' },
    heroStats: [['Wafer → test', 'In one group'], ['80 µm', 'Min bump pitch'], ['WLCSP', 'Wafer-level'], ['AEC-Q', 'Reliability'],],
    subsLead: 'From incoming wafer through final electrical test — each step is qualified for automotive and high-reliability work.',
    subs: [
      { slug: 'wafer-processing', icon: 'disc', name: 'Wafer processing', blurb: 'Backgrind, dicing and pick from incoming wafers, prepared for downstream assembly.', tags: ['Backgrind', 'Dicing', 'Pick & place'] },
      { slug: 'die-attach-wire-bond', icon: 'waypoints', name: 'Die attach & wire bond', blurb: 'Epoxy and eutectic die attach with gold and aluminium wire bonding at fine pitch.', tags: ['Epoxy / eutectic', 'Au / Al wire', 'MIL-STD-883'] },
      { slug: 'flip-chip', icon: 'layers', name: 'Flip chip', blurb: 'Bumped die flipped face-down for the shortest interconnect and highest I/O density, with capillary and pre-applied underfill.', tags: ['80 µm pitch', 'CUF / NUF', '3D X-ray'] },
      { slug: 'flip-chip-sip', icon: 'package', name: 'System in package (SiP)', blurb: 'Multiple die and passives integrated into a single package for a smaller, faster module.', tags: ['Multi-die', 'Integrated passives', 'Molded'] },
      { slug: 'wafer-probe-final-test', icon: 'activity', name: 'Wafer probe & final test', blurb: 'Electrical test at wafer level and on the finished package, with full unit traceability.', tags: ['Wafer probe', 'Final test', 'Traceable'] },
      { slug: 'wafer-level-packaging', icon: 'grid', name: 'Wafer level packaging (WLCSP)', blurb: 'Chip-scale packaging completed on the wafer, for the smallest possible footprint.', tags: ['WLCSP', 'Chip-scale', 'Redistribution'] },
    ],
  },

  /* ===========================================================
     MICROELECTRONIC ASSEMBLY
     =========================================================== */
  'microelectronics': {
    slug: 'microelectronics',
    parentName: 'Microelectronic Assembly',
    eyebrow: 'Capability',
    title: 'Microelectronic assembly',
    intro: 'The precision end of the group — flip chip, MEMS and sensor assembly, fine interconnect and micro-assembly, where placement is measured in microns. The capabilities that define Hana as a microelectronics specialist, not a general contract assembler.',
    standfirst: 'Choose a process to go deeper, or talk to engineering about a microelectronics build.',
    heroPhoto: { label: 'Micro-placement head over a sensor die' },
    heroStats: [['µm-scale', 'Placement'], ['MEMS', 'Sensor assembly'], ['Flip chip', 'Bare-die'], ['ISO 27001', 'IP secured'],],
    subsLead: 'Four processes for products where size, sensing or interconnect density is the binding constraint.',
    subs: [
      { slug: 'flip-chip-micro', icon: 'layers', name: 'Flip chip', blurb: 'Bumped die bonded face-down for the shortest interconnect path and the highest I/O density per die.', tags: ['80 µm pitch', 'Cu pillar', 'Underfilled'] },
      { slug: 'mems-sensor-assembly', icon: 'radio', name: 'MEMS & sensor assembly', blurb: 'Assembly of pressure, motion and optical sensors, with cavity packages and controlled environments.', tags: ['Cavity package', 'Stress-managed', 'Optical'] },
      { slug: 'precision-interconnect', icon: 'waypoints', name: 'Interconnect solutions', blurb: 'Fine-pitch interconnect between die, substrate and flex — ACF, hot-bar and wire bond.', tags: ['ACF · hot-bar', 'Fine pitch', 'Flex ↔ PCB'] },
      { slug: 'micro-assembly', icon: 'scan', name: 'Micro-assembly', blurb: 'Sub-millimetre component handling and placement for the most compact builds in the group.', tags: ['Sub-mm parts', 'Vision-guided', '±5 µm'] },
    ],
  },

  /* ===========================================================
     RFID & SMART TAGS
     =========================================================== */
  'rfid-smart-tags': {
    slug: 'rfid-smart-tags',
    parentName: 'RFID & Smart Tags',
    eyebrow: 'Capability',
    title: 'RFID and smart tags',
    intro: 'High-volume RFID inlays and ruggedized tags — coil and antenna assembly, chip attach and lamination, built for environments that destroy ordinary labels. The capability behind tens of millions of tracked items a year.',
    standfirst: 'Choose a product to go deeper, or send your tag spec and target volumes.',
    heroPhoto: { src: 'uploads/rfid-tire.jpeg', label: 'RFID tire tag under assembly' },
    heroStats: [['High-volume', 'Reel-to-reel'], ['Coil', 'Antenna assembly'], ['Ruggedized', 'Harsh-environment'], ['UHF / HF', 'Frequencies'],],
    subsLead: 'Two product families, from embeddable ruggedized tags to high-throughput inlays.',
    subs: [
      { slug: 'rfid-tire-tags', icon: 'circle-dot', name: 'RFID tire tags', blurb: 'Ruggedized tags engineered to survive cure, flex and road temperature inside a tire for its full service life.', tags: ['Embeddable', 'High-temp', 'Long-life'] },
      { slug: 'rfid-inlays', icon: 'radio', name: 'RFID inlays', blurb: 'High-throughput inlay assembly — chip attach and antenna lamination, reel-to-reel for label and ticket converters.', tags: ['Reel-to-reel', 'Chip attach', 'UHF / HF'] },
    ],
  },

  /* ===========================================================
     AUTOMATION
     =========================================================== */
  'automation': {
    slug: 'automation',
    parentName: 'Automation',
    eyebrow: 'Capability',
    title: 'Automation and traceability',
    intro: 'The inspection, handling and data layer that runs underneath every line — in-line optical inspection, robotic handling and unit-level traceability. The reason a board can move between Hana sites with its quality record intact.',
    standfirst: 'Choose a system to go deeper, or ask how traceability applies to your program.',
    heroPhoto: { label: 'Robotic handling cell on an assembly line' },
    heroStats: [['In-line', 'SPI · AOI'], ['Robotic', 'Handling & test'], ['Unit-level', 'Traceability'], ['MES', 'Data layer'],],
    subsLead: 'Three systems that make quality measurable, repeatable and portable across the group.',
    subs: [
      { slug: 'inline-aoi-spi', icon: 'scan-eye', name: 'In-line AOI & SPI', blurb: 'Solder-paste inspection and pre- and post-reflow optical inspection built into the line, not bolted on.', tags: ['SPI', '3D AOI', '7 µm res'] },
      { slug: 'robotic-handling-test', icon: 'bot', name: 'Robotic handling & test', blurb: 'Automated handling, loading and functional test for repeatable, operator-independent throughput.', tags: ['Robotic load', 'Functional test', 'Repeatable'] },
      { slug: 'mes-traceability', icon: 'route', name: 'Manufacturing traceability', blurb: 'Material, unit and product traceability captured at every step, so a program can move sites with its record.', tags: ['Material', 'Unit', 'Product'] },
    ],
  },

  /* ===========================================================
     DFx & JDM COLLABORATION
     =========================================================== */
  'dfx-jdm': {
    slug: 'dfx-jdm',
    parentName: 'DFx & JDM Collaboration',
    eyebrow: 'Capability',
    title: 'DFx and joint development',
    intro: 'How we work with your engineering team before volume — design-for-excellence review, joint development and new product introduction. We work alongside your team from the design file through first production. We speak engineer.',
    standfirst: 'Choose a way to engage, or send a design file to start a DFM read.',
    heroPhoto: { label: 'Engineers reviewing a board file together' },
    heroStats: [['DFM', 'Design read'], ['JDM', 'Joint development'], ['NPI', 'First production'], ['ISO 27001', 'IP secured'],],
    subsLead: 'Three levels of engineering partnership, from a design review to a co-developed product.',
    subs: [
      { slug: 'dfx-dfm', icon: 'pen-tool', name: 'Design for excellence (DFx / DFM)', blurb: 'A manufacturability read on your design before commitment — yield, test and assembly risk flagged early.', tags: ['DFM', 'DFT', 'Yield review'] },
      { slug: 'jdm', icon: 'users', name: 'Joint development model (JDM)', blurb: 'Co-development where Hana engineering contributes to the design, not just the build.', tags: ['Co-design', 'Shared roadmap', 'NDA'] },
      { slug: 'npi', icon: 'rocket', name: 'New product introduction (NPI)', blurb: 'The bridge from a qualified design to repeatable volume — first articles, process qualification and ramp.', tags: ['First articles', 'Process qual', 'Ramp'] },
    ],
  },

};

/* hub picker options (parent groups) */
const HUB_OPTIONS = [
  { slug: 'pcba-box-build', label: 'PCBA & Box Build' },
  { slug: 'osat', label: 'OSAT' },
  { slug: 'microelectronics', label: 'Microelectronic Assembly' },
  { slug: 'rfid-smart-tags', label: 'RFID & Smart Tags' },
  { slug: 'automation', label: 'Automation' },
  { slug: 'dfx-jdm', label: 'DFx & JDM' },
];

/* resolve a sub-capability link: real page if it has SUBCAPS content, else '#' */
function hubSubHref(slug) {
  return (window.SUBCAPS && window.SUBCAPS[slug]) ? SUBCAP_PAGE : '#';
}

Object.assign(window, { CAP_HUBS, HUB_OPTIONS, hubSubHref, SUBCAP_PAGE });
