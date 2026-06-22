/* Header & Footer — FINALIZED blocks, ported verbatim from the live homepage
   (index.html → HomepageV1bCircuit). These are the production header
   (utility bar + main nav with interactive mega-menu) and the comprehensive
   light-surface sitemap footer. Hover any nav item with a chevron to open
   its mega-menu panel. */

/* Inline lucide-style icons — matches the homepage's `li` helper. */
function FIcon(n, size = 16, color = 'currentColor') {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {n === 'arrow-right' && <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>}
      {n === 'chevron-down' && <path d="m6 9 6 6 6-6" />}
      {n === 'search' && <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>}
      {n === 'globe' && <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></>}
      {n === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
    </svg>);
}

const F_sectionWrap = { maxWidth: 1080, margin: '0 auto', padding: '0 32px' };
const F_eyebrow = {
  fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10,
  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)'
};

/* ── Content arrays (verbatim from homepage) ───────────────── */
const F_markets = [
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

const F_navLocs = [
  { country: 'Thailand', city: 'Ayutthaya', role: 'OSAT · PCBA' },
  { country: 'Thailand', city: 'Lamphun', role: 'PCBA · EMS' },
  { country: 'USA', city: 'Ohio', role: 'RFID & Optical' },
  { country: 'China', city: 'Jiaxing', role: 'EMS · OSAT · RFID' },
  { country: 'Cambodia', city: 'Koh Kong', role: 'PCBA · Box Build · EMS' },
  { country: 'Korea', city: 'Cheongju', role: 'SiC module' }];

const F_navMenus = {
  About: {
    lead: { title: 'About Hana', body: 'A global electronics manufacturer since 1978 — EMS, OSAT, and microelectronics under one operating standard.', cta: 'Company overview' },
    cols: [
      { h: 'Company', items: ['Why Hana', 'Leadership', 'History', 'Quality & certifications'] },
      { h: 'Connect', items: ['Careers', 'Contact us'] }] },
  Markets: {
    lead: { title: 'Markets we serve', body: 'From automotive power modules to AI data-center infrastructure — production tuned to each market’s reliability bar.', cta: 'All markets' },
    grid: F_markets },
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

/* ═══════════════════════════════════════════════ FINAL HEADER */
function HeaderFinal() {
  const [openMenu, setOpenMenu] = React.useState(null);
  const navCloseTimer = React.useRef(null);
  const openNav = (label) => { clearTimeout(navCloseTimer.current); setOpenMenu(label); };
  const closeNav = () => { navCloseTimer.current = setTimeout(() => setOpenMenu(null), 130); };

  return (
    <header style={{ background: '#fff', fontFamily: 'var(--font-text)' }}>
      {/* Utility bar */}
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.78)', fontSize: 12 }}>
        <div style={{ ...F_sectionWrap, padding: '0 32px', height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
            <span style={{ ...F_eyebrow, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-text)' }}>SET</span>
            <span style={{ color: '#fff' }}>HANA</span>
            <span>฿24.50</span>
            <span style={{ color: '#7EC8FF' }}>+1.24%</span>
          </div>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <a href={window.hrefFor('Careers')} style={{ color: 'inherit', textDecoration: 'none' }}>Careers</a>
            <a href={window.hrefFor('News')} style={{ color: 'inherit', textDecoration: 'none' }}>News</a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 4, padding: '4px 10px', minWidth: 220 }}>
              {FIcon('search', 12, 'rgba(255,255,255,0.6)')}
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>Search capabilities, markets, news…</span>
            </div>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>{FIcon('globe', 13)} EN</a>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <div style={{ borderBottom: '1px solid var(--line)', position: 'relative' }} onMouseLeave={closeNav}>
        <style>{`
          .hf-navlink { transition: color 140ms ease; }
          .hf-navlink:hover, .hf-navlink.is-open { color: var(--hana-blue) !important; }
          .hf-navchev { transition: transform 180ms ease; display: inline-flex; }
          .hf-navlink.is-open .hf-navchev { transform: rotate(180deg); }
          .hf-mega { animation: hf-mega-in 160ms ease both; }
          @keyframes hf-mega-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
          .hf-mega-card { transition: background 130ms ease; border-radius: 6; text-decoration: none; color: inherit; }
          .hf-mega-card:hover { background: var(--bg); }
          .hf-mega-card:hover .hf-mega-name { color: var(--hana-blue); }
          .hf-mega-tlink { transition: color 130ms ease; }
          .hf-mega-tlink:hover { color: var(--hana-blue) !important; }
          .hf-mega-gh { color: var(--ink); transition: color 130ms ease; text-decoration: none; }
          .hf-mega-gh:hover { color: var(--hana-blue); }
        `}</style>
        <div style={{ ...F_sectionWrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
          <img src="assets/hana-logo-full-trimmed.png" alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
          <nav style={{ display: 'flex', gap: 34, marginLeft: 20 }}>
            {['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'].map((l) => {
              const hasMenu = !!F_navMenus[l];
              return (
                <a key={l} href={window.hrefFor(l)}
                  className={'hf-navlink' + (openMenu === l ? ' is-open' : '')}
                  onMouseEnter={() => openNav(hasMenu ? l : null)}
                  style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  {l}{hasMenu && <span className="hf-navchev">{FIcon('chevron-down', 13)}</span>}
                </a>);
            })}
          </nav>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <a href={window.hrefFor('Contact')} className="hana-btn hana-btn-secondary" style={{ padding: '11px 24px', fontSize: 12, whiteSpace: 'nowrap' }}>Contact</a>
          </div>
        </div>

        {/* Expanded navigation panel */}
        {openMenu && F_navMenus[openMenu] &&
        <div className="hf-mega"
          onMouseEnter={() => openNav(openMenu)}
          style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 60,
            background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
            boxShadow: '0 24px 48px rgba(3,10,23,.12)' }}>
          <div style={{ ...F_sectionWrap, padding: '36px 32px 40px', display: 'grid',
            gridTemplateColumns: F_navMenus[openMenu].groups ? '1fr' : '270px 1fr', gap: 56, alignItems: 'start' }}>
            {/* Lead column — hidden for Capabilities */}
            {!F_navMenus[openMenu].groups &&
            <div style={{ borderRight: '1px solid var(--line)', paddingRight: 40 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12 }}>
                {F_navMenus[openMenu].lead.title}
              </div>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 20px', textWrap: 'pretty' }}>
                {F_navMenus[openMenu].lead.body}
              </p>
              <a href={window.hrefFor(openMenu)} className="hana-link" style={{ fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                {F_navMenus[openMenu].lead.cta} {FIcon('arrow-right', 13, 'var(--hana-blue)')}
              </a>
            </div>}

            {/* Content column */}
            <div>
              {/* Markets — name + body grid */}
              {F_navMenus[openMenu].grid &&
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 28, rowGap: 2 }}>
                {F_navMenus[openMenu].grid.map((it) =>
                <a key={it.name} href={window.hrefFor(it.name)} className="hf-mega-card" style={{ display: 'block', padding: '10px 12px' }}>
                  <div className="hf-mega-name" style={{ fontSize: 13, fontWeight: 600, marginBottom: 2, transition: 'color 130ms ease' }}>{it.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.45 }}>{it.body}</div>
                </a>)}
              </div>}

              {/* Capabilities — groups with sub-items */}
              {F_navMenus[openMenu].groups &&
              <React.Fragment>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${F_navMenus[openMenu].groups.length}, 1fr)`, gap: 24 }}>
                  {F_navMenus[openMenu].groups.map((g) =>
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
                    {F_navMenus[openMenu].lead.cta} {FIcon('arrow-right', 13, 'var(--hana-blue)')}
                  </a>
                </div>
              </React.Fragment>}

              {/* About — columns */}
              {F_navMenus[openMenu].cols &&
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${F_navMenus[openMenu].cols.length}, 1fr)`, gap: 36 }}>
                {F_navMenus[openMenu].cols.map((col) =>
                <div key={col.h}>
                  <div className="hana-spec-label" style={{ marginBottom: 14, color: 'var(--ink)' }}>{col.h}</div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {col.items.map((i) =>
                    <li key={i}><a href={window.hrefFor(i)} className="hf-mega-tlink" style={{ fontSize: 13, color: 'var(--ink-2)', textDecoration: 'none' }}>{i}</a></li>)}
                  </ul>
                </div>)}
              </div>}

              {/* Locations — grouped by country */}
              {F_navMenus[openMenu].locs &&
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 40, rowGap: 26 }}>
                {Object.entries(F_navLocs.reduce((acc, l) => { (acc[l.country] = acc[l.country] || []).push(l); return acc; }, {})).map(([country, cities]) =>
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

              {/* Investor Relations — flat link list */}
              {F_navMenus[openMenu].links &&
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 40, rowGap: 2 }}>
                {F_navMenus[openMenu].links.map((i) =>
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

/* ═══════════════════════════════════════════════ FINAL FOOTER */
function FooterFinal() {
  const cols = [
    { h: 'Markets', l: ['Automotive', 'Industrial & IoT', 'Telecommunications', 'RFID', 'Optical & sensors', 'Consumer electronics', 'Medical', 'Access control', 'Power management', 'Data Centers'] },
    { h: 'Capabilities', l: ['PCBA & Box Build', 'OSAT', 'Microelectronic Assembly', 'RFID & Smart Tags', 'Automation', 'DFx & JDM Collaboration'] },
    { h: 'Company', l: ['About', 'Why Hana', 'Locations', 'Sustainability', 'News', 'Careers'] },
    { h: 'Investors', l: ['SET: HANA', 'Financial reports', 'Annual reports', 'Governance', 'FAQ & Knowledge Hub', 'IR contact'] }];
  return (
    <footer style={{ background: 'var(--bg)', color: 'var(--ink-2)', fontFamily: 'var(--font-text)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 32px 28px', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40 }}>
        <div>
          <img src="assets/hana-logo-full-trimmed.png" alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
          <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: 280 }}>
            The leading independent EMS and OSAT company in Southeast Asia, specializing in microelectronics.
          </p>
          <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
            <a href="#" aria-label="LinkedIn" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line)', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-2)' }}>{FIcon('linkedin', 14)}</a>
          </div>
          <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)' }}>
            <div>SET-listed · Bangkok</div>
            <div style={{ marginTop: 4 }}>HANA · ฿24.50 <span style={{ color: '#0A7C3F' }}>+1.24%</span></div>
          </div>
        </div>
        {cols.map((c) =>
        <div key={c.h}>
          <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 12 }}>{c.h}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {c.l.map((i) => <li key={i}><a href={window.hrefFor(i)} style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13, lineHeight: 1.5 }}>{i}</a></li>)}
          </ul>
        </div>)}
      </div>
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.7)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '10px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11 }}>
          <div>© 2026 Hana Microelectronics Public Company Limited.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            {[['Privacy', '#'], ['Terms', '#'], ['Cookies', '#'], ['Sitemap', 'sitemap.html']].map(([l, href]) =>
            <a key={l} href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>);
}

window.HeaderFooterFinal = { HeaderFinal, FooterFinal };
