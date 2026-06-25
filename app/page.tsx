const highlights = [
  "Simulation theory meets spiritual gameplay",
  "A shared MMO world built around awareness, choice, and reflection",
  "The Lens reveals filters, loops, patterns, and hidden layers of reality",
  "The Sanctuary vehicle becomes the player’s AI-guided spiritual hub",
  "Players explore timelines, worlds, relationships, and consciousness-based progression",
];

const systems = [
  ["Learn the rules", "Reality responds to attention, environment, choices, and perception."],
  ["Master your consciousness", "Players progress by noticing loops, shifting filters, and choosing differently."],
  ["Watch life reflect it", "The world changes as awareness, coherence, and connection evolve."],
];

function FooterIcon({ name }: { name: "linkedin" | "website" }) {
  const icons = {
    linkedin: <path d="M6.5 8.5V18M6.5 5.8v.1M10.5 18v-5.3a3.2 3.2 0 0 1 6.4 0V18M10.5 8.5V18" />,
    website: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.2-2.4 3.3-5.4 3.3-9S14.2 5.4 12 3c-2.2 2.4-3.3 5.4-3.3 9s1.1 6.6 3.3 9ZM3.5 12h17" />,
  };

  return (
    <svg aria-hidden="true" className="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6">
      {icons[name]}
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page-root">
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src="/EARTHSCHOOLnewimage.png" alt="EARTH SCHOOL neon diner cinematic key art" />
        <div className="hero-overlay" />
        <div className="hero-scanlines" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">WHERE AWARENESS SHAPES REALITY</p>
          <h1 id="hero-title">EARTH SCHOOL</h1>
          <p className="hero-subheadline">A Temporary Human Experience</p>
          <figure className="hero-quote">
            <blockquote>“Can you see your own face right now?”</blockquote>
            <figcaption>— Rev. Dr. Jessica Simmonds</figcaption>
          </figure>
          <p className="hero-copy">
            A spiritual MMO concept where players enter a shared simulation, explore consciousness,
            and learn how perception changes the experience.
          </p>
          <p className="awareness-statement">
            <span>AWARENESS IS THE INPUT.</span>
            <span>REALITY IS THE INTERFACE.</span>
          </p>
        </div>
      </section>

      <section id="trailer" className="section cinematic-section" aria-labelledby="trailer-title">
        <p className="eyebrow">the first cinematic glimpse</p>
        <h2 id="trailer-title">WATCH THE EARTH SCHOOL TRAILER</h2>
        <p className="section-text">
          Created in 24 hours to bring the vision out of my head and onto the screen.
        </p>
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/MLG2-Nu9YAQ"
            title="EARTH SCHOOL cinematic trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section id="game" className="section" aria-labelledby="game-title">
        <p className="eyebrow">what we are building</p>
        <h2 id="game-title">A CONSCIOUSNESS MMO</h2>
        <p className="section-text strong">
          EARTH SCHOOL is a game about waking up inside the system while still playing the game.
        </p>
        <ul className="highlight-list">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="section systems-section" aria-labelledby="systems-title">
        <p className="eyebrow">the gameplay loop</p>
        <h2 id="systems-title">THE RULES ARE THE MECHANICS</h2>
        <div className="grid systems-grid">
          {systems.map(([title, text]) => (
            <article className="glass-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section vision-section" aria-labelledby="vision-title">
        <p className="eyebrow">the invitation</p>
        <h2 id="vision-title">LET’S CHANGE CONSCIOUSNESS TOGETHER</h2>
        <p className="section-text">
          Learn the rules. Master your consciousness. Watch your life begin to reflect it.
        </p>
        <a className="journey-button" href="https://forms.gle/K69a3SocVbaKEbtM9" target="_blank" rel="noopener noreferrer">
          JOIN THE JOURNEY
        </a>
      </section>

      <section id="journey" className="section creator-section" aria-labelledby="creator-title">
        <div className="section-card">
          <p className="eyebrow">game channelled by</p>
          <h2 id="creator-title">REV. DR. JESSICA SIMMONDS</h2>
          <p className="section-text">
            EARTH SCHOOL blends simulation theory, spiritual growth, psychology, storytelling,
            immersive technology, and game design into a new kind of player experience.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>EARTH SCHOOL • A Temporary Human Experience</p>
        <p>Created by Rev. Dr. Jessica Simmonds</p>
        <nav className="footer-links" aria-label="Project links">
          <a className="footer-link" href="https://ca.linkedin.com/in/jessica-simmonds-aspire4" target="_blank" rel="noopener noreferrer">
            <FooterIcon name="linkedin" /> LinkedIn
          </a>
          <a className="footer-link" href="https://www.aspiritualwarriorspath.com" target="_blank" rel="noopener noreferrer">
            <FooterIcon name="website" /> A Spiritual Warrior&apos;s Path
          </a>
        </nav>
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
        .hero-content,
        .section-card,
        .glass-card,
        .video-frame {
          border: 1px solid var(--line);
          background: linear-gradient(145deg, rgba(13, 19, 50, .82), rgba(8, 10, 27, .54));
          box-shadow: 0 0 30px rgba(39, 216, 255, .13), inset 0 0 36px rgba(255, 79, 216, .06);
          backdrop-filter: blur(10px);
        }
        .hero-content {
          width: min(100%, 980px);
          margin: 0 auto;
          padding: clamp(1.25rem, 4vw, 3rem);
          border-radius: clamp(1.5rem, 4vw, 3rem);
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
        .hero-eyebrow { color: rgba(255, 255, 255, .9); }
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
          color: #ffffff;
          font-size: clamp(1rem, 2vw, 1.22rem);
          letter-spacing: .15em;
          text-transform: uppercase;
          text-shadow: 0 0 16px rgba(39, 216, 255, .55);
        }
        .hero-subheadline {
          margin: 1rem auto 0;
          color: #f9e7ff;
          font-size: clamp(1.15rem, 3.2vw, 2rem);
          letter-spacing: .18em;
          text-transform: uppercase;
        }
        .hero-quote { margin: 1.6rem auto 0; }
        .hero-quote blockquote {
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
        .awareness-statement {
          display: grid;
          gap: .2rem;
          max-width: 700px;
          margin: 1.7rem auto 0;
          padding: 1rem 1.25rem;
          border-block: 1px solid rgba(99, 229, 255, .46);
          color: #ffffff;
          font-size: clamp(1.05rem, 3vw, 1.72rem);
          font-weight: 900;
          letter-spacing: .15em;
          line-height: 1.28;
          text-align: center;
          text-shadow: 0 0 18px rgba(255, 79, 216, .78), 0 0 28px rgba(39, 216, 255, .56);
        }
        .section {
          width: min(100% - 2rem, 1180px);
          margin: 0 auto;
          padding: clamp(4.75rem, 9vw, 8rem) 0;
          text-align: center;
        }
        .video-frame {
          position: relative;
          width: min(100%, 920px);
          aspect-ratio: 16 / 9;
          margin: 2.3rem auto 0;
          overflow: hidden;
          border-radius: 2rem;
        }
        .video-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .highlight-list {
          display: grid;
          gap: .8rem;
          max-width: 900px;
          margin: 2rem auto 0;
          padding: 0;
          list-style: none;
          text-align: left;
        }
        .highlight-list li {
          position: relative;
          padding: .9rem 1rem .9rem 2.35rem;
          border: 1px solid rgba(99, 229, 255, .22);
          border-radius: .95rem;
          background: rgba(7, 14, 38, .58);
          color: var(--muted);
          line-height: 1.55;
        }
        .highlight-list li::before {
          content: "✦";
          position: absolute;
          left: 1rem;
          color: #ff9be8;
          text-shadow: 0 0 12px rgba(255, 79, 216, .62);
        }
        .grid { display: grid; gap: 1rem; margin-top: 2rem; }
        .systems-grid { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .glass-card {
          min-height: 12rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.35rem;
          border-radius: 1.3rem;
        }
        .glass-card p {
          margin: .85rem 0 0;
          color: var(--muted);
          line-height: 1.6;
        }
        .section-card {
          max-width: 980px;
          margin: 0 auto;
          padding: clamp(1.5rem, 5vw, 3.5rem);
          border-radius: 2rem;
        }
        .journey-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
          margin-top: 2rem;
          padding: .9rem 1.65rem;
          border: 1px solid rgba(255, 134, 232, .88);
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(255, 79, 216, .24), rgba(139, 92, 255, .32));
          box-shadow: 0 0 18px rgba(255, 79, 216, .36), 0 0 34px rgba(139, 92, 255, .28), inset 0 0 18px rgba(255, 255, 255, .08);
          color: #ffffff;
          font-size: .88rem;
          font-weight: 900;
          letter-spacing: .16em;
          text-decoration: none;
          text-shadow: 0 0 12px rgba(255, 79, 216, .82);
          transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease, background .22s ease;
        }
        .journey-button:hover,
        .journey-button:focus-visible {
          border-color: rgba(255, 189, 243, 1);
          background: linear-gradient(135deg, rgba(255, 79, 216, .38), rgba(139, 92, 255, .46));
          box-shadow: 0 0 24px rgba(255, 79, 216, .54), 0 0 46px rgba(139, 92, 255, .38), inset 0 0 20px rgba(255, 255, 255, .1);
          transform: translateY(-3px);
        }
        .footer {
          padding: 2.5rem 1rem 4.5rem;
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
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: .75rem;
          margin: 1.55rem auto 0;
        }
        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: .42rem;
          padding: .42rem .18rem;
          color: #dffbff;
          font-size: .78rem;
          font-weight: 800;
          letter-spacing: .06em;
          text-decoration: none;
          text-transform: uppercase;
          transition: color .2s ease;
        }
        a.footer-link:hover,
        a.footer-link:focus-visible { color: #ffb4ef; }
        .footer-icon { width: 1.1rem; height: 1.1rem; flex: 0 0 auto; }

        @media (min-width: 700px) {
          .systems-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @media (max-width: 560px) {
          .hero { padding: 5.5rem 1rem 3.75rem; }
          .hero-image { object-position: center top; }
          .hero-content { border-radius: 1.35rem; }
          .eyebrow { font-size: .68rem; letter-spacing: .18em; }
          .hero-subheadline { letter-spacing: .1em; }
          .section { width: min(100% - 1.25rem, 1180px); }
          .glass-card { min-height: 10rem; }
          .footer-links { display: grid; }
          .footer-link { justify-content: center; }
          .journey-button { width: min(100%, 20rem); padding-inline: 1rem; }
        }
      `}</style>
    </main>
  );
}
