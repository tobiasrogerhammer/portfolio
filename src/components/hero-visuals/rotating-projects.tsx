"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

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

export const RotatingProjectPreviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
        setIsTransitioning(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [isHovered])

  const currentProject = projects[currentIndex]

  const handleProjectSwitch = (index: number) => {
    if (index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div 
      className="relative w-full h-[500px] xl:h-[600px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card */}
      <div className={`relative w-full h-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card/50 backdrop-blur-xl group transition-all duration-500 ${
        isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}>
        {/* Image */}
        <div className="relative w-full h-2/3 overflow-hidden">
          {currentProject.image && currentProject.image !== "/api/placeholder/600/400" ? (
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
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
                <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">P</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">{currentProject.title}</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-card/90 backdrop-blur-md border-t border-border/50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-brand-primary transition-colors duration-300">
              {currentProject.title}
            </h3>
            {currentProject.link && (
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-200 text-muted-foreground hover:text-brand-primary"
                aria-label={`Visit ${currentProject.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {currentProject.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {currentProject.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-brand-primary/10 text-brand-primary border border-brand-primary/20 font-medium transition-all duration-200 hover:bg-brand-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating preview cards (desktop only) - Clickable */}
      <button
        onClick={() => handleProjectSwitch((currentIndex + 1) % projects.length)}
        className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-lg overflow-hidden border-2 border-border/50 shadow-lg opacity-100 rotate-12 hidden xl:block transition-all duration-500 hover:scale-110 hover:border-brand-primary/50 hover:shadow-xl cursor-pointer group"
        aria-label={`View ${projects[(currentIndex + 1) % projects.length].title}`}
      >
        <div className="relative w-48 aspect-[4/3]">
          <Image
            src={projects[(currentIndex + 1) % projects.length].image}
            alt={`Next: ${projects[(currentIndex + 1) % projects.length].title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="192px"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-sm font-semibold text-white truncate">
              {projects[(currentIndex + 1) % projects.length].title}
            </p>
          </div>
        </div>
      </button>
      <button
        onClick={() => handleProjectSwitch((currentIndex + projects.length - 1) % projects.length)}
        className="absolute -left-12 top-1/4 rounded-lg overflow-hidden border-2 border-border/50 shadow-lg opacity-100 -rotate-12 hidden xl:block transition-all duration-500 hover:scale-110 hover:border-brand-primary/50 hover:shadow-xl cursor-pointer group"
        aria-label={`View ${projects[(currentIndex + projects.length - 1) % projects.length].title}`}
      >
        <div className="relative w-44 aspect-[4/3]">
          <Image
            src={projects[(currentIndex + projects.length - 1) % projects.length].image}
            alt={`Previous: ${projects[(currentIndex + projects.length - 1) % projects.length].title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="176px"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-sm font-semibold text-white truncate">
              {projects[(currentIndex + projects.length - 1) % projects.length].title}
            </p>
          </div>
        </div>
      </button>
    </div>
  )
}

/** Compact row of all 3 hero projects side by side; mobile = horizontal scroll carousel */
export const HeroProjectsRow = () => (
  <div className="flex sm:grid sm:grid-cols-3 gap-4 w-full overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
    {projects.map((project) => (
      <a
        key={project.title}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative rounded-xl overflow-hidden border border-border/50 shadow-lg bg-card/50 backdrop-blur-xl hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 flex-shrink-0 snap-center min-w-[280px] w-[85vw] sm:min-w-0 sm:w-auto"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 33vw"
              loading="lazy"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold text-brand-primary truncate">{project.title}</h3>
            <ExternalLink className="w-4 h-4 flex-shrink-0 text-muted-foreground group-hover:text-brand-primary transition-colors" />
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 text-[10px] rounded bg-brand-primary/10 text-brand-primary border border-brand-primary/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    ))}
  </div>
)
