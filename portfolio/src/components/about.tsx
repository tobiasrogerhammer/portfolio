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
      items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Adobe"],
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
    <section id="about" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#E9F5FF' }}>
             {/* Background gradient */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#E9F5FF] via-[#E9F5FF] to-[#E9F5FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: '#124D95', opacity: 0.1 }} />
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full blur-2xl animate-pulse delay-1000" style={{ backgroundColor: '#FF6B6B', opacity: 0.1 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#124D95' }}>
              About Me
            </h2>
            <div className="h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: '#124D95' }}></div>
          </div>
                 <p className="text-lg max-w-2xl mx-auto mt-6 text-gray-900 dark:text-white">
                   I&apos;m a passionate developer with a love for creating exceptional digital experiences.
                 </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold" style={{ color: '#124D95' }}>
                My Story
              </h3>
              <div className="h-0.5 w-16 rounded-full" style={{ backgroundColor: '#124D95' }}></div>
            </div>
                   <div className="space-y-4 leading-relaxed text-gray-900 dark:text-white">
              <p>
                I started my journey in web development 5 years ago, and I&apos;ve been passionate 
                about creating beautiful, functional applications ever since. I love the challenge 
                of turning complex problems into simple, elegant solutions.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the latest trends 
                in web development to deliver the best possible solutions.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300" style={{ backgroundColor: '#124D95' }}></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden p-1" style={{ backgroundColor: '#E9F5FF' }}>
              <Image
                src="/tobias.webp"
                alt="Tobias Hammer - Full-Stack Developer"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#124D95' }}>
              Skills & Technologies
            </h3>
            <div className="h-1 w-32 mx-auto rounded-full" style={{ backgroundColor: '#124D95' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <Card key={skill.category} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 dark:text-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: skill.color }}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                             <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{skill.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-white text-sm rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
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
