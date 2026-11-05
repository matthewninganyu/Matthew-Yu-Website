# Visual Hook Studio

Matthew reports that Visual Hook Studio helped generate over 1 million views in 3 weeks and grow the waitlist from 40 to 200+, a fivefold increase. The three-week timeframe applies to views; no timeframe is specified for waitlist growth. These are outcomes the tool helped support, not a claim of sole causation.

Visual Hook Studio is an end-to-end short-form content system built with Python and FastAPI. It combines a text hook, a reaction video, an app-demo recording, and a selected music edit into a 9:16 reel. The renderer aligns the song's marked drop with the first frame of the app reveal and mutes the source-video audio.

The dashboard manages source media, rotating hooks, connected professional Instagram accounts, reusable caption templates, individual reels, and multi-day campaigns. A campaign can create a distinct reel for every date and daily posting time, then schedule that reel across selected accounts. The system also supports manual reel composition, TikTok-ready MP4 exports, Instagram performance snapshots, and keyword-based comment-to-DM rules.

The application runs continuously on a private VPS. Separate processes serve the dashboard, render videos with FFmpeg, prepare Instagram media containers, publish scheduled posts through Meta, collect insight snapshots, and process signed comment webhooks. The deployment keeps its SQLite database, encrypted credentials, source media, and rendered outputs on persistent storage with backups.

Core technologies include FastAPI, Python, FFmpeg, SQLite, Jinja, the Meta Instagram API, signed webhooks, and a private VPS deployment.
