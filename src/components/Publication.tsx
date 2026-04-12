// Pure Server Component
//
// globals.css additions:
// .pub-card:hover { background-color: #E8F0E8; }
// .pub-card:hover .pub-arrow { color: #1E3A22; }

const fontSerif = "var(--font-baskerville), Georgia, serif";
const fontMono  = "var(--font-chivo-mono), 'Courier New', monospace";

const SG = {
  bg:      "#F0F5F0",
  surface: "#D4E5D4",
  border:  "#A8C8A8",
  accent:  "#5A8C60",
  heading: "#1E3A22",
  muted:   "#4A6B50",
};

type Publication = {
  title: string;
  publication: string;
  desc: string;
  date: string;
  href: string;
};

const PUBLICATIONS: Publication[] = [
  {
    title: "Your Article Title Here",
    publication: "Publication Name",
    desc: "One line about what this piece covers and why it was worth writing.",
    date: "Mar 2026",
    href: "#",
  },
  {
    title: "Another Published Piece",
    publication: "Another Publication",
    desc: "What's the thesis? What would someone take away from reading this?",
    date: "Jan 2026",
    href: "#",
  },
  {
    title: "Third Published Work",
    publication: "Platform or Journal",
    desc: "Keep it punchy — the description should make someone want to click.",
    date: "Nov 2025",
    href: "#",
  },
];

export default function Publications() {
  return (
    <section
      style={{
        backgroundColor: SG.bg,
        borderTop: `0.5px solid ${SG.border}`,
      }}
    >
      <div className="max-w-[680px] mx-auto px-6 py-12 md:py-16">

        {/* Section header */}
        <div
          className="flex items-baseline justify-between mb-8"
          style={{ borderBottom: `0.5px solid ${SG.border}`, paddingBottom: "12px" }}
        >
          <span
            style={{ fontFamily: fontMono, fontSize: "10px", letterSpacing: "0.1em", color: SG.muted }}
          >
            Publications
          </span>
          <span
            style={{ fontFamily: fontMono, fontSize: "10px", color: SG.muted }}
          >
            {String(PUBLICATIONS.length).padStart(2, "0")}
          </span>
        </div>

        {/* Publication cards */}
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          {PUBLICATIONS.map((pub) => (
            <li key={pub.title}>
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pub-card"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "18px 20px",
                  backgroundColor: SG.surface,
                  border: `0.5px solid ${SG.border}`,
                  borderLeft: `3px solid ${SG.accent}`,
                  borderRadius: "5px",
                  textDecoration: "none",
                  transition: "background-color 0.15s ease",
                }}
              >
                <div style={{ flex: 1 }}>
                  {/* Publication name badge */}
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: fontMono,
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: SG.accent,
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    {pub.publication}
                  </span>

                  {/* Title */}
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: fontSerif,
                      fontSize: "clamp(15px, 2.5vw, 17px)",
                      fontWeight: 700,
                      color: SG.heading,
                      lineHeight: 1.25,
                      letterSpacing: "-0.1px",
                    }}
                  >
                    {pub.title}
                  </p>

                  {/* Description */}
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
                    {pub.desc}
                  </p>

                  {/* Date */}
                  <span
                    style={{
                      fontFamily: fontMono,
                      fontSize: "10px",
                      color: SG.muted,
                      opacity: 0.7,
                    }}
                  >
                    {pub.date}
                  </span>
                </div>

                {/* Arrow */}
                <span
                  className="pub-arrow"
                  style={{
                    fontFamily: fontMono,
                    fontSize: "15px",
                    color: SG.border,
                    marginTop: "2px",
                    flexShrink: 0,
                    transition: "color 0.15s ease",
                  }}
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}