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
| DYMO LabelManager 420P | Tormino, Netherlands | Public retail EUR 195.99; entry dropship account publicly states 5% discount, final business checkout still unverified | Klarna Ireland benchmark observed EUR 234.99 | EUR 229.90 | PENDING | Tormino business account eligibility + exact discounted checkout/VAT + dropship returns |
| 4x6 Direct Thermal Shipping Label Printer | CJdropshipping | USD 44.24-50.35 public product range, exact UK-power variant price not yet verified | Comparable 4x6 thermal printer benchmark observed from EUR 79.90 | EUR 69.90 | PENDING | CJ installation/account authorization + exact Ireland shipping + warehouse + VAT/import treatment |

### DYMO LabelManager 420P screening model

Using public Tormino inputs only, before account-level verification:

- public supplier listing: EUR 195.99 incl. VAT;
- advertised entry dropship discount: 5%;
- modeled supplier product cost: ~EUR 186.19;
- Ireland standard parcel shipping: EUR 9.95;
- neutral packaging: EUR 0.50/item;
- staged retail price: EUR 229.90;
- conservative Shopify standard-card fee including stated Irish VAT on processing fee: ~EUR 5.96;
- modeled unit contribution: ~EUR 27.30.

This is **screening evidence only**, not an approved landed cost. Final checkout/business pricing and customer-return economics must be verified before activation.

Official Tormino sources:
- https://tormino.com/collections/label-makers
- https://tormino.com/pages/dropshipping
- https://tormino.com/pages/shipping-delivery

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

## Alternative sourcing channel — CJdropshipping

Current public evidence:

- official Shopify app is free to install;
- CJ Free plan is USD 0/month and supports listing/store authorization;
- CJ user agreement permits a natural person, legal entity or other eligible organization to register;
- Shopify store check shows the CJ app has no failed installation requirements for this shop;
- app is not currently installed;
- CJ advertises global and EU warehouse/fulfilment capability, but warehouse availability must be verified per SKU;
- product pages expose base product pricing publicly, while shipping, exact warehouse inventory and route-to-Ireland often require sign-in.

Promising current product examples:

- aluminum rotating bicycle phone holder: USD 4.40 base public price;
- bicycle navigation phone holders: roughly USD 3.00-4.18 public range;
- wireless tyre inflators: roughly USD 11.61-13.27 public range;
- 4x6 direct thermal shipping-label printer: USD 44.24-50.35 public range, with UK power variant listed.

Do not install CJ solely because these paper spreads look attractive. First retain enough promising SKUs to justify adding another supplier app; after install, verify exact shipping/warehouse/destination costs before approval.

Official references:
- https://apps.shopify.com/cucheng
- https://www.cjdropshipping.com/integrations/shopify
- https://www.cjdropshipping.com/prime
- https://cjdropshipping.com/user-agreement/en

## Alternative EU supplier — Tormino

Tormino is a Netherlands-based B2B/dropshipping supplier with a Dutch warehouse and a very large catalog. Public 2026 information states:

- neutral dropshipping is available;
- no minimum order quantity;
- products ship from the Netherlands;
- Ireland standard parcel shipping is EUR 9.95 and listed delivery is 3-5 business days;
- entry dropshipping discount is 5%;
- neutral packaging costs EUR 0.50 per item;
- automated API/datafeed options exist;
- dropshipping/B2B orders are excluded from standard returns under its B2B terms;
- dropshipping account application requests company/business details.

This is potentially useful for higher-value products and bundles. Cheap single items are usually unattractive because EUR 9.95 Ireland shipping absorbs too much margin.

Official references:
- https://tormino.com/pages/dropshipping
- https://tormino.com/pages/commercial-1
- https://tormino.com/pages/shipping-delivery

## Other watch / hold items

| Product | Supplier path | Status / reason |
|---|---|---|
| Morvelli PowerGen 20,000mAh power bank | Spocket / Periwinkle Eros | HOLD — public cost USD 25.84 but battery shipping/compliance and Ireland landed cost unresolved; retail competition is tight |
| DYMO LabelWriter 550 | Tormino / other EU sourcing | REJECT current Tormino path — Tormino public price is above a current Irish benchmark for the 550 Turbo; no pricing advantage demonstrated |
| 70L insulated thermal delivery bag | WholesalePA UK | REJECTED for current Ireland route — supplier states delivery coverage is UK addresses only |
| Digital postal/parcel scale | EU supplier search | CANDIDATE — Ireland retail benchmarks exist; transparent EU-stock landed cost still needed |
| Mirage / Simson low-cost bike phone holders | Tormino | HOLD — EUR 9.95 Ireland shipping makes single-item economics weak unless bundled |

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
4. DYMO LabelManager 420P — EU Sourcing Candidate — `gid://shopify/Product/16619611455833`
5. 4x6 Direct Thermal Shipping Label Printer — CJ Sourcing Candidate — `gid://shopify/Product/16619613978969`

## Current sourcing priority

1. In the connected Syncee retailer interface, filter `Ship from: EU` and `Shipping to: Ireland`, then capture wholesale price and supplier shipping for priority products.
2. Retain CJ as the zero-fixed-cost second sourcing path; install only when the candidate backlog justifies the additional app and permission grant.
3. Obtain supplier/account-level shipping to Ireland for the three staged Spocket drafts.
4. Keep Tormino as a high-value/bundle candidate, not a cheap-accessory source.
5. Prefer EU-stock suppliers because landed-cost uncertainty is lower.
6. Validate returns and product compliance before activation.
7. After approval, add supplier-authorized images through Shopify CDN, finalise customer-facing copy, set inventory/fulfilment integration, and activate.
8. Route DROPi Delivery commercial CTAs to Shopify for approved direct-sale products; keep affiliate links as fallback where direct sale is not profitable or practical.
