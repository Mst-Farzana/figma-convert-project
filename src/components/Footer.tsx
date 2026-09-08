export default function Footer() {
  return (
    // ✅ Figma Exact Height: py-12 (48px top & bottom)
    <footer className="bg-[#080C18] py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm font-display">
                  N
                </span>
              </div>
              <span className="text-primary-foreground font-semibold text-[15px]">
                NexaTrade
              </span>
            </div>
            <p className="text-primary-foreground/30 text-sm leading-relaxed max-w-xs">
              Your global trade partner — connecting businesses across borders
              since 2006.
            </p>
          </div>

          {[
            {
              heading: "Services",
              links: [
                "Import Consulting",
                "Export Consulting",
                "B2B Marketplace",
                "Supply Chain",
                "Market Entry",
              ],
            },
            {
              heading: "Markets",
              links: [
                "North America",
                "Europe",
                "Middle East",
                "Asia-Pacific",
                "Africa",
              ],
            },
            {
              heading: "Company",
              links: ["About Us", "Leadership", "Careers", "Press", "Contact"],
            },
          ].map((col) => (
            <div key={col.heading}>
              <div className="text-primary-foreground/60 text-xs font-semibold tracking-widest uppercase mb-4">
                {col.heading}
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/35 hover:text-primary-foreground/70 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/20 text-xs">
            © 2026 NexaTrade International, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-primary-foreground/20 hover:text-primary-foreground/50 text-xs transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
