const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

const xmlEsc = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&apos;');

export function publicContactEmail(env = process.env) {
  const value = String(env.CONTACT_EMAIL || '').trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? value : '';
}

export function webgainsValidationCode(env = process.env) {
  const value = String(env.WEBGAINS_SITE_VALIDATION_CODE || '').trim();
  return /^WGCC[A-Za-z0-9_-]{3,100}$/.test(value) ? value : '';
}

export function enhancePublisherReadinessHtml(html, env = process.env) {
  if (typeof html !== 'string' || !html.includes('<html')) return html;

  let result = html;
  const oldFooter = '<div class="footer-links"><a href="/affiliate-disclosure">Affiliate disclosure</a><a href="/privacy">Privacy</a><a href="/about">About</a></div>';
  const newFooter = '<div class="footer-links"><a href="/affiliate-disclosure">Affiliate disclosure</a><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/contact">Contact</a><a href="/about">About</a></div>';
  result = result.replace(oldFooter, newFooter);

  const validation = webgainsValidationCode(env);
  if (validation && !result.includes(`<!-- ${validation} -->`)) {
    result = result.replace('</body>', `<!-- ${validation} --></body>`);
  }

  return result;
}

export function contactPageDefinition(env = process.env) {
  const email = publicContactEmail(env);
  const contact = email
    ? `<p>For editorial, affiliate-programme or website enquiries, email <a class="text-link" href="mailto:${esc(email)}">${esc(email)}</a>.</p><p>Please do not send passwords, payment-card details, tax identifiers or other sensitive account credentials by email.</p>`
    : '<p>A public editorial contact address is being configured before publisher-network applications are submitted. No contact address is published until the deployment variable has been set and verified.</p>';

  return {
    title: 'Contact — DROPi Delivery',
    description: 'Contact information for DROPi Delivery editorial and commercial enquiries.',
    path: '/contact',
    robots: email ? 'index,follow' : 'noindex,follow',
    body: `<section class="page-head"><div class="eyebrow">Contact</div><h1>Contact DROPi Delivery</h1><p>DROPi Delivery is an independent editorial commerce publication focused on delivery work and small-ecommerce shipping.</p></section><section class="section prose"><h2>Editorial and commercial enquiries</h2>${contact}<h2>Product and order support</h2><p>DROPi Delivery does not manufacture, stock, sell or fulfil the products and services linked from this website. Questions about an order, subscription, return, warranty or delivery should be sent to the retailer or service provider that handled the transaction.</p></section>`
  };
}

export function termsPageDefinition() {
  return {
    title: 'Website Terms — DROPi Delivery',
    description: 'Terms governing use of the DROPi Delivery editorial website.',
    path: '/terms',
    body: '<section class="page-head"><div class="eyebrow">Website terms</div><h1>Terms of use</h1><p>These terms describe how the DROPi Delivery editorial website is intended to be used.</p></section><section class="section prose"><h2>Editorial website, not a retailer</h2><p>DROPi Delivery publishes independent buying guides, comparisons and practical delivery-work resources. DROPi Delivery does not manufacture, stock, sell or fulfil the third-party products and services described on this site.</p><h2>External purchases and subscriptions</h2><p>If you follow a link to a retailer, marketplace or software provider, any purchase, subscription, return, warranty or other transaction is between you and that provider and is subject to the provider’s current terms, prices and policies.</p><h2>Information can change</h2><p>Product specifications, availability, prices, affiliate-programme terms and software features can change after an article is published. Check important details on the provider website before making a purchase or operational decision.</p><h2>Use of editorial information</h2><p>Content is provided for general informational purposes. It is not a substitute for professional legal, financial, medical or specialist safety advice. Where a manufacturer, employer, platform, carrier or public authority provides instructions or requirements that apply to your situation, those instructions should be checked directly.</p><h2>Site content</h2><p>Original DROPi Delivery text, structure and branding should not be republished as another publication’s own content without permission. Normal linking, quotation within applicable rules and search-engine indexing are not restricted by this notice.</p><h2>Questions</h2><p>Use the <a class="text-link" href="/contact">Contact page</a> for website or editorial enquiries. This operational notice is not a substitute for professional legal advice.</p></section>'
  };
}

export function cookiesPageDefinition() {
  return {
    title: 'Cookie Information — DROPi Delivery',
    description: 'Cookie and browser-storage information for DROPi Delivery.',
    path: '/cookies',
    body: '<section class="page-head"><div class="eyebrow">Cookies</div><h1>Cookie information</h1><p>DROPi Delivery is intentionally built with a minimal browser-tracking footprint.</p></section><section class="section prose"><h2>Current DROPi website behaviour</h2><p>The current DROPi Delivery application does not intentionally set first-party advertising or analytics cookies and does not load client-side advertising pixels or fingerprinting scripts. Its privacy-first commercial measurement is server-side request logging rather than browser cookie storage.</p><h2>Essential infrastructure</h2><p>The hosting or network infrastructure used to operate and secure the website may process technical request information independently of the application. The <a class="text-link" href="/privacy">Privacy page</a> explains the application-level logging used by DROPi Delivery.</p><h2>External affiliate and provider sites</h2><p>When you follow an external retailer, marketplace or software-provider link, you leave DROPi Delivery. The destination site and its affiliate network may use referral parameters, cookies or similar technologies under their own privacy and cookie notices.</p><h2>Future changes</h2><p>If DROPi Delivery later enables non-essential browser analytics, advertising technology, newsletter tracking or another feature that requires a consent mechanism, the implementation and this notice will be updated before that feature is enabled.</p></section>'
  };
}

export function augmentPublisherSitemap(xml, origin, env = process.env) {
  if (typeof xml !== 'string' || !xml.includes('</urlset>')) return xml;
  const base = String(origin || '').replace(/\/$/, '');
  const paths = ['/terms', '/cookies'];
  if (publicContactEmail(env)) paths.push('/contact');
  const entries = paths.map((path) => `<url><loc>${xmlEsc(base)}${path}</loc></url>`).join('');
  return xml.replace('</urlset>', `${entries}</urlset>`);
}
