import dynamic from "next/dynamic"
import { Suspense, lazy } from "react"
import Navigation from "@/components/layout/navigation"
import Hero from "@/components/sections/hero"

const ScrollToTop = dynamic(() => import("@/components/layout/scroll-to-top"), { ssr: false })

// Lazy load below-the-fold components for better initial load performance
const About = lazy(() => import("@/components/sections/about"))
const Experience = lazy(() => import("@/components/sections/experience"))
const Education = lazy(() => import("@/components/sections/education"))
const Projects = lazy(() => import("@/components/sections/projects"))
const Footer = lazy(() => import("@/components/layout/footer"))

// Loading fallback component
const SectionLoader = () => (
  <div className="py-12 sm:py-16 lg:py-20 flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}
