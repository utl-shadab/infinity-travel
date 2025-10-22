"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      title: "Destinations",
      items: [
        { label: "All Destinations", href: "/destinations" },
        { label: "Beach Resorts", href: "/destinations?category=beach" },
        { label: "City Tours", href: "/destinations?category=city" },
        { label: "Adventure", href: "/destinations?category=adventure" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "FAQ", href: "/faq" },
        { label: "Help Center", href: "/help" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        Explore
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-card border border-border rounded-md shadow-xl p-8 z-50"
          >
            <div className="grid grid-cols-3 gap-8">
              {menuItems.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
