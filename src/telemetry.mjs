import { articles } from './content-all.mjs';

const guideSlugs = new Set(articles.map((article) => article.slug));
const partners = new Set(['amazon', 'sendcloud', 'shipstation']);

export const TELEMETRY_SCHEMA_VERSION = 1;

export function normaliseGuideSlug(value) {
  return guideSlugs.has(value) ? value : 'unknown';
}

export function normalisePartner(value) {
  return partners.has(value) ? value : 'unknown';
}

function timestamp(value) {
  const date = value instanceof Date ? value : new Date(value || Date.now());
  if (Number.isNaN(date.getTime())) throw new TypeError('Invalid telemetry timestamp');
  return date.toISOString();
}

export function articleViewEvent(guide, at = new Date()) {
  return {
    schema: TELEMETRY_SCHEMA_VERSION,
    event: 'article_view',
    guide: normaliseGuideSlug(guide),
    at: timestamp(at)
  };
}

export function outboundClickEvent({ partner, guide, monetised }, at = new Date()) {
  return {
    schema: TELEMETRY_SCHEMA_VERSION,
    event: 'outbound_click',
    partner: normalisePartner(partner),
    guide: normaliseGuideSlug(guide),
    monetised: Boolean(monetised),
    at: timestamp(at)
  };
}

export function telemetryLine(event) {
  return JSON.stringify(event);
}
