"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

export default function Airlines() {
  const [showMore, setShowMore] = useState(false);
  
  const airlines = [
    { label: "Eva Airways", price: "$571.96" },
    { label: "Cathay Pacific", price: "$531.16" },
    { label: "Japan Airlines", price: "$531.16" },
    { label: "Air Canada", price: "$571.96" },
    { label: "American Airlines", price: "$531.16" },
    { label: "United Airlines", price: "$531.16" }
  ];

  const moreAirlines = [
    { label: "Delta Air Lines", price: "$545.80" },
    { label: "British Airways", price: "$598.50" },
    { label: "Lufthansa", price: "$562.30" },
    { label: "Emirates", price: "$612.00" },
    { label: "Singapore Airlines", price: "$589.40" },
    { label: "Qatar Airways", price: "$605.20" }
  ];

  return (
    <div className="w-full bg-white">
      <div className="px-3 space-y-6">
        {/* Header */}
        <h3 className="text-base font-semibold text-[#1c1c1c]">Airlines</h3>

        {/* Airlines List */}
        <div className="space-y-3">
          {airlines.map((item, idx) => (
            <motion.label
              key={`main-${idx}`}
              initial={{ opacity: 1 }}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center space-x-3">
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
          className="flex items-center gap-1 mt-2 font-semibold cursor-pointer text-sm text-gray-500 hover:text-gray-700 transition-colors"
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