# AI Agents & Triage Automation

As outlined in the master roadmap, the ultimate scale vector for the Moonshine Capital platform is deploying AI agents to handle triage, partner support, and turndown recovery.

## 1. The Deal Desk Intake Agent

- **Role:** Operates at the top of the funnel _(attached to the Tally form or CRM webhook)_.
- **Function:** Ingests the JSON payload from the lead form, calculates the internal "Fundability Score," and tags the lead with the correct product family _(e.g., TAG: REVENUE_ADVANCE or TAG: STARTUP_LEVERAGE)_.
- **Prompt Logic:** "You are a Moonshine Capital underwriter. Analyze this incoming lead data. If revenue > $15k and FICO < 600, route to Revenue Advance. If FICO > 680 and Revenue = $0, route to Startup Leverage."

## 2. Partner Success Bot _(The "Matrix Navigator")_

- **Role:** Lives inside the authenticated Partner Dashboard.
- **Function:** Allows partners to type conversational queries like "I have a trucking client doing $40k/mo with a 580 FICO. What's the play?"
- **Response:** The AI searches the funding_product_portfolio_report.md data and replies: "Route to the Performance Revenue Advance. They meet the $15k minimum deposit threshold. Do not submit for equipment leasing due to the sub-600 FICO."

## 3. Turndown Recovery Agent _(Live in Dashboard)_

- **Role:** Converts bank rejections into alternative capital placements.
- **Function:** A partner pastes a bank's rejection email into the UI. The AI extracts the rejection reason _(e.g., "insufficient collateral")_ and drafts a personalized email pivoting the client to a Cash-Flow based Moonshine product.

## 4. Post-Funding Renewal Engine _(Automated)_

- **Role:** CRM-based monitoring.
- **Function:** Tracks when a borrower has paid down 50% of their Revenue Advance. Triggers an automated, white-labeled email from the original Partner offering a top-up or facility expansion via the cash-command.html portal.
