/* Header & Footer concepts — rebuilt on the Hana design system.
   Tokens via hana-tokens.css. Hana Blue only, Geist/Inter/Plex Mono,
   1px borders, no shadows, sentence case, 0.1em uppercase on button + spec labels. */

const NAV = ['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'];

/* Inline lucide-style icons (1.5–2px stroke, rounded caps). */
function I({ n, s = 16, c = 'currentColor' }) {
  const p = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: c, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (n === 'arrow-right') return <svg {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
  if (n === 'chevron-down') return <svg {...p}><path d="m6 9 6 6 6-6"/></svg>;
  if (n === 'search') return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>;
  if (n === 'globe') return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>;
  if (n === 'linkedin') return <svg {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
  if (n === 'mail') return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
  if (n === 'map-pin') return <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
  if (n === 'car') return <svg {...p}><path d="M5 17h14M3 17l2-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2l2 7M5 17v3M19 17v3"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/></svg>;
  if (n === 'factory') return <svg {...p}><path d="M3 21V10l5 3V10l5 3V10l5 3v8Z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/></svg>;
  if (n === 'antenna') return <svg {...p}><path d="M5 21 12 4l7 17"/><path d="M8 14h8"/><path d="M3 10a8 8 0 0 1 4-7M21 10a8 8 0 0 0-4-7"/></svg>;
  if (n === 'rfid') return <svg {...p}><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M8 10a3 3 0 0 1 0 4M11 8a6 6 0 0 1 0 8"/></svg>;
  if (n === 'aperture') return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="m14.3 9.7 4.6-2M9.7 14.3l-4.6 2M9.7 9.7l-4.6-2M14.3 14.3l4.6 2M12 3v6M12 15v6"/></svg>;
  if (n === 'headphones') return <svg {...p}><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14v4a2 2 0 0 1-2 2h-2v-6h4ZM3 14v4a2 2 0 0 0 2 2h2v-6H3Z"/></svg>;
  if (n === 'heart-pulse') return <svg {...p}><path d="M20.8 11.5A5.5 5.5 0 0 0 12 6a5.5 5.5 0 0 0-8.8 5.5C4 16 12 21 12 21s8-5 8.8-9.5Z"/><path d="M3.5 12h3l1.5-3 3 6 1.5-3h4"/></svg>;
  if (n === 'key') return <svg {...p}><circle cx="7" cy="15" r="4"/><path d="m10 12 11-11M16 7l3 3M14 9l3 3"/></svg>;
  if (n === 'bolt') return <svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7Z"/></svg>;
  return null;
}

const Logo = ({ white, w = 200, h = 65 }) => (
  <img
    src={white ? 'assets/hana-logo-full-white-trimmed.png' : 'assets/hana-logo-full-trimmed.png'}
    alt="Hana"
    style={{ width: w, height: h, objectFit: 'contain', objectPosition: 'left center', display: 'block' }}
  />
);

const eyebrow = { fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' };
const btnPrimary = { fontFamily: 'var(--font-text)', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--hana-blue)', color: '#fff', padding: '11px 18px', borderRadius: 4, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 };
const btnSecondary = { ...btnPrimary, background: 'transparent', color: 'var(--hana-blue)', border: '1px solid var(--hana-blue)', padding: '10px 17px' };
const btnOnDark = { ...btnPrimary, background: '#fff', color: 'var(--hana-blue)' };
const btnGhostOnDark = { ...btnPrimary, background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', padding: '10px 17px' };

const wrap = { maxWidth: 1180, margin: '0 auto', padding: '0 32px' };

/* ═══════════════════════════════════════════════════════════ HEADERS */

/* H1 — Classic single row */
function Header1() {
  return (
    <div style={{ background: '#fff', borderBottom: '1px solid var(--line)', fontFamily: 'var(--font-text)' }}>
      <div style={{ ...wrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo />
        <nav style={{ display: 'flex', gap: 28, marginLeft: 12 }}>
          {NAV.map(l => (
            <a key={l} href="#" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none' }}>{l}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <a href="#" style={{ ...btnSecondary, padding: '9px 14px', fontSize: 11 }}>Contact</a>
          <a href="#" style={{ ...btnPrimary, padding: '10px 14px', fontSize: 11 }}>Request a quote</a>
        </div>
      </div>
    </div>
  );
}

/* H2 — Utility bar + main nav (corporate) */
function Header2() {
  return (
    <div style={{ background: '#fff', fontFamily: 'var(--font-text)' }}>
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.78)', fontSize: 12 }}>
        <div style={{ ...wrap, padding: '0 32px', height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
            <span style={{ ...eyebrow, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-text)' }}>SET</span>
            <span style={{ color: '#fff' }}>HANA</span>
            <span>฿24.50</span>
            <span style={{ color: '#7EC8FF' }}>+1.24%</span>
          </div>
          <div style={{ display: 'flex', gap: 22 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Supplier portal</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Customer portal</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}><I n="globe" s={13}/>EN</a>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: '1px solid var(--line)' }}>
        <div style={{ ...wrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
          <Logo />
          <nav style={{ display: 'flex', gap: 28, marginLeft: 12 }}>
            {NAV.map(l => (
              <a key={l} href="#" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none' }}>{l}</a>
            ))}
          </nav>
          <a href="#" style={{ ...btnPrimary, marginLeft: 'auto', padding: '10px 16px' }}>Request a quote <I n="arrow-right" s={12} c="#fff"/></a>
        </div>
      </div>
    </div>
  );
}

/* H3 — Centered logo, split nav (editorial) */
function Header3() {
  const left = ['About', 'Capabilities', 'Markets'];
  const right = ['Locations', 'News & Insights', 'Quality'];
  return (
    <div style={{ background: '#fff', borderBottom: '1px solid var(--line)', fontFamily: 'var(--font-text)' }}>
      <div style={{ ...wrap, padding: '20px 32px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 32 }}>
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0, justifyContent: 'flex-end' }}>
          {left.map(l => <li key={l}><a href="#" style={{ ...eyebrow, color: 'var(--ink-2)', textDecoration: 'none', fontSize: 11 }}>{l}</a></li>)}
        </ul>
        <Logo />
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
          {right.map(l => <li key={l}><a href="#" style={{ ...eyebrow, color: 'var(--ink-2)', textDecoration: 'none', fontSize: 11 }}>{l}</a></li>)}
        </ul>
      </div>
    </div>
  );
}

/* H4 — Utility bar + mega-menu open for Markets */
function Header4() {
  const markets = [
    ['Automotive', 'Power, ADAS, lighting', 'car'],
    ['Industrial & IoT', 'Sensors, controllers', 'factory'],
    ['Telecommunications', 'Network infrastructure', 'antenna'],
    ['RFID', 'Inlays, tags, labels', 'rfid'],
    ['Optical & sensors', 'Camera modules', 'aperture'],
    ['Consumer electronics', 'Wearables, peripherals', 'headphones'],
    ['Medical', 'Diagnostics, monitoring', 'heart-pulse'],
    ['Access control', 'Smart cards, readers', 'key'],
    ['Power management', 'Supplies, conversion', 'bolt'],
  ];
  return (
    <div style={{ background: '#fff', fontFamily: 'var(--font-text)', position: 'relative' }}>
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.78)', fontSize: 12 }}>
        <div style={{ ...wrap, padding: '0 32px', height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
              <I n="search" s={12} c="rgba(255,255,255,0.6)"/>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>Search capabilities, markets, news…</span>
            </div>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}><I n="globe" s={13}/>EN</a>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: '1px solid var(--line)' }}>
        <div style={{ ...wrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
          <Logo />
          <nav style={{ display: 'flex', gap: 24, marginLeft: 12 }}>
            {NAV.map(l => (
              <a key={l} href="#" style={{
                fontSize: 12, fontWeight: l === 'Markets' ? 700 : 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: l === 'Markets' ? 'var(--hana-blue-deep)' : 'var(--ink)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
              }}>{l}{['About','Capabilities','Markets','Locations'].includes(l) && <I n="chevron-down" s={13}/>}</a>
            ))}
          </nav>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <a href="#" style={btnSecondary}>Contact</a>
            <a href="#" style={btnPrimary}>Request a quote</a>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 36 + 64, background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '36px 32px', zIndex: 5 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48 }}>
          <div>
            <div style={{ ...eyebrow, color: 'var(--ink-3)', marginBottom: 12 }}>Markets we serve</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--ink)', margin: '0 0 12px' }}>Nine industries. Decades of expertise in each.</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55, margin: '0 0 16px' }}>From die-level packaging through full box build, our markets practice runs deep.</p>
            <a href="#" style={{ color: 'var(--hana-blue)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>All markets <I n="arrow-right" s={12}/></a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
            {markets.map(([n, d, ic]) => (
              <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit', padding: '10px 14px', borderRadius: 4, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: 4, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <I n={ic} s={16} c="var(--hana-blue-deep)"/>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 2 }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--ink-3)' }}>{d}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* H5 — Slim on dark hero panel */
function Header5() {
  return (
    <div style={{ position: 'relative', minHeight: 360, background: 'var(--hana-blue-deep)', fontFamily: 'var(--font-text)', overflow: 'hidden' }}>
      <img src="assets/hana-mark-white.svg" alt="" style={{ position: 'absolute', right: -80, bottom: -80, width: 360, opacity: 0.06 }} />
      <div style={{ position: 'relative', ...wrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo white />
        <nav style={{ display: 'flex', gap: 24, marginLeft: 12 }}>
          {NAV.map(l => (
            <a key={l} href="#" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{l}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <a href="#" style={btnGhostOnDark}>Contact</a>
          <a href="#" style={btnOnDark}>Request a quote</a>
        </div>
      </div>
      <div style={{ position: 'relative', ...wrap, padding: '48px 32px 56px', color: '#fff' }}>
        <div style={{ ...eyebrow, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>EMS · OSAT · Microelectronics</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 48, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: 820, margin: 0 }}>
          Built for microelectronics, at the scale of three countries.
        </h1>
      </div>
    </div>
  );
}

/* H6 — Vertical sidebar rail */
function Header6() {
  return (
    <div style={{ display: 'flex', minHeight: 400, background: '#fff', fontFamily: 'var(--font-text)' }}>
      <aside style={{ width: 240, background: 'var(--hana-blue-deep)', color: '#fff', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <Logo white />
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}>
          {NAV.map((l, i) => (
            <li key={l}>
              <a href="#" style={{
                display: 'block', textDecoration: 'none',
                color: i === 0 ? '#fff' : 'rgba(255,255,255,0.7)',
                fontSize: 12, fontWeight: i === 0 ? 700 : 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '10px 12px', borderRadius: 4,
                background: i === 0 ? 'rgba(255,255,255,0.08)' : 'transparent',
              }}>{l}</a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a href="#" style={{ ...btnGhostOnDark, justifyContent: 'center' }}>Contact</a>
          <a href="#" style={{ ...btnOnDark, justifyContent: 'center' }}>Request a quote <I n="arrow-right" s={12} c="var(--hana-blue)"/></a>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>SET: HANA  +1.24%</div>
        </div>
      </aside>
      <div style={{ flex: 1, padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ ...eyebrow, color: 'var(--ink-3)', marginBottom: 12 }}>Vertical rail</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 42, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--ink)', maxWidth: 640, margin: '0 0 16px' }}>
          Persistent left rail. The hero gets the full canvas next to it.
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 560, margin: 0 }}>
          Unusual for a manufacturing site — distinctive, but breaks reader expectations on B2B properties.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ FOOTERS */

/* F1 — Comprehensive sitemap */
function Footer1() {
  const cols = [
    { h: 'Markets', l: ['Automotive', 'Industrial & IoT', 'Telecommunications', 'RFID', 'Optical & sensors', 'Consumer electronics', 'Medical', 'Access control', 'Power management', 'Data Centers'] },
    { h: 'Capabilities', l: ['PCBA / Box build', 'OSAT', 'Microelectronics', 'Automation', 'DFx Collaborations'] },
    { h: 'Company', l: ['About', 'Why Hana', 'Locations', 'Sustainability', 'News', 'Careers'] },
    { h: 'Investors', l: ['SET: HANA', 'Financial reports', 'Annual reports', 'Governance', 'IR contact'] },
  ];
  return (
    <footer style={{ background: 'var(--hana-blue-deep)', color: '#fff', fontFamily: 'var(--font-text)' }}>
      <div style={{ background: 'var(--hana-blue)', padding: '32px 32px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em' }}>Have a program to talk through?</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', marginTop: 6 }}>We respond within 48 hours, with the right facility and engineering lead on the call.</div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#" style={btnOnDark}>Request a quote</a>
            <a href="#" style={btnGhostOnDark}>Contact sales</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 32px 32px', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40 }}>
        <div>
          <Logo white h={32}/>
          <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', maxWidth: 280 }}>
            The leading independent EMS and OSAT company in Southeast Asia, specializing in microelectronics.
          </p>
          <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
            <div>SET-listed · Bangkok</div>
            <div style={{ marginTop: 4 }}>HANA · ฿24.50  +1.24%</div>
          </div>
        </div>
        {cols.map(c => (
          <div key={c.h}>
            <div style={{ ...eyebrow, color: 'rgba(255,255,255,0.55)', marginBottom: 14 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {c.l.map(i => <li key={i}><a href="#" style={{ color: '#fff', opacity: 0.85, textDecoration: 'none', fontSize: 13 }}>{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
          <div>© 2026 Hana Microelectronics Public Company Limited.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Sitemap</a>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <a href="#" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><I n="linkedin" s={14}/></a>
            <a href="#" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><I n="mail" s={14}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* F2 — Compact + locations highlight */
function Footer2() {
  const locs = [
    ['Thailand', 'Bangkok', 'HQ'], ['Thailand', 'Lamphun', 'OSAT'], ['Thailand', 'Ayutthaya', 'EMS'],
    ['Cambodia', 'Koh Kong', 'EMS'], ['China', 'Jiaxing', 'EMS'],
  ];
  return (
    <footer style={{ background: '#fff', color: 'var(--ink-2)', fontFamily: 'var(--font-text)', fontSize: 13, borderTop: '1px solid var(--line)' }}>
      <div style={{ background: 'var(--bg)', padding: '36px 32px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ ...eyebrow, color: 'var(--ink-3)', marginBottom: 16 }}>Six facilities · three countries</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
            {locs.map(([country, city, role]) => (
              <div key={city} style={{ borderTop: '1px solid var(--hana-blue)', paddingTop: 12 }}>
                <div style={{ ...eyebrow, color: 'var(--hana-blue)', marginBottom: 4 }}>{role}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{city}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{country}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Logo h={26}/>
          <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>© 2026 Hana Microelectronics</div>
        </div>
        <ul style={{ display: 'flex', gap: 22, listStyle: 'none', margin: 0, padding: 0 }}>
          {['Markets', 'Capabilities', 'Investors', 'Careers', 'News', 'Contact'].map(l => (
            <li key={l}><a href="#" style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13 }}>{l}</a></li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 20, fontSize: 12, color: 'var(--ink-3)' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>EN</a>
        </div>
      </div>
    </footer>
  );
}

/* F3 — Bold editorial */
function Footer3() {
  return (
    <footer style={{ background: 'var(--hana-blue-deep)', color: '#fff', fontFamily: 'var(--font-text)', position: 'relative', overflow: 'hidden' }}>
      <img src="assets/hana-mark-white.svg" alt="" style={{ position: 'absolute', right: -100, top: -100, width: 420, opacity: 0.05 }} />
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '88px 32px 56px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'flex-end', position: 'relative' }}>
        <div>
          <div style={{ ...eyebrow, color: 'rgba(255,255,255,0.6)', marginBottom: 18 }}>Bring us your program</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 64, lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 24px', maxWidth: 640 }}>
            Let's build the next one.
          </h2>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#" style={btnOnDark}>Request a quote</a>
            <a href="#" style={btnGhostOnDark}>Contact sales</a>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {[
            ['Markets', '9 industries'],
            ['Capabilities', '5 capability families'],
            ['Locations', '6 sites · 3 countries'],
            ['Investors', 'SET: HANA'],
            ['Careers', 'Engineering and operations'],
          ].map(([t, s]) => (
            <a key={t} href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 12 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em' }}>{t}</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>{s} <I n="arrow-right" s={12}/></span>
            </a>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Logo white h={24}/>
            <span>© 2026 Hana Microelectronics</span>
          </div>
          <div style={{ display: 'flex', gap: 22 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Sitemap</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>EN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* F4 — Light + newsletter + investor card */
function Footer4() {
  return (
    <footer style={{ background: 'var(--bg)', color: 'var(--ink-2)', fontFamily: 'var(--font-text)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <Logo h={32}/>
            <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: 320 }}>
              The leading independent EMS and OSAT company in Southeast Asia, specializing in microelectronics.
            </p>
            <div style={{ marginTop: 24 }}>
              <div style={{ ...eyebrow, color: 'var(--ink-3)', marginBottom: 10 }}>Investor & news updates</div>
              <div style={{ display: 'flex', gap: 8, maxWidth: 360 }}>
                <div style={{ flex: 1, background: '#fff', border: '1px solid var(--line)', borderRadius: 4, padding: '10px 14px', fontSize: 13, color: 'var(--ink-3)' }}>your@email.com</div>
                <a href="#" style={btnPrimary}>Subscribe</a>
              </div>
            </div>
          </div>
          {[
            { h: 'Company', l: ['About', 'Why Hana', 'Locations', 'Quality', 'Careers'] },
            { h: 'Resources', l: ['Newsroom', 'Case studies', 'Sustainability', 'White papers'] },
            { h: 'Investors', l: ['SET: HANA', 'Annual reports', 'Financial calendar', 'Governance', 'IR contact'] },
          ].map(c => (
            <div key={c.h}>
              <div style={{ ...eyebrow, color: 'var(--ink-2)', marginBottom: 14 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {c.l.map(i => <li key={i}><a href="#" style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13 }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 8, padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <div>
              <div style={{ ...eyebrow, color: 'var(--ink-3)' }}>SET-listed</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ink)' }}>HANA</div>
            </div>
            <div>
              <div style={{ ...eyebrow, color: 'var(--ink-3)' }}>Last price</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
                ฿24.50 <span style={{ color: 'var(--success)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>+1.24%</span>
              </div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', maxWidth: 280 }}>Stock Exchange of Thailand. Delayed 15 minutes.</div>
          </div>
          <a href="#" style={{ ...btnPrimary, background: 'var(--hana-blue-deep)' }}>Investor hub <I n="arrow-right" s={12} c="#fff"/></a>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', paddingBottom: 20, borderBottom: '1px solid var(--line)' }}>
          <span style={{ ...eyebrow, color: 'var(--ink-3)', marginRight: 8 }}>Certifications</span>
          {['IATF 16949', 'ISO 9001', 'ISO 13485', 'ISO 14001', 'AEC-Q100', 'IPC-A-610'].map(c => (
            <div key={c} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 4, padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-2)' }}>{c}</div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, paddingTop: 20, fontSize: 12, color: 'var(--ink-3)' }}>
          <div>© 2026 Hana Microelectronics Public Company Limited</div>
          <div style={{ display: 'flex', gap: 22 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Sitemap</a>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <a href="#" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line)', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-2)' }}><I n="linkedin" s={14}/></a>
            <a href="#" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line)', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-2)' }}><I n="mail" s={14}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* F5 — Compact editorial (smaller F3) */
function Footer5() {
  return (
    <footer style={{ background: 'var(--hana-blue-deep)', color: '#fff', fontFamily: 'var(--font-text)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '48px 32px 32px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div style={{ ...eyebrow, color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>Bring us your program</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 38, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 20px' }}>
            Let's build the next one.
          </h2>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="#" style={btnOnDark}>Request a quote</a>
            <a href="#" style={btnGhostOnDark}>Contact sales</a>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Markets', '9 industries'],
            ['Capabilities', '5 families'],
            ['Locations', '6 sites · 3 countries'],
            ['Investors', 'SET: HANA'],
          ].map(([t, s]) => (
            <a key={t} href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 8 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, letterSpacing: '-0.02em' }}>{t}</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>{s} <I n="arrow-right" s={11}/></span>
            </a>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Logo white h={22}/>
            <span>© 2026 Hana Microelectronics</span>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Sitemap</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>EN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.HeaderFooter = {
  Header1, Header2, Header3, Header4, Header5, Header6,
  Footer1, Footer2, Footer3, Footer4, Footer5, Footer6,
};

/* F6 — Comprehensive sitemap on light surface */
function Footer6() {
  const cols = [
    { h: 'Markets', l: ['Automotive', 'Industrial & IoT', 'Telecommunications', 'RFID', 'Optical & sensors', 'Consumer electronics', 'Medical', 'Access control', 'Power management', 'Data Centers'] },
    { h: 'Capabilities', l: ['PCBA / Box build', 'OSAT', 'Microelectronics', 'Automation', 'DFx Collaborations'] },
    { h: 'Company', l: ['About', 'Why Hana', 'Locations', 'Sustainability', 'News', 'Careers'] },
    { h: 'Investors', l: ['SET: HANA', 'Financial reports', 'Annual reports', 'Governance', 'IR contact'] },
  ];
  return (
    <footer style={{ background: 'var(--bg)', color: 'var(--ink-2)', fontFamily: 'var(--font-text)', borderTop: '1px solid var(--line)' }}>
      <div style={{ background: '#fff', borderBottom: '1px solid var(--line)', padding: '28px 32px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em', color: 'var(--ink)' }}>Have a program to talk through?</div>
            <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 6 }}>We respond within 48 hours, with the right facility and engineering lead on the call.</div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#" style={btnPrimary}>Request a quote</a>
            <a href="#" style={btnSecondary}>Contact sales</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '48px 32px 28px', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40 }}>
        <div>
          <Logo />
          <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: 280 }}>
            The leading independent EMS and OSAT company in Southeast Asia, specializing in microelectronics.
          </p>
          <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
            <a href="#" aria-label="LinkedIn" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line)', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-2)' }}><I n="linkedin" s={14}/></a>
          </div>
          <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)' }}>
            <div>SET-listed · Bangkok</div>
            <div style={{ marginTop: 4 }}>HANA · ฿24.50  <span style={{ color: 'var(--success, #1F8A5B)' }}>+1.24%</span></div>
          </div>
        </div>
        {cols.map(c => (
          <div key={c.h}>
            <div style={{ ...eyebrow, fontSize: 12, color: 'var(--ink)', marginBottom: 12 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
              {c.l.map(i => <li key={i}><a href="#" style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13, lineHeight: 1.5 }}>{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.7)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '10px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11 }}>
          <div>© 2026 Hana Microelectronics Public Company Limited.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.HeaderFooter.Footer6 = Footer6;
