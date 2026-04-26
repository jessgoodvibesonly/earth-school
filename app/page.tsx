export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "white",
        fontFamily: "Georgia, serif",
        background: `
          radial-gradient(circle at 50% 18%, rgba(190,120,255,0.28), transparent 30%),
          radial-gradient(circle at 20% 70%, rgba(255,160,120,0.18), transparent 35%),
          radial-gradient(circle at 80% 55%, rgba(120,200,255,0.14), transparent 40%),
          linear-gradient(180deg, #080015 0%, #160022 35%, #2b1145 65%, #050005 100%)
        `,
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <p style={{ fontSize: "20px", opacity: 0.8 }}>
            Can you see your own face right now?
          </p>

          <p style={{ marginTop: "10px", opacity: 0.7 }}>
            Strange, isn’t it?
          </p>

          <p style={{ marginTop: "30px", fontSize: "20px", lineHeight: "1.8" }}>
            You’re here, inside a body, moving through a world that feels completely real.
          </p>

          <h1
            style={{
              fontSize: "clamp(60px, 10vw, 140px)",
              marginTop: "40px",
              textShadow: "0 0 50px rgba(190,120,255,0.55)",
            }}
          >
            EARTH SCHOOL
          </h1>

          <p style={{ fontSize: "24px", marginTop: "20px", color: "#f0ddff" }}>
            A Temporary Human Experience
          </p>

          <p style={{ marginTop: "40px", fontSize: "20px", lineHeight: "1.9", opacity: 0.85 }}>
            What if this is a 3D simulation?
          </p>

          <p style={{ marginTop: "30px", fontSize: "22px", lineHeight: "1.9" }}>
            Where <strong>The Sims meets Grand Theft Auto with a soul.</strong>
          </p>

          <div
            style={{
              marginTop: "50px",
              padding: "16px 30px",
              border: "1px solid white",
              borderRadius: "999px",
              display: "inline-block",
              boxShadow: "0 0 35px rgba(190,120,255,0.55)",
            }}
          >
            Enter The Experience
          </div>
        </div>
      </section>

      {/* NEON DINER */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.18)",
          borderBottom: "1px solid rgba(255,255,255,0.18)",
          background: `
            radial-gradient(circle at 50% 38%, rgba(0,255,210,0.25), transparent 28%),
            radial-gradient(circle at 50% 62%, rgba(255,0,180,0.2), transparent 38%),
            linear-gradient(180deg, rgba(20,0,40,0.9), rgba(0,0,0,0.94))
          `,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "760px",
            height: "760px",
            background: "radial-gradient(circle, rgba(190,120,255,0.35), transparent 60%)",
            filter: "blur(120px)",
            zIndex: 0,
          }}
        />

        <div style={{ maxWidth: "950px", position: "relative", zIndex: 1 }}>
          <p style={{ letterSpacing: "4px", textTransform: "uppercase", opacity: 0.75 }}>
            Vertical Slice One
          </p>

          <h2
            style={{
              fontSize: "clamp(58px, 8vw, 120px)",
              margin: "20px 0",
              textShadow: "0 0 40px rgba(0,255,210,0.6)",
            }}
          >
            NEON DINER
          </h2>

          <p style={{ fontSize: "22px", opacity: 0.88, lineHeight: "1.8" }}>
            A rainy night. A glowing retro diner. A moment that repeats until you notice it.
          </p>

          <p style={{ marginTop: "30px", fontSize: "18px", opacity: 0.72 }}>
            The lights shift. The sound changes. The characters notice you noticing.
          </p>

          <p style={{ marginTop: "30px", fontSize: "22px" }}>
            This is where awareness begins.
          </p>
        </div>
      </section>

      {/* CORE IDEA */}
      <section style={{ padding: "100px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Your life is the gameplay</h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "30px auto",
            lineHeight: "1.9",
            fontSize: "20px",
            opacity: 0.85,
          }}
        >
          You can build a life. Create relationships. Chase success.
          Become rich, connected, and powerful, or lose everything.
        </p>

        <p style={{ fontSize: "22px", marginTop: "20px" }}>There are no fixed paths.</p>
        <p style={{ marginTop: "10px", fontSize: "20px", opacity: 0.85 }}>You can evolve or devolve.</p>
        <p style={{ marginTop: "30px", fontSize: "20px", opacity: 0.85 }}>
          Every choice shapes what happens next.
        </p>
      </section>

      {/* AWARENESS SYSTEM */}
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

      {/* TEASER */}
      <section style={{ padding: "100px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Short Teaser</h2>

        <div
          style={{
            maxWidth: "880px",
            margin: "34px auto 0",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.06)",
            padding: "40px",
            boxShadow: "0 0 45px rgba(190,120,255,0.18)",
          }}
        >
          <p style={{ fontSize: "22px", lineHeight: "1.8", opacity: 0.88 }}>
            “Can you see your own face right now? You’re inside a body, moving through a world that feels real.
            Welcome to Earth School.”
          </p>

          <p style={{ marginTop: "26px", fontSize: "18px", opacity: 0.72 }}>
            Video placeholder: add teaser trailer, vertical slice preview, or concept reel here.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY */}
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

        <p style={{ marginTop: "30px", fontSize: "20px" }}>Awareness becomes the input.</p>
      </section>

      {/* FEATURES */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 30px 100px",
        }}
      >
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
          <div
            key={item}
            style={{
              padding: "25px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.055)",
              boxShadow: "0 0 35px rgba(190,120,255,0.12)",
            }}
          >
            {item}
          </div>
        ))}
      </section>

      {/* INVESTOR */}
      <section
        style={{
          padding: "110px 30px",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0))",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>Investor and Partner Layer</h2>

        <p
          style={{
            maxWidth: "920px",
            margin: "30px auto",
            lineHeight: "1.9",
            fontSize: "20px",
            opacity: 0.86,
          }}
        >
          EARTH SCHOOL is positioned as a cross-platform awareness system spanning VR,
          AR, spatial computing, AI companions, immersive wellbeing, and real-world behavioral interaction.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "50px auto 0",
          }}
        >
          {[
            ["Prototype", "Unreal Engine vertical slice beginning with the retro diner experience."],
            ["Platform Fit", "Meta Quest, AR glasses, spatial computing, and companion experiences."],
            ["Wellbeing Market", "Awareness, presence, reflection, and guided state-shifting."],
            ["Partnership Ask", "Developer support, strategic partnership, prototype funding, and incubation."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                padding: "26px",
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.055)",
                boxShadow: "0 0 35px rgba(190,120,255,0.12)",
              }}
            >
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>{title}</h3>
              <p style={{ lineHeight: "1.65", opacity: 0.75 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section style={{ padding: "120px 30px", textAlign: "center" }}>
        <p
          style={{
            fontSize: "clamp(36px, 6vw, 80px)",
            lineHeight: "1.2",
            textShadow: "0 0 40px rgba(190,120,255,0.45)",
          }}
        >
          This is not about escaping the simulation.
        </p>

        <p style={{ fontSize: "28px", marginTop: "20px" }}>It’s about mastering it.</p>

        <p style={{ marginTop: "40px", fontSize: "20px", opacity: 0.8 }}>
          Are you reacting?
        </p>

        <p style={{ fontSize: "26px", marginTop: "10px" }}>Or are you playing?</p>
      </section>
    </main>
  );
}
