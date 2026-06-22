/* Hana production site chrome — Header (utility bar + mega-menu) + Footer.
   Extracted from the live homepage (v1b-circuit) so Contact / RFQ pages
   match the real site exactly. Uses real tokens from hana-tokens.css. */

function HanaIcon({ name, size = 16, color = 'currentColor', stroke = 2 }) {
  const c = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'arrow-right':return <svg {...c}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
    case 'chevron-down':return <svg {...c}><path d="m6 9 6 6 6-6" /></svg>;
    case 'search':return <svg {...c}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>;
    case 'globe':return <svg {...c}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></svg>;
    case 'linkedin':return <svg {...c}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case 'mail':return <svg {...c}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>;
    case 'phone':return <svg {...c}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" /></svg>;
    case 'pin':return <svg {...c}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
    default:return null;
  }
}

const NAV_MENUS = {
  About: {
    lead: { title: 'About Hana', body: 'A global electronics manufacturer since 1978 — EMS, OSAT, and microelectronics under one operating standard.', cta: 'Company overview' },
    cols: [
    { h: 'Company', items: ['Why Hana', 'Leadership', 'History', 'Quality & certifications'] },
    { h: 'Connect', items: ['Careers', 'Contact us'] }] },
  Markets: {
    lead: { title: 'Markets we serve', body: 'From automotive power modules to AI data-center infrastructure — production tuned to each market’s reliability bar.', cta: 'All markets' },
    grid: [
    { name: 'Automotive', body: 'Power modules, ADAS, EV charging, lighting.' },
    { name: 'Industrial & IoT', body: 'Sensors, controllers, smart factory equipment.' },
    { name: 'Telecommunications', body: 'Network infrastructure and gateways.' },
    { name: 'RFID', body: 'Inlays, tire tags, smart labels.' },
    { name: 'Optical & sensors', body: 'Camera modules and image sensors.' },
    { name: 'Consumer electronics', body: 'Wearables, accessories, peripherals.' },
    { name: 'Medical', body: 'Patient monitoring and diagnostics.' },
    { name: 'Access control', body: 'Smart cards, readers, security tokens.' },
    { name: 'Power management', body: 'Power supplies and conversion.' },
    { name: 'Data Centers', body: 'AI infrastructure, HPC, power modules for GPU clusters.' }] },
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
    locs: [
    { country: 'Thailand', city: 'Ayutthaya', role: 'OSAT · PCBA' },
    { country: 'Thailand', city: 'Lamphun', role: 'PCBA · EMS' },
    { country: 'USA', city: 'Ohio', role: 'RFID & Optical' },
    { country: 'China', city: 'Jiaxing', role: 'EMS · OSAT · RFID' },
    { country: 'Cambodia', city: 'Koh Kong', role: 'PCBA · Box Build · EMS' },
    { country: 'Korea', city: 'Cheongju', role: 'SiC module' }] },
  'Investor Relations': {
    lead: { title: 'Investor Relations', body: 'SET-listed (HANA). Financial reporting, governance, and shareholder information in one place.', cta: 'IR overview' },
    links: ['Investor News', 'Group Structure & Shareholders', 'Annual Report', 'Sustainability', 'Governance Documents', 'Investor Events & Contacts', 'Investor FAQ & Knowledge Hub'] } };

function HanaHeader({ active }) {
  const [openMenu, setOpenMenu] = React.useState(null);
  const closeTimer = React.useRef(null);
  const openNav = (label) => {clearTimeout(closeTimer.current);setOpenMenu(label);};
  const closeNav = () => {closeTimer.current = setTimeout(() => setOpenMenu(null), 130);};
  const wrap = { maxWidth: 1080, margin: '0 auto', padding: '0 32px' };

  return (
    <header style={{ background: '#fff', fontFamily: 'var(--font-text)' }}>
      <style>{`
        .hh-navlink { transition: color 140ms ease; }
        .hh-navlink:hover, .hh-navlink.is-open { color: var(--hana-blue) !important; }
        .hh-navchev { transition: transform 180ms ease; display: inline-flex; }
        .hh-navlink.is-open .hh-navchev { transform: rotate(180deg); }
        .hh-mega { animation: hh-mega-in 160ms ease both; }
        @keyframes hh-mega-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        .hh-card { transition: background 130ms ease; border-radius: 6px; text-decoration: none; color: inherit; }
        .hh-card:hover { background: var(--bg); }
        .hh-card:hover .hh-name { color: var(--hana-blue); }
        .hh-tlink { transition: color 130ms ease; }
        .hh-tlink:hover { color: var(--hana-blue) !important; }
        .hh-gh { color: var(--ink); transition: color 130ms ease; text-decoration: none; }
        .hh-gh:hover { color: var(--hana-blue); }
      `}</style>

      {/* Utility bar */}
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.78)', fontSize: 12 }}>
        <div style={{ ...wrap, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
            <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.1em' }}>SET</span>
            <span style={{ color: '#fff' }}>HANA</span>
            <span>฿24.50</span>
            <span style={{ color: '#7EC8FF' }}>+1.24%</span>
          </div>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <a href={window.hrefFor('Careers')} style={{ color: 'inherit', textDecoration: 'none' }}>Careers</a>
            <a href={window.hrefFor('News')} style={{ color: 'inherit', textDecoration: 'none' }}>News</a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 4, padding: '4px 10px', minWidth: 220 }}>
              <HanaIcon name="search" size={12} color="rgba(255,255,255,0.6)" />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>Search capabilities, markets, news…</span>
            </div>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}><HanaIcon name="globe" size={13} /> EN</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div style={{ borderBottom: '1px solid var(--line)', position: 'relative' }} onMouseLeave={closeNav}>
        <div style={{ ...wrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
          <a href="contact.html" style={{ display: 'block' }}>
            <img src="assets/hana-logo-full-trimmed.png" alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
          </a>
          <nav style={{ display: 'flex', gap: 34, marginLeft: 20 }}>
            {['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'].map((l) => {
              const hasMenu = !!NAV_MENUS[l];
              return (
                <a key={l} href={window.hrefFor(l)}
                className={'hh-navlink' + (openMenu === l ? ' is-open' : '')}
                onMouseEnter={() => openNav(hasMenu ? l : null)}
                style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: l === active ? 'var(--hana-blue)' : 'var(--ink)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  {l}{hasMenu && <span className="hh-navchev"><HanaIcon name="chevron-down" size={13} /></span>}
                </a>);
            })}
          </nav>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <a href="contact.html" className="hana-btn hana-btn-secondary" style={{ padding: '11px 24px', fontSize: 12, whiteSpace: 'nowrap', ...(active === 'Contact' ? { background: 'var(--hana-blue)', color: '#fff', borderColor: 'var(--hana-blue)' } : {}) }}>Contact</a>
          </div>
        </div>

        {openMenu && NAV_MENUS[openMenu] &&
        <div className="hh-mega" onMouseEnter={() => openNav(openMenu)}
        style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 60, background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', boxShadow: '0 24px 48px rgba(3,10,23,.12)' }}>
            <div style={{ ...wrap, padding: '36px 32px 40px', display: 'grid', gridTemplateColumns: NAV_MENUS[openMenu].groups ? '1fr' : '270px 1fr', gap: 56, alignItems: 'start' }}>
              {!NAV_MENUS[openMenu].groups &&
            <div style={{ borderRight: '1px solid var(--line)', paddingRight: 40 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12 }}>{NAV_MENUS[openMenu].lead.title}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 20px', textWrap: 'pretty' }}>{NAV_MENUS[openMenu].lead.body}</p>
                  <a href={window.hrefFor(openMenu)} className="hana-link" style={{ fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.1em', textTransform: 'uppercase' }}>{NAV_MENUS[openMenu].lead.cta} <HanaIcon name="arrow-right" size={13} color="var(--hana-blue)" /></a>
                </div>}
              <div>
                {NAV_MENUS[openMenu].grid &&
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 28, rowGap: 2 }}>
                    {NAV_MENUS[openMenu].grid.map((it) =>
                <a key={it.name} href={window.hrefFor(it.name)} className="hh-card" style={{ display: 'block', padding: '10px 12px' }}>
                        <div className="hh-name" style={{ fontSize: 13, fontWeight: 600, marginBottom: 2, transition: 'color 130ms ease' }}>{it.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.45 }}>{it.body}</div>
                      </a>)}
                  </div>}
                {NAV_MENUS[openMenu].groups &&
              <React.Fragment>
                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${NAV_MENUS[openMenu].groups.length}, 1fr)`, gap: 24 }}>
                      {NAV_MENUS[openMenu].groups.map((g) =>
                  <div key={g.h}>
                          <a href={window.hrefFor(g.h)} className="hh-gh" style={{ display: 'inline-block', fontSize: 13, fontWeight: 700, lineHeight: 1.3, marginBottom: 12, textWrap: 'balance' }}>{g.h}</a>
                          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {g.items.map((i) => <li key={i}><a href={window.hrefFor(i)} className="hh-tlink" style={{ fontSize: 12.5, color: 'var(--ink-2)', textDecoration: 'none', lineHeight: 1.35, display: 'block' }}>{i}</a></li>)}
                          </ul>
                        </div>)}
                    </div>
                    <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
                      <a href={window.hrefFor(openMenu)} className="hana-link" style={{ fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.1em', textTransform: 'uppercase' }}>{NAV_MENUS[openMenu].lead.cta} <HanaIcon name="arrow-right" size={13} color="var(--hana-blue)" /></a>
                    </div>
                  </React.Fragment>}
                {NAV_MENUS[openMenu].cols &&
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${NAV_MENUS[openMenu].cols.length}, 1fr)`, gap: 36 }}>
                    {NAV_MENUS[openMenu].cols.map((col) =>
                <div key={col.h}>
                        <div className="hana-spec-label" style={{ marginBottom: 14, color: 'var(--ink)' }}>{col.h}</div>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {col.items.map((i) => <li key={i}><a href={window.hrefFor(i)} className="hh-tlink" style={{ fontSize: 13, color: 'var(--ink-2)', textDecoration: 'none' }}>{i}</a></li>)}
                        </ul>
                      </div>)}
                  </div>}
                {NAV_MENUS[openMenu].locs &&
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 40, rowGap: 26 }}>
                    {Object.entries(NAV_MENUS[openMenu].locs.reduce((acc, l) => {(acc[l.country] = acc[l.country] || []).push(l);return acc;}, {})).map(([country, cities]) =>
                <div key={country}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', paddingBottom: 9, marginBottom: 4, borderBottom: '1px solid var(--line)' }}>{country}</div>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
                          {cities.map((l) =>
                    <li key={l.city}>
                              <a href={window.hrefFor(l.city)} className="hh-card" style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '7px 8px' }}>
                                <span style={{ color: 'var(--hana-blue)', fontWeight: 700, fontSize: 13, lineHeight: 1.2, flexShrink: 0 }}>&rsaquo;</span>
                                <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                  <span className="hh-name" style={{ fontSize: 13, fontWeight: 600, transition: 'color 130ms ease' }}>{l.city}</span>
                                  <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>{l.role}</span>
                                </span>
                              </a>
                            </li>)}
                        </ul>
                      </div>)}
                  </div>}
                {NAV_MENUS[openMenu].links &&
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 40, rowGap: 2 }}>
                    {NAV_MENUS[openMenu].links.map((i) =>
                <a key={i} href={window.hrefFor(i)} className="hh-card" style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 10px' }}>
                        <span style={{ color: 'var(--hana-blue)', fontWeight: 700, fontSize: 13 }}>&rsaquo;</span>
                        <span className="hh-name" style={{ fontSize: 13, fontWeight: 600, transition: 'color 130ms ease' }}>{i}</span>
                      </a>)}
                  </div>}
              </div>
            </div>
          </div>}
      </div>
    </header>);
}

function HanaFooter() {
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
          <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: 280 }}>The leading independent EMS and OSAT company in Southeast Asia</p>
          <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
            <a href="#" aria-label="LinkedIn" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line)', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-2)' }}><HanaIcon name="linkedin" size={14} /></a>
          </div>
          <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)' }}>
            <div>SET-listed · Bangkok</div>
            <div style={{ marginTop: 4 }}>HANA · ฿24.50 <span style={{ color: '#0A7C3F' }}>+1.24%</span></div>
          </div>
        </div>
        {cols.map((c) =>
        <div key={c.h}>
            <div style={{ fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 12 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
              {c.l.map((i) => <li key={i}><a href={window.hrefFor(i)} style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13, lineHeight: 1.5 }}>{i}</a></li>)}
            </ul>
          </div>)}
      </div>
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.7)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '10px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11 }}>
          <div>© 2026 Hana Microelectronics Public Company Limited.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            {[['Privacy', '#'], ['Terms', '#'], ['Cookies', '#'], ['Sitemap', 'sitemap.html']].map(([l, href]) => <a key={l} href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>);
}

Object.assign(window, { HanaIcon, HanaHeader, HanaFooter, NAV_MENUS });