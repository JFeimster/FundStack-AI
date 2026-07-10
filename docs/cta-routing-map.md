# FundStack AI CTA Routing Map

## Purpose

FundStack AI is the public education and traffic-routing layer for funding readiness, tools, vertical funnels, problem-solution funnels, partner recruitment, and partner assets.

The machine-readable source of truth is `data/cta-routing.json`.

## Routing rules

- Am I Fundable is the canonical readiness destination.
- FundStack tools may calculate, educate, or pre-frame a conversation; they do not replace the canonical readiness score.
- Partner signup remains separate from borrower and funding-lead intake.
- Existing canonical paths and aliases remain available.
- CTA links carry available `partner_id`, `tracking_link_id`, `campaign_id`, `widget_id`, `source_url`, and UTM values.
- Direct traffic keeps partner attribution empty; it is never assigned to a fake partner.

## Page routing

| Page | Audience / problem | Primary CTA | Secondary CTA | Workflow | Related tool / vertical | Partner use case | Revenue path |
|---|---|---|---|---|---|---|---|
| `/` | General visitors need a clear first step | Check Funding Readiness → Am I Fundable | Explore Funding Tools | Hub → readiness → human review → lead router | Am I Fundable / all | General share link | Readiness → review → funded or nurture |
| `/tools/index.html` | Visitors need the correct diagnostic tool | Check Funding Readiness | Browse Funding Paths | Tool selection → readiness → review | Tool library / all | Curated tool menu | Tool engagement → lead |
| `/tools/fundability-score.html` | Simplified local scoring conflicts with canonical scoring | Run Full Readiness Check | Review Funding Paths | Compatibility page → Am I Fundable | Am I Fundable / all | Replacement for old score link | Canonical score → review |
| `/tools/fund-match-quiz.html` | Prospect needs product-family education | Check Readiness for the Match | Open Product Map | Quiz → readiness → review | Match Quiz / all | Pre-frame file | Product interest → review |
| `/qualifier.html` | Partner needs fast, non-underwriting triage | Continue to Full Readiness Check | Use Match Quiz | Qualifier → readiness → review | Qualifier / all | Rapid pre-screen | Qualified interest → review |
| `/tools/startup-planner.html` | Newer business needs preparation guidance | Build Readiness Plan | Review Zero-Revenue Options | Planner → readiness → nurture/review | Startup Planner / startups | Early-stage education | Preparation → later funding |
| `/tools/cost-of-capital.html` | Owner must compare capital cost to opportunity | Check Funding Readiness | Review Funding Products | Calculator → readiness → review | Cost of Capital / all | Business-case framing | ROI-qualified need → funding |
| `/tools/dscr-precheck.html` | Investor needs an educational property pre-check | Check Overall Readiness | Open Real Estate Guide | DSCR → readiness → property review | DSCR / real estate | Investor pre-frame | Property lead → financing |
| `/tools/amazon-cashflow.html` | Seller has inventory or payout timing pressure | Check Funding Readiness | Open E-commerce Guide | Cash-flow tool → readiness → review | Amazon tool / ecommerce | Seller gap diagnosis | Gap → working capital |
| `/funding/index.html` | Visitor needs product education | Check Funding Readiness | Open Product Matrix | Education → readiness → review | Product map / all | Broad funding questions | Education → matched opportunity |
| `/funding/products.html` | Visitor compares funding families | Check Your Readiness | Run Match Quiz | Product map → readiness → review | Product map / all | Safe product overview | Product interest → review |
| `/verticals/index.html` | Generic messaging lacks industry context | Check Funding Readiness | Explore Problem Guides | Vertical hub → readiness → review | All verticals | Industry campaign hub | Vertical traffic → funding |
| `/verticals/trucking.html` | Fuel, repair, payroll, and equipment pressure | Check Trucking Readiness | Equipment Guide | Vertical → readiness → review | Cost tool / trucking | Fleet and service campaigns | Lead → working capital/equipment |
| `/verticals/medical.html` | Collections, payroll, equipment, and expansion pressure | Check Practice Readiness | Equipment Guide | Vertical → readiness → review | Cost tool / medical | Practice/vendor campaigns | Lead → working capital/equipment |
| `/verticals/ecommerce.html` | Inventory and payout timing gaps | Check E-commerce Readiness | Run Amazon Tool | Vertical → tool/readiness → review | Amazon tool / ecommerce | Seller-community campaign | Lead → inventory capital |
| `/verticals/contractors.html` | Materials, payroll, and slow receivables | Check Contractor Readiness | Payroll Gap Guide | Vertical → readiness → review | Cost tool / contractors | Supplier/trade campaign | Lead → project capital |
| `/verticals/real-estate.html` | Property deals require a different review path | Check Investor Readiness | Run DSCR Pre-Check | Vertical → DSCR/readiness → review | DSCR / real estate | Agent/broker campaign | Investor lead → property financing |
| `/solutions/index.html` | Visitor identifies with a problem rather than a product | Check Funding Readiness | Explore Industry Guides | Problem hub → readiness → review | Am I Fundable / all | Problem-first campaigns | Problem-aware lead → funding |
| `/solutions/bank-denial.html` | Bank denial did not identify readiness gaps | Diagnose Readiness | Review Product Families | Denial education → readiness → prep/review | Am I Fundable / all | Decline follow-up | Alternative path or nurture |
| `/solutions/payroll-gap.html` | Payroll arrives before receivables | Check Funding Readiness | Calculate Cost of Capital | Gap page → readiness → urgent review | Cost tool / service businesses | Urgency campaign | Lead → working capital |
| `/solutions/equipment-now.html` | Equipment is needed to operate or grow | Check Funding Readiness | Calculate Cost of Capital | Equipment page → readiness → review | Cost tool / equipment-heavy verticals | Vendor/broker campaign | Lead → equipment financing |
| `/solutions/zero-revenue.html` | Pre-revenue owner needs realistic preparation | Build Startup Readiness Plan | Check Current Readiness | Education → planner → readiness/nurture | Startup Planner / startups | Expectation setting | Preparation → later opportunity |
| `/partners/index.html` | Prospective partner needs a clear onboarding path | Join Partner Network | View Partner Assets | Signup → classification → tracking/assets | Partner Intake | Recruitment hub | Partner activation → attributed leads |
| `/partners/assets.html` | Partner needs reusable tracked assets | Open Partner Dashboard | Join Partner Network | Asset → tracked link → FundStack → readiness | Dashboard / partner ecosystem | Distribution library | Traffic → attributed funded deals |

## Domain handling

- Canonical domain: `https://fundstack-ai.vercel.app`
- Compatibility domain: `https://fund-stack-ai.vercel.app`
- Readiness destination: `https://am-i-fundable.vercel.app/`
- Partner signup: `https://tally.so/r/mOe658`

## Compliance boundary

CTAs use education, readiness, preparation, and human-review language. They do not promise approval, amounts, rates, terms, timing, or provider availability.
