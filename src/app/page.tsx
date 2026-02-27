import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skillls"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import Footer from "@/components/footer"
import { ThemeProvider } from "next-themes"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="mesh-gradient min-h-screen selection:bg-indigo-500/30 selection:text-white">
        <Navigation />
        
        <main className="flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}
