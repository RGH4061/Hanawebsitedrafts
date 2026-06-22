/* ════════════════════════════════════════════════════════════════
   Hana — Locations · world map block
   A dark dotted-world-map image with a blue pin per plant, each
   roughly geo-placed. The active pin is connected by a leader line +
   arrowhead to a floating plant card (image + summary). Hover a pin or
   click a chip below to move the callout.
   ════════════════════════════════════════════════════════════════ */

/* viewBox matches the cropped map image aspect (1536 × 541 → 2.839:1) */
const MAP_W = 1000,MAP_H = 352;

/* pin positions in viewBox units, placed per the marked locations.
   x ≈ longitude, y ≈ latitude. */
const MAP_POS = {
  ohio: [269, 68],
  jiaxing: [766, 122],
  cheongju: [805, 120],
  lamphun: [737, 178],
  ayutthaya: [741, 189],
  'koh-kong': [746, 200]
};

/* on-map colors: white leader line for contrast, warm-accent (orange)
   location pins. The accent tweak still drives the white callout card. */
const MAP_LINE = '#FFFFFF';
const MAP_PIN = '#FF883E';

/* country → ISO code for flag chips in the callout */
const MAP_FLAG = { Thailand: 'th', China: 'cn', USA: 'us', Cambodia: 'kh', 'South Korea': 'kr' };

/* ─── floating plant callout (lives inside the map SVG) ─────────── */
function MapCallout({ plant, accent }) {
  const affiliate = plant.status === 'affiliate';
  const code = MAP_FLAG[plant.country];
  return (
    <div style={{
      fontFamily: 'var(--font-text)', background: '#fff', border: '1px solid var(--line)',
      borderRadius: 10, boxShadow: '0 18px 44px -16px rgba(0,0,0,0.6)', height: '100%',
      boxSizing: 'border-box', padding: '14px 16px', display: 'flex', flexDirection: 'column'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
        {code &&
        <img src={`https://flagcdn.com/w40/${code}.png`} alt="" width="22"
          style={{ width: 22, height: 'auto', display: 'block', flexShrink: 0, borderRadius: 2, border: '1px solid var(--line)' }} />}
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
          {plant.country}{affiliate ? ' · Affiliate' : ''}
        </span>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 5 }}>
        {plant.city}
      </div>
      <div style={{ fontSize: 11.5, color: 'var(--ink-2)', lineHeight: 1.45, marginBottom: 8, flex: 1,
        overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{plant.summary}</div>
      <a href={plant.url} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', color: accent, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
        {plant.linkLabel || (affiliate ? 'Visit Cheongju site' : `View ${plant.city.split(',')[0]} plant`)}
        <SvgIcon name="arrow-right" size={12} color={accent} />
      </a>
    </div>);
}

function WorldMap({ plants, accent = 'var(--hana-blue)' }) {
  const [active, setActive] = React.useState(Math.max(0, plants.findIndex((p) => p.slug === 'jiaxing')));
  const ap = plants[active];
  const [px, py] = MAP_POS[ap.slug] || [MAP_W / 2, MAP_H / 2];

  /* fixed "card holder" slot over the open ocean so the callout never
     jumps. A straight leader line runs from the holder to the active pin. */
  const cardW = 258,cardH = 150;
  const cardX = 312,cardY = 44;
  const cx = cardX + cardW / 2,cy = cardY + cardH / 2;
  const dx = px - cx,dy = py - cy;
  const tb = 1 / Math.max(Math.abs(dx) / (cardW / 2), Math.abs(dy) / (cardH / 2));
  const anchorX = cx + dx * tb,anchorY = cy + dy * tb; /* on the card border, facing the pin */
  const len = Math.hypot(dx, dy) || 1;
  const endX = px - dx / len * 13,endY = py - dy / len * 13; /* stop just short of the pin */

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', borderRadius: 12, overflow: 'hidden',
        border: '1px solid var(--line)', background: '#05101f',
        backgroundImage: 'url(locations/world-map3.png)', backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat' }}>
        <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} style={{ display: 'block', width: '100%', height: 'auto' }}>
          <defs>
            <marker id="loc-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="4.2" orient="auto">
              <path d="M1,1 L7.5,4.2 L1,7.4" fill="none" stroke={MAP_LINE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>

          {/* leader line: holder → pin (straight) */}
          <line x1={anchorX} y1={anchorY} x2={endX} y2={endY}
          stroke={MAP_LINE} strokeWidth="1.6" strokeDasharray="2 4" markerEnd="url(#loc-arrow)" opacity={0.95} />

          {/* pins */}
          {plants.map((p, i) => {
            const pos = MAP_POS[p.slug];
            if (!pos) return null;
            const [x, y] = pos,on = i === active;
            return (
              <g key={p.slug} style={{ cursor: 'pointer' }}
              onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
                <circle cx={x} cy={y} r={on ? 15 : 9} fill={MAP_PIN} opacity={on ? 0.3 : 0.18} />
                {on ?
                <>
                      <circle cx={x} cy={y} r={5.8} fill={MAP_PIN} stroke="#fff" strokeWidth={1.7} />
                      <circle cx={x} cy={y} r={2} fill="#fff" />
                    </> :
                <circle cx={x} cy={y} r={4} fill="#0b1f38" stroke={MAP_PIN} strokeWidth={2} />}
              </g>);
          })}

          {/* floating callout */}
          <foreignObject x={cardX} y={cardY} width={cardW} height={cardH}>
            <MapCallout plant={ap} accent={accent} />
          </foreignObject>
        </svg>
      </div>

      {/* plant selector chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
        {plants.map((p, i) => {
          const on = i === active;
          return (
            <button key={p.slug} type="button" onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 13px', cursor: 'pointer',
              border: '1px solid ' + (on ? accent : 'var(--line)'), borderRadius: 999,
              background: on ? 'var(--hana-blue-tint)' : '#fff', fontFamily: 'var(--font-text)',
              fontSize: 12, fontWeight: 600, color: on ? 'var(--hana-blue-deep)' : 'var(--ink-2)', transition: 'all 140ms ease' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: accent, opacity: on ? 1 : 0.4 }}></span>
              {p.city}
              <span style={{ fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{p.country}</span>
            </button>);
        })}
      </div>
    </div>);
}

Object.assign(window, { WorldMap });