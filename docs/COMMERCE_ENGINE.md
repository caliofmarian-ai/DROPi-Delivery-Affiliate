# DROPi Delivery — Commerce Engine

Status: ACTIVE COMMERCIAL STRATEGY
Date established: 2026-09-16

## Objective

Turn DROPi Delivery from an affiliate-first editorial site into a commerce-first system where direct Shopify sales are preferred whenever a product can produce at least EUR 2.00 verified unit profit.

Existing guides remain secondary discovery and education assets. They must support product discovery, comparison and conversion rather than become a volume-content objective.

## Core workflow

1. **Market benchmark**
   - Use Klarna Shopping Search and current Irish retailers to establish the live retail price band.
   - Record representative low, middle and premium prices.

2. **Supplier discovery**
   - Prefer suppliers with EU stock, tracked shipping to Ireland and Shopify-compatible fulfilment.
   - Current priority supplier platforms: Syncee, BigBuy and selected Spocket listings where economics justify the subscription.
   - Non-EU direct shipping is a fallback only.

3. **Landed-cost calculation**
   - Product wholesale cost.
   - Shipping to Irish customer.
   - Customs/import duty where applicable.
   - Payment/Shopify transaction cost.
   - Any unavoidable per-order fulfilment charge.

4. **Profit gate**
   - Estimated unit profit < EUR 2.00: REJECT direct sale; evaluate affiliate fallback.
   - Estimated unit profit >= EUR 2.00: ELIGIBLE candidate.
   - Unknown required cost: PENDING.

5. **Shopify staging**
   - Candidate remains DRAFT until supplier/fulfilment facts are verified.
   - Product tags determine smart-collection placement.
   - No fabricated stock, delivery time, rating, discount or supplier claim.

6. **Activation**
   - Only activate a product after supplier path, delivery to Ireland, customer price and expected unit profit are all known.

7. **Ongoing monitoring**
   - Recheck supplier cost and market retail price.
   - Archive products that fall below the EUR 2 threshold unless strategically retained as part of a profitable bundle.
   - Track returns/refunds and supplier delivery reliability.

## Shopify collection taxonomy

Smart collections use product tags:

- `driver` → Delivery Driver Essentials
- `bike-courier` → Bike & E-bike Courier
- `food-delivery` → Food Delivery Gear
- `power-charging` → Power & Charging
- `vehicle-van` → Vehicle & Van Essentials
- `dispatch-packaging` → Dispatch & Packaging

A product may carry more than one tag where appropriate.

## First market benchmarks — Ireland

Observed 2026-09-16 using Klarna/current Irish retail listings:

| Product class | Observed retail band | Commercial note |
|---|---:|---|
| Waterproof bike phone mount | roughly EUR 14–32 | Commodity category; supplier cost must be very low. |
| 20,000 mAh USB-C power bank | roughly EUR 26–99 | Wide quality/brand spread; compliance and battery shipping matter. |
| Portable tyre inflator | roughly EUR 26–160 | Stronger margin opportunity across generic and branded tiers. |
| 40 L insulated/cooler bag | roughly EUR 14–105+ | Must distinguish generic cooler bags from true food-delivery bags. |

These values are benchmarks, not fixed selling prices.

## Supplier research status

### Syncee — PRIORITY REVIEW

Why it is interesting:
- Shopify integration.
- Marketplace includes EU suppliers.
- Supports filtering by ship-from/supplier location.
- Order and tracking synchronisation.
- Wholesale prices are account-gated, so a product cannot be approved from public data alone.

Current public candidate categories found:
- portable tyre inflators;
- 20,000 mAh power banks;
- phone/mobile accessories;
- broader gadgets and vehicle accessories.

Status: RESEARCHED / WHOLESALE COST VERIFICATION REQUIRED.

Sources:
- https://help.syncee.com/en/articles/15643862-getting-started-with-syncee-on-shopify-complete-guide
- https://syncee.com/page/eu-dropshipping/

### BigBuy — PRIORITY REVIEW

Why it is interesting:
- European stock.
- Dropshipping positioning.
- Public product pages state European guarantee/certification and fast delivery for relevant categories.
- Strong fit for vehicle/courier accessories.

Public candidate categories found:
- portable air compressors;
- tyre tools;
- cycling accessories;
- waterproof device protection.

Status: RESEARCHED / REAL ACCOUNT COST + IRELAND SHIPPING REQUIRED.

Source:
- https://www.bigbuy.eu/en/shop/category/tools-for-tyres-and-wheels-portable-air-compressors

### Spocket — SELECTIVE ONLY

Current public Starter pricing observed at USD 39.99/month after trial. The subscription is a fixed cost and must be justified by expected contribution profit; do not subscribe merely to populate the catalogue.

One public candidate observed:
- Portable Air Compressor with LED Light, AirPro+ InnovaGoods
- Public Spocket page showed EUR 12.84 and EUR 21.40 figures.
- Gross spread before shipping/payment/direct costs: EUR 8.56.
- Status: PENDING because Ireland shipping and final account pricing have not yet been verified.

Source:
- https://www.spocket.co/pricing

### Non-EU direct suppliers — FALLBACK

From 1 July 2026, the EU applies a temporary EUR 3 customs duty per tariff-category item on relevant low-value consignments up to EUR 150 entering from outside the EU. The landed-cost model must include it where applicable.

Official source:
- https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en

## Initial product candidate backlog

Statuses are deliberately conservative.

| Candidate | Channel | Status | Why |
|---|---|---|---|
| Portable Air Compressor AirPro+ InnovaGoods | BigBuy via Spocket | PENDING | Public gross spread looks promising; Ireland shipping unknown. |
| Goodyear GOD0020 portable air compressor | BigBuy via Spocket | PENDING | Branded vehicle product; public spread is narrower and needs shipping verification. |
| Portable dual-screen tyre inflator | Syncee supplier marketplace | PENDING | Relevant to drivers; wholesale price hidden. |
| 20,000 mAh power bank | Syncee EU marketplace | PENDING | Strong courier relevance; wholesale/shipping/battery fulfilment must be verified. |
| Waterproof bicycle phone holder | EU supplier search | PENDING | Strong relevance but Irish retail price is competitive, so cost discipline is critical. |
| Insulated food-delivery bag | EU supplier search | PENDING | Must confirm actual delivery use, dimensions and thermal specification. |
| Shipping label printer | EU supplier search | QUEUED | High intent for small sellers; sourcing and retail benchmark required. |
| Parcel scale | EU supplier search | QUEUED | Simple operational item, good potential for bundles. |
| Packing tape dispenser | EU supplier search | QUEUED | Low-ticket item; likely useful as bundle/upsell. |

## Bundle strategy

Candidate bundles:

### Bike Courier Rain & Navigation Kit
- waterproof phone mount;
- power bank;
- charging cable;
- visibility/light accessory;
- rain protection.

### Driver Roadside Kit
- tyre inflator;
- phone mount/charger;
- torch;
- storage/organiser accessory.

### Food Delivery Starter Kit
- insulated bag;
- drink carrier;
- bag divider;
- cleaning accessory.

### Small Dispatch Starter Kit
- label printer;
- parcel scale;
- tape dispenser;
- starter packaging consumables.

Bundle eligibility is based on total order economics, but each component must still be safe, accurately described and operationally fulfilable.

## Launch gates

Before accepting live orders:

- Shopify trial must be upgraded to a selling-capable plan.
- Payment configuration must be verified.
- Shipping/returns/customer-service terms must reflect the real supplier path.
- At least one supplier must be connected and tested.
- Each ACTIVE SKU must have a verified EUR 2+ estimated unit profit under the current cost stack.
- No product should be ACTIVE merely because a supplier feed makes it available.
