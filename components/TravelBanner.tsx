"use client";

import Image from "next/image";

export default function TravelBanner() {
  return (
    <section className="relative w-full rounded-lg overflow-hidden bg-[#fff8f5] px-6 py-3  lg:py-6 max-w-7xl mx-auto mt-10">
      
      <div className="absolute inset-0">
        <Image
          src="/booking-background.png" 
          alt="Background pattern"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-8 text-center md:text-left">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium text-black leading-snug">
            Make your next travel journey a special one!
          </h2>
          <p className="mt-2 text-sm  text-gray-600 leading-relaxed">
            Plan your journey, your way! Our expertise and your choices would make the perfect itinerary
          </p>
        </div>

        <div>
          <button
            className="bg-secondary text-white text-sm sm:text-base font-medium px-5 py-2 rounded-md hover:bg-secondary active:scale-95 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
