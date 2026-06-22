/* ════════════════════════════════════════════════════════════════
   Hana — Locations · chrome
   Header (Locations active) + breadcrumb. Reuses Photo / SvgIcon /
   SubCapFooter from subcap-template/chrome.jsx (loaded before this).
   ════════════════════════════════════════════════════════════════ */

/* LocHeader now renders the FINAL header (SubCapHeader from subcap-template/chrome.jsx,
   loaded before this file on every locations page). Kept as a thin wrapper so existing
   call sites (<LocHeader />) continue to work. */
function LocHeader() {
  return React.createElement(window.SubCapHeader, { active: 'Locations' });
}

/* ─── breadcrumb · accepts a trail of {label, href} ─────────────── */
function LocBreadcrumb({ trail }) {
  return (
    <div style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '11px 20px', fontSize: 12.5,
        color: 'var(--ink-3)', display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--font-text)', flexWrap: 'wrap' }}>
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <React.Fragment key={c.label}>
              {last
                ? <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{c.label}</span>
                : <a href={c.href || '#'} className="hana-link" style={{ fontSize: 12.5 }}>{c.label}</a>}
              {!last && <span style={{ color: 'var(--line)' }}>›</span>}
            </React.Fragment>);
        })}
      </div>
    </div>);
}

/* ─── closing CTA band (dark blue) ─────────────────────────────── */
function ClosingCta({ title, body, primary = 'Start a conversation' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.HanaBG) {
      window.HanaBG.apply(ref.current, { pattern: 'pcb', variant: 'dark', accent: '', fade: 'none' });
    }
  }, []);
  return (
    <section ref={ref} style={{ background: 'var(--hana-blue-deep)', color: '#fff', fontFamily: 'var(--font-text)', position: 'relative', overflow: 'hidden' }}>
      <div className="lc-cta-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '72px 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 className="hana-h2" style={{ color: '#fff', margin: '0 auto 16px', maxWidth: 640 }}>{title}</h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 32px' }}>{body}</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" className="hana-btn hana-btn-on-dark">{primary}</a>
        </div>
      </div>
    </section>);
}

Object.assign(window, { LocHeader, LocBreadcrumb, ClosingCta });
