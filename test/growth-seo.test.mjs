import test from 'node:test';
import assert from 'node:assert/strict';
import { categories, getArticle } from '../src/content-all.mjs';
import { articlePage, categoryPath, guidesPage, homePage, robotsTxt, sitemap } from '../src/site-all.mjs';

test('category navigation uses stable crawlable landing pages', () => {
  const home = homePage();
  for (const category of categories) {
    assert.equal(categoryPath(category.slug), `/guides/category/${category.slug}`);
    assert.match(home, new RegExp(`/guides/category/${category.slug}`));
  }
});

test('category landing page has canonical URL and ItemList structured data', () => {
  const url = new URL('https://example.test/guides/category/driver-essentials');
  const html = guidesPage(url);
  assert.match(html, /<link rel="canonical" href="http:\/\/localhost:3000\/guides\/category\/driver-essentials">/);
  assert.match(html, /"@type":"CollectionPage"/);
  assert.match(html, /"@type":"ItemList"/);
  assert.match(html, /Driver Essentials/);
});

test('articles expose article metadata and breadcrumb structured data', () => {
  const article = getArticle('delivery-driver-starter-kit-ireland');
  const html = articlePage(article);
  assert.match(html, /<meta property="og:type" content="article">/);
  assert.match(html, /article:published_time/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /\/guides\/category\/driver-essentials/);
});

test('robots policy keeps affiliate redirects and health endpoint out of crawling', () => {
  const robots = robotsTxt();
  assert.match(robots, /Disallow: \/go\//);
  assert.match(robots, /Disallow: \/health/);
  assert.match(robots, /Sitemap: http:\/\/localhost:3000\/sitemap.xml/);
});

test('sitemap contains category hubs and lastmod metadata', () => {
  const xml = sitemap();
  for (const category of categories) assert.match(xml, new RegExp(`/guides/category/${category.slug}`));
  assert.equal((xml.match(/<lastmod>/g) || []).length, 43);
});
