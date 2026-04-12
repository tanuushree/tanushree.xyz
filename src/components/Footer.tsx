"use client"

const fontMono = "var(--font-chivo-mono), 'Courier New', monospace";
const SG = {
  bg: "#F0F5F0",
  surface: "#D4E5D4",
  border: "#A8C8A8",
  accent: "#5A8C60",
  heading: "#1E3A22",
  muted: "#4A6B50",
};

export default function Footer() {
  return (
    <footer className="w-full border-t mt-16 py-6"
    style={{
        backgroundColor: SG.bg,
        borderTop: `0.5px solid ${SG.border}`,
      }}>
      <div
        className="max-w-2xl mx-auto px-4 flex items-center justify-between"
        style={{
          fontFamily: fontMono,
          fontSize: "11px",
          fontStyle: "italic",
          color: SG.muted,
          opacity: 0.7,
          lineHeight: 1.7,
        }}
      >
        <p>© {new Date().getFullYear()} Tanu Shree</p>

        <p className="flex items-center gap-1">
          Built with
          <span>Next.js</span>
          <span>&</span>
          <span>Tailwind</span>
        </p>
      </div>
    </footer>
  );
}