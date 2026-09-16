import { publicContactEmail } from './publisher-readiness.mjs';

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

function clean(value, maxLength) {
  const text = String(value || '').trim();
  return text && text.length <= maxLength ? text : '';
}

export function legalProviderDetails(env = process.env) {
  const name = clean(env.LEGAL_NAME, 160);
  const address = clean(env.LEGAL_ADDRESS, 320);
  const email = publicContactEmail(env);
  const registration = clean(env.BUSINESS_REGISTRATION, 120);
  const vatId = clean(env.VAT_ID, 80);
  return {
    name,
    address,
    email,
    registration,
    vatId,
    ready: Boolean(name && address && email)
  };
}

export function legalPageDefinition(env = process.env) {
  const details = legalProviderDetails(env);
  const identity = details.ready
    ? `<dl><dt>Service provider</dt><dd>${esc(details.name)}</dd><dt>Geographic address</dt><dd>${esc(details.address)}</dd><dt>Email</dt><dd><a class="text-link" href="mailto:${esc(details.email)}">${esc(details.email)}</a></dd>${details.registration ? `<dt>Business / register reference</dt><dd>${esc(details.registration)}</dd>` : ''}${details.vatId ? `<dt>VAT identification number</dt><dd>${esc(details.vatId)}</dd>` : ''}</dl>`
    : '<p>The legal service-provider identity is still being configured for the public commercial launch. DROPi Delivery will not invent a legal name, geographic address or registration number. The page remains excluded from search indexing until the required real-world details are configured.</p>';

  return {
    title: 'Legal Information — DROPi Delivery',
    description: 'Legal service-provider information for DROPi Delivery.',
    path: '/legal',
    robots: details.ready ? 'index,follow' : 'noindex,follow',
    body: `<section class="page-head"><div class="eyebrow">Legal information</div><h1>Service-provider details</h1><p>Information about the person or business responsible for the DROPi Delivery online service.</p></section><section class="section prose">${identity}<h2>Role of DROPi Delivery</h2><p>DROPi Delivery is an editorial publication and affiliate publisher. It does not act as the retailer, marketplace, carrier or software provider for third-party transactions reached through external links.</p><h2>Other notices</h2><p>See the <a class="text-link" href="/terms">Website Terms</a>, <a class="text-link" href="/privacy">Privacy notice</a>, <a class="text-link" href="/cookies">Cookie information</a> and <a class="text-link" href="/affiliate-disclosure">Affiliate disclosure</a>.</p></section>`
  };
}

export function augmentLegalSitemap(xml, origin, env = process.env) {
  if (typeof xml !== 'string' || !xml.includes('</urlset>')) return xml;
  if (!legalProviderDetails(env).ready) return xml;
  const base = String(origin || '').replace(/\/$/, '');
  const entry = `<url><loc>${base.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}/legal</loc></url>`;
  return xml.replace('</urlset>', `${entry}</urlset>`);
}
