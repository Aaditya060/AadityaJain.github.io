"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { CaseStudy } from "@/components/case-study";
import { Spotlight } from "@/components/spotlight";
import { WorkGrid } from "@/components/work-grid";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Leadership } from "@/components/leadership";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { useMode } from "@/components/mode-context";

/**
 * Founder and Engineer are two different reads of the same person:
 * - Founder leads with InternKhojo + leadership, ends with proof of craft.
 * - Engineer leads with technical work + experience, ends with the venture.
 */
const FOUNDER_FLOW = ["case", "spot", "lead", "work", "exp", "skills", "about"] as const;
const ENGINEER_FLOW = ["work", "spot", "exp", "skills", "case", "lead", "about"] as const;

function Section({ id }: { id: (typeof FOUNDER_FLOW)[number] }) {
  switch (id) {
    case "case":
      return <CaseStudy />;
    case "spot":
      return <Spotlight />;
    case "lead":
      return <Leadership />;
    case "work":
      return <WorkGrid />;
    case "exp":
      return <Experience />;
    case "skills":
      return <Skills />;
    case "about":
      return <About />;
  }
}

export default function Page() {
  const { mode } = useMode();
  const reduce = useReducedMotion();
  const flow = mode === "founder" ? FOUNDER_FLOW : ENGINEER_FLOW;

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Ticker />
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {flow.map((id) => (
              <Section key={id} id={id} />
            ))}
          </motion.div>
        </AnimatePresence>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
