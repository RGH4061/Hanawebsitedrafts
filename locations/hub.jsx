/* ════════════════════════════════════════════════════════════════
   Hana — Locations HUB  ·  /locations/
   Header → page intro → world-map block → plants by country →
   why-multisite (dark) → closing CTA → footer.
   Accent + density come in as props (driven by Tweaks).
   ════════════════════════════════════════════════════════════════ */

function PlantCard({ plant, accent }) {
  const affiliate = plant.status === 'affiliate';
  const badge = affiliate ? { label: 'Affiliate company', color: 'var(--warm-accent)' } : null;
  return (
    <div className="lc-plant-card" style={{
      border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', overflow: 'hidden',
      background: '#fff', display: 'flex', flexDirection: 'column', transition: 'border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease'
    }}>
      <div style={{ position: 'relative' }}>
        <Photo photo={{ src: plant.photo, label: `${plant.city} · plant photo` }} height={230} radius={0} />
        {badge &&
        <span style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'var(--font-text)', fontSize: 9.5,
          fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', whiteSpace: 'nowrap',
          background: badge.color, padding: '4px 9px', borderRadius: 3 }}>{badge.label}</span>}
      </div>
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 6 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            {plant.city}
          </div>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginBottom: 14 }}>
          {plant.region}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
          {plant.services.map((s) =>
          <span key={s} style={{ fontFamily: 'var(--font-text)', fontSize: 11, fontWeight: 600, padding: '3px 10px', whiteSpace: 'nowrap',
            border: '1px solid var(--line)', borderRadius: 4, color: 'var(--ink-2)', background: 'var(--bg)' }}>{s}</span>)}
        </div>
        <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 16px' }}>{plant.summary}</p>
        <div style={{ flex: 1 }}>
          {plant.certs && plant.certs.length > 0 &&
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 9 }}>Certifications</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {plant.certs.map((c) =>
              <span key={c} style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 500, lineHeight: 1.2,
                color: 'var(--ink-2)', padding: '3px 8px', whiteSpace: 'nowrap',
                border: '1px solid var(--line)', borderRadius: 4, background: '#fff' }}>{c}</span>)}
            </div>
          </div>}
        </div>
        <a href={plant.url} className="lc-card-link"
        style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
          color: accent, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, alignSelf: 'flex-start' }}>
          {plant.linkLabel || (affiliate ? 'Visit Cheongju site' : `View ${plant.city.split(',')[0]} plant`)}
          <SvgIcon name="arrow-right" size={13} color={accent} />
        </a>
      </div>
    </div>);
}

/* country heading / divider bar — sits above a country's card(s) */
function CountryHeading({ country, count }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16,
      padding: '0 0 12px', borderBottom: '2px solid var(--ink)', marginBottom: 22 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', margin: 0 }}>{country}</h3>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)', whiteSpace: 'nowrap' }}>
          {count} {count === 1 ? 'site' : 'sites'}
        </span>
      </div>
    </div>);
}

/* multi-site country: full-width heading + N cards in a 2-up grid */
function CountryGroup({ country, plants, accent }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <CountryHeading country={country} count={plants.length} />
      <div className="lc-country-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }}>
        {plants.map((p) => <PlantCard key={p.slug} plant={p} accent={accent} />)}
      </div>
    </div>);
}

/* single-site country rendered as one column (its own heading + card),
   so two countries can share a row while each keeps its divider line */
function CountryColumn({ country, plant, accent }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CountryHeading country={country} count={1} />
      <PlantCard plant={plant} accent={accent} />
    </div>);
}

/* a row pairing two single-site countries */
function CountryPair({ left, right, accent }) {
  return (
    <div className="lc-country-pair" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginBottom: 40, alignItems: 'start' }}>
      <CountryColumn country={left.country} plant={left.plants[0]} accent={accent} />
      <CountryColumn country={right.country} plant={right.plants[0]} accent={accent} />
    </div>);
}

function AdvIcon({ name, size = 28 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    globe: <React.Fragment><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></React.Fragment>,
    shuffle: <React.Fragment><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" /><path d="m18 2 4 4-4 4" /><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" /><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" /><path d="m18 14 4 4-4 4" /></React.Fragment>,
    shield: <React.Fragment><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></React.Fragment> };
  return <svg {...common}>{paths[name]}</svg>;
}

function WhyMultisite({ accent, pad }) {
  const advs = [
  { icon: 'globe', title: 'Geographic diversification', body: 'Manufacturing across five countries gives genuine supply-chain resilience against geo-political headwinds— including a domestic US option and a diversified China+1 strategy.' },
  { icon: 'shuffle', title: 'Manufacturing flexibility across sites', body: 'Dual source across one company without re-qualifying a new supplier. Hana\'s site are diversified in their capability mix and wage structure to achieve the right balance for our customers.' },
  { icon: 'shield', title: 'The strictest quality, at every site', body: 'One quality system across the group, with certifications matched to the work — IATF 16949 for automotive, ISO 13485 for medical, and a TAA-compliant US site for defense and government supply chains.' }];

  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.HanaBG) {
      window.HanaBG.apply(ref.current, { pattern: 'globe', variant: 'dark', accent: '', fade: 'none' });
    }
  }, []);
  return (
    <section ref={ref} style={{ background: 'var(--ink)', color: '#fff', fontFamily: 'var(--font-text)', position: 'relative', overflow: 'hidden' }}>
      <div className="lc-adv-inner" style={{ maxWidth: 1240, margin: '0 auto', padding: `${pad}px 32px`, position: 'relative', zIndex: 1 }}>
        <div className="hana-spec-label" style={{ color: 'var(--hana-blue-soft)', marginBottom: 14 }}>ONE HANA SYSTEM</div>
        <h2 className="hana-h2" style={{ color: '#fff', marginBottom: 40 }}>Structural advantages for your supply chain</h2>
        <div className="lc-adv-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {advs.map((a) =>
          <div key={a.icon} style={{ background: '#fff', borderRadius: 'var(--radius-card)', padding: '28px 26px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: accent, marginBottom: 16, display: 'flex' }}><AdvIcon name={a.icon} /></div>
              <div style={{ width: 34, height: 3, background: accent, borderRadius: 2, marginBottom: 16 }}></div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.25 }}>{a.title}</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.65 }}>{a.body}</div>
            </div>
          )}
        </div>
      </div>
    </section>);
}

function LocationsHub({ accent = 'var(--hana-blue)', density = 'comfortable' }) {
  const pad = density === 'compact' ? 56 : 80;
  const get = (c) => ({ country: c, plants: PLANTS.filter((p) => p.country === c) });
  const thailand = get('Thailand');

  return (
    <div style={{ background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-text)' }}>
      <style>{`
        .lc-plant-card:hover{ border-color: color-mix(in srgb, ${accent} 55%, var(--line)) !important;
          box-shadow: 0 8px 24px -12px rgba(18,131,221,.28); transform: translateY(-2px); }
        .lc-card-link:hover{ opacity:.78; }
        /* ─── Mobile ──────────────────────────────────────────────────── */
        @media (max-width: 767px) {
          .lc-intro { padding: 36px 20px 22px !important; }
          .lc-hub-h1 { font-size: 34px !important; }
          .lc-hub-sub { font-size: 18px !important; }
          /* world map is unreadable at phone widths — desktop only */
          .lc-map-block { display: none !important; }
          .lc-adv-inner { padding: 44px 20px !important; }
          .lc-adv-grid { grid-template-columns: 1fr !important; }
          .lc-plants-inner { padding: 36px 20px 44px !important; }
          .lc-plants-head { flex-direction: column !important; gap: 14px !important; margin-bottom: 24px !important; }
          .lc-country-grid { grid-template-columns: 1fr !important; }
          .lc-country-pair { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
      <LocHeader />
      <LocBreadcrumb trail={[{ label: 'Home', href: 'locations.html' }, { label: 'Locations' }]} />

      {/* ── page intro ───────────────────────────────── */}
      <div className="lc-intro" style={{ maxWidth: 1240, margin: '0 auto', padding: `${pad - 18}px 32px 30px` }}>
        <div className="hana-spec-label" style={{ color: accent, marginBottom: 16 }}>Locations</div>
        <h1 className="lc-hub-h1" style={{ fontFamily: 'var(--font-display)', fontSize: 50, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.04, color: 'var(--ink)', margin: '0 0 20px', maxWidth: 820 }}>Our Global Footprint

        </h1>
        <p className="lc-hub-sub" style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.32, color: 'var(--ink-2)', maxWidth: 760, margin: 0, textWrap: 'balance' }}>
          One group, one quality system, across five countries &mdash; so consistent quality and responsive service scale wherever you choose to build.
        </p>
      </div>

      {/* ── world map block ──────────────────────────── */}
      <div className="lc-map-block" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px 20px' }}>
        <WorldMap plants={PLANTS} accent={accent} />
      </div>

      <WhyMultisite accent={accent} pad={pad} />

      {/* ── plants by country ────────────────────────── */}
      <div style={{ background: '#F7F8FA', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="lc-plants-inner" style={{ maxWidth: 1240, margin: '0 auto', padding: `${pad - 24}px 32px ${pad}px` }}>
        <div className="lc-plants-head" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, marginBottom: 34 }}>
          <div>
            <div className="hana-spec-label" style={{ color: accent, marginBottom: 12 }}>The plants</div>
            <h2 className="hana-h2">Explore Our Sites</h2>
          </div>
          <p style={{ fontSize: 13.5, color: 'var(--ink-3)', maxWidth: 360, lineHeight: 1.6, margin: 0 }}>
            Each card links to that plant&rsquo;s page. Cheongju operates under an affiliated company name and runs its own site.
          </p>
        </div>
        <CountryGroup country={thailand.country} plants={thailand.plants} accent={accent} />
        <CountryPair left={get('China')} right={get('USA')} accent={accent} />
        <CountryPair left={get('Cambodia')} right={get('South Korea')} accent={accent} />
      </div>
      </div>

      <ClosingCta
        title="Ready to discuss your program?"
        body="Our engineering team works alongside yours from DFM through production ramp. Tell us where you need to build."
        primary="Request a quote" secondary="Contact engineering" />

      <SubCapFooter />
    </div>);
}

Object.assign(window, { LocationsHub });