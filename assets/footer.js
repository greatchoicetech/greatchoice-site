/* Shared footer. Edit the markup here and every page that loads this file updates. */
(function () {
  var current = document.currentScript;
  var attr = (current && current.getAttribute("src")) || "";
  var root = attr.replace(/assets\/footer\.js(?:\?.*)?$/i, "");

  function u(path) {
    if (path.charAt(0) === "#") return "/" + path;
    return "/" + path.replace(/(^|\/)index\.html$/, "$1");
  }

  if (!document.querySelector('link[href$="footer.css"]')) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = root + "assets/footer.css";
    document.head.appendChild(link);
  }

  var shield = root + "media/cropped-cropped-GTC-Sheild-HD-V2-192x192.png";
  var html = ''
    + '<footer class="site-footer">'
    + '<div class="wrap site-foot">'
    + '<div class="foot-brand">'
    + '<a class="foot-mark" href="' + u("index.html") + '">'
    + '<img src="' + shield + '" alt="" width="72" height="72">'
    + '<span class="brand-name">Greatchoice</span>'
    + '<span class="brand-tag">Manage · Defend · Connect</span>'
    + '</a>'
    + '<h3>Ocala – Headquarters</h3>'
    + '<p>317 NE 36th Ave STE 3<br>Ocala FL 34470<br><a href="tel:+13523013016">352-301-3016</a></p>'
    + '<nav class="foot-social" aria-label="Social media">'
    + '<a href="https://www.facebook.com/greatchoicetechnologies/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.1 8.5h2.4V5.2h-2.4c-2.2 0-3.6 1.5-3.6 3.8v1.7H9v3.2h2.5V21h3.3v-7.1h2.6l.4-3.2h-3V9.2c0-.5.3-.7.9-.7z"/></svg></a>'
    + '<a href="https://www.linkedin.com/company/greatchoice-technologies" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.7 9.2H3.9V20h2.8V9.2zM5.3 3.8a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20.2 13.3c0-2.8-1.5-4.3-3.6-4.3-1.6 0-2.4.9-2.8 1.5V9.2H11V20h2.8v-5.9c0-.3 0-.6.1-.9.3-.7.9-1.4 1.9-1.4 1.4 0 1.9 1 1.9 2.5V20h2.5v-6.7z"/></svg></a>'
    + '<a href="https://www.youtube.com/@greatchoice-technologies" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.6V8.9l6.2 3.3-6.2 3.4z"/></svg></a>'
    + '</nav>'
    + '</div>'
    + '<div>'
    + '<p class="foot-label">Technical Services</p>'
    + '<div class="foot-services">'
    + '<div>'
    + '<a href="' + u("it-services/managed-it/index.html") + '">Managed IT</a>'
    + '<a href="' + u("it-services/cloud-solutions/index.html") + '">Cloud</a>'
    + '<a href="' + u("it-services/ai-for-business/index.html") + '">AI for Business</a>'
    + '<a href="' + u("blog/index.html") + '">Blog</a>'
    + '<a href="' + u("#testimonials") + '">Testimonials</a>'
    + '<a href="' + u("about-greatchoice-technologies/index.html") + '">About Us</a>'
    + '</div>'
    + '<div>'
    + '<a href="' + u("it-services/cybersecurity/index.html") + '">Cybersecurity</a>'
    + '<a href="' + u("it-services/security-systems/index.html") + '">Security systems</a>'
    + '<a href="' + u("it-services/communication/index.html") + '">Communication</a>'
    + '<a href="' + u("it-services/digital-marketing/index.html") + '">Marketing</a>'
    + '<a href="' + u("#about") + '">Why Greatchoice</a>'
    + '<span>Case Studies</span>'
    + '</div>'
    + '<div>'
    + '<a href="' + u("industries/index.html") + '">Industries</a>'
    + '<a href="' + u("industries/medical/index.html") + '">Medical</a>'
    + '<a href="' + u("industries/dental/index.html") + '">Dental</a>'
    + '<a href="' + u("industries/veterinary/index.html") + '">Veterinary</a>'
    + '<a href="' + u("industries/equine/index.html") + '">Equine</a>'
    + '<a href="' + u("industries/legal/index.html") + '">Law Firms</a>'
    + '<a href="' + u("industries/accounting/index.html") + '">Accounting &amp; CPA</a>'
    + '<a href="' + u("industries/construction/index.html") + '">Construction &amp; Trades</a>'
    + '<a href="' + u("industries/churches/index.html") + '">Churches</a>'
    + '<a href="' + u("industries/nonprofits/index.html") + '">Nonprofits</a>'
    + '<a href="' + u("industries/small-business/index.html") + '">Small Business</a>'
    + '<a href="' + u("industries/manufacturing/index.html") + '">Manufacturing</a>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '<div>'
    + '<a class="foot-label" href="' + u("service-areas/index.html") + '">Service Areas</a>'
    + '<div class="foot-areas">'
    + '<a href="' + u("service-areas/marion-county/index.html") + '">Marion County</a>'
    + '<a href="' + u("service-areas/sumter-county/index.html") + '">Sumter County</a>'
    + '<span>Lake County</span>'
    + '<a href="' + u("service-areas/alachua-county/index.html") + '">Alachua County</a>'
    + '<a href="' + u("service-areas/volusia-county/index.html") + '">Volusia County</a>'
    + '<span>Levy County</span>'
    + '<span>Citrus County</span>'
    + '<span>Hernando County</span>'
    + '<span>Putnam County</span>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</footer>';

  var slot = document.getElementById("site-footer");
  if (slot) slot.outerHTML = html;
  else document.body.insertAdjacentHTML("beforeend", html);
})();
