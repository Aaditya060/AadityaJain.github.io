"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck2, Database, GitBranch } from "lucide-react";
import { useMode } from "@/components/mode-context";
import { Reveal } from "@/components/reveal";

export function Spotlight() {
  const { mode } = useMode();
  return (
    <section className="pb-4" aria-label={mode === "founder" ? "Operating system" : "Under the hood"}>
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <AnimatePresence mode="wait">
            {mode === "founder" ? (
              <motion.div
                key="founder"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3"
              >
                {[
                  { icon: GitBranch, t: "Workstreams, not tasks", b: "Product, content, growth — each stream has an owner, a weekly target, and a visible definition of done." },
                  { icon: CalendarCheck2, t: "Weekly shipping rhythm", b: "Direction goes in on Monday, output comes out on Friday. Reviews are async, demos are short, blockers surface fast." },
                  { icon: Database, t: "Feedback into roadmap", b: "Student complaints and drop-offs become next week's build list. The market writes half the backlog." },
                ].map((c) => (
                  <div key={c.t} className="bg-ink-900 p-8">
                    <c.icon className="size-5 text-accent" aria-hidden />
                    <h3 className="mt-4 font-grotesk text-xl font-bold text-white">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{c.b}</p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="engineer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900"
              >
                <div className="flex items-center gap-2 border-b border-white/10 px-6 py-3.5">
                  <span className="size-3 rounded-full bg-[#ff5f57]" aria-hidden />
                  <span className="size-3 rounded-full bg-[#febc2e]" aria-hidden />
                  <span className="size-3 rounded-full bg-[#28c840]" aria-hidden />
                  <span className="ml-3 font-mono text-xs text-zinc-500">
                    fraud_patterns.sql — illustrative pattern from the 150K-row analysis
                  </span>
                </div>
                <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-zinc-300 sm:p-8">
{`-- high-velocity merchants: many charges, thin repeat base
SELECT merchant_id,
       COUNT(*)                       AS txns,
       COUNT(DISTINCT customer_id)    AS customers,
       ROUND(AVG(amount), 2)          AS avg_ticket,
       SUM(CASE WHEN is_flagged THEN 1 ELSE 0 END) AS flags
FROM transactions
WHERE occurred_at >= NOW() - INTERVAL '90 days'
GROUP BY merchant_id
HAVING COUNT(*) > 500
   AND COUNT(DISTINCT customer_id)::FLOAT / COUNT(*) < 0.15
ORDER BY flags DESC, txns DESC
LIMIT 50;`}
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
