# DROPi Delivery — Commerce Candidate Matrix

Last updated: 2026-09-17

This document is the canonical working register for products considered for direct sale through Shopify.

## Decision rule

A product can move to `APPROVED` only when expected unit profit is at least **EUR 2.00 after all known unavoidable direct order costs**.

Unknown mandatory cost means `PENDING`, never `APPROVED`.

Formula:

`expected_unit_profit = selling_price - supplier_cost - shipping_to_customer - payment/shopify_cost - customs_or_import_cost - other_unavoidable_direct_costs`

## Status definitions

- `CANDIDATE` — enough market/supplier evidence to investigate further.
- `PENDING` — staged in Shopify as DRAFT while one or more mandatory costs/compliance checks are unresolved.
- `APPROVED` — all mandatory checks completed and expected unit profit >= EUR 2.00.
- `REJECTED` — fails profit, suitability, compliance, fulfilment or customer-value threshold.

## Current candidates

| Product | Supplier path | Public supplier cost | Ireland market benchmark | Staged Shopify price | Status | Main blocker |
|---|---|---:|---:|---:|---|---|
| AirPro+ Portable Tyre Inflator with LED, SKU V0103048 | InnovaGoods / BigBuy via Spocket | EUR 12.84 observed public dropship cost | Same SKU observed around EUR 34.90 manufacturer / EUR 39.95 Irish retailer | EUR 32.90 | PENDING | Exact shipping to Ireland + returns + final landed cost |
| Universal Bike Phone Holder, silicone/alloy | Triton via Spocket | USD 8.05 (~EUR 7.02 at 2026-09-17 FX) | Comparable Irish listings roughly EUR 18-22, with lower outliers | EUR 18.90 | PENDING | Exact shipping to Ireland + supplier ship-from + returns |
| 20,000mAh Car Jump Starter, 400A listing | Puce Gaia via Spocket | USD 26.24 (~EUR 22.88 at 2026-09-17 FX) | Comparable Irish listings start around EUR 33 and extend materially higher | EUR 34.90 | PENDING | Lithium shipping, compliance evidence, returns, final landed cost |

## Watch list

| Product | Supplier path | Reason not staged yet |
|---|---|---|
| Morvelli PowerGen 20,000mAh power bank | Spocket / Periwinkle Eros | Public cost USD 25.84 but battery shipping/compliance and Ireland landed cost unresolved; retail competition is tight |
| DYMO LabelWriter 550 | Spocket / Ultramarine Dione | Large apparent spread but supplier listing indicates plug/adaptor configuration not yet shown suitable for Ireland; do not stage until region compatibility is proven |
| 70L insulated thermal delivery bag | UK dropship supplier | Very low public product cost, but UK-to-Ireland shipping/import treatment and exact comparable Irish retail benchmark need verification |
| Digital postal/parcel scale | EU supplier search | Ireland retail benchmarks exist; source with transparent EU stock and landed cost still needed |

## Rejection / hold principles

Do not approve a product merely because the supplier's suggested retail price creates a paper margin.

Reject or hold when any of these apply:

- shipping price to Ireland is unknown;
- supplier ship-from location is unknown and materially affects landed cost;
- batteries/electrical goods lack adequate compliance evidence;
- plug/voltage configuration is unsuitable for Ireland;
- customer return path is impractical or uneconomic;
- Irish market price makes the EUR 2 threshold unrealistic;
- supplier subscription cost would erase expected portfolio profit;
- product claims cannot be verified truthfully.

## Shopify staging rule

Candidate products may be created as `DRAFT` with `sourcing-pending` tags. They must remain unavailable for sale until the status becomes `APPROVED`.

Current staged draft products:

1. AirPro+ Portable Tyre Inflator with LED — `gid://shopify/Product/16617894969689`
2. Universal Bike Phone Holder — Sourcing Candidate — `gid://shopify/Product/16619601396057`
3. 20000mAh Car Jump Starter — Sourcing Candidate — `gid://shopify/Product/16619601625433`

## Current sourcing priority

1. Obtain supplier/account-level shipping to Ireland for the three staged drafts.
2. Prefer EU-stock suppliers because landed-cost uncertainty is lower.
3. Validate returns and product compliance before activation.
4. After approval, add supplier-origin images through Shopify CDN, finalise customer-facing copy, set inventory/fulfilment integration, and activate.
5. Route DROPi Delivery commercial CTAs to Shopify for approved direct-sale products; keep affiliate links as fallback where direct sale is not profitable or practical.
