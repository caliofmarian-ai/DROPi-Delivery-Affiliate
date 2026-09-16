import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { articles } from '../src/content-all.mjs';
import { homePage, guidesPage, articlePage } from '../src/site-all.mjs';
import { enhanceHtmlAccessibility } from '../src/accessibility.mjs';

test('global HTML gets a skip target and an accessible home brand', () => {
  const html = enhanceHtmlAccessibility(homePage());
  assert.match(html, /class="skip-link" href="#main-content"/);
  assert.match(html, /<main id="main-content" tabindex="-1">/);
  assert.match(html, /aria-label="DROPi Delivery home"/);
  assert.match(html, /class="brand-mark" aria-hidden="true"/);
});

test('primary navigation reports the current page or guide section', () => {
  const guides = enhanceHtmlAccessibility(guidesPage(new URL('https://example.test/guides')));
  assert.match(guides, /href="\/guides" aria-current="page">Guides<\/a>/);

  const article = enhanceHtmlAccessibility(articlePage(articles[0]));
  assert.match(article, /href="\/guides" aria-current="location">Guides<\/a>/);
});

test('active category filters and affiliate notices expose semantics', () => {
  const category = enhanceHtmlAccessibility(
    guidesPage(new URL('https://example.test/guides/category/driver-essentials'))
  );
  assert.match(category, /class="chip active" aria-current="page"/);

  const article = enhanceHtmlAccessibility(articlePage(articles[0]));
  assert.match(article, /class="affiliate-note" aria-label="Affiliate disclosure"/);
});

test('accessibility enhancement is idempotent for the skip link', () => {
  const once = enhanceHtmlAccessibility(homePage());
  const twice = enhanceHtmlAccessibility(once);
  assert.equal((twice.match(/class="skip-link"/g) || []).length, 1);
});

test('CSS includes keyboard focus and touch-target support without old low-contrast tokens', async () => {
  const css = await readFile(new URL('../public/styles.css', import.meta.url), 'utf8');
  assert.match(css, /focus-visible/);
  assert.match(css, /min-height:44px/);
  assert.match(css, /\.skip-link/);
  assert.doesNotMatch(css, /#6e7c72|#718078|#738079/i);
});
