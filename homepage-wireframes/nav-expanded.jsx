
/* nav-expanded.jsx
   Standalone artboard: V1b header with the "Capabilities" mega-menu open.
   Uses the same tokens / helpers as v1b-image-led.jsx. */

function NavExpanded() {
  const sectionWrap = { maxWidth: 1180, margin: '0 auto' };
  const eyebrow = { fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' };

  function li(name, size = 16, color = 'currentColor') {
    const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (name === 'chevron-down') return <svg {...p}><path d="m6 9 6 6 6-6"/></svg>;
    if (name === 'search')       return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>;
    if (name === 'globe')        return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>;
    if (name === 'arrow-right')  return <svg {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
    if (name === 'car')          return <svg {...p}><path d="M5 17h14M3 17l2-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2l2 7M5 17v3M19 17v3"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/></svg>;
    if (name === 'factory')      return <svg {...p}><path d="M3 21V10l5 3V10l5 3V10l5 3v8Z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/></svg>;
    if (name === 'antenna')      return <svg {...p}><path d="M5 21 12 4l7 17"/><path d="M8 14h8"/><path d="M3 10a8 8 0 0 1 4-7M21 10a8 8 0 0 0-4-7"/></svg>;
    if (name === 'rfid')         return <svg {...p}><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M8 10a3 3 0 0 1 0 4M11 8a6 6 0 0 1 0 8"/></svg>;
    if (name === 'aperture')     return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="m14.3 9.7 4.6-2M9.7 14.3l-4.6 2M9.7 9.7l-4.6-2M14.3 14.3l4.6 2M12 3v6M12 15v6"/></svg>;
    if (name === 'headphones')   return <svg {...p}><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14v4a2 2 0 0 1-2 2h-2v-6h4ZM3 14v4a2 2 0 0 0 2 2h2v-6H3Z"/></svg>;
    if (name === 'heart-pulse')  return <svg {...p}><path d="M20.8 11.5A5.5 5.5 0 0 0 12 6a5.5 5.5 0 0 0-8.8 5.5C4 16 12 21 12 21s8-5 8.8-9.5Z"/><path d="M3.5 12h3l1.5-3 3 6 1.5-3h4"/></svg>;
    if (name === 'key')          return <svg {...p}><circle cx="7" cy="15" r="4"/><path d="m10 12 11-11M16 7l3 3M14 9l3 3"/></svg>;
    if (name === 'bolt')         return <svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7Z"/></svg>;
    if (name === 'cpu')          return <svg {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>;
    if (name === 'layers')       return <svg {...p}><path d="M2 12 12 2l10 10-10 10Z"/><path d="M12 22V12"/><path d="M2 12l10 10 10-10"/></svg>;
    if (name === 'check')        return <svg {...p}><path d="M20 6 9 17l-5-5"/></svg>;
    return null;
  }

  const ACTIVE_NAV = 'Capabilities';

  const caps = [
    { icon: 'factory',    label: 'EMS',             sub: 'Electronics manufacturing services — PCB assembly, box build, test' },
    { icon: 'cpu',        label: 'OSAT',            sub: 'Outsourced semiconductor assembly & test — wire bond, flip chip, QFN' },
    { icon: 'layers',     label: 'Microelectronics',sub: 'Hybrid microcircuits, SiC modules, thick-film on ceramic substrates' },
    { icon: 'check',      label: 'Engineering',     sub: 'DFM, NPI, failure analysis, and production transfer support' },
    { icon: 'heart-pulse',label: 'Quality',         sub: 'IATF 16949, ISO 13485, AEC-Q, automotive grade process control' },
    { icon: 'bolt',       label: 'NPI',             sub: 'New product introduction — from prototype to qualified production' },
  ];

  const featured = {
    label: 'Why Hana for EMS + OSAT?',
    body: 'One partner for both assembly and semiconductor packaging reduces hand-offs, accelerates qualification, and gives you a single quality system across the supply chain.',
    cta: 'Read the brief',
  };

  return (
    <div style={{ fontFamily: 'var(--font-text)', background: '#fff', position: 'relative' }}>

      {/* ── Utility bar ─────────────────────────────────────── */}
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
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>{li('globe', 13)}EN</a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--line)', position: 'relative', zIndex: 10, background: '#fff' }}>
        <div style={{ ...sectionWrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
          <img src="assets/hana-logo-full-trimmed.png" alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
          <nav style={{ display: 'flex', gap: 24, marginLeft: 12 }}>
            {['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'].map(l => (
              <a key={l} href="#" style={{
                fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: l === ACTIVE_NAV ? 'var(--hana-blue)' : 'var(--ink)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
                paddingBottom: l === ACTIVE_NAV ? 2 : 0,
                borderBottom: l === ACTIVE_NAV ? '2px solid var(--hana-blue)' : '2px solid transparent',
              }}>
                {l}
                {['About','Capabilities','Markets','Locations'].includes(l) && li('chevron-down', 13, l === ACTIVE_NAV ? 'var(--hana-blue)' : 'currentColor')}
              </a>
            ))}
          </nav>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <a href="#" className="hana-btn hana-btn-secondary" style={{ padding: '10px 16px', fontSize: 11 }}>Contact</a>
            <a href="#" className="hana-btn hana-btn-primary" style={{ padding: '11px 16px', fontSize: 11 }}>Request a quote</a>
          </div>
        </div>
      </div>

      {/* ── Mega-menu dropdown ───────────────────────────────── */}
      <div style={{
        background: '#fff',
        borderBottom: '2px solid var(--hana-blue)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.09)',
      }}>
        <div style={{ ...sectionWrap, padding: '40px 32px 44px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 48 }}>

          {/* Capability links grid */}
          <div>
            <div style={{ ...eyebrow, color: 'var(--ink-3)', marginBottom: 20, fontSize: 10 }}>Capabilities</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 6, overflow: 'hidden' }}>
              {caps.map(c => (
                <a key={c.label} href="#" style={{
                  background: '#fff', padding: '20px 22px', textDecoration: 'none', color: 'inherit',
                  display: 'flex', flexDirection: 'column', gap: 8,
                  transition: 'background 0.15s',
                }}>
                  <div style={{ color: 'var(--hana-blue)', marginBottom: 2 }}>{li(c.icon, 20, 'var(--hana-blue)')}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--ink)' }}>{c.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>{c.sub}</div>
                </a>
              ))}
            </div>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              marginTop: 20, fontSize: 12, fontWeight: 600, color: 'var(--hana-blue)',
              textDecoration: 'none', letterSpacing: '0.05em',
            }}>
              All capabilities {li('arrow-right', 13, 'var(--hana-blue)')}
            </a>
          </div>

          {/* Featured callout */}
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 6,
            padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div style={{ ...eyebrow, color: 'var(--ink-3)', fontSize: 10 }}>Featured</div>
            <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)', lineHeight: 1.4 }}>{featured.label}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.6 }}>{featured.body}</div>
            <a href="#" style={{
              marginTop: 'auto', fontSize: 12, fontWeight: 600, color: 'var(--hana-blue)',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              {featured.cta} {li('arrow-right', 13, 'var(--hana-blue)')}
            </a>
          </div>

        </div>
      </div>

      {/* Page-level overlay hint */}
      <div style={{ height: 80, background: 'rgba(0,0,0,0.04)', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>Page content beneath overlay</span>
      </div>

    </div>
  );
}

function NavExpandedMarkets() {
  const sectionWrap = { maxWidth: 1180, margin: '0 auto' };
  const eyebrow = { fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' };

  function li(name, size = 16, color = 'currentColor') {
    const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (name === 'chevron-down')  return <svg {...p}><path d="m6 9 6 6 6-6"/></svg>;
    if (name === 'search')        return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>;
    if (name === 'globe')         return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>;
    if (name === 'arrow-right')   return <svg {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
    if (name === 'car')           return <svg {...p}><path d="M5 17h14M3 17l2-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2l2 7M5 17v3M19 17v3"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/></svg>;
    if (name === 'factory')       return <svg {...p}><path d="M3 21V10l5 3V10l5 3V10l5 3v8Z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/></svg>;
    if (name === 'antenna')       return <svg {...p}><path d="M5 21 12 4l7 17"/><path d="M8 14h8"/><path d="M3 10a8 8 0 0 1 4-7M21 10a8 8 0 0 0-4-7"/></svg>;
    if (name === 'rfid')          return <svg {...p}><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M8 10a3 3 0 0 1 0 4M11 8a6 6 0 0 1 0 8"/></svg>;
    if (name === 'aperture')      return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="m14.3 9.7 4.6-2M9.7 14.3l-4.6 2M9.7 9.7l-4.6-2M14.3 14.3l4.6 2M12 3v6M12 15v6"/></svg>;
    if (name === 'headphones')    return <svg {...p}><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14v4a2 2 0 0 1-2 2h-2v-6h4ZM3 14v4a2 2 0 0 0 2 2h2v-6H3Z"/></svg>;
    if (name === 'heart-pulse')   return <svg {...p}><path d="M20.8 11.5A5.5 5.5 0 0 0 12 6a5.5 5.5 0 0 0-8.8 5.5C4 16 12 21 12 21s8-5 8.8-9.5Z"/><path d="M3.5 12h3l1.5-3 3 6 1.5-3h4"/></svg>;
    if (name === 'key')           return <svg {...p}><circle cx="7" cy="15" r="4"/><path d="m10 12 11-11M16 7l3 3M14 9l3 3"/></svg>;
    if (name === 'bolt')          return <svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7Z"/></svg>;
    if (name === 'server')        return <svg {...p}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
    return null;
  }

  const ACTIVE_NAV = 'Markets';

  const markets = [
    { icon: 'car',         label: 'Automotive',           sub: 'Power modules, ADAS, EV charging, lighting' },
    { icon: 'factory',     label: 'Industrial & IoT',      sub: 'Sensors, controllers, smart factory equipment' },
    { icon: 'antenna',     label: 'Telecommunications',    sub: 'Network infrastructure and gateways' },
    { icon: 'rfid',        label: 'RFID',                  sub: 'Inlays, tire tags, smart labels' },
    { icon: 'aperture',    label: 'Optical & sensors',     sub: 'Camera modules and image sensors' },
    { icon: 'headphones',  label: 'Consumer electronics',  sub: 'Wearables, accessories, peripherals' },
    { icon: 'heart-pulse', label: 'Medical',               sub: 'Patient monitoring and diagnostics' },
    { icon: 'key',         label: 'Access control',        sub: 'Smart cards, readers, security tokens' },
    { icon: 'bolt',        label: 'Power management',      sub: 'Power supplies and conversion' },
    { icon: 'server',      label: 'Data Centers',          sub: 'AI infrastructure, HPC, power modules for GPU clusters' },
  ];

  const featured = {
    label: 'New: Data Centers & AI Infrastructure',
    body: "As GPU clusters demand higher-density power and thermal management, Hana\u2019s SiC module and power packaging capabilities are directly applicable. Talk to our engineering team.",
    cta: 'Explore AI infrastructure',
  };

  return (
    <div style={{ fontFamily: 'var(--font-text)', background: '#fff', position: 'relative' }}>

      {/* ── Utility bar ─────────────────────────────────────── */}
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
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>{li('globe', 13)}EN</a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--line)', position: 'relative', zIndex: 10, background: '#fff' }}>
        <div style={{ ...sectionWrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
          <img src="assets/hana-logo-full-trimmed.png" alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
          <nav style={{ display: 'flex', gap: 24, marginLeft: 12 }}>
            {['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'].map(l => (
              <a key={l} href="#" style={{
                fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: l === ACTIVE_NAV ? 'var(--hana-blue)' : 'var(--ink)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
                paddingBottom: l === ACTIVE_NAV ? 2 : 0,
                borderBottom: l === ACTIVE_NAV ? '2px solid var(--hana-blue)' : '2px solid transparent',
              }}>
                {l}
                {['About','Capabilities','Markets','Locations'].includes(l) && li('chevron-down', 13, l === ACTIVE_NAV ? 'var(--hana-blue)' : 'currentColor')}
              </a>
            ))}
          </nav>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <a href="#" className="hana-btn hana-btn-secondary" style={{ padding: '10px 16px', fontSize: 11 }}>Contact</a>
            <a href="#" className="hana-btn hana-btn-primary" style={{ padding: '11px 16px', fontSize: 11 }}>Request a quote</a>
          </div>
        </div>
      </div>

      {/* ── Mega-menu dropdown ───────────────────────────────── */}
      <div style={{
        background: '#fff',
        borderBottom: '2px solid var(--hana-blue)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.09)',
      }}>
        <div style={{ ...sectionWrap, padding: '40px 32px 44px' }}>

          {/* Markets grid — 5 columns × 2 rows, full width */}
          <div style={{ ...eyebrow, color: 'var(--ink-3)', marginBottom: 20, fontSize: 10 }}>Markets we serve</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 6, overflow: 'hidden' }}>
            {markets.map(m => (
              <a key={m.label} href="#" style={{
                background: '#fff', padding: '18px 18px', textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column', gap: 6,
              }}>
                <div style={{ color: 'var(--hana-blue)', marginBottom: 2 }}>{li(m.icon, 18, 'var(--hana-blue)')}</div>
                <div style={{ fontWeight: 700, fontSize: 12, color: 'var(--ink)' }}>{m.label}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-3)', lineHeight: 1.45 }}>{m.sub}</div>
              </a>
            ))}
          </div>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginTop: 20, fontSize: 12, fontWeight: 600, color: 'var(--hana-blue)',
            textDecoration: 'none', letterSpacing: '0.05em',
          }}>
            All markets {li('arrow-right', 13, 'var(--hana-blue)')}
          </a>

        </div>
      </div>

      {/* Page-level overlay hint */}
      <div style={{ height: 80, background: 'rgba(0,0,0,0.04)', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>Page content beneath overlay</span>
      </div>

    </div>
  );
}

Object.assign(window, { NavExpanded, NavExpandedMarkets });
