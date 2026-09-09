"use client";

import { motion } from "framer-motion";
import { Briefcase, Cpu } from "lucide-react";
import { useMode } from "@/components/mode-context";
import type { Mode } from "@/lib/content";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Mode; label: string; icon: typeof Cpu }[] = [
  { value: "engineer", label: "Engineer", icon: Cpu },
  { value: "founder", label: "Founder", icon: Briefcase },
];

export function ModeToggle({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = useMode();
  return (
    <div
      role="radiogroup"
      aria-label="Perspective: Founder or Engineer"
      className="relative flex items-center rounded-full border border-white/12 bg-white/[0.04] p-1"
    >
      {OPTIONS.map((opt) => {
        const active = mode === opt.value;
        const Icon = opt.icon;
        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={active}
            onClick={() => setMode(opt.value)}
            className={cn(
              "relative z-10 flex items-center gap-1.5 rounded-full font-semibold transition-colors duration-200",
              compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
              active ? "text-[#0a0a0b]" : "text-zinc-400 hover:text-zinc-100"
            )}
          >
            {active && (
              <motion.span
                layoutId={compact ? "mode-pill-compact" : "mode-pill"}
                className="absolute inset-0 -z-10 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            )}
            <Icon className={compact ? "size-3.5" : "size-4"} aria-hidden />
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
