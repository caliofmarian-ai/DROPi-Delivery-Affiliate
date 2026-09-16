import test from 'node:test';
import assert from 'node:assert/strict';
import { articles, categories, wave3Articles, getArticle } from '../src/content-all.mjs';
import { articlePage, atomFeed, homePage } from '../src/site-all.mjs';

test('wave 3 publishes exactly twenty new commercial-intent guides', () => {
  assert.equal(wave3Articles.length, 20);
  assert.equal(new Set(wave3Articles.map((article) => article.slug)).size, 20);
  assert.equal(new Set(wave3Articles.map((article) => article.title)).size, 20);
  for (const article of wave3Articles) {
    assert.equal(article.intent, 'commercial');
    assert.ok(article.productQuery.length > 10);
    assert.ok(article.sections.length >= 4);
    assert.equal(article.published, '2026-09-16');
    assert.equal(getArticle(article.slug), article);
  }
});

test('wave 3 adds four guides to every editorial category', () => {
  for (const category of categories) {
    const matching = wave3Articles.filter((article) => article.category === category.slug);
    assert.equal(matching.length, 4, `${category.slug} should receive four wave 3 guides`);
  }
});

test('combined library now exposes 52 unique guides', () => {
  assert.equal(articles.length, 52);
  assert.equal(new Set(articles.map((article) => article.slug)).size, 52);
  assert.match(homePage(), /52 original guides/);
});

test('wave 3 article renders disclosure, CTA and related links', () => {
  const html = articlePage(getArticle('portable-tyre-inflator-delivery-vehicle'));
  assert.match(html, /Portable Tyre Inflator for Delivery Vehicles/);
  assert.match(html, /Check Amazon\.ie options/);
  assert.match(html, /nofollow sponsored/);
  assert.match(html, /Related guides/);
  assert.match(html, /Affiliate disclosure/);
});

test('Atom feed contains the twenty newest wave 3 guides', () => {
  const xml = atomFeed();
  assert.equal((xml.match(/<entry>/g) || []).length, 20);
  for (const article of wave3Articles) {
    assert.match(xml, new RegExp(`/guides/${article.slug}`));
  }
});
