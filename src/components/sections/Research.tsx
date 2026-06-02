import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    id: "action",
    title: "Action Research",
    body: "Ongoing research in multilingual classrooms across Asia.",
    date: "Ongoing",
    status: "ongoing",
  },
  {
    id: "mlrc",
    title: "MLRC Capstone Research",
    body: "Investigating family-facing tools that support language development.",
    date: "Summer 2026",
    status: "ongoing",
  },
  {
    id: "workshops",
    title: "Workshops & PD",
    body: "Hands-on professional learning for schools and districts.",
    date: "Ongoing",
    status: "ongoing",
  },
];

export default function Research() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const presentationUrl = `${import.meta.env.BASE_URL}resources/how-i-build-educational-tools-with-ai.pdf`;

  return (
    <section
      ref={ref}
      id="research"
      className="py-28 md:py-36 bg-card/30 relative overflow-hidden"
      data-testid="research-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(217 91% 60%) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4" data-testid="research-label">
              RESEARCH & INNOVATION
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="research-headline"
            >
              Exploring. Sharing. Growing.
            </h2>
          </motion.div>
          <motion.a
            href={presentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group whitespace-nowrap"
            data-testid="research-view-all"
          >
            Download presentation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </div>

        <div className="relative" data-testid="research-timeline">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-primary/60 via-primary/30 to-primary/10 hidden md:block"
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pt-10 md:pt-12 group"
                data-testid={`research-milestone-${m.id}`}
              >
                <div className={`absolute top-3 left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 transition-colors ${
                  m.status === "ongoing"
                    ? "bg-primary/30 border-primary animate-pulse"
                    : "bg-primary border-primary/60"
                }`} />

                <div className="rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group-hover:shadow-lg" style={{ boxShadow: "0 0 0 0 transparent" }}>
                  <p className="text-xs font-bold text-primary mb-2">{m.date}</p>
                  <h3 className="font-semibold text-sm text-foreground mb-2 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {m.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {m.body}
                  </p>
                  {m.status === "ongoing" && (
                    <div className="mt-3 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs text-primary/70 font-medium">Active</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
