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
      <div className="starLayer" />
      <div className="glowOne" />
      <div className="glowTwo" />

      <section className="hero">
        <p className="micro">A perception-driven spatial computing experience</p>

        <p className="opening">Can you see your own face right now?</p>
        <p className="soft">Strange, isn’t it?</p>

        <p className="intro">
          You’re here, inside a body, moving through a world that feels completely real.
        </p>

        <h1>EARTH SCHOOL<br />THE GAME</h1>

        <h2>A Temporary Human Experience</h2>

        <p className="intro">
          What if this is a 3D simulation?
          <br />
          Where <strong>The Sims meets Grand Theft Auto with a soul.</strong>
        </p>

        <div className="button">Enter The Experience</div>
      </section>

      <section className="section bigIdea">
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

      <section className="diner">
        <div className="dinerInner">
          <p className="micro">Vertical Slice One</p>

          <img className="dinerImage" src="/diner.png" alt="The Neon Diner" />

          <h2>THE NEON DINER</h2>

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

      <section className="section">
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
          EARTH SCHOOL is being developed as an Unreal Engine vertical slice using
          realistic environments, MetaHuman-style character interaction, loop-based
          awareness progression, and immersive audio design.
        </p>

        <p>
          The concept is designed for Meta Quest, spatial computing, Ray-Ban Meta
          glasses, AR layers, AI companions, and future mixed reality experiences.
        </p>

        <p className="quote">
          What if awareness itself became the controller?
        </p>
      </section>

      <section className="cardsSection investor">
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

      <section className="section founder">
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
            radial-gradient(circle at 50% 20%, rgba(190,120,255,0.35), transparent 30%),
            linear-gradient(180deg, #080015, #000);
        }

        .bgVideo {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.55;
          filter: saturate(1.3) contrast(1.08) brightness(0.78);
        }

        .videoOverlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 50% 20%, rgba(190,120,255,0.28), transparent 28%),
            radial-gradient(circle at 20% 70%, rgba(255,160,120,0.16), transparent 34%),
            radial-gradient(circle at 80% 50%, rgba(0,255,210,0.14), transparent 36%),
            linear-gradient(180deg, rgba(0,0,0,0.36), rgba(0,0,0,0.9));
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
          opacity: 0.26;
          animation: drift 50s linear infinite;
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
        }

        @keyframes drift {
          from { transform: translateY(0); }
          to { transform: translateY(-180px); }
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
          max-width: 920px;
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
          padding: 120px 28px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section p {
          max-width: 940px;
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
          max-width: 980px;
          border-radius: 34px;
          padding: 56px 34px;
          background: rgba(0,0,0,0.28);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 0 70px rgba(0,255,210,0.18);
          backdrop-filter: blur(12px);
        }

        .dinerImage {
          width: min(100%, 760px);
          height: auto;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 0 48px rgba(0,255,210,0.25);
          margin: 0 auto 28px;
          display: block;
        }

        .diner p {
          max-width: 900px;
          font-size: 21px;
          line-height: 1.85;
          opacity: 0.88;
        }

        .cardsSection {
          padding: 120px 28px;
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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
          padding: 120px 28px;
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

        @media (max-width: 700px) {
          .hero, .section, .cardsSection, .teaser, .final {
            padding-left: 20px;
            padding-right: 20px;
          }

          .intro, .section p, .diner p, .teaserBox p {
            font-size: 18px;
          }

          .card {
            padding: 24px;
          }
        }
      `}</style>
    </main>
  );
}
