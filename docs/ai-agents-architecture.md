# AI Agents & Triage Automation

This document defines the implementation direction for AI-assisted intake, partner support, turndown recovery, and renewal workflows inside the FundStack AI / Moonshine Capital ecosystem.

These agents are not final underwriters. They support triage, education, drafting, routing, and operational follow-up. Deterministic rules and human review should remain the source of truth for sensitive decisions.

## Core Architecture Principle

Use AI after structured logic, not instead of it.

Recommended sequence:

1. Collect structured input.
2. Run deterministic checks or calculations.
3. Classify likely product/routing family.
4. Generate a plain-English explanation.
5. Add compliance-safe next steps.
6. Flag uncertain or risky files for human review.

AI should not invent approvals, rates, amounts, timelines, or provider decisions.

## Security Boundary

Do not put live API keys in public HTML or client-side JavaScript.

For static pages, AI features should be:

- Mocked.
- Disabled.
- Routed through approved no-code automation.
- Routed through a secure server-side endpoint in a future approved build phase.

Any future server-side AI workflow must protect:

- API keys.
- CRM tokens.
- Applicant data.
- Partner attribution.
- Internal routing logic.
- Backend provider relationships.

## Data Dependencies

Primary future data sources:

```txt
data/tools.json
data/navigation.json
data/compliance-language.json
data/site-config.json
funding/product data or product matrix source
CRM lead/contact/deal records
Tally or form submission payloads
partner_id / UTM attribution values
```

Operational docs that agents should follow:

```txt
docs/compliance-rules.md
docs/product-routing-logic.md
docs/content-style-guide.md
docs/site-structure.md
docs/known-issues.md
```

## Agent 1: Deal Desk Intake Agent

### Role

Operates at the top of the funnel. It reviews structured intake data from forms, widgets, or CRM webhooks and suggests a routing category.

### Primary Inputs

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

### Optional Inputs

```txt
average_monthly_deposits
nsf_count
negative_days
collateral_available
invoices_or_ar_available
marketplace_platform
platform_sales_history
property_details
equipment_details
```

### Outputs

```txt
profile_summary
likely_routing_family
readiness_band
strengths
friction_points
missing_documents
recommended_next_step
human_review_required
partner_attribution_status
compliance_safe_disclaimer
```

### Rules

- Do not say the user is approved.
- Do not estimate final terms unless deterministic and clearly labeled as educational.
- Do not expose backend providers publicly.
- Flag uncertain or risky files for review.
- Preserve `partner_id` and source attribution.

### Human Review Triggers

- High requested amount relative to revenue.
- Existing debt stack or multiple active advances.
- Credit/tax/legal friction.
- Missing revenue documentation.
- Multiple possible routing families.
- Real estate or equipment files with incomplete asset details.

## Agent 2: Partner Success Bot / Matrix Navigator

### Role

Helps partners understand where a file may fit based on business profile signals.

### Example Partner Query

```txt
I have a trucking client doing $40k/month with a 580 FICO. They need $35k for repairs. What is the play?
```

### Expected Behavior

The bot should respond with:

1. A short profile summary.
2. Possible routing family.
3. Likely friction points.
4. Missing documents.
5. Suggested next move.
6. Compliance-safe caution.

### Response Style

Direct, practical, and partner-facing.

Example:

```txt
This looks more like a working-capital or revenue-based review than a prime credit line. Strong signal: monthly revenue. Friction: lower credit tier and repair urgency. Gather recent bank statements, confirm existing advances, and avoid presenting this as approved until reviewed. Provider criteria apply.
```

### Boundaries

- Do not identify backend providers in public or partner-shareable outputs unless the user explicitly approves internal-provider context.
- Do not fabricate product names.
- Do not promise approval, rate, speed, or commission.

## Agent 3: Turndown Recovery Agent

### Role

Converts bank denials or funding rejections into useful, compliance-safe follow-up drafts.

### Primary Inputs

```txt
rejection_reason
client_business_type
funding_use_case
known_revenue
known_credit_tier
partner_name
preferred_cta
```

### Outputs

```txt
rejection_reason_summary
possible_alternative_angle
client_email_draft
partner_call_script
follow_up_subject_lines
risk_notes
```

### Drafting Rules

- Acknowledge the rejection without insulting the bank.
- Pivot to a profile-based review, not a guaranteed alternative.
- Keep the draft short.
- End with a clear CTA.
- Include no guarantees.

### Safe Draft Pattern

```txt
Hey [Name] — I saw the bank passed based on [reason]. That does not always mean every funding path is closed. Some options review cash flow, time in business, documentation, or use case differently. If you want, we can look at your profile and see what may still be worth reviewing. Approval, terms, amounts, and timing are not guaranteed.
```

## Agent 4: Post-Funding Renewal Engine

### Role

Supports follow-up for funded clients and potential renewal/top-up conversations.

### Trigger Examples

- Estimated paydown threshold reached.
- Renewal window approaching.
- Partner follow-up due.
- CRM stage changes.
- Client engagement event.

### Outputs

```txt
renewal_readiness_note
partner_follow_up_task
client_email_draft
crm_note
recommended_review_items
```

### Rules

- Do not imply guaranteed renewal.
- Confirm current balance, paydown, revenue, and performance before outreach.
- Preserve original partner attribution.
- Frame as a review, not a promise.

## Agent 5: Compliance Copy Reviewer

### Role

Reviews public page copy, tool outputs, CTA text, and AI drafts for risky claims.

### Inputs

```txt
page_or_message_text
audience
page_type
cta_destination
```

### Outputs

```txt
risk_level
flagged_phrases
replacement_phrases
approved_disclaimer
publish_ready_boolean
```

### Flag These Phrases

- Guaranteed approval.
- Guaranteed funding.
- Instant funding for everyone.
- No risk.
- Best rates guaranteed.
- Everyone qualifies.
- You are approved.

### Preferred Replacements

- May qualify.
- Explore options.
- Based on business profile.
- Provider criteria apply.
- Approval, terms, amounts, and timing are not guaranteed.

## Agent 6: Partner Asset Generator

### Role

Creates partner-friendly scripts, captions, emails, and landing-page copy from approved source material.

### Inputs

```txt
partner_type
audience
funding_use_case
tone
cta
compliance_disclaimer
```

### Outputs

```txt
short_caption
email_draft
dm_script
landing_page_section
cta_variants
compliance_notes
```

### Rules

- Use only approved public claims.
- Do not expose backend provider names.
- Keep partner attribution links intact.
- Include compliance disclaimer where funding outcomes are discussed.

## Prompt Implementation Pattern

Every future agent prompt should include:

1. Role.
2. Audience.
3. Inputs.
4. Allowed outputs.
5. Forbidden claims.
6. Compliance rules.
7. Routing logic source.
8. Human-review triggers.
9. Output format.

## Recommended Output JSON Shape

For future API/no-code automation workflows:

```json
{
  "profileSummary": "",
  "routingFamily": "",
  "readinessBand": "high | medium | low",
  "strengths": [],
  "frictionPoints": [],
  "missingItems": [],
  "recommendedNextStep": "",
  "humanReviewRequired": false,
  "partnerAttributionStatus": "",
  "complianceDisclaimer": "Approval, terms, amounts, and timing are not guaranteed. Provider criteria apply."
}
```

## Future Implementation Phases

### Phase 1: Static Demo / Mocked Outputs

- Keep public pages static.
- Use deterministic JavaScript for calculators.
- Mock AI outputs or keep demo disabled.
- Add disclaimers.

### Phase 2: No-Code Automation Layer

- Connect forms to Tally, Zapier, Make, n8n, HubSpot, or Google Sheets.
- Use AI for summaries and drafts after intake data is collected.
- Keep API keys out of public pages.

### Phase 3: Server-Side API Layer

Only after explicit approval:

- Add secure API endpoint.
- Store keys in Vercel environment variables.
- Add input validation.
- Add rate limiting if needed.
- Log outputs to CRM or database.

### Phase 4: Authenticated Partner Dashboard

Only after explicit approval:

- Add authentication.
- Add partner-specific views.
- Add pipeline sync.
- Add saved tools/results.
- Add renewal and follow-up automations.

## Human-in-the-Loop Review Points

Human review is required before:

- Sending AI-generated funding recommendations to applicants.
- Sending AI-generated rejection recovery messages at scale.
- Presenting any product-specific offer.
- Discussing rates, terms, timing, or amounts.
- Publishing new public copy with funding claims.
- Changing partner attribution or CTA routing.

## Final Operating Rule

AI should make the funding workflow clearer, faster, and better organized. It should never pretend to be the lender, the underwriter, the compliance department, or the wizard behind the curtain handing out guaranteed bags of money.
