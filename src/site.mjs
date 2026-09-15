import { articles, categories, partnerPrograms } from './content.mjs';

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

export function siteUrl() {
  return (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
}

function nav() {
  return `<header class="site-header"><a class="brand" href="/"><span class="brand-mark">D</span><span>DROPi Delivery</span></a><nav aria-label="Primary"><a href="/guides">Guides</a><a href="/tools">Shipping tools</a><a href="/about">About</a></nav></header>`;
}

function footer() {
  return `<footer class="site-footer"><div><strong>DROPi Delivery</strong><p>Independent buying guides and practical delivery-work resources for Ireland and Europe.</p></div><div class="footer-links"><a href="/affiliate-disclosure">Affiliate disclosure</a><a href="/privacy">Privacy</a><a href="/about">About</a></div><p class="legal-note">DROPi Delivery is an independent publisher. Brand names belong to their respective owners. Product availability, pricing and partner terms can change.</p></footer>`;
}

export function layout({ title, description, path = '/', body, jsonLd = null }) {
  const canonical = `${siteUrl()}${path}`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${esc(canonical)}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:url" content="${esc(canonical)}"><link rel="stylesheet" href="/styles.css">${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replaceAll('<','\\u003c')}</script>` : ''}</head><body>${nav()}<main>${body}</main>${footer()}</body></html>`;
}

function affiliateNotice() {
  return `<aside class="affiliate-note"><strong>#Ad / Affiliate disclosure</strong><p>Some outbound links can be affiliate links. If you buy or subscribe through one, DROPi Delivery may earn a commission at no extra cost to you. Recommendations are selected for relevance, not because a partner pays more.</p></aside>`;
}

export function homePage() {
  const latest = articles.slice(0, 6).map(card).join('');
  const cat = categories.map(c => `<a class="category-card" href="/guides?category=${esc(c.slug)}"><span>${esc(c.name)}</span><p>${esc(c.description)}</p></a>`).join('');
  const body = `<section class="hero"><div class="eyebrow">Delivery work, without the hype</div><h1>Better gear. Better dispatch. Fewer small failures.</h1><p class="hero-copy">Independent guides for delivery drivers, couriers and small online sellers in Ireland and Europe. We compare what matters in real workflows: reliability, weather, power, cargo organisation and shipping software.</p><div class="hero-actions"><a class="button primary" href="/guides">Browse practical guides</a><a class="button secondary" href="/tools">Compare shipping tools</a></div><div class="trust-row"><span>Original editorial content</span><span>Affiliate links disclosed</span><span>No stock sold by DROPi</span></div></section><section class="section"><div class="section-heading"><div><div class="eyebrow">Find the right workflow</div><h2>Built around delivery problems, not product catalogues</h2></div></div><div class="category-grid">${cat}</div></section><section class="section"><div class="section-heading"><div><div class="eyebrow">Latest guides</div><h2>Start with the highest-impact upgrades</h2></div><a href="/guides">View all ${articles.length} guides →</a></div><div class="article-grid">${latest}</div></section><section class="section split"><div><div class="eyebrow">For online sellers</div><h2>Shipping software can be worth more than another gadget</h2><p>When order volume grows, the biggest savings often come from removing repeated data entry, label steps and manual tracking updates. Our software guides focus on workflow fit rather than feature-count marketing.</p><a class="text-link" href="/guides/sendcloud-vs-shipstation-europe">Read the Sendcloud vs ShipStation framework →</a></div><div class="panel"><strong>Monetisation model</strong><p>DROPi Delivery does not need inventory. Revenue is designed around transparent affiliate referrals to relevant products and software. Until a programme is approved, links remain non-affiliate.</p></div></section>`;
  return layout({ title: 'DROPi Delivery — Gear and Shipping Guides for Delivery Work', description: 'Independent delivery-driver gear and ecommerce shipping guides for Ireland and Europe.', body, path: '/', jsonLd: { '@context':'https://schema.org','@type':'Organization','name':'DROPi Delivery','url':siteUrl(),'description':'Independent editorial commerce for delivery work and ecommerce shipping.' } });
}

export function guidesPage(url) {
  const category = url.searchParams.get('category');
  const filtered = category ? articles.filter(a => a.category === category) : articles;
  const active = categories.find(c => c.slug === category);
  const filters = [`<a class="chip ${!category ? 'active' : ''}" href="/guides">All</a>`, ...categories.map(c => `<a class="chip ${category===c.slug?'active':''}" href="/guides?category=${esc(c.slug)}">${esc(c.name)}</a>`)].join('');
  const body = `<section class="page-head"><div class="eyebrow">Editorial library</div><h1>${active ? esc(active.name) : 'Delivery & shipping guides'}</h1><p>${active ? esc(active.description) : 'Original, practical articles designed to help people choose tools around a real workflow.'}</p></section><div class="chips">${filters}</div><section class="section"><div class="article-grid">${filtered.map(card).join('')}</div></section>`;
  return layout({ title: `${active ? active.name : 'Guides'} — DROPi Delivery`, description: active?.description || 'Delivery work and ecommerce shipping guides from DROPi Delivery.', path: category ? `/guides?category=${encodeURIComponent(category)}` : '/guides', body });
}

function card(a) {
  const cat = categories.find(c => c.slug === a.category)?.name || 'Guide';
  return `<article class="article-card"><div class="card-meta"><span>${esc(cat)}</span><time datetime="${a.updated}">${a.updated}</time></div><h3><a href="/guides/${esc(a.slug)}">${esc(a.title)}</a></h3><p>${esc(a.description)}</p><a class="text-link" href="/guides/${esc(a.slug)}">Read guide →</a></article>`;
}

export function articlePage(article) {
  const category = categories.find(c => c.slug === article.category)?.name || 'Guide';
  const sections = article.sections.map(s => `<section class="article-section"><h2>${esc(s.heading)}</h2>${(s.paragraphs||[]).map(p=>`<p>${esc(p)}</p>`).join('')}${s.bullets ? `<ul>${s.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`:''}</section>`).join('');
  const buy = article.productQuery ? `<section class="commercial-box"><div><div class="eyebrow">Compare current options</div><h2>Shop by the specifications in this guide</h2><p>We do not publish fake “tested” claims. Use the checklist above to compare current products and verify specifications on the retailer page.</p></div><a class="button primary" rel="nofollow sponsored" href="/go/amazon?query=${encodeURIComponent(article.productQuery)}&from=${encodeURIComponent(article.slug)}">Check Amazon.ie options</a></section>` : `<section class="commercial-box"><div><div class="eyebrow">Software comparison</div><h2>Try the workflow before committing</h2><p>Partner terms and plans can change. Verify current features and pricing on the provider website.</p></div><div class="stack"><a class="button primary" rel="nofollow sponsored" href="/go/sendcloud?from=${encodeURIComponent(article.slug)}">Visit Sendcloud</a><a class="button secondary" rel="nofollow sponsored" href="/go/shipstation?from=${encodeURIComponent(article.slug)}">Visit ShipStation</a></div></section>`;
  const body = `<article class="article"><header class="article-header"><a class="eyebrow" href="/guides?category=${esc(article.category)}">${esc(category)}</a><h1>${esc(article.title)}</h1><p class="dek">${esc(article.description)}</p><div class="byline">Published ${article.published} · Updated ${article.updated} · DROPi Delivery Editorial</div></header>${affiliateNotice()}${sections}${buy}<aside class="method"><strong>How we write buying guides</strong><p>We prioritise use case, specifications, maintainability and failure modes. Unless a page explicitly says otherwise, a product mention is not a claim of hands-on testing.</p></aside></article>`;
  const jsonLd = { '@context':'https://schema.org','@type':'Article','headline':article.title,'description':article.description,'datePublished':article.published,'dateModified':article.updated,'author':{'@type':'Organization','name':'DROPi Delivery Editorial'},'publisher':{'@type':'Organization','name':'DROPi Delivery'},'mainEntityOfPage':`${siteUrl()}/guides/${article.slug}` };
  return layout({ title: `${article.title} — DROPi Delivery`, description: article.description, path: `/guides/${article.slug}`, body, jsonLd });
}

export function toolsPage() {
  const rows = partnerPrograms.map(p => `<div class="tool-row"><div><h3>${esc(p.name)}</h3><p>${esc(p.audience)}</p></div><div><span class="status">${esc(p.status.toUpperCase())}</span><p>${esc(p.note)}</p></div></div>`).join('');
  const body = `<section class="page-head"><div class="eyebrow">Shipping software</div><h1>Tools for sellers who have outgrown copy-and-paste dispatch</h1><p>We track affiliate programmes separately from editorial decisions. Partner approval is a monetisation step, not a reason to recommend a tool.</p></section>${affiliateNotice()}<section class="section"><div class="tool-table">${rows}</div></section><section class="section split"><div><h2>Compare workflow before price</h2><p>Carrier availability, sales-channel integrations, returns, automation and team workflow can matter more than a small monthly price difference.</p></div><div class="panel"><strong>Current editorial comparison</strong><p>Start with our neutral decision framework for Sendcloud and ShipStation.</p><a class="text-link" href="/guides/sendcloud-vs-shipstation-europe">Open comparison →</a></div></section>`;
  return layout({ title:'Shipping Tools — DROPi Delivery', description:'Shipping software resources and affiliate programme status for DROPi Delivery.', path:'/tools', body });
}

export function aboutPage() {
  const body = `<section class="page-head"><div class="eyebrow">About DROPi Delivery</div><h1>A commerce publication built around the delivery economy</h1><p>DROPi Delivery is an independent editorial project for drivers, couriers and small ecommerce operators. We do not manufacture or hold stock. We publish useful original guides and may earn commission when readers choose a relevant third-party product or service.</p></section><section class="section prose"><h2>What makes this useful</h2><p>Product roundups are easy to generate. Operational context is harder. Our editorial standard is to begin with a work problem—battery, weather, load organisation, thermal carrying, dispatch or returns—and only then discuss the specifications that can solve it.</p><h2>What we will not do</h2><ul><li>Claim hands-on testing when we did not test a product.</li><li>Invent discounts, prices or product availability.</li><li>Rank a partner higher because it pays more commission.</li><li>Hide the commercial relationship behind vague language.</li></ul><h2>Initial market</h2><p>Editorial coverage starts with Ireland and expands to European use cases where the advice and partner availability make sense.</p></section>`;
  return layout({ title:'About — DROPi Delivery', description:'How DROPi Delivery creates independent delivery-work and shipping content.', path:'/about', body });
}

export function disclosurePage() {
  const amazon = process.env.AMAZON_IE_ASSOC_TAG ? '<p><strong>As an Amazon Associate I earn from qualifying purchases.</strong></p>' : '<p>If DROPi Delivery is accepted into Amazon Associates and Amazon affiliate links are activated, the required Amazon Associate statement will be displayed prominently here and near relevant commercial links.</p>';
  const body = `<section class="page-head"><div class="eyebrow">Transparency</div><h1>Affiliate disclosure</h1><p>DROPi Delivery is designed as an affiliate-supported publication.</p></section><section class="section prose"><h2>#Ad — what affiliate links mean</h2><p>Some links can be affiliate links. If you follow one and complete a qualifying purchase or subscription, DROPi Delivery may receive a commission. You should pay the same price unless the provider explicitly states otherwise.</p>${amazon}<h2>Editorial independence</h2><p>Commercial eligibility does not determine whether a product or service is a good fit. We aim to explain use cases, limitations and selection criteria before presenting an outbound commercial link.</p><h2>Price and availability</h2><p>Retailer prices, subscription plans, programme terms and availability can change after publication. Verify final details on the provider website before purchasing.</p></section>`;
  return layout({ title:'Affiliate Disclosure — DROPi Delivery', description:'Affiliate disclosure and editorial independence policy for DROPi Delivery.', path:'/affiliate-disclosure', body });
}

export function privacyPage() {
  const body = `<section class="page-head"><div class="eyebrow">Privacy</div><h1>Privacy-first by default</h1><p>The launch version is intentionally simple and does not require an advertising tracker or user account.</p></section><section class="section prose"><h2>Server logs</h2><p>The hosting provider may create routine technical logs needed to operate and secure the service. DROPi Delivery’s own affiliate redirect logging is designed to record only the partner, referring guide identifier and time of click; it does not intentionally record an IP address or set a tracking cookie.</p><h2>External sites</h2><p>When you follow an external link, the destination provider applies its own privacy and cookie practices. Affiliate providers may use referral identifiers or cookies according to their terms.</p><h2>Future analytics or newsletter</h2><p>If analytics, advertising, newsletter signup or other personal-data features are added, this notice and any consent mechanism will be updated before those features are enabled.</p></section>`;
  return layout({ title:'Privacy — DROPi Delivery', description:'Privacy information for DROPi Delivery.', path:'/privacy', body });
}

export function outboundUrl(partner, url) {
  const from = url.searchParams.get('from') || 'unknown';
  if (partner === 'amazon') {
    const query = url.searchParams.get('query') || 'delivery driver gear';
    const target = new URL('https://www.amazon.ie/s');
    target.searchParams.set('k', query);
    if (process.env.AMAZON_IE_ASSOC_TAG) target.searchParams.set('tag', process.env.AMAZON_IE_ASSOC_TAG);
    return { target: target.toString(), from, monetised: Boolean(process.env.AMAZON_IE_ASSOC_TAG) };
  }
  if (partner === 'sendcloud') return { target: process.env.SENDCLOUD_AFFILIATE_URL || 'https://www.sendcloud.com/', from, monetised: Boolean(process.env.SENDCLOUD_AFFILIATE_URL) };
  if (partner === 'shipstation') return { target: process.env.SHIPSTATION_AFFILIATE_URL || 'https://www.shipstation.com/en-gb/', from, monetised: Boolean(process.env.SHIPSTATION_AFFILIATE_URL) };
  return null;
}

export function sitemap() {
  const paths = ['/', '/guides', '/tools', '/about', '/affiliate-disclosure', '/privacy', ...articles.map(a => `/guides/${a.slug}`)];
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${siteUrl()}${p}</loc></url>`).join('')}</urlset>`;
}
