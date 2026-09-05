# Deployment Guide

This guide documents the release process for FundStack AI.

## Current Deployment State

Live site:

- https://fundstack-ai.vercel.app/

Repository:

- `JFeimster/FundStack-AI`

Hosting:

- Vercel

Deployment mode:

- Static site
- No framework build step required unless explicitly approved later
- Automatic Git deployments are disabled

## Critical Deployment Rule

Do not remove this setting from `vercel.json` unless a release/deployment step is explicitly approved:

```json
{
  "git": {
    "deploymentEnabled": false
  }
}
```

This setting prevents every Git commit from triggering a Vercel build. The project should use controlled commit groups and intentional release deployments.

## Why Auto-Deploy Is Disabled

The repo is being edited through connector-based workflows. Those workflows often create one Git commit per file operation. If automatic Git deployments are enabled, every small file change can burn a Vercel deployment/build slot.

The correct operating pattern is:

1. Batch repo changes.
2. Review the release checklist.
3. Approve one intentional deploy.
4. Deploy manually or re-enable deployment only when needed.

No deployment confetti. No build-slot bonfire.

## Recommended Release Workflow

### 1. Complete Approved Commit Groups

Before deployment, confirm the intended commit groups are complete.

Current cleanup sequence:

1. Repo hygiene and operator documentation.
2. Compliance and product-routing docs.
3. Shared assets and data foundation.
4. Route audit and link repair.
5. Ecosystem hub pages.
6. Homepage and partner messaging cleanup.
7. Tool page standardization.
8. SEO and static hosting basics.
9. Release prep and manual deploy checklist.

### 2. Run the Release Checklist

Use:

- `docs/release-checklist.md`

Do not deploy until the checklist has been reviewed.

### 3. Confirm No Accidental Deployment Triggers

Before deployment, verify `vercel.json` still includes:

```json
"git": {
  "deploymentEnabled": false
}
```

### 4. Choose Deployment Method

Preferred options:

#### Option A: Manual Vercel Deployment

Use Vercel dashboard or approved connector action to deploy intentionally.

Use this when:

- A release batch is ready.
- The checklist is complete.
- The user explicitly approves deployment.

#### Option B: Temporarily Re-Enable Git Deployment

Only if explicitly approved, change `vercel.json` to allow deployment again, push the release, then disable auto-deploy again immediately after release.

This is not preferred because it can accidentally reopen the deployment floodgate.

#### Option C: Use a Release Branch Later

Future optional strategy:

- Develop on `main` with auto-deploy disabled.
- Deploy from a dedicated `production` or `release` branch.
- Configure Vercel to only deploy approved release branch changes.

This should be considered later if the repo becomes more active.

## Static Hosting Notes

The repo currently includes:

```txt
robots.txt
sitemap.xml
assets/css/styles.css
assets/js/app.js
vercel.json
```

`vercel.json` includes basic headers for:

- Security hardening.
- Static asset caching.
- Sitemap content type.
- Robots content type.

## Release Safety Rules

Do not deploy if:

- `vercel.json` no longer disables Git auto-deployment.
- Public pages include guaranteed approval/funding language.
- The sitemap includes unverified routes.
- The partner intake form is broken.
- Major navigation links are broken.
- The homepage or partner page has missing CSS/JS references.
- The user has not explicitly approved deployment.

## Post-Deployment Checks

After a deployment is approved and completed, verify:

- Homepage loads.
- Partner page loads.
- Tally embed loads.
- Tool library loads.
- Core tools load.
- Funding hub loads.
- Vertical hub loads.
- Solution hub loads.
- `robots.txt` loads.
- `sitemap.xml` loads.

## Manual Deployment Approval Language

Before any deployment, ask:

> Approve deploying the current `main` branch to Vercel?

Do not deploy without an explicit yes.
