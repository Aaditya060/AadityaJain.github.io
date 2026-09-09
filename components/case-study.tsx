"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import { JOURNEY, LINKS } from "@/lib/content";
import { useMode } from "@/components/mode-context";
import { SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/reveal";

export function CaseStudy() {
  const { mode } = useMode();
  return (
    <section id="internkhojo" className="scroll-mt-20 py-24 sm:py-32" aria-label="InternKhojo case study">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHead
            index="01"
            eyebrow={mode === "founder" ? "Case study · founder work" : "Case study · systems work"}
            title={
              <>
                InternKhojo: from a blank canvas to a{" "}
                <span className="font-serifit font-normal italic text-accent">live product.</span>
              </>
            }
            copy={
              mode === "founder"
                ? "The ownership story — problem, positioning, solo build, GTM, and growing a team around it."
                : "The engineering story — architecture calls, data model, and the iteration discipline of a solo full-stack builder."
            }
          />
        </Reveal>
        <Reveal>
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Founder &amp; full-stack developer · sole builder
                </p>
                <h3 className="mt-4 font-grotesk text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  The internship gap for Indian students is real. I decided to close it.
                </h3>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={mode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-5 leading-relaxed text-zinc-400"
                  >
                    {mode === "founder"
                      ? "I found the problem on my own campus, shaped the concept and positioning, designed and built the platform, wrote the brand and copy, shipped it live — then figured out distribution and grew a 30+ intern team to run it with me."
                      : "Next.js frontend with server components for fast listing pages, Supabase for auth + Postgres + storage, and an editorial review pass on every listing so students can trust what they apply to. Shipped in thin vertical slices, each one usable."}
                  </motion.p>
                </AnimatePresence>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={LINKS.live}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex h-12 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-[#0a0a0b] transition hover:brightness-110"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Visit live product <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                  <a
                    href="#leadership"
                    className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6 text-sm font-semibold text-zinc-100 transition hover:border-white/35"
                  >
                    <Users className="size-4" aria-hidden /> How I lead the team
                  </a>
                </div>
              </div>
              <dl className="grid content-start gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {[
                  ["Role", "Sole founder", "Product · design · engineering · GTM"],
                  ["Stack", "Next.js + Supabase", "Auth, Postgres, storage, deploys"],
                  ["Status", "Live + iterating", "internkhojo.com"],
                  ["Team", "30+ interns", "Leading execution today"],
                ].map(([k, v, s]) => (
                  <div key={k} className="bg-ink-900 px-6 py-5">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">{k}</dt>
                    <dd className="mt-1 font-semibold text-white">{v}</dd>
                    <dd className="text-sm text-zinc-500">{s}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ol className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {JOURNEY.map((s) => (
                <li key={s.n} className="border-white/10 p-7 odd:border-r max-lg:[&:nth-child(5)]:border-b sm:[&:nth-child(odd)]:border-r lg:[&:not(:nth-child(3n))]:border-r [&:nth-child(-n+4)]:max-lg:border-b [&:nth-child(-n+3)]:lg:border-b">
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-accent">{s.n}</span>
                  <h4 className="mt-2 font-grotesk text-lg font-bold text-white">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.body}</p>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
