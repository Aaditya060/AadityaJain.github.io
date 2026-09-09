import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/components/mode-context";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});
const serifit = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serifit",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aaditya Jain — Founder & Engineer | Zero to live product",
  description:
    "Aaditya Jain: founder of InternKhojo (idea → product → GTM, leading 30+ interns), Samsung R&D research intern, TIET '27. Next.js, SQL on 150K+ rows, Arduino + PLC/SCADA.",
  metadataBase: new URL("https://www.aadityajain.me"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Aaditya Jain",
    title: "Aaditya Jain — Founder & Engineer",
    description:
      "From blank canvas to live product: InternKhojo. Plus Samsung R&D research, 150K-row SQL analytics, embedded systems.",
    url: "/",
    images: [{ url: "/images/Me.png", width: 640, height: 800, alt: "Aaditya Jain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaditya Jain — Founder & Engineer",
    description: "I build products from zero to something real. Founder @ InternKhojo · Samsung R&D intern · TIET '27.",
  },
  icons: { icon: "/icon.svg" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aaditya Jain",
  url: "https://www.aadityajain.me/",
  jobTitle: "Founder, InternKhojo; ML Research Intern",
  affiliation: { "@type": "CollegeOrUniversity", name: "Thapar Institute of Engineering and Technology" },
  email: "mailto:aadityajaintiet@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
  sameAs: [
    "https://www.linkedin.com/in/aaditya-jain-7a3666247/",
    "https://github.com/Aaditya060",
    "https://internkhojo.com/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" data-mode="engineer" suppressHydrationWarning>
      <body
        className={`${grotesk.variable} ${serifit.variable} ${body.variable} ${mono.variable} noise bg-[#0a0a0b] font-body text-zinc-200`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
