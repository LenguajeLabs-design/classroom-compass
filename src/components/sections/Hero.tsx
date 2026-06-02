import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

const showcaseItems = [
  {
    title: "EALDesk Elementary",
    subtitle: "Planning tools for multilingual elementary classrooms.",
    url: "https://lenguajelabs-design.github.io/EALDesk-Elementary/",
    image: `${import.meta.env.BASE_URL}app-screenshots/ealdesk-elementary.png`,
    accent: "#3B82F6",
  },
  {
    title: "WIDA Family Guide",
    subtitle: "Family-friendly explanations of English proficiency levels.",
    url: "https://wida-family-guide.replit.app/",
    image: `${import.meta.env.BASE_URL}app-screenshots/wida-family-guide.png`,
    accent: "#38BDF8",
  },
  {
    title: "Scaffold",
    subtitle: "AI-supported EAL lesson planning with school access.",
    url: "https://scaffold.replit.app/",
    image: `${import.meta.env.BASE_URL}app-screenshots/scaffold.png`,
    accent: "#1E3A8A",
  },
  {
    title: "Li Li Chinese",
    subtitle: "A focused practice space for building Chinese speaking confidence.",
    url: "https://speak-chinese-now.replit.app/",
    image: `${import.meta.env.BASE_URL}app-screenshots/speak-chinese-now.png`,
    accent: "#14B8A6",
  },
  {
    title: "Hangul Flow",
    subtitle: "Korean practice flows for building Hangul fluency.",
    url: "https://hangul-flow.replit.app/",
    image: `${import.meta.env.BASE_URL}app-screenshots/hangul-flow.png`,
    accent: "#F97316",
  },
  {
    title: "EALDesk",
    subtitle: "A broader toolkit for multilingual learning workflows.",
    url: "https://lenguajelabs-design.github.io/EALDesk/",
    image: `${import.meta.env.BASE_URL}app-screenshots/ealdesk.png`,
    accent: "#8B5CF6",
  },
];

function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeItem = showcaseItems[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcaseItems.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
      className="relative"
      data-testid="hero-app-showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="absolute -inset-6 rounded-[2rem] opacity-35 blur-3xl"
        style={{ background: `radial-gradient(circle at 50% 25%, ${activeItem.accent}66, transparent 68%)` }}
      />

      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-2xl backdrop-blur-sm">
        <a
          href={activeItem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          aria-label={`Open ${activeItem.title}`}
          data-testid="hero-showcase-link"
        >
          <div className="flex items-center justify-between border-b border-border/60 bg-background/75 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="max-w-60 truncate text-xs font-medium text-muted-foreground">
              {activeItem.url.replace("https://", "").replace(/\/$/, "")}
            </span>
          </div>

          <div className="relative aspect-[1.45] overflow-hidden bg-background">
            {showcaseItems.map((item, index) => (
              <motion.img
                key={item.image}
                src={item.image}
                alt={`${item.title} application screenshot`}
                className="absolute inset-0 h-full w-full object-cover object-top"
                initial={false}
                animate={{ opacity: index === activeIndex ? 1 : 0, scale: index === activeIndex ? 1 : 1.02 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            ))}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-5 pt-20">
              <p className="text-xs font-bold uppercase text-primary">Live tool</p>
              <div className="mt-1 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {activeItem.title}
                  </h2>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">{activeItem.subtitle}</p>
                </div>
                <span className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary transition-transform group-hover:translate-x-0.5 sm:flex">
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </div>
          </div>
        </a>

        <div className="grid grid-cols-3 border-t border-border/60 bg-card/80 sm:grid-cols-6">
          {showcaseItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative min-h-14 px-2 py-3 text-left transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              aria-label={`Show ${item.title}`}
              aria-pressed={index === activeIndex}
              data-testid={`hero-showcase-tab-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <span
                className={`block truncate text-[11px] font-semibold ${index === activeIndex ? "text-foreground" : "text-muted-foreground"}`}
              >
                {item.title}
              </span>
              <span
                className="absolute inset-x-2 bottom-1 h-0.5 rounded-full transition-opacity"
                style={{ backgroundColor: item.accent, opacity: index === activeIndex ? 1 : 0 }}
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={containerRef}
      id="lab"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      data-testid="hero-section"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div
          className="absolute top-0 right-0 w-[70%] h-[70%] opacity-20"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 80% 20%, hsl(217 91% 60% / 0.35), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.5), transparent 70%)" }}
        />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(hsl(217 33% 50% / 1) 1px, transparent 1px), linear-gradient(90deg, hsl(217 33% 50% / 1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 md:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8"
              data-testid="hero-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary tracking-wide">AI · LANGUAGE · EDUCATION</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="hero-headline"
            >
              AI-powered tools for{" "}
              <span className="relative">
                <span className="text-primary">multilingual</span>
              </span>{" "}
              futures.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              data-testid="hero-subheadline"
            >
              We build practical tools and systems that empower educators, support multilingual learners, and connect families to clarity.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="flex flex-wrap gap-3 mb-12"
              data-testid="hero-ctas"
            >
              <a
                href="#lab"
                onClick={(e) => { e.preventDefault(); document.querySelector("#tools")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                data-testid="hero-cta-explore"
              >
                Explore the Lab
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href="#research"
                onClick={(e) => { e.preventDefault(); document.querySelector("#research")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 text-foreground/80 font-semibold text-sm hover:border-primary/50 hover:text-foreground transition-all"
                data-testid="hero-cta-research"
              >
                View Research
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex items-center gap-4"
              data-testid="hero-founder"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3.5" fill="hsl(217 91% 60% / 0.6)"/><path d="M3 17c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="hsl(217 91% 60% / 0.6)" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-primary/80 uppercase mb-0.5">Founded by</p>
                <p className="text-sm font-semibold text-foreground">Federico Orozco</p>
                <p className="text-xs text-muted-foreground">Multilingual AI Integration Specialist</p>
              </div>
            </motion.div>
          </div>

          <div className="relative hidden lg:block" data-testid="hero-product-cards">
            <AppShowcase />
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
