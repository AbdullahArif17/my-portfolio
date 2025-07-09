import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skillls"
import Projects from "@/components/projects"
// import Experience from "@/components/experience"
import Contact from "@/components/contact"
import { ThemeProvider } from "next-themes"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </main>
    </ThemeProvider>
  )
}
