# FundStack AI

Moonshine Capital Partner Ecosystem

FundStack AI is a static-first partner enablement and funding-intelligence hub for Moonshine Capital. It combines partner recruitment pages, borrower-facing funding tools, qualification logic, vertical funnels, and internal operating documentation into one GitHub-backed website deployed on Vercel.

Live site:

- https://fund-stack-ai.vercel.app/

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
- Repeated inline CSS and JavaScript across several pages.
- Tally embed usage for partner/application intake.
- Vercel hosting with automatic Git deployments disabled.

Future cleanup should move repeated styling and behavior into shared files under:

- `assets/css/`
- `assets/js/`
- `data/`

## Current Known Page Types

The repo currently includes or has referenced the following page categories:

### Public / Partner Acquisition

- `index.html` — main FundStack AI landing page.
- `partners/index.html` — partner recruitment and onboarding page.

### Partner Assets

- Partner dashboard pages.
- Link-in-bio style profile assets.
- Partner guide / success guide pages.

### Tools and Calculators

- Lead qualifier tools.
- Fundability or funding match tools.
- Startup planner tools.
- Cost-of-capital calculators.
- DSCR / real estate pre-check tools.
- E-commerce or cash-flow calculators.

### Funding / Product Intelligence

- Funding product matrix or product catalog pages.
- Funding product portfolio documentation.
- Routing logic documents.

### Vertical and Problem-Solution Funnels

- Trucking / logistics.
- Medical / dental.
- E-commerce.
- Contractors.
- Real estate.
- Bank denial recovery.
- Payroll gap.
- Equipment need.
- Zero-revenue / startup funding.

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

1. Complete repo hygiene documentation.
2. Add compliance and product-routing docs.
3. Add shared `assets/` and `data/` foundations.
4. Audit and repair links after recent file moves.
5. Add ecosystem hub pages for tools, funding, partners, verticals, and solutions.
6. Standardize homepage and partner-page messaging.
7. Standardize tool page layout, CTAs, and disclaimers.
8. Add static SEO basics.
9. Prepare one intentional release checklist before any manual deployment.

## Related Docs

- `AGENTS.md` — AI/operator rules for working in this repo.
- `docs/site-structure.md` — current and recommended route structure.
- `docs/known-issues.md` — active cleanup list and known risks.
- `docs/build-roadmap.md` — roadmap already present in the repo.
- `docs/ai-agents-architecture.md` — existing AI agent architecture notes.
