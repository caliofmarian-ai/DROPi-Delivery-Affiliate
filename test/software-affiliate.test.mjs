import test from 'node:test';
import assert from 'node:assert/strict';
import { outboundUrl } from '../src/site.mjs';

function restore(name, value) {
  if (value === undefined) delete process.env[name];
  else process.env[name] = value;
}

test('Sendcloud redirect is non-monetised until approved URL is configured', () => {
  const before = process.env.SENDCLOUD_AFFILIATE_URL;
  try {
    delete process.env.SENDCLOUD_AFFILIATE_URL;
    const result = outboundUrl('sendcloud', new URL('https://example.test/go/sendcloud?from=software-guide'));
    assert.equal(result.monetised, false);
    assert.equal(result.target, 'https://www.sendcloud.com/');
  } finally {
    restore('SENDCLOUD_AFFILIATE_URL', before);
  }
});

test('Sendcloud redirect uses exact approved URL when configured', () => {
  const before = process.env.SENDCLOUD_AFFILIATE_URL;
  try {
    process.env.SENDCLOUD_AFFILIATE_URL = 'https://example.partnerstack.test/sendcloud-ref';
    const result = outboundUrl('sendcloud', new URL('https://example.test/go/sendcloud?from=software-guide'));
    assert.equal(result.monetised, true);
    assert.equal(result.target, 'https://example.partnerstack.test/sendcloud-ref');
    assert.equal(result.from, 'software-guide');
  } finally {
    restore('SENDCLOUD_AFFILIATE_URL', before);
  }
});

test('ShipStation redirect is non-monetised until approved URL is configured', () => {
  const before = process.env.SHIPSTATION_AFFILIATE_URL;
  try {
    delete process.env.SHIPSTATION_AFFILIATE_URL;
    const result = outboundUrl('shipstation', new URL('https://example.test/go/shipstation?from=software-guide'));
    assert.equal(result.monetised, false);
    assert.equal(result.target, 'https://www.shipstation.com/en-gb/');
  } finally {
    restore('SHIPSTATION_AFFILIATE_URL', before);
  }
});

test('ShipStation redirect uses exact approved URL when configured', () => {
  const before = process.env.SHIPSTATION_AFFILIATE_URL;
  try {
    process.env.SHIPSTATION_AFFILIATE_URL = 'https://example.cj.test/shipstation-ref';
    const result = outboundUrl('shipstation', new URL('https://example.test/go/shipstation?from=software-guide'));
    assert.equal(result.monetised, true);
    assert.equal(result.target, 'https://example.cj.test/shipstation-ref');
    assert.equal(result.from, 'software-guide');
  } finally {
    restore('SHIPSTATION_AFFILIATE_URL', before);
  }
});
