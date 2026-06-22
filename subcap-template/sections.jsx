/* ════════════════════════════════════════════════════════════════
   Hana — Sub-capability page TEMPLATE · content sections (V1 layout)
   Light · per-pillar photos · moderate spec. All accent color comes
   from the CSS var --accent set on the .subcap-main wrapper, so the
   capability axis can run blue (default) or teal per the design system.
   ════════════════════════════════════════════════════════════════ */

/* numbered section header */
function SectionHead({ number, title, lead }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <div style={{ marginBottom: 10 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 }}
        dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      {lead && <p style={{ fontFamily: 'var(--font-text)', fontSize: 15.5, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 640, margin: 0 }} dangerouslySetInnerHTML={{ __html: lead }} />}
    </div>);

}

/* ─── hero ───────────────────────────────────────────────────── */
function Hero({ data }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <div style={{ fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
        {data.eyebrow}
      </div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 46, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.06, letterSpacing: '-0.03em', margin: '0 0 18px', maxWidth: 740, textWrap: 'balance' }}>
        {data.title}
      </h1>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: 660, margin: '0 0 32px', textWrap: 'pretty' }}>
        {data.intro}
      </p>
      <Photo photo={data.heroPhoto} height={340} radius={10} />
      {/* key spec strip */}
      <div className="hana-spec-block" style={{ marginTop: 18 }}>
        {data.heroStats.map(([v, l]) =>
        <div key={l} className="hana-spec-item">
            <div className="hana-spec-label" style={{ display: 'block', marginBottom: 8 }}>{l}</div>
            <div className="hana-spec-value" style={{ fontFamily: 'var(--font-mono)', fontSize: v.length > 5 ? 17 : 22 }}>{v}</div>
          </div>
        )}
      </div>
    </div>);

}

/* ─── pillars — three photo-topped cards ─────────────────────── */
function Pillars({ data, showSpecs, num = '01' }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHead number={num} title="Capability overview" lead={data.pillarsLead} />
      <style>{`
        .sc-pillar{transition:border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;}
        .sc-pillar:hover{border-color:color-mix(in srgb, var(--accent) 55%, var(--line))!important;box-shadow:0 6px 18px rgba(18,131,221,.10);transform:translateY(-2px);}
      `}</style>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {data.pillars.map((p) =>
        <div key={p.title} className="sc-pillar" style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative' }}>
              <Photo photo={p.photo} height={150} radius={0} />
              <div style={{ position: 'absolute', top: 12, left: 12, width: 34, height: 34, borderRadius: 8, background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(3,10,23,.25)' }}>
                <SvgIcon name={p.icon} size={18} color="#fff" />
              </div>
            </div>
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: 10 }}>{p.title}</div>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.55, margin: '0 0 16px' }} dangerouslySetInnerHTML={{ __html: p.blurb }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px' }}>
                {p.points.map((tx, i) =>
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: 8, alignItems: 'baseline', padding: '6px 0' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>›</span>
                    <span style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: tx }} />
                  </li>
              )}
              </ul>
              {showSpecs &&
            <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {p.specs.map(([l, v]) =>
              <div key={l}>
                      <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-3)', marginBottom: 3 }}>{l}</div>
                      <div style={{ fontSize: 12.5, color: 'var(--ink)', fontWeight: 600, fontFamily: 'var(--font-mono)', lineHeight: 1.3 }} dangerouslySetInnerHTML={{ __html: v }} />
                    </div>
              )}
                </div>
            }
            </div>
          </div>
        )}
      </div>
    </div>);

}

/* ─── alternating image + bullet rows ────────────────────────── */
function WhyRows({ data, num = '02' }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <SectionHead number={num} title={`Why run ${data.navTitle.replace(' Assembly', '')} with Hana`} lead={data.whyLead} />
      {data.whyRows.map((r, idx) => {
        const flip = idx % 2 === 1;
        return (
          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: 36 }}>
            <div style={{ order: flip ? 2 : 1 }}>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 10 }}>{r.eyebrow}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 12px', textWrap: 'balance' }}>{r.title}</h3>
              {r.blurb && <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 16px', maxWidth: 460 }} dangerouslySetInnerHTML={{ __html: r.blurb }} />}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {r.points.map((tx, i) =>
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 10, alignItems: 'baseline', padding: '10px 0',
                  borderTop: '1px solid var(--line)', borderBottom: i === r.points.length - 1 ? '1px solid var(--line)' : 'none' }}>
                    <span style={{ color: 'var(--accent)', fontSize: 15, fontWeight: 700, lineHeight: 1 }}>›</span>
                    <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: tx }} />
                  </li>
                )}
              </ul>
            </div>
            <div style={{ order: flip ? 1 : 2 }}>
              <Photo photo={r.photo} height={320} radius={10} />
            </div>
          </div>);

      })}
    </div>);

}

/* ─── mid-page CTA band ───────────────────────────────────────── */
function MidCta() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.HanaBG) {
      window.HanaBG.apply(ref.current, { pattern: 'pcb', variant: 'dark', accent: '', fade: 'none' });
    }
  }, []);
  return (
    <div ref={ref} style={{ margin: '0 0 64px', padding: '30px 34px', borderRadius: 'var(--radius-panel)', background: 'var(--hana-blue-deep)', color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 620, position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', marginBottom: 10 }}>Send us your BOM</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
          We’ll respond with a DFM read and an indicative quote within two business days.
        </div>
      </div>
      <a href="#" className="hana-btn hana-btn-on-dark" style={{ whiteSpace: 'nowrap', position: 'relative', zIndex: 1 }}>
        Send to engineering <SvgIcon name="arrow-right" size={14} color="var(--hana-blue)" />
      </a>
    </div>);

}

/* ─── locations — plant cards with CTA ───────────────────────── */
function Locations({ data, num = '03', cols = null }) {
  const plants = data.sites.flatMap((s) =>
  s.sites.split(' · ').map((name) => ({ country: s.country, name }))
  );
  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHead number={num} title={`Where we run ${data.navTitle.replace(' Assembly', '')}`} lead={data.sitesLead} />
      <div style={{ display: 'grid', gridTemplateColumns: cols ? `repeat(${cols}, 1fr)` : 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {plants.map((p) =>
        <a key={p.country + p.name} href="#"
        style={{ textDecoration: 'none', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', padding: 22, background: '#fff',
          display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
                <SvgIcon name="map-pin" size={14} color="var(--accent)" />
                <span style={{ fontFamily: 'var(--font-text)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>{p.country}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{p.name}</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-text)', fontSize: 13.5, fontWeight: 600, color: 'var(--accent)' }}>
              Explore {p.name} <SvgIcon name="arrow-right" size={13} color="var(--accent)" />
            </span>
          </a>
        )}
      </div>
    </div>);

}

/* ─── FAQ accordion (kept from the template) ─────────────────── */
function Faq({ data, num = '05' }) {
  const { useState } = React;
  const [open, setOpen] = useState(0);
  return (
    <div style={{ marginBottom: 8 }}>
      <SectionHead number={num} title="Frequently asked questions" />
      <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', overflow: 'hidden', background: '#fff' }}>
        {data.faq.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderTop: i > 0 ? '1px solid var(--line)' : 'none' }}>
              <button type="button" onClick={() => setOpen(isOpen ? -1 : i)}
              style={{ width: '100%', textAlign: 'left', cursor: 'pointer', background: isOpen ? 'var(--bg)' : '#fff', border: 'none',
                padding: '18px 22px', display: 'grid', gridTemplateColumns: '1fr 28px', gap: 12, alignItems: 'baseline', fontFamily: 'inherit' }}>
                <span style={{ fontFamily: 'var(--font-text)', fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: it.q }} />
                <span style={{ color: 'var(--accent)', fontSize: 22, lineHeight: 1, justifySelf: 'end', userSelect: 'none',
                  transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 150ms ease' }}>+</span>
              </button>
              {isOpen &&
              <div style={{ padding: '0 22px 20px', fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.65, maxWidth: 720 }}
              dangerouslySetInnerHTML={{ __html: it.a }} />
              }
            </div>);

        })}
      </div>
    </div>);

}

/* ─── cert strip ─────────────────────────────────────────────── */
function CertStrip() {
  return (
    <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '26px 48px', display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
        <span className="hana-spec-label" style={{ whiteSpace: 'nowrap' }}>{CLOSING.certLabel}</span>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {CERTS.map((c) =>
          <div key={c} style={{ padding: '0 16px', height: 44, background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--radius-button)',
            display: 'flex', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-2)' }}>{c}</div>
          )}
        </div>
      </div>
    </div>);

}

/* ─── example box build products ────────────────────────────── */
function ExampleProducts({ num = '04' }) {
  const slots = [
  { id: 'box-product-1', label: 'Product 01' },
  { id: 'box-product-2', label: 'Product 02' },
  { id: 'box-product-3', label: 'Product 03' },
  { id: 'box-product-4', label: 'Product 04' }];

  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHead
        number={num}
        title="Example products we build"
        lead="A sample of finished box-build assemblies — from board to packed unit, across enclosure types and volumes." />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {slots.map((s) =>
        <div key={s.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            background: 'var(--surface)',
            aspectRatio: '4/3',
            display: 'flex',
            alignItems: 'stretch'
          }}>
              <image-slot
              id={s.id}
              shape="rect"
              placeholder="Drop a product photo"
              style={{ width: '100%', height: '100%', display: 'block' }}>
            </image-slot>
            </div>
            <div style={{
            fontFamily: 'var(--font-text)',
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--ink-3)'
          }}>{s.label}</div>
          </div>
        )}
      </div>
    </div>);

}

/* ─── closing CTA ────────────────────────────────────────────── */
function ClosingCta({ data }) {
  const kind = data.navTitle.replace(' Assembly', '');
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.HanaBG) {
      window.HanaBG.apply(ref.current, { pattern: 'pcb', variant: 'dark', accent: '', fade: 'none' });
    }
  }, []);
  return (
    <section ref={ref} style={{ background: 'var(--hana-blue-deep)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 48px', position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 48, alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 12px', maxWidth: 560, textWrap: 'balance' }}>
            Have a {kind} program in mind?
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: 0, maxWidth: 480 }}>
            Send us your BOM and target volumes. We’ll come back with a DFM read, an indicative lead time, and a price.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#" className="hana-btn hana-btn-on-dark">Request a quote <SvgIcon name="arrow-right" size={14} color="var(--hana-blue)" /></a>
          <a href="#" className="hana-btn hana-btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>Talk to an engineer</a>
        </div>
      </div>
    </section>);

}

Object.assign(window, { SectionHead, Hero, Pillars, WhyRows, MidCta, Locations, Faq, CertStrip, ClosingCta, ExampleProducts });