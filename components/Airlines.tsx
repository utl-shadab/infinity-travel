"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, X } from 'lucide-react';

export default function Airlines() {
  const [showMore, setShowMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const allAirlines = [
    { label: "All Airlines", price: "$1,507.12" },
    { label: "Eva Airways", price: "$1,507.12" },
    { label: "Cathay Pacific", price: "$1,516.25" },
    { label: "Japan Airlines", price: "$1,689.86" },
    { label: "Air Canada", price: "$1,785.25" },
    { label: "American Airlines", price: "$1,769.93" },
    { label: "United Airlines", price: "$1,990.94" },
    { label: "All Nippon Airways", price: "$2,016.64" },
    { label: "Hawaiian Airlines", price: "$2,040.72" },
    { label: "Turkish Airlines", price: "$2,829.16" },
    { label: "Qatar Airways", price: "$2,520.08" },
    { label: "Lufthansa", price: "$3,542.4" }
  ];

  const filteredAirlines = allAirlines.filter(airline =>
    airline.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const airlines = filteredAirlines.slice(0, 6);
  const moreAirlines = filteredAirlines.slice(6);

  const handleClearSearch = () => setSearchTerm('');

  return (
    <div className="w-full bg-gray-100 md:bg-white">
      <div className="md:px-3 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center py-2 md:py-0">
          <h3 className="text-base font-semibold text-[#1c1c1c]">Airlines</h3>
          <button className="text-sm font-medium text-secondary hover:underline md:hidden">Reset All</button>
        </div>

        {/* Mobile: Search Bar */}
        <div className="block md:hidden   relative">
          <Search className="absolute bg-secondary p-2 rounded-md left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-white" />
          <input
            type="text"
            placeholder="Search airlines"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-13  py-3  bg-white rounded-md text-sm placeholder-gray-500 focus:outline-none focus:border-secondary"
          />
          {searchTerm && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Airlines List */}
        <div className="md:space-y-3 space-y-4">
          {airlines.map((item, idx) => (
            <motion.label
              key={`main-${idx}`}
              initial={{ opacity: 1 }}
              className="flex items-start justify-between cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <div className="relative inline-block">
                  <input 
                    type="checkbox" 
                    className="peer md:w-5 md:h-5 w-6 h-6 border-2 border-gray-300 rounded cursor-pointer appearance-none checked:bg-secondary checked:border-secondary transition-colors"
                  />
                 <svg 
                      className="absolute md:top-0.5 left-1 top-1 md:left-0.5  h-4 w-4 pointer-events-none hidden peer-checked:block text-white"
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <span className="text-sm text-[#1C1C1C]">{item.label}</span>
              </div>
              <span className="text-sm text-[#1C1C1C] ">{item.price}</span>
            </motion.label>
          ))}

          <AnimatePresence>
            {showMore && moreAirlines.map((item, idx) => (
              <motion.label
                key={`more-${idx}`}
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: idx * 0.05,
                  ease: "easeOut"
                }}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="relative inline-block">
                    <input 
                      type="checkbox" 
                      className="peer w-5 h-5 border-2 border-gray-300 rounded cursor-pointer appearance-none checked:bg-secondary checked:border-secondary transition-colors"
                    />
                   <svg 
                      className="absolute top-0.5 left-0.5 w-4 h-4 pointer-events-none hidden peer-checked:block text-white"
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm text-[#1C1C1C]">{item.label}</span>
                </div>
                <span className="text-sm text-[#1C1C1C]">{item.price}</span>
              </motion.label>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        <motion.button 
          onClick={() => setShowMore(!showMore)}
          className="md:flex items-center gap-1 mt-2 hidden   font-semibold cursor-pointer text-sm text-gray-500 hover:text-gray-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className='text-gray-500 '>{showMore ? 'Show Less' : 'Show More'}</span>
          <motion.div
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 font-semibold" strokeWidth={2} />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}