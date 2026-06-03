# Project Walkthrough: Instagram Profile Portfolio Website

We have successfully designed and built a personal portfolio website styled exactly like an Instagram desktop profile.

Here is a summary of the files created and their roles in the system:

---

## Code Base Deliverables

### 1. [index.html](file:///c:/Users/matth/Desktop/programming%20projects/Matthew%20Yu%20Website/index.html)
The core markup file representing the layout. It divides the screen into:
* **Left Section:** Profile header showing your username (`mahuyu4545`), placeholder avatar, a "Download Resume" action button, and bio info. Below it is the feed tab navigator and the 3-column posts grid.
* **Right Section (Sidebar):** The Instagram DM panel containing the AI chatbot, ready to converse with visitors.
* **Detailed Post Modal:** Hidden overlay container that dynamically updates its carousel slides and comments when any of the 4 projects is clicked.

### 2. [style.css](file:///c:/Users/matth/Desktop/programming%20projects/Matthew%20Yu%20Website/style.css)
The style sheet implementing:
* **Instagram Design Tokens:** Pixel-perfect matching of fonts, `#ffffff` primary backgrounds, `#efefef` buttons, and `#dbdbdb` solid borders.
* **Responsive Layout Rules:** Pushes the floating DM sidebar as a collapsible overlay menu on smaller screens (tablet/mobile).
* **Technical Presentation Components:** Styled slideshow slides (staves for ScoreShift, numerical grids for RAG, line graphs for HVAC, and checkerboard layouts for Othello).

### 3. [app.js](file:///c:/Users/matth/Desktop/programming%20projects/Matthew%20Yu%20Website/app.js)
The logic engine managing:
* **Interactive Modal overlays:** Renders detailed content, controls slide navigation, and enables comment creation.
* **Like and Bookmark toggles:** Clicking the heart or save buttons dynamically increments numbers and toggles classes.
* **Client-Side RAG Chatbot:** 
  * Indexes the technical features, metrics, and overviews of your 4 projects (ScoreShift, HVAC model, HVAC RAG, and Othello).
  * Runs a keyword similarity query against user inputs to extract the best matching context.
  * Formulates grounded answers detailing stack items, metrics, and files.
  * Simulates a typewriter keyboard animation and chat typing loading dots.

### 4. [resume.pdf](file:///c:/Users/matth/Desktop/programming%20projects/Matthew%20Yu%20Website/resume.pdf)
A lightweight placeholder resume file linked to the header button for instant downloads.

---

## Validation & Usage

To preview and interact with your new site:
1. Double-click the local [index.html](file:///c:/Users/matth/Desktop/programming%20projects/Matthew%20Yu%20Website/index.html) file to load it in any browser, or run a local HTTP server inside the folder (e.g., Python's server: `python -m http.server 8000`).
2. Test clicking on any of your project post cards to open the split detailed modal. Click the arrows to navigate through the project visual and code slides.
3. Chat with the DM chatbot in the right sidebar. Try entering questions like *"What is ScoreShift?"* or *"Tell me about the HVAC RAG metrics"* to see the RAG query engine retrieve details and formulate answers.
