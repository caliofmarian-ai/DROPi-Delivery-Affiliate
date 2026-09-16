# Privacy-first Commercial Measurement

DROPi Delivery measures the first useful commercial funnel without client-side tracking cookies.

## Application events

The application emits structured JSON lines to the hosting logs for two events:

### `article_view`

Recorded only for a successful `GET` request to a canonical guide page.

Fields:
- `schema` — event schema version;
- `event` — `article_view`;
- `guide` — canonical guide slug, or `unknown` if validation fails;
- `at` — UTC timestamp.

### `outbound_click`

Recorded only for a `GET` request that resolves through a supported `/go/...` commercial redirect.

Fields:
- `schema` — event schema version;
- `event` — `outbound_click`;
- `partner` — `amazon`, `sendcloud`, `shipstation`, or `unknown`;
- `guide` — validated referring guide slug, or `unknown`;
- `monetised` — whether an approved affiliate configuration was active for that redirect;
- `at` — UTC timestamp.

## Data deliberately not included by the application event schema

These structured application events do not intentionally include:
- IP addresses;
- user-agent strings;
- referrer URLs;
- cookies;
- session IDs;
- account or user IDs;
- email addresses;
- full request URLs or arbitrary query-string values.

The hosting provider may maintain separate infrastructure/request logs required to operate and secure the service. Those are not the DROPi application event schema described here.

## How to interpret the funnel

A simple raw guide-to-click ratio for a time window can be calculated as:

`outbound_click events / article_view events`

This is an operational signal, not a unique-person conversion rate. Requests can include search crawlers, repeat visits and automated traffic. It should be used to compare content and detect trends, not to claim a precise percentage of human visitors who converted.

For partner-level reporting, filter `outbound_click` by `partner` and `monetised=true`. Affiliate-network dashboards remain the authority for accepted referrals, commissions, reversals and payouts.

## Future analytics gate

Do not add client-side analytics, advertising pixels, fingerprinting or newsletter tracking without first updating the privacy/data inventory and adding any consent mechanism required by the intended tool and jurisdiction.
