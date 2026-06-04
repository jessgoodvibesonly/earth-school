const platforms = [
  "PC",
  "Console",
  "Mobile",
  "VR",
  "XR",
  "Spatial Computing",
  "AI Companion Systems",
];

const awarenessFeatures = [
  "PERCEPTION",
  "IDENTITY",
  "AWARENESS",
  "CHOICE",
  "ENVIRONMENT",
  "RELATIONSHIPS",
];

const experienceThemes = [
  "perception",
  "awareness",
  "identity",
  "environment",
  "habits",
  "relationships",
  "creativity",
  "choice",
];

const collaboratorTypes = [
  "Unreal Engine Developers",
  "XR / VR Developers",
  "AI Engineers",
  "Game Designers",
  "Musicians",
  "Sound Designers",
  "Artists",
  "Researchers",
  "Investors",
  "Strategic Partners",
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

const foundationalModel = [
  ["Awareness", "The observer noticing the temporary human experience from within it."],
  ["Filter", "The lens through which reality is perceived, interpreted, and emotionally colored."],
  ["Vessel", "The body and character moving through the world, making choices, and interacting."],
  ["Experience", "Created through awareness, perception, choice, environment, and interaction."],
];

const earthSchoolSystems = [
  {
    title: "THE FILTER SYSTEM",
    kicker: "Reality is not simply seen. It is filtered.",
    text: "The player’s Filter affects visuals, lighting, sound, dialogue, opportunities, choices, and emotional interpretation.",
  },
  {
    title: "THE ENVIRONMENT SYSTEM",
    kicker: "Environment shapes the player more than motivation alone.",
    text: "Locations such as the diner, forest, city, home, and vehicles affect awareness, emotion, habits, perception, and available choices.",
  },
  {
    title: "AWARENESS AS PROGRESSION",
    kicker: "Awareness replaces traditional XP.",
    text: "Players progress by noticing patterns, loops, synchronicities, recurring lessons, emotional states, and hidden opportunities.",
  },
  {
    title: "ATTENTION IS CURRENCY",
    kicker: "Focus becomes a worldbuilding force.",
    text: "What the player repeatedly focuses on begins to shape what appears, expands, or becomes available in the experience.",
  },
  {
    title: "THE BOUNDARY SYSTEM",
    kicker: "Boundaries are a core leveling mechanic.",
    text: "Healthy boundaries affect energy, relationships, clarity, confidence, and awareness.",
  },
  {
    title: "THE LOOP SYSTEM",
    kicker: "Reality repeats until it is seen.",
    text: "Recurring events, conversations, symbols, and lessons return until the player’s awareness shifts.",
  },
  {
    title: "THE MIRROR CHARACTER SYSTEM",
    kicker: "Some characters do not teach directly. They reflect.",
    text: "Mrs. Chen is a mirror character. She reveals what the player is ready to notice.",
  },
];

const archetypes = [
  "Hero",
  "Sage",
  "Caregiver",
  "Explorer",
  "Creator",
  "Innocent",
  "Rebel",
  "Magician",
  "Lover",
  "Ruler",
  "Jester",
  "Everyperson",
  "Mirror",
  "Challenger",
  "Messenger",
  "Awakener",
  "Guardian",
  "Builder",
  "Observer",
  "Catalyst",
  "Teacher",
  "Student",
  "Wanderer",
  "Boundary Keeper",
  "Alchemist",
  "Healer",
  "Trickster",
  "Ally",
];

const hudElements = [
  ["Current Filter", "Curiosity"],
  ["Awareness", "63%"],
  ["Environment Influence", "+12%"],
  ["Attention Focus", "Creation"],
  ["Coherence", "High"],
  ["Recurring Lesson", "Boundaries"],
  ["Active Archetype", "Builder"],
  ["Loop Status", "In Progress"],
  ["Connection", "Mrs. Chen"],
];

const laws = [
  "The Law of Attention",
  "The Law of Environment",
  "The Law of Reflection",
  "The Law of Boundaries",
  "The Law of Creation",
  "The Law of Repetition",
  "The Law of Authenticity",
  "The Law of Connection",
  "The Law of Compassion",
];

const awarenessLevels = [
  "The Sleeper",
  "The Observer",
  "The Questioner",
  "The Explorer",
  "The Creator",
  "The Curator",
  "The Guide",
  "The Architect",
];

const futureExpansions = [
  "Expansion packs such as The Memory Veil, The Galactic Classroom, Dream Realms, and The Alchemist Expansion",
  "Cosmetic customization such as retro diner themes, neon vehicles, clothing, apartments, awareness effects, and personal spaces",
  "Premium reflection journal/vault",
  "Optional community spaces and live events",
  "Companion mobile/AR app with daily awareness prompts",
  "Future creator marketplace for awareness journeys, environments, stories, and reflective experiences",
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
        <img
          className="hero-image"
          src="/EARTHSCHOOLnewimage.png"
          alt="EARTH SCHOOL neon diner cinematic key art"
        />
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
          <div className="hero-copy">
            <p>EARTH SCHOOL is a cross-platform VR/XR experience where awareness shapes reality.</p>
            <p>Players don&apos;t just play.</p>
            <p className="hero-copy-beats">They observe.<br />They choose.<br />They reflect.</p>
            <p>And the world responds.</p>
          </div>
          <p className="awareness-statement">
            <span>AWARENESS IS THE INPUT.</span>
            <span>REALITY IS THE INTERFACE.</span>
          </p>
        </div>
      </section>

      <section id="game" className="section controller-section" aria-labelledby="controller-title">
        <p className="eyebrow">a new way to play</p>
        <h2 id="controller-title">WHAT IF AWARENESS WAS THE CONTROLLER?</h2>
        <p className="section-text">
          EARTH SCHOOL combines neuroscience, consciousness, storytelling, immersive technology,
          and interactive gameplay.
        </p>
        <p className="section-text small-heading">The experience explores:</p>
        <ul className="theme-grid experience-theme-grid">
          {experienceThemes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
        <div className="reflection-copy">
          <p>Players evolve through observation, reflection, and action.</p>
          <p>The goal is not simply to complete objectives.</p>
          <p className="reflection-emphasis">The goal is to become aware.</p>
        </div>
        <div className="grid awareness-grid" aria-label="Core EARTH SCHOOL experience features">
          {awarenessFeatures.map((feature) => (
            <article className="awareness-card" key={feature}>
              <h3>{feature}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="collaborators" className="section collaborators-section" aria-labelledby="collaborators-title">
        <div className="section-card collaborators-card">
          <p className="eyebrow">build the experience with us</p>
          <h2 id="collaborators-title">LOOKING FOR COLLABORATORS</h2>
          <p className="section-text">
            EARTH SCHOOL is actively seeking collaborators who are excited about building something
            that blends technology, storytelling, neuroscience, consciousness, and interactive experiences.
          </p>
          <p className="section-text small-heading">We would love to connect with:</p>
          <ul className="collaborator-grid">
            {collaboratorTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section vision-section" aria-labelledby="vision-title">
        <p className="eyebrow">project vision</p>
        <h2 id="vision-title">A DIFFERENT KIND OF GAME</h2>
        <div className="vision-questions">
          <p>What if reality responded to awareness?</p>
          <p>What if perception changed the world around you?</p>
          <p>What if your environment shaped your experience more than motivation ever could?</p>
        </div>
        <p className="section-text">
          EARTH SCHOOL explores these questions through a cinematic interactive experience designed
          to challenge how players think about identity, consciousness, and the human experience.
        </p>
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

      <section className="section" aria-labelledby="game-title">
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

      <section id="how-earth-school-works" className="section systems-section" aria-labelledby="systems-title">
        <p className="eyebrow">hidden systems behind the human experience</p>
        <h2 id="systems-title">HOW EARTH SCHOOL WORKS</h2>
        <p className="section-text strong">The hidden systems behind the temporary human experience.</p>

        <div className="systems-block foundational-block" aria-labelledby="foundational-title">
          <p className="eyebrow mini-eyebrow">core model</p>
          <h3 id="foundational-title">THE FOUNDATIONAL MODEL</h3>
          <p className="model-flow" aria-label="Awareness to Filter to Vessel to Experience">
            <span>Awareness</span>
            <b aria-hidden="true">→</b>
            <span>Filter</span>
            <b aria-hidden="true">→</b>
            <span>Vessel</span>
            <b aria-hidden="true">→</b>
            <span>Experience</span>
          </p>
          <div className="systems-grid foundational-grid">
            {foundationalModel.map(([title, text]) => (
              <article className="system-card" key={title}>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="systems-grid systems-card-grid" aria-label="Core EARTH SCHOOL hidden systems">
          {earthSchoolSystems.map((system) => (
            <article className="system-card" key={system.title}>
              <h3>{system.title}</h3>
              <p className="system-kicker">{system.kicker}</p>
              <p>{system.text}</p>
            </article>
          ))}
        </div>

        <div className="systems-block" aria-labelledby="archetype-title">
          <p className="eyebrow mini-eyebrow">identity in motion</p>
          <h3 id="archetype-title">THE ARCHETYPE SYSTEM</h3>
          <p className="section-text">
            Archetypes are inspired by Jungian, mythic, storytelling, behavioral, and EARTH SCHOOL-specific systems.
          </p>
          <div className="archetype-cloud" aria-label="EARTH SCHOOL archetypes">
            {archetypes.map((archetype) => (
              <span key={archetype}>{archetype}</span>
            ))}
          </div>
          <p className="section-text">
            Players are not locked into one archetype. They move through archetypes as they evolve.
          </p>
        </div>

        <div className="systems-split">
          <article className="system-card tall-card" aria-labelledby="behavior-title">
            <p className="eyebrow mini-eyebrow">supportive pattern recognition</p>
            <h3 id="behavior-title">THE BEHAVIOR PATTERN SYSTEM</h3>
            <p>
              Inspired by ethical behavioral observation, EARTH SCHOOL may reflect repeated choices,
              avoidance patterns, emotional states, identity loops, reactions, and recurring behaviors
              back to the player in a supportive way.
            </p>
            <p>
              This is not framed as manipulation. It is awareness and pattern recognition: a way to
              help players notice what keeps returning and choose with more clarity.
            </p>
          </article>

          <article className="system-card hud-card" aria-labelledby="hud-title">
            <p className="eyebrow mini-eyebrow">perception overlay</p>
            <h3 id="hud-title">THE FILTER INTERFACE / HUD</h3>
            <p>
              HUD means Heads-Up Display. In EARTH SCHOOL, the HUD is an in-world perception overlay
              seen through John’s glasses or awareness tools.
            </p>
            <dl className="hud-readout" aria-label="Sample EARTH SCHOOL HUD text">
              {hudElements.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>

        <div className="systems-block laws-block" aria-labelledby="laws-title">
          <p className="eyebrow mini-eyebrow">operating principles</p>
          <h3 id="laws-title">THE LAWS OF EARTH SCHOOL</h3>
          <div className="law-grid">
            {laws.map((law) => (
              <span key={law}>{law}</span>
            ))}
          </div>
        </div>

        <div className="systems-block awareness-levels-block" aria-labelledby="levels-title">
          <p className="eyebrow mini-eyebrow">progression map</p>
          <h3 id="levels-title">AWARENESS LEVELS</h3>
          <ol className="level-map">
            {awarenessLevels.map((level) => (
              <li key={level}>{level}</li>
            ))}
          </ol>
          <p className="section-text strong">
            The player is not becoming more powerful. The player is becoming more aware.
          </p>
        </div>

        <div className="systems-block expansion-block" aria-labelledby="expansion-title">
          <p className="eyebrow mini-eyebrow">future ecosystem</p>
          <h3 id="expansion-title">FUTURE EXPERIENCE EXPANSIONS</h3>
          <ul className="expansion-list">
            {futureExpansions.map((expansion) => (
              <li key={expansion}>{expansion}</li>
            ))}
          </ul>
          <p className="section-text monetization-note">
            EARTH SCHOOL will avoid pay-to-win mechanics. Future monetization should support creativity,
            personalization, community, and deeper participation.
          </p>
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
          <div className="creator-section" aria-labelledby="creator-title">
            <a
              className="creator-portrait"
              href="https://jessgoodvibesonly.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Jessica Simmonds at JessGoodVibesOnly (opens in a new tab)"
            >
              <span>JESS</span>
            </a>
            <a
              className="creator-profile-link"
              href="https://jessgoodvibesonly.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              VISIT JESSGOODVIBESONLY →
            </a>
            <p className="eyebrow">the vision behind the experience</p>
            <h2 id="creator-title">MEET THE CREATOR</h2>
            <p className="creator-name">Rev. Dr. Jessica Simmonds</p>
            <div className="creator-copy">
              <p>
                EARTH SCHOOL was created by Rev. Dr. Jessica Simmonds, an entrepreneur, published
                author, clinical hypnotherapist, spiritual life coach, educator, artist, speaker,
                and founder of multiple ventures focused on human potential, creativity,
                consciousness, and transformation.
              </p>
              <p>
                For decades, Jessica has explored the intersection of neuroscience, awareness,
                spirituality, psychology, immersive technology, and personal growth.
              </p>
              <p>
                EARTH SCHOOL is the culmination of those explorations — a cross-platform experience
                designed to challenge how we think about perception, identity, reality, and the
                human experience itself.
              </p>
            </div>
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
        <section className="project-connect" aria-labelledby="project-connect-title">
          <h2 id="project-connect-title">CONNECT WITH THE PROJECT</h2>
          <nav className="footer-links" aria-label="Verified project links">
            <a className="footer-link" href="https://ca.linkedin.com/in/jessica-simmonds-aspire4" target="_blank" rel="noopener noreferrer">
              <FooterIcon name="linkedin" /> LinkedIn (Jessica Simmonds)
            </a>
            <a className="footer-link" href="https://www.aspiritualwarriorspath.com" target="_blank" rel="noopener noreferrer">
              <FooterIcon name="website" /> A Spiritual Warrior&apos;s Path
            </a>
          </nav>
          <div className="project-cta">
            <a
              className="journey-button"
              href="https://forms.gle/K69a3SocVbaKEbtM9"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN THE JOURNEY
            </a>
            <p className="journey-note">
              Join fellow creators, developers, researchers, artists, and explorers helping shape EARTH SCHOOL.
            </p>
          </div>
        </section>
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
          width: min(100%, 980px);
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
        .hero-eyebrow {
          max-width: 100%;
          margin-inline: auto;
          color: rgba(255, 255, 255, .9);
          font-size: clamp(.58rem, 1.6vw, .76rem);
          letter-spacing: clamp(.2em, .7vw, .34em);
          text-align: center;
          text-shadow: 0 0 10px rgba(255, 255, 255, .32);
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
        .hero-quote { margin: 1.6rem auto 0; }
        .hero-quote blockquote,
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
        .section-text {
          max-width: 820px;
          margin: 1.15rem auto 0;
          color: var(--muted);
          font-size: clamp(1rem, 1.8vw, 1.18rem);
          line-height: 1.75;
          text-align: center;
        }
        .strong { color: #ffffff; font-weight: 750; }
        .hero-copy {
          max-width: 760px;
          margin: 1.65rem auto 0;
          color: var(--muted);
          font-size: clamp(1rem, 1.8vw, 1.16rem);
          line-height: 1.65;
          text-align: center;
        }
        .hero-copy p { margin: .55rem 0 0; }
        .hero-copy p:first-child { margin-top: 0; }
        .hero-copy-beats { color: #ffffff; font-weight: 750; letter-spacing: .08em; }
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
        .section.narrow { width: min(100% - 2rem, 980px); }
        .controller-section { padding-top: clamp(5.75rem, 10vw, 9rem); }
        .reflection-copy,
        .vision-questions {
          display: grid;
          gap: .55rem;
          max-width: 820px;
          margin: 2rem auto 0;
        }
        .reflection-copy p,
        .vision-questions p {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.05rem, 2vw, 1.3rem);
          line-height: 1.55;
          text-align: center;
        }
        .reflection-emphasis {
          color: #bff6ff !important;
          font-weight: 900;
          letter-spacing: .06em;
          text-shadow: 0 0 18px rgba(39, 216, 255, .44);
          text-transform: uppercase;
        }
        .section-card,
        .glass-card,
        .system-card,
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
        .pillars-grid,
        .awareness-grid { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .awareness-grid { gap: 1.15rem; margin-top: 3rem; }
        .awareness-card {
          min-height: 9rem;
          display: grid;
          place-items: center;
          padding: 1rem;
          border: 1px solid rgba(99, 229, 255, .38);
          border-radius: 1.15rem;
          background: linear-gradient(145deg, rgba(13, 19, 50, .72), rgba(8, 10, 27, .5));
          box-shadow: 0 0 22px rgba(39, 216, 255, .11), inset 0 0 25px rgba(255, 79, 216, .05);
          cursor: default;
          text-align: center;
        }
        .awareness-card h3 { text-shadow: 0 0 16px rgba(39, 216, 255, .62), 0 0 20px rgba(255, 79, 216, .34); }
        .collaborators-card { max-width: 1040px; margin: 0 auto; }
        .collaborator-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: .7rem;
          max-width: 850px;
          margin: 1.4rem auto 0;
          padding: 0;
          list-style: none;
        }
        .collaborator-grid li {
          padding: .68rem .85rem;
          border: 1px solid rgba(99, 229, 255, .25);
          border-radius: .75rem;
          background: rgba(7, 14, 38, .48);
          color: #e9fbff;
          font-size: .94rem;
          letter-spacing: .04em;
        }
        .vision-section { width: min(100% - 2rem, 980px); }
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
        .systems-section {
          width: min(100% - 1.5rem, 1240px);
          position: relative;
          isolation: isolate;
        }
        .systems-section::before {
          content: "";
          position: absolute;
          inset: 2rem -4vw auto;
          z-index: -1;
          height: min(58rem, 64%);
          background:
            radial-gradient(circle at 18% 10%, rgba(255, 79, 216, .2), transparent 28rem),
            radial-gradient(circle at 85% 28%, rgba(39, 216, 255, .18), transparent 30rem),
            linear-gradient(180deg, rgba(11, 16, 42, .42), transparent);
          filter: blur(4px);
        }
        .systems-block {
          margin: clamp(2.25rem, 5vw, 4rem) auto 0;
          padding: clamp(1.35rem, 4vw, 2.65rem);
          border: 1px solid rgba(99, 229, 255, .3);
          border-radius: 1.8rem;
          background: linear-gradient(180deg, rgba(8, 13, 35, .72), rgba(5, 8, 24, .48));
          box-shadow: inset 0 0 32px rgba(255, 79, 216, .05), 0 0 34px rgba(39, 216, 255, .1);
        }
        .foundational-block { max-width: 1040px; }
        .mini-eyebrow {
          margin-bottom: .75rem;
          font-size: .68rem;
          letter-spacing: .22em;
        }
        .systems-block h3,
        .system-card h3 {
          color: #ffffff;
          text-shadow: 0 0 18px rgba(255, 79, 216, .42), 0 0 22px rgba(39, 216, 255, .32);
        }
        .system-card h4 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(.95rem, 1.8vw, 1.12rem);
          letter-spacing: .14em;
          text-transform: uppercase;
          text-shadow: 0 0 14px rgba(39, 216, 255, .5);
        }
        .model-flow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: .7rem;
          margin: 1.6rem auto 0;
          color: #ffffff;
          font-size: clamp(1.05rem, 3vw, 1.9rem);
          font-weight: 900;
          letter-spacing: .08em;
          line-height: 1.35;
          text-transform: uppercase;
        }
        .model-flow span {
          padding: .54rem .78rem;
          border: 1px solid rgba(255, 134, 232, .46);
          border-radius: 999px;
          background: rgba(7, 14, 38, .68);
          box-shadow: 0 0 18px rgba(255, 79, 216, .16);
        }
        .model-flow b { color: #8ff2ff; text-shadow: 0 0 14px rgba(39, 216, 255, .72); }
        .systems-grid { display: grid; gap: 1rem; }
        .foundational-grid {
          grid-template-columns: repeat(1, minmax(0, 1fr));
          margin-top: 1.6rem;
        }
        .systems-card-grid {
          grid-template-columns: repeat(1, minmax(0, 1fr));
          margin-top: 1.3rem;
        }
        .system-card {
          padding: clamp(1.1rem, 3vw, 1.65rem);
          border-radius: 1.25rem;
          text-align: left;
        }
        .system-card p {
          margin: .85rem 0 0;
          color: var(--muted);
          font-size: clamp(.98rem, 1.65vw, 1.08rem);
          line-height: 1.68;
        }
        .system-card .system-kicker {
          color: #ffffff;
          font-weight: 850;
        }
        .archetype-cloud,
        .law-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: .68rem;
          margin: 1.6rem auto 0;
        }
        .archetype-cloud span,
        .law-grid span {
          border: 1px solid rgba(99, 229, 255, .38);
          border-radius: 999px;
          background: rgba(7, 14, 38, .7);
          box-shadow: 0 0 16px rgba(39, 216, 255, .1), inset 0 0 16px rgba(255, 79, 216, .04);
          color: #e9fbff;
          font-size: .86rem;
          font-weight: 800;
          letter-spacing: .06em;
          padding: .58rem .82rem;
        }
        .systems-split {
          display: grid;
          gap: 1rem;
          margin-top: clamp(2.25rem, 5vw, 4rem);
        }
        .tall-card,
        .hud-card { min-height: 100%; }
        .hud-readout {
          display: grid;
          gap: .55rem;
          margin: 1.35rem 0 0;
          padding: 1rem;
          border: 1px solid rgba(99, 229, 255, .32);
          border-radius: 1rem;
          background:
            repeating-linear-gradient(180deg, rgba(255,255,255,.04) 0 1px, transparent 1px 8px),
            rgba(1, 8, 20, .72);
          box-shadow: inset 0 0 24px rgba(39, 216, 255, .08);
        }
        .hud-readout div {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: .85rem;
          padding-bottom: .48rem;
          border-bottom: 1px solid rgba(99, 229, 255, .15);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
        }
        .hud-readout div:last-child { border-bottom: 0; padding-bottom: 0; }
        .hud-readout dt {
          color: #9ff1ff;
          font-size: .78rem;
          font-weight: 800;
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        .hud-readout dd {
          margin: 0;
          color: #ffffff;
          font-size: .9rem;
          font-weight: 900;
          text-align: right;
          text-shadow: 0 0 12px rgba(255, 79, 216, .38);
        }
        .level-map {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: .7rem;
          margin: 1.6rem auto 0;
          padding: 0;
          list-style: none;
          counter-reset: level;
        }
        .level-map li {
          counter-increment: level;
          display: flex;
          align-items: center;
          gap: .75rem;
          padding: .82rem .95rem;
          border: 1px solid rgba(255, 134, 232, .34);
          border-radius: .95rem;
          background: rgba(7, 14, 38, .68);
          color: #ffffff;
          font-weight: 850;
          letter-spacing: .06em;
          text-align: left;
        }
        .level-map li::before {
          content: counter(level, decimal-leading-zero);
          color: #8ff2ff;
          font-size: .76rem;
          text-shadow: 0 0 12px rgba(39, 216, 255, .62);
        }
        .expansion-list {
          display: grid;
          gap: .78rem;
          max-width: 940px;
          margin: 1.6rem auto 0;
          padding: 0;
          list-style: none;
          text-align: left;
        }
        .expansion-list li {
          position: relative;
          padding: .85rem 1rem .85rem 2.35rem;
          border: 1px solid rgba(99, 229, 255, .22);
          border-radius: .95rem;
          background: rgba(7, 14, 38, .58);
          color: var(--muted);
          line-height: 1.55;
        }
        .expansion-list li::before {
          content: "✦";
          position: absolute;
          left: 1rem;
          color: #ff9be8;
          text-shadow: 0 0 12px rgba(255, 79, 216, .62);
        }
        .monetization-note {
          padding-top: 1rem;
          border-top: 1px solid rgba(99, 229, 255, .22);
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
        .creator-section {
          position: relative;
          margin-top: clamp(3rem, 7vw, 5rem);
          padding-top: clamp(3rem, 7vw, 5rem);
          border-top: 1px solid rgba(99, 229, 255, .24);
        }
        .creator-section::before {
          content: "";
          position: absolute;
          top: -1px;
          left: 50%;
          width: min(72%, 34rem);
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, rgba(255, 134, 232, .8), rgba(99, 229, 255, .8), transparent);
          box-shadow: 0 0 22px rgba(39, 216, 255, .42);
        }
        .creator-portrait {
          width: clamp(5.5rem, 13vw, 7.5rem);
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          margin: 0 auto .85rem;
          border: 1px solid rgba(255, 134, 232, .72);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, rgba(255, 134, 232, .28), rgba(13, 19, 50, .92) 55%, rgba(5, 13, 35, .96));
          box-shadow: 0 0 24px rgba(255, 79, 216, .28), 0 0 46px rgba(39, 216, 255, .2), inset 0 0 24px rgba(139, 92, 255, .26);
          cursor: pointer;
          text-decoration: none;
          transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
        }
        .creator-portrait:hover,
        .creator-portrait:focus-visible {
          border-color: rgba(255, 189, 243, .94);
          box-shadow: 0 0 30px rgba(255, 79, 216, .46), 0 0 58px rgba(39, 216, 255, .3), inset 0 0 28px rgba(139, 92, 255, .34);
          transform: scale(1.04);
        }
        .creator-portrait:focus-visible {
          outline: 2px solid #bff6ff;
          outline-offset: 5px;
        }
        .creator-portrait span {
          color: #ffffff;
          font-size: clamp(1.3rem, 4vw, 2rem);
          font-weight: 900;
          letter-spacing: .14em;
          text-indent: .14em;
          text-shadow: 0 0 16px rgba(255, 79, 216, .82), 0 0 22px rgba(39, 216, 255, .58);
        }
        .creator-profile-link {
          display: inline-block;
          margin: 0 auto 1.5rem;
          color: #dffbff;
          font-size: clamp(.72rem, 1.5vw, .86rem);
          font-weight: 900;
          letter-spacing: .12em;
          text-decoration: none;
          text-shadow: 0 0 14px rgba(39, 216, 255, .56);
          transition: color .2s ease, text-shadow .2s ease, transform .2s ease;
        }
        .creator-profile-link:hover,
        .creator-profile-link:focus-visible {
          color: #ffb4ef;
          text-shadow: 0 0 16px rgba(255, 79, 216, .72), 0 0 22px rgba(39, 216, 255, .48);
          transform: translateY(-2px);
        }
        .creator-profile-link:focus-visible {
          outline: 2px solid #bff6ff;
          outline-offset: 4px;
        }
        .creator-name {
          margin: 1rem auto 0;
          color: #bff6ff;
          font-size: clamp(1.12rem, 2.5vw, 1.5rem);
          font-weight: 800;
          letter-spacing: .08em;
          text-shadow: 0 0 18px rgba(39, 216, 255, .42);
        }
        .creator-copy {
          display: grid;
          gap: 1rem;
          max-width: 880px;
          margin: 1.5rem auto 0;
        }
        .creator-copy p {
          margin: 0;
          color: var(--muted);
          font-size: clamp(1rem, 1.8vw, 1.16rem);
          line-height: 1.75;
        }

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
          padding: 2.5rem 1rem 4.5rem;
          border-top: 1px solid rgba(99, 229, 255, .28);
          color: var(--muted);
          text-align: center;
          background: rgba(1, 2, 8, .75);
        }
        .footer p { margin: .35rem 0; }
        .project-connect { margin-top: 1.75rem; }
        .project-connect h2 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1rem, 2.4vw, 1.25rem);
          letter-spacing: .14em;
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
        a.footer-link:focus-visible {
          color: #ffb4ef;
        }
        .footer-icon { width: 1.1rem; height: 1.1rem; flex: 0 0 auto; }
        .project-cta { margin-top: 2.5rem; }
        .journey-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
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
        .journey-button:focus-visible { outline: 2px solid #bff6ff; outline-offset: 4px; }
        .journey-note {
          max-width: 680px;
          margin: 1rem auto 0 !important;
          color: var(--muted);
          font-size: .88rem;
          line-height: 1.6;
        }
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
          .hero-eyebrow { font-size: clamp(.56rem, 2.55vw, .68rem); letter-spacing: .2em; }
          .hero-subheadline { letter-spacing: .1em; }
          .section { width: min(100% - 1.25rem, 1180px); }
          .glass-card { min-height: 10rem; }
          .footer-links { display: grid; }
          .footer-link { justify-content: center; }
          .journey-button { width: min(100%, 20rem); padding-inline: 1rem; }
          .journey-note { max-width: 27rem; }
          .systems-section { width: min(100% - 1rem, 1180px); }
          .model-flow { gap: .45rem; }
          .model-flow span { width: 100%; }
          .model-flow b { transform: rotate(90deg); }
          .hud-readout div { align-items: flex-start; flex-direction: column; gap: .2rem; }
          .hud-readout dd { text-align: left; }
        }

        @media (min-width: 700px) {
          .pillars-grid,
          .awareness-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .collaborator-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .character-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .foundational-grid,
          .systems-card-grid,
          .systems-split { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .level-map { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (min-width: 1040px) {
          .pillars-grid,
          .awareness-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .glass-card { padding: 1.6rem; }
          .systems-card-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .level-map { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
      `}</style>
    </main>
  );
}
