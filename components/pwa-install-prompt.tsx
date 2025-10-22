"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === "accepted") {
      setDeferredPrompt(null)
      setShowPrompt(false)
    }
  }

  const handleDismiss = () => setShowPrompt(false)

  return (
    <AnimatePresence>
      {showPrompt && deferredPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 z-40 w-auto max-w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4 md:p-5 flex flex-col gap-4"
        >
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <img
              src="/new-travel-logo.png"
              alt="Infinity Travels"
              className="h-10 w-auto shrink-0"
            />
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-800 cursor-pointer transition-colors text-lg leading-none"
              aria-label="Dismiss"
            >
              <X />
            </button>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-base sm:text-lg leading-tight mb-1">
              Install Infinity Travels
            </h3>
            <p className="text-sm text-gray-500 leading-snug">
              Get quick access to explore destinations on your device
            </p>
          </div>



          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <button
              onClick={handleDismiss}
              className="flex-1 px-3 py-2 text-sm font-medium border cursor-pointer border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Not Now
            </button>
            <button
              onClick={handleInstall}
              className="flex-1 px-3 py-2 text-sm font-medium cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Install
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
