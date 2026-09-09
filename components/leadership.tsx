import { LEADERSHIP } from "@/lib/content";
import { SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/reveal";

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-20 border-t border-white/10 py-24 sm:py-28" aria-label="Leadership">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHead
            index="05"
            eyebrow="Leadership"
            title={
              <>
                From building myself to building a{" "}
                <span className="font-serifit font-normal italic text-accent">team that builds.</span>
              </>
            }
          />
        </Reveal>
        <Reveal>
          <p className="mb-10 max-w-3xl font-grotesk text-2xl font-medium leading-snug text-zinc-100 sm:text-[1.7rem]">
            The hardest shift wasn't technical — it was going from "I'll just do it" to designing work others can own.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {LEADERSHIP.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <p className="font-grotesk text-5xl font-bold tracking-tightest text-accent">{l.n}</p>
                <h3 className="mt-3 text-lg font-bold text-white">{l.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">{l.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
