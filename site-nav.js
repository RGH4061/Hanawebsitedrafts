/* ============================================================================
   Hana site — central route map.
   Loaded as a plain <script src="site-nav.js"></script> on every page BEFORE
   the chrome components render. Header / footer / mega-menu link sites call
   window.hrefFor(label) to resolve a nav label to its page. One source of
   truth — change a route here and every page updates.
   Flat slug layout: every page lives at the site root, so hrefs are bare
   filenames (no folder prefixes). Developers can remap these to ASP.NET Core
   Razor Page routes in one place.
   ========================================================================== */
(function () {
  // exact nav-label / footer-label  →  page file
  var ROUTES = {
    // ── top-level nav ──
    'Home': 'index.html',
    'About': 'about.html',
    'Markets': 'capabilities.html',          // no standalone Markets pages yet — routed to Capabilities
    'Capabilities': 'capabilities.html',
    'Locations': 'locations.html',
    'Investor Relations': 'investors.html',
    'Contact': 'contact.html',
    'Contact us': 'contact.html',
    'Contact Us': 'contact.html',

    // ── About mega-menu / footer ──
    'Why Hana': 'about.html',
    'Company overview': 'about.html',
    'Leadership': 'about-leadership.html',
    'History': 'about-heritage.html',
    'Our Heritage': 'about-heritage.html',
    'Quality & certifications': 'about-awards.html',
    'Awards & Recognition': 'about-awards.html',
    'Careers': 'careers.html',

    // ── Capabilities mega-menu (group headers) ──
    'PCBA & Box Build': 'capabilities-pcba-box-build.html',
    'OSAT': 'capabilities-osat.html',
    'Microelectronic Assembly': 'capabilities-microelectronic-assembly.html',
    'RFID & Smart Tags': 'capabilities-rfid-smart-tags.html',
    'Automation': 'capabilities-automation.html',
    'DFx & JDM Collaboration': 'capabilities-dfx-jdm.html',
    'All capabilities': 'capabilities.html',

    // Capabilities sub-items → route to their parent capability page
    'SMT Assembly': 'capabilities-pcba-box-build.html',
    'COB Assembly': 'capabilities-pcba-box-build.html',
    'Box Build': 'capabilities-pcba-box-build.html',
    'Wafer Processing': 'capabilities-osat.html',
    'Die Attach & Wire Bond': 'capabilities-osat.html',
    'Flip Chip': 'capabilities-osat.html',
    'System in Package (SiP)': 'capabilities-osat.html',
    'Wafer Probe & Final Test': 'capabilities-osat.html',
    'Wafer Level Packaging (WLCSP)': 'capabilities-osat.html',
    'MEMS & Sensor Assembly': 'capabilities-microelectronic-assembly.html',
    'Interconnect Solutions': 'capabilities-microelectronic-assembly.html',
    'Micro-Assembly': 'capabilities-microelectronic-assembly.html',
    'RFID Tire Tags': 'capabilities-rfid-smart-tags.html',
    'RFID Inlays': 'capabilities-rfid-smart-tags.html',
    'In-line AOI & SPI': 'capabilities-automation.html',
    'Robotic Handling & Test': 'capabilities-automation.html',
    'Manufacturing Traceability': 'capabilities-automation.html',
    'Design for Excellence (DFx / DFM)': 'capabilities-dfx-jdm.html',
    'Joint Development Model (JDM)': 'capabilities-dfx-jdm.html',
    'New Product Introduction (NPI)': 'capabilities-dfx-jdm.html',

    // ── Locations mega-menu (by city) ──
    'Ayutthaya': 'locations-ayutthaya.html',
    'Lamphun': 'locations-lamphun.html',
    'Ohio': 'locations-solon-ohio.html',
    'Jiaxing': 'locations-jiaxing.html',
    'Koh Kong': 'locations-koh-kong.html',
    'Cheongju': 'locations-cheongju.html',
    'All locations': 'locations.html',

    // ── Investor Relations mega-menu / footer ──
    'IR overview': 'investors.html',
    'SET: HANA': 'investors.html',
    'Investor News': 'investors-news.html',
    'News': 'investors-news.html',
    'Financial reports': 'investors-news.html',
    'Group Structure & Shareholders': 'investors-structure-shareholders.html',
    'Annual Report': 'investors-annual-report.html',
    'Annual reports': 'investors-annual-report.html',
    'Sustainability': 'investors-sustainability.html',
    'Governance Documents': 'investors-governance.html',
    'Governance': 'investors-governance.html',
    'Investor Events & Contacts': 'investors-events-contact.html',
    'IR contact': 'investors-events-contact.html',
    'Investor FAQ & Knowledge Hub': 'investors-faq.html',
    'FAQ & Knowledge Hub': 'investors-faq.html',

    // ── footer Markets list (no standalone pages yet) ──
    'Automotive': 'capabilities.html',
    'Industrial & IoT': 'capabilities.html',
    'Telecommunications': 'capabilities.html',
    'RFID': 'capabilities-rfid-smart-tags.html',
    'Optical & sensors': 'capabilities.html',
    'Consumer electronics': 'capabilities.html',
    'Medical': 'capabilities.html',
    'Access control': 'capabilities.html',
    'Power management': 'capabilities.html',
    'Data Centers': 'capabilities.html',

    'All markets': 'capabilities.html',

    // ── utility / legal ──
    'Sitemap': 'sitemap.html'
  };

  window.HANA_ROUTES = ROUTES;
  window.hrefFor = function (label) {
    if (label == null) return '#';
    var key = String(label).replace(/\u00a0/g, ' ').trim();
    return ROUTES[key] || '#';
  };
})();
