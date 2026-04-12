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
  "Building a focus system using a script that tracks active windows and triggers an LED alert when I switch to distracting apps using raspberry pi.",
  "Exploring Apple CarPlay Ultra.",
  "Reading — Birds of Angel by Patti Smith",
  "Writing (trying).",
];

export default function About() {
  return (
    <main style={{ backgroundColor: SG.bg }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: SG.bg,
        borderTop: `0.5px solid ${SG.border}`,
      }}>
        <div className="max-w-[680px] mx-auto px-6 pt-8 md:pt-12 pb-8 md:pb-12">

          <p
            className="mb-5 md:mb-7"
            style={{ fontFamily: fontMono, fontSize: "11px", letterSpacing: "0.08em", color: SG.muted }}
          >
            About
          </p>

          <h1
            className="mb-8 md:mb-10"
            style={{
              fontFamily: fontSerif,
              fontSize: "clamp(32px, 6vw, 50px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              color: SG.heading,
            }}
          >
            me, briefly. 
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
              "I build products end-to-end, with a focus on making complex things simple to use — especially when it comes to AI and high-conversion user flows. That’s shown up in work like ETHMumbai 2026, where I built the ticketing and communication system handling multiple sale drops, INR + crypto payments, and real user traffic.",
              "Currently, I’m at Visteon, working on in-vehicle infotainment systems — including Apple CarPlay integration and API-level development for OEMs like Mahindra, Jaguar Land Rover, Škoda, and Tata.",,
              "I enjoy working across both — building fast, user-facing products and systems that need to be reliable in the real world."
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
              { label: "x.com (twitter)",       href: "https://x.com/txnuushree" },
              { label: "github",        href: "https://github.com/tanuushree" },
              { label: "linkedin",      href: "https://www.linkedin.com/in/tanuushree/" },
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
      {/* <section style={{ borderBottom: `0.5px solid ${SG.border}` }}>
        <div className="max-w-[680px] mx-auto px-6 py-3 md:py-6">

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
      </section> */}

      {/* ── NOW ──────────────────────────────────────────────── */}
      <section style={{ borderBottom: `0.5px solid ${SG.border}` }}>
        <div className="max-w-[680px] mx-auto px-6 py-3 md:py-6">

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
      {/* ── CONTACT ───────────────────────────────────────────── */}
<section>
  <div className="max-w-[680px] mx-auto px-6 py-8 md:py-10">

    {/* Label */}
    <p
      className="mb-5"
      style={{
        fontFamily: fontMono,
        fontSize: "11px",
        letterSpacing: "0.08em",
        color: SG.muted,
      }}
    >
      Contact
    </p>

    {/* Heading */}
    <h2
      className="mb-6"
      style={{
        fontFamily: fontSerif,
        fontSize: "clamp(22px, 4vw, 28px)",
        fontWeight: 700,
        color: SG.heading,
      }}
    >
      Let’s work together.
    </h2>

    {/* Description */}
    <p
      className="mb-6 max-w-[520px]"
      style={{
        fontFamily: fontMono,
        fontSize: "13px",
        lineHeight: 1.7,
        color: SG.muted,
      }}
    >
      Looking to build something meaningful, ship fast, or improve how people experience your product? I’d love to hear from you.
    </p>

    {/* Links */}
    <div className="flex flex-wrap gap-4">
      {[
       { label: "tanushree.wrk@gmail.com", href: "mailto:tanushree.wrk@gmail.com" },
        { label: "x.com (twitter)",       href: "https://x.com/txnuushree" },
        { label: "github",        href: "https://github.com/tanuushree" },
        { label: "linkedin",      href: "https://www.linkedin.com/in/tanuushree/" },
      ].map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
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

    </main>
  );
}