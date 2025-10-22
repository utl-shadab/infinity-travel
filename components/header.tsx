"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Home, Plane, Building2, Ship, Package, FileText, Info, PhoneCall, LogInIcon } from "lucide-react"
import Image from "next/image"

const NAVIGATION_ITEMS = [
  { label: "Home", href: "/", icon: <Home size={18} /> },
  { label: "Flight", href: "/flights", hasSubmenu: true, icon: <Plane size={18} /> },
  { label: "Hotel", href: "/hotels", icon: <Building2 size={18} /> },
  { label: "Cruise", href: "/cruises", icon: <Ship size={18} /> },
  { label: "Packages", href: "/packages", icon: <Package size={18} /> },
  { label: "Blog", href: "/blog", icon: <FileText size={18} /> },
  { label: "About Us", href: "/about", icon: <Info size={18} /> },
]

const FLIGHT_CLASSES = [
  { id: "itu", name: "International To US", description: "Affordable comfort", href: "/flights/international-to-us", icon: <Plane size={18} /> },
  { id: "ifu", name: "International From US", description: "Affordable comfort", href: "/flights/international-from-us", icon: <Plane size={18} /> },
  { id: "bus", name: "Business Class", description: "Premium experience", href: "/flights/business-class", icon: <Plane size={18} /> },
  { id: "fir", name: "First Class", description: "Luxury travel", href: "/flights/first-class", icon: <Plane size={18} /> },
]


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFlightMenuOpen, setIsFlightMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const toggleDropdown = (label: any) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  const isActive = (href: any) => pathname === href
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md">
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-17 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <Image
            src="/new-travel-logo.png"
            alt="Infinity Travels"
            width={150}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1" ref={dropdownRef}>
          {NAVIGATION_ITEMS.map((item) => (
            <div key={item.href} className="relative">
              {item.hasSubmenu ? (
                <button
                  onClick={() => item.hasSubmenu && toggleDropdown(item.label)}
                  className={`px-3 py-2 text-sm cursor-pointer font-medium rounded-md transition-colors flex items-center gap-1 relative
                 ${isActive(item.href) ? "text-secondary font-semibold after:absolute after:-bottom-3.5 after:left-0 after:h-[3px] after:w-full after:bg-secondary after:rounded-full" : "hover:text-secondary"}
                  `}
                >
                  {item.label}
                  {item.hasSubmenu && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm cursor-pointer font-medium rounded-md transition-colors flex items-center gap-1 relative
                    ${isActive(item.href)
                      ? "text-secondary font-semibold after:absolute after:-bottom-3.5 after:left-0 after:h-[3px] after:w-full after:bg-secondary after:rounded-full"
                      : "hover:text-secondary"}`}
                >
                  {item.label}
                </Link>
              )}

              <AnimatePresence>
                {item.hasSubmenu && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 mt-2 w-64 bg-white text-foreground rounded-md shadow-xl p-2"
                  >
                    {FLIGHT_CLASSES.map((flightClass) => (
                      <Link
                        key={flightClass.id}
                        href={flightClass.href}
                        className={`flex items-start gap-3 px-4 py-3 rounded-md transition-colors cursor-pointer
                          ${isActive(flightClass.href) ? "bg-secondary text-secondary-foreground" : "hover:bg-gray-100"}
                        `}
                      >
                        <span className="text-xl mt-1 text-primary">{flightClass.icon}</span>
                        <div>
                          <div className="font-semibold text-sm text-primary">{flightClass.name}</div>
                          <div className="text-xs text-secondary">{flightClass.description}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 flex gap-1 items-center text-sm border-white  border font-medium hover:bg-primary-foreground/10 rounded-md transition-colors">
            <LogInIcon className="mr-2 h-4 w-4" />
            Login
          </button>
          <button
            className="flex items-center gap-3 border border-white px-4 py-1 rounded-md hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="text-white">
              <PhoneCall size={22} strokeWidth={2} />
            </div>
            <div className="h-8 w-px bg-white/40"></div>
            <div className="flex flex-col text-left leading-tight text-white">
              <span className="text-xs opacity-80">To More Inquiry</span>
              <span className="text-base font-semibold">1-760-999-7119</span>
            </div>
          </button>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-1">
          <Link
            href="tel:1-760-999-7119"
            className="flex items-center gap-2 border border-white px-2 py-1 rounded-md hover:shadow-md transition-all cursor-pointer"
          >
            <div className="text-white ">
              <PhoneCall size={16} strokeWidth={2} />
            </div>
            <div className="h-6 w-px bg-white/40"></div>
            <div className="flex flex-col text-left leading-tight text-white">
              <span className="text-[10px] opacity-80 ">To More Inquiry</span>
              <span className="text-[11px] font-medium leading-tight">1-760-999-7119</span>
            </div>
          </Link>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-primary-foreground/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-primary text-primary-foreground md:hidden overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <div key={item.href}>
                  <button
                    onClick={() => item.hasSubmenu && setIsFlightMenuOpen(!isFlightMenuOpen)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-md transition-colors flex items-center justify-between
                      ${isActive(item.href) ? "bg-secondary text-secondary-foreground" : "hover:bg-primary-foreground/10"}
                    `}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      <Link href={item.href} className="flex-1" onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </Link>
                    </span>
                    {item.hasSubmenu && (
                      <span className={`transition-transform ${isFlightMenuOpen ? "rotate-180" : ""}`}>▼</span>
                    )}
                  </button>

                  {item.hasSubmenu && isFlightMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2 mt-2"
                    >
                      {FLIGHT_CLASSES.map((flightClass) => (
                        <Link
                          key={flightClass.id}
                          href={flightClass.href}
                          className={`flex items-start gap-3 px-4 py-2 rounded-md transition-colors
                            ${isActive(flightClass.href) ? "bg-secondary text-secondary-foreground" : "hover:bg-primary-foreground/10"}
                          `}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-lg">{flightClass.icon}</span>
                          <div>
                            <div className="font-semibold text-sm">{flightClass.name}</div>
                            <div className="text-xs opacity-80">{flightClass.description}</div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              <div className="border-t border-primary-foreground/20 pt-4 mt-4 space-y-2">
                <button className="w-full px-4 py-2 text-sm font-medium hover:bg-primary-foreground/10 rounded-md transition-colors">
                  <LogInIcon className="mr-2" />
                  Login
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
