"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import FlightTimeSelector from "../FlightTimeSelector";
import Duration from "../Duration";
import Airlines from "../Airlines";
import PriceSlider from "./PriceSlider";
import ConnectedAirport from "../ConnectedAirport";

interface FilterPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<string>("Stops");
    const tabs: string[] = ["Stops", "Time", "Duration", "Price", "Airlines", "Airports"];

    // Disable background scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const tabVariants = {
        enter: { opacity: 0, y: 20 },
        active: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="fixed inset-0 z-50 bg-white flex flex-col h-full"
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="flex justify-between items-center p-4 bg-[#1c1c1c] shrink-0"
                >
                    <h2 className="text-lg font-medium text-black"></h2>
                    <button onClick={onClose} className="p-1 rounded-full bg-white  hover:bg-gray-100 transition-colors">
                        <X size={24} className="text-[#1c1c1c]" />
                    </button>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    className="flex  bg-[#eeeeee]  shrink-0"
                >
                    <div className="flex overflow-x-auto items-center gap-3 py-3 px-3 scrollbar-hide flex-1">

                        <div className=" p-3 bg-white rounded-md">
                            <SlidersHorizontal
                                size={18}
                                className=" text-black transition-transform"

                            /> </div>
                        <p className="text-sm text-[#1c1c1c]">Filter</p>
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                whileTap={{ scale: 0.98 }}
                                whileHover={{ scale: 1.02 }}
                                className={`px-4 py-2.5 rounded-md text-sm font-semibold whitespace-nowrap shrink-0 transition-colors flex-1  ${activeTab === tab
                                    ? "bg-secondary text-white shadow-sm"
                                    : "text-[#1c1c1c]  bg-white"
                                    }`}
                            >
                                {tab}
                            </motion.button>
                        ))}
                    </div>

                </motion.div>

                {/* Tab Content */}
                <div className="flex-1 bg-gray-100 overflow-y-auto scrollbar-hide">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={tabVariants}
                            initial="enter"
                            animate="active"
                            exit="exit"
                            transition={{ duration: 0.2 }}
                            className="p-4 "
                        >
                            {activeTab === "Stops" && (<>
                                <div className="flex justify-between">
                                    <p className="text-lg text-[#1c1c1c] font-semibold">Stops</p>
                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        className=" text-sm font-medium text-secondary hover:text-gray-700 whitespace-nowrap transition-colors "
                                    >
                                        Reset All
                                    </motion.button>
                                </div>
                                <div className="h-px my-2 w-full bg-[#E8E8E8]"></div>
                                <div className="space-y-4 mt-3">
                                    {[
                                        { label: "Nonstop", price: "$571.96" },
                                        { label: "1 Stop", price: "$531.16" },
                                        { label: "1+ stop", price: "$0.00" }
                                    ].map((item, idx) => (
                                        <label
                                            key={idx}
                                            className="flex items-center justify-between cursor-pointer group"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <input
                                                    type="checkbox"
                                                    className="peer w-6 h-6 border-2 border-gray-300 rounded cursor-pointer appearance-none checked:bg-secondary checked:border-secondary transition-colors relative"
                                                />

                                                <svg
                                                    className="absolute ml-1 mt-0.5 w-4 h-4 pointer-events-none hidden peer-checked:block text-white"
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
                                                <span className="text-sm text-[#1C1C1C] peer-checked:text-base peer-checked:font-semibold transition-all duration-200">
                                                    {item.label}
                                                </span>
                                            </div>

                                            <span className="text-sm text-[#1C1C1C] peer-checked:text-base peer-checked:font-semibold transition-all duration-200">
                                                {item.price}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </>
                            )}
                            {activeTab === "Time" && <FlightTimeSelector/>}
                            {activeTab === "Duration" && <Duration/>}
                            {activeTab === "Price" && <PriceSlider/>}
                            {activeTab === "Airlines" && <Airlines />}
                            {activeTab === "Airports" && <ConnectedAirport/>}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Apply Button - Fixed at bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="p-4 border-t border-gray-200 bg-gray-100 shrink-0"
                >
                    <motion.button
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ scale: 1.02 }}
                        className="w-full py-3 bg-secondary text-white rounded-md font-medium text-sm transition-colors hover:bg-secondary/90 shadow-sm"
                        onClick={onClose}
                    >
                        Apply Filter
                    </motion.button>
                </motion.div>

                <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
            </motion.div>
        </AnimatePresence>
    );
};

export default FilterPopup;