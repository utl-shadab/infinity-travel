"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FLIGHT_CLASSES } from "@/lib/constants"

export function FlightMegamenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 mt-0 w-80 bg-white text-foreground rounded-md shadow-2xl p-4 z-50"
    >
      <div className="space-y-2">
        {FLIGHT_CLASSES.map((flightClass) => (
          <Link
            key={flightClass.id}
            href={flightClass.href}
            className="flex items-start gap-4 px-4 py-3 rounded-md hover:bg-muted transition-colors group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">{flightClass.icon}</span>
            <div className="flex-1">
              <div className="font-semibold text-sm group-hover:text-primary transition-colors">{flightClass.name}</div>
              <div className="text-xs text-muted-foreground">{flightClass.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
