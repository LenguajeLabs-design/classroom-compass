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
    case "compass":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="7.5" stroke="#F59E0B" strokeWidth="1.4"/>
          <path d="M13.8 8.2 12 13.6 6.6 15.4 8.4 10z" fill="#F59E0B" opacity="0.8"/>
          <circle cx="11" cy="11" r="1.2" fill="#F59E0B"/>
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
        <div className="h-full w-full bg-[#F4F7FB] p-4 text-slate-900">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_80px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-800">
                Lesson Output
              </div>
            </div>

            <div className="grid gap-3 p-4">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Content objective</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-800">
                    Identify key events and explain how a character responds to a problem using evidence.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Language objective</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-800">
                    Use sentence frames to retell events, describe feelings, and cite one piece of evidence.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Key vocabulary</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["chapter", "clue", "evidence", "problem", "solution"].map((word) => (
                    <span
                      key={word}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#1E3167] p-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">Sentence frames</p>
                <div className="mt-3 space-y-2.5">
                  {[
                    "In Chapter 12, ____ happened.",
                    "I think ____ because ____.",
                    "The evidence is ____.",
                  ].map((frame, index) => (
                    <div key={frame} className="flex items-center gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/14 text-[11px] font-bold text-white/90">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium text-white/95">{frame}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Lesson flow</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Warm-Up</p>
                  </div>
                  <div className="rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    3 steps
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700">
                  Picture walk, stop-and-jot, and a quick partner share with built-in scaffolds.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    case "compass":
      return (
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.22),_transparent_44%),linear-gradient(180deg,#fff7e6_0%,#fffdf8_100%)] p-5 text-slate-900">
          <div className="h-full rounded-[1.75rem] border border-amber-200/70 bg-white/92 p-5 shadow-[0_24px_80px_-36px_rgba(146,64,14,0.38)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">Compass</p>
                <h4 className="mt-2 text-xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Support with more clarity and calm
                </h4>
              </div>
              <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-800">
                Growing now
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Designed to help with</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Student services", "Neurodiversity", "Next steps"].map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-amber-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  A practical space for supporting neurodiverse learners and students receiving student services with clearer language, literacy support, and next steps.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900 p-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Why it matters</p>
                <div className="mt-3 space-y-3">
                  {[
                    "Makes complex support feel more navigable",
                    "Connects language, literacy, and student care",
                    "Creates a calmer starting point for families and staff",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-2.5">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                      <span className="text-sm leading-relaxed text-white/92">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
  const featuredTool = featuredTools.find((tool) => tool.id === "scaffold") ?? featuredTools[0];
  const compactTools = featuredTools.filter((tool) => tool.id !== featuredTool.id);

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
              Tools in the lab.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
              One featured product up front, with the rest of the lab close by.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.8fr)] gap-5 items-start"
          data-testid="tools-grid"
        >
          <motion.div
            variants={cardVariants}
            className="group relative rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-border transition-all duration-300 hover:shadow-xl flex flex-col"
            style={{ boxShadow: "0 0 0 0px transparent" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px -8px ${featuredTool.accent}22`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0px transparent"; }}
            data-testid={`tool-card-${featuredTool.id}`}
          >
            <div className="h-[360px] bg-gradient-to-br from-card to-background/60 border-b border-border/40 overflow-hidden">
              {getToolPreview(featuredTool.id, featuredTool.screenshotSrc, featuredTool.screenshotAlt)}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${featuredTool.accent}15`, border: `1px solid ${featuredTool.accent}30` }}>
                  {getToolIcon(featuredTool.id)}
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary">Featured</p>
                  <h3 className="font-semibold text-2xl text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {featuredTool.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                {featuredTool.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-2 justify-between">
                <div className="flex flex-wrap gap-2">
                  {featuredTool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium border"
                      style={{ color: featuredTool.accent, borderColor: `${featuredTool.accent}30`, background: `${featuredTool.accent}10` }}
                      data-testid={`tool-tag-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={featuredTool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  data-testid={`tool-link-${featuredTool.id}`}
                >
                  Open tool
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6.5 3 9.5 6 6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="space-y-3">
            {compactTools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card/70 p-4 hover:border-border hover:bg-card transition-all duration-300"
                data-testid={`tool-compact-${tool.id}`}
              >
                <div
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${tool.accent}15`, border: `1px solid ${tool.accent}30` }}
                >
                  {getToolIcon(tool.id)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {tool.title}
                    </h3>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {tool.subtitle}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs font-medium border"
                        style={{ color: tool.accent, borderColor: `${tool.accent}30`, background: `${tool.accent}10` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
