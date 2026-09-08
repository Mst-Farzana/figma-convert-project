"use client";

import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "NexaTrade opened doors we didn't even know existed. Within six months we were shipping to 14 new markets across Europe and the Gulf.",
    name: "Sarah Mitchell",
    title: "CEO, Brightwave Consumer Goods",
    country: "United States",
    flag: "🇺🇸",
  },
  {
    quote:
      "Their customs expertise saved us weeks of delays and thousands in potential penalties. The most professional trade partner we've worked with.",
    name: "Ahmad Al-Rashidi",
    title: "Head of Procurement, Al-Rashidi Group",
    country: "United Arab Emirates",
    flag: "🇦🇪",
  },
  {
    quote:
      "As a German manufacturer entering the US market, the regulatory guidance alone was worth its weight in gold. Exceptional team.",
    name: "Klaus Vinterberg",
    title: "Managing Director, Vinterberg Industrial",
    country: "Germany",
    flag: "🇩🇪",
  },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    // ✅ পরিবর্তন: bg-[#E8E3DB] এর জায়গায় bg-secondary ব্যবহার করা হয়েছে
    <section id="clients" className="bg-secondary py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Side - 2 columns */}
          <div className="lg:col-span-2">
            {/* Subtitle */}
            <div className="text-accent text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-accent" /> Client Stories
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl font-medium leading-tight mb-8 text-foreground">
              Trusted by leaders in 42 countries.
            </h2>

            {/* Dot Navigation */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    i === activeTestimonial
                      ? "w-8 bg-accent"
                      : "w-4 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - 3 columns */}
          <div className="lg:col-span-3">
            <div className="relative min-h-[240px]">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === activeTestimonial
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  {/* Quote */}
                  <blockquote className="font-display text-xl lg:text-2xl font-light leading-relaxed text-foreground mb-8 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    {/* Name & Title */}
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {t.name}
                      </div>
                      <div className="text-foreground/55 text-xs">
                        {t.title} · {t.flag} {t.country}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
