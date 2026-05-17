# FundStack AI Known Issues

This file tracks active cleanup items, implementation risks, and route/documentation mismatches discovered during repo review.

## Status Legend

- **Open:** Needs action.
- **In Review:** Needs path or content validation.
- **Resolved:** Fixed and verified.

## Open Issues

### 1. Duplicated Inline CSS and Tailwind Config

**Status:** Open

Multiple pages include repeated Tailwind CDN configuration, repeated glass panel styles, repeated button/card styling, and repeated background/glow styles.

Progress:

- `assets/css/styles.css` now exists as the shared style foundation.
- `tools/index.html`, `index.html`, and `partners/index.html` use the shared CSS foundation.
- Several existing tool, vertical, and solution pages still use inline styles and Tailwind CDN configuration.

Required action:

- Move shared visual patterns into reusable classes where practical.
- Keep Tailwind CDN only if remaining static-first and no build step is approved.

### 2. Duplicated Inline JavaScript

**Status:** Open

Several pages include repeated or page-specific JavaScript for Tally embeds, copy helpers, calculators, sliders, and AI/demo behavior.

Progress:

- `assets/js/app.js` now exists as the shared JS utility foundation.
- `tools/index.html`, `index.html`, and `partners/index.html` use the shared JS foundation.
- The homepage client-side AI/Gemini demo stub has been removed.

Required action:

- Move shared utility helpers into that file where safe.
- Keep page-specific calculator logic separate if it is easier to maintain.

### 3. Tool Page Compliance Review Needed

**Status:** Open

Homepage and partner-page risky claims have been cleaned up, but several tool, vertical, and solution pages may still include aggressive or absolute language.

Required action:

- Review tool outputs and CTAs.
- Add standard disclaimer blocks to tool pages.
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

### 5. Static SEO Basics Missing or Unverified

**Status:** Open

The repo should include basic SEO and static hosting files.

Recommended files:

```txt
robots.txt
sitemap.xml
```

Required action:

- Add these after route paths are confirmed.
- Do not add stale URLs to sitemap.

### 6. Release Process Needs Documentation

**Status:** Open

Automatic Vercel Git deployments are disabled. A manual release process should be documented before any future deployment.

Required action:

- Add `docs/deployment-guide.md`.
- Add `docs/release-checklist.md`.
- Update README with release steps.

## Resolved Issues

### Automatic Vercel Git Deployments Disabled

**Status:** Resolved

`vercel.json` now contains:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  }
}
```

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

## Notes for Next Commit Group

Recommended next group:

**Commit 7: Tool Page Standardization**

Target files likely include:

```txt
qualifier.html
dashboard.html
tools/fund-match-quiz.html
tools/fundability-score.html
tools/startup-planner.html
tools/cost-of-capital.html
tools/dscr-precheck.html
tools/ecom-cashflow-tool.html
```

Focus:

- Standardize headers/nav.
- Standardize footer.
- Add consistent disclaimer blocks.
- Add consistent CTA blocks.
- Add clear “what this tool does / does not do” language.
- Move shared helpers into `assets/js/app.js` where safe.
