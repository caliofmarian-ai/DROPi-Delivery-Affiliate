# DROPi Delivery — Commerce Candidate Matrix

Last updated: 2026-09-17

This document is the canonical working register for products considered for direct sale through Shopify.

## Decision rule

A product can move to `APPROVED` only when expected unit contribution is at least **EUR 2.00 after all known unavoidable direct order costs**.

Unknown mandatory cost means `PENDING`, never `APPROVED`.

Formula:

`expected_unit_contribution = selling_price - supplier_cost - shipping_to_customer - payment/shopify_cost - customs_or_import_cost - other_unavoidable_direct_costs`

Fixed monthly Shopify/app subscriptions are tracked separately in monthly operating profit. See `docs/PROFIT_FORMULA.md`.

## Status definitions

- `CANDIDATE` — enough market/supplier evidence to investigate further.
- `PENDING` — staged in Shopify as DRAFT while one or more mandatory costs/compliance checks are unresolved.
- `APPROVED` — all mandatory checks completed and expected unit contribution >= EUR 2.00.
- `REJECTED` — fails profit, suitability, compliance, fulfilment or customer-value threshold.

## Current Shopify / Syncee integration evidence

Shopify currently shows:

- Syncee AI Dropship installed;
- an active Shopify fulfilment location named `Syncee`;
- the location is a third-party fulfilment service and can fulfil online orders;
- no active inventory is currently attached to the Syncee location.

Interpretation: the Shopify/Syncee connection exists, but no supplier product catalog has yet been imported into active inventory.

Current Syncee public pricing says the Free plan can be used to explore products and see wholesale prices. Paid Marketplace plans are required for importing/managing products automatically. Do not start a paid plan until the candidate catalog justifies its fixed cost.

Official references:
- https://syncee.com/pricing
- https://help.syncee.com/en/articles/8885830-pricing-and-plans
- https://help.syncee.com/en/articles/15643862-getting-started-with-syncee-on-shopify-complete-guide

## Current candidates

| Product | Supplier path | Public supplier cost | Ireland market benchmark | Staged Shopify price | Status | Main blocker |
|---|---|---:|---:|---:|---|---|
| AirPro+ Portable Tyre Inflator with LED, SKU V0103048 | InnovaGoods / BigBuy via Spocket | EUR 12.84 observed public dropship cost | Same SKU observed around EUR 34.90 manufacturer / EUR 39.95 Irish retailer | EUR 32.90 | PENDING | Exact shipping to Ireland + returns + final landed cost |
| Universal Bike Phone Holder, silicone/alloy | Triton via Spocket | USD 8.05 (~EUR 7.02 at 2026-09-17 FX) | Comparable Irish listings roughly EUR 18-22, with lower outliers | EUR 18.90 | PENDING | Exact shipping to Ireland + supplier ship-from + returns |
| 20,000mAh Car Jump Starter, 400A listing | Puce Gaia via Spocket | USD 26.24 (~EUR 22.88 at 2026-09-17 FX) | Comparable Irish listings start around EUR 33 and extend materially higher | EUR 34.90 | PENDING | Lithium shipping, compliance evidence, returns, final landed cost |

## Syncee supplier/product watch list

The public Syncee Marketplace confirms relevant products exist, but unauthenticated public pages hide wholesale prices. Use the connected Syncee retailer account to inspect price + `Shipping to Ireland` before staging.

Priority searches:

- portable tyre inflators / 150 PSI cordless air compressors;
- universal 360-degree bike phone holders;
- thermal/label printers from EU suppliers such as Tormino or XuPe GROUP Kft.;
- parcel scales and dispatch tools;
- delivery bags and rain/visibility equipment from EU-stock suppliers.

Syncee requires supplier-specific shipping verification: Syncee itself does not ship products and each supplier controls destinations, shipping price and delivery time.

Official shipping guidance:
https://help.syncee.com/en/articles/8925120-shipping-information

## Alternative EU supplier — Tormino

Tormino is a Netherlands-based B2B/dropshipping supplier with a Dutch warehouse and a very large catalog. Public 2026 information states:

- neutral dropshipping is available;
- no minimum order quantity;
- products ship from the Netherlands;
- European delivery is generally 1-4 business days depending on destination;
- entry dropshipping discount is 5%;
- neutral packaging costs EUR 0.50 per item;
- automated API/datafeed options exist;
- dropshipping/B2B orders are excluded from standard returns under its B2B terms;
- dropshipping account application requests company/business details.

This is a potentially valuable EU route, but do not activate it until operator/business status and customer-return economics are suitable.

Official references:
- https://tormino.com/pages/dropshipping
- https://tormino.com/pages/commercial-1

## Other watch / hold items

| Product | Supplier path | Status / reason |
|---|---|---|
| Morvelli PowerGen 20,000mAh power bank | Spocket / Periwinkle Eros | HOLD — public cost USD 25.84 but battery shipping/compliance and Ireland landed cost unresolved; retail competition is tight |
| DYMO LabelWriter 550 | Spocket / Ultramarine Dione | HOLD — apparent spread exists, but region/plug suitability and Ireland landed cost must be proven |
| 70L insulated thermal delivery bag | WholesalePA UK | REJECTED for current Ireland route — supplier states delivery coverage is UK addresses only |
| Digital postal/parcel scale | EU supplier search | CANDIDATE — Ireland retail benchmarks exist; transparent EU-stock landed cost still needed |

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

1. In the connected Syncee retailer interface, filter `Ship from: EU` and `Shipping to: Ireland`, then capture wholesale price and supplier shipping for priority products.
2. Obtain supplier/account-level shipping to Ireland for the three staged Spocket drafts.
3. Prefer EU-stock suppliers because landed-cost uncertainty is lower.
4. Validate returns and product compliance before activation.
5. After approval, add supplier-authorized images through Shopify CDN, finalise customer-facing copy, set inventory/fulfilment integration, and activate.
6. Route DROPi Delivery commercial CTAs to Shopify for approved direct-sale products; keep affiliate links as fallback where direct sale is not profitable or practical.
