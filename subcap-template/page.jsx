/* ════════════════════════════════════════════════════════════════
   Hana — Sub-capability page TEMPLATE · page assembly + tweaks
   One data object → one full page. The capability switcher proves the
   template holds for SMT, COB, Flip Chip, and Chip-on-Flex.
   ════════════════════════════════════════════════════════════════ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "capability": "smt-assembly",
  "accent": "#1283DD",
  "showSidebar": true,
  "showSpecs": true,
  "showWhy": true,
  "showExampleProducts": true
}/*EDITMODE-END*/;

const CAP_OPTIONS = [
  { slug: 'smt-assembly', label: 'SMT Assembly' },
  { slug: 'cob-assembly', label: 'COB Assembly' },
  { slug: 'box-build', label: 'Box Build' },
  { slug: 'flip-chip', label: 'Flip Chip' },
];

/* ─── Band: full-width section ground with a centred 1000px content
       column. Optional Hana SVG texture renders behind at z0; content
       sits at z1. Lets sections carry their own fill/texture without
       forking the section components. ─── */
function Band({ bg = '#fff', pattern = null, variant = 'light', accent = '', fade = 'none', opacity = 1, layerBg = null, pad = '8px 48px', lift = false, children }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && pattern && window.HanaBG) {
      window.HanaBG.apply(ref.current, { pattern, variant, accent, fade });
      const layer = ref.current.querySelector(':scope > .hana-bg-layer');
      if (layer) {
        layer.style.opacity = opacity;
        if (layerBg !== null) layer.style.background = layerBg;
      }
    }
  }, [pattern, variant, accent, fade, opacity, layerBg]);
  return (
    <div ref={ref} style={{ background: bg, position: 'relative', overflow: 'hidden', zIndex: lift ? 1 : 'auto' }}>
      <div className="band-inner" style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto', padding: pad }}>
        {children}
      </div>
    </div>
  );
}

function SubCapPage() {
  const { useState } = React;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [collapsed, setCollapsed] = useState(false);

  const data = SUBCAPS[t.capability] || SUBCAPS['smt-assembly'];

  /* dynamic section numbering so hiding a section leaves no gap */
  let n = 0;
  const num = () => String(++n).padStart(2, '0');
  const nPillars = num();
  const nWhy = t.showWhy ? num() : null;
  const isBoxBuild = data.slug === 'box-build';
  const nProducts = (isBoxBuild && t.showExampleProducts) ? num() : null;
  const nLoc = num();
  const nFaq = num();

  const showRail = t.showSidebar;

  return (
    <div style={{ background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-text)' }}>
      <SubCapHeader />
      <Breadcrumb title={data.navTitle} />

      <div style={{
        maxWidth: 1240, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: showRail ? `${collapsed ? 56 : 272}px minmax(0,1fr)` : 'minmax(0,1fr)',
        background: '#fff', transition: 'grid-template-columns 200ms ease-out',
      }}>
        {showRail && (
          <CapabilitySidebar
            activeSlug={data.slug}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            onSelect={(slug) => setTweak('capability', slug)}
          />
        )}

        <main className="subcap-main" style={{ minWidth: 0, position: 'relative', overflow: 'hidden', ['--accent']: t.accent }}>
          <Band bg="#fff" pad="56px 48px 40px" lift={true}>
            <Hero data={data} />
          </Band>
          <Band bg="linear-gradient(120deg, #f5f7fa 35%, #d8e6f3 100%)" pattern="wafer" variant="light" opacity={0.55} layerBg="transparent" pad="8px 48px 44px">
            <Pillars data={data} showSpecs={t.showSpecs} num={nPillars} />
          </Band>
          {t.showWhy && (
            <Band bg="#fff" pad="8px 48px 44px">
              <WhyRows data={data} num={nWhy} />
            </Band>
          )}
          {isBoxBuild && t.showExampleProducts && (
            <Band bg="#fff" pad="8px 48px 44px">
              <ExampleProducts num={nProducts} />
            </Band>
          )}
          <Band bg="#fff" pad="8px 48px 44px">
            <MidCta />
          </Band>
          <Band bg="var(--hana-blue-tint)" pad="52px 48px">
            <Locations data={data} num={nLoc} cols={4} />
          </Band>
          <Band bg="#fff" pad="8px 48px 56px">
            <Faq data={data} num={nFaq} />
          </Band>
        </main>
      </div>

      <ClosingCta data={data} />
      <SubCapFooter />

      {/* ─── Tweaks ─── */}
      <TweaksPanel>
        <TweakSection label="Capability" />
        <TweakSelect
          label="Sub-capability"
          value={t.capability}
          options={CAP_OPTIONS.map((o) => ({ value: o.slug, label: o.label }))}
          onChange={(v) => setTweak('capability', v)}
        />
        <TweakSection label="Accent" />
        <TweakColor
          label="Capability accent"
          value={t.accent}
          options={['#1283DD', '#0E9E8A']}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakSection label="Layout" />
        <TweakToggle label="Browse sidebar" value={t.showSidebar} onChange={(v) => setTweak('showSidebar', v)} />
        <TweakToggle label="Pillar spec chips" value={t.showSpecs} onChange={(v) => setTweak('showSpecs', v)} />
        <TweakToggle label="“Why teams run it” rows" value={t.showWhy} onChange={(v) => setTweak('showWhy', v)} />
        <TweakToggle label="Example products (Box Build)" value={t.showExampleProducts} onChange={(v) => setTweak('showExampleProducts', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SubCapPage />);
