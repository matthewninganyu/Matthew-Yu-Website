/**
 * Portfolio Website Logic
 * Includes Project Data, Detailed Modals, Slideshows, and RAG Chatbot
 */

const DISPLAY_NAME = "Matthew Yu";
const FULL_NAME = "Matthew Ningan Yu";
const OWNER_COMMENT_NAMES = new Set([DISPLAY_NAME, FULL_NAME]);

// ----------------------------------------------------
// 1. PROJECT DATA DATABASE
// ----------------------------------------------------
const PROJECT_DATA = {
  "visual-hook-studio": {
  "title": "Visual Hook Studio",
  "likes": 0,
  "commentsCount": 0,
  "date": "October 2026",
  "slides": [
    {
      "type": "visual",
      "html": "<section class=\"visual-hook-diagram vh-results\"><header>VISUAL HOOK STUDIO · 01 / 10</header><h2>Content automation.<br>Measurable growth.</h2><div class=\"vh-result\"><strong>1M+</strong><p>views in 3 weeks</p><span>Helped generate</span></div><div class=\"vh-result\"><strong>40 → 200+</strong><p>waitlist signups · 5× growth</p></div><footer>Built to create, schedule, and publish consistently.</footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"visual-hook-shot vh-video-slide\"><h2>See the finished reel</h2><video controls playsinline preload=\"metadata\" aria-label=\"UGC reel created with Visual Hook Studio\"><source src=\"Visual%20Hook%20Studio/ugc-example.mp4\" type=\"video/mp4\">Your browser does not support embedded video.</video><div class=\"visual-hook-caption\"><span>02 / 10</span><strong>A reel created with Visual Hook Studio. Play with sound to hear the timed reveal.</strong></div></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"visual-hook-shot vh-insights\"><h2>The results in view</h2><a class=\"vh-image-link\" href=\"Visual%20Hook%20Studio/instagram-insights.png\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open full Instagram insights screenshot\"><img src=\"Visual%20Hook%20Studio/instagram-insights.png\" alt=\"Instagram Insights showing 1,066,748 views, 692 net new followers, 98.7 percent non-follower views, and 475,323 viewers\"></a><div class=\"visual-hook-caption\"><span>03 / 10</span><strong>1,066,748 views · +692 net followers</strong><a href=\"Visual%20Hook%20Studio/instagram-insights.png\" target=\"_blank\" rel=\"noopener noreferrer\">View full screenshot ↗</a></div></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"visual-hook-shot vh-dashboard\"><h2>One place to run content</h2><a class=\"vh-image-link\" href=\"Visual%20Hook%20Studio/dashboard.png\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open full one place to run content screenshot\"><img src=\"Visual%20Hook%20Studio/dashboard.png\" alt=\"One place to run content: Visual Hook Studio interface\"></a><div class=\"visual-hook-caption\"><span>04 / 10</span><strong>Manage the content workflow from one dashboard.</strong><a href=\"Visual%20Hook%20Studio/dashboard.png\" target=\"_blank\" rel=\"noopener noreferrer\">View full screenshot ↗</a></div></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"visual-hook-shot \"><h2>More content variations</h2><a class=\"vh-image-link\" href=\"Visual%20Hook%20Studio/hooks.png\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open full more content variations screenshot\"><img src=\"Visual%20Hook%20Studio/hooks.png\" alt=\"More content variations: Visual Hook Studio interface\"></a><div class=\"visual-hook-caption\"><span>05 / 10</span><strong>Reuse and rotate hooks across new reels.</strong><a href=\"Visual%20Hook%20Studio/hooks.png\" target=\"_blank\" rel=\"noopener noreferrer\">View full screenshot ↗</a></div></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"visual-hook-shot vh-compose\"><h2>Less repeated editing</h2><a class=\"vh-image-link\" href=\"Visual%20Hook%20Studio/compose.png\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open full less repeated editing screenshot\"><img src=\"Visual%20Hook%20Studio/compose.png\" alt=\"Less repeated editing: Visual Hook Studio interface\"></a><div class=\"visual-hook-caption\"><span>06 / 10</span><strong>Combine clips, captions, and music with a timed product reveal.</strong><a href=\"Visual%20Hook%20Studio/compose.png\" target=\"_blank\" rel=\"noopener noreferrer\">View full screenshot ↗</a></div></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"visual-hook-shot vh-campaign\"><h2>Keep the schedule moving</h2><a class=\"vh-image-link\" href=\"Visual%20Hook%20Studio/campaign.png\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open full keep the schedule moving screenshot\"><img src=\"Visual%20Hook%20Studio/campaign.png\" alt=\"Keep the schedule moving: Visual Hook Studio interface\"></a><div class=\"visual-hook-caption\"><span>07 / 10</span><strong>Plan days of content across selected accounts.</strong><a href=\"Visual%20Hook%20Studio/campaign.png\" target=\"_blank\" rel=\"noopener noreferrer\">View full screenshot ↗</a></div></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"visual-hook-shot \"><h2>Reach across accounts</h2><a class=\"vh-image-link\" href=\"Visual%20Hook%20Studio/accounts.png\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open full reach across accounts screenshot\"><img src=\"Visual%20Hook%20Studio/accounts.png\" alt=\"Reach across accounts: Visual Hook Studio interface\"></a><div class=\"visual-hook-caption\"><span>08 / 10</span><strong>Save account captions and reuse them when publishing.</strong><a href=\"Visual%20Hook%20Studio/accounts.png\" target=\"_blank\" rel=\"noopener noreferrer\">View full screenshot ↗</a></div></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"visual-hook-diagram\"><header>THE WORKFLOW · 09 / 10</header><h2>A repeatable path to publishing</h2><div class=\"visual-hook-workers\"><div><strong>1 · Curate</strong><span>Choose hooks, clips, music, and demos.</span></div><div><strong>2 · Render</strong><span>Build vertical reels with a timed reveal.</span></div><div><strong>3 · Publish</strong><span>Schedule content through Instagram.</span></div><div><strong>4 · Learn</strong><span>Review insights to inform the next batch.</span></div></div><footer>FastAPI · FFmpeg · SQLite · Meta API</footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"visual-hook-diagram\"><header>ALWAYS-ON INFRASTRUCTURE · 10 / 10</header><h2>Powered by a private VPS</h2><p>The pipeline keeps running between dashboard visits.</p><div class=\"visual-hook-workers\"><div><strong>Create</strong><span>A dedicated worker renders the reels.</span></div><div><strong>Publish</strong><span>Workers prepare media and publish on schedule.</span></div><div><strong>Measure</strong><span>Insights are collected over time.</span></div><div><strong>Respond</strong><span>Keyword rules support comment-to-DM replies.</span></div></div><footer>Persistent storage · encrypted credentials · backups</footer></section>"
    }
  ],
  "comments": [
    {
      "user": "Matthew Yu",
      "avatar": "avatar",
      "text": "I built Visual Hook Studio to automate short-form app marketing. It helped generate over 1 million views in 3 weeks and grow the waitlist from 40 to 200+. The system renders reels, schedules Instagram publishing, and runs continuously on a private VPS so content production can keep moving.",
      "time": "October 2026"
    }
  ]
},
  "overdose-policy": {
  "title": "Overdose Policy Simulator",
  "date": "August 2026",
  "likes": 0,
  "commentsCount": 0,
  "slides": [
    {
      "type": "visual",
      "html": "<section class=\"hc-slide hp-slide hp-cover-slide\"><header><span>J HEALTHCARE INITIATIVE</span><span>01 / 08</span></header><h2>Explore the impact of harm reduction</h2><div class=\"hp-content\"><div class=\"hp-hero-art\"><div class=\"hp-region\"><span>BRITISH COLUMBIA</span><strong>BC</strong><div class=\"hp-mini-bars\"><i></i><i></i><i></i><i></i><i></i></div></div><div class=\"hp-hero-core\"><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M8 16h48M8 32h48M8 48h48\"/><circle cx=\"23\" cy=\"16\" r=\"6\"/><circle cx=\"43\" cy=\"32\" r=\"6\"/><circle cx=\"28\" cy=\"48\" r=\"6\"/></svg><span>POLICY<br>SIMULATION</span></div><div class=\"hp-region\"><span>ALBERTA</span><strong>AB</strong><div class=\"hp-mini-bars\"><i></i><i></i><i></i><i></i><i></i></div></div></div><div class=\"hp-outcome-strip\"><span><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M32 54 10 33C-2 19 15 2 32 19 49 2 66 19 54 33z\"/><path d=\"M12 32h12l5-9 6 18 5-9h12\"/></svg>Health outcomes</span><span><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><ellipse cx=\"26\" cy=\"16\" rx=\"20\" ry=\"8\"/><path d=\"M6 16v26c0 10 40 10 40 0V16M6 29c0 10 40 10 40 0M48 29c15 2 15 13 0 16m0 0v11c15-3 15-13 15-13\"/></svg>Economic impact</span></div><div class=\"hp-facts\"><div><strong>5+ <small>years</small></strong><span>provincial data</span></div><div><strong>10,000</strong><span>Monte Carlo draws</span></div></div></div><p class=\"hp-caption\">An independently built prototype connecting policy choices, health outcomes, and costs.</p><footer><span>Internship · August 2026</span></footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"hc-slide hp-slide hp-controls-slide\"><header><span>J HEALTHCARE INITIATIVE</span><span>02 / 08</span></header><h2>Four levers, multiple outcomes</h2><div class=\"hp-content\"><div class=\"hp-control-board\"><div><span><b>01</b>Naloxone distribution</span><div class=\"hp-slider\" style=\"--level:62%\"><i></i></div></div><div><span><b>02</b>Supervised consumption capacity</span><div class=\"hp-slider\" style=\"--level:40%\"><i></i></div></div><div><span><b>03</b>Drug checking</span><div class=\"hp-slider\" style=\"--level:75%\"><i></i></div></div><div><span><b>04</b>Safer / prescribed supply</span><div class=\"hp-slider\" style=\"--level:48%\"><i></i></div></div></div><div class=\"hp-flow-label\">↓ Compare projected outcomes ↓</div><div class=\"hp-output-grid\"><span><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M32 54 10 33C-2 19 15 2 32 19 49 2 66 19 54 33z\"/><path d=\"M12 32h12l5-9 6 18 5-9h12\"/></svg>Deaths + overdoses</span><span><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 58V9h40v49M6 58h52M26 58V44h12v14M26 18h12m-6-6v12M21 31h4m14 0h4\"/></svg>Healthcare use</span><span><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><ellipse cx=\"26\" cy=\"16\" rx=\"20\" ry=\"8\"/><path d=\"M6 16v26c0 10 40 10 40 0V16M6 29c0 10 40 10 40 0M48 29c15 2 15 13 0 16m0 0v11c15-3 15-13 15-13\"/></svg>Costs</span></div></div><p class=\"hp-caption\">Compare intervention levels to explore projected health outcomes and costs.</p><footer><span>Illustrated controls · Not live simulator inputs</span></footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"hc-slide hp-slide hp-data-slide\"><header><span>J HEALTHCARE INITIATIVE</span><span>03 / 08</span></header><h2>Usable data came first</h2><div class=\"hp-content\"><div class=\"hp-source-files\"><div><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 5h24l14 14v40H14zM38 5v15h14M22 31h22M22 40h22M22 49h14\"/></svg><b>CSV</b><span>Different dates</span></div><div><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 5h24l14 14v40H14zM38 5v15h14M22 31h22M22 40h22M22 49h14\"/></svg><b>Reports</b><span>Different formats</span></div><div><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 5h24l14 14v40H14zM38 5v15h14M22 31h22M22 40h22M22 49h14\"/></svg><b>Web data</b><span>Different labels</span></div></div><div class=\"hp-clean-stage\"><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 12h50L39 33v18l-14 8V33zM46 3v10m-5-5h10\"/></svg><div><strong>Standardize + align</strong><span>Dates · definitions · monthly records</span></div></div><div class=\"hp-table\"><div class=\"hp-table-label\">ONE CONSISTENT MONTHLY PANEL</div><table><thead><tr><th>Month</th><th>Province</th><th>Outcomes</th><th>Policy</th></tr></thead><tbody><tr><td>YYYY-MM</td><td>BC</td><td>Aligned</td><td>Aligned</td></tr><tr><td>YYYY-MM</td><td>Alberta</td><td>Aligned</td><td>Aligned</td></tr></tbody></table></div></div><p class=\"hp-caption\">Sourcing and standardizing 5+ years of BC and Alberta data was the hardest part.</p><footer><span>Illustrative table structure · No patient data</span></footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"hc-slide hp-slide hp-chart-slide\"><header><span>J HEALTHCARE INITIATIVE</span><span>04 / 08</span></header><h2>Separate policy effects from trends</h2><div class=\"hp-content\"><div class=\"hp-legend\"><span><i></i>Observed</span><span><i class=\"hp-dashed\"></i>Counterfactual</span></div><svg class=\"hp-plot\" viewBox=\"0 0 560 220\" role=\"img\" aria-label=\"Conceptual time series with a policy-change marker, observed trajectory, and dashed counterfactual; not model results\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M38 24V180H534\" fill=\"none\" stroke=\"#aebbb5\" stroke-width=\"1.5\"/><path d=\"M38 65h496M38 120h496\" fill=\"none\" stroke=\"#e3e9e4\"/><text x=\"40\" y=\"15\">Outcome</text><text x=\"470\" y=\"210\">Time →</text><path d=\"M48 132 100 117 150 126 205 102 260 110 310 91 365 96 420 77 475 72 520 60\" fill=\"none\" stroke=\"#7c8794\" stroke-width=\"3\" stroke-dasharray=\"7 6\"/><path d=\"M48 132 100 117 150 126 205 102 260 110 310 107 365 118 420 126 475 146 520 152\" fill=\"none\" stroke=\"#16786f\" stroke-width=\"4\"/><path d=\"M260 30v150\" stroke=\"#c43f4b\" stroke-width=\"2\" stroke-dasharray=\"4 5\"/><text x=\"270\" y=\"42\" class=\"hp-coral-label\">Policy change</text><path d=\"M270 164h82\" stroke=\"#c43f4b\" stroke-width=\"2\"/><text x=\"278\" y=\"198\">Delayed effect</text></svg><div class=\"hp-methods\"><span><b>Trends</b>ITSA</span><span><b>Counts</b>Count models</span><span><b>Delays</b>Lag models</span></div></div><p class=\"hp-caption\">Account for changing conditions and delayed responses when estimating effects.</p><footer><span>Illustrative — not model results</span><a href=\"J%20Healthcare/assets/web/time-effects.svg\" target=\"_blank\" rel=\"noopener noreferrer\">Full diagram ↗</a></footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"hc-slide hp-slide hp-comparison-slide\"><header><span>J HEALTHCARE INITIATIVE</span><span>05 / 08</span></header><h2>Build a credible comparison</h2><div class=\"hp-content\"><div class=\"hp-donor-mix\"><div><span>A</span><span>B</span><span>C</span></div><b>→</b><div class=\"hp-weighted\"><i></i><strong>Weighted comparison</strong></div></div><svg class=\"hp-plot\" viewBox=\"0 0 560 220\" role=\"img\" aria-label=\"Conceptual observed and weighted-comparison trajectories; generic comparison regions and no empirical results\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M38 24V180H534\" fill=\"none\" stroke=\"#aebbb5\" stroke-width=\"1.5\"/><path d=\"M38 65h496M38 120h496\" fill=\"none\" stroke=\"#e3e9e4\"/><text x=\"40\" y=\"15\">Outcome</text><text x=\"470\" y=\"210\">Time →</text><path d=\"M48 138 105 122 160 129 215 108 270 115 330 95 390 89 455 78 520 65\" fill=\"none\" stroke=\"#7c8794\" stroke-width=\"3\" stroke-dasharray=\"7 6\"/><path d=\"M48 140 105 120 160 131 215 106 270 114 330 125 390 137 455 141 520 157\" fill=\"none\" stroke=\"#16786f\" stroke-width=\"4\"/><path d=\"M280 28v152\" stroke=\"#c43f4b\" stroke-width=\"2\" stroke-dasharray=\"4 5\"/><text x=\"48\" y=\"42\">Match before</text><text x=\"310\" y=\"42\">Compare after</text></svg><div class=\"hp-legend\"><span><i></i>Observed</span><span><i class=\"hp-dashed\"></i>Weighted comparison</span></div></div><p class=\"hp-caption\">SDID needs suitable comparison regions and enough pre-policy history. BC and Alberta alone do not establish adequacy.</p><footer><span>Generic regions · Not model results</span><a href=\"J%20Healthcare/assets/web/comparison.svg\" target=\"_blank\" rel=\"noopener noreferrer\">Full diagram ↗</a></footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"hc-slide hp-slide hp-uncertainty-slide\"><header><span>J HEALTHCARE INITIATIVE</span><span>06 / 08</span></header><h2>Explore a range, not one forecast</h2><div class=\"hp-content\"><div class=\"hp-simulation\"><div><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M8 16h48M8 32h48M8 48h48\"/><circle cx=\"23\" cy=\"16\" r=\"6\"/><circle cx=\"43\" cy=\"32\" r=\"6\"/><circle cx=\"28\" cy=\"48\" r=\"6\"/></svg><span>Example policy change<strong>Naloxone +30%</strong></span></div><b>→</b><div><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 32h17M23 32C36 32 34 10 57 10M23 32h34M23 32c13 0 11 22 34 22\"/><circle cx=\"57\" cy=\"10\" r=\"4\"/><circle cx=\"57\" cy=\"32\" r=\"4\"/><circle cx=\"57\" cy=\"54\" r=\"4\"/></svg><span>Explore uncertainty<strong>10,000 draws</strong></span></div></div><svg class=\"hp-plot\" viewBox=\"0 0 560 220\" role=\"img\" aria-label=\"Conceptual simulation paths and widening uncertainty band, dashed baseline and solid scenario; not actual model results\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M38 24V180H534\" fill=\"none\" stroke=\"#aebbb5\" stroke-width=\"1.5\"/><path d=\"M38 65h496M38 120h496\" fill=\"none\" stroke=\"#e3e9e4\"/><text x=\"40\" y=\"15\">Outcome</text><text x=\"470\" y=\"210\">Time →</text><path d=\"M48 120 140 109 230 94 320 71 420 46 520 30L520 169 420 154 320 140 230 131 140 126 48 120Z\" fill=\"#d8eee9\"/><path d=\"M48 120 140 116 230 110 320 103 420 96 520 88\" fill=\"none\" stroke=\"#7c8794\" stroke-width=\"3\" stroke-dasharray=\"7 6\"/><path d=\"M48 120 Q220 85 520 43\" fill=\"none\" stroke=\"#16786f\" stroke-opacity=\".2\" stroke-width=\"1.5\"/><path d=\"M48 120 Q220 91 520 58\" fill=\"none\" stroke=\"#16786f\" stroke-opacity=\".2\" stroke-width=\"1.5\"/><path d=\"M48 120 Q220 97 520 73\" fill=\"none\" stroke=\"#16786f\" stroke-opacity=\".2\" stroke-width=\"1.5\"/><path d=\"M48 120 Q220 103 520 88\" fill=\"none\" stroke=\"#16786f\" stroke-opacity=\".2\" stroke-width=\"1.5\"/><path d=\"M48 120 Q220 109 520 103\" fill=\"none\" stroke=\"#16786f\" stroke-opacity=\".2\" stroke-width=\"1.5\"/><path d=\"M48 120 Q220 115 520 118\" fill=\"none\" stroke=\"#16786f\" stroke-opacity=\".2\" stroke-width=\"1.5\"/><path d=\"M48 120 Q220 121 520 133\" fill=\"none\" stroke=\"#16786f\" stroke-opacity=\".2\" stroke-width=\"1.5\"/><path d=\"M48 120 Q220 127 520 148\" fill=\"none\" stroke=\"#16786f\" stroke-opacity=\".2\" stroke-width=\"1.5\"/><path d=\"M48 120Q240 118 520 135\" fill=\"none\" stroke=\"#16786f\" stroke-width=\"4\"/><text x=\"340\" y=\"20\">Possible paths</text></svg><div class=\"hp-legend\"><span><i></i>Scenario</span><span><i class=\"hp-dashed\"></i>Baseline</span></div><div class=\"hp-band-key\"><i></i>Shaded band: illustrative uncertainty</div></div><p class=\"hp-caption\">Propagate parameter uncertainty, plus predictive variability where applicable.</p><footer><span>Illustrative — not model results</span><a href=\"J%20Healthcare/assets/web/uncertainty.svg\" target=\"_blank\" rel=\"noopener noreferrer\">Full diagram ↗</a></footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"hc-slide hp-slide hp-cost-slide\"><header><span>J HEALTHCARE INITIATIVE</span><span>07 / 08</span></header><h2>Connect health outcomes to costs</h2><div class=\"hp-content\"><div class=\"hp-care-icons\"><div><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 58V9h40v49M6 58h52M26 58V44h12v14M26 18h12m-6-6v12M21 31h4m14 0h4\"/></svg><strong>Hospital</strong></div><div><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"10\" y=\"17\" width=\"44\" height=\"36\" rx=\"5\"/><path d=\"M24 17V9h16v8M23 35h18m-9-9v18\"/></svg><strong>Emergency dept</strong></div><div><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 16h32v34H5zM37 28h12l10 12v10H37M16 26h12m-6-6v12M42 33v8h14\"/><circle cx=\"17\" cy=\"51\" r=\"6\"/><circle cx=\"48\" cy=\"51\" r=\"6\"/></svg><strong>EMS</strong></div></div><div class=\"hp-cost-rule\">Utilization <b>×</b> unit costs</div><div class=\"hp-cost-ledger\"><div><span>Scenario healthcare costs</span></div><div><b>+</b><span>Intervention costs</span></div><div><b>−</b><span>Baseline healthcare costs</span></div><div><b>=</b><strong>Net cost change</strong></div></div></div><p class=\"hp-caption\">A negative net change means savings after intervention spending is included.</p><footer><span>Conceptual cost calculation · No dollar estimates</span></footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"hc-slide hp-slide hp-build-slide\"><header><span>J HEALTHCARE INITIATIVE</span><span>08 / 08</span></header><h2>Built from data to decisions</h2><div class=\"hp-content\"><ol class=\"hp-build\"><li><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><ellipse cx=\"32\" cy=\"13\" rx=\"23\" ry=\"8\"/><path d=\"M9 13v35c0 11 46 11 46 0V13M9 30c0 11 46 11 46 0\"/></svg><div><small>01</small><strong>Prepare the data</strong><span>Pandas · NumPy · SQL</span></div></li><li><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10 8v46h46M18 40l10-15 12 8 15-20\"/><circle cx=\"28\" cy=\"25\" r=\"3\"/><circle cx=\"40\" cy=\"33\" r=\"3\"/></svg><div><small>02</small><strong>Estimate policy effects</strong><span>Statsmodels · SciPy</span></div></li><li><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 32h17M23 32C36 32 34 10 57 10M23 32h34M23 32c13 0 11 22 34 22\"/><circle cx=\"57\" cy=\"10\" r=\"4\"/><circle cx=\"57\" cy=\"32\" r=\"4\"/><circle cx=\"57\" cy=\"54\" r=\"4\"/></svg><div><small>03</small><strong>Simulate outcomes + costs</strong><span>NumPy · SciPy</span></div></li><li><svg class=\"hp-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"6\" y=\"8\" width=\"52\" height=\"37\" rx=\"4\"/><path d=\"M24 45v12m16-12v12M17 57h30M14 34l10-12 11 7 14-13\"/></svg><div><small>04</small><strong>Explore in the application</strong><span>FastAPI · Streamlit · Plotly</span></div></li></ol><div class=\"hp-built-badge\">Built independently <span>Packaged with Docker</span></div></div><p class=\"hp-caption\">Interpret projections in light of data quality, observational assumptions, comparison regions, and historical support.</p><footer><span>J Healthcare Initiative · August 2026</span></footer></section>"
    }
  ],
  "comments": [
    {
      "user": "Matthew Yu",
      "avatar": "avatar",
      "text": "During my August 2026 internship with the J Healthcare Initiative, I independently built a statistical policy simulator using more than five years of British Columbia and Alberta drug data. I sourced and standardized datasets, implemented controlled ITSA, SDID robustness checks, count and lag models, and 10,000-draw Monte Carlo scenarios to explore health outcomes and costs. Projections depend on data quality and modeling assumptions; conceptual visuals here are not actual results.",
      "time": "August 2026"
    }
  ]
},
  "campus-collectives": {
  "title": "Campus Collectives",
  "date": "December 2025",
  "likes": 0,
  "commentsCount": 0,
  "slides": [
    {
      "type": "visual",
      "html": "<section class=\"cc-slide cc-hero\"><header><span>CAMPUS COLLECTIVES / AI OPERATIONS</span><span>01 / 08</span></header><h2>AI agents, 80% less manual work</h2><div class=\"cc-body\"><a class=\"cc-storefront\" href=\"Campus%20Collectives/storefront.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"Campus%20Collectives/storefront.png\" alt=\"Campus Collectives apparel storefront with a campus hoodie hero image\"></a><div class=\"cc-time\"><strong>10 <span>→</span> 2</strong><span>hours of manual work / week</span></div><div class=\"cc-metrics\"><span><b>98</b> orders</span><span><b>$6K+</b> revenue</span><span><b>8h</b> saved weekly</span></div></div><footer>AI orchestration behind a working ecommerce business</footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"cc-slide cc-journey-slide\"><header><span>CAMPUS COLLECTIVES / AI OPERATIONS</span><span>02 / 08</span></header><h2>One order, many moving parts</h2><div class=\"cc-body\"><div class=\"cc-journey\"><div class=\"cc-stop\"><div class=\"cc-stop-art\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 20h36l4 34H10z\"/><path d=\"M23 23V16a9 9 0 0 1 18 0v7\"/></svg><span>01</span></div><strong>Order arrives</strong><p>Import from the marketplace</p></div><div class=\"cc-stop\"><div class=\"cc-stop-art\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m8 20 24-12 24 12v26L32 58 8 46zM8 20l24 12 24-12M32 32v26M20 14l24 12v12\"/></svg><span>02</span></div><strong>Supplier prep</strong><p>Map products + validate freight</p></div><div class=\"cc-stop\"><div class=\"cc-stop-art\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"7\" y=\"14\" width=\"50\" height=\"36\" rx=\"5\"/><path d=\"m8 17 24 18 24-18M8 48l17-16m31 16L39 32\"/></svg><span>03</span></div><strong>Shipment arrives</strong><p>Read the email evidence</p></div><div class=\"cc-stop\"><div class=\"cc-stop-art\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m15 32 11 11 24-25\"/><circle cx=\"32\" cy=\"32\" r=\"26\"/></svg><span>04</span></div><strong>Tracking updated</strong><p>Match, validate, and send</p></div></div><div class=\"cc-takeaway\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"18\" y=\"18\" width=\"28\" height=\"28\" rx=\"8\"/><path d=\"M25 7v11m14-11v11M25 46v11m14-11v11M7 25h11M7 39h11m28-14h11M46 39h11M26 32h12m-6-6v12\"/></svg><p><strong>The agent connects the steps</strong><br>One workflow instead of repeated handoffs</p></div></div><footer>Order intake → supplier preparation → shipment → tracking</footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"cc-slide cc-graph-slide\"><header><span>CAMPUS COLLECTIVES / AI OPERATIONS</span><span>03 / 08</span></header><h2>Inside the AI agent workflow</h2><div class=\"cc-body\"><div class=\"cc-orchestrator\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"18\" y=\"18\" width=\"28\" height=\"28\" rx=\"8\"/><path d=\"M25 7v11m14-11v11M25 46v11m14-11v11M7 25h11M7 39h11m28-14h11M46 39h11M26 32h12m-6-6v12\"/></svg><div><strong>Custom orchestrator</strong><span>Coordinates tools + AI reasoning</span></div><b>AI</b></div><ol class=\"cc-nodes\"><li class=\"\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 20h36l4 34H10z\"/><path d=\"M23 23V16a9 9 0 0 1 18 0v7\"/></svg><div><small>01 / TOOL</small><strong>Order intake</strong><span>Eligible marketplace orders</span></div></li><li class=\"\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m8 20 24-12 24 12v26L32 58 8 46zM8 20l24 12 24-12M32 32v26M20 14l24 12v12\"/></svg><div><small>02 / TOOL</small><strong>Supplier preparation</strong><span>Draft + freight checks</span></div></li><li class=\"cc-ai\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"7\" y=\"14\" width=\"50\" height=\"36\" rx=\"5\"/><path d=\"m8 17 24 18 24-18M8 48l17-16m31 16L39 32\"/></svg><div><small>03 / AI</small><strong>Shipment evidence</strong><span>Parsing + AI enrichment</span></div></li><li class=\"\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 12h52L39 34v17l-14 7V34z\"/></svg><div><small>04 / TOOL</small><strong>Candidate matching</strong><span>Deterministic shortlisting</span></div></li><li class=\"cc-ai\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"18\" y=\"18\" width=\"28\" height=\"28\" rx=\"8\"/><path d=\"M25 7v11m14-11v11M25 46v11m14-11v11M7 25h11M7 39h11m28-14h11M46 39h11M26 32h12m-6-6v12\"/></svg><div><small>05 / AI</small><strong>AI adjudication</strong><span>Match + confidence + risk flags</span></div></li><li class=\"\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m32 6 22 8v18c0 12-13 22-22 26C23 54 10 44 10 32V14zM22 31l7 7 14-16\"/></svg><div><small>06 / TOOL</small><strong>Confidence gate</strong><span>Proceed or request review</span></div></li></ol><div class=\"cc-branches\"><div><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m15 32 11 11 24-25\"/><circle cx=\"32\" cy=\"32\" r=\"26\"/></svg><p><b>PASS</b><strong>Validate carrier → update tracking</strong></p></div><div><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"20\" r=\"10\"/><path d=\"M12 55v-8c0-10 9-15 20-15s20 5 20 15v8\"/></svg><p><b>UNCERTAIN</b><strong>Human review</strong></p></div></div><div class=\"cc-state\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><ellipse cx=\"32\" cy=\"14\" rx=\"23\" ry=\"8\"/><path d=\"M9 14v34c0 11 46 11 46 0V14M9 31c0 11 46 11 46 0\"/></svg>Shared state · Orders · Evidence · Decisions · Events</div></div><footer>Simplified workflow · <a href=\"Campus%20Collectives/workflow.html\" target=\"_blank\" rel=\"noopener noreferrer\">Explore full diagram ↗</a></footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"cc-slide cc-email-slide\"><header><span>CAMPUS COLLECTIVES / AI OPERATIONS</span><span>04 / 08</span></header><h2>Turn an email into evidence</h2><div class=\"cc-body\"><div class=\"cc-letter\"><div class=\"cc-letter-bar\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"7\" y=\"14\" width=\"50\" height=\"36\" rx=\"5\"/><path d=\"m8 17 24 18 24-18M8 48l17-16m31 16L39 32\"/></svg><span>SUPPLIER / SHIPPING UPDATE</span><i>•••</i></div><h3>Your order is on its way</h3><p>Hi <mark>Alex Example</mark>, your <mark>navy hoodie · M</mark> has shipped to <mark>12 Sample Lane</mark></p><div class=\"cc-tracking\">TRACKING <strong>DEMO-TRACK-001</strong></div></div><div class=\"cc-extract-flow\"><span>Parse</span><b>↓</b><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"18\" y=\"18\" width=\"28\" height=\"28\" rx=\"8\"/><path d=\"M25 7v11m14-11v11M25 46v11m14-11v11M7 25h11M7 39h11m28-14h11M46 39h11M26 32h12m-6-6v12\"/></svg><strong>AI fills evidence gaps</strong></div><dl class=\"cc-fields\"><div><dt>Recipient</dt><dd>Alex Example</dd></div><div><dt>Address</dt><dd>12 Sample Lane</dd></div><div><dt>Item + variant</dt><dd>Hoodie / Navy / M</dd></div><div><dt>Tracking</dt><dd>DEMO-TRACK-001</dd></div></dl></div><footer>Fictional example · AI enriches missing or suspect fields</footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"cc-slide cc-match-slide\"><header><span>CAMPUS COLLECTIVES / AI OPERATIONS</span><span>05 / 08</span></header><h2>Find the right order with AI</h2><div class=\"cc-body\"><div class=\"cc-match-scene\"><div class=\"cc-candidates\"><small>SHORTLIST</small><div>DEMO-018<span>Different item</span></div><div class=\"cc-candidate-selected\">DEMO-042<span>Evidence aligns</span></div><div>DEMO-067<span>Different recipient</span></div></div><span class=\"cc-connector\">→</span><div class=\"cc-brain\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"18\" y=\"18\" width=\"28\" height=\"28\" rx=\"8\"/><path d=\"M25 7v11m14-11v11M25 46v11m14-11v11M7 25h11M7 39h11m28-14h11M46 39h11M26 32h12m-6-6v12\"/></svg><strong>AI match</strong><span>LangChain + Groq</span></div><span class=\"cc-connector\">→</span><div class=\"cc-match-result\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m15 32 11 11 24-25\"/><circle cx=\"32\" cy=\"32\" r=\"26\"/></svg><small>MATCH FOUND</small><strong>DEMO-042</strong><span>High confidence</span></div></div><div class=\"cc-evidence\"><span>✓ Recipient</span><span>✓ Item + variant</span><span>✓ Address</span></div><p class=\"cc-lead\">Rules shortlist candidates<br><strong>AI weighs the evidence</strong></p></div><footer>Illustrative match · Structured output includes confidence and risk flags</footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"cc-slide cc-gate-slide\"><header><span>CAMPUS COLLECTIVES / AI OPERATIONS</span><span>06 / 08</span></header><h2>Know when to ask for help</h2><div class=\"cc-body\"><div class=\"cc-decision-root\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m32 6 22 8v18c0 12-13 22-22 26C23 54 10 44 10 32V14zM22 31l7 7 14-16\"/></svg><strong>Confidence gate</strong><span>Evidence determines the next step</span></div><svg class=\"cc-fork\" viewBox=\"0 0 500 55\" aria-hidden=\"true\"><path d=\"M250 0v20H95v30m155-30h155v30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"m89 43 6 7 6-7m298 0 6 7 6-7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/></svg><div class=\"cc-paths\"><div class=\"cc-pass\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m15 32 11 11 24-25\"/><circle cx=\"32\" cy=\"32\" r=\"26\"/></svg><small>STRONG EVIDENCE</small><h3>Update tracking</h3><p>Confident match<br>Valid tracking + carrier</p></div><div><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"20\" r=\"10\"/><path d=\"M12 55v-8c0-10 9-15 20-15s20 5 20 15v8\"/></svg><small>NEEDS ATTENTION</small><h3>Human review</h3><p>Unclear match<br>Missing shipment details</p></div></div></div><footer>Supplier purchasing remains an explicit human action</footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"cc-slide cc-ledger-slide\"><header><span>CAMPUS COLLECTIVES / AI OPERATIONS</span><span>07 / 08</span></header><h2>A workflow that remembers</h2><div class=\"cc-body\"><div class=\"cc-triggers\"><span><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m36 4-23 31h17l-3 25 24-34H34z\"/></svg>Webhook</span><span><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg>Schedule</span><span><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"20\" r=\"10\"/><path d=\"M12 55v-8c0-10 9-15 20-15s20 5 20 15v8\"/></svg>Manual</span></div><div class=\"cc-ledger\"><div class=\"cc-ledger-title\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><ellipse cx=\"32\" cy=\"14\" rx=\"23\" ry=\"8\"/><path d=\"M9 14v34c0 11 46 11 46 0V14M9 31c0 11 46 11 46 0\"/></svg><div><small>PERSISTENT WORKFLOW STATE</small><strong>Every step leaves a record</strong></div></div><ol class=\"cc-event-list\"><li><span class=\"cc-event-dot\"></span><div><strong>Order imported</strong><span>Saved in the fulfillment queue</span></div><b>01</b></li><li><span class=\"cc-event-dot\"></span><div><strong>Shipment evidence stored</strong><span>Processed messages are recognized</span></div><b>02</b></li><li><span class=\"cc-event-dot\"></span><div><strong>Decision recorded</strong><span>Match, confidence, and next action</span></div><b>03</b></li></ol></div></div><footer>Illustrative event history · Traceable states and message deduplication</footer></section>"
    },
    {
      "type": "visual",
      "html": "<section class=\"cc-slide cc-outcome\"><header><span>CAMPUS COLLECTIVES / AI OPERATIONS</span><span>08 / 08</span></header><h2>8 hours back every week</h2><div class=\"cc-body\"><div class=\"cc-savings\"><strong>80<span>%</span></strong><div>less manual work<span>10 → 2 hours / week</span></div></div><div class=\"cc-hours\" role=\"img\" aria-label=\"Ten weekly hours: two hours of manual work remaining and eight hours saved\"><span class=\"cc-hour-work\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg></span><span class=\"cc-hour-work\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg></span><span class=\"cc-hour-saved\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg></span><span class=\"cc-hour-saved\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg></span><span class=\"cc-hour-saved\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg></span><span class=\"cc-hour-saved\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg></span><span class=\"cc-hour-saved\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg></span><span class=\"cc-hour-saved\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg></span><span class=\"cc-hour-saved\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg></span><span class=\"cc-hour-saved\"><svg class=\"cc-icon\" viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"25\"/><path d=\"M32 15v18l12 7\"/></svg></span></div><div class=\"cc-hours-key\"><span><i></i>2h remaining</span><span><i></i>8h saved</span></div><div class=\"cc-business\"><div><strong>98</strong><span>orders</span></div><div><strong>$6K+</strong><span>revenue</span></div></div><div class=\"cc-stack\">TypeScript · Next.js · LangChain · Groq<br>Persistent workflow storage</div></div><footer>Business totals and time savings reported by Matthew</footer></section>"
    }
  ],
  "comments": [
    {
      "user": "Matthew Yu",
      "avatar": "avatar",
      "text": "I built Campus Collectives and an AI-powered fulfillment workflow that reduced manual operations from 10 hours to 2 hours per week — an 80% reduction, saving 8 hours weekly. The business reached 98 orders and over $6K in revenue.\n\nBehind the storefront, an agent orchestrator coordinates marketplace orders, supplier preparation, shipment-email extraction, AI-assisted matching, and tracking updates. Built with LangChain and Groq, it combines structured model decisions with deterministic checks and routes uncertain cases to human review.",
      "time": "December 2025"
    }
  ]
},
  "scoreshift": {
    title: "ScoreShift",
    likes: 1245,
    commentsCount: 45,
    date: "May 2, 2026",
    link: "https://huggingface.co/spaces/Mahu454/scoreshift",
    github: "https://github.com",
    slides: [
      {
        type: "visual",
        html: `
          <div class="project-image-slide">
            <img class="project-screenshot" src="ScoreShift/ScoreShift-homepage.png" alt="ScoreShift homepage upload screen">
            <div class="workflow-caption">
              <span>Upload</span>
              <strong>Start from an image or MusicXML score.</strong>
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="project-image-slide">
            <img class="project-screenshot" src="ScoreShift/ScoreShift-loading.png" alt="ScoreShift loading screen while OMR processing runs">
            <div class="workflow-caption">
              <span>OMR Processing</span>
              <strong>FastAPI accepts the job while oemer converts notation into MusicXML.</strong>
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="project-image-slide">
            <img class="project-screenshot" src="ScoreShift/Apply%20Transposition.png" alt="ScoreShift target key selection after a score is loaded">
            <div class="workflow-caption">
              <span>Transpose</span>
              <strong>music21 rewrites the symbolic score to the selected key.</strong>
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="project-image-slide">
            <img class="project-screenshot" src="ScoreShift/Export.png" alt="ScoreShift export format selector">
            <div class="workflow-caption">
              <span>Export</span>
              <strong>Verovio renders previews and exports PDF, image pages, or MusicXML.</strong>
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="score-before-after">
            <div class="score-compare-panel">
              <span>Before</span>
              <img src="ScoreShift/flute.jpg" alt="Original flute sheet music before transposition">
            </div>
            <div class="score-compare-panel">
              <span>After</span>
              <img src="ScoreShift/ScoreShift%20Finished.png" alt="Finished ScoreShift output after transposition">
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="slide-diagram-root scoreshift-architecture">
            <h4>ScoreShift Architecture</h4>
            <div class="flow-chart">
              <div class="flow-node">Upload image or MusicXML</div>
              <div class="flow-node">Browser normalizes large camera images</div>
              <div class="flow-node"><strong>FastAPI</strong> creates a long-running processing job</div>
              <div class="flow-node"><strong>oemer</strong> OMR extracts notation into MusicXML</div>
              <div class="flow-node">File-hash cache skips repeated OMR work</div>
              <div class="flow-node"><strong>music21</strong> transposes the symbolic score</div>
              <div class="flow-node"><strong>Verovio WASM</strong> renders preview and export formats</div>
            </div>
            <div class="slide-tech-badges">
              <span class="tech-badge">FastAPI</span>
              <span class="tech-badge">oemer</span>
              <span class="tech-badge">MusicXML</span>
              <span class="tech-badge">music21</span>
              <span class="tech-badge">Verovio WASM</span>
              <span class="tech-badge">Docker</span>
            </div>
          </div>
        `
      },
      {
        type: "code",
        filename: "app/main.py",
        code: `
<span class="code-keyword">@app.post</span>(<span class="code-string">"/api/transpose"</span>)
<span class="code-keyword">async def</span> <span class="code-function">transpose_score</span>(payload: TransposePayload):
    <span class="code-comment"># MusicXML is the source of truth after OMR</span>
    score = music21.converter.parse(payload.musicxml)
    
    <span class="code-keyword">if</span> payload.mode == <span class="code-string">"semitones"</span>:
        transposed = score.transpose(payload.value)
    <span class="code-keyword">elif</span> payload.mode == <span class="code-string">"key"</span>:
        <span class="code-comment"># Transpose to target major/minor key</span>
        transposed = transpose_to_key(score, payload.value)
        
    <span class="code-keyword">return</span> {
        <span class="code-string">"transposed_xml"</span>: transposed.write(<span class="code-string">'musicxml'</span>).decode(<span class="code-string">'utf-8'</span>)
    }`
      }
    ],
    comments: [
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "Built ScoreShift as a full-stack AI music app, not just a model demo. The FastAPI backend handles uploads, long-running OMR jobs, MusicXML processing, transposition, caching, and exports. oemer performs optical music recognition, music21 rewrites the symbolic score, Verovio WASM renders the browser preview, and Docker/Hugging Face Spaces made the deployment reproducible.",
        time: "4w"
      },
      {
        user: "zhu.elainee",
        avatar: "E",
        text: "Wow! Tried it out with some piano sheets and the transposing is so fast! 🔥 Also the Verovio rendering looks extremely crisp.",
        time: "4w"
      },
      {
        user: "luc4s.l1",
        avatar: "L",
        text: "omg finally. transposing sheets by hand is such a pain. neat work packing everything inside a lightweight Docker container",
        time: "3w"
      },
      {
        user: "_cindyy7",
        avatar: "C",
        text: "how does the mobile photo handling work? standard phone camera images can get huge.",
        time: "2w"
      },
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "@_cindyy7 good question! Before uploading, the browser resizes the image to 2200px max side length and compresses to JPEG. On the backend, we cap it at 1800px max side length for the OMR model to prevent timeouts.",
        time: "2w"
      }
    ]
  },
  "hvac-model": {
    title: "HomeWise AI HVAC Model",
    likes: 840,
    commentsCount: 12,
    date: "April 15, 2026",
    link: "#",
    github: "https://github.com",
    slides: [
      // Slide 1: Cover
      {
        type: "visual",
        html: `
          <div class="slide-cover-root model-theme">
            <div class="slide-cover-title">HomeWise AI HVAC Model</div>
            <div class="slide-cover-subtitle">Built during my HomeWise AI internship: predicting HVAC confidence scores from sliding sensor telemetry.</div>
            <div class="slide-tech-badges">
              <span class="tech-badge">Python</span>
              <span class="tech-badge">XGBoost</span>
              <span class="tech-badge">PyTorch</span>
              <span class="tech-badge">pandas</span>
              <span class="tech-badge">scikit-learn</span>
              <span class="tech-badge">CUDA</span>
            </div>
          </div>
        `
      },
      // Slide 2: Metrics Chart Graphic
      {
        type: "visual",
        html: `
          <div class="slide-diagram-root">
            <h4 style="color:#ffffff; margin-bottom:10px; font-family:var(--header-font)">Telemetry Preprocessing & Results</h4>
            <div class="flow-chart" style="width: 90%;">
              <div class="flow-node"><strong>Chronological windowing:</strong> Groups 12,709 telemetry rows by device into sliding W=8 windows</div>
              <div class="flow-node"><strong>Feature Engineering:</strong> Computes comfort deviation (temp - setpoint) and slope metrics</div>
              <div class="flow-node" style="border-color:#10b981; background:rgba(16,185,129,0.1)"><strong>XGBoost Performance:</strong> Held-out R² of <strong>0.871</strong> and MAE of <strong>4.576</strong> points</div>
            </div>
          </div>
        `
      },
      // Slide 3: Code Card
      {
        type: "code",
        filename: "src/train_neural_net.py",
        code: `
<span class="code-keyword">class</span> <span class="code-function">HVACRegressor</span>(nn.Module):
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):
        super().__init__()
        self.net = nn.Sequential(
            nn.Flatten(),
            nn.Linear(<span class="code-keyword">8</span> * <span class="code-keyword">4</span>, <span class="code-keyword">64</span>), <span class="code-comment"># W=8 window, 4 features per step</span>
            nn.ReLU(),
            nn.Linear(<span class="code-keyword">64</span>, <span class="code-keyword">32</span>),
            nn.ReLU(),
            nn.Linear(<span class="code-keyword">32</span>, <span class="code-keyword">1</span>)      <span class="code-comment"># predicts continuous confidence_score</span>
        )

    <span class="code-keyword">def</span> <span class="code-function">forward</span>(self, x):
        <span class="code-keyword">return</span> self.net(x)`
      }
    ],
    comments: [
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "During my internship at HomeWise AI, I built a dual-model regression pipeline using XGBoost and PyTorch to predict HVAC operational confidence scores. The pipeline reads telemetry windows, engineers features like temp deviation and slope trends, and outputs scores with an R² of 0.871 on held-out tests.",
        time: "6w"
      },
      {
        user: "hannaxia_",
        avatar: "H",
        text: "interpretability is crucial in industrial settings. Nice choice using XGBoost as the interpretable tabular baseline alongside PyTorch!",
        time: "5w"
      },
      {
        user: "melvin_fung",
        avatar: "M",
        text: "How did you prevent data leakage in the test set given overlapping sliding windows?",
        time: "5w"
      },
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "@melvin_fung Important point! We separate train, validation, and test telemetry into completely distinct CSV files grouped by device before windowing. This guarantees that overlapping windows from the same device never leak between training and evaluation.",
        time: "5w"
      }
    ]
  },
  "hvac-rag": {
    title: "HomeWise AI HVAC RAG System",
    likes: 950,
    commentsCount: 28,
    date: "May 10, 2026",
    link: "#",
    github: "https://github.com",
    slides: [
      // Slide 1: Cover / Hook
      {
        type: "visual",
        html: `
          <div class="rag-slide rag-cover-slide">
            <div class="rag-cover-copy">
              <span class="rag-kicker">HomeWise AI internship · Telemetry RAG</span>
              <h3>HomeWise AI HVAC RAG</h3>
              <p>RAG for sensor telemetry, not documents. The service turns live HVAC readings into grounded operator guidance.</p>
              <div class="rag-badge-row">
                <span>FastAPI</span>
                <span>PyTorch</span>
                <span>Qdrant Cloud</span>
                <span>OpenAI</span>
                <span>Docker</span>
              </div>
            </div>
            <div class="rag-pipeline-card" aria-hidden="true">
              <span>8 readings</span>
              <i></i>
              <span>features</span>
              <i></i>
              <span>128-D vector</span>
              <i></i>
              <span>operator advice</span>
            </div>
          </div>
        `
      },
      // Slide 2: Problem
      {
        type: "visual",
        html: `
          <div class="rag-slide rag-problem-slide">
            <div class="rag-section-heading">
              <span class="rag-kicker">Problem</span>
              <h3>Raw telemetry gives signals, not explanations.</h3>
              <p>Operators need to know what pattern is emerging, how severe it is, whether it resembles past incidents, and what to check next.</p>
            </div>
            <div class="rag-before-after">
              <div>
                <strong>Before</strong>
                <ul>
                  <li>Temperature and humidity readings</li>
                  <li>Confidence scores</li>
                  <li>Manual chart inspection</li>
                  <li>Threshold alerts without context</li>
                </ul>
              </div>
              <div>
                <strong>After</strong>
                <ul>
                  <li>Incident type and severity</li>
                  <li>Similar historical cases</li>
                  <li>Risk explanation</li>
                  <li>Recommended operator checks</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      // Slide 3: 8-reading telemetry window
      {
        type: "visual",
        html: `
          <div class="rag-slide rag-window-slide">
            <div class="rag-section-heading compact">
              <span class="rag-kicker">Input</span>
              <h3>8 readings become an 8 x 8 feature window.</h3>
            </div>
            <div class="rag-feature-grid" aria-label="Telemetry feature matrix">
              <span class="head">t</span><span class="head">temp</span><span class="head">setpoint</span><span class="head">humidity</span><span class="head">error</span><span class="head">slope</span>
              <span>1</span><span>8.2C</span><span>21.0C</span><span>48%</span><span class="hot">12.8</span><span>-</span>
              <span>2</span><span>7.6C</span><span>21.0C</span><span>49%</span><span class="hot">13.4</span><span>-0.6</span>
              <span>3</span><span>6.9C</span><span>21.0C</span><span>50%</span><span class="hot">14.1</span><span>-0.7</span>
              <span>4</span><span>6.1C</span><span>21.0C</span><span>52%</span><span class="hot">14.9</span><span>-0.8</span>
              <span>5</span><span>5.4C</span><span>21.0C</span><span>54%</span><span class="hot">15.6</span><span>-0.7</span>
              <span>6</span><span class="risk">4.8C</span><span>21.0C</span><span>56%</span><span class="hot">16.2</span><span>-0.6</span>
              <span>7</span><span class="risk">4.2C</span><span>21.0C</span><span>57%</span><span class="hot">16.8</span><span>-0.6</span>
              <span>8</span><span class="risk">3.7C</span><span>21.0C</span><span>59%</span><span class="hot">17.3</span><span>-0.5</span>
            </div>
            <div class="rag-feature-notes">
              <span>temp_minus_setpoint</span>
              <span>temp_delta</span>
              <span>humidity_delta</span>
              <span>abs_temp_error</span>
            </div>
          </div>
        `
      },
      // Slide 4: Encoder + Qdrant retrieval
      {
        type: "visual",
        html: `
          <div class="rag-slide rag-retrieval-slide">
            <div class="rag-section-heading compact">
              <span class="rag-kicker">Retrieval</span>
              <h3>Find past incidents by sensor behavior.</h3>
            </div>
            <div class="rag-retrieval-flow">
              <div class="rag-flow-node">[8,8] tensor</div>
              <div class="rag-flow-arrow"></div>
              <div class="rag-flow-node">PyTorch MLP</div>
              <div class="rag-flow-arrow"></div>
              <div class="rag-flow-node accent">128-D vector</div>
              <div class="rag-flow-arrow"></div>
              <div class="rag-flow-node">Qdrant cosine search</div>
              <div class="rag-flow-arrow"></div>
              <div class="rag-flow-node accent">top 5 incidents</div>
            </div>
            <div class="rag-metric-grid">
              <div><strong>1,996</strong><span>raw readings</span></div>
              <div><strong>1,611</strong><span>searchable windows</span></div>
              <div><strong>128-D</strong><span>embeddings</span></div>
              <div><strong>5</strong><span>incident classes</span></div>
            </div>
          </div>
        `
      },
      // Slide 5: Swagger docs screenshot
      {
        type: "visual",
        html: `
          <div class="rag-slide rag-screenshot-slide">
            <div class="rag-screenshot-copy">
              <span class="rag-kicker">FastAPI Surface</span>
              <h3>Interactive API docs for the RAG service.</h3>
              <p>Swagger exposes build, train, backfill, retrieve, explain, and embed endpoints for the telemetry pipeline.</p>
              <div class="rag-endpoint-tags">
                <span>/v1/hvac/explain</span>
                <span>/v1/hvac/retrieve</span>
                <span>/v1/hvac/backfill-qdrant</span>
              </div>
            </div>
            <div class="rag-browser-frame docs-frame">
              <div class="homewise-api-preview" aria-label="HomeWise AI API endpoint overview"><h4>HomeWise AI HVAC RAG</h4><span>Internship project · FastAPI endpoint overview</span><div><b>GET</b><code>/health</code></div><div><b>POST</b><code>/v1/hvac/windows/build</code></div><div><b>POST</b><code>/v1/hvac/train-encoder</code></div><div><b>POST</b><code>/v1/hvac/backfill-qdrant</code></div><div><b>POST</b><code>/v1/hvac/retrieve</code></div><div><b>POST</b><code>/v1/hvac/explain</code></div><div><b>POST</b><code>/v1/embed</code></div></div>
            </div>
          </div>
        `
      },
      // Slide 6: RAG response screenshot
      {
        type: "visual",
        html: `
          <div class="rag-slide rag-screenshot-slide response-proof">
            <div class="rag-screenshot-copy">
              <span class="rag-kicker">Grounded Output</span>
              <h3>Structured operator guidance.</h3>
              <p>The response turns a freeze-risk pattern into summary, risk reasoning, similar incidents, recommended checks, evidence strength, and limitations.</p>
              <div class="rag-endpoint-tags">
                <span>operator_summary</span>
                <span>why_this_is_risky</span>
                <span>recommended_next_checks</span>
                <span>evidence_strength</span>
              </div>
            </div>
            <div class="rag-browser-frame response-frame">
              <img src="HomeWise%20AI%20RAG/response.png" alt="HomeWise AI HVAC RAG JSON response showing operator guidance">
            </div>
          </div>
        `
      },
      // Slide 7: Production notes
      {
        type: "visual",
        html: `
          <div class="rag-slide rag-production-slide">
            <div class="rag-section-heading">
              <span class="rag-kicker">Engineering Notes</span>
              <h3>Grounded explanations with production-minded fallbacks.</h3>
              <p>The LLM explains the evidence, but rule-derived severity and incident type remain model-owned.</p>
            </div>
            <div class="rag-production-grid">
              <div><strong>FastAPI</strong><span>/v1/hvac/explain runtime endpoint</span></div>
              <div><strong>Docker</strong><span>Packaged service and model artifacts</span></div>
              <div><strong>Qdrant Cloud</strong><span>Cosine retrieval over telemetry windows</span></div>
              <div><strong>OpenAI Grounding</strong><span>Explains only supplied current and historical evidence</span></div>
              <div><strong>Fallback</strong><span>Deterministic local explanation when OpenAI is unavailable</span></div>
              <div><strong>Tests</strong><span>Feature engineering, rules, and embedding fallback coverage</span></div>
            </div>
          </div>
        `
      }
    ],
    comments: [
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "During my internship at HomeWise AI, I built a containerized RAG service that turns raw HVAC telemetry into operator-facing explanations. The FastAPI pipeline converts 8-reading sensor windows into engineered feature tensors, embeds them into 128-dimensional vectors with a PyTorch encoder, retrieves the top 5 similar historical incidents from Qdrant Cloud, and generates grounded guidance with incident type, severity, risk reasoning, recommended checks, evidence strength, and limitations. The first corpus processed 1,996 raw readings into 1,611 searchable windows across 5 incident classes.",
        time: "3w"
      },
      {
        user: "_cindyy7",
        avatar: "C",
        text: "This is super useful. Using RAG on telemetry rather than just standard text is very unique. What incident classes are currently supported?",
        time: "3w"
      },
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "@_cindyy7 Right now the rules index freeze_risk, hvac_drift, humidity_risk, normal, and hvac_anomaly catch-all. It detects severity levels (critical, high, medium, low) before querying the vector DB.",
        time: "2w"
      },
      {
        user: "luc4s.l1",
        avatar: "L",
        text: "What happens if the OpenAI key is missing? Does it crash?",
        time: "1w"
      },
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "@luc4s.l1 Nope, it has a built-in deterministic fallback generator. If OpenAI is not configured, it compiles the retrieved incidents and rules locally to output the same JSON schema format.",
        time: "1w"
      }
    ]
  },
  "othello-az": {
    title: "AlphaZero Othello Engine",
    likes: 1540,
    commentsCount: 52,
    date: "April 2, 2026",
    link: "#",
    github: "https://github.com/matthewninganyu/Othello-Bot",
    slides: [
      { type: "visual", html: "<section class=\"oz-slide oz-graphic-slide\"><header><span>OTHELLO / ENGINEERING</span><span>01 / 07</span></header><h2>Learning to play. Learning faster.</h2><div class=\"oz-art\"><div class=\"oz-overview\"><div class=\"oz-board\" role=\"img\" aria-label=\"Othello opening board with game pieces\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><i class=\"oz-disc legal\"></i></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><i class=\"oz-disc white\"></i></div><div><i class=\"oz-disc black\"></i></div><div></div><div></div><div></div><div></div><div></div><div></div><div><i class=\"oz-disc black\"></i></div><div><i class=\"oz-disc white\"></i></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div class=\"oz-bigstat\"><strong>&gt;60×</strong><span>faster training</span><small>Reported project result<br>Batching + parallel processing</small></div></div></div><p class=\"oz-takeaway\">Self-play supplies the experience. Search turns it into a better teacher.</p><details class=\"oz-details\"><summary>Technical notes</summary><p>AlphaZero-style Othello: a shared policy/value network guides MCTS, which generates training targets without expert-game labels. The reported speedup combines batching and parallel processing; baseline timings and hardware have not been supplied.</p></details><footer>Python · PyTorch · Numba · CUDA</footer></section>" },
      { type: "visual", html: "<section class=\"oz-slide oz-graphic-slide\"><header><span>OTHELLO / ENGINEERING</span><span>02 / 07</span></header><h2>A teacher that improves with practice.</h2><div class=\"oz-art\"><div class=\"oz-loop\"><div class=\"oz-node\"><b>01 · PLAY</b><span>Network-guided self-play</span></div><span class=\"oz-arrow\" aria-hidden=\"true\">→</span><div class=\"oz-node\"><b>02 · COLLECT</b><span>Visits + final outcomes</span></div><span class=\"oz-loop-return\">↻ repeat with updated weights</span><div class=\"oz-node\"><b>04 · UPDATE</b><span>Learn policy + value</span></div><span class=\"oz-arrow\">←</span><div class=\"oz-node\"><b>03 · REMEMBER</b><span>Augment + replay</span></div></div></div><p class=\"oz-takeaway\">Search teaches the network. The updated network guides the next search.</p><details class=\"oz-details\"><summary>Technical notes</summary><p>Normalized MCTS visit counts become policy targets. Final game outcomes become value targets from the player-to-move perspective. Retained samples are rotated and mirrored before entering replay memory.</p></details><footer>No expert-game dataset required</footer></section>" },
      { type: "visual", html: "<section class=\"oz-slide oz-graphic-slide\"><header><span>OTHELLO / ENGINEERING</span><span>03 / 07</span></header><h2>Two integers. An entire board.</h2><div class=\"oz-art\"><div class=\"oz-mask-pair\"><figure><div class=\"oz-board\" role=\"img\" aria-label=\"Othello opening board with black pieces\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><i class=\"oz-disc black\"></i></div><div></div><div></div><div></div><div></div><div></div><div></div><div><i class=\"oz-disc black\"></i></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><figcaption>BLACK · uint64</figcaption></figure><span class=\"oz-plus\">+</span><figure><div class=\"oz-board\" role=\"img\" aria-label=\"Othello opening board with white pieces\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><i class=\"oz-disc white\"></i></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div><i class=\"oz-disc white\"></i></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><figcaption>WHITE · uint64</figcaption></figure></div><div class=\"oz-capture\"><span>●</span><span>○</span><span>○</span><span class=\"oz-target\">◎</span><b>→ scan → legal move</b></div></div><p class=\"oz-takeaway\">Bit shifts scan capture lines. Edge masks prevent row wraparound.</p><details class=\"oz-details\"><summary>Technical notes</summary><p>Each bit maps to one square: row = i // 8, column = i % 8. Capture-line illustration is schematic.</p><p>Verbatim north-scan excerpt · othello/board.py</p><pre><code>    # North\n    candidates = opp &amp; (me &gt;&gt; 8)\n    for _ in range(6):\n        candidates |= opp &amp; (candidates &gt;&gt; 8)\n    moves |= empty &amp; (candidates &gt;&gt; 8)</code></pre></details><footer>Why Numba? Compile the move logic repeated throughout search.</footer></section>" },
      { type: "visual", html: "<section class=\"oz-slide oz-graphic-slide\"><header><span>OTHELLO / ENGINEERING</span><span>04 / 07</span></header><h2>One shared trunk. Two useful answers.</h2><div class=\"oz-art\"><div class=\"oz-network\"><div class=\"oz-node\"><b>3 input planes</b><span>Own · opponent · turn</span></div><span class=\"oz-down\">↓</span><div class=\"oz-residual\"><span>↷ skip connection</span><div class=\"oz-node\"><b>10 residual blocks</b><span>128 channels · spatial features</span></div></div><span class=\"oz-down\">↓ split</span><div class=\"oz-heads\"><div><div class=\"oz-board\" role=\"img\" aria-label=\"Illustrative policy heatmap\"><div><span class=\"oz-heat\" style=\"opacity:0.15\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4833333333333333\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.8166666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.7333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.31666666666666665\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.65\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.23333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.5666666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.15\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4833333333333333\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.8166666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.7333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.31666666666666665\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.65\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.23333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.5666666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.15\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4833333333333333\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.8166666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.7333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.31666666666666665\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.65\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.23333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.5666666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.15\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4833333333333333\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.8166666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.7333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.31666666666666665\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.65\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.23333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.5666666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.15\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4833333333333333\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.8166666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.7333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.31666666666666665\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.65\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.23333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.5666666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.15\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4833333333333333\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.8166666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.7333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.31666666666666665\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.65\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.23333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.5666666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.15\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4833333333333333\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.8166666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.4\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.7333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.31666666666666665\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.65\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.23333333333333334\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.5666666666666667\"></span></div><div><span class=\"oz-heat\" style=\"opacity:0.15\"></span></div></div><b>POLICY · 64 squares</b><small>Where to search</small></div><div><div class=\"oz-gauge\"><span>−1</span><i></i><span>+1</span></div><b>VALUE · one scalar</b><small>Expected outcome</small></div></div></div></div><p class=\"oz-takeaway\">Convolutions learn board patterns; residual connections support deeper learning.</p><details class=\"oz-details\"><summary>Technical notes</summary><p>Input shape is (batch, 3, 8, 8). Illegal policy moves are masked and remaining probabilities renormalized in search. Value is from the current player’s perspective. Heatmap and gauge are illustrative, not model outputs.</p></details><footer>Shared features avoid duplicating the policy and value encoders.</footer></section>" },
      { type: "visual", html: "<section class=\"oz-slide oz-graphic-slide\"><header><span>OTHELLO / ENGINEERING</span><span>05 / 07</span></header><h2>Explore beyond the obvious move.</h2><div class=\"oz-art\"><svg class=\"oz-tree\" viewBox=\"0 0 500 240\" role=\"img\" aria-label=\"Illustrative search tree highlighting a selected branch\"><g fill=\"none\" stroke=\"#54796a\" stroke-width=\"3\"><path d=\"M250 35L95 115M250 35L250 115M250 35L405 115M95 115L45 205M95 115L145 205M250 115L205 205M250 115L295 205\"/><path d=\"M250 35L250 115L295 205\" stroke=\"#d2f79c\" stroke-width=\"6\"/></g><g fill=\"#183f34\" stroke=\"#b5d897\" stroke-width=\"2\"><circle cx=\"250\" cy=\"35\" r=\"23\"/><circle cx=\"95\" cy=\"115\" r=\"25\"/><circle cx=\"250\" cy=\"115\" r=\"25\"/><circle cx=\"405\" cy=\"115\" r=\"25\"/><circle cx=\"45\" cy=\"205\" r=\"13\"/><circle cx=\"145\" cy=\"205\" r=\"13\"/><circle cx=\"205\" cy=\"205\" r=\"13\"/><circle cx=\"295\" cy=\"205\" r=\"13\" fill=\"#d2f79c\"/></g><g fill=\"#edf6ed\" font-size=\"15\" text-anchor=\"middle\"><text x=\"250\" y=\"40\">root</text><text x=\"95\" y=\"120\">18</text><text x=\"250\" y=\"120\">62</text><text x=\"405\" y=\"120\">20</text></g></svg><div class=\"oz-choice\"><div class=\"oz-node\"><b>VALUE</b><span>Favor promising moves</span></div><div class=\"oz-node\"><b>EXPLORATION</b><span>Prior × room to explore</span></div></div></div><p class=\"oz-takeaway\">PUCT balances expected value with opportunities worth exploring.</p><details class=\"oz-details\"><summary>Technical notes</summary><p>PUCT = −Q(child) + 1.5 × P(child) × √N(parent) / (1 + N(child)). Q is mean child value; P is its prior; N counts visits.</p><p>Self-play root noise: Dirichlet α = 0.3, ε = 0.25. Child visit counts become policy targets. Move sampling becomes greedy at move 20.</p></details><footer>Illustrative visit counts · highlighted search path</footer></section>" },
      { type: "visual", html: "<section class=\"oz-slide oz-graphic-slide\"><header><span>OTHELLO / ENGINEERING</span><span>06 / 07</span></header><h2>Give the GPU more work per call.</h2><div class=\"oz-art\"><div class=\"oz-speed\">&gt;60× <span>reported training speedup</span></div><div class=\"oz-workers\"><div class=\"oz-node\"><b>WORKER 1</b><span>games → leaves → batch</span></div><div class=\"oz-node\"><b>WORKER 2</b><span>games → leaves → batch</span></div><div class=\"oz-node\"><b>WORKER 3</b><span>games → leaves → batch</span></div><div class=\"oz-node\"><b>WORKER 4</b><span>games → leaves → batch</span></div></div><div class=\"oz-down\">↓ batched inference per worker</div><div class=\"oz-node\"><b>GPU · policy + value evaluations</b><span>Results return to each game’s search tree</span></div><div class=\"oz-chips\"><span>4 worker processes</span><span>8 board symmetries</span></div></div><p class=\"oz-takeaway\">Batching amortizes GPU calls. Parallel workers generate experience concurrently.</p><details class=\"oz-details\"><summary>Technical notes</summary><p>Each worker gathers selected leaves across its active games into a shared forward pass. This is per-worker batching, not a centralized cross-worker inference queue. Four rotations and their mirrors teach orientation invariance while transforming board and policy targets together.</p></details><footer>Speedup reported for batching and parallel processing combined.</footer></section>" },
      { type: "visual", html: "<section class=\"oz-slide oz-graphic-slide\"><header><span>OTHELLO / ENGINEERING</span><span>07 / 07</span></header><h2>Remember. Sample. Learn.</h2><div class=\"oz-art\"><div class=\"oz-replay\"><div class=\"oz-ring\"><b>384,000</b><span>replay positions</span><small>↻ overwrite oldest</small></div><span class=\"oz-arrow\" aria-hidden=\"true\">→</span><div class=\"oz-node\"><b>2,048</b><span>samples per batch</span></div></div><div class=\"oz-losses\"><div class=\"oz-node\"><b>POLICY LOSS</b><span>Cross-entropy</span></div><span>+</span><div class=\"oz-node\"><b>VALUE LOSS</b><span>Mean squared error</span></div></div><div class=\"oz-chips\"><span>Mixed precision</span><span>Adam + gradient clipping</span><span>Checkpoint every 5 iterations</span></div></div><p class=\"oz-takeaway\">Replay mixes recent games to reduce correlation between updates.</p><details class=\"oz-details\"><summary>Technical notes</summary><p>Capacity: 800 games × approximately 60 positions × 8 symmetries = 384,000 positions. Checkpoint matches and an Egaroucid runner support evaluation. Automatic model promotion is disabled in the training loop. No measured playing strength is claimed.</p></details><footer>Bounded memory · two learning targets · saved progress</footer></section>" }
    ],
    comments: [
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "I built an AlphaZero-style Othello engine around a self-play learning loop: MCTS visit counts teach a policy head, and game outcomes teach a value head. Two uint64 bitboards and Numba handle move logic; batched leaf evaluations share GPU forward passes across active games. A 10-block ResNet learns from an eight-way augmented replay buffer. Batching and parallel processing sped up training by over 60× in my experiments. Swipe through the architecture choices, search, and training design.",
        time: "8w"
      },
      {
        user: "luc4s.l1",
        avatar: "L",
        text: "Bitboards + Numba JIT makes so much difference. Standard python search loops can get super slow.",
        time: "8w"
      },
      {
        user: "melvin_fung",
        avatar: "M",
        text: "what exploration parameters are you using in MCTS?",
        time: "7w"
      },
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "@melvin_fung PUCT exploration constant is set to 1.5, with Dirichlet noise parameter alpha=0.3 and epsilon=0.25 at the search tree root. This encourages the network to play diverse moves during early self-play iterations.",
        time: "7w"
      }
    ]
  },
  "firefighter-bot": {
    title: "Firefighter Bot",
    likes: 760,
    commentsCount: 18,
    date: "June 8, 2026",
    link: "#",
    github: "https://github.com",
    slides: [
      { type: "visual", html: "<section class=\"fb-story\"><header><span>FIREFIGHTER BOT</span><span>01 / THE BUILD</span></header><h2>Built to find the flame.</h2><div class=\"fb-art\"><div class=\"fb-hero\"><div class=\"fb-photo\"><img src=\"Firefighter%20bot/Flahamey.jpeg\" alt=\"Three-level Firefighter Bot with fan, circuit boards and front sensors\"></div><div class=\"fb-hero-copy\"><span class=\"fb-kicker\">AUTONOMOUS ROBOTICS</span><strong>Sense.<br>Navigate.<br>Respond.</strong><div class=\"fb-tags\"><span>Custom PCBs</span><span>Embedded control</span></div></div></div></div><p class=\"fb-takeaway\">A physical build connecting sensing, maze navigation and a transistor-driven fan.</p></section>" },
      { type: "visual", html: "<section class=\"fb-story\"><header><span>FIREFIGHTER BOT</span><span>02 / FIELD DEMO</span></header><h2>Watch the robot in action.</h2><div class=\"fb-art\"><div class=\"fb-video-frame\"><video class=\"project-video\" controls muted playsinline preload=\"metadata\" poster=\"Firefighter%20bot/Flahamey.jpeg\"><source src=\"Firefighter%20bot/firefighter-demo.webm\" type=\"video/webm\"><source src=\"Firefighter%20bot/firefighter-demo.mp4\" type=\"video/mp4\">Your browser does not support embedded video.</video></div></div><p class=\"fb-takeaway\">Maze testing brought calibration, motor timing and power stability into the same loop.</p></section>" },
      { type: "visual", html: "<section class=\"fb-story\"><header><span>FIREFIGHTER BOT</span><span>03 / HARDWARE INTEGRATION</span></header><h2>Three levels. One integrated system.</h2><div class=\"fb-art\"><div class=\"fb-build\"><div class=\"fb-photo\"><img src=\"Firefighter%20bot/Flahamey.jpeg\" alt=\"Three-level Firefighter Bot with fan, circuit boards and front sensors\"></div><div class=\"fb-levels\"><div class=\"fb-node\"><b>01 · RESPOND</b><span>Fan and air outlet</span></div><div class=\"fb-node\"><b>02 · CONTROL</b><span>Controller, wiring and power</span></div><div class=\"fb-node\"><b>03 · SENSE</b><span>Front-facing sensors and circuit boards</span></div></div></div></div><p class=\"fb-takeaway\">Mounting and wiring matter: stable sensors make repeatable decisions possible.</p></section>" },
      { type: "visual", html: "<section class=\"fb-story\"><header><span>FIREFIGHTER BOT</span><span>04 / SYSTEM ARCHITECTURE</span></header><h2>From readings to action.</h2><div class=\"fb-art\"><div class=\"fb-row\"><div class=\"fb-node\"><b>LINE</b><span>Floor transitions</span></div><div class=\"fb-node\"><b>WALL</b><span>Distance</span></div><div class=\"fb-node\"><b>FLAME</b><span>Infrared</span></div></div><div class=\"fb-arrow\" aria-hidden=\"true\">↓</div><div class=\"fb-node\"><b>ATMEGA328P</b><span>Read sensors → choose a response</span></div><div class=\"fb-arrow\" aria-hidden=\"true\">↓</div><div class=\"fb-row\"><div class=\"fb-node\"><b>MOTION</b><span>Motor driver</span></div><div class=\"fb-node\"><b>DEBUG</b><span>LCD output</span></div><div class=\"fb-node\"><b>RESPONSE</b><span>Fan circuit</span></div></div></div><p class=\"fb-takeaway\">Separate sensing and actuator stages keep the control logic understandable.</p></section>" },
      { type: "visual", html: "<section class=\"fb-story\"><header><span>FIREFIGHTER BOT</span><span>05 / PCB DESIGN · CONCEPTUAL GRAPHIC</span></header><h2>Designed. Soldered. Debugged.</h2><div class=\"fb-art\"><svg class=\"fb-svg\" viewBox=\"0 0 520 260\" role=\"img\" aria-label=\"Conceptual PCB with routed traces, component pads and controller\"><rect x=\"60\" y=\"15\" width=\"400\" height=\"230\" rx=\"18\" fill=\"#244d43\"/><g fill=\"none\" stroke=\"#c7aa66\" stroke-width=\"4\"><path d=\"M85 70H170V105H220M85 190H155V150H220M300 100H370V55H430M300 155H390V205H430\"/></g><g fill=\"#e1c885\"><circle cx=\"85\" cy=\"70\" r=\"5\"/><circle cx=\"85\" cy=\"190\" r=\"5\"/><circle cx=\"430\" cy=\"55\" r=\"5\"/><circle cx=\"430\" cy=\"205\" r=\"5\"/></g><rect x=\"210\" y=\"75\" width=\"110\" height=\"110\" rx=\"8\" fill=\"#152e29\" stroke=\"#91ad9d\"/><text x=\"265\" y=\"122\" text-anchor=\"middle\" style=\"fill:#f5f1e7\">CONTROL</text><text x=\"265\" y=\"146\" text-anchor=\"middle\" style=\"fill:#f5f1e7\">BOARD</text><g fill=\"#b4c3ad\"><rect x=\"200\" y=\"90\" width=\"10\" height=\"6\"/><rect x=\"200\" y=\"107\" width=\"10\" height=\"6\"/><rect x=\"200\" y=\"124\" width=\"10\" height=\"6\"/><rect x=\"200\" y=\"141\" width=\"10\" height=\"6\"/><rect x=\"200\" y=\"158\" width=\"10\" height=\"6\"/><rect x=\"200\" y=\"175\" width=\"10\" height=\"6\"/><rect x=\"320\" y=\"90\" width=\"10\" height=\"6\"/><rect x=\"320\" y=\"107\" width=\"10\" height=\"6\"/><rect x=\"320\" y=\"124\" width=\"10\" height=\"6\"/><rect x=\"320\" y=\"141\" width=\"10\" height=\"6\"/><rect x=\"320\" y=\"158\" width=\"10\" height=\"6\"/><rect x=\"320\" y=\"175\" width=\"10\" height=\"6\"/></g></svg><div class=\"fb-row\"><div class=\"fb-node\"><b>LAYOUT</b><span>TraxMaker boards</span></div><div class=\"fb-node\"><b>ASSEMBLY</b><span>Headers + components</span></div><div class=\"fb-node\"><b>BRING-UP</b><span>Power + signal checks</span></div></div></div><p class=\"fb-takeaway\">Board-level reliability depends on the details: connections, noise and stable power.</p><details class=\"fb-notes\"><summary>Engineering details</summary><p>Custom sensing, control and power boards used soldered headers, screw terminals, resistors, capacitors and driver components. The graphic illustrates board structure; it is not a reproduction of the routed PCB.</p></details></section>" },
      { type: "visual", html: "<section class=\"fb-story\"><header><span>FIREFIGHTER BOT</span><span>06 / SENSOR STACK</span></header><h2>Three sensors. Three questions.</h2><div class=\"fb-art\"><div class=\"fb-sensors\"><div><span class=\"fb-sensor-icon\">▰ ▱</span><div class=\"fb-node\"><b>Where is the line?</b><span>LED + BPW17N · floor contrast</span></div></div><div><span class=\"fb-sensor-icon\">)))</span><div class=\"fb-node\"><b>How close is the wall?</b><span>Parallax 28015 · front + left distance</span></div></div><div><span class=\"fb-sensor-icon\">◉</span><div class=\"fb-node\"><b>Is there a flame?</b><span>QSD123 · infrared detection</span></div></div></div></div><p class=\"fb-takeaway\">Each input answers a different navigation or response question.</p><details class=\"fb-notes\"><summary>Engineering details</summary><p>Line sensing distinguishes dark flooring from white maze lines for room tracking. Flame thresholds and sensor placement require calibration to reduce ambient-light false positives.</p></details></section>" },
      { type: "visual", html: "<section class=\"fb-story\"><header><span>FIREFIGHTER BOT</span><span>07 / NAVIGATION · ILLUSTRATIVE PATH</span></header><h2>Keep the wall within reach.</h2><div class=\"fb-art\"><svg class=\"fb-svg\" viewBox=\"0 0 520 260\" role=\"img\" aria-label=\"Conceptual wall-following path and left-wall distance\"><path d=\"M65 230V30H450V230H310V125H195V230\" fill=\"none\" stroke=\"#364a48\" stroke-width=\"12\" stroke-linejoin=\"round\"/><path d=\"M125 225V85H385V195\" fill=\"none\" stroke=\"#c75535\" stroke-width=\"4\" stroke-dasharray=\"8 7\"/><rect x=\"100\" y=\"158\" width=\"50\" height=\"60\" rx=\"12\" fill=\"#263f3b\"/><circle cx=\"113\" cy=\"173\" r=\"5\" fill=\"#d9b66e\"/><circle cx=\"137\" cy=\"173\" r=\"5\" fill=\"#d9b66e\"/><path d=\"M72 190H97M76 185L71 190L76 195M92 185L98 190L92 195\" fill=\"none\" stroke=\"#c75535\" stroke-width=\"2\"/><text x=\"160\" y=\"200\">≈12 cm target</text><text x=\"220\" y=\"65\">Follow the left wall</text><path d=\"M372 192L385 207L398 192\" fill=\"none\" stroke=\"#c75535\" stroke-width=\"4\"/></svg><div class=\"fb-tags\"><span>Measure distance</span><span>Correct drift</span><span>Turn at obstacles</span></div></div><p class=\"fb-takeaway\">Follow the left wall at roughly 12 cm; turn right when front and left paths are blocked.</p><details class=\"fb-notes\"><summary>Engineering details</summary><p>Motor timing adjusts drift. Line crossings support room tracking. Flame detection takes priority over normal wall-following behavior.</p></details></section>" },
      { type: "visual", html: "<section class=\"fb-story\"><header><span>FIREFIGHTER BOT</span><span>08 / FLAME RESPONSE · FUNCTIONAL DIAGRAM</span></header><h2>A small signal drives the fan.</h2><div class=\"fb-art\"><svg class=\"fb-svg\" viewBox=\"0 0 520 260\" role=\"img\" aria-label=\"Functional fan-driver diagram, not a wiring schematic\"><path d=\"M40 130H165M285 130H390\" stroke=\"#c75535\" stroke-width=\"4\" fill=\"none\"/><rect x=\"165\" y=\"90\" width=\"120\" height=\"80\" rx=\"10\" fill=\"#263f3b\"/><text x=\"225\" y=\"126\" text-anchor=\"middle\" style=\"fill:white\">TIP120</text><text x=\"225\" y=\"149\" text-anchor=\"middle\" style=\"fill:#c8d9cf\">switch</text><circle cx=\"420\" cy=\"130\" r=\"54\" fill=\"#e6ebe3\" stroke=\"#7c9387\" stroke-width=\"2\"/><g fill=\"#577b6c\"><path d=\"M420 130C365 95 410 65 420 130M420 130C475 95 470 150 420 130M420 130C420 195 365 160 420 130\"/></g><circle cx=\"420\" cy=\"130\" r=\"8\" fill=\"#263f3b\"/><text x=\"65\" y=\"100\" text-anchor=\"middle\">control</text><text x=\"65\" y=\"163\" text-anchor=\"middle\">signal</text><text x=\"420\" y=\"215\" text-anchor=\"middle\">fan motor</text><path d=\"M310 130V40H465V95\" fill=\"none\" stroke=\"#9aab9f\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><text x=\"385\" y=\"25\" text-anchor=\"middle\">flyback protection</text></svg><div class=\"fb-tags\"><span>TIP120 switch</span><span>1N4001G diode</span><span>1000 µF capacitor</span></div></div><p class=\"fb-takeaway\">The controller commands a switching stage that handles the fan’s power path.</p><details class=\"fb-notes\"><summary>Engineering details</summary><p>The flyback diode suppresses inductive transients; the capacitor supports power stability. Diagram is functional, not a wiring schematic. Component values come from the existing project description.</p></details></section>" },
      { type: "visual", html: "<section class=\"fb-story\"><header><span>FIREFIGHTER BOT</span><span>09 / MOTION CONTROL</span></header><h2>Turn decisions into movement.</h2><div class=\"fb-art\"><div class=\"fb-node\"><b>ATMEGA328P-PU</b><span>Navigation decisions</span></div><div class=\"fb-arrow\" aria-hidden=\"true\">↓</div><div class=\"fb-node\"><b>SN754410NE</b><span>Motor driver stage</span></div><div class=\"fb-arrow\" aria-hidden=\"true\">↓</div><div class=\"fb-row\"><div class=\"fb-node\"><b>LEFT MOTOR</b><span>Nema 17</span></div><div class=\"fb-node\"><b>RIGHT MOTOR</b><span>Nema 17</span></div></div><div class=\"fb-support\"><span>LCD → inspect behavior</span><span>10,000 µF → motor power smoothing</span></div></div><p class=\"fb-takeaway\">Motor control, power delivery and debugging have to work together.</p></section>" },
      { type: "visual", html: "<section class=\"fb-story\"><header><span>FIREFIGHTER BOT</span><span>10 / CONTROL LOGIC · CONCEPTUAL</span></header><h2>A clear priority for every cycle.</h2><div class=\"fb-art\"><div class=\"fb-node\"><b>READ SENSORS</b><span>Line · left distance · front distance · flame</span></div><div class=\"fb-arrow\" aria-hidden=\"true\">↓</div><div class=\"fb-decisions\"><div class=\"fb-node\"><b>01 · FLAME DETECTED</b><span>Stop motion → activate fan</span></div><div class=\"fb-node\"><b>02 · FRONT + LEFT BLOCKED</b><span>Turn right</span></div><div class=\"fb-node\"><b>03 · OTHERWISE</b><span>Follow the left wall</span></div></div></div><p class=\"fb-takeaway\">Simple priorities connect sensor readings to predictable physical actions.</p><details class=\"fb-notes\"><summary>Engineering details</summary><p>This is a conceptual summary of the behavior, not a verbatim firmware listing. The previous code slide used illustrative function names.</p></details></section>" }
    ],
    comments: [
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "Built an autonomous firefighter robot around custom TraxMaker PCB boards, soldered sensor/control circuits, wall-following logic, and flame detection. The robot uses line sensing for room tracking, Parallax distance sensors for maze navigation, an IR flame sensor for candle detection, and a transistor-driven fan circuit for extinguishing.",
        time: "1d"
      },
      {
        user: "melvin_fung",
        avatar: "M",
        text: "custom pcb and sensor calibration in one project is no joke. did the flame sensor get noisy?",
        time: "1d"
      },
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "@melvin_fung definitely. A lot of the work was tuning thresholds, reducing false positives from ambient light, and keeping the sensor position stable enough that the robot behaved consistently in the maze.",
        time: "1d"
      }
    ]
  }
};


// ----------------------------------------------------
// 2. CLIENT-SIDE RAG TEXT KNOWLEDGE BASE
// ----------------------------------------------------
const KNOWLEDGE_BASE = [
  {
  "project": "campus-collectives",
  "title": "Campus Collectives",
  "tech": [
    "typescript",
    "next.js",
    "langchain",
    "groq",
    "ai agents",
    "orchestration",
    "ecommerce",
    "fulfillment"
  ],
  "metrics": "Matthew reports 98 orders and over $6K revenue as business totals, with no specified currency. Manual operations fell from 10 to 2 hours weekly: an 80% reduction and 8 hours saved. These totals do not imply all orders were agent-processed.",
  "text": "Campus Collectives uses a custom AI fulfillment orchestrator with LangChain and Groq. It coordinates marketplace order intake, supplier drafts and freight validation, shipment-email parsing with AI enrichment, deterministic candidate matching, structured AI adjudication, carrier validation, and tracking updates. Ambiguous cases enter human review. Purchasing remains explicit. Displayed project date: December 2025; later capabilities are not attributed to launch."
},
  {
    project: "visual-hook-studio",
    title: "Visual Hook Studio",
    tech: ["python", "fastapi", "ffmpeg", "sqlite", "meta api", "instagram", "vps", "automation", "webhooks"],
    metrics: "Helped generate over 1 million views in 3 weeks and grow the waitlist from 40 to 200+ (5× growth), as reported by Matthew. The three-week timeframe applies to views only. Runs continuously on a private VPS with separate web, rendering, preparation, publishing, insights, and comment-automation processes. Campaigns can create distinct reels for multiple daily slots and selected Instagram accounts.",
    text: "Visual Hook Studio is an end-to-end short-form content system. It combines a reaction clip, rotating on-video hook, music edit, and app-demo recording into a vertical reel, aligns the marked beat drop with the product reveal, schedules publishing through Meta, records TikTok exports, collects Instagram insight snapshots, and supports signed-webhook comment-to-DM rules."
  },
  {
    project: "scoreshift",
    title: "ScoreShift (Sheet Music Transposition App)",
    tech: ["python", "fastapi", "oemer", "omr", "music21", "verovio", "wasm", "docker", "hugging face spaces"],
    metrics: "Runs on a public Docker-based Hugging Face Space free tier. Prepares large files in the browser resizing to 2200px and capping at 1800px on the backend to avoid processing delays.",
    text: "ScoreShift is a deployed web application for transposing sheet music. Users can upload/photograph music sheets, trigger OMR (Optical Music Recognition) using oemer, transpose pitch using music21, and preview score sheets dynamically in the browser using Verovio WASM. The site exports vector PDF, individual page PNG/JPEGs, or MusicXML files. Built with FastAPI backend and Docker."
  },
  {
    project: "hvac-model",
    title: "HomeWise AI HVAC Confidence Model",
    tech: ["python", "xgboost", "pytorch", "pandas", "numpy", "scikit-learn", "cuda"],
    metrics: "Trained on 12,709 telemetry rows from 350 devices. Achieved R-squared (R²) score of 0.871 and Mean Absolute Error (MAE) of 4.576 points on held-out test data.",
    text: "Built during Matthew’s internship at HomeWise AI, this project is a machine learning regression pipeline predicting HVAC operational confidence scores. Telemetry is sorted chronologically and grouped by device into W=8 sliding windows (input shape [8, 4]). Features engineered include temperature values, target setpoints, deviation (temp - setpoint), and slope. Trained an interpretable XGBoost model (25 features per window) and a PyTorch feedforward comparison neural net."
  },
  {
    project: "hvac-rag",
    title: "HomeWise AI HVAC RAG System",
    tech: ["fastapi", "pytorch", "qdrant cloud", "openai api", "docker", "postgresql"],
    metrics: "Embeds W=8 HVAC sensor windows into 128-dimensional normalized vectors. Processes 1,996 historical readings into 1,611 indexed database windows. Supports 5 incident classes (freeze_risk, hvac_drift, humidity_risk, normal, hvac_anomaly).",
    text: "Built during Matthew’s internship at HomeWise AI, the HVAC RAG system is an end-to-end telemetry anomaly explainer. A FastAPI server validates 8-reading inputs, engineers an [8, 8] matrix, passes it through a PyTorch MLP encoder to get a 128-d vector, and retrieves the top 5 closest historical match payloads from Qdrant Cloud. Finally, it uses OpenAI API to output structured JSON diagnostic reports containing risk analysis, severity, and recommended operator checks, with a deterministic local rule-based explanation fallback."
  },
  {
    project: "othello-az",
    title: "AlphaZero-Style Othello Engine",
    tech: ["python", "pytorch", "numba", "cuda", "multiprocessing", "resnet", "mcts"],
    metrics: "2.97-million-parameter PyTorch ResNet (10 residual blocks, 128 trunk filters). Pre-allocates replay buffers to hold 384,000 positions. Configured for 75–200 games per iteration across 4 workers; integer division can drop remainder games. Training batch size 2,048; checkpoint interval 5 iterations. Matthew reports over 60× faster training from batching and parallel processing combined; baseline hardware and timing protocol are not documented.",
    text: "A self-play reinforcement learning Othello engine modeled on AlphaZero. Boards are represented as two uint64 bitboards, JIT-compiled with Numba for high speed. Uses a neural-guided Monte Carlo Tree Search (MCTS) with PUCT exploration formula (constant 1.5). Evaluates search tree leaf node positions in GPU batches. Positions are rotated and flipped with 8-way board symmetries for data augmentation."
  },
  {
    project: "firefighter-bot",
    title: "Firefighter Bot",
    tech: ["embedded systems", "traxmaker", "pcb", "soldering", "atmega328p", "sensors", "motor control", "robotics"],
    metrics: "Triple-layer 15 cm x 15 cm x 21 cm chassis with custom TraxMaker PCB boards, LED/phototransistor line detection, Parallax distance sensors, QSD123 IR flame detection, SN754410NE motor driving, and TIP120 fan switching.",
    text: "Firefighter Bot is an autonomous maze robot built from custom soldered electronics and embedded navigation logic. It uses line detection to track room transitions, front and left distance sensors to follow walls, an IR phototransistor to detect candle flame signatures, and a transistor-driven fan circuit to extinguish the flame. The project included TraxMaker PCB design, soldering headers and components, sensor calibration, power stabilization, and repeated maze testing."
  },
  {
    project: "general",
    title: `${DISPLAY_NAME} Portfolio & Background`,
    tech: ["python", "javascript", "pytorch", "fastapi", "docker", "ml", "neural networks", "vector search", "embedded systems"],
    metrics: `${DISPLAY_NAME} is a Software Engineer specializing in Machine Learning, RAG search systems, and robust backend/frontend tool architectures.`,
    text: `${DISPLAY_NAME} is a software engineer whose full name is ${FULL_NAME}. He has built several key projects: Campus Collectives (AI fulfillment orchestration; 80% less manual work), Visual Hook Studio (VPS-hosted reel automation), ScoreShift (music processing web app), HomeWise AI HVAC Model (internship; XGBoost & PyTorch regression), HomeWise AI HVAC RAG (internship; FastAPI/Qdrant vector search explaining anomalies), AlphaZero Othello (an RL board game engine), Overdose Policy Simulator (health policy modeling), and Firefighter Bot (custom PCB embedded robotics). You can download his resume directly using the 'Download Resume' button at the top of his page.`
  }
];


// ----------------------------------------------------
// 3. UI STATE & INITIALIZATION
// ----------------------------------------------------
const PROJECT_ORDER = ["visual-hook-studio", "campus-collectives", "overdose-policy", "scoreshift", "othello-az", "firefighter-bot", "hvac-model", "hvac-rag"];
// Paste your Supabase Project URL and public anon key here before deploying comments.
const SUPABASE_URL = "https://ufdkrzjyinmjbivmncch.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_j4Qf-GU3slwGoLxU8vq7Iw_utNc-wb3";
const COMMENT_MAX_LENGTH = 500;
const COMMENT_AUTHOR_MAX_LENGTH = 30;
const COMMENT_AUTHOR_STORAGE_KEY = "portfolio:comment-author";
const COMMENT_COOLDOWN_MS = 30000;
const COMMENT_COOLDOWN_STORAGE_KEY = "portfolio:last-comment-submit";
const EMOJI_RECENT_STORAGE_KEY = "portfolio:recent-emojis";
const EMOJI_RECENT_LIMIT = 12;
const MOBILE_BREAKPOINT = 767;
const EMOJI_CATEGORIES = {
  recent: { label: "Recently Used", icon: "◷", emojis: [] },
  smileys: {
    label: "Smileys & People",
    icon: "☺",
    emojis: [
      ["😀", "grinning face smile happy"],
      ["😃", "smiley happy"],
      ["😄", "smile happy laugh"],
      ["😁", "grin happy"],
      ["😆", "laugh squint"],
      ["🥹", "teary happy grateful"],
      ["😅", "sweat smile relief"],
      ["😂", "joy laugh tears"],
      ["🤣", "rolling laugh"],
      ["🥲", "smiling tear"],
      ["😊", "blush smile"],
      ["🙂", "slight smile"],
      ["😇", "angel halo"],
      ["🙃", "upside down"],
      ["😉", "wink"],
      ["😍", "heart eyes love"],
      ["🥰", "hearts love"],
      ["😘", "kiss"],
      ["🤔", "thinking"],
      ["🤫", "shush"],
      ["😎", "cool sunglasses"],
      ["😭", "cry sob"],
      ["😤", "triumph"],
      ["😳", "flushed"],
      ["👏", "clap applause"],
      ["🙏", "pray thanks"],
      ["💪", "strong flex"]
    ]
  },
  people: {
    label: "People",
    icon: "♙",
    emojis: [["👋", "wave hello"], ["👍", "thumbs up"], ["🙌", "raised hands"], ["🤝", "handshake"], ["🧠", "brain smart"], ["👀", "eyes"], ["🧑‍💻", "developer coder"], ["👨‍💻", "man coder"], ["👩‍💻", "woman coder"]]
  },
  nature: {
    label: "Nature",
    icon: "♧",
    emojis: [["🔥", "fire hot"], ["✨", "sparkles"], ["🌟", "star"], ["⚡", "lightning"], ["🌙", "moon"], ["☀️", "sun"], ["🌊", "wave"], ["🏔️", "mountain"], ["❄️", "snow"]]
  },
  food: {
    label: "Food",
    icon: "♨",
    emojis: [["🍕", "pizza"], ["🍔", "burger"], ["🍣", "sushi"], ["🍜", "ramen noodles"], ["☕", "coffee"], ["🍵", "tea"], ["🍪", "cookie"], ["🍓", "strawberry"], ["🥐", "croissant"]]
  },
  activities: {
    label: "Activities",
    icon: "◉",
    emojis: [["🚀", "rocket launch"], ["🏂", "snowboard"], ["🎵", "music"], ["🎮", "game"], ["♟️", "chess"], ["🏆", "trophy"], ["🎯", "target"], ["📈", "chart"], ["💻", "laptop"]]
  },
  objects: {
    label: "Objects",
    icon: "⌘",
    emojis: [["💡", "idea light"], ["📌", "pin"], ["📎", "clip"], ["🧪", "lab experiment"], ["🔬", "science"], ["🛠️", "tools"], ["⚙️", "gear"], ["📚", "books"], ["📝", "memo"]]
  },
  symbols: {
    label: "Symbols",
    icon: "✣",
    emojis: [["❤️", "heart love"], ["💙", "blue heart"], ["✅", "check done"], ["❌", "cross no"], ["⭐", "star"], ["💯", "hundred"], ["⁉️", "question exclamation"], ["🎉", "party"], ["🔁", "repeat"]]
  }
};
let activeProject = null;
let activeMobileProject = null;
let currentSlideIndex = 0;
let activeEmojiInput = null;

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initModals();
  initDMChatbot();
  initResumeDownload();
  initEmojiPicker();
});

// Tab toggle (Posts vs About)
function initTabs() {
  const tabs = document.querySelectorAll(".tab-item");
  const postsGrid = document.getElementById("grid-posts");
  const aboutSection = document.getElementById("grid-about");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const tabName = tab.getAttribute("data-tab");
      if (tabName === "posts") {
        postsGrid.classList.remove("hidden");
        aboutSection.classList.add("hidden");
      } else {
        postsGrid.classList.add("hidden");
        aboutSection.classList.remove("hidden");
      }
    });
  });
}

// Resume button click handler
function initResumeDownload() {
  const btnResume = document.getElementById("btn-resume");
  btnResume.addEventListener("click", () => {
    window.open("Matthew%20Yu%20Resume.pdf", "_blank", "noopener,noreferrer");
  });
}

function toggleHeartState(heartSvg) {
  if (!heartSvg) return false;

  const heartPath = heartSvg.querySelector("path") || heartSvg;
  const isLiked = heartPath.getAttribute("fill") === "red";
  if (isLiked) {
    heartSvg.setAttribute("fill", "none");
    heartSvg.setAttribute("stroke", "currentColor");
    heartPath.setAttribute("fill", "none");
    heartPath.setAttribute("stroke", "currentColor");
    return false;
  }

  heartSvg.setAttribute("fill", "red");
  heartSvg.setAttribute("stroke", "red");
  heartPath.setAttribute("fill", "red");
  heartPath.setAttribute("stroke", "red");
  return true;
}

function initEmojiPicker() {
  const picker = document.getElementById("emoji-picker");
  const search = document.getElementById("emoji-search");
  const emojiButtons = document.querySelectorAll("[data-emoji-target]");

  emojiButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const targetInput = document.getElementById(button.dataset.emojiTarget);
      openEmojiPicker(targetInput, button);
    });
  });

  search.addEventListener("input", () => {
    renderEmojiSections(search.value);
  });

  document.addEventListener("click", (e) => {
    if (picker.classList.contains("hidden")) return;
    if (picker.contains(e.target) || e.target.closest("[data-emoji-target]")) return;
    closeEmojiPicker();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeEmojiPicker();
  });

  renderEmojiSections("");
}

function openEmojiPicker(targetInput, anchorButton) {
  if (!targetInput) return;

  const picker = document.getElementById("emoji-picker");
  const search = document.getElementById("emoji-search");
  activeEmojiInput = targetInput;

  search.value = "";
  picker.classList.remove("hidden");
  renderEmojiSections("");
  positionEmojiPicker(anchorButton);
  setTimeout(() => search.focus(), 0);
}

function closeEmojiPicker() {
  const picker = document.getElementById("emoji-picker");
  if (!picker) return;
  picker.classList.add("hidden");
  activeEmojiInput = null;
}

function positionEmojiPicker(anchorButton) {
  const picker = document.getElementById("emoji-picker");
  const rect = anchorButton.getBoundingClientRect();
  const pickerRect = picker.getBoundingClientRect();
  const margin = 8;

  const left = Math.min(
    Math.max(margin, rect.left),
    window.innerWidth - pickerRect.width - margin
  );
  const top = Math.max(margin, rect.top - pickerRect.height - 10);

  picker.style.left = `${left}px`;
  picker.style.top = `${top}px`;
}

function renderEmojiSections(query) {
  const scroll = document.getElementById("emoji-scroll");
  const normalizedQuery = query.trim().toLowerCase();
  scroll.innerHTML = "";

  if (normalizedQuery) {
    const emojis = Object.values(EMOJI_CATEGORIES)
      .flatMap(category => category.emojis)
      .filter(([emoji, keywords]) => emoji.includes(normalizedQuery) || keywords.includes(normalizedQuery));

    if (emojis.length === 0) {
      appendEmojiEmptyState(scroll);
    } else {
      appendEmojiSection(scroll, "Search Results", emojis);
    }
    return;
  }

  const recents = getRecentEmojis();
  appendEmojiSection(
    scroll,
    "Recently Used",
    recents.length > 0
      ? recents.map(emoji => [emoji, "recent used"])
      : EMOJI_CATEGORIES.smileys.emojis.slice(0, 12)
  );

  Object.entries(EMOJI_CATEGORIES).forEach(([key, category]) => {
    if (key === "recent") return;
    appendEmojiSection(scroll, category.label, category.emojis);
  });
}

function appendEmojiSection(container, labelText, emojis) {
  const section = document.createElement("section");
  section.className = "emoji-section";

  const label = document.createElement("div");
  label.className = "emoji-section-label";
  label.textContent = labelText;

  const grid = document.createElement("div");
  grid.className = "emoji-grid";

  emojis.forEach(([emoji]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "emoji-option";
    button.textContent = emoji;
    button.addEventListener("click", () => {
      insertEmojiAtCursor(activeEmojiInput, emoji);
      saveRecentEmoji(emoji);
      renderEmojiSections(document.getElementById("emoji-search").value);
    });
    grid.appendChild(button);
  });

  section.appendChild(label);
  section.appendChild(grid);
  container.appendChild(section);
}

function appendEmojiEmptyState(container) {
  const empty = document.createElement("div");
  empty.className = "emoji-empty";
  empty.textContent = "No emoji found";
  container.appendChild(empty);
}

function insertEmojiAtCursor(input, emoji) {
  if (!input) return;

  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = `${input.value.slice(0, start)}${emoji}${input.value.slice(end)}`;
  const cursor = start + emoji.length;
  input.focus();
  input.setSelectionRange(cursor, cursor);
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

function saveRecentEmoji(emoji) {
  const recents = getRecentEmojis().filter(item => item !== emoji);
  recents.unshift(emoji);
  localStorage.setItem(EMOJI_RECENT_STORAGE_KEY, JSON.stringify(recents.slice(0, EMOJI_RECENT_LIMIT)));
}

function getRecentEmojis() {
  try {
    return JSON.parse(localStorage.getItem(EMOJI_RECENT_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}


// ----------------------------------------------------
// 4. DETAILED MODAL CONTROLS & CAROUSELS
// ----------------------------------------------------
function initModals() {
  const gridPostCards = document.querySelectorAll(".grid-post-card");
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("btn-modal-close");
  const overlay = document.getElementById("project-modal");

  gridPostCards.forEach(card => {
    card.addEventListener("click", () => {
      const projectKey = card.getAttribute("data-project");
      if (isMobileViewport()) {
        openMobilePostFeed(projectKey);
      } else {
        openProjectModal(projectKey);
      }
    });
  });

  closeBtn.addEventListener("click", closeProjectModal);
  
  // Close modal when clicking outside content wrapper
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeProjectModal();
    }
  });

  // Carousel navigation click handlers
  document.getElementById("btn-carousel-left").addEventListener("click", () => navigateCarousel(-1));
  document.getElementById("btn-carousel-right").addEventListener("click", () => navigateCarousel(1));
  document.getElementById("btn-post-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    navigateProject(-1);
  });
  document.getElementById("btn-post-next").addEventListener("click", (e) => {
    e.stopPropagation();
    navigateProject(1);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const mobileSheet = document.getElementById("mobile-comments-sheet");
      const mobileViewer = document.getElementById("mobile-post-viewer");
      if (mobileSheet && !mobileSheet.classList.contains("hidden")) {
        e.preventDefault();
        closeMobileCommentsSheet();
        return;
      }
      if (mobileViewer && !mobileViewer.classList.contains("hidden")) {
        e.preventDefault();
        closeMobilePostFeed();
        return;
      }
    }

    if (modal.classList.contains("hidden")) return;
    const isTyping = e.target.matches("input, textarea, [contenteditable='true']");
    if (isTyping) return;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      navigateProject(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      navigateProject(1);
    }
  });

  const mobileCloseBtn = document.getElementById("btn-mobile-post-close");
  const mobileCommentsBackdrop = document.getElementById("mobile-comments-backdrop");
  const mobileCommentsCloseBtn = document.getElementById("btn-mobile-comments-close");
  const mobileCommentField = document.getElementById("mobile-comment-field");
  const mobileCommentAuthor = document.getElementById("mobile-comment-author");
  const mobileCommentHoneypot = document.getElementById("mobile-comment-website");
  const mobileCommentStatus = document.getElementById("mobile-comment-submit-status");
  const mobilePostCommentBtn = document.getElementById("btn-mobile-post-comment");

  mobileCloseBtn?.addEventListener("click", closeMobilePostFeed);
  mobileCommentsBackdrop?.addEventListener("click", closeMobileCommentsSheet);
  mobileCommentsCloseBtn?.addEventListener("click", closeMobileCommentsSheet);

  document.querySelectorAll("[data-mobile-emoji]").forEach(button => {
    button.addEventListener("click", () => {
      insertEmojiAtCursor(mobileCommentField, button.getAttribute("data-mobile-emoji"));
    });
  });

  if (mobileCommentAuthor && mobileCommentField && mobileCommentHoneypot && mobileCommentStatus && mobilePostCommentBtn) {
    mobileCommentAuthor.value = localStorage.getItem(COMMENT_AUTHOR_STORAGE_KEY) || "";

    const updateMobileCommentButton = () => {
      const isReady = mobileCommentField.value.trim() !== "";
      mobilePostCommentBtn.classList.toggle("active", isReady);
      mobilePostCommentBtn.style.opacity = isReady ? "1" : "0.5";
    };

    mobileCommentField.addEventListener("input", () => {
      setCommentStatus("", "", mobileCommentStatus);
      updateMobileCommentButton();
    });

    mobileCommentAuthor.addEventListener("input", () => {
      setCommentStatus("", "", mobileCommentStatus);
    });

    mobilePostCommentBtn.addEventListener("click", async () => {
      await handleVisitorCommentSubmit({
        projectKey: activeMobileProject,
        authorField: mobileCommentAuthor,
        commentField: mobileCommentField,
        honeypotField: mobileCommentHoneypot,
        statusEl: mobileCommentStatus,
        postButton: mobilePostCommentBtn,
        updateButton: updateMobileCommentButton
      });
    });
  }

  // Like & Bookmark toggles inside modal
  const btnLike = document.getElementById("btn-modal-like");
  const heartSvg = document.getElementById("modal-heart-svg");
  
  btnLike.addEventListener("click", () => {
    if (!activeProject) return;
    const isLiked = toggleHeartState(heartSvg);

    if (isLiked) {
      btnLike.style.transform = "scale(1.3)";
      setTimeout(() => btnLike.style.transform = "scale(1)", 150);
    }
  });

  const btnBookmark = document.getElementById("btn-modal-bookmark");
  const bookmarkSvg = document.getElementById("modal-bookmark-svg");
  btnBookmark.addEventListener("click", () => {
    const isBookmarked = bookmarkSvg.getAttribute("fill") === "currentColor";
    if (isBookmarked) {
      bookmarkSvg.setAttribute("fill", "none");
    } else {
      bookmarkSvg.setAttribute("fill", "currentColor");
    }
  });

  // Add Comment input inside modal
  const commentAuthorField = document.getElementById("modal-comment-author");
  const commentField = document.getElementById("modal-comment-field");
  const commentHoneypot = document.getElementById("modal-comment-website");
  const commentStatus = document.getElementById("comment-submit-status");
  const postCommentBtn = document.getElementById("btn-modal-post-comment");

  if (commentAuthorField && commentField && commentHoneypot && commentStatus && postCommentBtn) {
    commentAuthorField.value = localStorage.getItem(COMMENT_AUTHOR_STORAGE_KEY) || "";

    const updateCommentButton = () => {
      const isPosting = postCommentBtn.disabled;
      const isReady = commentField.value.trim() !== "" && !isPosting;
      if (isReady) {
        postCommentBtn.style.opacity = "1";
        postCommentBtn.classList.add("active");
      } else {
        postCommentBtn.style.opacity = "0.5";
        postCommentBtn.classList.remove("active");
      }
    };

    commentField.addEventListener("input", () => {
      setCommentStatus("");
      updateCommentButton();
    });

    commentAuthorField.addEventListener("input", () => {
      setCommentStatus("");
    });

    postCommentBtn.addEventListener("click", async () => {
      await handleVisitorCommentSubmit({
        projectKey: activeProject,
        authorField: commentAuthorField,
        commentField,
        honeypotField: commentHoneypot,
        statusEl: commentStatus,
        postButton: postCommentBtn,
        updateButton: updateCommentButton
      });
    });
  }
}

async function openProjectModal(projectKey) {
  activeProject = projectKey;
  const project = PROJECT_DATA[projectKey];
  if (!project) return;

  currentSlideIndex = 0;

  // 1. Populate Media Slides
  const slidesContainer = document.getElementById("modal-carousel-slides");
  slidesContainer.innerHTML = "";
  project.slides.forEach(slide => {
    const slideDiv = document.createElement("div");
    slideDiv.className = "carousel-slide";
    
    if (slide.type === "visual") {
      slideDiv.innerHTML = slide.html;
    } else if (slide.type === "code") {
      slideDiv.innerHTML = `
        <div class="code-viewer-panel">
          <div class="code-header">
            <div class="code-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              ${slide.filename}
            </div>
            <div class="code-window-dots">
              <span class="cwd red"></span>
              <span class="cwd yellow"></span>
              <span class="cwd green"></span>
            </div>
          </div>
          <pre class="code-content-block"><code>${slide.code.trim()}</code></pre>
        </div>
      `;
    }
    slidesContainer.appendChild(slideDiv);
  });

  // Reset slide position
  slidesContainer.style.transform = `translateX(0)`;

  // Update dots indicator
  updateDots(project.slides.length);

  // 2. Render owner caption as the first comment row
  const approvedCommentsList = document.getElementById("modal-approved-comments");
  const ownerCaption = getOwnerCaption(project);
  if (approvedCommentsList) {
    approvedCommentsList.innerHTML = "";
    approvedCommentsList.appendChild(createCommentRow({
      user: DISPLAY_NAME,
      text: ownerCaption.text,
      time: project.date,
      showReply: false
    }));
  }

  // 3. Reset Add Comment form
  const commentAuthorField = document.getElementById("modal-comment-author");
  const commentField = document.getElementById("modal-comment-field");
  const commentHoneypot = document.getElementById("modal-comment-website");
  const postCommentBtn = document.getElementById("btn-modal-post-comment");
  if (commentAuthorField && commentField && commentHoneypot && postCommentBtn) {
    commentAuthorField.value = localStorage.getItem(COMMENT_AUTHOR_STORAGE_KEY) || "";
    commentField.value = "";
    commentHoneypot.value = "";
    postCommentBtn.textContent = "Post";
    postCommentBtn.style.opacity = "0.5";
    postCommentBtn.classList.remove("active");
    postCommentBtn.disabled = false;
    setCommentStatus("");
  }

  // 4. Populate Statistics
  const heartSvg = document.getElementById("modal-heart-svg");
  const heartPath = heartSvg.querySelector("path");
  heartSvg.setAttribute("fill", "none");
  heartSvg.setAttribute("stroke", "currentColor");
  heartPath?.setAttribute("fill", "none");
  heartPath?.setAttribute("stroke", "currentColor");
  
  document.getElementById("modal-post-date").textContent = project.date;

  // Show Modal
  const modal = document.getElementById("project-modal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Disable background scrolling

  loadApprovedVisitorComments(projectKey);
  updateCarouselNav();
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
  activeProject = null;
  closeEmojiPicker();
}

function isMobileViewport() {
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
}

function openMobilePostFeed(projectKey) {
  const viewer = document.getElementById("mobile-post-viewer");
  const feed = document.getElementById("mobile-post-feed");
  if (!viewer || !feed) return;

  activeMobileProject = projectKey;
  renderMobilePostFeed();
  viewer.classList.remove("hidden");
  viewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    const targetPost = feed.querySelector(`[data-mobile-project="${projectKey}"]`);
    if (targetPost) {
      targetPost.scrollIntoView({ block: "start" });
    }
  });
}

function closeMobilePostFeed() {
  const viewer = document.getElementById("mobile-post-viewer");
  if (!viewer) return;

  closeMobileCommentsSheet();
  viewer.classList.add("hidden");
  viewer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
  activeMobileProject = null;
}

function renderMobilePostFeed() {
  const feed = document.getElementById("mobile-post-feed");
  if (!feed) return;

  feed.innerHTML = "";
  PROJECT_ORDER.forEach(projectKey => {
    const project = PROJECT_DATA[projectKey];
    if (!project) return;

    const article = document.createElement("article");
    article.className = "mobile-post";
    article.dataset.mobileProject = projectKey;

    const ownerCaption = getOwnerCaption(project);
    article.innerHTML = `
      <header class="mobile-post-userbar">
        <img class="profile-picture mobile-post-avatar" src="profile_picture.jpg" alt="${DISPLAY_NAME} profile picture">
        <div class="mobile-post-usertext">
          <strong>${DISPLAY_NAME}</strong>
          <span>${project.title}</span>
        </div>
        <button class="mobile-icon-btn" aria-label="More options">
          <svg viewBox="0 0 24 24" class="more-options-svg"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
        </button>
      </header>
      <div class="mobile-post-media">${getMobilePostMedia(project)}</div>
      <section class="mobile-post-meta">
        <div class="mobile-post-actions">
          <div class="mobile-post-actions-left">
            <button class="btn-icon-interact mobile-like-btn" aria-label="Like post">
              <svg viewBox="0 0 24 24" class="heart-svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
            </button>
            <button class="btn-icon-interact mobile-comment-open" data-mobile-comment-project="${projectKey}" aria-label="Open comments">
              <svg viewBox="0 0 24 24" class="comment-svg"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
            </button>
            <span>${project.commentsCount}</span>
            <button class="btn-icon-interact" aria-label="Share post">
              <svg viewBox="0 0 24 24" class="share-svg"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
            </button>
          </div>
          <button class="btn-icon-interact" aria-label="Save post">
            <svg viewBox="0 0 24 24" class="bookmark-svg"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
          </button>
        </div>
        <p class="mobile-post-caption"><strong>${DISPLAY_NAME}</strong> ${escapeHTML(ownerCaption.text)}</p>
        <button class="mobile-view-comments" data-mobile-comment-project="${projectKey}">View approved comments</button>
        <div class="post-date">${project.date}</div>
      </section>
    `;

    feed.appendChild(article);
  });

  feed.querySelectorAll("[data-mobile-comment-project]").forEach(button => {
    button.addEventListener("click", () => {
      openMobileCommentsSheet(button.getAttribute("data-mobile-comment-project"));
    });
  });

  feed.querySelectorAll(".mobile-like-btn").forEach(button => {
    button.addEventListener("click", () => {
      const heart = button.querySelector(".heart-svg");
      const isLiked = toggleHeartState(heart);
      if (isLiked) {
        button.style.transform = "scale(1.18)";
        setTimeout(() => button.style.transform = "scale(1)", 150);
      }
    });
  });

  feed.querySelectorAll(".mobile-post-slide-track").forEach(track => {
    const dots = track.parentElement.querySelectorAll(".mobile-slide-dot");
    track.addEventListener("scroll", () => {
      const activeIndex = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
      });
    });
  });
}

function getMobilePostMedia(project) {
  if (!project.slides.length) {
    return `<div class="mobile-post-placeholder">${escapeHTML(project.title)}</div>`;
  }

  const slides = project.slides.map(slide => `
    <div class="mobile-post-slide">
      ${renderMobilePostSlide(slide, project.title)}
    </div>
  `).join("");

  const dots = project.slides.map((_, index) => (
    `<span class="mobile-slide-dot ${index === 0 ? "active" : ""}" aria-hidden="true"></span>`
  )).join("");

  return `
    <div class="mobile-post-slide-track">
      ${slides}
    </div>
    <div class="mobile-slide-dots">${dots}</div>
  `;
}

function renderMobilePostSlide(slide, projectTitle) {
  if (slide.type === "visual") return slide.html;

  return `
    <div class="code-viewer-panel">
      <div class="code-header">
        <div class="code-title">${escapeHTML(slide.filename || projectTitle)}</div>
      </div>
      <pre class="code-content-block"><code>${slide.code.trim()}</code></pre>
    </div>
  `;
}

async function openMobileCommentsSheet(projectKey) {
  const sheet = document.getElementById("mobile-comments-sheet");
  const backdrop = document.getElementById("mobile-comments-backdrop");
  const list = document.getElementById("mobile-comments-list");
  const authorField = document.getElementById("mobile-comment-author");
  const commentField = document.getElementById("mobile-comment-field");
  const honeypotField = document.getElementById("mobile-comment-website");
  const statusEl = document.getElementById("mobile-comment-submit-status");
  const postButton = document.getElementById("btn-mobile-post-comment");
  const project = PROJECT_DATA[projectKey];
  if (!sheet || !backdrop || !list || !project) return;

  activeMobileProject = projectKey;
  list.innerHTML = "";
  list.appendChild(createCommentRow({
    user: DISPLAY_NAME,
    text: getOwnerCaption(project).text,
    time: project.date,
    showReply: false
  }));

  if (authorField && commentField && honeypotField && statusEl && postButton) {
    authorField.value = localStorage.getItem(COMMENT_AUTHOR_STORAGE_KEY) || "";
    commentField.value = "";
    honeypotField.value = "";
    postButton.textContent = "Post";
    postButton.classList.remove("active");
    postButton.style.opacity = "0.5";
    postButton.disabled = false;
    setCommentStatus("", "", statusEl);
  }

  sheet.classList.remove("hidden");
  backdrop.classList.remove("hidden");
  sheet.setAttribute("aria-hidden", "false");
  await loadApprovedVisitorComments(projectKey, list);
}

function closeMobileCommentsSheet() {
  const sheet = document.getElementById("mobile-comments-sheet");
  const backdrop = document.getElementById("mobile-comments-backdrop");
  if (!sheet || !backdrop) return;

  sheet.classList.add("hidden");
  backdrop.classList.add("hidden");
  sheet.setAttribute("aria-hidden", "true");
  closeEmojiPicker();
}

function navigateProject(direction) {
  if (!activeProject) return;
  const currentIndex = PROJECT_ORDER.indexOf(activeProject);
  if (currentIndex === -1) return;

  const nextIndex = (currentIndex + direction + PROJECT_ORDER.length) % PROJECT_ORDER.length;
  openProjectModal(PROJECT_ORDER[nextIndex]);
}

function isSupabaseConfigured() {
  return SUPABASE_URL.startsWith("https://") && SUPABASE_ANON_KEY.length > 20;
}

function setCommentStatus(message, type = "", target = null) {
  const commentStatus = target || document.getElementById("comment-submit-status");
  if (!commentStatus) return;

  commentStatus.textContent = message;
  commentStatus.classList.remove("success", "error");
  if (type) commentStatus.classList.add(type);
}

function getOwnerCaption(project) {
  const ownerCaption = project.comments.find(comment => OWNER_COMMENT_NAMES.has(comment.user));
  return ownerCaption || { text: project.title, time: project.date };
}

async function handleVisitorCommentSubmit({
  projectKey,
  authorField,
  commentField,
  honeypotField,
  statusEl,
  postButton,
  updateButton
}) {
  const commentVal = commentField.value.trim();
  const authorValidation = normalizeCommentAuthor(authorField.value);
  if (postButton.disabled || !projectKey) return;

  if (honeypotField.value.trim() !== "") {
    commentField.value = "";
    updateButton();
    return;
  }

  if (commentVal.length === 0) {
    setCommentStatus("Write a comment before posting.", "error", statusEl);
    return;
  }

  if (countCharacters(commentVal) > COMMENT_MAX_LENGTH) {
    setCommentStatus(`Comments must be ${COMMENT_MAX_LENGTH} characters or fewer.`, "error", statusEl);
    return;
  }

  if (!authorValidation.valid) {
    setCommentStatus(authorValidation.message, "error", statusEl);
    return;
  }

  if (!isSupabaseConfigured()) {
    setCommentStatus("Comment storage needs Supabase config before launch.", "error", statusEl);
    return;
  }

  const lastSubmittedAt = Number(localStorage.getItem(COMMENT_COOLDOWN_STORAGE_KEY) || 0);
  const cooldownRemaining = COMMENT_COOLDOWN_MS - (Date.now() - lastSubmittedAt);
  if (cooldownRemaining > 0) {
    setCommentStatus(`Please wait ${Math.ceil(cooldownRemaining / 1000)}s before posting again.`, "error", statusEl);
    return;
  }

  postButton.disabled = true;
  postButton.textContent = "Reviewing";
  updateButton();

  try {
    const submittedComment = await submitVisitorComment(projectKey, authorValidation.authorName, commentVal);
    localStorage.setItem(COMMENT_COOLDOWN_STORAGE_KEY, String(Date.now()));
    if (authorValidation.authorName !== "visitor") {
      localStorage.setItem(COMMENT_AUTHOR_STORAGE_KEY, submittedComment.authorName);
    } else {
      localStorage.removeItem(COMMENT_AUTHOR_STORAGE_KEY);
    }
    commentField.value = "";
    appendSubmittedVisitorComment(projectKey, submittedComment);
    setCommentStatus("Comment posted.", "success", statusEl);
  } catch (error) {
    console.error("Comment submit failed:", error);
    setCommentStatus(error.message || "Could not submit comment right now. Please try again later.", "error", statusEl);
  } finally {
    postButton.disabled = false;
    postButton.textContent = "Post";
    updateButton();
  }
}

function normalizeCommentAuthor(rawAuthor) {
  const normalized = rawAuthor.trim().replace(/\s+/g, " ");

  if (normalized === "") {
    return { valid: true, authorName: "visitor" };
  }

  const nameLength = countCharacters(normalized);

  if (nameLength < 2) {
    return { valid: false, message: "Name must be at least 2 characters." };
  }

  if (nameLength > COMMENT_AUTHOR_MAX_LENGTH) {
    return { valid: false, message: `Name must be ${COMMENT_AUTHOR_MAX_LENGTH} characters or fewer.` };
  }

  if (!isAllowedCommentAuthorName(normalized)) {
    return {
      valid: false,
      message: "Name can use letters, numbers, spaces, hyphens, underscores, and Chinese characters."
    };
  }

  return { valid: true, authorName: normalized };
}

function isAllowedCommentAuthorName(name) {
  return /^[\p{Script=Han}\p{Letter}\p{Number}_ -]+$/u.test(name);
}

function countCharacters(value) {
  return Array.from(value).length;
}

function getVisitorAvatarTheme(authorName) {
  const normalized = (authorName || "visitor").trim().toLowerCase() || "visitor";
  let hash = 0;

  for (const char of normalized) {
    hash = (hash * 31 + char.codePointAt(0)) >>> 0;
  }

  return hash % 8;
}

function createCommentRow({ user, text, time, avatar = "V", showReply = false }) {
  const row = document.createElement("div");
  row.className = "comment-row";

  const isOwner = OWNER_COMMENT_NAMES.has(user);
  const avatarEl = document.createElement("div");

  if (isOwner) {
    avatarEl.className = "comment-avatar";
    const img = document.createElement("img");
    img.className = "profile-picture";
    img.src = "profile_picture.jpg";
    img.alt = `${DISPLAY_NAME} profile picture`;
    avatarEl.appendChild(img);
  } else {
    avatarEl.className = `comment-avatar-text avatar-theme-${getVisitorAvatarTheme(user)}`;
    avatarEl.textContent = avatar || user.charAt(0) || "V";
  }

  const content = document.createElement("div");
  content.className = "comment-content";

  const userEl = document.createElement("span");
  userEl.className = "comment-user";
  userEl.textContent = user;

  const bodyEl = document.createElement("span");
  bodyEl.className = "comment-body";
  bodyEl.textContent = text;

  const meta = document.createElement("div");
  meta.className = "comment-meta";

  const timeEl = document.createElement("span");
  timeEl.textContent = time;
  meta.appendChild(timeEl);

  if (showReply) {
    const replyEl = document.createElement("span");
    replyEl.textContent = "Reply";
    meta.appendChild(replyEl);
  }

  content.appendChild(userEl);
  content.appendChild(bodyEl);
  content.appendChild(meta);
  row.appendChild(avatarEl);
  row.appendChild(content);

  return row;
}

async function loadApprovedVisitorComments(projectKey, targetList = null) {
  if (!isSupabaseConfigured()) return;

  const approvedCommentsList = targetList || document.getElementById("modal-approved-comments");
  if (!approvedCommentsList) return;

  const endpoint = new URL(`${SUPABASE_URL}/rest/v1/comments`);
  endpoint.searchParams.set("select", "author_name,body,created_at");
  endpoint.searchParams.set("project_key", `eq.${projectKey}`);
  endpoint.searchParams.set("status", "eq.approved");
  endpoint.searchParams.set("order", "created_at.asc");

  try {
    const response = await fetch(endpoint.toString(), {
      headers: getSupabaseHeaders()
    });

    if (!response.ok) {
      throw new Error(`Supabase select failed: ${response.status}`);
    }

    const comments = await response.json();
    const activeContextProject = targetList ? activeMobileProject : activeProject;
    if (activeContextProject !== projectKey) return;

    comments.forEach(comment => {
      approvedCommentsList.appendChild(createCommentRow({
        user: comment.author_name || "visitor",
        text: comment.body,
        time: formatVisitorCommentTime(comment.created_at),
        avatar: (comment.author_name || "visitor").charAt(0),
        showReply: true
      }));
    });
  } catch (error) {
    console.error("Comment load failed:", error);
    setCommentStatus("Could not load visitor comments right now.", "error");
  }
}

async function submitVisitorComment(projectKey, authorName, body) {
  const response = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      projectKey,
      authorName,
      body
    })
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.error || "Could not submit comment right now. Please try again later.");
  }

  if (!data.comment) {
    throw new Error("Could not submit comment right now. Please try again later.");
  }

  return data.comment;
}

function appendSubmittedVisitorComment(projectKey, comment) {
  const row = createCommentRow({
    user: comment.authorName || "visitor",
    text: comment.body,
    time: formatVisitorCommentTime(comment.createdAt),
    avatar: (comment.authorName || "visitor").charAt(0),
    showReply: true
  });

  if (activeProject === projectKey) {
    const desktopList = document.getElementById("modal-approved-comments");
    desktopList?.appendChild(row.cloneNode(true));
  }

  if (activeMobileProject === projectKey) {
    const mobileList = document.getElementById("mobile-comments-list");
    mobileList?.appendChild(row);
  }
}

function getSupabaseHeaders() {
  const headers = { "apikey": SUPABASE_ANON_KEY };

  if (!SUPABASE_ANON_KEY.startsWith("sb_publishable_")) {
    headers.Authorization = `Bearer ${SUPABASE_ANON_KEY}`;
  }

  return headers;
}

function formatVisitorCommentTime(createdAt) {
  const created = new Date(createdAt);
  if (Number.isNaN(created.getTime())) return "just now";

  const diffSeconds = Math.max(0, Math.floor((Date.now() - created.getTime()) / 1000));
  if (diffSeconds < 60) return `${diffSeconds || 1}s`;

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes}m`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d`;
}

function updateDots(count) {
  const container = document.getElementById("modal-carousel-dots");
  container.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("span");
    dot.className = `dot ${i === 0 ? 'active' : ''}`;
    container.appendChild(dot);
  }
}

function navigateCarousel(direction) {
  if (!activeProject) return;
  const project = PROJECT_DATA[activeProject];
  const slideCount = project.slides.length;
  
  currentSlideIndex += direction;
  
  if (currentSlideIndex < 0) currentSlideIndex = 0;
  if (currentSlideIndex >= slideCount) currentSlideIndex = slideCount - 1;

  // Move slide track
  const track = document.getElementById("modal-carousel-slides");
  track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

  // Update dots active class
  const dots = document.querySelectorAll("#modal-carousel-dots .dot");
  dots.forEach((dot, idx) => {
    if (idx === currentSlideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  updateCarouselNav();
}

function updateCarouselNav() {
  if (!activeProject) return;
  const project = PROJECT_DATA[activeProject];
  const slideCount = project.slides.length;

  const btnLeft = document.getElementById("btn-carousel-left");
  const btnRight = document.getElementById("btn-carousel-right");

  if (currentSlideIndex === 0) {
    btnLeft.classList.add("disabled");
  } else {
    btnLeft.classList.remove("disabled");
  }

  if (currentSlideIndex === slideCount - 1) {
    btnRight.classList.add("disabled");
  } else {
    btnRight.classList.remove("disabled");
  }
}


// ----------------------------------------------------
// 5. RAG-CAPABLE DM CHATBOT ENGINE
// ----------------------------------------------------
// Short-term conversation memory for the chatbot. Held in-memory only, so it
// resets on every page refresh (no persistence by design).
let chatHistory = [];

function initDMChatbot() {
  const btnDmOpen = document.getElementById("btn-dm-open");
  const btnDmClose = document.getElementById("btn-dm-close");
  const dmPanel = document.getElementById("dm-chatbot");
  const dmBackdrop = document.getElementById("chat-drawer-backdrop");
  const chatInput = document.getElementById("chat-input-field");
  const btnViewProfile = document.getElementById("btn-view-profile-dm");
  const btnLikeChat = document.getElementById("btn-like-chat");

  const openChatDrawer = () => {
    dmPanel.classList.add("open");
    dmBackdrop.classList.add("open");
    dmPanel.setAttribute("aria-hidden", "false");
    dmBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("chat-drawer-active");
    setTimeout(() => chatInput.focus(), 250);
  };

  const closeChatDrawer = () => {
    dmPanel.classList.remove("open");
    dmBackdrop.classList.remove("open");
    dmPanel.setAttribute("aria-hidden", "true");
    dmBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("chat-drawer-active");
    document.body.style.overflow = "";
    closeEmojiPicker();
  };

  const cleanupClosedChatDrawer = () => {
    if (dmPanel.classList.contains("open")) return;
    dmBackdrop.classList.remove("open");
    dmPanel.setAttribute("aria-hidden", "true");
    dmBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("chat-drawer-active");
    document.body.style.overflow = "";
  };

  btnDmOpen.addEventListener("click", openChatDrawer);
  btnDmClose.addEventListener("click", closeChatDrawer);
  dmBackdrop.addEventListener("click", closeChatDrawer);
  window.addEventListener("pageshow", cleanupClosedChatDrawer);
  window.addEventListener("resize", cleanupClosedChatDrawer);
  window.addEventListener("orientationchange", cleanupClosedChatDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dmPanel.classList.contains("open")) {
      closeChatDrawer();
    }
  });

  btnViewProfile.addEventListener("click", () => {
    // Scrolls feed container back to top
    document.querySelector(".profile-section").scrollTop = 0;
  });

  // Handle enter key in chat field
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const text = chatInput.value.trim();
      if (text !== "") {
        sendUserMessage(text);
        chatInput.value = "";
      }
    }
  });

  // Heart like response trigger
  btnLikeChat.addEventListener("click", () => {
    appendUserHeartReaction();
  });
}

function sendUserMessage(text) {
  const chatMessages = document.getElementById("chat-messages");
  
  // Append user bubble
  const userMsgDiv = document.createElement("div");
  userMsgDiv.className = "message msg-sent";
  userMsgDiv.innerHTML = `
    <div class="msg-bubble">${escapeHTML(text)}</div>
  `;
  chatMessages.appendChild(userMsgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Record the user turn in short-term memory before requesting a reply.
  chatHistory.push({ role: "user", content: text });

  // Trigger RAG analysis & show typing dots
  showBotTyping();
}

function appendUserHeartReaction() {
  const chatMessages = document.getElementById("chat-messages");
  
  const userMsgDiv = document.createElement("div");
  userMsgDiv.className = "message msg-sent";
  userMsgDiv.innerHTML = `
    <div class="msg-bubble" style="background:none; color: red; font-size:24px; padding:0;">❤️</div>
  `;
  chatMessages.appendChild(userMsgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  showBotTyping(true);
}

function showBotTyping(isHeartReact = false) {
  const chatMessages = document.getElementById("chat-messages");

  // Create typing element
  const typingDiv = document.createElement("div");
  typingDiv.className = "message msg-received typing-container";
  typingDiv.innerHTML = `
    <div class="msg-avatar">
      <img class="profile-picture" src="profile_picture.jpg" alt="${DISPLAY_NAME} profile picture">
    </div>
    <div class="msg-bubble" style="padding: 10px 14px;">
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  `;
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Process response after delay
  const userMessages = document.querySelectorAll(".message.msg-sent:not([data-replied])");
  let lastUserMsg = "like";
  if (userMessages.length > 0) {
    const lastMsgNode = userMessages[userMessages.length - 1];
    lastMsgNode.setAttribute("data-replied", "true");
    lastUserMsg = lastMsgNode.querySelector(".msg-bubble").textContent.trim();
  }

  // Heart reactions stay fully local with a short canned reply.
  if (isHeartReact) {
    setTimeout(() => {
      typingDiv.remove();
      appendBotMessage("Aww, thanks for the heart! ❤️ Let me know if you have any questions about Matthew's engineering projects or want to see his code snippets.");
    }, 1400);
    return;
  }

  // Real messages call the Groq-backed serverless endpoint, with the
  // client-side RAG indexer as an offline fallback.
  fetchBotReply(lastUserMsg).then((responseText) => {
    typingDiv.remove();
    appendBotMessage(responseText);
  });
}

/**
 * Calls the /api/chat serverless function (Groq LLM), sending the last
 * ~12 turns of conversation memory for context. Records the assistant reply
 * in chatHistory and falls back to the local RAG indexer if the request fails.
 *
 * @param {string} userText - the latest user message (used for the offline fallback).
 */
async function fetchBotReply(userText) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: chatHistory.slice(-12) }),
    });

    if (!response.ok) {
      let errorData = {};
      try {
        errorData = await response.json();
      } catch {
        errorData = {};
      }

      if (response.status === 429) {
        const rateLimitReply = errorData.error || "Please slow down a little before sending another chat message.";
        chatHistory.push({ role: "assistant", content: rateLimitReply });
        return renderReply(rateLimitReply);
      }

      throw new Error(`Chat API returned ${response.status}`);
    }

    const data = await response.json();
    if (data && typeof data.reply === "string" && data.reply.trim() !== "") {
      // Store the raw reply as the assistant turn so later requests carry
      // clean text (not the HTML-rendered version) back to the model.
      chatHistory.push({ role: "assistant", content: data.reply });
      return renderReply(data.reply);
    }
    throw new Error("Empty reply from chat API");
  } catch (error) {
    console.warn("Chat API unavailable, using local RAG fallback:", error);
    const fallback = queryRAGIndexer(userText);
    // Keep the conversation coherent: record a plain-text version of the
    // fallback (the indexer emits HTML markup we don't want fed back to the LLM).
    chatHistory.push({ role: "assistant", content: fallback.replace(/<[^>]+>/g, "").trim() });
    return fallback;
  }
}

/**
 * Sanitizes an LLM reply for the innerHTML typewriter: strips angle brackets so
 * no HTML tag can be injected, then converts newlines into <br> tokens that the
 * typewriter renders natively. (Pre-encoding entities would double-encode and
 * display literally, e.g. "&#039;".)
 */
function renderReply(text) {
  return text.replace(/[<>]/g, "").replace(/\n/g, "<br>");
}

function appendBotMessage(text) {
  const chatMessages = document.getElementById("chat-messages");

  const botMsgDiv = document.createElement("div");
  botMsgDiv.className = "message msg-received";
  botMsgDiv.innerHTML = `
    <div class="msg-avatar">
      <img class="profile-picture" src="profile_picture.jpg" alt="${DISPLAY_NAME} profile picture">
    </div>
    <div class="msg-bubble"></div>
  `;
  chatMessages.appendChild(botMsgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Typewriter typing effect
  const bubble = botMsgDiv.querySelector(".msg-bubble");
  let idx = 0;
  
  // Quick token parser to handle basic inline html formatting (<br>, <strong>, etc.)
  function typeNext() {
    if (idx < text.length) {
      if (text.substr(idx, 4) === "<br>") {
        bubble.innerHTML += "<br>";
        idx += 4;
      } else if (text.substr(idx, 8) === "<strong>") {
        const closeIdx = text.indexOf("</strong>", idx);
        if (closeIdx !== -1) {
          const boldText = text.substring(idx + 8, closeIdx);
          bubble.innerHTML += `<strong>${boldText}</strong>`;
          idx = closeIdx + 9;
        } else {
          bubble.innerHTML += text[idx];
          idx++;
        }
      } else {
        bubble.innerHTML += text[idx];
        idx++;
      }
      chatMessages.scrollTop = chatMessages.scrollHeight;
      setTimeout(typeNext, 8); // Fast typing speed
    }
  }
  
  typeNext();
}

/**
 * Client-Side RAG Search Indexer
 * Takes user query, finds the best matching text blocks, and returns a cohesive answer.
 */
function queryRAGIndexer(query) {
  const cleanQuery = query.toLowerCase().trim();
  
  // 1. Scoring projects based on keyword mapping
  let scores = [];
  KNOWLEDGE_BASE.forEach(entry => {
    let score = 0;
    
    // Check key technology keywords
    entry.tech.forEach(t => {
      if (cleanQuery.includes(t)) score += 3;
    });

    if (entry.project === "campus-collectives" && /campus|collectives|ecommerce|fulfillment|supplier|marketplace|agent|manual work|revenue/.test(cleanQuery)) score += 8;

    // Check specific terms
    if (entry.project === "scoreshift" && (cleanQuery.includes("music") || cleanQuery.includes("transpose") || cleanQuery.includes("sheet") || cleanQuery.includes("clef") || cleanQuery.includes("pdf"))) {
      score += 5;
    }
    if (entry.project === "hvac-model" && (cleanQuery.includes("hvac") || cleanQuery.includes("xgboost") || cleanQuery.includes("regression") || cleanQuery.includes("mae") || cleanQuery.includes("slope") || cleanQuery.includes("comfort") || cleanQuery.includes("r2") || cleanQuery.includes("telemetry"))) {
      score += 5;
    }
    if (entry.project === "hvac-rag" && (cleanQuery.includes("rag") || cleanQuery.includes("qdrant") || cleanQuery.includes("vector") || cleanQuery.includes("embedding") || cleanQuery.includes("anomal") || cleanQuery.includes("openai"))) {
      score += 5;
    }
    if (entry.project === "othello-az" && (cleanQuery.includes("othello") || cleanQuery.includes("alphazero") || cleanQuery.includes("bitboard") || cleanQuery.includes("numba") || cleanQuery.includes("mcts") || cleanQuery.includes("resnet") || cleanQuery.includes("game"))) {
      score += 5;
    }
    if (entry.project === "firefighter-bot" && (cleanQuery.includes("firefighter") || cleanQuery.includes("robot") || cleanQuery.includes("bot") || cleanQuery.includes("pcb") || cleanQuery.includes("traxmaker") || cleanQuery.includes("solder") || cleanQuery.includes("sensor") || cleanQuery.includes("flame") || cleanQuery.includes("maze") || cleanQuery.includes("atmega"))) {
      score += 5;
    }
    if (entry.project === "visual-hook-studio" && (cleanQuery.includes("visual hook") || cleanQuery.includes("reel") || cleanQuery.includes("instagram") || cleanQuery.includes("campaign") || cleanQuery.includes("vps") || cleanQuery.includes("ffmpeg") || cleanQuery.includes("social media") || cleanQuery.includes("content automation"))) {
      score += 5;
    }
    if (entry.project === "general" && (cleanQuery.includes("resume") || cleanQuery.includes("education") || cleanQuery.includes("experience") || cleanQuery.includes("skills") || cleanQuery.includes("matthew") || cleanQuery.includes("contact"))) {
      score += 4;
    }

    scores.push({ project: entry.project, score });
  });

  // Sort scores descending
  scores.sort((a, b) => b.score - a.score);
  
  // 2. Formulate grounded answer based on best match (score > 1)
  const bestMatch = scores[0];
  if (bestMatch && bestMatch.score > 1) {
    const data = KNOWLEDGE_BASE.find(k => k.project === bestMatch.project);

    if (bestMatch.project === "campus-collectives") {
      return `<strong>Campus Collectives</strong><br><br>${data.text}<br><br>${data.metrics}<br><br>Open the second post to explore the AI workflow.`;
    }

    if (bestMatch.project === "visual-hook-studio") {
      return `Here is the retrieved documentation for <strong>Visual Hook Studio</strong>:<br><br>` +
             `• ${data.text}<br><br>` +
             `• <strong>Deployment:</strong> ${data.metrics}<br><br>` +
             `• <strong>Stack:</strong> ${data.tech.join(", ")}.<br><br>` +
             `Open the newest post to see the dashboard, reel composer, campaign planner, pipeline, and VPS workers.`;
    }
    
    if (bestMatch.project === "scoreshift") {
      return `<strong>ScoreShift</strong> is Matthew's web app designed to transpose printed sheet music. Here is the context retrieved:<br><br>` + 
             `• ${data.text}<br><br>` +
             `• <strong>Performance detail:</strong> ${data.metrics}<br><br>` +
             `• <strong>Stack:</strong> ${data.tech.join(", ")}.<br><br>` +
             `Feel free to click on the first grid post to view the interactive notation and code snippets!`;
    }
    
    if (bestMatch.project === "hvac-model") {
      return `Here is the retrieved documentation for the <strong>HomeWise AI HVAC Confidence Model</strong>, built during Matthew’s internship:<br><br><br>` + 
             `• ${data.text}<br><br>` +
             `• <strong>Key metrics:</strong> ${data.metrics}<br><br>` +
             `• <strong>Stack:</strong> ${data.tech.join(", ")}.<br><br>` +
             `You can inspect the PyTorch neural network layer code by opening the second post in Matthew's feed.`;
    }
    
    if (bestMatch.project === "hvac-rag") {
      return `I found the following specs for the <strong>HomeWise AI HVAC RAG system</strong>, built during Matthew’s internship:<br><br>` + 
             `• ${data.text}<br><br>` +
             `• <strong>System details:</strong> ${data.metrics}<br><br>` +
             `• <strong>Stack:</strong> ${data.tech.join(", ")}.<br><br>` +
             `It embeds telemetries with a PyTorch model and retrieves closest incidents using Qdrant Cloud vector search. Open the third post to inspect the LLM prompt code!`;
    }
    
    if (bestMatch.project === "othello-az") {
      return `Here is the engineering overview for the <strong>AlphaZero-style Othello Engine</strong>:<br><br>` + 
             `• ${data.text}<br><br>` +
             `• <strong>Model parameters & workers:</strong> ${data.metrics}<br><br>` +
             `• <strong>Stack:</strong> ${data.tech.join(", ")}.<br><br>` +
             `It implements 64-bit uint64 bitboards compiled with Numba JIT. Open the Othello post for the seven-slide walkthrough of search, GPU batching, and training. Evaluation runners are available; automatic model promotion is currently disabled.`;
    }

    if (bestMatch.project === "firefighter-bot") {
      return `Here is the retrieved documentation for <strong>Firefighter Bot</strong>:<br><br>` +
             `- ${data.text}<br><br>` +
             `- <strong>Hardware details:</strong> ${data.metrics}<br><br>` +
             `- <strong>Stack:</strong> ${data.tech.join(", ")}<br><br>` +
             `Open the Firefighter Bot post for the demo on slide two, followed by hardware, sensing, navigation, and control diagrams.`;
    }

    if (bestMatch.project === "general") {
      return `Sure! Matthew is a software engineer. Here is a summary of his background:<br><br>` +
             `• ${data.text}<br><br>` +
             `• ${data.metrics}<br><br>` +
             `You can download his resume by clicking the <strong>Download Resume</strong> button on the header of the page, or explore the project posts in the feed below.`;
    }
  }

  // Fallback if no specific project scored high enough
  return `I couldn't find a specific match for that question in Matthew's project documentation.<br><br>` +
         `Try asking questions about:<br>` +
         `• <strong>Visual Hook Studio</strong> (reel generation and VPS automation)<br>` +
         `• Matthew's <strong>resume</strong> or general background<br>` +
         `• <strong>ScoreShift</strong> (OMR and sheet music transposition)<br>` +
         `• <strong>HomeWise AI HVAC Model</strong> (internship; XGBoost regression)<br>` +
         `• <strong>HomeWise AI RAG</strong> (internship; FastAPI, Qdrant & LLM)<br>` +
         `• <strong>AlphaZero Othello</strong> (MCTS and bitboards)<br>` +
         `• <strong>Firefighter Bot</strong> (custom PCB embedded robotics)`;
}

// Simple HTML escaping helper
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
