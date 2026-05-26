import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const scaffoldScreenshot = "/opengraph.jpg";

const tools = [
  {
    id: "wida-family-guide",
    title: "WIDA Family Guide",
    subtitle: "Understand your child's English proficiency level and how to support their learning journey — available in multiple languages.",
    tags: ["Family", "EAL"],
    accent: "#1E3A5F",
    url: "https://wida-family-guide.replit.app/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="9" rx="1.5" stroke="#3B82F6" strokeWidth="1.4"/>
        <rect x="12" y="3" width="7" height="9" rx="1.5" stroke="#3B82F6" strokeWidth="1.4"/>
        <path d="M3 16h7M12 16h7" stroke="#3B82F6" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M3 19h5M14 19h5" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    preview: (
      <div className="p-3 h-full flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded bg-[#1E3A5F] flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><rect x="1" y="1" width="3.5" height="4" rx="0.5" fill="white"/><rect x="5.5" y="1" width="3.5" height="4" rx="0.5" fill="white"/></svg>
          </div>
          <span className="text-[10px] font-bold tracking-wider text-foreground/70">WIDA FAMILY GUIDE</span>
        </div>
        <div className="flex gap-1 mb-2">
          {["1\nEntering", "2\nBeginning", "3\nDeveloping", "4\nExpanding", "5\nBridging", "6\nReaching"].map((l, i) => (
            <div key={i} className={`flex-1 rounded text-[7px] text-center py-1 leading-tight font-medium transition-colors ${i === 0 ? "bg-[#1E3A5F] text-white" : "bg-border/30 text-muted-foreground"}`}>
              {l.split("\n").map((part, j) => <div key={j}>{part}</div>)}
            </div>
          ))}
        </div>
        <div className="rounded bg-card/60 border border-border/40 px-2 py-1.5">
          <p className="text-[9px] font-bold text-foreground/80 mb-0.5">LEVEL 1 · ENTERING</p>
          <p className="text-[8px] text-muted-foreground leading-tight">Just starting out — every new word is a win!</p>
        </div>
      </div>
    ),
  },
  {
    id: "scaffold",
    title: "Scaffold",
    subtitle: "AI-powered EAL lesson planning assistant. Enter a school access code and generate differentiated lessons in minutes.",
    tags: ["AI", "Lesson Planning"],
    accent: "#1E3A8A",
    url: "https://scaffold.replit.app/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M6 18V8M6 8l3-3M6 8l-3-3" stroke="#3B82F6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="10" y="6" width="9" height="2.5" rx="1.25" fill="#3B82F6" opacity="0.7"/>
        <rect x="10" y="10.5" width="7" height="2" rx="1" fill="#3B82F6" opacity="0.5"/>
        <rect x="10" y="14.5" width="5" height="2" rx="1" fill="#3B82F6" opacity="0.3"/>
      </svg>
    ),
    preview: (
      <div className="h-full w-full overflow-hidden">
        <img
          src={scaffoldScreenshot}
          alt="Scaffold lesson planner UI"
          className="w-full h-full object-cover object-top"
        />
      </div>
    ),
  },
  {
    id: "li-li-chinese",
    title: "Li Li Chinese",
    subtitle: "A calm space to turn Chinese into real speaking. Save words, track progress, and build confidence at your own pace.",
    tags: ["Chinese", "Speaking"],
    accent: "#0D9488",
    url: "https://speak-chinese-now.replit.app/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7.5" stroke="#0D9488" strokeWidth="1.4"/>
        <text x="11" y="15" textAnchor="middle" fontSize="9" fill="#0D9488" fontFamily="serif">李</text>
      </svg>
    ),
    preview: (
      <div className="p-3 h-full flex flex-col items-center justify-center gap-2">
        <div className="w-10 h-10 rounded-2xl bg-white shadow flex items-center justify-center text-lg">
          <span style={{ fontFamily: "serif" }}>李</span>
        </div>
        <div className="text-center">
          <p className="text-xs font-bold text-foreground/90" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-foreground/70">Li Li </span>
            <span className="text-teal-400">Chinese</span>
          </p>
          <p className="text-[8px] text-muted-foreground mt-0.5">A calm space to turn Chinese into real speaking.</p>
        </div>
        <div className="w-full rounded-full bg-teal-500 py-1 text-center text-[9px] font-semibold text-white">Log in to get started</div>
      </div>
    ),
  },
  {
    id: "hangul-flow",
    title: "Hangul Flow",
    subtitle: "Master Korean through AI-generated reading passages tailored to your level and interests, with instant vocabulary support.",
    tags: ["Korean", "AI Reading"],
    accent: "#7C3AED",
    url: "https://hangul-flow.replit.app/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="#7C3AED" strokeWidth="1.4"/>
        <rect x="12" y="4" width="6" height="6" rx="1.5" stroke="#7C3AED" strokeWidth="1.4"/>
        <rect x="4" y="12" width="6" height="6" rx="1.5" stroke="#7C3AED" strokeWidth="1.4"/>
        <rect x="12" y="12" width="6" height="6" rx="1.5" stroke="#7C3AED" strokeWidth="1.4"/>
      </svg>
    ),
    preview: (
      <div className="h-full relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #14b8a6 0%, #7c3aed 60%, #ec4899 100%)", opacity: 0.85 }} />
        <div className="relative p-3 h-full flex flex-col justify-between">
          <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/20 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
            <span className="text-[8px] text-white/90 font-medium">AI-Powered Reading</span>
          </div>
          <div>
            <p className="text-white font-bold text-xs leading-snug mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Master Korean through personalized stories.</p>
            <div className="flex gap-1">
              <div className="flex-1 rounded bg-white/20 py-0.5 text-center text-[8px] text-white font-medium">Generate</div>
              <div className="flex-1 rounded bg-white/10 border border-white/30 py-0.5 text-center text-[8px] text-white">Library</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

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
          {tools.map((tool) => (
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
                {tool.preview}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${tool.accent}15`, border: `1px solid ${tool.accent}30` }}>
                    {tool.icon}
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
