import test from 'node:test';
import assert from 'node:assert/strict';
import { privacyPage } from '../src/site-all.mjs';

test('privacy page accurately discloses privacy-first request telemetry', () => {
  const html = privacyPage();
  assert.match(html, /Server and application logs/);
  assert.match(html, /guide identifiers and timestamps/);
  assert.match(html, /monetisation state/);
  assert.match(html, /does not intentionally include IP addresses/);
  assert.match(html, /not unique-person analytics/);
  assert.doesNotMatch(html, /own affiliate redirect logging is designed to record only/);
});
