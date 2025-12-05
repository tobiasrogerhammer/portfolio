"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Code, ChevronDown, ChevronRight, ChevronLeft, X, ArrowLeft } from "lucide-react"
import Image from "next/image"

type DevelopmentType = "frontend" | "fullstack" | "backend" | "learning"

interface SubProject {
  name: string
  description: string
  path: string
  tags: string[]
}

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
  isExpandable?: boolean
  subProjects?: SubProject[]
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [expandedProjects, setExpandedProjects] = useState<number[]>([])
  const [highSchoolProjectIndex, setHighSchoolProjectIndex] = useState(0)
  const [blackjackModalOpen, setBlackjackModalOpen] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const toggleProject = (projectId: number) => {
    setExpandedProjects(prev => {
      const isCurrentlyExpanded = prev.includes(projectId)
      if (isCurrentlyExpanded) {
        // Reset carousel index when collapsing
        setHighSchoolProjectIndex(0)
        return prev.filter(id => id !== projectId)
      } else {
        // Reset carousel index when expanding
        setHighSchoolProjectIndex(0)
        return [...prev, projectId]
      }
    })
  }

  const nextHighSchoolProject = (totalProjects: number) => {
    setHighSchoolProjectIndex(prev => {
      const next = prev + 1
      if (next >= totalProjects) {
        // Reached the end, show duplicate first item, then jump to real first
        setTimeout(() => {
          const carousel = carouselRef.current?.querySelector('.flex') as HTMLElement
          if (carousel) {
            carousel.style.transition = 'none'
            setHighSchoolProjectIndex(0)
            setTimeout(() => {
              carousel.style.transition = ''
            }, 50)
          }
        }, 300)
        return totalProjects // Show duplicate first item
      }
      return next
    })
  }

  const prevHighSchoolProject = (totalProjects: number) => {
    setHighSchoolProjectIndex(prev => {
      const next = prev - 1
      if (next < 0) {
        // Reached the beginning, show duplicate last item, then jump to real last
        setTimeout(() => {
          const carousel = carouselRef.current?.querySelector('.flex') as HTMLElement
          if (carousel) {
            carousel.style.transition = 'none'
            setHighSchoolProjectIndex(totalProjects - 1)
            setTimeout(() => {
              carousel.style.transition = ''
            }, 50)
          }
        }, 300)
        return -1 // Show duplicate last item
      }
      return next
    })
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (totalProjects: number) => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      // Swipe left - next
      nextHighSchoolProject(totalProjects)
    } else if (distance < -minSwipeDistance) {
      // Swipe right - previous
      prevHighSchoolProject(totalProjects)
    }

    touchStartX.current = null
    touchEndX.current = null
  }

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
      description: "Discgolf scoring app for tracking your scores and stats. Explore new courses and challenge your friends.",
      image: "/dg-thumbnail.png",
      tags: ["Next.js", "TypeScript", "ConvexDB", "WebSocket"],
      category: "web",
      developmentType: "fullstack",
      github: "https://github.com/tobiasrogerhammer/discgolf-scoretracking-app",
      live: "https://discgolf-beta.vercel.app/",
    },
    {
      id: 3,
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
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills. Built with Next.js and Tailwind CSS.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "web",
      developmentType: "frontend",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 5,
      title: "High School Projects",
      description: "A collection of projects from my high school years (2021-2024) at Drømtorp Videregående Skole. These projects showcase my early journey in web development, JavaScript, React, and database design.",
      image: "/api/placeholder/600/400",
      tags: ["JavaScript", "React", "HTML/CSS", "Databases", "Web Development"],
      category: "high-school",
      developmentType: "learning",
      github: null,
      live: null,
      isExpandable: true,
      subProjects: [
        {
          name: "Norsk Tipping Joker",
          description: "Interactive Joker lottery game simulation with number selection mechanics.",
          path: "/high-school-projects/norskTipping/index.html",
          tags: ["JavaScript", "HTML", "CSS"],
        },
        {
          name: "English Quiz",
          description: "Multi-level English learning quiz application with 5 difficulty levels covering food, kitchen, electronics, and clothing vocabulary.",
          path: "/high-school-projects/quiz/index.html",
          tags: ["JavaScript", "HTML", "CSS", "JSON"],
        },
        {
          name: "Reaction Test",
          description: "Interactive reaction time testing game to measure and improve response speed.",
          path: "/high-school-projects/reactionTest/index.html",
          tags: ["JavaScript", "HTML", "CSS"],
        },
        {
          name: "Age Calculator (OOP)",
          description: "Object-oriented age calculator demonstrating OOP principles in JavaScript.",
          path: "/high-school-projects/oop/index.html",
          tags: ["JavaScript", "OOP", "HTML", "CSS"],
        },
        {
          name: "Basic JavaScript Exercises",
          description: "Collection of JavaScript exercises and practice problems covering fundamental concepts.",
          path: "/high-school-projects/basicJavaScript/index.html",
          tags: ["JavaScript", "HTML", "CSS"],
        },
        {
          name: "React Clock",
          description: "Real-time clock application built with React, showcasing component-based architecture.",
          path: "/high-school-projects/clock/public/index.html",
          tags: ["React", "JavaScript", "CSS"],
        },
        {
          name: "Confetti Timer",
          description: "Celebratory countdown timer with confetti animation built with React.",
          path: "/high-school-projects/confettitimer/public/index.html",
          tags: ["React", "JavaScript", "CSS", "Animations"],
        },
        {
          name: "Database Projects",
          description: "Backend and frontend integration projects demonstrating database connectivity and API design.",
          path: "/high-school-projects/databaser/front_and_back/frontend/index.html",
          tags: ["Express.js", "JavaScript", "Databases", "REST API"],
        },
        {
          name: "MAMP Database Testing",
          description: "Full-stack application with MAMP database integration, featuring frontend and backend connectivity.",
          path: "/high-school-projects/mamp-db-test/frontAndBack/Frontend/index.html",
          tags: ["Express.js", "MySQL", "JavaScript", "Full Stack"],
        },
        {
          name: "JavaScript Course",
          description: "Interactive JavaScript learning course with examples and exercises.",
          path: "/high-school-projects/js-kurs/index.html",
          tags: ["JavaScript", "HTML", "CSS", "Education"],
        },
      ],
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

  // Handle seamless looping transitions
  useEffect(() => {
    if (!carouselRef.current) return
    const carousel = carouselRef.current.querySelector('.flex') as HTMLElement
    if (!carousel) return

    const totalProjects = filteredProjects.find(p => p.isExpandable)?.subProjects?.length || 0
    if (totalProjects === 0) return
  }, [highSchoolProjectIndex, filteredProjects])

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
  }, [filteredProjects, expandedProjects])

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
            const isHighSchoolProject = project.category === "high-school"
            const isExpandable = project.isExpandable === true
            const isExpanded = expandedProjects.includes(project.id)
            const isLearningCategory = activeFilter === "learning"
            const shouldShrinkHighSchool = isLearningCategory && isHighSchoolProject && filteredProjects.length === 1
            
            const currentCardColors = [`bg-gradient-to-br ${devTypeConfig.bgColor}`]
            
            return (
              <div key={project.id} data-project-card className={`${filteredProjects.length <= 3 ? (isExpandable && !shouldShrinkHighSchool ? "w-full" : shouldShrinkHighSchool ? "w-full max-w-2xl" : "w-full sm:w-auto") : (isExpandable ? "sm:col-span-2 lg:col-span-2" : "")} flex ${filteredProjects.length <= 3 && !isExpandable ? 'max-w-md' : 'w-full'}`}>
                <Card className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border-2 ${devTypeConfig.borderColor} bg-card backdrop-blur-sm hover:bg-secondary hover:-translate-y-2 flex flex-col w-full h-full relative`}>
                  {/* Development Type Badge */}
                  <div className={`absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${devTypeConfig.color} text-white shadow-lg`}>
                    {devTypeConfig.label}
                  </div>
                  <div className={`${shouldShrinkHighSchool ? 'aspect-[21/9] sm:aspect-[21/9]' : 'aspect-[4/3] sm:aspect-video'} ${currentCardColors[index % currentCardColors.length]} flex items-center justify-center relative overflow-hidden`}>
                    {project.image && project.image !== "/api/placeholder/600/400" ? (
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
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
                          ) : isHighSchoolProject ? (
                            <span className="text-3xl font-bold text-white">HS</span>
                          ) : (
                            <span className="text-3xl font-bold text-white">P</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">Project Image</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className={`${shouldShrinkHighSchool ? 'pb-1 sm:pb-2 px-3 sm:px-4 pt-2 sm:pt-3' : 'pb-1 sm:pb-4 px-3 sm:px-6 pt-3 sm:pt-6'} flex-shrink-0`}>
                    <div className="flex items-center justify-between">
                      <CardTitle className={`bg-gradient-to-r ${devTypeConfig.color} bg-clip-text text-transparent ${shouldShrinkHighSchool ? 'text-sm sm:text-base' : 'text-base sm:text-xl'} font-semibold`}>
                        {project.title}
                      </CardTitle>
                      {isExpandable && (
                        <button
                          onClick={() => toggleProject(project.id)}
                          className="ml-2 p-2 rounded-lg transition-all duration-200 hover:bg-muted"
                          aria-label={isExpanded ? "Collapse projects" : "Expand projects"}
                        >
                          {isExpanded ? (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          )}
                        </button>
                      )}
                    </div>
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
                    <CardDescription className={`leading-relaxed ${shouldShrinkHighSchool ? 'text-xs sm:text-sm mb-2 sm:mb-2 line-clamp-2' : 'text-xs sm:text-base mb-3 sm:mb-4'}`}>{project.description}</CardDescription>
                  </CardHeader>
                   
                  <CardContent className={`${shouldShrinkHighSchool ? 'px-3 sm:px-4 pb-2 sm:pb-3' : 'px-3 sm:px-6 pb-3 sm:pb-6'} flex-grow flex flex-col justify-end`}>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                      {project.github && (
                        <Button asChild size="sm" variant="outline" className="flex-1 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-cyan-50 hover:border-indigo-300 transition-all duration-200 text-xs sm:text-sm py-1.5 sm:py-2.5">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            {isJavaProject ? "View Code" : "Code"}
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button 
                          size="sm" 
                          className={`flex-1 bg-gradient-to-r ${devTypeConfig.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-xs sm:text-sm py-1.5 sm:py-2.5`}
                          onClick={() => {
                            if (project.id === 3 && project.live?.startsWith('http://localhost')) {
                              setBlackjackModalOpen(true)
                            } else {
                              window.open(project.live, '_blank', 'noopener,noreferrer')
                            }
                          }}
                        >
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            {isJavaProject ? "GitHub" : "Live"}
                        </Button>
                      )}
                    </div>

                    {/* Expandable Sub-Projects */}
                    {isExpandable && project.subProjects && project.subProjects.length > 0 && (
                      <div className={`transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-[5000px] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
                      } ${isExpanded ? 'overflow-visible' : ''}`}>
                        <div className="pt-4 border-t border-border">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-sm font-semibold text-muted-foreground">Individual Projects:</h4>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                  {highSchoolProjectIndex < 0 
                                    ? project.subProjects.length 
                                    : highSchoolProjectIndex >= project.subProjects.length 
                                      ? 1 
                                      : highSchoolProjectIndex + 1} / {project.subProjects.length}
                                </span>
                              </div>
                          </div>
                          <div className="relative overflow-visible px-12 sm:px-16">
                            <div 
                              ref={carouselRef}
                              className="max-w-lg mx-auto"
                              onTouchStart={handleTouchStart}
                              onTouchMove={handleTouchMove}
                              onTouchEnd={() => handleTouchEnd(project.subProjects!.length)}
                            >
                              <div className="overflow-hidden px-[15%] relative">
                                <div 
                                  className="flex transition-transform duration-300 ease-in-out"
                                  style={{ 
                                    transform: `translateX(calc(${15 - (highSchoolProjectIndex < 0 ? project.subProjects!.length : highSchoolProjectIndex + 1) * 70}% - ${(highSchoolProjectIndex < 0 ? project.subProjects!.length : highSchoolProjectIndex + 1) * 0.25}rem))` 
                                  }}
                                >
                                  {/* Duplicate last item at the beginning for seamless loop */}
                                  {project.subProjects.length > 0 && (
                                    <>
                                      <div className="w-[70%] flex-shrink-0 px-1 relative flex">
                                        <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 border border-border bg-card/70 opacity-90 flex flex-col w-full h-full">
                                          <CardHeader className="pb-2 px-4 pt-4 flex-shrink-0">
                                            <CardTitle className="text-sm font-semibold mb-2">{project.subProjects[project.subProjects.length - 1].name}</CardTitle>
                                            <CardDescription className="text-xs mb-3 leading-relaxed line-clamp-3">
                                              {project.subProjects[project.subProjects.length - 1].description}
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-1 mb-2">
                                              {project.subProjects[project.subProjects.length - 1].tags.map((tag, tagIdx) => (
                                                <span
                                                  key={tagIdx}
                                                  className="px-2 py-0.5 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs rounded-full font-medium"
                                                >
                                                  {tag}
                                                </span>
                                              ))}
                                            </div>
                                          </CardHeader>
                                          <CardContent className="px-4 pb-4 flex-grow flex flex-col justify-end">
                                            <Button asChild size="sm" variant="outline" className="w-full text-xs py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                                              <a href={project.subProjects[project.subProjects.length - 1].path} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-3 w-3 mr-1.5" />
                                                View Project
                                              </a>
                                            </Button>
                                          </CardContent>
                                        </Card>
                                      </div>
                                      {/* Loop separator */}
                                      <div className="flex-shrink-0 flex items-center justify-center px-2">
                                        <div className="flex flex-col items-center gap-1.5">
                                          <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 via-purple-500 to-pink-400 rounded-full"></div>
                                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                          <div className="w-0.5 h-12 bg-gradient-to-b from-pink-400 via-pink-500 to-purple-400 rounded-full"></div>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                  
                                  {/* Original items */}
                            {project.subProjects.map((subProject, subIndex) => (
                                    <div key={subIndex} className="w-[70%] flex-shrink-0 px-1 flex">
                                      <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 border border-border bg-card/50 flex flex-col w-full h-full">
                                        <CardHeader className="pb-2 px-4 pt-4 flex-shrink-0">
                                  <CardTitle className="text-sm font-semibold mb-2">{subProject.name}</CardTitle>
                                          <CardDescription className="text-xs mb-3 leading-relaxed line-clamp-3">
                                    {subProject.description}
                                  </CardDescription>
                                  <div className="flex flex-wrap gap-1 mb-2">
                                    {subProject.tags.map((tag, tagIdx) => (
                                      <span
                                        key={tagIdx}
                                        className="px-2 py-0.5 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs rounded-full font-medium"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </CardHeader>
                                        <CardContent className="px-4 pb-4 flex-grow flex flex-col justify-end">
                                  <Button asChild size="sm" variant="outline" className="w-full text-xs py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                                    <a href={subProject.path} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-3 w-3 mr-1.5" />
                                      View Project
                                    </a>
                                  </Button>
                                </CardContent>
                              </Card>
                                    </div>
                                  ))}
                                  
                                  {/* Loop separator */}
                                    {project.subProjects.length > 0 && (
                                      <div className="flex-shrink-0 flex items-center justify-center px-2">
                                        <div className="flex flex-col items-center gap-1.5">
                                          <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 via-purple-500 to-pink-400 rounded-full"></div>
                                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                          <div className="w-0.5 h-12 bg-gradient-to-b from-pink-400 via-pink-500 to-purple-400 rounded-full"></div>
                                        </div>
                                      </div>
                                    )}
                                  
                                  {/* Duplicate first item at the end for seamless loop */}
                                  {project.subProjects.length > 0 && (
                                    <div className="w-[70%] flex-shrink-0 px-1 relative flex">
                                      <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 border border-border bg-card/70 opacity-90 flex flex-col w-full h-full">
                                        <CardHeader className="pb-2 px-4 pt-4 flex-shrink-0">
                                          <CardTitle className="text-sm font-semibold mb-2">{project.subProjects[0].name}</CardTitle>
                                          <CardDescription className="text-xs mb-3 leading-relaxed line-clamp-3">
                                            {project.subProjects[0].description}
                                          </CardDescription>
                                          <div className="flex flex-wrap gap-1 mb-2">
                                            {project.subProjects[0].tags.map((tag, tagIdx) => (
                                              <span
                                                key={tagIdx}
                                                className="px-2 py-0.5 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs rounded-full font-medium"
                                              >
                                                {tag}
                                              </span>
                                            ))}
                                          </div>
                                        </CardHeader>
                                        <CardContent className="px-4 pb-4 flex-grow flex flex-col justify-end">
                                          <Button asChild size="sm" variant="outline" className="w-full text-xs py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                                            <a href={project.subProjects[0].path} target="_blank" rel="noopener noreferrer">
                                              <ExternalLink className="h-3 w-3 mr-1.5" />
                                              View Project
                                            </a>
                                          </Button>
                                        </CardContent>
                                      </Card>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            {/* Navigation Arrows - Outside the carousel container */}
                            {project.subProjects.length > 1 && (
                              <>
                                <button
                                  onClick={() => prevHighSchoolProject(project.subProjects!.length)}
                                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                                  aria-label="Previous project"
                                  style={{ zIndex: 9999 }}
                                >
                                  <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                  onClick={() => nextHighSchoolProject(project.subProjects!.length)}
                                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                                  aria-label="Next project"
                                  style={{ zIndex: 9999 }}
                                >
                                  <ChevronRight className="h-5 w-5" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
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
