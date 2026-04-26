export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 20%, rgba(120,255,230,0.15), transparent 30%), linear-gradient(180deg, #061212 0%, #000 45%, #050008 100%)",
        color: "white",
        fontFamily: "Georgia, serif",
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
          padding: "60px 28px",
        }}
      >
        <div style={{ maxWidth: "1000px" }}>
          <h1
            style={{
              fontSize: "clamp(70px, 12vw, 160px)",
              lineHeight: "0.9",
              margin: 0,
              textShadow: "0 0 40px rgba(255,255,255,0.25)",
            }}
          >
            EARTH SCHOOL
          </h1>

          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 48px)",
              fontWeight: 300,
              marginTop: "24px",
              color: "#dffaf4",
            }}
          >
            A Temporary Human Experience
          </h2>

          <p
            style={{
              marginTop: "30px",
              fontSize: "20px",
              lineHeight: "1.8",
              opacity: 0.85,
            }}
          >
            This is not just a game.
            <br />
            This is an experience.
            <br />
            <br />
            A space where awareness shapes reality,
            <br />
            and perception becomes the interface.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "inline-block",
              padding: "16px 32px",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "999px",
              boxShadow: "0 0 25px rgba(120,255,230,0.25)",
            }}
          >
            Enter Earth School
          </div>
        </div>
      </section>

      {/* WELLBEING POSITIONING */}
      <section
        style={{
          padding: "100px 28px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "44px", marginBottom: "30px" }}>
          An immersive wellbeing experience
        </h3>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.9",
            opacity: 0.85,
          }}
        >
          EARTH SCHOOL is designed as an immersive wellbeing experience,
          not a traditional game.
          <br /><br />
          It encourages awareness, presence, and reflection,
          creating a grounded environment where users can observe
          how attention and perception influence their experience.
        </p>
      </section>

      {/* CORE CONCEPT */}
      <section
        style={{
          padding: "80px 28px",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "44px", marginBottom: "30px" }}>
          The Experience
        </h3>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.9",
            opacity: 0.85,
          }}
        >
          EARTH SCHOOL blends consciousness, psychology, storytelling,
          and immersive technology into a new category of experience.
          <br /><br />
          Players move through environments where their internal state,
          attention, and choices influence what they see, hear, and feel.
          <br /><br />
          Every interaction becomes a mirror.
          Every moment becomes a lesson.
        </p>
      </section>

      {/* SYSTEMS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 28px",
        }}
      >
        {[
          ["Awareness as Input", "Your attention directly influences the experience."],
          ["The Filter", "Perception shapes the world you experience."],
          ["The Vessel", "Your internal state affects your external reality."],
          ["Conscious Choice", "Every decision creates a new path forward."],
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              padding: "28px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <h4 style={{ fontSize: "22px", marginBottom: "12px" }}>
              {title}
            </h4>
            <p style={{ opacity: 0.75 }}>{text}</p>
          </div>
        ))}
      </section>

      {/* TECH POSITIONING */}
      <section
        style={{
          padding: "100px 28px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "40px", marginBottom: "24px" }}>
          Built for immersive technology
        </h3>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.9",
            opacity: 0.85,
          }}
        >
          EARTH SCHOOL begins in virtual reality and extends into augmented
          reality, allowing the experience to move beyond the headset and into
          everyday life.
          <br /><br />
          The goal is not escape.
          <br />
          The goal is awareness within reality.
        </p>
      </section>

      {/* FINAL MESSAGE */}
      <section
        style={{
          padding: "120px 28px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "clamp(36px, 6vw, 80px)",
            lineHeight: "1.2",
            textShadow: "0 0 30px rgba(255,255,255,0.2)",
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
