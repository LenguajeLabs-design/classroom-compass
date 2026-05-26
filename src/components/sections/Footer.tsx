import { useState } from "react";
import { motion } from "framer-motion";

function LLLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Lenguaje Labs logo">
      <rect x="4" y="4" width="5" height="20" rx="1.5" fill="#3B82F6" />
      <rect x="4" y="20" width="11" height="4" rx="1.5" fill="#3B82F6" />
      <rect x="17" y="4" width="5" height="20" rx="1.5" fill="#60A5FA" />
      <rect x="17" y="20" width="11" height="4" rx="1.5" fill="#60A5FA" />
    </svg>
  );
}

const footerNav = [
  {
    heading: "EXPLORE",
    links: [
      { label: "The Lab", href: "#lab" },
      { label: "Research", href: "#research" },
      { label: "Frameworks", href: "#tools" },
      { label: "Integration", href: "#integration" },
      { label: "Resources", href: "#research" },
    ],
  },
  {
    heading: "CONNECT",
    links: [
      { label: "Email", href: "mailto:lenguajelabs@proton.me" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/federico-orozco-687b5431/" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "About", href: "#mission" },
      { label: "Mission", href: "#mission" },
      { label: "Presentations", href: "#" },
      { label: "Lab Notes", href: "#" },
    ],
  },
  {
    heading: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="border-t border-border/60 bg-card/20 pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[280px_1fr_280px] gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4" data-testid="footer-logo">
              <LLLogo />
              <span className="text-sm font-semibold tracking-widest text-foreground/90" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                LENGUAJE LABS
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs" data-testid="footer-tagline">
              AI-powered tools and research for multilingual learning communities.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/federico-orozco-687b5431/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                data-testid="footer-social-linkedin"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="mailto:lenguajelabs@proton.me"
                className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                data-testid="footer-social-email"
                aria-label="Email"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                data-testid="footer-social-github"
                aria-label="GitHub"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:px-8">
            {footerNav.map((col) => (
              <div key={col.heading} data-testid={`footer-col-${col.heading.toLowerCase()}`}>
                <p className="text-xs font-bold tracking-widest text-muted-foreground/60 uppercase mb-4">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={(e) => {
                          if (link.href.startsWith("#") && link.href.length > 1) {
                            e.preventDefault();
                            document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                          } else if (link.href === "#") {
                            e.preventDefault();
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest text-muted-foreground/60 uppercase mb-4">STAY IN THE LOOP</p>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Ideas, tools, and updates from the lab.
            </p>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-primary"
                data-testid="footer-email-success"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4"/><path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                You're subscribed!
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2" data-testid="footer-email-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-3 py-2 rounded-full bg-card border border-border/60 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  data-testid="footer-email-input"
                />
                <button
                  type="submit"
                  className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors flex-shrink-0"
                  data-testid="footer-email-submit"
                  aria-label="Subscribe"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-muted-foreground/70">
            Created by <span className="text-foreground/80 font-medium">Federico Orozco</span> | Lenguaje Labs
          </p>
          <a href="mailto:lenguajelabs@proton.me" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">
            Lenguajelabs@proton.me
          </a>
          <p className="text-xs text-muted-foreground/50">
            Based on the WIDA ELD Standards Framework
          </p>
          <p className="text-xs text-muted-foreground/40 mt-1" data-testid="footer-copyright">
            © 2026 Federico Orozco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
