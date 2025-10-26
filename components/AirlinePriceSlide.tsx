"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Airline {
  name: string;
  logo: string;
  nonstop: string;
  oneStop: string;
  multiStop: string;
  sustainableImg?: string;
}

export default function AirlinePriceSlide() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState<number>(5); // originalLength = 5
  const [selectedFares, setSelectedFares] = useState<{ [key: number]: string }>({});
  const [selectedMobile, setSelectedMobile] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const airlines: Airline[] = [
    { name: "United Airlines", logo: "/airlogo.png", nonstop: "$1,227", oneStop: "-", multiStop: "$1,453", sustainableImg: "/chip.png" },
    { name: "Hawaiian Airlines", logo: "/airlogo.png", nonstop: "-", oneStop: "$1,227", multiStop: "$2,023" },
    { name: "Nippon Airways", logo: "/airlogo.png", nonstop: "$1,227", oneStop: "-", multiStop: "$1,453", sustainableImg: "/chip.png" },
    { name: "Air Canada", logo: "/airlogo.png", nonstop: "-", oneStop: "$1,227", multiStop: "-" },
    { name: "Qatar Airways", logo: "/airlogo.png", nonstop: "-", oneStop: "-", multiStop: "$1,453" },
  ];

  const originalLength = airlines.length;
  const numCopies = 3;
  const extendedAirlines: Airline[] = Array.from({ length: numCopies }, () => [...airlines]).flat();

  // For mobile, determine the best (non-empty) price for display
  const getBestPrice = (airline: Airline): string => {
    if (airline.nonstop !== "-") return airline.nonstop;
    if (airline.oneStop !== "-") return airline.oneStop;
    if (airline.multiStop !== "-") return airline.multiStop;
    return "-";
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < airlines.length - (5 - 1))
      setCurrentIndex(currentIndex + 1);
  };

  const handleTouchSwipe = () => {
    const deltaX = touchStart - touchEnd;
    if (Math.abs(deltaX) < 50) return;

    let newIndex: number;
    if (deltaX > 0) { // swiped left, next
      newIndex = mobileCurrentIndex + 1;
      if (newIndex >= originalLength * 2) {
        newIndex = originalLength;
      }
    } else { // swiped right, prev
      newIndex = mobileCurrentIndex - 1;
      if (newIndex < originalLength) {
        newIndex = originalLength * 2 - 1;
      }
    }
    setMobileCurrentIndex(newIndex);
  };

  // handle fare selection per card (desktop only)
  const handleSelectFare = (airlineIdx: number, fareType: string) => {
    setSelectedFares(prev => ({
      ...prev,
      [airlineIdx]: prev[airlineIdx] === fareType ? "" : fareType, // deselect if clicked again
    }));
  };

  const handleMobileSelect = (origIdx: number) => {
    setSelectedMobile(prev => prev === origIdx ? null : origIdx);
  };

  // Mobile card width and gap
  const mobileCardWidth = 80;
  const mobileGap = 12;
  const mobileSlideAmount = mobileCardWidth + mobileGap;

  return (
    <div className="w-full overflow-hidden relative">
      {/* Mobile View */}
      <div className="block md:hidden px-4 mx-auto relative max-w-full overflow-hidden">
        <div className="flex gap-3 overflow-hidden relative max-w-full">
          {/* Scrollable Cards */}
          <div
            className="flex overflow-hidden flex-1 relative scrollbar-hide"
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              setTouchEnd(e.changedTouches[0].clientX);
              handleTouchSwipe();
            }}
          >
            <motion.div
              className="flex gap-3"
              animate={{ x: -mobileCurrentIndex * mobileSlideAmount }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {extendedAirlines.map((airline, idx) => {
                const origIdx: number = idx % originalLength;
                const bestPrice: string = getBestPrice(airline);
                const isSelected: boolean = selectedMobile === origIdx;
                return (
                  <div
                    key={idx}
                    onClick={() => handleMobileSelect(origIdx)}
                  >
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      whileTap={{ scale: 0.95 }}
                      className={`shrink-0 w-20 h-20 shadow-sm rounded-md relative flex flex-col cursor-pointer border
                         ${isSelected ? 'bg-[#ffd1b8] ' : 'bg-white border-transparent'}
                         transition-colors duration-300 ease-in-out
                       `}
                    >
                      {/* Logo Section */}
                      <div className="flex-1 flex items-center justify-center relative px-2 pt-2">
                        {airline.sustainableImg && (
                          <div className="absolute top-1 right-1 w-6 h-6">
                            <Image
                              src={airline.sustainableImg}
                              width={16}
                              height={16}
                              alt="Sustainable"
                              className="object-contain"
                            />
                          </div>
                        )}

                        <Image
                          src={airline.logo}
                          width={32}
                          height={32}
                          alt={airline.name}
                          className="object-contain"
                        />
                      </div>

                      {/* Price */}
                      <div className="h-16 flex items-center justify-center">
                        <span className="text-sm font-bold">{bestPrice}</span>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

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
                    const value = airline[fareType as keyof Airline];
                    return (
                      <div
                        key={fareType}
                        onClick={() => value !== "-" && handleSelectFare(idx, fareType)}
                        className={`h-12 flex items-center justify-center border-b last:border-b-0 border-gray-300 cursor-pointer transition ${value === "-"
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
              className={`h-full px-3 rounded-md flex cursor-pointer items-center justify-center transition-opacity ${currentIndex === 0
                ? "bg-gray-200 opacity-50 cursor-not-allowed"
                : "bg-secondary hover:bg-primary"
                }`}
            >
              <ChevronLeft
                className={`w-8 h-8 ${currentIndex === 0 ? "text-gray-400" : "text-white"
                  }`}
                strokeWidth={3}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= airlines.length - (5 - 1)}
              className={`h-full px-3 rounded-md flex cursor-pointer items-center justify-center transition-opacity ${currentIndex >= airlines.length - (5 - 1)
                ? "bg-gray-200 opacity-50 cursor-not-allowed"
                : "bg-secondary hover:bg-primary"
                }`}
            >
              <ChevronRight
                className={`w-8 h-8 ${currentIndex >= airlines.length - (5 - 1)
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
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}