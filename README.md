# DROPi Delivery Affiliate

DROPi Delivery is an inventory-free editorial commerce business for delivery drivers, couriers and small ecommerce operators, initially focused on Ireland and Europe.

## What is already implemented

- Fast Node.js website with no runtime dependencies.
- 12 original launch guides covering driver gear, vehicles, bike/e-bike delivery, food delivery and ecommerce shipping.
- SEO essentials: canonical URLs, Open Graph metadata, Article JSON-LD, sitemap and robots.txt.
- Transparent affiliate disclosure and privacy-first launch configuration.
- Affiliate-ready outbound routing for Amazon.ie, Sendcloud and ShipStation.
- Non-personal click events written to hosting logs for basic commercial measurement.
- Railway configuration and health endpoint.
- Node test suite validating content count, disclosure, outbound-link behaviour and sitemap coverage.

## Business rule

Editorial usefulness comes first. DROPi does not manufacture, stock or fulfil the products described here. Revenue is intended to come from disclosed affiliate/referral commissions.

## Run locally

```bash
npm test
npm run check
npm start
```

Open `http://localhost:3000`.

## Configure monetisation

Copy `.env.example` to `.env` locally, or set variables in Railway:

- `SITE_URL` — final canonical public URL.
- `AMAZON_IE_ASSOC_TAG` — only after Amazon.ie Associates approval.
- `SENDCLOUD_AFFILIATE_URL` — unique approved Sendcloud tracking URL.
- `SHIPSTATION_AFFILIATE_URL` — unique approved ShipStation/CJ tracking URL.

Do not invent affiliate IDs. Until a variable is configured, DROPi routes to the provider without claiming a tracked commission.

## Deploy

See `docs/DEPLOYMENT_RAILWAY.md`.

## Commercial plan

See `docs/BUSINESS_MODEL.md`, `docs/AFFILIATE_PROGRAMS.md`, `docs/CONTENT_ROADMAP.md` and `docs/COMPLIANCE.md`.
