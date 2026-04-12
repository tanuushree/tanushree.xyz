// Pure Server Component
//
// globals.css additions:
// .poem-card:hover { background-color: #E8F0E8; }
// .poem-card:hover .poem-arrow { color: #1E3A22; }

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

type Piece = {
  title: string;
  desc: string;
  date: string;
  type: "poem" | "essay" | "note";
  href: string;
};

const POEMS: Piece[] = [
  {
    title: "3am and the cursor blinks",
    desc: "On the particular loneliness of debugging alone.",
    date: "Feb 2026",
    type: "poem",
    href: "#",
  },
  {
    title: "Kolkata, monsoon, deadline",
    desc: "A city and a feeling and a pull request.",
    date: "Aug 2025",
    type: "poem",
    href: "#",
  },
  {
    title: "Commit history",
    desc: "What git log says about who you were.",
    date: "May 2025",
    type: "poem",
    href: "#",
  },
  {
    title: "Things I wish I'd known at 18",
    desc: "Not advice. Just observations from the other side.",
    date: "Dec 2025",
    type: "note",
    href: "#",
  },
  {
    title: "On finishing things",
    desc: "A note to myself about shipping imperfect work.",
    date: "Oct 2025",
    type: "essay",
    href: "#",
  },
];

const TYPE_LABELS: Record<Piece["type"], string> = {
  poem:  "poem",
  essay: "essay",
  note:  "note",
};

export default function Poems() {
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
            Poems & Other Things
          </span>
          <span
            style={{ fontFamily: fontMono, fontSize: "10px", color: SG.muted }}
          >
            {String(POEMS.length).padStart(2, "0")}
          </span>
        </div>

        {/* Cards — 2 col on md+, 1 col mobile */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {POEMS.map((piece) => (
            <li key={piece.title}>
              <a
                href={piece.href}
                className="poem-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  padding: "18px 20px",
                  backgroundColor: SG.surface,
                  border: `0.5px solid ${SG.border}`,
                  borderRadius: "5px",
                  textDecoration: "none",
                  transition: "background-color 0.15s ease",
                  minHeight: "130px",
                }}
              >
                <div>
                  {/* Type label */}
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: fontMono,
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: SG.accent,
                      marginBottom: "8px",
                    }}
                  >
                    — {TYPE_LABELS[piece.type]}
                  </span>

                  {/* Title — italic for poems, bold for essays/notes */}
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: fontSerif,
                      fontSize: "clamp(14px, 2.5vw, 16px)",
                      fontWeight: piece.type === "poem" ? 400 : 700,
                      fontStyle: piece.type === "poem" ? "italic" : "normal",
                      color: SG.heading,
                      lineHeight: 1.3,
                    }}
                  >
                    {piece.title}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: fontMono,
                      fontSize: "11px",
                      color: SG.muted,
                      lineHeight: 1.7,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {piece.desc}
                  </p>
                </div>

                {/* Date + arrow */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fontMono,
                      fontSize: "10px",
                      color: SG.muted,
                      opacity: 0.7,
                    }}
                  >
                    {piece.date}
                  </span>
                  <span
                    className="poem-arrow"
                    style={{
                      fontFamily: fontMono,
                      fontSize: "13px",
                      color: SG.border,
                      transition: "color 0.15s ease",
                    }}
                  >
                    ↗
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}