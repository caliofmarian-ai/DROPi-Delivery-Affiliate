import test from 'node:test';
import assert from 'node:assert/strict';
import { articles } from '../src/content-all.mjs';
import { atomFeed, homePage } from '../src/site-all.mjs';

function restoreEnv(name, previous) {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

test('pages advertise the Atom feed', () => {
  const html = homePage();
  assert.match(html, /rel="alternate" type="application\/atom\+xml"/);
  assert.match(html, /href="http:\/\/localhost:3000\/feed.xml"/);
});

test('search verification tags render only when environment values are configured', () => {
  const previousGoogle = process.env.GOOGLE_SITE_VERIFICATION;
  const previousBing = process.env.BING_SITE_VERIFICATION;
  try {
    delete process.env.GOOGLE_SITE_VERIFICATION;
    delete process.env.BING_SITE_VERIFICATION;
    const withoutTokens = homePage();
    assert.doesNotMatch(withoutTokens, /google-site-verification/);
    assert.doesNotMatch(withoutTokens, /msvalidate\.01/);

    process.env.GOOGLE_SITE_VERIFICATION = 'google-test-token';
    process.env.BING_SITE_VERIFICATION = 'bing-test-token';
    const withTokens = homePage();
    assert.match(withTokens, /name="google-site-verification" content="google-test-token"/);
    assert.match(withTokens, /name="msvalidate\.01" content="bing-test-token"/);
  } finally {
    restoreEnv('GOOGLE_SITE_VERIFICATION', previousGoogle);
    restoreEnv('BING_SITE_VERIFICATION', previousBing);
  }
});

test('Atom feed publishes the latest guide entries with canonical URLs', () => {
  const previousSiteUrl = process.env.SITE_URL;
  try {
    process.env.SITE_URL = 'https://delivery.example';
    const xml = atomFeed();
    assert.match(xml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
    assert.match(xml, /xmlns="http:\/\/www\.w3\.org\/2005\/Atom"/);
    assert.match(xml, /<link rel="self" type="application\/atom\+xml" href="https:\/\/delivery\.example\/feed\.xml"\/>/);
    assert.ok((xml.match(/<entry>/g) || []).length > 0);
    assert.ok((xml.match(/<entry>/g) || []).length <= 20);
    assert.match(xml, /<summary>/);
    assert.ok(articles.length >= 20);
  } finally {
    restoreEnv('SITE_URL', previousSiteUrl);
  }
});
