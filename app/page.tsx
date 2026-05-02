export default function Home() {
  const featureCards = [
    ["Awareness as Input", "The player’s attention, choices, and presence shape what they notice, experience, and unlock."],
    ["The Filter System", "Reality shifts based on perception. The world changes as the player refines their inner state."],
    ["The Vessel", "Mind, body, breath, emotion, energy, and environment become part of the gameplay experience."],
    ["Hypnotherapy-Informed Moments", "Guided pause points, breath cues, and reset moments help the player choose differently."],
    ["Binaural Audio Layer", "Optional binaural audio experiences and subtle frequency-inspired soundscapes support immersion and presence."],
    ["AI Companion System", "An adaptive companion can reflect patterns, support awareness, and respond to player behavior over time."],
    ["MetaHuman Characters", "Realistic characters create emotionally grounded interactions inside the cinematic proof of concept."],
    ["VR to AR Expansion", "The experience begins in VR and expands into AR, glasses, and real-world awareness prompts."],
  ];

  const investorCards = [
    ["Prototype", "Pre-rendered cinematic proof of concept beginning with the retro neon diner experience."],
    ["Platform Fit", "Meta Quest, spatial computing, Ray-Ban Meta glasses, and future AR layers."],
    ["Wellbeing Market", "Awareness, presence, reflection, nervous system regulation, and guided state-shifting."],
    ["Partnership Ask", "Developer support, strategic partnership, prototype funding, and incubation."],
  ];
  const filterLens = ["Thoughts", "Emotions", "Beliefs", "Memory", "Attention", "Nervous system state", "Awareness"];
  const filterEffects = ["Lighting", "Sound", "Dialogue", "NPC behavior", "Environment", "Available paths", "Emotional tone"];
  const mechanicsCards = [
    ["Filter System", "Perception shapes experience"],
    ["Awareness System", "Noticing reveals more"],
    ["Neural Pathways", "Repetition builds identity"],
    ["State System", "Your state changes what is possible"],
    ["Mirror NPC System", "Characters reflect you"],
    ["Loop System", "Patterns repeat until seen"],
    ["Glasses Interface", "Reveals hidden layers and choices"],
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
      <div className="glowOne" />
      <div className="glowTwo" />

      <section className="hero">
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

        <a className="ctaButton" href="https://calendly.com" target="_blank" rel="noreferrer">Book a Synergy Call</a>
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
          <p className="micro">PRE-RENDERED CINEMATIC TO COME</p>

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

      <section className="rules section">
        <p className="micro">EARTH SCHOOL: THE RULES OF THE GAME</p>
        <h2>THE RULES OF THE GAME</h2>
        <p className="quoteSoft">A temporary human experience where awareness changes the way reality is perceived.</p>

        <div className="ruleBlock">
          <h3>1. CORE CONCEPT</h3>
          <p>EARTH SCHOOL is a consciousness-driven video game where the objective is awareness.</p>
          <p>The player begins inside an ordinary world. As they notice more, reflect more, and choose differently, the world responds.</p>
          <p>This is not a game about changing the environment. It is about changing the filter through which the environment is experienced.</p>
          <p className="ruleLine">Change the filter. Change the experience.</p>
          <p className="quoteSoft"><em>“We see the world not as it is, but as we are.” — Anaïs Nin</em></p>
        </div>

        <div className="ruleBlock">
          <h3>2. JOHN AND MRS. CHEN</h3>
          <p>John is the player character: older, bearded, calm, grounded, and wise-looking. But he is the one waking up.</p>
          <p>Mrs. Chen is an older Chinese woman in the diner: practical, calm, lightly humorous, and deeply perceptive. She is not a guide. She is a mirror.</p>
          <p>John notices something unusual. Because he notices, Mrs. Chen passes him a pair of glasses. He puts them on and sees a hidden interface over reality: choices, filters, awareness.</p>
          <p>Outside, rain freezes on the glass and shifts into a bright, glowing sunset. Reality did not change. His perception did.</p>
          <p className="quoteSoft"><em>“You take the red pill… you stay in Wonderland.” — The Matrix</em></p>
        </div>

        <div className="ruleGrid">
          <div className="card">
            <h3>3. THE FILTER SYSTEM</h3>
            <p>The player is not seeing reality directly. They are seeing reality through a filter.</p>
            <ul>{filterLens.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>The filter changes:</p>
            <ul>{filterEffects.map((item) => <li key={item}>{item}</li>)}</ul>
            <p><strong>Same moment. Different filter. Different reality.</strong></p>
            <p>Low awareness → NPC feels rude. Medium awareness → NPC feels neutral. High awareness → deeper meaning is revealed.</p>
            <p className="quoteSoft"><em>“Reality is that which, when you stop believing in it, doesn’t go away.” — Philip K. Dick</em></p>
          </div>
          <div className="card">
            <h3>4. THE UNIVERSE HAS RULES</h3>
            <p>Physics shapes the structure of reality. Consciousness shapes the experience of reality.</p>
            <p><strong>Scientific laws:</strong> Gravity, Energy, Cause and effect, Entropy, Relativity, Quantum probability.</p>
            <p><strong>Experiential laws:</strong> Cause and effect, Vibration, Attraction, Polarity, Rhythm, Correspondence, Perception.</p>
            <p className="ruleLine">EARTH SCHOOL exists at the intersection of structure and perception.</p>
            <p className="quoteSoft"><em>“As within, so without.”</em></p>
          </div>
        </div>

        <div className="ruleBlock">
          <h3>5. THE BRAIN HAS RULES TOO</h3>
          <div className="cards">
            <div className="card"><h3>Mirror Neurons</h3><p>We absorb behavior through observation.</p></div>
            <div className="card"><h3>Neuroplasticity</h3><p>Repeated choices build pathways.</p></div>
            <div className="card"><h3>Reticular Activating System</h3><p>We see more of what we focus on.</p></div>
            <div className="card"><h3>Nervous System</h3><p>State changes perception and reaction.</p></div>
            <div className="card"><h3>Dopamine</h3><p>Drives seeking, not fulfillment.</p></div>
            <div className="card"><h3>Default Mode Network</h3><p>Creates the story we live inside.</p></div>
          </div>
          <p className="ruleLine">The brain is not just observing the game. The brain is part of the game.</p>
          <p className="quoteSoft"><em>“Neurons that fire together wire together.” — Donald Hebb</em></p>
        </div>

        <div className="ruleBlock">
          <h3>6. GAMEPLAY LOOP</h3>
          <div className="loopTrack">
            {["Experience", "Reaction", "Reflection", "Awareness", "New Choice", "New Reality"].map((step) => <span key={step}>{step}</span>)}
          </div>
          <p>The player repeats scenarios. Each time, they can see more, choose differently, and become more aware. Loops are not punishment. Loops are lessons.</p>
          <p className="quoteSoft"><em>“The definition of insanity is doing the same thing over and over and expecting different results.” — commonly attributed to Einstein</em></p>
        </div>

        <div className="ruleBlock">
          <h3>7. CORE GAME MECHANICS</h3>
          <div className="cards">
            {mechanicsCards.map(([title, text]) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="quoteSoft"><em>“Where attention goes, energy flows.”</em></p>
        </div>

        <div className="ruleBlock">
          <h3>8. VISUAL DIAGRAM</h3>
          <div className="diagramDesktop" aria-hidden="true">
            <div className="ring outer" />
            <div className="ring inner" />
            <div className="ring core">Player / Consciousness</div>
            <div className="ringTitle innerTitle">The Filter</div>
            <div className="ringTitle outerTitle">Perceived Reality</div>
          </div>

          <div className="diagramLabels desktopOnly">
            <div className="labelGroup">
              <h4>Inner Ring</h4>
              <p>Thoughts · Emotions · Beliefs · Memory · State · Attention</p>
            </div>
            <div className="labelGroup">
              <h4>Outer Ring</h4>
              <p>Environment · NPCs · Events · Opportunities · Dialogue · Reality Layers</p>
            </div>
          </div>

          <div className="diagramMobile">
            <div className="card"><h4>Center</h4><p>Player / Consciousness</p></div>
            <div className="card"><h4>Inner Ring · The Filter</h4><p>Thoughts · Emotions · Beliefs · Memory · State · Attention</p></div>
            <div className="card"><h4>Outer Ring · Perceived Reality</h4><p>Environment · NPCs · Events · Opportunities · Dialogue · Reality Layers</p></div>
          </div>

          <p className="diagramFlow">Filter → Reality → Experience → Learning → Filter</p>
          <p className="ruleLine">Change the filter. Change the experience.</p>
        </div>

        <div className="ruleBlock">
          <h3>9. POSITIONING</h3>
          <p>Most games change the world around the player. EARTH SCHOOL changes how the player perceives the world. That is the game.</p>
          <p className="quoteSoft"><em>“The kingdom of heaven is within you.”</em></p>
        </div>

        <div className="ruleBlock">
          <h3>10. FINAL CLOSE</h3>
          <p className="finalClose">EARTH SCHOOL<br />A temporary human experience.<br />THE GAME.</p>
          <p className="quoteSoft"><em>“What you seek is seeking you.” — Rumi</em></p>
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
          EARTH SCHOOL is currently being developed toward a pre-rendered cinematic proof of concept, beginning with The Neon Diner experience and expanding through realistic environments, MetaHuman-style character interaction, loop-based awareness progression, and immersive audio design.
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

        <p><a className="bioLink" href="https://jessgoodvibesonly.vercel.app" target="_blank" rel="noreferrer">Meet Jessica Simmonds</a></p>
      </section>

      <section className="section">
        <a className="ctaButton" href="https://calendly.com" target="_blank" rel="noreferrer">Book a Synergy Call</a>
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
            radial-gradient(circle at 20% 10%, rgba(255, 0, 180, 0.26), transparent 34%),
            radial-gradient(circle at 85% 18%, rgba(0, 255, 225, 0.24), transparent 36%),
            radial-gradient(circle at 50% 70%, rgba(145, 95, 255, 0.2), transparent 40%),
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
            radial-gradient(circle at 50% 20%, rgba(190,120,255,0.28), transparent 28%),
            radial-gradient(circle at 15% 65%, rgba(255,0,185,0.2), transparent 36%),
            radial-gradient(circle at 85% 40%, rgba(0,255,225,0.22), transparent 34%),
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
              rgba(185, 230, 255, 0.32) 0 1px,
              transparent 1px 14px
            ),
            repeating-linear-gradient(
              104deg,
              rgba(255, 120, 240, 0.14) 0 1px,
              transparent 1px 18px
            );
          animation: rainfall 14s linear infinite;
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

        .gameLine {
          margin: -8px 0 12px;
          font-size: clamp(28px, 3.8vw, 52px);
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

        .ctaButton {
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
          width: min(100%, 900px);
          height: auto;
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

        .ctaButton {
          display: inline-block;
          margin-top: 36px;
          padding: 16px 34px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.82);
          background: rgba(255,255,255,0.09);
          color: #bffff8;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.04em;
          box-shadow: 0 0 32px rgba(190,120,255,0.55), 0 0 14px rgba(0,255,225,0.45), inset 0 0 18px rgba(255,255,255,0.06);
        }

        .bioLink { color: #9fffee; font-weight: 700; }

        .card p {
          opacity: 0.76;
          line-height: 1.65;
        }

        .rules {
          gap: 34px;
          background: linear-gradient(180deg, rgba(4, 0, 20, 0.7), rgba(0, 0, 0, 0.2));
        }

        .ruleBlock {
          width: min(1080px, 100%);
          border: 1px solid rgba(160, 255, 246, 0.18);
          border-radius: 28px;
          padding: 34px;
          background: rgba(10, 5, 30, 0.42);
          box-shadow: 0 0 45px rgba(0, 255, 225, 0.12), inset 0 0 24px rgba(255, 255, 255, 0.04);
          text-align: left;
        }

        .quoteSoft { opacity: 0.66 !important; font-style: italic; }
        .ruleLine { font-size: 30px !important; color: #98fff2; text-shadow: 0 0 24px rgba(0,255,225,0.48); }
        .ruleGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 22px; width: min(1080px, 100%); }
        .ruleBlock ul { margin: 10px 0 14px 20px; line-height: 1.7; opacity: 0.85; }
        .loopTrack { display: flex; flex-wrap: wrap; gap: 10px; margin: 18px 0; }
        .loopTrack span { padding: 10px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); background: rgba(255,255,255,0.06); }
                .diagramDesktop { position: relative; width: min(520px, 88vw); aspect-ratio: 1 / 1; margin: 20px auto; }
        .ring { position: absolute; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; padding: 16px; line-height: 1.45; }
        .outer { inset: 0; border: 1px solid rgba(255,255,255,0.24); background: rgba(255,255,255,0.03); }
        .inner { inset: 16%; border: 1px solid rgba(0,255,225,0.55); background: rgba(0,255,225,0.09); }
        .core { inset: 37%; border: 1px solid rgba(255,0,180,0.58); background: rgba(255,0,180,0.12); font-weight: bold; }
        .ringTitle { position: absolute; left: 50%; transform: translateX(-50%); text-transform: uppercase; letter-spacing: 0.08em; font-size: 12px; opacity: 0.9; }
        .outerTitle { top: 10%; }
        .innerTitle { top: 31%; }
        .diagramLabels { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 8px 0 14px; }
        .labelGroup { padding: 14px 16px; border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; background: rgba(255,255,255,0.04); }
        .labelGroup h4 { margin: 0 0 8px; font-size: 15px; text-transform: uppercase; letter-spacing: 0.05em; }
        .labelGroup p { margin: 0; font-size: 15px; line-height: 1.6; }
        .diagramMobile { display: none; }
        .diagramFlow { text-align: center; opacity: 0.8 !important; letter-spacing: 0.04em; }
        .finalClose { font-size: clamp(28px, 4vw, 48px) !important; text-align: center; line-height: 1.45 !important; }

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

          h2 { font-size: clamp(30px, 10vw, 54px); }
          .gameLine { letter-spacing: 0.2em; }
          .diagramDesktop, .desktopOnly { display: none; }
          .diagramMobile { display: grid; gap: 14px; }
          .diagramMobile .card h4 { margin: 0 0 8px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.04em; }
          .diagramMobile .card p { margin: 0; }
          .ruleLine { font-size: 24px !important; }
        }
      `}</style>
    </main>
  );
}
