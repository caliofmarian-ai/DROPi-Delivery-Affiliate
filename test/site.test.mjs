import test from 'node:test';
import assert from 'node:assert/strict';
import { articles } from '../src/content.mjs';
import { homePage, articlePage, outboundUrl, sitemap } from '../src/site.mjs';

test('publishes at least ten original launch guides', () => {
  assert.ok(articles.length >= 10);
  assert.equal(new Set(articles.map(a => a.slug)).size, articles.length);
  for (const article of articles) {
    assert.ok(article.title.length > 25);
    assert.ok(article.sections.length >= 3);
  }
});

test('home page exposes disclosure and guide entry points', () => {
  const html = homePage();
  assert.match(html, /DROPi Delivery/);
  assert.match(html, /Affiliate disclosure/);
  assert.match(html, /\/guides/);
});

test('article renders structured metadata and sponsored outbound path', () => {
  const html = articlePage(articles[0]);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /nofollow sponsored/);
  assert.match(html, /#Ad \/ Affiliate disclosure/);
});

test('Amazon redirect is non-monetised when tag is absent', () => {
  delete process.env.AMAZON_IE_ASSOC_TAG;
  const result = outboundUrl('amazon', new URL('https://example.test/go/amazon?query=phone+mount&from=guide'));
  assert.equal(result.monetised, false);
  assert.match(result.target, /^https:\/\/www\.amazon\.ie\/s\?/);
  assert.doesNotMatch(result.target, /[?&]tag=/);
});

test('sitemap includes every article', () => {
  const xml = sitemap();
  for (const article of articles) assert.match(xml, new RegExp(`/guides/${article.slug}`));
});
