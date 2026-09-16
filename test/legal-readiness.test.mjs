import test from 'node:test';
import assert from 'node:assert/strict';
import { homePage, privacyPage, sitemap, siteUrl } from '../src/site-all.mjs';
import { enhancePublisherReadinessHtml } from '../src/publisher-readiness.mjs';
import {
  augmentLegalSitemap,
  enhancePrivacyNotice,
  legalPageDefinition,
  legalProviderDetails,
  logRetentionDays,
  privacyReadiness
} from '../src/legal-readiness.mjs';

const readyEnv = {
  LEGAL_NAME: 'Example Publisher Ltd',
  LEGAL_ADDRESS: '1 Example Street, Dublin, Ireland',
  CONTACT_EMAIL: 'editor@example.com',
  BUSINESS_REGISTRATION: '123456',
  VAT_ID: 'IE1234567X',
  LOG_RETENTION_DAYS: '30'
};

test('legal provider remains incomplete until name, address and public email all exist', () => {
  assert.equal(legalProviderDetails({}).ready, false);
  assert.equal(legalProviderDetails({ LEGAL_NAME: 'Example', LEGAL_ADDRESS: 'Dublin' }).ready, false);
  assert.equal(legalPageDefinition({}).robots, 'noindex,follow');
});

test('ready legal page publishes only configured real-world fields', () => {
  const details = legalProviderDetails(readyEnv);
  assert.equal(details.ready, true);
  const page = legalPageDefinition(readyEnv);
  assert.equal(page.robots, 'index,follow');
  assert.match(page.body, /Example Publisher Ltd/);
  assert.match(page.body, /1 Example Street, Dublin, Ireland/);
  assert.match(page.body, /mailto:editor@example\.com/);
  assert.match(page.body, /123456/);
  assert.match(page.body, /IE1234567X/);
});

test('legal page escapes untrusted environment values', () => {
  const page = legalPageDefinition({
    ...readyEnv,
    LEGAL_NAME: '<script>alert(1)</script>'
  });
  assert.doesNotMatch(page.body, /<script>alert\(1\)<\/script>/);
  assert.match(page.body, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
});

test('optional register and VAT details are omitted when not configured', () => {
  const page = legalPageDefinition({
    LEGAL_NAME: 'Example Publisher',
    LEGAL_ADDRESS: 'Dublin, Ireland',
    CONTACT_EMAIL: 'editor@example.com'
  });
  assert.doesNotMatch(page.body, /Business \/ register reference/);
  assert.doesNotMatch(page.body, /VAT identification number/);
});

test('legal sitemap entry is gated on complete service-provider identity', () => {
  const base = sitemap();
  const incomplete = augmentLegalSitemap(base, siteUrl(), {});
  assert.doesNotMatch(incomplete, /<loc>http:\/\/localhost:3000\/legal<\/loc>/);

  const complete = augmentLegalSitemap(base, siteUrl(), readyEnv);
  assert.match(complete, /<loc>http:\/\/localhost:3000\/legal<\/loc>/);
});

test('publisher footer exposes legal information surface', () => {
  const html = enhancePublisherReadinessHtml(homePage(), {});
  assert.match(html, /href="\/legal">Legal<\/a>/);
});

test('log retention accepts only a bounded positive integer', () => {
  assert.equal(logRetentionDays({ LOG_RETENTION_DAYS: '30' }), 30);
  assert.equal(logRetentionDays({ LOG_RETENTION_DAYS: '1' }), 1);
  assert.equal(logRetentionDays({ LOG_RETENTION_DAYS: '0' }), 0);
  assert.equal(logRetentionDays({ LOG_RETENTION_DAYS: '366' }), 0);
  assert.equal(logRetentionDays({ LOG_RETENTION_DAYS: 'thirty' }), 0);
});

test('privacy notice remains pre-launch until identity and retention are both configured', () => {
  assert.equal(privacyReadiness({}).ready, false);
  assert.equal(privacyReadiness(readyEnv).ready, true);

  const incomplete = enhancePrivacyNotice(privacyPage(), {});
  assert.match(incomplete, /pre-launch privacy notice/);
  assert.match(incomplete, /content="noindex,follow"/);
  assert.match(incomplete, /final log-retention period is still being verified/);

  const complete = enhancePrivacyNotice(privacyPage(), readyEnv);
  assert.match(complete, /The controller for DROPi Delivery is Example Publisher Ltd/);
  assert.match(complete, /maximum routine retention of 30 days/);
  assert.match(complete, /Purposes and legal basis/);
  assert.match(complete, /Recipients and international processing/);
  assert.match(complete, /Your data-protection rights/);
  assert.doesNotMatch(complete, /pre-launch privacy notice/);
  assert.match(complete, /content="index,follow"/);
});

test('privacy enhancer leaves non-privacy pages untouched', () => {
  const html = homePage();
  assert.equal(enhancePrivacyNotice(html, readyEnv), html);
});
