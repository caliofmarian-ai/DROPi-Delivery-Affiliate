# Software Affiliate Activation Runbook

Verified against official programme pages on 2026-09-15.

## Purpose

DROPi Delivery can monetise software-intent articles without holding inventory by referring relevant ecommerce sellers to shipping platforms. Editorial fit remains separate from commission value.

## Sendcloud

Official programme: https://www.sendcloud.com/partnerships/affiliate-program/
Terms: https://www.sendcloud.com/affiliate-program-terms/

Current public programme information reviewed on 2026-09-15:
- affiliate platform: PartnerStack;
- public offer: 100% of the referred customer's first paid month, subject to current programme terms;
- attribution: last click with a 90-day cookie window;
- current terms require the referred customer to buy a paid subscription within the attribution window and create at least 10 shipping labels in a single month for commission eligibility;
- self-referrals, immediate-family referrals and referrals for the affiliate's own employer/company are not commissionable under the current terms;
- programme terms and commission rules may change and must be rechecked before publishing specific payout claims.

### Owner-only application step

1. Open the official Sendcloud Affiliate Program page.
2. Apply with accurate owner/business information through the provider's PartnerStack flow.
3. Complete any identity, payout or tax information directly with Sendcloud/PartnerStack. Do not commit this information to GitHub.
4. After approval, copy only the unique approved affiliate/referral URL needed for site tracking.

### Activation

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
