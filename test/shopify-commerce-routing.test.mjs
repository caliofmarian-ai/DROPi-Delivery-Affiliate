import assert from 'node:assert/strict';
import test from 'node:test';

import { articlePage, outboundUrl, shopifyProductEnvKey } from '../src/site-all.mjs';

const article = {
  slug: 'portable-tyre-inflator-delivery-drivers',
  category: 'vehicle-van',
  title: 'Portable tyre inflator for delivery drivers',
  description: 'Test description.',
  published: '2026-09-17',
  updated: '2026-09-17',
  productQuery: 'portable tyre inflator',
  sections: [{ heading: 'What matters', paragraphs: ['Pressure and reliability.'] }]
};

const envKey = shopifyProductEnvKey(article.slug);

test('Shopify env key is deterministic and shell-safe', () => {
  assert.equal(envKey, 'SHOPIFY_PRODUCT_PORTABLE_TYRE_INFLATOR_DELIVERY_DRIVERS_URL');
});

test('product guide keeps affiliate fallback when no approved Shopify URL is configured', () => {
  const previous = process.env[envKey];
  delete process.env[envKey];
  try {
    const html = articlePage(article);
    assert.match(html, /Check Amazon\.ie options/);
    assert.doesNotMatch(html, /Buy from DROPi/);
    const result = outboundUrl('shopify', new URL(`https://example.test/go/shopify?product=${article.slug}&from=${article.slug}`));
    assert.equal(result, null);
  } finally {
    if (previous === undefined) delete process.env[envKey];
    else process.env[envKey] = previous;
  }
});

test('approved HTTPS Shopify URL switches the guide to DROPi-first direct sale while keeping comparison fallback', () => {
  const previous = process.env[envKey];
  process.env[envKey] = 'https://v8mkcz-i9.myshopify.com/products/test-product';
  try {
    const html = articlePage(article);
    assert.match(html, /Buy from DROPi/);
    assert.match(html, /Compare Amazon\.ie options/);
    assert.match(html, new RegExp(`/go/shopify\\?product=${article.slug}`));

    const result = outboundUrl('shopify', new URL(`https://example.test/go/shopify?product=${article.slug}&from=guide`));
    assert.equal(result.target, 'https://v8mkcz-i9.myshopify.com/products/test-product');
    assert.equal(result.from, 'guide');
    assert.equal(result.monetised, true);
  } finally {
    if (previous === undefined) delete process.env[envKey];
    else process.env[envKey] = previous;
  }
});

test('non-HTTPS direct-sale URL is rejected', () => {
  const previous = process.env[envKey];
  process.env[envKey] = 'http://example.test/not-allowed';
  try {
    const result = outboundUrl('shopify', new URL(`https://example.test/go/shopify?product=${article.slug}`));
    assert.equal(result, null);
    assert.doesNotMatch(articlePage(article), /Buy from DROPi/);
  } finally {
    if (previous === undefined) delete process.env[envKey];
    else process.env[envKey] = previous;
  }
});
