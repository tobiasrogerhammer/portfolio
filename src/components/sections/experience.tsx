"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Building2, FileText, ExternalLink, ChevronDown, ChevronUp, ChevronRight } from "lucide-react"
import Image from "next/image"
import { PdfViewerModal } from "@/components/features/pdf-viewer-modal"

const Experience = () => {
  const [openPdf, setOpenPdf] = useState<{ url: string; title: string } | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<number[]>([])
  
  const toggleMobileExpansion = (index: number) => {
    setExpandedMobile(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }
  const experiences = [
    {
      company: "Renow AS",
      position: "Co-Founder",
      location: "Oppegård, Norway",
      duration: "2023 - Present",
      description: "Co-founded Renow and helped transform it from a student startup into a registered limited company. Lead responsibilities include developing sustainable, high-performance websites, overseeing strategy, and managing client relationships. Played a key role in the company’s early success, winning the Regional Sustainability Award and receiving multiple national nominations.",
      technologies: ["Innovation", "Problem Solving", "Networking", "Web Development", "Business Development"],
      logo: "/renow.png",
      certificate: "/entrepreneurship-nm.pdf",
      website: "https://renow.no/",
    },
    {
      company: "Huddly AS",
      position: "Working Student",
      positions: [
        {
          title: "Working Student",
          duration: "2022 - Present",
          description: "Working as a student employee at Huddly AS, contributing to the development of AI-powered conference cameras through AI training, scripting, and product testing.",
          technologies: ["AI-training", "Professional Development", "Learning", "Collaboration"]
        },
        {
          title: "Intern",
          duration: "2021 - 2022",
          description: "Completed internship at Huddly AS, gaining valuable industry experience and learning about professional product and software development practices.",
          technologies: ["Internship", "Technology standards", "Learning", "Product development"]
        }
      ],
      location: "Oslo, Norway",
      logo: "huddly-svg",
      website: "https://www.huddly.com/",
    },
    {
      company: "Royal Norwegian Air Force",
      position: "Military Service",
      location: "Rygge, Norway",
      duration: "2024 - 2025",
      description: "Developed discipline, mental resilience, and strong teamwork and communication skills. Represented soldiers in welfare and organizational discussions, ensuring fair treatment and improved conditions.",
      technologies: ["Teamwork", "Discipline", "Problem Solving", "Communication", "Service"],
      logo: "/norwegianAirForce.png",
      certificate: "/jobbanbefaling-army.pdf",
      website: "https://www.forsvaret.no/",
    },
    {
      company: "Kolbotn IL",
      position: "Swimming Instructor",
      location: "Kolbotn, Norway",
      duration: "2021 - 2022",
      description: "Delivered swimming instruction and water safety training to students of various ages. Strengthened communication, patience, and leadership skills through hands-on teaching experience.",
      technologies: ["Teaching", "Communication", "Safety", "Leadership", "Mentoring"],
      logo: "/Kolbotn_IL.png",
      website: "https://kolbotnil.no/vare-idretter/svomming",
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-section-experience">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-section-experience via-section-experience to-section-experience" />
      
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 right-16 sm:top-24 sm:right-32 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-12 left-16 sm:bottom-24 sm:left-32 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4 sm:mb-12">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-4 sm:mt-6 px-4 sm:px-0">
          The organizations and roles that have shaped my professional journey.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => {
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border backdrop-blur-sm hover:bg-secondary relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-600 before:via-pink-600 before:to-orange-600" style={{ backgroundColor: 'hsl(var(--card) / 0.5)' }}>
                <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6 pt-3 sm:pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {exp.logo === "huddly-svg" ? (
                          <svg width="24" height="24" className="sm:w-8 sm:h-8 text-gray-900 dark:text-gray-900" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Huddly Square Logo</title>
                            <path d="M11.6923 21.7692H16V17.4615H11.6923V21.7692ZM4.30769 0.23077H0V4.53846H4.30769V0.23077ZM0 21.7692H4.30769V17.4615H0V21.7692ZM0 8.84616V13.1538H14.7077H16V8.84616H14.7077H0ZM11.6923 0.23077V4.53846H16V0.23077H11.6923Z" fill="currentColor" />
                          </svg>
                        ) : exp.logo ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={32}
                            height={32}
                            className="object-contain sm:w-10 sm:h-10"
                            loading="lazy"
                          />
                        ) : (
                          <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <CardTitle className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {exp.position}
                          </CardTitle>
                          {/* Mobile: Expand/Collapse button - aligned with title */}
                          <button
                            onClick={() => toggleMobileExpansion(index)}
                            className="sm:hidden p-1 rounded-lg hover:bg-muted/80 transition-colors flex-shrink-0"
                            aria-label={expandedMobile.includes(index) ? 'Collapse details' : 'Expand details'}
                          >
                            {expandedMobile.includes(index) ? (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building2 className="h-3 w-3 sm:h-4 sm:w-4" />
                          <a 
                            href={exp.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-medium text-sm sm:text-base hover:text-blue-600 transition-colors duration-200 flex items-center gap-1"
                            style={{ '--hover-color': 'hsl(var(--foreground) / 0.8)' } as React.CSSProperties}
                          >
                            {exp.company}
                            <ExternalLink className="h-3 w-3 opacity-60 hover:opacity-100 transition-opacity duration-200" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 sm:gap-1.5 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex flex-row sm:flex-col gap-1.5 sm:gap-1">
                        <div className="flex items-center gap-1 sm:gap-1.5 bg-purple-dark px-2 sm:px-2.5 py-0.5 rounded-full">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                          <span className="font-medium" style={{ color: 'hsl(var(--foreground))' }}>
                            {exp.positions ? `${exp.positions[exp.positions.length - 1].duration.split(' - ')[0]} - ${exp.positions[0].duration.split(' - ')[1]}` : exp.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5 bg-pink-dark px-2 sm:px-2.5 py-0.5 rounded-full">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-pink-600" />
                          <span className="font-medium" style={{ color: 'hsl(var(--foreground))' }}>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6 pt-0">
                  {exp.positions ? (
                    // LinkedIn-style multiple positions
                    <div className="space-y-3">
                      {exp.positions.map((pos, posIndex) => (
                        <div key={posIndex} className="border-l-2 pl-3 relative" style={{ borderColor: 'hsl(var(--border))' }}>
                          <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--muted))' }}></div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-1.5">
                            <h4 className="text-base sm:text-lg font-semibold" style={{ color: 'hsl(var(--foreground))' }}>
                              {pos.title}
                            </h4>
                            <span className="text-xs sm:text-sm font-medium" style={{ color: 'hsl(var(--muted-foreground))' }}>
                              {pos.duration}
                            </span>
                          </div>
                          <div className={`${expandedMobile.includes(index) ? 'block' : 'hidden'} sm:block`}>
                            <p className="text-sm sm:text-base mb-2 leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                              {pos.description}
                            </p>
                            <div className="flex flex-wrap gap-1 sm:gap-1.5">
                              {pos.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md font-medium transition-colors duration-200"
                                  style={{ 
                                    backgroundColor: 'hsl(var(--muted))',
                                    color: 'hsl(var(--foreground))',
                                    borderColor: 'hsl(var(--border))',
                                    borderWidth: '1px',
                                    borderStyle: 'solid'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'hsl(var(--muted) / 0.8)'
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'hsl(var(--muted))'
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Single position layout
                    <>
                      <div className={`${expandedMobile.includes(index) ? 'block' : 'hidden'} sm:block`}>
                        <CardDescription className="text-sm sm:text-base mb-2 sm:mb-3 leading-relaxed" style={{ color: 'hsl(var(--foreground))' }}>
                          {exp.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                          {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md font-medium transition-colors duration-200"
                              style={{ 
                                backgroundColor: 'hsl(var(--muted))',
                                color: 'hsl(var(--foreground))',
                                borderColor: 'hsl(var(--border))',
                                borderWidth: '1px',
                                borderStyle: 'solid'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'hsl(var(--muted) / 0.8)'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'hsl(var(--muted))'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      {exp.certificate && (
                        <div className={`mt-2 sm:mt-3 ${expandedMobile.includes(index) ? 'block' : 'hidden'} sm:block`}>
                          <button
                            onClick={() => setOpenPdf({ 
                              url: exp.certificate, 
                              title: exp.certificate === "/entrepreneurship-nm.pdf" ? "NM Entrepreneurship" : "Letter of recommendation" 
                            })}
                            className={`inline-flex items-center gap-2 px-3 py-2 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 font-medium text-sm ${
                              exp.certificate === "/jobbanbefaling-army.pdf"
                                ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                                : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                            }`}
                          >
                            <FileText className="h-4 w-4" />
                            <span className="text-sm font-semibold">
                              {exp.certificate === "/entrepreneurship-nm.pdf" ? "NM Entrepreneurship" : "Letter of recommendation"}
                            </span>
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 text-center px-4 sm:px-0">
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            Interested in my full experience? Check out my detailed resume.
          </p>
          <button
            onClick={() => setOpenPdf({ url: "/Tobias-resume.pdf", title: "Tobias Hammer - Resume" })}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base sm:text-lg"
          >
            <FileText className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
            View Resume
          </button>
        </div>
      </div>
      
      {/* PDF Viewer Modal */}
      {openPdf && (
        <PdfViewerModal
          pdfUrl={openPdf.url}
          title={openPdf.title}
          isOpen={!!openPdf}
          onClose={() => setOpenPdf(null)}
        />
      )}
    </section>
  )
}

export default Experience
