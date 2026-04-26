export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(120,180,170,0.45), transparent 35%), linear-gradient(180deg, #071716 0%, #000 45%, #050008 100%)",
        color: "white",
        fontFamily: "Georgia, serif",
        overflow: "hidden",
      }}
    >
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 28px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16), transparent 10%), radial-gradient(circle at 80% 30%, rgba(255,120,220,0.18), transparent 16%), radial-gradient(circle at 50% 80%, rgba(120,220,255,0.12), transparent 18%)",
            opacity: 0.9,
          }}
        />

        <div style={{ maxWidth: "1100px", position: "relative", zIndex: 2 }}>
          <p
            style={{
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontSize: "13px",
              opacity: 0.8,
              marginBottom: "24px",
            }}
          >
            A consciousness-shifting game experience
          </p>

          <h1
            style={{
              fontSize: "clamp(68px, 13vw, 180px)",
              lineHeight: "0.9",
              fontWeight: 400,
              margin: 0,
              textShadow: "0 0 34px rgba(255,255,255,0.25)",
            }}
          >
            EARTH
            <br />
            SCHOOL
          </h1>

          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 54px)",
              fontWeight: 300,
              marginTop: "30px",
              marginBottom: "34px",
              color: "#e7f8f5",
            }}
          >
            A Temporary Human Experience
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "21px",
              lineHeight: "1.75",
              color: "rgba(255,255,255,0.86)",
            }}
          >
            What if life was not random?
            <br />
            What if your attention changed the world around you?
            <br />
            What if awareness was the input?
          </p>

          <div
            style={{
              marginTop: "44px",
              display: "inline-block",
              padding: "16px 34px",
              border: "1px solid rgba(255,255,255,0.75)",
              borderRadius: "999px",
              boxShadow: "0 0 28px rgba(150,255,240,0.28)",
              fontSize: "16px",
              letterSpacing: "1px",
            }}
          >
            Enter The Experience
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 28px", textAlign: "center" }}>
        <h3 style={{ fontSize: "46px", fontWeight: 400, marginBottom: "24px" }}>
          This is not just a game.
        </h3>

        <p
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.78)",
          }}
        >
          EARTH SCHOOL is an interactive experience where perception shapes the
          environment, choices create consequences, and awareness changes what
          the player can see, hear, feel, and understand.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "22px",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 28px 100px",
        }}
      >
        {[
          ["Awareness as Input", "The player evolves through attention, reflection, and conscious choice."],
          ["The Filter System", "Reality shifts as the player refines perception, energy, and internal state."],
          ["The Vessel", "Mind, body, emotion, and environment become part of the gameplay system."],
          ["Immersive Technology", "Designed for spatial computing, VR, AR, and future companion experiences."],
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              padding: "28px",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.055)",
              boxShadow: "0 0 40px rgba(120,255,235,0.08)",
              minHeight: "190px",
            }}
          >
            <h4 style={{ fontSize: "24px", marginBottom: "14px" }}>{title}</h4>
            <p style={{ lineHeight: "1.65", color: "rgba(255,255,255,0.72)" }}>
              {text}
            </p>
          </div>
        ))}
      </section>

      <section
        style={{
          padding: "100px 28px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
        }}
      >
        <h3 style={{ fontSize: "44px", fontWeight: 400, marginBottom: "28px" }}>
          Created by Rev. Dr. Jessica Simmonds
        </h3>

        <p
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            fontSize: "19px",
            lineHeight: "1.85",
            color: "rgba(255,255,255,0.78)",
          }}
        >
          Jessica is a visionary entrepreneur, published author, clinical
          hypnotherapist, Spiritual Life Coach, neurodivergent thinker, wife,
          mother of five, multimedia artist, singer, instructor, and public
          speaker. She has believed for decades that we are spiritual beings
          having a human experience.
          <br />
          <br />
          Through Aspire, Aspire PODS, Aspire Game Academy, EARTH SCHOOL, and
          Aspire Global Foundation, she is building a connected ecosystem for
          human potential, conscious leadership, creativity, and impact.
        </p>
      </section>

      <section style={{ padding: "90px 28px 120px", textAlign: "center" }}>
        <p
          style={{
            fontSize: "clamp(32px, 6vw, 78px)",
            lineHeight: "1.1",
            margin: 0,
            textShadow: "0 0 30px rgba(255,255,255,0.22)",
          }}
        >
          You are not just playing.
          <br />
          You are creating.
        </p>
      </section>
    </main>
  );
}
