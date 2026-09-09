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

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Ticker />
        <CaseStudy />
        <Spotlight />
        <WorkGrid />
        <Experience />
        <Skills />
        <Leadership />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
