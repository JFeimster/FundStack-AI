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
- `tools/index.html` uses the shared CSS foundation.
- Several existing pages still use inline styles and Tailwind CDN configuration.

Required action:

- Move shared visual patterns into reusable classes where practical.
- Keep Tailwind CDN only if remaining static-first and no build step is approved.

### 2. Duplicated Inline JavaScript

**Status:** Open

Several pages include repeated or page-specific JavaScript for Tally embeds, copy helpers, calculators, sliders, and AI/demo behavior.

Progress:

- `assets/js/app.js` now exists as the shared JS utility foundation.
- `tools/index.html` uses the shared JS foundation.

Required action:

- Move shared utility helpers into that file where safe.
- Keep page-specific calculator logic separate if it is easier to maintain.

### 3. Client-Side AI API Risk

**Status:** Open

The homepage includes AI Recovery Demo behavior with a placeholder client-side API key pattern.

Risk:

- Any real API key placed in public HTML/JS would be exposed.
- AI calls should eventually move to a secure server-side function, approved no-code automation, or controlled backend layer.

Required action:

- Keep the demo disabled or mocked unless a secure implementation is approved.
- Document AI implementation options before adding real API credentials.

### 4. Public Copy Compliance Review Needed

**Status:** Open

Some existing copy may use strong or absolute claims that should be softened.

Examples to review:

- “0% bypass risk.”
- “#1 B2B Funding Platform.”
- “Infinite yield.”
- Any copy implying guaranteed approvals, speed, funding amounts, or outcomes.

Required action:

- Update public-facing copy to use compliance-safe language.
- Add standard disclaimer blocks to tool pages.

### 5. Hub Page Design Pass Needed

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

### 6. Static SEO Basics Missing or Unverified

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

### 7. Release Process Needs Documentation

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

## Notes for Next Commit Group

Recommended next group:

**Commit 6: Homepage + Partner Page Messaging Cleanup**

Target files:

```txt
index.html
partners/index.html
```

Focus:

- Tighten public-facing copy.
- Soften risky claims.
- Improve CTAs.
- Link to the new hub pages where practical.
- Preserve static-first structure and deployment controls.
