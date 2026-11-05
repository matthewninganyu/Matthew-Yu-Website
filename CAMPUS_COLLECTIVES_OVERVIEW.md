# Campus Collectives — AI Agent Orchestration

## Results and date

Matthew reports 98 orders and over $6K revenue as business totals, with no specified currency. Manual operations fell from 10 to 2 hours weekly: an 80% reduction and 8 hours saved. These totals do not imply all orders were agent-processed. Displayed project date: December 2025. This date does not establish when every current automation feature was introduced.

## Architecture

Campus Collectives uses a custom AI fulfillment orchestrator with LangChain and Groq. It coordinates marketplace order intake, supplier drafts and freight validation, shipment-email parsing with AI enrichment, deterministic candidate matching, structured AI adjudication, carrier validation, and tracking updates. Ambiguous cases enter human review. Purchasing remains explicit. Displayed project date: December 2025; later capabilities are not attributed to launch.

The storefront uses Next.js, TypeScript, and Stripe checkout. The workflow persists orders, shipment evidence, decisions, and events. Processed-message deduplication avoids repeated ingestion. Webhook, scheduled, and manual entry points trigger the dispatcher. AI-assisted extraction enriches missing or suspect fields; structured adjudication evaluates shortlisted candidates. Only strong matches with valid tracking and high-confidence carriers proceed to marketplace updates.

## Public terminology

Refer to external commerce services only as marketplace and supplier. Do not infer independent autonomous agents from the specialized stages. The diagram is a simplified conceptual view of implemented behavior.

## Post caption

I built Campus Collectives and an AI-powered fulfillment workflow that reduced manual operations from 10 hours to 2 hours per week — an 80% reduction, saving 8 hours weekly. The business reached 98 orders and over $6K in revenue.

Behind the storefront, an agent orchestrator coordinates marketplace orders, supplier preparation, shipment-email extraction, AI-assisted matching, and tracking updates. Built with LangChain and Groq, it combines structured model decisions with deterministic checks and routes uncertain cases to human review.
