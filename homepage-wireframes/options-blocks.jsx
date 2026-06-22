// MarketsOptionsBlocks — three layout options for the "Markets we serve"
// block, stacked for side-by-side comparison on its own artboard.
//
// Lifted from v1b-image-led.jsx (M-A / M-B / M-C). The homepage uses Option B;
// this artboard preserves all three for reference.

function MarketsOptionsBlocks() {
  const sectionWrap = { maxWidth: 1280, margin: '0 auto' };

  const markets = [
    { name: 'Automotive', body: 'Power modules, ADAS, EV charging, lighting.' },
    { name: 'Industrial & IoT', body: 'Sensors, controllers, smart factory equipment.' },
    { name: 'Telecommunications', body: 'Network infrastructure and gateways.' },
    { name: 'RFID', body: 'Inlays, tire tags, smart labels.' },
    { name: 'Optical & sensors', body: 'Camera modules and image sensors.' },
    { name: 'Consumer electronics', body: 'Wearables, accessories, peripherals.' },
    { name: 'Medical', body: 'Patient monitoring and diagnostics.' },
    { name: 'Access control', body: 'Smart cards, readers, security tokens.' },
    { name: 'Power management', body: 'Power supplies and conversion.' },
    { name: 'Data Centers', body: 'AI infrastructure, HPC, power modules for GPU clusters.' },
  ];

  const li = (n, size = 14, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {n === 'arrow-right' && <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>}
    </svg>
  );

  const Ph = ({ label, ratio = '16/9' }) => (
    <div style={{
      aspectRatio: ratio, background: 'var(--surface)',
      border: '1px solid var(--line)', borderRadius: 6,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', fontSize: 11,
      letterSpacing: 0, textAlign: 'center', padding: '0 12px',
    }}>
      <span style={{ opacity: .8 }}>[ {label} ]</span>
    </div>
  );

  const Label = ({ tone = 'light', name, desc }) => (
    <div style={{ ...sectionWrap, padding: '20px 32px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--hana-blue)',
          background: tone === 'light' ? 'var(--surface)' : '#fff',
          border: '1px solid var(--line)', padding: '3px 8px', borderRadius: 3,
        }}>{name}</span>
        <span className="hana-data" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{desc}</span>
      </div>
    </div>
  );

  const SectionHeader = ({ mb = 28 }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: mb, gap: 32 }}>
      <div>
        <div className="hana-spec-label" style={{ marginBottom: 12 }}>Markets we serve</div>
        <h2 className="hana-h2">Ten markets. Decades of expertise in each.</h2>
      </div>
      <a href="#" className="hana-link" style={{ fontSize: 14, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        All markets {li('arrow-right', 14)}
      </a>
    </div>
  );

  return (
    <div style={{ background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-text)' }}>
      {/* Top intro band */}
      <div style={{ ...sectionWrap, padding: '40px 32px 8px' }}>
        <div className="hana-spec-label" style={{ marginBottom: 8 }}>Block exploration</div>
        <h1 className="hana-hero" style={{ fontSize: 36, lineHeight: 1.15, margin: 0 }}>Markets block — three options.</h1>
        <p className="hana-body" style={{ marginTop: 12, maxWidth: 720 }}>
          Same ten markets, three densities. Compare the visual weight, the scanning
          pattern, and how much vertical real estate each option claims on the homepage.
        </p>
      </div>

      {/* ── M-A — Full-bleed overlay cards, elevated ────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px dashed var(--hana-blue)', marginTop: 24 }}>
        <style>{`
          .ma-card { transition: border-color 150ms ease; }
          .ma-card:hover { border-color: var(--hana-blue) !important; }
          .ma-card:hover .ma-card-name { color: #7EC8FF !important; }
          .ma-card:hover .ma-card-arrow { opacity: 1 !important; transform: translateX(3px); }
          .ma-card .ma-card-arrow { transition: opacity 150ms ease, transform 150ms ease; }
        `}</style>
        <Label tone="light" name="Option A" desc="Full-bleed overlay tiles · text on gradient · 5×2 grid" />
        <div style={{ ...sectionWrap, padding: '32px 32px 72px' }}>
          {/* Section header — more editorial */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, gap: 32 }}>
            <div>
              <div className="hana-spec-label" style={{ marginBottom: 14 }}>Markets we serve</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36,
                letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--ink)', margin: 0, maxWidth: 640 }}>
                Ten markets. Decades of expertise in each.
              </h2>
            </div>
            <a href="#" className="hana-link" style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap',
              display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.06em', textTransform: 'uppercase' }}>
              All markets {li('arrow-right', 13, 'var(--hana-blue)')}
            </a>
          </div>

          {/* Grid — 5 cols × 2 rows = 10 markets exactly */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
            {markets.map((m, i) => (
              <a key={m.name} href="#" className="ma-card" style={{
                position: 'relative', overflow: 'hidden', textDecoration: 'none',
                borderRadius: 8, border: '1px solid rgba(255,255,255,.08)',
                aspectRatio: '4/5',
                display: 'block',
                background: '#0a0a0a',
              }}>
                {/* Automotive / Industrial — real images; others — circuit grid texture */}
                {m.name === 'Automotive' ? (
                  <img
                    src="uploads/patrick-langwallner-O8wEyekFJtI-unsplash.jpg"
                    alt=""
                    style={{
                      position: 'absolute', inset: 0, width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: '28% 18%',
                    }}
                  />
                ) : m.name === 'Industrial & IoT' ? (
                  <img
                    src="uploads/parej-richard-pxs2yJ6Lb9k-unsplash.jpg"
                    alt=""
                    style={{
                      position: 'absolute', inset: 0, width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: '28% 18%',
                    }}
                  />
                ) : (
                  <div style={{ position: 'absolute', inset: 0,
                    background: '#0d1117',
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
                    backgroundSize: '32px 24px' }} />
                )}

                {/* Bottom-to-top black fade — ensures white text legibility */}
                <div style={{ position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,.92) 0%, rgba(0,0,0,.48) 45%, rgba(0,0,0,.10) 72%, transparent 100%)' }} />

                {/* Text content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '16px 16px', zIndex: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                    <div>
                      <h3 className="ma-card-name" style={{
                        fontFamily: 'var(--font-display)', fontWeight: 600,
                        fontSize: 15, letterSpacing: '-0.015em',
                        lineHeight: 1.2, color: '#fff', margin: '0 0 5px',
                        transition: 'color 150ms ease',
                      }}>{m.name}</h3>
                      <p style={{ fontFamily: 'var(--font-text)', fontSize: 11,
                        lineHeight: 1.45, color: 'rgba(255,255,255,.62)', margin: 0 }}>
                        {m.body}
                      </p>
                    </div>
                    <div className="ma-card-arrow" style={{ flexShrink: 0, opacity: 0 }}>
                      {li('arrow-right', 13, 'rgba(255,255,255,.8)')}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── M-B — horizontal cards (small square image left, text right) ─── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label tone="surface" name="Option B" desc="Horizontal cards · 88px square thumbnail · used on homepage" />
        <div style={{ ...sectionWrap, padding: '32px 32px 64px' }}>
          <SectionHeader />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {markets.map(m => (
              <a key={m.name} href="#" className="hana-card" style={{
                padding: 12, textDecoration: 'none', color: 'inherit',
                display: 'flex', gap: 14, alignItems: 'center', background: '#fff',
              }}>
                <div style={{ width: 88, height: 88, flexShrink: 0, borderRadius: 6, overflow: 'hidden',
                  border: '1px solid var(--line)', background: 'var(--surface)' }}>
                  {m.name === 'Automotive' ? (
                    <img src="uploads/patrick-langwallner-O8wEyekFJtI-unsplash.jpg" alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '28% 18%' }} />
                  ) : m.name === 'Industrial & IoT' ? (
                    <img src="uploads/parej-richard-pxs2yJ6Lb9k-unsplash.jpg" alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', color: 'var(--ink-3)', fontFamily: 'var(--font-mono)',
                      fontSize: 10, padding: 6, textAlign: 'center' }}>
                      [ {m.name.split(' ')[0]} ]
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0, flex: 1 }}>
                  <h3 className="hana-h3" style={{ fontSize: 15 }}>{m.name}</h3>
                  <p className="hana-body" style={{ fontSize: 12, margin: 0, color: 'var(--ink-2)', lineHeight: 1.45 }}>{m.body}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── M-C — thumbnail strip + dense text list ────────── */}
      <section style={{ background: '#fff', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label tone="light" name="Option C" desc="Thumbnail strip + 3-column list · smallest footprint" />
        <div style={{ ...sectionWrap, padding: '32px 32px 64px' }}>
          <SectionHeader mb={24} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 8, marginBottom: 24 }}>
            {markets.map(m => (
              <div key={m.name + '-thumb'} style={{
                aspectRatio: '1/1', borderRadius: 6, overflow: 'hidden',
                border: '1px solid var(--line)', position: 'relative',
                background: 'var(--surface)',
              }}>
                {m.name === 'Automotive' ? (
                  <img src="uploads/patrick-langwallner-O8wEyekFJtI-unsplash.jpg" alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '28% 18%' }} />
                ) : m.name === 'Industrial & IoT' ? (
                  <img src="uploads/parej-richard-pxs2yJ6Lb9k-unsplash.jpg" alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end',
                    padding: 8, color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', fontSize: 9, lineHeight: 1.2 }}>
                    {m.name.split(' ')[0]}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 32, rowGap: 0,
            borderTop: '1px solid var(--line)' }}>
            {markets.map((m, i) => (
              <a key={m.name + '-row'} href="#" style={{
                padding: '14px 0', borderBottom: '1px solid var(--line)',
                textDecoration: 'none', color: 'inherit',
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16,
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                  <h3 className="hana-h3" style={{ fontSize: 14 }}>{m.name}</h3>
                  <p className="hana-body" style={{ fontSize: 12, margin: 0, color: 'var(--ink-3)', lineHeight: 1.4 }}>{m.body}</p>
                </div>
                <span style={{ color: 'var(--hana-blue)', flexShrink: 0 }}>{li('arrow-right', 14, 'var(--hana-blue)')}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
