"use client";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";

const DESTINATIONS = [
  { id: "new-york", name: "New York City, USA", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop" },
  { id: "bangkok", name: "Bangkok, Thailand", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=600&fit=crop" },
  { id: "sydney", name: "Sydney, Australia", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop" },
  { id: "kuala-lumpur", name: "Kuala Lumpur, Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop" },
  { id: "paris", name: "Paris, France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop" },
  { id: "tokyo", name: "Tokyo, Japan", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop" },
  { id: "rome", name: "Rome, Italy", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop" },
];

export default function GlobalVacationHotspots() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.3, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.5, spacing: 16 },
      },
    },
    renderMode: "performance",
    dragSpeed: 1.2,
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (instanceRef.current) setLoaded(true);
  }, [instanceRef]);

  const handlePrev = () => instanceRef.current?.prev();
  const handleNext = () => instanceRef.current?.next();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white relative">
      {/* Header */}
      <div className="flex items-center  justify-between mb-12">
        <h2 className=" text-2xl md:text-3xl  font-medium leading-tight">
          Global Vacation Hotspots
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={!loaded}
            className="w-10 h-10 rounded-full bg-secondary text-white cursor-pointer flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={!loaded}
            className="w-10 h-10 rounded-full bg-secondary text-white cursor-pointer flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {DESTINATIONS.map((destination, index) => (
          <div
            key={`${destination.id}-${index}`}
            className="keen-slider__slide rounded-xl overflow-hidden relative cursor-pointer group"
          >
            <div className="relative w-full h-56">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-white font-medium text-lg sm:text-xl drop-shadow-lg">
                  {destination.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
