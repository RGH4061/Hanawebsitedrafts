/* Hana — Plant RFQ page. Hero + intro (what to attach) + RFQ form +
   cross-link back to the contact form. Background treatment is prop-driven,
   mirroring ContactPage. */

function RFQPage({ pattern = 'wafer', heroTheme = 'dark', placement = 'none', accent = true, formCol = 520, density = 'regular', contactHref = 'contact.html' }) {
  const heroRef = React.useRef(null);
  const sectionRef = React.useRef(null);
  const introRef = React.useRef(null);

  React.useEffect(() => {
    if (!window.HanaBG) return;
    [heroRef, sectionRef, introRef].forEach((r) => {
      const layer = r.current && r.current.querySelector(':scope > .hana-bg-layer');
      if (layer) layer.remove();
      if (r.current) r.current.__hanaBG = null;
    });
    const ac = accent ? 'cyan' : '';
    if (pattern !== 'none' && heroRef.current) window.HanaBG.apply(heroRef.current, { pattern, variant: heroTheme, accent: ac, fade: 'left' });
    if (pattern !== 'none' && placement === 'page' && sectionRef.current) window.HanaBG.apply(sectionRef.current, { pattern, variant: 'light', accent: ac, fade: 'none' });
    if (pattern !== 'none' && placement === 'intro' && introRef.current) window.HanaBG.apply(introRef.current, { pattern, variant: 'light', accent: ac, fade: 'none' });
  }, [pattern, heroTheme, placement, accent]);

  const heroLight = heroTheme === 'light';
  const heroBaseBg = heroLight ? 'var(--surface)' : 'var(--hana-blue-deep)';
  const ink = heroLight ? 'var(--ink)' : '#fff';
  const inkSub = heroLight ? 'var(--ink-2)' : 'rgba(229,238,245,0.72)';
  const inkMeta = heroLight ? 'var(--ink-2)' : 'rgba(255,255,255,0.82)';

  return (
    <div className={'cf-page density-' + density} style={{ '--form-col': formCol + 'px' }}>
      <HanaHeader active="Contact" />

      <section className="cf-hero" ref={heroRef} style={{ background: heroBaseBg }} data-screen-label="RFQ hero">
        <div className="cf-hero-inner">
          <p className="cf-eyebrow" style={{ color: heroLight ? 'var(--hana-blue)' : '#7EC8FF' }}>Request for Quote</p>
          <h1 style={{ color: ink }}>Start a project with Hana.</h1>
          <p className="cf-hero-sub" style={{ color: inkSub }}>
            Complete the form and our team will review your request and be in touch within two business days. We'll route it to the right facility and team. The more detail you provide, the faster we can give you a useful response.
          </p>
          <div className="cf-hero-meta">
            <span style={{ color: inkMeta }}><HanaIcon name="phone" size={15} color={heroLight ? 'var(--hana-blue)' : '#7EC8FF'} /> Two-business-day review</span>
            <span style={{ color: inkMeta }}><HanaIcon name="pin" size={15} color={heroLight ? 'var(--hana-blue)' : '#7EC8FF'} /> Routed to the right plant</span>
          </div>
        </div>
      </section>

      <section className="cf-section" ref={sectionRef}>
        <div className="cf-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cf-grid wide">
            <div className="cf-intro" ref={introRef} style={placement === 'intro' ? { position: 'relative', padding: 24, borderRadius: 'var(--radius-panel)', border: '1px solid var(--line)', overflow: 'hidden' } : null}>
              <div style={placement === 'intro' ? { position: 'relative', zIndex: 1 } : null}>
                <p className="cf-eyebrow">What we'll do with it</p>
                <h2>Tell us what you're building.</h2>
                <p className="lead">Your request goes straight to our engineering team. We assess fit, identify the best facility, and reply with next steps — typically within two business days.</p>

                <div className="cf-callout">
                  <div className="cf-callout-label">Helpful to attach</div>
                  <ul>
                    <li>Bill of Materials (BOM)</li>
                    <li>PCB design files or Gerbers</li>
                    <li>Drawings or mechanical specs</li>
                    <li>Existing test specifications</li>
                  </ul>
                </div>

                <a href={contactHref} className="cf-crosslink"><HanaIcon name="arrow-right" size={14} color="var(--hana-blue)" /> General question? Use the contact form</a>
              </div>
            </div>

            <PlantRFQForm />
          </div>
        </div>
      </section>

      <HanaFooter />
    </div>);
}

Object.assign(window, { RFQPage });
