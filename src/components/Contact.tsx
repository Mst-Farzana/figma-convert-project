"use client";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-foreground py-24 lg:py-32 px-6 lg:px-12"
    >
      {/* Background Image Overlay */}
      <img
        src="https://images.unsplash.com/photo-1552652893-2aa10a0ab4df?w=1400&h=600&fit=crop&auto=format"
        alt="Man standing near high-rise building"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        aria-hidden="true"
      />

      {/* ✅ পরিবর্তন: items-center এর জায়গায় lg:items-start ব্যবহার করা হয়েছে 
          যাতে ফর্ম এবং টেক্সট উপর থেকে একই লেভেলে শুরু হয় এবং হাইট পারফেক্ট ম্যাচ করে */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start">
        {/* Left Content */}
        <div className="lg:sticky lg:top-32">
          {/* Subtitle */}
          <div className="text-accent text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-accent" /> Get in Touch
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl lg:text-5xl text-primary-foreground font-medium leading-tight mb-6">
            Let&apos;s take your business to the global stage.
          </h2>

          {/* Description */}
          <p className="text-primary-foreground/50 leading-relaxed max-w-md">
            Whether you&apos;re a first-time exporter or an established brand
            looking to enter new territories, our team responds within one
            business day.
          </p>

          {/* Contact Info */}
          <div className="mt-10 flex flex-col gap-4 text-sm text-primary-foreground/40">
            <div className="flex items-center gap-3">
              <span className="text-accent" aria-hidden="true">
                ✉
              </span>
              <span>trade@nexatrade.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent" aria-hidden="true">
                ☎
              </span>
              <span>+1 (888) 639-2840 — Toll-free US</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent" aria-hidden="true">
                ◉
              </span>
              <span>New York · Dubai · Singapore · Frankfurt</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-background p-8 lg:p-10 rounded-sm">
          <h3 className="font-semibold text-lg mb-6 text-foreground">
            Request a Free Consultation
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-xs font-medium text-foreground/60 block mb-1.5 tracking-wide"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Sarah"
                  required
                  className="w-full px-3 py-2.5 border border-border bg-card text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-foreground placeholder:text-foreground/30 rounded-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-xs font-medium text-foreground/60 block mb-1.5 tracking-wide"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Mitchell"
                  required
                  className="w-full px-3 py-2.5 border border-border bg-card text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-foreground placeholder:text-foreground/30 rounded-sm"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="text-xs font-medium text-foreground/60 block mb-1.5 tracking-wide"
              >
                Business Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="sarah@yourcompany.com"
                required
                className="w-full px-3 py-2.5 border border-border bg-card text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-foreground placeholder:text-foreground/30 rounded-sm"
              />
            </div>

            {/* Country Field */}
            <div>
              <label
                htmlFor="country"
                className="text-xs font-medium text-foreground/60 block mb-1.5 tracking-wide"
              >
                Country / Region
              </label>
              <select
                id="country"
                name="country"
                defaultValue="United States"
                className="w-full px-3 py-2.5 border border-border bg-card text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-foreground rounded-sm appearance-none cursor-pointer"
              >
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>UAE</option>
                <option>Singapore</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="text-xs font-medium text-foreground/60 block mb-1.5 tracking-wide"
              >
                Tell us about your business
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Product type, target markets, current challenges..."
                className="w-full px-3 py-2.5 border border-border bg-card text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none text-foreground placeholder:text-foreground/30 rounded-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-foreground text-primary-foreground font-semibold text-sm hover:bg-foreground/90 transition-colors duration-200 mt-2 rounded-sm"
            >
              Submit Request →
            </button>

            <p className="text-foreground/35 text-xs text-center">
              Response within 1 business day. No commitment required.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
