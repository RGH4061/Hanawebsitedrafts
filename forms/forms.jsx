/* Hana — reusable form cards: GeneralEnquiryForm + PlantRFQForm.
   Self-contained interactive behavior (chip multiselect, accordion data,
   file list, reCAPTCHA gate, submit → success). Depends on chrome.jsx
   (HanaIcon) + contact.css. */

const COUNTRIES = ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Belgium', 'Switzerland', 'Austria', 'Italy', 'Spain', 'Portugal', 'Poland', 'Czech Republic', 'Ireland', 'United States', 'Canada', 'Thailand', 'China', 'Singapore', 'Other'];
const INDUSTRIES = ['Automotive', 'Industrial & IoT', 'Telecommunications', 'RFID', 'Optical & Sensors', 'Consumer Electronics', 'Medical', 'Access Control', 'Power Management', 'Other'];
const SERVICES = ['PCBA & Box Build', 'IC Assembly & Test (OSAT)', 'RFID & Smart Tags', 'Sensors & Optical', 'Power Solutions', 'DFM / NPI Support', 'Other'];

/* ── Chip multiselect (collapsible) ────────────────────────── */
function ChipMultiselect({ label, required, options, value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const toggle = (opt) => {
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  };
  return (
    <div className="cf-field">
      <div className={'cf-chip-toggle' + (open ? ' open' : '')} onClick={() => setOpen(!open)}>
        {required && <span className="req">*</span>}
        <span className="toggle-label">{label}</span>
        {value.length > 0 && <span className="chip-count">{value.length}</span>}
        <span className="chevron"><HanaIcon name="chevron-down" size={11} color="var(--ink-3)" /></span>
      </div>
      {open &&
      <div className="cf-chip-panel">
          <div className="cf-chip-note">Select all that apply</div>
          <div className="cf-chip-group">
            {options.map((opt) =>
          <div key={opt} className={'cf-chip' + (value.includes(opt) ? ' selected' : '')} onClick={() => toggle(opt)}>{opt}</div>)}
          </div>
        </div>}
    </div>);
}

/* ── reCAPTCHA mock ────────────────────────────────────────── */
function Recaptcha({ checked, onChange }) {
  return (
    <div className="cf-recaptcha">
      <input type="checkbox" id="cf-rc" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <label htmlFor="cf-rc" className="rc-label">I'm not a robot</label>
      <div className="rc-logo">
        <span className="rc-icon"><HanaIcon name="search" size={16} color="var(--hana-blue-soft)" stroke={2.2} /></span>
        <span className="rc-text">reCAPTCHA<br />Privacy · Terms</span>
      </div>
    </div>);
}

/* ── Privacy note ──────────────────────────────────────────── */
function PrivacyNote() {
  return (
    <div className="cf-privacy">
      We use your details to respond to your enquiry. Not shared with third parties.
      Email <a href="mailto:info-request@hanaus.com">info-request@hanaus.com</a> to request deletion.
    </div>);
}

/* ── Success panel ─────────────────────────────────────────── */
function SuccessPanel({ title, body }) {
  return (
    <div className="cf-success">
      <div className="cf-success-mark">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>);
}

/* ════════════════════════════════════════════════════════════
   GENERAL ENQUIRY FORM
   ════════════════════════════════════════════════════════════ */
function GeneralEnquiryForm() {
  const [industry, setIndustry] = React.useState([]);
  const [service, setService] = React.useState([]);
  const [rc, setRc] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  return (
    <div className="cf-card" data-screen-label="General Enquiry form">
      <div className="cf-card-title"></div>
      <div className="cf-card-sub">

      </div>

      {sent ? <SuccessPanel title="Enquiry received" body="Thanks — we've routed your message to the right team and will reply within one business day." /> : <React.Fragment>
            <div className="cf-required-note">Fields marked <span className="req">*</span> are required.</div>
            <form noValidate onSubmit={(e) => {e.preventDefault();setSent(true);}}>
              <div className="cf-field" style={{ marginBottom: 18 }}>
                <label htmlFor="ge-reason" style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Reason for enquiry and RFQ requests</label>
                <select id="ge-reason" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Sales and customer support</option>
                  <option>Request for quote (RFQ)</option>
                  <option>Capability / technical question</option>
                  <option>Investor relations</option>
                  <option>Careers</option>
                  <option>Supplier / vendor enquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="cf-divider" />

              <div className="cf-row two">
                <div className="cf-field"><label htmlFor="ge-name"><span className="req">*</span>Name</label><input type="text" id="ge-name" placeholder="First and last name" required /></div>
                <div className="cf-field"><label htmlFor="ge-company"><span className="req">*</span>Company</label><input type="text" id="ge-company" placeholder="Company name" /></div>
              </div>
              <div className="cf-row two">
                <div className="cf-field"><label htmlFor="ge-email"><span className="req">*</span>Email</label><input type="email" id="ge-email" placeholder="you@company.com" /></div>
                <div className="cf-field"><label htmlFor="ge-phone">Phone <span className="hint">(optional)</span></label><input type="tel" id="ge-phone" placeholder="+44 …" /></div>
              </div>
              <div className="cf-row one">
                <div className="cf-field"><label htmlFor="ge-country"><span className="req">*</span>Country</label>
                  <select id="ge-country" defaultValue=""><option value="" disabled>Select country</option>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select>
                </div>
              </div>

              <div className="cf-divider" />

              <div className="cf-row two" style={{ marginBottom: 0 }}>
                <ChipMultiselect label="Industry" options={INDUSTRIES} value={industry} onChange={setIndustry} />
                <ChipMultiselect label="Service" options={SERVICES} value={service} onChange={setService} />
              </div>

              <div className="cf-divider" />

              <div className="cf-row one" style={{ marginBottom: 0 }}>
                <div className="cf-field"><label htmlFor="ge-message"><span className="req">*</span>Message</label>
                  <textarea id="ge-message" placeholder="Tell us what you're looking for — what you make, where you are in your project, and how we can help." />
                </div>
              </div>

              <div className="cf-submit-area">
                <Recaptcha checked={rc} onChange={setRc} />
                <button type="submit" className="cf-btn-submit" disabled={!rc} style={!rc ? { opacity: 0.5, cursor: 'not-allowed' } : {}}>Send Enquiry</button>
              </div>
              <PrivacyNote />
            </form>
          </React.Fragment>}
    </div>);
}

/* ════════════════════════════════════════════════════════════
   PLANT RFQ FORM
   ════════════════════════════════════════════════════════════ */
function PlantRFQForm() {
  const [industry, setIndustry] = React.useState([]);
  const [service, setService] = React.useState([]);
  const [files, setFiles] = React.useState([]);
  const [rc, setRc] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  return (
    <div className="cf-card" data-screen-label="Plant RFQ form">
      <div className="cf-card-title">Plant RFQ</div>
      <div className="cf-card-sub">We'll be in touch within two business days.</div>

      {sent ?
      <SuccessPanel title="RFQ received" body="Thanks — your request is with our engineering team. We'll route it to the right facility and reply within two business days." /> :
      <React.Fragment>
            <div className="cf-required-note">Fields marked <span className="req">*</span> are required.</div>
            <form noValidate onSubmit={(e) => {e.preventDefault();setSent(true);}}>

              <div className="cf-section-label">Contact details</div>
              <div className="cf-row two">
                <div className="cf-field"><label htmlFor="rq-name"><span className="req">*</span>Name</label><input type="text" id="rq-name" placeholder="First and last name" required /></div>
                <div className="cf-field"><label htmlFor="rq-position"><span className="req">*</span>Position</label><input type="text" id="rq-position" placeholder="e.g. NPI Manager, Procurement Lead" /></div>
              </div>
              <div className="cf-row two">
                <div className="cf-field"><label htmlFor="rq-company"><span className="req">*</span>Company</label><input type="text" id="rq-company" placeholder="Company name" /></div>
                <div className="cf-field"><label htmlFor="rq-website"><span className="req">*</span>Company website</label><input type="url" id="rq-website" placeholder="https://www.example.com" /></div>
              </div>
              <div className="cf-row two">
                <div className="cf-field"><label htmlFor="rq-email"><span className="req">*</span>Email</label><input type="email" id="rq-email" placeholder="you@company.com" /></div>
                <div className="cf-field"><label htmlFor="rq-phone"><span className="req">*</span>Phone</label><input type="tel" id="rq-phone" placeholder="+44 …" /></div>
              </div>

              <div className="cf-divider" />

              <div className="cf-section-label">Address</div>
              <div className="cf-row two">
                <div className="cf-field"><label htmlFor="rq-address">Address <span className="hint">(optional)</span></label><input type="text" id="rq-address" placeholder="Street address" /></div>
                <div className="cf-field"><label htmlFor="rq-city">City <span className="hint">(optional)</span></label><input type="text" id="rq-city" placeholder="City" /></div>
              </div>
              <div className="cf-row three" style={{ alignItems: 'end' }}>
                <div className="cf-field"><label htmlFor="rq-state">State / Province <span className="hint">(optional)</span></label><input type="text" id="rq-state" placeholder="State or province" /></div>
                <div className="cf-field"><label htmlFor="rq-zip">Zip / Postal <span className="hint">(optional)</span></label><input type="text" id="rq-zip" placeholder="Postcode" /></div>
                <div className="cf-field"><label htmlFor="rq-country"><span className="req">*</span>Country</label>
                  <select id="rq-country" defaultValue=""><option value="" disabled>Select country</option>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select>
                </div>
              </div>

              <div className="cf-divider" />

              <div className="cf-section-label">Industry &amp; Service</div>
              <div className="cf-row two">
                <ChipMultiselect label="Industry" required options={INDUSTRIES} value={industry} onChange={setIndustry} />
                <ChipMultiselect label="Service required" required options={SERVICES} value={service} onChange={setService} />
              </div>

              <div className="cf-divider" />

              <div className="cf-section-label">Project details</div>
              <div className="cf-row one">
                <div className="cf-field"><label htmlFor="rq-desc"><span className="req">*</span>Description of the project</label>
                  <textarea id="rq-desc" placeholder="Describe your project — product type, application, key requirements, timeline, and any specific manufacturing or quality constraints." />
                </div>
              </div>
              <div className="cf-row two">
                <div className="cf-field"><label htmlFor="rq-qty">Quantities to quote <span className="hint">(optional)</span></label><input type="text" id="rq-qty" placeholder="Units per year" /></div>
                <div className="cf-field"><label htmlFor="rq-start">Estimated start date <span className="hint">(optional)</span></label><input type="text" id="rq-start" placeholder="e.g. Q3 2026" /></div>
              </div>

              <div className="cf-divider" />

              <div className="cf-section-label">Attachments</div>
              <div className="cf-field" style={{ marginBottom: 0 }}>
                <label>Upload files <span className="hint">(optional)</span></label>
                <div className="cf-upload">
                  <input type="file" accept=".pdf,.xlsx,.xls,.zip,.gbr" multiple onChange={(e) => setFiles([...e.target.files].map((f) => f.name))} />
                  <span className="cf-upload-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.4 11.1-8.5 8.5a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7L9 16.4a1.7 1.7 0 0 1-2.3-2.3l7.8-7.8" /></svg>
                  </span>
                  <div className="cf-upload-text"><strong>Click to upload</strong> or drag and drop</div>
                  <div className="cf-upload-meta">PDF, Excel, ZIP or Gerber · Max 10 MB</div>
                </div>
                {files.length > 0 &&
            <div className="cf-filelist">
                    {files.map((f, i) => <span key={i} className="cf-filechip"><HanaIcon name="arrow-right" size={11} color="var(--hana-blue)" /> {f}</span>)}
                  </div>}
              </div>

              <div className="cf-submit-area">
                <Recaptcha checked={rc} onChange={setRc} />
                <button type="submit" className="cf-btn-submit" disabled={!rc} style={!rc ? { opacity: 0.5, cursor: 'not-allowed' } : {}}>Submit RFQ</button>
              </div>
              <PrivacyNote />
            </form>
          </React.Fragment>}
    </div>);
}

Object.assign(window, { GeneralEnquiryForm, PlantRFQForm, ChipMultiselect, Recaptcha, COUNTRIES, INDUSTRIES, SERVICES });