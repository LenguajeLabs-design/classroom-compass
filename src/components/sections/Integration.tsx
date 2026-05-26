import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const integrations = [
  {
    id: "wida",
    name: "WIDA",
    description: "Language proficiency standards and assessment frameworks for K-12 multilingual learners.",
    category: "Standards",
    accent: "#3B82F6",
  },
  {
    id: "actfl",
    name: "ACTFL",
    description: "American Council on the Teaching of Foreign Languages proficiency guidelines and frameworks.",
    category: "Frameworks",
    accent: "#8B5CF6",
  },
  {
    id: "tesol",
    name: "TESOL",
    description: "Teaching English to Speakers of Other Languages standards, research, and professional learning.",
    category: "Research",
    accent: "#10B981",
  },
  {
    id: "google-workspace",
    name: "Google Workspace",
    description: "Seamless integration with Google Docs, Slides, and Classroom for lesson planning workflows.",
    category: "Productivity",
    accent: "#F59E0B",
  },
  {
    id: "openai",
    name: "AI Models",
    description: "Powered by state-of-the-art language models for intelligent differentiation and scaffolding.",
    category: "AI",
    accent: "#EC4899",
  },
  {
    id: "mlrc",
    name: "MLRC",
    description: "Multilingual Research Collaborative partnerships advancing evidence-based classroom tools.",
    category: "Research",
    accent: "#14B8A6",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function Integration() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="integration"
      className="py-28 md:py-36 relative overflow-hidden"
      data-testid="integration-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 opacity-10"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.6), transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4" data-testid="integration-label">
              INTEGRATION
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="integration-headline"
            >
              Built on standards.<br />
              Connected to practice.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mt-4 max-w-lg" data-testid="integration-body">
              Lenguaje Labs tools integrate with the frameworks, standards, and platforms educators already use — so adoption is seamless and impact is immediate.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          data-testid="integration-grid"
        >
          {integrations.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group rounded-2xl border border-border/60 bg-card/40 p-5 hover:border-primary/30 hover:bg-card/70 transition-all duration-300"
              data-testid={`integration-card-${item.id}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs"
                  style={{ background: `${item.accent}15`, color: item.accent, border: `1px solid ${item.accent}30` }}
                >
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: `${item.accent}10`, color: item.accent, border: `1px solid ${item.accent}20` }}
                >
                  {item.category}
                </span>
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {item.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
