/* V3 — Split entry above the fold.
   Top brand strip, then a side-by-side EMS / OSAT chooser (matching the two
   buyer types in CLAUDE.md), then markets as an interactive map / world,
   then capabilities, proof, CTA. */

function HomepageV3() {
  return (
    <div className="hana-wf">
      <WfNav active="Home" />

      {/* SLIM BRAND STRIP */}
      <div style={{
        background: 'var(--blue-dark)', color: 'var(--white)',
        padding: '40px 48px',
      }}>
        <div className="wf-inner" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: '#7EC8FF', fontWeight: 700, marginBottom: 10 }}>
              Hana Microelectronics · Est. 1978
            </p>
            <h1 style={{ fontSize: 38, fontWeight: 800, lineHeight: 1.15, letterSpacing: -.5, maxWidth: 720 }}>
              An EMS and OSAT manufacturing group, working across nine markets and four countries.
            </h1>
          </div>
          <div style={{ display: 'flex', gap: 28, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            {[['40+','Years'],['6','Sites'],['9','Markets'],['EMS+OSAT','Under one group']].map(([n,l]) => (
              <div key={l} style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -1 }}>{n}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.7)', textTransform: 'uppercase', letterSpacing: 1 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TWO-PATH CHOOSER */}
      <section className="wf-section" style={{ background: 'var(--white)', paddingTop: 56, paddingBottom: 32 }}>
        <div className="wf-inner">
          <p className="section-tag">Find what you need</p>
          <div className="divider"></div>
          <h2 className="section-title" style={{ marginBottom: 28 }}>Where do you want to start? <span className="anno">Two-path entry</span></h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* EMS PATH */}
            <a href="#" style={{
              background: 'var(--blue-light)',
              border: '1.5px solid var(--blue)', borderRadius: 'var(--radius)',
              padding: 36, textDecoration: 'none', color: 'inherit',
              display: 'flex', flexDirection: 'column', minHeight: 280,
            }}>
              <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--blue)', fontWeight: 700 }}>For EMS Buyers</p>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: 'var(--blue-dark)', marginTop: 8, marginBottom: 12 }}>
                Browse by Market
              </h3>
              <p style={{ fontSize: 14, color: 'var(--gray-700)', marginBottom: 18 }}>
                Procurement teams looking for a manufacturing partner. Start with your industry — automotive, medical, industrial — and we'll show you the work, the capabilities, and the facility behind it.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                {['Automotive','Medical','Industrial','RFID','Consumer','+5 more'].map(t => (
                  <span key={t} style={{ fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 12, background: 'var(--white)', border: '1px solid var(--blue)', color: 'var(--blue-dark)' }}>{t}</span>
                ))}
              </div>
              <span style={{ marginTop: 'auto', fontSize: 14, fontWeight: 700, color: 'var(--blue)' }}>Explore 9 markets →</span>
            </a>

            {/* OSAT PATH */}
            <a href="#" style={{
              background: 'var(--teal-light)',
              border: '1.5px solid var(--teal)', borderRadius: 'var(--radius)',
              padding: 36, textDecoration: 'none', color: 'inherit',
              display: 'flex', flexDirection: 'column', minHeight: 280,
            }}>
              <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--teal-dark)', fontWeight: 700 }}>For Engineers</p>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: 'var(--teal-dark)', marginTop: 8, marginBottom: 12 }}>
                Browse by Capability
              </h3>
              <p style={{ fontSize: 14, color: 'var(--gray-700)', marginBottom: 18 }}>
                Engineers and technical buyers looking for specific processes — IC assembly, flip chip, SiP, PCBA, RFID. Find the capability, then the facility.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                {['PCBA & Box Build','IC Assembly','SiP','Flip Chip','RFID Inlay','+2 more'].map(t => (
                  <span key={t} style={{ fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 12, background: 'var(--white)', border: '1px solid var(--teal)', color: 'var(--teal-dark)' }}>{t}</span>
                ))}
              </div>
              <span style={{ marginTop: 'auto', fontSize: 14, fontWeight: 700, color: 'var(--teal-dark)' }}>Explore 5 capabilities →</span>
            </a>
          </div>
        </div>
      </section>

      {/* MARKETS — ASYMMETRIC GRID with featured */}
      <section className="wf-section" style={{ background: 'var(--gray-100)', paddingTop: 56 }}>
        <div className="wf-inner">
          <p className="section-tag">Markets We Cover</p>
          <div className="divider"></div>
          <h2 className="section-title">Nine markets, deep expertise in each. <span className="anno">Asymmetric grid</span></h2>
          <p className="section-lead">Some markets we've served for 30+ years. Click into any one for the applications, capabilities, and facilities behind it.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {/* Big featured tile */}
            <a href="#" style={{
              gridColumn: 'span 2', gridRow: 'span 2',
              background: 'var(--blue-dark)', color: 'var(--white)',
              borderRadius: 'var(--radius)', padding: 32,
              textDecoration: 'none',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: 320, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, opacity: .25 }}>
                <ImgPh label="" />
              </div>
              <div style={{ position: 'relative' }}>
                <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: '#7EC8FF', fontWeight: 700, marginBottom: 8 }}>
                  Featured market
                </p>
                <h3 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>Automotive</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,.8)', maxWidth: 360 }}>
                  Power modules, ADAS sensor PCBAs, EV charging, telematics, lighting. IATF 16949 certified, with dedicated automotive lines across Asia.
                </p>
              </div>
              <span style={{ position: 'relative', fontSize: 14, fontWeight: 700, color: '#7EC8FF' }}>
                Explore Automotive →
              </span>
            </a>

            {/* Other 8 small tiles */}
            {MARKETS.filter(m => m.name !== 'Automotive').map(m => (
              <a href="#" key={m.name} style={{
                background: 'var(--white)', border: '1px solid var(--gray-300)',
                borderRadius: 'var(--radius)', padding: 18,
                textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                minHeight: 150,
              }}>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{m.name}</h3>
                  <p style={{ fontSize: 12, color: 'var(--gray-500)' }}>{m.desc}</p>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--blue)', marginTop: 12 }}>View →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTPRINT */}
      <section className="wf-section" style={{ background: 'var(--white)' }}>
        <div className="wf-inner">
          <p className="section-tag" style={{ color: 'var(--amber)' }}>Where we build</p>
          <div className="divider" style={{ background: 'var(--amber)' }}></div>
          <h2 className="section-title">Six manufacturing sites across four countries.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'center' }}>
            <div style={{ height: 320, borderRadius: 'var(--radius)', overflow: 'hidden' }}>
              <ImgPh label="World map placeholder — pinned facility locations" />
            </div>
            <div>
              {[
                ['Thailand', 'Ayutthaya (OSAT) · Lamphun (EMS)'],
                ['China',    'Jiaxing (EMS, Hana-JX)'],
                ['USA',      'Ohio — RFID & Optical'],
                ['Cambodia', 'Koh Kong — Assembly'],
              ].map(([c, sub]) => (
                <div key={c} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '16px 0', borderBottom: '1px solid var(--gray-300)',
                }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{c}</div>
                    <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>{sub}</div>
                  </div>
                  <a href="#" style={{ fontSize: 13, fontWeight: 700, color: 'var(--amber)', textDecoration: 'none', alignSelf: 'center' }}>
                    Visit →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CertStrip certs={['IATF 16949', 'ISO 9001', 'ISO 13485', 'ISO 14001', 'AEC-Q100', 'IPC-A-610']} />

      <CtaSection
        dark
        title="Have a programme to talk through?"
        body="Tell us your market, volumes, and certifications. We'll route to the right facility and reply within 48 hours."
        primary="Request a Quote"
        secondary="Contact Us"
      />
      <WfFooter />
    </div>
  );
}

window.HomepageV3 = HomepageV3;
