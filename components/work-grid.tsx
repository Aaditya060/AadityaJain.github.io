import { ArrowUpRight } from "lucide-react";
import { WORK } from "@/lib/content";
import { Badge, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/reveal";

export function WorkGrid() {
  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-28" aria-label="Selected work">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHead
            index="02"
            eyebrow="Selected work"
            title={
              <>
                Fewer projects, <span className="font-serifit font-normal italic text-accent">deeper cuts.</span>
              </>
            }
            copy="Each one: the problem, what I built, and what came out of it. No filler."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {WORK.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04]">
                <p className="font-mono text-xs text-zinc-500">{w.meta}</p>
                <h3 className="mt-3 font-grotesk text-[1.35rem] font-bold leading-snug text-white">
                  {w.href ? (
                    <a href={w.href} target="_blank" rel="noopener" className="transition-colors group-hover:text-accent">
                      {w.title}
                    </a>
                  ) : (
                    w.title
                  )}
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed">
                  <p><span className="mb-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Problem</span><span className="text-zinc-400">{w.problem}</span></p>
                  <p><span className="mb-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Build</span><span className="text-zinc-400">{w.build}</span></p>
                  <p><span className="mb-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Outcome</span><span className="text-zinc-400">{w.outcome}</span></p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                {w.href && (
                  <a href={w.href} target="_blank" rel="noopener" className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-white transition-colors hover:text-accent">
                    GitHub <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
