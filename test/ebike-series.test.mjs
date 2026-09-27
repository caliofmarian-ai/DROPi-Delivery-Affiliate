import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { articles, ebikeDeliveryArticles, getArticle } from '../src/content-all.mjs';
import { articlePage, ebikeDeliveryPage, homePage, sitemap } from '../src/site-all.mjs';

test('e-bike delivery collection publishes ten ordered English guides', () => {
  assert.equal(ebikeDeliveryArticles.length, 10);
  assert.deepEqual(ebikeDeliveryArticles.map((article) => article.seriesOrder), [1,2,3,4,5,6,7,8,9,10]);
  assert.equal(new Set(ebikeDeliveryArticles.map((article) => article.slug)).size, 10);
  for (const article of ebikeDeliveryArticles) {
    assert.equal(article.series, 'ebike-delivery');
    assert.equal(article.category, 'bike-ebike');
    assert.equal(article.published, '2026-09-27');
    assert.equal(article.updated, '2026-09-27');
    assert.ok(article.title.length > 40);
    assert.ok(article.description.length > 90);
    assert.ok(article.sections.length >= 5);
    assert.ok(article.sources.length >= 2);
    assert.match(article.image.src, /^\/images\/ebike-guides\/[a-z0-9-]+\.webp$/);
    assert.ok(article.image.width >= 1536);
    assert.ok(article.image.height >= 887);
    assert.ok(article.image.alt.length > 40);
    assert.ok(article.image.caption.length > 40);
    assert.equal(getArticle(article.slug), article);
  }
  assert.equal(new Set(ebikeDeliveryArticles.map((article) => article.image.src)).size, 10);
  assert.equal(articles.length, 62);
});

test('every e-bike guide image is committed as a local web asset', async () => {
  await Promise.all(ebikeDeliveryArticles.map((article) => {
    const asset = new URL(`../public${article.image.src}`, import.meta.url);
    return access(asset);
  }));
});

test('collection hub exposes the full learning path and range model', () => {
  const html = ebikeDeliveryPage();
  assert.match(html, /E-bike delivery, built as one system/);
  assert.match(html, /usable Wh/);
  assert.match(html, /Wh per km/);
  assert.match(html, /10 guides · English/);
  assert.match(html, /ebike-rear-rack-delivery-guide/);
  assert.match(html, /complete-ebike-delivery-setup-ireland/);
  assert.equal((html.match(/class="series-card"/g) || []).length, 10);
  assert.equal((html.match(/class="series-card-image"/g) || []).length, 10);
  assert.match(html, /thermal delivery bag/i);
  assert.match(html, /"@type":"CollectionPage"/);
  assert.match(html, /"@type":"ItemList"/);
});

test('commercial rack guide shows series navigation, safety boundary, sources and CTA', () => {
  const html = articlePage(getArticle('ebike-rear-rack-delivery-guide'));
  assert.match(html, /Guide 1 of 10/);
  assert.match(html, /Safety boundary/);
  assert.match(html, /Official references/);
  assert.match(html, /Check Amazon\.ie options/);
  assert.match(html, /nofollow sponsored/);
  assert.match(html, /View the complete series/);
  assert.match(html, /class="article-hero"/);
  assert.match(html, /rear-rack-thermal-bag\.webp/);
  assert.match(html, /AI-generated editorial image/);
  assert.match(html, /Design the rack around the thermal delivery bag/);
  assert.match(html, /Food Safety Authority of Ireland/);
});

test('battery design and charging guides stay informational rather than monetised', () => {
  const design = articlePage(getArticle('ebike-battery-design-from-zero-safety'));
  const charging = articlePage(getArticle('ebike-battery-charging-storage-fire-safety'));
  assert.match(design, /Specification is not assembly/);
  assert.match(design, /EU Regulation 2023\/1542/);
  assert.doesNotMatch(design, /\/go\//);
  assert.doesNotMatch(design, /#Ad \/ Affiliate disclosure/);
  assert.match(charging, /999 or 112/);
  assert.doesNotMatch(charging, /\/go\//);
});

test('home and sitemap expose the collection hub and every series guide', () => {
  const home = homePage();
  const xml = sitemap();
  assert.match(home, /Open the e-bike delivery series/);
  assert.match(home, /href="\/ebike-delivery"/);
  assert.match(xml, /<loc>http:\/\/localhost:3000\/ebike-delivery<\/loc>/);
  for (const article of ebikeDeliveryArticles) {
    assert.match(xml, new RegExp(`/guides/${article.slug}`));
  }
});
