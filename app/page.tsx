import fs from "node:fs";
import path from "node:path";

type Character = {
  name: string;
  role: string;
  description: string;
  image: string;
  placeholder?: string;
};

const fileExists = (filePath: string) =>
  fs.existsSync(path.join(process.cwd(), "public", filePath.replace(/^\//, "")));

export default function Page() {
  const hasDiner = fileExists("/diner.png");
  const johnImagePath = ["/john.png", "/John.png", "/john-earth-school.png", "/johncharacter.png", "/john-mrs-chen-maya.png"].find(fileExists) ?? "";
  const hasMaya = fileExists("/maya.png");
  const hasMrsChen = fileExists("/mrs-chen.png");
  const hasTrailer = fileExists("/EARTHSCHOOL.mp4");

  const pillars = [
    ["Awareness Shapes Reality", "The world changes based on what the player notices."],
    ["AI as Reflection", "AI systems adapt to the player’s behavior, choices, emotional patterns, and attention."],
    ["The Filter System", "Different players can experience the same world in completely different ways."],
    ["Evolution Through Choice", "Players evolve or devolve through awareness, boundaries, habits, compassion, and action."],
    ["A Temporary Human Experience", "EARTH SCHOOL explores the idea that life itself may be a classroom for consciousness."],
  ];

  const characters: Character[] = [
    {
      name: "John",
      role: "The Awakening Mind",
      description:
        "Older, grounded, intelligent, and calm. John begins to notice that the world is responding to him differently.",
      image: johnImagePath,
      placeholder: "John image coming soon",
    },
    {
      name: "Maya",
      role: "The Emotional Mirror",
      description:
        "Stylish, magnetic, emotionally intelligent, and complex. Maya reveals how perception, emotion, and inner state can shape the same moment.",
      image: hasMaya ? "/maya.png" : "",
    },
    {
      name: "Mrs. Chen",
      role: "The Observer",
      description:
        "Quiet, perceptive, calm, and understated. She never explains the system. She reflects it.",
      image: hasMrsChen ? "/mrs-chen.png" : "",
    },
  ];

  const chips = [
    "Unreal Engine 5",
    "AI Reflection Systems",
    "PC",
    "Console",
    "Steam",
    "Spatial Computing",
    "Future AR Layer",
    "Awareness-Based Gameplay",
    "Interactive Storytelling",
    "Human Potential",
  ];

  return (
    <main className="page-root">
      <section className="hero" aria-label="Hero">
        <div className="hero-bg" style={hasDiner ? { backgroundImage: "url('/diner.png')" } : undefined} />
        <div className="overlay" />
        <div className="rain" />
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 text-center drop-shadow-[0_0_30px_rgba(103,232,249,0.25)]">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-300 sm:text-base">THE GAME</p>
          <h1 className="text-center text-6xl font-black tracking-[0.08em] text-white sm:text-7xl md:text-8xl lg:text-9xl">EARTH SCHOOL</h1>
          <p className="mt-6 text-2xl font-bold text-yellow-200 sm:text-3xl md:text-4xl">Can you see your own face right now?</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">A cinematic AI-integrated interactive experience about awareness, perception, consciousness, and what it means to be human.</p>
        </div>
      </section>

      <section className="section">
        <h2>Perception Is The Gameplay</h2>
        <div className="grid five">
          {pillars.map(([title, text]) => (
            <article key={title} className="glass-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Meet the First Cinematic Characters</h2>
        <p className="section-text">These are early example characters for the pre-rendered cinematic trailer we are currently developing. Final character designs may evolve as the cinematic and vertical slice are built.</p>
        <div className="grid three">
          {characters.map((character) => (
            <article key={character.name} className="character-card">
              {character.image ? (
                <img src={character.image} alt={character.name} loading="lazy" />
              ) : (
                <div className="img-placeholder">{character.placeholder ?? "Character Portrait"}</div>
              )}
              <div className="card-copy">
                <h3>{character.name}</h3>
                <p className="role">{character.role}</p>
                <p>{character.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section">
        <p className="experience-prompt">Can you see your own face right now?</p>
        <h2>EARTH SCHOOL — The Experience</h2>
        <p className="section-text">
          Earth School is a perception-based interactive experience where consciousness shapes reality.
        </p>
        <p className="section-text">It blends metaphysics, neuroscience, and universal laws into a living system where awareness is the input.</p>
        <p className="section-text">
          What you focus on expands.
          <br />
          What you believe filters your world.
          <br />
          What you feel influences what unfolds.
        </p>
        <p className="section-text">
          Players are not controlling a character.
          <br />
          They are experiencing themselves through one.
        </p>
        <p className="section-text">
          This is not about winning.
          <br />
          It is about noticing.
        </p>
        <div className="grid three">
          <article className="glass-card">
            <h3>Perception is Reality</h3>
            <p>The brain filters billions of inputs every second. In Earth School, that filter becomes visible. Change your awareness, and the world changes with it.</p>
          </article>
          <article className="glass-card">
            <h3>Universal Laws in Motion</h3>
            <p>Principles like attention, intention, and cause and effect are not theories here. They are systems you experience in real time.</p>
          </article>
          <article className="glass-card">
            <h3>AI-Driven Reflection System</h3>
            <p>An adaptive AI layer responds to your behavior, mirroring patterns, choices, and emotional states to create a deeply personal experience.</p>
          </article>
        </div>
      </section>

      <section id="trailer" className="section">
        <h2>Cinematic Trailer</h2>
        <p className="section-text">A premium pre-rendered cinematic experience introducing the world, characters, and perception systems behind EARTH SCHOOL.</p>
        <div className="media-wrap">
          {hasTrailer ? (
            <video controls playsInline preload="metadata" className="trailer-video">
              <source src="/EARTHSCHOOL.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="trailer-placeholder">Trailer Coming Soon</div>
          )}
        </div>
        <p className="notice">“You’re noticing.”</p>
      </section>

      <section id="vision" className="section">
        <h2>Built For The Next Era Of Interactive Experience</h2>
        <p className="section-text">EARTH SCHOOL is being designed as a cinematic AI-powered experience for PC, console, Steam, immersive technology, and future spatial computing platforms.</p>
        <div className="chip-wrap">
          {chips.map((chip) => (
            <span key={chip} className="chip">{chip}</span>
          ))}
        </div>
        <p className="section-text">The AI layer is not just a feature. It is part of the experience infrastructure. It helps the world respond, reflect, and evolve around the player’s choices, attention, patterns, and state of awareness.</p>
      </section>

      <section className="section">
        <h2>Built For Strategic Partners</h2>
        <div className="grid three">
          <article className="glass-card">
            <h3>For Consciousness &amp; Wellness Leaders</h3>
            <p>EARTH SCHOOL brings awareness, reflection, emotional intelligence, and human potential into an interactive format designed for the next generation.</p>
          </article>
          <article className="glass-card">
            <h3>For Investors</h3>
            <p>EARTH SCHOOL is a scalable entertainment and technology IP with expansion potential across games, AI, spatial computing, companion apps, education, wellness, and media.</p>
          </article>
          <article className="glass-card">
            <h3>For Publishers &amp; Platform Partners</h3>
            <p>EARTH SCHOOL is designed as a premium cinematic game experience with strong world-building, AI-powered systems, franchise potential, and future cross-platform growth.</p>
          </article>
        </div>
      </section>



      <section className="section">
        <p className="label">AI DEVELOPMENT PIPELINE</p>
        <h2>Built with AI-assisted game development, guided by human vision</h2>
        <p className="section-text">EARTH SCHOOL is being developed through a focused AI-assisted workflow that helps accelerate prototyping, research, technical planning, documentation, and iteration. AI supports the process, but the creative direction, philosophy, systems design, and final decisions remain human-led.</p>
        <div className="grid three ai-pipeline-grid">
          <article className="glass-card">
            <h3>Project-Wide Context</h3>
            <p>Before features are built, the project defines its core identity: genre, tone, creative pillars, game loop, tech stack, coding guidelines, and production rules. This keeps AI aligned with the vision instead of drifting into generic game design.</p>
          </article>
          <article className="glass-card">
            <h3>Focused Feature Briefs</h3>
            <p>Each new feature begins as a clear concept. Awareness systems, perception shifts, AI reflection, dialogue loops, and environment reactions are broken into focused briefs before any code or prototype work begins.</p>
          </article>
          <article className="glass-card">
            <h3>Research-Informed Design</h3>
            <p>Similar mechanics from games, interactive media, neuroscience, metaphysics, and consciousness-based experiences are studied to refine how EARTH SCHOOL can feel familiar enough to understand, but original enough to stand apart.</p>
          </article>
          <article className="glass-card">
            <h3>Technical Specifications</h3>
            <p>Feature ideas are translated into practical technical specs for Unreal Engine 5, including required systems, scene logic, data flow, interaction rules, AI behavior, and what should not be changed.</p>
          </article>
          <article className="glass-card">
            <h3>Modular Prototyping</h3>
            <p>Systems are built in small, independent modules: awareness, perception filters, NPC reflection, emotional state, environment response, audio shifts, and player choice tracking. This keeps the prototype flexible and easier to test.</p>
          </article>
          <article className="glass-card">
            <h3>Testing + Documentation</h3>
            <p>Each feature is tested inside the vertical slice, refined through feedback, and documented so future developers, designers, and AI tools can understand how the system works and expand it safely.</p>
          </article>
        </div>
        <p className="section-text ai-pipeline-close">EARTH SCHOOL is not being built as a traditional game first. It is being built as a consciousness experience engine, one system at a time.</p>
      </section>
      <section id="experience" className="section final-cta">
        <h2>The Experience Is Already Beginning</h2>
        <p className="section-text">EARTH SCHOOL is currently in development as an Unreal Engine 5 vertical slice beginning with the Neon Diner experience.</p>
        <div className="button-row flex justify-center mt-8">
          <a href="https://jessgoodvibesonly.vercel.app" target="_blank" rel="noopener noreferrer">Learn More About Jessica</a>
        </div>
        <p className="section-text">This project is currently in active development. Early collaborators and aligned partners are welcome.</p>
      </section>

      <footer className="footer">
        <p>EARTH SCHOOL: A Temporary Human Experience</p>
        <p>Created by Jessica Simmonds</p>
        <p>Peace, light, and levity.</p>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        .page-root { background: #070b17; color: #f5f6ff; font-family: Inter, system-ui, sans-serif; width: 100%; overflow-x: hidden; }
        .hero { position: relative; min-height: 90vh; display: grid; place-items: center; overflow: hidden; width: 100%; }
        .hero-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #1a1038, #08101f 60%, #2a1038); background-size: cover; background-position: center; transform: scale(1.05); }
        .overlay { position:absolute; inset:0; background: linear-gradient(180deg, rgba(6,8,18,.35), rgba(2,5,12,.88)), radial-gradient(circle at 18% 20%, rgba(255, 62, 178, .35), transparent 45%), radial-gradient(circle at 80% 35%, rgba(46, 205, 255, .28), transparent 40%), radial-gradient(circle at 55% 80%, rgba(255, 175, 43, .2), transparent 30%); }
        .rain { position:absolute; inset:0; opacity:.28; background: repeating-linear-gradient(102deg, rgba(188,231,255,.28) 0 1px, transparent 1px 13px), linear-gradient(180deg, transparent 0%, rgba(92, 175, 255, .18) 100%); }
        .hero-content { position: relative; z-index: 2; width: 100%; max-width: 900px; padding: 2rem 1rem; text-align: center; }
        .label { letter-spacing: .25em; color:#96f2ff; font-size:.78rem; margin-bottom:1rem; }
        h1 { font-size: clamp(2.4rem, 8vw, 6rem); margin: 0; letter-spacing:.06em; }
        .subheadline { margin-top:.8rem; font-size: clamp(1rem, 2.8vw, 1.35rem); color:#ffd08d; }
        .intro, .section-text { max-width: 760px; margin: 1rem auto 0; color:#d4d8ef; line-height:1.65; }
        .button-row { display:flex; flex-wrap:wrap; justify-content:center; gap:.75rem; margin-top:1.5rem; width:100%; }
        .button-row a { text-decoration:none; color:#fff; padding:.75rem 1rem; border-radius:999px; border:1px solid rgba(147,223,255,.45); background: linear-gradient(120deg, rgba(255,81,194,.2), rgba(67,196,255,.22)); backdrop-filter: blur(6px); transition: transform .2s ease, box-shadow .2s ease; width: 100%; max-width: 100%; }
        .button-row a:hover { transform: translateY(-2px); box-shadow: 0 0 24px rgba(104, 193, 255, .35); }
        .section { padding: 3.5rem 1rem; width: 100%; max-width: 1120px; margin: 0 auto; }
        h2 { font-size: clamp(1.7rem, 5vw, 2.7rem); margin: 0 0 1.4rem; }
        .grid { display:grid; gap:1rem; }
        .five { grid-template-columns: 1fr; }
        .three { grid-template-columns: 1fr; }
        .glass-card, .character-card, .trailer-placeholder { border:1px solid rgba(173,225,255,.2); border-radius: 18px; background: linear-gradient(150deg, rgba(255,255,255,.09), rgba(255,255,255,.02)); backdrop-filter: blur(8px); box-shadow: 0 12px 38px rgba(0,0,0,.35); }
        .glass-card { padding: 1.1rem; }
        .glass-card h3 { margin:.2rem 0 .55rem; }
        .glass-card p { margin:0; color:#c8cee9; }
        .character-card { overflow:hidden; }
        .character-card img, .img-placeholder { width:100%; max-width:100%; height:auto; aspect-ratio: 16/10; object-fit:cover; display:block; background: linear-gradient(135deg, rgba(59, 18, 97, .8), rgba(12, 35, 54, .9)); }
        .img-placeholder { display:grid; place-items:center; color:#c5d0f2; font-size:.9rem; }
        .card-copy { padding:1rem; }
        .role { color:#72e6ff; margin:.2rem 0 .6rem; font-weight: 600; }
        .media-wrap { margin-top:1.2rem; }
        .trailer-video { width:100%; max-width:100%; height:auto; border-radius:20px; border:1px solid rgba(173,225,255,.3); background:#02040b; box-shadow:0 15px 40px rgba(0,0,0,.45); }
        .trailer-placeholder { min-height:320px; display:grid; place-items:center; font-size:1.3rem; color:#ffe0aa; background: radial-gradient(circle at 50% 30%, rgba(255,131,216,.35), rgba(61,126,255,.2) 45%, rgba(6,9,20,.9)); }
        .notice { margin-top: 1rem; color:#9de8ff; }
        .chip-wrap { display:flex; flex-wrap:wrap; gap:.55rem; margin:1rem 0 1.1rem; }
        .chip { border:1px solid rgba(117, 224, 255, .45); color:#dff8ff; font-size:.82rem; padding:.45rem .7rem; border-radius:999px; background:rgba(42, 84, 136, .2); }
        .final-cta { text-align:center; }
        .experience-section { text-align: center; }
        .experience-prompt {
          margin: 0 0 .6rem;
          font-size: clamp(.95rem, 2.4vw, 1.2rem);
          letter-spacing: .04em;
          color: #9de8ff;
          text-shadow: 0 0 10px rgba(64, 219, 255, .7), 0 0 20px rgba(255, 91, 208, .4);
        }
        .experience-section .section-text { max-width: 760px; margin-top: .75rem; }
        .experience-section .grid { margin-top: 1.35rem; }
        .ai-pipeline-grid { margin-top: 1.35rem; }
        .ai-pipeline-close { text-align: center; margin-top: 1.1rem; }
        .footer { border-top:1px solid rgba(160,200,255,.22); text-align:center; padding:2rem 1rem 3rem; color:#b8bfdc; width:100%; max-width:100%; overflow-x:hidden; }
        @media (min-width: 640px) {
          .button-row a { width: auto; }
          .section { padding: 4rem 1.25rem; }
          .five { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .three { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .section { padding: 4.5rem 1.5rem; }
          .five { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (min-width: 1280px) {
          .five { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        }
      `}</style>
    </main>
  );
}
