// Pure Server Component

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

const STACK = [
  { name: "Next.js / React",            type: "frontend" },
  { name: "Node.js / FastAPI",          type: "backend"  },
  { name: "Supabase / Postgres",        type: "data"     },
  { name: "Projection / Infotainment",  type: "embedded" },
  { name: "Claude API",                 type: "ai"       },
];

const NOW = [
  "Building my proof-of-work site",
  "Working on automotive infotainment systems",
  "Reading — add your current book here",
  "Writing more, shipping more",
];

export default function About() {
  return (
    <main style={{ backgroundColor: SG.bg }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ borderBottom: `0.5px solid ${SG.border}` }}>
        <div className="max-w-[680px] mx-auto px-6 pt-12 md:pt-20 pb-12 md:pb-16">

          <p
            className="mb-5 md:mb-7"
            style={{ fontFamily: fontMono, fontSize: "11px", letterSpacing: "0.08em", color: SG.muted }}
          >
            About
          </p>

          <h1
            className="mb-0"
            style={{
              fontFamily: fontSerif,
              fontSize: "clamp(32px, 6vw, 50px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              color: SG.heading,
            }}
          >
            Developer, builder,
          </h1>
          <h1
            className="mb-8 md:mb-10"
            style={{
              fontFamily: fontSerif,
              fontSize: "clamp(32px, 6vw, 50px)",
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              color: SG.muted,
            }}
          >
            occasional poet.
          </h1>

          {/* Bio paragraphs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "520px",
            }}
          >
            {[
              "I'm Tanu Shree — a full stack developer based in Kolkata. I build things end to end: frontend, backend, embedded systems. I care about the whole thing working, not just my part of it.",
              "By day I work on automotive infotainment and projection systems — software that ships inside real cars, close to the metal. Outside of that I build web products, write essays, and occasionally a poem.",
              "I'm currently open to interesting projects and full-time roles. If something I've built or written resonates, reach out.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: fontMono,
                  fontSize: "clamp(12px, 2vw, 13px)",
                  lineHeight: 1.85,
                  color: SG.muted,
                  letterSpacing: "0.01em",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
            {[
              { label: "tanushree.wrk@gmail.com", href: "mailto:tanushree.wrk@gmail.com" },
              { label: "x.com/@txnuushree",       href: "https://x.com/txnuushree" },
              { label: "github/tanuushree",        href: "https://github.com/tanuushree" },
              { label: "linkedin/tanuushree",      href: "https://www.linkedin.com/in/tanuushree/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="about-link"
                style={{
                  fontFamily: fontMono,
                  fontSize: "12px",
                  color: SG.accent,
                  textDecoration: "none",
                  borderBottom: `1px solid ${SG.border}`,
                  paddingBottom: "1px",
                  transition: "color 0.15s ease, border-color 0.15s ease",
                }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ── STACK ────────────────────────────────────────────── */}
      <section style={{ borderBottom: `0.5px solid ${SG.border}` }}>
        <div className="max-w-[680px] mx-auto px-6 py-12 md:py-14">

          <span
            style={{
              display: "block",
              fontFamily: fontMono,
              fontSize: "10px",
              letterSpacing: "0.1em",
              color: SG.muted,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `0.5px solid ${SG.border}`,
            }}
          >
            Currently using
          </span>

          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {STACK.map((s, i) => (
              <li
                key={s.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderTop: i === 0 ? "none" : `0.5px solid ${SG.border}`,
                }}
              >
                <span
                  style={{
                    fontFamily: fontMono,
                    fontSize: "13px",
                    color: SG.heading,
                    letterSpacing: "0.01em",
                  }}
                >
                  {s.name}
                </span>
                <span
                  style={{
                    fontFamily: fontMono,
                    fontSize: "10px",
                    color: SG.muted,
                    opacity: 0.7,
                    letterSpacing: "0.06em",
                  }}
                >
                  {s.type}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── NOW ──────────────────────────────────────────────── */}
      <section style={{ borderBottom: `0.5px solid ${SG.border}` }}>
        <div className="max-w-[680px] mx-auto px-6 py-12 md:py-14">

          <span
            style={{
              display: "block",
              fontFamily: fontMono,
              fontSize: "10px",
              letterSpacing: "0.1em",
              color: SG.muted,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `0.5px solid ${SG.border}`,
            }}
          >
            Now — {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </span>

          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {NOW.map((item) => (
              <li
                key={item}
                style={{ display: "flex", alignItems: "baseline", gap: "12px" }}
              >
                <span style={{ color: SG.accent, fontFamily: fontMono, fontSize: "12px", flexShrink: 0 }}>—</span>
                <span style={{ fontFamily: fontMono, fontSize: "13px", color: SG.muted, lineHeight: 1.6 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── COLOPHON ─────────────────────────────────────────── */}
      <section>
        <div className="max-w-[680px] mx-auto px-6 py-8 md:py-10">
          <p
            style={{
              fontFamily: fontMono,
              fontSize: "11px",
              fontStyle: "italic",
              color: SG.muted,
              opacity: 0.7,
              lineHeight: 1.7,
            }}
          >
            Built with Next.js, Tailwind CSS & Claude API.
            Designed in Figma. Hosted on Vercel.
            Set in Libre Baskerville and Chivo Mono.
          </p>
        </div>
      </section>

    </main>
  );
}