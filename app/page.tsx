export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at 50% 0%, rgba(120,255,230,0.15), transparent 30%), linear-gradient(180deg, #020202 0%, #000 100%)",
      color: "white",
      fontFamily: "Georgia, serif",
    }}>

      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}>
        <div style={{ maxWidth: "900px" }}>
          <p style={{ fontSize: "20px", opacity: 0.8 }}>Can you see your own face right now?</p>
          <p style={{ marginTop: "10px", opacity: 0.7 }}>Strange, isn’t it?</p>

          <p style={{ marginTop: "30px", fontSize: "20px", lineHeight: "1.8" }}>
            You’re here, inside a body, moving through a world that feels completely real.
          </p>

          <h1 style={{
            fontSize: "clamp(60px, 10vw, 140px)",
            marginTop: "40px",
            textShadow: "0 0 40px rgba(255,255,255,0.25)",
          }}>
            EARTH SCHOOL
          </h1>

          <p style={{ fontSize: "24px", marginTop: "20px", color: "#dffaf4" }}>
            A Temporary Human Experience
          </p>

          <p style={{ marginTop: "40px", fontSize: "20px", lineHeight: "1.9", opacity: 0.85 }}>
            What if this is a 3D simulation?
          </p>

          <p style={{ marginTop: "30px", fontSize: "22px", lineHeight: "1.9" }}>
            Where <strong>The Sims meets Grand Theft Auto with a soul.</strong>
          </p>

          <div style={{
            marginTop: "50px",
            padding: "16px 30px",
            border: "1px solid white",
            borderRadius: "999px",
            display: "inline-block",
            boxShadow: "0 0 25px rgba(120,255,230,0.3)"
          }}>
            Enter The Experience
          </div>
        </div>
      </section>

      <section style={{
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), radial-gradient(circle at center, rgba(0,255,210,0.22), transparent 35%), linear-gradient(135deg, #061f1d, #020202 55%, #180018)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ maxWidth: "1100px" }}>
          <p style={{ letterSpacing: "4px", textTransform: "uppercase", opacity: 0.75 }}>
            Vertical Slice One
          </p>

          <h2 style={{
            fontSize: "clamp(48px, 8vw, 110px)",
            margin: "20px 0",
            textShadow: "0 0 35px rgba(0,255,210,0.35)"
          }}>
            The Neon Diner
          </h2>

          <p style={{
            maxWidth: "850px",
            margin: "0 auto",
            fontSize: "21px",
            lineHeight: "1.9",
            opacity: 0.9
          }}>
            A rainy night. A glowing retro diner. A world that feels ordinary until it starts to repeat.
            The lights shift. The sound changes. The characters notice you noticing.
          </p>

          <div style={{
            margin: "50px auto 0",
            maxWidth: "920px",
            minHeight: "360px",
            borderRadius: "30px",
            border: "1px solid rgba(255,255,255,0.18)",
            background:
              "radial-gradient(circle at 50% 35%, rgba(0,255,210,0.45), transparent 18%), radial-gradient(circle at 50% 45%, rgba(255,70,210,0.28), transparent 30%), linear-gradient(180deg, #06211f, #050505)",
            boxShadow: "0 0 60px rgba(0,255,210,0.22)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px"
          }}>
            <div>
              <h3 style={{ fontSize: "42px", marginBottom: "16px" }}>NEON DINER</h3>
              <p style={{ fontSize: "18px", opacity: 0.8 }}>
                Placeholder visual block for diner concept art, Unreal render, or teaser still.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Your life is the gameplay</h2>

        <p style={{
          maxWidth: "850px",
          margin: "30px auto",
          lineHeight: "1.9",
          fontSize: "20px",
          opacity: 0.85
        }}>
          You can build a life. Create relationships. Chase success.
          Become rich, connected, and powerful, or lose everything.
        </p>

        <p style={{ fontSize: "22px", marginTop: "20px" }}>There are no fixed paths.</p>
        <p style={{ marginTop: "10px", fontSize: "20px", opacity: 0.85 }}>You can evolve or devolve.</p>
        <p style={{ marginTop: "30px", fontSize: "20px", opacity: 0.85 }}>
          Every choice shapes what happens next.
        </p>
      </section>

      <section style={{ padding: "100px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>The Awareness System</h2>

        <p style={{ maxWidth: "900px", margin: "30px auto", lineHeight: "1.9", fontSize: "20px", opacity: 0.85 }}>
          There is another layer.
        </p>

        <p style={{ fontSize: "22px", marginTop: "20px" }}>
          A system inspired by hypnotherapy.
        </p>

        <p style={{ marginTop: "20px", fontSize: "20px", opacity: 0.85 }}>
          Pause. Reset. Choose differently.
        </p>

        <p style={{ marginTop: "30px", fontSize: "20px" }}>The more aware you become,</p>
        <p style={{ fontSize: "22px", marginTop: "10px" }}>the more control you gain.</p>

        <p style={{ marginTop: "40px", fontSize: "18px", opacity: 0.75 }}>
          Includes hypnotherapy-informed guidance, breath cues, guided awareness moments,
          and optional binaural audio experiences.
        </p>
      </section>

      <section style={{ padding: "100px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Short Teaser</h2>

        <div style={{
          maxWidth: "880px",
          margin: "34px auto 0",
          borderRadius: "28px",
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.05)",
          padding: "40px",
          boxShadow: "0 0 40px rgba(120,255,230,0.08)"
        }}>
          <p style={{ fontSize: "22px", lineHeight: "1.8", opacity: 0.88 }}>
            “Can you see your own face right now?
            You’re inside a body, moving through a world that feels real.
            Welcome to Earth School.”
          </p>

          <p style={{ marginTop: "26px", fontSize: "18px", opacity: 0.72 }}>
            Video placeholder: add teaser trailer, vertical slice preview, or concept reel here.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Built with real technology</h2>

        <p style={{ maxWidth: "900px", margin: "30px auto", lineHeight: "1.9", fontSize: "20px", opacity: 0.85 }}>
          Built in Unreal Engine using realistic environments and MetaHuman characters.
        </p>

        <p style={{ marginTop: "20px", opacity: 0.85 }}>
          Designed for Meta Quest, spatial computing, Ray-Ban Meta glasses, and future AR layers.
        </p>

        <p style={{ marginTop: "20px", opacity: 0.85 }}>
          Expanding from VR into real-world interaction through companion prompts, awareness nudges,
          and mixed reality experiences.
        </p>

        <p style={{ marginTop: "30px", fontSize: "20px" }}>
          Awareness becomes the input.
        </p>
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 30px 100px"
      }}>
        {[
          "Retro diner vertical slice",
          "Loop-based awareness progression",
          "AI companion system",
          "Real-world prompts via AR glasses",
          "Presence and social connection",
          "Mixed reality experience",
          "Perception-driven gameplay",
          "MetaHuman character interactions",
        ].map((item) => (
          <div key={item} style={{
            padding: "25px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.05)"
          }}>
            {item}
          </div>
        ))}
      </section>

      <section style={{
        padding: "110px 30px",
        textAlign: "center",
        background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0))"
      }}>
        <h2 style={{ fontSize: "42px" }}>Investor and Partner Layer</h2>

        <p style={{
          maxWidth: "920px",
          margin: "30px auto",
          lineHeight: "1.9",
          fontSize: "20px",
          opacity: 0.86
        }}>
          EARTH SCHOOL is positioned as a cross-platform awareness system spanning VR,
          AR, spatial computing, AI companions, immersive wellbeing, and real-world behavioral interaction.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "50px auto 0"
        }}>
          {[
            ["Prototype", "Unreal Engine vertical slice beginning with the retro diner experience."],
            ["Platform Fit", "Meta Quest, AR glasses, spatial computing, and companion experiences."],
            ["Wellbeing Market", "Awareness, presence, reflection, and guided state-shifting."],
            ["Partnership Ask", "Developer support, strategic partnership, prototype funding, and incubation."],
          ].map(([title, text]) => (
            <div key={title} style={{
              padding: "26px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.055)"
            }}>
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>{title}</h3>
              <p style={{ lineHeight: "1.65", opacity: 0.75 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "100px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>A new category</h2>

        <p style={{ maxWidth: "900px", margin: "30px auto", lineHeight: "1.9", fontSize: "20px", opacity: 0.85 }}>
          Not just a game. Not just an app. Not just a wellness product.
        </p>

        <p style={{ fontSize: "22px", marginTop: "20px" }}>
          A perception-driven spatial computing experience where awareness is the input.
        </p>

        <p style={{ marginTop: "40px", fontSize: "20px", fontStyle: "italic" }}>
          “What if awareness itself became the controller?”
        </p>
      </section>

      <section style={{ padding: "120px 30px", textAlign: "center" }}>
        <p style={{
          fontSize: "clamp(36px, 6vw, 80px)",
          lineHeight: "1.2",
          textShadow: "0 0 30px rgba(255,255,255,0.2)"
        }}>
          This is not about escaping the simulation.
        </p>

        <p style={{ fontSize: "28px", marginTop: "20px" }}>
          It’s about mastering it.
        </p>

        <p style={{ marginTop: "40px", fontSize: "20px", opacity: 0.8 }}>
          Are you reacting?
        </p>

        <p style={{ fontSize: "26px", marginTop: "10px" }}>
          Or are you playing?
        </p>
      </section>

    </main>
  );
}
