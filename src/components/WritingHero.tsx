// Pure Server Component
// globals.css additions at bottom of file

const fontSerif = "var(--font-baskerville), Georgia, serif";
const fontMono  = "var(--font-chivo-mono), 'Courier New', monospace";

const SG = {
  bg:     "#F0F5F0",
  border: "#A8C8A8",
  accent: "#5A8C60",
  heading:"#1E3A22",
  muted:  "#4A6B50",
};

export default function WritingHero() {
  return (
    <section
      style={{
        backgroundColor: SG.bg,
        borderBottom: `0.5px solid ${SG.border}`,
      }}
    >
      <div className="max-w-[680px] mx-auto px-6 pt-12 md:pt-20 pb-10 md:pb-14">

        {/* Label */}
        <p
          className="mb-5 md:mb-7"
          style={{
            fontFamily: fontMono,
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: SG.muted,
          }}
        >
          Writing
        </p>

        {/* Heading */}
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
          Things I felt like
        </h1>
        <h1
          className="mb-6 md:mb-8"
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
          writing down.
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: fontMono,
            fontSize: "clamp(12px, 2vw, 13px)",
            lineHeight: 1.8,
            letterSpacing: "0.01em",
            color: SG.muted,
            maxWidth: "440px",
          }}
        >
          Technical essays, poems, and other things — published and personal.
          Some of it is useful. Some of it is just honest.
        </p>

      </div>
    </section>
  );
}