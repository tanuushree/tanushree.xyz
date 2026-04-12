"use client"

const fontSerif = "var(--font-baskerville), Georgia, serif";
const fontMono = "var(--font-chivo-mono), 'Courier New', monospace";

const SG = {
  bg: "#F0F5F0",
  surface: "#D4E5D4",
  border: "#A8C8A8",
  accent: "#5A8C60",
  heading: "#1E3A22",
  muted: "#4A6B50",
};

export default function Contact() {
  return (
    <section >
        <div className="max-w-[680px] mx-auto px-6 py-3 md:py-6" >

          {/* Label */}
          <p
            className="mb-5"
            style={{
              fontFamily: fontMono,
              fontSize: "11px",
              letterSpacing: "0.08em",
              borderBottom: `0.5px solid ${SG.border}`,
              marginBottom: "20px",
              paddingBottom: "12px",
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
              { label: "x.com (twitter)", href: "https://x.com/txnuushree" },
              { label: "github", href: "https://github.com/tanuushree" },
              { label: "linkedin", href: "https://www.linkedin.com/in/tanuushree/" },
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
    );  
} 