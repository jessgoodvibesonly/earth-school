const platforms = ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile", "VR / XR"];

const experienceCards = [
  {
    title: "A STORY OF AWARENESS",
    copy: "Explore consciousness, identity, perception filters, and the choices that shape your human experience.",
  },
  {
    title: "LIVE THE EXPERIENCE",
    copy: "Explore a retro neon world filled with reflective characters, hidden truths, and environments designed to challenge how you see reality.",
  },
  {
    title: "EVOLVE THE SOUL",
    copy: "Every choice you make impacts your path, your relationships, and your level of awareness.",
  },
  {
    title: "TEMPORARY, BUT MEANINGFUL",
    copy: "Life is the classroom. Awareness is the key. The game is the mirror. You are the player.",
  },
];

const futureSystems = [
  "Meta Quest",
  "Apple Vision Pro",
  "VR",
  "AR",
  "XR",
  "AI companion systems",
  "spatial computing",
  "awareness-responsive environments",
];

const comingCards = [
  {
    title: "PRE-RENDERED CINEMATIC",
    copy: "Coming June 2026. A cinematic introduction into the world of EARTH SCHOOL.",
  },
  {
    title: "CHARACTER REVEALS",
    copy: "Meet the teachers, mirrors, guides, and souls you’ll encounter along your journey.",
  },
  {
    title: "BEHIND THE SCENES",
    copy: "Development updates, worldbuilding, music, art, cinematic progress, and more.",
  },
  {
    title: "COMMUNITY & COLLABORATION",
    copy: "Join the movement. Be part of the story. Help shape the experience.",
  },
];

export default function Page() {
  return (
    <main className="page-root">
      <section className="hero" aria-label="EARTH SCHOOL hero">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="scanlines" />

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">THE GAME</p>
            <h1>EARTH SCHOOL</h1>
            <p className="subheadline">A Temporary Human Experience</p>
            <blockquote>
              <p>“Can you see your own face right now?”</p>
              <cite>— Rev. Dr. Jessica Simmonds</cite>
            </blockquote>
            <p className="intro">
              EARTH SCHOOL is a cinematic consciousness-driven game experience exploring awareness, perception,
              identity, reality, and what it means to wake up inside the temporary human experience.
            </p>
            <div className="button-row">
              <a className="button primary" href="#what-is-earth-school">EXPLORE THE GAME</a>
              <a className="button secondary" href="#whats-coming">STAY UPDATED</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Neon diner EARTH SCHOOL key art">
            <img src="/EARTHSCHOOLnewimage.png" alt="EARTH SCHOOL neon cinematic diner scene" />
            <div className="visual-badge">NEON DINER / AWARENESS SHIFT</div>
          </div>
        </div>

        <div className="platform-bar" aria-label="Future platform direction">
          <div>
            <p className="platform-kicker">PLAY ANYWHERE</p>
            <p className="platform-copy">One experience. Every platform.</p>
          </div>
          <div className="platform-list">
            {platforms.map((platform) => (
              <span key={platform}>{platform}</span>
            ))}
          </div>
          <p className="progression">Your journey, everywhere.</p>
        </div>
      </section>

      <section id="cinematic" className="section cinematic-section">
        <div className="section-heading centered">
          <p className="eyebrow">PRE-RENDERED CINEMATIC</p>
          <h2>COMING SOON</h2>
          <p className="release-date">Target Release: June 2026</p>
          <p className="section-text">
            Our first cinematic look inside EARTH SCHOOL is currently in development, introducing the neon diner,
            the awareness shift, the evolving perception system, and the beginning of the temporary human experience.
          </p>
        </div>
        <div className="video-card" aria-label="Pre-rendered cinematic coming soon placeholder">
          <div className="video-frame">
            <p>PRE-RENDERED CINEMATIC</p>
            <strong>COMING SOON</strong>
            <span>JUNE 2026</span>
          </div>
        </div>
      </section>

      <section id="what-is-earth-school" className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">WHAT IS EARTH SCHOOL?</p>
          <h2>Part game. Part experience. Part reflection.</h2>
        </div>
        <p className="section-text large">
          EARTH SCHOOL blends cinematic storytelling, immersive technology, psychology, spirituality,
          awareness-based progression, and future XR/VR systems.
        </p>
      </section>

      <section className="section soul-section">
        <div className="section-heading centered">
          <p className="eyebrow">EVOLVE THE SOUL</p>
          <h2>Progression is awareness.</h2>
          <p className="section-text">
            In EARTH SCHOOL, progression is not only about skill. It is about awareness. Players evolve through
            perception, choices, boundaries, creativity, emotional awareness, observation, authenticity, and conscious action.
          </p>
        </div>
        <div className="grid four">
          {experienceCards.map((card) => (
            <article className="neon-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section evolving-section">
        <div className="evolving-panel">
          <div className="section-heading">
            <p className="eyebrow">THE EXPERIENCE IS EVOLVING</p>
            <h2>A future cross-platform immersive experience.</h2>
          </div>
          <p className="section-text">
            EARTH SCHOOL is being designed as a future cross-platform immersive experience spanning cinematic
            storytelling, XR, VR, spatial computing, AI interaction, immersive audio, and awareness-based gameplay.
          </p>
          <div className="chip-wrap">
            {futureSystems.map((system) => (
              <span className="chip" key={system}>{system}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="whats-coming" className="section">
        <div className="section-heading centered">
          <p className="eyebrow">WHAT’S COMING</p>
          <h2>New portals are opening.</h2>
        </div>
        <div className="grid four">
          {comingCards.map((card) => (
            <article className="neon-card compact" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <p className="eyebrow">JOIN THE JOURNEY</p>
        <h2>The classroom is opening.</h2>
        <p className="section-text">
          Step into the neon, follow the signal, and become part of the EARTH SCHOOL community as the cinematic,
          game world, characters, and immersive systems come online.
        </p>
        <div className="button-row">
          <a className="button primary" href="mailto:info@earthschool.world?subject=EARTH%20SCHOOL%20Pre-Registration">PRE-REGISTER NOW</a>
          <a className="button secondary" href="mailto:info@earthschool.world?subject=EARTH%20SCHOOL%20Synergy%20Call">JOIN THE SYNERGY CALL</a>
        </div>
      </section>

      <footer className="footer">
        <p>EARTH SCHOOL • A Temporary Human Experience</p>
        <p>“Can you see your own face right now?”</p>
        <p>— Rev. Dr. Jessica Simmonds</p>
      </footer>

      <style>{`
        :root {
          color-scheme: dark;
          --bg: #030411;
          --navy: #070a1e;
          --pink: #ff2bd6;
          --purple: #9b4dff;
          --blue: #2ee8ff;
          --gold: #ffd28a;
          --text: #f8f4ff;
          --muted: #c8c5e7;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; background: var(--bg); }
        body { margin: 0; background: var(--bg); }

        .page-root {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at 18% 6%, rgba(255, 43, 214, .28), transparent 26rem),
            radial-gradient(circle at 84% 12%, rgba(46, 232, 255, .24), transparent 25rem),
            radial-gradient(circle at 50% 42%, rgba(155, 77, 255, .18), transparent 32rem),
            linear-gradient(180deg, #030411 0%, #07091c 38%, #030411 100%);
        }

        .page-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: .24;
          background-image:
            linear-gradient(rgba(255, 255, 255, .045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, .035) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(180deg, transparent, black 18%, black 72%, transparent);
        }

        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 4rem 1rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          isolation: isolate;
        }

        .ambient {
          position: absolute;
          border-radius: 999px;
          filter: blur(20px);
          opacity: .72;
          pointer-events: none;
          z-index: -2;
        }

        .ambient-one {
          width: 34rem;
          height: 34rem;
          left: -12rem;
          top: 8rem;
          background: radial-gradient(circle, rgba(255, 43, 214, .46), transparent 68%);
        }

        .ambient-two {
          width: 35rem;
          height: 35rem;
          right: -11rem;
          top: 4rem;
          background: radial-gradient(circle, rgba(46, 232, 255, .34), transparent 68%);
        }

        .scanlines {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .15;
          pointer-events: none;
          background: repeating-linear-gradient(180deg, rgba(255, 255, 255, .18) 0 1px, transparent 1px 6px);
        }

        .hero-grid {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          align-items: center;
          gap: 2rem;
        }

        .hero-copy { text-align: center; }
        .eyebrow {
          margin: 0 0 .9rem;
          color: var(--blue);
          font-size: .78rem;
          font-weight: 800;
          letter-spacing: .28em;
          text-transform: uppercase;
          text-shadow: 0 0 14px rgba(46, 232, 255, .8);
        }

        h1, h2, h3, p { overflow-wrap: anywhere; }
        h1 {
          margin: 0;
          font-size: clamp(3.4rem, 13vw, 9rem);
          line-height: .84;
          letter-spacing: .035em;
          text-transform: uppercase;
          text-shadow:
            0 0 14px rgba(255, 43, 214, .9),
            0 0 36px rgba(155, 77, 255, .7),
            0 0 70px rgba(46, 232, 255, .32);
        }

        h2 {
          margin: 0;
          font-size: clamp(2.1rem, 6vw, 4.8rem);
          line-height: .95;
          letter-spacing: -.04em;
          text-transform: uppercase;
          text-shadow: 0 0 28px rgba(255, 43, 214, .35);
        }

        h3 {
          margin: 0 0 .8rem;
          color: #ffffff;
          font-size: 1.02rem;
          letter-spacing: .08em;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .subheadline {
          margin: 1.1rem 0 0;
          color: var(--gold);
          font-size: clamp(1.15rem, 3vw, 1.8rem);
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        blockquote {
          width: min(720px, 100%);
          margin: 1.5rem auto 0;
          padding: 1rem;
          border: 1px solid rgba(255, 43, 214, .28);
          border-radius: 22px;
          background: linear-gradient(120deg, rgba(255, 43, 214, .12), rgba(46, 232, 255, .08));
          box-shadow: inset 0 0 24px rgba(255, 43, 214, .08), 0 0 34px rgba(46, 232, 255, .08);
        }

        blockquote p {
          margin: 0;
          font-size: clamp(1.05rem, 2.8vw, 1.45rem);
          color: #fff;
        }

        cite {
          display: block;
          margin-top: .4rem;
          color: var(--muted);
          font-style: normal;
        }

        .intro, .section-text {
          width: min(780px, 100%);
          margin: 1.25rem auto 0;
          color: var(--muted);
          font-size: clamp(1rem, 2vw, 1.13rem);
          line-height: 1.75;
        }

        .large { font-size: clamp(1.2rem, 2.8vw, 1.7rem); }

        .button-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: .9rem;
          margin-top: 1.7rem;
        }

        .button {
          width: 100%;
          max-width: 26rem;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.35rem;
          padding: .9rem 1.3rem;
          border-radius: 999px;
          color: #fff;
          font-weight: 900;
          letter-spacing: .11em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }

        .button.primary {
          border: 1px solid rgba(255, 43, 214, .7);
          background: linear-gradient(100deg, rgba(255, 43, 214, .95), rgba(155, 77, 255, .82) 52%, rgba(46, 232, 255, .78));
          box-shadow: 0 0 24px rgba(255, 43, 214, .42), 0 0 44px rgba(46, 232, 255, .18);
        }

        .button.secondary {
          border: 1px solid rgba(46, 232, 255, .7);
          background: rgba(4, 8, 26, .76);
          box-shadow: inset 0 0 22px rgba(46, 232, 255, .14), 0 0 24px rgba(46, 232, 255, .22);
        }

        .button:hover {
          transform: translateY(-3px) scale(1.015);
          box-shadow: 0 0 30px rgba(255, 43, 214, .46), 0 0 58px rgba(46, 232, 255, .28);
        }

        .hero-visual {
          position: relative;
          padding: .55rem;
          border: 1px solid rgba(46, 232, 255, .45);
          border-radius: 30px;
          background: linear-gradient(145deg, rgba(255, 43, 214, .22), rgba(46, 232, 255, .12));
          box-shadow: 0 0 42px rgba(255, 43, 214, .23), 0 0 60px rgba(46, 232, 255, .16);
          transform: perspective(1200px) rotateX(0deg);
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .hero-visual:hover {
          transform: perspective(1200px) rotateX(2deg) translateY(-5px);
          box-shadow: 0 0 54px rgba(255, 43, 214, .32), 0 0 84px rgba(46, 232, 255, .24);
        }

        .hero-visual img {
          display: block;
          width: 100%;
          min-height: 22rem;
          max-height: 44rem;
          object-fit: cover;
          border-radius: 24px;
          filter: saturate(1.2) contrast(1.08);
        }

        .visual-badge {
          position: absolute;
          right: 1rem;
          bottom: 1rem;
          max-width: calc(100% - 2rem);
          padding: .65rem .85rem;
          border: 1px solid rgba(255, 255, 255, .22);
          border-radius: 999px;
          color: #fff;
          font-size: .72rem;
          font-weight: 900;
          letter-spacing: .12em;
          background: rgba(4, 6, 18, .72);
          backdrop-filter: blur(14px);
          box-shadow: 0 0 18px rgba(255, 43, 214, .26);
        }

        .platform-bar {
          width: min(1180px, 100%);
          margin: 0 auto;
          padding: 1.1rem;
          border: 1px solid rgba(46, 232, 255, .32);
          border-radius: 26px;
          background: rgba(4, 8, 24, .74);
          box-shadow: inset 0 0 34px rgba(255, 43, 214, .09), 0 0 38px rgba(46, 232, 255, .1);
          backdrop-filter: blur(18px);
        }

        .platform-kicker, .platform-copy, .progression { margin: 0; text-align: center; }
        .platform-kicker { color: var(--pink); font-weight: 950; letter-spacing: .22em; font-size: .76rem; }
        .platform-copy { margin-top: .25rem; color: #fff; font-size: 1.1rem; }
        .progression { margin-top: 1rem; color: var(--gold); font-weight: 800; letter-spacing: .06em; }

        .platform-list, .chip-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: .65rem;
          margin-top: 1rem;
        }

        .platform-list span, .chip {
          display: inline-flex;
          align-items: center;
          min-height: 2.45rem;
          padding: .58rem .82rem;
          border: 1px solid rgba(46, 232, 255, .42);
          border-radius: 999px;
          color: #e9fcff;
          background: linear-gradient(110deg, rgba(255, 43, 214, .12), rgba(46, 232, 255, .1));
          box-shadow: inset 0 0 18px rgba(46, 232, 255, .08);
          font-weight: 750;
          font-size: .9rem;
        }

        .section {
          position: relative;
          width: min(1180px, 100%);
          margin: 0 auto;
          padding: 5rem 1rem;
        }

        .section-heading.centered { text-align: center; }
        .centered .section-text { margin-left: auto; margin-right: auto; }
        .release-date { margin: 1rem 0 0; color: var(--gold); font-weight: 900; letter-spacing: .09em; text-align: center; text-transform: uppercase; }

        .cinematic-section { padding-top: 4rem; }
        .video-card {
          width: min(940px, 100%);
          margin: 2rem auto 0;
          padding: .7rem;
          border-radius: 34px;
          border: 1px solid rgba(255, 43, 214, .45);
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 43, 214, .26), transparent 42%),
            radial-gradient(circle at 70% 70%, rgba(46, 232, 255, .2), transparent 42%),
            rgba(4, 8, 26, .86);
          box-shadow: 0 0 48px rgba(255, 43, 214, .2), 0 0 70px rgba(46, 232, 255, .13);
        }

        .video-frame {
          min-height: 20rem;
          display: grid;
          place-items: center;
          align-content: center;
          gap: .85rem;
          border-radius: 27px;
          border: 1px solid rgba(255, 255, 255, .14);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, .08), transparent),
            repeating-linear-gradient(90deg, rgba(46, 232, 255, .12) 0 1px, transparent 1px 30px),
            linear-gradient(145deg, rgba(7, 9, 30, .76), rgba(28, 8, 42, .82));
          text-align: center;
        }

        .video-frame p, .video-frame span { margin: 0; color: var(--blue); font-weight: 900; letter-spacing: .2em; }
        .video-frame strong {
          font-size: clamp(2.6rem, 10vw, 7rem);
          line-height: .9;
          letter-spacing: .04em;
          color: #fff;
          text-shadow: 0 0 18px rgba(255, 43, 214, .9), 0 0 42px rgba(46, 232, 255, .42);
        }

        .split-section {
          display: grid;
          gap: 1.5rem;
          align-items: end;
        }

        .grid { display: grid; gap: 1rem; margin-top: 2rem; }
        .four { grid-template-columns: 1fr; }

        .neon-card, .evolving-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 43, 214, .28);
          border-radius: 24px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, .09), rgba(255, 255, 255, .025)),
            rgba(4, 8, 26, .78);
          box-shadow: 0 18px 54px rgba(0, 0, 0, .34), inset 0 0 28px rgba(46, 232, 255, .06);
          backdrop-filter: blur(16px);
        }

        .neon-card {
          min-height: 15rem;
          padding: 1.35rem;
          transition: transform .24s ease, border-color .24s ease, box-shadow .24s ease;
        }

        .neon-card::before, .evolving-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .55;
          pointer-events: none;
          background: radial-gradient(circle at 18% 0%, rgba(255, 43, 214, .2), transparent 34%), radial-gradient(circle at 100% 20%, rgba(46, 232, 255, .18), transparent 30%);
        }

        .neon-card > *, .evolving-panel > * { position: relative; }
        .neon-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .neon-card:hover {
          transform: translateY(-7px);
          border-color: rgba(46, 232, 255, .66);
          box-shadow: 0 18px 58px rgba(0, 0, 0, .36), 0 0 30px rgba(255, 43, 214, .22), 0 0 44px rgba(46, 232, 255, .16);
        }

        .neon-card.compact { min-height: 13rem; }

        .evolving-panel {
          padding: clamp(1.35rem, 5vw, 3rem);
          border-color: rgba(46, 232, 255, .36);
        }

        .evolving-panel .section-text { margin-left: 0; }
        .evolving-panel .chip-wrap { justify-content: flex-start; margin-top: 1.35rem; }

        .final-cta {
          width: min(980px, calc(100% - 2rem));
          margin-bottom: 3rem;
          padding: clamp(2rem, 7vw, 4rem) 1rem;
          text-align: center;
          border: 1px solid rgba(255, 43, 214, .35);
          border-radius: 34px;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 43, 214, .22), transparent 38%),
            radial-gradient(circle at 50% 100%, rgba(46, 232, 255, .16), transparent 44%),
            rgba(4, 8, 26, .76);
          box-shadow: 0 0 56px rgba(255, 43, 214, .14), inset 0 0 34px rgba(46, 232, 255, .06);
        }

        .footer {
          width: 100%;
          padding: 2.4rem 1rem 3rem;
          border-top: 1px solid rgba(46, 232, 255, .22);
          color: var(--muted);
          text-align: center;
          background: linear-gradient(180deg, rgba(3, 4, 17, .3), rgba(3, 4, 17, .92));
        }

        .footer p { margin: .35rem 0; }
        .footer p:first-child { color: #fff; font-weight: 900; letter-spacing: .09em; }

        @media (min-width: 640px) {
          .hero { padding-inline: 1.4rem; }
          .button { width: auto; }
          .platform-bar { padding: 1.3rem; }
          .four { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .video-frame { min-height: 27rem; }
        }

        @media (min-width: 980px) {
          .hero-grid { grid-template-columns: minmax(0, .9fr) minmax(28rem, 1.1fr); }
          .hero-copy { text-align: left; }
          .hero-copy .intro, .hero-copy blockquote { margin-left: 0; }
          .hero-copy .button-row { justify-content: flex-start; }
          .platform-bar {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            gap: 1.2rem;
          }
          .platform-kicker, .platform-copy, .progression { text-align: left; }
          .progression { margin-top: 0; text-align: right; }
          .platform-list { margin-top: 0; justify-content: center; }
          .section { padding: 6.5rem 1.4rem; }
          .split-section { grid-template-columns: .85fr 1fr; }
          .split-section .section-text { margin: 0; }
          .four { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        @media (max-width: 420px) {
          .hero { padding-top: 2.5rem; }
          h1 { font-size: clamp(3rem, 17vw, 4.4rem); }
          .hero-visual img { min-height: 18rem; }
          .visual-badge { position: static; margin-top: .55rem; width: 100%; text-align: center; }
          .video-frame { min-height: 17rem; padding: 1rem; }
        }
      `}</style>
    </main>
  );
}
