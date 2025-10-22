"use client"

import { Header } from "@/components/header"
import  Footer  from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { motion } from "framer-motion"
import { DESTINATIONS } from "@/lib/constants"
import { notFound } from "next/navigation"

function DestinationDetailContent({ destination }: { destination: (typeof DESTINATIONS)[0] }) {
  const relatedDestinations = DESTINATIONS.filter((d) => d.id !== destination.id).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative h-96 md:h-screen flex items-end overflow-hidden">
          <img
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-12 max-w-7xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{destination.name}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{destination.description}</p>
          </motion.div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-6 rounded-md border border-border"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl text-yellow-500">★</span>
                <span className="text-3xl font-bold">{destination.rating}</span>
              </div>
              <p className="text-muted-foreground">{destination.reviews} reviews</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-6 rounded-md border border-border"
            >
              <p className="text-sm text-muted-foreground mb-2">Starting from</p>
              <p className="text-3xl font-bold text-primary">{destination.price}</p>
              <p className="text-sm text-muted-foreground mt-2">per person</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary text-primary-foreground p-6 rounded-md"
            >
              <button className="w-full font-semibold py-3 hover:shadow-lg transition-shadow">Book Now</button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">About This Destination</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {destination.description} is one of the world's most sought-after travel destinations. With its unique
                blend of natural beauty, cultural heritage, and modern amenities, it offers an unforgettable experience
                for every type of traveler.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're seeking adventure, relaxation, or cultural immersion, this destination has something
                special to offer. Our expert guides and carefully curated itineraries ensure you make the most of your
                visit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-primary/5 p-8 rounded-md"
            >
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-3">
                {[
                  "Accommodation in 4-5 star hotels",
                  "Daily breakfast and selected meals",
                  "Professional tour guide",
                  "Airport transfers",
                  "Sightseeing tours",
                  "Travel insurance",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                      ✓
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Related Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedDestinations.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <a href={`/destinations/${dest.id}`}>
                    <div className="relative h-48 rounded-md overflow-hidden mb-4">
                      <img
                        src={dest.image || "/placeholder.svg"}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground">{dest.price}</p>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = DESTINATIONS.find((d) => d.id === params.id)

  if (!destination) {
    notFound()
  }

  return (
    <ThemeProvider>
      <DestinationDetailContent destination={destination} />
    </ThemeProvider>
  )
}
