import test from 'node:test';
import assert from 'node:assert/strict';
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
    assert.equal(getArticle(article.slug), article);
  }
  assert.equal(articles.length, 62);
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
