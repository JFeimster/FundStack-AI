# FundStack AI Traffic-to-Workflow Map

## Operating role

FundStack AI is the public traffic-routing and education layer. It does not own the canonical readiness score, partner signup record, or downstream funding-lead system of record.

## Canonical funding workflow

```text
Traffic source
  → FundStack AI hub, tool, vertical, solution, or partner asset
  → page-specific CTA
  → Am I Fundable when readiness is the next step
  → canonical readiness result
  → document checklist or human review
  → Partner Command Center /api/lead-router
  → Funding Leads + Partner Event
  → partner-safe dashboard status
```

## Entry-point workflows

### General traffic

```text
Homepage or tools hub
  → Check Funding Readiness
  → Am I Fundable
  → readiness result
  → human review or nurture
```

### Tool traffic

```text
Calculator, quiz, or qualifier
  → educational result
  → Check Funding Readiness
  → Am I Fundable
  → human review
```

FundStack tools may frame the need, estimate cost, or classify a likely funding family. They do not replace the canonical readiness score.

### Vertical traffic

```text
Trucking / medical / ecommerce / contractors / real estate
  → industry education
  → related calculator or readiness CTA
  → Am I Fundable
  → vertical-aware human review
```

### Problem-solution traffic

```text
Bank denial / payroll gap / equipment now / zero revenue
  → problem education
  → readiness or preparation CTA
  → Am I Fundable or Startup Planner
  → human review or nurture
```

### Partner recruitment

```text
Partner hub
  → Tally partner signup
  → partner signup/classification workflow
  → partner onboarding
  → tracking link + resource assignment
```

Partner signup never posts to `/api/lead-router`.

### Partner distribution

```text
Partner assets or dashboard
  → tracked campaign link
  → FundStack page or tool
  → preserved attribution
  → Am I Fundable
  → Partner Command Center /api/lead-router
```

## Attribution flow

The shared client captures and carries:

- `partner_id`
- `tracking_link_id`
- `campaign_id`
- `widget_id`
- `source_url`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

The routing registry adds page-specific `source_asset`, UTM medium, and UTM campaign defaults.

Direct traffic keeps partner and tracking-link identifiers empty. It is never assigned to a fake partner.

## Destination ownership

| Destination | Owner | Purpose |
|---|---|---|
| FundStack AI | Public routing and education | Hubs, tools, verticals, solutions, partner assets |
| Am I Fundable | Canonical readiness engine | Score, tier, strengths, risks, documents, next steps |
| Partner signup routes | Partner lifecycle | Partner signup and classification only |
| Partner Command Center `/api/lead-router` | Funding-lead orchestration | Attribution validation, persistence, events, dashboard handoff |
| Funding Leads database | Operational lead projection | Applicant and readiness record |
| Partner Events | Audit and dashboard events | Safe lifecycle events only |

## Revenue paths

### Funding revenue

```text
Education or tool engagement
  → readiness completion
  → qualified human review
  → matched funding path
  → funded transaction
```

### Partner-channel revenue

```text
Partner recruitment
  → partner activation
  → tracked asset distribution
  → attributed readiness leads
  → funded transactions
  → partner/channel economics
```

### Nurture revenue

```text
Not-ready or zero-revenue profile
  → preparation plan
  → future readiness improvement
  → later funding or business-credit opportunity
```

## Navigation standard

Public business-owner pages use `Check Readiness` as the primary navigation CTA. Partner pages use `Join Partner Network` or `Open Partner Dashboard`.

## Compliance standard

All routes describe readiness, preparation, education, and review. They avoid approval guarantees, provider-specific promises, private provider data, and automated external submission without human review.
