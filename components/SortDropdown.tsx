"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SortDropdownProps {
  selected: string;
  setSelected: (value: string) => void;
}

export default function SortDropdown({ selected, setSelected }: SortDropdownProps) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const sortOptions = ["Cheapest", "Fastest Route", "Earliest Takeoff", "Latest Takeoff"];

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync dropdown width with button width
  useEffect(() => {
    if (buttonRef.current) {
      setWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  // Update width on window resize
  useEffect(() => {
    const updateWidth = () => {
      if (buttonRef.current) {
        setWidth(buttonRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-full md:w-fit relative shrink-0 md:ml-auto" ref={dropdownRef}>
     <button
  ref={buttonRef}
  onClick={() => setOpen(!open)}
  className={`w-full border border-[#374151] cursor-pointer rounded-md px-5 py-3 flex items-center justify-between transition ${
    open ? "bg-[#ffd1b8] border-[#ffd1b8]" : "bg-[#ffd1b8] hover:bg-gray-50 "
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
    className={`w-4 h-4 text-black transition-transform ${open ? "rotate-180" : "rotate-0"}`}
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
            style={{ width: width ? `${width}px` : "auto" }}
            className="absolute  md:right-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-20"
          >
            {sortOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-orange-100 ${
                  option === selected ? "bg-orange-100 font-medium" : "text-gray-800 "
                }`}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
