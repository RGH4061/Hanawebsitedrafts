/* V1 — Classic authority hero.
   Dark blue split hero, stat bar, "What we do" intro,
   Markets grid (3x3), Capabilities strip, case-study, CTA. */

function HomepageV1() {
  return (
    <div className="hana-wf">
      <WfNav active="Home" />

      {/* HERO */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 480 }}>
        <div style={{
          background: 'var(--blue-dark)', color: 'var(--white)',
          padding: '72px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: '#7EC8FF', fontWeight: 700, marginBottom: 14 }}>
            EMS · OSAT · Vertical Integration
          </p>
          <h1 style={{ fontSize: 46, fontWeight: 800, lineHeight: 1.1, marginBottom: 22 }}>
            Forty years of <span style={{ color: '#7EC8FF' }}>electronics manufacturing</span>, built into every board we ship.
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.78)', maxWidth: 480, marginBottom: 32 }}>
            Hana is one of the few manufacturers in Asia offering both EMS and OSAT under one group — across nine markets, four countries, and the full vertical chain from die to box build.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#" className="btn-on-dark">Explore Markets</a>
            <a href="#" className="btn-outline">View Capabilities</a>
          </div>
        </div>
        <ImgPh label="Hero — production floor / hero shot" />
      </div>

      <StatBar stats={[
        { num: '40+',     label: 'Years Manufacturing' },
        { num: '6',       label: 'Production Sites' },
        { num: '9',       label: 'Markets Served' },
        { num: 'EMS+OSAT',label: 'Vertically Integrated' },
        { num: '0 ppm',   label: 'Target Defect Rate' },
      ]} />

      {/* WHO WE ARE */}
      <section className="wf-section" style={{ background: 'var(--white)' }}>
        <div className="wf-inner">
          <p className="section-tag">Who We Are</p>
          <div className="divider"></div>
          <h2 className="section-title">An industry veteran in electronics manufacturing.</h2>
          <p className="section-lead" style={{ maxWidth: 760 }}>
            Founded in 1978, Hana Microelectronics is a publicly listed group with manufacturing sites across Thailand, China, Cambodia, and the USA. We combine printed circuit board assembly (EMS) with semiconductor packaging (OSAT) — a combination almost no competitor in the region can match.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginTop: 32 }}>
            <div style={{ background: 'var(--gray-100)', borderRadius: 'var(--radius)', padding: 28, borderLeft: '4px solid var(--blue)' }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>EMS — Electronics Manufacturing</h3>
              <p style={{ fontSize: 14, color: 'var(--gray-700)' }}>PCBA, box build, SMT, COB, flip chip — at automotive- and medical-grade quality.</p>
            </div>
            <div style={{ background: 'var(--teal-light)', borderRadius: 'var(--radius)', padding: 28, borderLeft: '4px solid var(--teal)' }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>OSAT — IC Assembly &amp; Test</h3>
              <p style={{ fontSize: 14, color: 'var(--gray-700)' }}>System in Package, IC packaging and test, RFID inlays — backed by decades of semiconductor process maturity.</p>
            </div>
            <div style={{ background: 'var(--amber-light)', borderRadius: 'var(--radius)', padding: 28, borderLeft: '4px solid var(--amber)' }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>Vertical Integration</h3>
              <p style={{ fontSize: 14, color: 'var(--gray-700)' }}>From die-level packaging to fully assembled, tested products — single-source accountability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS — 3x3 GRID */}
      <section className="wf-section" style={{ background: 'var(--gray-100)' }}>
        <div className="wf-inner">
          <p className="section-tag">Markets We Serve</p>
          <div className="divider"></div>
          <h2 className="section-title">Nine markets. Four decades of expertise. <span className="anno">3×3 market grid</span></h2>
          <p className="section-lead">
            We manufacture for procurement teams across nine industries. Pick yours to see what we build, where we build it, and the capabilities behind it.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {MARKETS.map(m => (
              <a href="#" key={m.name} style={{
                background: 'var(--white)', border: '1px solid var(--gray-300)',
                borderRadius: 'var(--radius)', padding: 0,
                textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column',
                boxShadow: 'var(--shadow)', overflow: 'hidden',
              }}>
                <div style={{ height: 120, background: 'var(--blue-light)' }}>
                  <ImgPh label={`${m.name} image`} />
                </div>
                <div style={{ padding: '18px 20px', borderTop: '3px solid var(--blue)' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{m.name}</h3>
                  <p style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 10 }}>{m.desc}</p>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--blue)' }}>View market →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="wf-section" style={{ background: 'var(--white)' }}>
        <div className="wf-inner">
          <p className="section-tag" style={{ color: 'var(--teal-dark)' }}>Capabilities</p>
          <div className="divider" style={{ background: 'var(--teal)' }}></div>
          <h2 className="section-title">Looking for a specific capability?</h2>
          <p className="section-lead">For engineers and technical buyers — five capability families spanning EMS and OSAT.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12 }}>
            {CAPABILITIES.map(c => (
              <a href="#" key={c.name} style={{
                background: 'var(--teal-light)', border: '1px solid var(--teal)',
                borderRadius: 'var(--radius)', padding: '20px 18px',
                textDecoration: 'none', color: 'var(--teal-dark)',
              }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{c.name}</h3>
                <p style={{ fontSize: 12, color: 'var(--gray-700)' }}>{c.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CertStrip certs={['IATF 16949', 'ISO 9001', 'ISO 13485', 'ISO 14001', 'AEC-Q100', 'IPC-A-610']} />

      {/* CASE STUDY / PROOF */}
      <section className="wf-section" style={{ background: 'var(--gray-100)' }}>
        <div className="wf-inner">
          <p className="section-tag">Why Buyers Choose Hana</p>
          <div className="divider"></div>
          <h2 className="section-title">Decades of programmes shipped, quietly.</h2>
          <p className="section-lead">No customer names — we never publish them. But the shape of the work is consistent: long-running programmes, ramped from prototype to high volume, with field defects measured in parts per million.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { num: '12 mo', label: 'Avg. prototype to mass production', sub: 'Across automotive sensor programmes' },
              { num: '0 ppm', label: 'Field defects on Tier 1 builds',     sub: 'Sustained over multi-year programmes' },
              { num: '5+ yr', label: 'Average customer relationship',      sub: 'Many partnerships span 15+ years' },
            ].map(p => (
              <div key={p.label} style={{
                background: 'var(--white)', borderRadius: 'var(--radius)',
                padding: 32, border: '1px solid var(--gray-300)',
              }}>
                <div style={{ fontSize: 38, fontWeight: 800, color: 'var(--blue)', letterSpacing: -1 }}>{p.num}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginTop: 6, marginBottom: 6 }}>{p.label}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        dark
        title="Talk to our engineering team."
        body="Tell us about your programme — markets, volumes, certifications. We'll route to the right facility and reply within 48 hours."
        primary="Request a Quote"
        secondary="Contact Us"
      />
      <WfFooter />
    </div>
  );
}

window.HomepageV1 = HomepageV1;
