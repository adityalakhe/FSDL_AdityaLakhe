function Header({ dark, setDark }) {
  return (
    <header style={{
      textAlign: "center",
      padding: "20px",
      background: "#282c34",
      color: "white",
      position: "relative",
    }}>
      <h1>Student Portfolio - ADITYA LAKHE</h1>
      <p>Third Year CSE Student</p>

      <button
        onClick={() => setDark(!dark)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "20px",
          color: "white",
          padding: "6px 14px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Header;
