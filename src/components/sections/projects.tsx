"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Code, X, ArrowLeft } from "lucide-react"
import Image from "next/image"

type DevelopmentType = "frontend" | "fullstack" | "backend" | "learning"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  developmentType?: DevelopmentType
  github: string | null
  live: string | null
  complexity?: string
  concepts?: string[]
  learningOutcome?: string
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [blackjackModalOpen, setBlackjackModalOpen] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const filters = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "backend", label: "Backend" },
    { id: "learning", label: "Learning" },
  ]

  const developmentTypes = {
    frontend: {
      label: "Frontend",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      borderColor: "border-blue-300 dark:border-blue-700",
    },
    fullstack: {
      label: "Full Stack",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      borderColor: "border-purple-300 dark:border-purple-700",
    },
    backend: {
      label: "Backend",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      borderColor: "border-orange-300 dark:border-orange-700",
    },
    learning: {
      label: "Learning",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      borderColor: "border-green-300 dark:border-green-700",
    },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Renow AS Website",
      description: "Co-founded Renow AS, a web development company specializing in creating websites that drive growth for small and medium-sized businesses. Focus on sustainable web development with 88% reduced CO2 emissions and modern technologies.",
      image: "https://s0.wp.com/mshots/v1/https://renow.no?w=900&h=600",
      tags: ["NextJS", "Tailwind CSS", "Typescript", "JavaScript"],
      category: "Website",
      developmentType: "frontend",
      github: "https://github.com/Renow-AS",
      live: "https://renow.no",
    },
    {
      id: 2,
      title: "Discgolf Scoretracking App",
      description: "Discgolf scoring app for tracking your scores and stats in real time. Built with Next.js and ConvexDB with WebSocket support—explore new courses, log your rounds, and challenge your friends. Perfect for keeping your game history in one place.",
      image: "/dg-thumbnail.png",
      tags: ["Next.js", "TypeScript", "ConvexDB", "WebSocket"],
      category: "web",
      developmentType: "fullstack",
      github: "https://github.com/tobiasrogerhammer/discgolf-scoretracking-app",
      live: "https://discgolf-beta.vercel.app/",
    },
    {
      id: 3,
      title: "Skoleboost",
      description: "Eksamensoppgave i prototyping og interaksjonsdesign. Et grundig og dokumentert prosjekt ment for å motivere elever til å møte opp på skolen. Bygget med React og Convex som database.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Convex", "TypeScript", "Prototyping", "UX Design"],
      category: "web",
      developmentType: "fullstack",
      github: "https://github.com/tobiasrogerhammer/skoleboost",
      live: "https://skoleboost.tobiashammer.dev",
    },
    {
      id: 4,
      title: "Blackjack Game",
      description: "Interactive Blackjack game with web interface. Play directly in your browser! Features card dealing, player betting, and game logic with proper error handling. Converted from console to web application using Spring Boot.",
      image: "/blackjack.png",
      tags: ["Java", "Spring Boot", "Web App", "REST API"],
      category: "java",
      developmentType: "backend",
      github: "https://github.com/tobiasrogerhammer/blackjack-java",
      live: "http://localhost:8080/",
      complexity: "Intermediate",
      concepts: ["Spring Boot", "REST API", "Web Development", "Java", "Object-Oriented Programming"],
      learningOutcome: "Learned web application development with Spring Boot and REST API design"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills. Built with Next.js and Tailwind CSS.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "web",
      developmentType: "frontend",
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  const filteredProjects = projects.filter(
    (project) => {
      if (activeFilter === "all") return true
      if (activeFilter === "frontend" || activeFilter === "fullstack" || activeFilter === "backend" || activeFilter === "learning") {
        return project.developmentType === activeFilter
      }
      return project.category === activeFilter
    }
  )

  useEffect(() => {
    const setEqualHeights = () => {
      if (!gridRef.current) return

      const cards = gridRef.current.querySelectorAll('[data-project-card]')
      if (cards.length === 0) return

      // Get the number of columns based on screen size
      const getColumns = () => {
        if (window.innerWidth >= 1024) return 3 // lg
        if (window.innerWidth >= 640) return 2  // sm
        return 1 // mobile
      }

      const columns = getColumns()
      
      // On mobile (single column), let cards use their natural height
      if (columns === 1) {
        cards.forEach(card => {
          (card as HTMLElement).style.height = 'auto'
        })
        return
      }

      const firstRowCards: HTMLElement[] = []
      
      // Get cards in the first row
      cards.forEach((card, index) => {
        if (index < columns) {
          firstRowCards.push(card as HTMLElement)
        }
      })

      if (firstRowCards.length === 0) return

      // Find the maximum height in the first row
      let maxHeight = 0
      firstRowCards.forEach(card => {
        // Reset height to auto to get natural height
        card.style.height = 'auto'
        const height = card.offsetHeight
        if (height > maxHeight) {
          maxHeight = height
        }
      })

      // Apply the max height to all cards
      cards.forEach(card => {
        (card as HTMLElement).style.height = `${maxHeight}px`
      })
    }

    // Set heights after initial render
    setTimeout(setEqualHeights, 100)

    // Update heights on window resize
    const handleResize = () => {
      // Reset all heights first
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('[data-project-card]')
        cards.forEach(card => {
          (card as HTMLElement).style.height = 'auto'
        })
      }
      setTimeout(setEqualHeights, 100)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [filteredProjects])

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-section-projects">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-section-projects via-section-projects to-section-projects" />
      
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-36 sm:h-36 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-4 sm:mt-6 px-4 sm:px-0">
            A collection of projects that showcase my skills and passion for development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id
            return (
            <Button
              key={filter.id}
                variant={isActive ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
                style={isActive ? {
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  backgroundImage: filter.id === "all" 
                    ? "linear-gradient(to right, rgb(99, 102, 241), rgb(6, 182, 212))"
                    : filter.id === "frontend"
                    ? "linear-gradient(to right, rgb(59, 130, 246), rgb(6, 182, 212))"
                    : filter.id === "fullstack"
                    ? "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))"
                    : filter.id === "backend"
                    ? "linear-gradient(to right, rgb(249, 115, 22), rgb(239, 68, 68))"
                    : "linear-gradient(to right, rgb(34, 197, 94), rgb(16, 185, 129))"
                } : {}}
              className={`text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 transform hover:scale-105 ${
                  isActive 
                    ? "text-white shadow-lg hover:shadow-xl" 
                    : "hover:shadow-md"
              }`}
            >
              {filter.label}
            </Button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className={`${filteredProjects.length <= 3 ? 'flex flex-wrap justify-center' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-6 sm:gap-8 items-stretch`}>
          {filteredProjects.map((project, index) => {
            const developmentType: DevelopmentType = project.developmentType || "frontend"
            const devTypeConfig = developmentTypes[developmentType] || developmentTypes.frontend
            const isJavaProject = project.category === "java"
            const currentCardColors = [`bg-gradient-to-br ${devTypeConfig.bgColor}`]
            
            return (
              <div key={project.id} data-project-card className={`${filteredProjects.length <= 3 ? "w-full sm:w-auto" : ""} flex ${filteredProjects.length <= 3 ? 'max-w-md' : 'w-full'}`}>
                <Card className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border-2 ${devTypeConfig.borderColor} bg-card backdrop-blur-sm hover:bg-secondary hover:-translate-y-2 flex flex-col w-full h-full relative`}>
                  {/* Development Type Badge */}
                  <div className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r ${devTypeConfig.color} text-white shadow-lg`}>
                    {devTypeConfig.label}
                  </div>
                  
                  {/* Mobile: Horizontal layout */}
                  <div className="sm:hidden">
                      <div className="flex flex-row gap-3 p-3 pb-2">
                        {/* Image on left - smaller */}
                        <div className={`w-24 h-24 flex-shrink-0 ${currentCardColors[index % currentCardColors.length]} rounded-lg overflow-hidden relative`}>
                          {project.image && project.image !== "/api/placeholder/600/400" ? (
                            <Image 
                              src={project.image} 
                              alt={project.title}
                              fill
                              className="object-cover"
                              loading="lazy"
                              sizes="96px"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'flex');
                              }}
                            />
                          ) : null}
                          <div className={`absolute inset-0 bg-gradient-to-br ${devTypeConfig.bgColor} opacity-50 flex items-center justify-center ${project.image && project.image !== "/api/placeholder/600/400" ? 'hidden' : 'flex'}`}>
                            <div className={`w-10 h-10 bg-gradient-to-r ${devTypeConfig.color} rounded-lg flex items-center justify-center shadow-lg`}>
                              {isJavaProject ? (
                                <Code className="h-5 w-5 text-white" />
                              ) : (
                                <span className="text-lg font-bold text-white">P</span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Content on right */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          <CardTitle className={`bg-gradient-to-r ${devTypeConfig.color} bg-clip-text text-transparent text-sm font-semibold mb-1.5 line-clamp-1`}>
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-xs leading-relaxed mb-2.5">
                            {project.description}
                          </CardDescription>
                          <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className={`px-1.5 py-0.5 bg-gradient-to-r ${devTypeConfig.color} text-white text-[10px] rounded font-medium`}
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 2 && (
                              <span className="text-[10px] text-muted-foreground">+{project.tags.length - 2}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Buttons - full width */}
                      <div className="px-3 pb-3">
                        <div className="flex gap-1.5">
                          {project.github && (
                            <Button asChild size="sm" variant="outline" className="flex-1 h-7 text-[10px] px-2 py-0">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3 mr-1" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.live && (
                            <Button 
                              size="sm" 
                              className={`flex-1 h-7 text-[10px] px-2 py-0 bg-gradient-to-r ${devTypeConfig.color} hover:opacity-90 text-white`}
                              onClick={() => {
                                if (!project.live) return
                                if (project.id === 3 && project.live.startsWith('http://localhost')) {
                                  setBlackjackModalOpen(true)
                                } else {
                                  window.open(project.live, '_blank', 'noopener,noreferrer')
                                }
                              }}
                              aria-label={`Open ${project.title} live site`}
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Live
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                  {/* Desktop Projects: Vertical layout */}
                  <div className="hidden sm:block">
                    <div className={`aspect-[4/3] sm:aspect-video ${currentCardColors[index % currentCardColors.length]} flex items-center justify-center relative overflow-hidden`}>
                    {project.image && project.image !== "/api/placeholder/600/400" ? (
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'flex');
                        }}
                      />
                    ) : null}
                    <div className={`absolute inset-0 bg-gradient-to-br ${devTypeConfig.bgColor} opacity-50 flex items-center justify-center ${project.image && project.image !== "/api/placeholder/600/400" ? 'hidden' : 'flex'}`}>
                      <div className="text-center relative z-10">
                        <div className={`w-20 h-20 bg-gradient-to-r ${devTypeConfig.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          {isJavaProject ? (
                            <Code className="h-8 w-8 text-white" />
                          ) : (
                            <span className="text-3xl font-bold text-white">P</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">Project Image</p>
                      </div>
                      </div>
                    </div>
                    <CardHeader className="pb-4 px-3 sm:px-6 pt-3 sm:pt-6 flex-shrink-0">
                      <CardTitle className={`bg-gradient-to-r ${devTypeConfig.color} bg-clip-text text-transparent text-base sm:text-xl font-semibold`}>
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-4">
                        {project.tags.map((tag, tagIndex) => {
                          const tagColors = [
                            `bg-gradient-to-r ${devTypeConfig.color} text-white`,
                            `bg-gradient-to-r ${devTypeConfig.color} text-white opacity-90`,
                            `bg-gradient-to-r ${devTypeConfig.color} text-white opacity-80`
                          ]
                          return (
                            <span
                              key={tag}
                              className={`px-2 sm:px-3 py-1 ${tagColors[tagIndex % tagColors.length]} text-xs rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200`}
                            >
                              {tag}
                            </span>
                          )
                        })}
                      </div>
                      <CardDescription className="leading-relaxed text-xs sm:text-base mb-3 sm:mb-4">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6 flex-grow flex flex-col justify-end">
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                          {project.github && (
                            <Button asChild size="sm" variant="outline" className="flex-1 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-cyan-50 hover:border-indigo-300 transition-all duration-200 text-xs sm:text-sm py-1.5 sm:py-2.5">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                View Code
                              </a>
                            </Button>
                          )}
                          {project.live && (
                            <Button 
                              size="sm" 
                              className={`flex-1 bg-gradient-to-r ${devTypeConfig.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-xs sm:text-sm py-1.5 sm:py-2.5`}
                              onClick={() => {
                                if (!project.live) return
                                if (project.id === 3 && project.live.startsWith('http://localhost')) {
                                  setBlackjackModalOpen(true)
                                } else {
                                  window.open(project.live, '_blank', 'noopener,noreferrer')
                                }
                              }}
                              aria-label={`Open ${project.title} live site`}
                            >
                              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                              Live
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
          <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
            <a href="https://github.com/tobiasrogerhammer" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Blackjack Game Modal */}
      {blackjackModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setBlackjackModalOpen(false)}
        >
          <div 
            className="relative w-full h-[95vh] max-w-full sm:max-w-6xl bg-white dark:bg-gray-900 rounded-lg shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with back button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <button
                onClick={() => setBlackjackModalOpen(false)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-all duration-200 font-medium"
                aria-label="Back to portfolio"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </button>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Blackjack Game</h3>
              <button
                onClick={() => setBlackjackModalOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Game iframe */}
            <div className="flex-1 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <iframe
                src="http://localhost:8080/"
                className="border-0 w-full h-full"
                title="Blackjack Game"
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
