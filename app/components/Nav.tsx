"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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
      <div className="flex justify-end items-center gap-8">
        {showFullNav && (
          <div className="hidden md:flex gap-8 text-[17px]">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link inline-block pb-1 text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <ThemeToggle />

        <div
          className={`${showFullNav ? "md:hidden" : ""} relative`}
          ref={menuRef}
        >
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-foreground hover:text-accent transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {open && (
            <div className="absolute top-10 right-0 min-w-[160px] rounded-xl border border-border bg-background/95 backdrop-blur-md py-3 flex flex-col shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-muted hover:text-accent hover:bg-surface transition-colors px-5 py-2.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}