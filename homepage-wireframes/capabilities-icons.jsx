/* CapabilitiesIcons — exploration of icon-led capability tiles.
   Lives in the "Or browse by capability" homepage slot. Built to sit
   beside the image-heavy markets grid so the page doesn't feel like
   two slabs of photography stacked on top of each other.

   Custom icon set drawn to the Hana spec:
     · 32px grid, 1.6px stroke, rounded caps
     · single color (currentColor → --hana-blue or --ink)
     · schematic / engineered, not decorative
*/

function CapabilitiesIcons() {
  const wrap = { maxWidth: 1080, margin: '0 auto', padding: '0 32px' };

  const eyebrow = {
    fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)',
  };

  const h2Style = {
    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 36,
    letterSpacing: '-0.02em', lineHeight: 1.15,
    color: 'var(--ink)', margin: 0, textWrap: 'balance',
  };

  const bodyStyle = {
    fontFamily: 'var(--font-text)', fontWeight: 400, fontSize: 16,
    lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, textWrap: 'pretty',
  };

  /* ── per-capability accent map (used by elevated variants)
         Single accent across all five — the discipline motif carries
         the per-card differentiation, not color. ── */
  const accentByIcon = {
    pcb:   'var(--hana-blue)',
    chip:  'var(--hana-blue)',
    micro: 'var(--hana-blue)',
    gear:  'var(--hana-blue)',
    merge: 'var(--hana-blue)',
  };

  /* Subtle background motif per capability — low opacity, sits behind text */
  const Motif = ({ name, color = 'currentColor', opacity = 0.18 }) => {
    const common = { width: '100%', height: '100%', fill: 'none', stroke: color, strokeWidth: 1.2, strokeLinecap: 'round', opacity };
    switch (name) {
      // PCBA — parallel SMT traces with vias
      case 'pcb':
        return (
          <svg {...common} viewBox="0 0 220 140" preserveAspectRatio="xMaxYMid slice">
            <path d="M0 28 H80 L96 44 H220" />
            <path d="M0 64 H140 L156 80 H220" />
            <path d="M0 100 H60 L76 116 H220" />
            <circle cx="80" cy="28" r="3" fill={color} stroke="none" />
            <circle cx="140" cy="64" r="3" fill={color} stroke="none" />
            <circle cx="60" cy="100" r="3" fill={color} stroke="none" />
            <circle cx="200" cy="44" r="3" />
            <circle cx="200" cy="80" r="3" />
          </svg>
        );
      // OSAT — silicon wafer disk with notch + die grid
      case 'chip':
        return (
          <svg {...common} viewBox="0 0 220 140" preserveAspectRatio="xMaxYMid slice">
            {/* die grid — clipped to the wafer disk */}
            <defs>
              <clipPath id="wafer-clip-osat">
                <circle cx="186" cy="60" r="52" />
              </clipPath>
            </defs>
            <g clipPath="url(#wafer-clip-osat)">
              {(() => {
                const cells = [];
                const step = 11;
                for (let x = 132; x < 244; x += step) {
                  for (let y = 0; y < 120; y += step) {
                    cells.push(<rect key={`${x}-${y}`} x={x} y={y} width={step} height={step} />);
                  }
                }
                return cells;
              })()}
            </g>
            {/* wafer outline */}
            <circle cx="186" cy="60" r="52" strokeWidth={1.4} />
            {/* primary flat (notch indicator) — short straight chord at the bottom */}
            <line x1="173" y1="111" x2="199" y2="111" strokeWidth={1.6} />
            {/* alignment crosshair at wafer centre */}
            <line x1="181" y1="60" x2="191" y2="60" strokeWidth={1} opacity="0.7" />
            <line x1="186" y1="55" x2="186" y2="65" strokeWidth={1} opacity="0.7" />
          </svg>
        );
      // Microelectronics — honeycomb
      case 'micro':
        return (
          <svg {...common} viewBox="0 0 220 140" preserveAspectRatio="xMaxYMid slice">
            {(() => {
              const h = 22, w = h * 0.866, hexes = [];
              for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
                const x = 110 + c * w * 2 + (r % 2 ? w : 0);
                const y = 12 + r * h * 1.5;
                hexes.push(
                  <polygon key={`${r}-${c}`} points={`${x},${y-h/2} ${x+w},${y-h/4} ${x+w},${y+h/4} ${x},${y+h/2} ${x-w},${y+h/4} ${x-w},${y-h/4}`} />
                );
              }
              return hexes;
            })()}
          </svg>
        );
      // Automation — concentric cam arcs
      case 'gear':
        return (
          <svg {...common} viewBox="0 0 220 140" preserveAspectRatio="xMaxYMid slice">
            <circle cx="200" cy="70" r="20" />
            <circle cx="200" cy="70" r="40" />
            <circle cx="200" cy="70" r="60" strokeDasharray="4 6" />
            <circle cx="200" cy="70" r="80" strokeDasharray="2 8" opacity="0.6" />
            <line x1="200" y1="70" x2="240" y2="70" />
            <circle cx="200" cy="70" r="2" fill={color} stroke="none" />
          </svg>
        );
      // DFM — converging dashed paths meeting at node
      case 'merge':
        return (
          <svg {...common} viewBox="0 0 220 140" preserveAspectRatio="xMaxYMid slice">
            <path d="M40 30 C 100 30, 120 70, 180 70" strokeDasharray="3 5" />
            <path d="M40 110 C 100 110, 120 70, 180 70" strokeDasharray="3 5" />
            <circle cx="40" cy="30" r="3" fill={color} stroke="none" />
            <circle cx="40" cy="110" r="3" fill={color} stroke="none" />
            <circle cx="180" cy="70" r="4" />
            <line x1="184" y1="70" x2="216" y2="70" />
          </svg>
        );
      default:
        return null;
    }
  };

  /* ── data — same five capability families as v1b-elevated ── */
  const caps = [
    { title: 'PCBA / Box build', code: 'CAP·01',
      body: 'End-to-end electronics manufacturing. SMT, COB, through-hole, box build and more.',
      detail: ['SMT lines · 0201 capable', 'Through-hole & mixed', 'Box build & system integration'],
      icon: 'pcb' },
    { title: 'OSAT',             code: 'CAP·02',
      body: 'Outsourced semiconductor assembly and test — die attach, wire bonding, flip chip, final test.',
      detail: ['Die attach & wire bond', 'Flip chip & SiP', 'Wafer probe & final test'],
      icon: 'chip' },
    { title: 'Microelectronic Assembly', code: 'CAP·03',
      body: 'Hybrid microcircuits, MEMS, sensors, and precision interconnect.',
      detail: ['Hybrid microcircuits', 'MEMS & sensor assembly', 'Precision interconnect'],
      icon: 'micro' },
    { title: 'Automation',       code: 'CAP·04',
      body: 'Automated SMT lines, in-line AOI, and robotics-augmented box build for repeatable yield at volume.',
      detail: ['In-line AOI & SPI', 'Robotic handling & test', 'Manufacturing traceability'],
      icon: 'gear' },
    { title: 'DFx & NPI Collaborations',  code: 'CAP·05',
      body: 'Engineering teams embedded from NPI through production.',
      detail: ['Embedded DFM review', 'NPI to volume transition', 'Continuous yield work'],
      icon: 'merge' },
    { title: 'RFID Inlay',               code: 'CAP·06',
      body: 'High-volume RFID and smart-label inlay manufacturing for retail, logistics, and tire ID.',
      detail: ['COB-on-inlay', 'Roll-to-roll format', 'Tire-tag assembly'],
      icon: 'rfid' },
  ];

  /* ── icon system ─────────────────────────────────────────
     One Icon component, switch on name. Stroke + caps tuned to
     the Hana spec. Drawn on a 32-unit viewBox; size controls
     the rendered width/height in px. */
  const Icon = ({ name, size = 32, color = 'currentColor', stroke = 1.6 }) => {
    const common = {
      width: size, height: size, viewBox: '0 0 32 32',
      fill: 'none', stroke: color, strokeWidth: stroke,
      strokeLinecap: 'round', strokeLinejoin: 'round',
      style: { display: 'block', flexShrink: 0 },
    };
    switch (name) {
      // PCB / EMS — board outline + two SMT pads + a trace
      case 'pcb':
        return (
          <svg {...common}>
            <rect x="4" y="6" width="24" height="20" rx="1.5" />
            <path d="M4 12 H10 M22 12 H28 M4 20 H10 M22 20 H28" />
            <rect x="11" y="11" width="4" height="3" rx="0.5" />
            <rect x="17" y="18" width="4" height="3" rx="0.5" />
            <path d="M13 14 V18 H19" />
            <circle cx="26" cy="9" r="0.8" fill={color} stroke="none" />
          </svg>
        );

      // OSAT — chip package with pins on all four sides
      case 'chip':
        return (
          <svg {...common}>
            <rect x="9" y="9" width="14" height="14" rx="1" />
            <rect x="13" y="13" width="6" height="6" />
            {/* pins top */}
            <path d="M12 9 V5 M16 9 V5 M20 9 V5" />
            {/* pins bottom */}
            <path d="M12 23 V27 M16 23 V27 M20 23 V27" />
            {/* pins left */}
            <path d="M9 12 H5 M9 16 H5 M9 20 H5" />
            {/* pins right */}
            <path d="M23 12 H27 M23 16 H27 M23 20 H27" />
          </svg>
        );

      // Microelectronics — wafer circle with crosshair + die grid
      case 'micro':
        return (
          <svg {...common}>
            <circle cx="16" cy="16" r="11" />
            <path d="M5 16 H27 M16 5 V27" />
            <path d="M11 11 H21 V21 H11 Z" />
            <path d="M14 11 V21 M18 11 V21 M11 14 H21 M11 18 H21" />
            {/* notch */}
            <path d="M14.5 5.2 L16 7 L17.5 5.2" />
          </svg>
        );

      // Quality — shield with check (kept for backwards-compat)
      case 'shield':
        return (
          <svg {...common}>
            <path d="M16 4 L26 7 V15 C26 21 22 26 16 28 C10 26 6 21 6 15 V7 Z" />
            <path d="M11 16 L14.5 19.5 L21 12.5" />
          </svg>
        );

      // Automation — gear ring with inner index + spindle
      case 'gear':
        return (
          <svg {...common}>
            {/* 8-tooth gear ring */}
            <path d="M16 3 L17.6 5.4 L20.4 4.6 L20.8 7.5 L23.6 8.4 L22.6 11.1 L24.8 13.2 L22.6 15.2 L23.6 18 L20.8 18.8 L20.4 21.7 L17.6 20.9 L16 23.3 L14.4 20.9 L11.6 21.7 L11.2 18.8 L8.4 18 L9.4 15.2 L7.2 13.2 L9.4 11.1 L8.4 8.4 L11.2 7.5 L11.6 4.6 L14.4 5.4 Z" />
            <circle cx="16" cy="13.2" r="3.2" />
            {/* spindle / index tick */}
            <path d="M16 26 V29" />
            <path d="M13.5 29 H18.5" />
          </svg>
        );

      // DFM — two nodes joined by a merge path
      case 'merge':
        return (
          <svg {...common}>
            <circle cx="8" cy="8" r="3" />
            <circle cx="8" cy="24" r="3" />
            <circle cx="24" cy="16" r="3" />
            <path d="M11 8 C16 8, 18 12, 21 15" />
            <path d="M11 24 C16 24, 18 20, 21 17" />
            <path d="M27 16 H30" strokeDasharray="0 0" />
          </svg>
        );

      // RFID Inlay — antenna coil loop with a small die at centre
      case 'rfid':
        return (
          <svg {...common}>
            {/* outer antenna loop */}
            <rect x="3" y="7" width="26" height="18" rx="3" />
            {/* inner loop */}
            <rect x="8" y="12" width="16" height="8" rx="1.5" />
            {/* die / chip in centre */}
            <rect x="13" y="14" width="6" height="4" rx="0.5" />
            {/* feed lines */}
            <path d="M8 16 H13 M19 16 H24" />
          </svg>
        );

      // utility
      case 'arrow-right':
        return (
          <svg {...common} viewBox="0 0 24 24" width={size} height={size}>
            <path d="M5 12 H19" />
            <path d="M12 5 L19 12 L12 19" />
          </svg>
        );
      case 'check':
        return (
          <svg {...common} viewBox="0 0 24 24" width={size} height={size}>
            <path d="M5 12 L10 17 L19 7" />
          </svg>
        );
      default:
        return null;
    }
  };

  /* ── shared section header ─────────────────────────────── */
  const SectionHeader = ({ tagline = 'Capabilities', kicker = 'Or browse by capability.', sub = 'Five families spanning PCBA assembly to semiconductor packaging.' }) => (
    <div style={{ marginBottom: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
      <div style={{ maxWidth: 640 }}>
        <div style={{ ...eyebrow, marginBottom: 12 }}>{tagline}</div>
        <h2 style={{ ...h2Style, marginBottom: 10 }}>{kicker}</h2>
        <p style={{ ...bodyStyle }}>{sub}</p>
      </div>
      <a href="#" className="hana-link" style={{ fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap',
        display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.06em', textTransform: 'uppercase' }}>
        All capabilities <Icon name="arrow-right" size={13} color="var(--hana-blue)" />
      </a>
    </div>
  );

  /* ── variation label strip ─────────────────────────────── */
  const Label = ({ name, desc }) => (
    <div style={{ ...wrap, padding: '20px 32px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--hana-blue)',
          background: '#fff', border: '1px solid var(--line)',
          padding: '3px 8px', borderRadius: 3,
        }}>{name}</span>
        <span className="hana-data" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{desc}</span>
      </div>
    </div>
  );

  /* ── C2 arrow carousel ─────────────────────────────────── */
  const C2Carousel = ({ caps, Icon }) => {
    const { useRef, useState, useEffect } = React;
    const trackRef = useRef(null);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(true);

    const sync = () => {
      const t = trackRef.current;
      if (!t) return;
      setCanLeft(t.scrollLeft > 4);
      setCanRight(t.scrollLeft < t.scrollWidth - t.clientWidth - 4);
    };

    useEffect(() => { sync(); }, []);

    const scroll = (dir) => {
      const t = trackRef.current;
      if (!t) return;
      const cardW = t.clientWidth / 5;
      t.scrollBy({ left: dir * cardW, behavior: 'smooth' });
    };

    const ArrowBtn = ({ dir }) => {
      const active = dir === -1 ? canLeft : canRight;
      return (
        <button
          onClick={() => scroll(dir)}
          disabled={!active}
          style={{
            flexShrink: 0, width: 36, height: 36,
            border: '2px solid ' + (active ? 'var(--hana-blue)' : 'var(--line)'),
            borderRadius: '50%',
            background: active ? 'var(--hana-blue)' : 'transparent',
            color: active ? '#fff' : 'var(--line)',
            cursor: active ? 'pointer' : 'default',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease',
            padding: 0,
          }}
          aria-label={dir === -1 ? 'Scroll left' : 'Scroll right'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {dir === -1
              ? <React.Fragment><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></React.Fragment>
              : <React.Fragment><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></React.Fragment>
            }
          </svg>
        </button>
      );
    };

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginBottom: 12 }}>
          <ArrowBtn dir={-1} />
          <ArrowBtn dir={1} />
        </div>
        <div
          ref={trackRef}
          onScroll={sync}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, calc(20% - 9.6px))',
            gap: 12,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {caps.map(c => (
            <a key={c.title} href="#" className="ci-card" style={{
              textDecoration: 'none', color: 'inherit',
              display: 'flex', flexDirection: 'column',
              background: '#fff', border: '1px solid var(--line)',
              borderRadius: 8, overflow: 'hidden',
            }}>
              <div style={{
                borderTop: '2px solid var(--hana-blue)',
                padding: '14px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              }}>
                                <span className="ci-arrow"><Icon name="arrow-right" size={13} color="var(--hana-blue)" /></span>
              </div>
              <div style={{
                padding: '28px 20px 24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)',
                backgroundImage: 'radial-gradient(rgba(18,131,221,0.12) 1px, transparent 1.2px)',
                backgroundSize: '14px 14px', backgroundPosition: 'center',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, #000 50%, transparent 100%)',
                        maskImage: 'radial-gradient(ellipse 70% 70% at center, #000 50%, transparent 100%)',
              }} className="ci-icon">
                <Icon name={c.icon} size={56} stroke={1.5} />
              </div>
              <div style={{ padding: '0 20px 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em', color: 'var(--ink)', margin: 0 }}>{c.title}</h3>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0, textWrap: 'pretty' }}>{c.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-text)' }}>
      {/* Shared hover styles */}
      <style>{`
        .ci-card { transition: border-color 150ms ease, background 150ms ease; }
        .ci-card:hover { border-color: var(--hana-blue) !important; }
        .ci-card:hover .ci-icon { color: var(--hana-blue) !important; }
        .ci-card:hover .ci-arrow { opacity: 1 !important; transform: translateX(3px); }
        .ci-card .ci-arrow { transition: opacity 150ms ease, transform 150ms ease; opacity: 0; }
        .ci-row:hover { background: var(--hana-blue-tint) !important; }
        .ci-row:hover .ci-icon { color: var(--hana-blue-deep) !important; }
      `}</style>

      {/* ── intro band ────────────────────────────────────── */}
      <div style={{ ...wrap, padding: '40px 32px 8px' }}>
        <div className="hana-spec-label" style={{ marginBottom: 8 }}>Capabilities · icon-led exploration</div>
        <h1 className="hana-hero" style={{ fontSize: 36, lineHeight: 1.15, margin: 0 }}>
          Indicating capability without leaning on imagery.
        </h1>
        <p className="hana-body" style={{ marginTop: 12, maxWidth: 720 }}>
          The "browse by capability" slot sits directly beneath the image-heavy markets grid.
          Five directions for showing the five capability families through icons instead of
          photography — varying density, hierarchy, and how much metadata each tile carries.
          All icons drawn fresh to the Hana spec: 32-grid, 1.6&nbsp;px stroke, single colour.
        </p>
      </div>

      {/* ════════════════════════════════════════════════════════
          V1 — Classic 5-up icon cards
          Direct swap for the current image-led tile.
          Icon in a tinted square, title, body. Border-defined.
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', borderTop: '1px dashed var(--hana-blue)', marginTop: 24 }}>
        <Label name="C·1" desc="Classic 5-up · icon swap for the current photo tile" />
        <div style={{ ...wrap, padding: '32px 32px 72px' }}>
          <SectionHeader />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
            {caps.map(c => (
              <a key={c.title} href="#" className="ci-card" style={{
                textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column', gap: 16,
                background: '#fff', border: '1px solid var(--line)',
                borderRadius: 8, padding: '24px 20px 22px',
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 6,
                  background: 'var(--hana-blue-tint)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--hana-blue)',
                }} className="ci-icon">
                  <Icon name={c.icon} size={28} stroke={1.7} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17,
                    letterSpacing: '-0.01em', color: 'var(--ink)', margin: 0,
                  }}>{c.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-text)', fontSize: 13, lineHeight: 1.55,
                    color: 'var(--ink-2)', margin: 0, textWrap: 'pretty',
                  }}>{c.body}</p>
                </div>
                <div className="ci-arrow" style={{ marginTop: 'auto' }}>
                  <Icon name="arrow-right" size={16} color="var(--hana-blue)" />
                </div>
              </a>
            ))}
          </div>
          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            The minimum-effort change — icon-in-tinted-square in the slot the photo used to occupy.
            Reads quickly, sits politely under the image grid above.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          V2 — Diagrammatic icon · larger · spec metadata
          Icon is the dominant element. Mono code label (CAP·01)
          and a thin top-rule give an engineering-reference feel.
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label name="C·2" desc="Icon-dominant · spec code · engineering-reference card" />
        <div style={{ ...wrap, padding: '32px 32px 72px' }}>
          <SectionHeader />
          <C2Carousel caps={caps} Icon={Icon} />
          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            The icon gets room to be the artwork. Top-rule + mono code (CAP·01) signal "datasheet"
            rather than "marketing tile" — earns its place beside the image grid by trading photo
            for diagram.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          V3 — Horizontal rows · bullet detail
          Single column, 2×wider tiles. Icon left, content right,
          three-bullet detail. More content per capability.
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label name="C·3" desc="Horizontal rows · bullet detail · two columns" />
        <div style={{ ...wrap, padding: '32px 32px 72px' }}>
          <SectionHeader sub="Five families, with the three sub-capabilities most often asked about." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {caps.map(c => (
              <a key={c.title} href="#" className="ci-card" style={{
                textDecoration: 'none', color: 'inherit',
                display: 'grid', gridTemplateColumns: '88px 1fr auto',
                gap: 22, alignItems: 'flex-start',
                background: '#fff', border: '1px solid var(--line)',
                borderRadius: 8, padding: '24px 24px',
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 6,
                  border: '1px solid var(--line)', background: 'var(--surface)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--hana-blue)',
                }} className="ci-icon">
                  <Icon name={c.icon} size={38} stroke={1.6} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20,
                      letterSpacing: '-0.015em', color: 'var(--ink)', margin: 0,
                    }}>{c.title}</h3>
                                      </div>
                  <p style={{
                    fontFamily: 'var(--font-text)', fontSize: 13.5, lineHeight: 1.55,
                    color: 'var(--ink-2)', margin: 0, textWrap: 'pretty',
                  }}>{c.body}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0', display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {c.detail.map(d => (
                      <li key={d} style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        fontFamily: 'var(--font-text)', fontSize: 12.5,
                        color: 'var(--ink-2)',
                      }}>
                        <span style={{ color: 'var(--hana-blue)', display: 'inline-flex' }}>
                          <Icon name="check" size={13} stroke={2} />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="ci-arrow" style={{ paddingTop: 8 }}>
                  <Icon name="arrow-right" size={16} color="var(--hana-blue)" />
                </span>
              </a>
            ))}
            {/* Fifth row spans both columns to keep a clean two-col grid for an odd-numbered set */}
            <style>{`
              .ci-row-span:last-child { grid-column: 1 / -1; }
            `}</style>
          </div>
          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            Bigger tiles, more content per capability. The bullets are what engineers actually scan for —
            it lets the homepage answer "do you do this?" without a click. Trade-off: section gets taller.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          V4 — Dark blue panel · white icons
          Single dark panel breaks up the page after the
          (light, image-heavy) markets grid. Icons reverse to white.
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label name="C·4" desc="Dark panel · reversed icons · breaks up the page" />
        <div style={{ ...wrap, padding: '32px 32px 80px' }}>
          <div style={{
            background: 'var(--hana-blue-deep)', color: '#fff',
            borderRadius: 14, padding: '56px 44px',
          }}>
            <div style={{ marginBottom: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
              <div style={{ maxWidth: 640 }}>
                <div style={{ ...eyebrow, color: 'rgba(255,255,255,0.55)', marginBottom: 12 }}>Capabilities</div>
                <h2 style={{ ...h2Style, color: '#fff', marginBottom: 10 }}>Or browse by capability.</h2>
                <p style={{ ...bodyStyle, color: 'rgba(255,255,255,0.72)' }}>Five families spanning PCBA assembly to semiconductor packaging.</p>
              </div>
              <a href="#" style={{
                color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 700,
                letterSpacing: '.06em', textTransform: 'uppercase',
                display: 'inline-flex', alignItems: 'center', gap: 6,
                borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: 3,
              }}>
                All capabilities <Icon name="arrow-right" size={13} color="#fff" />
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 8, overflow: 'hidden' }}>
              {caps.map(c => (
                <a key={c.title} href="#" className="ci-card" style={{
                  textDecoration: 'none', color: 'inherit',
                  display: 'flex', flexDirection: 'column', gap: 16,
                  background: 'var(--hana-blue-deep)',
                  padding: '26px 22px 24px',
                  border: 'none',
                }}>
                  <div style={{
                    color: '#fff', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <span className="ci-icon"><Icon name={c.icon} size={36} stroke={1.6} color="#fff" /></span>
                                      </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17,
                    letterSpacing: '-0.01em', color: '#fff', margin: 0,
                  }}>{c.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-text)', fontSize: 12.5, lineHeight: 1.55,
                    color: 'rgba(255,255,255,0.72)', margin: 0, textWrap: 'pretty',
                  }}>{c.body}</p>
                </a>
              ))}
            </div>
            <style>{`
              .ci-card[style*="hana-blue-deep"]:hover { background: rgba(255,255,255,0.04) !important; }
            `}</style>
          </div>
          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            One bold dark slab breaks the rhythm of light sections on either side. White line icons read
            crisply on the deep blue. Use this if the rest of the page leans light.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          V4b — Elevated dark panel · per-card accent + motif
          Same dark-slab structure as C·4, but each card now carries
          a discipline-specific background motif and an accent rule
          drawn from the brand palette. Five distinct visual signatures
          inside one cohesive panel.
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label name="C·4b" desc="Elevated dark panel · per-card accent + motif" />
        <div style={{ ...wrap, padding: '32px 32px 80px' }}>
          <div style={{
            background: 'var(--hana-blue-deep)', color: '#fff',
            borderRadius: 14, padding: '56px 44px', position: 'relative', overflow: 'hidden',
          }}>
            {/* faint engineering-grid background, masked to fade at edges */}
            <div aria-hidden="true" style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
              WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
              maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
                <div style={{ maxWidth: 640 }}>
                  <div style={{ ...eyebrow, color: 'rgba(255,255,255,0.55)', marginBottom: 12 }}>Capabilities</div>
                  <h2 style={{ ...h2Style, color: '#fff', marginBottom: 10 }}>Or browse by capability.</h2>
                  <p style={{ ...bodyStyle, color: 'rgba(255,255,255,0.72)' }}>Five families spanning PCBA assembly to semiconductor packaging.</p>
                </div>
                <a href="#" style={{
                  color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 700,
                  letterSpacing: '.06em', textTransform: 'uppercase',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: 3,
                }}>
                  All capabilities <Icon name="arrow-right" size={13} color="#fff" />
                </a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
                {caps.map(c => {
                  const accent = accentByIcon[c.icon] || 'var(--hana-blue)';
                  return (
                    <a key={c.title} href="#" className="ci-card-4b" style={{
                      textDecoration: 'none', color: 'inherit',
                      display: 'flex', flexDirection: 'column',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      borderTop: `3px solid ${accent}`,
                      borderRadius: 8, overflow: 'hidden',
                      position: 'relative', minHeight: 220,
                    }}>
                      {/* motif — clipped to top-right quadrant */}
                      <div aria-hidden="true" style={{
                        position: 'absolute', top: 0, right: 0, width: '78%', height: '60%',
                        color: accent, pointerEvents: 'none',
                      }}>
                        <Motif name={c.icon} color={accent} opacity={0.22} />
                      </div>
                      <div style={{ padding: '22px 20px 20px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1, position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
                          <span style={{ color: accent }}><Icon name={c.icon} size={32} stroke={1.6} color={accent} /></span>
                                                  </div>
                        <h3 style={{
                          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17,
                          letterSpacing: '-0.01em', color: '#fff', margin: 0,
                        }}>{c.title}</h3>
                        <p style={{
                          fontFamily: 'var(--font-text)', fontSize: 12.5, lineHeight: 1.55,
                          color: 'rgba(255,255,255,0.72)', margin: 0, textWrap: 'pretty',
                        }}>{c.body}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <style>{`
              .ci-card-4b { transition: background 150ms ease, border-color 150ms ease; }
              .ci-card-4b:hover { background: rgba(255,255,255,0.07) !important; border-color: rgba(255,255,255,0.22) !important; }
            `}</style>
          </div>
          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            Each card carries a discipline-specific motif (PCB traces, pin grid, honeycomb, cam arcs, converging
            paths) and a single Hana-blue accent rule. Variety lives in the diagrams, not the palette.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          V4c — Elevated dark panel · LIGHT cards on dark
          Inverts the figure-ground of C·4b. Dark slab still frames the
          section, but each card is white — cards now stand off the
          panel rather than recede into it. Motifs render in tinted blue.
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label name="C·4c" desc="Dark panel · LIGHT cards stand off the slab" />
        <div style={{ ...wrap, padding: '32px 32px 80px' }}>
          <div style={{
            background: 'var(--hana-blue-deep)', color: '#fff',
            borderRadius: 14, padding: '56px 44px', position: 'relative', overflow: 'hidden',
          }}>
            {/* faint engineering-grid background, masked to fade at edges */}
            <div aria-hidden="true" style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
              WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
              maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
                <div style={{ maxWidth: 640 }}>
                  <div style={{ ...eyebrow, color: 'rgba(255,255,255,0.55)', marginBottom: 12 }}>Capabilities</div>
                  <h2 style={{ ...h2Style, color: '#fff', marginBottom: 10 }}>Or browse by capability.</h2>
                  <p style={{ ...bodyStyle, color: 'rgba(255,255,255,0.72)' }}>Five families spanning PCBA assembly to semiconductor packaging.</p>
                </div>
                <a href="#" style={{
                  color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 700,
                  letterSpacing: '.06em', textTransform: 'uppercase',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: 3,
                }}>
                  All capabilities <Icon name="arrow-right" size={13} color="#fff" />
                </a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
                {caps.map(c => (
                  <a key={c.title} href="#" className="ci-card-4c" style={{
                    textDecoration: 'none', color: 'inherit',
                    display: 'flex', flexDirection: 'column',
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.04)',
                    borderTop: '3px solid var(--hana-blue)',
                    borderRadius: 8, overflow: 'hidden',
                    position: 'relative', minHeight: 220,
                    boxShadow: '0 12px 32px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)',
                  }}>
                    {/* motif — tinted blue, clipped to top-right quadrant */}
                    <div aria-hidden="true" style={{
                      position: 'absolute', top: 0, right: 0, width: '78%', height: '60%',
                      color: 'var(--hana-blue)', pointerEvents: 'none',
                    }}>
                      <Motif name={c.icon} color="var(--hana-blue)" opacity={0.16} />
                    </div>
                    <div style={{ padding: '22px 20px 20px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1, position: 'relative', zIndex: 1 }}>
                      <div style={{ marginBottom: 28 }}>
                        <span style={{ color: 'var(--hana-blue)' }}><Icon name={c.icon} size={32} stroke={1.6} color="var(--hana-blue)" /></span>
                      </div>
                      <h3 style={{
                        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17,
                        letterSpacing: '-0.01em', color: 'var(--ink)', margin: 0,
                      }}>{c.title}</h3>
                      <p style={{
                        fontFamily: 'var(--font-text)', fontSize: 12.5, lineHeight: 1.55,
                        color: 'var(--ink-2)', margin: 0, textWrap: 'pretty',
                      }}>{c.body}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <style>{`
              .ci-card-4c { transition: transform 200ms ease, box-shadow 200ms ease; }
              .ci-card-4c:hover { transform: translateY(-2px); box-shadow: 0 20px 40px rgba(0,0,0,0.24), 0 4px 10px rgba(0,0,0,0.14) !important; }
            `}</style>
          </div>
          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            Inverts the figure-ground of C·4b: dark slab framing, light cards lifted off it on subtle shadows.
            Cards read as physical objects sitting on the panel rather than windows cut into it. Useful when
            the rest of the page is light and the section needs to feel like an inventory of distinct items.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          V5 — Featured + small asymmetric
          Lead capability gets a wide tile with a longer body
          and detail bullets; the other four are compact icon-only
          chips on the right. Mirrors the bento direction explored
          for markets, but for capabilities.
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label name="C·5" desc="Featured tile + four compact · asymmetric · matches the bento direction" />
        <div style={{ ...wrap, padding: '32px 32px 80px' }}>
          <SectionHeader sub="The lead family (rotates per campaign or page entry-point) gets the body copy. The other four stay scannable." />
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12, alignItems: 'stretch' }}>
            {/* Featured */}
            <a href="#" className="ci-card" style={{
              textDecoration: 'none', color: 'inherit',
              display: 'flex', flexDirection: 'column',
              background: '#fff', border: '1px solid var(--line)',
              borderRadius: 8, padding: '36px 36px 32px', position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Subtle PCB dot field behind the icon */}
              <div aria-hidden="true" style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'radial-gradient(rgba(18,131,221,0.10) 1px, transparent 1.2px)',
                backgroundSize: '16px 16px',
                WebkitMaskImage: 'linear-gradient(135deg, #000 0%, transparent 70%)',
                        maskImage: 'linear-gradient(135deg, #000 0%, transparent 70%)',
              }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1, marginBottom: 28 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--hana-blue)',
                  letterSpacing: '0.08em',
                }}>{caps[0].code} · FEATURED</span>
                <span className="ci-arrow" style={{ opacity: 1 }}>
                  <Icon name="arrow-right" size={18} color="var(--hana-blue)" />
                </span>
              </div>
              <div className="ci-icon" style={{ color: 'var(--hana-blue)', marginBottom: 24, position: 'relative', zIndex: 1 }}>
                <Icon name={caps[0].icon} size={72} stroke={1.5} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30,
                letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 12px',
                position: 'relative', zIndex: 1,
              }}>{caps[0].title}</h3>
              <p style={{
                fontFamily: 'var(--font-text)', fontSize: 15, lineHeight: 1.6,
                color: 'var(--ink-2)', margin: '0 0 18px', textWrap: 'pretty',
                position: 'relative', zIndex: 1, maxWidth: 460,
              }}>{caps[0].body}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6, position: 'relative', zIndex: 1 }}>
                {caps[0].detail.map(d => (
                  <li key={d} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontFamily: 'var(--font-text)', fontSize: 13,
                    color: 'var(--ink-2)',
                  }}>
                    <span style={{ color: 'var(--hana-blue)', display: 'inline-flex' }}>
                      <Icon name="check" size={14} stroke={2} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </a>

            {/* Other four, compact, 2×2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 12 }}>
              {caps.slice(1).map(c => (
                <a key={c.title} href="#" className="ci-card" style={{
                  textDecoration: 'none', color: 'inherit',
                  display: 'flex', flexDirection: 'column', gap: 14,
                  background: '#fff', border: '1px solid var(--line)',
                  borderRadius: 8, padding: '20px 20px 18px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="ci-icon" style={{ color: 'var(--hana-blue)' }}>
                      <Icon name={c.icon} size={32} stroke={1.6} />
                    </span>
                                      </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16,
                      letterSpacing: '-0.01em', color: 'var(--ink)', margin: '0 0 4px',
                    }}>{c.title}</h3>
                    <p style={{
                      fontFamily: 'var(--font-text)', fontSize: 12, lineHeight: 1.5,
                      color: 'var(--ink-3)', margin: 0, textWrap: 'pretty',
                    }}>{c.body.split('.')[0]}.</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            Rotatable featured slot — useful when one capability is a campaign focus (e.g. SiC modules
            for data-center power). The other four still land in the scanline.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          V6 — List rows · numbered · text-led
          Editorial alternative. Numbered, single-column rows with
          icon as accent on the right. Mirrors the typographic
          markets direction (v2-typographic).
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label name="C·6" desc="Numbered list rows · icon as accent · text-led" />
        <div style={{ ...wrap, padding: '32px 32px 96px' }}>
          <SectionHeader sub="Closest to the type-led wireframes. Icon shifts to the right as a marker rather than a hero element." />
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {caps.map((c, i) => (
              <a key={c.title} href="#" className="ci-row" style={{
                display: 'grid', gridTemplateColumns: '64px 1fr 2fr 56px 24px',
                alignItems: 'center', gap: 24,
                padding: '24px 16px',
                borderBottom: '1px solid var(--line)',
                textDecoration: 'none', color: 'inherit',
                transition: 'background 150ms ease',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)',
                  letterSpacing: '0.08em',
                }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24,
                  letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0,
                }}>{c.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-text)', fontSize: 14, lineHeight: 1.55,
                  color: 'var(--ink-2)', margin: 0,
                }}>{c.body}</p>
                <span className="ci-icon" style={{ color: 'var(--ink-3)', justifySelf: 'end' }}>
                  <Icon name={c.icon} size={32} stroke={1.5} />
                </span>
                <span style={{ justifySelf: 'end', color: 'var(--hana-blue)' }}>
                  <Icon name="arrow-right" size={16} color="var(--hana-blue)" />
                </span>
              </a>
            ))}
          </div>
          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            Most contrast against the image grid above — pure type with the icon serving as an end-of-row
            marker. Works if the markets section already carries all the visual weight the page needs.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          V6b — Elevated list · colored numeral + per-row motif
          Numbered index becomes a swatch in each capability's accent.
          The right gutter carries a small horizontal motif strip
          tinted in the same color — variety lives in the data column.
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label name="C·6b" desc="Elevated list · colored numeral · per-row diagram" />
        <div style={{ ...wrap, padding: '32px 32px 96px' }}>
          <SectionHeader sub="Same editorial structure as C·6, but every row carries its own accent and discipline diagram." />
          <div>
            {caps.map((c, i) => {
              const accent = accentByIcon[c.icon] || 'var(--hana-blue)';
              return (
                <a key={c.title} href="#" className="ci-row-6b" style={{
                  display: 'grid', gridTemplateColumns: '72px 1fr auto',
                  alignItems: 'center', gap: 32,
                  padding: '26px 16px',
                  borderTop: i === 0 ? '1px solid var(--line)' : 'none',
                  borderBottom: '1px solid var(--line)',
                  textDecoration: 'none', color: 'inherit',
                  position: 'relative',
                }}>
                  {/* accent rule — left edge */}
                  <span aria-hidden="true" style={{
                    position: 'absolute', left: 0, top: '20%', bottom: '20%', width: 3,
                    background: accent,
                  }} />
                  <span style={{
                    width: 64, height: 64, borderRadius: 6,
                    background: 'var(--hana-blue-tint)', color: 'var(--hana-blue)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon name={c.icon} size={30} stroke={1.6} color="var(--hana-blue)" />
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                      <h3 style={{
                        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22,
                        letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0,
                      }}>{c.title}</h3>
                                          </div>
                    <p style={{
                      fontFamily: 'var(--font-text)', fontSize: 13.5, lineHeight: 1.55,
                      color: 'var(--ink-2)', margin: 0, textWrap: 'pretty', maxWidth: 540,
                    }}>{c.body}</p>
                  </div>
                  {/* CTA — Explore more, sized to fill the right gutter */}
                  <span className="ci-row-6b-cta" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 12,
                    color: 'var(--hana-blue)',
                    fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 14,
                    letterSpacing: '0.02em', whiteSpace: 'nowrap',
                  }}>
                    Explore more
                    <span className="ci-row-6b-arrow" style={{ display: 'inline-flex', transition: 'transform 200ms ease' }}>
                      <Icon name="arrow-right" size={28} color="var(--hana-blue)" stroke={1.6} />
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
          <style>{`
            .ci-row-6b { transition: background 150ms ease; }
            .ci-row-6b:hover { background: #fff; }
            .ci-row-6b:hover .ci-row-6b-arrow { transform: translateX(4px); }
          `}</style>
          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            Right gutter now carries an explicit "Explore more →" CTA per row — the row reads as a single
            actionable item rather than a data display. Hover nudges the arrow.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          V6c — Editorial list · each row as a deep-blue card
          Same row structure as C·6b but every row is its own dark card.
          Reads as a stack of distinct surfaces rather than ruled rows.
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label name="C·6c" desc="Editorial list · each row a deep-blue card" />
        <div style={{ ...wrap, padding: '32px 32px 96px' }}>
          <SectionHeader sub="Each capability becomes its own dark surface. Stack reads as a list of objects rather than a table of rows." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {caps.map(c => (
              <a key={c.title} href="#" className="ci-row-6c" style={{
                display: 'grid', gridTemplateColumns: '72px 1fr auto',
                alignItems: 'center', gap: 32,
                padding: '22px 24px',
                background: 'var(--hana-blue-deep)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 10,
                textDecoration: 'none', color: 'inherit',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* faint motif drifting in from the right */}
                <div aria-hidden="true" style={{
                  position: 'absolute', top: 0, right: 0, width: '40%', height: '100%',
                  color: 'var(--hana-blue)', pointerEvents: 'none',
                }}>
                  <Motif name={c.icon} color="var(--hana-blue-soft)" opacity={0.18} />
                </div>
                <span style={{
                  width: 64, height: 64, borderRadius: 6,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', zIndex: 1,
                }}>
                  <Icon name={c.icon} size={30} stroke={1.6} color="#fff" />
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22,
                      letterSpacing: '-0.02em', color: '#fff', margin: 0,
                    }}>{c.title}</h3>
                                      </div>
                  <p style={{
                    fontFamily: 'var(--font-text)', fontSize: 13.5, lineHeight: 1.55,
                    color: 'rgba(255,255,255,0.72)', margin: 0, textWrap: 'pretty', maxWidth: 540,
                  }}>{c.body}</p>
                </div>
                <span className="ci-row-6c-cta" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  color: '#fff',
                  fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 14,
                  letterSpacing: '0.02em', whiteSpace: 'nowrap',
                  position: 'relative', zIndex: 1,
                }}>
                  Explore more
                  <span className="ci-row-6c-arrow" style={{ display: 'inline-flex', transition: 'transform 200ms ease' }}>
                    <Icon name="arrow-right" size={28} color="#fff" stroke={1.6} />
                  </span>
                </span>
              </a>
            ))}
          </div>
          <style>{`
            .ci-row-6c { transition: background 200ms ease, border-color 200ms ease; }
            .ci-row-6c:hover { background: #103e6a; border-color: rgba(255,255,255,0.18); }
            .ci-row-6c:hover .ci-row-6c-arrow { transform: translateX(4px); }
          `}</style>
          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            Five dark surfaces stacked vertically. Each row is its own object rather than a line in a table —
            more presence than C·6b, less density than a card grid. Use when this section needs to
            anchor the page rather than sit quietly between two louder blocks.
          </p>
        </div>
      </section>

      {/* ── icon system reference strip ─────────────────────── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px dashed var(--hana-blue)' }}>
        <div style={{ ...wrap, padding: '40px 32px 48px' }}>
          <div style={{ ...eyebrow, marginBottom: 14 }}>Icon set</div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22,
            letterSpacing: '-0.015em', color: 'var(--ink)', margin: '0 0 8px',
          }}>Five custom marks, drawn fresh to the Hana spec.</h3>
          <p className="hana-body" style={{ fontSize: 13, marginBottom: 28, maxWidth: 680 }}>
            32-grid, 1.6&nbsp;px stroke, rounded caps, single colour. No two-tone, no fills.
            Lucide is the working stand-in elsewhere in the system — these are bespoke because
            "PCB", "OSAT chip package", and "wafer with notch" aren't quite right in any library.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
            {caps.map(c => (
              <div key={c.title} style={{
                background: '#fff', border: '1px solid var(--line)', borderRadius: 8,
                padding: '24px 16px 18px', display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 14,
              }}>
                <div style={{ color: 'var(--ink)' }}>
                  <Icon name={c.icon} size={48} stroke={1.6} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13,
                    letterSpacing: '-0.01em', color: 'var(--ink)',
                  }}>{c.title}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-3)',
                    letterSpacing: '0.08em', marginTop: 3,
                  }}>{c.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { CapabilitiesIcons });

/* ── Standalone carousel for embedding in V1B homepage ────── */
function C2HomepageCaps() {
  const { useRef, useState, useEffect } = React;

  const caps = [
    { title: 'PCBA / Box Build',          body: 'Populated boards through to fully assembled, tested products — one line from prototype to volume.', icon: 'pcb' },
    { title: 'OSAT',                       body: 'Advanced semiconductor assembly and test at the die level, from bare wafer to packaged, qualified parts.', icon: 'chip' },
    { title: 'Microelectronic Assembly',   body: 'Precision joining of chips, sensors, MEMS and micro-assembly with micron level tolerance', icon: 'micro' },
    { title: 'Automation',                 body: 'Full Inspection, handling, and traceability built into the line for consistent yield at scale.', icon: 'gear' },
    { title: 'DFx & NPI Collaborations',   body: 'Work along us from design and DFM through first builds to production and on-going improvement.', icon: 'merge' },
    { title: 'RFID Inlay',                 body: 'High-volume smart tags and inlays for tire ID, logistics, and retail.', icon: 'rfid' },
  ];

  const Icon = ({ name, size = 32, color = 'currentColor', stroke = 1.6 }) => {
    const common = { width: size, height: size, viewBox: '0 0 32 32', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round', style: { display: 'block', flexShrink: 0 } };
    switch (name) {
      case 'pcb': return <svg {...common}><rect x="4" y="6" width="24" height="20" rx="1.5" /><path d="M4 12 H10 M22 12 H28 M4 20 H10 M22 20 H28" /><rect x="11" y="11" width="4" height="3" rx="0.5" /><rect x="17" y="18" width="4" height="3" rx="0.5" /><path d="M13 14 V18 H19" /><circle cx="26" cy="9" r="0.8" fill={color} stroke="none" /></svg>;
      case 'chip': return <svg {...common}><rect x="9" y="9" width="14" height="14" rx="1" /><rect x="13" y="13" width="6" height="6" /><path d="M12 9 V5 M16 9 V5 M20 9 V5" /><path d="M12 23 V27 M16 23 V27 M20 23 V27" /><path d="M9 12 H5 M9 16 H5 M9 20 H5" /><path d="M23 12 H27 M23 16 H27 M23 20 H27" /></svg>;
      case 'micro': return <svg {...common}><circle cx="16" cy="16" r="11" /><path d="M5 16 H27 M16 5 V27" /><path d="M11 11 H21 V21 H11 Z" /><path d="M14 11 V21 M18 11 V21 M11 14 H21 M11 18 H21" /><path d="M14.5 5.2 L16 7 L17.5 5.2" /></svg>;
      case 'gear': return <svg {...common}><path d="M16 3 L17.6 5.4 L20.4 4.6 L20.8 7.5 L23.6 8.4 L22.6 11.1 L24.8 13.2 L22.6 15.2 L23.6 18 L20.8 18.8 L20.4 21.7 L17.6 20.9 L16 23.3 L14.4 20.9 L11.6 21.7 L11.2 18.8 L8.4 18 L9.4 15.2 L7.2 13.2 L9.4 11.1 L8.4 8.4 L11.2 7.5 L11.6 4.6 L14.4 5.4 Z" /><circle cx="16" cy="13.2" r="3.2" /><path d="M16 26 V29" /><path d="M13.5 29 H18.5" /></svg>;
      case 'merge': return <svg {...common}><circle cx="8" cy="8" r="3" /><circle cx="8" cy="24" r="3" /><circle cx="24" cy="16" r="3" /><path d="M11 8 C16 8, 18 12, 21 15" /><path d="M11 24 C16 24, 18 20, 21 17" /><path d="M27 16 H30" /></svg>;
      case 'rfid': return <svg {...common}><rect x="3" y="7" width="26" height="18" rx="3" /><rect x="8" y="12" width="16" height="8" rx="1.5" /><rect x="13" y="14" width="6" height="4" rx="0.5" /><path d="M8 16 H13 M19 16 H24" /></svg>;
      case 'arrow-right': return <svg {...common} viewBox="0 0 24 24" width={size} height={size}><path d="M5 12 H19" /><path d="M12 5 L19 12 L12 19" /></svg>;
      default: return null;
    }
  };

  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const sync = () => {
    const t = trackRef.current;
    if (!t) return;
    setCanLeft(t.scrollLeft > 4);
    setCanRight(t.scrollLeft < t.scrollWidth - t.clientWidth - 4);
  };
  useEffect(() => { sync(); }, []);

  const scroll = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    t.scrollBy({ left: dir * (t.clientWidth / 5), behavior: 'smooth' });
  };

  const ArrowBtn = ({ dir }) => {
    const active = dir === -1 ? canLeft : canRight;
    return (
      <button onClick={() => scroll(dir)} disabled={!active} style={{
        width: 36, height: 36, border: '2px solid ' + (active ? 'var(--hana-blue)' : 'var(--line)'),
        borderRadius: '50%', background: active ? 'var(--hana-blue)' : 'transparent',
        color: active ? '#fff' : 'var(--line)', cursor: active ? 'pointer' : 'default',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease', padding: 0, flexShrink: 0,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {dir === -1 ? <React.Fragment><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></React.Fragment>
                      : <React.Fragment><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></React.Fragment>}
        </svg>
      </button>
    );
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginBottom: 12 }}>
        <ArrowBtn dir={-1} />
        <ArrowBtn dir={1} />
      </div>
      <div ref={trackRef} onScroll={sync} style={{
        display: 'grid', gridTemplateColumns: 'repeat(6, calc(20% - 9.6px))',
        gap: 12, overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none',
      }}>
        {caps.map(c => (
          <a key={c.title} href="#" style={{
            textDecoration: 'none', color: 'inherit',
            display: 'flex', flexDirection: 'column',
            background: '#fff', border: '1px solid var(--line)',
            borderRadius: 8, overflow: 'hidden',
            transition: 'border-color 150ms ease',
          }}>
            <div style={{ borderTop: '2px solid var(--hana-blue)', padding: '14px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em', opacity: 0 }}>·</span>
              <Icon name="arrow-right" size={13} color="var(--hana-blue)" />
            </div>
            <div style={{
              padding: '20px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--ink)',
              backgroundImage: 'radial-gradient(rgba(18,131,221,0.12) 1px, transparent 1.2px)',
              backgroundSize: '14px 14px', backgroundPosition: 'center',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, #000 50%, transparent 100%)',
                      maskImage: 'radial-gradient(ellipse 70% 70% at center, #000 50%, transparent 100%)',
            }}>
              <Icon name={c.icon} size={56} stroke={1.5} />
            </div>
            <div style={{ padding: '0 20px 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, letterSpacing: '-0.01em', color: 'var(--ink)', margin: 0 }}>{c.title}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0, textWrap: 'pretty' }}>{c.body}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { CapabilitiesIcons, C2HomepageCaps });
