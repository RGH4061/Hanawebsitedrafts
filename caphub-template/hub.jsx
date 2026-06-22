/* ════════════════════════════════════════════════════════════════
   Hana — Capability PARENT HUB · sections + page assembly
   Reuses the sub-capability chrome (header, sidebar, footer, Photo,
   SvgIcon) so the rail is identical to the sub-capability page. The
   page's job: describe the parent capability, then let the visitor
   pick a sub-capability. Accent comes from --accent on .hub-main.
   ════════════════════════════════════════════════════════════════ */

/* ─── textured band: full-bleed ground + centred content column ── */
function HubBand({ bg = '#fff', pattern = null, variant = 'light', accent = '', opacity = 1, layerBg = null, pad = '8px 48px', lift = false, children }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && pattern && window.HanaBG) {
      window.HanaBG.apply(ref.current, { pattern, variant, accent, fade: 'none' });
      const layer = ref.current.querySelector(':scope > .hana-bg-layer');
      if (layer) {
        layer.style.opacity = opacity;
        if (layerBg !== null) layer.style.background = layerBg;
      }
    }
  }, [pattern, variant, accent, opacity, layerBg]);
  return (
    <div ref={ref} style={{ background: bg, position: 'relative', overflow: 'hidden', zIndex: lift ? 1 : 'auto' }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto', padding: pad }}>
        {children}
      </div>
    </div>);

}

/* ─── breadcrumb (parent-level) ─────────────────────────────── */
function HubBreadcrumb({ parentName }) {
  return (
    <div style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '11px 32px', fontSize: 12.5,
        color: 'var(--ink-3)', display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--font-text)' }}>
        <a href="#" className="hana-link" style={{ fontSize: 12.5 }}>Capabilities</a>
        <span style={{ color: 'var(--line)' }}>›</span>
        <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{parentName}</span>
      </div>
    </div>);

}

/* ─── hero — parent capability blurb + key spec strip ───────── */
function HubHero({ hub }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <div style={{ fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
        {hub.eyebrow}
      </div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 18px', maxWidth: 760, textWrap: 'balance' }}>
        {hub.title}
      </h1>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 18.5, color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: 680, margin: '0 0 32px', textWrap: 'pretty' }}>
        {hub.intro}
      </p>
      <Photo photo={hub.heroPhoto} height={320} radius={10} />
    </div>);

}

/* ─── the core: selectable sub-capability cards ─────────────── */
function SubSelector({ hub }) {
  const n = hub.subs.length;
  const cols = n === 2 ? 2 : n === 4 ? 2 : 3;
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ marginBottom: 26 }}>
        <div style={{ fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7EC8FF', marginBottom: 12 }}>CHOOSE A DETAILED CAPABILITY

        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 10px' }}>
          Explore {hub.parentName}
        </h2>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 15.5, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: 660, margin: 0 }}>
          {hub.subsLead}
        </p>
      </div>

      <style>{`
        .hub-card{transition:border-color 170ms ease, box-shadow 170ms ease, transform 170ms ease;}
        .hub-card:hover{border-color:color-mix(in srgb, var(--accent) 60%, var(--line))!important;
          box-shadow:0 8px 22px rgba(18,131,221,.12);transform:translateY(-2px);}
        .hub-card:hover .hub-card-go{gap:10px;}
      `}</style>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 18 }}>
        {hub.subs.map((s, i) => {
          const href = hubSubHref(s.slug);
          const live = href !== '#';
          return (
            <a key={s.slug} href={href} className="hub-card"
            style={{ textDecoration: 'none', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)',
              background: '#fff', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ position: 'relative' }}>
                <Photo photo={s.photo || { label: s.name }} ratio="16 / 9" radius={0} />
                {!live &&
                <span style={{ position: 'absolute', top: 10, right: 10, fontFamily: 'var(--font-text)', fontSize: 9, fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)', background: 'rgba(255,255,255,0.92)',
                  border: '1px solid var(--line)', borderRadius: 4, padding: '3px 7px' }}>Page in progress</span>
                }
              </div>
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: 9, textWrap: 'balance' }}>
                  {s.name}
                </div>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.55, margin: '0 0 18px' }}>
                  {s.blurb}
                </p>
                <span className="hub-card-go" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: 'var(--font-text)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--accent)', transition: 'gap 170ms ease' }}>
                  View capability <SvgIcon name="arrow-right" size={13} color="var(--accent)" />
                </span>
              </div>
            </a>);

        })}
      </div>
    </div>);

}

/* ─── what ties the group together (3 compact value points) ──── */
function HubTies() {
  const items = [
  { t: 'Vertically integrated', d: 'EMS and OSAT under one group, not subcontracted — fewer handoffs between processes and one point of accountability.' },
  { t: 'Inspected by default', d: 'SPI, AOI and X-ray with full material, unit and product traceability — on every board, not only high-reliability work.' },
  { t: 'Portable across sites', d: 'Qualified across China, Thailand, Cambodia and the USA, so a program can move sites as a first-article qualification.' }];

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
        {items.map((it, i) =>
        <div key={it.t} style={{ paddingTop: 18, borderTop: '2px solid var(--accent)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)', marginBottom: 8 }}>0{i + 1}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: 8 }}>{it.t}</div>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{it.d}</p>
          </div>
        )}
      </div>
    </div>);

}

/* ─── closing CTA (textured deep-blue panel) ─────────────────── */
function HubClosing({ hub }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.HanaBG) window.HanaBG.apply(ref.current, { pattern: 'halftone', variant: 'dark', accent: '', fade: 'none' });
  }, []);
  return (
    <section ref={ref} style={{ background: 'var(--hana-blue-deep)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '64px 48px', position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 48, alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 12px', maxWidth: 560, textWrap: 'balance' }}>
            Adapted to you.<br />Contact us to discover Hana's detailed list of capabilities.
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: 0, maxWidth: 480 }}>Start a conversation with our engineering team today  

          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#" className="hana-btn hana-btn-on-dark">Request a quote <SvgIcon name="arrow-right" size={14} color="var(--hana-blue)" /></a>
          <a href="#" className="hana-btn hana-btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>Talk to an engineer</a>
        </div>
      </div>
    </section>);

}

/* ─── page assembly + tweaks ─────────────────────────────────── */
const HUB_TWEAK_FALLBACK = { hub: 'pcba-box-build', accent: '#1283DD', showSidebar: true };

function CapHubPage() {
  const { useState } = React;
  const [t, setTweak] = useTweaks(window.HUB_TWEAK_DEFAULTS || HUB_TWEAK_FALLBACK);
  const [collapsed, setCollapsed] = useState(false);

  const hub = CAP_HUBS[t.hub] || CAP_HUBS['pcba-box-build'];
  const showRail = t.showSidebar;

  return (
    <div style={{ background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-text)' }}>
      <SubCapHeader />
      <HubBreadcrumb parentName={hub.parentName} />

      <div style={{
        maxWidth: 1240, margin: '0 auto', display: 'grid',
        gridTemplateColumns: showRail ? `${collapsed ? 56 : 272}px minmax(0,1fr)` : 'minmax(0,1fr)',
        background: '#fff', transition: 'grid-template-columns 200ms ease-out'
      }}>
        {showRail &&
        <CapabilitySidebar
          activeSlug={hub.slug}
          activeGroup={hub.slug}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          onSelect={(slug) => {const h = hubSubHref(slug);if (h !== '#') window.location.href = h;}} />
        }

        <main className="hub-main" style={{ minWidth: 0, position: 'relative', overflow: 'hidden', ['--accent']: t.accent }}>
          <HubBand bg="#fff" pad="56px 48px 36px" lift={true}>
            <HubHero hub={hub} />
          </HubBand>
          <HubBand bg="var(--hana-blue-deep)" pattern="halftone" variant="dark" opacity={0.6} layerBg="transparent" pad="48px 48px 56px">
            <SubSelector hub={hub} />
          </HubBand>
        </main>
      </div>

      <div style={{ height: 64, background: '#fff' }} />
      <HubClosing hub={hub} />
      <SubCapFooter />

      <TweaksPanel>
        {window.HUB_SHOW_PICKER &&
        <React.Fragment>
          <TweakSection label="Capability" />
          <TweakSelect
            label="Parent capability"
            value={t.hub}
            options={HUB_OPTIONS.map((o) => ({ value: o.slug, label: o.label }))}
            onChange={(v) => setTweak('hub', v)} />
        </React.Fragment>
        }
        <TweakSection label="Accent" />
        <TweakColor label="Capability accent" value={t.accent} options={['#1283DD', '#0E9E8A']} onChange={(v) => setTweak('accent', v)} />
        <TweakSection label="Layout" />
        <TweakToggle label="Browse sidebar" value={t.showSidebar} onChange={(v) => setTweak('showSidebar', v)} />
      </TweaksPanel>
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<CapHubPage />);