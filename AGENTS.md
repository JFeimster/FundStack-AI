# AGENTS.md

This file defines operating instructions for AI coding agents, connector-based editors, and human operators working in the `JFeimster/FundStack-AI` repository.

## Repo Purpose

FundStack AI is a static-first Moonshine Capital partner ecosystem. It supports partner recruitment, funding readiness tools, borrower-facing calculators, product-routing education, and partner enablement assets.

The repo is currently optimized for static hosting on Vercel. Do not turn it into a framework app unless explicitly approved.

## Hard Rules

1. **Keep the repo static-first.**
   - Do not add Next.js, React, Vite, Astro, package.json, npm dependencies, build tooling, API routes, auth, database clients, or serverless functions unless explicitly approved.

2. **Do not trigger Vercel deployments.**
   - Automatic Git deployments are disabled in `vercel.json`.
   - Do not remove or override `git.deploymentEnabled: false`.
   - Do not manually deploy unless the user explicitly approves a release/deployment step.

3. **Avoid tiny commits.**
   - Group related changes into controlled commit batches.
   - Prefer one commit theme at a time: docs, data foundation, link repair, hub pages, SEO, release prep.

4. **Confirm paths before editing.**
   - This repo has recently moved or renamed several files.
   - Before changing linked routes, fetch/check the target file when possible.
   - If a path is missing, document the mismatch before guessing.

5. **Do not expose backend lender/provider routing publicly.**
   - Public pages should not reveal backend provider relationships, lender names, or internal routing mechanics unless the user explicitly approves it.
   - Internal docs may reference routing concepts where necessary.

6. **Preserve partner attribution.**
   - Be careful with `partner_id`, UTM values, referral links, Tally embeds, and CTA destinations.
   - Do not break attribution paths while cleaning up navigation.

7. **Keep public copy compliance-safe.**
   - No guaranteed approvals.
   - No guaranteed funding amounts.
   - No guaranteed funding speed.
   - No legal, tax, accounting, investment, or lending-approval advice.
   - Use language such as “explore options,” “may qualify,” “based on business profile,” and “provider criteria apply.”

8. **Preserve the brand feel.**
   - Dark-luxe fintech.
   - Practical and direct.
   - High-signal.
   - Partner-first.
   - No generic corporate sludge.

## Public Copy Guardrails

Preferred language:

- Explore funding options.
- See what may fit your business profile.
- Provider criteria apply.
- Approval, terms, amounts, and timing are not guaranteed.
- This tool is for planning and education, not lending approval.

Avoid:

- Guaranteed approval.
- Guaranteed funding.
- Instant approval for everyone.
- No risk.
- Best rate guaranteed.
- We approve everyone.
- You will qualify.

## Static Architecture Preferences

Use this structure as the preferred direction:

```txt
/
├── index.html
├── partners/
├── tools/
├── funding/
├── verticals/
├── solutions/
├── assets/
│   ├── css/
│   └── js/
├── data/
└── docs/
```

Shared styles should eventually live in:

- `assets/css/styles.css`

Shared JavaScript should eventually live in:

- `assets/js/app.js`

Shared content/configuration should eventually live in:

- `data/navigation.json`
- `data/tools.json`
- `data/site-config.json`
- `data/compliance-language.json`

## File Editing Protocol

Before editing:

1. Fetch the target file.
2. Check whether the path exists.
3. Identify any references to moved routes or stale links.
4. Preserve deployment settings.

After editing:

1. Summarize files changed.
2. Identify unresolved issues.
3. Ask for approval before proceeding to the next commit group.

## Current Known Risks

- Some docs or pages may reference older paths.
- Some HTML pages duplicate inline Tailwind config, CSS, and JavaScript.
- Some AI/demo logic may reference client-side API behavior that should eventually move behind a server-side or no-code automation layer.
- Some public copy may need softening for compliance safety.
- Some pages may include aspirational links to files that have moved or do not exist.

## Release Discipline

Do not deploy casually.

Preferred release workflow:

1. Complete approved commit groups.
2. Run route/link review.
3. Update release checklist.
4. Ask for approval.
5. Manually deploy once.

No deployment confetti. No build-slot bonfire.
