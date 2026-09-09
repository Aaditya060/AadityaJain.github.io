"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { HERO, LINKS, STATS, type Mode } from "@/lib/content";
import { useMode } from "@/components/mode-context";

function HeroCopy({ mode }: { mode: Mode }) {
  const h = HERO[mode];
  return (
    <motion.div
      key={mode}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
        <span className="text-accent">●</span> <span className="ml-2">{h.kicker}</span>
      </p>
      <h1 className="mt-6 font-grotesk text-[clamp(2.9rem,7.5vw,5.8rem)] font-bold leading-[0.98] tracking-tightest text-white">
        {h.titleA}{" "}
        <span className="font-serifit font-normal italic text-accent">{h.titleAccent}</span>
        {h.titleB ? ` ${h.titleB}` : ""}
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">{h.sub}</p>
      <p className="mt-4 border-l-2 pl-4 text-sm text-zinc-500" style={{ borderColor: "var(--accent)" }}>
        {h.note}
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href={h.primaryHref}
          className="inline-flex h-12 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-[#0a0a0b] transition hover:brightness-110"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {h.primaryCta} <ArrowDown className="size-4" aria-hidden />
        </a>
        <a
          href="#contact"
          className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-zinc-100 transition hover:border-white/35"
        >
          Let's talk <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const { mode, setMode } = useMode();
  const portrait =
    mode === "founder"
      ? {
          src: "/images/Me.png",
          alt: "Aaditya Jain, founder of InternKhojo",
          caption: "Founder, InternKhojo — leading 30+",
        }
      : {
          src: "/images/about_me.jpeg",
          alt: "Aaditya Jain working on hardware",
          caption: "Engineer, TIET '27 — hardware + software",
        };
  return (
    <section id="top" className="relative overflow-hidden pt-16" aria-label="Intro">
      <div className="bg-blueprint pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-16 pt-16 sm:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <AnimatePresence mode="wait">
            <HeroCopy key={mode} mode={mode} />
          </AnimatePresence>
          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Switch perspective">
            {(["engineer", "founder"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] transition ${
                  mode === m
                    ? "border-transparent text-[#0a0a0b]"
                    : "border-white/15 text-zinc-400 hover:border-white/35 hover:text-white"
                }`}
                style={mode === m ? { backgroundColor: "var(--accent)" } : undefined}
              >
                {m === "founder" ? "→ Founder lens" : "→ Engineer lens"}
              </button>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              <div className="overflow-hidden rounded-2xl border border-white/12 bg-ink-800">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  width={640}
                  height={800}
                  priority
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-xs text-zinc-500">
                <span>{portrait.caption}</span>
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block size-2 rounded-full bg-emerald-400" aria-hidden />
                  Open to internships
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl px-5 pb-14">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-5 ${i > 0 ? "border-l border-white/10" : ""} ${
                i >= 2 ? "max-lg:border-t max-lg:border-white/10 max-lg:[&:nth-child(3)]:border-l-0" : ""
              }`}
            >
              <dt className="order-2 mt-1 text-[13px] text-zinc-500">{s.label}</dt>
              <dd className="order-1 font-grotesk text-2xl font-bold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-center font-mono text-xs text-zinc-600">
          <a href={LINKS.live} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">
            internkhojo.com
          </a>{" "}
          · New Delhi, India · {LINKS.email}
        </p>
      </div>
    </section>
  );
}
