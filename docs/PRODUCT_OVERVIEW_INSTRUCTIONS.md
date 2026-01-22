# Product Overview Instructions (LeadFlexUp)

## What this app is

**LeadFlexUp** is an all-in-one “growth workspace” for SMBs to get more leads, respond faster, close more sales, and understand what’s working—without juggling multiple tools.

## Multi-business model (core concept)

- One **Account** can manage multiple **Businesses**.
- Each **Business** has its own isolated workspace (dashboard, tools, analytics) so data doesn’t mix.
- A top-level **Global Dashboard** provides an executive snapshot across all businesses.

## Dashboards

- **Global Dashboard** (account-wide): lead volume, conversion direction, revenue direction, plan/usage, live activity feed; ability to jump into a specific business.
- **Business Dashboard** (per-business): daily control room with KPIs (total leads, conversion rate, revenue, active campaigns) plus a grid of tools.

## Primary tools inside a Business

- Unified Inbox: all inbound messages in one place; reply quickly; never miss a lead.
- Lead CRM Pipeline: stages like new → contacted → qualified → won/lost.
- Email Marketing: campaigns + automated sequences for nurturing.
- Social Media Automation: plan/schedule posts; track performance.
- Lead Forms: simple form builder; embed; track conversion per form.
- Digital Business Cards: share contact details instantly; make offline leads trackable.
- Brand Kit & AI Persona: logos/colors/tone consistency across outputs.
- Website SEO Audit: actionable recommendations for visibility/performance.
- Lead Scorer: prioritizes leads most likely to convert.
- Business Analytics: trends, sources, funnel, top offers/services, exports.
- Integrations Hub: connect payments/messaging/analytics/automation/CRM tools.
- Business Settings: business info, team access, notifications, “danger zone”.

## Account-wide areas

- Global Analytics (cross-business reporting)
- Team Management (invite users, assign roles)
- Subscription (plan/billing)
- Profile (personal preferences/security)
- AI Content Studio (generate marketing drafts; user reviews/edits; respects selected business + brand voice)

## UI mapping in this repo (current state)

- The **main marketing landing page** should live in [src/pages/landingPage.jsx](../src/pages/landingPage.jsx) (file currently empty).
- There is **no routing yet**; [src/main.jsx](../src/main.jsx) renders [src/App.jsx](../src/App.jsx), so `App` will need to render the landing page directly until routing is added.
