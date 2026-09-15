# Affiliate Programme Register

Verified: 2026-09-16. Re-check programme terms before activation because commercial terms can change.

## Amazon.ie Associates

Purpose: broad physical-product catalogue for delivery gear.

Current state:
- Associates account created.
- Production tag configured as a Railway environment variable, never committed to Git.
- Amazon-specific disclosure is enabled when the environment variable is present.
- Final live-click verification and owner tax-interview completion remain operational follow-ups.

Current programme information:
- Amazon.ie offers an Associates programme for publishers/content creators.
- Commission varies by category.
- Amazon requires a clear affiliate disclosure and, once participating, the site-level statement: `As an Amazon Associate I earn from qualifying purchases.`

## Sendcloud Affiliate Programme

Purpose: European ecommerce shipping-software referrals.

Status: **PENDING REVIEW** — application submitted through PartnerStack on 2026-09-16.

Current evidence:
- Sendcloud operates the affiliate programme through PartnerStack.
- The public Sendcloud affiliate page currently advertises 100% commission on a referred customer's first paid month and a 90-day attribution window.
- The PartnerStack application dashboard for DROPi Delivery currently displays an account offer structure of **10% on referrals for 24 months**.
- Sendcloud's affiliate terms state that the affiliate commission plan and maximum commission period are displayed in the affiliate's PartnerStack account and that Sendcloud may change them.
- Therefore, DROPi Delivery must treat the approved PartnerStack account offer as authoritative for its own economics, not assume that the public marketing-page offer applies to this account.
- No Sendcloud affiliate URL is active on DROPi Delivery until approval.

Activation checklist:
1. Wait for Sendcloud review/approval.
2. Accept the applicable programme terms in PartnerStack if requested.
3. Confirm the final commission structure shown in the approved account.
4. Obtain the unique approved referral URL.
5. Set `SENDCLOUD_AFFILIATE_URL` in Railway only.
6. Verify the live redirect and PartnerStack click reporting.

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
