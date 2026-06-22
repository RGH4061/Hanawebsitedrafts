/* V1b — Circuit hero variant.
   Swaps the photo hero for the animated PCB circuit canvas from the
   Hana Circuit Wallpaper design. All sections below the fold are
   identical to V1b image-led. */

/* Diagrammatic capability icon set — 32-grid, 1.6 px stroke, single color.
   Matches the set defined in homepage-wireframes/capabilities-icons.jsx. */
function CapIcon({ name, size = 56, color = 'currentColor', stroke = 1.5 }) {
  const common = { width: size, height: size, viewBox: '0 0 32 32',
    fill: 'none', stroke: color, strokeWidth: stroke,
    strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'pcb':
      return (
        <svg {...common}>
          <rect x="5" y="5" width="22" height="22" rx="1.5" />
          <circle cx="10" cy="10" r="1.4" /><circle cx="22" cy="10" r="1.4" />
          <circle cx="10" cy="22" r="1.4" /><circle cx="22" cy="22" r="1.4" />
          <path d="M10 10 H16 V14 H22" /><path d="M10 22 H14 V18 H22" />
          <rect x="14" y="13" width="4" height="6" />
        </svg>);

    case 'chip':
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="11" />
          <path d="M5 16 H27 M16 5 V27" />
          <path d="M11 11 H21 V21 H11 Z" />
          <path d="M14 11 V21 M18 11 V21 M11 14 H21 M11 18 H21" />
          <path d="M14.5 5.2 L16 7 L17.5 5.2" />
        </svg>);

    case 'micro':
      return (
        <svg {...common}>
          <rect x="6" y="6" width="20" height="20" rx="2" />
          <circle cx="16" cy="16" r="4" />
          <path d="M16 2 V6 M16 26 V30 M2 16 H6 M26 16 H30" />
          <path d="M6 12 L3 12 M6 20 L3 20 M26 12 L29 12 M26 20 L29 20" />
          <path d="M12 6 V3 M20 6 V3 M12 26 V29 M20 26 V29" />
        </svg>);

    case 'gear':
      return (
        <svg {...common}>
          <path d="M16 3 L17.6 5.4 L20.4 4.6 L20.8 7.5 L23.6 8.4 L22.6 11.1 L24.8 13.2 L22.6 15.2 L23.6 18 L20.8 18.8 L20.4 21.7 L17.6 20.9 L16 23.3 L14.4 20.9 L11.6 21.7 L11.2 18.8 L8.4 18 L9.4 15.2 L7.2 13.2 L9.4 11.1 L8.4 8.4 L11.2 7.5 L11.6 4.6 L14.4 5.4 Z" />
          <circle cx="16" cy="13.2" r="3.2" />
          <path d="M16 26 V29" /><path d="M13.5 29 H18.5" />
        </svg>);

    case 'merge':
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" /><circle cx="8" cy="24" r="3" />
          <circle cx="24" cy="16" r="3" />
          <path d="M11 8 C16 8, 18 12, 21 15" />
          <path d="M11 24 C16 24, 18 20, 21 17" />
          <path d="M27 16 H30" />
        </svg>);

    default:return null;
  }
}

function HomepageV1bCircuit({ rightPanel = 'stats', middle = 'card' }) {
  const canvasRef = React.useRef(null);
  const mouseRef = React.useRef({ x: -9999, y: -9999 });
  const ctaRef = React.useRef(null);

  /* ── Expanded header navigation (mega-menu) ─────────────── */
  const [openMenu, setOpenMenu] = React.useState(null);
  const navCloseTimer = React.useRef(null);
  const openNav = (label) => {clearTimeout(navCloseTimer.current);setOpenMenu(label);};
  const closeNav = () => {navCloseTimer.current = setTimeout(() => setOpenMenu(null), 130);};

  React.useEffect(() => {
    if (window.HanaBG && ctaRef.current) {
      window.HanaBG.apply(ctaRef.current, { pattern: 'pcb', variant: 'dark', accent: 'cyan', fade: 'none' });
    }
  }, []);

  const sectionWrap = { maxWidth: 1080, margin: '0 auto', padding: '0 32px' };
  const eyebrow = {
    fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)'
  };

  const li = (n, size = 16, color = 'currentColor') =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {n === 'arrow-right' && <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>}
      {n === 'map-pin' && <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>}
      {n === 'chevron-down' && <path d="m6 9 6 6 6-6" />}
      {n === 'search' && <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>}
      {n === 'globe' && <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></>}
      {n === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
    </svg>;

  const markets = [
  { name: 'Automotive', body: 'Power modules, ADAS, sensors, EV charging, LED lighting.' },
  { name: 'Industrial & IoT', body: 'Environmental sensors, controllers, meters' },
  { name: 'Telecommunications', body: 'Network infrastructure and gateways, console servers' },
  { name: 'RFID', body: 'Inlays, tire tags, retail smart labels.' },
  { name: 'Optical & sensors', body: 'Camera modules and image sensors.' },
  { name: 'Consumer electronics', body: 'Smart phone sensors, IOT products & peripherals' },
  { name: 'Medical', body: 'Hearing aids, patient monitoring and diagnostics.' },
  { name: 'Access control', body: 'Smart cards, readers, security tokens.' },
  { name: 'Power management', body: 'Power supplies and conversion.' },
  { name: 'Data Centers', body: 'AI data centres cooling infrastructure' }];


  const capabilities = [
  { title: 'PCBA / Box build', icon: 'pcb',
    body: 'End-to-end electronics manufacturing. SMT, through-hole, box build, system integration.' },
  { title: 'OSAT', icon: 'chip',
    body: 'Outsourced semiconductor assembly and test — die attach, wire bonding, flip chip, final test.' },
  { title: 'Microelectronics', icon: 'micro',
    body: 'Hybrid microcircuits, MEMS, sensors, and precision interconnect.' },
  { title: 'Automation', icon: 'gear',
    body: 'Automated SMT lines, in-line AOI, and robotics-augmented box build for repeatable yield at volume.' },
  { title: 'RFID & Smart Tags', icon: 'globe',
    body: 'RFID tire tags and smart inlays — high-volume, high-precision encoding and assembly.' },
  { title: 'DFx & JDM Collaboration', icon: 'merge',
    body: 'Engineering teams embedded from NPI through production. We speak engineer.' }];


  const locs = [
  { country: 'Thailand', city: 'Bangkok', role: 'Headquarters' },
  { country: 'Thailand', city: 'Lamphun', role: 'PCBA · EMS' },
  { country: 'Thailand', city: 'Ayutthaya', role: 'OSAT · PCBA' },
  { country: 'Cambodia', city: 'Koh Kong', role: 'PCBA · Box Build · EMS' },
  { country: 'China', city: 'Jiaxing', role: 'EMS · OSAT · RFID' },
  { country: 'USA', city: 'Ohio', role: 'RFID & Optical' },
  { country: 'Korea', city: 'Cheongju', role: 'SiC module' }];

  /* Locations shown in the header mega-menu (excludes Bangkok HQ) */
  const navLocs = [
  { country: 'Thailand', city: 'Ayutthaya', role: 'OSAT · PCBA' },
  { country: 'Thailand', city: 'Lamphun', role: 'PCBA · EMS' },
  { country: 'USA', city: 'Ohio', role: 'RFID & Optical' },
  { country: 'China', city: 'Jiaxing', role: 'EMS · OSAT · RFID' },
  { country: 'Cambodia', city: 'Koh Kong', role: 'PCBA · Box Build · EMS' },
  { country: 'Korea', city: 'Cheongju', role: 'SiC module' }];


  /* Mega-menu content — reuses the real content arrays above */
  const navMenus = {
    About: {
      lead: { title: 'About Hana', body: 'A global electronics manufacturer since 1978 — EMS, OSAT, and microelectronics under one operating standard.', cta: 'Company overview' },
      cols: [
      { h: 'Company', items: ['Why Hana', 'Leadership', 'History', 'Quality & certifications'] },
      { h: 'Connect', items: ['Careers', 'Contact us'] }] },

    Markets: {
      lead: { title: 'Markets we serve', body: 'From automotive power modules to AI data-center infrastructure — production tuned to each market’s reliability bar.', cta: 'All markets' },
      grid: markets },

    Capabilities: {
      lead: { title: 'Capabilities', body: 'EMS and OSAT under one roof. Fewer handoffs from prototype to volume.', cta: 'All capabilities' },
      groups: [
      { h: 'PCBA & Box Build', items: ['SMT Assembly', 'COB Assembly', 'Box Build'] },
      { h: 'OSAT', items: ['Wafer Processing', 'Die Attach & Wire Bond', 'Flip Chip', 'System in Package (SiP)', 'Wafer Probe & Final Test', 'Wafer Level Packaging (WLCSP)'] },
      { h: 'Microelectronic Assembly', items: ['Flip Chip', 'MEMS & Sensor Assembly', 'Interconnect Solutions', 'Micro-Assembly'] },
      { h: 'RFID & Smart Tags', items: ['RFID Tire Tags', 'RFID Inlays'] },
      { h: 'Automation', items: ['In-line AOI & SPI', 'Robotic Handling & Test', 'Manufacturing Traceability'] },
      { h: 'DFx & JDM Collaboration', items: ['Design for Excellence (DFx / DFM)', 'Joint Development Model (JDM)', 'New Product Introduction (NPI)'] }] },

    Locations: {
      lead: { title: 'Global footprint', body: 'Manufacturing across Thailand, Cambodia, China, Korea, and the USA — geographic resilience built in.', cta: 'All locations' },
      locs: true },

    'Investor Relations': {
      lead: { title: 'Investor Relations', body: 'SET-listed (HANA). Financial reporting, governance, and shareholder information in one place.', cta: 'IR overview' },
      links: ['Investor News', 'Group Structure & Shareholders', 'Annual Report', 'Sustainability', 'Governance Documents', 'Investor Events & Contacts', 'Investor FAQ & Knowledge Hub'] } };


  const Ph = ({ label, ratio = '3/2' }) =>
  <div style={{
    aspectRatio: ratio, background: 'var(--surface)',
    border: '1px solid var(--line)', borderRadius: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', fontSize: 11,
    textAlign: 'center', padding: '0 16px', height: "400px", width: "400px"
  }}>
      <span style={{ opacity: .8 }}>[ {label} ]</span>
    </div>;

  /* ── PCB circuit canvas animation ───────────────────────── */
  React.useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    const container = cvs.parentElement;

    let W = 0,H = 0;
    function resize() {
      W = cvs.width = container.offsetWidth || 1280;
      H = cvs.height = container.offsetHeight || 680;
    }
    resize();

    const CFG = {
      gw: 90, gh: 68, fill: 0.60, maxP: 210, rate: 0.00042,
      spd: 195, trl: 15, dcy: 0.948, mR: 135, mS: 0.44,
      cP: 0.62, cD: 6, cF: 2, rb: 200
    };

    const BLUE = (a) => `rgba(18,131,221,${+a.toFixed(4)})`;
    const SOFT = (a) => `rgba(78,155,218,${+a.toFixed(4)})`;
    const TINT = (a) => `rgba(229,238,245,${+a.toFixed(4)})`;
    const DEEP = (a) => `rgba(14,74,124,${+a.toFixed(4)})`;
    const T = { VIA: 0, PAD: 1, HUB: 2 };

    let nodes = [],grid = {},pulses = [],sparks = [],ripples = [],frameN = 0;

    class Node {
      constructor(gx, gy) {
        this.gx = gx;this.gy = gy;
        this.x = gx * CFG.gw + (Math.random() - 0.5) * 3;
        this.y = gy * CFG.gh + (Math.random() - 0.5) * 3;
        const r = Math.random();
        this.type = r < 0.05 ? T.HUB : r < 0.22 ? T.PAD : T.VIA;
        this.r = this.type === T.HUB ? 5.0 : this.type === T.PAD ? 3.5 : 2.0;
        this.a = 0;this.nb = [];
      }
      activate(s = 1) {this.a = Math.min(1, this.a + s);}
      fire(depth = 0, fans = null) {
        this.activate();
        if (depth >= CFG.cD || pulses.length >= CFG.maxP || !this.nb.length) return;
        const f = fans ?? 1 + Math.floor(Math.random() * CFG.cF);
        [...this.nb].sort(() => Math.random() - 0.5).slice(0, f).
        forEach((nb) => pulses.push(new Pulse(this, nb, depth)));
      }
      draw() {
        const a = this.a,x = this.x,y = this.y;
        if (a > 0.008) {
          const gr = this.r * (3 + a * 9);
          const g = ctx.createRadialGradient(x, y, 0, x, y, gr);
          g.addColorStop(0, BLUE(0.06 + a * 0.46));
          g.addColorStop(0.38, BLUE(a * 0.14));
          g.addColorStop(1, BLUE(0));
          ctx.beginPath();ctx.arc(x, y, gr, 0, Math.PI * 2);
          ctx.fillStyle = g;ctx.fill();
        }
        if (this.type === T.PAD || this.type === T.HUB) {
          const s = this.r * (1 + a * 0.42);
          ctx.fillStyle = BLUE(0.30 + a * 0.68);
          ctx.fillRect(x - s, y - s, s * 2, s * 2);
          if (a > 0.22) {
            ctx.fillStyle = TINT(a * 0.88);
            ctx.fillRect(x - s * 0.44, y - s * 0.44, s * 0.88, s * 0.88);
          }
        } else {
          ctx.beginPath();ctx.arc(x, y, this.r * (1 + a * 0.38), 0, Math.PI * 2);
          ctx.strokeStyle = BLUE(0.38 + a * 0.60);ctx.lineWidth = 1.3 + a * 0.8;ctx.stroke();
          ctx.beginPath();ctx.arc(x, y, this.r * 0.38, 0, Math.PI * 2);
          ctx.fillStyle = a > 0.18 ? TINT(a * 0.88) : BLUE(0.45 + a * 0.45);ctx.fill();
        }
      }
    }

    class Pulse {
      constructor(from, to, depth = 0) {
        this.fx = from.x;this.fy = from.y;this.to = to;
        this.t = 0;this.depth = depth;this.done = false;this.trail = [];
        const dx = to.x - from.x,dy = to.y - from.y;
        this.horiz = Math.abs(dx) >= Math.abs(dy);
      }
      get x() {return this.fx + (this.to.x - this.fx) * this.t;}
      get y() {return this.fy + (this.to.y - this.fy) * this.t;}
      update(dt) {
        const dx = this.to.x - this.fx,dy = this.to.y - this.fy;
        const d = Math.hypot(dx, dy);
        if (d < 1) {this.done = true;return;}
        this.trail.unshift({ x: this.x, y: this.y });
        if (this.trail.length > CFG.trl) this.trail.pop();
        this.t += CFG.spd * dt / d;
        if (this.t >= 1) {
          this.t = 1;this.done = true;this.to.activate(1);
          const sc = this.to.type === T.HUB ? 10 : this.to.type === T.PAD ? 6 : 4;
          for (let i = 0; i < sc; i++) sparks.push(new Spark(this.to.x, this.to.y));
          if (Math.random() < CFG.cP) this.to.fire(this.depth + 1);
        }
      }
      draw() {
        if (this.trail.length < 2) return;
        ctx.lineCap = 'butt';ctx.lineJoin = 'miter';
        for (let i = 0; i < this.trail.length - 1; i++) {
          const t = 1 - i / this.trail.length;
          ctx.beginPath();
          ctx.moveTo(this.trail[i].x, this.trail[i].y);
          ctx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y);
          ctx.strokeStyle = SOFT(t * 0.70);ctx.lineWidth = 1.4 + t * 0.9;ctx.stroke();
        }
        const x = this.x,y = this.y;
        ctx.save();
        if (this.horiz) ctx.transform(1.65, 0, 0, 0.72, x - x * 1.65, y - y * 0.72);else
        ctx.transform(0.72, 0, 0, 1.65, x - x * 0.72, y - y * 1.65);
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 11);
        grd.addColorStop(0, 'rgba(255,255,255,1)');
        grd.addColorStop(0.25, SOFT(0.90));
        grd.addColorStop(0.60, BLUE(0.40));
        grd.addColorStop(1, BLUE(0));
        ctx.beginPath();ctx.arc(x, y, 11, 0, Math.PI * 2);ctx.fillStyle = grd;ctx.fill();
        ctx.restore();
        ctx.beginPath();ctx.arc(x, y, 1.9, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,1)';ctx.fill();
      }
    }

    class Spark {
      constructor(x, y) {
        this.x = x;this.y = y;
        const angles = [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2, Math.PI / 4, 3 * Math.PI / 4, 5 * Math.PI / 4, 7 * Math.PI / 4];
        const θ = angles[Math.floor(Math.random() * (Math.random() < 0.6 ? 4 : 8))];
        const s = 0.5 + Math.random() * 2.8;
        this.vx = Math.cos(θ) * s;this.vy = Math.sin(θ) * s;
        this.life = 0.82 + Math.random() * 0.18;
        this.dcy = 0.035 + Math.random() * 0.055;
        this.r = 0.6 + Math.random() * 1.5;
      }
      update() {this.x += this.vx;this.y += this.vy;this.vx *= 0.88;this.vy *= 0.88;this.life -= this.dcy;}
      draw() {
        if (this.life <= 0) return;
        ctx.beginPath();ctx.arc(this.x, this.y, Math.max(0, this.r * this.life), 0, Math.PI * 2);
        ctx.fillStyle = SOFT(Math.max(0, this.life * 0.84));ctx.fill();
      }
    }

    class Ripple {
      constructor(x, y) {this.x = x;this.y = y;this.r = 0;this.maxR = 240;this.life = 1;this.spd = 430;}
      update(dt) {this.r += this.spd * dt;this.life = Math.max(0, 1 - this.r / this.maxR);}
      draw() {
        if (this.life <= 0) return;
        ctx.strokeStyle = BLUE(this.life * 0.44);ctx.lineWidth = 1.5;
        ctx.strokeRect(this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        const ir = this.r * 0.50;
        if (ir > 20) {
          const il = Math.max(0, 1 - ir / this.maxR);
          ctx.strokeStyle = SOFT(il * 0.28);ctx.lineWidth = 1;
          ctx.strokeRect(this.x - ir, this.y - ir, ir * 2, ir * 2);
        }
      }
    }

    function buildGrid() {
      grid = {};nodes = [];
      const cols = Math.ceil(W / CFG.gw) + 1;
      const rows = Math.ceil(H / CFG.gh) + 1;
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          if (Math.random() < CFG.fill) {
            const n = new Node(c, r);nodes.push(n);grid[`${c},${r}`] = n;
          }
        }
      }
    }

    function buildConnections() {
      nodes.forEach((n) => n.nb = []);
      nodes.forEach((n) => {
        const R = grid[`${n.gx + 1},${n.gy}`];
        if (R && !n.nb.includes(R)) {n.nb.push(R);R.nb.push(n);}
        const D = grid[`${n.gx},${n.gy + 1}`];
        if (D && !n.nb.includes(D)) {n.nb.push(D);D.nb.push(n);}
      });
    }

    function init() {
      pulses = [];sparks = [];ripples = [];frameN = 0;
      buildGrid();buildConnections();
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          const n = nodes[Math.floor(Math.random() * nodes.length)];
          if (n) n.fire(0, 2 + Math.floor(Math.random() * 2));
        }
      }, 80);
    }

    const handleMouseMove = (e) => {
      const rect = cvs.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleClick = (e) => {
      const rect = cvs.getBoundingClientRect();
      const cx = e.clientX - rect.left,cy = e.clientY - rect.top;
      ripples.push(new Ripple(cx, cy));
      for (let i = 0; i < 20; i++) sparks.push(new Spark(cx, cy));
      const nearby = nodes.
      map((n) => ({ n, d: Math.hypot(n.x - cx, n.y - cy) })).
      filter((o) => o.d < 160).sort((a, b) => a.d - b.d).slice(0, 8).map((o) => o.n);
      nearby.forEach((n) => pulses.push(new Pulse({ x: cx, y: cy }, n, 0)));
      if (nearby.length) {nearby[0].activate(1);nearby[0].fire(1, CFG.cF + 2);}
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    let lastT = 0,frameId;

    function tick(now) {
      frameId = requestAnimationFrame(tick);
      const dt = Math.min((now - lastT) / 1000, 0.05);
      lastT = now;frameN++;

      ctx.fillStyle = 'rgba(3,10,23,1)';
      ctx.fillRect(0, 0, W, H);

      const br = 0.5 + 0.5 * Math.sin(now * 0.00072);
      const cGrd = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.min(W, H) * 0.58);
      cGrd.addColorStop(0, DEEP(0.058 + br * 0.040));
      cGrd.addColorStop(1, 'rgba(3,10,23,0)');
      ctx.fillStyle = cGrd;ctx.fillRect(0, 0, W, H);

      ctx.save();
      ctx.strokeStyle = BLUE(0.055);ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += CFG.gw) {ctx.beginPath();ctx.moveTo(x, 0);ctx.lineTo(x, H);ctx.stroke();}
      for (let y = 0; y < H; y += CFG.gh) {ctx.beginPath();ctx.moveTo(0, y);ctx.lineTo(W, y);ctx.stroke();}
      ctx.restore();

      if (frameN % CFG.rb === 0) buildConnections();

      ctx.save();ctx.lineCap = 'butt';
      const seen = new Set();
      nodes.forEach((n) => {
        n.nb.forEach((nb) => {
          const key = n.gx < nb.gx || n.gx === nb.gx && n.gy < nb.gy ?
          `${n.gx},${n.gy}-${nb.gx},${nb.gy}` :
          `${nb.gx},${nb.gy}-${n.gx},${n.gy}`;
          if (seen.has(key)) return;
          seen.add(key);
          const act = Math.max(n.a, nb.a);
          ctx.beginPath();ctx.moveTo(n.x, n.y);ctx.lineTo(nb.x, nb.y);
          ctx.strokeStyle = BLUE(0.085 + act * 0.32);ctx.lineWidth = 0.9 + act * 1.1;ctx.stroke();
        });
      });
      ctx.restore();

      nodes.forEach((n) => {n.a *= CFG.dcy;});
      nodes.forEach((n) => {
        const d = Math.hypot(n.x - mouseRef.current.x, n.y - mouseRef.current.y);
        if (d < CFG.mR) n.activate((1 - d / CFG.mR) * CFG.mS * dt * 3.5);
      });
      nodes.forEach((n) => n.draw());
      nodes.forEach((n) => {
        if (n.a < 0.08 && Math.random() < CFG.rate && n.nb.length > 0)
        n.fire(0, 1 + Math.floor(Math.random() * CFG.cF));
      });

      pulses = pulses.filter((p) => !p.done);
      pulses.forEach((p) => {p.update(dt);p.draw();});
      ripples = ripples.filter((r) => r.life > 0);
      ripples.forEach((r) => {r.update(dt);r.draw();});
      sparks = sparks.filter((s) => s.life > 0);
      sparks.forEach((s) => {s.update();s.draw();});
    }

    init();
    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
    };
  }, []);

  /* ── Render ──────────────────────────────────────────────── */
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', fontFamily: 'var(--font-text)' }}>
      <style>{`
        @keyframes v1bc-blink {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(.65); }
        }
        .v1bc-dot { animation: v1bc-blink 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── Header — H4 (utility bar + main nav) ─────────── */}
      <header style={{ background: '#fff', fontFamily: 'var(--font-text)' }}>
        {/* Utility bar */}
        <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.78)', fontSize: 12 }}>
          <div style={{ ...sectionWrap, padding: '0 32px', height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
              <span style={{ ...eyebrow, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-text)' }}>SET</span>
              <span style={{ color: '#fff' }}>HANA</span>
              <span>฿24.50</span>
              <span style={{ color: '#7EC8FF' }}>+1.24%</span>
            </div>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>News</a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 4, padding: '4px 10px', minWidth: 220 }}>
                {li('search', 12, 'rgba(255,255,255,0.6)')}
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>Search capabilities, markets, news…</span>
              </div>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>{li('globe', 13)} EN</a>
            </div>
          </div>
        </div>
        {/* Main nav */}
        <div style={{ borderBottom: '1px solid var(--line)', position: 'relative' }}
        onMouseLeave={closeNav}>
          <style>{`
            .v1bc-navlink { transition: color 140ms ease; }
            .v1bc-navlink:hover, .v1bc-navlink.is-open { color: var(--hana-blue) !important; }
            .v1bc-navchev { transition: transform 180ms ease; display: inline-flex; }
            .v1bc-navlink.is-open .v1bc-navchev { transform: rotate(180deg); }
            .v1bc-mega { animation: v1bc-mega-in 160ms ease both; }
            @keyframes v1bc-mega-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
            .v1bc-mega-card { transition: background 130ms ease; border-radius: 6; text-decoration: none; color: inherit; }
            .v1bc-mega-card:hover { background: var(--bg); }
            .v1bc-mega-card:hover .v1bc-mega-name { color: var(--hana-blue); }
            .v1bc-mega-tlink { transition: color 130ms ease; }
            .v1bc-mega-tlink:hover { color: var(--hana-blue) !important; }
            .v1bc-mega-gh { color: var(--ink); transition: color 130ms ease; text-decoration: none; }
            .v1bc-mega-gh:hover { color: var(--hana-blue); }
          `}</style>
          <div style={{ ...sectionWrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
            <img src="assets/hana-logo-full-trimmed.png" alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
            <nav style={{ display: 'flex', gap: 34, marginLeft: 20 }}>
              {['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'].map((l) => {
                const hasMenu = !!navMenus[l];
                return (
                  <a key={l} href={window.hrefFor(l)}
                  className={'v1bc-navlink' + (openMenu === l ? ' is-open' : '')}
                  onMouseEnter={() => openNav(hasMenu ? l : null)}
                  style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {l}{hasMenu && <span className="v1bc-navchev">{li('chevron-down', 13)}</span>}
                  </a>);

              })}
            </nav>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <a href={window.hrefFor('Contact')} className="hana-btn hana-btn-secondary" style={{ padding: '11px 24px', fontSize: 12, whiteSpace: 'nowrap' }}>Contact</a>
            </div>
          </div>

          {/* Expanded navigation panel */}
          {openMenu && navMenus[openMenu] &&
          <div className="v1bc-mega"
          onMouseEnter={() => openNav(openMenu)}
          style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 60,
            background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
            boxShadow: '0 24px 48px rgba(3,10,23,.12)' }}>
              <div style={{ ...sectionWrap, padding: '36px 32px 40px', display: 'grid',
              gridTemplateColumns: navMenus[openMenu].groups ? '1fr' : '270px 1fr', gap: 56, alignItems: 'start' }}>
                {/* Lead column — hidden for Capabilities to free horizontal space */}
                {!navMenus[openMenu].groups &&
              <div style={{ borderRight: '1px solid var(--line)', paddingRight: 40 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12 }}>
                    {navMenus[openMenu].lead.title}
                  </div>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 20px', textWrap: 'pretty' }}>
                    {navMenus[openMenu].lead.body}
                  </p>
                  <a href={window.hrefFor(openMenu)} className="hana-link" style={{ fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                    {navMenus[openMenu].lead.cta} {li('arrow-right', 13, 'var(--hana-blue)')}
                  </a>
                </div>
              }

                {/* Content column */}
                <div>
                  {/* Markets / Capabilities — name + body grid */}
                  {navMenus[openMenu].grid &&
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 28, rowGap: 2 }}>
                      {navMenus[openMenu].grid.map((it) =>
                  <a key={it.name} href={window.hrefFor(it.name)} className="v1bc-mega-card" style={{ display: 'block', padding: '10px 12px' }}>
                          <div className="v1bc-mega-name" style={{ fontSize: 13, fontWeight: 600, marginBottom: 2, transition: 'color 130ms ease' }}>{it.name}</div>
                          <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.45 }}>{it.body}</div>
                        </a>
                  )}
                    </div>
                }

                  {/* Capabilities — numbered groups with sub-items */}
                  {navMenus[openMenu].groups &&
                <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${navMenus[openMenu].groups.length}, 1fr)`, gap: 24 }}>
                      {navMenus[openMenu].groups.map((g, gi) =>
                    <div key={g.h}>
                          <a href={window.hrefFor(g.h)} className="v1bc-mega-gh" style={{ display: 'inline-block', fontSize: 13, fontWeight: 700, lineHeight: 1.3, marginBottom: 12, textWrap: 'balance' }}>{g.h}</a>
                          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {g.items.map((i) =>
                        <li key={i}>
                                <a href={window.hrefFor(i)} className="v1bc-mega-tlink" style={{ fontSize: 12.5, color: 'var(--ink-2)', textDecoration: 'none', lineHeight: 1.35, display: 'block' }}>{i}</a>
                              </li>
                        )}
                          </ul>
                        </div>
                    )}
                    </div>
                <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
                  <a href={window.hrefFor(openMenu)} className="hana-link" style={{ fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                    {navMenus[openMenu].lead.cta} {li('arrow-right', 13, 'var(--hana-blue)')}
                  </a>
                </div>
                </React.Fragment>
                }
                  {navMenus[openMenu].cols &&
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${navMenus[openMenu].cols.length}, 1fr)`, gap: 36 }}>
                      {navMenus[openMenu].cols.map((col) =>
                  <div key={col.h}>
                          <div className="hana-spec-label" style={{ marginBottom: 14, color: 'var(--ink)' }}>{col.h}</div>
                          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {col.items.map((i) =>
                      <li key={i}><a href={i === 'Why Hana' ? 'about.html' : '#'} className="v1bc-mega-tlink" style={{ fontSize: 13, color: 'var(--ink-2)', textDecoration: 'none' }}>{i}</a></li>
                      )}
                          </ul>
                        </div>
                  )}
                    </div>
                }

                  {/* Locations — grouped by country */}
                  {navMenus[openMenu].locs &&
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 40, rowGap: 26 }}>
                      {Object.entries(navLocs.reduce((acc, l) => {(acc[l.country] = acc[l.country] || []).push(l);return acc;}, {})).map(([country, cities]) =>
                  <div key={country}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', paddingBottom: 9, marginBottom: 4, borderBottom: '1px solid var(--line)' }}>{country}</div>
                          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
                            {cities.map((l) =>
                      <li key={l.city}>
                                <a href={window.hrefFor(l.city)} className="v1bc-mega-card" style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '7px 8px' }}>
                                  <span style={{ color: 'var(--hana-blue)', fontWeight: 700, fontSize: 13, lineHeight: 1.2, flexShrink: 0 }}>&rsaquo;</span>
                                  <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <span className="v1bc-mega-name" style={{ fontSize: 13, fontWeight: 600, transition: 'color 130ms ease' }}>{l.city}</span>
                                    <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>{l.role}</span>
                                  </span>
                                </a>
                              </li>
                      )}
                          </ul>
                        </div>
                  )}
                    </div>
                }

                  {/* Investor Relations — flat link list */}
                  {navMenus[openMenu].links &&
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 40, rowGap: 2 }}>
                      {navMenus[openMenu].links.map((i) =>
                  <a key={i} href={window.hrefFor(i)} className="v1bc-mega-card" style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 10px' }}>
                          <span style={{ color: 'var(--hana-blue)', fontWeight: 700, fontSize: 13 }}>&rsaquo;</span>
                          <span className="v1bc-mega-name" style={{ fontSize: 13, fontWeight: 600, transition: 'color 130ms ease' }}>{i}</span>
                        </a>
                  )}
                    </div>
                }
                </div>
              </div>
            </div>
          }
        </div>
      </header>

      {/* ── Circuit hero ─────────────────────────────────────── */}
      <section style={{ position: 'relative', background: '#030a17', overflow: 'hidden', cursor: 'crosshair', height: "550px" }}>
        {/* Canvas — fills the section */}
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, display: 'block', height: "600px" }} />

        {/* Directional text fade */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(100deg, rgba(3,10,23,.55) 0%, rgba(3,10,23,.28) 44%, transparent 70%)' }} />
        {/* Vignette */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3,
          background: 'radial-gradient(ellipse 95% 85% at 50% 50%, transparent 28%, rgba(3,10,23,.70) 100%)' }} />

        {/* Hero headline + CTAs */}
        <div style={{ position: 'absolute', zIndex: 15, top: '50%', left: 52,
          transform: 'translateY(-50%)', maxWidth: 520, pointerEvents: 'none' }}>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9,
            padding: '6px 14px 6px 10px',
            border: '1px solid rgba(18,131,221,.28)', borderRadius: 999,
            background: 'rgba(18,131,221,.07)',
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            color: 'rgba(78,155,218,.85)', letterSpacing: '.04em', marginBottom: 28 }}>
            <div className="v1bc-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#1283DD', flexShrink: 0 }} />
            EMS &middot; OSAT &middot; Microelectronics
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 58, fontWeight: 700,
            letterSpacing: '-0.032em', lineHeight: 1.04, color: '#fff',
            margin: '0 0 20px', textWrap: 'pretty' }}>
            Electronics Manufacturing<br />That Goes Further.
          </h1>

          <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, fontWeight: 400,
            lineHeight: 1.6, color: 'rgba(229,238,245,.55)',
            margin: '0 0 36px', maxWidth: 470, textWrap: 'pretty' }}>
            A world-class independent electronics manufacturing services (EMS) and outsourced semiconductor assembly and test (OSAT) company — rooted in Southeast Asia, operating worldwide.
          </p>

          <div style={{ display: 'flex', gap: 12, pointerEvents: 'auto' }}>
            <a href={window.hrefFor('Contact')} className="hana-btn hana-btn-primary">Talk to engineering {li('arrow-right', 14, '#fff')}</a>
            <a href={window.hrefFor('Capabilities')} className="hana-btn" style={{ background: 'transparent', color: 'rgba(255,255,255,.72)', border: '1px solid rgba(255,255,255,.22)', borderRadius: 4 }}>
              Our capabilities
            </a>
          </div>
        </div>

        {/* ── Right panel — stats / video / video-stats ── */}
        {rightPanel === 'stats' &&
        <aside style={{ position: 'absolute', zIndex: 15, top: '50%', right: 52,
          transform: 'translateY(-50%)',
          background: 'rgba(14,74,124,.22)', border: '1px solid rgba(18,131,221,.20)',
          borderRadius: 14, padding: '28px 26px',
          backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
          width: 210, pointerEvents: 'none' }}>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 600,
            letterSpacing: '.1em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.42)', marginBottom: 20 }}>
              Independent &middot; Vertically integrated
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 14px' }}>
              {[['3', 'Countries'], ['20+', 'Years tenured'], ['9', 'Facilities'], ['ISO 9001', 'IATF 16949']].map(([val, key]) =>
            <div key={key}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: val.length > 5 ? 15 : 28,
                fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#fff', marginBottom: 4 }}>{val}</div>
                  <div style={{ fontFamily: 'var(--font-text)', fontSize: 11, color: 'rgba(255,255,255,.50)' }}>{key}</div>
                </div>
            )}
            </div>
          </aside>
        }

        {(rightPanel === 'video' || rightPanel === 'video-stats') &&
        <aside style={{ position: 'absolute', zIndex: 15, top: '50%', right: 40,
          transform: 'translateY(-50%)',
          width: 580, pointerEvents: 'auto' }}>

            {/* Video area — thumbnail placeholder */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9',
            background: '#030a17',
            border: '1px solid rgba(18,131,221,.22)',
            borderRadius: 10, overflow: 'hidden' }}>

              {/* Thumbnail image */}
              <img src="assets/video-placeholder-factory.jpg" alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', display: 'block' }} />

              {/* Subtle dark scrim for play-button legibility */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1,
              background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(3,10,23,.35) 0%, rgba(3,10,23,.05) 70%)' }} />

              {/* Left-edge fade — blends seamlessly into the circuit canvas */}
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 100, zIndex: 2,
              background: 'linear-gradient(to right, rgba(3,10,23,.95) 0%, transparent 100%)' }} />

              {/* Play button — centre */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 3,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                width: 64, height: 64, borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,.85)',
                background: 'rgba(3,10,23,.45)',
                backdropFilter: 'blur(2px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                userSelect: 'none'
              }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" stroke="none" style={{ marginLeft: 3 }}>
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Stats strip — only for video-stats variant, sits below the video.
            Holds the founding/headline stats that previously lived in the
            spec block below the hero. */}
            {rightPanel === 'video-stats' &&
          <div style={{ marginTop: 14,
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            background: 'rgba(14,74,124,.18)',
            border: '1px solid rgba(18,131,221,.18)',
            borderRadius: 8, overflow: 'hidden' }}>
                {[['1978', 'Founded'], ['5', 'Countries'], ['8000+', 'Employees'], ['1.7M', 'Sq ft built']].map(([val, key], i) =>
            <div key={key} style={{ padding: '12px 14px',
              borderRight: i < 3 ? '1px solid rgba(18,131,221,.15)' : 'none' }}>
                    <div style={{ fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: '#fff' }}>{val}</div>
                    <div style={{ fontFamily: 'var(--font-text)', fontSize: 11,
                color: 'rgba(255,255,255,.5)', marginTop: 4, letterSpacing: '.04em' }}>{key}</div>
                  </div>
            )}
              </div>
          }
          </aside>
        }

        {/* Bottom fade — blends into spec block below */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, zIndex: 10, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, rgba(3,10,23,.60))' }} />
      </section>

      {/* ── Spec block ───────────────────────────────────────────
                                               The 'video-stats' variant promotes the founding stats into the
                                               sub-video strip up top, so this bar is suppressed entirely.
                                               Other variants keep the original founding spec. */}
      {rightPanel !== 'video-stats' &&
      <section style={{ background: 'var(--bg)' }}>
        <div style={{ ...sectionWrap, padding: '56px 32px' }}>
          <div className="hana-spec-block">
            {[['Founded', '1978'], ['Footprint', '5 countries'], ['Services', 'EMS · OSAT'],
            ['Employees', '8000+'], ['Manufacturing space', '1.7 Million Sqft']].map(([l, v]) =>
            <div key={l} className="hana-spec-item">
                <div className="hana-spec-label">{l}</div>
                <div className="hana-spec-value">{v}</div>
              </div>
            )}
          </div>
        </div>
      </section>
      }

      {/* ── Dark panel — what sets us apart ───────────────────
                                       middle="slab"  → full-bleed dark, page's single bold moment
                                       middle="light" → full-bleed surface-gray with technical-drawing corners
                                       middle="card"  → contained rounded dark card (default) */}
      {middle === 'slab' ?
      <section style={{ background: 'var(--hana-blue-deep)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ ...sectionWrap, padding: '104px 32px', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 72, alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>What sets us apart</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff', maxWidth: 560, marginBottom: 24, textWrap: 'balance' }}>
                  EMS and OSAT, under one group. Almost no competitor in Asia does both.
                </h2>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.7)', maxWidth: 460, marginBottom: 36, textWrap: 'pretty' }}>
                  Programs that span PCB assembly and semiconductor packaging stay inside Hana — single-source accountability, from die to box build.
                </p>
                <a href={window.hrefFor('About')} className="hana-btn hana-btn-on-dark">Why Hana {li('arrow-right', 14, 'var(--hana-blue)')}</a>
              </div>
              <div><Ph label="Clean-room / wafer detail · 4:5" ratio="4/5" /></div>
            </div>
          </div>
          <img src="assets/hana-mark-white.svg" alt="" style={{ position: 'absolute', right: -80, bottom: -80, width: 440, opacity: 0.05, pointerEvents: 'none' }} />
        </section> :
      middle === 'light' ? (
      /* ── Light-tech full-bleed ──────────────────────────
              White-to-surface base. Engineering-drawing detailing:
              · faint silkscreen dot-grid behind, masked at edges
              · PCB register mark + mono coordinate readout, top-right
              · hairline blue rule down the inner left margin
            All decoration sits behind the content (zIndex 0); content is zIndex 1. */
      <section style={{ background: 'var(--surface)', color: 'var(--ink)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', height: "750px" }}>
          {/* silkscreen dot-grid */}
          <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'radial-gradient(rgba(18,131,221,0.16) 1px, transparent 1.4px)',
          backgroundSize: '22px 22px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)'
        }} />
          {/* sparser register marks, larger pitch */}
          <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'radial-gradient(rgba(18,131,221,0.22) 1.4px, transparent 2px)',
          backgroundSize: '132px 132px',
          backgroundPosition: '11px 11px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)'
        }} />
          {/* hairline blue trace down inner left rule */}
          <div aria-hidden="true" style={{
          position: 'absolute', top: 0, bottom: 0, left: 32, width: 1, zIndex: 0,
          background: 'linear-gradient(to bottom, transparent 0, rgba(18,131,221,0.28) 14%, rgba(18,131,221,0.28) 86%, transparent 100%)',
          pointerEvents: 'none'
        }} />

          {/* TOP-RIGHT — PCB register mark + mono coordinate readout */}
          <div aria-hidden="true" style={{ position: 'absolute', top: 28, right: 28, zIndex: 0, display: 'flex', alignItems: 'center', gap: 12, color: 'var(--hana-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(15,32,52,0.55)', letterSpacing: '0.04em' }}>
              X 1024.000  ·  Y 0768.000  ·  Δ 0.05mm
            </span>
            {/* register crosshair: concentric ring + cross */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25">
              <circle cx="20" cy="20" r="13" opacity="0.55" />
              <circle cx="20" cy="20" r="6" opacity="0.85" />
              <line x1="20" y1="0" x2="20" y2="10" opacity="0.85" />
              <line x1="20" y1="30" x2="20" y2="40" opacity="0.85" />
              <line x1="0" y1="20" x2="10" y2="20" opacity="0.85" />
              <line x1="30" y1="20" x2="40" y2="20" opacity="0.85" />
              <circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <div style={{ ...sectionWrap, padding: '104px 32px', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 72, alignItems: 'start' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--hana-blue)', marginBottom: 20 }}>What sets us apart</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 50, lineHeight: 1.1, letterSpacing: '-0.022em', wordSpacing: '0.01em', color: 'var(--ink)', maxWidth: 600, marginBottom: 24, textWrap: 'balance' }}>From wafer to finished product. EMS & OSAT under one group. One Partner.

              </h2>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: 460, marginBottom: 36, textWrap: 'pretty' }}>Programs that span PCB assembly and semiconductor packaging within one group — single-source accountability, from die to box build.

We hold that work to the most stringent quality standards — ISO 9001, IATF 16949, ISO 13485, ISO 14001, ISO 45001, and ISO 27001 — earning recognition from some of the world's most demanding customers.</p>
                <a href={window.hrefFor('About')} className="hana-btn hana-btn-primary">Why Hana {li('arrow-right', 14, '#fff')}</a>
              </div>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 8, border: '1px solid var(--line)' }}>
                <img src="uploads/cleanroom-smt-line.png" alt="SMT line operator at the inspection console — Hana cleanroom"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', left: 12, bottom: 10, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.04em', textShadow: '0 1px 4px rgba(0,0,0,0.55)' }}>
                  SMT LINE · INSPECTION CONSOLE
                </div>
              </div>
            </div>
          </div>
        </section>) :

      <section style={{ background: 'var(--bg)' }}>
        <div style={{ ...sectionWrap, padding: '32px' }}>
          <div style={{ background: 'var(--hana-blue-deep)', color: '#fff', borderRadius: 14, padding: '64px 48px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 18 }}>What sets us apart</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: 560, marginBottom: 20 }}>EMS and OSAT, under one group. 

                </h2>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 520, marginBottom: 28 }}>
                  Programs that span PCB assembly and semiconductor packaging stay inside Hana — single-source accountability, from die to box build.
                </p>
                <a href={window.hrefFor('About')} className="hana-btn hana-btn-on-dark">Why Hana {li('arrow-right', 14, 'var(--hana-blue)')}</a>
              </div>
              <div><Ph label="Clean-room / wafer detail · 4:5" ratio="4/5" /></div>
            </div>
            <img src="assets/hana-mark-white.svg" alt="" style={{ position: 'absolute', right: -60, bottom: -60, width: 320, opacity: 0.06 }} />
          </div>
        </div>
      </section>
      }

      {/* ── Markets + Capabilities — one shared textured ground ─── */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>

        {/* Shared PCB drill-grid texture spanning Markets + Capabilities */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: [
          'radial-gradient(rgba(18,131,221,0.10) 1px, transparent 1.4px)',
          'radial-gradient(rgba(18,131,221,0.18) 1.4px, transparent 2px)'].
          join(', '),
          backgroundSize: '22px 22px, 132px 132px',
          backgroundPosition: '0 0, 11px 11px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, #000 56px, #000 calc(100% - 56px), transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0, #000 56px, #000 calc(100% - 56px), transparent 100%)'
        }} />
        {/* Thin silkscreen trace along the left rule, full height */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, bottom: 0, left: 32, width: 1, zIndex: 0,
          background: 'linear-gradient(to bottom, transparent 0, rgba(18,131,221,0.22) 6%, rgba(18,131,221,0.22) 94%, transparent 100%)',
          pointerEvents: 'none'
        }} />

      {/* ── Markets — Option A·3 bento mosaic + chamfered tiles on textured ground ─── */}
      {(() => {
          // Look up by name so grid placement is explicit rather than index-based
          const byName = Object.fromEntries(markets.map((m) => [m.name, m]));

          // Real images for keyed markets; for everything else the placeholder
          // is a faint circuit-texture inside the tile itself.
          const imgFor = {
            'Automotive': { src: 'uploads/automotive.jpeg', pos: '60% 45%' },
            'Industrial & IoT': { src: 'uploads/parej-richard-pxs2yJ6Lb9k-unsplash.jpg', pos: 'center' },
            'Telecommunications': { src: 'uploads/telecommunications.jpeg', pos: '64% 42%' },
            'RFID': { src: 'uploads/rfid-tire.jpeg', pos: '46% 46%' },
            'Medical': { src: 'uploads/medical.jpeg', pos: '46% 34%' }
          };

          // PCB-pad chamfer — one corner cut, 22px notch
          const chamfer = (corner) => {
            const c = 22;
            switch (corner) {
              case 'tr':return `polygon(0 0, calc(100% - ${c}px) 0, 100% ${c}px, 100% 100%, 0 100%)`;
              case 'tl':return `polygon(${c}px 0, 100% 0, 100% 100%, 0 100%, 0 ${c}px)`;
              case 'br':return `polygon(0 0, 100% 0, 100% calc(100% - ${c}px), calc(100% - ${c}px) 100%, 0 100%)`;
              case 'bl':return `polygon(0 0, 100% 0, 100% 100%, ${c}px 100%, 0 calc(100% - ${c}px))`;
              default:return undefined;
            }
          };

          const Tile = ({ name, size = 'sq', corner, area }) => {
            const m = byName[name];
            const heroish = size === 'hero';
            const img = imgFor[name];
            const clipPath = corner ? chamfer(corner) : undefined;
            return (
              <a href={window.hrefFor('Capabilities')} className="v1bc-ma-card" style={{
                position: 'relative', overflow: 'hidden', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,.08)',
                background: '#0a0a0a', display: 'block',
                borderRadius: clipPath ? 0 : 8,
                clipPath, gridArea: area
              }}>
              {img ?
                <img src={img.src} alt="" style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: img.pos
                }} /> :

                <div style={{ position: 'absolute', inset: 0, background: '#0d1117',
                  backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
                  backgroundSize: heroish ? '48px 36px' : '32px 24px' }} />
                }
              {/* Bottom fade */}
              <div style={{ position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,.92) 0%, rgba(0,0,0,.48) 45%, rgba(0,0,0,.10) 72%, transparent 100%)' }} />
              {/* Text */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: heroish ? '24px' : '16px', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                  <div style={{ minWidth: 0 }}>
                    <h3 className="v1bc-ma-name" style={{
                        fontFamily: 'var(--font-display)', fontWeight: 600,
                        fontSize: heroish ? 26 : 15,
                        letterSpacing: '-0.018em', lineHeight: 1.15,
                        color: '#fff', margin: heroish ? '0 0 8px' : '0 0 5px',
                        transition: 'color 150ms ease'
                      }}>{m.name}</h3>
                    <p style={{
                        fontFamily: 'var(--font-text)',
                        fontSize: heroish ? 13 : 11,
                        lineHeight: 1.45,
                        color: heroish ? 'rgba(255,255,255,.78)' : 'rgba(255,255,255,.62)',
                        margin: 0, maxWidth: heroish ? 360 : 'none'
                      }}>{m.body}</p>
                  </div>
                  <div className="v1bc-ma-arrow" style={{ flexShrink: 0, opacity: 0 }}>
                    {li('arrow-right', heroish ? 16 : 13, 'rgba(255,255,255,.8)')}
                  </div>
                </div>
              </div>
            </a>);

          };

          return (
            <section style={{
              position: 'relative', overflow: 'hidden'
            }}>
            <style>{`
              .v1bc-ma-card { transition: border-color 150ms ease; }
              .v1bc-ma-card:hover { border-color: rgba(18,131,221,.55) !important; }
              .v1bc-ma-card:hover .v1bc-ma-name { color: #7EC8FF !important; }
              .v1bc-ma-card:hover .v1bc-ma-arrow { opacity: 1 !important; transform: translateX(3px); }
              .v1bc-ma-card .v1bc-ma-arrow { transition: opacity 150ms ease, transform 150ms ease; }
            `}</style>

            <div style={{ ...sectionWrap, padding: '64px 32px', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, gap: 32 }}>
                <div>
                  <div className="hana-spec-label" style={{ marginBottom: 14 }}>Markets we serve</div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36,
                      letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--ink)', margin: 0 }}>
                    Markets we serve. Driven by decades of experience.
                  </h2>
                </div>
                <a href={window.hrefFor('Capabilities')} className="hana-link" style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap',
                    display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  All markets {li('arrow-right', 13, 'var(--hana-blue)')}
                </a>
              </div>

              {/* Bento grid — 5 cols × 3 rows of 200px. hero(2×2) + ind(1×2 tall) + 7 sq + data(2×1 wide) */}
              <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gridTemplateRows: 'repeat(3, 200px)',
                  gridTemplateAreas: `
                  "hero hero ind  tel  rfid"
                  "hero hero ind  opt  cons"
                  "med  acc  pwr  data data"
                `,
                  gap: 10
                }}>
                <Tile name="Automotive" size="hero" corner="br" area="hero" />
                <Tile name="Industrial & IoT" size="tall" corner="tr" area="ind" />
                <Tile name="Telecommunications" area="tel" />
                <Tile name="RFID" corner="tr" area="rfid" />
                <Tile name="Optical & sensors" area="opt" />
                <Tile name="Consumer electronics" corner="tr" area="cons" />
                <Tile name="Medical" corner="bl" area="med" />
                <Tile name="Access control" area="acc" />
                <Tile name="Power management" area="pwr" />
                <Tile name="Data Centers" size="wide" corner="br" area="data" />
              </div>
            </div>
          </section>);

        })()}

      {/* ── Capabilities — C2 icon carousel (shares the Markets textured ground) ─── */}
      <section style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
        <div style={{ ...sectionWrap, padding: "30px 32px 96px", position: 'relative', zIndex: 1 }}>
          <div className="hana-spec-label" style={{ marginBottom: 12 }}>Capabilities</div>
          <h2 className="hana-h2" style={{ marginBottom: 8 }}>Or browse by capability.</h2>
          <p className="hana-body" style={{ marginBottom: 40 }}>Six capability families spanning PCBA, OSAT, microelectronics, RFID, automation, and DFx.</p>
          <C2HomepageCaps />
        </div>
      </section>
      </div>

      {/* ── Locations ────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <style>{`
          .v1bc-loc-card { transition: background 150ms ease; }
          .v1bc-loc-card:hover { background: var(--bg) !important; }
          .v1bc-loc-card:hover .v1bc-loc-cta { color: var(--hana-blue-deep) !important; }
          .v1bc-loc-card:hover .v1bc-loc-cta-arrow { transform: translateX(3px); }
          .v1bc-loc-cta-arrow { transition: transform 150ms ease; display: inline-flex; }
        `}</style>
        <div style={{ ...sectionWrap, padding: '96px 32px', display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 64, alignItems: 'flex-start' }}>
          <div>
            <div style={{ marginBottom: 28, borderRadius: 8, overflow: 'hidden', aspectRatio: '16/9' }}>
              <img
                src="assets/hana-bkk.jpg"
                alt="Hana headquarters building, Bangkok"
                style={{ display: 'block', width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="hana-spec-label" style={{ marginBottom: 12 }}>Locations</div>
            <h2 className="hana-h2" style={{ marginBottom: 16 }}>A global footprint. One operating standard.</h2>
            <p className="hana-body" style={{ marginBottom: 24 }}>
              Manufacturing across Thailand, Cambodia, China, and the USA gives your supply chain real geographic resilience — not as a marketing line, as a continuity plan.
            </p>
            <a href={window.hrefFor('Locations')} className="hana-link" style={{ fontSize: 12, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.1em', textTransform: 'uppercase' }}>
              View all locations {li('arrow-right', 13, 'var(--hana-blue)')}
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
            background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden' }}>
            {locs.map((l, i) =>
            <a key={l.city} href={window.hrefFor(l.city)} className="v1bc-loc-card"
            style={{ background: '#fff', padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 6,
              gridColumn: i === 0 ? '1 / -1' : 'auto',
              textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {li('map-pin', 14, 'var(--hana-blue)')}
                    <span className="hana-spec-label">{l.country}</span>
                  </div>
                  {l.role === 'Headquarters' &&
                <span style={{ fontFamily: 'var(--font-text)', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--hana-blue)', padding: '3px 6px', border: '1px solid var(--hana-blue-tint)', borderRadius: 3 }}>HQ</span>
                }
                </div>
                <div className="hana-spec-value">{l.city}</div>
                <div className="hana-data" style={{ fontSize: 12, color: 'var(--ink-3)' }}>{l.role}</div>
                {l.role !== 'Headquarters' &&
              <span className="v1bc-loc-cta" style={{ marginTop: 'auto', paddingTop: 14,
                fontFamily: 'var(--font-text)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--hana-blue)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Explore <span className="v1bc-loc-cta-arrow">{li('arrow-right', 12, 'currentColor')}</span>
                  </span>
              }
              </a>
            )}
          </div>
        </div>
      </section>


      {/* ── CTA ──────────────────────────────────────────────── */}
      <section ref={ctaRef} style={{ background: 'var(--hana-blue-deep)', borderTop: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...sectionWrap, padding: '96px 32px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 48, alignItems: 'center' }}>
            <h2 className="hana-h2" style={{ maxWidth: 640, color: '#fff' }}>Tell us about your program. We'll route it to the right facility.</h2>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href={window.hrefFor('Contact')} className="hana-btn hana-btn-primary">Talk to engineering {li('arrow-right', 14, '#fff')}</a>
              <a href={window.hrefFor('Contact')} className="hana-btn hana-btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>Request a quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer style={{ background: 'var(--bg)', color: 'var(--ink-2)', fontFamily: 'var(--font-text)', borderTop: '1px solid var(--line)' }}>

        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 32px 28px', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40 }}>
          <div>
            <img src="assets/hana-logo-full-trimmed.png" alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
            <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: 280 }}>
              The leading independent EMS and OSAT company in Southeast Asia, specializing in microelectronics.
            </p>
            <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
              <a href="#" aria-label="LinkedIn" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line)', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-2)' }}>{li('linkedin', 14)}</a>
            </div>
            <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)' }}>
              <div>SET-listed · Bangkok</div>
              <div style={{ marginTop: 4 }}>HANA · ฿24.50 <span style={{ color: '#0A7C3F' }}>+1.24%</span></div>
            </div>
          </div>
          {[
          { h: 'Markets', l: ['Automotive', 'Industrial & IoT', 'Telecommunications', 'RFID', 'Optical & sensors', 'Consumer electronics', 'Medical', 'Access control', 'Power management', 'Data Centers'] },
          { h: 'Capabilities', l: ['PCBA & Box Build', 'OSAT', 'Microelectronic Assembly', 'RFID & Smart Tags', 'Automation', 'DFx & JDM Collaboration'] },
          { h: 'Company', l: ['About', 'Why Hana', 'Locations', 'Sustainability', 'News', 'Careers'] },
          { h: 'Investors', l: ['SET: HANA', 'Financial reports', 'Annual reports', 'Governance', 'FAQ & Knowledge Hub', 'IR contact'] }].
          map((c) =>
          <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 12 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {c.l.map((i) => <li key={i}><a href={window.hrefFor(i)} style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13, lineHeight: 1.5 }}>{i}</a></li>)}
              </ul>
            </div>
          )}
        </div>
        <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.7)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', padding: '10px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11 }}>
            <div>© 2026 Hana Microelectronics Public Company Limited.</div>
            <div style={{ display: 'flex', gap: 22 }}>
              {[['Privacy', '#'], ['Terms', '#'], ['Cookies', '#'], ['Sitemap', 'sitemap.html']].map(([l, href]) =>
              <a key={l} href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>);

}

window.HomepageV1bCircuit = HomepageV1bCircuit;