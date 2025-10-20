import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Building2, FileText } from "lucide-react"
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
    },
    {
      company: "Renow AS",
      position: "Co-Founder",
      location: "Oppegård, Norway",
      duration: "2023 - Present",
      description: "Co-founded Renow AS, a web development company specializing in creating websites that drive growth for small and medium-sized businesses. Focus on sustainable web development with 88% reduced CO2 emissions and modern technologies like Next.js and React.",
      technologies: ["Innovation", "Problem Solving", "Web Development", "Networking", "Business Development"],
      logo: "/renow.png",
    },
    {
      company: "Huddly AS",
      position: "Working Student",
      location: "Oslo, Norway",
      duration: "2022 - Present",
      description: "Working as a student employee at Huddly AS, gaining hands-on experience in technology and professional development while pursuing studies.",
      technologies: ["Technology", "Professional Development", "Learning", "Collaboration"],
      logo: "huddly-svg",
    },
    {
      company: "Huddly AS",
      position: "Intern",
      location: "Oslo, Norway",
      duration: "2021 - 2022",
      description: "Completed internship at Huddly AS, gaining valuable industry experience and learning about professional software development practices.",
      technologies: ["Internship", "Learning", "Professional Development", "Technology"],
      logo: "huddly-svg",
    },
    {
      company: "Kolbotn IL",
      position: "Swimming Instructor",
      location: "Kolbotn, Norway",
      duration: "2021 - 2022",
      description: "Taught swimming lessons and water safety to students of various ages at Kolbotn IL. Developed strong communication and teaching skills while ensuring student safety and progress.",
      technologies: ["Teaching", "Communication", "Safety", "Leadership", "Mentoring"],
      logo: "/Kolbotn_IL.png",
    },
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/50 dark:from-purple-950/10 dark:via-pink-950/10 dark:to-orange-950/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 right-32 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-24 left-32 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            My professional journey in software development and the companies I&apos;ve had the privilege to work with.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = [
              "border-l-4 border-l-blue-500",
              "border-l-4 border-l-purple-500", 
              "border-l-4 border-l-green-500",
              "border-l-4 border-l-orange-500",
              "border-l-4 border-l-pink-500"
            ]
            const cardColors = [
              "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
              "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
              "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
              "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
              "bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
            ]
            return (
                   <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 dark:text-white ${colors[index % colors.length]}`}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 flex items-center justify-center ${cardColors[index % cardColors.length]} rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {exp.logo === "huddly-svg" ? (
                        <svg width="32" height="32" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <title>Huddly Square Logo</title>
                          <path d="M11.6923 21.7692H16V17.4615H11.6923V21.7692ZM4.30769 0.23077H0V4.53846H4.30769V0.23077ZM0 21.7692H4.30769V17.4615H0V21.7692ZM0 8.84616V13.1538H14.7077H16V8.84616H14.7077H0ZM11.6923 0.23077V4.53846H16V0.23077H11.6923Z" fill="currentColor" />
                        </svg>
                      ) : exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      ) : (
                        <Building2 className="h-8 w-8 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {exp.position}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-pink-50 dark:bg-pink-900/20 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-pink-600" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {exp.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-full font-medium hover:bg-muted/80 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {exp.certificate && (
                  <div className="mt-4">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200"
                    >
                      <FileText className="h-4 w-4" />
                      <span className="text-sm font-medium">Letter of recommendation</span>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in my full experience? Check out my detailed resume.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
