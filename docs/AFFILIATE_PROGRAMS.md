# Affiliate Programme Register

Verified: 2026-09-16. Re-check programme terms before activation because commercial terms can change.

## Activation rule

A programme is not treated as monetised merely because DROPi has researched it or opened an account. A partner becomes **ACTIVE** only after:

1. the publisher/application is approved;
2. the exact programme terms visible to the approved DROPi account are reviewed;
3. a network-generated tracking link or identifier is available;
4. the production configuration is stored in Railway, not Git;
5. a live redirect/click is verified against the partner dashboard where possible.

No tracking ID, payout detail, tax identifier or account credential belongs in this repository.

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

Status: **ONBOARDING / NOT ACTIVE** — CJ publisher onboarding is being completed separately.

Current official UK programme information reviewed at launch:
- ShipStation advertises referral payouts from $35 to $400 depending on the paid plan.
- It advertises a 30-day referral cookie.
- Tracking and payment are handled through CJ.

Activation checklist:
1. Complete CJ publisher onboarding and obtain approval.
2. Apply to / obtain approval for ShipStation if it is not automatic.
3. Obtain the CJ tracking URL.
4. Set `SHIPSTATION_AFFILIATE_URL` in Railway.
5. Re-check plan names and referral amounts before quoting them in new editorial content.
6. Verify a live redirect and CJ reporting.

## Verified physical-product expansion queue

The four programmes below were researched on 2026-09-16 using current official programme/network sources. They are **RESEARCHED / NOT ACTIVE**. No DROPi tracking link should be created or represented as active until the corresponding application is accepted.

### Decathlon Ireland — Awin

Purpose: cycling, rainwear, visibility, bags and other delivery-adjacent equipment sold to Irish customers.

Status: **RESEARCHED / NOT APPLIED**.

Official evidence:
- Decathlon Ireland operates an affiliate programme through Awin: https://www.decathlon.ie/content/130-affiliate-program
- The programme explicitly lists content/news editorials, sport bloggers and specialised press among publisher types it works with.
- Decathlon Ireland currently states a 30-day cookie period.
- Awin's Ireland publisher page confirms publishers/content creators can register and then apply to advertisers: https://www.awin.com/ie/publishers
- Awin's Ireland page currently states that a refundable EUR 1 security deposit is required during publisher registration. Re-check this at the actual sign-up screen because network onboarding terms can change.

Activation sequence:
1. Create/approve the Awin publisher account for the final DROPi Delivery site.
2. Use the final public site URL and describe DROPi as an editorial commerce publication, not a retailer.
3. Apply specifically to the Decathlon Ireland programme.
4. Review the account-specific programme terms after approval.
5. Generate the approved Awin tracking/deep link for Decathlon.ie.
6. Only then add a production route/configuration and relevant Decathlon CTA options.

### eBay Partner Network — eBay.ie

Purpose: a second broad marketplace for vehicle, courier, cycling and shipping-tool products, reducing dependence on one general retailer.

Status: **RESEARCHED / NOT APPLIED**.

Official evidence:
- The EPN Network Agreement lists Ireland / `www.ebay.ie` as a participating site: https://partnernetwork.ebay.com/page/network-agreement
- EPN requires registration and acceptance before a publisher may deploy EPN promotional content or methods.
- The EPN publisher onboarding guide is available at: https://partnernetwork.ebay.com/solutions/joining-the-ebay-partner-network
- Commission is governed by the current EPN rate card and can change; do not hardcode a universal percentage in DROPi content.

Activation sequence:
1. Create/sign in with the eBay account used for the business workflow.
2. Apply to EPN and wait for acceptance.
3. Complete payment/tax/account requirements inside EPN.
4. Confirm the approved campaign/tracking-link format for `ebay.ie`.
5. Implement only network-generated or network-compliant links after approval.
6. Verify clicks and qualifying-transaction reporting before marking the programme ACTIVE.

### Anker EU — Webgains

Purpose: chargers, power banks, cables and multi-device charging products already covered by several DROPi driver guides.

Status: **RESEARCHED / NOT APPLIED**.

Official evidence:
- Anker's Europe affiliate page is: https://www.anker.com/eu-en/become-an-affiliate
- The current EU page advertises 8% commission and a 30-day cookie duration.
- The application link points to Webgains.
- Anker states that approved publishers can create custom links to relevant Anker pages through affiliate-network tooling.
- Webgains explains that publisher applications are reviewed for a functioning site, suitable content, legal/privacy information, contact availability and site ownership: https://knowledgehub.webgains.com/home/what-is-the-application-process-to-join-as-a-publi

Activation sequence:
1. Apply to Webgains as a publisher using the final DROPi Delivery site.
2. Complete Webgains site ownership validation and required network agreements.
3. Apply to Anker's relevant EU programme/network from the publisher account.
4. Confirm the programme terms shown to the approved account; public percentages are not a substitute for account terms.
5. Generate approved tracking links for the relevant charging pages/products.
6. Add Anker CTAs only where they genuinely match the guide and only after live tracking is verified.

### Packhelp — PartnerStack

Purpose: packaging, cartons and ecommerce dispatch content for small sellers.

Status: **RESEARCHED / NOT APPLIED**.

Official evidence:
- Packhelp's current partner page is: https://packhelp.com/affiliates/
- The public page currently advertises up to 15% commission.
- Packhelp's published Partner Program Agreement states that PartnerStack is used for partner accounts/referrals and describes a commission structure tied to partner level, including recurring and first-order components: https://documents.packhelp.com/Terms%20%20and%20conditions%20Packhelp.pdf
- The same agreement currently states a 90-day referral-cookie window and last-click attribution.
- Account-specific terms at approval remain authoritative if they differ from public copy.

Activation sequence:
1. Apply through Packhelp's official partner flow.
2. Review/accept the exact PartnerStack offer presented to DROPi.
3. Obtain the unique approved referral link.
4. Map Packhelp only to packaging/dispatch guides where it is genuinely relevant.
5. Store the approved referral URL in Railway only.
6. Verify click/referral reporting before marking ACTIVE.

## Priority order for owner onboarding

This is an operational sequence, not a ranking of partner quality:

1. **Awin publisher account + Decathlon Ireland** — one network account can later expose additional relevant Ireland/EU merchants.
2. **eBay Partner Network** — broad `ebay.ie` coverage can diversify general product links.
3. **Webgains + Anker EU** — strong fit for the existing charging cluster, but requires a second network onboarding and site validation.
4. **Packhelp** — direct fit for the small-ecommerce packaging cluster and can be activated independently through PartnerStack.

Do not apply to programmes merely because the headline commission is high. Audience fit, destination availability, editorial relevance and approved account terms come first.
