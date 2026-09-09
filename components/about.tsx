"use client";

import Image from "next/image";
import { PRINCIPLES, WINS } from "@/lib/content";
import { useMode } from "@/components/mode-context";
import { SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/reveal";

export function About() {
  const { mode } = useMode();
  const photo =
    mode === "founder"
      ? {
          src: "/images/about_me.jpeg",
          alt: "Aaditya Jain working on hardware",
          caption: "Builder at heart — software one day, sensors the next.",
        }
      : {
          src: "/images/Me.png",
          alt: "Portrait of Aaditya Jain",
          caption: "TIET '27 · Electrical + CS minor.",
        };
  return (
    <section id="about" className="scroll-mt-20 border-t border-white/10 py-24 sm:py-28" aria-label="About">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <figure className="m-0 overflow-hidden rounded-2xl border border-white/12" key={mode}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={640}
              height={736}
              loading="lazy"
              className="aspect-[4/4.4] w-full object-cover"
            />
            <figcaption className="border-t border-white/10 bg-ink-900 px-5 py-3 font-mono text-xs text-zinc-500">
              {photo.caption}
            </figcaption>
          </figure>
        </Reveal>
        <div>
          <Reveal>
            <SectionHead
              index="06"
              eyebrow="About"
              title={
                <>
                  I like building things — and knowing{" "}
                  <span className="font-serifit font-normal italic text-accent">why they're worth building.</span>
                </>
              }
              copy="Final-year Electrical engineer with a CS minor at TIET (CGPA 7.90). I live at the intersection of Engineering × Product × Business × Strategy."
            />
          </Reveal>
          <dl className="-mt-4">
            {PRINCIPLES.map((p) => (
              <Reveal key={p.k}>
                <div className="grid gap-1 border-t border-white/10 py-5 sm:grid-cols-[140px_1fr] sm:gap-6">
                  <dt className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent sm:pt-1">{p.k}</dt>
                  <dd className="m-0 text-[15px] leading-relaxed text-zinc-300">{p.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <div className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {WINS.map((w) => (
              <div key={w.s} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="font-grotesk text-xl font-bold text-white">{w.v}</p>
                <p className="mt-1 text-[13px] text-zinc-500">{w.s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
