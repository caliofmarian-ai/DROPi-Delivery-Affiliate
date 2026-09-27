import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { articles, categories } from '../src/content-all.mjs';
import { articlePage, guidesPage, homePage } from '../src/site-all.mjs';

test('every published guide has one unique local editorial image', async () => {
  assert.equal(articles.length, 62);
  assert.equal(new Set(articles.map((article) => article.image?.src)).size, articles.length);

  await Promise.all(articles.map(async (article) => {
    assert.ok(article.image);
    assert.match(article.image.src, /^\/images\/(?:guides|ebike-guides)\/[a-z0-9-]+\.webp$/);
    assert.ok(article.image.width >= 1536);
    assert.ok(article.image.height >= 887);
    assert.ok(article.image.alt.length > 40);
    assert.ok(article.image.caption.length > 40);
    await access(new URL(`../public${article.image.src}`, import.meta.url));
  }));
});

test('all guide cards and category libraries render image thumbnails', () => {
  const library = guidesPage(new URL('https://example.test/guides'));
  assert.equal((library.match(/class="card-image"/g) || []).length, articles.length);

  for (const category of categories) {
    const expected = articles.filter((article) => article.category === category.slug).length;
    const html = guidesPage(new URL(`https://example.test/guides/category/${category.slug}`));
    assert.equal((html.match(/class="card-image"/g) || []).length, expected);
  }

  assert.equal((homePage().match(/class="card-image"/g) || []).length, 6);
});

test('legacy article pages render the hero image and disclosure', () => {
  for (const article of articles.filter((candidate) => candidate.series !== 'ebike-delivery')) {
    const html = articlePage(article);
    assert.match(html, /class="article-hero"/);
    assert.match(html, new RegExp(article.image.src.replaceAll('/', '\\/')));
    assert.match(html, /AI-generated editorial image/);
    assert.match(html, /property="og:image"/);
    assert.match(html, /"image":"http:\/\/localhost:3000\/images\//);
  }
});
