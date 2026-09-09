import { cn } from "@/lib/utils";

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHead({
  index,
  eyebrow,
  title,
  copy,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        <span className="text-accent">{index}</span>
        <span className="mx-3 text-zinc-700">/</span>
        {eyebrow}
      </p>
      <h2 className="mt-4 font-grotesk text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 text-lg leading-relaxed text-zinc-400">{copy}</p> : null}
    </div>
  );
}
