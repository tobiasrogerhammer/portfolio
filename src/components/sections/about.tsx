"use client"

import { Monitor, Server, Wrench, Users, Leaf } from "lucide-react"
import Image from "next/image"
import { StatisticsDashboard } from "@/components/features/statistics-dashboard"

const ABOUT_TAGLINE = "Who is Tobias, and what is his story?"
const ABOUT_INTRO = "Developer and co-founder of Renow AS. Studying at OsloMet. I care about sustainable tech and products that help people."

/** Add as many paragraphs as you like — each string is rendered as its own paragraph under "More about me". */
const ABOUT_STORY: string[] = [
  "My journey in software development began five years ago, and since then I've been focused on building products that are both elegant and functional. I enjoy transforming complex challenges into simple, efficient solutions that make a real impact.",
  "Beyond coding, I'm always looking for new opportunities to innovate, collaborate, and build meaningful products that make a difference.",
  "I believe in continuous learning and staying current with the latest tools and trends in the industry to deliver high-quality, forward-thinking solutions.",
]
const ABOUT_CLOSING = "The team behind Renow, photo of us winning the Regional Sustainability Award."

const About = () => {
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
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-0 sm:px-6 lg:px-8 bg-section-about">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-section-about via-section-about to-section-about" />
      
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 rounded-full blur-2xl animate-pulse bg-brand-primary/10" style={{ backgroundColor: '#124D95', opacity: 0.1 }} />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full blur-2xl animate-pulse delay-1000 bg-brand-secondary/10" style={{ backgroundColor: '#FF6B6B', opacity: 0.1 }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-10 lg:mb-12 px-4 sm:px-0">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight text-brand-primary">
              About Me
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-3">
              {ABOUT_TAGLINE}
            </p>
            <div className="h-1 w-16 sm:w-24 mx-auto rounded-full bg-brand-primary"></div>
          </div>
        </div>

        <div className="mb-12 sm:mb-14 lg:mb-16">
          {/* Content with text wrapping around image */}
          <div className="relative">
            {/* Mobile: Full-bleed image fading into section, overlapping content */}
            <div className="lg:hidden">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <Image
                  src="/tobias.webp"
                  alt="Tobias Hammer"
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none about-mobile-hero-fade"
                />
                <div className="absolute top-0 left-0 right-0 p-4 sm:p-5 pb-12 text-center">
                  <p className="text-sm font-semibold text-white drop-shadow-md">
                    20 years · Student · Oslo, Norway
                  </p>
                </div>
              </div>

              <div className="relative -mt-8 sm:-mt-12 px-4 space-y-6 sm:space-y-8">
                <div className="rounded-2xl overflow-hidden bg-card/80 backdrop-blur-md p-5 sm:p-6 border-2 border-brand-primary shadow-lg bg-gradient-to-br from-card to-brand-primary/5">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {ABOUT_INTRO}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-brand-primary">
                    My story
                  </h3>
                  <div className="space-y-4">
                    {ABOUT_STORY.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Closing + Renow: single row on mobile, image left / text right */}
                <div className="flex flex-row gap-4 sm:gap-5 items-stretch rounded-xl overflow-hidden border border-border/50 bg-muted/40 dark:bg-muted/20 shadow-sm">
                  <div className="flex-shrink-0 w-32 sm:w-40 aspect-[4/3] rounded-l-xl overflow-hidden">
                    <Image
                      src="/mobileviewGroupPicture.jpeg"
                      alt="Renow team"
                      width={160}
                      height={120}
                      className="w-full h-full object-cover scale-125"
                      style={{ objectPosition: 'center 35%' }}
                    />
                  </div>
                  <div className="flex flex-1 min-w-0 flex-col justify-center py-4 pr-4 sm:py-5 sm:pr-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Leaf className="h-5 w-5 flex-shrink-0 text-brand-primary" aria-hidden />
                      <p className="text-base sm:text-lg font-semibold text-foreground">Renow AS</p>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {ABOUT_CLOSING}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: 12-column grid layout (original from last push) */}
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-12 lg:gap-8 items-start">
                {/* Left Column (7 cols): Profile Image + Renow side by side, then Statistics Dashboard */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="grid grid-cols-12 gap-4 items-stretch">
                    {/* Profile picture card: image + caption as one card — same image height as Renow */}
                    <div
                      className="col-span-5 flex flex-col rounded-2xl overflow-hidden"
                      style={{
                        backgroundColor: '#E9F5FF',
                        boxShadow: '0 0 20px rgba(18, 77, 149, 0.25), 0 0 40px rgba(18, 77, 149, 0.15)',
                      }}
                    >
                      <div className="relative h-[320px] w-full p-1 pb-0">
                        <Image
                          src="/tobias.webp"
                          alt="Tobias Hammer - Full-Stack Developer"
                          fill
                          className="object-cover object-middle rounded-t-2xl"
                          sizes="(min-width: 1024px) 40vw, 0"
                          priority
                        />
                      </div>
                      <div className="p-3 flex-shrink-0 border-t border-brand-primary/10">
                        <p className="text-sm text-muted-foreground dark:text-black leading-snug">
                          {ABOUT_INTRO}
                        </p>
                      </div>
                    </div>

                    {/* Renow picture card: image + caption as one card — same image height as profile */}
                    <div
                      className="col-span-7 flex flex-col rounded-2xl overflow-hidden"
                      style={{
                        backgroundColor: '#E9F5FF',
                        boxShadow: '0 0 20px rgba(18, 77, 149, 0.25), 0 0 40px rgba(18, 77, 149, 0.15)',
                      }}
                    >
                      <div className="relative h-[320px] w-full p-1 pb-0">
                        <Image
                          src="/renowDinner.jpeg"
                          alt="Renow Group"
                          fill
                          className="object-cover object-center rounded-t-2xl scale-110"
                          style={{ objectPosition: 'center 40%' }}
                          sizes="(min-width: 1024px) 58vw, 0"
                          priority
                        />
                      </div>
                      <div className="p-3 flex-shrink-0 border-t border-brand-primary/10">
                        <p className="font-semibold text-foreground dark:text-black mb-1">Renow AS</p>
                        <p className="text-sm text-muted-foreground dark:text-black leading-snug">
                          {ABOUT_CLOSING}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (5 cols): My Story */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-4 leading-relaxed text-muted-foreground text-base lg:text-lg font-normal">
                    <div className="space-y-3 mb-3">
                      <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-brand-primary">
                        My Story
                      </h3>
                      <div className="h-0.5 w-16 rounded-full bg-brand-primary" />
                    </div>
                    {ABOUT_STORY.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills & technologies: full width on desktop, single title in dashboard */}
              <div className="mt-10 pt-6">
                <StatisticsDashboard skills={skills} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Skills & Statistics Dashboard */}
        <div className="lg:hidden px-4">
          <StatisticsDashboard skills={skills} />
        </div>
      </div>
    </section>
  )
}

export default About
