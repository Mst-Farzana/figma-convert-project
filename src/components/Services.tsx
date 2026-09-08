"use client";

const SERVICES = [
  {
    number: "01",
    title: "Import & Export Consulting",
    desc: "End-to-end guidance through customs, compliance, tariffs, and documentation for US and international trade channels.",
    markets: ["USA", "EU", "APAC"],
  },
  {
    number: "02",
    title: "B2B Marketplace Access",
    desc: "Direct connections to verified buyers and distributors across North America, Europe, the Middle East, and Southeast Asia.",
    markets: ["B2B", "Wholesale", "Retail"],
  },
  {
    number: "03",
    title: "Supply Chain Management",
    desc: "Optimised logistics, warehousing, and last-mile delivery solutions that cut cost and reduce delivery times.",
    markets: ["Logistics", "3PL", "D2C"],
  },
  {
    number: "04",
    title: "Market Entry Strategy",
    desc: "Data-driven insights and localisation support to launch your brand in new geographic markets with confidence.",
    markets: ["Strategy", "Launch", "Growth"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 px-6 lg:px-12 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-1">
            <div className="text-accent text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-accent" /> Our Services
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-medium leading-tight text-foreground">
              Everything you need to trade globally.
            </h2>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <p className="text-foreground/60 text-lg leading-relaxed max-w-xl">
              From first export to multinational distribution, NexaTrade
              provides the infrastructure, relationships, and expertise your
              business needs to compete in international markets.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        {/* ✅ পরিবর্তন: bg-foreground/10 এর জায়গায় bg-border ব্যবহার করা হয়েছে যাতে বর্ডার কালার হুবহু ম্যাচ করে */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="bg-background p-8 lg:p-10 group hover:bg-foreground transition-colors duration-300 cursor-default"
            >
              {/* Number & Tags */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-accent text-lg font-light">
                  {s.number}
                </span>
                <div className="flex gap-1.5 flex-wrap justify-end">
                  {s.markets.map((m) => (
                    <span
                      key={m}
                      className="text-[10px] tracking-widest uppercase px-2 py-1 border border-foreground/20 group-hover:border-primary-foreground/20 text-foreground/50 group-hover:text-primary-foreground/50 transition-colors duration-300"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-medium mb-3 group-hover:text-primary-foreground transition-colors duration-300 leading-snug text-foreground">
                {s.title}
              </h3>
              <p className="text-foreground/55 group-hover:text-primary-foreground/55 text-sm leading-relaxed transition-colors duration-300">
                {s.desc}
              </p>

              {/* Link */}
              <div className="mt-8 flex items-center gap-2 text-accent text-sm font-medium">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
