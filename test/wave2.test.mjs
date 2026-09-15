import test from 'node:test';
import assert from 'node:assert/strict';
import { articles, wave2Articles, getArticle } from '../src/content-all.mjs';
import { homePage, guidesPage, articlePage, sitemap } from '../src/site-all.mjs';

test('wave 2 publishes exactly twenty new guides', () => {
  assert.equal(wave2Articles.length, 20);
});

test('combined library contains 32 unique useful guides', () => {
  assert.equal(articles.length, 32);
  assert.equal(new Set(articles.map((article) => article.slug)).size, 32);
  for (const article of articles) {
    assert.ok(article.title.length > 25);
    assert.ok(article.description.length > 60);
    assert.ok(article.sections.length >= 3);
    assert.equal(getArticle(article.slug)?.slug, article.slug);
  }
});

test('home and guide library expose expanded content', () => {
  const home = homePage();
  const guides = guidesPage(new URL('https://example.test/guides'));
  assert.match(home, /32 original guides/);
  assert.match(guides, /32 original, practical articles/);
  assert.match(guides, /USB-C Car Chargers for All-Day Navigation/);
  assert.match(guides, /Returns Workflow for a Micro Ecommerce Store/);
});

test('wave 2 article renders related internal links', () => {
  const article = getArticle('usb-c-car-charger-delivery-navigation');
  const html = articlePage(article);
  assert.match(html, /Related guides/);
  assert.match(html, /\/guides\//);
  assert.match(html, /nofollow sponsored/);
});

test('expanded sitemap contains all 32 guide URLs', () => {
  const xml = sitemap();
  for (const article of articles) assert.match(xml, new RegExp(`/guides/${article.slug}`));
  assert.equal((xml.match(/<url>/g) || []).length, 38);
});
