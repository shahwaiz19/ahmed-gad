import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Experience } from "@/components/Experience";
import { Highlights } from "@/components/Highlights";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed relative">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About & Executive Metrics */}
      <About />

      {/* Core Expertise (Editorial Numbered List) */}
      <Expertise />

      {/* Career Experience Timeline (Single-Expanded Accordion) */}
      <Experience />

      {/* Career Highlights (Executive Dossier Accordion) */}
      <Highlights />

      {/* Contact & Consultation */}
      <Contact />

      {/* Archive Footer */}
      <Footer />
    </main>
  );
}
