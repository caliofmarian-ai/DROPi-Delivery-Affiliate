# DROPi Delivery — Commerce Candidate Matrix

Last updated: 2026-09-27

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

## Tormino terms re-check — 2026-09-27

Tormino's current public dropshipping page materially changes the earlier screening assumptions:

- approved B2B partners are now advertised a flat **15% discount** with no minimum order quantity;
- a dropship account is free, while the optional product-feed/API package is EUR 49.95/month ex VAT;
- neutral direct-to-customer shipping is supported;
- standard parcel shipping to Ireland is EUR 9.95 incl. VAT;
- B2B and dropshipping orders are excluded from supplier returns.

The discount improves paper contribution, but the no-supplier-return rule transfers consumer-return and compatibility risk to DROPi. It is therefore a launch blocker until the real business account, checkout totals, warranty process and a customer-return reserve are verified. The optional feed/API subscription is a fixed monthly cost and must not be started merely to test a small catalogue.

Tormino references:
- https://tormino.com/pages/dropshipping
- https://tormino.com/pages/shipping-delivery

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
| 4 | DYMO LabelManager 420P | Tormino, Netherlands | public EUR 195.99; current advertised B2B discount 15% | Klarna benchmark ~EUR 234.99 | EUR 229.90 | PENDING — approved account checkout, warranty and no-supplier-return exposure |
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

Public Tormino screening inputs, refreshed 2026-09-27:

- supplier listing: EUR 195.99 incl. VAT;
- advertised B2B dropship discount: 15%;
- modeled product cost: ~EUR 166.59;
- Ireland standard parcel shipping: EUR 9.95;
- conservative EUR 0.50 order-cost placeholder retained until the approved-account checkout is known;
- staged retail price: EUR 229.90;
- conservative Shopify standard-card fee with stated Irish VAT on processing fee: ~EUR 5.96;
- modeled unit contribution: ~EUR 46.90.

This is screening evidence only, not final landed cost. Tormino's no-B2B-return rule and the real account checkout remain unresolved.

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

## Professional food-delivery bag screening — 2026-09-27

The requested product must be a genuine insulated courier bag, not a relabelled lunch/cooler bag.

| Candidate / route | Current evidence | Decision |
|---|---|---|
| HENDI 709801 insulated backpack, 75.2L | Professional 600D polyester backpack with PE foam/aluminium lining, adjustable shelf and 410 x 410 x 480mm dimensions; HENDI's own page is not accepting online orders and an EU retail listing is EUR 81.13 incl. VAT | `HOLD` — suitable product, but no verified Ireland dropship/wholesale route or competitive landed cost |
| Vogue FS437 insulated delivery backpack via Nisbets Ireland | 550 x 400 x 400mm, heavy-duty shoulder/chest straps, EUR 57.99 ex VAT, in stock | `REJECTED direct-sale route` — Nisbets is a local retailer, not a verified dropship supplier; retain as an affiliate candidate |
| Vogue GG141 large insulated delivery bag via Nisbets Ireland | 355 x 580 x 380mm, 18mm insulation, EUR 54.99 ex VAT, in stock | `REJECTED direct-sale route` — local retail benchmark leaves no defensible resale path; retain as an affiliate candidate |
| PRODEL PRD52 | Professional EU-made route, but public price is roughly EUR 95-157 and Ireland shipping is not verified | `PENDING` — exact Ireland landed cost and fulfilment terms missing |
| Packir PK-65A | Purpose-built 42 x 33 x 47cm bag at USD 69 with worldwide courier shipping | `PENDING` — non-EU shipping, the temporary EU low-value import duty, VAT, returns and exact Ireland landed cost are unresolved |

No thermal-bag Shopify draft was added. Nisbets' official Awin affiliate programme is the strongest near-term path because it provides locally stocked professional products without pretending a retail purchase is a wholesale margin.

References:
- https://www.hendi.eu/en/pizza-food-delivery-backpack-insulated-112893.html
- https://www.nisbets.ie/vogue-insulated-delivery-back-pack-grey-550x400x400mm/fs437
- https://www.nisbets.ie/vogue-large-insulated-food-bag-355x380x580mm/gg141
- https://www.nisbets.ie/affiliateprogramme
- https://deliverybags.eu/product/insulated-food-delivery-backpack-prodel-prd-52/
- https://www.packir.com/goods.php?id=135

## Rear-rack screening — 2026-09-27

Rear racks are compatibility-sensitive. Wheel size, frame eyelets, chainstay width, tyre width, brake clearance, battery location and rated load must be checked before a customer is sent to a product.

| Candidate / route | Conservative screening | Decision |
|---|---|---|
| Racktime Basic 2.0 29 Boost via Tormino | EUR 44.99 public; ~EUR 38.24 after advertised 15% B2B discount. At a EUR 69.90 test price, EUR 9.95 Ireland shipping, EUR 0.50 cost placeholder and ~EUR 2.03 payment fee, modeled contribution is ~EUR 19.18. A comparable Racktime 2.0 28-inch rack is EUR 71.00 in Ireland. | `CANDIDATE / HOLD` — margin screen passes, but exact fit differs by bike and supplier returns are excluded |
| Tubus Cargo Evo 28 via Tormino | EUR 74.99 public; ~EUR 63.74 after 15%. At a EUR 129.90 test price, modeled contribution is ~EUR 52.21; current Ireland marketplace benchmark is EUR 136.49. | `CANDIDATE / HOLD` — only one unit shown and the listing also reports backorder; account checkout, repeatable stock and return reserve unresolved |
| Racktime Boost-it 2.0 29 via Tormino | EUR 95.99 public; ~EUR 81.59 after 15%, then EUR 9.95 shipping before payment cost. A close EU Tour variant is advertised around EUR 75.90. | `REJECTED direct-sale route` at current pricing |

No rear-rack Shopify draft was added. The Basic and Tubus candidates are promising enough for account-level validation, but neither is operationally approved.

References:
- https://tormino.com/ga/products/iomproir-bagaiste-raca-ama-bunusach-2-0-raca-cuil-bunusach-2-0-29-treisiu-dubh
- https://tormino.com/products/tubus-luggage-carrier-cargo-evo-rear-rack-cargo-evo-28-b/
- https://tormino.com/products/racktime-luggage-carrier-boost-it-2-0-rear-rack-boost-it-2-0-29-black
- https://www.decathlon.ie/p/1100103178-11198077-20-racktime-luggage-rack-black-12-mm-25-kg.html
- https://www.decathlon.ie/8023-bike-pannier-racks

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
Netherlands B2B/dropship supplier. The current public offer advertises a free approved account, 15% discount with no MOQ, neutral fulfilment and EUR 9.95 standard shipping to Ireland. The optional datafeed/API costs EUR 49.95/month ex VAT, and B2B/dropship orders cannot be returned to Tormino. Use only after the business account, real checkout, warranty handling and DROPi's own consumer-return reserve are acceptable.

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
4. Verify Tormino business-account approval, real 15% account pricing, one-parcel shipping, warranty handling and no-supplier-return exposure for the AXA + Kryptonite bundle and the two held rear-rack candidates.
5. Prefer non-battery/non-regulated accessories while validating fulfilment economics, but retain strong branded EU products when compliance/market value is clearer.
6. Validate returns and product compliance before activation.
7. After approval, add supplier-authorized images through Shopify CDN, finalise customer-facing copy, set inventory/fulfilment integration, then activate.
8. Route DROPi Delivery CTAs to Shopify only for `APPROVED` direct-sale products; keep affiliate links as fallback where direct sale is not profitable or practical.
