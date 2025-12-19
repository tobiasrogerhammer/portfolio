"use client"

import { useState, useEffect } from "react"
import { Code2, Database, Globe, Smartphone, Zap, Cloud } from "lucide-react"

const techIcons = [
  { icon: Code2, label: "Full Stack", color: "#124D95" },
  { icon: Database, label: "Backend", color: "#2BBBAD" },
  { icon: Globe, label: "Web Dev", color: "#124D95" },
  { icon: Smartphone, label: "Mobile", color: "#FF6B6B" },
  { icon: Zap, label: "Performance", color: "#2BBBAD" },
  { icon: Cloud, label: "Cloud", color: "#124D95" },
]

export const MobileTechIcons = () => {
  const [visibleIcons, setVisibleIcons] = useState<number[]>([])

  useEffect(() => {
    // Stagger icon appearance
    const timeouts = techIcons.map((_, index) => 
      setTimeout(() => {
        setVisibleIcons(prev => [...prev, index])
      }, index * 150)
    )

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
      {techIcons.map((tech, index) => {
        const Icon = tech.icon
        const isVisible = visibleIcons.includes(index)
        
        return (
          <div
            key={index}
            className={`
              flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 
              rounded-full bg-card/60 backdrop-blur-sm border border-border/50
              transition-all duration-500 ease-out
              ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
              hover:scale-110 hover:border-brand-primary/50 hover:shadow-lg
            `}
            style={{
              transitionDelay: `${index * 50}ms`
            }}
          >
            <Icon 
              className="h-4 w-4 sm:h-5 sm:w-5" 
              style={{ color: tech.color }}
            />
            <span className="text-xs sm:text-sm font-medium text-foreground">
              {tech.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
