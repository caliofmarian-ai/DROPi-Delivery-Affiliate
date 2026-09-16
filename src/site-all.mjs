import { articles, categories } from './content-all.mjs';
import {
  layout as baseLayout,
  articlePage as baseArticlePage,
  toolsPage as baseToolsPage,
  aboutPage as baseAboutPage,
  disclosurePage as baseDisclosurePage,
  privacyPage as basePrivacyPage,
  outboundUrl,
  siteUrl
} from './site.mjs';

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

const jsonLdTag = (value) =>
  `<script type="application/ld+json">${JSON.stringify(value).replaceAll('<', '\\u003c')}</script>`;

function injectHead(html, fragment) {
  return html.replace('</head>', `${fragment}</head>`);
}

function commonMeta(html, robots = 'index,follow') {
  return injectHead(
    html,
    `<meta name="robots" content="${esc(robots)}"><meta property="og:site_name" content="DROPi Delivery"><meta name="twitter:card" content="summary_large_image">`
  );
}

export function categoryPath(slug) {
  return `/guides/category/${encodeURIComponent(slug)}`;
}

export function layout({ robots = 'index,follow', ...args }) {
  return commonMeta(baseLayout(args), robots);
}

function card(article) {
  const category = categories.find((item) => item.slug === article.category)?.name || 'Guide';
  return `<article class="article-card"><div class="card-meta"><span>${esc(category)}</span><time datetime="${article.updated}">${article.updated}</time></div><h3><a href="/guides/${esc(article.slug)}">${esc(article.title)}</a></h3><p>${esc(article.description)}</p><a class="text-link" href="/guides/${esc(article.slug)}">Read guide →</a></article>`;
}

export function homePage() {
  const latest = articles.slice(0, 6).map(card).join('');
  const categoryCards = categories.map((category) => `<a class="category-card" href="${categoryPath(category.slug)}"><span>${esc(category.name)}</span><p>${esc(category.description)}</p></a>`).join('');
  const body = `<section class="hero"><div class="eyebrow">Delivery work, without the hype</div><h1>Better gear. Better dispatch. Fewer small failures.</h1><p class="hero-copy">Independent guides for delivery drivers, couriers and small online sellers in Ireland and Europe. We compare what matters in real workflows: reliability, weather, power, cargo organisation and shipping software.</p><div class="hero-actions"><a class="button primary" href="/guides">Browse practical guides</a><a class="button secondary" href="/tools">Compare shipping tools</a></div><div class="trust-row"><span>32 original guides</span><span>Affiliate links disclosed</span><span>No stock sold by DROPi</span></div></section><section class="section"><div class="section-heading"><div><div class="eyebrow">Find the right workflow</div><h2>Built around delivery problems, not product catalogues</h2></div></div><div class="category-grid">${categoryCards}</div></section><section class="section"><div class="section-heading"><div><div class="eyebrow">Latest guides</div><h2>New practical guides for delivery work</h2></div><a href="/guides">View all ${articles.length} guides →</a></div><div class="article-grid">${latest}</div></section><section class="section split"><div><div class="eyebrow">For online sellers</div><h2>Shipping workflow before software hype</h2><p>Our ecommerce coverage now includes small-seller Sendcloud and multi-channel ShipStation reviews, an Ireland-focused decision tree, label and scale guides, and a returns workflow.</p><a class="text-link" href="/guides/shipping-software-decision-tree-ireland">Open the shipping software decision tree →</a></div><div class="panel"><strong>Monetisation model</strong><p>DROPi Delivery does not need inventory. Revenue is designed around transparent affiliate referrals to relevant products and software. Until a programme is approved, links remain non-affiliate.</p></div></section>`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl()}/#organization`,
        name: 'DROPi Delivery',
        url: siteUrl(),
        description: 'Independent editorial commerce for delivery work and ecommerce shipping.'
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl()}/#website`,
        url: siteUrl(),
        name: 'DROPi Delivery',
        publisher: { '@id': `${siteUrl()}/#organization` }
      }
    ]
  };
  return layout({ title: 'DROPi Delivery — Gear and Shipping Guides for Delivery Work', description: 'Independent delivery-driver gear and ecommerce shipping guides for Ireland and Europe.', body, path: '/', jsonLd });
}

export function guidesPage(url) {
  const categoryMatch = url.pathname.match(/^\/guides\/category\/([^/]+)$/);
  const categorySlug = categoryMatch ? decodeURIComponent(categoryMatch[1]) : url.searchParams.get('category');
  const active = categories.find((category) => category.slug === categorySlug);
  const filtered = active ? articles.filter((article) => article.category === active.slug) : articles;
  const filters = [
    `<a class="chip ${!active ? 'active' : ''}" href="/guides">All</a>`,
    ...categories.map((category) => `<a class="chip ${active?.slug === category.slug ? 'active' : ''}" href="${categoryPath(category.slug)}">${esc(category.name)}</a>`)
  ].join('');
  const title = active ? active.name : 'Delivery & shipping guides';
  const description = active ? active.description : `${articles.length} original, practical articles designed to help people choose tools around a real workflow.`;
  const path = active ? categoryPath(active.slug) : '/guides';
  const body = `<section class="page-head"><div class="eyebrow">Editorial library</div><h1>${esc(title)}</h1><p>${esc(description)}</p></section><div class="chips">${filters}</div><section class="section"><div class="article-grid">${filtered.map(card).join('')}</div></section>`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${siteUrl()}${path}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: filtered.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: article.title,
        url: `${siteUrl()}/guides/${article.slug}`
      }))
    }
  };
  return layout({ title: `${active ? active.name : 'Guides'} — DROPi Delivery`, description, path, body, jsonLd });
}

export function articlePage(article) {
  const category = categories.find((item) => item.slug === article.category);
  const related = articles
    .filter((candidate) => candidate.category === article.category && candidate.slug !== article.slug)
    .slice(0, 3);

  let html = baseArticlePage(article);
  html = commonMeta(html);
  html = html.replace(
    `<a class="eyebrow" href="/guides?category=${esc(article.category)}">`,
    `<a class="eyebrow" href="${categoryPath(article.category)}">`
  );

  if (related.length) {
    const relatedHtml = `<section class="article-section"><h2>Related guides</h2><ul>${related.map((candidate) => `<li><a class="text-link" href="/guides/${esc(candidate.slug)}">${esc(candidate.title)}</a></li>`).join('')}</ul></section>`;
    html = html.replace('<aside class="method">', `${relatedHtml}<aside class="method">`);
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl()}/` },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl()}/guides` },
      {
        '@type': 'ListItem',
        position: 3,
        name: category?.name || 'Guide',
        item: `${siteUrl()}${categoryPath(article.category)}`
      },
      { '@type': 'ListItem', position: 4, name: article.title, item: `${siteUrl()}/guides/${article.slug}` }
    ]
  };

  html = html
    .replace('<meta property="og:type" content="website">', '<meta property="og:type" content="article">')
    .replace(
      '</head>',
      `<meta property="article:published_time" content="${esc(article.published)}"><meta property="article:modified_time" content="${esc(article.updated)}">${jsonLdTag(breadcrumb)}</head>`
    );
  return html;
}

export function toolsPage() {
  return commonMeta(baseToolsPage());
}

export function aboutPage() {
  return commonMeta(baseAboutPage());
}

export function disclosurePage() {
  return commonMeta(baseDisclosurePage());
}

export function privacyPage() {
  return commonMeta(basePrivacyPage());
}

export function robotsTxt() {
  return `User-agent: *\nAllow: /\nDisallow: /go/\nDisallow: /health\nSitemap: ${siteUrl()}/sitemap.xml\n`;
}

export function sitemap() {
  const latestUpdated = articles.reduce(
    (latest, article) => article.updated > latest ? article.updated : latest,
    '1970-01-01'
  );
  const staticPaths = ['/', '/guides', '/tools', '/about', '/affiliate-disclosure', '/privacy'];
  const entries = [
    ...staticPaths.map((path) => ({ path, lastmod: latestUpdated })),
    ...categories.map((category) => ({ path: categoryPath(category.slug), lastmod: latestUpdated })),
    ...articles.map((article) => ({ path: `/guides/${article.slug}`, lastmod: article.updated }))
  ];
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.map(({ path, lastmod }) => `<url><loc>${siteUrl()}${path}</loc><lastmod>${lastmod}</lastmod></url>`).join('')}</urlset>`;
}

export { outboundUrl, siteUrl };
