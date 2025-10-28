import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Building2, FileText, ExternalLink } from "lucide-react"
import Image from "next/image"

const Experience = () => {
  const experiences = [
    {
      company: "Royal Norwegian Air Force",
      position: "Military Service",
      location: "Rygge, Norway",
      duration: "2024 - 2025",
      description: "Completed military service in the Royal Norwegian Air Force, developing leadership skills, discipline, and teamwork abilities while serving the nation. Gained valuable experience in structured environments and mission-critical operations.",
      technologies: ["Teamwork", "Discipline", "Problem Solving", "Communication", "Service"],
      logo: "/norwegianAirForce.png",
      certificate: "/jobbanbefaling-copy.pdf",
      website: "https://www.forsvaret.no/",
    },
    {
      company: "Renow AS",
      position: "Co-Founder",
      location: "Oppegård, Norway",
      duration: "2023 - Present",
      description: "Co-founded Renow AS, a web development company specializing in creating websites that drive growth for small and medium-sized businesses. Focus on sustainable web development with 88% reduced CO2 emissions and modern technologies like Next.js and React.",
      technologies: ["Innovation", "Problem Solving", "Web Development", "Networking", "Business Development"],
      logo: "/renow.png",
      website: "https://renow.no/",
    },
    {
      company: "Huddly AS",
      positions: [
        {
          title: "Working Student",
          duration: "2022 - Present",
          description: "Working as a student employee at Huddly AS, gaining hands-on experience in technology and professional development while pursuing studies.",
          technologies: ["Technology", "Professional Development", "Learning", "Collaboration"]
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
      company: "Kolbotn IL",
      position: "Swimming Instructor",
      location: "Kolbotn, Norway",
      duration: "2021 - 2022",
      description: "Taught swimming lessons and water safety to students of various ages at Kolbotn IL. Developed strong communication and teaching skills while ensuring student safety and progress.",
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
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-4 sm:mt-6 px-4 sm:px-0">
            My professional journey in software development and the companies I&apos;ve had the privilege to work with.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => {
            const colors = [
              "border-l-4 border-l-blue-500",
              "border-l-4 border-l-purple-500", 
              "border-l-4 border-l-green-500",
              "border-l-4 border-l-pink-500"
            ]
            const cardColors = [
              "bg-gradient-to-r from-blue-50 to-blue-100",
              "bg-gradient-to-r from-purple-50 to-purple-100",
              "bg-gradient-to-r from-green-50 to-green-100",
              "bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
            ]
            
            return (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border bg-card backdrop-blur-sm hover:bg-secondary ${colors[index % colors.length]}`}>
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center ${cardColors[index % cardColors.length]} rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        {exp.logo === "huddly-svg" ? (
                          <svg width="24" height="24" className="sm:w-8 sm:h-8" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                          />
                        ) : (
                          <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {exp.positions ? exp.company : exp.position}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building2 className="h-3 w-3 sm:h-4 sm:w-4" />
                          <a 
                            href={exp.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-medium text-sm sm:text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="h-3 w-3 opacity-60 hover:opacity-100 transition-opacity duration-200" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex flex-row sm:flex-col gap-2 sm:gap-1.5">
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-purple-50 dark:bg-purple-900/20 px-2 sm:px-3 py-1 rounded-full">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                          <span className="font-medium text-gray-900 dark:text-black">
                            {exp.positions ? `${exp.positions[exp.positions.length - 1].duration.split(' - ')[0]} - ${exp.positions[0].duration.split(' - ')[1]}` : exp.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-pink-50 dark:bg-pink-900/20 px-2 sm:px-3 py-1 rounded-full">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-pink-600" />
                          <span className="font-medium text-gray-900 dark:text-black">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {exp.positions ? (
                    // LinkedIn-style multiple positions
                    <div className="space-y-4">
                      {exp.positions.map((pos, posIndex) => (
                        <div key={posIndex} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 relative">
                          <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                              {pos.title}
                            </h4>
                            <span className="text-xs sm:text-sm font-medium" style={{ color: 'hsl(var(--muted-foreground))' }}>
                              {pos.duration}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base mb-3 leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                            {pos.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {pos.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Single position layout
                    <>
                      <CardDescription className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed dark:text-white">
                        {exp.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {exp.certificate && (
                        <div className="mt-3 sm:mt-4">
                          <a
                            href={exp.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 font-medium"
                          >
                            <FileText className="h-4 w-4" />
                            <span className="text-sm font-semibold">Letter of recommendation</span>
                          </a>
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
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Interested in my full experience? Check out my detailed resume.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
