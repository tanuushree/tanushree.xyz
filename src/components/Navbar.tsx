"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../components/ThemeToggle";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "work", href: "/" },
  { label: "about", href: "/about" },
  { label: "writings", href: "/writings" },
];

const SOCIALS = [
  { label: "x.com", href: "https://x.com/txnuushree" },
  { label: "github", href: "https://github.com/tanuushree" },
  { label: "linkedin", href: "https://www.linkedin.com/in/tanuushree/" },
  { label: "email", href: "mailto:tanushree.wrk@gmail.com" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      style={{
        backgroundColor: "#F0F5F0",
        borderBottom: "0.5px solid #A8C8A8",
        fontFamily: "'Space Grotesk', system-ui, sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* ── TOP BAR ───────────────── */}
      <div className="max-w-[680px] mx-auto px-6 relative">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Left */}
          <div className="flex flex-col justify-center gap-[3px]">
            <Link
              href="/"
              style={{
                fontFamily: "'Literata', Georgia, serif",
                fontSize: "17px",
                fontWeight: 700,
                color: "#1E3A22",
                textDecoration: "none",
              }}
            >
              Tanu Shree
            </Link>

            <div className="hidden md:flex items-center gap-3 text-[11px] text-[#4A6B50]">
              {SOCIALS.map((s, i) => (
                <span key={s.label} className="flex items-center gap-3">
                  <a
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="hover:text-[#1E3A22]"
                  >
                    {s.label}
                  </a>
                  {i < SOCIALS.length - 1 && <span className="text-[#A8C8A8]">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 text-[13px]">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={label} className="relative">
                  <Link
                    href={href}
                    className={`transition-colors ${
                      isActive ? "text-[#1E3A22] font-medium" : "text-[#4A6B50]"
                    }`}
                  >
                    {label}
                    <span
                      className="absolute left-0 -bottom-[27px] h-[1px] bg-[#5A8C60] transition-all duration-200"
                      style={{ width: isActive ? "100%" : "0" }}
                    />
                  </Link>
                </li>    
              );
            })}
            <ThemeToggle />
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className="block w-[20px] h-[1.5px] bg-[#1E3A22] transition"
                style={{
                  transform: menuOpen
                    ? "translateY(6.5px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                className="block w-[20px] h-[1.5px] bg-[#1E3A22] transition"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-[20px] h-[1.5px] bg-[#1E3A22] transition"
                style={{
                  transform: menuOpen
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </span>
          </button>
        </div>

        {/* ── MOBILE MENU (ABSOLUTE FIX) ───────────────── */}
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            transition: "all 0.25s ease",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
            pointerEvents: menuOpen ? "auto" : "none",
            backgroundColor: "#F0F5F0",
            borderTop: "0.5px solid #A8C8A8",
            zIndex: 40,
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-6">

            {/* Links */}
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      style={{
                        fontFamily: "'Literata', Georgia, serif",
                        fontSize: "26px",
                        fontWeight: isActive ? 700 : 400,
                        fontStyle: isActive ? "italic" : "normal",
                        color: isActive ? "#1E3A22" : "#4A6B50",
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="h-[0.5px] bg-[#A8C8A8]" />

            {/* Socials */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[12px]">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#4A6B50] hover:text-[#1E3A22]"
                >
                  {s.label}
                  <span className="text-[10px] opacity-60">↗</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}