"use client";

const PROCESS = [
  {
    step: "Discovery",
    desc: "We assess your product, target markets, and compliance requirements in a focused 90-minute session.",
  },
  {
    step: "Strategy",
    desc: "A tailored market entry or expansion plan with timelines, cost projections, and risk mapping.",
  },
  {
    step: "Execute",
    desc: "Our local teams activate buyer networks, handle paperwork, and manage your logistics pipeline.",
  },
  {
    step: "Scale",
    desc: "Ongoing account management, performance reporting, and new market identification as you grow.",
  },
];

export default function HowWeWork() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Subtitle */}
        <div className="text-accent text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
          <span className="w-6 h-px bg-accent" /> How We Work
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl lg:text-5xl font-medium leading-tight mb-16 max-w-xl text-foreground">
          From first conversation to global sales.
        </h2>

        {/* Process Grid - 100% Figma Match Border Logic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-border">
          {PROCESS.map((p, i) => (
            <div
              key={i}
              className={`p-8 border-border
                /* ডেস্কটপে (4 কলাম): প্রথম ৩টি আইটেমের ডানদিকে লাইন থাকবে */
                ${i === 0 || i === 1 || i === 2 ? "lg:border-r" : ""}
                
                /* ট্যাবলেটে (2 কলাম): ১ম ও ৩য় (0, 2) আইটেমের ডানদিকে লাইন থাকবে */
                ${i === 0 || i === 2 ? "md:border-r" : ""}
                
                /* মোবাইলে (1 কলাম): শেষটি বাদে সবগুলোর নিচে লাইন থাকবে */
                ${i === 0 || i === 1 || i === 2 ? "border-b" : ""}
                
                /* ট্যাবলেট ও ডেস্কটপে নিচের সারির আইটেমগুলোর (2, 3) নিচে লাইন থাকবে না */
                ${i === 2 || i === 3 ? "md:border-b-0 lg:border-b-0" : ""}
              `}
            >
              {/* ✅ পরিবর্তন: text-foreground/[0.08] এর জায়গায় text-foreground (সলিড ব্ল্যাক) ব্যবহার করা হয়েছে */}
              <div className="font-display text-6xl font-light text-foreground mb-4 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Step Title */}
              <h3 className="font-semibold text-base mb-3 text-foreground">
                {p.step}
              </h3>

              {/* Step Description */}
              <p className="text-foreground/55 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
