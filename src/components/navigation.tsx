"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle, ThemeToggleMobile } from "@/components/theme-toggle"
import { PdfViewerModal } from "@/components/pdf-viewer-modal"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [openResumePdf, setOpenResumePdf] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
  ]

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="text-lg sm:text-xl font-bold text-primary tracking-tight">
            Tobias Hammer
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm lg:text-base transition-all duration-200 relative ${
                    isActive 
                      ? 'text-brand-primary font-medium' 
                      : 'text-foreground hover:text-brand-primary'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button 
              size="sm" 
              className="text-xs lg:text-sm px-3 lg:px-4 py-2 lg:py-2.5 bg-brand-primary text-white hover:bg-brand-primary/90 border-brand-primary"
              onClick={() => setOpenResumePdf(true)}
            >
              View Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-10 w-10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-3 py-2.5 text-sm font-medium transition-all duration-200 touch-manipulation rounded-md ${
                      isActive 
                        ? 'text-brand-primary bg-brand-primary/10' 
                        : 'text-foreground hover:text-brand-primary hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
              <div className="px-3 py-2 space-y-2">
                <ThemeToggleMobile />
                <Button 
                  className="w-full text-sm py-2.5 bg-brand-primary text-white hover:bg-brand-primary/90 border-brand-primary"
                  onClick={() => {
                    setOpenResumePdf(true)
                    setIsOpen(false)
                  }}
                >
                  View Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Resume PDF Viewer Modal */}
      <PdfViewerModal
        pdfUrl="/Tobias-resume.pdf"
        title="Tobias Hammer - Resume"
        isOpen={openResumePdf}
        onClose={() => setOpenResumePdf(false)}
      />
    </nav>
  )
}

export default Navigation
