# Railway Deployment

The site has no third-party runtime dependencies and uses the Node.js standard library.

## Deploy from GitHub

1. In Railway, create a new service from `caliofmarian-ai/DROPi-Delivery-Affiliate`.
2. Deploy the `main` branch after the launch PR is merged.
3. Railway should detect Node from `package.json`; `railway.toml` explicitly uses `npm start`.
4. Set `SITE_URL` to the final Railway/custom-domain HTTPS URL.
5. Confirm `/health` returns `{"ok":true,"guides":52}`. The guide count is generated from the content library, so it will change automatically when the library changes.
6. Open `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/affiliate-disclosure`, `/privacy`, `/cookies`, `/terms` and several `/guides/...` pages.

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

The application also exposes `/terms`, `/cookies`, `/privacy` and `/contact` so the public publisher site can present the policy/contact surfaces commonly checked during network review.

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
