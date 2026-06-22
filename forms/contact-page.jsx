/* Hana — Contact Us page. Hero + intro + General Enquiry form + RFQ CTA
   + sales-offices accordion. Background treatment is fully prop-driven so the
   same component powers the live page (via Tweaks) and the canvas directions.

   Props:
     pattern   'pcb' | 'topo' | 'wafer' | 'none'   — feature pattern
     heroTheme 'dark' | 'light'                     — hero band theme
     placement 'none' | 'page' | 'intro'            — secondary light pattern
     accent    boolean                              — cyan node highlights
     formCol   number (px)                          — form column width
     density   'compact' | 'regular' | 'comfy'
*/

const SALES_OFFICES = [
{ region: 'USA', offices: [
  { name: 'Hana Microelectronics, Inc.', person: 'Sanjay Mitra — President', addr: '5255 Stevens Creek Blvd. #122, Santa Clara, CA 95051', contacts: [['tel', '+1 (408) 452-7474', 'tel:+14084527474'], ['mail', 'info-request@hanaus.com', 'mailto:info-request@hanaus.com']] },
  { name: 'Hana Technologies, Inc.', addr: '29000 Aurora Road, Solon, OH 44139', contacts: [['tel', '+1 330 405 4600', 'tel:+13304054600'], ['mail', 'info-request@hanaus.com', 'mailto:info-request@hanaus.com']] }] },
{ region: 'Asia', offices: [
  { name: 'Philippines', person: 'Henry Lubrico', contacts: [['mail', 'info-request@hanaus.com', 'mailto:info-request@hanaus.com']] },
  { name: 'Singapore', person: 'SR Chok', contacts: [['tel', '+65 9692 2682', 'tel:+6596922682'], ['mail', 'info-request@hanaus.com', 'mailto:info-request@hanaus.com']] }] },
{ region: 'Europe', offices: [
  { name: 'France', person: 'Mortar Feddal', contacts: [['tel', '+33 6 17 72 10 68', 'tel:+33617721068'], ['mail', 'info-request@hanaus.com', 'mailto:info-request@hanaus.com']] },
  { name: 'Germany', person: 'Frank Böhme — Ingenieur Büro Böhme', addr: 'Schwatlostraße 4, 12207 Berlin', contacts: [['tel', '+49 30 75657690', 'tel:+4930756576690'], ['mail', 'info-request@hanaus.com', 'mailto:info-request@hanaus.com']] }] }];

function OfficeAccordion() {
  const [open, setOpen] = React.useState('USA');
  return (
    <React.Fragment>
      <div className="cf-offices-label">Sales offices</div>
      <div className="cf-accordion">
        {SALES_OFFICES.map(({ region, offices }) => {
          const isOpen = open === region;
          return (
            <div className="cf-acc-item" key={region}>
              <button className="cf-acc-header" onClick={() => setOpen(isOpen ? null : region)}>
                <span className="cf-acc-region">{region} <span className="cf-acc-count">{offices.length} {offices.length === 1 ? 'office' : 'offices'}</span></span>
                <span className={'cf-acc-chevron' + (isOpen ? ' open' : '')}><HanaIcon name="chevron-down" size={15} color="var(--ink-3)" /></span>
              </button>
              {isOpen &&
              <div className="cf-acc-body">
                  {offices.map((o) =>
                <div className="cf-office" key={o.name}>
                      <div className="cf-office-name">{o.name}</div>
                      {o.person && <div className="cf-office-person">{o.person}</div>}
                      {o.addr && <div className="cf-office-addr">{o.addr}</div>}
                      <div className="cf-office-contacts">
                        {o.contacts.map(([, label, href]) => <a key={href} href={href}>{label}</a>)}
                      </div>
                    </div>)}
                </div>}
            </div>);
        })}
      </div>
    </React.Fragment>);
}

function ContactPage({ pattern = 'pcb', heroTheme = 'dark', placement = 'none', accent = true, formCol = 440, density = 'regular', rfqHref = 'Plant RFQ.html' }) {
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
    if (pattern !== 'none' && heroRef.current) {
      window.HanaBG.apply(heroRef.current, { pattern, variant: heroTheme, accent: ac, fade: 'left' });
    }
    if (pattern !== 'none' && placement === 'page' && sectionRef.current) {
      window.HanaBG.apply(sectionRef.current, { pattern, variant: 'light', accent: ac, fade: 'none' });
    }
    if (pattern !== 'none' && placement === 'intro' && introRef.current) {
      window.HanaBG.apply(introRef.current, { pattern, variant: 'light', accent: ac, fade: 'none' });
    }
  }, [pattern, heroTheme, placement, accent]);

  const heroLight = heroTheme === 'light';
  const heroBaseBg = heroLight ? 'var(--surface)' : 'var(--hana-blue-deep)';
  const ink = heroLight ? 'var(--ink)' : '#fff';
  const inkSub = heroLight ? 'var(--ink-2)' : 'rgba(229,238,245,0.72)';
  const inkMeta = heroLight ? 'var(--ink-2)' : 'rgba(255,255,255,0.82)';

  return (
    <div className={'cf-page density-' + density} style={{ '--form-col': formCol + 'px' }}>
      <HanaHeader active="Contact" />

      {/* Hero band */}
      <section className="cf-hero" ref={heroRef} style={{ background: heroBaseBg }} data-screen-label="Contact hero">
        <div className="cf-hero-inner">
          <p className="cf-eyebrow" style={{ color: heroLight ? 'var(--hana-blue)' : '#7EC8FF' }}>Get in touch</p>
          <h1 style={{ color: ink }}>Talk to the Hana team</h1>
          <p className="cf-hero-sub" style={{ color: inkSub }}>A question about our capabilities, a partnership, or a quote — tell us what you need and we'll route it to the right people across our organisation.

          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="cf-section" ref={sectionRef}>
        <div className="cf-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cf-grid">
            <div className="cf-intro" ref={introRef} style={placement === 'intro' ? { position: 'relative', padding: 24, borderRadius: 'var(--radius-panel)', border: '1px solid var(--line)', overflow: 'hidden' } : null}>
              <div style={placement === 'intro' ? { position: 'relative', zIndex: 1 } : null}>
                <p className="cf-eyebrow">How can we help?</p>
                <h2></h2>
                <p className="lead"></p>

                <div className="cf-rfq-cta">
                  <div className="cf-rfq-label">START A PROJECT</div>
                  <h3>Have a product to manufacture?</h3>
                  <p>Select RFQ in the contact reason and we'll route you to our sales and technical teams to start the conversation on your needs. </p>
                </div>

                <OfficeAccordion />
              </div>
            </div>

            <GeneralEnquiryForm />
          </div>
        </div>
      </section>

      <HanaFooter />
    </div>);
}

Object.assign(window, { ContactPage, OfficeAccordion, SALES_OFFICES });