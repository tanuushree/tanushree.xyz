// Pure Server Component
//
// globals.css additions:
// .writing-row:hover { background-color: #E8F0E8; }
// .writing-row:hover .writing-arrow { color: #1E3A22; }

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

type Writing = {
  title: string;
  desc: string;
  date: string;
  readTime: string;
  href: string;
};

const TECHNICAL: Writing[] = [
  {
    title: "How I think about full stack architecture",
    desc: "A mental model for making decisions when building alone.",
    date: "Mar 2026",
    readTime: "6 min",
    href: "#",
  },
  {
    title: "Why most side projects die in week two",
    desc: "It's not motivation. It's the wrong kind of problem.",
    date: "Jan 2026",
    readTime: "4 min",
    href: "#",
  },
  {
    title: "Building with AI APIs — what no one tells you",
    desc: "The gap between the demo and the thing people actually use.",
    date: "Nov 2025",
    readTime: "8 min",
    href: "#",
  },
  {
    title: "Projection systems in automotive UX",
    desc: "What it's like to write software that ships inside a car.",
    date: "Sep 2025",
    readTime: "5 min",
    href: "#",
  },
];

function WritingRow({ item, first }: { item: Writing; first: boolean }) {
  return (
    <li
      style={{
        borderTop: first ? "none" : `0.5px solid ${SG.border}`,
      }}
    >
      <a
        href={item.href}
        className="writing-row"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "start",
          gap: "16px",
          padding: "18px 12px",
          textDecoration: "none",
          borderRadius: "4px",
          transition: "background-color 0.15s ease",
          marginLeft: "-12px",
          marginRight: "-12px",
        }}
      >
        <div>
          {/* Title */}
          <p
            className="mb-[6px]"
            style={{
              fontFamily: fontSerif,
              fontSize: "clamp(15px, 2.5vw, 17px)",
              fontWeight: 700,
              color: SG.heading,
              lineHeight: 1.25,
              letterSpacing: "-0.1px",
            }}
          >
            {item.title}
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
            {item.desc}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: fontMono,
                fontSize: "10px",
                color: SG.muted,
                opacity: 0.7,
              }}
            >
              {item.date}
            </span>
            <span style={{ color: SG.border, fontSize: "10px" }}>·</span>
            <span
              style={{
                fontFamily: fontMono,
                fontSize: "10px",
                color: SG.muted,
                opacity: 0.7,
              }}
            >
              {item.readTime} read
            </span>
          </div>
        </div>

        {/* Arrow */}
        <span
          className="writing-arrow"
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
  );
}

export default function TechnicalWritings() {
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
            Technical
          </span>
          <span
            style={{ fontFamily: fontMono, fontSize: "10px", color: SG.muted }}
          >
            {String(TECHNICAL.length).padStart(2, "0")}
          </span>
        </div>

        {/* Rows */}
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {TECHNICAL.map((item, i) => (
            <WritingRow key={item.title} item={item} first={i === 0} />
          ))}
        </ul>

      </div>
    </section>
  );
}