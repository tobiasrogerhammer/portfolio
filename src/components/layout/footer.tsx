"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/tobiasrogerhammer", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/tobias-hammer-321a4624b", icon: Linkedin },
    { name: "Email", href: "mailto:tobias@hammerhome.no", icon: Mail },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-primary">Tobias Hammer</h3>
            <p className="text-muted-foreground leading-relaxed">
            Full-stack developer, entrepreneur, and student transforming complex ideas into accessible digital solutions.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-brand-primary transition-colors duration-200 hover:translate-x-1 transform inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-brand-primary transition-colors duration-200 hover:translate-x-1 transform inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-brand-primary transition-colors duration-200 hover:translate-x-1 transform inline-block">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-muted-foreground hover:text-brand-primary transition-colors duration-200 hover:translate-x-1 transform inline-block">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                const colors = ['#124D95', '#FF6B6B', '#2BBBAD']
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-full hover:shadow-lg"
                    style={{ 
                      backgroundColor: 'transparent',
                      minWidth: '44px',
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors[index]
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = ''
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                )
              })}
            </div>
            <div className="pt-4">
              <a 
                href="mailto:tobias@hammerhome.no" 
                className="text-sm text-muted-foreground hover:text-brand-primary transition-colors duration-200"
              >
                tobias@hammerhome.no
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Tobias Hammer. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Built with Next.js, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
