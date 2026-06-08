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
    title: "HavenIQ HVAC Model",
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
            <div class="slide-cover-title">HavenIQ HVAC Model</div>
            <div class="slide-cover-subtitle">Machine learning pipeline predicting HVAC confidence scores from sliding sensor telemetry.</div>
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
              <div class="flow-node" style="border-color:#10b981; background:rgba(16,185,129,0.1)"><strong>XGBoost Performance:</strong> Held-out R² of <strong>0.949</strong> and MAE of <strong>4.576</strong> points</div>
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
        text: "Built a dual-model regression pipeline using XGBoost and PyTorch to predict HVAC operational confidence scores. The pipeline reads telemetry windows, engineers features like temp deviation and slope trends, and outputs scores with an R² of 0.949 on held-out tests.",
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
    title: "HavenIQ HVAC RAG System",
    likes: 950,
    commentsCount: 28,
    date: "May 10, 2026",
    link: "#",
    github: "https://github.com",
    slides: [
      // Slide 1: Cover
      {
        type: "visual",
        html: `
          <div class="slide-cover-root rag-theme" style="color:#1e293b">
            <div class="slide-cover-title" style="color:#0f172a">HavenIQ HVAC RAG</div>
            <div class="slide-cover-subtitle" style="color:#334155">FastAPI service explaining HVAC anomalies using PyTorch encoders, Qdrant database, and OpenAI GPT grounding.</div>
            <div class="slide-tech-badges">
              <span class="tech-badge" style="background:rgba(0,0,0,0.1); color:#334155">FastAPI</span>
              <span class="tech-badge" style="background:rgba(0,0,0,0.1); color:#334155">PyTorch</span>
              <span class="tech-badge" style="background:rgba(0,0,0,0.1); color:#334155">Qdrant Cloud</span>
              <span class="tech-badge" style="background:rgba(0,0,0,0.1); color:#334155">OpenAI API</span>
              <span class="tech-badge" style="background:rgba(0,0,0,0.1); color:#334155">Docker</span>
            </div>
          </div>
        `
      },
      // Slide 2: Vector DB Grid Matcher
      {
        type: "visual",
        html: `
          <div class="slide-database-root">
            <h4 style="color:#ffffff; margin-bottom:10px; font-family:var(--header-font)">Qdrant Cosine Retrieval (128-D)</h4>
            <div class="db-grid">
              <div class="db-cell">Incident #120<br/>Drift Risk</div>
              <div class="db-cell matched">Incident #415<br/>Freeze Risk<div class="db-match-label">Match 98%</div></div>
              <div class="db-cell">Incident #98<br/>Normal</div>
              <div class="db-cell">Incident #503<br/>Drift Risk</div>
              <div class="db-cell matched">Incident #1440<br/>Freeze Risk<div class="db-match-label">Match 95%</div></div>
              <div class="db-cell">Incident #311<br/>Humidity Risk</div>
            </div>
          </div>
        `
      },
      // Slide 3: Code Card
      {
        type: "code",
        filename: "app/explainer.py",
        code: `
<span class="code-keyword">def</span> <span class="code-function">build_grounded_prompt</span>(incident, matches):
    <span class="code-comment"># Ground the LLM with direct database citations</span>
    prompt = f<span class="code-string">"Explain this anomaly: {incident.summary_text}\\n"</span>
    prompt += <span class="code-string">"Reference these similar historical incidents:\\n"</span>
    
    <span class="code-keyword">for</span> idx, match <span class="code-keyword">in</span> enumerate(matches):
        prompt += f<span class="code-string">"- Incident {idx}: {match.payload['summary_text']} "</span>
        prompt += f<span class="code-string">"(Similarity: {match.score:.3f})\\n"</span>
        
    prompt += <span class="code-string">"Generate concise JSON operator advice."</span>
    <span class="code-keyword">return</span> prompt`
      }
    ],
    comments: [
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "Built a containerized RAG service for HVAC monitoring. The FastAPI service processes live sensor windows, embeds them into a 128-dimensional space using a PyTorch encoder, queries Qdrant Cloud for matching historical anomalies, and prompts OpenAI to generate structured operator-facing guidance.",
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
    github: "https://github.com",
    slides: [
      // Slide 1: Cover
      {
        type: "visual",
        html: `
          <div class="slide-cover-root othello-theme">
            <div class="slide-cover-title">AlphaZero Othello</div>
            <div class="slide-cover-subtitle">Self-play reinforcement-learning engine combining PyTorch ResNet and neural-guided MCTS.</div>
            <div class="slide-tech-badges">
              <span class="tech-badge">Python</span>
              <span class="tech-badge">PyTorch</span>
              <span class="tech-badge">Numba JIT</span>
              <span class="tech-badge">MCTS</span>
              <span class="tech-badge">CUDA</span>
              <span class="tech-badge">Multiprocessing</span>
            </div>
          </div>
        `
      },
      // Slide 2: Board Visual representation
      {
        type: "visual",
        html: `
          <div class="slide-diagram-root" style="background:#0e3a2f">
            <h4 style="color:#ffffff; margin-bottom:10px; font-family:var(--header-font)">Move Policies (PUCT Simulation)</h4>
            <div class="othello-board">
              <div class="ob-cell val-w" style="font-size:10px; color:#111">P=0.04</div>
              <div class="ob-cell val-b" style="font-size:10px; color:#fff">P=0.45</div>
              <div class="ob-cell val-b" style="font-size:10px; color:#fff">P=0.32</div>
              <div class="ob-cell val-w" style="font-size:10px; color:#111">P=0.19</div>
            </div>
            <p style="font-size:11px; color:#a3e635; font-family:var(--code-font)">Batched leaf nodes evaluated in shared GPU forward pass</p>
          </div>
        `
      },
      // Slide 3: Code Card
      {
        type: "code",
        filename: "othello/board.py",
        code: `
<span class="code-keyword">@njit</span>
<span class="code-keyword">def</span> <span class="code-function">apply_move</span>(black_bb, white_bb, move_idx, player):
    <span class="code-comment"># W=64 uint64 bit index operations</span>
    move_mask = uint64(1) &lt;&lt; move_idx
    flipped = uint64(0)
    
    <span class="code-comment"># Scan and flip pieces across 8 directions</span>
    for d in range(8):
        dir_flipped = scan_direction(black_bb, white_bb, move_mask, d, player)
        flipped |= dir_flipped
        
    if player == 1: <span class="code-comment"># Black</span>
        black_bb |= move_mask | flipped
        white_bb &= ~flipped
    else:           <span class="code-comment"># White</span>
        white_bb |= move_mask | flipped
        black_bb &= ~flipped
    return black_bb, white_bb`
      }
    ],
    comments: [
      {
        user: DISPLAY_NAME,
        avatar: "avatar",
        text: "Completed the PyTorch residual network for Othello. It learns entirely from self-play games utilizing MCTS. The game state is encoded into 64-bit uint64 bitboards, key moves compiled with Numba, and evaluations batched for GPU parallelization. 2.97 million parameters ResNet.",
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
      {
        type: "visual",
        html: `
          <div class="slide-cover-root firefighter-cover">
            <div class="slide-cover-title">Firefighter Bot</div>
            <div class="slide-cover-subtitle">Autonomous maze robot with custom PCB boards, soldered sensor circuits, wall-following logic, and flame response.</div>
            <div class="slide-tech-badges">
              <span class="tech-badge">Embedded Systems</span>
              <span class="tech-badge">TraxMaker PCB</span>
              <span class="tech-badge">Sensors</span>
              <span class="tech-badge">Motor Control</span>
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="firefighter-photo-slide">
            <img class="firefighter-build-photo" src="Firefighter%20bot/Flahamey.jpeg" alt="Firefighter Bot chassis with custom electronics and wiring">
            <div class="build-callout callout-fan">Fan / extinguisher module</div>
            <div class="build-callout callout-pcb">Soldered PCB boards</div>
            <div class="build-callout callout-sensor">Sensor wiring</div>
            <div class="workflow-caption">
              <span>Build</span>
              <strong>Triple-layer chassis with custom electronics mounted directly into the robot.</strong>
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="firefighter-system-slide">
            <h4>System Architecture</h4>
            <div class="system-flow-grid">
              <div class="system-node">Line Sensor</div>
              <div class="system-node">Wall Sensors</div>
              <div class="system-node">Flame Sensor</div>
              <div class="system-bus">ATMEGA328P Controller</div>
              <div class="system-node">Motor Driver</div>
              <div class="system-node">LCD Debug</div>
              <div class="system-node">Extinguisher Circuit</div>
            </div>
            <p>Separate sensing boards feed an embedded controller that decides whether to navigate, correct drift, turn, or trigger the extinguisher.</p>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="pcb-slide">
            <div class="pcb-board">
              <span class="pcb-chip">ATMEGA</span>
              <span class="pcb-component comp-a"></span>
              <span class="pcb-component comp-b"></span>
              <span class="pcb-component comp-c"></span>
              <span class="pcb-header header-a"></span>
              <span class="pcb-header header-b"></span>
              <span class="pcb-trace trace-a"></span>
              <span class="pcb-trace trace-b"></span>
              <span class="pcb-trace trace-c"></span>
            </div>
            <div class="pcb-copy">
              <h4>Custom PCB Boards in TraxMaker</h4>
              <ul>
                <li>Designed custom boards for sensing, control, and power circuits.</li>
                <li>Soldered headers, screw terminals, resistors, capacitors, sensors, and transistor-driver components.</li>
                <li>Debugged sensor noise, power stability, loose wiring, and board-level reliability.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="sensor-stack-slide">
            <h4>Sensor Stack</h4>
            <div class="sensor-card-grid">
              <div class="sensor-card">
                <span>Line</span>
                <strong>LED + Vishay BPW17N</strong>
                <p>Detects black floor versus white maze lines for room tracking.</p>
              </div>
              <div class="sensor-card">
                <span>Wall</span>
                <strong>Parallax 28015</strong>
                <p>Uses front and left distance readings for wall-following navigation.</p>
              </div>
              <div class="sensor-card">
                <span>Flame</span>
                <strong>QSD123 IR Sensor</strong>
                <p>Detects candle flame signatures and switches the robot into extinguish mode.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="navigation-slide">
            <div class="maze-diagram">
              <span class="maze-wall wall-a"></span>
              <span class="maze-wall wall-b"></span>
              <span class="maze-wall wall-c"></span>
              <span class="maze-wall wall-d"></span>
              <span class="maze-robot"></span>
              <span class="maze-arrow arrow-a">12 cm</span>
              <span class="maze-arrow arrow-b">turn right</span>
            </div>
            <div class="nav-copy">
              <h4>Wall-Hugging Maze Logic</h4>
              <p>The bot maintains roughly 12 cm from the left wall, corrects drift through motor timing, tracks line crossings, and turns right when front and left paths are blocked.</p>
              <code>if flame_detected: extinguish()</code>
              <code>elif front_blocked and left_blocked: turn_right()</code>
              <code>else: follow_left_wall()</code>
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="extinguisher-slide">
            <h4>Extinguisher Driver Circuit</h4>
            <div class="circuit-flow">
              <div class="circuit-node">ATMEGA Signal</div>
              <div class="circuit-node">TIP120 Switch</div>
              <div class="circuit-node">Fan Motor</div>
            </div>
            <div class="circuit-notes">
              <span>1N4001G flyback diode</span>
              <span>1000 uF power capacitor</span>
              <span>10k clean switching resistor</span>
            </div>
            <p>Low-power control logic safely triggers the higher-current fan mechanism when the IR flame sensor crosses threshold.</p>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="motor-control-slide">
            <h4>Embedded Control System</h4>
            <div class="control-blocks">
              <div><strong>ATMEGA328P-PU</strong><span>sensor processing and navigation decisions</span></div>
              <div><strong>SN754410NE</strong><span>bidirectional motor driver</span></div>
              <div><strong>Nema 17 Motors</strong><span>high-torque movement</span></div>
              <div><strong>LCD Display</strong><span>real-time debugging output</span></div>
              <div><strong>10,000 uF Capacitor</strong><span>motor power smoothing</span></div>
            </div>
          </div>
        `
      },
      {
        type: "visual",
        html: `
          <div class="firefighter-video-slide">
            <video class="project-video" controls muted playsinline preload="metadata" poster="Firefighter%20bot/Flahamey.jpeg">
              <source src="Firefighter%20bot/firefighter-demo.webm" type="video/webm">
              <source src="Firefighter%20bot/firefighter-demo.mp4" type="video/mp4">
              Your browser does not support embedded video.
            </video>
            <div class="workflow-caption">
              <span>Demo</span>
              <strong>Maze testing exposed the real engineering work: calibration, timing, power stability, and physical debugging.</strong>
            </div>
          </div>
        `
      },
      {
        type: "code",
        filename: "firefighter_bot/navigation.ino",
        code: `
<span class="code-keyword">loop</span>() {
  line_state = readLineSensor();
  left_cm = readLeftDistance();
  front_cm = readFrontDistance();
  flame = readFlameSensor();

  <span class="code-keyword">if</span> (flame.detected) {
    stopMotors();
    activateExtinguisher();
  } <span class="code-keyword">else if</span> (front_cm &lt; FRONT_LIMIT &amp;&amp; left_cm &lt; LEFT_LIMIT) {
    turnRight();
  } <span class="code-keyword">else</span> {
    followLeftWall(left_cm, 12);
  }
}`
      }
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
    project: "scoreshift",
    title: "ScoreShift (Sheet Music Transposition App)",
    tech: ["python", "fastapi", "oemer", "omr", "music21", "verovio", "wasm", "docker", "hugging face spaces"],
    metrics: "Runs on a public Docker-based Hugging Face Space free tier. Prepares large files in the browser resizing to 2200px and capping at 1800px on the backend to avoid processing delays.",
    text: "ScoreShift is a deployed web application for transposing sheet music. Users can upload/photograph music sheets, trigger OMR (Optical Music Recognition) using oemer, transpose pitch using music21, and preview score sheets dynamically in the browser using Verovio WASM. The site exports vector PDF, individual page PNG/JPEGs, or MusicXML files. Built with FastAPI backend and Docker."
  },
  {
    project: "hvac-model",
    title: "HavenIQ HVAC Confidence Model",
    tech: ["python", "xgboost", "pytorch", "pandas", "numpy", "scikit-learn", "cuda"],
    metrics: "Trained on 12,709 telemetry rows from 350 devices. Achieved R-squared (R²) score of 0.949 and Mean Absolute Error (MAE) of 4.576 points on held-out test data.",
    text: "This project is a machine learning regression pipeline predicting HVAC operational confidence scores. Telemetry is sorted chronologically and grouped by device into W=8 sliding windows (input shape [8, 4]). Features engineered include temperature values, target setpoints, deviation (temp - setpoint), and slope. Trained an interpretable XGBoost model (25 features per window) and a PyTorch feedforward comparison neural net."
  },
  {
    project: "hvac-rag",
    title: "HavenIQ HVAC RAG System",
    tech: ["fastapi", "pytorch", "qdrant cloud", "openai api", "docker", "postgresql"],
    metrics: "Embeds W=8 HVAC sensor windows into 128-dimensional normalized vectors. Processes 1,996 historical readings into 1,611 indexed database windows. Supports 5 incident classes (freeze_risk, hvac_drift, humidity_risk, normal, hvac_anomaly).",
    text: "HavenIQ HVAC RAG is an end-to-end telemetry anomaly explainer. A FastAPI server validates 8-reading inputs, engineers an [8, 8] matrix, passes it through a PyTorch MLP encoder to get a 128-d vector, and retrieves the top 5 closest historical match payloads from Qdrant Cloud. Finally, it uses OpenAI API to output structured JSON diagnostic reports containing risk analysis, severity, and recommended operator checks, with a deterministic local rule-based explanation fallback."
  },
  {
    project: "othello-az",
    title: "AlphaZero-Style Othello Engine",
    tech: ["python", "pytorch", "numba", "cuda", "multiprocessing", "resnet", "mcts"],
    metrics: "2.97-million-parameter PyTorch ResNet (10 residual blocks, 128 trunk filters). Pre-allocates replay buffers to hold 384,000 positions. Plays self-play game rounds (75-200 per iteration) across 4 multiprocessing workers.",
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
    text: `${DISPLAY_NAME} is a software engineer whose full name is ${FULL_NAME}. He has built several key projects: ScoreShift (music processing web app), HavenIQ HVAC Model (XGBoost & PyTorch regression), HavenIQ HVAC RAG (FastAPI/Qdrant vector search explaining anomalies), AlphaZero Othello (an RL board game engine), and Firefighter Bot (custom PCB embedded robotics). You can download his resume directly using the 'Download Resume' button at the top of his page.`
  }
];


// ----------------------------------------------------
// 3. UI STATE & INITIALIZATION
// ----------------------------------------------------
const PROJECT_ORDER = ["scoreshift", "hvac-model", "hvac-rag", "othello-az", "firefighter-bot"];
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
    window.open("Matthew_Yu_Resume.pdf", "_blank", "noopener,noreferrer");
  });
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
  const likesCountText = document.getElementById("modal-likes-count");
  
  btnLike.addEventListener("click", () => {
    if (activeProject) {
      const proj = PROJECT_DATA[activeProject];
      const isLiked = heartSvg.getAttribute("fill") === "red";
      
      if (isLiked) {
        heartSvg.setAttribute("fill", "none");
        heartSvg.setAttribute("stroke", "currentColor");
        proj.likes -= 1;
      } else {
        heartSvg.setAttribute("fill", "red");
        heartSvg.setAttribute("stroke", "red");
        proj.likes += 1;
        
        // Add pop bounce effect
        btnLike.style.transform = "scale(1.3)";
        setTimeout(() => btnLike.style.transform = "scale(1)", 150);
      }
      likesCountText.textContent = `Liked by luc4s.l1 and ${proj.likes - 1} others`;
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
  heartSvg.setAttribute("fill", "none");
  heartSvg.setAttribute("stroke", "currentColor");
  
  document.getElementById("modal-likes-count").textContent = `Liked by luc4s.l1 and ${project.likes - 1} others`;
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
            <span>${project.likes}</span>
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
  postButton.textContent = "Posting";
  updateButton();

  try {
    await submitVisitorComment(projectKey, authorValidation.authorName, commentVal);
    localStorage.setItem(COMMENT_COOLDOWN_STORAGE_KEY, String(Date.now()));
    if (authorValidation.authorName !== "visitor") {
      localStorage.setItem(COMMENT_AUTHOR_STORAGE_KEY, authorValidation.authorName);
    } else {
      localStorage.removeItem(COMMENT_AUTHOR_STORAGE_KEY);
    }
    commentField.value = "";
    setCommentStatus("Comment submitted for review.", "success", statusEl);
  } catch (error) {
    console.error("Comment submit failed:", error);
    setCommentStatus("Could not submit comment right now. Please try again later.", "error", statusEl);
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
  const response = await fetch(`${SUPABASE_URL}/rest/v1/comments`, {
    method: "POST",
    headers: {
      ...getSupabaseHeaders(),
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({
      project_key: projectKey,
      author_name: authorName,
      body,
      status: "pending"
    })
  });

  if (!response.ok) {
    throw new Error(`Supabase insert failed: ${response.status}`);
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
    
    if (bestMatch.project === "scoreshift") {
      return `<strong>ScoreShift</strong> is Matthew's web app designed to transpose printed sheet music. Here is the context retrieved:<br><br>` + 
             `• ${data.text}<br><br>` +
             `• <strong>Performance detail:</strong> ${data.metrics}<br><br>` +
             `• <strong>Stack:</strong> ${data.tech.join(", ")}.<br><br>` +
             `Feel free to click on the first grid post to view the interactive notation and code snippets!`;
    }
    
    if (bestMatch.project === "hvac-model") {
      return `Here is the retrieved documentation for the <strong>HavenIQ HVAC Confidence Model</strong>:<br><br>` + 
             `• ${data.text}<br><br>` +
             `• <strong>Key metrics:</strong> ${data.metrics}<br><br>` +
             `• <strong>Stack:</strong> ${data.tech.join(", ")}.<br><br>` +
             `You can inspect the PyTorch neural network layer code by opening the second post in Matthew's feed.`;
    }
    
    if (bestMatch.project === "hvac-rag") {
      return `I found the following specs for the <strong>HavenIQ HVAC RAG system</strong> in the local corpus:<br><br>` + 
             `• ${data.text}<br><br>` +
             `• <strong>System details:</strong> ${data.metrics}<br><br>` +
             `• <strong>Stack:</strong> ${data.tech.join(", ")}.<br><br>` +
             `It embeds telemetries with a PyTorch model and retrieves closest incidents using Qdrant Cloud vector search. Open the third post to inspect the LLM prompt code!`;
    }
    
    if (bestMatch.project === "othello-az") {
      return `Here is the telemetry context for the <strong>AlphaZero Othello Engine</strong>:<br><br>` + 
             `• ${data.text}<br><br>` +
             `• <strong>Model parameters & workers:</strong> ${data.metrics}<br><br>` +
             `• <strong>Stack:</strong> ${data.tech.join(", ")}.<br><br>` +
             `It implements 64-bit uint64 bitboards compiled with Numba JIT. Check out the board grid and search code inside the fourth post in Matthew's feed.`;
    }

    if (bestMatch.project === "firefighter-bot") {
      return `Here is the retrieved documentation for <strong>Firefighter Bot</strong>:<br><br>` +
             `- ${data.text}<br><br>` +
             `- <strong>Hardware details:</strong> ${data.metrics}<br><br>` +
             `- <strong>Stack:</strong> ${data.tech.join(", ")}<br><br>` +
             `Open the fifth post to see the custom PCB, sensor, maze-logic, extinguisher-circuit, and demo-video slides.`;
    }

    if (bestMatch.project === "general") {
      return `Sure! Matthew is a software engineer. Here is a summary of his background:<br><br>` +
             `• ${data.text}<br><br>` +
             `• ${data.metrics}<br><br>` +
             `You can download his resume by clicking the <strong>Download Resume</strong> button on the header of the page, or check out his five main project posts in the feed below.`;
    }
  }

  // Fallback if no specific project scored high enough
  return `I couldn't find a specific match for that question in Matthew's project documentation.<br><br>` +
         `Try asking questions about:<br>` +
         `• Matthew's <strong>resume</strong> or general background<br>` +
         `• <strong>ScoreShift</strong> (OMR and sheet music transposition)<br>` +
         `• <strong>HavenIQ HVAC Model</strong> (XGBoost regression)<br>` +
         `• <strong>HavenIQ RAG</strong> (FastAPI, Qdrant & LLM)<br>` +
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
