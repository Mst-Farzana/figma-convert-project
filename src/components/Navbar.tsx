"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = ["Services", "Markets", "About", "Clients", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border" // ✅ পরিবর্তন: border-foreground/10 এর জায়গায় border-border
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* ── LOGO ── */}
        <a href="#" className="flex items-center gap-2.5">
          <div
            className={`w-7 h-7 flex items-center justify-center transition-colors duration-300 ${
              scrolled ? "bg-foreground" : "bg-accent"
            }`}
          >
            <span
              className={`text-sm font-black font-display leading-none transition-colors duration-300 ${
                scrolled ? "text-accent" : "text-white"
              }`}
            >
              N
            </span>
          </div>
          <span
            className={`font-sans font-semibold text-[15px] tracking-tight transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            NexaTrade
          </span>
        </a>

        {/* ── DESKTOP NAVIGATION ── */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, l.toLowerCase())}
              className={`font-sans text-sm transition-colors duration-200 tracking-wide ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* ── DESKTOP BUTTONS ── */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className={`font-sans text-sm font-medium px-4 py-2 border transition-colors duration-200 ${
              scrolled
                ? "border-foreground/30 hover:border-foreground text-foreground"
                : "border-white/30 hover:border-white text-white"
            }`}
          >
            Log in
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="font-sans text-sm font-semibold px-4 py-2 bg-accent text-accent-foreground hover:bg-accent-hover transition-colors duration-200"
          >
            Get Started →
          </a>
        </div>

        {/* ── MOBILE MENU BUTTON ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 transition-all duration-200 ${
              scrolled ? "bg-foreground" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-200 ${
              scrolled ? "bg-foreground" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-200 ${
              scrolled ? "bg-foreground" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
          />
        </button>
      </div>

      {/* ─ MOBILE MENU ── */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, l.toLowerCase())}
              className="font-sans text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="font-sans text-sm font-semibold px-4 py-2.5 bg-accent text-accent-foreground text-center hover:bg-accent-hover transition-colors"
          >
            Get Started →
          </a>
        </div>
      )}
    </header>
  );
}
