# DROPi Delivery — Commerce Candidate Matrix

Last updated: 2026-09-17

Canonical working register for products considered for direct sale through Shopify.

## Decision rule

A product can move to `APPROVED` only when expected unit contribution is at least **EUR 2.00 after all known unavoidable direct order costs**.

`expected_unit_contribution = selling_price - supplier_cost - shipping_to_customer - payment/shopify_cost - customs_or_import_cost - other_unavoidable_direct_costs`

Unknown mandatory cost = `PENDING`, never `APPROVED`. Fixed monthly Shopify/app subscriptions are tracked separately in monthly operating profit. See `docs/PROFIT_FORMULA.md`.

## Status definitions

- `CANDIDATE` — enough market/supplier evidence to investigate further.
- `PENDING` — staged in Shopify as DRAFT while mandatory cost/compliance checks remain unresolved.
- `APPROVED` — all mandatory checks completed and expected unit contribution >= EUR 2.00.
- `REJECTED` — fails profit, suitability, compliance, fulfilment or customer-value threshold.

## Shopify / Syncee integration evidence

Shopify currently shows:

- `Syncee AI Dropship` installed;
- an active third-party fulfilment location named `Syncee`;
- that location can fulfil online orders;
- no active inventory currently attached to the Syncee location.

Interpretation: Shopify/Syncee is connected, but no supplier catalog has yet been imported into active inventory.

Syncee public pricing currently allows Free-plan product discovery/wholesale-price inspection; paid Marketplace plans are needed for automated import/management. Do not start a paid plan until enough profitable SKUs justify the fixed cost.

Official references:
- https://syncee.com/pricing
- https://help.syncee.com/en/articles/8885830-pricing-and-plans
- https://help.syncee.com/en/articles/15643862-getting-started-with-syncee-on-shopify-complete-guide
- https://help.syncee.com/en/articles/8925120-shipping-information

## Current staged Shopify drafts

| # | Product | Supplier path | Public supplier cost | Ireland benchmark | Staged price | Status / main blocker |
|---|---|---|---:|---:|---:|---|
| 1 | AirPro+ Portable Tyre Inflator with LED, SKU V0103048 | InnovaGoods / BigBuy via Spocket | EUR 12.84 observed | Same SKU ~EUR 34.90 manufacturer / ~EUR 39.95 Irish retailer | EUR 32.90 | PENDING — exact Ireland shipping, returns, landed cost |
| 2 | Universal Bike Phone Holder | Triton via Spocket | USD 8.05 (~EUR 7.02 at 2026-09-17 FX) | comparable listings ~EUR 18-22 with lower outliers | EUR 18.90 | PENDING — Ireland shipping, ship-from, returns |
| 3 | 20,000mAh Car Jump Starter, 400A listing | Puce Gaia via Spocket | USD 26.24 (~EUR 22.88) | comparables start ~EUR 33 and extend higher | EUR 34.90 | PENDING — lithium shipping/compliance/returns |
| 4 | DYMO LabelManager 420P | Tormino, Netherlands | public EUR 195.99; entry dropship discount publicly 5% | Klarna benchmark ~EUR 234.99 | EUR 229.90 | PENDING — business-account eligibility, checkout/VAT, returns |
| 5 | 4x6 Direct Thermal Shipping Label Printer | CJdropshipping | USD 44.24-50.35; UK-power variant listed | comparable 4x6 printers from ~EUR 79.90 | EUR 69.90 | PENDING — CJ authorization, warehouse, Ireland shipping, VAT/import, returns |
| 6 | Waterproof Bicycle Bag 5-12L | CJdropshipping | USD 4.02-10.45 depending size/material | waterproof frame bags commonly ~EUR 29-41; low outlier ~EUR 11.94 | EUR 24.90 | PENDING — exact 12L cost, warehouse, Ireland shipping, returns |
| 7 | Foldable Car Boot Organiser 58cm | CJdropshipping | USD 5.97 | useful comparables ~EUR 25-50; low Temu/Shein outliers ~EUR 5-10 | EUR 19.90 | PENDING — warehouse, Ireland shipping, returns, final landed cost |

Shopify GIDs:

1. AirPro+ — `gid://shopify/Product/16617894969689`
2. Universal Bike Phone Holder — `gid://shopify/Product/16619601396057`
3. Car Jump Starter — `gid://shopify/Product/16619601625433`
4. DYMO LabelManager 420P — `gid://shopify/Product/16619611455833`
5. 4x6 Direct Thermal Shipping Label Printer — `gid://shopify/Product/16619613978969`
6. Waterproof Bicycle Bag 5-12L — `gid://shopify/Product/16619617157465`
7. Foldable Car Boot Organiser 58cm — `gid://shopify/Product/16619617190233`

All seven products remain `DRAFT`. No candidate may be published merely because its paper spread looks attractive.

## Screening notes

### DYMO LabelManager 420P

Public Tormino screening inputs:

- supplier listing: EUR 195.99 incl. VAT;
- advertised entry dropship discount: 5%;
- modeled product cost: ~EUR 186.19;
- Ireland standard parcel shipping: EUR 9.95;
- neutral packaging: EUR 0.50;
- staged retail price: EUR 229.90;
- conservative Shopify standard-card fee with stated Irish VAT on processing fee: ~EUR 5.96;
- modeled unit contribution: ~EUR 27.30.

This is screening evidence only, not final landed cost.

Tormino sources:
- https://tormino.com/pages/dropshipping
- https://tormino.com/pages/commercial-1
- https://tormino.com/pages/shipping-delivery

### CJ 4x6 thermal printer

At the current 2026-09-17 USD/EUR conversion, the maximum public product price of USD 50.35 is about EUR 43.92.

At staged price EUR 69.90, the conservative Shopify standard-card screening fee is about EUR 2.03. That leaves roughly EUR 21.95 for shipping/other direct costs while preserving EUR 2 contribution, or roughly EUR 18.95 if the temporary EUR 3 low-value import duty applies.

This is why the printer remains a stronger candidate than very low-value commodity accessories.

## CJdropshipping channel

Shopify app inspection shows the official `CJdropshipping: Much Faster` app:

- has no failed installation requirements for this shop;
- is not currently installed;
- is free to add, although product/shipping/service charges may apply.

Public CJ evidence also shows a USD 0/month Free plan and allows registration by an eligible natural person, legal entity or organization. Exact warehouse inventory and Ireland shipping must be verified per SKU after authorization. Do not treat a displayed `Shipping Cost: 0.00` on unauthenticated product pages as free shipping; the public pages explicitly require sign-in for route calculation.

Official references:
- https://apps.shopify.com/cucheng
- https://www.cjdropshipping.com/integrations/shopify
- https://www.cjdropshipping.com/prime
- https://cjdropshipping.com/user-agreement/en

Promising public-price categories currently include bike bags/holders, tyre inflators, car organisers and 4x6 label printers.

## Rejected / hold items

| Product / route | Status | Reason |
|---|---|---|
| CJ 50kg/10g hanging scale SKU `CJJZGJJY00017-50KG 10G` | REJECTED direct-sale | CJ public product price USD 4.68 before shipping, while Klarna currently shows an Ireland offer around EUR 3.97; no viable direct-sale advantage |
| CJ 11-14L insulated lunch bags | HOLD for courier use | too small to market truthfully as main food-delivery courier bags; may be useful later as generic lunch/commuter products |
| 70L insulated thermal bag via WholesalePA UK | REJECTED route | supplier delivery coverage is UK addresses only |
| DYMO LabelWriter 550 via Tormino | REJECTED route | current Tormino price above a current Ireland benchmark; no price advantage |
| Mirage / Simson cheap bike phone holders via Tormino | HOLD | EUR 9.95 Ireland shipping absorbs too much margin for a single cheap item |
| Morvelli 20,000mAh power bank via Spocket | HOLD | battery shipping/compliance and landed cost unresolved; retail competition tight |

## Supplier strategy

### Syncee
Primary connected marketplace. Search `Ship from: EU` + `Shipping to: Ireland`. Use the Free plan for research; do not upgrade until enough SKUs justify recurring cost.

### CJdropshipping
Second sourcing path with no required monthly subscription at Free tier. Good paper prices, but exact Ireland shipping/warehouse availability is currently the gating evidence. Merchant permission is required to install/authorize the Shopify app.

### Tormino
Netherlands B2B/dropship supplier. Best suited to higher-value items or bundles because Ireland standard parcel shipping is EUR 9.95 plus EUR 0.50 neutral packaging. Its business-account and B2B-return requirements must be acceptable before use.

### Spocket / BigBuy paths
Keep selectively for SKUs with strong spread. Avoid taking on a paid recurring app cost until the portfolio can cover it.

## Rejection / hold principles

Reject or hold when any of the following applies:

- Ireland shipping price is unknown and could erase the EUR 2 threshold;
- ship-from region is unknown and materially affects landed cost;
- batteries/electrical goods lack adequate compliance evidence;
- plug/voltage configuration is unsuitable for Ireland;
- customer return path is impractical or uneconomic;
- current Ireland price benchmark makes the EUR 2 threshold unrealistic;
- supplier/app subscription cost would erase portfolio operating profit;
- product claims cannot be verified truthfully.

## Current sourcing priority

1. Use connected Syncee to inspect EU-stock products shipping to Ireland and capture wholesale + shipping costs.
2. Keep the seven Shopify candidates DRAFT until direct-cost evidence is complete.
3. Install/authorize CJ only when merchant approval is available; then resolve exact Ireland shipping and warehouse inventory for the three CJ drafts first.
4. Prefer non-battery/non-regulated accessories while the store is validating fulfilment economics.
5. Validate returns and product compliance before activation.
6. After approval, add supplier-authorized images through Shopify CDN, finalise customer-facing copy, set inventory/fulfilment integration, then activate.
7. Route DROPi Delivery CTAs to Shopify only for `APPROVED` direct-sale products; keep affiliate links as fallback where direct sale is not profitable or practical.
