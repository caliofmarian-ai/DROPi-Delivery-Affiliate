import test from 'node:test';
import assert from 'node:assert/strict';
import { disclosurePage, outboundUrl } from '../src/site-all.mjs';

test('Amazon route adds an Associates tag only when configured', () => {
  const previous = process.env.AMAZON_IE_ASSOC_TAG;
  try {
    process.env.AMAZON_IE_ASSOC_TAG = 'dropi-ci-test-tag';
    const result = outboundUrl('amazon', new URL('https://example.test/go/amazon?query=usb+c+car+charger&from=usb-guide'));
    const target = new URL(result.target);
    assert.equal(result.monetised, true);
    assert.equal(target.hostname, 'www.amazon.ie');
    assert.equal(target.searchParams.get('tag'), 'dropi-ci-test-tag');
    assert.equal(target.searchParams.get('k'), 'usb c car charger');
  } finally {
    if (previous === undefined) delete process.env.AMAZON_IE_ASSOC_TAG;
    else process.env.AMAZON_IE_ASSOC_TAG = previous;
  }
});

test('Amazon activation renders the required Associate statement', () => {
  const previous = process.env.AMAZON_IE_ASSOC_TAG;
  try {
    process.env.AMAZON_IE_ASSOC_TAG = 'dropi-ci-test-tag';
    const html = disclosurePage();
    assert.match(html, /As an Amazon Associate I earn from qualifying purchases\./);
  } finally {
    if (previous === undefined) delete process.env.AMAZON_IE_ASSOC_TAG;
    else process.env.AMAZON_IE_ASSOC_TAG = previous;
  }
});
