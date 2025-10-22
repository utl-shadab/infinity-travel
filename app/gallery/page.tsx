"use client"

import { Header } from "@/components/header"
import  Footer  from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import { useState } from "react"

function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryItems = [
    { id: 1, category: "beach", title: "Tropical Paradise", image: "/bali-beach-tropical-paradise.jpg" },
    { id: 2, category: "city", title: "City Lights", image: "/tokyo-neon-lights-cityscape.jpg" },
    { id: 3, category: "landmark", title: "Iconic Tower", image: "/paris-eiffel-tower-romantic.jpg" },
    { id: 4, category: "beach", title: "Sunset Beach", image: "/sydney-opera-house-harbor.jpg" },
    { id: 5, category: "city", title: "Urban Skyline", image: "/nyc-skyline-twilight.png" },
    { id: 6, category: "desert", title: "Desert Luxury", image: "/dubai-desert-luxury.jpg" },
    { id: 7, category: "beach", title: "Crystal Waters", image: "/bali-beach-tropical-paradise.jpg" },
    { id: 8, category: "landmark", title: "Historic Site", image: "/paris-eiffel-tower-romantic.jpg" },
    { id: 9, category: "city", title: "Night Market", image: "/tokyo-neon-lights-cityscape.jpg" },
  ]

  const categories = ["all", "beach", "city", "landmark", "desert"]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

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
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore stunning photography from our destinations around the world
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3 justify-center">
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
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative h-64 rounded-md overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function GalleryPage() {
  return (
    <ThemeProvider>
      <GalleryContent />
    </ThemeProvider>
  )
}
