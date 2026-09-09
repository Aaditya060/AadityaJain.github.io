export type Mode = "founder" | "engineer";

export const LINKS = {
  live: "https://internkhojo.com/",
  github: "https://github.com/Aaditya060",
  bankFraud: "https://github.com/Aaditya060/Bank-Transaction-Fraud-Analysis",
  linkedin: "https://www.linkedin.com/in/aaditya-jain-7a3666247/",
  instagram: "https://www.instagram.com/aaditya._jain_/",
  email: "aadityajaintiet@gmail.com",
  phone: "+91 8766330925",
  phoneHref: "tel:+918766330925",
  resume: "/Aaditya_Jain_Resume_2026.pdf",
  certDeloitte: "https://drive.google.com/file/d/1KCm30o6IkweayaphBq5jjFfdsDJp2bag/view?usp=sharing",
  certSqlBasic:
    "https://drive.google.com/file/d/1AtzPty_7G9s7hFU7WkzHaNorECZ2CiCG/view?usp=sharing",
  certSqlMid:
    "https://drive.google.com/file/d/1Y9hm0xtuF-d7tPkm040RGQaPUwycMkeH/view?usp=sharing",
};

export const HERO: Record<
  Mode,
  {
    kicker: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    sub: string;
    primaryCta: string;
    primaryHref: string;
    note: string;
  }
> = {
  founder: {
    kicker: "Aaditya Jain — founder / builder",
    titleA: "From blank canvas to",
    titleAccent: "live product.",
    titleB: "",
    sub: "I founded InternKhojo and took it from idea to product to GTM — solo. Now I lead 30+ interns shipping it with me. I don't just write code; I decide what gets built and make it reach people.",
    primaryCta: "Read the InternKhojo story",
    primaryHref: "#internkhojo",
    note: "For founders, investors, collaborators — the ownership lens.",
  },
  engineer: {
    kicker: "Aaditya Jain — engineer, TIET '27",
    titleA: "Systems that hold up",
    titleAccent: "in production.",
    titleB: "",
    sub: "Final-year Electrical + CS minor (CGPA 7.90). Samsung R&D research intern doing applied ML — preprocessing, experiments, benchmarking. SQL over 150K+ rows, Next.js + Supabase, Arduino sensor loops, PLC/SCADA on factory floors.",
    primaryCta: "See technical work",
    primaryHref: "#work",
    note: "For recruiters and engineering managers — the execution lens.",
  },
};

export const STATS = [
  { value: "Live", label: "InternKhojo in production" },
  { value: "150K+", label: "rows analysed in PostgreSQL" },
  { value: "30+", label: "interns led today" },
  { value: "7.90", label: "CGPA · TIET '27" },
];

export const TICKER_ITEMS = [
  "Next.js",
  "Supabase",
  "PostgreSQL",
  "Python",
  "Applied ML",
  "Arduino",
  "PLC / SCADA",
  "Product strategy",
  "SEO & GTM",
  "Team leadership",
];

export type JourneyStep = { n: string; title: string; body: string };
export const JOURNEY: JourneyStep[] = [
  {
    n: "01",
    title: "Problem",
    body: "Students drown in scattered, untrusted internship listings across groups and generic boards. I lived this on my own campus.",
  },
  {
    n: "02",
    title: "Insight",
    body: "Trust + relevance beat scale for this audience. A student-first platform with curated listings would win where job boards feel alien.",
  },
  {
    n: "03",
    title: "Product calls",
    body: "Scoped a sharp MVP wedge: discover fast, apply with confidence. Next.js + Supabase chosen for solo-builder velocity — auth, data, deploys.",
  },
  {
    n: "04",
    title: "Built solo",
    body: "Owned UI/UX, frontend, backend, data model, branding and copy. Every pixel and query mine, iterated against real student feedback.",
  },
  {
    n: "05",
    title: "Launch & GTM",
    body: "Positioned for Indian campuses, SEO foundations, community distribution, feedback loops driving each release.",
  },
  {
    n: "06",
    title: "Leading 30+",
    body: "From solo to systems: workstreams, delegation, weekly shipping rhythms. Direction in, output out.",
  },
];

export type Work = {
  title: string;
  href?: string;
  meta: string;
  problem: string;
  build: string;
  outcome: string;
  tags: string[];
};
export const WORK: Work[] = [
  {
    title: "Bank Transaction Fraud Analysis",
    href: LINKS.bankFraud,
    meta: "Data · PostgreSQL · 150K+ rows",
    problem: "Fraud hides in volume — 150K+ transactions needed pattern-level answers, not dashboard guesses.",
    build: "20+ optimized PostgreSQL queries (~30% faster extraction) across customer–merchant behaviour.",
    outcome: "High-risk patterns isolated; faster anomaly detection for review.",
    tags: ["SQL", "PostgreSQL", "Git"],
  },
  {
    title: "Para Glove — rehab assistive glove",
    meta: "Embedded · Arduino · Sensors",
    problem: "Partial-paralysis rehab needs guided, repeatable motion — not passive exercise.",
    build: "Rotary-motor glove; real-time speed/rotation feedback closes the motor-control loop.",
    outcome: "Working prototype; learned control tuning under noisy sensors, safety-first design.",
    tags: ["C++", "Arduino UNO", "Sensors"],
  },
  {
    title: "Krishi Rakshak — auto irrigation",
    meta: "IoT · GSM · Field system",
    problem: "Small farms waste water and labour on manual irrigation with zero soil awareness.",
    build: "Mobile-controlled wireless system: soil-moisture + water-level sensing, GSM remote control & alerts.",
    outcome: "Water where and when needed; manual labour cut.",
    tags: ["C++", "Arduino", "GSM", "Pumps"],
  },
];

export type Experience = {
  when: string;
  role: string;
  org: string;
  points: string[];
  tags?: string[];
};
export const EXPERIENCE: Experience[] = [
  {
    when: "Ongoing · Independent · Live",
    role: "Founder & Full-Stack Developer",
    org: "InternKhojo",
    points: [
      "Idea → build → launch → GTM as sole founder (Next.js + Supabase).",
      "Lead 30+ interns: delegation, coordination rhythms, weekly shipped output.",
    ],
    tags: ["Next.js", "Supabase", "GTM"],
  },
  {
    when: "Sept 2025 – Mar 2026 · Remote",
    role: "Research Intern — Applied ML",
    org: "Samsung R&D",
    points: [
      "Preprocessing, model experimentation and performance evaluation on live research statements.",
      "Literature review + benchmarking to ground team decisions; documented findings for internal review.",
    ],
    tags: ["Python", "NumPy", "Pandas", "Model evaluation"],
  },
  {
    when: "Jun 2025 – Jul 2025 · Onsite",
    role: "Summer Intern — Industrial Automation",
    org: "Reckers Automation",
    points: [
      "PLC programming, HMI interfacing, VFD drives and sensor integration in structured training.",
      "Documented live control-panel and production workflows on a working factory floor.",
    ],
    tags: ["PLC", "SCADA", "HMI", "VFD"],
  },
  {
    when: "2023 – 2026",
    role: "Joint Secretary — leading 200+ students",
    org: "ACM, Thapar Chapter",
    points: ["Elected to run TIET's largest technical society: workshops, events, collaborative builds."],
  },
  {
    when: "Jan 2024 – Aug 2024 · PAN India",
    role: "Creative Head — leading 50+ members",
    org: "BloodConnect Foundation",
    points: [
      "Ran the PAN-India creative department for a youth-led blood-donation nonprofit; shipped campaign videos and designs for drives.",
    ],
  },
];

export const SKILL_GROUPS = [
  { head: "Frontend", items: ["JavaScript", "React.js", "Next.js"] },
  { head: "Backend & Data", items: ["Supabase", "MongoDB", "SQL / PostgreSQL"] },
  { head: "ML & Analytics", items: ["Python · NumPy · Pandas", "Preprocessing", "Model evaluation"] },
  { head: "Embedded & Industrial", items: ["C++ / Arduino IDE", "PLC & SCADA", "HMI · VFD · GSM"] },
  { head: "Product & Design", items: ["UI/UX", "Branding & SEO", "Video editing"] },
];

export const LEADERSHIP = [
  {
    n: "30+",
    title: "Interns · InternKhojo",
    body: "Running execution today — workstreams, delegation, coordination, weekly shipped output across product, content and growth.",
  },
  {
    n: "200+",
    title: "Members · ACM TIET",
    body: "Joint Secretary of the campus's largest tech society — workshops and events at real scale.",
  },
  {
    n: "50+",
    title: "Creatives · BloodConnect",
    body: "Creative Head, PAN India — led designers and editors shipping campaigns that filled donation drives.",
  },
];

export const PRINCIPLES = [
  {
    k: "What",
    v: "Should we build? I scope MVPs that can actually ship — InternKhojo started as one sharp wedge, not a platform fantasy.",
  },
  {
    k: "Why",
    v: "Why does it matter? Campus signal first, then positioning and GTM before scaling.",
  },
  {
    k: "How",
    v: "How do we build it well? Next.js + Supabase for velocity; rigorous SQL and ML eval where correctness matters; careful wiring where hardware meets humans.",
  },
  {
    k: "Grow",
    v: "How does it reach people? SEO, community distribution, partnerships — and a team system that keeps shipping.",
  },
];

export const WINS = [
  { v: "Top 500 / 15K+", s: "Eureka '22 · IIT Bombay E-Summit" },
  { v: "Semi-finalist", s: "Eureka Jr '22 · IIT Bombay" },
  { v: "Top 10%", s: "Code Red 2.0 · Young Indians" },
  { v: "Bronze", s: "RoboWars, Saturnalia '24 · TIET" },
  { v: "B.Tech '27", s: "Electrical · Minor CS · TIET" },
];
