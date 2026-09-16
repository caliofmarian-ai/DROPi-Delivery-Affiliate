# Editorial, Affiliate, Ecommerce and Privacy Compliance Baseline

Last reviewed against current official sources: 2026-09-16.

This is an operational compliance baseline for DROPi Delivery. It is not a substitute for professional legal advice, but it is intended to prevent the project from claiming a compliance state that has not been evidenced.

## Current status summary

### Implemented

- Affiliate disclosure is visible on commercial guides and a permanent disclosure page exists.
- Amazon-specific disclosure is rendered when the Amazon Associates configuration is active.
- The site does not operate checkout, manufacture products, hold stock or fulfil third-party purchases.
- No user accounts, newsletter form, client-side analytics, advertising pixel or fingerprinting script are currently shipped.
- Application-level commercial telemetry is intentionally limited to guide identifier, partner, monetisation state and timestamp; it does not intentionally include IP address, user-agent, referrer, cookie, session ID or user ID.
- `/privacy`, `/cookies`, `/terms`, `/affiliate-disclosure`, `/contact` and `/legal` surfaces exist.
- `/contact` remains `noindex` and outside the sitemap until a valid public contact email is configured.
- `/legal` remains `noindex` and outside the sitemap until a legal provider name, geographic address and public email are configured.
- Railway production is currently deployed in its EU West / Amsterdam region (`europe-west4-drams3a`).

### Still a launch gate

Do not describe the public commercial site as fully compliance-ready until the following real information/evidence exists:

1. `LEGAL_NAME` — the real legal person/business responsible for the service;
2. `LEGAL_ADDRESS` — the real geographic address at which the service provider is established;
3. `CONTACT_EMAIL` — the real public editorial/business contact address;
4. `BUSINESS_REGISTRATION` if the service provider is entered in a trade/public register and the registration detail is legally applicable;
5. `VAT_ID` if the service is subject to VAT identification requirements;
6. the privacy notice has been checked against the final legal identity, actual Railway/account arrangements and any later analytics/marketing technology;
7. the final custom domain is connected and all canonical/privacy/contact URLs are checked there;
8. any affiliate programme represented as active has actual network approval and verified tracking.

## Irish ecommerce service-provider information

Ireland's European Communities (Directive 2000/31/EC) Regulations 2003 require covered information-society service providers to make certain information easily, directly and permanently accessible. Regulation 7 includes the provider's name, geographic address of establishment and contact details including email that allow rapid/direct communication. Additional register/VAT/professional details apply where relevant.

DROPi implementation:

- `/legal` is the dedicated service-provider identity surface.
- `LEGAL_NAME`, `LEGAL_ADDRESS` and `CONTACT_EMAIL` are supplied through Railway variables rather than committed to Git.
- optional `BUSINESS_REGISTRATION` and `VAT_ID` values are displayed when configured.
- the page is intentionally excluded from indexing and the sitemap while the core identity fields are incomplete.

Source:
- Irish Statute Book — S.I. No. 68/2003, especially Regulation 7: https://www.irishstatutebook.ie/eli/2003/si/68

## Affiliate and advertising disclosure

Irish CCPC guidance states that advertising/commercial content should be recognisable as advertising. Its current influencer/affiliate guidance says website/blog affiliate content should be labelled with `#Ad`; the CCPC has also publicly stated that affiliate advertising content must be clearly labelled and that responsibility sits with influencers/publishers, brands and platforms.

DROPi therefore:

- places a prominent `#Ad / Affiliate disclosure` block on commercial guides;
- keeps a permanent `/affiliate-disclosure` page;
- does not describe a researched or pending programme as an approved partnership;
- records `monetised: false` for partner redirects that do not yet have an approved tracking configuration;
- uses editorial usefulness as the reason for including a merchant/service, not the headline commission rate.

When Amazon Associates is activated, the required site-level Amazon statement is rendered when `AMAZON_IE_ASSOC_TAG` is configured.

Sources:
- CCPC — Guidance for Influencers: https://www.ccpc.ie/business/help-for-business/guidelines-for-influencers/
- CCPC — 2026 affiliate-marketing compliance announcement: https://www.ccpc.ie/business/2026/02/17/ccpc-to-prosecute-influencers-for-failing-to-declare-advertising/

## Truthful editorial claims

DROPi must not:

- say an item was tested unless there is evidence of actual testing;
- invent prices, discounts, ratings, stock or shipping availability;
- copy retailer product descriptions as DROPi editorial content;
- imply a partnership or endorsement that has not been approved;
- imply that an affiliate relationship is a joint venture with the merchant;
- present early-stage traffic, conversion or revenue estimates as measured facts;
- use an account-specific commission offer taken from another publisher as if it applies to DROPi.

## Cookie and tracking baseline

The current DROPi application does not intentionally set first-party analytics or advertising cookies and does not load client-side advertising pixels or fingerprinting scripts. Because the application is not currently placing non-essential browser tracking, DROPi must not add a decorative/fake consent banner that implies consent controls exist when they are not needed by the current application.

If non-essential analytics, advertising or similar tracking is added later, implementation must be reviewed before activation. Irish DPC guidance states that consent is normally required for cookies/similar technologies unless a valid exemption applies, that analytics cookies normally require consent, and that consent must be obtained before setting non-exempt cookies.

Sources:
- Data Protection Commission — Cookies and Other Tracking Technologies: https://www.dataprotection.ie/en/dpc-guidance/guidance-on-cookies-and-other-tracking-technologies
- DPC cookie FAQ: https://www.dataprotection.ie/en/faqs/cookies

## Data protection / privacy-notice baseline

DPC guidance on GDPR transparency states that information to data subjects should include, as applicable, the identity/contact details of the controller, purposes and legal basis, recipients, international transfers, retention period or criteria, rights, complaint rights and other Article 13/14 information.

Current data inventory:

### DROPi application telemetry

`article_view`:
- schema version;
- event name;
- canonical guide slug;
- UTC timestamp.

`outbound_click`:
- schema version;
- event name;
- supported partner identifier;
- canonical guide slug;
- whether approved monetisation was active;
- UTC timestamp.

The DROPi application event schema deliberately excludes IP address, user-agent, referrer, cookies, session IDs, user IDs and email addresses.

### Railway infrastructure

The service is hosted on Railway. Railway captures application stdout/stderr and also provides HTTP/network infrastructure logs independently of the DROPi event schema. Railway currently documents plan-dependent log retention: 3 days on Free, 7 days on Trial/Hobby, 30 days on Pro and up to 90 days on Enterprise. DROPi must verify the actual active workspace plan before quoting one fixed retention period in a final privacy notice; until then the plan-dependent retention rule is the operative criterion.

The production service is currently configured in Railway's Amsterdam EU region (`europe-west4-drams3a`). Railway's current DPA nevertheless states that its primary processing operations take place in the United States and provides mechanisms including the EU Standard Contractual Clauses / other applicable safeguards for relevant transfers. Railway documents a standard DPA for GDPR processor relationships.

Operational follow-up before declaring the privacy notice final:

1. configure the real controller/service-provider identity;
2. confirm the active Railway workspace plan and resulting log-retention period;
3. review/execute Railway's DPA if required for the operator's situation;
4. record the lawful-basis assessment for operational/security logs and minimal commercial telemetry;
5. confirm the final privacy notice explains Railway processing/transfer safeguards appropriately;
6. repeat the review before enabling any newsletter, account system, client-side analytics, advertising pixel or other new personal-data flow.

Sources:
- Data Protection Commission — Transparency guidance / Article 13-14 information: https://www.dataprotection.ie/en/organisations/know-your-obligations/transparency
- Railway — Logs and retention: https://docs.railway.com/observability/logs
- Railway — Data Processing Addendum: https://railway.com/legal/dpa
- Railway — Regions: https://docs.railway.com/deployments/regions
- Railway — GDPR/DPA compliance note: https://docs.railway.com/enterprise/compliance

## External affiliate destinations

When a visitor follows an external retailer, marketplace or software-provider link, the visitor leaves DROPi Delivery. The destination merchant/network may use its own referral parameters, cookies or other technology subject to its own notices and legal responsibilities.

DROPi must not copy a third-party privacy/cookie policy into its own notice or imply control over the destination site's processing. The DROPi cookie page explains the boundary.

## Safety content

Delivery and vehicle guides are editorial buying information, not professional driver training, load-securing certification, food-safety training, vehicle repair instruction or legal advice. Where safety-critical topics appear, direct readers to manufacturer instructions, employer procedures and applicable local rules.

## Commercial activation rule

No affiliate programme is ACTIVE merely because an application was submitted or an account exists. Activation requires:

1. explicit network/advertiser approval where required;
2. the exact approved tracking identifier/link;
3. Railway-only production configuration;
4. live redirect/tracking verification where possible;
5. programme-specific disclosure/terms reviewed;
6. repository documentation updated from PENDING/RESEARCHED to ACTIVE with evidence.

See `docs/AFFILIATE_PROGRAMS.md` and `docs/PUBLISHER_APPLICATION_PROFILE.md` for the operational workflows.
