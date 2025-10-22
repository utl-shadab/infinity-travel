"use client"

import { Header } from "@/components/header"
import  Footer  from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { motion } from "framer-motion"

function HotelsContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Hotel</h1>
              <p className="text-lg opacity-90">Explore luxury accommodations worldwide</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">Hotel listings coming soon...</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function Hotels() {
  return (
    <ThemeProvider>
      <HotelsContent />
    </ThemeProvider>
  )
}
