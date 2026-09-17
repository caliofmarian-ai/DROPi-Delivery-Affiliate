# DROPi Delivery — Unit Profit Formula

Owner rule: accept products that generate at least EUR 2.00 estimated contribution profit per completed order unit after known direct order costs.

## Formula

`unit_contribution = customer_price - supplier_cost - supplier_shipping - payment_cost - customs_import_cost - other_direct_order_cost`

The calculation is deliberately conservative. Unknown mandatory costs keep the product in `PENDING` status.

## Shopify Payments working assumption — Ireland

Until the live store exposes its final account-specific rate, use the current public Shopify Ireland Basic standard-card rate as the baseline:

- 2% of the transaction + EUR 0.25, excluding VAT;
- Shopify states that in Ireland 23% VAT is charged in addition to Shopify Payments fees.

For conservative pre-launch screening, when VAT recoverability has not been established, model:

`payment_cost = (customer_price * 0.02 + 0.25) * 1.23`

Do not apply this approximation to Amex, international cards, Klarna or other payment methods that have different rates. Recalculate from the real transaction mix once sales exist.

Official references:
- https://www.shopify.com/ie/pricing
- https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/ireland/payouts

## Fixed-cost break-even

The EUR 2 rule is a **per-order contribution rule**. It does not mean EUR 2 is final accounting profit because store/app subscriptions are fixed monthly costs.

Current public Shopify Basic price:

- EUR 32/month if paid monthly;
- EUR 24/month equivalent if billed yearly.

Current public Syncee retailer pricing:

- Free: browsing / wholesale-price discovery only;
- Basic: USD 39.99/month for product import/management features;
- higher plans only when justified by sales/catalog needs.

Therefore:

`monthly_operating_profit = sum(unit_contribution) - monthly_fixed_commerce_costs - refunds_losses - other_period_costs`

Example: at EUR 2 contribution per order, Shopify Basic alone requires roughly 12 orders/month to cover a EUR 24 monthly equivalent, or 16 orders/month to cover EUR 32 monthly, before any other fixed cost. This is why paid supplier apps must not be activated until the candidate catalog can plausibly cover them.

Syncee official references:
- https://syncee.com/pricing
- https://help.syncee.com/en/articles/8885830-pricing-and-plans

## Decision states

- `PENDING` — one or more mandatory direct costs are unknown.
- `ELIGIBLE` — estimated unit contribution is >= EUR 2.00 and supplier/fulfilment route is verified.
- `REJECT_DIRECT` — estimated unit contribution is < EUR 2.00; evaluate affiliate fallback or bundle role.
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
- theoretical retail spread where the actual supplier shipping cost is unknown;
- monthly Shopify/Syncee/app fees inside the per-unit figure (track them separately in monthly operating profit).

## Review trigger

Recalculate when any of the following changes:

- supplier price;
- shipping price;
- Shopify/payment fees;
- customs/import rules;
- selling price;
- supplier fulfilment route;
- return/refund experience;
- fixed Shopify/app subscription cost.
