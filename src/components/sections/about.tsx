"use client"

import { Monitor, Server, Wrench, Users, Github, Linkedin, Mail, Briefcase, TrendingUp, Calendar } from "lucide-react"
import Image from "next/image"
import { StatisticsDashboard, StatCard } from "@/components/features/statistics-dashboard"

const About = () => {

  // Calculate stats for the 3 simple stat cards
  const stats = {
    yearsExperience: new Date().getFullYear() - 2021,
    projectsCompleted: 6,
    experiencePositions: 4,
  }

  const statCards = [
    {
      icon: Briefcase,
      label: "Years Experience",
      value: stats.yearsExperience,
      suffix: "+",
      color: "#EF4444",
      delay: 0,
    },
    {
      icon: TrendingUp,
      label: "Projects",
      value: stats.projectsCompleted,
      color: "#10B981",
      delay: 100,
    },
    {
      icon: Calendar,
      label: "Positions",
      value: stats.experiencePositions,
      color: "#8B5CF6",
      delay: 200,
    },
  ]
  const skills = [
    {
      category: "Frontend",
      items: ["TypeScript", "Next.js", "React", "Tailwind CSS", "JavaScript", "WebSockets"],
      icon: Monitor,
      color: "#3B82F6", // Blue
      gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.15) 100%)",
      proficiencies: {
        "TypeScript": "expert" as const,
        "Next.js": "expert" as const,
        "React": "intermediate" as const,
        "Tailwind CSS": "expert" as const,
        "JavaScript": "expert" as const,
        "WebSockets": "beginner" as const,
      } as Record<string, 'expert' | 'intermediate' | 'beginner'>,
    },
    {
      category: "Backend",
      items: ["Python", "Node.js", "Java", "SQL", "Express", "Firebase", "ConvexDB"],
      icon: Server,
      color: "#EF4444", // Red
      gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(248, 113, 113, 0.15) 100%)",
      proficiencies: {
        "Node.js": "expert" as const,
        "Express": "expert" as const,
        "ConvexDB": "expert" as const,
        "Firebase": "intermediate" as const,
        "Java": "intermediate" as const,
        "SQL": "intermediate" as const,
        "Python": "beginner" as const,
      } as Record<string, 'expert' | 'intermediate' | 'beginner'>,
    },
    {
      category: "Tools",
      items: ["GitHub", "Creative cloud", "Vercel", "Postman", "Figma", "VirtualBox"],
      icon: Wrench,
      color: "#10B981", // Green
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.15) 100%)",
      proficiencies: {
        "GitHub": "expert" as const,
        "Vercel": "expert" as const,
        "Postman": "beginner" as const,
        "Figma": "intermediate" as const,
        "Creative cloud": "intermediate" as const,
        "VirtualBox": "beginner" as const,
      } as Record<string, 'expert' | 'intermediate' | 'beginner'>,
    },
    {
      category: "Skills",
      items: ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Innovation", "Entrepreneurship"],
      icon: Users,
      color: "#8B5CF6", // Purple
      gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(167, 139, 250, 0.15) 100%)",
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
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight text-brand-primary">
              About Me
            </h2>
            <div className="h-1 w-16 sm:w-24 mx-auto rounded-full bg-brand-primary"></div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          {/* Content with text wrapping around image */}
          <div className="relative">
            {/* Mobile: Improved stacked layout */}
            <div className="lg:hidden space-y-6 sm:space-y-8">
              {/* Images side by side */}
              <div className="flex gap-3 sm:gap-4 justify-center items-center">
                {/* Renow Group Picture */}
                <div className="relative flex-1 max-w-[240px] sm:max-w-[320px]">
                  <div 
                    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden p-1.5" 
                    style={{ 
                      backgroundColor: '#E9F5FF',
                      boxShadow: '0 4px 20px rgba(18, 77, 149, 0.25), 0 8px 40px rgba(18, 77, 149, 0.15)'
                    }}
                  >
                    <Image
                      src="/mobileviewGroupPicture.jpeg"
                      alt="Renow Group"
                      width={500}
                      height={375}
                      className="w-full h-full object-cover rounded-xl"
                      style={{ objectPosition: 'center 30%' }}
                      priority
                    />
                  </div>
                </div>

                {/* Profile Image */}
                <div className="relative group">
                  <div 
                    className="relative aspect-square rounded-2xl overflow-hidden p-1.5 w-40 h-40 sm:w-56 sm:h-56" 
                    style={{ 
                      backgroundColor: '#E9F5FF',
                      boxShadow: '0 4px 20px rgba(18, 77, 149, 0.25), 0 8px 40px rgba(18, 77, 149, 0.15)'
                    }}
                  >
                    <Image
                      src="/tobias.webp"
                      alt="Tobias Hammer - Full-Stack Developer"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover rounded-xl"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* 3 Simple Stats Cards - Mobile with better spacing */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 px-2 sm:px-0">
                {statCards.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>

              {/* Story Section - Improved card design */}
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-border/50 shadow-sm">
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-primary">
                    My Story
                  </h3>
                  <div className="h-1 w-16 sm:w-20 rounded-full bg-brand-primary"></div>
                </div>
                <div className="space-y-3 sm:space-y-4 leading-relaxed text-muted-foreground text-sm sm:text-base font-normal">
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
                  <p>
                    When I&apos;m not coding, I enjoy exploring new technologies, working on side projects, and contributing to open-source communities. 
                    I&apos;m passionate about creating user-centered experiences and believe that great software comes from understanding both the technical and human sides of development.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: 12-column grid layout */}
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-12 lg:gap-8 items-start">
                {/* Left Column (7 cols): Profile Image + Stats Cards (side by side) + Statistics Dashboard */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Profile Image and Stats Cards - Side by Side */}
                  <div className="grid grid-cols-12 gap-4 items-stretch">
                    {/* Profile Image */}
                    <div className="col-span-5 h-full">
                      <div className="flex justify-center lg:justify-start h-full">
                        <div className="relative group w-full h-full">
                          <div 
                            className="relative rounded-2xl overflow-hidden p-1 w-full h-full" 
                            style={{ 
                              backgroundColor: '#E9F5FF',
                              boxShadow: '0 0 20px rgba(18, 77, 149, 0.25), 0 0 40px rgba(18, 77, 149, 0.15)'
                            }}
                          >
                            <Image
                              src="/tobias.webp"
                              alt="Tobias Hammer - Full-Stack Developer"
                              width={320}
                              height={320}
                              className="w-full h-full object-cover rounded-xl"
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Renow Group Picture - To the right of profile image */}
                    <div className="col-span-7 h-full">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden p-1" 
                        style={{ 
                          backgroundColor: '#E9F5FF',
                          boxShadow: '0 0 20px rgba(18, 77, 149, 0.25), 0 0 40px rgba(18, 77, 149, 0.15)'
                        }}
                      >
                        <Image
                          src="/renowGroupPicture.jpeg"
                          alt="Renow Group"
                          width={500}
                          height={500}
                          className="w-full h-full object-cover rounded-xl"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* Statistics Dashboard */}
                  <StatisticsDashboard skills={skills} />
                </div>

                {/* Right Column (5 cols): My Story + Social Links */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Story Section */}
                  <div className="space-y-4 leading-relaxed text-muted-foreground text-base lg:text-lg font-normal">
                    <div className="space-y-3 mb-3">
                      <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-brand-primary">
                My Story
              </h3>
                      <div className="h-0.5 w-16 rounded-full" style={{ backgroundColor: '#124D95' }}></div>
            </div>
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
                    <p>
                      When I&apos;m not coding, I enjoy exploring new technologies, working on side projects, and contributing to open-source communities. 
                      I&apos;m passionate about creating user-centered experiences and believe that great software comes from understanding both the technical and human sides of development.
                    </p>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Skills & Statistics Dashboard */}
        <div className="lg:hidden">
          <StatisticsDashboard skills={skills} />
        </div>
      </div>
    </section>
  )
}

export default About
