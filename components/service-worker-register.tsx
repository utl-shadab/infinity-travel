"use client"

import { useEffect } from "react"

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("[v0] Service Worker registered successfully:", registration)
        })
        .catch((error) => {
          console.log("[v0] Service Worker registration failed:", error)
        })
    }
  }, [])

  return null
}
