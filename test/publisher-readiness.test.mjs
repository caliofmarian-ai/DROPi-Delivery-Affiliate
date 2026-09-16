import test from 'node:test';
import assert from 'node:assert/strict';
import { homePage, sitemap, siteUrl } from '../src/site-all.mjs';
import {
  augmentPublisherSitemap,
  contactPageDefinition,
  cookiesPageDefinition,
  enhancePublisherReadinessHtml,
  publicContactEmail,
  termsPageDefinition,
  webgainsValidationCode
} from '../src/publisher-readiness.mjs';

test('publisher-ready footer exposes contact and policy surfaces', () => {
  const html = enhancePublisherReadinessHtml(homePage(), {});
  assert.match(html, /href="\/cookies">Cookies<\/a>/);
  assert.match(html, /href="\/terms">Terms<\/a>/);
  assert.match(html, /href="\/contact">Contact<\/a>/);
});

test('contact page stays noindex until a valid public email is configured', () => {
  const missing = contactPageDefinition({});
  assert.equal(missing.robots, 'noindex,follow');
  assert.doesNotMatch(missing.body, /mailto:/);

  const invalid = contactPageDefinition({ CONTACT_EMAIL: 'not-an-email' });
  assert.equal(invalid.robots, 'noindex,follow');
  assert.doesNotMatch(invalid.body, /mailto:/);

  const ready = contactPageDefinition({ CONTACT_EMAIL: 'editor@example.com' });
  assert.equal(ready.robots, 'index,follow');
  assert.match(ready.body, /mailto:editor@example\.com/);
  assert.equal(publicContactEmail({ CONTACT_EMAIL: ' editor@example.com ' }), 'editor@example.com');
});

test('Webgains validation comment renders only for a constrained WGCC value', () => {
  const valid = { WEBGAINS_SITE_VALIDATION_CODE: 'WGCC123abc_TEST' };
  assert.equal(webgainsValidationCode(valid), 'WGCC123abc_TEST');
  assert.match(enhancePublisherReadinessHtml(homePage(), valid), /<!-- WGCC123abc_TEST -->/);

  const malicious = { WEBGAINS_SITE_VALIDATION_CODE: 'WGCC123 --><script>alert(1)<\/script>' };
  assert.equal(webgainsValidationCode(malicious), '');
  assert.doesNotMatch(enhancePublisherReadinessHtml(homePage(), malicious), /alert\(1\)/);
});

test('terms and cookie definitions describe the actual editorial and tracking posture', () => {
  const terms = termsPageDefinition();
  const cookies = cookiesPageDefinition();
  assert.equal(terms.path, '/terms');
  assert.match(terms.body, /does not manufacture, stock, sell or fulfil/);
  assert.match(terms.body, /provider’s current terms, prices and policies/);
  assert.equal(cookies.path, '/cookies');
  assert.match(cookies.body, /does not intentionally set first-party advertising or analytics cookies/);
  assert.match(cookies.body, /server-side request logging/);
});

test('publisher sitemap always adds policy pages and adds contact only when publishable', () => {
  const base = sitemap();
  const withoutContact = augmentPublisherSitemap(base, siteUrl(), {});
  assert.match(withoutContact, /<loc>http:\/\/localhost:3000\/terms<\/loc>/);
  assert.match(withoutContact, /<loc>http:\/\/localhost:3000\/cookies<\/loc>/);
  assert.doesNotMatch(withoutContact, /<loc>http:\/\/localhost:3000\/contact<\/loc>/);

  const withContact = augmentPublisherSitemap(base, siteUrl(), { CONTACT_EMAIL: 'editor@example.com' });
  assert.match(withContact, /<loc>http:\/\/localhost:3000\/contact<\/loc>/);
});

test('publisher HTML enhancement is idempotent', () => {
  const env = { WEBGAINS_SITE_VALIDATION_CODE: 'WGCCabc123' };
  const once = enhancePublisherReadinessHtml(homePage(), env);
  const twice = enhancePublisherReadinessHtml(once, env);
  assert.equal((twice.match(/href="\/contact"/g) || []).length, 1);
  assert.equal((twice.match(/<!-- WGCCabc123 -->/g) || []).length, 1);
});
