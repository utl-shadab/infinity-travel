"use client"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import { ServiceWorkerRegister } from "@/components/service-worker-register"
import { Testimonials } from "@/components/testimonials"
import { motion } from "framer-motion"

import { Hero } from "@/components/hero"
import GlobalVacationHotspots from "@/components/GlobalVacationHotspots"
import TrendingEscapesSlider from "@/components/TrendingEscapes"
import TravelBanner from "@/components/TravelBanner"
import PopularTravel from "@/components/PopularTravel"
import DealsSection from "@/components/DealsSection"
import Footer from "@/components/Footer"
function HomeContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <ServiceWorkerRegister />
      <PWAInstallPrompt />
      <Header />
      <main className="flex-1">
        <Hero />
        <GlobalVacationHotspots />
        <TrendingEscapesSlider />
        <TravelBanner />
        <PopularTravel />
        <DealsSection/>
     

        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Travel?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your journey today and discover the world's most beautiful destinations
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold hover:shadow-lg transition-shadow">
              Book Your Adventure
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  )
}
