import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Smartphone, Zap } from "lucide-react"
import Image from "next/image"

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      icon: Palette,
      color: "#124D95",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "SQL", "Python", "Java", "MongoDB"],
      icon: Code,
      color: "#FF6B6B",
    },
    {
      category: "Tools",
      items: ["GitHub", "Vercel", "Figma", "Adobe", "Docker", "VirtualBox"],
      icon: Zap,
      color: "#124D95",
    },
    {
      category: "Skills",
      items: ["Teamwork", "Communication", "Entrepreneurship", "Innovation","Problem Solving"],
      icon: Smartphone,
      color: "#2BBBAD",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#E9F5FF' }}>
             {/* Background gradient */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#E9F5FF] via-[#E9F5FF] to-[#E9F5FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: '#124D95', opacity: 0.1 }} />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full blur-2xl animate-pulse delay-1000" style={{ backgroundColor: '#FF6B6B', opacity: 0.1 }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#124D95' }}>
              About Me
            </h2>
            <div className="h-1 w-16 sm:w-24 mx-auto rounded-full" style={{ backgroundColor: '#124D95' }}></div>
          </div>
                 <p className="text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 text-gray-900 dark:text-white px-4 sm:px-0">
                 I&apos;m a developer driven by curiosity and a commitment to creating meaningful digital experiences.
                 </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Story */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold" style={{ color: '#124D95' }}>
                My Story
              </h3>
              <div className="h-0.5 w-12 sm:w-16 rounded-full" style={{ backgroundColor: '#124D95' }}></div>
            </div>
                   <div className="space-y-3 sm:space-y-4 leading-relaxed text-gray-900 dark:text-white text-sm sm:text-base">
              <p>
              My journey in software development began five years ago, and since then I&apos;ve been focused on building 
              applications that are both elegant and functional. 
              I enjoy transforming complex challenges into simple, efficient solutions that make a real impact.
              </p>
              <p>
              Beyond coding, I&apos;m always looking for new opportunities to innovate, collaborate, and build meaningful products that make a difference. 
              </p>
              <p>
              I believe in continuous learning and staying current with the latest tools and trends in web development to deliver high-quality, forward-thinking solutions.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300" style={{ backgroundColor: '#124D95' }}></div>
            <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden p-1 max-w-sm mx-auto lg:max-w-none" style={{ backgroundColor: '#E9F5FF' }}>
              <Image
                src="/tobias.webp"
                alt="Tobias Hammer - Full-Stack Developer"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4" style={{ color: '#124D95' }}>
              Skills & Technologies
            </h3>
            <div className="h-1 w-20 sm:w-32 mx-auto rounded-full" style={{ backgroundColor: '#124D95' }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <Card key={skill.category} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 dark:text-white">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: skill.color }}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                             <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{skill.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 text-white text-xs sm:text-sm rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                          style={{ backgroundColor: skill.color }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
