"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Mode } from "@/lib/content";

const ModeContext = createContext<{
  mode: Mode;
  setMode: (m: Mode) => void;
} | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("founder");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("aj-mode");
      if (saved === "founder" || saved === "engineer") setModeState(saved);
    } catch {
      /* private mode */
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode ]);

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    try {
      window.localStorage.setItem("aj-mode", m);
    } catch {
      /* ignore */
    }
  }, []);

  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>;
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used inside ModeProvider");
  return ctx;
}
