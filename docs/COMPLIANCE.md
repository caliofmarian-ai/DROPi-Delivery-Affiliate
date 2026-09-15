# Editorial, Affiliate and Privacy Compliance Baseline

This is an operational baseline, not legal advice.

## Affiliate disclosure

Irish CCPC/ASA guidance says affiliate marketing in website/blog content should be clearly recognisable as advertising and highlights use of `#Ad`. DROPi therefore places a prominent `#Ad / Affiliate disclosure` block on commercial guides and keeps a permanent disclosure page.

When Amazon Associates is activated, the required site-level Amazon statement is rendered if `AMAZON_IE_ASSOC_TAG` is configured.

## Truthful editorial claims

DROPi must not:
- say an item was tested unless there is evidence of actual testing;
- invent prices, discounts, ratings or stock;
- copy retailer product descriptions as editorial content;
- imply a partnership that has not been approved;
- imply that an affiliate relationship is a joint venture with the merchant.

## Privacy baseline

Launch version:
- no user accounts;
- no newsletter form;
- no advertising pixel;
- no client-side analytics;
- outbound redirect events intentionally record only partner, guide identifier, monetisation boolean and timestamp in server logs.

Before adding analytics or email capture, update the data inventory, privacy notice and consent implementation as required.

## Safety content

Delivery and vehicle guides are editorial buying information, not professional driver training, load-securing certification, food-safety training or legal advice. Where safety-critical topics appear, direct readers to manufacturer instructions, employer procedures and applicable local rules.
