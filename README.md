# DROPi Delivery Affiliate

DROPi Delivery is an inventory-free editorial commerce business for delivery drivers, couriers and small ecommerce operators, initially focused on Ireland and Europe.

## What is already implemented

- Fast Node.js website with no runtime dependencies.
- 52 original commercial-intent guides covering driver gear, vehicles, bike/e-bike delivery, food delivery and ecommerce shipping.
- SEO essentials: canonical URLs, crawlable category hubs, Open Graph metadata, Article/Breadcrumb/Collection structured data, sitemap with `lastmod`, robots.txt and an Atom feed.
- Optional Google Search Console and Bing Webmaster Tools verification metadata supplied only through deployment variables.
- Transparent affiliate disclosure and privacy-first launch configuration.
- Affiliate-ready outbound routing for Amazon.ie, Sendcloud and ShipStation.
- Privacy-first request-level commercial measurement for guide views and outbound clicks, with no application-level user identifier or tracking cookie.
- Railway configuration and health endpoint.
- Node test suite validating content, disclosure, outbound-link behaviour, crawl policy, search-discovery metadata and telemetry constraints.

## Business rule

Editorial usefulness comes first. DROPi does not manufacture, stock or fulfil the products described here. Revenue is intended to come from disclosed affiliate/referral commissions.

## Run locally

```bash
npm test
npm run check
npm start
```

Open `http://localhost:3000`.

## Configure deployment

Copy `.env.example` to `.env` locally, or set variables in Railway:

- `SITE_URL` — final canonical public URL.
- `GOOGLE_SITE_VERIFICATION` — Search Console HTML meta verification token, when a final domain is ready.
- `BING_SITE_VERIFICATION` — Bing Webmaster Tools `msvalidate.01` verification token, when a final domain is ready.
- `AMAZON_IE_ASSOC_TAG` — only after Amazon.ie Associates approval.
- `SENDCLOUD_AFFILIATE_URL` — unique approved Sendcloud tracking URL.
- `SHIPSTATION_AFFILIATE_URL` — unique approved ShipStation/CJ tracking URL.

Do not invent affiliate IDs or verification tokens. Until a partner variable is configured, DROPi routes to the provider without claiming a tracked commission.

## Deploy and measure

See `docs/DEPLOYMENT_RAILWAY.md` for deployment/search activation and `docs/MEASUREMENT.md` for the privacy-first commercial event contract.

## Commercial plan

See `docs/BUSINESS_MODEL.md`, `docs/AFFILIATE_PROGRAMS.md`, `docs/CONTENT_ROADMAP.md` and `docs/COMPLIANCE.md`.
