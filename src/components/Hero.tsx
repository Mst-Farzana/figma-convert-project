"use client";

const STATS = [
  { value: "42+", label: "Countries Served" },
  { value: "$2.8B", label: "Trade Volume" },
  { value: "1,400+", label: "Global Clients" },
  { value: "18yrs", label: "Market Experience" },
];

const PARTNERS = [
  "Forbes Partner",
  "Inc. 5000",
  "WTO Certified",
  "ISO 9001:2015",
  "BBB Accredited",
  "Dun & Bradstreet Verified",
];

export default function Hero() {
  return (
    <>
      {/* ─ HERO SECTION ── */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Dark Panel */}
        <div className="bg-foreground flex flex-col justify-end px-8 lg:px-16 pt-32 pb-16 lg:pb-24 relative overflow-hidden">
          {/* Vertical divider line */}
          <div className="absolute top-0 right-0 w-px h-full bg-accent/30" />

          {/* ✅ সাবটাইটেল - Figma-র মতো একদম উপরে বাম দিকে Absolute পজিশনে */}
          <div className="absolute top-16 left-8 lg:left-16 flex items-center gap-2 text-accent/70 text-xs tracking-widest uppercase">
            <span className="w-6 h-px bg-accent/70" />
            Global Trade Partner Since 2006
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-lg">
            {/* Heading */}
            <h1 className="font-display text-primary-foreground text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-6">
              Your Business,
              <br />
              <em className="not-italic text-accent">Every Market.</em>
            </h1>

            {/* Description */}
            <p className="text-primary-foreground/60 text-lg leading-relaxed mb-10 max-w-xl">
              NexaTrade connects US and international businesses with verified
              buyers, streamlined logistics, and expert market entry across 42+
              countries.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent-hover transition-colors duration-200"
              >
                Start Trading Globally →
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-primary-foreground/20 text-primary-foreground/80 text-sm hover:border-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="relative z-10 mt-auto grid grid-cols-2 gap-x-8 gap-y-6 border-t border-primary-foreground/10 pt-8 pb-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-medium text-primary-foreground">
                  {s.value}
                </div>
                <div className="text-primary-foreground/40 text-xs tracking-wide mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo Panel */}
        <div className="relative min-h-[50vh] lg:min-h-0 bg-foreground">
          <img
            src="https://images.unsplash.com/photo-1779700210487-a01758a3c55a?w=1200&h=900&fit=crop&auto=format"
            alt="Conference room with panoramic city view at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

          {/* Badge */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5">
              <div className="w-2 h-2 rounded-full bg-[#6EBD8B] animate-pulse" />
              <span className="text-white text-xs tracking-wide">
                Live market activity across 18 time zones
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="bg-foreground py-5 px-6 border-y border-primary-foreground/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="text-primary-foreground/35 text-xs font-semibold tracking-widest uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
