"use client"

import { Header } from "@/components/header"
import  Footer  from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { motion } from "framer-motion"
import Link from "next/link"

const FLIGHTS = [
  {
    id: "1",
    airline: "Skyline Airways",
    departure: "New York (JFK)",
    arrival: "London (LHR)",
    departureTime: "10:30 AM",
    arrivalTime: "10:45 PM",
    duration: "7h 15m",
    price: "$450",
    class: "first-class",
    rating: 4.8,
  },
  {
    id: "2",
    airline: "Global Express",
    departure: "Los Angeles (LAX)",
    arrival: "Tokyo (NRT)",
    departureTime: "2:15 PM",
    arrivalTime: "5:30 AM+1",
    duration: "11h 15m",
    price: "$680",
    class: "business-class",
    rating: 4.6,
  },
  {
    id: "3",
    airline: "International Wings",
    departure: "Miami (MIA)",
    arrival: "Paris (CDG)",
    departureTime: "6:00 AM",
    arrivalTime: "6:30 PM",
    duration: "8h 30m",
    price: "$520",
    class: "international-from-us",
    rating: 4.7,
  },
  {
    id: "4",
    airline: "Transatlantic Air",
    departure: "London (LHR)",
    arrival: "New York (JFK)",
    departureTime: "1:00 PM",
    arrivalTime: "3:30 PM",
    duration: "7h 30m",
    price: "$490",
    class: "international-to-us",
    rating: 4.9,
  },
]

function FlightsContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Flight</h1>
              <p className="text-lg opacity-90">Explore our wide selection of flights to destinations worldwide</p>
            </motion.div>
          </div>
        </section>

        {/* Flights Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FLIGHTS.map((flight, index) => (
              <motion.div
                key={flight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-md shadow-md hover:shadow-lg transition-shadow p-6 border border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{flight.airline}</h3>
                    <p className="text-sm text-muted-foreground capitalize">{flight.class.replace("-", " ")}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">{flight.rating}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Departure</p>
                      <p className="font-semibold">{flight.departureTime}</p>
                      <p className="text-sm">{flight.departure}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground mb-2">{flight.duration}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div className="flex-1 h-px bg-border" />
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Arrival</p>
                      <p className="font-semibold">{flight.arrivalTime}</p>
                      <p className="text-sm">{flight.arrival}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">{flight.price}</span>
                  <Link href={`/flights/${flight.id}`}>
                    <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:shadow-lg transition-shadow">
                      View Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function Flights() {
  return (
    <ThemeProvider>
      <FlightsContent />
    </ThemeProvider>
  )
}
