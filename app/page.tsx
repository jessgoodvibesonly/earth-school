export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px"
    }}>
      <div>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          EARTH SCHOOL
        </h1>

        <p style={{ fontSize: "20px", opacity: 0.7 }}>
          A Temporary Human Experience
        </p>
      </div>
    </div>
  );
}
