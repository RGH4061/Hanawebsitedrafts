/* V1b — Image-led homepage, rebuilt on the Hana design system.
   Strict to Hana tokens: Hana Blue only, Geist/Inter/Plex Mono,
   1px borders, no shadows, no gradients on content, sentence case. */

function HomepageV1bImg() {
  const [tv, setTweak] = typeof useTweaks === 'function' ?
  useTweaks(window.TWEAK_DEFAULTS || { mood: 'daylight', density: 'standard', hero: 'photo' }) :
  [{ mood: 'daylight', density: 'standard', hero: 'photo' }, () => {}];
  const dScale = { editorial: 1.35, standard: 1, dense: 0.62 }[tv.density] ?? 1;
  const heroFilter = {
    photo: 'none',
    mono: 'grayscale(1) contrast(1.05) brightness(0.95)',
    duotone: 'grayscale(1) brightness(0.85) sepia(1) hue-rotate(180deg) saturate(4)'
  }[tv.hero] ?? 'none';
  const moodWrap = {
    daylight: { pageBg: '#fff', surfaceBg: 'var(--bg)', heroBg: '#fff', heroInk: 'var(--ink)', accent: '#fff' },
    cleanroom: { pageBg: '#f4f7fb', surfaceBg: '#e9eff7', heroBg: '#eaf2fb', heroInk: 'var(--ink)', accent: '#dde8f5' },
    night: { pageBg: 'var(--hana-blue-deep)', surfaceBg: 'var(--hana-blue-deep)', heroBg: 'var(--hana-blue-deep)', heroInk: '#fff', accent: 'rgba(255,255,255,0.06)' }
  }[tv.mood] ?? {};
  const li = (n, size = 16, color = 'currentColor') =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {n === 'arrow-right' && <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>}
      {n === 'map-pin' && <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>}
      {n === 'chevron-down' && <path d="m6 9 6 6 6-6" />}
      {n === 'search' && <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>}
      {n === 'globe' && <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></>}
      {n === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
    </svg>;


  const markets = [
  { name: 'Automotive', body: 'Power modules, ADAS, EV charging, lighting.' },
  { name: 'Industrial & IoT', body: 'Sensors, controllers, smart factory equipment.' },
  { name: 'Telecommunications', body: 'Network infrastructure and gateways.' },
  { name: 'RFID', body: 'Inlays, tire tags, smart labels.' },
  { name: 'Optical & sensors', body: 'Camera modules and image sensors.' },
  { name: 'Consumer electronics', body: 'Wearables, accessories, peripherals.' },
  { name: 'Medical', body: 'Patient monitoring and diagnostics.' },
  { name: 'Access control', body: 'Smart cards, readers, security tokens.' },
  { name: 'Power management', body: 'Power supplies and conversion.' }];


  const capabilities = [
  { title: 'EMS', body: 'End-to-end electronics manufacturing. SMT, through-hole, box build, system integration.' },
  { title: 'OSAT', body: 'Outsourced semiconductor assembly and test — die attach, wire bonding, flip chip, final test.' },
  { title: 'Microelectronics', body: 'Hybrid microcircuits, MEMS, sensors, and precision interconnect.' },
  { title: 'Quality', body: 'ISO 9001, IATF 16949, and sector certifications maintained across every facility.' },
  { title: 'DFx Collaborations', body: 'Engineering teams embedded from NPI through production. We speak engineer.' }];


  const locs = [
  { country: 'Thailand', city: 'Bangkok', role: 'Headquarters' },
  { country: 'Thailand', city: 'Lamphun', role: 'PCBA · EMS' },
  { country: 'Thailand', city: 'Ayutthaya', role: 'OSAT · PCBA ·' },
  { country: 'Cambodia', city: 'Koh Kong', role: 'PCBA · Box Build · EMS' },
  { country: 'China', city: 'Jiaxing', role: 'EMS · OSAT · RFID · ' },
  { country: 'USA', city: 'Ohio', role: 'RFID & Optical' },
  { country: 'Korea', city: 'Cheongju', role: 'SiC module' }];



  /* Local image placeholder using Hana surface + 1px line. */
  const Ph = ({ label, ratio = '3/2' }) =>
  <div style={{
    aspectRatio: ratio, background: 'var(--surface)',
    border: '1px solid var(--line)', borderRadius: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', fontSize: 11,
    letterSpacing: 0, textAlign: 'center', padding: '0 16px'
  }}>
      <span style={{ opacity: .8 }}>[ {label} ]</span>
    </div>;


  const eyebrow = { fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)' };

  const sectionWrap = { maxWidth: 1080, margin: '0 auto', padding: '0 32px' };

  return (
    <div data-mood={tv.mood} data-density={tv.density} data-hero={tv.hero} style={{ background: moodWrap.pageBg, color: tv.mood === 'night' ? '#fff' : 'var(--ink)', fontFamily: 'var(--font-text)' }}>
      <style>{`
        /* Density: scale the padding of section content-wrappers only.
           Sections delegate their padding to a first-level inner div, so we
           target that — never the <section> itself or the inner cards. */
        [data-density="dense"]     > section > div:first-child,
        [data-density="dense"]     > section > div:nth-child(2) { padding-top: 28px !important; padding-bottom: 28px !important; }
        [data-density="dense"]     .hana-spec-block { padding-top: 24px !important; padding-bottom: 24px !important; }
        [data-density="editorial"] > section > div:first-child,
        [data-density="editorial"] > section > div:nth-child(2) { padding-top: 128px !important; padding-bottom: 128px !important; }
        /* Don't touch the hero text/grid second div padding-bottom mass when dense — keep image breathing */
        [data-density="dense"]     section[data-hero-section] > div:first-child { padding-top: 20px !important; padding-bottom: 0 !important; }
        [data-density="dense"]     section[data-hero-section] > div:nth-child(2) { padding-top: 28px !important; padding-bottom: 40px !important; }

        [data-mood="night"] .hana-hero, [data-mood="night"] .hana-h2 { color: #fff !important; }
        [data-mood="night"] .hana-subhead, [data-mood="night"] p { color: rgba(255,255,255,0.78) !important; }
        [data-mood="night"] .hana-spec-label { color: rgba(255,255,255,0.55) !important; }
        [data-mood="night"] .hana-spec-value { color: #fff !important; }
        [data-mood="night"] .hana-card { background: rgba(255,255,255,0.04) !important; border-color: rgba(255,255,255,0.12) !important; color: #fff !important; }
        [data-mood="night"] .hana-card * { color: #fff !important; }
        [data-mood="night"] .hana-btn-secondary { color: #fff !important; border-color: rgba(255,255,255,0.4) !important; }
        [data-hero="mono"] [data-hero-img] img, [data-hero="duotone"] [data-hero-img] img { filter: ${heroFilter}; }
      `}</style>
      {window.TweaksPanel &&
      <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="Mood">
            <window.TweakRadio value={tv.mood} onChange={(v) => setTweak('mood', v)} options={[
          { value: 'daylight', label: 'Daylight' },
          { value: 'cleanroom', label: 'Cleanroom' },
          { value: 'night', label: 'Night shift' }]
          } />
          </window.TweakSection>
          <window.TweakSection title="Density">
            <window.TweakRadio value={tv.density} onChange={(v) => setTweak('density', v)} options={[
          { value: 'editorial', label: 'Editorial' },
          { value: 'standard', label: 'Standard' },
          { value: 'dense', label: 'Dense' }]
          } />
          </window.TweakSection>
          <window.TweakSection title="Hero treatment">
            <window.TweakRadio value={tv.hero} onChange={(v) => setTweak('hero', v)} options={[
          { value: 'photo', label: 'Photo' },
          { value: 'mono', label: 'Mono' },
          { value: 'duotone', label: 'Duotone' }]
          } />
          </window.TweakSection>
        </window.TweaksPanel>
      }

      {/* ── Header — H4 (utility bar + nav) ─────────────────── */}
      <header style={{ background: '#fff', fontFamily: 'var(--font-text)' }}>
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
        <div style={{ borderBottom: '1px solid var(--line)' }}>
          <div style={{ ...sectionWrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
            <img src="assets/hana-logo-full-trimmed.png" alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
            <nav style={{ display: 'flex', gap: 24, marginLeft: 12 }}>
              {['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'].map((l) =>
              <a key={l} href="#" style={{
                fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4
              }}>{l}{['About', 'Capabilities', 'Markets', 'Locations'].includes(l) && li('chevron-down', 13)}</a>
              )}
            </nav>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <a href="#" className="hana-btn hana-btn-secondary" style={{ padding: '10px 16px', fontSize: 11, whiteSpace: 'nowrap' }}>Contact</a>
              <a href="#" className="hana-btn hana-btn-primary" style={{ padding: '11px 16px', fontSize: 11, whiteSpace: 'nowrap' }}>Request a quote</a>
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero — full-width image block + headline beneath ───
              Image-led, but no gradient overlay. The photo carries the
              emotional weight; the type sits clean on white below. */}
      <section data-hero-section style={{ background: '#fff', borderBottom: '1px solid var(--line)' }}>
        <div style={{ ...sectionWrap, padding: '40px 32px 0' }}>
          <div style={{ ...eyebrow, marginBottom: 20 }}>EMS · OSAT · Microelectronics</div>
          <div data-hero-img style={{ aspectRatio: '16/7', overflow: 'hidden', borderRadius: 8, border: '1px solid var(--line)' }}>
            <img
              src="https://images.unsplash.com/photo-1675602488512-bdd631490fcb?w=2400&q=80&auto=format&fit=crop"
              alt="Close-up of a microchip during wire bonding"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            
          </div>
        </div>
        <div style={{ ...sectionWrap, padding: '48px 32px 80px', display: 'grid',
          gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 64, alignItems: 'flex-start' }}>
          <div>
            <h1 className="hana-hero">Electronics Manufacturing That Goes Further</h1>
          </div>
          <div>
            <p className="hana-subhead" style={{ marginBottom: 28, fontSize: 22 }}>
              Hana is the leading independent EMS and OSAT company in Southeast Asia,
              specializing in microelectronics. EMS and OSAT under one roof, across
              China, Thailand, and Cambodia.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#" className="hana-btn hana-btn-primary">Talk to engineering {li('arrow-right', 14, '#fff')}</a>
              <a href="#" className="hana-btn hana-btn-secondary">Our capabilities</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spec block — signature module ──────────────────── */}
      <section style={{ background: 'var(--bg)' }}>
        <div style={{ ...sectionWrap, padding: '56px 32px' }}>
          <div className="hana-spec-block">
            {[
            ['Founded', '1978'],
            ['Footprint', '3 countries'],
            ['Services', 'EMS · OSAT'],
            ['Certifications', 'ISO 9001 · IATF 16949'],
            ['Customer tenure', '20+ years']].
            map(([l, v]) =>
            <div key={l} className="hana-spec-item">
                <div className="hana-spec-label">{l}</div>
                <div className="hana-spec-value">{v}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hello section removed — see homepage-wireframes/Hello Section Block.html */}

      {/* ── Dark panel — what sets us apart ─────────────────
              Per spec: dark hero panels in --hana-blue-deep, 14px radius. */}
      <section style={{ background: 'var(--bg)' }}>
        <div style={{ ...sectionWrap, padding: '0 32px 96px' }}>
          <div style={{ background: 'var(--hana-blue-deep)', color: '#fff', borderRadius: 14, padding: '64px 48px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div>
                <div style={{ ...eyebrow, color: 'rgba(255,255,255,0.6)', marginBottom: 18 }}>What sets us apart</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: 560, marginBottom: 20 }}>
                  EMS and OSAT, under one group. Almost no competitor in Asia does both.
                </h2>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 520, marginBottom: 28 }}>
                  Programs that span PCB assembly and semiconductor packaging stay inside Hana —
                  single-source accountability, from die to box build.
                </p>
                <a href="#" className="hana-btn hana-btn-on-dark">Why Hana {li('arrow-right', 14, 'var(--hana-blue)')}</a>
              </div>
              <div>
                <Ph label="Clean-room / wafer detail · 4:5" ratio="4/5" />
              </div>
            </div>
            <img src="assets/hana-mark-white.svg" alt="" style={{ position: 'absolute', right: -60, bottom: -60, width: 320, opacity: 0.06 }} />
          </div>
        </div>
      </section>

      {/* ── Markets — homepage uses Option B (horizontal cards).
              Option A & C live on the "Options blocks" artboard. ─────────── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }} data-screen-label="Markets">
        <div style={{ ...sectionWrap, padding: '64px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, gap: 32 }}>
            <div>
              <div className="hana-spec-label" style={{ marginBottom: 12 }}>Markets we serve</div>
              <h2 className="hana-h2">Nine markets. Decades of expertise in each.</h2>
            </div>
            <a href="#" className="hana-link" style={{ fontSize: 14, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              All markets {li('arrow-right', 14)}
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {markets.map((m) =>
            <a key={m.name} href="#" className="hana-card" style={{
              padding: 12, textDecoration: 'none', color: 'inherit',
              display: 'flex', gap: 14, alignItems: 'center', background: '#fff'
            }}>
                <div style={{ width: 88, height: 88, flexShrink: 0 }}>
                  <div style={{
                  width: '100%', height: '100%', background: 'var(--surface)',
                  border: '1px solid var(--line)', borderRadius: 6,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', fontSize: 10, padding: 6, textAlign: 'center'
                }}>
                    [ {m.name.split(' ')[0]} ]
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0, flex: 1 }}>
                  <h3 className="hana-h3" style={{ fontSize: 15 }}>{m.name}</h3>
                  <p className="hana-body" style={{ fontSize: 12, margin: 0, color: 'var(--ink-2)', lineHeight: 1.45 }}>{m.body}</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Capabilities — C2 icon carousel ─────────────────── */}
      <section style={{ background: 'var(--bg)' }}>
        <div style={{ ...sectionWrap, padding: '96px 32px' }}>
          <div className="hana-spec-label" style={{ marginBottom: 12 }}>Capabilities</div>
          <h2 className="hana-h2" style={{ marginBottom: 8 }}>Or browse by capability.</h2>
          <p className="hana-body" style={{ marginBottom: 40 }}>Six capability families spanning PCBA to RFID.</p>
          <C2HomepageCaps />
        </div>
      </section>

      {/* ── Locations grid ─────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div style={{ ...sectionWrap, padding: '96px 32px', display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 64, alignItems: 'flex-start' }}>
          <div>
            <div style={{ marginBottom: 28, borderRadius: 8, overflow: 'hidden', aspectRatio: '16/9' }}>
              <img
                src="assets/hana-bkk.jpg"
                alt="Hana headquarters building, Bangkok"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="hana-spec-label" style={{ marginBottom: 12 }}>Locations</div>
            <h2 className="hana-h2" style={{ marginBottom: 16 }}>Four countries. Six facilities. One operating standard.</h2>
            <p className="hana-body" style={{ marginBottom: 24 }}>
              Manufacturing across Thailand, Cambodia, China, and the USA gives your supply chain
              real geographic resilience — not as a marketing line, as a continuity plan.
            </p>

          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
            background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden', height: "450px" }}>
            {locs.map((l, i) =>
            <div key={l.city} style={{
              background: '#fff', padding: '22px 24px',
              display: 'flex', flexDirection: 'column', gap: 6,
              gridColumn: i === 0 ? '1 / -1' : 'auto'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {li('map-pin', 14, 'var(--hana-blue)')}
                  <span className="hana-spec-label">{l.country}</span>
                </div>
                <div className="hana-spec-value">{l.city}</div>
                <div className="hana-data" style={{ fontSize: 12, color: 'var(--ink-3)' }}>{l.role}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── News & insights ────────────────────────────────── */}
      <section style={{ background: 'var(--bg)' }}>
        <div style={{ ...sectionWrap, padding: '96px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 32 }}>
            <div>
              <div className="hana-spec-label" style={{ marginBottom: 12 }}>News &amp; insights</div>
              <h2 className="hana-h2">From the engineering floor.</h2>
            </div>
            <a href="#" className="hana-link" style={{ fontSize: 14, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              All posts {li('arrow-right', 14)}
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
            { tag: 'Capabilities', date: 'April 2026', title: 'Inside our microelectronics line in Lamphun', body: 'How hybrid microcircuits move from DFM to qualified production in our Thailand facility.' },
            { tag: 'Investors', date: 'March 2026', title: 'FY2025 results and outlook for FY2026', body: 'Revenue, capacity expansion in Cambodia, and our investment plan for the year ahead.' },
            { tag: 'Quality', date: 'February 2026', title: 'Renewal of IATF 16949 across all sites', body: 'What automotive customers can expect from our latest audit cycle.' }].
            map((p) =>
            <a key={p.title} href="#" className="hana-card" style={{
              padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit',
              display: 'flex', flexDirection: 'column'
            }}>
                <div style={{ borderBottom: '1px solid var(--line)' }}>
                  <Ph label="News image" ratio="16/9" />
                </div>
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span className="hana-spec-label" style={{ color: 'var(--hana-blue-deep)' }}>{p.tag}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--line)' }} />
                    <span className="hana-caption">{p.date}</span>
                  </div>
                  <h3 className="hana-h3" style={{ fontSize: 19 }}>{p.title}</h3>
                  <p className="hana-body" style={{ fontSize: 14, margin: 0 }}>{p.body}</p>
                  <span className="hana-link" style={{ fontSize: 12, fontWeight: 600, marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, paddingTop: 8 }}>
                    Read {li('arrow-right', 12)}
                  </span>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA — calm, on light ───────────────────────────── */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--line)' }}>
        <div style={{ ...sectionWrap, padding: '96px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 48, alignItems: 'center' }}>
            <h2 className="hana-h2" style={{ maxWidth: 640 }}>
              Tell us about your program. We'll route it to the right facility.
            </h2>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-start' }}>
              <a href="#" className="hana-btn hana-btn-primary">Talk to engineering {li('arrow-right', 14, '#fff')}</a>
              <a href="#" className="hana-btn hana-btn-secondary">Request a quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer — F6 (CTA bar + sitemap + thin dark bottom) ──── */}
      <footer style={{ background: 'var(--bg)', color: 'var(--ink-2)', fontFamily: 'var(--font-text)', borderTop: '1px solid var(--line)' }}>
        <div style={{ background: '#fff', borderBottom: '1px solid var(--line)', padding: '28px 32px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em', color: 'var(--ink)' }}>Have a program to talk through?</div>
              <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 6 }}>We respond within 48 hours, with the right facility and engineering lead on the call.</div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#" className="hana-btn hana-btn-primary">Request a quote</a>
              <a href="#" className="hana-btn hana-btn-secondary">Contact sales</a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 32px 28px', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40 }}>
          <div>
            <img src="assets/hana-logo-full-trimmed.png" alt="Hana" style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
            <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: 280 }}>
              The leading independent EMS and OSAT company in Southeast Asia, specializing in microelectronics.
            </p>
            <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
              <a href="#" aria-label="LinkedIn" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line)', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-2)' }}>{li('linkedin', 14)}</a>
            </div>
            <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)' }}>
              <div>SET-listed · Bangkok</div>
              <div style={{ marginTop: 4 }}>HANA · ฿24.50  <span style={{ color: 'var(--success, #1F8A5B)' }}>+1.24%</span></div>
            </div>
          </div>
          {[
          { h: 'Markets', l: ['Automotive', 'Industrial & IoT', 'Telecommunications', 'RFID', 'Optical & sensors', 'Consumer electronics', 'Medical', 'Access control', 'Power management', 'Data Centers'] },
          { h: 'Capabilities', l: ['PCBA / Box build', 'OSAT', 'Microelectronics', 'Automation', 'DFx Collaborations'] },
          { h: 'Company', l: ['About', 'Why Hana', 'Locations', 'Sustainability', 'News', 'Careers'] },
          { h: 'Investors', l: ['SET: HANA', 'Financial reports', 'Annual reports', 'Governance', 'IR contact'] }].
          map((c) =>
          <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 12 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {c.l.map((i) => <li key={i}><a href="#" style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13, lineHeight: 1.5 }}>{i}</a></li>)}
              </ul>
            </div>
          )}
        </div>
        <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.7)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', padding: '10px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11 }}>
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
    </div>);

}

/* Keep the old export name so the canvas keeps working. */
window.HomepageV1b = HomepageV1bImg;