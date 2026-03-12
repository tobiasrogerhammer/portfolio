"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HeroProjectsRow } from "@/components/hero-visuals/rotating-projects"
// Mobile visual components
import { MobileProjectShowcase } from "@/components/hero-visuals/mobile-project-showcase"
// import { MobileCodeSnippet } from "@/components/hero-visuals/mobile-code-snippet"
// import { MobileGeometricShapes } from "@/components/hero-visuals/mobile-geometric-shapes"

const Hero = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/tobiasrogerhammer", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/tobias-hammer-321a4624b", icon: Linkedin },
    { name: "Email", href: "mailto:tobias@hammerhome.no", icon: Mail },
  ]

  return (
    <section id="home" className="min-h-screen lg:min-h-screen flex items-start lg:items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-section-hero pt-20 sm:pt-24 lg:pt-28 pb-6 lg:pb-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-section-hero via-section-hero to-section-hero" />
      
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-3xl animate-pulse-4s bg-brand-primary/10 dark:bg-brand-primary/20" style={{ backgroundColor: '#124D95', opacity: 0.1 }} />
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-3xl animate-pulse-4s delay-1000 bg-brand-secondary/10 dark:bg-brand-secondary/20" style={{ backgroundColor: '#FF6B6B', opacity: 0.1 }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse-4s delay-500 bg-brand-accent/8 dark:bg-brand-accent/15" style={{ backgroundColor: '#2BBBAD', opacity: 0.08 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Desktop: Image left, text right; then 3 projects at bottom */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-[auto_1fr] lg:gap-12 xl:gap-16 items-center min-h-[60vh]">
            {/* Left - Profile image */}
            <div className="relative flex-shrink-0 animate-fade-in-up">
              <div className="relative w-80 h-80 xl:w-96 xl:h-96 2xl:w-[26rem] 2xl:h-[26rem] rounded-2xl overflow-hidden border-2 border-border/50 shadow-xl">
                <Image
                  src="/tobias.webp"
                  alt="Tobias Hammer - Full-Stack Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 320px, (max-width: 1536px) 384px, 416px"
                  priority
                />
              </div>
            </div>

            {/* Right - Text content */}
            <div className="space-y-6 xl:space-y-8">
              <div className="animate-fade-in-up">
                <span className="text-sm xl:text-base font-medium tracking-wide uppercase text-brand-primary">
                  Hello, welcome to Tobias Hammer&apos;s portfolio!
                </span>
              </div>

              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-black tracking-tight animate-fade-in-up animation-delay-200">
                <span className="text-brand-primary">
                  Developer / Entrepreneur
                </span>
              </h1>

              <p className="text-lg xl:text-xl leading-relaxed text-muted-foreground font-normal animate-fade-in-up animation-delay-600">
                I design and develop digital products that connect ideas with people.
                Combining technical precision with an eye for innovation and impact.
              </p>

              <div className="flex flex-row gap-4 pt-2 animate-fade-in-up animation-delay-800">
                <Button asChild size="lg" className="text-base xl:text-lg px-6 xl:px-8 py-4 xl:py-6 w-auto bg-brand-primary text-white hover:bg-brand-primary/90 border-brand-primary hover:scale-105 transition-transform duration-200">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base xl:text-lg px-6 xl:px-8 py-4 xl:py-6 w-auto border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:scale-105 transition-all duration-200">
                  <Link href="#about">About Me</Link>
                </Button>
              </div>

              <div className="flex space-x-6 pt-4 animate-fade-in-up animation-delay-1000">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  const colors = [
                    { hover: '#124D95' },
                    { hover: '#FF6B6B' },
                    { hover: '#2BBBAD' }
                  ]
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="transition-all duration-200 p-3 rounded-full hover:scale-110 hover:text-white touch-manipulation"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'hsl(var(--foreground))',
                        minWidth: '44px',
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors[index % colors.length].hover
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'hsl(var(--foreground))'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-6 w-6" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 3 projects side by side at bottom of hero */}
          <div className="mt-12 xl:mt-16 animate-fade-in-up animation-delay-400">
            <HeroProjectsRow />
          </div>
        </div>

        {/* Mobile/Tablet Layout - Same text as desktop; welcome above image and title, then 3 projects at bottom */}
        <div className="lg:hidden">
        <div className="max-w-4xl mx-auto">
          {/* Welcome text above image and title */}
          <div className="mb-3 sm:mb-4 mt-12 sm:mt-14 animate-fade-in-up text-center">
            <span className="text-lg sm:text-base font-medium tracking-wide uppercase text-brand-primary">Hello, welcome to Tobias&apos;s portfolio!</span>
          </div>
          <p className="text-lg sm:text-base leading-relaxed text-muted-foreground font-normal animate-fade-in-up animation-delay-600"> om </p>

          {/* Project carousel (mobile): right under welcome */}
          <div className="animate-fade-in-up animation-delay-200 mb-4 sm:mb-6">
            <MobileProjectShowcase />
          </div>

          {/* Image left of title and description */}
          <div className="flex flex-row gap-4 sm:gap-6 mb-4 sm:mb-6 animate-fade-in-up animation-delay-200">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden border-2 border-border/50 shadow-lg">
              <Image
                src="/tobias.webp"
                alt="Tobias Hammer"
                fill
                className="object-cover"
                sizes="128px"
                priority
              />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl font-black tracking-tight animate-fade-in-up animation-delay-200">
                <span className="text-brand-primary">Developer / Entrepreneur</span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mt-2 sm:mt-3 animate-fade-in-up animation-delay-600">
                I build digital products that bring ideas and people together—blending technical craft with a focus on innovation and impact.
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="w-16 h-px bg-border mb-4 sm:mb-6 animate-fade-in-up animation-delay-500 sm:mx-0 mx-auto"></div>

          {/* CTA Buttons - equal width, full row; About Me left, View My Work right */}
          <div className="flex flex-row gap-3 sm:gap-4 w-full mb-6 sm:mb-8 animate-fade-in-up animation-delay-700">
            <Button asChild size="lg" className="flex-1 min-w-0 text-base sm:text-lg py-4 sm:py-6 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:scale-105 transition-all duration-200" variant="outline">
              <Link href="#about">About Me</Link>
            </Button>
            <Button asChild size="lg" className="flex-1 min-w-0 text-base sm:text-lg py-4 sm:py-6 bg-brand-primary text-white hover:bg-brand-primary/90 border-brand-primary hover:scale-105 transition-transform duration-200">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-16 animate-fade-in-up animation-delay-1000">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              const colors = [
                { hover: '#124D95' },
                { hover: '#FF6B6B' },
                { hover: '#2BBBAD' }
              ]
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-all duration-200 p-3 sm:p-3 rounded-full hover:scale-110 hover:text-white touch-manipulation"
                         style={{ 
                           backgroundColor: 'transparent',
                           color: 'hsl(var(--foreground))',
                           minWidth: '44px',
                           minHeight: '44px',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.backgroundColor = colors[index % colors.length].hover
                           e.currentTarget.style.color = 'white'
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.backgroundColor = 'transparent'
                           e.currentTarget.style.color = 'hsl(var(--foreground))'
                         }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 mx-auto text-brand-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
