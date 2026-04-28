export default function Home() {
  const featureCards = [
    ["Awareness as Input", "The player’s attention, choices, and presence shape what they notice, experience, and unlock."],
    ["The Filter System", "Reality shifts based on perception. The world changes as the player refines their inner state."],
    ["The Vessel", "Mind, body, breath, emotion, energy, and environment become part of the gameplay experience."],
    ["Hypnotherapy-Informed Moments", "Guided pause points, breath cues, and reset moments help the player choose differently."],
    ["Binaural Audio Layer", "Optional binaural audio experiences and subtle frequency-inspired soundscapes support immersion and presence."],
    ["AI Companion System", "An adaptive companion can reflect patterns, support awareness, and respond to player behavior over time."],
    ["MetaHuman Characters", "Realistic characters create emotionally grounded interactions inside the vertical slice."],
    ["VR to AR Expansion", "The experience begins in VR and expands into AR, glasses, and real-world awareness prompts."],
  ];

  const investorCards = [
    ["Prototype", "Unreal Engine vertical slice beginning with the retro neon diner experience."],
    ["Platform Fit", "Meta Quest, spatial computing, Ray-Ban Meta glasses, and future AR layers."],
    ["Wellbeing Market", "Awareness, presence, reflection, nervous system regulation, and guided state-shifting."],
    ["Partnership Ask", "Developer support, strategic partnership, prototype funding, and incubation."],
  ];

  return (
    <main className="earth">
      <video className="bgVideo" autoPlay muted loop playsInline>
        <source src="/EARTHSCHOOL.mp4" type="video/mp4" />
      </video>

      <div className="videoOverlay" />
      <div className="rainLayer" />
      <div className="glassLayer" />
      <div className="starLayer" />
      <div className="cityLayer" />
      <div className="glowOne" />
      <div className="glowTwo" />

      <section className="hero" id="top">
        <nav className="topNav" aria-label="Primary">
          <a href="#top">Home</a>
          <a href="#vision">Vision</a>
          <a href="#diner">Neon Diner</a>
          <a href="#systems">Systems</a>
          <a href="#investor">Investor</a>
          <a href="#founder">Founder</a>
        </nav>
        <p className="micro">A perception-driven spatial computing experience</p>

        <p className="opening">Can you see your own face right now?</p>
        <p className="soft">Strange, isn’t it?</p>

        <p className="intro">
          You’re here, inside a body, moving through a world that feels completely real.
        </p>

        <h1>EARTH SCHOOL</h1>

        <h2>A Temporary Human Experience</h2>
        <p className="gameLine">THE GAME</p>

        <p className="intro">
          What if this is a 3D simulation?
          <br />
          Where <strong>The Sims meets Grand Theft Auto with a soul.</strong>
        </p>

      </section>

      <section className="section bigIdea" id="vision">
        <p className="micro">The Big Vision</p>
        <h2>Your life is the gameplay</h2>

        <p>
          You can build a life. Create relationships. Chase success. Become rich,
          connected, and powerful, or lose everything.
        </p>

        <p>
          In EARTH SCHOOL, there are no fixed paths. You can evolve, or devolve.
          Every choice shapes what happens next.
        </p>

        <p className="quote">
          Not everyone experiences reality the same way.
        </p>
      </section>

      <section className="diner" id="diner">
        <div className="dinerInner">
          <p className="micro">Vertical Slice One</p>

          <h2>THE NEON DINER</h2>
          <img
            className="dinerImage"
            src="/diner.png"
            alt="Retro neon diner at night in the rain"
          />

          <p>
            A rainy night. A glowing retro diner. A moment that repeats until you notice it.
          </p>

          <p>
            The lights shift. The sound changes. Dialogue bends. The environment starts
            reflecting the player back to themselves.
          </p>

          <p className="quote">This is where awareness begins.</p>
        </div>
      </section>

      <section className="section" id="systems">
        <p className="micro">The Awareness System</p>
        <h2>Pause. Reset. Choose differently.</h2>

        <p>
          EARTH SCHOOL includes a system inspired by hypnotherapy, guided meditation,
          reflective prompts, breath cues, and state-shifting moments.
        </p>

        <p>
          The more aware the player becomes, the more control they gain. This is not
          about escaping reality. It is about becoming conscious inside it.
        </p>
      </section>

      <section className="cardsSection">
        <p className="micro">Core Systems</p>
        <h2>How the experience works</h2>

        <div className="cards">
          {featureCards.map(([title, text]) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="micro">Immersive Wellbeing</p>
        <h2>Designed to support awareness, presence, and reflection</h2>

        <p>
          EARTH SCHOOL is designed as an immersive wellbeing experience, not a
          traditional game. It creates a safe, grounded environment where users can
          observe how attention, perception, and emotional state influence experience.
        </p>

        <p>
          It begins in VR and extends into AR, supporting real-world connection beyond
          the headset through companion prompts and awareness-based interaction.
        </p>
      </section>

      <section className="teaser">
        <p className="micro">Short Teaser</p>
        <h2>Welcome to Earth School</h2>

        <div className="teaserBox">
          <p>
            Can you see your own face right now?
            <br />
            You are inside a body, moving through a world that feels real.
            <br />
            But what if this is a 3D simulation?
          </p>

          <p>
            Welcome to EARTH SCHOOL.
            <br />
            A temporary human experience.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="micro">Technology Direction</p>
        <h2>Built with real production pathways</h2>

        <p>
          EARTH SCHOOL is currently being developed as an Unreal Engine vertical slice,
          beginning with the Neon Diner experience and expanding through realistic
          environments, MetaHuman-style character interaction, loop-based awareness
          progression, and immersive audio design.
        </p>

        <p>
          The concept is designed for Meta Quest, spatial computing, Ray-Ban Meta
          glasses, AR layers, AI companions, and future mixed reality experiences.
        </p>

        <p className="quote">
          What if awareness itself became the controller?
        </p>
      </section>

      <section className="cardsSection investor" id="investor">
        <p className="micro">Investor and Partner Layer</p>
        <h2>A new category of experience</h2>

        <p className="wide">
          EARTH SCHOOL is positioned as a cross-platform awareness system spanning VR,
          AR, spatial computing, AI companions, immersive wellbeing, and real-world
          behavioral interaction.
        </p>

        <div className="cards">
          {investorCards.map(([title, text]) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section founder" id="founder">
        <p className="micro">Created by</p>
        <h2>Rev. Dr. Jessica Simmonds</h2>

        <p>
          Jessica is a visionary entrepreneur, published author, clinical hypnotherapist,
          Spiritual Life Coach, neurodivergent thinker, wife, mother of five, multimedia
          artist, singer, instructor, and public speaker.
        </p>

        <p>
          She has believed for decades that we are spiritual beings having a human
          experience. Her work brings together Aspire Agency Global, Aspire PODS,
          Aspire Game Academy, EARTH SCHOOL, Love Storm Retreats, and Aspire Global
          Foundation.
        </p>

        <p>
          Through Aspire Global Foundation, she is developing a never-been-done-before
          model combining compassion and technology.
        </p>
      </section>

      <section className="final">
        <h2>This is not about escaping the simulation.</h2>
        <p>It is about mastering it.</p>

        <p className="soft">Are you reacting?</p>
        <p className="finalLine">Or are you playing?</p>
      </section>

      <style>{`
        .earth {
          min-height: 100vh;
          color: white;
          font-family: Georgia, serif;
          position: relative;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 20% 10%, rgba(255, 0, 180, 0.32), transparent 34%),
            radial-gradient(circle at 85% 18%, rgba(0, 255, 225, 0.3), transparent 36%),
            radial-gradient(circle at 50% 70%, rgba(145, 95, 255, 0.26), transparent 40%),
            linear-gradient(180deg, #080015 0%, #04000f 35%, #020008 100%);
        }

        .bgVideo {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.55;
          filter: saturate(1.38) contrast(1.12) brightness(0.68);
        }

        .videoOverlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 50% 20%, rgba(190,120,255,0.34), transparent 28%),
            radial-gradient(circle at 15% 65%, rgba(255,0,185,0.25), transparent 36%),
            radial-gradient(circle at 85% 40%, rgba(0,255,225,0.28), transparent 34%),
            linear-gradient(180deg, rgba(5,0,20,0.42), rgba(0,0,0,0.92));
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .rainLayer {
          position: fixed;
          inset: -15% 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0.25;
          background-image:
            repeating-linear-gradient(
              104deg,
              rgba(185, 230, 255, 0.34) 0 1px,
              transparent 1px 15px
            ),
            repeating-linear-gradient(
              104deg,
              rgba(255, 120, 240, 0.18) 0 1px,
              transparent 1px 20px
            );
          animation: rainfall 18s linear infinite;
        }

        .glassLayer {
          position: fixed;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), transparent 40%),
            radial-gradient(circle at 70% 80%, rgba(255,255,255,0.06), transparent 42%),
            linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.45));
          backdrop-filter: blur(2px);
          pointer-events: none;
        }

        .starLayer {
          position: fixed;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background-image:
            radial-gradient(white 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px);
          background-size: 90px 90px, 150px 150px;
          background-position: 0 0, 40px 70px;
          opacity: 0.32;
          animation: drift 50s linear infinite, twinkle 8s ease-in-out infinite alternate;
        }

        .cityLayer {
          position: fixed;
          inset: auto 0 0;
          height: 36vh;
          z-index: 2;
          pointer-events: none;
          opacity: 0.3;
          background:
            linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.58) 65%, rgba(0,0,0,0.9) 100%),
            repeating-linear-gradient(
              to right,
              rgba(138, 96, 255, 0.4) 0 2px,
              transparent 2px 72px
            ),
            linear-gradient(
              to right,
              rgba(0,255,225,0.2) 2% 9%,
              transparent 9% 14%,
              rgba(255,0,180,0.23) 14% 20%,
              transparent 20% 27%,
              rgba(121, 100, 255, 0.3) 27% 35%,
              transparent 35% 42%,
              rgba(0,255,225,0.2) 42% 48%,
              transparent 48% 56%,
              rgba(255,0,180,0.24) 56% 62%,
              transparent 62% 72%,
              rgba(170,110,255,0.28) 72% 80%,
              transparent 80% 88%,
              rgba(0,255,225,0.2) 88% 96%,
              transparent 96% 100%
            );
          clip-path: polygon(0 100%,0 74%,5% 74%,5% 60%,10% 60%,10% 72%,15% 72%,15% 52%,21% 52%,21% 74%,26% 74%,26% 61%,31% 61%,31% 76%,36% 76%,36% 54%,43% 54%,43% 74%,49% 74%,49% 66%,56% 66%,56% 78%,61% 78%,61% 58%,67% 58%,67% 73%,73% 73%,73% 52%,78% 52%,78% 75%,85% 75%,85% 60%,91% 60%,91% 76%,100% 76%,100% 100%);
          filter: drop-shadow(0 -8px 24px rgba(255, 0, 180, 0.22));
        }

        .glowOne {
          position: fixed;
          width: 600px;
          height: 600px;
          left: -180px;
          top: 20%;
          z-index: 2;
          pointer-events: none;
          background: radial-gradient(circle, rgba(255,0,180,0.18), transparent 60%);
          filter: blur(80px);
          animation: pulse 10s ease-in-out infinite;
        }

        .glowTwo {
          position: fixed;
          width: 680px;
          height: 680px;
          right: -220px;
          top: 45%;
          z-index: 2;
          pointer-events: none;
          background: radial-gradient(circle, rgba(0,255,210,0.18), transparent 60%);
          filter: blur(90px);
          animation: pulse 12s ease-in-out infinite reverse;
        }

        @keyframes drift {
          from { transform: translateY(0); }
          to { transform: translateY(-180px); }
        }

        @keyframes twinkle {
          from { opacity: 0.24; }
          to { opacity: 0.38; }
        }

        @keyframes rainfall {
          from { transform: translateY(-8%); }
          to { transform: translateY(8%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }

        section {
          position: relative;
          z-index: 3;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 42px 24px;
        }

        .topNav {
          width: min(1100px, 100%);
          margin: 0 auto 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(10, 0, 28, 0.35);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 24px rgba(190,120,255,0.24);
        }

        .topNav a {
          color: #f7efff;
          text-decoration: none;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 8px;
          opacity: 0.92;
          white-space: nowrap;
        }

        .micro {
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 13px;
          opacity: 0.78;
          margin-bottom: 20px;
        }

        .opening {
          font-size: 22px;
          opacity: 0.9;
          margin: 0;
        }

        .soft {
          opacity: 0.75;
        }

        .intro {
          max-width: 860px;
          font-size: 21px;
          line-height: 1.85;
          opacity: 0.88;
        }

        h1 {
          font-size: clamp(68px, 12vw, 170px);
          line-height: 0.88;
          margin: 36px 0 14px;
          text-align: center;
          text-shadow:
            0 0 30px rgba(255,255,255,0.25),
            0 0 70px rgba(190,120,255,0.75);
        }

        h2 {
          font-size: clamp(38px, 6vw, 86px);
          line-height: 1.08;
          margin: 0 0 28px;
          text-align: center;
          text-shadow: 0 0 45px rgba(190,120,255,0.5);
        }

        .gameLine {
          margin: -8px 0 12px;
          font-size: clamp(20px, 2.8vw, 40px);
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #98fff2;
          text-shadow:
            0 0 14px rgba(0,255,225,0.7),
            0 0 28px rgba(255,0,180,0.52);
        }

        h3 {
          font-size: 24px;
          margin: 0 0 14px;
        }

        .button {
          margin-top: 44px;
          padding: 16px 36px;
          border: 1px solid rgba(255,255,255,0.82);
          border-radius: 999px;
          background: rgba(255,255,255,0.07);
          box-shadow:
            0 0 32px rgba(190,120,255,0.55),
            inset 0 0 18px rgba(255,255,255,0.06);
          backdrop-filter: blur(10px);
        }

        .section {
          padding: 110px 28px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section p {
          max-width: 860px;
          font-size: 21px;
          line-height: 1.88;
          opacity: 0.86;
        }

        .bigIdea {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0));
        }

        .quote {
          font-size: 28px !important;
          opacity: 1 !important;
          color: #f2dcff;
          text-shadow: 0 0 28px rgba(190,120,255,0.38);
        }

        .diner {
          min-height: 100vh;
          padding: 80px 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.18);
          border-bottom: 1px solid rgba(255,255,255,0.18);
          background:
            radial-gradient(circle at 50% 45%, rgba(0,255,210,0.25), transparent 28%),
            radial-gradient(circle at 50% 65%, rgba(255,0,180,0.16), transparent 38%),
            rgba(0,0,0,0.32);
          box-shadow:
            inset 0 0 120px rgba(0,255,210,0.12),
            inset 0 0 180px rgba(190,120,255,0.12);
        }

        .dinerInner {
          width: min(980px, 100%);
          border-radius: 34px;
          padding: 56px 34px;
          background: rgba(0,0,0,0.28);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 0 70px rgba(0,255,210,0.18);
          backdrop-filter: blur(12px);
        }

        .dinerImage {
          width: 100%;
          max-width: 900px;
          height: auto;
          object-fit: cover;
          margin: 10px auto 30px;
          display: block;
          border-radius: 22px;
          border: 1px solid rgba(180, 255, 248, 0.52);
          box-shadow:
            0 0 24px rgba(0,255,225,0.42),
            0 0 36px rgba(255,0,185,0.28),
            inset 0 0 30px rgba(255,255,255,0.08);
        }

        .diner p {
          max-width: 900px;
          font-size: 21px;
          line-height: 1.85;
          opacity: 0.88;
        }

        .cardsSection {
          padding: 110px 28px;
          text-align: center;
        }

        .cardsSection .wide {
          max-width: 980px;
          margin: 0 auto 52px;
          font-size: 21px;
          line-height: 1.88;
          opacity: 0.86;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          max-width: 1120px;
          margin: 46px auto 0;
          width: 100%;
        }

        .card {
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 26px;
          background: rgba(255,255,255,0.075);
          box-shadow:
            0 0 42px rgba(190,120,255,0.18),
            inset 0 0 18px rgba(255,255,255,0.035);
          backdrop-filter: blur(12px);
          font-size: 18px;
          line-height: 1.6;
        }

        .card p {
          opacity: 0.76;
          line-height: 1.65;
        }

        .teaser {
          padding: 110px 28px;
          text-align: center;
        }

        .teaserBox {
          max-width: 900px;
          margin: 40px auto 0;
          border-radius: 30px;
          padding: 46px 32px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.075);
          box-shadow: 0 0 55px rgba(190,120,255,0.22);
          backdrop-filter: blur(12px);
        }

        .teaserBox p {
          font-size: 23px;
          line-height: 1.82;
          opacity: 0.9;
        }

        .investor {
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0));
        }

        .founder {
          background:
            radial-gradient(circle at 50% 50%, rgba(190,120,255,0.14), transparent 38%),
            rgba(0,0,0,0.12);
        }

        .final {
          position: relative;
          z-index: 3;
          min-height: 88vh;
          padding: 130px 28px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .final h2 {
          max-width: 1100px;
        }

        .final p {
          font-size: 26px;
          line-height: 1.7;
        }

        .finalLine {
          font-size: clamp(38px, 6vw, 86px) !important;
          margin-top: 8px;
          text-shadow: 0 0 48px rgba(190,120,255,0.55);
        }

        @media (max-width: 900px) {
          .hero, .section, .cardsSection, .teaser, .final, .diner {
            padding-left: 22px;
            padding-right: 22px;
          }

          h1 {
            font-size: clamp(56px, 11vw, 110px);
            margin-top: 28px;
          }

          h2 {
            font-size: clamp(32px, 5.5vw, 60px);
          }

          .intro, .section p, .diner p, .cardsSection .wide, .teaserBox p {
            font-size: 19px;
            line-height: 1.75;
          }

          .cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .dinerInner {
            padding: 44px 24px;
          }

          .teaserBox {
            padding: 38px 24px;
          }
        }

        @media (max-width: 640px) {
          .hero, .section, .cardsSection, .teaser, .final {
            padding-left: 16px;
            padding-right: 16px;
          }

          .diner {
            padding-left: 16px;
            padding-right: 16px;
            min-height: auto;
          }

          .topNav {
            gap: 6px 8px;
            padding: 8px 10px;
            border-radius: 18px;
            margin-bottom: 26px;
          }

          .topNav a {
            font-size: 12px;
            letter-spacing: 0.08em;
            padding: 4px 6px;
          }

          .micro {
            font-size: 11px;
            letter-spacing: 2.4px;
            margin-bottom: 14px;
          }

          .opening {
            font-size: 18px;
          }

          h1 {
            font-size: clamp(42px, 14vw, 68px);
            line-height: 0.95;
            margin: 20px 0 10px;
          }

          h2 {
            font-size: clamp(24px, 8vw, 38px);
            margin-bottom: 16px;
          }

          .gameLine {
            font-size: clamp(16px, 4.5vw, 22px);
            letter-spacing: 0.28em;
            margin-top: -2px;
          }

          .intro, .section p, .diner p, .cardsSection .wide, .teaserBox p, .final p {
            font-size: 17px;
            line-height: 1.66;
          }

          .section, .cardsSection, .teaser {
            padding-top: 76px;
            padding-bottom: 76px;
          }

          .final {
            min-height: 70vh;
            padding-top: 88px;
            padding-bottom: 88px;
          }

          .cards {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .card {
            padding: 20px;
            border-radius: 20px;
          }

          .dinerInner {
            padding: 24px 14px;
            border-radius: 20px;
          }

          .dinerImage {
            border-radius: 16px;
            margin-bottom: 20px;
          }

          .button {
            width: 100%;
            max-width: 320px;
            margin-top: 32px;
            padding: 14px 20px;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
