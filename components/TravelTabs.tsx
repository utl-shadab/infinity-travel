import { useState } from "react";
import { motion } from "framer-motion";
import {
    Plane,
    Building2,
    Ship,
    Users,
    Calendar,
    PlaneTakeoff,
    PlaneLanding,
    TreePalm,
    Search,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TravelTabs() {
    const [activeTab, setActiveTab] = useState("Flights");
    const [tripType, setTripType] = useState("round-trip");
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const [returnDate, setReturnDate] = useState<Date | null>(null);

    const tabs = [
        { icon: Plane, label: "Flights" },
        { icon: Building2, label: "Hotels" },
        { icon: Ship, label: "Cruises" },
        { icon: TreePalm, label: "Packages" },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-2 lg:px-0">
            {/* Tabs */}
            <div className="flex overflow-x-auto gap-4 mb-8 scrollbar-hide py-2">
                {tabs.map((item) => (
                    <motion.div
                        key={item.label}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setActiveTab(item.label)}
                        className="flex flex-col items-center gap-1 cursor-pointer "
                    >
                        <div
                            className={`w-12 h-12 md:h-18 md:w-18 rounded-md flex items-center justify-center transition-all backdrop-blur-md ${activeTab === item.label
                                ? "bg-secondary text-secondary-foreground shadow-md"
                                : "bg-primary text-primary-foreground hover:bg-secondary"
                                }`}
                        >
                            <item.icon size={22} className="sm:h-9 sm:w-9" strokeWidth={1.5} />
                        </div>
                        <span
                            className={`text-xs font-semibold ${activeTab === item.label ? "text-primary" : "text-foreground/70"
                                }`}
                        >
                            {item.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`transition-all ${activeTab === "Packages"
                    ? "p-0 bg-transparent shadow-none"
                    : "bg-white rounded-xl shadow-2xl p-4 md:p-8"
                    }`}
            >
                {activeTab === "Flights" && (
                    <>
                        {/* Trip Type Selection */}
                        <div className="flex gap-3 mb-6 flex-wrap ">
                            <button
                                onClick={() => setTripType("round-trip")}
                                className={`px-4 py-2 rounded-md text-sm font-semibold   transition-all ${tripType === "round-trip"
                                    ? "bg-secondary text-secondary-foreground shadow-md cursor-pointer"
                                    : "border border-foreground/20 text-foreground hover:bg-muted cursor-pointer"
                                    }`}
                            >
                                Round Trip
                            </button>
                            <button
                                onClick={() => setTripType("one-way")}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${tripType === "one-way"
                                    ? "bg-secondary text-secondary-foreground shadow-md cursor-pointer"
                                    : "border border-foreground/20 text-foreground hover:bg-muted cursor-pointer "
                                    }`}
                            >
                                One Way
                            </button>
                        </div>

                        {/* Flight Form */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                            <div>
                                <label className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wide">
                                    Origin
                                </label>
                                <div className="relative">
                                    <PlaneTakeoff
                                        className="absolute left-3 top-3.5 text-foreground/40"
                                        size={18}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Origin"
                                        className="w-full pl-10 pr-4 py-2.5 border-2 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wide">
                                    Destination
                                </label>
                                <div className="relative">
                                    <PlaneLanding
                                        className="absolute left-3 top-3.5  text-foreground/40"
                                        size={18}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Destination"
                                        className="w-full pl-10 pr-4 py-2.5 border-2 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wide">
                                    Departure Date
                                </label>
                                <div className="relative">
                                    <Calendar
                                        className="absolute left-3 top-3.5 text-foreground/40"
                                        size={18}
                                    />
                                    <DatePicker
                                        selected={departureDate}
                                        onChange={(date) => setDepartureDate(date)}
                                        placeholderText="Select"
                                        className="w-full pl-10 pr-4 py-2.5 border-2 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            {tripType === "round-trip" && (
                                <div>
                                    <label className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wide">
                                        Return Date
                                    </label>
                                    <div className="relative">
                                        <Calendar
                                            className="absolute left-3 top-3.5 text-foreground/40"
                                            size={18}
                                        />
                                        <DatePicker
                                            selected={returnDate}
                                            onChange={(date) => setReturnDate(date)}
                                            placeholderText="Select"
                                            className="w-full pl-10 pr-4 py-2.5 border-2 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 font-medium text-sm"
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wide">
                                    Traveler, Cabin
                                </label>
                                <div className="relative">
                                    <Users
                                        className="absolute left-3 top-3.5 text-foreground/40"
                                        size={18}
                                    />
                                    <select className="w-full pl-10 pr-4 py-2.5 border-2 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 font-medium text-sm appearance-none bg-white">
                                        <option>1 Traveler Eco...</option>
                                        <option>2 Travelers</option>
                                        <option>3 Travelers</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button className="p-2 w-fit bg-secondary text-secondary-foreground cursor-pointer rounded-md font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center">
                                <Search size={18} className="text-center mr-2" />
                                Search Flight
                            </button>
                        </div>
                    </>
                )}

                {activeTab === "Hotels" && (
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <input
                                type="text"
                                placeholder="Add Origin"
                                className="border-2 p-3 rounded-md text-sm"
                            />
                            <DatePicker
                                placeholderText="Check In"
                                className="border-2 p-3 rounded-md w-full text-sm"
                                selected={departureDate}
                                onChange={(date) => setDepartureDate(date)}
                            />
                            <DatePicker
                                placeholderText="Check Out"
                                className="border-2 p-3 rounded-md w-full text-sm"
                                selected={returnDate}
                                onChange={(date) => setReturnDate(date)}
                            />
                            <input
                                type="text"
                                placeholder="1 Room, 2 Travelers"
                                className="border-2 p-3 rounded-md text-sm"
                            />
                        </div>

                        {/* Search Button aligned to the right */}
                        <div className="flex justify-end mt-4">
                            <button className="p-2 w-fit bg-secondary text-secondary-foreground cursor-pointer rounded-md font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center">
                                <Search size={18} className="text-center mr-2" />
                                Search Hotels
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === "Cruises" && (
                    <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Add Origin"
                            className="border-2 p-3 rounded-md text-sm"
                        />
                        <DatePicker
                            placeholderText="Start Date"
                            className="border-2 p-3 rounded-md w-full text-sm"
                            selected={departureDate}
                            onChange={(date) => setDepartureDate(date)}
                        />
                        <DatePicker
                            placeholderText="End Date"
                            className="border-2 p-3 rounded-md w-full text-sm"
                            selected={returnDate}
                            onChange={(date) => setReturnDate(date)}
                        />
                    </div>
                      <div className="flex justify-end mt-4">
                            <button className="p-2 w-fit bg-secondary text-secondary-foreground cursor-pointer rounded-md font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center">
                                <Search size={18} className="text-center mr-2" />
                                Search Flight
                            </button>
                        </div>
                        </>
                )}

                {activeTab === "Packages" && (
                    <div className="text-start">
                        <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-md font-bold hover:shadow-lg transition-all hover:scale-105">
                            Reserve Today
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
