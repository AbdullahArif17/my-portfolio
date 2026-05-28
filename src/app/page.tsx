"use client";

import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen selection:bg-white/10 selection:text-white antialiased text-white">
      <Navigation />

      <main className="flex flex-col overflow-x-hidden">
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
