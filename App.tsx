import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { Classes } from "./components/Classes";
import { Pricing } from "./components/Pricing";
import { Trainers } from "./components/Trainers";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Features />
        <Stats />
        <section id="classes">
          <Classes />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="trainers">
          <Trainers />
        </section>
        <Testimonials />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
