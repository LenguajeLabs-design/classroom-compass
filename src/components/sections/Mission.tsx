import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="9" r="4" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="20" cy="9" r="4" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M4 22c0-3.314 2.686-6 6-6M18 16c3.314 0 6 2.686 6 6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 22c0-2.21 1.79-4 4-4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Empower Families",
    body: "Clear communication builds confidence and connection.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="4" width="18" height="14" rx="2" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M10 18v4M18 18v4M7 22h14" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 10h2M15 10h2" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="10" r="1" fill="#3B82F6" />
        <path d="M10 13l2-1.5 2 1 2-2" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Augment Teachers",
    body: "AI handles the busywork so teachers can focus on what matters.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#3B82F6" strokeWidth="1.5" />
        <ellipse cx="14" cy="14" rx="5" ry="9" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M5 14h18" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M6.5 9.5h15M6.5 18.5h15" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Honor Every Language",
    body: "Multilingualism is a strength, not something to fix.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5l2.5 5 5.5.8-4 3.9.94 5.48L14 17.77l-4.94 2.41L10 14.7 6 10.8l5.5-.8L14 5z" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Design for Clarity",
    body: "Simple, intuitive tools create real impact in real classrooms.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function Mission() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="mission"
      className="relative py-28 md:py-36"
      data-testid="mission-section"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-5"
          style={{ background: "radial-gradient(ellipse, hsl(217 91% 60%), transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4" data-testid="mission-label">
              OUR MISSION
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="mission-headline"
            >
              Language is human potential.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md" data-testid="mission-body">
              When we remove barriers to understanding, we unlock opportunity, identity, and belonging. AI should amplify teachers, empower learners, and strengthen the bridge between home and school.
            </p>
            <a
              href="#mission"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
              data-testid="mission-philosophy-link"
            >
              Our Philosophy
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
            data-testid="mission-pillars"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="group"
                data-testid={`mission-pillar-${pillar.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-12 h-12 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-center mb-4 group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
