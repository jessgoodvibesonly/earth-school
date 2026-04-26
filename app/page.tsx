export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #050505 0%, #000000 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          marginTop: "120px",
          marginBottom: "120px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          EARTH SCHOOL
        </h1>

        <h2
          style={{
            fontSize: "22px",
            opacity: 0.7,
            marginBottom: "40px",
          }}
        >
          A Temporary Human Experience
        </h2>

        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.7",
            fontSize: "18px",
            opacity: 0.85,
          }}
        >
          This is not just a game.
          <br /><br />
          This is an experience where awareness shapes reality,
          perception defines your world,
          and your choices influence what unfolds next.
          <br /><br />
          You are not just playing.
          <br />
          You are creating.
        </p>

        <div
          style={{
            marginTop: "50px",
            display: "inline-block",
            padding: "14px 28px",
            border: "1px solid white",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Enter Earth School
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          marginBottom: "120px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "32px", marginBottom: "20px" }}>
          The Experience
        </h3>

        <p style={{ lineHeight: "1.7", opacity: 0.8 }}>
          EARTH SCHOOL is an interactive experience blending consciousness,
          psychology, storytelling, and immersive technology.
          <br /><br />
          It explores what it means to be human through awareness,
          reflection, and choice.
          <br /><br />
          Every interaction becomes a mirror.
          Every moment becomes a lesson.
        </p>
      </section>

      {/* FOUNDER */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          marginBottom: "120px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Created by
        </h3>

        <p style={{ lineHeight: "1.7", opacity: 0.8 }}>
          Rev. Dr. Jessica Simmonds is a visionary entrepreneur,
          clinical hypnotherapist, and Spiritual Life Coach
          building at the intersection of consciousness and technology.
          <br /><br />
          Her work explores the idea that we are spiritual beings
          having a human experience—and that awareness allows us
          to consciously shape reality.
        </p>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h3 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Are you aware?
        </h3>

        <p style={{ opacity: 0.7, marginBottom: "30px" }}>
          The experience is already happening.
        </p>
      </section>
    </main>
  );
}
