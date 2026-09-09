import { ArrowUpRight, Download, Mail } from "lucide-react";
import { LINKS } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/10 py-24 sm:py-32" aria-label="Contact">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="bg-blueprint pointer-events-none absolute inset-0" aria-hidden />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                <span className="text-accent">07 /</span> Contact
              </p>
              <h2 className="mx-auto mt-5 max-w-2xl font-grotesk text-4xl font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl">
                This is someone you should{" "}
                <span className="font-serifit font-normal italic text-accent">talk to.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
                Founders, recruiters, collaborators — internships, research, builds, or robotics. My inbox is open.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${LINKS.email}?subject=Hello%20Aaditya%20—%20from%20your%20portfolio`}
                  className="inline-flex h-12 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-[#0a0a0b] transition hover:brightness-110"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <Mail className="size-4" aria-hidden /> Mail me
                </a>
                <a
                  href={LINKS.resume}
                  download
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-zinc-100 transition hover:border-white/35"
                >
                  <Download className="size-4" aria-hidden /> Resume
                </a>
                <a
                  href={LINKS.live}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-zinc-100 transition hover:border-white/35"
                >
                  InternKhojo live <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium">
                <a href={LINKS.linkedin} target="_blank" rel="noopener" className="text-zinc-300 underline-offset-4 hover:text-white hover:underline">LinkedIn</a>
                <a href={LINKS.github} target="_blank" rel="noopener" className="text-zinc-300 underline-offset-4 hover:text-white hover:underline">GitHub</a>
                <a href={LINKS.instagram} target="_blank" rel="noopener" className="text-zinc-300 underline-offset-4 hover:text-white hover:underline">Instagram</a>
                <a href={LINKS.phoneHref} className="text-zinc-300 underline-offset-4 hover:text-white hover:underline">{LINKS.phone}</a>
              </div>
              <p className="mt-6 font-mono text-xs text-zinc-600">New Delhi, India · {LINKS.email}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
