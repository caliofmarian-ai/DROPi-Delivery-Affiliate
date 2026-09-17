# DROPi Delivery — Shopify Direct-Sale Activation

## Purpose

DROPi Delivery is commerce-first, but an unverified sourcing candidate must never become a public direct-sale recommendation merely because it exists in Shopify.

Affiliate/retailer comparison remains the fallback until a direct-sale product passes the commercial evidence gate.

## Activation rule

A product may receive a `Buy from DROPi` CTA only after all of the following are verified:

1. the Shopify product is intentionally ready for sale;
2. supplier identity and fulfilment route are verified;
3. exact shipping to Ireland is known;
4. returns/refunds handling is acceptable;
5. required product/compliance evidence is sufficient;
6. expected unit contribution is at least EUR 2.00 after known unavoidable direct order costs;
7. the final HTTPS Shopify product URL is known.

## Runtime configuration

Direct-sale routing is controlled by one environment variable per guide.

Convert the guide slug to uppercase and replace every non-alphanumeric run with `_`:

`SHOPIFY_PRODUCT_<GUIDE_SLUG>_URL`

Example:

Guide slug:

`portable-tyre-inflator-delivery-drivers`

Environment variable:

`SHOPIFY_PRODUCT_PORTABLE_TYRE_INFLATOR_DELIVERY_DRIVERS_URL`

Value:

`https://<approved-store-origin>/products/<approved-product-handle>`

## Fail-closed behaviour

If the variable:

- is absent;
- is empty;
- is malformed;
- is not HTTPS; or
- contains embedded URL credentials,

DROPi does **not** show `Buy from DROPi` and `/go/shopify` refuses to resolve a direct-sale destination.

The existing Amazon/affiliate comparison remains available instead.

## Direct-sale UI behaviour

When a valid approved URL is configured:

- the guide shows `Buy from DROPi` as the primary CTA;
- Amazon remains available as `Compare Amazon.ie options`;
- the browser never supplies an arbitrary target URL to the redirect route;
- the server resolves the destination only from its approved environment configuration.

## Current state

As of 2026-09-17, all sourcing candidates in the connected Shopify store are DRAFT. No current candidate is authorized by this document for public activation.

See:

- `docs/COMMERCE_CANDIDATES.md`
- `docs/BUNDLE_CANDIDATES.md`
- `docs/PROFIT_FORMULA.md`
- Issue #24 (`COM-001`)
