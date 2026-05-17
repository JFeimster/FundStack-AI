# FundStack AI Known Issues

This file tracks active cleanup items, implementation risks, and route/documentation mismatches discovered during repo review.

## Status Legend

- **Open:** Needs action.
- **In Review:** Needs path or content validation.
- **Resolved:** Fixed and verified.

## Open Issues

### 1. Remaining CSS and Tailwind Consolidation

**Status:** Open

Most primary pages now use the shared style foundation, but some page-specific styling still remains where it keeps the static pages simple and self-contained.

Progress:

- `assets/css/styles.css` exists as the shared style foundation.
- Homepage, partner page, hub pages, core tools, vertical detail pages, and solution detail pages now use the shared CSS foundation.

Required action:

- Continue moving shared visual patterns into reusable classes only where it reduces maintenance friction.
- Do not over-engineer the static site into a framework just to satisfy a purity contest.

### 2. Remaining JavaScript Consolidation

**Status:** Open

Some pages still include page-specific JavaScript for calculators, sliders, redirects, and widgets.

Progress:

- `assets/js/app.js` exists as the shared JS utility foundation.
- The major pages use the shared JS foundation.
- Calculator-specific logic remains inside individual tool pages where appropriate.

Required action:

- Move shared helpers into `assets/js/app.js` where safe.
- Keep calculator-specific logic inside individual pages when that is clearer and safer.

## Resolved Issues

### Automatic Vercel Git Deployments Disabled

**Status:** Resolved

`vercel.json` contains `git.deploymentEnabled: false` after protected release cycles.

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

### Vertical and Solution Page Inventory Verified

**Status:** Resolved

Vertical and solution routes have been verified and upgraded.

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

### Homepage and Partner Messaging Cleaned Up

**Status:** Resolved

The homepage and partner page were rewritten to use shared assets, stronger positioning, better hub navigation, and cleaner partner-intake flow.

### Core Tool Pages Standardized

**Status:** Resolved

The following core tool pages were standardized:

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

### Static SEO and Hosting Basics Added

**Status:** Resolved

The following files/settings now exist:

```txt
robots.txt
sitemap.xml
vercel.json headers
```

### Release Process Documentation Added

**Status:** Resolved

The following release docs now exist:

```txt
docs/deployment-guide.md
docs/release-checklist.md
```

### Intentional Release Deployment Completed

**Status:** Resolved

A controlled production deployment was triggered through temporary deployment-enable commits and completed in Vercel.

### Hub Page Upgrade and Metadata Patch Completed

**Status:** Resolved

Batch 10 upgraded the main hub pages and added metadata where needed:

```txt
funding/index.html
partners/assets.html
verticals/index.html
solutions/index.html
tools/index.html
```

### Vertical and Solution Detail Pages Upgraded

**Status:** Resolved

Batch 11 upgraded the individual vertical and solution detail pages:

```txt
verticals/trucking.html
verticals/medical.html
verticals/ecommerce.html
verticals/contractors.html
verticals/real-estate.html
solutions/bank-denial.html
solutions/payroll-gap.html
solutions/equipment-now.html
solutions/zero-revenue.html
```

Completed:

- Replaced older placeholder-style pages with real landing-page structures.
- Added sharper, more useful conversion copy.
- Added metadata/Open Graph tags.
- Wired pages to relevant tools, hubs, and adjacent solution/vertical routes.
- Preserved static-first architecture.

## Recommended Next Batch

Recommended next work:

1. Add a lightweight QA checklist page or docs file for live smoke testing.
2. Review sitemap after Batch 11 deployment to ensure all upgraded routes are represented.
3. Continue CSS/JS consolidation only where it reduces maintenance pain.
4. Consider creating reusable page templates for future verticals and solution pages.
