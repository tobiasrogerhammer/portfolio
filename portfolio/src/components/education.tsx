import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
import Image from "next/image"

const Education = () => {
  const education = [
    {
      institution: "Oslo Metropolitan University (OsloMet)",
      degree: "Bachelor of Applied Computer Science",
      location: "Oslo, Norway",
      duration: "2025 - 2028",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and modern web technologies. Focus on practical application and real-world problem solving.",
      achievements: ["Dean's List", "Academic Excellence", "Research Projects", "Team Leadership"],
      logo: "/oslomet.png",
    },
    {
      institution: "Drømtorp Videregående Skole",
      degree: "Information Technology",
      location: "Ski, Norway",
      duration: "2021 - 2024",
      description: "Completed high school education with focus on computer science, information technology, media production and entrepreneurship.",
      achievements: ["Regional Entrepreneurship Award", "Academic Excellence"],
      logo: "/dromtorp.png",
      years: [
        {
          year: "Information Technology and Media Production (2021-2022)",
          subjects: ["Programming Fundamentals", "Web Development", "Technology understanding", "Media Production", "Adobe Programs"]
        },
        {
          year: "Information Technology (2022-2023)",
          subjects: ["Programming", "System Development", "Cybersecurity", "Technology practices", "User Support"]
        },
        {
          year: "Additional studies for general university entrance qualification (2023-2024)",
          subjects: ["Entrepreneurship", "Advanced Web Development", "Innovation", "Sustainability", "Problem Solving"]
        }
      ]
    },
  ]

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50 dark:from-green-950/10 dark:via-emerald-950/10 dark:to-teal-950/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-36 h-36 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-28 h-28 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            My academic journey and the institutions that have shaped my knowledge and skills.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 dark:text-white">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {edu.logo ? (
                        <Image
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      ) : (
                        <GraduationCap className="h-8 w-8 text-green-600" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <GraduationCap className="h-4 w-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {edu.description}
                </CardDescription>
                
                {/* Years and Subjects for Drømtorp */}
                {edu.years && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Academic Timeline</h4>
                    <div className="relative">
                      {/* Timeline line */}
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-500"></div>
                      
                      {edu.years.map((yearData, yearIndex) => (
                        <div key={yearIndex} className="relative flex items-start mb-8 last:mb-0">
                          {/* Timeline dot */}
                          <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg">
                            <span className="text-white font-bold text-sm">{yearIndex + 1}</span>
                          </div>
                          
                          {/* Content */}
                          <div className="ml-6 flex-1">
                            <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3 text-lg">{yearData.year}</h5>
                            <div className="text-gray-700 dark:text-gray-300">
                              <ul className="list-disc list-inside space-y-1">
                                {yearData.subjects.map((subject, subjectIndex) => (
                                  <li key={subject} className="text-sm">
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
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
                        className={`px-3 py-1.5 ${achievementColors[achievementIndex % achievementColors.length]} text-sm rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200`}
                      >
                        {achievement}
                      </span>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50">
            <p className="text-muted-foreground mb-6 text-lg">
              Always learning and staying updated with the latest technologies and industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium">
                Continuous Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-medium">
                Professional Development
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-medium">
                Industry Certifications
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
