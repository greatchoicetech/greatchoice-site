/* Shared footer. Edit the markup here and every page that loads this file updates. */
(function () {
  var current = document.currentScript;
  var attr = (current && current.getAttribute("src")) || "";
  var root = attr.replace(/assets\/footer\.js(?:\?.*)?$/i, "");

  function u(path) {
    if (path.charAt(0) === "#") return root + "index.html" + path;
    return root + path;
  }

  if (!document.querySelector('link[href$="footer.css"]')) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = root + "assets/footer.css";
    document.head.appendChild(link);
  }

  var shield = u("media/cropped-cropped-GTC-Sheild-HD-V2-192x192.png");
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
    + '</div>'
    + '<div>'
    + '<p class="foot-label">Technical Services</p>'
    + '<div class="foot-services">'
    + '<div>'
    + '<a href="' + u("it-services/managed-it/index.html") + '">Managed IT</a>'
    + '<a href="' + u("it-services/cloud-solutions/index.html") + '">Cloud</a>'
    + '<a href="' + u("it-services/ai-for-business/index.html") + '">AI for Business</a>'
    + '<span>Pricing</span>'
    + '<a href="' + u("blog/index.html") + '">Blog</a>'
    + '<a href="' + u("#testimonials") + '">Testimonials</a>'
    + '<span>Topics</span>'
    + '<span>Glossary</span>'
    + '<a href="' + u("about-greatchoice-technologies/index.html") + '">Evan Meyerberg</a>'
    + '</div>'
    + '<div>'
    + '<a href="' + u("it-services/cybersecurity/index.html") + '">Cybersecurity</a>'
    + '<a href="' + u("it-services/security-systems/index.html") + '">Security systems</a>'
    + '<a href="' + u("it-services/communication/index.html") + '">Communication</a>'
    + '<a href="' + u("it-services/digital-marketing/index.html") + '">Marketing</a>'
    + '<a href="' + u("#about") + '">Why Greatchoice</a>'
    + '<span>Case Studies</span>'
    + '<a href="' + u("resources/index.html") + '">Resources</a>'
    + '<span>FAQ</span>'
    + '<span>Journey</span>'
    + '</div>'
    + '<div>'
    + '<a href="' + u("industries/index.html") + '">Industries</a>'
    + '<a href="' + u("industries/medical/index.html") + '">Medical</a>'
    + '<a href="' + u("industries/dental/index.html") + '">Dental</a>'
    + '<a href="' + u("industries/veterinary/index.html") + '">Veterinary</a>'
    + '<a href="' + u("industries/legal/index.html") + '">Law Firms</a>'
    + '<a href="' + u("industries/accounting/index.html") + '">Accounting &amp; CPA</a>'
    + '<a href="' + u("industries/construction/index.html") + '">Construction &amp; Trades</a>'
    + '<a href="' + u("industries/churches/index.html") + '">Churches</a>'
    + '<a href="' + u("industries/nonprofits/index.html") + '">Nonprofits</a>'
    + '<span>Small Business</span>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '<div>'
    + '<a class="foot-label" href="' + u("service-areas/index.html") + '">Service Areas</a>'
    + '<div class="foot-areas">'
    + '<a href="' + u("service-areas/marion-county/index.html") + '">Marion County</a>'
    + '<a href="' + u("service-areas/sumter-county/index.html") + '">Sumter County</a>'
    + '<a href="' + u("service-areas/lake-county/index.html") + '">Lake County</a>'
    + '<a href="' + u("service-areas/alachua-county/index.html") + '">Alachua County</a>'
    + '<a href="' + u("service-areas/volusia-county/index.html") + '">Volusia County</a>'
    + '<a href="' + u("service-areas/levy-county/index.html") + '">Levy County</a>'
    + '<a href="' + u("service-areas/citrus-county/index.html") + '">Citrus County</a>'
    + '<a href="' + u("service-areas/hernando-county/index.html") + '">Hernando County</a>'
    + '<a href="' + u("service-areas/putnam-county/index.html") + '">Putnam County</a>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</footer>';

  var slot = document.getElementById("site-footer");
  if (slot) slot.outerHTML = html;
  else document.body.insertAdjacentHTML("beforeend", html);
})();
