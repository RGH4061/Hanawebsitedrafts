/* Shared wireframe primitives + tokens for Hana homepage variations.
   Match existing dev-handoff template language: blue / teal / amber, gray scale,
   wireframe badge, image placeholders, anno chips, sticky nav, breadcrumb, etc. */

const HANA_TOKENS = `
  --blue:        #1B6EC2;
  --blue-dark:   #124F8F;
  --blue-light:  #E8F1FB;
  --teal:        #0E9E8A;
  --teal-dark:   #0A7A6A;
  --teal-light:  #E6F8F6;
  --amber:       #C97010;
  --amber-dark:  #9A5500;
  --amber-light: #FDF3E6;
  --gray-100:    #F4F6F9;
  --gray-300:    #CBD2DC;
  --gray-500:    #7A8799;
  --gray-700:    #3B4455;
  --black:       #111827;
  --white:       #FFFFFF;
  --radius:      6px;
  --shadow:      0 2px 12px rgba(27,110,194,.10);
`;

/* Inject a stylesheet once for shared wireframe styles. */
function injectHanaStyles() {
  if (document.getElementById('hana-wf-styles')) return;
  const style = document.createElement('style');
  style.id = 'hana-wf-styles';
  style.textContent = `
    .hana-wf { ${HANA_TOKENS}
      font-family: 'Segoe UI', Arial, sans-serif;
      color: var(--black);
      background: var(--white);
      font-size: 15px;
      line-height: 1.6;
      width: 100%;
    }
    .hana-wf * { box-sizing: border-box; margin: 0; padding: 0; }

    /* Nav */
    .hana-wf .wf-nav {
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 48px; height: 68px;
      background: var(--white); border-bottom: 2px solid var(--blue);
    }
    .hana-wf .nav-logo { display: flex; align-items: center; gap: 12px; }
    .hana-wf .logo-icon {
      width: 38px; height: 38px; background: var(--blue);
      clip-path: polygon(40% 0%,60% 0%,60% 40%,100% 40%,100% 60%,60% 60%,60% 100%,40% 100%,40% 60%,0% 60%,0% 40%,40% 40%);
    }
    .hana-wf .logo-text { font-size: 17px; font-weight: 700; color: var(--blue); letter-spacing: .3px; }
    .hana-wf .logo-sub { font-size: 10px; color: var(--gray-500); display: block; font-weight: 400; margin-top: -2px; }
    .hana-wf .nav-links { display: flex; gap: 30px; list-style: none; }
    .hana-wf .nav-links a { text-decoration: none; color: var(--gray-700); font-size: 14px; font-weight: 500; }
    .hana-wf .nav-links a:hover { color: var(--blue); }
    .hana-wf .nav-cta {
      background: var(--blue); color: var(--white);
      padding: 9px 22px; border-radius: var(--radius);
      font-size: 13px; font-weight: 600; text-decoration: none;
    }

    /* Anno chip */
    .hana-wf .anno {
      display: inline-block; background: #FFDE59; color: #333;
      font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 10px;
      margin-left: 8px; vertical-align: middle; letter-spacing: .3px;
    }

    /* Image placeholder */
    .hana-wf .img-ph {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 8px; color: var(--gray-500);
      width: 100%; height: 100%;
      background:
        repeating-linear-gradient(45deg,
          transparent 0 12px,
          rgba(123,135,153,.08) 12px 13px);
    }
    .hana-wf .img-ph svg { opacity: .45; }
    .hana-wf .img-ph span {
      font-size: 12px; font-style: italic; text-align: center; padding: 0 12px;
    }

    /* Buttons */
    .hana-wf .btn-primary {
      background: var(--blue); color: var(--white);
      padding: 12px 26px; border-radius: var(--radius);
      font-weight: 700; font-size: 14px; text-decoration: none;
      display: inline-block;
    }
    .hana-wf .btn-on-dark {
      background: var(--white); color: var(--blue-dark);
      padding: 12px 26px; border-radius: var(--radius);
      font-weight: 700; font-size: 14px; text-decoration: none;
      display: inline-block;
    }
    .hana-wf .btn-outline {
      border: 2px solid rgba(255,255,255,.5); color: var(--white);
      padding: 10px 24px; border-radius: var(--radius);
      font-weight: 600; font-size: 14px; text-decoration: none;
      display: inline-block;
    }
    .hana-wf .btn-ghost {
      border: 1.5px solid var(--gray-300); color: var(--gray-700);
      padding: 10px 22px; border-radius: var(--radius);
      font-weight: 600; font-size: 14px; text-decoration: none;
      display: inline-block;
    }

    /* Section frame */
    .hana-wf .wf-section { padding: 72px 48px; }
    .hana-wf .wf-inner   { max-width: 1180px; margin: 0 auto; }
    .hana-wf .section-tag {
      font-size: 11px; text-transform: uppercase; letter-spacing: 2px;
      color: var(--blue); font-weight: 700; margin-bottom: 8px;
    }
    .hana-wf .section-title { font-size: 30px; font-weight: 700; color: var(--black); margin-bottom: 14px; line-height: 1.2; }
    .hana-wf .section-lead { font-size: 16px; color: var(--gray-500); max-width: 640px; margin-bottom: 40px; }
    .hana-wf .divider { width: 48px; height: 3px; background: var(--blue); margin-bottom: 18px; border-radius: 2px; }

    /* Stat bar */
    .hana-wf .stat-bar {
      background: var(--blue); color: var(--white);
      display: flex; justify-content: space-around; padding: 28px 48px;
      gap: 24px; flex-wrap: wrap;
    }
    .hana-wf .stat { text-align: center; min-width: 140px; }
    .hana-wf .stat-num { font-size: 32px; font-weight: 800; letter-spacing: -1px; }
    .hana-wf .stat-label { font-size: 11px; color: rgba(255,255,255,.75); text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }

    /* Cert strip */
    .hana-wf .cert-strip {
      background: var(--gray-100); border-top: 1px solid var(--gray-300);
      border-bottom: 1px solid var(--gray-300);
    }
    .hana-wf .cert-inner {
      max-width: 1180px; margin: 0 auto; padding: 28px 48px;
      display: flex; align-items: center; gap: 32px; flex-wrap: wrap;
    }
    .hana-wf .cert-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gray-500); font-weight: 600; white-space: nowrap; }
    .hana-wf .cert-boxes { display: flex; gap: 12px; flex-wrap: wrap; }
    .hana-wf .cert-box {
      width: 96px; height: 48px; background: var(--white);
      border: 1px solid var(--gray-300); border-radius: var(--radius);
      display: flex; align-items: center; justify-content: center;
      font-size: 11px; color: var(--gray-500); font-weight: 600;
    }

    /* CTA section */
    .hana-wf .cta-section {
      background: var(--blue-dark); color: var(--white);
      text-align: center; padding: 72px 48px;
    }
    .hana-wf .cta-section h2 { font-size: 30px; font-weight: 700; margin-bottom: 14px; }
    .hana-wf .cta-section p { color: rgba(255,255,255,.78); font-size: 16px; max-width: 540px; margin: 0 auto 28px; }
    .hana-wf .cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

    /* Footer */
    .hana-wf .wf-footer {
      background: var(--black); color: rgba(255,255,255,.55);
      padding: 36px 48px; font-size: 13px;
      display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
    }
    .hana-wf .wf-footer .investor-bit {
      display: flex; gap: 18px; font-size: 12px;
    }
    .hana-wf .wf-footer a { color: rgba(255,255,255,.7); text-decoration: none; }
  `;
  document.head.appendChild(style);
}

/* ─── Building blocks ─────────────────────────────────────── */

function WfNav({ active }) {
  const links = ['Why Hana', 'Industries We Serve', 'Capabilities', 'Investor Relations', 'Locations', 'Contact Us'];
  return (
    <nav className="wf-nav">
      <div className="nav-logo">
        <div className="logo-icon"></div>
        <div>
          <div className="logo-text">HANA</div>
          <span className="logo-sub">Microelectronics Group</span>
        </div>
      </div>
      <ul className="nav-links">
        {links.map((l) =>
        <li key={l}>
            <a href="#" style={l === active ? { color: 'var(--blue)', borderBottom: '2px solid var(--blue)', paddingBottom: 2 } : {}}>{l}</a>
          </li>
        )}
      </ul>
      <a href="#" className="nav-cta">Request a Quote</a>
    </nav>);

}

function ImgPh({ label, height, icon }) {
  return (
    <div style={{ width: '100%', height: height || '100%', minHeight: height || 0, background: 'var(--gray-300)' }}>
      <div className="img-ph" style={{ height: "100%" }}>
        {icon ||
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7A8799" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        }
        <span>{label}</span>
      </div>
    </div>);

}

function StatBar({ stats }) {
  return (
    <div className="stat-bar">
      {stats.map((s, i) =>
      <div key={i} className="stat">
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      )}
    </div>);

}

function CertStrip({ certs }) {
  return (
    <div className="cert-strip">
      <div className="cert-inner">
        <span className="cert-label">Certifications &amp; Standards</span>
        <div className="cert-boxes">
          {certs.map((c) => <div key={c} className="cert-box">{c}</div>)}
        </div>
      </div>
    </div>);

}

function CtaSection({ title, body, primary, secondary, dark }) {
  return (
    <div className="cta-section" style={dark ? {} : { background: 'var(--blue)' }}>
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="cta-btns">
        <a href="#" className="btn-on-dark">{primary || 'Request a Quote'}</a>
        {secondary && <a href="#" className="btn-outline">{secondary}</a>}
      </div>
    </div>);

}

function WfFooter() {
  return (
    <footer className="wf-footer">
      <span>© 2026 Hana Microelectronics Group</span>
      <div className="investor-bit">
        <a href="#">Investors</a>
        <a href="#">Careers</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </footer>);

}

/* Reusable: nine markets list (ordered as in CLAUDE.md). */
const MARKETS = [
{ name: 'Automotive', desc: 'Power modules, ADAS, EV charging, lighting' },
{ name: 'Industrial & IoT', desc: 'Sensors, controllers, smart factory' },
{ name: 'Telecommunications', desc: 'Network infrastructure, gateways' },
{ name: 'RFID', desc: 'Inlays, tire tags, smart labels' },
{ name: 'Optical & Sensors', desc: 'Camera modules, image sensors' },
{ name: 'Consumer Electronics', desc: 'Wearables, accessories, peripherals' },
{ name: 'Medical', desc: 'Patient monitoring, diagnostics' },
{ name: 'Access Control', desc: 'Smart cards, readers, security tokens' },
{ name: 'Power Management', desc: 'Power supplies, conversion, BMS' }];


const CAPABILITIES = [
{ name: 'PCBA & Box Build', sub: 'SMT, COB, Flip Chip, Box Build' },
{ name: 'IC Assembly & Test', sub: 'OSAT — System in Package' },
{ name: 'RFID & Smart Tags', sub: 'RFID Inlay, Tire Tags' },
{ name: 'Sensors & Optical', sub: 'Camera modules, image sensors' },
{ name: 'Power Solutions', sub: 'Power conversion, BMS' }];


Object.assign(window, {
  injectHanaStyles, WfNav, ImgPh, StatBar, CertStrip, CtaSection, WfFooter,
  MARKETS, CAPABILITIES
});