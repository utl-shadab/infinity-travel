"use client";
import { Sunrise, Cloud, Sun, Moon, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flightTimes = [
    {
        id: "early-morning",
        icon: Sunrise,
        label: "Early Morning",
        time: "12 AM - 6 AM"
    },
    {
        id: "morning",
        icon: Cloud,
        label: "Morning",
        time: "6 AM - 12 PM"
    },
    {
        id: "afternoon",
        icon: Sun,
        label: "Afternoon",
        time: "12 PM - 6 PM"
    },
    {
        id: "evening",
        icon: Moon,
        label: "Evening",
        time: "6 PM - 12 AM"
    }
];

export default function FlightTimeSelector() {
    const [selectedDepartureTimes, setSelectedDepartureTimes] = useState<string[]>([]);
    const [selectedArrivalTimes, setSelectedArrivalTimes] = useState<string[]>([]);
    const [expandedDeparture, setExpandedDeparture] = useState(true);
    const [expandedArrival, setExpandedArrival] = useState(true);

    const toggleDepartureTime = (id: string) => {
        setSelectedDepartureTimes(prev =>
            prev.includes(id)
                ? prev.filter(t => t !== id)
                : [...prev, id]
        );
    };

    const toggleArrivalTime = (id: string) => {
        setSelectedArrivalTimes(prev =>
            prev.includes(id)
                ? prev.filter(t => t !== id)
                : [...prev, id]
        );
    };

    const resetAll = () => {
        setSelectedDepartureTimes([]);
        setSelectedArrivalTimes([]);
    };

    const Chevron = ({ expanded }: { expanded: boolean }) => (
        <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
        >
            <ChevronDown size={20} className="text-gray-400" />
        </motion.div>
    );

    return (
        <div className="w-full mx-auto md:p-4 space-y-4">
            {/* Header - Common for all devices */}
            <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold text-[#1c1c1c]">Flight Time</h3>
                <div className="md:hidden">
                    <button
                    onClick={resetAll}
                    className="w-full text-sm text-secondary font-medium py-2 hover:underline transition-colors"
                >
                    Reset All
                </button>
                </div>
            </div>

            {/* Mobile: Accordions */}
            <div className="block md:hidden">
                {/* Departure Accordion */}
                <div className=" rounded-xl overflow-hidden">
                    <button
                        onClick={() => setExpandedDeparture(!expandedDeparture)}
                        className="w-full flex items-center justify-between  py-3 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-[#1c1c1c]">Departure from New York (JFK)</span>
                        </div>
                        <Chevron expanded={expandedDeparture} />
                    </button>
                    <AnimatePresence>
                        {expandedDeparture && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className=" pb-4 space-y-3">
                                    {flightTimes.map(({ id, icon: Icon, label, time }) => (
                                        <button
                                            key={id}
                                            onClick={() => toggleDepartureTime(id)}
                                            className={`w-full flex items-center cursor-pointer justify-between px-3 py-3.5 rounded-lg border transition-all duration-200 ${selectedDepartureTimes.includes(id)
                                                ? "border-secondary bg-secondary/5 shadow-sm"
                                                : "border-gray-200 bg-white hover:border-gray-300"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon
                                                    size={20}
                                                    className={`shrink-0 ${selectedDepartureTimes.includes(id)
                                                        ? "text-secondary"
                                                        : "text-gray-400"
                                                        }`}
                                                    strokeWidth={2}
                                                />
                                                <span className={`text-sm ${selectedDepartureTimes.includes(id)
                                                    ? "text-[#1c1c1c]"
                                                    : "text-gray-600"
                                                    }`}>
                                                    {label}
                                                </span>
                                            </div>
                                            <span className={`text-sm ${selectedDepartureTimes.includes(id)
                                                ? "text-[#1c1c1c]"
                                                : "text-gray-600"
                                                }`}>
                                                {time}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Arrival Accordion */}
                <div className=" rounded-xl overflow-hidden">
                    <button
                        onClick={() => setExpandedArrival(!expandedArrival)}
                        className="w-full flex items-center justify-between  py-3 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-[#1c1c1c]">Arrival to Tokyo (HND)</span>
                        </div>
                        <Chevron expanded={expandedArrival} />
                    </button>
                    <AnimatePresence>
                        {expandedArrival && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className=" pb-4 space-y-3">
                                    {flightTimes.map(({ id, icon: Icon, label, time }) => (
                                        <button
                                            key={id}
                                            onClick={() => toggleArrivalTime(id)}
                                            className={`w-full flex items-center cursor-pointer justify-between px-3 py-3.5 rounded-lg border transition-all duration-200 ${selectedArrivalTimes.includes(id)
                                                ? "border-secondary bg-secondary/5 shadow-sm"
                                                : "border-gray-200 bg-white hover:border-gray-300"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon
                                                    size={20}
                                                    className={`shrink-0 ${selectedArrivalTimes.includes(id)
                                                        ? "text-secondary"
                                                        : "text-gray-400"
                                                        }`}
                                                    strokeWidth={2}
                                                />
                                                <span className={`text-sm ${selectedArrivalTimes.includes(id)
                                                    ? "text-[#1c1c1c]"
                                                    : "text-gray-600"
                                                    }`}>
                                                    {label}
                                                </span>
                                            </div>
                                            <span className={`text-sm ${selectedArrivalTimes.includes(id)
                                                ? "text-[#1c1c1c]"
                                                : "text-gray-600"
                                                }`}>
                                                {time}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

               
                
            </div>

            {/* Desktop: Full Expanded Layout */}
            <div className="hidden md:block space-y-4">
                <div>
                    <p className="text-sm text-[#6E6E6E]">
                        Departure from New York (JFK)
                    </p>
                </div>
                {/* Departure Time Options */}
                <div className="space-y-3">
                    {flightTimes.map(({ id, icon: Icon, label, time }) => (
                        <button
                            key={id}
                            onClick={() => toggleDepartureTime(id)}
                            className={`w-full flex items-center cursor-pointer justify-between px-3 py-4 rounded-xl border-2 transition-all duration-200 ${selectedDepartureTimes.includes(id)
                                ? "border-secondary bg-secondary/5 shadow-sm"
                                : "border-gray-300 bg-white hover:border-[#374151]"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <Icon
                                    size={24}
                                    className={`shrink-0 ${selectedDepartureTimes.includes(id)
                                        ? "text-secondary"
                                        : "text-gray-400"
                                        }`}
                                    strokeWidth={2}
                                />
                                <span className={`text-sm ${selectedDepartureTimes.includes(id)
                                    ? "text-[#1c1c1c]"
                                    : "text-gray-600"
                                    }`}>
                                    {label}
                                </span>
                            </div>
                            <span className={`text-sm ${selectedDepartureTimes.includes(id)
                                ? "text-[#1c1c1c]"
                                : "text-gray-600"
                                }`}>
                                {time}
                            </span>
                        </button>
                    ))}
                </div>
                <div>
                    <p className="text-sm text-[#6E6E6E]">
                        Arrival to Tokyo (HND)
                    </p>
                </div>
                {/* Arrival Time Options */}
                <div className="space-y-3">
                    {flightTimes.map(({ id, icon: Icon, label, time }) => (
                        <button
                            key={id}
                            onClick={() => toggleArrivalTime(id)}
                            className={`w-full flex items-center cursor-pointer justify-between px-3 py-4 rounded-xl border-2 transition-all duration-200 ${selectedArrivalTimes.includes(id)
                                ? "border-secondary bg-secondary/5 shadow-sm"
                                : "border-gray-300 bg-white hover:border-[#374151]"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <Icon
                                    size={24}
                                    className={`shrink-0 ${selectedArrivalTimes.includes(id)
                                        ? "text-secondary"
                                        : "text-gray-400"
                                        }`}
                                    strokeWidth={2}
                                />
                                <span className={`text-sm ${selectedArrivalTimes.includes(id)
                                    ? "text-[#1c1c1c]"
                                    : "text-gray-600"
                                    }`}>
                                    {label}
                                </span>
                            </div>
                            <span className={`text-sm ${selectedArrivalTimes.includes(id)
                                ? "text-[#1c1c1c]"
                                : "text-gray-600"
                                }`}>
                                {time}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}