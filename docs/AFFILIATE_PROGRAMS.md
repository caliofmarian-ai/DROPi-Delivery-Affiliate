# Affiliate Programme Register

Verified: 2026-09-15. Re-check programme terms before activation because commercial terms can change.

## Amazon.ie Associates

Purpose: broad physical-product catalogue for delivery gear.

Current official information reviewed at launch:
- Amazon.ie offers an Associates programme for publishers/content creators.
- Commission varies by category.
- Amazon requires a clear affiliate disclosure and, once participating, the site-level statement: `As an Amazon Associate I earn from qualifying purchases.`
- Amazon’s application guidance says it expects robust original content and gives roughly 10 recent posts as a useful rule of thumb. The launch site contains 12 original guides.

Activation checklist:
1. Deploy on a domain controlled by DROPi.
2. Confirm all 12 guides are public and render correctly.
3. Apply to Amazon.ie Associates.
4. After approval, set `AMAZON_IE_ASSOC_TAG`.
5. Validate actual tagged links using Amazon’s own tools.
6. Confirm the Amazon-specific disclosure is visible after the environment variable is enabled.

## Sendcloud Affiliate Programme

Purpose: European ecommerce shipping-software referrals.

Current official information reviewed at launch:
- Sendcloud publicly advertises 100% commission on the referred customer’s first paid month.
- It advertises 90-day attribution.
- Programme terms include qualification conditions and can change; the live terms must govern.
- The programme is operated through PartnerStack.

Activation checklist:
1. Apply as a content publisher / ecommerce-tools affiliate.
2. Obtain the approved unique referral URL.
3. Set `SENDCLOUD_AFFILIATE_URL` in Railway.
4. Keep claims limited to facts verified from current official materials.

## ShipStation Affiliate Program

Purpose: ecommerce shipping-software referrals.

Current official UK programme information reviewed at launch:
- ShipStation advertises referral payouts from $35 to $400 depending on the paid plan.
- It advertises a 30-day referral cookie.
- Tracking and payment are handled through CJ.

Activation checklist:
1. Apply to the official programme.
2. Obtain the CJ tracking URL after approval.
3. Set `SHIPSTATION_AFFILIATE_URL` in Railway.
4. Re-check plan names and referral amounts before quoting them in new editorial content.

## Expansion candidates

Research only after the first three programmes are operational:
- Awin publisher marketplace for relevant automotive, cycling, workwear, electronics and business-supplies advertisers.
- Direct programmes from thermal-bag, vehicle-accessory and workwear brands with Ireland/EU shipping.
- Ecommerce tools for returns, tracking and inventory that pay recurring commission and genuinely fit the audience.

Never add a partner only because its commission is high. Audience relevance and conversion intent come first.
