// MarketsOptionAShapes — explores more interesting tile shapes for the
// "Markets we serve" Option A layout. Two directions side-by-side:
//   A·1  Bento mosaic — asymmetric grid with hero / tall / wide tiles
//   A·2  Chamfered tiles — 5×2 grid with notched PCB-pad corners
//
// Same ten markets, same dark overlay treatment as the original Option A.

function MarketsOptionAShapes() {
  const sectionWrap = { maxWidth: 1280, margin: '0 auto' };

  // Ten markets — ordering chosen so the bento layout reads naturally
  const markets = [
    { name: 'Automotive', body: 'Power modules, ADAS, EV charging, lighting.',
      img: 'uploads/patrick-langwallner-O8wEyekFJtI-unsplash.jpg', pos: '28% 18%' },
    { name: 'Industrial & IoT', body: 'Sensors, controllers, smart factory equipment.',
      img: 'uploads/parej-richard-pxs2yJ6Lb9k-unsplash.jpg', pos: '28% 18%' },
    { name: 'Telecommunications', body: 'Network infrastructure and gateways.' },
    { name: 'RFID', body: 'Inlays, tire tags, smart labels.' },
    { name: 'Optical & sensors', body: 'Camera modules and image sensors.' },
    { name: 'Consumer electronics', body: 'Wearables, accessories, peripherals.' },
    { name: 'Medical', body: 'Patient monitoring and diagnostics.' },
    { name: 'Access control', body: 'Smart cards, readers, security tokens.' },
    { name: 'Power management', body: 'Power supplies and conversion.' },
    { name: 'Data Centers', body: 'AI infrastructure, HPC, power modules for GPU clusters.' },
  ];

  const byName = Object.fromEntries(markets.map(m => [m.name, m]));

  const li = (n, size = 14, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {n === 'arrow-right' && <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>}
    </svg>
  );

  // ── shared tile renderer ────────────────────────────────────────
  // size: 'hero' | 'tall' | 'wide' | 'sq'  controls title scale only;
  // grid placement is set by the parent's gridArea.
  const Tile = ({ m, size = 'sq', clipPath, style }) => {
    const heroish = size === 'hero';
    return (
      <a href="#" className="oas-card" style={{
        position: 'relative', overflow: 'hidden', textDecoration: 'none',
        border: '1px solid rgba(255,255,255,.08)',
        background: '#0a0a0a',
        display: 'block',
        borderRadius: clipPath ? 0 : 8,
        clipPath: clipPath || undefined,
        ...style,
      }}>
        {m.img ? (
          <img src={m.img} alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: m.pos || 'center' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0,
            background: '#0d1117',
            backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
            backgroundSize: heroish ? '48px 36px' : '32px 24px' }} />
        )}

        {/* Bottom fade */}
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,.92) 0%, rgba(0,0,0,.48) 45%, rgba(0,0,0,.10) 72%, transparent 100%)' }} />

        {/* Content */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: heroish ? '24px 24px' : '16px 16px', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
            <div style={{ minWidth: 0 }}>
              <h3 className="oas-name" style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: heroish ? 26 : 15,
                letterSpacing: '-0.018em', lineHeight: 1.15,
                color: '#fff', margin: heroish ? '0 0 8px' : '0 0 5px',
                transition: 'color 150ms ease',
              }}>{m.name}</h3>
              <p style={{ fontFamily: 'var(--font-text)',
                fontSize: heroish ? 13 : 11,
                lineHeight: 1.45,
                color: heroish ? 'rgba(255,255,255,.78)' : 'rgba(255,255,255,.62)',
                margin: 0, maxWidth: heroish ? 360 : 'none' }}>
                {m.body}
              </p>
            </div>
            <div className="oas-arrow" style={{ flexShrink: 0, opacity: 0 }}>
              {li('arrow-right', heroish ? 16 : 13, 'rgba(255,255,255,.85)')}
            </div>
          </div>
        </div>
      </a>
    );
  };

  const Label = ({ name, desc }) => (
    <div style={{ ...sectionWrap, padding: '20px 32px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--hana-blue)',
          background: 'var(--surface)',
          border: '1px solid var(--line)', padding: '3px 8px', borderRadius: 3,
        }}>{name}</span>
        <span className="hana-data" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{desc}</span>
      </div>
    </div>
  );

  const SectionHeader = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, gap: 32 }}>
      <div>
        <div className="hana-spec-label" style={{ marginBottom: 14 }}>Markets we serve</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36,
          letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--ink)', margin: 0, maxWidth: 640 }}>
          Ten markets. Decades of expertise in each.
        </h2>
      </div>
      <a href="#" className="hana-link" style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap',
        display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '.06em', textTransform: 'uppercase' }}>
        All markets {li('arrow-right', 13, 'var(--hana-blue)')}
      </a>
    </div>
  );

  // ── Chamfer clip-paths (24px notch) ────────────────────────────
  // PCB-pad style — one corner cut. Direction varies by index so the grid feels alive.
  const chamfer = (corner) => {
    const c = 22;
    switch (corner) {
      case 'tr': return `polygon(0 0, calc(100% - ${c}px) 0, 100% ${c}px, 100% 100%, 0 100%)`;
      case 'tl': return `polygon(${c}px 0, 100% 0, 100% 100%, 0 100%, 0 ${c}px)`;
      case 'br': return `polygon(0 0, 100% 0, 100% calc(100% - ${c}px), calc(100% - ${c}px) 100%, 0 100%)`;
      case 'bl': return `polygon(0 0, 100% 0, 100% 100%, ${c}px 100%, 0 calc(100% - ${c}px))`;
      // diagonal — two opposite corners
      case 'diag': return `polygon(${c}px 0, 100% 0, 100% calc(100% - ${c}px), calc(100% - ${c}px) 100%, 0 100%, 0 ${c}px)`;
      default: return undefined;
    }
  };

  return (
    <div style={{ background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-text)' }}>
      {/* Shared hover styles */}
      <style>{`
        .oas-card { transition: border-color 150ms ease, transform 200ms ease; }
        .oas-card:hover { border-color: var(--hana-blue) !important; }
        .oas-card:hover .oas-name { color: #7EC8FF !important; }
        .oas-card:hover .oas-arrow { opacity: 1 !important; transform: translateX(3px); }
        .oas-card .oas-arrow { transition: opacity 150ms ease, transform 150ms ease; }
      `}</style>

      {/* Top intro band */}
      <div style={{ ...sectionWrap, padding: '40px 32px 8px' }}>
        <div className="hana-spec-label" style={{ marginBottom: 8 }}>Option A — shape exploration</div>
        <h1 className="hana-hero" style={{ fontSize: 36, lineHeight: 1.15, margin: 0 }}>
          More interesting shapes for the Markets grid.
        </h1>
        <p className="hana-body" style={{ marginTop: 12, maxWidth: 720 }}>
          Two directions away from the uniform 5×2 square grid. Each keeps the dark overlay treatment,
          editorial type, and ten-market scope of the original Option A.
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────
          A·1  Bento mosaic — asymmetric grid
          ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px dashed var(--hana-blue)', marginTop: 24 }}>
        <Label name="Option A·1" desc="Bento mosaic · hero + tall + wide · varied scales" />
        <div style={{ ...sectionWrap, padding: '32px 32px 72px' }}>
          <SectionHeader />

          {/*
            5 cols × 3 rows, named areas. NOTE: `auto` is a reserved CSS keyword
            for grid-area, so the hero slot is named `hero` instead.
              hero hero ind tel  rfid
              hero hero ind opt  cons
              med  acc  pwr data data
          */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(3, 200px)',
            gridTemplateAreas: `
              "hero hero ind  tel  rfid"
              "hero hero ind  opt  cons"
              "med  acc  pwr  data data"
            `,
            gap: 10,
          }}>
            <Tile m={byName['Automotive']}        size="hero" style={{ gridArea: 'hero' }} />
            <Tile m={byName['Industrial & IoT']}  size="tall" style={{ gridArea: 'ind'  }} />
            <Tile m={byName['Telecommunications']}             style={{ gridArea: 'tel'  }} />
            <Tile m={byName['RFID']}                           style={{ gridArea: 'rfid' }} />
            <Tile m={byName['Optical & sensors']}              style={{ gridArea: 'opt'  }} />
            <Tile m={byName['Consumer electronics']}           style={{ gridArea: 'cons' }} />
            <Tile m={byName['Medical']}                        style={{ gridArea: 'med'  }} />
            <Tile m={byName['Access control']}                 style={{ gridArea: 'acc'  }} />
            <Tile m={byName['Power management']}               style={{ gridArea: 'pwr'  }} />
            <Tile m={byName['Data Centers']}      size="wide"  style={{ gridArea: 'data' }} />
          </div>

          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            Featured markets (Automotive, Industrial &amp; IoT, Data Centers) carry more weight; the eight
            smaller tiles stay scannable. Featured slots can rotate per campaign.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          A·2  Chamfered tiles — PCB-pad corner cuts
          ───────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', borderTop: '1px dashed var(--hana-blue)' }}>
        <Label name="Option A·2" desc="Chamfered tiles · PCB-pad corner cuts · 5×2 grid" />
        <div style={{ ...sectionWrap, padding: '32px 32px 72px' }}>
          <SectionHeader />

          {/* Chamfer pattern — alternating corners across the 5×2 grid */}
          {(() => {
            const chamferPattern = [
              'tr', 'tl', 'tr', 'tl', 'tr',
              'br', 'bl', 'br', 'bl', 'br',
            ];
            return (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
                {markets.map((m, i) => (
                  <Tile key={m.name} m={m}
                    style={{ aspectRatio: '4/5' }}
                    clipPath={chamfer(chamferPattern[i])} />
                ))}
              </div>
            );
          })()}

          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            The notched corners read as PCB pads — engineered, geometric, not decorative.
            Corners alternate row-to-row to keep the grid from feeling rigid.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          A·3  Mosaic + chamfer — combined
          ───────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)',
        borderTop: '1px dashed var(--hana-blue)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Texture layer — PCB drill-grid: fine dots on 22px pitch, slightly
            denser register marks every 6th dot. Anchored to the section, behind
            content. Fades at top/bottom so it doesn't fight the dashed rules. */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: [
            // base dot grid
            'radial-gradient(rgba(18,131,221,0.10) 1px, transparent 1.4px)',
            // sparse accent register marks
            'radial-gradient(rgba(18,131,221,0.18) 1.4px, transparent 2px)',
          ].join(', '),
          backgroundSize: '22px 22px, 132px 132px',
          backgroundPosition: '0 0, 11px 11px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, #000 56px, #000 calc(100% - 56px), transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0, #000 56px, #000 calc(100% - 56px), transparent 100%)',
        }} />
        {/* Thin trace line along the left rule — references PCB silkscreen */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, bottom: 0, left: 32, width: 1, zIndex: 0,
          background: 'linear-gradient(to bottom, transparent 0, rgba(18,131,221,0.22) 14%, rgba(18,131,221,0.22) 86%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Label name="Option A·3" desc="Bento mosaic + chamfered hero & wide · combined · textured ground" />
        </div>
        <div style={{ ...sectionWrap, padding: '32px 32px 80px', position: 'relative', zIndex: 1 }}>
          <SectionHeader />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(3, 200px)',
            gridTemplateAreas: `
              "hero hero ind  tel  rfid"
              "hero hero ind  opt  cons"
              "med  acc  pwr  data data"
            `,
            gap: 10,
          }}>
            <Tile m={byName['Automotive']}        size="hero"
              style={{ gridArea: 'hero' }} clipPath={chamfer('br')} />
            <Tile m={byName['Industrial & IoT']}  size="tall"
              style={{ gridArea: 'ind'  }} clipPath={chamfer('tr')} />
            <Tile m={byName['Telecommunications']} style={{ gridArea: 'tel'  }} />
            <Tile m={byName['RFID']}               style={{ gridArea: 'rfid' }} clipPath={chamfer('tr')} />
            <Tile m={byName['Optical & sensors']}  style={{ gridArea: 'opt'  }} />
            <Tile m={byName['Consumer electronics']} style={{ gridArea: 'cons' }} clipPath={chamfer('tr')} />
            <Tile m={byName['Medical']}            style={{ gridArea: 'med'  }} clipPath={chamfer('bl')} />
            <Tile m={byName['Access control']}     style={{ gridArea: 'acc'  }} />
            <Tile m={byName['Power management']}   style={{ gridArea: 'pwr'  }} />
            <Tile m={byName['Data Centers']}       size="wide"
              style={{ gridArea: 'data' }} clipPath={chamfer('br')} />
          </div>

          <p className="hana-body" style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', maxWidth: 720 }}>
            The strongest variation — mosaic for scale rhythm, selective chamfers on the
            featured corners and outer edges to suggest a printed-circuit board pad.
          </p>
        </div>
      </section>
    </div>
  );
}
