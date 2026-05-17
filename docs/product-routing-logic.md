# Product Routing Logic

This document defines the first-pass routing framework for FundStack AI tools, partner education, and intake logic.

It is not a final underwriting model. It is an operating framework for triage, education, and better intake conversations.

## Routing Principle

Route by business profile, not wishful thinking.

A useful funding path usually depends on:

1. Monthly revenue.
2. Time in business.
3. Credit tier.
4. Funding use case.
5. Urgency.
6. Documentation readiness.
7. Industry or asset type.
8. Bank/account/platform data availability.

No single signal should be treated as the full decision.

## Core Intake Fields

Recommended minimum fields for routing tools and partner intake:

```txt
business_name
industry
monthly_revenue
time_in_business
estimated_credit_tier
funding_amount_requested
funding_use_case
funding_urgency
bank_statements_available
business_bank_account_connected
existing_debt_or_advances
state
partner_id
source_url
utm_source
utm_campaign
```

Optional richer fields:

```txt
average_monthly_deposits
number_of_monthly_deposits
nsf_count
negative_days
personal_credit_score
business_entity_age
tax_returns_available
financial_statements_available
collateral_available
invoices_or_ar_available
real_estate_asset_type
marketplace_platform
platform_sales_history
```

## Primary Routing Families

### 1. Revenue-Based / Working Capital

Best-fit profile:

- Existing business revenue.
- Cash-flow need.
- Working capital, inventory, payroll, repairs, marketing, or short-cycle opportunity.
- Faster decision desired.

Common routing signals:

- Monthly revenue is present and consistent.
- Time in business is often 4-6+ months or more, depending on provider criteria.
- Credit may range from weaker to stronger depending on product type.
- Bank statements or bank connection may be required.

Compliance-safe public framing:

> Explore working-capital options based on revenue, time in business, documentation, and provider criteria.

### 2. Line of Credit / Revolving Access

Best-fit profile:

- Business wants flexible draw access rather than one lump sum.
- Recurring cash-flow gaps.
- Inventory cycles.
- Marketing spend.
- Contractor or service-business working capital.

Common routing signals:

- Stable revenue.
- Better credit tier may improve fit.
- Time in business often matters.
- Bank statements and business documentation may be required.

Compliance-safe public framing:

> Compare whether a revolving funding option may fit your recurring cash-flow needs.

### 3. Startup / Credit-Leverage

Best-fit profile:

- Newer business.
- No or limited business revenue.
- Founder has usable personal credit or outside income.
- Needs startup fuel, setup capital, or early growth liquidity.

Common routing signals:

- Time in business may be short or zero.
- Revenue may be low or absent.
- Personal credit and income profile become more important.
- Business credit-building sequence may be useful before heavier applications.

Compliance-safe public framing:

> Explore startup-friendly funding paths and business-credit preparation steps based on your profile.

### 4. Equipment / Asset-Backed

Best-fit profile:

- Business needs vehicles, equipment, tools, machinery, or assets tied to revenue production.
- Asset has clear value and business purpose.
- Borrower can provide quote, invoice, spec sheet, or equipment details.

Common routing signals:

- Equipment type.
- Asset age/condition.
- Business revenue.
- Time in business.
- Credit tier.
- Down payment or collateral support.

Compliance-safe public framing:

> Review whether equipment-focused financing options may fit the asset, business profile, and provider criteria.

### 5. Real Estate / DSCR / Investor Capital

Best-fit profile:

- Investor, developer, flipper, landlord, or commercial real estate operator.
- Property-backed capital need.
- Rental, bridge, fix-and-flip, DSCR, or commercial property use case.

Common routing signals:

- Property type.
- Purchase/refinance/rehab use case.
- LTV/LTC.
- Rent or projected income.
- Borrower experience.
- Credit tier.
- Appraisal or property docs.

Compliance-safe public framing:

> Explore real-estate funding paths based on the property, projected cash flow, borrower profile, and provider criteria.

### 6. E-commerce / Marketplace Seller Capital

Best-fit profile:

- Amazon, Shopify, Walmart, TikTok Shop, or marketplace seller.
- Platform sales history.
- Inventory or advertising cash-flow gap.
- Payout delay or growth-capital need.

Common routing signals:

- Marketplace/platform.
- Monthly sales.
- Store age.
- Account health.
- Platform connection availability.
- Inventory cycle and margin profile.

Compliance-safe public framing:

> Explore seller-friendly funding paths based on platform sales history, cash-flow cycle, and provider criteria.

### 7. Business Credit Builder / Readiness Path

Best-fit profile:

- Not currently fundable or borderline.
- Needs entity, bank account, credit profile, documentation, or cash-flow readiness.
- Wants to improve odds before applying.

Common routing signals:

- Low revenue.
- Very new entity.
- Weak or unclear credit profile.
- Incomplete documentation.
- No business banking separation.

Compliance-safe public framing:

> Build readiness before applying by organizing business banking, documentation, credit profile, and funding strategy.

## Disqualifier / Friction Signals

These signals do not automatically mean “no,” but they should trigger caution, alternative routing, or human review:

- Open bankruptcy.
- Recent severe delinquencies.
- Active tax liens.
- Repeated NSFs.
- Excessive negative days.
- Suspended marketplace account.
- No business bank account.
- Revenue below likely minimums.
- Very new entity with weak personal credit.
- Existing debt stack or multiple active advances.
- Missing bank statements or required documentation.
- Funding use case that does not match the requested product.

## Simple Triage Bands

### High Readiness

Likely profile:

- Clear revenue.
- Clear use case.
- Bank statements available.
- Reasonable time in business.
- Credit tier supports at least one product family.
- No obvious severe disqualifiers.

Recommended output:

- Show likely product family.
- Ask for documentation.
- Invite application or partner review.

### Medium Readiness

Likely profile:

- Some required data is missing.
- Revenue or credit is borderline.
- Use case needs clarification.
- Documentation may be incomplete.

Recommended output:

- Show possible paths.
- Identify missing items.
- Recommend readiness steps.
- Invite review without implying approval.

### Low Readiness

Likely profile:

- No revenue and weak credit.
- Very new entity and no outside income signal.
- Severe unresolved credit/legal/banking issue.
- No documentation.

Recommended output:

- Avoid pushing an application too early.
- Recommend business-credit/readiness path.
- Explain what must improve.
- Offer education, checklist, or planning tool.

## Example Routing Logic

Use examples only as planning logic, not final underwriting rules.

```txt
IF monthly_revenue >= 15000
AND time_in_business >= 6 months
AND funding_use_case IN [working capital, payroll, inventory, repairs]
THEN suggest Working Capital / Revenue-Based review.
```

```txt
IF monthly_revenue == 0
AND time_in_business < 6 months
AND estimated_credit_tier == strong
THEN suggest Startup / Credit-Leverage or Business Credit Readiness review.
```

```txt
IF use_case == equipment
AND asset_details_available == true
THEN suggest Equipment / Asset-Backed review.
```

```txt
IF use_case == real_estate
AND property_details_available == true
THEN suggest Real Estate / DSCR / Investor Capital review.
```

```txt
IF marketplace_sales_history == true
AND platform_account_healthy == true
THEN suggest E-commerce / Marketplace Seller Capital review.
```

## Recommended Tool Output Format

Every tool should return:

1. Profile summary.
2. Likely funding family.
3. Key strengths.
4. Key friction points.
5. Missing documents/data.
6. Suggested next step.
7. Compliance-safe disclaimer.

Example:

```txt
Based on the information provided, your profile may fit a working-capital review. Your strongest signal is monthly revenue. Your main friction point is limited time in business. Before applying, gather recent bank statements and confirm your funding use case. Provider criteria apply, and approval, terms, amounts, and timing are not guaranteed.
```

## Human Review Triggers

Route to human review when:

- Requested amount is high relative to revenue.
- Credit/tax/legal issues are present.
- Multiple funding families could fit.
- Existing debt stack may affect eligibility.
- Real estate or equipment details are incomplete.
- AI output expresses uncertainty.
- Partner attribution or referral source is unclear.

## Implementation Notes

For static tools, keep logic simple and transparent.

For future API/agent tools:

- Separate deterministic calculations from AI explanation.
- Do not let AI invent approvals or terms.
- Use AI to summarize, explain, and suggest next steps after rules/calculations run.
- Log input fields and output category for CRM review.
- Keep backend provider details out of public responses.
