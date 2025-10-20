"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/tobiasrogerhammer", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/tobias-hammer-321a4624b", icon: Linkedin },
    { name: "Email", href: "mailto:tobias@hammerhome.no", icon: Mail },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#E9F5FF' }}>
             {/* Background gradient */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#E9F5FF] via-[#E9F5FF] to-[#E9F5FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#124D95', opacity: 0.1 }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: '#FF6B6B', opacity: 0.1 }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-500" style={{ backgroundColor: '#2BBBAD', opacity: 0.08 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <span className="font-medium" style={{ color: '#124D95' }}>Hello, welcome to my portfolio!</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span style={{ color: '#124D95' }}>
              Tobias Hammer
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-900 dark:text-white">
            Developer / Tech enthusiast / Entrepreneur
          </h2>

          {/* Description */}
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-gray-900 dark:text-white">
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about clean code, modern design, and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-6" style={{ backgroundColor: '#124D95', color: '#E9F5FF', borderColor: '#124D95' }}>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6" style={{ borderColor: '#124D95', color: '#124D95' }}>
              <Link href="#about">About Me</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
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
                  className="transition-all duration-200 p-3 rounded-full hover:scale-110 text-gray-900 dark:text-white hover:text-white"
                         style={{ 
                           backgroundColor: 'transparent'
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.backgroundColor = colors[index % colors.length].hover
                           e.currentTarget.style.color = 'white'
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.backgroundColor = 'transparent'
                           e.currentTarget.style.color = ''
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

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto" style={{ color: '#124D95' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
