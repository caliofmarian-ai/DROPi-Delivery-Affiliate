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
| 1 | AirPro+ Portable Tyre Inflator with LED, SKU V0103048 | InnovaGoods / BigBuy via Spocket | EUR 12.84 observed | same SKU ~EUR 34.90 manufacturer / ~EUR 39.95 Irish retailer | EUR 32.90 | PENDING — exact Ireland shipping, returns, landed cost |
| 2 | Universal Bike Phone Holder | Triton via Spocket | USD 8.05 (~EUR 7.02 at 2026-09-17 FX) | comparable listings ~EUR 18-22 with lower outliers | EUR 18.90 | PENDING — Ireland shipping, ship-from, returns |
| 3 | 20,000mAh Car Jump Starter, 400A listing | Puce Gaia via Spocket | USD 26.24 (~EUR 22.88) | comparables start ~EUR 33 and extend higher | EUR 34.90 | PENDING — lithium shipping/compliance/returns |
| 4 | DYMO LabelManager 420P | Tormino, Netherlands | public EUR 195.99; entry dropship discount publicly 5% | Klarna benchmark ~EUR 234.99 | EUR 229.90 | PENDING — business-account eligibility, checkout/VAT, returns |
| 5 | 4x6 Direct Thermal Shipping Label Printer | CJdropshipping | USD 44.24-50.35; UK-power variant listed | comparable 4x6 printers from ~EUR 79.90 | EUR 69.90 | PENDING — CJ authorization, warehouse, Ireland shipping, VAT/import, returns |
| 6 | Waterproof Bicycle Bag 5-12L | CJdropshipping | USD 4.02-10.45 depending size/material | waterproof frame bags commonly ~EUR 29-41; low outlier ~EUR 11.94 | EUR 24.90 | PENDING — exact 12L cost, warehouse, Ireland shipping, returns |
| 7 | Foldable Car Boot Organiser 58cm | CJdropshipping | USD 5.97 | useful comparables ~EUR 25-50; low Temu/Shein outliers ~EUR 5-10 | EUR 19.90 | PENDING — warehouse, Ireland shipping, returns, final landed cost |
| 8 | AXA DWN 30 USB-C Bike Light Set | Tormino, Netherlands | EUR 25.99 public before account discount | AXA DWN 50 light set benchmark ~EUR 48.96; exact DWN 30 Ireland benchmark still incomplete | EUR 42.90 | PENDING — exact account checkout, model-specific benchmark, returns |
| 9 | Kryptonite Keeper 510 Folding Lock 100cm | Tormino, Netherlands | EUR 64.99 public before account discount | Klarna Keeper 510 Fold ~EUR 92.48 | EUR 87.90 | PENDING — exact account checkout, combined shipping/returns |

Shopify GIDs:

1. AirPro+ — `gid://shopify/Product/16617894969689`
2. Universal Bike Phone Holder — `gid://shopify/Product/16619601396057`
3. Car Jump Starter — `gid://shopify/Product/16619601625433`
4. DYMO LabelManager 420P — `gid://shopify/Product/16619611455833`
5. 4x6 Direct Thermal Shipping Label Printer — `gid://shopify/Product/16619613978969`
6. Waterproof Bicycle Bag 5-12L — `gid://shopify/Product/16619617157465`
7. Foldable Car Boot Organiser 58cm — `gid://shopify/Product/16619617190233`
8. AXA DWN 30 USB-C Bike Light Set — `gid://shopify/Product/16619620172121`
9. Kryptonite Keeper 510 Folding Lock 100cm — `gid://shopify/Product/16619620303193`

All nine products remain `DRAFT`. No candidate may be published merely because its paper spread looks attractive.

## Shopify collection evidence

The smart collection `Bike & E-bike Courier` currently contains four tagged candidates. This confirms the `bike-courier` auto-classification rule is functioning for the new EU security/visibility candidates.

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

### CJ 4x6 thermal printer

At the current 2026-09-17 USD/EUR conversion, the maximum public product price of USD 50.35 is about EUR 43.92.

At staged price EUR 69.90, the public product-cost spread is large enough to tolerate a meaningful Ireland shipping cost while still having a plausible path to the EUR 2 threshold. Exact route cost remains mandatory before approval.

### AXA DWN 30 + Kryptonite Keeper 510 bundle candidate

Both products are sourced from the same Netherlands supplier path. A potential `Courier Bike Security & Visibility Kit` could improve order economics if Tormino confirms that one Ireland parcel rate can cover both products in a single dropship order.

Do **not** create or advertise this bundle yet. First verify:

- combined parcel shipping price to Ireland;
- one-parcel fulfilment behaviour;
- account-level dropship discount;
- neutral packaging charges for two items;
- B2B/customer-return workflow;
- current combined Irish market benchmark.

If those checks pass, bundle contribution should be evaluated separately from single-SKU contribution.

Tormino references:
- https://tormino.com/pages/dropshipping
- https://tormino.com/pages/commercial-1
- https://tormino.com/pages/shipping-delivery
- https://tormino.com/products/axa-lighting-set-dwn-set-30-lux-usb-c-rechargeable
- https://tormino.com/products/kryptonite-folding-lock-keeper-510

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
| CJ 50kg/10g hanging scale SKU `CJJZGJJY00017-50KG 10G` | REJECTED direct-sale | CJ public price USD 4.68 before shipping; Klarna Ireland offer ~EUR 3.97 |
| CJ rechargeable bicycle light set USD 2.74-3.15 | HOLD | Ireland low-price benchmark ~EUR 8.21 means shipping can erase the EUR 2 threshold; stronger branded EU light candidate already exists |
| CJ 11-14L insulated lunch bags | HOLD for courier use | too small to market truthfully as primary food-delivery courier bags |
| 70L insulated thermal bag via WholesalePA UK | REJECTED route | supplier delivery coverage is UK addresses only |
| DYMO LabelWriter 550 via Tormino | REJECTED route | Tormino price above current Ireland benchmark |
| Brother QL-800 via Tormino | REJECTED route | Tormino ~EUR 113.99 while Ireland benchmark ~EUR 107.50 |
| Tesa packaging tape dispenser via Tormino | REJECTED route | supplier cost too high versus low Ireland dispenser/tape benchmarks |
| VidaXL folding stair trolley 70kg via Tormino | REJECTED route | Tormino ~EUR 132.99 while stronger Ireland alternatives start ~EUR 82.90 |
| Stanley SXIF0101 inflator via Tormino | REJECTED route | Tormino ~EUR 65.99 while comparable Ireland cordless inflators are materially cheaper |
| WOWOW / Oxford reflective vests via Tormino | REJECTED direct-sale | Ireland has certified/basic hi-vis vests from only a few euro; no direct price advantage |
| Mirage / Simson cheap bike phone holders via Tormino | HOLD | EUR 9.95 Ireland shipping absorbs too much margin for one cheap item |
| Morvelli 20,000mAh power bank via Spocket | HOLD | battery shipping/compliance and landed cost unresolved; retail competition tight |

## Supplier strategy

### Syncee
Primary connected marketplace. Search `Ship from: EU` + `Shipping to: Ireland`. Use Free plan for research; do not upgrade until enough SKUs justify recurring cost.

### CJdropshipping
Second sourcing path with no required monthly subscription at Free tier. Good paper prices, but exact Ireland shipping/warehouse availability is currently the gating evidence. Merchant permission is required to install/authorize the Shopify app.

### Tormino
Netherlands B2B/dropship supplier. Best suited to higher-value products and same-supplier bundles because Ireland standard parcel shipping is EUR 9.95 plus EUR 0.50 neutral packaging per item. Business-account and B2B-return requirements must be acceptable before use.

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
2. Keep all Shopify candidates DRAFT until direct-cost evidence is complete.
3. Install/authorize CJ only when merchant approval is available; then resolve exact Ireland shipping and warehouse inventory for the CJ drafts first.
4. Verify Tormino business-account terms and one-parcel shipping behaviour for the AXA + Kryptonite bundle candidate.
5. Prefer non-battery/non-regulated accessories while validating fulfilment economics, but retain strong branded EU products when compliance/market value is clearer.
6. Validate returns and product compliance before activation.
7. After approval, add supplier-authorized images through Shopify CDN, finalise customer-facing copy, set inventory/fulfilment integration, then activate.
8. Route DROPi Delivery CTAs to Shopify only for `APPROVED` direct-sale products; keep affiliate links as fallback where direct sale is not profitable or practical.
