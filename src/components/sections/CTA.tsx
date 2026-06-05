import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden"
      data-testid="cta-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(217 91% 60% / 0.12), transparent 70%)",
          }}
        />
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-64 opacity-10"
            style={{
              background: "radial-gradient(ellipse 100% 80% at 50% 100%, hsl(217 91% 60% / 0.8), transparent 70%)",
            }}
          />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(217 33% 50% / 1) 1px, transparent 1px), linear-gradient(90deg, hsl(217 33% 50% / 1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="cta-headline"
            >
              Build a calmer support experience.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="cta-body">
              Reach out if you want to pilot Classroom Compass, shape the product direction, or explore how clearer student-support communication could look in your context.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:lenguajelabs@proton.me"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                data-testid="cta-button"
              >
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/federico-orozco-687b5431/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 text-foreground/80 font-semibold text-sm hover:border-primary/50 hover:text-foreground transition-all"
                data-testid="cta-linkedin"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
