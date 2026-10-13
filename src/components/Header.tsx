import { useState } from "react";
import Icon from "./Icon";
import { navLinks } from "../data";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-extrabold">
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#5B4BFF" />
        <circle cx="16" cy="16" r="8" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="3" />
        <path d="M16 8a8 8 0 0 1 8 8" fill="none" stroke="#C8F169" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className={light ? "text-white" : "text-ink"}>FocusFlow</span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-ink/70 transition-colors hover:text-iris">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#pricing" className="btn-primary hidden sm:inline-flex">Get Started</a>
          <button type="button" className="rounded-lg p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="container-x flex flex-col gap-1 border-t border-ink/10 pb-5 pt-3 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 font-medium hover:bg-iris-soft">{l.label}</a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary mt-2">Get Started</a>
        </nav>
      )}
    </header>
  );
}
