"use client"
import { Sunrise, Cloud, Sun, Moon } from "lucide-react";
import { useState } from "react";

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
    const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

    const toggleTime = (id: string) => {
        setSelectedTimes(prev =>
            prev.includes(id)
                ? prev.filter(t => t !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="w-full mx-auto p-4 ">
            <div className="space-y-4">
                {/* Header */}
                <div className="border-t  border-gray-200" />
                <div>
                    <h3 className="text-base font-semibold text-[#1c1c1c]">Stops</h3>
                    <p className="text-sm text-[#6E6E6E]">
                        Departure from New York (JFK)
                    </p>
                </div>
                {/* Time Options */}
                <div className="space-y-3">
                    {flightTimes.map(({ id, icon: Icon, label, time }) => (
                        <button
                            key={id}
                            onClick={() => toggleTime(id)}
                            className={`w-full flex items-center cursor-pointer justify-between px-3 py-3.5 sm:py-4 rounded-xl border-2 transition-all duration-200 ${selectedTimes.includes(id)
                                ? "border-secondary bg-orange-50 shadow-sm"
                                : "border-gray-300 bg-white hover:border-[#374151]"
                                }`}
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <Icon
                                    size={24}
                                    className={`shrink-0 ${selectedTimes.includes(id)
                                        ? "text-secondary"
                                        : "text-gray-400"
                                        }`}
                                    strokeWidth={2}
                                />
                                <span className={`text-sm  ${selectedTimes.includes(id)
                                    ? "text-gray-800"
                                    : "text-gray-800"
                                    }`}>
                                    {label}
                                </span>
                            </div>
                            <span className={`text-sm  ${selectedTimes.includes(id)
                                ? "text-gray-800"
                                : "text-gray-800"
                                }`}>
                                {time}
                            </span>
                        </button>
                    ))}
                </div>
                <p className="text-sm text-[#6E6E6E]">
                    Return to Tokyo  (HND)
                </p>
                <div className="space-y-3">
                    {flightTimes.map(({ id, icon: Icon, label, time }) => (
                        <button
                            key={id}
                            onClick={() => toggleTime(id)}
                            className={`w-full flex items-center cursor-pointer justify-between px-3 py-3.5 sm:py-4 rounded-xl border-2 transition-all duration-200 ${selectedTimes.includes(id)
                                ? "border-secondary bg-orange-50 shadow-sm"
                                : "border-gray-300 bg-white hover:border-[#374151]"
                                }`}
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <Icon
                                    size={24}
                                    className={`shrink-0 ${selectedTimes.includes(id)
                                        ? "text-secondary"
                                        : "text-gray-400"
                                        }`}
                                    strokeWidth={2}
                                />
                                <span className={`text-sm  ${selectedTimes.includes(id)
                                    ? "text-gray-800"
                                    : "text-gray-800"
                                    }`}>
                                    {label}
                                </span>
                            </div>
                            <span className={`text-sm  ${selectedTimes.includes(id)
                                ? "text-gray-800"
                                : "text-gray-800"
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