"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function AirlinePriceSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFares, setSelectedFares] = useState<{ [key: number]: string }>({}); 
  // 👆 key = airline index, value = "nonstop" | "oneStop" | "multiStop"


  const airlines = [
    { name: "United Airlines", logo: "/airlogo.png", nonstop: "$1,227", oneStop: "-", multiStop: "$1,453", sustainableImg: "/chip.png" },
    { name: "Hawaiian Airlines", logo: "/airlogo.png", nonstop: "-", oneStop: "$1,227", multiStop: "$2,023" },
    { name: "Nippon Airways", logo: "/airlogo.png", nonstop: "$1,227", oneStop: "-", multiStop: "$1,453", sustainableImg: "/chip.png" },
    { name: "Air Canada", logo: "/airlogo.png", nonstop: "-", oneStop: "$1,227", multiStop: "-" },
    { name: "Qatar Airways", logo: "/airlogo.png", nonstop: "-", oneStop: "-", multiStop: "$1,453" },
  ];

  const visibleCards = 5;

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < airlines.length - (visibleCards - 1))
      setCurrentIndex(currentIndex + 1);
  };

  // handle fare selection per card
  const handleSelectFare = (airlineIdx: number, fareType: string) => {
    setSelectedFares(prev => ({
      ...prev,
      [airlineIdx]: prev[airlineIdx] === fareType ? "" : fareType, // deselect if clicked again
    }));
  };

  return (
    <div className="w-full overflow-hidden relative">
      {/* Desktop View */}
      <div className="hidden md:block px-4 mx-auto relative max-w-full overflow-hidden">
        <div className="flex gap-3 overflow-hidden relative max-w-full">
          {/* Sticky Column */}
          <div className="shrink-0 w-36 bg-white border border-[#B9B9B9] rounded-md">
            <div className="h-20 flex items-center justify-center border-b border-gray-300">
              <span className="text-xs text-gray-600">Show all fares</span>
            </div>
            <div className="h-12 flex items-center justify-center border-b border-gray-300">
              <span className="text-sm font-semibold text-[#1C1C1C]">Nonstop</span>
            </div>
            <div className="h-12 flex items-center justify-center border-b border-gray-300">
              <span className="text-sm font-semibold text-[#1C1C1C]">1 Stop</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-sm font-semibold text-[#1C1C1C]">1+ Stop</span>
            </div>
          </div>

          {/* Scrollable Cards */}
          <div className="flex overflow-hidden flex-1 relative">
            <motion.div
              className="flex gap-3"
              animate={{ x: -currentIndex * 208 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {airlines.map((airline, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-36 bg-white border border-[#B9B9B9] rounded-md relative"
                >
                  {/* Header */}
                  <div className="h-20 flex flex-col items-center justify-center border-b border-gray-300 px-4 relative">
                    {airline.sustainableImg && (
                      <div className="absolute top-3 right-4 w-8 h-8">
                        <Image
                          src={airline.sustainableImg}
                          width={20}
                          height={20}
                          alt="Sustainable"
                          className="object-contain"
                        />
                      </div>
                    )}
                    <Image
                      src={airline.logo}
                      width={40}
                      height={40}
                      alt={airline.name}
                      className="mb-2 object-contain"
                    />
                    <span className="text-xs text-gray-700 text-center leading-tight">
                      {airline.name}
                    </span>
                  </div>

                  {/* Fares */}
                  {["nonstop", "oneStop", "multiStop"].map((fareType) => {
                    const isSelected = selectedFares[idx] === fareType;
                    const value = airline[fareType as keyof typeof airline];
                    return (
                      <div
                        key={fareType}
                        onClick={() => value !== "-" && handleSelectFare(idx, fareType)}
                        className={`h-12 flex items-center justify-center border-b last:border-b-0 border-gray-300 cursor-pointer transition ${
                          value === "-"
                            ? "cursor-not-allowed text-gray-400"
                            : isSelected
                            ? "bg-secondary text-white font-semibold"
                            : "hover:bg-gray-100 text-[#1C1C1C]"
                        }`}
                      >
                        <span className="text-sm font-semibold">{value}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex flex-col gap-2 shrink-0 p-2 rounded-md border border-[#B9B9B9]">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`h-full px-3 rounded-md flex cursor-pointer items-center justify-center transition-opacity ${
                currentIndex === 0
                  ? "bg-gray-200 opacity-50 cursor-not-allowed"
                  : "bg-secondary hover:bg-primary"
              }`}
            >
              <ChevronLeft
                className={`w-8 h-8 ${
                  currentIndex === 0 ? "text-gray-400" : "text-white"
                }`}
                strokeWidth={3}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= airlines.length - (visibleCards - 1)}
              className={`h-full px-3 rounded-md flex cursor-pointer items-center justify-center transition-opacity ${
                currentIndex >= airlines.length - (visibleCards - 1)
                  ? "bg-gray-200 opacity-50 cursor-not-allowed"
                  : "bg-secondary hover:bg-primary"
              }`}
            >
              <ChevronRight
                className={`w-8 h-8 ${
                  currentIndex >= airlines.length - (visibleCards - 1)
                    ? "text-gray-400"
                    : "text-white"
                }`}
                strokeWidth={3}
              />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
