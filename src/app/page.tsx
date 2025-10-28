import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
