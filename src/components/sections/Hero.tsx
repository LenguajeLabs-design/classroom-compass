import { useRef } from "react";
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

function ProductCard({ title, subtitle, accentColor, delay }: { title: string; subtitle: string; accentColor: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 shadow-xl"
      style={{ boxShadow: `0 4px 32px -8px ${accentColor}22` }}
      data-testid={`hero-product-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${accentColor}22`, border: `1px solid ${accentColor}44` }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="3.5" fill={accentColor} />
            <path d="M8 2v1M8 13v1M2 8h1M13 8h1" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{subtitle}</p>
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

          <div className="relative hidden lg:flex flex-col gap-3" data-testid="hero-product-cards">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20 pointer-events-none z-10 rounded-3xl" />
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-3">
                <ProductCard title="WIDA Family Guide" subtitle="Understand your child's English proficiency level." accentColor="#3B82F6" delay={0.5} />
                <ProductCard title="Li Li Chinese" subtitle="A calm space to turn Chinese into real speaking." accentColor="#0D9488" delay={0.7} />
              </div>
              <div className="flex flex-col gap-3 mt-8">
                <ProductCard title="Scaffold" subtitle="AI-powered EAL lesson planning assistant." accentColor="#8B5CF6" delay={0.6} />
                <ProductCard title="Hangul Flow" subtitle="Master Korean through personalized AI stories." accentColor="#7C3AED" delay={0.8} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mx-auto w-full max-w-xs rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-foreground">Language Level</span>
                <span className="text-xs text-primary font-bold">Level 3</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className={`flex-1 h-1.5 rounded-full transition-colors ${n <= 3 ? "bg-primary" : "bg-border/40"}`}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1.5">Developing</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
