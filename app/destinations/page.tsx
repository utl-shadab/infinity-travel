"use client"

import { Header } from "@/components/header"
import  Footer  from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import { DESTINATIONS } from "@/lib/constants"
import Link from "next/link"
import { useState } from "react"

function DestinationsContent() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "beach", "city", "adventure"]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />

      <main className="flex-1">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">All Destinations</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our curated collection of the world's most beautiful destinations
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/destinations/${destination.id}`}>
                  <div className="relative h-72 rounded-xl overflow-hidden mb-4">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm font-medium">Explore</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold">{destination.rating}</span>
                      <span className="text-muted-foreground text-sm">({destination.reviews})</span>
                    </div>
                    <span className="font-bold text-primary text-lg">{destination.price}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function DestinationsPage() {
  return (
    <ThemeProvider>
      <DestinationsContent />
    </ThemeProvider>
  )
}
