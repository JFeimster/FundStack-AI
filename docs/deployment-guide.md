# Deployment Guide

This guide documents the production release path for FundStack AI.

## Current Production State

- Canonical production URL: https://fundstack.distilledfunding.com/
- Cloudflare Pages URL: https://fundstack-ai.pages.dev/
- Repository: `JFeimster/FundStack-AI`
- Hosting: Cloudflare Pages
- Production branch: `main`
- Framework preset: `None`
- Build command: blank
- Build output directory: `.`
- Root directory: repository root
- DNS provider: Wix
- DNS record: `fundstack.distilledfunding.com` CNAME → `fundstack-ai.pages.dev`

The legacy Vercel project is no longer canonical and should remain disabled until it is retired.

## Cloudflare Pages Files

Production hosting behavior is controlled by:

- `_headers` — security, cache, content-type, and canonical Link headers.
- `_redirects` — compatibility redirects for legacy paths.
- `robots.txt` — crawl guidance using the canonical domain.
- `sitemap.xml` — canonical production URLs.
- `data/cta-routing.json` — canonical routing metadata used by the site.

`vercel.json` remains only as a legacy safety/configuration file so an accidental Vercel deployment cannot become canonical.

## Release Workflow

1. Make related changes in a coherent commit group.
2. Push or merge to `main`.
3. Cloudflare Pages deploys the repository through its Git integration.
4. Use `fundstack.distilledfunding.com` as the production hostname.
5. If a release fails, inspect the Cloudflare Pages deployment log and fix the repo/build configuration rather than reactivating Vercel.

## Static Site Constraints

FundStack AI is intentionally static-first. Do not add a framework, package manager, server runtime, API route, or authentication layer unless a future product requirement actually needs one.

## Legacy Vercel State

- Previous canonical hostname: `https://fundstack-ai.vercel.app/`
- Automatic Vercel Git deployments remain disabled in `vercel.json`.
- The old Vercel project should be retired after the Cloudflare custom domain is active and serving the current Pages deployment.
