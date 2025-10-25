"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterChips from "./FilterChips";

export default function FareOptionsBar() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Sort by");
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const fares = [
        { label: "Recommended", price: "$711.11", bg: "bg-indigo-100 text-[#1c1c1c]" },
        { label: "Nearby Airport", price: "$1050.11", bg: "bg-green-100 text-[#1c1c1c]" },
        { label: "Alternate Dates", price: "$1050.11", bg: "bg-yellow-100 text-[#1c1c1c]" },
        { label: "Alternate Dates", price: "$1050.11", bg: "bg-gray-100 text-[#1c1c1c]" },
    ];

    const sortOptions = ["Cheapest", "Fastest Route", "Earliest Takeoff", "Latest Takeoff"];

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className="w-full flex flex-wrap items-start md:items-center gap-4 px-3">
  {/* Filter Chips - always left */}
  <div className="flex flex-wrap items-center gap-2">
    <FilterChips />
  </div>

  {/* Sort Dropdown - always right, but wraps under if not enough space */}
  <div className="relative shrink-0 ml-auto" ref={dropdownRef}>
    <button
      onClick={() => setOpen(!open)}
      className={`border border-[#374151] rounded-md px-5 py-3 flex items-center justify-between w-52 transition ${
        open ? "bg-orange-100 border-orange-300" : "bg-white hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10m-6 6h6" />
        </svg>
        <span className="text-black text-base font-normal">{selected}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-4 h-4 text-black transition-transform ${
          open ? "rotate-180" : "rotate-0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-20"
        >
          {sortOptions.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-orange-100 ${
                option === selected ? "bg-orange-100 font-medium" : "text-gray-800"
              }`}
            >
              {option}
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  {/* Fare Options */}
  <div className="flex flex-nowrap gap-3 overflow-x-auto scrollbar-hide w-full">
    {fares.map((item, index) => (
      <div
        key={index}
        className={`${item.bg} px-5 py-3 cursor-pointer rounded-full text-sm font-normal flex items-center whitespace-nowrap shrink-0`}
      >
        {item.label} <span className="ml-1 font-semibold">{item.price}</span>
      </div>
    ))}
  </div>

  <p className="text-xs text-[#6E6E6ECC]">
    All the fares displayed are for Round Trip and are in USD{" "}
    <span className="underline cursor-pointer">Read More</span>
  </p>

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
