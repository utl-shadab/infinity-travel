"use client"

import { Header } from "@/components/header"
import  Footer  from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import Link from "next/link"

const FLIGHT_DETAILS: Record<string, any> = {
  "1": {
    id: "1",
    airline: "Skyline Airways",
    flightNumber: "SA-2847",
    departure: "New York (JFK)",
    arrival: "London (LHR)",
    departureTime: "10:30 AM",
    arrivalTime: "10:45 PM",
    date: "December 15, 2024",
    duration: "7h 15m",
    price: "$450",
    class: "First Class",
    stops: "Non-stop",
    aircraft: "Boeing 777-300ER",
    amenities: ["Premium Meals", "Lie-flat Seats", "Priority Boarding", "Lounge Access"],
    rating: 4.8,
    reviews: 2543,
  },
  "2": {
    id: "2",
    airline: "Global Express",
    flightNumber: "GE-1205",
    departure: "Los Angeles (LAX)",
    arrival: "Tokyo (NRT)",
    departureTime: "2:15 PM",
    arrivalTime: "5:30 AM+1",
    date: "December 16, 2024",
    duration: "11h 15m",
    price: "$680",
    class: "Business Class",
    stops: "Non-stop",
    aircraft: "Airbus A350-900",
    amenities: ["Business Meals", "Reclining Seats", "Entertainment System", "WiFi"],
    rating: 4.6,
    reviews: 1876,
  },
}

function FlightDetailContent() {
  const params = useParams()
  const flightId = params.id as string
  const flight = FLIGHT_DETAILS[flightId]

  if (!flight) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Flight not found</h1>
            <Link href="/flights">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md">Back to Flights</button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/flights" className="text-sm hover:underline mb-4 inline-block">
              ← Back to Flights
            </Link>
            <h1 className="text-4xl font-bold mb-2">{flight.airline}</h1>
            <p className="text-lg opacity-90">Flight {flight.flightNumber}</p>
          </div>
        </section>

        {/* Flight Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Flight Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-md shadow-md p-8 border border-border"
              >
                <h2 className="text-2xl font-bold mb-8">Flight Details</h2>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Departure</p>
                    <p className="text-3xl font-bold">{flight.departureTime}</p>
                    <p className="text-lg font-semibold mt-2">{flight.departure}</p>
                    <p className="text-sm text-muted-foreground">{flight.date}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">{flight.duration}</p>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <div className="flex-1 h-1 bg-linear-to-r from-primary to-secondary" />
                      <div className="w-3 h-3 bg-secondary rounded-full" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">{flight.stops}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-2">Arrival</p>
                    <p className="text-3xl font-bold">{flight.arrivalTime}</p>
                    <p className="text-lg font-semibold mt-2">{flight.arrival}</p>
                  </div>
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card rounded-md shadow-md p-8 border border-border"
              >
                <h2 className="text-2xl font-bold mb-6">Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  {flight.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Aircraft Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-md shadow-md p-8 border border-border"
              >
                <h2 className="text-2xl font-bold mb-4">Aircraft Information</h2>
                <p className="text-lg">{flight.aircraft}</p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-md shadow-md p-8 border border-border sticky top-24"
              >
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Class</p>
                  <p className="text-2xl font-bold text-primary">{flight.class}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">{flight.rating}</span>
                    <span className="text-sm text-muted-foreground">({flight.reviews} reviews)</span>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-2">Price per person</p>
                  <p className="text-4xl font-bold text-primary">{flight.price}</p>
                </div>

                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:shadow-lg transition-shadow mb-3">
                  Book Now
                </button>
                <button className="w-full px-6 py-3 border-2 border-primary text-primary rounded-md font-semibold hover:bg-primary/5 transition-colors">
                  Save for Later
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function FlightDetail() {
  return (
    <ThemeProvider>
      <FlightDetailContent />
    </ThemeProvider>
  )
}
