"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle, ThemeToggleMobile } from "@/components/theme-toggle"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
  ]

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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button asChild size="sm" className="text-xs lg:text-sm px-3 lg:px-4 py-2 lg:py-2.5 bg-brand-primary text-white hover:bg-brand-primary/90 border-brand-primary" style={{ backgroundColor: '#124D95', color: '#E9F5FF', borderColor: '#124D95' }}>
              <a href="/Tobias_Hammer_Resume.pdf" download>
                Download Resume
              </a>
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
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <ThemeToggleMobile />
                <Button asChild className="w-full text-sm py-2.5 bg-brand-primary text-white hover:bg-brand-primary/90 border-brand-primary" style={{ backgroundColor: '#124D95', color: '#E9F5FF', borderColor: '#124D95' }}>
                  <a href="/Tobias_Hammer_Resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
