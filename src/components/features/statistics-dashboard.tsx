"use client"

import { Card, CardContent } from "@/components/ui/card"

interface Skill {
  category: string
  items: string[]
  icon: React.ElementType
  color: string
  gradient: string
  proficiencies?: Record<string, 'expert' | 'intermediate' | 'beginner'>
}

// Proficiency color mapping - consistent colors across all categories
const getProficiencyColor = (proficiency: 'expert' | 'intermediate' | 'beginner' = 'intermediate') => {
  switch (proficiency) {
    case 'expert':
      // Dark green - expert level (≥4.5:1 contrast with white)
      return '#047857' // emerald-700
    case 'intermediate':
      // Medium blue - intermediate level
      return '#2563eb' // blue-600
    case 'beginner':
      // Light gray - beginner level
      return '#6b7280' // gray-500
    default:
      return '#2563eb'
  }
}

export const StatisticsDashboard = ({ skills }: { skills: Skill[] }) => {
  // Separate technologies from soft skills
  const technologies = skills.filter(skill => skill.category !== "Skills")
  const softSkills = skills.find(skill => skill.category === "Skills")
  
  // Calculate counts correctly
  const totalTechnologies = technologies.reduce((sum, skill) => sum + skill.items.length, 0) // 7 + 7 + 8 = 22

  // Calculate tech breakdown - only technologies, not skills
  const techBreakdown = technologies.map((skill) => ({
    category: skill.category,
    count: skill.items.length,
    color: skill.color,
    percentage: Math.round((skill.items.length / totalTechnologies) * 100),
    icon: skill.icon,
    gradient: skill.gradient,
    items: skill.items,
    proficiencies: skill.proficiencies || {},
  }))

  return (
    <div className="mt-12 sm:mt-6">
      {/* Technologies Grid  Simplified */}
      <div className="mb-10">
        {/* Title with color code legend close by */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 tracking-tight text-brand-primary">
              Skills & Technologies
            </h3>
            <div className="h-0.5 w-10 sm:w-12 rounded-full" style={{ backgroundColor: '#124D95' }}></div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded shadow-sm" style={{ backgroundColor: '#059669' }}></div>
              <span className="text-muted-foreground font-medium">Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded shadow-sm" style={{ backgroundColor: '#2563eb' }}></div>
              <span className="text-muted-foreground font-medium">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded shadow-sm" style={{ backgroundColor: '#6b7280' }}></div>
              <span className="text-muted-foreground font-medium">Beginner</span>
            </div>
          </div>
        </div>
        
        {/* Mobile: Compact inline list */}
        <div className="sm:hidden space-y-1.5">
          {technologies.map((skill) => {
            const Icon = skill.icon
            return (
              <div 
                key={skill.category} 
                className="rounded-md px-2 py-1.5 border border-border/40 backdrop-blur-sm"
                style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.12) 100%)" }}
              >
                <div className="grid grid-cols-[110px_1fr] items-center gap-1.5">
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <div className="p-1 rounded flex-shrink-0" style={{ backgroundColor: skill.color }}>
                      <Icon className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-card-foreground uppercase tracking-wide whitespace-nowrap">
                      {skill.category}
                  </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-0.5 min-w-0">
                    {skill.items.map((item) => {
                      const proficiency = skill.proficiencies?.[item] || 'intermediate'
                      const itemColor = getProficiencyColor(proficiency)
                      return (
                        <span
                          key={item}
                          className="px-1.5 py-0.5 text-white text-xs rounded font-medium whitespace-nowrap"
                      style={{
                            backgroundColor: itemColor
                          }}
                        >
                          {item}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
            </div>

        {/* Desktop: Simplified cards */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {techBreakdown.map((tech, index) => {
            const Icon = tech.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-border bg-card/50 backdrop-blur-sm"
                style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.12) 100%)" }}
              >
                <CardContent className="p-4 sm:p-5">
                  {/* Simplified Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: tech.color }}>
                      <Icon className="h-4 w-4 text-white" />
              </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-card-foreground">
                        {tech.category}
                      </h4>
                      <div className="text-xs text-muted-foreground">{tech.count} technologies</div>
              </div>
            </div>
                  
                  {/* Skills Tags with Proficiency Colors */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {tech.items.map((item) => {
                      const proficiency = tech.proficiencies?.[item] || 'intermediate'
                      const itemColor = getProficiencyColor(proficiency)
                      return (
                        <span
                          key={item}
                          className="px-2 py-1 text-white text-xs rounded-md font-medium transition-all duration-200 hover:scale-105"
                          style={{ 
                            backgroundColor: itemColor
                          }}
                          title={`${item} - ${proficiency.charAt(0).toUpperCase() + proficiency.slice(1)}`}
                        >
                          {item}
                        </span>
                      )
                    })}
            </div>
          </CardContent>
        </Card>
            )
          })}
        </div>
      </div>

      {/* Soft Skills - Separate section */}
      {softSkills && (
        <div className="mt-4 sm:mt-6">
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
            {softSkills.items.map((item) => (
              <span
                key={item}
                className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm rounded-md font-medium border border-violet-300 dark:border-violet-600 bg-violet-100 dark:bg-violet-900/50 text-violet-900 dark:text-violet-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
