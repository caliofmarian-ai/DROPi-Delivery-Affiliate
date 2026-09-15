import { articles, categories } from './content-all.mjs';
import {
  layout,
  articlePage as baseArticlePage,
  toolsPage,
  aboutPage,
  disclosurePage,
  privacyPage,
  outboundUrl,
  siteUrl
} from './site.mjs';

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

function card(article) {
  const category = categories.find((item) => item.slug === article.category)?.name || 'Guide';
  return `<article class="article-card"><div class="card-meta"><span>${esc(category)}</span><time datetime="${article.updated}">${article.updated}</time></div><h3><a href="/guides/${esc(article.slug)}">${esc(article.title)}</a></h3><p>${esc(article.description)}</p><a class="text-link" href="/guides/${esc(article.slug)}">Read guide →</a></article>`;
}

export function homePage() {
  const latest = articles.slice(0, 6).map(card).join('');
  const categoryCards = categories.map((category) => `<a class="category-card" href="/guides?category=${esc(category.slug)}"><span>${esc(category.name)}</span><p>${esc(category.description)}</p></a>`).join('');
  const body = `<section class="hero"><div class="eyebrow">Delivery work, without the hype</div><h1>Better gear. Better dispatch. Fewer small failures.</h1><p class="hero-copy">Independent guides for delivery drivers, couriers and small online sellers in Ireland and Europe. We compare what matters in real workflows: reliability, weather, power, cargo organisation and shipping software.</p><div class="hero-actions"><a class="button primary" href="/guides">Browse practical guides</a><a class="button secondary" href="/tools">Compare shipping tools</a></div><div class="trust-row"><span>32 original guides</span><span>Affiliate links disclosed</span><span>No stock sold by DROPi</span></div></section><section class="section"><div class="section-heading"><div><div class="eyebrow">Find the right workflow</div><h2>Built around delivery problems, not product catalogues</h2></div></div><div class="category-grid">${categoryCards}</div></section><section class="section"><div class="section-heading"><div><div class="eyebrow">Latest guides</div><h2>New practical guides for delivery work</h2></div><a href="/guides">View all ${articles.length} guides →</a></div><div class="article-grid">${latest}</div></section><section class="section split"><div><div class="eyebrow">For online sellers</div><h2>Shipping workflow before software hype</h2><p>Our ecommerce coverage now includes small-seller Sendcloud and multi-channel ShipStation reviews, an Ireland-focused decision tree, label and scale guides, and a returns workflow.</p><a class="text-link" href="/guides/shipping-software-decision-tree-ireland">Open the shipping software decision tree →</a></div><div class="panel"><strong>Monetisation model</strong><p>DROPi Delivery does not need inventory. Revenue is designed around transparent affiliate referrals to relevant products and software. Until a programme is approved, links remain non-affiliate.</p></div></section>`;
  return layout({ title: 'DROPi Delivery — Gear and Shipping Guides for Delivery Work', description: 'Independent delivery-driver gear and ecommerce shipping guides for Ireland and Europe.', body, path: '/', jsonLd: { '@context':'https://schema.org','@type':'Organization','name':'DROPi Delivery','url':siteUrl(),'description':'Independent editorial commerce for delivery work and ecommerce shipping.' } });
}

export function guidesPage(url) {
  const categorySlug = url.searchParams.get('category');
  const filtered = categorySlug ? articles.filter((article) => article.category === categorySlug) : articles;
  const active = categories.find((category) => category.slug === categorySlug);
  const filters = [`<a class="chip ${!categorySlug ? 'active' : ''}" href="/guides">All</a>`, ...categories.map((category) => `<a class="chip ${categorySlug === category.slug ? 'active' : ''}" href="/guides?category=${esc(category.slug)}">${esc(category.name)}</a>`)].join('');
  const body = `<section class="page-head"><div class="eyebrow">Editorial library</div><h1>${active ? esc(active.name) : 'Delivery & shipping guides'}</h1><p>${active ? esc(active.description) : `${articles.length} original, practical articles designed to help people choose tools around a real workflow.`}</p></section><div class="chips">${filters}</div><section class="section"><div class="article-grid">${filtered.map(card).join('')}</div></section>`;
  return layout({ title: `${active ? active.name : 'Guides'} — DROPi Delivery`, description: active?.description || 'Delivery work and ecommerce shipping guides from DROPi Delivery.', path: categorySlug ? `/guides?category=${encodeURIComponent(categorySlug)}` : '/guides', body });
}

export function articlePage(article) {
  const related = articles
    .filter((candidate) => candidate.category === article.category && candidate.slug !== article.slug)
    .slice(0, 3);
  if (!related.length) return baseArticlePage(article);
  const relatedHtml = `<section class="article-section"><h2>Related guides</h2><ul>${related.map((candidate) => `<li><a class="text-link" href="/guides/${esc(candidate.slug)}">${esc(candidate.title)}</a></li>`).join('')}</ul></section>`;
  return baseArticlePage(article).replace('<aside class="method">', `${relatedHtml}<aside class="method">`);
}

export function sitemap() {
  const paths = ['/', '/guides', '/tools', '/about', '/affiliate-disclosure', '/privacy', ...articles.map((article) => `/guides/${article.slug}`)];
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${siteUrl()}${path}</loc></url>`).join('')}</urlset>`;
}

export { layout, toolsPage, aboutPage, disclosurePage, privacyPage, outboundUrl, siteUrl };
