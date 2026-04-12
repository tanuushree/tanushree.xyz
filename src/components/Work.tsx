type Project = {
  name: string;
  desc: string;
  tags: string[];
  href: string;
};

const PROJECTS: Project[] = [
  {
    name: "ETHMumbai 2026",
    desc: "Official website for ETHMumbai 2026 - BEST Conference and Hackathon. Focused on making ticketing seamless at scale. Integrated Razorpay and DAIMO Pay for both INR and crypto payments, and handled high-demand drops like Christmas and launch. Sold 500+ tickets (50 within the first hour), reached 50K+ impressions, and managed the entire communication flow end-to-end.",
    tags: ["Next.js", "Nest.js", "PostgreSQL", "Razorpay", "DAIMO Pay"],
    href: "https://www.ethmumbai.in/",
  },
  {
    name: "Project Two",
    desc: "What problem did this solve? One sentence, honest, specific.",
    tags: ["Next.js", "Tailwind", "AI"],
    href: "#",
  }
];

// ── Shared style tokens ───────────────────────────────────────────
const SG = {
  bg:      "#F0F5F0",
  surface: "#D4E5D4",
  border:  "#A8C8A8",
  accent:  "#5A8C60",
  heading: "#1E3A22",
  muted:   "#4A6B50",
};

const fontSerif = "var(--font-baskerville), Georgia, serif";
const fontMono  = "var(--font-chivo-mono), 'Courier New', monospace";

export default function Work() {
  return (
    <section
      id="work"
      style={{
        backgroundColor: SG.bg,
        borderTop: `0.5px solid ${SG.border}`,
      }}
    >
      <div className="max-w-[680px] mx-auto px-6 py-8 md:py-12">

        {/* Section header */}
        <div
          className="flex items-baseline justify-between mb-4 md:mb-6"
          style={{ borderBottom: `0.5px solid ${SG.border}`, paddingBottom: "12px" }}
        >
          <span
            style={{
              fontFamily: fontMono,
              fontSize: "10px",
              letterSpacing: "0.1em",
              color: SG.muted,
            }}
          >
            Things I have recently worked on
          </span>
          <span
            style={{
              fontFamily: fontMono,
              fontSize: "10px",
              letterSpacing: "0.08em",
              color: SG.muted,
            }}
          >
            {String(PROJECTS.length).padStart(2, "0")}
          </span>
        </div>

        {/* Project rows */}
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {PROJECTS.map((project, i) => (
            <li
              key={project.name}
              style={{
                borderTop: i === 0 ? "none" : `0.5px solid ${SG.border}`,
              }}
            >
              <a
                href={project.href}
                className="project-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "start",
                  gap: "16px",
                  padding: "20px 12px",
                  textDecoration: "none",
                  borderRadius: "4px",
                  transition: "background-color 0.15s ease",
                  marginLeft: "-12px",
                  marginRight: "-12px",
                }}
              >
                {/* Left: name + desc + tags */}
                <div>
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: fontSerif,
                      fontSize: "clamp(17px, 3vw, 20px)",
                      fontWeight: 700,
                      color: SG.heading,
                      lineHeight: 1.2,
                      letterSpacing: "-0.2px",
                    }}
                  >
                    {project.name}
                  </p>

                  <p
                    className="mb-3"
                    style={{
                      fontFamily: fontMono,
                      fontSize: "12px",
                      color: SG.muted,
                      lineHeight: 1.7,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-[6px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: fontMono,
                          fontSize: "10px",
                          letterSpacing: "0.04em",
                          color: SG.heading,
                          backgroundColor: SG.surface,
                          border: `0.5px solid ${SG.border}`,
                          padding: "3px 10px",
                          borderRadius: "3px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: arrow */}
                <span
                  className="project-arrow"
                  style={{
                    fontFamily: fontMono,
                    fontSize: "16px",
                    color: SG.border,
                    marginTop: "2px",
                    transition: "color 0.15s ease",
                    flexShrink: 0,
                  }}
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Automotive callout */}
        <div
          className="mt-10 md:mt-12"
          style={{
            borderTop: `0.5px solid ${SG.border}`,
            paddingTop: "32px",
          }}
        >
          <span
            style={{
              fontFamily: fontMono,
              fontSize: "10px",
              letterSpacing: "0.1em",
              color: SG.muted,
              display: "block",
              marginBottom: "16px",
            }}
          >
            Also
          </span>

          <div
            style={{
              backgroundColor: SG.surface,
              border: `0.5px solid ${SG.border}`,
              borderRadius: "5px",
              padding: "20px 24px",
              borderLeft: `3px solid ${SG.accent}`,
            }}
          >
            <p
              className="mb-2"
              style={{
                fontFamily: fontSerif,
                fontSize: "15px",
                fontWeight: 700,
                color: SG.heading,
              }}
            >
              Automotive & Embedded Systems
            </p>
            <p
              style={{
                fontFamily: fontMono,
                fontSize: "12px",
                color: SG.muted,
                lineHeight: 1.75,
                letterSpacing: "0.01em",
              }}
            >
              Projection systems &amp; infotainment features for in-car UX —
              close to the metal, shipping on real hardware.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}