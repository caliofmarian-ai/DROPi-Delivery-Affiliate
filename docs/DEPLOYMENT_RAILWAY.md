# Railway Deployment

The site has no third-party runtime dependencies and uses the Node.js standard library.

## Deploy from GitHub

1. In Railway, create a new service from `caliofmarian-ai/DROPi-Delivery-Affiliate`.
2. Deploy the `main` branch after the launch PR is merged.
3. Railway should detect Node from `package.json`; `railway.toml` explicitly uses `npm start`.
4. Set `SITE_URL` to the final Railway/custom-domain HTTPS URL.
5. Confirm `/health` returns `{"ok":true,"guides":52}`. The guide count is generated from the content library, so it will change automatically when the library changes.
6. Open `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/affiliate-disclosure`, `/privacy`, `/cookies`, `/terms`, `/contact`, `/legal` and several `/guides/...` pages.

The current production service is deployed with one Railway replica in `europe-west4-drams3a` (EU West / Amsterdam). Treat that as current infrastructure state, not a permanent contractual guarantee; re-check the service configuration if regions are changed later.

## Legal service-provider identity

Irish online-service requirements and GDPR transparency obligations depend on real-world operator information. Configure these only with verified values:

- `LEGAL_NAME` — real legal person or business responsible for the service;
- `LEGAL_ADDRESS` — real geographic address at which the provider is established;
- `CONTACT_EMAIL` — public editorial/business email used for direct contact and privacy enquiries;
- `BUSINESS_REGISTRATION` — only when a trade/public-register reference is legally applicable;
- `VAT_ID` — only when a VAT identification number is legally applicable.

The application deliberately does not ship placeholder identity data:

- `/legal` is `noindex` and omitted from the sitemap until `LEGAL_NAME`, `LEGAL_ADDRESS` and a valid `CONTACT_EMAIL` are all configured;
- when those core values are present, `/legal` becomes indexable and is added to the sitemap;
- optional registration/VAT fields remain absent unless explicitly configured.

Do not use a fabricated name, borrowed company number or address that is unrelated to the actual operator merely to satisfy an affiliate-network form.

## Privacy-notice finalisation

Configure `LOG_RETENTION_DAYS` only after verifying the actual routine application/hosting-log retention that applies to the production Railway account and operating workflow.

- accepted application configuration: an integer from `1` to `365`;
- until both the legal identity and `LOG_RETENTION_DAYS` are configured, the privacy page identifies itself as pre-launch and is marked `noindex,follow`;
- after both are present, the privacy page publishes the controller identity, operational purposes/legal basis, hosting/transfer information, retention period and data-subject rights.

Railway's published logs documentation currently describes plan-dependent retention rather than one universal period. Do not infer the active plan from the fact that the account is paid; verify the current plan/retention in Railway before setting this variable.

Railway currently documents that its hosting/DPA arrangements can involve processing in the United States even when a workload is deployed in an EU region, with transfer safeguards described in its DPA. Review the final controller/processor arrangement and execute or accept the applicable DPA terms when required for the operator's situation.

Official references used by the project compliance baseline:
- Railway logs: https://docs.railway.com/observability/logs
- Railway DPA: https://railway.com/legal/dpa
- Railway regions: https://docs.railway.com/deployments/regions

## Publisher-network readiness

Publisher networks may review the public site's identity, policies and ownership before approving an account or advertiser relationship.

### Public contact

Set `CONTACT_EMAIL` in Railway to the public editorial/business email that DROPi Delivery intends to publish.

- When `CONTACT_EMAIL` is missing or invalid, `/contact` explains that the public address is still being configured, is marked `noindex`, and is omitted from the sitemap.
- When a valid address is configured, `/contact` publishes that address, becomes indexable, and is added to the sitemap.
- Do not put private payout, tax or account credentials in the contact page or in Git.

### Webgains site ownership validation

If Webgains supplies a temporary validation value beginning with `WGCC`, set only the raw value in Railway as:

`WEBGAINS_SITE_VALIDATION_CODE=WGCC...`

The application validates the format and renders the exact value as an HTML comment on public HTML pages. Do not commit the code to Git. After Webgains confirms site ownership, remove the Railway variable unless Webgains instructs otherwise.

The application exposes `/terms`, `/cookies`, `/privacy`, `/contact` and `/legal` so the public publisher site can present the policy/contact/identity surfaces commonly checked during network review.

## Search-engine verification

Keep verification tokens out of Git. When the final domain is attached:

- set `GOOGLE_SITE_VERIFICATION` to the Search Console HTML meta verification token;
- set `BING_SITE_VERIFICATION` to the Bing Webmaster Tools `msvalidate.01` token;
- redeploy or restart through Railway so the metadata is rendered;
- verify ownership in each webmaster console;
- submit `/sitemap.xml`;
- optionally register `/feed.xml` in feed readers or distribution tooling.

The verification meta tags are omitted entirely when their variables are not configured.

## Current cookie posture

The DROPi Delivery application does not intentionally set first-party analytics or advertising cookies and does not load client-side advertising pixels. Commercial measurement is currently server-side request logging as described in `docs/MEASUREMENT.md` and on `/privacy` and `/cookies`.

Do not add non-essential browser tracking merely to satisfy a publisher network. If such technology is introduced later, update the privacy/cookie inventory and any required consent mechanism before enabling it.

## Monetisation variables

Do not configure a partner variable until the matching affiliate account is approved:
- `AMAZON_IE_ASSOC_TAG`
- `SENDCLOUD_AFFILIATE_URL`
- `SHIPSTATION_AFFILIATE_URL`

After each variable is configured, click a commercial link and verify that the destination contains the tracking assigned by that partner.

## Domain

Use a dedicated DROPi-controlled domain or subdomain. Update `SITE_URL` immediately after the domain is attached so canonical URLs, structured data, the Atom feed and sitemap entries all use the final HTTPS origin.
