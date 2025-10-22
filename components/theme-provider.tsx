"use client"

import { Moon, Sun } from "lucide-react"
import type React from "react"

import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    // const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark
    const shouldBeDark = savedTheme ? savedTheme === "dark" : false
    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) return <>{children}</>

  return (
    <div data-theme-provider>
      {children}
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
    </div>
  )
}

function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 hidden p-3 cursor-pointer rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon />
      ) : (
        <Sun />
      )}
    </button>
  )
}
