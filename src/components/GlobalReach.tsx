"use client";

const MARKETS = [
  {
    region: "North America",
    countries: "USA · Canada · Mexico",
    clients: 580,
    color: "#C8953A",
  },
  {
    region: "Europe",
    countries: "UK · Germany · France · Netherlands",
    clients: 320,
    color: "#E8E3DB",
  },
  {
    region: "Middle East",
    countries: "UAE · Saudi Arabia · Qatar",
    clients: 210,
    color: "#6B9E8B",
  },
  {
    region: "Asia-Pacific",
    countries: "China · Japan · Singapore · India",
    clients: 290,
    color: "#8B6B9E",
  },
];

export default function GlobalReach() {
  return (
    <section
      id="markets"
      className="bg-foreground py-24 lg:py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Figma Exact Layout */}
        <div className="text-accent text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
          <span className="w-6 h-px bg-accent" /> Global Reach
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2 className="font-display text-4xl lg:text-5xl text-primary-foreground font-medium leading-tight max-w-md">
            Active in markets that matter most.
          </h2>
          <p className="text-primary-foreground/40 max-w-sm leading-relaxed text-sm">
            Our regional offices and partner networks ensure local expertise
            wherever your business operates or aspires to reach.
          </p>
        </div>

        {/* Regions Grid - Figma Exact (gap-px trick for 1px borders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/5">
          {MARKETS.map((m, i) => (
            <div
              key={i}
              className="bg-foreground p-8 hover:bg-primary-foreground/5 transition-colors duration-200 group"
            >
              {/* Colored Dot (Dynamic inline style is perfect here) */}
              <div
                className="w-2 h-2 rounded-full mb-6"
                style={{ background: m.color }}
              />
              <div className="font-display text-3xl text-primary-foreground font-light mb-1">
                {m.clients}+
              </div>
              <div className="text-primary-foreground/30 text-xs mb-5">
                active clients
              </div>
              <div className="text-primary-foreground font-semibold text-base mb-2">
                {m.region}
              </div>
              <div className="text-primary-foreground/40 text-xs leading-relaxed">
                {m.countries}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Stats + CTA */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Stats Card with Image Background */}
          <div className="relative overflow-hidden bg-primary-foreground/5 border border-primary-foreground/5 p-8">
            <img
              src="https://images.unsplash.com/photo-1766561993203-23bb057048c5?w=800&h=500&fit=crop&auto=format"
              alt="Modern office buildings with glass facades"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <div className="font-display text-5xl text-primary-foreground mb-2">
                $2.8B
              </div>
              <div className="text-primary-foreground/40 text-sm">
                Total trade volume facilitated in 2024
              </div>
              <div className="mt-6 h-px bg-primary-foreground/10" />
              <div className="mt-6 grid grid-cols-3 gap-6">
                <div>
                  <div className="font-display text-xl text-accent">94%</div>
                  <div className="text-primary-foreground/30 text-xs mt-1">
                    On-time delivery
                  </div>
                </div>
                <div>
                  <div className="font-display text-xl text-accent">99.1%</div>
                  <div className="text-primary-foreground/30 text-xs mt-1">
                    Customs clearance
                  </div>
                </div>
                <div>
                  <div className="font-display text-xl text-accent">4.9★</div>
                  <div className="text-primary-foreground/30 text-xs mt-1">
                    Client satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card - Gold Background */}
          <div className="bg-accent p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl text-accent-foreground font-medium mb-4 leading-snug">
                Ready to enter a new market?
              </h3>
              <p className="text-accent-foreground/70 text-sm leading-relaxed">
                Our market intelligence team can validate your product-market
                fit and outline a realistic go-to-market timeline in 48 hours.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-accent-foreground font-semibold text-sm border-b border-accent-foreground/50 pb-1 hover:border-accent-foreground transition-colors w-fit"
            >
              Request market analysis →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
