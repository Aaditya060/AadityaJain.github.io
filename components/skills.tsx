import { ArrowUpRight } from "lucide-react";
import { LINKS, SKILL_GROUPS } from "@/lib/content";
import { SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/reveal";

const CERTS = [
  { name: "Deloitte Data Analytics Job Simulation", href: LINKS.certDeloitte },
  { name: "HackerRank SQL — Basic", href: LINKS.certSqlBasic },
  { name: "HackerRank SQL — Intermediate", href: LINKS.certSqlMid },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-white/10 py-24 sm:py-28" aria-label="Skills">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHead
            index="04"
            eyebrow="Engineer toolkit"
            title={
              <>
                Technology <span className="font-serifit font-normal italic text-accent">supports the story.</span>
              </>
            }
            copy="Grouped by how I actually use them. Everything here is backed by shipped work above."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.head} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">{g.head}</h3>
                <ul className="mt-4 space-y-2.5 text-[15px] font-medium text-zinc-200">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {CERTS.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-dashed border-white/20 px-6 py-5 transition hover:border-white/45"
            >
              <span className="font-semibold text-white">{c.name}</span>
              <ArrowUpRight className="size-4 shrink-0 text-zinc-500 transition group-hover:text-accent" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
