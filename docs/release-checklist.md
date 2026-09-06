# Release Checklist

Use this checklist for FundStack AI releases on Cloudflare Pages.

## 1. Hosting and Canonical Domain

- [ ] Cloudflare Pages project is connected to `JFeimster/FundStack-AI`.
- [ ] Production branch is `main`.
- [ ] Framework preset is `None`.
- [ ] Build command is blank.
- [ ] Build output directory is `.`.
- [ ] Canonical production domain is `https://fundstack.distilledfunding.com/`.
- [ ] Wix DNS contains `fundstack.distilledfunding.com` CNAME → `fundstack-ai.pages.dev`.

## 2. Core Pages

- [ ] `/`
- [ ] `/partners/index.html`
- [ ] `/partners/assets.html`
- [ ] `/tools/index.html`
- [ ] `/funding/index.html`
- [ ] `/verticals/index.html`
- [ ] `/solutions/index.html`

## 3. Core Tools

- [ ] `/qualifier.html`
- [ ] `/dashboard.html`
- [ ] `/tools/fund-match-quiz.html`
- [ ] `/tools/fundability-score.html`
- [ ] `/tools/startup-planner.html`
- [ ] `/tools/cost-of-capital.html`
- [ ] `/dscr-precheck.html`
- [ ] `/tools/amazon-cashflow.html`

## 4. Redirect Compatibility

- [ ] `/products.html` → `/funding/products.html`
- [ ] `/guide.html` → `/partners/guide.html`
- [ ] `/link-in-bio.html` → `/partners/link-in-bio.html`
- [ ] `/fund-match-quiz.html` → `/tools/fund-match-quiz.html`
- [ ] `/startup-planner.html` → `/tools/startup-planner.html`
- [ ] `/cost-of-capital.html` → `/tools/cost-of-capital.html`
- [ ] `/tools/dscr-precheck.html` → `/dscr-precheck.html`
- [ ] `/tools/ecom-cashflow-tool.html` → `/tools/amazon-cashflow.html`

## 5. SEO and Static Hosting

- [ ] `_headers` exists and contains security/cache rules plus canonical Link headers.
- [ ] `_redirects` exists and contains compatibility redirects.
- [ ] `robots.txt` points to `https://fundstack.distilledfunding.com/sitemap.xml`.
- [ ] `sitemap.xml` contains only `https://fundstack.distilledfunding.com/...` URLs.
- [ ] `data/cta-routing.json` uses `https://fundstack.distilledfunding.com` as `canonical_domain`.

## 6. Partner and Conversion Paths

- [ ] Homepage partner intake loads.
- [ ] Partner page intake loads.
- [ ] CTA links preserve attribution parameters.
- [ ] Dashboard-generated links use the canonical FundStack domain.

## 7. Compliance

- [ ] No guaranteed approval/funding language.
- [ ] No guaranteed amount, speed, rate, or terms.
- [ ] Backend lender/provider relationships are not exposed publicly unless intentionally approved.

## 8. Legacy Vercel

- [ ] `vercel.json` still disables automatic Vercel Git deployments.
- [ ] No new public links use `fundstack-ai.vercel.app`.
- [ ] Retire the legacy Vercel project after the Cloudflare custom domain is active.
