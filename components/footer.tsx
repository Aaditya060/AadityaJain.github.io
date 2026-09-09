import { LINKS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-zinc-500">
        <p className="font-mono text-xs">© {new Date().getFullYear()} Aaditya Jain · designed &amp; built by hand</p>
        <p className="flex items-center gap-5">
          <a href="#top" className="hover:text-white">Back to top ↑</a>
          <a href={LINKS.resume} download className="hover:text-white">Resume (2026)</a>
        </p>
      </div>
    </footer>
  );
}
