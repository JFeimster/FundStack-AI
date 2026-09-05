# Release Checklist

Use this checklist before any manual Vercel deployment for FundStack AI.

Do not deploy unless the user explicitly approves deployment after this checklist has been reviewed.

## 1. Deployment Control Check

- [ ] Confirm `vercel.json` exists.
- [ ] Confirm `vercel.json` still includes `git.deploymentEnabled: false`.
- [ ] Confirm no one has manually triggered deployment without approval.
- [ ] Confirm the intended release branch is `main` unless another branch is explicitly approved.

## 2. Core Page Smoke Check

Verify these pages exist in the repo and should be checked after deployment:

- [ ] `/index.html`
- [ ] `/partners/index.html`
- [ ] `/partners/assets.html`
- [ ] `/tools/index.html`
- [ ] `/funding/index.html`
- [ ] `/verticals/index.html`
- [ ] `/solutions/index.html`

## 3. Core Tool Smoke Check

Verify these tool pages exist and should be checked after deployment:

- [ ] `/qualifier.html`
- [ ] `/dashboard.html`
- [ ] `/tools/fund-match-quiz.html`
- [ ] `/tools/fundability-score.html`
- [ ] `/tools/startup-planner.html`
- [ ] `/tools/cost-of-capital.html`
- [ ] `/dscr-precheck.html`
- [ ] `/tools/amazon-cashflow.html`

Compatibility redirect shims:

- [ ] `/products.html`
- [ ] `/guide.html`
- [ ] `/link-in-bio.html`
- [ ] `/fund-match-quiz.html`
- [ ] `/startup-planner.html`
- [ ] `/cost-of-capital.html`
- [ ] `/tools/dscr-precheck.html`
- [ ] `/tools/ecom-cashflow-tool.html`

## 4. Vertical Page Smoke Check

Verify these pages exist and should be checked after deployment:

- [ ] `/verticals/trucking.html`
- [ ] `/verticals/medical.html`
- [ ] `/verticals/ecommerce.html`
- [ ] `/verticals/contractors.html`
- [ ] `/verticals/real-estate.html`

## 5. Solution Page Smoke Check

Verify these pages exist and should be checked after deployment:

- [ ] `/solutions/bank-denial.html`
- [ ] `/solutions/payroll-gap.html`
- [ ] `/solutions/equipment-now.html`
- [ ] `/solutions/zero-revenue.html`

## 6. SEO and Static Hosting Check

- [ ] `robots.txt` exists.
- [ ] `sitemap.xml` exists.
- [ ] Sitemap uses verified routes only.
- [ ] `vercel.json` includes security/cache headers.
- [ ] `vercel.json` preserves auto-deploy disabled.

After deployment, verify:

- [ ] `https://fundstack-ai.vercel.app/robots.txt`
- [ ] `https://fundstack-ai.vercel.app/sitemap.xml`

## 7. Partner Intake Check

Before deployment:

- [ ] Confirm homepage still includes the Tally partner intake embed.
- [ ] Confirm partner page still includes the Tally partner intake embed.
- [ ] Confirm CTA links point to valid pages or anchors.

After deployment:

- [ ] Homepage form/iframe loads.
- [ ] Partner page form/iframe loads.
- [ ] No mixed-content or blocked iframe issues.

## 8. Compliance Check

Review public-facing copy for prohibited language.

Do not deploy if pages include unapproved claims such as:

- [ ] Guaranteed approval.
- [ ] Guaranteed funding.
- [ ] Guaranteed funding amount.
- [ ] Guaranteed speed/timing.
- [ ] Guaranteed rate or terms.
- [ ] “You are approved.”
- [ ] “You qualify” without qualification or caveat.
- [ ] Backend lender/provider exposure on public pages.

Approved language patterns:

- [ ] Explore funding options.
- [ ] May fit your profile.
- [ ] Provider criteria apply.
- [ ] Approval, terms, amounts, and timing are not guaranteed.
- [ ] Planning and education only.

## 9. Navigation Check

Before deployment, spot-check links in:

- [ ] `index.html`
- [ ] `partners/index.html`
- [ ] `tools/index.html`
- [ ] `funding/index.html`
- [ ] `verticals/index.html`
- [ ] `solutions/index.html`
- [ ] `dashboard.html`

## 10. Mobile and Visual Check

After deployment, check on desktop and mobile:

- [ ] Homepage layout.
- [ ] Partner page layout.
- [ ] Tool library layout.
- [ ] At least two core tool pages.
- [ ] Tally embed visibility.
- [ ] No horizontal overflow that breaks mobile use.

## 11. Approval Gate

Before any deployment, ask:

> Approve deploying the current `main` branch to Vercel?

Deployment should only happen after explicit approval.

## 12. Post-Deployment Notes

After deployment, record:

```txt
Deployment date:
Deployment method:
Commit SHA deployed:
Production URL:
Smoke test result:
Issues found:
Next fix batch:
```
