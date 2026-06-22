/* V2 — Bold typographic / authority-led.
   Editorial feel: oversized type hero, no image, big serial-numbered intro,
   markets as a typographic list with hover image, capabilities as a thin row. */

function HomepageV2() {
  return (
    <div className="hana-wf">
      <WfNav active="Home" />

      {/* HERO — typographic */}
      <div style={{
        background: 'var(--white)',
        padding: '96px 48px 64px',
        borderBottom: '1px solid var(--gray-300)',
      }}>
        <div className="wf-inner" style={{ maxWidth: 1180 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 28, color: 'var(--gray-500)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700 }}>
            <span style={{ width: 36, height: 2, background: 'var(--blue)' }}></span>
            <span>Est. 1978 · Bangkok, Thailand</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(44px, 6vw, 76px)',
            fontWeight: 800, lineHeight: 1.02,
            letterSpacing: '-1.5px',
            maxWidth: 1100, marginBottom: 28,
            textWrap: 'balance',
          }}>
            We make the electronics<br/>
            <span style={{ color: 'var(--blue)' }}>inside</span> the things you rely on.
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end', marginTop: 20 }}>
            <p style={{ fontSize: 19, color: 'var(--gray-700)', maxWidth: 720, lineHeight: 1.55 }}>
              Hana Microelectronics is a vertically integrated EMS and OSAT manufacturer. For nearly five decades we've built the boards, modules, and packaged silicon that go into vehicles, factories, hospitals, and homes — for procurement teams who need the work done right, repeatedly, at scale.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="#" className="btn-primary" style={{ textAlign: 'center' }}>Explore Markets →</a>
              <a href="#" className="btn-ghost" style={{ textAlign: 'center' }}>View Capabilities →</a>
            </div>
          </div>
        </div>
      </div>

      {/* RUNNING STAT STRIP — quieter version */}
      <div style={{
        borderBottom: '1px solid var(--gray-300)',
        padding: '24px 48px', background: 'var(--gray-100)',
      }}>
        <div className="wf-inner" style={{
          display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 24,
          maxWidth: 1180,
        }}>
          {[
            ['1978',     'Founded'],
            ['6',        'Manufacturing sites'],
            ['9',        'Markets served'],
            ['EMS+OSAT', 'Under one group'],
            ['Listed',   'SET (Bangkok)'],
          ].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--blue-dark)', letterSpacing: -.5 }}>{n}</div>
              <div style={{ fontSize: 11, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: 1.2, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT WE DO — three numbered blocks */}
      <section className="wf-section" style={{ background: 'var(--white)' }}>
        <div className="wf-inner">
          <p className="section-tag">What we do</p>
          <div className="divider"></div>
          <h2 className="section-title" style={{ fontSize: 36, maxWidth: 760 }}>
            Two manufacturing disciplines. One group. Almost nobody else in Asia does both.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 36, marginTop: 48 }}>
            {[
              { n: '01', tag: 'EMS', title: 'Electronics Manufacturing Services',
                body: 'PCBA, box build, complete system integration. Automotive-grade lines, medical-grade processes. Multi-region production for supply continuity.' },
              { n: '02', tag: 'OSAT', title: 'IC Assembly &amp; Test',
                body: 'Outsourced semiconductor assembly and test — System in Package, flip chip, RFID inlays. Decades of process maturity, no IP exposure.' },
              { n: '03', tag: 'Integrated', title: 'Die to Finished Product',
                body: 'Because we operate both EMS and OSAT, programmes that span packaging and assembly stay inside one group — single-source accountability.' },
            ].map(c => (
              <div key={c.n}>
                <div style={{
                  fontSize: 56, fontWeight: 800, color: 'var(--blue-light)',
                  letterSpacing: -2, lineHeight: 1, marginBottom: -8,
                }}>{c.n}</div>
                <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--blue)', fontWeight: 700, marginBottom: 8 }}>{c.tag}</p>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.2 }}
                  dangerouslySetInnerHTML={{ __html: c.title }} />
                <p style={{ fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.6 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETS — TYPOGRAPHIC LIST */}
      <section className="wf-section" style={{ background: 'var(--blue-dark)', color: 'var(--white)' }}>
        <div className="wf-inner">
          <p className="section-tag" style={{ color: '#7EC8FF' }}>Markets We Cover</p>
          <div className="divider" style={{ background: '#7EC8FF' }}></div>
          <h2 className="section-title" style={{ color: 'var(--white)', fontSize: 38, maxWidth: 700 }}>
            Nine markets, listed. <span className="anno" style={{ verticalAlign: 'middle' }}>Big typographic list</span>
          </h2>
          <p className="section-lead" style={{ color: 'rgba(255,255,255,.7)' }}>
            Your industry, the applications we build for it, and a direct path into the relevant capability and facility.
          </p>

          <div style={{ borderTop: '1px solid rgba(255,255,255,.2)', marginTop: 24 }}>
            {MARKETS.map((m, i) => (
              <a href="#" key={m.name} style={{
                display: 'grid', gridTemplateColumns: '60px 1.4fr 2fr 80px',
                gap: 24, alignItems: 'center',
                padding: '24px 0',
                borderBottom: '1px solid rgba(255,255,255,.2)',
                textDecoration: 'none', color: 'inherit',
              }}>
                <div style={{ fontSize: 13, color: '#7EC8FF', fontWeight: 700, letterSpacing: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -.5 }}>{m.name}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,.7)' }}>{m.desc}</div>
                <div style={{ fontSize: 22, color: '#7EC8FF', textAlign: 'right' }}>→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES — thin pill row */}
      <section className="wf-section" style={{ background: 'var(--white)', paddingTop: 56, paddingBottom: 56 }}>
        <div className="wf-inner">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20, gap: 24, flexWrap: 'wrap' }}>
            <div>
              <p className="section-tag" style={{ color: 'var(--teal-dark)' }}>Capabilities</p>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Or search by capability.</h2>
            </div>
            <a href="#" style={{ fontSize: 14, fontWeight: 700, color: 'var(--teal-dark)', textDecoration: 'none' }}>
              All capabilities →
            </a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {CAPABILITIES.map(c => (
              <a href="#" key={c.name} style={{
                padding: '14px 22px',
                background: 'var(--teal-light)',
                border: '1px solid var(--teal)',
                borderRadius: 999,
                textDecoration: 'none', color: 'var(--teal-dark)',
                fontSize: 14, fontWeight: 700,
              }}>
                {c.name}
                <span style={{ marginLeft: 10, fontSize: 12, fontWeight: 500, color: 'var(--gray-700)' }}>
                  {c.sub}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CertStrip certs={['IATF 16949', 'ISO 9001', 'ISO 13485', 'ISO 14001', 'AEC-Q100', 'IPC-A-610']} />

      {/* INVESTOR BAR — slim */}
      <div style={{ background: 'var(--gray-100)', padding: '20px 48px', borderBottom: '1px solid var(--gray-300)' }}>
        <div className="wf-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--gray-500)', fontWeight: 700 }}>Investors</span>
            <span style={{ fontSize: 13, color: 'var(--gray-700)' }}>SET: <strong>HANA</strong> · Annual report 2025</span>
          </div>
          <a href="#" style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 700, textDecoration: 'none' }}>
            Investor relations →
          </a>
        </div>
      </div>

      <CtaSection
        dark
        title="Bring us your programme."
        body="Whether you need a handful of prototypes or a multi-year ramp, we'll route your inquiry to the right facility and reply within 48 hours."
        primary="Request a Quote"
        secondary="Contact Us"
      />
      <WfFooter />
    </div>
  );
}

window.HomepageV2 = HomepageV2;
