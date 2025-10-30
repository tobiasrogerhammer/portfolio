"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Smartphone, Zap, Monitor, Server, Wrench, Users } from "lucide-react"
import Image from "next/image"

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["TypeScript", "Next.js", "React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      icon: Monitor,
      color: "#3B82F6", // Blue
    },
    {
      category: "Backend",
      items: ["Python", "Node.js", "Java", "SQL", "Express", "Firebase", "ConvexDB"],
      icon: Server,
      color: "#EF4444", // Red
    },
    {
      category: "Tools",
      items: ["AWS", "GitHub", "Docker", "Vercel", "Postman", "Figma", "WebSockets", "VirtualBox"],
      icon: Wrench,
      color: "#10B981", // Green
    },
    {
      category: "Skills",
      items: ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Innovation", "Entrepreneurship"],
      icon: Users,
      color: "#8B5CF6", // Purple
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-section-about">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-section-about via-section-about to-section-about" />
      
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 rounded-full blur-2xl animate-pulse bg-brand-primary/10" style={{ backgroundColor: '#124D95', opacity: 0.1 }} />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full blur-2xl animate-pulse delay-1000 bg-brand-secondary/10" style={{ backgroundColor: '#FF6B6B', opacity: 0.1 }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight text-brand-primary">
              About Me
            </h2>
            <div className="h-1 w-16 sm:w-24 mx-auto rounded-full bg-brand-primary"></div>
          </div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mt-4 sm:mt-6 text-muted-foreground px-4 sm:px-0 font-normal leading-relaxed">
            I&apos;m a developer driven by curiosity and a commitment to creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Story */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-brand-primary">
                My Story
              </h3>
              <div className="h-0.5 w-12 sm:w-16 rounded-full" style={{ backgroundColor: '#124D95' }}></div>
            </div>
            <div className="space-y-3 sm:space-y-4 leading-relaxed text-muted-foreground text-base sm:text-lg font-normal">
              <p>
              My journey in software development began five years ago, and since then I&apos;ve been focused on building 
              products that are both elegant and functional. 
              I enjoy transforming complex challenges into simple, efficient solutions that make a real impact.
              </p>
              <p>
              Beyond coding, I&apos;m always looking for new opportunities to innovate, collaborate, and build meaningful products that make a difference. 
              </p>
              <p>
              I believe in continuous learning and staying current with the latest tools and trends in the industry to deliver high-quality, forward-thinking solutions.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative group order-1 lg:order-2">
            <div 
              className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden p-1 max-w-2xs mx-auto lg:max-w-none transition-all duration-300" 
              style={{ 
                backgroundColor: '#E9F5FF',
                boxShadow: '0 0 20px rgba(18, 77, 149, 0.25), 0 0 40px rgba(18, 77, 149, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(18, 77, 149, 0.4), 0 0 60px rgba(18, 77, 149, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(18, 77, 149, 0.25), 0 0 40px rgba(18, 77, 149, 0.15)'
              }}
            >
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
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3 tracking-tight text-brand-primary">
              Skills & Technologies
            </h3>
            <div className="h-0.5 w-16 sm:w-24 mx-auto rounded-full" style={{ backgroundColor: '#124D95' }}></div>
          </div>
          
          {/* Compact skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div key={skill.category} className="bg-card backdrop-blur-sm rounded-lg p-4 border border-border shadow-sm hover:shadow-md transition-shadow duration-200">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 sm:p-3 rounded-lg shadow-sm" style={{ backgroundColor: skill.color }}>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-card-foreground tracking-tight">
                      {skill.category}
                    </h4>
                  </div>
                  
                  {/* Skills Tags - Compact horizontal layout */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 sm:px-3 sm:py-1.5 text-white text-xs sm:text-sm rounded-md font-medium shadow-sm"
                        style={{ backgroundColor: skill.color }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
