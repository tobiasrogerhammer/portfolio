"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "fullstack", label: "Full Stack" },
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
      description: "Blackjack game built with Java. Simple and easy to use. First project in Java.",
      image: "/api/placeholder/600/400",
      tags: ["Java"],
      category: "mobile",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills. Built with Next.js and Tailwind CSS.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing social media accounts with analytics and scheduling features.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Express", "MongoDB", "Chart.js"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 6,
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-cyan-50/50 dark:from-indigo-950/10 dark:via-blue-950/10 dark:to-cyan-950/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            A collection of projects that showcase my skills and passion for development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`transition-all duration-200 ${
                activeFilter === filter.id 
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-lg" 
                  : "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-cyan-50 hover:border-indigo-300"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const cardColors = [
              "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20",
              "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
              "bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20"
            ]
            return (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border-0 bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 dark:text-white">
                <div className={`aspect-video ${cardColors[index % cardColors.length]} flex items-center justify-center relative overflow-hidden`}>
                  {project.image && project.image !== "/api/placeholder/600/400" ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                        (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'flex');
                      }}
                    />
                  ) : null}
                  <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 flex items-center justify-center ${project.image && project.image !== "/api/placeholder/600/400" ? 'hidden' : 'flex'}`}>
                    <div className="text-center relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <span className="text-3xl font-bold text-white">P</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">Project Image</p>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => {
                      const tagColors = [
                        "bg-gradient-to-r from-indigo-500 to-blue-500 text-white",
                        "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
                        "bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                      ]
                      return (
                        <span
                          key={tag}
                          className={`px-3 py-1 ${tagColors[tagIndex % tagColors.length]} text-xs rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200`}
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button asChild size="sm" variant="outline" className="flex-1 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-cyan-50 hover:border-indigo-300 transition-all duration-200">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-lg px-8 py-6">
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
