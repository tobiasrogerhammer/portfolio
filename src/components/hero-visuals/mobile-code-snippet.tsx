"use client"

import { useState, useEffect } from "react"

const codeLines = [
  { text: "const developer = {", indent: 0 },
  { text: "  name: 'Tobias Hammer',", indent: 1 },
  { text: "  skills: ['Full Stack', 'Problem Solving'],", indent: 1 },
  { text: "  passion: 'Building digital products'", indent: 1 },
  { text: "};", indent: 0 },
]

export const MobileCodeSnippet = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  useEffect(() => {
    const timeouts = codeLines.map((_, index) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index])
      }, index * 300)
    )

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <div className="w-full max-w-xs mx-auto mb-8 sm:mb-12">
      <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-4 shadow-lg">
        {/* Code header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs text-muted-foreground font-mono ml-2">developer.js</span>
        </div>
        
        {/* Code content */}
        <div className="font-mono text-xs sm:text-sm">
          {codeLines.map((line, index) => {
            const isVisible = visibleLines.includes(index)
            return (
              <div
                key={index}
                className={`
                  transition-all duration-500
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                `}
                style={{
                  paddingLeft: `${line.indent * 1.5}rem`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <span className="text-muted-foreground">{(index + 1).toString().padStart(2, '0')}</span>
                <span className="text-foreground ml-3">{line.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
