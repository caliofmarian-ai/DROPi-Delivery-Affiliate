# Amazon.ie Associates Activation Runbook

Status: **READY FOR OWNER ACCOUNT APPLICATION**  
Last public-policy verification: **2026-09-15**

## Purpose

Activate Amazon.ie Associates monetisation for physical-product guides without storing Amazon credentials, tax data, payment data or the real tracking ID in Git.

## Current DROPi Delivery readiness

- Production site is deployed publicly on Railway.
- Editorial library contains 32 original, recent guides.
- Commercial guide pages show a conspicuous `#Ad / Affiliate disclosure` next to the commercial section.
- Amazon outbound links route through `/go/amazon` and remain non-monetised until `AMAZON_IE_ASSOC_TAG` exists.
- The disclosure page is already coded to show Amazon's required Associate statement when the tracking tag is enabled.
- The real tracking tag belongs only in Railway environment variables.

## Amazon.ie public review requirements checked

Official public guidance reviewed at:

- https://affiliate-program.amazon.ie/help/node/topic/G8TW5AE9XL2VX9VM
- https://affiliate-program.amazon.ie/help/node/topic/GHQNZAU6669EZS98
- https://affiliate-program.amazon.ie/help/operating/policies

Key points as of the verification date:

1. Submit a complete and accurate application and identify the website used for promotion.
2. The website must be publicly available and contain robust original content. Amazon gives roughly 10 posts as a rule of thumb for a website review.
3. Website content should be recent; Amazon's review guidance says generally within the last 60 days.
4. Amazon reviews the application after at least three qualifying sales are referred within the first 180 days. Personal orders do not qualify.
5. Affiliate links need a clear and conspicuous link-level disclosure.
6. The site must clearly and conspicuously display the statement: `As an Amazon Associate I earn from qualifying purchases.` once operating as an Associate.
7. Do not imply that Amazon sponsors, endorses or owns DROPi Delivery.

## Owner account step

1. Open https://affiliate-program.amazon.ie/ and choose **Sign up**.
2. Sign in with the Amazon account that will own the Associates account, or create the appropriate account through Amazon.
3. Use the production DROPi Delivery website as the website in the application.
4. Enter only truthful information about the site's content, traffic and promotion methods. Do not invent visitor numbers.
5. Complete Amazon's requested account, tax and payment information directly inside Amazon.
6. Copy the exact Amazon.ie Associates tracking ID/tag issued by Amazon. Do **not** commit it to this repository or paste account passwords/tax/payment information into GitHub.

## Activation after a real tracking tag exists

Set this Railway service variable:

```text
AMAZON_IE_ASSOC_TAG=<exact tracking tag issued by Amazon.ie Associates>
```

Expected behaviour after Railway redeploys:

- `/go/amazon?query=...` redirects to `amazon.ie` with the configured `tag` parameter.
- The affiliate disclosure page shows `As an Amazon Associate I earn from qualifying purchases.`
- Commercial articles continue to show the local `#Ad / Affiliate disclosure` notice.
- No secret/account data appears in Git.

## Verification checklist

- [ ] Railway deployment reaches `SUCCESS` after setting the tag.
- [ ] Affiliate disclosure page contains the required Amazon Associate statement.
- [ ] At least three representative `/go/amazon` routes contain the exact approved tag after redirect.
- [ ] Product query text remains relevant to the article that generated the click.
- [ ] No personal test order is counted as a qualifying referral.
- [ ] Amazon Associates Central receives real referral traffic.
- [ ] The account reaches three qualifying sales inside Amazon's first-180-day review window.
- [ ] Any Amazon review/compliance request is handled from Associates Central using current programme rules.

## Security rule

The repository may contain the variable **name** `AMAZON_IE_ASSOC_TAG`, but never Amazon passwords, session cookies, tax identifiers, bank/payment details or other private Associates-account material.
