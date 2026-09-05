# FundStack AI

Moonshine Capital Partner Ecosystem

FundStack AI is a static-first partner enablement and funding-intelligence hub for Moonshine Capital. It combines partner recruitment pages, borrower-facing funding tools, qualification logic, vertical funnels, and internal operating documentation into one GitHub-backed website deployed on Vercel.

Live site:

- https://fundstack-ai.vercel.app/

Repository:

- `JFeimster/FundStack-AI`

## What This Repo Is

This repository contains the front-end marketplace, partner routing layer, and engineering-as-marketing assets for Moonshine Capital. The platform is designed to equip referral partners, affiliate partners, and funding brokers with high-converting tools while Moonshine Capital retains control over qualification logic, backend mapping, tracking, and fulfillment.

The site should remain static-first unless a future build phase explicitly requires a framework migration, authenticated dashboard, serverless API, or CRM-backed app layer.

## Core Philosophy: Engineering as Marketing

Instead of generic landing pages, this ecosystem uses interactive tools, calculators, quizzes, pre-checks, partner resources, and vertical-specific pages to attract, segment, qualify, and route commercial borrowers based on business profile signals such as revenue, time in business, credit tier, funding urgency, and use case.

The practical objective is simple:

1. Give partners useful assets they can share.
2. Give prospects simple tools that clarify funding readiness.
3. Capture better intake data before a human reviews the file.
4. Route opportunities intelligently instead of relying on application roulette.

## Current Architecture

This repo currently uses a static HTML/CSS/JavaScript structure.

Known architecture patterns:

- Root-level HTML pages for major public and partner pages.
- Nested folders for partner, funding, tools, docs, and other content areas.
- Inline Tailwind CDN usage in existing HTML files.
- Shared CSS foundation at `assets/css/styles.css`.
- Shared JavaScript utility foundation at `assets/js/app.js`.
- Lightweight data/config files under `data/`.
- Tally embed usage for partner/application intake.
- Vercel hosting with automatic Git deployments disabled.

Future cleanup should continue moving repeated styling and behavior into shared files under:

- `assets/css/`
- `assets/js/`
- `data/`

## Current Known Page Types

The repo currently includes or has referenced the following page categories:

### Public / Partner Acquisition

- `index.html` — main FundStack AI landing page.
- `partners/index.html` — partner recruitment and onboarding page.

### Partner Assets

- `partners/assets.html` — partner asset hub.
- `dashboard.html` — static partner dashboard / link generator concept.
- `partners/link-in-bio.html` — partner link-in-bio page.
- `partners/guide.html` — partner guide / success guide page.

### Tools and Calculators

- `tools/index.html` — tool library hub.
- `qualifier.html` — lead qualifier.
- `tools/fund-match-quiz.html` — funding match quiz.
- `tools/fundability-score.html` — embeddable fundability scorecard.
- `tools/startup-planner.html` — startup readiness planner.
- `tools/cost-of-capital.html` — cost of capital calculator.
- `dscr-precheck.html` — DSCR pre-check.
- `tools/amazon-cashflow.html` — e-commerce cashflow calculator.

### Funding / Product Intelligence

- `funding/index.html` — funding hub.
- `funding/products.html` — funding product matrix/catalog page.
- `docs/product-routing-logic.md` — routing framework.
- `docs/compliance-rules.md` — compliance copy rules.

### Vertical and Problem-Solution Funnels

- `verticals/index.html` — vertical hub.
- `verticals/trucking.html`
- `verticals/medical.html`
- `verticals/ecommerce.html`
- `verticals/contractors.html`
- `verticals/real-estate.html`
- `solutions/index.html` — solution hub.
- `solutions/bank-denial.html`
- `solutions/payroll-gap.html`
- `solutions/equipment-now.html`
- `solutions/zero-revenue.html`

## Deployment Status

Automatic Vercel Git deployments are intentionally disabled through `vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  }
}
```

Do not remove or override this setting unless a release/deployment step is explicitly approved.

This repo should be edited in controlled commit groups. Avoid small one-off commits that burn deployment capacity or create avoidable review noise.

## Release Process

Use the release docs before any production deployment:

- `docs/deployment-guide.md` — explains deployment controls, manual release options, and Vercel safety rules.
- `docs/release-checklist.md` — checklist to run before and after an approved manual deployment.

Default release rule:

> Do not deploy without explicit approval.

Before any deployment, ask:

> Approve deploying the current `main` branch to Vercel?

## Static SEO and Hosting

The repo now includes:

- `robots.txt`
- `sitemap.xml`
- static headers in `vercel.json`

The sitemap should only include verified routes. Do not add speculative URLs or planned pages that do not exist yet.

## Public Copy Rules

Public-facing pages must stay compliance-safe.

Use language such as:

- "Explore funding options."
- "You may qualify based on your business profile."
- "Provider criteria apply."
- "Approval, terms, amounts, and timing are not guaranteed."

Avoid language such as:

- "Guaranteed approval."
- "Guaranteed funding."
- "Instant approval for everyone."
- "You will qualify."
- "No risk."
- "Best rate guaranteed."

## Protection Rules

- **No backend exposure on public pages:** Backend lender/provider names and routing relationships should not be exposed publicly unless intentionally documented for internal use.
- **Partner protection:** Partner links, referral IDs, and attribution logic must be preserved when editing intake paths or CTAs.
- **Routing discipline:** Do not imply that every applicant fits every product. Funding options should be framed around business profile, documentation, revenue, credit tier, time in business, and provider criteria.
- **Static-first discipline:** Do not introduce a framework, build step, API route, package manager, auth provider, or server-side dependency unless explicitly approved.
- **Deployment discipline:** Keep automatic Git deployments disabled unless a release step is explicitly approved.

## Editing Rules for Operators and AI Agents

1. Confirm file paths before editing.
2. Keep related changes grouped.
3. Preserve `vercel.json` deployment controls.
4. Do not manually deploy to Vercel without approval.
5. Keep public copy compliance-safe.
6. Keep backend/provider routing details out of public pages.
7. Prefer shared assets and data files over duplicated inline code.
8. Update documentation when changing structure, routes, or release process.
9. Treat `docs/known-issues.md` as the operating punch list.
10. When unsure, document the assumption instead of silently guessing.

## Recommended Next Priorities

1. Review the release checklist before any manual deployment.
2. Continue hub page design polish for `funding/`, `partners/assets.html`, `verticals/`, and `solutions/`.
3. Review vertical and solution pages for compliance-safe copy.
4. Improve hub-page metadata in smaller file-specific patches.
5. Continue consolidating repeated CSS/JS where practical.
6. Consider a future release branch strategy if the repo becomes more active.

## Related Docs

- `AGENTS.md` — AI/operator rules for working in this repo.
- `docs/site-structure.md` — current and recommended route structure.
- `docs/known-issues.md` — active cleanup list and known risks.
- `docs/deployment-guide.md` — deployment controls and release process.
- `docs/release-checklist.md` — checklist before any approved deployment.
- `docs/build-roadmap.md` — roadmap already present in the repo.
- `docs/ai-agents-architecture.md` — AI agent architecture notes.
- `docs/compliance-rules.md` — compliance-safe copy rules.
- `docs/product-routing-logic.md` — profile-based routing framework.
- `docs/content-style-guide.md` — FundStack voice and copy rules.
