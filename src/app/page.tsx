import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Values from "@/components/Values";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Values />
      <Pricing />
      <Testimonial />
      <Footer />
    </main>
  );
}
