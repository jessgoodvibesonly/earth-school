const realityLayers = [
  "Perception becomes the filter",
  "Repeated choices rewire the experience",
  "Awareness unlocks new layers of reality",
  "The player can evolve, or devolve",
  "The environment responds to attention, habits, and internal state",
];

const collaborationAreas = [
  "VR/XR development",
  "Unreal Engine and cinematic production",
  "AI and adaptive gameplay systems",
  "Neuroscience and consciousness research",
  "Sound design and frequency-based audio",
  "Meditation, hypnotherapy, and transformational education",
  "Game publishing, funding, and strategic partnerships",
];

const platforms = [
  "PC",
  "Console",
  "Mobile",
  "VR",
  "XR",
  "Spatial Computing",
  "AI Companion Systems",
];

const pillars = [
  ["AWARENESS", "Notice more. Experience differently."],
  ["PERCEPTION", "Your filter changes how the world appears."],
  ["CHOICE", "Every response shapes the experience."],
  ["IDENTITY", "You are more than the role you play."],
  ["EVOLUTION", "Progression is measured through awareness, not only achievement."],
  ["CREATIVITY", "Create from who you truly are."],
];

const themes = [
  "consciousness",
  "emotional regulation",
  "compassion",
  "boundaries",
  "creativity",
  "identity",
  "perception",
  "self-awareness",
  "relationships",
  "human behavior",
  "spiritual growth",
];

const characters = [
  ["John", "/John.png"],
  ["Mrs. Chen", "/mrs-chen.png"],
  ["Maya", "/maya.png"],
];

export default function Page() {
  return (
    <main className="page-root">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/EARTHSCHOOLnewimage.png"
          alt="EARTH SCHOOL neon diner cinematic key art"
        />
        <div className="hero-overlay" />
        <div className="hero-scanlines" />
        <div className="hero-content">
          <p className="eyebrow">EARTH SCHOOL</p>
          <h1 id="hero-title">EARTH SCHOOL</h1>
          <p className="hero-subheadline">A Temporary Human Experience</p>
          <p className="hero-question">What if awareness was the controller?</p>
          <p className="hero-mantra">Awareness is the input. <span>Reality is the interface.</span></p>
          <p className="hero-copy">
            EARTH SCHOOL is a cross-platform VR/XR experience where awareness shapes reality.
          </p>
          <div className="player-rhythm" aria-label="How players experience EARTH SCHOOL">
            <p>Players don’t just play.</p>
            <p>They observe. <span>They choose.</span> They reflect.</p>
            <p>And the world responds.</p>
          </div>
          <p className="science-line">Neuroscience + consciousness meet gameplay.</p>
          <ul className="reality-list">
            {realityLayers.map((layer) => (
              <li key={layer}>{layer}</li>
            ))}
          </ul>
          <p className="hero-closing">
            This is not just entertainment. It is an immersive, reflective, transformational
            experience exploring how perception creates reality and how awareness changes the world around you.
          </p>
          <div className="button-row" aria-label="Primary actions">
            <a className="button primary" href="#collaborate">COLLABORATE WITH EARTH SCHOOL</a>
            <a className="button secondary" href="#game">EXPLORE THE EXPERIENCE</a>
          </div>
        </div>
      </section>

      <section id="collaborate" className="section collaboration-section" aria-labelledby="collaborate-title">
        <div className="section-card collaboration-card">
          <p className="eyebrow">an open invitation</p>
          <h2 id="collaborate-title">WE ARE CURRENTLY LOOKING FOR ALIGNED COLLABORATORS.</h2>
          <p className="section-text strong">
            EARTH SCHOOL is seeking thoughtful conversations and potential collaborators in:
          </p>
          <ul className="collaboration-list">
            {collaborationAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <p className="collaboration-close">If this project resonates with you, we would love to connect.</p>
          <div className="button-row">
            <a
              className="button primary"
              href="mailto:hello@aspiretour.com?subject=Collaborate%20With%20EARTH%20SCHOOL"
            >
              COLLABORATE WITH EARTH SCHOOL
            </a>
          </div>
        </div>
      </section>

      <section id="platforms" className="section narrow" aria-labelledby="platforms-title">
        <p className="eyebrow">future platform direction</p>
        <h2 id="platforms-title">CROSS-PLATFORM EXPERIENCE</h2>
        <p className="section-text">
          EARTH SCHOOL is being designed as a future cross-platform experience that can evolve
          across PC, console, mobile, VR, XR, spatial computing, and immersive companion experiences.
        </p>
        <div className="chip-wrap" aria-label="Future platform direction labels">
          {platforms.map((platform) => (
            <span className="chip" key={platform}>{platform}</span>
          ))}
        </div>
      </section>

      <section id="what-is-earth-school" className="section" aria-labelledby="what-title">
        <div className="section-card feature-card">
          <p className="eyebrow">EARTH SCHOOL • A Temporary Human Experience</p>
          <h2 id="what-title">WHAT IS EARTH SCHOOL?</h2>
          <p className="section-text strong">
            EARTH SCHOOL is part video game, part cinematic experience, and part education system
            for the soul.
          </p>
          <p className="section-text">
            Through story, character encounters, reflective choices, awareness-based mechanics, and
            immersive environments, players explore what it means to live, learn, evolve, and remember
            who they are beyond the role they are playing.
          </p>
        </div>
      </section>

      <section id="game" className="section" aria-labelledby="game-title">
        <p className="eyebrow">awareness is the mechanic</p>
        <h2 id="game-title">THE GAME EXPERIENCE</h2>
        <div className="grid pillars-grid">
          {pillars.map(([title, text]) => (
            <article className="glass-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" aria-labelledby="soul-title">
        <div className="section-card glow-panel">
          <p className="eyebrow">progression through consciousness</p>
          <h2 id="soul-title">EVOLVE THE SOUL</h2>
          <p className="section-text">
            In EARTH SCHOOL, the player does not only level up. The player wakes up.
          </p>
          <p className="section-text">
            Progression is built around awareness, emotional intelligence, boundaries, compassion,
            authenticity, creativity, and conscious action.
          </p>
          <p className="section-text">
            The world responds to how the player sees, chooses, listens, reacts, pauses, and grows.
          </p>
          <p className="mantra">Awareness changes the experience.</p>
        </div>
      </section>

      <section className="section education-section" aria-labelledby="education-title">
        <p className="eyebrow">learning by living it</p>
        <h2 id="education-title">EDUCATION THROUGH EXPERIENCE</h2>
        <p className="section-text">
          EARTH SCHOOL is designed to teach through immersion, not lectures.
        </p>
        <p className="section-text">
          Players learn through moments, choices, consequences, conversations, environments,
          reflection, and pattern recognition.
        </p>
        <p className="section-text small-heading">Themes may include:</p>
        <ul className="theme-grid">
          {themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </section>

      <section id="cinematic" className="section cinematic-section" aria-labelledby="cinematic-title">
        <p className="eyebrow">EARTH SCHOOL • A Temporary Human Experience</p>
        <h2 id="cinematic-title">PRE-RENDERED CINEMATIC COMING SOON</h2>
        <p className="release">Target Release: June 2026</p>
        <p className="section-text">
          The first cinematic glimpse into EARTH SCHOOL is currently in development, introducing the
          neon diner, the awareness shift, the perception filter, and the beginning of the temporary
          human experience.
        </p>
        <div className="video-placeholder" role="img" aria-label="Pre-rendered cinematic coming soon June 2026">
          <span>PRE-RENDERED CINEMATIC</span>
          <strong>COMING SOON</strong>
          <em>JUNE 2026</em>
        </div>
      </section>

      <section className="section diner-section" aria-labelledby="diner-title">
        <p className="eyebrow">first world</p>
        <h2 id="diner-title">ENTER THE DINER</h2>
        <p className="section-text">
          The first world of EARTH SCHOOL begins in a neon-lit retro diner where ordinary moments
          become extraordinary clues.
        </p>
        <div className="diner-lines" aria-label="Diner world principles">
          <p>The diner is a mirror.</p>
          <p>The characters are reflections.</p>
          <p>The environment responds to awareness.</p>
        </div>
        <div className="grid character-grid">
          {characters.map(([name, image]) => (
            <article className="character-card" key={name}>
              <img src={image} alt={`${name} from EARTH SCHOOL`} loading="lazy" />
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="section journey-section" aria-labelledby="journey-title">
        <div className="section-card cta-card">
          <p className="eyebrow">development journey</p>
          <h2 id="journey-title">JOIN THE JOURNEY</h2>
          <p className="section-text">
            Follow the development of EARTH SCHOOL, the pre-rendered cinematic, character reveals,
            music, worldbuilding, behind-the-scenes updates, and future immersive experiences.
          </p>
          <div className="button-row" aria-label="Community actions">
            <a className="button primary" href="mailto:hello@aspiretour.com?subject=EARTH%20SCHOOL%20updates">STAY UPDATED</a>
            <a className="button secondary" href="mailto:hello@aspiretour.com?subject=EARTH%20SCHOOL%20Synergy%20Call">JOIN THE SYNERGY CALL</a>
          </div>
        </div>
      </section>

      <section className="quote-section" aria-label="EARTH SCHOOL quote">
        <figure>
          <blockquote>“Can you see your own face right now?”</blockquote>
          <figcaption>— Rev. Dr. Jessica Simmonds</figcaption>
        </figure>
      </section>

      <footer className="footer">
        <p>EARTH SCHOOL • A Temporary Human Experience</p>
        <p>Created by Rev. Dr. Jessica Simmonds</p>
      </footer>

      <style>{`
        :root {
          --bg: #03040b;
          --navy: #070b1f;
          --panel: rgba(11, 16, 42, .72);
          --pink: #ff4fd8;
          --purple: #8b5cff;
          --blue: #27d8ff;
          --text: #f7f8ff;
          --muted: #c4cae6;
          --line: rgba(115, 218, 255, .34);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; background: var(--bg); }
        body { margin: 0; }
        .page-root {
          min-height: 100vh;
          overflow-x: hidden;
          color: var(--text);
          background:
            radial-gradient(circle at 12% 8%, rgba(255, 79, 216, .22), transparent 34rem),
            radial-gradient(circle at 88% 15%, rgba(39, 216, 255, .18), transparent 32rem),
            linear-gradient(180deg, #02030a 0%, #070b1f 42%, #03040b 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .hero {
          position: relative;
          min-height: 100svh;
          display: grid;
          place-items: center;
          isolation: isolate;
          padding: 7rem 1rem 5rem;
          text-align: center;
        }
        .hero-image {
          position: absolute;
          inset: 0;
          z-index: -3;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(1.16) contrast(1.08) brightness(.72);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(180deg, rgba(2, 3, 10, .56) 0%, rgba(3, 4, 12, .62) 46%, rgba(3, 4, 11, .94) 100%),
            radial-gradient(circle at 50% 44%, rgba(6, 8, 20, .12), rgba(0, 0, 0, .7) 72%),
            radial-gradient(circle at 18% 30%, rgba(255, 79, 216, .35), transparent 36rem),
            radial-gradient(circle at 82% 26%, rgba(39, 216, 255, .24), transparent 32rem);
        }
        .hero-scanlines {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .2;
          background: repeating-linear-gradient(180deg, rgba(255,255,255,.12) 0 1px, transparent 1px 7px);
          mix-blend-mode: screen;
          pointer-events: none;
        }
        .hero-content {
          width: min(100%, 1040px);
          margin: 0 auto;
          padding: clamp(1.25rem, 4vw, 3rem);
          border: 1px solid rgba(255, 255, 255, .12);
          border-radius: clamp(1.5rem, 4vw, 3rem);
          background: linear-gradient(180deg, rgba(3, 5, 16, .62), rgba(3, 5, 16, .28));
          box-shadow: 0 0 55px rgba(39, 216, 255, .2), inset 0 0 38px rgba(255, 79, 216, .08);
          backdrop-filter: blur(8px);
        }
        .eyebrow {
          margin: 0 0 1rem;
          color: #9ff1ff;
          font-size: .76rem;
          font-weight: 800;
          letter-spacing: .26em;
          line-height: 1.5;
          text-transform: uppercase;
          text-shadow: 0 0 18px rgba(39, 216, 255, .75);
        }
        h1, h2, h3, p, figure, blockquote { overflow-wrap: anywhere; }
        h1 {
          margin: 0;
          font-size: clamp(3.15rem, 12vw, 8.4rem);
          line-height: .88;
          letter-spacing: .08em;
          text-transform: uppercase;
          text-shadow: 0 0 18px rgba(255, 79, 216, .72), 0 0 42px rgba(39, 216, 255, .55);
        }
        h2 {
          margin: 0;
          text-align: center;
          font-size: clamp(2rem, 5.4vw, 4.35rem);
          line-height: .96;
          letter-spacing: .06em;
          text-transform: uppercase;
          text-shadow: 0 0 24px rgba(139, 92, 255, .45);
        }
        h3 {
          margin: 0;
          font-size: clamp(1rem, 2vw, 1.22rem);
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .hero-subheadline {
          margin: 1rem auto 0;
          color: #f9e7ff;
          font-size: clamp(1.15rem, 3.2vw, 2rem);
          letter-spacing: .18em;
          text-transform: uppercase;
        }
        .hero-question {
          margin: 1.8rem auto 0;
          color: #ffffff;
          font-size: clamp(1.45rem, 3.8vw, 2.65rem);
          font-weight: 850;
          line-height: 1.08;
          text-shadow: 0 0 22px rgba(255, 79, 216, .62);
        }
        .hero-mantra {
          margin: 1rem auto 0;
          color: #ffb9ee;
          font-size: clamp(1.1rem, 2.5vw, 1.7rem);
          font-weight: 900;
          letter-spacing: .08em;
          line-height: 1.35;
          text-transform: uppercase;
          text-shadow: 0 0 18px rgba(255, 79, 216, .78);
        }
        .hero-mantra span {
          color: #9ff1ff;
          text-shadow: 0 0 18px rgba(39, 216, 255, .82);
        }
        .quote-section blockquote {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.35rem, 3.5vw, 2.7rem);
          font-weight: 800;
          line-height: 1.1;
          text-shadow: 0 0 20px rgba(255, 79, 216, .68);
        }
        figcaption {
          margin-top: .65rem;
          color: #a9efff;
          font-size: clamp(.95rem, 2vw, 1.15rem);
        }
        .hero-copy,
        .section-text {
          max-width: 820px;
          margin: 1.15rem auto 0;
          color: var(--muted);
          font-size: clamp(1rem, 1.8vw, 1.18rem);
          line-height: 1.75;
          text-align: center;
        }
        .strong { color: #ffffff; font-weight: 750; }
        .player-rhythm {
          margin: 1.35rem auto 0;
          color: #ffffff;
          font-size: clamp(1.02rem, 2vw, 1.22rem);
          font-weight: 800;
          letter-spacing: .04em;
          line-height: 1.55;
        }
        .player-rhythm p { margin: 0; }
        .player-rhythm span { color: #ffb9ee; }
        .science-line {
          margin: 1.35rem auto 0;
          color: #9ff1ff;
          font-size: clamp(1rem, 2vw, 1.22rem);
          font-weight: 900;
          letter-spacing: .12em;
          line-height: 1.4;
          text-transform: uppercase;
          text-shadow: 0 0 16px rgba(39, 216, 255, .65);
        }
        .reality-list,
        .collaboration-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: .58rem 1.2rem;
          max-width: 900px;
          margin: 1.3rem auto 0;
          padding: 0;
          list-style: none;
          text-align: left;
        }
        .reality-list li,
        .collaboration-list li {
          position: relative;
          padding-left: 1.15rem;
          color: #e8ecff;
          font-size: clamp(.9rem, 1.45vw, 1rem);
          line-height: 1.5;
        }
        .reality-list li::before,
        .collaboration-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #ff70df;
          text-shadow: 0 0 12px rgba(255, 79, 216, .92);
        }
        .hero-closing {
          max-width: 860px;
          margin: 1.4rem auto 0;
          color: #cbd3ef;
          font-size: clamp(.92rem, 1.45vw, 1.02rem);
          line-height: 1.65;
        }

        .button-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: .9rem;
          margin-top: 2rem;
        }
        .button {
          display: inline-flex;
          min-height: 3.15rem;
          align-items: center;
          justify-content: center;
          padding: .9rem 1.25rem;
          border-radius: 999px;
          color: #ffffff;
          font-size: .86rem;
          font-weight: 900;
          letter-spacing: .14em;
          text-align: center;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .button.primary {
          border: 1px solid rgba(255, 134, 232, .8);
          background: linear-gradient(135deg, rgba(255, 79, 216, .95), rgba(139, 92, 255, .88));
          box-shadow: 0 0 24px rgba(255, 79, 216, .38), 0 0 48px rgba(139, 92, 255, .22);
        }
        .button.secondary {
          border: 1px solid rgba(99, 229, 255, .74);
          background: linear-gradient(135deg, rgba(5, 13, 35, .86), rgba(39, 216, 255, .18));
          box-shadow: 0 0 24px rgba(39, 216, 255, .22);
        }
        .button:hover,
        .button:focus-visible {
          transform: translateY(-2px);
          box-shadow: 0 0 34px rgba(39, 216, 255, .36), 0 0 55px rgba(255, 79, 216, .26);
        }

        .section {
          width: min(100% - 2rem, 1180px);
          margin: 0 auto;
          padding: clamp(4.75rem, 9vw, 8rem) 0;
          text-align: center;
        }
        .section.narrow { width: min(100% - 2rem, 980px); }
        .collaboration-section { padding-top: clamp(4rem, 7vw, 6.5rem); }
        .collaboration-card {
          max-width: 1040px;
          margin: 0 auto;
          border-color: rgba(255, 112, 223, .46);
          box-shadow: 0 0 38px rgba(255, 79, 216, .15), inset 0 0 40px rgba(39, 216, 255, .07);
        }
        .collaboration-card h2 { font-size: clamp(1.8rem, 4.6vw, 3.6rem); }
        .collaboration-list { max-width: 850px; margin-top: 1.7rem; }
        .collaboration-close {
          margin: 1.8rem auto 0;
          color: #ffffff;
          font-size: clamp(1.05rem, 2vw, 1.3rem);
          font-weight: 800;
          line-height: 1.5;
        }
        .section-card,
        .glass-card,
        .video-placeholder,
        .character-card {
          border: 1px solid var(--line);
          background: linear-gradient(145deg, rgba(13, 19, 50, .82), rgba(8, 10, 27, .54));
          box-shadow: 0 0 30px rgba(39, 216, 255, .13), inset 0 0 36px rgba(255, 79, 216, .06);
          backdrop-filter: blur(10px);
        }
        .section-card {
          padding: clamp(1.5rem, 5vw, 3.5rem);
          border-radius: 2rem;
          position: relative;
          overflow: hidden;
        }
        .section-card::before {
          content: "";
          position: absolute;
          inset: -2px;
          z-index: -1;
          background: radial-gradient(circle at 20% 10%, rgba(255, 79, 216, .24), transparent 30rem),
            radial-gradient(circle at 85% 80%, rgba(39, 216, 255, .18), transparent 30rem);
        }
        .feature-card { max-width: 980px; margin: 0 auto; }
        .grid {
          display: grid;
          gap: 1rem;
          margin-top: 2rem;
        }
        .pillars-grid { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .glass-card {
          min-height: 12rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.35rem;
          border-radius: 1.3rem;
        }
        .glass-card h3 { color: #ffffff; text-shadow: 0 0 16px rgba(39, 216, 255, .55); }
        .glass-card p {
          margin: .85rem 0 0;
          color: var(--muted);
          line-height: 1.6;
        }
        .glow-panel { max-width: 900px; margin: 0 auto; }
        .mantra {
          margin: 1.7rem auto 0;
          color: #ffffff;
          font-size: clamp(1.35rem, 3vw, 2.1rem);
          font-weight: 900;
          letter-spacing: .07em;
          text-transform: uppercase;
          text-shadow: 0 0 20px rgba(255, 79, 216, .64), 0 0 30px rgba(39, 216, 255, .4);
        }
        .chip-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: .75rem;
          margin: 2rem auto 0;
        }
        .chip,
        .theme-grid li {
          border: 1px solid rgba(99, 229, 255, .52);
          border-radius: 999px;
          background: rgba(7, 14, 38, .72);
          box-shadow: 0 0 18px rgba(39, 216, 255, .11);
          color: #e9fbff;
        }
        .chip {
          padding: .68rem .95rem;
          font-size: .86rem;
          font-weight: 800;
          letter-spacing: .08em;
        }
        .small-heading {
          margin-top: 1.7rem;
          color: #ffffff;
          font-weight: 800;
        }
        .theme-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: .7rem;
          max-width: 900px;
          margin: 1.35rem auto 0;
          padding: 0;
          list-style: none;
        }
        .theme-grid li {
          padding: .62rem .9rem;
          text-transform: capitalize;
        }
        .release {
          margin: 1rem auto 0;
          color: #ffb9ee;
          font-size: clamp(1rem, 2.5vw, 1.35rem);
          font-weight: 900;
          letter-spacing: .12em;
          text-align: center;
          text-transform: uppercase;
        }
        .video-placeholder {
          width: min(100%, 820px);
          min-height: clamp(18rem, 45vw, 30rem);
          display: grid;
          place-items: center;
          align-content: center;
          gap: .8rem;
          margin: 2.3rem auto 0;
          border-radius: 2rem;
          background:
            linear-gradient(180deg, rgba(3, 5, 16, .4), rgba(3, 5, 16, .86)),
            radial-gradient(circle at 50% 30%, rgba(255, 79, 216, .42), transparent 34%),
            radial-gradient(circle at 50% 70%, rgba(39, 216, 255, .28), transparent 40%),
            url('/diner.png');
          background-size: cover;
          background-position: center;
          box-shadow: 0 0 42px rgba(39, 216, 255, .18), 0 0 72px rgba(255, 79, 216, .12);
          text-align: center;
        }
        .video-placeholder span,
        .video-placeholder em {
          color: #a9efff;
          font-style: normal;
          font-weight: 900;
          letter-spacing: .22em;
          text-transform: uppercase;
        }
        .video-placeholder strong {
          font-size: clamp(2rem, 6vw, 5rem);
          line-height: .95;
          letter-spacing: .1em;
          text-shadow: 0 0 24px rgba(255, 79, 216, .7);
        }
        .diner-lines {
          display: grid;
          gap: .75rem;
          max-width: 720px;
          margin: 2rem auto;
        }
        .diner-lines p {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.12rem, 2vw, 1.35rem);
          font-weight: 800;
          text-shadow: 0 0 16px rgba(39, 216, 255, .4);
        }
        .character-grid { grid-template-columns: 1fr; }
        .character-card {
          overflow: hidden;
          border-radius: 1.35rem;
        }
        .character-card img {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          object-position: center top;
          border-bottom: 1px solid rgba(99, 229, 255, .24);
        }
        .character-card h3 { padding: 1.1rem; }
        .quote-section {
          width: min(100% - 2rem, 1050px);
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 7rem) 1rem;
          text-align: center;
        }
        .quote-section figure {
          margin: 0;
          padding: clamp(2rem, 5vw, 4rem);
          border-block: 1px solid rgba(255, 79, 216, .34);
          background: radial-gradient(circle at center, rgba(139, 92, 255, .16), transparent 70%);
        }
        .footer {
          padding: 2.5rem 1rem 3rem;
          border-top: 1px solid rgba(99, 229, 255, .28);
          color: var(--muted);
          text-align: center;
          background: rgba(1, 2, 8, .75);
        }
        .footer p { margin: .35rem 0; }
        .footer p:first-child {
          color: #ffffff;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        @media (max-width: 560px) {
          .hero { padding: 5.5rem 1rem 3.75rem; }
          .hero-image { object-position: center top; }
          .hero-content { border-radius: 1.35rem; }
          .eyebrow { font-size: .68rem; letter-spacing: .18em; }
          .hero-subheadline { letter-spacing: .1em; }
          .reality-list,
          .collaboration-list { grid-template-columns: 1fr; gap: .48rem; }
          .hero-closing { line-height: 1.55; }
          .button-row { width: 100%; }
          .button { width: 100%; max-width: 24rem; }
          .section { width: min(100% - 1.25rem, 1180px); }
          .glass-card { min-height: 10rem; }
        }

        @media (min-width: 700px) {
          .pillars-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .character-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @media (min-width: 1040px) {
          .pillars-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .glass-card { padding: 1.6rem; }
        }
      `}</style>
    </main>
  );
}
