# Railway Deployment

The site has no third-party runtime dependencies and uses the Node.js standard library.

## Deploy from GitHub

1. In Railway, create a new service from `caliofmarian-ai/DROPi-Delivery-Affiliate`.
2. Deploy the `main` branch after the launch PR is merged.
3. Railway should detect Node from `package.json`; `railway.toml` explicitly uses `npm start`.
4. Set `SITE_URL` to the final Railway/custom-domain HTTPS URL.
5. Confirm `/health` returns `{"ok":true,"guides":32}` (the guide count is generated from the content library).
6. Open `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/affiliate-disclosure` and several `/guides/...` pages.

## Search-engine verification

Keep verification tokens out of Git. When the final domain is attached:

- set `GOOGLE_SITE_VERIFICATION` to the Search Console HTML meta verification token;
- set `BING_SITE_VERIFICATION` to the Bing Webmaster Tools `msvalidate.01` token;
- redeploy or restart through Railway so the metadata is rendered;
- verify ownership in each webmaster console;
- submit `/sitemap.xml`;
- optionally register `/feed.xml` in feed readers or distribution tooling.

The verification meta tags are omitted entirely when their variables are not configured.

## Monetisation variables

Do not configure a partner variable until the matching affiliate account is approved:
- `AMAZON_IE_ASSOC_TAG`
- `SENDCLOUD_AFFILIATE_URL`
- `SHIPSTATION_AFFILIATE_URL`

After each variable is configured, click a commercial link and verify that the destination contains the tracking assigned by that partner.

## Domain

Use a dedicated DROPi-controlled domain or subdomain. Update `SITE_URL` immediately after the domain is attached so canonical URLs, structured data, the Atom feed and sitemap entries all use the final HTTPS origin.
