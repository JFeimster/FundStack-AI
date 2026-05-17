# Moonshine Capital Build Roadmap

This document serves as the master checklist for the ecosystem build-out, aligned directly with the strategy outlined in 05-build-roadmap.md.

## ✅ Phase 1: Fast MVP (Completed)

We have successfully built the core operational platform and routing engine.

- index.html (Main partner recruitment hub)
- products.html (White-labeled product family pages)
- guide.html (Digital Master Handbook & internal routing logic)
- dashboard.html (Simple attribution dashboard & tracking URL generator)
- qualifier.html (Blue Collar Banker lead qualifier)
- fund-match-quiz.html (Primary funding match intake quiz)
- fundability-score.html (Embeddable CRM webhook capture widget)

## ✅ Phase 2: Distribution System (Completed)

We have built the highly targeted "Engineering-as-Marketing" widgets and vertical funnels.

- startup-planner.html (Startup estimator tool)
- simulator.html (Partner Yield & ROI simulator)
- ecom-cashflow-tool.html (Amazon Cashflow gap tool)
- cost-of-capital.html (ROI Comparator for objection handling)
- dscr-precheck.html (Real estate deal analyzer)
- vertical-trucking.html (Logistics vertical funnel)
- vertical-medical.html (Medical vertical funnel)
- vertical-ecommerce.html (E-com vertical funnel)
- vertical-contractors.html (Construction vertical funnel)
- solution-bank-denial.html (Problem-solution funnel)
- solution-payroll-gap.html (Problem-solution funnel)
- solution-equipment-now.html (Problem-solution funnel)
- solution-zero-revenue.html (Problem-solution funnel)

## ⏳ Phase 3: Marketplace Layer (Next Steps)

To evolve from a lead-gen machine into a true marketplace, we need to build:

- **Searchable Product Directory UI:** Upgrading products.html into a fully dynamic React/Next.js application where users can sort via sliders and toggles.
- **Programmatic SEO Structure:** Create a template to generate hundreds of pages (e.g., "Term Loans for Plumbers in Texas").
- **Advanced Partner Portal:** A secure, authenticated portal (via Clerk/Supabase) where partners can view live pipeline statuses synced via CRM API.

## 🔮 Phase 4: Platform Layer (Future Architecture)

- **AI Deal Desk Assistant:** A chat interface for brokers to evaluate complex files before submission.
- **Automated Turndown Triage:** A system that ingests a bank denial letter, reads it via LLM, and automatically outputs a Moonshine Capital term sheet estimate.
- **Internal Rule Management UI:** A dashboard for the Moonshine team to adjust the logic gates (FICO thresholds, revenue minimums) without touching front-end code.
