"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MobileBookingBar() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="lg:hidden">
      {/* ===== Fixed Bottom Bar ===== */}
      <div className="fixed bottom-0 left-0 w-full bg-[#FF6600] flex items-center justify-between px-4 py-3 z-50">
        {/* Price + Toggle */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center text-white font-bold text-lg"
        >
          <span>$711.11</span>
          {showDetails ? (
            <ChevronUp className="ml-1 w-5 h-5" />
          ) : (
            <ChevronDown className="ml-1 w-5 h-5" />
          )}
        </button>

        {/* Continue Button */}
        <button className="bg-black text-white font-semibold px-5 py-2 rounded-md">
          Continue to booking
        </button>
      </div>

      {/* ===== Price Summary Popup ===== */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-lg z-50"
          >
            <div className="p-4">
              <div className="w-16 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-3">Price summary</h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Traveler (1 Adult)</span>
                  <span className="font-semibold">$711.11</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Flight</span>
                  <span>$600.00</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Taxes & fees and charges</span>
                  <span>$111.11</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span>$711.11</span>
                </div>
              </div>

              <button
                onClick={() => setShowDetails(false)}
                className="mt-4 w-full bg-black text-white py-2 rounded-md font-medium"
              >
                Continue to booking
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
