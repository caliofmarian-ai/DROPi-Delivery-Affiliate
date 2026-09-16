import test from 'node:test';
import assert from 'node:assert/strict';
import { contentSecurityPolicy, securityHeaders } from '../src/http-policy.mjs';
import { homePage } from '../src/site-all.mjs';

test('HTTP policy blocks executable scripts and risky embedding by default', () => {
  assert.match(contentSecurityPolicy, /script-src 'none'/);
  assert.match(contentSecurityPolicy, /object-src 'none'/);
  assert.match(contentSecurityPolicy, /frame-ancestors 'none'/);
  assert.match(contentSecurityPolicy, /form-action 'none'/);
  assert.doesNotMatch(contentSecurityPolicy, /unsafe-inline|unsafe-eval/);
});

test('security headers enforce transport and cross-origin isolation without subdomain HSTS', () => {
  assert.equal(securityHeaders['strict-transport-security'], 'max-age=31536000');
  assert.equal(securityHeaders['x-content-type-options'], 'nosniff');
  assert.equal(securityHeaders['x-frame-options'], 'DENY');
  assert.equal(securityHeaders['cross-origin-opener-policy'], 'same-origin');
  assert.equal(securityHeaders['cross-origin-resource-policy'], 'same-origin');
  assert.equal(securityHeaders['x-permitted-cross-domain-policies'], 'none');
  assert.doesNotMatch(securityHeaders['strict-transport-security'], /includeSubDomains/i);
});

test('server-rendered JSON-LD remains present as structured data', () => {
  const html = homePage();
  assert.match(html, /<script type="application\/ld\+json">/);
  assert.match(html, /"@type":"WebSite"/);
});
