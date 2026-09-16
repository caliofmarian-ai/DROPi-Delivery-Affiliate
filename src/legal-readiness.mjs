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

export function logRetentionDays(env = process.env) {
  const raw = String(env.LOG_RETENTION_DAYS || '').trim();
  if (!/^\d{1,3}$/.test(raw)) return 0;
  const value = Number.parseInt(raw, 10);
  return value >= 1 && value <= 365 ? value : 0;
}

export function privacyReadiness(env = process.env) {
  const provider = legalProviderDetails(env);
  const retentionDays = logRetentionDays(env);
  return {
    provider,
    retentionDays,
    ready: Boolean(provider.ready && retentionDays)
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

export function enhancePrivacyNotice(html, env = process.env) {
  if (typeof html !== 'string' || !html.includes('<html')) return html;
  if (!/rel="canonical" href="[^"]*\/privacy"/.test(html)) return html;

  const state = privacyReadiness(env);
  const provider = state.provider;
  const controller = provider.ready
    ? `<h2>Data controller</h2><p>The controller for DROPi Delivery is ${esc(provider.name)}, established at ${esc(provider.address)}. Privacy enquiries can be sent to <a class="text-link" href="mailto:${esc(provider.email)}">${esc(provider.email)}</a>.</p>`
    : '<h2>Data controller</h2><p>The controller identity and public contact details are still being configured for the commercial launch. This page is therefore a pre-launch privacy notice and is excluded from search indexing until the real controller details are supplied.</p>';

  const retention = state.retentionDays
    ? `<h2>Retention</h2><p>DROPi application and hosting logs used for the purposes described here are configured for a maximum routine retention of ${state.retentionDays} day${state.retentionDays === 1 ? '' : 's'}, unless a shorter period applies or specific records must be preserved longer for a documented security, legal or dispute reason.</p>`
    : '<h2>Retention</h2><p>The final log-retention period is still being verified against the active hosting plan. DROPi will not publish an invented duration. This notice remains marked pre-launch until the production retention value is configured.</p>';

  const supplement = `${controller}<h2>Purposes and legal basis</h2><p>DROPi processes minimal request and operational information to deliver and secure the website, diagnose failures, understand which editorial guides are requested and measure whether readers use commercial outbound links. The working legal basis for this limited processing is legitimate interests in operating, securing and improving the publication, with data minimisation and no application-level user identifier as safeguards.</p><h2>Recipients and international processing</h2><p>Railway provides the hosting infrastructure and may process technical request and service-log information as part of operating and securing the service. Railway's published data-processing terms describe processing operations that can involve the United States and transfer safeguards such as the EU-U.S. Data Privacy Framework where applicable and the EU Standard Contractual Clauses. When you intentionally follow an external retailer, marketplace or software-provider link, that destination processes information under its own notices.</p>${retention}<h2>Your data-protection rights</h2><p>Depending on the circumstances, data-protection law may give you rights of access, rectification, erasure, restriction and objection, as well as the right to complain to the Irish Data Protection Commission. Because DROPi deliberately avoids an application-level account, cookie or user identifier, some request-level events may not be technically attributable to a particular person.</p>`;

  let result = html.replace(
    '<section class="section prose">',
    `<section class="section prose">${supplement}`
  );

  if (!state.ready) {
    result = result.replace(
      '<meta name="robots" content="index,follow">',
      '<meta name="robots" content="noindex,follow">'
    );
  }
  return result;
}

export function augmentLegalSitemap(xml, origin, env = process.env) {
  if (typeof xml !== 'string' || !xml.includes('</urlset>')) return xml;
  if (!legalProviderDetails(env).ready) return xml;
  const base = String(origin || '').replace(/\/$/, '');
  const entry = `<url><loc>${base.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}/legal</loc></url>`;
  return xml.replace('</urlset>', `${entry}</urlset>`);
}
