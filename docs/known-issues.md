# FundStack AI Known Issues

This file tracks active cleanup items, implementation risks, and route/documentation mismatches discovered during repo review.

## Status Legend

- **Open:** Needs action.
- **In Review:** Needs path or content validation.
- **Resolved:** Fixed and verified.

## Open Issues

### 1. Remaining CSS and Tailwind Consolidation

**Status:** Open

Several older vertical and solution pages still include repeated Tailwind CDN configuration, inline styles, glass panel styling, button classes, and background/glow patterns.

Progress:

- `assets/css/styles.css` now exists as the shared style foundation.
- `tools/index.html`, `index.html`, `partners/index.html`, `qualifier.html`, `dashboard.html`, and several core tool pages use the shared CSS foundation.

Required action:

- Continue moving shared visual patterns into reusable classes where practical.
- Keep Tailwind CDN only if remaining static-first and no build step is approved.
- Prioritize vertical and solution pages in a later visual standardization pass.

### 2. Remaining JavaScript Consolidation

**Status:** Open

Some pages still include page-specific JavaScript for calculators, sliders, redirects, and widgets.

Progress:

- `assets/js/app.js` now exists as the shared JS utility foundation.
- `tools/index.html`, `index.html`, `partners/index.html`, `qualifier.html`, `dashboard.html`, and several core tool pages use the shared JS foundation.
- The homepage client-side AI/Gemini demo stub has been removed.

Required action:

- Move shared helpers into `assets/js/app.js` where safe.
- Keep calculator-specific logic inside individual pages where that keeps the static site easier to maintain.

### 3. Vertical and Solution Page Compliance Review Needed

**Status:** Open

Core tool pages have received a compliance-focused standardization pass, but vertical and solution pages may still include aggressive or absolute language.

Required action:

- Review vertical and solution page outputs and CTAs.
- Add standard disclaimer blocks.
- Soften language that implies approval, terms, amounts, timing, or outcomes are guaranteed.

### 4. Hub Page Design Pass Needed

**Status:** Open

The following hubs now exist but several are intentionally minimal and should receive a stronger dark-luxe design pass later:

```txt
funding/index.html
partners/assets.html
verticals/index.html
solutions/index.html
```

Required action:

- Upgrade these hubs with shared CSS classes.
- Add richer cards and CTA sections.
- Preserve compliance-safe language.
- Avoid large brittle rewrites unless done in a controlled batch.

### 5. Hub Metadata Enhancement Deferred

**Status:** Open

The main SEO plumbing is now in place, but one richer hub metadata rewrite was blocked by the connector safety layer during Commit 8.

Required action:

- Revisit Open Graph and meta description improvements in smaller file-specific patches.
- Avoid oversized rewrites when only metadata changes are needed.
- Prioritize `tools/index.html`, `funding/index.html`, `partners/assets.html`, `verticals/index.html`, and `solutions/index.html`.

## Resolved Issues

### Automatic Vercel Git Deployments Disabled

**Status:** Resolved

`vercel.json` now contains `git.deploymentEnabled: false`.

This setting must remain in place unless a release step is explicitly approved.

### Data Foundation Added

**Status:** Resolved

The following files now exist:

```txt
data/navigation.json
data/tools.json
data/compliance-language.json
data/site-config.json
```

These provide a lightweight source-of-truth layer for navigation, tool registry, compliance copy, and site configuration.

### Core Route and Link Drift Compatibility Added

**Status:** Resolved

Route repair added redirect shims for moved or commonly referenced old paths:

```txt
products.html -> funding/products.html
guide.html -> partners/guide.html
link-in-bio.html -> partners/link-in-bio.html
fund-match-quiz.html -> tools/fund-match-quiz.html
startup-planner.html -> tools/startup-planner.html
cost-of-capital.html -> tools/cost-of-capital.html
tools/dscr-precheck.html -> ../dscr-precheck.html
tools/ecom-cashflow-tool.html -> amazon-cashflow.html
```

Verified canonical paths include:

```txt
funding/products.html
partners/guide.html
partners/link-in-bio.html
tools/fund-match-quiz.html
tools/fundability-score.html
tools/startup-planner.html
tools/cost-of-capital.html
dscr-precheck.html
tools/amazon-cashflow.html
```

### Vertical and Solution Page Inventory Verified

**Status:** Resolved

The following vertical routes have been verified:

```txt
verticals/trucking.html
verticals/medical.html
verticals/ecommerce.html
verticals/contractors.html
verticals/real-estate.html
```

The following solution routes have been verified:

```txt
solutions/bank-denial.html
solutions/payroll-gap.html
solutions/equipment-now.html
solutions/zero-revenue.html
```

### Ecosystem Hub Pages Added

**Status:** Resolved

The following hub pages now exist:

```txt
tools/index.html
funding/index.html
partners/assets.html
verticals/index.html
solutions/index.html
```

Notes:

- `tools/index.html` uses the shared CSS and JS foundation.
- The other hubs are minimal static pages and should be upgraded in a later design/copy pass.

### Homepage and Partner Messaging Cleaned Up

**Status:** Resolved

The homepage and partner page were rewritten to:

- Use shared CSS and JS foundations.
- Remove the homepage client-side AI/Gemini demo stub.
- Link to the new hub pages.
- Replace aggressive or risky claims with compliance-safe positioning.
- Preserve the Tally partner intake embed.
- Keep the repo static-first.

### Core Tool Pages Standardized

**Status:** Resolved

The following core tool pages were standardized for safer messaging, clearer navigation, consistent CTAs, and planning-focused disclaimers:

```txt
qualifier.html
dashboard.html
tools/fund-match-quiz.html
tools/fundability-score.html
tools/startup-planner.html
tools/cost-of-capital.html
dscr-precheck.html
tools/amazon-cashflow.html
```

Key cleanup completed:

- Replaced approval-style language with planning/review language.
- Added or improved disclaimer language.
- Replaced hardcoded `fundstack.ai` dashboard links with the current Vercel domain.
- Removed or softened phrases such as “you qualify,” “pre-approval,” “secure the capital,” and “take the capital.”
- Added shared CSS/JS references where practical.

### Static SEO and Hosting Basics Added

**Status:** Resolved

The following files/settings now exist:

```txt
robots.txt
sitemap.xml
vercel.json headers
```

Completed:

- Added `robots.txt` with sitemap reference.
- Added `sitemap.xml` using verified routes only.
- Added static security/cache headers in `vercel.json`.
- Preserved `git.deploymentEnabled: false`.

### Release Process Documentation Added

**Status:** Resolved

The following release docs now exist:

```txt
docs/deployment-guide.md
docs/release-checklist.md
```

README was updated with release guidance, deployment discipline, and links to the release docs.

### Intentional Release Deployment Completed

**Status:** Resolved

A controlled production deployment was triggered through a temporary deployment-enable commit and completed in Vercel.

Release deployment:

```txt
dpl_2TpaThPSv93qJtpp7oPLHEbxPhGA
```

Release commit:

```txt
8e7d062b0de1f4618abc52f273bd21d186f44dcc
```

Protection was then restored in the repo:

```txt
c9754ce9cc2b072c6f6d75f5a6c7c8b52a106e4f
```

## Recommended Next Batch

Recommended next work:

1. Upgrade minimal hub pages with the shared dark-luxe design system.
2. Add hub metadata in smaller file-specific patches.
3. Review vertical and solution page copy for compliance-safe language.
4. Continue CSS/JS consolidation where practical.
