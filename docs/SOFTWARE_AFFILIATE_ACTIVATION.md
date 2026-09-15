# Software Affiliate Activation Runbook

Verified against current Sendcloud programme materials and the DROPi Delivery PartnerStack application state on 2026-09-16.

## Purpose

DROPi Delivery can monetise software-intent articles without holding inventory by referring relevant ecommerce sellers to shipping platforms. Editorial fit remains separate from commission value.

## Sendcloud

Official programme: https://www.sendcloud.com/partnerships/affiliate-program/
Terms: https://www.sendcloud.com/affiliate-program-terms/

### Current state

`PENDING REVIEW` — DROPi Delivery's application has been received in PartnerStack.

### Commission evidence and authority

There is currently a material difference between public marketing information and the offer displayed for the DROPi Delivery application:

- the public Sendcloud affiliate page advertises 100% of the referred customer's first paid month and a 90-day cookie window;
- the DROPi Delivery PartnerStack application dashboard currently displays `Earn 10% on all referrals for 24 months`;
- Sendcloud Affiliate Program Terms Article 4.6 states that the commission plan and maximum period of receiving commissions are displayed in the affiliate's PartnerStack account;
- Article 4.7 allows Sendcloud to change commission rates and the maximum commission period.

For DROPi Delivery, the final offer displayed in the **approved PartnerStack account** is authoritative for commercial planning. Do not publish a specific payout promise merely because the public landing page shows a different offer.

Other current affiliate-term requirements include:
- referred customer purchase of a paid subscription within the applicable attribution period;
- at least 10 shipping labels created by the referred customer in a single month for commission eligibility under the current terms;
- no self-referrals, immediate-family referrals, or referrals for the affiliate's own employer/company;
- existing customers and prospects already being worked by Sendcloud are not eligible under the stated conditions.

### Owner-only application step

Application submitted on 2026-09-16. While review is pending:
1. Monitor PartnerStack/email for the Sendcloud decision.
2. Do not activate a Sendcloud affiliate redirect before approval.
3. On approval, read and accept the programme terms presented in PartnerStack.
4. Confirm the final commission offer shown in the account.
5. Copy only the unique approved affiliate/referral URL required for site tracking.
6. Keep identity, payout and tax information inside PartnerStack/Sendcloud and out of GitHub.

### Activation after approval

Set the approved URL only in Railway production:

`SENDCLOUD_AFFILIATE_URL=<approved PartnerStack referral URL>`

Never hardcode an account token, password, payment data or private PartnerStack information in this repository.

## ShipStation

Official programme: https://www.shipstation.com/en-gb/affiliate-program/

Current public programme information reviewed on 2026-09-15:
- affiliate tracking/reporting platform: CJ;
- public payout range advertised by ShipStation UK: $35 for Starter, $75 for Standard, up to $400 for Premium referrals, subject to current programme terms;
- public attribution window: 30 days;
- commission is for successfully billed referred customers;
- programme terms and plan/payout names can change and must be rechecked before publishing specific payout claims.

### Owner-only application step

1. Open the official ShipStation Affiliate Program page.
2. Apply using accurate owner/business details through the provider/CJ workflow.
3. Complete identity, payout and tax information directly with the affiliate platform.
4. After approval, copy only the unique approved tracking URL needed by DROPi Delivery.

### Activation

Set the approved URL only in Railway production:

`SHIPSTATION_AFFILIATE_URL=<approved CJ tracking URL>`

## Verification checklist after approval

For each partner:
1. Railway variable exists in production.
2. Deployment reaches `SUCCESS`.
3. `/go/sendcloud` or `/go/shipstation` returns a redirect to the exact approved affiliate URL.
4. The article carries a visible affiliate disclosure before the commercial link.
5. The provider dashboard registers a test click if its reporting supports this.
6. No credential, payout or tax data appears in Git.

## Editorial rule

Do not rank Sendcloud or ShipStation because one pays more. Compare by merchant location, supported carriers, sales channels, automation, returns workflow, operational complexity and current plan fit. Specific programme economics must be presented as dated provider claims, not permanent facts.
