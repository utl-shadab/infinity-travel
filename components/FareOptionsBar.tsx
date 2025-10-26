"use client";
import React, { useState } from "react";
import FilterChips from "./FilterChips";
import SortDropdown from "./SortDropdown";
import FilterButton from "./small/FilterButton";
import FilterPopup from "./small/FilterPopup";

export default function FareOptionsBar() {
  const [selected, setSelected] = useState("Cheapest");
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const fares = [
    { label: "Recommended", price: "$711.11", bg: "bg-indigo-100 text-[#1c1c1c]" },
    { label: "Nearby Airport", price: "$1050.11", bg: "bg-green-100 text-[#1c1c1c]" },
    { label: "Alternate Dates", price: "$1050.11", bg: "bg-yellow-100 text-[#1c1c1c]" },
    { label: "Alternate Dates", price: "$1050.11", bg: "bg-gray-100 text-[#1c1c1c]" },
  ];

  return (
    <div className="w-full px-2 sm:px-3">
      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
        <div className="flex flex-wrap items-center gap-1.5 md:gap-2 flex-1">
          <FilterChips />
        </div>
        <div className="md:ml-auto relative shrink-0 flex justify-between items-center gap-2">
          <div className="w-1/2 md:w-full">
          <SortDropdown selected={selected} setSelected={setSelected} />
          </div>
           <div className="w-1/2 md:w-fit md:hidden">
          <FilterButton onClick={() => setIsFilterOpen(true)} />
            </div>
        </div>
      </div>

      {/* Fare Options */}
      <div className="w-full mb-3">
        <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-hide pb-2">
          {fares.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} px-3 py-2 sm:px-5 sm:py-3 cursor-pointer rounded-full text-xs sm:text-sm font-normal flex items-center whitespace-nowrap shrink-0 transition-colors hover:opacity-80`}
            >
              <span className="truncate">{item.label}</span>
              <span className="ml-1 font-semibold whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-[#6E6E6ECC] leading-relaxed">
        All the fares displayed are for Round Trip and are in USD{" "}
        <span className="underline cursor-pointer hover:text-secondary transition-colors">
          Read More
        </span>
      </p>

      {/* ✅ Popup — pass isOpen to match the interface */}
      <FilterPopup
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

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
