"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 6px",
        borderRadius: "3px",
        fontFamily: "var(--font-chivo-mono), 'Courier New', monospace",
        fontSize: "11px",
        letterSpacing: "0.06em",
        color: "var(--color-muted)",
        transition: "color 0.15s ease",
        lineHeight: 1,
      }}
      className="theme-toggle"
    >
      {isDark ? "light" : "dark"}
    </button>
  );
}