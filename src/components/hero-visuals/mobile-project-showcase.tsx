"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

interface ProjectPreview {
  title: string
  image: string
  tech: string[]
  description: string
  link?: string
}

const projects: ProjectPreview[] = [
  {
    title: "Renow AS",
    image: "https://s0.wp.com/mshots/v1/https://renow.no?w=900&h=600",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    description: "Sustainable web development company",
    link: "https://renow.no"
  },
  {
    title: "Discgolf App",
    image: "/dg-thumbnail.png",
    tech: ["Next.js", "ConvexDB", "WebSocket"],
    description: "Real-time scoring application",
    link: "https://discgolf-beta.vercel.app/"
  },
  {
    title: "Blackjack Game",
    image: "/blackjack.png",
    tech: ["Java", "Spring Boot", "REST API"],
    description: "Interactive Blackjack game with web interface",
    link: "https://github.com/tobiasrogerhammer/blackjack-java"
  }
]

export const MobileProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
        setIsTransitioning(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
      setIsTransitioning(false)
    }, 300)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
      setIsTransitioning(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (index === currentIndex) return
    setIsAutoPlaying(false)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 300)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="w-full max-w-sm mx-auto mb-4 sm:mb-12 px-4">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative rounded-xl overflow-hidden border border-border/50 shadow-xl bg-card/50 backdrop-blur-sm"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Project Image */}
        <div className="relative w-full aspect-video overflow-hidden">
          {currentProject.image && currentProject.image !== "/api/placeholder/600/400" ? (
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isTransitioning ? 'opacity-50' : 'opacity-100'
              }`}
              sizes="(max-width: 640px) 100vw, 384px"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
          ) : null}
          {/* Fallback gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-accent/20 to-brand-secondary/20 hidden" style={{ display: 'none' }}>
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">P</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">{currentProject.title}</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent" />
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-border/50 hover:bg-gray-50 active:scale-95 transition-all duration-200 touch-manipulation z-10 shadow-md"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-border/50 hover:bg-gray-50 active:scale-95 transition-all duration-200 touch-manipulation z-10 shadow-md"
            aria-label="Next project"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        </div>

        {/* Project Info */}
        <div className="p-4 bg-card/90 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-brand-primary">
              {currentProject.title}
            </h3>
            {currentProject.link && (
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-muted transition-colors duration-200 text-muted-foreground hover:text-brand-primary touch-manipulation"
                aria-label={`Visit ${currentProject.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {currentProject.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-brand-primary/10 text-brand-primary border border-brand-primary/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              h-2 rounded-full transition-all duration-300 touch-manipulation border-2
              ${index === currentIndex 
                ? 'w-8 bg-brand-primary border-brand-primary' 
                : 'w-2 bg-transparent border-border hover:border-brand-primary/50 active:border-brand-primary/70'
              }
            `}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
