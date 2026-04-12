"use client"
export default function Hero() {
  return (
    <section style={{ backgroundColor: "#F0F5F0" }}>
      <div
        className="
          max-w-[680px] mx-auto px-6
          pt-10 md:pt-12
          pb-10 md:pb-12
        "
      >
        {/* Label — Chivo Mono */}
        <p
          className="mb-5 md:mb-7"
          style={{
            fontFamily: "var(--font-chivo-mono), 'Courier New', monospace",
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: "#4A6B50",
          }}
        >
          Developer & Builder
        </p>

        {/* Heading — Libre Baskerville Bold */}
        <h1
          className="mb-0"
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(32px, 6vw, 50px)",
            lineHeight: 1.1,
            fontWeight: 700,
            color: "#1E3A22",
            letterSpacing: "-0.5px",
          }}
        >
          Building things that
        </h1>

        {/* Italic line — Libre Baskerville Italic */}
        <h1
          className="mb-6 md:mb-8"
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(32px, 6vw, 50px)",
            lineHeight: 1.1,
            fontWeight: 700,
            fontStyle: "italic",
            color: "#4A6B50",
            letterSpacing: "-0.5px",
          }}
        >
          actually work.
        </h1>

        {/* Description — Chivo Mono */}
        <p
          className="mb-8 md:mb-10 max-w-[480px]"
          style={{
            fontFamily: "var(--font-chivo-mono), 'Courier New', monospace",
            fontSize: "clamp(12px, 2vw, 13px)",
            lineHeight: 1.8,
            color: "#4A6B50",
            letterSpacing: "0.01em",
          }}
        >
          Full stack developer based in Kolkata. I build products
          end-to-end — from the first commit to the thing people actually use.
        </p>

        {/* CTA — filled button, Chivo Mono */}
        <a
          href="#work"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-chivo-mono), 'Courier New', monospace",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.04em",
            backgroundColor: "#5A8C60",
            color: "#F0F5F0",
            padding: "10px 22px",
            borderRadius: "3px",
            textDecoration: "none",
            transition: "background-color 0.15s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#4A7A50")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#5A8C60")
          }
        >
          See my work  ↓
        </a>
      </div>
    </section>
  );
}