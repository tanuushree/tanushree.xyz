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
  readTime: string;
  type: "poem" | "article" | "essay";
  href: string;
};

const POEMS: Piece[] = [
{
    title: "Perpetual Pursuit",
    desc: "Romance, in its most seductive form, thrives on absence.",
    readTime: "2 min",
    type: "poem",
    href: "https://medium.com/@tanushree.tnay/perpetual-pursuit-02c83e5fcda0",
  },
{
    title: "you are out of cigarettes",
    desc: "When everything in your life starts to go wrong, you’ll realise ’you are out of cigarettes’.",
    readTime: "2 min",
    type: "essay",
    href: "https://open.substack.com/pub/tanuushree/p/you-are-out-of-cigarettes?utm_campaign=post-expanded-share&utm_medium=post%20viewer",
  },
  {
    title: "How We Made Pain Pretty and Branded Vulnerability",
    desc: "We’ve made pain performative.",
    readTime: "3 min",
    type: "article",
    href: "https://medium.com/@tanushree.tnay/how-we-made-pain-pretty-and-branded-vulnerability-f3583b4a15b3",
  },
  {
    title: "almost a childhood.",
    desc: "You don’t feel the ache in your bones because you never had something. You feel it because — you almost did.",
    readTime: "2 min",
    type: "essay",
    href: "https://open.substack.com/pub/tanuushree/p/almost-a-childhood?utm_campaign=post-expanded-share&utm_medium=post%20viewer",
  },
];

const TYPE_LABELS: Record<Piece["type"], string> = {
  poem:  "poem",
  article: "article",
  essay:  "essay",
};

export default function Poems() {
  return (
    <section
    >
      <div className="max-w-[680px] mx-auto px-6 py-3 md:py-6">

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
                      fontWeight: 700,
                      fontStyle: "italic",
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
                    {piece.readTime} read
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