import { EXPERIENCE } from "@/lib/content";
import { Badge, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-white/10 py-24 sm:py-28" aria-label="Experience">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHead
            index="03"
            eyebrow="Experience"
            title={
              <>
                Proof I operate inside <span className="font-serifit font-normal italic text-accent">serious teams.</span>
              </>
            }
            copy="Research labs, factory floors, and student orgs at real scale — a different kind of ownership in each."
          />
        </Reveal>
        <ol className="relative space-y-0 border-l border-white/10 pl-0">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={Math.min(i * 0.05, 0.2)}>
              <li className="relative pb-10 pl-10 last:pb-0">
                <span
                  className="absolute left-[-7px] top-1.5 size-3.5 rounded-full border-2 bg-[#0a0a0b]"
                  style={{ borderColor: "var(--accent)" }}
                  aria-hidden
                />
                <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 sm:p-7">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">{e.when}</p>
                  <h3 className="mt-2 font-grotesk text-xl font-bold text-white sm:text-2xl">{e.role}</h3>
                  <p className="text-[15px] font-medium text-zinc-400">{e.org}</p>
                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-zinc-400">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-[9px] size-1 shrink-0 rounded-full bg-zinc-600" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {e.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
