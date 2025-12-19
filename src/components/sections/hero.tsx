"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { RotatingProjectPreviews } from "@/components/hero-visuals/rotating-projects"
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
    <section id="home" className="min-h-screen lg:min-h-screen flex items-start lg:items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-section-hero py-6 lg:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-section-hero via-section-hero to-section-hero" />
      
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-3xl animate-pulse-4s bg-brand-primary/10 dark:bg-brand-primary/20" style={{ backgroundColor: '#124D95', opacity: 0.1 }} />
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-3xl animate-pulse-4s delay-1000 bg-brand-secondary/10 dark:bg-brand-secondary/20" style={{ backgroundColor: '#FF6B6B', opacity: 0.1 }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse-4s delay-500 bg-brand-accent/8 dark:bg-brand-accent/15" style={{ backgroundColor: '#2BBBAD', opacity: 0.08 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Split Screen Layout - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-6 xl:space-y-8">
            {/* Greeting */}
            <div className="animate-fade-in-up">
              <span className="text-sm xl:text-base font-medium tracking-wide uppercase text-brand-primary">
                Hello, welcome to my portfolio!
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight animate-fade-in-up animation-delay-200">
              <span className="text-brand-primary">
                Tobias Hammer
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-xl xl:text-2xl text-foreground tracking-wide animate-fade-in-up animation-delay-400">
              Developer / Problem Solver / Entrepreneur
            </h2>

            {/* Description */}
            <p className="text-lg xl:text-xl leading-relaxed text-muted-foreground font-normal animate-fade-in-up animation-delay-600">
              I design and develop digital products that connect ideas with people.
              Combining technical precision with an eye for innovation and impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 pt-2 animate-fade-in-up animation-delay-800">
              <Button asChild size="lg" className="text-base xl:text-lg px-6 xl:px-8 py-4 xl:py-6 w-auto bg-brand-primary text-white hover:bg-brand-primary/90 border-brand-primary hover:scale-105 transition-transform duration-200">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base xl:text-lg px-6 xl:px-8 py-4 xl:py-6 w-auto border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:scale-105 transition-all duration-200">
                <Link href="#about">About Me</Link>
              </Button>
            </div>

            {/* Social Links */}
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

          {/* Right Column - Animated Visual */}
          <div className="relative h-full flex items-center justify-center animate-fade-in-up animation-delay-400">
            <RotatingProjectPreviews />
          </div>
        </div>

        {/* Mobile/Tablet Layout - Centered (Original) */}
        <div className="lg:hidden text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-2 mt-12 sm:mb-6 animate-fade-in-up">
            <span className="text-sm sm:text-base font-medium tracking-wide uppercase text-brand-primary">Hello, welcome to my portfolio!</span>
          </div>

          {/* Name */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black mb-2 sm:mb-6 tracking-tight animate-fade-in-up animation-delay-200">
            <span className="text-brand-primary">
              Tobias Hammer
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-8 text-foreground tracking-wide animate-fade-in-up animation-delay-400">
            Developer / Problem Solver / Entrepreneur
          </h2>

          {/* Separator */}
          <div className="w-16 h-px bg-border mx-auto mb-4 sm:mb-6 animate-fade-in-up animation-delay-500"></div>

          {/* Mobile Visual Component - Project Preview Carousel */}
          <div className="animate-fade-in-up animation-delay-700">
            <MobileProjectShowcase />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-md mb-4 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-muted-foreground px-4 sm:px-0 font-normal animate-fade-in-up animation-delay-600">
          I design and develop digital products that connect ideas with people.
          Combining technical precision with an eye for innovation and impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-16 px-4 sm:px-0 animate-fade-in-up animation-delay-800">
            <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-auto bg-brand-primary text-white hover:bg-brand-primary/90 border-brand-primary hover:scale-105 transition-transform duration-200">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-auto border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:scale-105 transition-all duration-200">
              <Link href="#about">About Me</Link>
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
