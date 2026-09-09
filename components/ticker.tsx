import { TICKER_ITEMS } from "@/lib/content";

export function Ticker() {
  const row = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker overflow-hidden border-y border-white/10 bg-[#0d0d0f] py-4" aria-hidden>
      <div className="ticker-track flex w-max items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-[13px] uppercase tracking-[0.18em] text-zinc-500">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
