"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Code, BookOpen, Star } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "fullstack", label: "Full Stack" },
    { id: "java", label: "Java Projects" },
  ]

  const projects = [
    {
      id: 1,
      title: "Renow AS Website",
      description: "Co-founded Renow AS, a web development company specializing in creating websites that drive growth for small and medium-sized businesses. Focus on sustainable web development with 88% reduced CO2 emissions and modern technologies.",
      image: "https://s0.wp.com/mshots/v1/https://renow.no?w=900&h=600",
      tags: ["NextJS", "Tailwind CSS", "Typescript", "JavaScript"],
      category: "Website",
      github: "https://github.com/Renow-AS",
      live: "https://renow.no",
    },
    {
      id: 2,
      title: "Discgolf Scoretracking App",
      description: "Discgolf scoring app for tracking your scores and stats. Explore new courses and challenge your friends.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 3,
      title: "Blackjack Game",
      description: "Interactive Blackjack game with web interface. Play directly in your browser! Features card dealing, player betting, and game logic with proper error handling. Converted from console to web application using Spring Boot.",
      image: "/api/placeholder/600/400",
      tags: ["Java", "Spring Boot", "Web App", "REST API"],
      category: "java",
      github: "https://github.com/tobiasrogerhammer/blackjack-java",
      live: "https://blackjack-web-hxol.onrender.com/",
      complexity: "Intermediate",
      concepts: ["Spring Boot", "REST API", "Web Development", "Java", "Object-Oriented Programming"],
      learningOutcome: "Learned web application development with Spring Boot and REST API design"
    },
    {
      id: 4,
      title: "Student Management System",
      description: "A comprehensive student management system with GUI interface. Features include adding/removing students, grade tracking, and data persistence using file I/O.",
      image: "/api/placeholder/600/400",
      tags: ["Java", "Swing", "File I/O", "GUI"],
      category: "java",
      github: "https://github.com",
      live: "https://example.com",
      complexity: "Intermediate",
      concepts: ["Swing GUI", "File I/O", "Data Structures", "Event Handling"],
      learningOutcome: "Learned GUI development and data persistence in Java"
    },
    {
      id: 5,
      title: "Bank Account Simulator",
      description: "A multi-threaded banking application simulating concurrent transactions. Implements thread safety, synchronization, and demonstrates advanced Java concurrency concepts.",
      image: "/api/placeholder/600/400",
      tags: ["Java", "Multithreading", "Synchronization", "Concurrency"],
      category: "java",
      github: "https://github.com",
      live: "https://example.com",
      complexity: "Advanced",
      concepts: ["Threading", "Synchronization", "Deadlock Prevention", "Atomic Operations"],
      learningOutcome: "Mastered Java concurrency and thread safety patterns"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills. Built with Next.js and Tailwind CSS.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 7,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing social media accounts with analytics and scheduling features.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Express", "MongoDB", "Chart.js"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 8,
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts and interactive maps.",
      image: "/api/placeholder/600/400",
      tags: ["React", "API Integration", "Geolocation", "CSS"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  )

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
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id 
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl" 
                  : "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-cyan-50 hover:border-indigo-300 hover:shadow-md"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const cardColors = [
              "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20",
              "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
              "bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20"
            ]
            
            // Java-specific colors
            const javaCardColors = [
              "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
              "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
              "bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20"
            ]
            
            const isJavaProject = project.category === "java"
            const currentCardColors = isJavaProject ? javaCardColors : cardColors
            
            return (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border border-border bg-card backdrop-blur-sm hover:bg-secondary hover:-translate-y-2">
                <div className={`aspect-[4/3] sm:aspect-video ${currentCardColors[index % currentCardColors.length]} flex items-center justify-center relative overflow-hidden`}>
                  {project.image && project.image !== "/api/placeholder/600/400" ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                        (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'flex');
                      }}
                    />
                  ) : null}
                  <div className={`absolute inset-0 ${isJavaProject ? 'bg-gradient-to-br from-orange-500/10 to-red-500/10' : 'bg-gradient-to-br from-indigo-500/10 to-cyan-500/10'} flex items-center justify-center ${project.image && project.image !== "/api/placeholder/600/400" ? 'hidden' : 'flex'}`}>
                    <div className="text-center relative z-10">
                      <div className={`w-20 h-20 ${isJavaProject ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-indigo-500 to-cyan-500'} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
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
                
                <CardHeader className="pb-1 sm:pb-4 px-3 sm:px-6 pt-3 sm:pt-6">
                  <CardTitle className={`${isJavaProject ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'bg-gradient-to-r from-indigo-600 to-cyan-600'} bg-clip-text text-transparent text-base sm:text-xl font-semibold`}>
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-4">
                    {project.tags.map((tag, tagIndex) => {
                      const tagColors = isJavaProject ? [
                        "bg-gradient-to-r from-orange-500 to-red-500 text-white",
                        "bg-gradient-to-r from-red-500 to-pink-500 text-white",
                        "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                      ] : [
                        "bg-gradient-to-r from-indigo-500 to-blue-500 text-white",
                        "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
                        "bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
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
                 
                 <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
                   
                   
                   <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                    <Button asChild size="sm" variant="outline" className="flex-1 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-cyan-50 hover:border-indigo-300 transition-all duration-200 text-xs sm:text-sm py-1.5 sm:py-2.5">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        {isJavaProject ? "View Code" : "Code"}
                      </a>
                    </Button>
                    <Button asChild size="sm" className={`flex-1 ${isJavaProject ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' : 'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600'} text-white shadow-lg hover:shadow-xl transition-all duration-200 text-xs sm:text-sm py-1.5 sm:py-2.5`}>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        {isJavaProject ? "GitHub" : "Live"}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
    </section>
  )
}

export default Projects
