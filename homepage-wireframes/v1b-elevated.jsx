/* V1b Elevated — Design elevation pass on V1b Image-led.
   Elevation protocol: Hierarchy → Typography → Color → Space → Composition → Detail
   ─────────────────────────────────────────────────────────────────────────────────
   Changes from V1b:
   · Hero headline    56 → 72px, -0.035em tracking, textWrap:balance
   · Hero image       16/7 → 16/8, mono caption beneath
   · Hero eyebrow     dot-separated inline labels (was single string)
   · Spec block       values 22 → 26px, padding 20 → 28px
   · Welcome          warm-accent eyebrow (people section), h2 36px
   · "What sets apart" → FULL-BLEED dark section (was a rounded card).
                          This is the one bold move. Everything else is quiet.
   · Markets          typographic cards with 3px left blue border (no thumbnails)
   · Markets section  --hana-blue-tint bg (one intentional cool section)
   · All h2s          30 → 36px, textWrap:balance
   · All body copy    textWrap:pretty
   · Locations        HQ cell tinted + HQ badge, city names as Geist 20-24px
   · News h3          19 → 20px
   · Footer CTA h     Geist 26px
   ─────────────────────────────────────────────────────────────────────────────────
   Header / nav / CTA button colours: IDENTICAL to V1b. */

function HomepageV1bElevated({ marketsBg } = {}) {
  const [tv, setTweak] = typeof useTweaks === 'function'
    ? useTweaks(window.TWEAK_DEFAULTS || { mood: 'daylight', density: 'standard', hero: 'photo' })
    : [{ mood: 'daylight', density: 'standard', hero: 'photo' }, () => {}];

  const moodWrap = {
    daylight:  { pageBg: '#fff',                    surfaceBg: 'var(--bg)',           heroBg: '#fff' },
    cleanroom: { pageBg: '#f4f7fb',                 surfaceBg: '#e9eff7',             heroBg: '#eaf2fb' },
    night:     { pageBg: 'var(--hana-blue-deep)',   surfaceBg: 'var(--hana-blue-deep)', heroBg: 'var(--hana-blue-deep)' },
  }[tv.mood] ?? {};

  const heroFilter = {
    photo:   'none',
    mono:    'grayscale(1) contrast(1.05) brightness(0.95)',
    duotone: 'grayscale(1) brightness(0.85) sepia(1) hue-rotate(180deg) saturate(4)',
  }[tv.hero] ?? 'none';

  const isNight = tv.mood === 'night';

  /* ── icon helper ─────────────────────────────────────── */
  const li = (n, size = 16, color = 'currentColor') =>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {n === 'arrow-right'  && <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>}
      {n === 'map-pin'      && <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>}
      {n === 'chevron-down' && <path d="m6 9 6 6 6-6"/>}
      {n === 'search'       && <><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>}
      {n === 'globe'        && <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></>}
      {n === 'linkedin'     && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>}
    </svg>;

  /* ── data ────────────────────────────────────────────── */
  const markets = [
    { name: 'Automotive',          body: 'Power modules, ADAS, EV charging, lighting.' },
    { name: 'Industrial & IoT',    body: 'Sensors, controllers, smart factory equipment.' },
    { name: 'Telecommunications',  body: 'Network infrastructure and gateways.' },
    { name: 'RFID',                body: 'Inlays, tire tags, smart labels.' },
    { name: 'Optical & sensors',   body: 'Camera modules and image sensors.' },
    { name: 'Consumer electronics',body: 'Wearables, accessories, peripherals.' },
    { name: 'Medical',             body: 'Patient monitoring and diagnostics.' },
    { name: 'Access control',      body: 'Smart cards, readers, security tokens.' },
    { name: 'Power management',    body: 'Power supplies and conversion.' },
  ];

  const capabilities = [
    { title: 'EMS',             body: 'End-to-end electronics manufacturing. SMT, through-hole, box build, system integration.' },
    { title: 'OSAT',            body: 'Outsourced semiconductor assembly and test — die attach, wire bonding, flip chip, final test.' },
    { title: 'Microelectronics',body: 'Hybrid microcircuits, MEMS, sensors, and precision interconnect.' },
    { title: 'Quality',         body: 'ISO 9001, IATF 16949, and sector certifications maintained across every facility.' },
    { title: 'DFx Collaborations', body: 'Engineering teams embedded from NPI through production. We speak engineer.' },
  ];

  const locs = [
    { country: 'Thailand', city: 'Bangkok',   role: 'Headquarters', hq: true },
    { country: 'Thailand', city: 'Lamphun',   role: 'PCBA · EMS' },
    { country: 'Thailand', city: 'Ayutthaya', role: 'OSAT · PCBA' },
    { country: 'Cambodia', city: 'Koh Kong',  role: 'PCBA · Box Build · EMS' },
    { country: 'China',    city: 'Jiaxing',   role: 'EMS · OSAT · RFID' },
    { country: 'USA',      city: 'Ohio',      role: 'RFID & Optical' },
    { country: 'Korea',    city: 'Cheongju',  role: 'SiC module' },
  ];

  /* ── shared style fragments ──────────────────────────── */
  const wrap = { maxWidth: 1080, margin: '0 auto', padding: '0 32px' };

  const eyebrow = {
    fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)',
  };

  const h2Style = {
    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 36,
    letterSpacing: '-0.02em', lineHeight: 1.15,
    color: isNight ? '#fff' : 'var(--ink)', margin: 0, textWrap: 'balance',
  };

  const bodyStyle = {
    fontFamily: 'var(--font-text)', fontWeight: 400, fontSize: 16,
    lineHeight: 1.7, color: isNight ? 'rgba(255,255,255,0.72)' : 'var(--ink-2)',
    margin: 0, textWrap: 'pretty',
  };

  const borderCol = isNight ? 'rgba(255,255,255,0.1)' : 'var(--line)';

  /* ── image placeholder ───────────────────────────────── */
  const Ph = ({ label, ratio = '3/2', dark = false }) =>
    <div style={{
      aspectRatio: ratio,
      background: dark ? 'rgba(255,255,255,0.07)' : 'var(--surface)',
      border: `1px solid ${dark ? 'rgba(255,255,255,0.13)' : 'var(--line)'}`,
      borderRadius: 6,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: dark ? 'rgba(255,255,255,0.32)' : 'var(--ink-3)',
      fontFamily: 'var(--font-mono)', fontSize: 11,
      textAlign: 'center', padding: '0 16px',
    }}>
      <span style={{ opacity: .85 }}>[ {label} ]</span>
    </div>;

  return (
    <div data-mood={tv.mood} data-density={tv.density} data-hero={tv.hero}
      style={{ background: moodWrap.pageBg, color: isNight ? '#fff' : 'var(--ink)', fontFamily: 'var(--font-text)' }}>

      <style>{`
        /* Night-mode blanket overrides */
        [data-mood="night"] .elev-card        { background: rgba(255,255,255,0.04) !important; border-color: rgba(255,255,255,0.12) !important; }
        [data-mood="night"] .elev-card *      { color: #fff !important; }
        [data-mood="night"] .hana-btn-secondary { color:#fff!important; border-color:rgba(255,255,255,.4)!important; }
        /* Hero image filter */
        [data-hero="mono"]    [data-hero-img] img,
        [data-hero="duotone"] [data-hero-img] img { filter: ${heroFilter}; }
        /* Density */
        [data-density="dense"]     > section > div:first-child { padding-top:28px!important; padding-bottom:28px!important; }
        [data-density="editorial"] > section > div:first-child { padding-top:128px!important; padding-bottom:128px!important; }
        [data-density="dense"]     section[data-hero-section] > div:first-child  { padding-top:20px!important; padding-bottom:0!important; }
        [data-density="dense"]     section[data-hero-section] > div:nth-child(2) { padding-top:28px!important; padding-bottom:40px!important; }
        /* Market card hover */
        .elev-mkt-card:hover { background: var(--hana-blue-tint) !important; }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          HEADER — preserved exactly from V1b
      ══════════════════════════════════════════════════════ */}
      <header style={{ background: '#fff', fontFamily: 'var(--font-text)' }}>

        {/* Utility bar */}
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
                {li('search', 12, 'rgba(255,255,255,0.6)')}
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>Search capabilities, markets, news…</span>
              </div>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                {li('globe', 13)}EN
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div style={{ borderBottom: '1px solid var(--line)' }}>
          <div style={{ ...wrap, padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
            <img src="assets/hana-logo-full-trimmed.png" alt="Hana"
              style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
            <nav style={{ display: 'flex', gap: 24, marginLeft: 12 }}>
              {['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'].map(l =>
                <a key={l} href="#" style={{
                  fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--ink)', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                }}>
                  {l}
                  {['About', 'Capabilities', 'Markets', 'Locations'].includes(l) && li('chevron-down', 13)}
                </a>
              )}
            </nav>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <a href="#" className="hana-btn hana-btn-secondary" style={{ padding: '10px 16px', fontSize: 11, whiteSpace: 'nowrap' }}>Contact</a>
              <a href="#" className="hana-btn hana-btn-primary"   style={{ padding: '11px 16px', fontSize: 11, whiteSpace: 'nowrap' }}>Request a quote</a>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════
          HERO — elevated
          · Eyebrow: dot-separated inline labels
          · Image: 16/8 (more cinematic than 16/7)
          · Caption: mono line beneath image
          · Headline: 72px / -0.035em — decisive, not timid
          · Grid: 1.4fr / 1fr — headline dominates
      ══════════════════════════════════════════════════════ */}
      <section data-hero-section style={{ background: isNight ? moodWrap.heroBg : '#fff', borderBottom: `1px solid ${borderCol}` }}>

        <div style={{ ...wrap, padding: '48px 32px 0' }}>
          {/* Eyebrow — hairline-separated service labels */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
            {['EMS', 'OSAT', 'Microelectronics'].map((label, i) =>
              <React.Fragment key={label}>
                {i > 0 && <span style={{ width: 1, height: 11, background: 'var(--line)', display: 'inline-block' }}></span>}
                <span style={{ ...eyebrow }}>{label}</span>
              </React.Fragment>
            )}
          </div>

          {/* Hero image */}
          <div data-hero-img style={{ aspectRatio: '16/8', overflow: 'hidden', borderRadius: 10, border: `1px solid ${borderCol}` }}>
            <img
              src="https://images.unsplash.com/photo-1675602488512-bdd631490fcb?w=2400&q=80&auto=format&fit=crop"
              alt="Close-up of a microchip during wire bonding"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Caption */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              color: 'var(--ink-3)', letterSpacing: '0.02em',
            }}>
              Wire bonding · Lamphun facility, Thailand
            </span>
          </div>
        </div>

        {/* Headline + subhead */}
        <div style={{ ...wrap, padding: '56px 32px 96px',
          display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 72, alignItems: 'flex-start' }}>
          <div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 72, letterSpacing: '-0.035em', lineHeight: 1.0,
              color: isNight ? '#fff' : 'var(--ink)',
              maxWidth: 820, margin: 0, textWrap: 'balance',
            }}>
              Electronics manufacturing that goes further
            </h1>
          </div>
          <div style={{ paddingTop: 8 }}>
            <p style={{
              fontFamily: 'var(--font-text)', fontWeight: 400,
              fontSize: 20, lineHeight: 1.55,
              color: isNight ? 'rgba(255,255,255,0.75)' : 'var(--ink-2)',
              maxWidth: 520, marginBottom: 32, textWrap: 'pretty',
            }}>
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

      {/* ══════════════════════════════════════════════════════
          SPEC BLOCK — elevated
          · Values 22 → 26px
          · Item padding 20px → 28px 32px
          · Border uses token properly
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)' }}>
        <div style={{ ...wrap, padding: '64px 32px' }}>
          <div style={{
            display: 'flex',
            background: isNight ? 'rgba(255,255,255,0.05)' : 'var(--surface)',
            borderRadius: 10, overflow: 'hidden',
            border: `1px solid ${borderCol}`,
          }}>
            {[
              ['Founded',         '1978'],
              ['Footprint',       '3 countries'],
              ['Services',        'EMS · OSAT'],
              ['Certifications',  'ISO 9001 · IATF 16949'],
              ['Customer tenure', '20+ years'],
            ].map(([label, value], i, arr) =>
              <div key={label} style={{
                flex: 1, padding: '28px 32px',
                borderRight: i < arr.length - 1 ? `1px solid ${borderCol}` : 'none',
              }}>
                <div style={{ ...eyebrow, color: isNight ? 'rgba(255,255,255,0.45)' : 'var(--ink-3)', marginBottom: 10 }}>{label}</div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26,
                  letterSpacing: '-0.02em', color: isNight ? '#fff' : 'var(--ink)',
                }}>{value}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hello section removed — see homepage-wireframes/Hello Section Block.html */}

      {/* ══════════════════════════════════════════════════════
          WHAT SETS US APART — THE BOLD MOVE
          Full-bleed dark section. No card wrapper, no border radius
          on the section itself. This is the page's single strong moment;
          everything around it is quiet so it lands.
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--hana-blue-deep)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...wrap, padding: '104px 32px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 72, alignItems: 'center' }}>
            <div>
              <div style={{ ...eyebrow, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>What sets us apart</div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 52, letterSpacing: '-0.03em', lineHeight: 1.05,
                color: '#fff', maxWidth: 560, marginBottom: 24, textWrap: 'balance',
              }}>
                EMS and OSAT, under one group. Almost no competitor in Asia does both.
              </h2>
              <p style={{
                fontFamily: 'var(--font-text)', fontSize: 17, lineHeight: 1.65,
                color: 'rgba(255,255,255,0.7)', maxWidth: 460, marginBottom: 36, textWrap: 'pretty',
              }}>
                Programs that span PCB assembly and semiconductor packaging stay inside Hana —
                single-source accountability, from die to box build.
              </p>
              <a href="#" className="hana-btn hana-btn-on-dark">Why Hana {li('arrow-right', 14, 'var(--hana-blue)')}</a>
            </div>
            <div>
              <Ph label="Clean-room / wafer detail · 4:5" ratio="4/5" dark={true} />
            </div>
          </div>
        </div>
        {/* Watermark — larger, more present */}
        <img src="assets/hana-mark-white.svg" alt=""
          style={{ position: 'absolute', right: -80, bottom: -80, width: 440, opacity: 0.05, pointerEvents: 'none' }} />
      </section>

      {/* ══════════════════════════════════════════════════════
          MARKETS — elevated
          · Blue-tint section bg (--hana-blue-tint) — distinct from plain surface
          · Typographic cards: 3px left blue border, no thumbnails
          · Cleaner hierarchy: market name Geist 16px, body Inter 13px
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: isNight ? moodWrap.pageBg : (marketsBg || 'var(--hana-blue-tint)'), borderTop: `1px solid ${borderCol}` }}>
        <div style={{ ...wrap, padding: '88px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 32 }}>
            <div>
              <div style={{ ...eyebrow, marginBottom: 12 }}>Markets we serve</div>
              <h2 style={{ ...h2Style }}>Nine markets. Decades of expertise in each.</h2>
            </div>
            <a href="#" className="hana-link" style={{ fontSize: 14, whiteSpace: 'nowrap', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              All markets {li('arrow-right', 14)}
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {markets.map(m =>
              <a key={m.name} href="#" className="elev-mkt-card" style={{
                padding: '20px 22px', textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column', gap: 7,
                background: isNight ? 'rgba(255,255,255,0.05)' : '#fff',
                borderRadius: 8,
                border: `1px solid ${borderCol}`,
                borderLeft: '3px solid var(--hana-blue)',
                transition: 'background 150ms ease',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16,
                  letterSpacing: '-0.01em', lineHeight: 1.2,
                  color: isNight ? '#fff' : 'var(--ink)', margin: 0,
                }}>{m.name}</h3>
                <p style={{
                  fontFamily: 'var(--font-text)', fontSize: 13, lineHeight: 1.5,
                  color: isNight ? 'rgba(255,255,255,0.6)' : 'var(--ink-2)', margin: 0, textWrap: 'pretty',
                }}>{m.body}</p>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAPABILITIES — C2 icon carousel
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: isNight ? moodWrap.pageBg : 'var(--bg)' }}>
        <div style={{ ...wrap, padding: '96px 32px' }}>
          <div style={{ ...eyebrow, marginBottom: 12 }}>Capabilities</div>
          <h2 style={{ ...h2Style, marginBottom: 10 }}>Or browse by capability.</h2>
          <p style={{ ...bodyStyle, marginBottom: 44 }}>Six capability families spanning PCBA to RFID.</p>
          <C2HomepageCaps />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LOCATIONS — elevated
          · HQ cell: blue-tint bg + "HQ" badge
          · City names: Geist 24px for HQ, 20px for others
          · Map placeholder gets border-radius consistently
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: isNight ? moodWrap.pageBg : '#fff' }}>
        <div style={{ ...wrap, padding: '96px 32px',
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 72, alignItems: 'flex-start' }}>
          <div>
            <div style={{ marginBottom: 32, borderRadius: 8, overflow: 'hidden', border: `1px solid ${borderCol}` }}>
              <Ph label="Locations map" ratio="16/9" />
            </div>
            <div style={{ ...eyebrow, marginBottom: 14 }}>Locations</div>
            <h2 style={{ ...h2Style, marginBottom: 18 }}>
              Four countries. Six facilities. One operating standard.
            </h2>
            <p style={{ ...bodyStyle, maxWidth: 400 }}>
              Manufacturing across Thailand, Cambodia, China, and the USA gives your
              supply chain real geographic resilience — not as a marketing line,
              as a continuity plan.
            </p>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
            background: borderCol, border: `1px solid ${borderCol}`, borderRadius: 10, overflow: 'hidden',
          }}>
            {locs.map((l, i) =>
              <div key={l.city} style={{
                background: l.hq
                  ? (isNight ? 'rgba(18,131,221,0.15)' : 'var(--hana-blue-tint)')
                  : (isNight ? 'rgba(255,255,255,0.03)' : '#fff'),
                padding: l.hq ? '28px 28px' : '22px 26px',
                display: 'flex', flexDirection: 'column', gap: 6,
                gridColumn: l.hq ? '1 / -1' : 'auto',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {li('map-pin', 13, l.hq ? 'var(--hana-blue)' : 'var(--ink-3)')}
                  <span style={{ ...eyebrow, color: isNight ? 'rgba(255,255,255,0.45)' : 'var(--ink-3)' }}>{l.country}</span>
                  {l.hq &&
                    <span style={{
                      fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 9,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--hana-blue)', background: isNight ? 'rgba(18,131,221,0.25)' : 'rgba(18,131,221,0.12)',
                      padding: '2px 7px', borderRadius: 3,
                    }}>HQ</span>
                  }
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                  fontSize: l.hq ? 24 : 20, letterSpacing: '-0.02em',
                  color: isNight ? '#fff' : 'var(--ink)',
                }}>{l.city}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12,
                  color: isNight ? 'rgba(255,255,255,0.45)' : 'var(--ink-3)',
                }}>{l.role}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          NEWS — elevated
          · h3 19 → 20px
          · Tag/date row tightened
          · "Read" link has consistent bottom anchor
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: isNight ? moodWrap.pageBg : 'var(--bg)' }}>
        <div style={{ ...wrap, padding: '96px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, gap: 32 }}>
            <div>
              <div style={{ ...eyebrow, marginBottom: 12 }}>News &amp; insights</div>
              <h2 style={{ ...h2Style }}>From the engineering floor.</h2>
            </div>
            <a href="#" className="hana-link" style={{ fontSize: 14, whiteSpace: 'nowrap', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              All posts {li('arrow-right', 14)}
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { tag: 'Capabilities', date: 'April 2026',    title: 'Inside our microelectronics line in Lamphun',    body: 'How hybrid microcircuits move from DFM to qualified production in our Thailand facility.' },
              { tag: 'Investors',    date: 'March 2026',    title: 'FY2025 results and outlook for FY2026',           body: 'Revenue, capacity expansion in Cambodia, and our investment plan for the year ahead.' },
              { tag: 'Quality',      date: 'February 2026', title: 'Renewal of IATF 16949 across all sites',         body: 'What automotive customers can expect from our latest audit cycle.' },
            ].map(p =>
              <a key={p.title} href="#" className="elev-card" style={{
                padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column',
                background: isNight ? 'rgba(255,255,255,0.04)' : '#fff',
                borderRadius: 8, border: `1px solid ${borderCol}`,
              }}>
                <div style={{ borderBottom: `1px solid ${borderCol}` }}>
                  <Ph label="News image" ratio="16/9" />
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ ...eyebrow, color: 'var(--hana-blue-deep)' }}>{p.tag}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--line)', display: 'inline-block' }}></span>
                    <span style={{ fontFamily: 'var(--font-text)', fontWeight: 500, fontSize: 11, color: 'var(--ink-3)' }}>{p.date}</span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20,
                    letterSpacing: '-0.01em', lineHeight: 1.25,
                    color: isNight ? '#fff' : 'var(--ink)', margin: 0, textWrap: 'pretty',
                  }}>{p.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-text)', fontSize: 14, lineHeight: 1.6,
                    color: isNight ? 'rgba(255,255,255,0.65)' : 'var(--ink-2)', margin: 0, textWrap: 'pretty',
                  }}>{p.body}</p>
                  <span className="hana-link" style={{
                    fontSize: 12, fontWeight: 600, marginTop: 'auto',
                    display: 'inline-flex', alignItems: 'center', gap: 6, paddingTop: 10,
                  }}>
                    Read {li('arrow-right', 12)}
                  </span>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA — preserved structure, h2 elevated to 36px
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: isNight ? moodWrap.pageBg : '#fff', borderTop: `1px solid ${borderCol}` }}>
        <div style={{ ...wrap, padding: '96px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 48, alignItems: 'center' }}>
            <h2 style={{ ...h2Style, maxWidth: 640 }}>
              Tell us about your program. We'll route it to the right facility.
            </h2>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#" className="hana-btn hana-btn-primary">Talk to engineering {li('arrow-right', 14, '#fff')}</a>
              <a href="#" className="hana-btn hana-btn-secondary">Request a quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER — preserved exactly from V1b, CTA headline uses Geist
      ══════════════════════════════════════════════════════ */}
      <footer style={{ background: 'var(--bg)', color: 'var(--ink-2)', borderTop: `1px solid ${borderCol}` }}>
        <div style={{ background: '#fff', borderBottom: '1px solid var(--line)', padding: '28px 32px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26,
                letterSpacing: '-0.02em', color: 'var(--ink)',
              }}>Have a program to talk through?</div>
              <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 6 }}>
                We respond within 48 hours, with the right facility and engineering lead on the call.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#" className="hana-btn hana-btn-primary">Request a quote</a>
              <a href="#" className="hana-btn hana-btn-secondary">Contact sales</a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 32px 28px',
          display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40 }}>
          <div>
            <img src="assets/hana-logo-full-trimmed.png" alt="Hana"
              style={{ width: 200, height: 65, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
            <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: 280, textWrap: 'pretty' }}>
              The leading independent EMS and OSAT company in Southeast Asia, specializing in microelectronics.
            </p>
            <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
              <a href="#" aria-label="LinkedIn" style={{
                width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line)',
                background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--ink-2)',
              }}>{li('linkedin', 14)}</a>
            </div>
            <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)' }}>
              <div>SET-listed · Bangkok</div>
              <div style={{ marginTop: 4 }}>HANA · ฿24.50 <span style={{ color: 'var(--success)' }}>+1.24%</span></div>
            </div>
          </div>
          {[
            { h: 'Markets',      l: ['Automotive', 'Industrial & IoT', 'Telecommunications', 'RFID', 'Optical & sensors', 'Consumer electronics', 'Medical', 'Access control', 'Power management', 'Data Centers'] },
            { h: 'Capabilities', l: ['PCBA / Box build', 'OSAT', 'Microelectronics', 'Automation', 'DFx Collaborations'] },
            { h: 'Company',      l: ['About', 'Why Hana', 'Locations', 'Sustainability', 'News', 'Careers'] },
            { h: 'Investors',    l: ['SET: HANA', 'Financial reports', 'Annual reports', 'Governance', 'IR contact'] },
          ].map(col =>
            <div key={col.h}>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 12,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 12 }}>{col.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {col.l.map(item =>
                  <li key={item}>
                    <a href="#" style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13, lineHeight: 1.5 }}>{item}</a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.7)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', padding: '10px 32px',
            display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11 }}>
            <div>© 2026 Hana Microelectronics Public Company Limited.</div>
            <div style={{ display: 'flex', gap: 22 }}>
              {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map(l =>
                <a key={l} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.HomepageV1bElevated = HomepageV1bElevated;
