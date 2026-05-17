# FundStack AI Known Issues

This file tracks active cleanup items, implementation risks, and route/documentation mismatches discovered during repo review.

## Status Legend

- **Open:** Needs action.
- **In Review:** Needs path or content validation.
- **Resolved:** Fixed and verified.

## Open Issues

### 1. Route and Link Drift

**Status:** Open

Several pages and docs reference routes that may have moved or may not exist at their old root-level paths.

Examples that require validation:

```txt
products.html
guide.html
simulator.html
link-in-bio.html
fund-match-quiz.html
startup-planner.html
cost-of-capital.html
dscr-precheck.html
ecom-cashflow-tool.html
vertical-trucking.html
vertical-medical.html
vertical-ecommerce.html
vertical-contractors.html
solution-bank-denial.html
solution-payroll-gap.html
solution-equipment-now.html
solution-zero-revenue.html
```

Likely canonical direction:

```txt
funding/products.html
partners/guide.html
partners/link-in-bio.html
tools/fund-match-quiz.html
tools/startup-planner.html
tools/cost-of-capital.html
tools/dscr-precheck.html
tools/ecom-cashflow-tool.html
verticals/*.html
solutions/*.html
```

Required action:

- Audit all links in `index.html` and `partners/index.html`.
- Confirm actual current files before rewriting links.
- Update this file after route repair.

### 2. Duplicated Inline CSS and Tailwind Config

**Status:** Open

Multiple pages include repeated Tailwind CDN configuration, repeated glass panel styles, repeated button/card styling, and repeated background/glow styles.

Required action:

- Create `assets/css/styles.css`.
- Move shared visual patterns into reusable classes where practical.
- Keep Tailwind CDN only if remaining static-first and no build step is approved.

### 3. Duplicated Inline JavaScript

**Status:** Open

Several pages include repeated or page-specific JavaScript for Tally embeds, copy helpers, calculators, sliders, and AI/demo behavior.

Required action:

- Create `assets/js/app.js`.
- Move shared utility helpers into that file where safe.
- Keep page-specific calculator logic separate if it is easier to maintain.

### 4. Client-Side AI API Risk

**Status:** Open

The homepage includes AI Recovery Demo behavior with a placeholder client-side API key pattern.

Risk:

- Any real API key placed in public HTML/JS would be exposed.
- AI calls should eventually move to a secure server-side function, approved no-code automation, or controlled backend layer.

Required action:

- Keep the demo disabled or mocked unless a secure implementation is approved.
- Document AI implementation options before adding real API credentials.

### 5. Public Copy Compliance Review Needed

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

### 6. Need Shared Data Foundation

**Status:** Open

The repo needs a simple data layer for navigation, tool registry, compliance language, and site configuration.

Recommended files:

```txt
data/navigation.json
data/tools.json
data/compliance-language.json
data/site-config.json
```

Required action:

- Add JSON files in a controlled data foundation commit.
- Use data as an operating source of truth even before wiring it dynamically.

### 7. Current Page Inventory Validation Needed

**Status:** Open

The repo has several files referenced by commits and docs, but not all paths have been verified in the current structure.

Required action:

- Audit actual files and folders.
- Update `docs/site-structure.md` with verified current structure.
- Update README once route inventory is confirmed.

### 8. Static SEO Basics Missing or Unverified

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

### 9. Release Process Needs Documentation

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

## Notes for Next Commit Group

Recommended next group:

**Commit 2: Compliance + Product Routing Docs**

Target files:

```txt
docs/compliance-rules.md
docs/product-routing-logic.md
docs/content-style-guide.md
docs/ai-agents-architecture.md
```
