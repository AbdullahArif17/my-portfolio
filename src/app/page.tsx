import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skillls"
import Projects from "@/components/projects"
// import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
// import ThemeToggle from "@/components/theme-toggle"
import ScrollToTop from "@/components/scroll-to-top"
import { ThemeProvider } from "next-themes"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Navigation />
      {/* <ThemeToggle /> */}
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/* <Experience /> */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <ScrollToTop />
    </ThemeProvider>
  )
}
