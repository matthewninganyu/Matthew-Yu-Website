# Implementation Plan: Pixel-Perfect Instagram Profile Portfolio Website

Create a personal portfolio website replicating the exact visual layout, color scheme, spacing, and typography of the provided desktop Instagram profile screenshot and post detailed modal.

---

## User Review Required

> [!IMPORTANT]
> **Exact Design Specifications (from Screenshots):**
> * **Color Palette:** Instagram web light theme:
>   * Main background: `#ffffff`
>   * Light-grey borders: `#dbdbdb` (1px solid)
>   * Text colors: `#000000` (primary) and `#737373` (secondary/muted)
>   * Button backgrounds: `#efefef` (for "Message" and "Download Resume")
> * **Header Elements:**
>   * Profile picture: Grey silhouette avatar circle (`#efefef` background with standard vector user icon).
>   * Username: `mahuyu4545` (with three-dots icon beside it).
>   * Full Name: `mahuyu4545` (underneath the username).
>   * Stats bar: `4 posts` | `1 follower` | `1 following`
>   * Main buttons: **"Download Resume"** (styled like the "Following" button with dropdown arrow) and **"Message"** (styled standard).
> * **Project Posts Grid:**
>   * Render **4 posts** showing your main projects: *ScoreShift*, *Haveniq HVAC*, *Haveniq RAG*, and *Othello AlphaZero*.
>   * Each grid item is a square thumbnail with hover overlay (showing mock likes/comments count).
> * **Split-Screen Detailed Post Modal:**
>   * Triggered by clicking any project post grid item.
>   * **Left Side (Media Gallery):** 
>     * Displays technical slides related to the project (e.g., Slide 1: Project cover card; Slide 2: High-level architecture diagram; Slide 3: Code snippet or UI mockup).
>     * Includes left/right navigation arrows on hover, and small indicator dots at the bottom for slide position.
>   * **Right Side (Comments/Metadata):**
>     * **Header:** User `mahuyu4545` with avatar, follow button, and three-dots menu.
>     * **Comments Area:** Scrollable list. First item is `mahuyu4545` displaying the core project details (System Overview, Key Features, Tech Stack, and Links to Live Demo/GitHub). Subsequent items are mock user comments discussing details or asking questions.
>     * **Interaction Panel:** Interactive heart button (toggles red and increments likes), comment bubble, share, and bookmark/save buttons. "Liked by [user] and [N] others".
>     * **Add Comment Bar:** Emoji picker icon, "Add a comment..." text area, and blue "Post" button.
> * **Floating Instagram DM Chatbot:**
>   * Pinned to the right side of the layout.
>   * Header: `mahuyu4545`, "Active 1d ago" with window control icons.
>   * DM History: Starts with the greeting and handles user inputs, querying a client-side RAG search that searches the project markdown overviews.
>   * Standard chat input bar at the bottom.
> * **Footer Links:** Match standard footer links at the bottom: "About", "Blog", "Jobs", "Help", etc., and "© 2026 Instagram from Meta".

---

## Technology Stack

To ensure pixel-perfect rendering, fast load times, and simple hosting without compilation overhead, we will use:
1. **HTML5:** Semantic document structure matching Instagram's DOM.
2. **Vanilla CSS3:** Clean layout code using Flexbox/Grid, standard Instagram fonts, and custom CSS variables for light/dark modes.
3. **Vanilla JavaScript:** Responsive state management for:
   * Switching between active grid tabs.
   * Opening/closing project modal windows.
   * Sliding project carousel images on the left of the modal.
   * Updating the chatbot conversation (rendering user messages, loading state, and retrieving answers using RAG).

---

## Proposed Changes

We will create the project files in the root workspace directory `c:\Users\matth\Desktop\programming projects\Matthew Yu Website\`:

### Core Website Files

#### [NEW] [index.html](file:///c:/Users/matth/Desktop/programming%20projects/Matthew%20Yu%20Website/index.html)
The primary HTML document holding:
- Main container split into two sections: Profile Layout (left/center) and Chat Console (right).
- Profile Header section with stats, bio, and buttons.
- Posts grid displaying the 4 projects.
- Overlay modal container for clicked posts (hidden by default).
- Footer with Meta links.

#### [NEW] [style.css](file:///c:/Users/matth/Desktop/programming%20projects/Matthew%20Yu%20Website/style.css)
The style sheet defining:
- Design system variables matching Instagram's official styles.
- Typography: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
- Split-screen layout, carousel styling, scrollbars, and overlay elements.

#### [NEW] [app.js](file:///c:/Users/matth/Desktop/programming%20projects/Matthew%20Yu%20Website/app.js)
The logic controller managing:
- Modal open/close actions.
- Left-side slideshow navigation inside the modal.
- RAG search engine: Uses pre-loaded documentation from your 4 markdown overview files. When the user messages the chatbot, it runs a client-side keyword/similarity search across the project data and formats a context-aware response.
- Chat UI appending and typing indicators.

#### [NEW] [resume.pdf](file:///c:/Users/matth/Desktop/programming%20projects/Matthew%20Yu%20Website/resume.pdf)
A blank placeholder resume file that you can replace later, linked directly to the "Download Resume" button.

---

## Verification Plan

### Manual Verification
1. Validate CSS alignment and spacing of the post modal against the screenshot.
2. Verify carousel left/right controls slide through project technical pages.
3. Confirm the RAG chatbot answers technical questions (e.g., "Tell me about ScoreShift") by pulling details from the project files.
4. Verify layout behavior when scaling down to mobile resolutions.
