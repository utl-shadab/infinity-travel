"use client"
import { motion } from "framer-motion"
import TravelTabs from "./TravelTabs";
export function Hero() {
    return <section className="relative min-h-screen flex items-center justify-center  bg-sky-blue">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-2xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-2xl animate-pulse" />
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        >
            <div className="text-left mb-12">
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-medium text-black mb-6 leading-tight">
                    The Gateway to Flights Across the World

                </h1>
                <p className="text-lg md:text-xl  text-gray mb-2">
                    Filter & Find Your Flight, Your Way!
                </p>
            </div>

            <TravelTabs />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-start gap-6 mt-8 text-primary-foreground/80 text-sm"
            >
                {/* Trustpilot */}


                {/* BBB Rating */}
                <div className="flex items-center gap-2">
                    <img
                        src="/accredited-business.png"
                        alt="BBB Rating"
                        className="w-40 object-contain"
                    />
                </div>

                {/* Secure Booking */}
                <div className="flex items-center gap-2">
                    <img
                        src="/trustpilot.png"
                        alt="Secure Booking"
                        className="w-24  object-contain"
                    />

                </div>
            </motion.div>

        </motion.div>
    </section>;
}