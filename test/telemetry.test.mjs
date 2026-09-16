import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TELEMETRY_SCHEMA_VERSION,
  articleViewEvent,
  outboundClickEvent,
  normaliseGuideSlug,
  normalisePartner,
  telemetryLine
} from '../src/telemetry.mjs';

test('guide telemetry accepts canonical slugs and rejects arbitrary source values', () => {
  assert.equal(normaliseGuideSlug('delivery-driver-starter-kit-ireland'), 'delivery-driver-starter-kit-ireland');
  assert.equal(normaliseGuideSlug('made-up-guide'), 'unknown');
  assert.equal(normaliseGuideSlug('guide\nforged-log-field'), 'unknown');
});

test('partner telemetry accepts only supported commercial partners', () => {
  assert.equal(normalisePartner('amazon'), 'amazon');
  assert.equal(normalisePartner('sendcloud'), 'sendcloud');
  assert.equal(normalisePartner('shipstation'), 'shipstation');
  assert.equal(normalisePartner('other'), 'unknown');
});

test('article view event contains no user or request identifiers', () => {
  const event = articleViewEvent('delivery-driver-starter-kit-ireland', new Date('2026-09-16T17:00:00Z'));
  assert.deepEqual(event, {
    schema: TELEMETRY_SCHEMA_VERSION,
    event: 'article_view',
    guide: 'delivery-driver-starter-kit-ireland',
    at: '2026-09-16T17:00:00.000Z'
  });
  for (const forbidden of ['ip', 'userAgent', 'referrer', 'cookie', 'session', 'userId']) {
    assert.equal(Object.hasOwn(event, forbidden), false);
  }
});

test('outbound event records only partner, guide, monetisation state and time', () => {
  const event = outboundClickEvent({
    partner: 'sendcloud',
    guide: 'shipping-software-decision-tree-ireland',
    monetised: true
  }, new Date('2026-09-16T17:05:00Z'));
  assert.deepEqual(event, {
    schema: TELEMETRY_SCHEMA_VERSION,
    event: 'outbound_click',
    partner: 'sendcloud',
    guide: 'shipping-software-decision-tree-ireland',
    monetised: true,
    at: '2026-09-16T17:05:00.000Z'
  });
  assert.equal(telemetryLine(event), JSON.stringify(event));
});

test('invalid telemetry timestamps are rejected', () => {
  assert.throws(() => articleViewEvent('delivery-driver-starter-kit-ireland', 'not-a-date'), TypeError);
});
