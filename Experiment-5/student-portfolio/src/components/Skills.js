import { useState } from "react";

const skillsData = {
  Languages: ["Python", "C++", "JavaScript"],
  Frontend: ["HTML", "CSS", "React"],
  Tools: ["Git", "VS Code", "Linux"],
};

const categories = ["All", ...Object.keys(skillsData)];

function Skills() {
  const [active, setActive] = useState("All");

  const displayed =
    active === "All"
      ? Object.values(skillsData).flat()
      : skillsData[active] || [];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Skills</h2>

      <div style={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              ...styles.filterBtn,
              ...(active === cat ? styles.filterBtnActive : {}),
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.grid}>
        {displayed.map((skill) => (
          <div key={skill} style={styles.chip}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px 30px",
    margin: "10px",
    borderRadius: "8px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#1a1a2e",
  },
  filters: {
    display: "flex",
    gap: "10px",
    marginBottom: "24px",
    flexWrap: "wrap",
  },
  filterBtn: {
    padding: "6px 18px",
    borderRadius: "20px",
    border: "2px solid #e0e0e0",
    background: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    color: "#555",
    transition: "all 0.2s ease",
  },
  filterBtnActive: {
    background: "#1a1a2e",
    color: "white",
    borderColor: "#1a1a2e",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  chip: {
    padding: "8px 20px",
    borderRadius: "20px",
    background: "#f0f0ff",
    border: "1px solid #ddddf5",
    color: "#1a1a2e",
    fontWeight: "600",
    fontSize: "14px",
  },
};

export default Skills;
