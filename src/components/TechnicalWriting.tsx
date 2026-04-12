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
  readTime: string;
  href: string;
};

const TECHNICAL: Writing[] = [
  {
    title: "Optimizing AAOS Updates with Fastboot in Modern Cars",
    desc: "Role of Fastboot in Automotive Software Updates, Boot Optimization, and System Recovery.",
    readTime: "7 min",
    href: "https://samaritanhelpmission.org/donate",
  },
  {
    title: "Automotive Industry’s Shift to SoCs",
    desc: "The automotive industry is undergoing a major transformation, driven by the increasing complexity of modern vehicles and the need for advanced computing power.",
    readTime: "5 min",
    href: "https://medium.com/@tanushree.tnay/automotive-industrys-shift-to-socs-14b178bd1cc4",
  },
  {
    title: "Okto: The Smarter Way to Build for Web3",
    desc: "The biggest challenge I faced in my Web3 development journey was the fragmentation of features. ",
    readTime: "4 min",
    href: "https://medium.com/@tanushree.tnay/unleashing-the-power-okto-simplifying-web3-development-for-all-499004e6872f",
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