"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const HeroProjectsRow = dynamic(
  () => import("@/components/hero-visuals/rotating-projects").then((m) => ({ default: m.HeroProjectsRow })),
  { ssr: false }
)
const MobileProjectShowcase = dynamic(
  () => import("@/components/hero-visuals/mobile-project-showcase").then((m) => ({ default: m.MobileProjectShowcase })),
  { ssr: false }
)

const CarouselPlaceholder = ({ className }: { className?: string }) => (
  <div className={className} aria-hidden="true">
    <div className="min-h-full w-full rounded-2xl bg-muted/20 animate-pulse" />
  </div>
)

const Hero = () => {
  const [carouselsReady, setCarouselsReady] = useState(false)
  useEffect(() => {
    const id = window.setTimeout(() => setCarouselsReady(true), 2500)
    return () => clearTimeout(id)
  }, [])
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/tobiasrogerhammer", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/tobias-hammer-321a4624b", icon: Linkedin },
    { name: "Email", href: "mailto:tobias@hammerhome.no", icon: Mail },
  ]
  const mobileSocialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/thammer.dev/", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/in/tobias-hammer-321a4624b", icon: Linkedin },
    { name: "Email", href: "mailto:tobias@hammerhome.no", icon: Mail },
  ]

  return (
    <section id="home" className="min-h-screen lg:min-h-screen flex items-start lg:items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-section-hero pt-14 sm:pt-24 lg:pt-28 pb-6 lg:pb-0">
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
                  src="/herotobias.jpeg"
                  alt="Tobias Hammer - Full-Stack Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 320px, (max-width: 1536px) 384px, 416px"
                  priority
                  quality={65}
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
                <Button asChild variant="outline" size="lg" className="text-base xl:text-lg px-6 xl:px-8 py-4 xl:py-6 w-auto border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:scale-105 transition-all duration-200">
                  <Link href="#projects">My Projects</Link>
                </Button>
                <Button asChild size="lg" className="text-base xl:text-lg px-6 xl:px-8 py-4 xl:py-6 w-auto bg-brand-primary text-white hover:bg-brand-primary/90 border-brand-primary hover:scale-105 transition-transform duration-200">
                  <a href="/Tobias-resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
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

          {/* Featured projects - deferred to keep TBT low */}
          <div className="mt-12 xl:mt-16 animate-fade-in-up animation-delay-400">
            <p className="text-lg font-medium text-muted-foreground mb-3">
              Featured projects
            </p>
            {carouselsReady ? <HeroProjectsRow /> : <CarouselPlaceholder className="min-h-[200px]" />}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Same text as desktop; welcome above image and title, then 3 projects at bottom */}
        <div className="lg:hidden">
        <div className="max-w-4xl mx-auto">


          {/* Hero image as full-width background with title at bottom */}
          <div className="w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] -mx-4 sm:-mx-6 mb-0 animate-fade-in-up animation-delay-200">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
              <Image
                src="/herotobias.jpeg"
                alt="Tobias Hammer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 412px"
                priority
                fetchPriority="high"
                quality={65}
              />
              {/* Gradient overlay for title readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <h1 className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-2xl sm:text-3xl font-black tracking-tight text-white whitespace-nowrap drop-shadow-lg">
                <span className="text-white">Developer / Entrepreneur</span>
              </h1>
              {/* Social links column - bottom right of image */}
              <div className="absolute bottom-0 right-0 flex flex-col gap-2 p-3 sm:p-4">
                {mobileSocialLinks.map((link, index) => {
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
                      className="transition-all duration-200 p-2.5 rounded-full hover:scale-110 hover:text-white touch-manipulation bg-black/40 backdrop-blur-sm text-white border border-white/20"
                      style={{
                        minWidth: '44px',
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors[index % colors.length].hover
                        e.currentTarget.style.color = 'white'
                        e.currentTarget.style.borderColor = 'transparent'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'
                        e.currentTarget.style.color = 'white'
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
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
            </div>
            {/* Description under the image */}
            <p className="px-4 sm:px-6 pt-4 sm:pt-5 pb-0 text-sm sm:text-base leading-relaxed text-muted-foreground animate-fade-in-up animation-delay-600">
              I build digital products that bring ideas and people together—blending technical craft with a focus on innovation and impact.
            </p>
          </div>


          {/* CTA Buttons - left My Projects, right View Resume (primary) */}
          <div className="flex flex-row gap-3 sm:gap-4 w-full mt-8 sm:mt-4 mb-6 sm:mb-8 animate-fade-in-up animation-delay-700">
            <Button asChild size="lg" className="flex-1 min-w-0 text-base sm:text-lg py-4 sm:py-6 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:scale-105 transition-all duration-200" variant="outline">
              <Link href="#projects">My Projects</Link>
            </Button>
            <Button asChild size="lg" className="flex-1 min-w-0 text-base sm:text-lg py-4 sm:py-6 bg-brand-primary text-white hover:bg-brand-primary/90 border-brand-primary hover:scale-105 transition-transform duration-200">
              <a href="/Tobias-resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
          </div>

          {/* Project carousel (mobile) - deferred to keep TBT low */}
          <div className="animate-fade-in-up animation-delay-200 mb-4 sm:mb-6">
            <p className="text-xl font-medium text-muted-foreground mb-2 text-center sm:text-left">
              Featured projects
            </p>
            {carouselsReady ? <MobileProjectShowcase /> : <CarouselPlaceholder className="min-h-[180px]" />}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-8 sm:mt-10">
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 mx-auto text-brand-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
