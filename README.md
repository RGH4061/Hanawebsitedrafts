# Hana Microelectronics — corporate website (developer package)

Static HTML build of hanagroup.com covering the **Home**, **About**, **Capabilities**,
**Locations**, **Investor Relations**, **Careers**, and **Contact** sections. All pages
are wired together through one shared header, footer, and mega-menu.

Start at **`index.html`** (homepage) or **`sitemap.html`** (clickable page index).

## How to view

The pages mount their shared header/footer with React + Babel loaded at runtime, so they
must be served over **HTTP** — opening a file directly with `file://` will not execute the
external scripts in Chrome.

```bash
cd "Hana Website"
python3 -m http.server 8000
# then open http://localhost:8000
```

(An internet connection is required — React and Babel load from a CDN.) Any static host
works too: GitHub Pages, Netlify, or an ASP.NET Core `wwwroot/` folder.

## Navigation — one source of truth

Every header / footer / mega-menu link is resolved by **`site-nav.js`**, a single map of
*nav label → page file*. Change a route in that file and every page updates. This is the
file to remap when wiring the pages to ASP.NET Core Razor Page routes — replace the bare
`*.html` targets with your route names in one place.

Breadcrumbs, hub cards (IR hub, Locations hub), and in-body CTAs are plain `<a href>`
links pointing directly at the slug filenames below.

## Pages

| Section | File |
|---|---|
| Home | `index.html` |
| About (Why Hana) | `about.html` |
| — Our Heritage | `about-heritage.html` |
| — Leadership | `about-leadership.html` |
| — Awards & Recognition | `about-awards.html` |
| Capabilities (hub) | `capabilities.html` |
| — PCBA & Box Build | `capabilities-pcba-box-build.html` |
| — OSAT | `capabilities-osat.html` |
| — Microelectronic Assembly | `capabilities-microelectronic-assembly.html` |
| — Automation | `capabilities-automation.html` |
| — DFx / JDM | `capabilities-dfx-jdm.html` |
| — RFID & Smart Tags | `capabilities-rfid-smart-tags.html` |
| — Sub-capability detail (template) | `capabilities-detail.html` |
| Locations (hub) | `locations.html` |
| — Ayutthaya / Lamphun / Jiaxing / Solon-Ohio / Koh Kong / Cheongju | `locations-*.html` |
| Investor Relations (hub) | `investors.html` |
| — News / Annual Report / Governance / Structure / FAQ / Events / Sustainability | `investors-*.html` |
| Careers (hub) | `careers.html` |
| — Stories / Job Post / Apply / Consent | `careers-*.html` |
| Contact | `contact.html` |
| Site map / page index | `sitemap.html` |

## Shared assets

| Path | What |
|---|---|
| `site-nav.js` | Central route map (`window.hrefFor`) |
| `hana-tokens.css`, `hana-fonts.css` | Design tokens + local font faces |
| `fonts/`, `_ds/.../fonts/` | Geist, Inter, IBM Plex Mono (TTF) |
| `assets/` | Logos, mark, photography |
| `hana-backgrounds.js`, `image-slot.js` | Background pattern + image-slot helpers |
| `subcap-template/`, `caphub-template/`, `locations/`, `forms/`, `homepage-wireframes/` | Page component scripts (JSX, transformed by Babel at runtime) |

## Header / footer note

The header + footer are one design, currently implemented as a few interchangeable
component copies (`subcap-template/chrome.jsx`, `homepage-wireframes/header-footer-final.jsx`,
`forms/chrome.jsx`, and the homepage's inline header). They share identical markup and all
read routes from `site-nav.js`. **Recommended:** consolidate them into a single Razor
partial / layout during the port.

## Known gaps

- **Markets** — no standalone market pages yet; Markets nav + footer links route to the
  Capabilities hub.
- **Legal** — Privacy / Terms / Cookies are placeholder `#` links.
- Stock price, dates, and document download links are illustrative sample data until real
  feeds / PDFs are attached.
- Most plant **facility photos** and a few section posters (e.g. the IR Opportunity-Day
  thumbnail) were never supplied; they degrade gracefully to the design's wafer-texture /
  gradient placeholders rather than broken images. Drop real photos into `uploads/` (and
  the IR poster into `images/`) to fill them.
- No customer names appear anywhere, per brand guidelines.
