"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, BookOpen, Zap, Rocket, Calendar, MapPin, GraduationCap, ChevronRight, FileText, ExternalLink } from "lucide-react"
import Image from "next/image"
import { PdfViewerModal } from "./pdf-viewer-modal"

const Education = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([])
  const [openPdf, setOpenPdf] = useState<{ url: string; title: string } | null>(null)

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const education = [
    {
      institution: "Oslo Metropolitan University (OsloMet)",
      degree: "Bachelor of Computer Science",
      location: "Oslo, Norway",
      duration: "2025 - 2028",
      description: "Comprehensive study focusing on designing and developing technological solutions with emphasis on user-friendliness for all. Learn to use computer technology to fulfill user needs and develop universally designed solutions that everyone can use regardless of limitations.",
      achievements: ["User-Centered Design", "Universal Design", "Technology Innovation", "Practical Projects"],
      logo: "/oslomet-logo.webp",
      website: "https://www.oslomet.no/studier/tkd/anvendt-datateknologi",
      years: [
        {
          year: "1st Year - Foundation (2025-2026)",
          subjects: [
            "1st Semester:",
            "Interaction Design & Prototyping",
            "Programming",
            "Technology & Society",
            "Web Development & Inclusive Design",
            "2nd Semester:",
            "Rapid Development with Scripting Languages",
            "Databases",
            "Web Programming"
          ]
        },
        {
          year: "2nd Year - Specialization (2026-2027)",
          subjects: [
            "3rd Semester:",
            "Human-Computer Interaction",
            "System Development",
            "Specialization Track (Health Technology/HCI/Innovation/Programming)",
            "4th Semester:",
            "Visualization",
            "Software Testing",
            "Specialization Project"
          ]
        },
        {
          year: "3rd Year - Advanced Studies (2027-2028)",
          subjects: [
            "5th Semester:",
            "Data Security",
            "Universal ICT Design",
            "Advanced Specialization Courses",
            "6th Semester:",
            "Bachelor's Thesis (20 ECTS)",
            "Network & Cloud Services",
            "Advanced Programming"
          ]
        }
      ]
    },
    {
      institution: "Drømtorp Videregående Skole",
      degree: "Information Technology",
      location: "Ski, Norway",
      duration: "2021 - 2024",
      description: "Completed high school education with focus on computer science, information technology, media production and entrepreneurship.",
      achievements: ["Regional Entrepreneurship Award", "Academic Excellence"],
      logo: "/akershus-fylkeskommune-logo.png",
      certificate: "/entrepreneurship-nm.pdf",
      years: [
        {
          year: "Information Technology and Media Production (2021-2022)",
          subjects: [
            "1st Semester:",
            "Basic Web Development", 
            "Programming Fundamentals",
            "Visual Communication & Design",
            "Adobe Creative Programs",
            "Media Production & Storytelling",
            "2nd Semester:",
            "Computer Components & Networks",
            "Photography & Video Production",
            "Interactive Media Production",
            "Technology Ethics & Social Impact",
            "Database Design"
          ]
        },
        {
          year: "Information Technology (2022-2023)",
          subjects: [
            "1st Semester:",
            "Programming",
            "Network Administration",
            "Web Development Frameworks", 
            "User Support",
            "2nd Semester:",
            "Full Stack Application Development",
            "Digital Security & Privacy",
            "Ethical Innovation",
            "System Development", 
          ]
        },
        {
          year: "Additional studies for general university entrance qualification (2023-2024)",
          subjects: [
            "Entrepreneurship",
            "Advanced Web Development",
            "Innovation",
            "Sustainability", 
            "Problem Solving"
          ]
        }
      ]
    },
  ]

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-section-education">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-section-education via-section-education to-section-education" />
      
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-10 sm:top-32 sm:left-20 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-16 right-10 sm:bottom-32 sm:right-20 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-4 sm:mt-6 px-4 sm:px-0">
            My academic journey and the institutions that have shaped my knowledge and skills.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => {
            const isExpanded = expandedCards.includes(index)
            
            return (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border bg-card backdrop-blur-sm hover:bg-secondary">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(220, 252, 231, 1), rgba(209, 250, 229, 1))' }}>
                      {edu.logo ? (
                        <Image
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          width={40}
                          height={40}
                            className="object-contain sm:w-10 sm:h-10"
                        />
                      ) : (
                          <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                      )}
                    </div>
                    <div>
                        <CardTitle className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground" >
                          <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" />
                          {edu.website ? (
                            <a 
                              href={edu.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-medium text-sm sm:text-base hover:text-blue-600 transition-colors duration-200 flex items-center gap-1"
                            >
                              {edu.institution}
                              <ExternalLink className="h-3 w-3 opacity-60 hover:opacity-100 transition-opacity duration-200" />
                            </a>
                          ) : (
                            <span className="font-medium text-sm sm:text-base">{edu.institution}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex flex-row sm:flex-col gap-2 sm:gap-1.5">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-green-700 bg-green-dark px-2 sm:px-3 py-1 rounded-full">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-green-700 bg-emerald-dark px-2 sm:px-3 py-1 rounded-full">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600" />
                      <span className="font-medium">{edu.location}</span>
                        </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                  <CardDescription className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {edu.description}
                </CardDescription>
                
                  {/* Animated Timeline Toggle Button */}
                {edu.years && (
                    <div className="mb-4 sm:mb-6">
                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center justify-between w-full p-3 rounded-lg border transition-all duration-200 group"
                        style={{ 
                          background: 'linear-gradient(to right, rgba(240, 253, 244, 1), rgba(236, 253, 245, 1))',
                          borderColor: 'hsl(142, 71%, 45%)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(to right, rgba(220, 252, 231, 1), rgba(209, 250, 229, 1))'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(to right, rgba(240, 253, 244, 1), rgba(236, 253, 245, 1))'
                        }}
                      >
                        <span className="text-sm sm:text-base font-semibold text-green-700">
                          Academic Timeline
                        </span>
                        <div className="transform transition-transform duration-200 group-hover:scale-110">
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4 text-green-600" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                      </button>
                      
                      {/* Animated Timeline Content */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="mt-4 p-4 sm:p-6 rounded-lg border shadow-sm" style={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
                          <div className="relative">
                            {/* Timeline line - segmented by progress */}
                            {edu.institution === "Drømtorp Videregående Skole" ? (
                              // All green for completed Drømtorp education
                              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-500"></div>
                            ) : (
                              // Segmented for OsloMet (current/upcoming)
                              <>
                                <div className="absolute left-4 sm:left-6 top-0 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-green-500 to-emerald-500"></div>
                                <div className="absolute left-4 sm:left-6 top-12 sm:top-16 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-gray-400 to-gray-500"></div>
                                <div className="absolute left-4 sm:left-6 top-24 sm:top-32 w-0.5 bottom-0 bg-gradient-to-b from-gray-400 to-gray-500"></div>
                              </>
                            )}
                            
                            {edu.years.map((yearData, yearIndex) => {
                              // For Drømtorp (index 1), all years are completed
                              // For OsloMet (index 0), only first year is completed
                              const isCompleted = edu.institution === "Drømtorp Videregående Skole" || yearIndex === 0;
                              const isUpcoming = edu.institution === "Oslo Metropolitan University (OsloMet)" && yearIndex > 0;
                              
                              return (
                                <div key={yearIndex} className="relative flex items-start mb-6 sm:mb-8 last:mb-0">
                          {/* Timeline dot */}
                                  <div className={`relative z-10 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all duration-300 flex-shrink-0 ${
                                    isCompleted 
                                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                                      : isUpcoming 
                                        ? 'bg-gradient-to-r from-gray-400 to-gray-500' 
                                        : 'bg-gradient-to-r from-green-500 to-emerald-500'
                                  }`}>
                                    <span className="text-white font-bold text-xs sm:text-sm">{yearIndex + 1}</span>
                          </div>
                          
                          {/* Content */}
                                  <div className="ml-4 sm:ml-6 flex-1 min-w-0">
                                    <h5 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-lg transition-colors duration-200" style={{ color: isCompleted ? 'hsl(var(--foreground))' : isUpcoming ? 'hsl(var(--muted-foreground))' : 'hsl(var(--foreground))' }}>
                                      {isUpcoming ? `Upcoming ${yearData.year}` : yearData.year}
                                    </h5>
                                    <div className={`transition-colors duration-200`} style={{ color: isCompleted ? 'hsl(var(--foreground))' : isUpcoming ? 'hsl(var(--muted-foreground))' : 'hsl(var(--foreground))' }}>
                                      <ul className="list-disc list-inside space-y-0.5 sm:space-y-1">
                                        {yearData.subjects.map((subject) => {
                                          // Check if this is a semester header (contains ":")
                                          const isSemesterHeader = subject.includes(':');
                                          
                                          return (
                                            <li key={subject} className={`text-xs sm:text-sm transition-all duration-200 ${isSemesterHeader ? 'font-semibold mt-2 first:mt-0' : 'ml-4 list-none'}`}>
                                              {isSemesterHeader ? subject : (
                                                <span className="ml-2">• {subject}</span>
                                              )}
                                  </li>
                                          );
                                        })}
                              </ul>
                            </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                    </div>
                  </div>
                )}
                
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {edu.achievements.map((achievement, achievementIndex) => {
                    const achievementColors = [
                      "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
                      "bg-gradient-to-r from-emerald-500 to-teal-500 text-white",
                      "bg-gradient-to-r from-teal-500 to-cyan-500 text-white",
                      "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    ]
                    return (
                      <span
                        key={achievement}
                          className={`px-2 sm:px-3 py-1 sm:py-1.5 ${achievementColors[achievementIndex % achievementColors.length]} text-xs sm:text-sm rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200`}
                      >
                        {achievement}
                      </span>
                    )
                  })}
                </div>
                
                {/* Certificate Button */}
                {edu.certificate && (
                  <div className="mt-4 sm:mt-6">
                    <button
                      onClick={() => setOpenPdf({ url: edu.certificate, title: "NM Entrepreneurship" })}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 font-medium"
                    >
                      <FileText className="h-4 w-4" />
                      <span className="text-sm font-semibold">NM Entrepreneurship</span>
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
            )
          })}
        </div>

        {/* Learning Journey Transition */}
        <div className="mt-12 sm:mt-16 px-4 sm:px-0">
          {/* Journey Visualization */}
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: 'hsl(var(--foreground))' }}>
              From Knowledge to Creation
            </h3>
            <p className="text-sm sm:text-base" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Every lesson learned becomes a building block for innovation
            </p>
          </div>
          
          {/* Journey Path */}
          <div className="relative">
            {/* Timeline Container */}
            <div className="grid grid-cols-3 gap-0 relative">
              {/* Timeline Line Segments */}
              <div className="absolute top-4 sm:top-6 left-1/6 right-1/6 h-0.5 sm:h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-10"></div>
              <div className="absolute top-4 sm:top-6 left-5/6 right-1/6 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-10"></div>
              
              {/* Step 1: Foundation */}
              <div className="flex flex-col items-center relative z-20">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-indigo-600 border-2 flex items-center justify-center" style={{ borderColor: 'hsl(var(--background))' }}>
                  <BookOpen className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="mt-3 sm:mt-4 text-center">
                  <h5 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm" style={{ color: 'hsl(var(--foreground))' }}>
                    Foundation
                  </h5>
                </div>
              </div>
              
              {/* Step 2: Application */}
              <div className="flex flex-col items-center relative z-20">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-purple-600 border-2 flex items-center justify-center" style={{ borderColor: 'hsl(var(--background))' }}>
                  <Zap className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="mt-3 sm:mt-4 text-center">
                  <h5 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm" style={{ color: 'hsl(var(--foreground))' }}>
                    Application
                  </h5>
                </div>
              </div>
              
              {/* Step 3: Innovation */}
              <div className="flex flex-col items-center relative z-20">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-pink-600 border-2 flex items-center justify-center" style={{ borderColor: 'hsl(var(--background))' }}>
                  <Rocket className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="mt-3 sm:mt-4 text-center">
                  <h5 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm" style={{ color: 'hsl(var(--foreground))' }}>
                    Innovation
                  </h5>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-6 sm:mt-8">
            <div className="inline-flex items-center gap-2 font-medium text-sm sm:text-base" style={{ color: 'hsl(var(--foreground))' }}>
              <span>Explore My Projects</span>
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
            </div>
          </div>
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

export default Education