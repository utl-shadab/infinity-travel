"use client";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Star } from "lucide-react";
import "keen-slider/keen-slider.min.css";


const DESTINATIONS = [
  {
    id: "paris",
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    rating: 4.8,
    code: "DED-ORY",
    date: "Nov 6",
  },
  {
    id: "rome",
    name: "Rome",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
    rating: 4.6,
    code: "DED-FCO",
    date: "Nov 6",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    rating: 4.9,
    code: "DED-HND",
    date: "Nov 6",
  },
  {
    id: "singapore",
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    rating: 4.7,
    code: "DED-SIN",
    date: "Nov 6",
  },
];


export default function PopularTravel() {
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
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl md:text-3xl font-medium leading-tight">
          Most Popular Flights Worldwide
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
            className="keen-slider__slide pb-4"
          >
            <div className="rounded-2xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              {/* Image Section */}
              <div className="relative w-full p-3">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 rounded-2xl object-cover"
                />
                <div className="absolute top-7 right-7 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md">
                  <Star size={14} fill="white" strokeWidth={0} />
                  {destination.rating}
                </div>
              </div>

              {/* Text Section */}
              <div className="p-4 flex flex-col">
                <h3 className="text-base font-semibold text-gray-900 leading-tight">
                  {destination.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 font-medium tracking-wide">
                  {destination.code}
                </p>
                <p className="text-xs p-1 rounded-md px-3 bg-secondary w-fit text-white mt-1 flex gap-2 items-center">
                  <Calendar size={15}/>
                  {destination.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}