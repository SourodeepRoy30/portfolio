"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#interests", label: "Interests" },
  { href: "#socials", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!scrolled) setOpen(false);
  }, [scrolled]);

  const showFullNav = !scrolled;

  return (
    <nav className="sticky top-0 z-50 px-8 py-5">
      {showFullNav && (
        <div className="hidden md:flex justify-end gap-8 text-base font-heading">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-accent hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(79,168,255,0.8)] transition-all duration-200 inline-block"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <div className={`${showFullNav ? "md:hidden" : ""} flex justify-end relative`} ref={menuRef}>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-foreground hover:text-accent transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {open && (
          <div className="absolute top-10 right-0 min-w-[160px] rounded-xl border border-border bg-background/95 backdrop-blur-md py-3 flex flex-col shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
            {LINKS.map((link) => (
             <a 
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-sm text-muted hover:text-accent hover:bg-white/[.04] hover:drop-shadow-[0_0_8px_rgba(79,168,255,0.8)] transition-colors px-5 py-2.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}