export default function Home() {
  const featureCards = [
    ["Awareness as Input", "Attention and presence become active gameplay inputs that shape what appears and what unlocks."],
    ["The Filter System", "Perception changes reality. As inner state shifts, the world responds with different outcomes and reflections."],
    ["The Vessel", "Mind, body, breath, emotion, energy, and environment all become part of the playable system."],
    ["Conscious Choice", "Loop-based moments invite a pause, then a deliberate decision that changes your direction."],
    ["AI Companion", "A responsive companion mirrors patterns, asks better questions, and supports awareness over time."],
    ["Hypnotherapy-Informed Moments", "Guided resets, breath cues, and grounded prompts help players re-center and choose differently."],
    ["Binaural Audio Layer", "Optional binaural experiences and subtle frequency-inspired sound design deepen immersion."],
    ["VR to AR Expansion", "The journey starts in VR, then extends into AR and real-world awareness prompts."],
  ];

  const investorCards = [
    ["Prototype", "Unreal Engine vertical slice centered on The Neon Diner and loop-based awareness progression."],
    ["Platform Fit", "Built for Meta Quest, Ray-Ban Meta glasses, spatial computing, and future AR interaction layers."],
    ["Wellbeing Market", "A premium immersive wellbeing category at the intersection of reflection, regulation, and engagement."],
    ["Partnership Ask", "Developer support, strategic partnership, prototype funding, and incubation to accelerate launch."],
  ];

  const navItems = [
    ["EARTH SCHOOL", "hero"],
    ["Experience", "experience"],
    ["Technology", "technology"],
    ["Vision", "vision"],
    ["Founder", "founder"],
    ["Partner", "partner"],
  ];

  return (
    <main className="earth">
      <div className="cosmicBase" />
      <div className="starLayer starOne" />
      <div className="starLayer starTwo" />
      <div className="nebula nebulaOne" />
      <div className="nebula nebulaTwo" />

      <header className="topNavWrap">
        <nav className="topNav">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="hero">
        <p className="micro">Perception-driven spatial computing</p>
        <h1>EARTH SCHOOL</h1>
        <h2>A Temporary Human Experience</h2>
        <p className="intro">
          The Sims meets Grand Theft Auto with a soul — an immersive wellbeing experience where
          awareness becomes the input and your perception changes what reality reveals.
        </p>

        <div className="ctaRow">
          <a className="button primary" href="#experience">Enter The Experience</a>
          <a className="button" href="#partner">View Partner Vision</a>
        </div>
      </section>

      <section className="section" id="experience">
        <p className="micro">Experience</p>
        <h3 className="sectionTitle">Not a traditional game</h3>
        <p>
          EARTH SCHOOL is an immersive wellbeing experience where loop-based awareness progression,
          guided moments, and perception shifts become part of gameplay.
        </p>
        <p className="quote">Your life is the gameplay layer.</p>
      </section>

      <section className="diner" id="vision">
        <div className="dinerInner">
          <p className="micro">The Neon Diner · Vertical Slice</p>
          <h3 className="sectionTitle">THE NEON DINER</h3>
          <p>
            Rain on glass. Purple neon hum. A late-night diner scene that subtly loops until the
            player notices what keeps repeating.
          </p>
          <p>
            Dialogue bends. Light flickers differently. The room starts reflecting the inner state
            of the player.
          </p>
          <p className="quote">This is where awareness begins.</p>
          <div className="renderPlaceholder">Future Unreal render placeholder</div>
        </div>
      </section>

      <section className="cardsSection" id="technology">
        <p className="micro">How It Works</p>
        <h3 className="sectionTitle">Core awareness architecture</h3>
        <div className="cards">
          {featureCards.map(([title, text]) => (
            <article className="card" key={title}>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cardsSection investor" id="partner">
        <p className="micro">Investor + Meta-ready</p>
        <h3 className="sectionTitle">Built for strategic partnership</h3>
        <div className="cards compact">
          {investorCards.map(([title, text]) => (
            <article className="card" key={title}>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section founder" id="founder">
        <p className="micro">Founder</p>
        <h3 className="sectionTitle">Rev. Dr. Jessica Simmonds</h3>
        <p>
          Rev. Dr. Jessica Simmonds is a visionary entrepreneur, published author, clinical
          hypnotherapist, Spiritual Life Coach, neurodivergent thinker, wife, mother of five,
          multimedia artist, singer, instructor, and public speaker.
        </p>
        <p>
          She has believed for decades that we are spiritual beings having a human experience. Her
          work connects Aspire Agency Global, Aspire PODS, Aspire Game Academy, EARTH SCHOOL,
          Love Storm Retreats, and Aspire Global Foundation.
        </p>
      </section>

      <section className="final">
        <h3>This is not about escaping the simulation.</h3>
        <p>It is about mastering it.</p>
        <p className="soft">Are you reacting?</p>
        <p className="finalLine">Or are you playing?</p>
      </section>

      <style>{`
        .earth {
          min-height: 100vh;
          color: #fbf7ff;
          font-family: Georgia, serif;
          position: relative;
          overflow-x: hidden;
          background: #05010f;
          scroll-behavior: smooth;
        }

        .cosmicBase,
        .starLayer,
        .nebula {
          position: fixed;
          inset: 0;
          pointer-events: none;
        }

        .cosmicBase {
          z-index: 0;
          background:
            radial-gradient(circle at 18% 18%, rgba(123, 71, 255, 0.4), transparent 36%),
            radial-gradient(circle at 82% 28%, rgba(255, 80, 199, 0.24), transparent 42%),
            radial-gradient(circle at 52% 78%, rgba(0, 247, 255, 0.12), transparent 35%),
            linear-gradient(180deg, #100221 0%, #070113 45%, #03010b 100%);
        }

        .starLayer {
          z-index: 1;
          opacity: 0.45;
          animation: drift 90s linear infinite;
          background-image: radial-gradient(white 1px, transparent 1px);
        }

        .starOne {
          background-size: 90px 90px;
        }

        .starTwo {
          background-size: 160px 160px;
          background-position: 30px 70px;
          opacity: 0.25;
          animation-duration: 120s;
          animation-direction: reverse;
        }

        .nebula {
          z-index: 2;
          filter: blur(70px);
        }

        .nebulaOne {
          background: radial-gradient(circle at 30% 35%, rgba(255, 94, 223, 0.22), transparent 45%);
        }

        .nebulaTwo {
          background: radial-gradient(circle at 70% 68%, rgba(95, 195, 255, 0.2), transparent 45%);
        }

        @keyframes drift {
          from { transform: translateY(0); }
          to { transform: translateY(-240px); }
        }

        section,
        header {
          position: relative;
          z-index: 5;
        }

        .topNavWrap {
          position: sticky;
          top: 12px;
          z-index: 20;
          padding: 14px 20px 0;
        }

        .topNav {
          margin: 0 auto;
          max-width: 980px;
          padding: 12px 16px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 999px;
          background: rgba(8, 3, 20, 0.55);
          backdrop-filter: blur(12px);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 18px;
          box-shadow: 0 0 36px rgba(180, 92, 255, 0.25);
        }

        .topNav a {
          color: #f4dcff;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          opacity: 0.88;
        }

        .hero,
        .section,
        .cardsSection,
        .final {
          padding: 112px 24px;
          text-align: center;
        }

        .hero {
          min-height: 92vh;
          display: grid;
          place-content: center;
        }

        .micro {
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 12px;
          opacity: 0.82;
          margin-bottom: 14px;
        }

        h1 {
          font-size: clamp(56px, 13vw, 142px);
          line-height: 0.9;
          margin: 10px 0;
          text-shadow: 0 0 28px rgba(255, 255, 255, 0.4), 0 0 80px rgba(182, 84, 255, 0.95);
        }

        h2 {
          font-size: clamp(26px, 5.5vw, 56px);
          margin: 8px 0 18px;
          text-shadow: 0 0 34px rgba(180, 92, 255, 0.62);
        }

        .intro,
        .section p,
        .card p {
          max-width: 900px;
          margin: 0 auto;
          font-size: 20px;
          line-height: 1.75;
          opacity: 0.9;
        }

        .ctaRow {
          margin-top: 36px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .button {
          text-decoration: none;
          color: #f8ebff;
          padding: 14px 24px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 30px rgba(186, 108, 255, 0.28), inset 0 0 12px rgba(255, 255, 255, 0.1);
        }

        .button.primary {
          background: linear-gradient(90deg, rgba(175, 72, 255, 0.9), rgba(255, 87, 209, 0.82));
          border-color: rgba(255, 233, 253, 0.5);
          color: #fff;
        }

        .sectionTitle {
          margin: 0 0 22px;
          font-size: clamp(34px, 7vw, 74px);
          text-shadow: 0 0 30px rgba(170, 100, 255, 0.55);
        }

        .quote {
          font-size: clamp(24px, 4vw, 34px) !important;
          color: #ffe8ff;
          margin-top: 24px !important;
          text-shadow: 0 0 32px rgba(255, 136, 235, 0.5);
        }

        .diner {
          padding: 110px 24px;
          display: flex;
          justify-content: center;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .dinerInner {
          width: min(980px, 100%);
          border-radius: 30px;
          padding: 48px 28px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          background:
            linear-gradient(180deg, rgba(255, 102, 219, 0.12), rgba(67, 9, 111, 0.28)),
            rgba(8, 2, 22, 0.7);
          box-shadow: 0 0 70px rgba(255, 95, 231, 0.3), inset 0 0 80px rgba(0, 247, 255, 0.08);
          backdrop-filter: blur(14px);
          text-align: center;
        }

        .renderPlaceholder {
          margin-top: 24px;
          min-height: 170px;
          border-radius: 18px;
          border: 1px dashed rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.06);
          display: grid;
          place-content: center;
          font-size: 15px;
          letter-spacing: 1px;
          text-transform: uppercase;
          opacity: 0.84;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          max-width: 1100px;
          margin: 28px auto 0;
        }

        .card {
          padding: 24px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(12px);
          text-align: left;
          box-shadow: 0 0 32px rgba(180, 96, 255, 0.2);
        }

        .card h4 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .card p {
          font-size: 17px;
          line-height: 1.6;
          opacity: 0.84;
        }

        .investor {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0));
        }

        .founder {
          background: radial-gradient(circle at 50% 50%, rgba(185, 101, 255, 0.15), transparent 42%);
        }

        .final {
          min-height: 78vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .final h3 {
          font-size: clamp(34px, 6vw, 74px);
          margin: 0 0 16px;
          text-shadow: 0 0 34px rgba(188, 106, 255, 0.52);
          max-width: 960px;
        }

        .final p {
          font-size: 24px;
          margin: 0;
          line-height: 1.6;
        }

        .soft {
          opacity: 0.82;
          margin-top: 12px !important;
        }

        .finalLine {
          margin-top: 4px !important;
          font-size: clamp(38px, 6vw, 78px) !important;
          text-shadow: 0 0 44px rgba(255, 102, 223, 0.62);
        }

        @media (max-width: 720px) {
          .hero,
          .section,
          .cardsSection,
          .final,
          .diner {
            padding-left: 18px;
            padding-right: 18px;
          }

          .intro,
          .section p {
            font-size: 18px;
          }

          .topNav {
            gap: 8px 12px;
            padding: 10px 12px;
          }

          .topNav a {
            font-size: 11px;
            letter-spacing: 1.2px;
          }

          .card {
            padding: 20px;
          }
        }
      `}</style>
    </main>
  );
}
