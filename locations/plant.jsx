/* ════════════════════════════════════════════════════════════════
   Hana — PLANT page TEMPLATE  ·  /locations/china/jiaxing/
   Jiaxing as the fully-filled reference. Sections:
     hero (+ breadcrumb) → key facts → certifications (prominent) →
     about + capabilities-at-this-site → location & logistics + map.
   heroStyle / accent / density come from Tweaks.
   ════════════════════════════════════════════════════════════════ */

/* ─── hero — three styles ──────────────────────────────────────── */
function PlantHero({ d, accent, heroStyle }) {
  const eyebrow =
  <div style={{ fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
    textTransform: 'uppercase', marginBottom: 12 }}>{d.eyebrow}</div>;

  if (heroStyle === 'veil') {
    const src = window.__resources && window.__resources[d.heroPhoto.src];
    return (
      <div className="lc-hero-veil" style={{ position: 'relative', height: 440, overflow: 'hidden', background: '#030a17' }}>
        {src && <img src={src} alt={d.heroPhoto.label || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
        {/* wafer-die texture strip on the left, masked to fade out */}
        <div className="lc-hero-tex" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '54%',
          WebkitMaskImage: 'linear-gradient(to right, #000 35%, transparent 100%)',
          maskImage: 'linear-gradient(to right, #000 35%, transparent 100%)', opacity: 0.85 }}></div>
        {/* navy veil for legibility */}
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(3,10,23,0.94) 0%, rgba(3,10,23,0.78) 30%, rgba(3,10,23,0.32) 52%, rgba(3,10,23,0) 72%)' }}></div>
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ maxWidth: 460 }}>
              <div style={{ color: '#7EC8FF', fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 14 }}>{d.eyebrow}</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 60, fontWeight: 700,
                letterSpacing: '-0.03em', lineHeight: 0.98, color: '#fff', margin: '0 0 18px' }}>{d.city}</h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)', margin: 0 }}>{d.lede}</p>
              {d.heroCta && <a href={d.heroCta.url} target="_blank" rel="noopener noreferrer" className="hana-btn hana-btn-on-dark" style={{ marginTop: 26, padding: '15px 30px', fontSize: 13 }}>{d.heroCta.label}<span style={{ marginLeft: 8 }}>{'\u2197'}</span></a>}
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', right: 16, bottom: 12, fontFamily: 'var(--font-mono)', fontSize: 10,
          letterSpacing: '0.04em', color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 5px rgba(0,0,0,0.7)', textTransform: 'uppercase' }}>{d.heroPhoto.label}</div>
      </div>);
  }

  if (heroStyle === 'split') {
    const src = window.__resources && window.__resources[d.heroPhoto.src] || d.heroPhoto.src;
    return (
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '24px 32px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.06fr', background: 'var(--hana-blue-deep)',
          borderRadius: 'var(--radius-panel)', overflow: 'hidden', minHeight: 408 }}>
          {/* text — left, on dark */}
          <div style={{ padding: '56px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#7EC8FF', fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>{d.eyebrow}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 54, fontWeight: 700, letterSpacing: '-0.03em',
              lineHeight: 1.0, color: '#fff', margin: '0 0 18px' }}>{d.city}</h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.82)', maxWidth: 460, margin: 0 }}>{d.lede}</p>
          </div>
          {/* factory image — right, flush to banner edge */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src={src} alt={d.heroPhoto.label || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            {d.heroPhoto.label &&
            <div style={{ position: 'absolute', left: 14, bottom: 12, fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.04em', color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.6)', textTransform: 'uppercase' }}>
                {d.heroPhoto.label}
              </div>}
          </div>
        </div>
      </div>);
  }

  if (heroStyle === 'texture') {
    return (
      <div className="lc-hero-texture" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '64px 32px 56px', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ color: accent, fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>{d.eyebrow}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 58, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.0, color: 'var(--ink)', margin: '0 0 18px' }}>{d.city}</h1>
            <p style={{ fontSize: 18.5, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: 560, margin: 0 }}>{d.lede}</p>
          </div>
        </div>
      </div>);
  }

  /* default: full-bleed image with dark gradient + overlaid title */
  return (
    <div style={{ position: 'relative', height: 440 }}>
      <Photo photo={{ src: d.heroPhoto.src }} height={440} radius={0} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,22,40,0.82) 0%, rgba(8,22,40,0.30) 48%, rgba(8,22,40,0.18) 100%)' }}></div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px 38px' }}>
          <div style={{ color: 'rgba(255,255,255,0.72)', fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>{d.eyebrow}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#fff', margin: '0 0 14px' }}>{d.city}</h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.88)', maxWidth: 580, margin: 0 }}>{d.lede}</p>
        </div>
      </div>
    </div>);
}

/* ─── key facts strip ──────────────────────────────────────────── */
function KeyFacts({ d }) {
  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '24px 32px 0' }}>
      <div className="hana-spec-block">
        {d.facts.map(([l, v]) =>
        <div key={l} className="hana-spec-item">
            <div className="hana-spec-label">{l}</div>
            <div className="hana-spec-value" style={{ fontFamily: 'var(--font-mono)' }}>{v}</div>
          </div>
        )}
      </div>
    </div>);
}

/* ─── partner logo — graceful fallback to a labeled placeholder ── */
function PartnerLogo({ partner, accent }) {
  const resolved = (window.__resources && window.__resources[partner.logo]) || partner.logo;
  const [ok, setOk] = React.useState(Boolean(resolved));
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff',
      border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', padding: '14px 16px', minHeight: 62 }}>
      {ok
        ? <img src={resolved} alt={partner.label} onError={() => setOk(false)}
            style={{ maxHeight: 54, maxWidth: '100%', objectFit: 'contain' }} />
        : <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', border: `1.5px solid ${accent}`, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SvgIcon name="shield" size={15} color={accent} />
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink-2)', lineHeight: 1.25 }}>{partner.label}</div>
          </div>}
    </div>);
}

/* ─── certifications — concise inline row, display-only ─────────── */
function CertBand({ d, accent, pad }) {
  return (
    <section style={{ background: 'linear-gradient(to right, rgba(14,74,124,0.11) 0%, rgba(14,74,124,0.04) 30%, rgba(245,247,250,0) 62%), var(--bg)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: `${pad - 28}px 32px` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, flexWrap: 'wrap' }}>
          <div className="hana-spec-label" style={{ color: accent }}>Certifications held at this site</div>
          <div style={{ flex: 1, height: 1, background: 'var(--line)', minWidth: 40 }}></div>
          <p style={{ fontSize: 11.5, color: 'var(--ink-3)', margin: 0 }}>
            Current 2026 · full certificates on request
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {d.certs.map((c) =>
          <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 13,
            background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', padding: '13px 16px' }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', border: `1.5px solid ${accent}`, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SvgIcon name="shield" size={17} color={accent} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.15 }}>{c.name}</div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 2 }}>{c.scope}</div>
              </div>
            </div>
          )}
          {(d.partners || []).map((p) =>
          <PartnerLogo key={p.label} partner={p} accent={accent} />
          )}
        </div>
      </div>
    </section>);
}

/* ─── about — blurb (left) · image box (right) ─────────────────── */
function AboutCapabilities({ d, accent, pad }) {
  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: `${pad}px 32px` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'start' }}>
        {/* left — about blurb */}
        <div>
          <div className="hana-spec-label" style={{ color: accent, marginBottom: 12 }}>{d.aboutLabel || ('About Hana ' + d.city)}</div>
          <h2 className="hana-h3" style={{ marginBottom: 18 }}>{d.aboutTitle}</h2>
          {d.about.map((p, i) =>
          <p key={i} style={{ fontSize: 15.5, color: 'var(--ink-2)', lineHeight: 1.7, margin: '0 0 16px', maxWidth: 540 }}>{p}</p>
          )}
          <a href="locations.html" className="hana-btn hana-btn-secondary" style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Explore locations hub <SvgIcon name="arrow-right" size={15} color="currentColor" />
          </a>
          {(d.siteLinks || []).length > 0 &&
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 9 }}>
            {d.siteLinks.map((s) =>
            <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="hana-link" style={{ fontSize: 13.5, fontWeight: 600 }}>
              {s.label} <span style={{ fontSize: 11 }}>{'\u2197'}</span>
            </a>)}
          </div>}
        </div>
        {/* right — image box */}
        <div>
          <Photo photo={{ label: 'Production floor \u2014 ' + d.city }} height={360} radius={12} />
        </div>
      </div>
    </div>);
}

/* ─── capabilities at this site — own mini section (dark carousel) ─── */
function CapabilityGroups({ d, accent, pad }) {
  const ref = React.useRef(null);
  const scroller = React.useRef(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  React.useEffect(() => {
    if (ref.current && window.HanaBG) {
      window.HanaBG.apply(ref.current, { pattern: 'grid', variant: 'dark', accent: 'cyan', fade: 'none' });
      const layer = ref.current.querySelector(':scope > .hana-bg-layer');
      if (layer) layer.style.opacity = 0.55;
    }
  }, []);

  const update = React.useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  React.useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scroll = (dir) => {
    const el = scroller.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: 'smooth' });
  };

  const dk = '#7EC8FF';
  const navBtn = (dir, disabled) =>
  <button onClick={() => scroll(dir)} disabled={disabled} aria-label={dir < 0 ? 'Previous' : 'Next'}
  className="cg-nav"
  style={{ width: 44, height: 44, borderRadius: '50%',
    border: dir < 0 ? '1px solid rgba(255,255,255,0.30)' : '1px solid transparent',
    background: dir < 0 ? 'transparent' : 'var(--hana-blue)',
    color: '#fff', cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.35 : 1,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background 150ms ease, border-color 150ms ease, opacity 150ms ease' }}>
    <span style={{ display: 'flex', transform: dir < 0 ? 'scaleX(-1)' : 'none' }}><SvgIcon name="arrow-right" size={17} color="currentColor" /></span>
  </button>;

  return (
    <section ref={ref} style={{ background: 'var(--hana-blue-deep)', position: 'relative', overflow: 'hidden' }}>
      <style>{`.cg-card{transition:transform 160ms ease, box-shadow 160ms ease;}
        .cg-card:hover{transform:translateY(-3px);box-shadow:0 12px 30px rgba(3,10,23,0.32);}
        .cg-link{transition:color 140ms ease;}
        .cg-link:hover{color:var(--hana-blue)!important;}
        .cg-arr{display:inline-block;vertical-align:middle;margin-left:6px;transition:transform 140ms ease;}
        .cg-link:hover .cg-arr{transform:translateX(3px);}
        .cg-title:hover{color:var(--hana-blue)!important;}
        .cg-scroll{scrollbar-width:none;-ms-overflow-style:none;}
        .cg-scroll::-webkit-scrollbar{display:none;}
        .cg-nav:hover:not(:disabled){filter:brightness(1.08);}`}</style>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: `${pad}px 32px`, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 28, flexWrap: 'wrap' }}>
          <div>
            <div className="hana-spec-label" style={{ color: dk, marginBottom: 10 }}>FACTORY SETUP</div>
            <h2 className="hana-h3" style={{ color: '#fff', marginBottom: 12 }}>Key Services and Capabilities</h2>
            <a href="/capabilities/" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: dk, textDecoration: 'none', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              See full capabilities <SvgIcon name="arrow-right" size={12} color={dk} />
            </a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            {navBtn(-1, atStart)}
            {navBtn(1, atEnd)}
          </div>
        </div>
        <div ref={scroller} className="cg-scroll" onScroll={update}
        style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 4 }}>
          {d.capabilityGroups.map((g) =>
          <div key={g.name} className="cg-card" style={{ flex: '0 0 300px', scrollSnapAlign: 'start', background: 'var(--surface)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 'var(--radius-card)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <Photo photo={g.photo} ratio="16 / 9" radius={0} />
            <div style={{ padding: 18, display: 'flex', flexDirection: 'column', flex: 1 }}>
              <a href={g.url} className="cg-title" style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: 7, textDecoration: 'none', transition: 'color 140ms ease' }}>{g.name}</a>
              <p style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.5, margin: '0 0 16px' }}>{g.desc}</p>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--line)', paddingTop: 12 }}>
                <div className="hana-spec-label" style={{ color: 'var(--ink-3)', marginBottom: 9 }}>Explore</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {g.links.map((l) =>
                  <li key={l.label}>
                    {l.url
                      ? <a href={l.url} className="cg-link" target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined} style={{ color: 'var(--hana-blue-deep)', textDecoration: 'none', fontSize: 12.5, fontWeight: 600, lineHeight: 1.5 }}>
                          {l.label}<span className="cg-arr">{l.external ? '\u2197' : <SvgIcon name="arrow-right" size={12} color="currentColor" />}</span>
                        </a>
                      : <span style={{ color: 'var(--ink-3)', fontSize: 12.5, fontWeight: 600, lineHeight: 1.5 }}>{l.label}</span>}
                  </li>)}
                </ul>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </section>);
}

function SampleProducts({ d, accent, pad }) {
  const scroller = React.useRef(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const update = React.useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  React.useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scroll = (dir) => {
    const el = scroller.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };

  const navBtn = (dir, disabled) =>
  <button onClick={() => scroll(dir)} disabled={disabled} aria-label={dir < 0 ? 'Previous' : 'Next'}
  style={{ width: 42, height: 42, borderRadius: 'var(--radius-btn, 4px)', border: '1px solid var(--line)',
    background: '#fff', color: disabled ? 'var(--ink-3)' : 'var(--ink)', cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.4 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 150ms ease, color 150ms ease' }}>
      <span style={{ display: 'flex', transform: dir < 0 ? 'scaleX(-1)' : 'none' }}><SvgIcon name="chevron-right" size={18} color="currentColor" /></span>
    </button>;

  return (
    <section style={{ background: '#fff', borderTop: '1px solid var(--line)' }}>
      <style>{`.lc-prod-scroll{scrollbar-width:none;-ms-overflow-style:none;}.lc-prod-scroll::-webkit-scrollbar{display:none;}
        .lc-prod-nav:hover:not(:disabled){border-color:var(--hana-blue)!important;color:var(--hana-blue)!important;}`}</style>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: `${pad}px 32px` }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 560 }}>
            <div className="hana-spec-label" style={{ color: accent, marginBottom: 10 }}>EXAMPLE PRODUCTS</div>
            <h2 className="hana-h3" style={{ marginBottom: 10 }}>{'Product Examples From Hana ' + d.city}</h2>
            <p style={{ fontSize: 13, color: 'var(--ink-3)', margin: 0, lineHeight: 1.55 }}>{'We build a diverse range of products at Hana ' + d.city + '.'}

            </p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {React.cloneElement(navBtn(-1, atStart), { className: 'lc-prod-nav' })}
            {React.cloneElement(navBtn(1, atEnd), { className: 'lc-prod-nav' })}
          </div>
        </div>
        <div ref={scroller} className="lc-prod-scroll" onScroll={update}
        style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 4 }}>
          {d.sampleProducts.map((p) =>
          <div key={p.name} style={{ flex: '0 0 274px', scrollSnapAlign: 'start' }}>
            <Photo photo={p.photo} ratio="4 / 3" radius={10} />
            <div style={{ marginTop: 12 }}>
              <div className="hana-spec-label" style={{ color: 'var(--ink-3)', marginBottom: 5 }}>{p.tag}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{p.name}</div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>);
}

/* ─── location & logistics + map ───────────────────────────────── */
function Logistics({ d, accent, pad }) {
  return (
    <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: `${pad}px 32px` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div className="hana-spec-label" style={{ color: accent, marginBottom: 12 }}>Location &amp; logistics</div>
            <h2 className="hana-h3" style={{ marginBottom: 16 }}>{d.region}</h2>
            <p style={{ fontSize: 15.5, color: 'var(--ink-2)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 500 }}>{d.logisticsLede}</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {d.logistics.map(([l, v], i) =>
              <div key={l} style={{ display: 'flex', gap: 20, padding: '13px 0',
                borderTop: '1px solid var(--line)', borderBottom: i === d.logistics.length - 1 ? '1px solid var(--line)' : 'none' }}>
                  <span className="hana-spec-label" style={{ width: 150, flexShrink: 0, paddingTop: 2 }}>{l}</span>
                  <span style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.45, whiteSpace: 'pre-line' }}>{v}</span>
                </div>
              )}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <Photo photo={d.mapPhoto} height={360} radius={12} />
            {/* a single pin centered on the map placeholder */}
            <div style={{ position: 'absolute', top: '46%', left: '52%', transform: 'translate(-50%,-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 10px rgba(3,10,23,.35)' }}>
                <SvgIcon name="map-pin" size={16} color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

function PlantPage({ accent = 'var(--hana-blue)', density = 'comfortable', heroStyle = 'image' }) {
  const d = window.PLANT_DETAIL || JIAXING;
  const pad = density === 'compact' ? 52 : 72;
  const heroRef = React.useRef(null);
  React.useEffect(() => {
    if (heroStyle === 'texture') {
      const el = document.querySelector('.lc-hero-texture');
      if (el && window.HanaBG) {
        window.HanaBG.apply(el, { pattern: 'halftone', variant: 'light', accent: '', fade: 'left' });
        const layer = el.querySelector(':scope > .hana-bg-layer');
        if (layer) layer.style.opacity = 0.5;
      }
    }
    if (heroStyle === 'veil') {
      const el = document.querySelector('.lc-hero-tex');
      if (el && window.HanaBG) window.HanaBG.apply(el, { pattern: 'wafer', variant: 'dark', accent: 'cyan', fade: 'none' });
    }
  }, [heroStyle]);

  return (
    <div style={{ background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-text)' }}>
      <style>{`
        .lc-cap-row:hover{ padding-left: 12px !important; background: var(--bg); }
        .lc-cap-link:hover{ gap: 11px !important; }
      `}</style>
      <LocHeader />
      <LocBreadcrumb trail={[
      { label: 'Locations', href: 'locations.html' },
      { label: d.country, href: '#' },
      { label: d.city }]
      } />

      <PlantHero d={d} accent={accent} heroStyle={heroStyle} />
      <CertBand d={d} accent={accent} pad={pad} />
      <AboutCapabilities d={d} accent={accent} pad={pad} />
      <CapabilityGroups d={d} accent={accent} pad={pad} />
      <SampleProducts d={d} accent={accent} pad={pad} />
      <Logistics d={d} accent={accent} pad={pad} />

      <ClosingCta
        title={'Request a quote from ' + d.city}
        body={'Our engineering team in ' + d.city + ' reviews every enquiry and responds within two business days.'}
        primary="Request a quote" secondary="Email this plant" />

      <SubCapFooter />
    </div>);
}

Object.assign(window, { PlantPage });