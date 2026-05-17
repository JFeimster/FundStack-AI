# FundStack AI Site Structure

This document tracks the current and recommended structure for the FundStack AI static site.

## Structure Principle

FundStack AI should remain static-first until there is an explicit reason to introduce a framework, backend, database, authentication layer, or API route.

The immediate goal is to organize the current static pages into clear zones:

1. Public acquisition.
2. Partner recruitment.
3. Partner assets.
4. Tools and calculators.
5. Funding/product intelligence.
6. Vertical funnels.
7. Problem-solution funnels.
8. Internal docs.

## Verified Current Structure

The following files and folders have been verified during route repair and hub-page creation:

```txt
/
├── index.html
├── dashboard.html
├── qualifier.html
├── simulator.html
├── dscr-precheck.html
├── products.html                  # redirect shim to funding/products.html
├── guide.html                     # redirect shim to partners/guide.html
├── link-in-bio.html               # redirect shim to partners/link-in-bio.html
├── fund-match-quiz.html           # redirect shim to tools/fund-match-quiz.html
├── startup-planner.html           # redirect shim to tools/startup-planner.html
├── cost-of-capital.html           # redirect shim to tools/cost-of-capital.html
├── README.md
├── AGENTS.md
├── vercel.json
├── assets/
│   ├── css/styles.css
│   └── js/app.js
├── data/
│   ├── navigation.json
│   ├── tools.json
│   ├── compliance-language.json
│   └── site-config.json
├── funding/
│   ├── index.html
│   └── products.html
├── partners/
│   ├── index.html
│   ├── assets.html
│   ├── guide.html
│   └── link-in-bio.html
├── tools/
│   ├── index.html
│   ├── fund-match-quiz.html
│   ├── fundability-score.html
│   ├── startup-planner.html
│   ├── cost-of-capital.html
│   ├── dscr-precheck.html         # redirect shim to ../dscr-precheck.html
│   ├── ecom-cashflow-tool.html    # redirect shim to amazon-cashflow.html
│   └── amazon-cashflow.html
├── verticals/
│   ├── index.html
│   ├── trucking.html
│   ├── medical.html
│   ├── ecommerce.html
│   ├── contractors.html
│   └── real-estate.html
├── solutions/
│   ├── index.html
│   ├── bank-denial.html
│   ├── payroll-gap.html
│   ├── equipment-now.html
│   └── zero-revenue.html
└── docs/
    ├── ai-agents-architecture.md
    ├── build-roadmap.md
    ├── compliance-rules.md
    ├── content-style-guide.md
    ├── known-issues.md
    ├── product-routing-logic.md
    └── site-structure.md
```

## Hub Pages Added

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
- `funding/index.html`, `partners/assets.html`, `verticals/index.html`, and `solutions/index.html` are intentionally minimal static hubs. They can be upgraded in later design/copy passes.

## Redirect Shims Added

Route repair added lightweight static redirect pages so existing stale links continue to resolve while the repo moves toward cleaner canonical paths.

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

## Recommended Canonical Structure

Use this as the preferred target structure:

```txt
/
├── index.html
├── partners/
│   ├── index.html
│   ├── assets.html
│   ├── guide.html
│   └── link-in-bio.html
├── tools/
│   ├── index.html
│   ├── qualifier.html
│   ├── fund-match-quiz.html
│   ├── fundability-score.html
│   ├── startup-planner.html
│   ├── cost-of-capital.html
│   ├── dscr-precheck.html
│   └── ecom-cashflow-tool.html
├── funding/
│   ├── index.html
│   ├── products.html
│   └── funding_product_portfolio_report.md
├── verticals/
│   ├── index.html
│   ├── trucking.html
│   ├── medical.html
│   ├── ecommerce.html
│   ├── contractors.html
│   └── real-estate.html
├── solutions/
│   ├── index.html
│   ├── bank-denial.html
│   ├── payroll-gap.html
│   ├── equipment-now.html
│   └── zero-revenue.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── data/
│   ├── navigation.json
│   ├── tools.json
│   ├── compliance-language.json
│   └── site-config.json
├── docs/
│   ├── ai-agents-architecture.md
│   ├── build-roadmap.md
│   ├── site-structure.md
│   └── known-issues.md
├── AGENTS.md
├── README.md
├── robots.txt
├── sitemap.xml
└── vercel.json
```

## Page Category Definitions

### Public Acquisition

The homepage and primary entry pages for people discovering FundStack AI.

Primary file:

- `index.html`

### Partner Recruitment

Pages designed to recruit, educate, and convert referral partners, funding brokers, and business service professionals.

Primary files:

- `partners/index.html`
- `partners/guide.html`
- `partners/assets.html`

### Partner Assets

Pages or tools partners can use in outreach, social profiles, client conversations, and lead qualification.

Examples:

- Partner dashboard.
- Link-in-bio page.
- Referral kit.
- Tool library.

### Tools and Calculators

Interactive utilities used as lead magnets, qualification helpers, or partner-facing conversation tools.

Verified tool routes:

- `qualifier.html`
- `tools/index.html`
- `tools/fund-match-quiz.html`
- `tools/fundability-score.html`
- `tools/startup-planner.html`
- `tools/cost-of-capital.html`
- `dscr-precheck.html`
- `tools/amazon-cashflow.html`

Compatibility routes:

- `tools/dscr-precheck.html`
- `tools/ecom-cashflow-tool.html`

### Funding/Product Intelligence

Product matrix, funding categories, and internal/external education around capital options. Public-facing versions must remain white-labeled and compliance-safe.

Verified routes:

- `funding/index.html`
- `funding/products.html`

Compatibility route:

- `products.html`

### Vertical Funnels

Industry-specific pages for focused acquisition.

Verified routes:

- `verticals/index.html`
- `verticals/trucking.html`
- `verticals/medical.html`
- `verticals/ecommerce.html`
- `verticals/contractors.html`
- `verticals/real-estate.html`

### Problem-Solution Funnels

Pages organized around an urgent capital pain point.

Verified routes:

- `solutions/index.html`
- `solutions/bank-denial.html`
- `solutions/payroll-gap.html`
- `solutions/equipment-now.html`
- `solutions/zero-revenue.html`

### Internal Docs

Operational and strategic docs that help humans and AI agents maintain the repo.

Examples:

- `AGENTS.md`
- `docs/build-roadmap.md`
- `docs/ai-agents-architecture.md`
- `docs/known-issues.md`

## Naming Rules

- Use lowercase kebab-case filenames.
- Use folder indexes for major hub pages: `tools/index.html`, `funding/index.html`, etc.
- Keep public URLs readable and business-friendly.
- Avoid vague names like `page2.html`, `new.html`, or `final-final.html`.
- Do not rename live or linked files without updating navigation and docs.

## Link Rules

- Root pages should link to nested pages with explicit relative paths, such as `tools/index.html`.
- Nested pages should link back to root with `../index.html` where appropriate.
- When a file moves, update page navigation, homepage cards/CTAs, partner page cards/CTAs, README, and `docs/known-issues.md`.

## Future Migration Note

A future Next.js or app-based architecture may make sense when the project needs:

- Programmatic SEO.
- Authenticated partner dashboards.
- Server-side AI calls.
- CRM API integration.
- Database-backed product/routing rules.

Until then, static HTML is the correct default: fast, cheap, portable, and harder to break.
