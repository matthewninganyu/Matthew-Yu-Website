# Overdose Policy Simulator — carousel guide

## Visual direction

Eight illustration-led slides use warm ivory, navy, teal, and restrained coral. All icons, controls, diagrams, and labels are HTML/SVG. Charts are conceptual, not model results. No generated photos or patient imagery are used.

## 1. Explore the impact of harm reduction

An independently built prototype connecting policy choices, health outcomes, and costs.

## 2. Four levers, multiple outcomes

Compare intervention levels to explore projected health outcomes and costs.

## 3. Usable data came first

Sourcing and standardizing 5+ years of BC and Alberta data was the hardest part.

## 4. Separate policy effects from trends

Account for changing conditions and delayed responses when estimating effects.

## 5. Build a credible comparison

SDID needs suitable comparison regions and enough pre-policy history. BC and Alberta alone do not establish adequacy.

## 6. Explore a range, not one forecast

Propagate parameter uncertainty, plus predictive variability where applicable.

## 7. Connect health outcomes to costs

A negative net change means savings after intervention spending is included.

## 8. Built from data to decisions

Interpret projections in light of data quality, observational assumptions, comparison regions, and historical support.

## Implementation and interpretation

Project data lives in app.js. Scoped responsive artwork styles live in J Healthcare/slides.css. Original supplied artwork remains preserved in assets. The focused chart exports in assets/web are time-effects.svg, comparison.svg, and uncertainty.svg; these match the inline chart illustrations.

The policy controls are illustrative, not interactive simulator inputs. The data table shows placeholder structure. Comparison-region letters are generic, not actual donor evidence. SDID requires suitable comparison regions and enough pre-policy history; BC and Alberta alone do not establish adequacy. The uncertainty band is conceptual, not an estimated interval. The cost ledger contains no numerical savings claim.

The existing internship date, author caption, post position, and project metrics are retained.
