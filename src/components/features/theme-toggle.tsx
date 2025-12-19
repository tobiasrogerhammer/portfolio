"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-4 w-4" />
    }
    return actualTheme === "dark" ? (
      <Moon className="h-4 w-4" />
    ) : (
      <Sun className="h-4 w-4" />
    )
  }

  const getTooltip = () => {
    if (theme === "system") {
      return "System theme (currently " + actualTheme + ")"
    }
    return theme === "dark" ? "Dark mode" : "Light mode"
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="h-9 w-9 relative overflow-hidden group transition-all duration-300 hover:scale-105"
      title={getTooltip()}
    >
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {getIcon()}
      </div>
      <span className="sr-only">{getTooltip()}</span>
    </Button>
  )
}

export function ThemeToggleMobile() {
  const { theme, setTheme, actualTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-full justify-start">
        <Sun className="h-4 w-4 mr-2" />
        Light Mode
      </Button>
    )
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getLabel = () => {
    if (theme === "system") {
      return `System (${actualTheme})`
    }
    return theme === "dark" ? "Dark Mode" : "Light Mode"
  }

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-4 w-4" />
    }
    return actualTheme === "dark" ? (
      <Moon className="h-4 w-4" />
    ) : (
      <Sun className="h-4 w-4" />
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={cycleTheme}
      className="w-full justify-start transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {getIcon()}
      <span className="ml-2">{getLabel()}</span>
    </Button>
  )
}
