# DROPi Delivery — Unit Profit Formula

Owner rule: accept products that generate at least EUR 2.00 estimated profit per completed order unit after known direct order costs.

## Formula

`unit_profit = customer_price - supplier_cost - supplier_shipping - payment_cost - customs_import_cost - other_direct_order_cost`

The calculation is deliberately conservative. Unknown mandatory costs keep the product in `PENDING` status.

## Decision states

- `PENDING` — one or more mandatory direct costs are unknown.
- `ELIGIBLE` — estimated unit profit is >= EUR 2.00 and supplier/fulfilment route is verified.
- `REJECT_DIRECT` — estimated unit profit is < EUR 2.00; evaluate affiliate fallback or bundle role.
- `ACTIVE` — eligible product has been intentionally published in Shopify.
- `HOLD` — previously eligible product needs re-check because supplier price, market price, shipping or compliance changed.

## Bundles

A low-margin component may be useful inside a bundle if the bundle's total contribution profit is >= EUR 2.00 and every component is operationally valid. The business should still track component costs separately.

## Important exclusions

Do not count the following as profit:

- VAT collected for remittance;
- shipping charged to the customer if it is passed through to the supplier/carrier;
- discounts funded by DROPi;
- refund/return amounts;
- unverified affiliate commissions;
- theoretical retail spread where the actual supplier shipping cost is unknown.

## Review trigger

Recalculate when any of the following changes:

- supplier price;
- shipping price;
- Shopify/payment fees;
- customs/import rules;
- selling price;
- supplier fulfilment route;
- return/refund experience.
