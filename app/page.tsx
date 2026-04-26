export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        fontFamily: "sans-serif"
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "20px",
          letterSpacing: "1px"
        }}
      >
        EARTH SCHOOL
      </h1>

      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "30px",
          color: "#aaa"
        }}
      >
        A Temporary Human Experience
      </h2>

      <p
        style={{
          maxWidth: "600px",
          lineHeight: "1.6",
          fontSize: "1.1rem",
          marginBottom: "40px"
        }}
      >
        You are not here by accident.
        <br />
        <br />
        This is not just life.
        <br />
        <br />
        This is a school.
      </p>

      <div
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          border: "1px solid #fff",
          borderRadius: "30px",
          cursor: "pointer",
          transition: "0.3s"
        }}
      >
        Enter Experience
      </div>
    </main>
  );
}
