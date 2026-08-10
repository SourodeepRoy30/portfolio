"use client";

import { useState } from "react";
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

  return (
    <nav className="sticky top-0 z-50 px-8 py-5">
      <div className="hidden md:flex justify-end gap-8 text-sm font-heading">
        {LINKS.map((link) => (
         <a 
            key={link.href}
            href={link.href}
            className="text-muted hover:text-accent hover:scale-110 transition-all duration-200 inline-block"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="md:hidden flex justify-end">
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-end gap-4 mt-4 font-heading text-sm">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}