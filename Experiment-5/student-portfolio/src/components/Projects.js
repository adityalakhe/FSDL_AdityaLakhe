import { useState } from "react";

const projectsData = [
  {
    title: "Dynamic Pricing & Inventory Management System",
    description:
      "A system that automatically adjusts product prices based on demand, stock levels, and competitor data. Built to optimize revenue and reduce overstock.",
    tech: ["Python", "ML", "SQL", "Flask"],
    color: "#4f46e5",
  },
  {
    title: "Amul Advertisement NLP & Vision Analysis Platform",
    description:
      "Analyzed Amul's iconic ad campaigns using NLP and computer vision. Extracts sentiment, themes, and visual elements from decades of advertisements.",
    tech: ["Python", "NLP", "OpenCV", "Pandas"],
    color: "#0891b2",
  },
  {
    title: "Cloud Native Code Collaboration Platform",
    description:
      "A real-time collaborative coding environment hosted on the cloud. Supports multiple users editing simultaneously with live sync and version control.",
    tech: ["React", "Node.js", "WebSockets", "Docker"],
    color: "#059669",
  },
];

function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.list}>
        {projectsData.map((project, index) => {
          const isOpen = expanded === index;
          return (
            <div
              key={index}
              style={{
                ...styles.card,
                borderLeft: `4px solid ${project.color}`,
              }}
            >
              <div
                style={styles.cardHeader}
                onClick={() => setExpanded(isOpen ? null : index)}
              >
                <div style={styles.cardLeft}>
                  <span style={{ ...styles.number, color: project.color }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span style={styles.title}>{project.title}</span>
                </div>
                <span style={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
              </div>

              {isOpen && (
                <div style={styles.cardBody}>
                  <p style={styles.description}>{project.description}</p>
                  <div style={styles.tags}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          ...styles.tag,
                          background: project.color + "18",
                          color: project.color,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
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
    marginBottom: "24px",
    color: "#1a1a2e",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  card: {
    borderRadius: "8px",
    background: "#f8f9ff",
    border: "1px solid #eaeaf5",
    overflow: "hidden",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 20px",
    cursor: "pointer",
    userSelect: "none",
  },
  cardLeft: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  number: {
    fontWeight: "700",
    fontSize: "18px",
    fontFamily: "monospace",
    minWidth: "32px",
  },
  title: {
    fontWeight: "600",
    fontSize: "15px",
    color: "#1a1a2e",
  },
  arrow: {
    fontSize: "11px",
    color: "#aaa",
  },
  cardBody: {
    padding: "16px 20px 20px 66px",
    borderTop: "1px solid #eaeaf5",
  },
  description: {
    color: "#555",
    fontSize: "14px",
    lineHeight: "1.7",
    margin: "0 0 14px",
  },
  tags: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  tag: {
    fontSize: "12px",
    fontWeight: "600",
    padding: "4px 10px",
    borderRadius: "99px",
  },
};

export default Projects;
