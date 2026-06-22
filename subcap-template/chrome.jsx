/* ════════════════════════════════════════════════════════════════
   Hana — Sub-capability page TEMPLATE · chrome
   Header (utility bar + nav), footer, breadcrumb, capability browse
   sidebar, icon set, photo placeholder. Hi-fi — uses hana-tokens.css.
   ════════════════════════════════════════════════════════════════ */

/* ─── icon helper (Lucide-style, 1.6px stroke) ───────────────── */
function SvgIcon({ name, size = 16, color = 'currentColor', stroke = 2 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'arrow-right':return <svg {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
    case 'chevron-down':return <svg {...p}><path d="m6 9 6 6 6-6" /></svg>;
    case 'chevron-right':return <svg {...p}><path d="m9 18 6-6-6-6" /></svg>;
    case 'map-pin':return <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
    case 'search':return <svg {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>;
    case 'globe':return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></svg>;
    case 'linkedin':return <svg {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case 'flame':return <svg {...p} strokeWidth={1.6}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>;
    case 'ruler':return <svg {...p} strokeWidth={1.6}><path d="M21.3 8.7 8.7 21.3a2.4 2.4 0 0 1-3.4 0L2.7 18.7a2.4 2.4 0 0 1 0-3.4L15.3 2.7a2.4 2.4 0 0 1 3.4 0l2.6 2.6a2.4 2.4 0 0 1 0 3.4z" /><path d="m7.5 10.5 2 2" /><path d="m10.5 7.5 2 2" /><path d="m13.5 4.5 2 2" /><path d="m4.5 13.5 2 2" /></svg>;
    case 'shield':return <svg {...p} strokeWidth={1.6}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
    case 'cpu':return <svg {...p} strokeWidth={1.7}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>;
    case 'square-stack':return <svg {...p} strokeWidth={1.7}><path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" /><path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" /><rect x="14" y="14" width="8" height="8" rx="2" /></svg>;
    case 'box':return <svg {...p} strokeWidth={1.7}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>;
    case 'layers':return <svg {...p} strokeWidth={1.7}><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84z" /><path d="M2 12.65l9.17 4.16a2 2 0 0 0 1.66 0L22 12.65" /><path d="M2 17.65l9.17 4.16a2 2 0 0 0 1.66 0L22 17.65" /></svg>;
    case 'package':return <svg {...p} strokeWidth={1.7}><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" /><path d="M12 22V12" /><path d="m3.3 7 7.7 4.73a2 2 0 0 0 2 0L20.7 7" /><path d="m7.5 4.27 9 5.15" /></svg>;
    case 'disc':return <svg {...p} strokeWidth={1.7}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="2" /></svg>;
    case 'circle-dot':return <svg {...p} strokeWidth={1.7}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="1" /></svg>;
    case 'grid':return <svg {...p} strokeWidth={1.7}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M9 3v18" /><path d="M15 3v18" /></svg>;
    case 'activity':return <svg {...p} strokeWidth={1.7}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>;
    case 'waypoints':return <svg {...p} strokeWidth={1.7}><circle cx="12" cy="4.5" r="2.5" /><path d="m10.2 6.3-3.9 3.9" /><circle cx="4.5" cy="12" r="2.5" /><path d="M7 12h10" /><circle cx="19.5" cy="12" r="2.5" /><path d="m13.8 17.7 3.9-3.9" /><circle cx="12" cy="19.5" r="2.5" /></svg>;
    case 'radio':return <svg {...p} strokeWidth={1.7}><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" /><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" /><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" /><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" /></svg>;
    case 'scan':return <svg {...p} strokeWidth={1.7}><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="2.5" /></svg>;
    case 'scan-eye':return <svg {...p} strokeWidth={1.7}><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="1" /><path d="M18.9 12.3a1 1 0 0 0 0-.6 7.5 7.5 0 0 0-13.8 0 1 1 0 0 0 0 .6 7.5 7.5 0 0 0 13.8 0" /></svg>;
    case 'bot':return <svg {...p} strokeWidth={1.7}><path d="M12 8V4H8" /><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>;
    case 'route':return <svg {...p} strokeWidth={1.7}><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></svg>;
    case 'pen-tool':return <svg {...p} strokeWidth={1.7}><path d="M15.7 21.3a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4l5.6-5.6a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4z" /><path d="m18 13-1.4-6.9a1 1 0 0 0-.7-.8L3.2 2a1 1 0 0 0-1.2 1.2l3.3 12.7a1 1 0 0 0 .8.7L13 18" /><path d="m2.3 2.3 7.3 7.3" /><circle cx="11" cy="11" r="2" /></svg>;
    case 'users':return <svg {...p} strokeWidth={1.7}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case 'rocket':return <svg {...p} strokeWidth={1.7}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>;
    default:return null;
  }
}

/* ─── photo placeholder (striped/surface + mono caption) ─────── */
function Photo({ photo, height, ratio, radius = 8, dark = false }) {
  const cap = photo && photo.label;
  const style = {
    position: 'relative', overflow: 'hidden', borderRadius: radius,
    border: '1px solid var(--line)', background: 'var(--surface)',
    height: height || undefined, aspectRatio: ratio || undefined, width: '100%'
  };
  if (photo && photo.src && window.__resources && window.__resources[photo.src]) {
    return (
      <div style={style}>
        <img src={window.__resources && window.__resources[photo.src] || photo.src} alt={cap || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        {cap &&
        <div style={{ position: 'absolute', left: 12, bottom: 10, fontFamily: 'var(--font-mono)', fontSize: 10,
          letterSpacing: '0.04em', color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.6)', textTransform: 'uppercase' }}>
            {cap}
          </div>
        }
      </div>);

  }
  /* placeholder — engineering striped ground + mono caption */
  return (
    <div style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 13px, rgba(18,131,221,0.06) 13px 14px)' }}>
      <div style={{ position: 'absolute', top: 10, left: 12, width: 18, height: 18, opacity: 0.4 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--hana-blue)" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
        </svg>
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)', textAlign: 'center', padding: '0 18px', lineHeight: 1.5 }}>
        [ {cap || 'photography'} ]
      </span>
    </div>);

}

/* ─── header — FINAL (utility bar + mega-menu nav) ───────────── */
const SC_markets = [
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
const SC_navLocs = [
  { country: 'Thailand', city: 'Ayutthaya', role: 'OSAT · PCBA' },
  { country: 'Thailand', city: 'Lamphun', role: 'PCBA · EMS' },
  { country: 'USA', city: 'Ohio', role: 'RFID & Optical' },
  { country: 'China', city: 'Jiaxing', role: 'EMS · OSAT · RFID' },
  { country: 'Cambodia', city: 'Koh Kong', role: 'PCBA · Box Build · EMS' },
  { country: 'Korea', city: 'Cheongju', role: 'SiC module' }];
const SC_navMenus = {
  About: {
    lead: { title: 'About Hana', body: 'A global electronics manufacturer since 1978 — EMS, OSAT, and microelectronics under one operating standard.', cta: 'Company overview' },
    cols: [
      { h: 'Company', items: ['Why Hana', 'Leadership', 'History', 'Quality & certifications'] },
      { h: 'Connect', items: ['Careers', 'Contact us'] }] },
  Markets: {
    lead: { title: 'Markets we serve', body: 'From automotive power modules to AI data-center infrastructure — production tuned to each market’s reliability bar.', cta: 'All markets' },
    grid: SC_markets },
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

function SubCapHeader({ active }) {
  const [openMenu, setOpenMenu] = React.useState(null);
  const navCloseTimer = React.useRef(null);
  const openNav = (label) => { clearTimeout(navCloseTimer.current); setOpenMenu(label); };
  const closeNav = () => { navCloseTimer.current = setTimeout(() => setOpenMenu(null), 130); };
  const wrap = { maxWidth: 1240, margin: '0 auto', padding: '0 32px' };
  return (
    <header style={{ background: '#fff', fontFamily: 'var(--font-text)', position: 'sticky', top: 0, zIndex: 80 }}>
      {/* utility bar */}
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.78)', fontSize: 12 }}>
        <div style={{ ...wrap, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
            <span style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10 }}>SET</span>
            <span style={{ color: '#fff' }}>HANA</span>
            <span>฿24.50</span>
            <span style={{ color: '#7EC8FF' }}>+1.24%</span>
          </div>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <a href={window.hrefFor('Careers')} style={{ color: 'inherit', textDecoration: 'none' }}>Careers</a>
            <a href={window.hrefFor('News')} style={{ color: 'inherit', textDecoration: 'none' }}>News</a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 4, padding: '4px 10px', minWidth: 220 }}>
              <SvgIcon name="search" size={12} color="rgba(255,255,255,0.6)" />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>Search capabilities, markets, news…</span>
            </div>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}><SvgIcon name="globe" size={13} /> EN</a>
          </div>
        </div>
      </div>
      {/* main nav */}
      <div style={{ borderBottom: '1px solid var(--line)', position: 'relative' }} onMouseLeave={closeNav}>
        <style>{`
          .hf-navlink { transition: color 140ms ease; }
          .hf-navlink:hover, .hf-navlink.is-open { color: var(--hana-blue) !important; }
          .hf-navchev { transition: transform 180ms ease; display: inline-flex; }
          .hf-navlink.is-open .hf-navchev { transform: rotate(180deg); }
          .hf-mega { animation: hf-mega-in 160ms ease both; }
          @keyframes hf-mega-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
          .hf-mega-card { transition: background 130ms ease; border-radius: 6px; text-decoration: none; color: inherit; }
          .hf-mega-card:hover { background: var(--bg); }
          .hf-mega-card:hover .hf-mega-name { color: var(--hana-blue); }
          .hf-mega-tlink { transition: color 130ms ease; }
          .hf-mega-tlink:hover { color: var(--hana-blue) !important; }
          .hf-mega-gh { color: var(--ink); transition: color 130ms ease; text-decoration: none; }
          .hf-mega-gh:hover { color: var(--hana-blue); }
        `}</style>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', gap: 32, paddingTop: 18, paddingBottom: 18 }}>
          <img src={(window.__resources && window.__resources['assets/hana-logo-full-trimmed.png']) || 'assets/hana-logo-full-trimmed.png'} alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
          <nav style={{ display: 'flex', gap: 34, marginLeft: 20 }}>
            {['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'].map((l) => {
              const hasMenu = !!SC_navMenus[l];
              return (
                <a key={l} href={window.hrefFor(l)}
                  className={'hf-navlink' + (openMenu === l ? ' is-open' : '')}
                  onMouseEnter={() => openNav(hasMenu ? l : null)}
                  style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  {l}{hasMenu && <span className="hf-navchev"><SvgIcon name="chevron-down" size={13} /></span>}
                </a>);
            })}
          </nav>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <a href="contact.html" className="hana-btn hana-btn-secondary" style={{ padding: '11px 24px', fontSize: 12, whiteSpace: 'nowrap' }}>Contact</a>
          </div>
        </div>

        {/* Expanded navigation panel */}
        {openMenu && SC_navMenus[openMenu] &&
        <div className="hf-mega"
          onMouseEnter={() => openNav(openMenu)}
          style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 60,
            background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
            boxShadow: '0 24px 48px rgba(3,10,23,.12)' }}>
          <div style={{ ...wrap, paddingTop: 36, paddingBottom: 40, display: 'grid',
            gridTemplateColumns: SC_navMenus[openMenu].groups ? '1fr' : '270px 1fr', gap: 56, alignItems: 'start' }}>
            {!SC_navMenus[openMenu].groups &&
            <div style={{ borderRight: '1px solid var(--line)', paddingRight: 40 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12 }}>
                {SC_navMenus[openMenu].lead.title}
              </div>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 20px', textWrap: 'pretty' }}>
                {SC_navMenus[openMenu].lead.body}
              </p>
              <a href={window.hrefFor(openMenu)} className="hana-link" style={{ fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                {SC_navMenus[openMenu].lead.cta} <SvgIcon name="arrow-right" size={13} color="var(--hana-blue)" />
              </a>
            </div>}

            <div>
              {SC_navMenus[openMenu].grid &&
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 28, rowGap: 2 }}>
                {SC_navMenus[openMenu].grid.map((it) =>
                <a key={it.name} href={window.hrefFor(it.name)} className="hf-mega-card" style={{ display: 'block', padding: '10px 12px' }}>
                  <div className="hf-mega-name" style={{ fontSize: 13, fontWeight: 600, marginBottom: 2, transition: 'color 130ms ease' }}>{it.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.45 }}>{it.body}</div>
                </a>)}
              </div>}

              {SC_navMenus[openMenu].groups &&
              <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${SC_navMenus[openMenu].groups.length}, 1fr)`, gap: 24 }}>
                  {SC_navMenus[openMenu].groups.map((g) =>
                  <div key={g.h}>
                    <a href={window.hrefFor(g.h)} className="hf-mega-gh" style={{ display: 'inline-block', fontSize: 13, fontWeight: 700, lineHeight: 1.3, marginBottom: 12, textWrap: 'balance' }}>{g.h}</a>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {g.items.map((i) =>
                      <li key={i}><a href={window.hrefFor(i)} className="hf-mega-tlink" style={{ fontSize: 12.5, color: 'var(--ink-2)', textDecoration: 'none', lineHeight: 1.35, display: 'block' }}>{i}</a></li>)}
                    </ul>
                  </div>)}
                </div>
                <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
                  <a href={window.hrefFor(openMenu)} className="hana-link" style={{ fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                    {SC_navMenus[openMenu].lead.cta} <SvgIcon name="arrow-right" size={13} color="var(--hana-blue)" />
                  </a>
                </div>
              </React.Fragment>}

              {SC_navMenus[openMenu].cols &&
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${SC_navMenus[openMenu].cols.length}, 1fr)`, gap: 36 }}>
                {SC_navMenus[openMenu].cols.map((col) =>
                <div key={col.h}>
                  <div className="hana-spec-label" style={{ marginBottom: 14, color: 'var(--ink)' }}>{col.h}</div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {col.items.map((i) =>
                    <li key={i}><a href={window.hrefFor(i)} className="hf-mega-tlink" style={{ fontSize: 13, color: 'var(--ink-2)', textDecoration: 'none' }}>{i}</a></li>)}
                  </ul>
                </div>)}
              </div>}

              {SC_navMenus[openMenu].locs &&
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 40, rowGap: 26 }}>
                {Object.entries(SC_navLocs.reduce((acc, l) => { (acc[l.country] = acc[l.country] || []).push(l); return acc; }, {})).map(([country, cities]) =>
                <div key={country}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', paddingBottom: 9, marginBottom: 4, borderBottom: '1px solid var(--line)' }}>{country}</div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
                    {cities.map((l) =>
                    <li key={l.city}>
                      <a href={window.hrefFor(l.city)} className="hf-mega-card" style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '7px 8px' }}>
                        <span style={{ color: 'var(--hana-blue)', fontWeight: 700, fontSize: 13, lineHeight: 1.2, flexShrink: 0 }}>&rsaquo;</span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <span className="hf-mega-name" style={{ fontSize: 13, fontWeight: 600, transition: 'color 130ms ease' }}>{l.city}</span>
                          <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>{l.role}</span>
                        </span>
                      </a>
                    </li>)}
                  </ul>
                </div>)}
              </div>}

              {SC_navMenus[openMenu].links &&
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 40, rowGap: 2 }}>
                {SC_navMenus[openMenu].links.map((i) =>
                <a key={i} href={window.hrefFor(i)} className="hf-mega-card" style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 10px' }}>
                  <span style={{ color: 'var(--hana-blue)', fontWeight: 700, fontSize: 13 }}>&rsaquo;</span>
                  <span className="hf-mega-name" style={{ fontSize: 13, fontWeight: 600, transition: 'color 130ms ease' }}>{i}</span>
                </a>)}
              </div>}
            </div>
          </div>
        </div>}
      </div>
    </header>);

}

/* ─── breadcrumb ─────────────────────────────────────────────── */
function Breadcrumb({ title }) {
  return (
    <div style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '11px 32px', fontSize: 12.5,
        color: 'var(--ink-3)', display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--font-text)' }}>
        <a href="#" className="hana-link" style={{ fontSize: 12.5 }}>Capabilities</a>
        <span style={{ color: 'var(--line)' }}>›</span>
        <a href="#" className="hana-link" style={{ fontSize: 12.5 }}>PCBA &amp; Box Build</a>
        <span style={{ color: 'var(--line)' }}>›</span>
        <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{title}</span>
      </div>
    </div>);

}

/* ─── capability browse sidebar (kept from the template) ─────── */
function CapabilitySidebar({ activeSlug, activeGroup, collapsed, setCollapsed, onSelect }) {
  const { useState } = React;
  const [openSet, setOpenSet] = useState(new Set([activeGroup || 'pcba-box-build']));
  const toggle = (slug) => setOpenSet((prev) => {
    const next = new Set(prev);next.has(slug) ? next.delete(slug) : next.add(slug);return next;
  });

  if (collapsed) {
    return (
      <aside style={{ background: 'var(--bg)', borderRight: '1px solid var(--line)', padding: '16px 0' }}>
        <div style={{ position: 'sticky', top: 92, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <button onClick={() => setCollapsed(false)} title="Expand capabilities"
          style={{ width: 34, height: 34, border: '1px solid var(--line)', borderRadius: 4, background: '#fff',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hana-blue)', padding: 0 }}>
            <SvgIcon name="chevron-right" size={16} color="var(--hana-blue)" />
          </button>
          <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: 10, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ink-3)', marginTop: 12 }}>Capabilities</div>
        </div>
      </aside>);

  }

  return (
    <aside style={{ background: 'var(--bg)', borderRight: '1px solid var(--line)', padding: '28px 0 40px' }}>
      <style>{`
        .sc-tree-leaf{transition:color 130ms ease,background 130ms ease;}
        .sc-tree-leaf:hover{color:var(--hana-blue)!important;background:#fff;}
        .sc-tree-head{transition:color 130ms ease;}
        .sc-tree-head:hover{color:var(--hana-blue)!important;}
      `}</style>
      <div style={{ position: 'sticky', top: 92 }}>
        <div style={{ padding: '0 16px 14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid var(--line)', marginBottom: 8 }}>
          <span className="hana-spec-label" style={{ color: 'var(--ink)' }}>Browse capabilities</span>
          <button onClick={() => setCollapsed(true)} title="Collapse"
          style={{ width: 26, height: 26, border: '1px solid color-mix(in srgb, var(--hana-blue) 45%, var(--line))', borderRadius: 4,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hana-blue)', padding: 0, background: "rgb(255, 255, 255)" }}>
            <span style={{ fontSize: 14, lineHeight: 1, transform: 'rotate(180deg)' }}>›</span>
          </button>
        </div>

        {CAP_TREE.map((node) => {
          if (!node.group) {
            const ovActive = node.slug === activeSlug;
            return (
              <a key={'ov-' + node.slug} href="#" className="sc-tree-leaf"
              style={{ display: 'block', padding: '9px 24px', fontSize: 13, fontWeight: ovActive ? 700 : 600,
                color: ovActive ? 'var(--hana-blue)' : 'var(--ink-2)', textDecoration: 'none',
                background: ovActive ? '#fff' : 'transparent',
                borderLeft: ovActive ? '2px solid var(--hana-blue)' : '2px solid transparent' }}>
                {node.name}
              </a>);

          }
          const open = openSet.has(node.slug);
          const groupActive = node.slug === activeGroup;
          return (
            <div key={node.slug}>
              <button type="button" onClick={() => toggle(node.slug)} className="sc-tree-head"
              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                padding: '11px 24px 7px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'inherit', color: groupActive ? 'var(--hana-blue)' : 'var(--ink)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                <span>{node.name}</span>
                <span style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 160ms ease', display: 'inline-flex', color: 'var(--ink-3)' }}>
                  <SvgIcon name="chevron-down" size={13} />
                </span>
              </button>
              {open && node.sub &&
              <div style={{ paddingBottom: 6 }}>
                  {node.sub.map((leaf) => {
                  const active = leaf.slug === activeSlug;
                  return (
                    <a key={leaf.slug} href="#" className="sc-tree-leaf"
                    onClick={(e) => {if (onSelect && SUBCAPS[leaf.slug]) {e.preventDefault();onSelect(leaf.slug);}}}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 24px 8px 24px',
                      fontSize: 13, textDecoration: 'none',
                      fontWeight: active ? 700 : 500,
                      color: active ? 'var(--hana-blue)' : 'var(--ink-2)',
                      background: active ? '#fff' : 'transparent',
                      borderLeft: active ? '2px solid var(--hana-blue)' : '2px solid transparent' }}>
                        <span style={{ color: active ? 'var(--hana-blue)' : 'var(--ink-3)', fontWeight: 700, fontSize: 12 }}>›</span>
                        {leaf.name}
                      </a>);

                })}
                </div>
              }
            </div>);

        })}

        {/* contact nudge at the foot of the rail */}
        <div style={{ margin: '20px 16px 0 24px', padding: '16px', background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)' }}>
          <div className="hana-spec-label" style={{ marginBottom: 6 }}>Not sure which fits?</div>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 12.5, lineHeight: 1.5, color: 'var(--ink-2)', margin: '0 0 12px' }}>
            Send a BOM and we’ll point you to the right process.
          </p>
          <a href="#" className="hana-link" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Talk to engineering <SvgIcon name="arrow-right" size={12} color="var(--hana-blue)" />
          </a>
        </div>
      </div>
    </aside>);

}

/* ─── footer (ported from homepage) ──────────────────────────── */
function SubCapFooter() {
  const cols = [
  { h: 'Markets', l: ['Automotive', 'Industrial & IoT', 'Telecommunications', 'RFID', 'Optical & sensors', 'Consumer electronics', 'Medical', 'Access control', 'Power management', 'Data Centers'] },
  { h: 'Capabilities', l: ['PCBA & Box Build', 'OSAT', 'Microelectronic Assembly', 'RFID & Smart Tags', 'Automation', 'DFx & JDM Collaboration'] },
  { h: 'Company', l: ['About', 'Why Hana', 'Locations', 'Sustainability', 'News', 'Careers'] },
  { h: 'Investors', l: ['SET: HANA', 'Financial reports', 'Annual reports', 'Governance', 'FAQ & Knowledge Hub', 'IR contact'] }];

  return (
    <footer style={{ background: 'var(--bg)', color: 'var(--ink-2)', fontFamily: 'var(--font-text)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '48px 32px 28px', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40 }}>
        <div>
          <img src={(window.__resources && window.__resources['assets/hana-logo-full-trimmed.png']) || 'assets/hana-logo-full-trimmed.png'} alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
          <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: 280 }}>
            The leading independent EMS and OSAT company in Southeast Asia, specializing in microelectronics.
          </p>
          <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
            <a href="#" aria-label="LinkedIn" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line)', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-2)' }}><SvgIcon name="linkedin" size={14} /></a>
          </div>
          <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)' }}>
            <div>SET-listed · Bangkok</div>
            <div style={{ marginTop: 4 }}>HANA · ฿24.50 <span style={{ color: '#0A7C3F' }}>+1.24%</span></div>
          </div>
        </div>
        {cols.map((c) =>
        <div key={c.h}>
            <div style={{ fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 12 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {c.l.map((i) => <li key={i}><a href={window.hrefFor(i)} style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13, lineHeight: 1.5 }}>{i}</a></li>)}
            </ul>
          </div>
        )}
      </div>
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.7)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '10px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11 }}>
          <div>© 2026 Hana Microelectronics Public Company Limited.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            {[['Privacy', '#'], ['Terms', '#'], ['Cookies', '#'], ['Sitemap', 'sitemap.html']].map(([l, href]) => <a key={l} href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { SvgIcon, Photo, SubCapHeader, Breadcrumb, CapabilitySidebar, SubCapFooter });