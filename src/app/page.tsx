import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlobalReach from "@/components/GlobalReach";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <GlobalReach />
      <HowWeWork />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
