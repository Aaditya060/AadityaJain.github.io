"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#internkhojo", label: "InternKhojo" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-white/10 bg-[#0a0a0b]/85 backdrop-blur-xl" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight text-white">
          aaditya<span className="text-accent">.</span>jain
        </a>
        <nav className="ml-8 hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden sm:block">
          <ModeToggle compact />
        </div>
        <a
          href={LINKS.resume}
          download
          className="hidden h-9 items-center gap-1 rounded-lg px-4 text-[13px] font-semibold text-[#0a0a0b] transition hover:brightness-110 md:inline-flex"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Resume <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
        <button
          className="ml-1 inline-flex size-9 items-center justify-center rounded-lg border border-white/12 text-zinc-200 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#0a0a0b]/95 backdrop-blur-xl lg:hidden"
            aria-label="Mobile"
          >
            <div className="space-y-1 px-5 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-zinc-200 hover:bg-white/[0.06]"
                >
                  {n.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <ModeToggle compact />
                <a
                  href={LINKS.resume}
                  download
                  className="inline-flex h-9 items-center gap-1 rounded-lg px-4 text-[13px] font-semibold text-[#0a0a0b]"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Resume <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
