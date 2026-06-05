import { footerColumns, footerSocialLinks, siteContact, siteResources } from "@/content/site";

function LLLogo() {
  return (
    <div
      className="grid h-7 w-7 place-items-center rounded-md border border-amber-300/40 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.4),transparent_55%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(30,41,59,0.95))]"
      aria-hidden="true"
    >
      <svg width="15" height="15" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7.5" stroke="#FBBF24" strokeWidth="1.5" />
        <path d="M13.8 8.2 12 13.6 6.6 15.4 8.4 10z" fill="#FBBF24" />
        <circle cx="11" cy="11" r="1.15" fill="#FDE68A" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/20 pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[280px_1fr_280px] gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4" data-testid="footer-logo">
              <LLLogo />
              <span className="text-sm font-semibold tracking-widest text-foreground/90" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                CLASSROOM COMPASS
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs" data-testid="footer-tagline">
              A clearer, calmer landing place for student support, language clarity, and family communication.
            </p>
            <div className="flex items-center gap-3">
              {footerSocialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  data-testid={`footer-social-${link.id}`}
                  aria-label={link.label}
                >
                  {link.id === "linkedin" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  )}
                  {link.id === "email" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  )}
                  {link.id === "github" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:px-8">
            {footerColumns.map((col) => (
              <div key={col.heading} data-testid={`footer-col-${col.heading.toLowerCase()}`}>
                <p className="text-xs font-bold tracking-widest text-muted-foreground/60 uppercase mb-4">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
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
              Follow the project, browse the source, or reach out directly.
            </p>
            <div className="flex flex-col gap-2" data-testid="footer-cta-links">
              <a
                href={siteContact.email}
                className="inline-flex items-center justify-between rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                data-testid="footer-cta-email"
              >
                Email Classroom Compass
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href={siteResources.presentationPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                data-testid="footer-cta-presentation"
              >
                Download presentation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-muted-foreground/70">
            Created by <span className="text-foreground/80 font-medium">Federico Orozco</span> | Classroom Compass
          </p>
          <a href={siteContact.email} className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">
            lenguajelabs@proton.me
          </a>
          <p className="text-xs text-muted-foreground/50">
            Built for clearer student-support communication
          </p>
          <p className="text-xs text-muted-foreground/40 mt-1" data-testid="footer-copyright">
            © 2026 Federico Orozco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
