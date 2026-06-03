import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { featuredTools, type ToolId } from "@/content/site";

function getToolIcon(toolId: ToolId): ReactNode {
  switch (toolId) {
    case "wida-family-guide":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="3" y="3" width="7" height="9" rx="1.5" stroke="#3B82F6" strokeWidth="1.4"/>
          <rect x="12" y="3" width="7" height="9" rx="1.5" stroke="#3B82F6" strokeWidth="1.4"/>
          <path d="M3 16h7M12 16h7" stroke="#3B82F6" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M3 19h5M14 19h5" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
        </svg>
      );
    case "scaffold":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M6 18V8M6 8l3-3M6 8l-3-3" stroke="#3B82F6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="10" y="6" width="9" height="2.5" rx="1.25" fill="#3B82F6" opacity="0.7"/>
          <rect x="10" y="10.5" width="7" height="2" rx="1" fill="#3B82F6" opacity="0.5"/>
          <rect x="10" y="14.5" width="5" height="2" rx="1" fill="#3B82F6" opacity="0.3"/>
        </svg>
      );
    case "li-li-chinese":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="7.5" stroke="#0D9488" strokeWidth="1.4"/>
          <text x="11" y="15" textAnchor="middle" fontSize="9" fill="#0D9488" fontFamily="serif">李</text>
        </svg>
      );
    case "hangul-flow":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="#7C3AED" strokeWidth="1.4"/>
          <rect x="12" y="4" width="6" height="6" rx="1.5" stroke="#7C3AED" strokeWidth="1.4"/>
          <rect x="4" y="12" width="6" height="6" rx="1.5" stroke="#7C3AED" strokeWidth="1.4"/>
          <rect x="12" y="12" width="6" height="6" rx="1.5" stroke="#7C3AED" strokeWidth="1.4"/>
        </svg>
      );
  }
}

function getToolPreview(toolId: ToolId, screenshotSrc: string, screenshotAlt: string): ReactNode {
  switch (toolId) {
    case "wida-family-guide":
      return (
        <div className="h-full w-full overflow-hidden">
          <img
            src={screenshotSrc}
            alt={screenshotAlt}
            className="w-full h-full object-cover object-top"
          />
        </div>
      );
    case "scaffold":
      return (
        <div className="h-full w-full overflow-hidden">
          <img
            src={screenshotSrc}
            alt={screenshotAlt}
            className="w-full h-full object-cover object-top"
          />
        </div>
      );
    case "li-li-chinese":
      return (
        <div className="h-full w-full overflow-hidden">
          <img
            src={screenshotSrc}
            alt={screenshotAlt}
            className="w-full h-full object-cover object-top"
          />
        </div>
      );
    case "hangul-flow":
      return (
        <div className="h-full w-full overflow-hidden">
          <img
            src={screenshotSrc}
            alt={screenshotAlt}
            className="w-full h-full object-cover object-top"
          />
        </div>
      );
  }
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function FeaturedTools() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="tools"
      className="py-28 md:py-36 relative"
      data-testid="featured-tools-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4" data-testid="tools-label">
              FEATURED TOOLS
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="tools-headline"
            >
              Built for real classrooms.<br />
              Backed by research.
            </h2>
          </motion.div>
          <motion.a
            href="#tools"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group whitespace-nowrap"
            data-testid="tools-view-all"
          >
            View all tools
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          data-testid="tools-grid"
        >
          {featuredTools.map((tool) => (
            <motion.div
              key={tool.id}
              variants={cardVariants}
              className="group relative rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-border transition-all duration-300 hover:shadow-xl flex flex-col"
              style={{ boxShadow: "0 0 0 0px transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px -8px ${tool.accent}22`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0px transparent"; }}
              data-testid={`tool-card-${tool.id}`}
            >
              <div className="h-36 bg-gradient-to-br from-card to-background/60 border-b border-border/40 overflow-hidden">
                {getToolPreview(tool.id, tool.screenshotSrc, tool.screenshotAlt)}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${tool.accent}15`, border: `1px solid ${tool.accent}30` }}>
                    {getToolIcon(tool.id)}
                  </div>
                  <h3 className="font-semibold text-sm text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {tool.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {tool.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs font-medium border"
                        style={{ color: tool.accent, borderColor: `${tool.accent}30`, background: `${tool.accent}10` }}
                        data-testid={`tool-tag-${tag.toLowerCase()}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full flex items-center justify-center border border-border/60 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    data-testid={`tool-link-${tool.id}`}
                    aria-label={`View ${tool.title}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6.5 3 9.5 6 6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
